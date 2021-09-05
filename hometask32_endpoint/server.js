import http from "http";
import fs, { readFileSync } from "fs";
import path from "path";
import Mustache from "mustache";
import queryString from "query-string";
import util from 'util';

const SERVER_PATH = path.dirname(process.argv[1]);
const PORT = 5000;

const PATH_TO_HOMEWORK_JSON = path.join(SERVER_PATH, 'template', 'homework.json');
const INDEX_PATH_TEMPLATE_HOMEWORKS = path.join(SERVER_PATH, 'template', 'homeworks.html');
const EDIT_PATH_TEMPLATE_HOMEWORKS = path.join(SERVER_PATH, 'template', 'edit-homework.html');
const ADD_PATH_TEMPLATE_HOMEWORKS = path.join(SERVER_PATH, 'template', 'add-hometask.html');
const DELETE_PATH_TEMPLATE_HOMEWORKS = path.join(SERVER_PATH, 'template', 'delete-hometask.html');
const DETAILS_PATH_TEMPLATE_HOMEWORKS = path.join(SERVER_PATH, 'template', 'hometask-details.html');
const HOMEWORKS = JSON.parse(fs.readFileSync(PATH_TO_HOMEWORK_JSON, 'utf8'));

HOMEWORKS.forEach(hw => {
  delete hw.hw_type;
  delete hw.createdAt;
});

function id() {
  let id = 0;
  return function () {
    return ++id;
  }
}
let hometaskID = id();

const READ_FILE_PROMISE = util.promisify(fs.readFile);
const WRITE_FILE_PROMISE = util.promisify(fs.writeFile);


const SERVER = http.createServer(async (req, res) => {
  const HOMEWORK_ID = req.url.split('/')[2];
  const HOMEWORK = HOMEWORKS.find(hw => hw._id === HOMEWORK_ID);
  const HOMEWORK_INDEX = HOMEWORKS.findIndex(hw => hw._id === HOMEWORK_ID);

  if (/^\/homework\/?$/.test(req.url)) {
    let template = await READ_FILE_PROMISE(INDEX_PATH_TEMPLATE_HOMEWORKS, 'utf-8');
    const OUTPUT = Mustache.render(template, { HOMEWORKS });
    res.end(OUTPUT);
  }

  //блок по домашке - пункт 1
  else if (/^\/add-hometask\/?$/.test(req.url)) {
    if (req.method === "POST") {
      let data = "";
      console.log(`Starting...`);
      req.on("data", (chunks) => {
        console.log(`Get data`);
        data += chunks;
      })
      req.on("end", () => {
        console.log('Finished');
        const PARSED = queryString.parse(data);
        PARSED._id = "123wer34345435safddfsdfgs34344";
        console.log(PARSED);
        HOMEWORKS.unshift(PARSED);
        fs.writeFile(PATH_TO_HOMEWORK_JSON, JSON.stringify(HOMEWORKS), "utf-8", (err) => {
          if (err) {
            res.statusCode = 400;
            res.end();
          }
          res.end("Succsess");
        });

      });
    } else {
      let template = await READ_FILE_PROMISE(ADD_PATH_TEMPLATE_HOMEWORKS, 'utf-8');
      const OUTPUT = Mustache.render(template, {
        author: {
          first_name: `Ivan`,
          last_name: `Ivanov`
        },
        title: ``,
        description: ``,
        time_terms: ``
      });
      res.end(OUTPUT);
    }
  }

  //блок по домашке - пункт 2
  else if (req.url.startsWith("/delete-hometask") && HOMEWORK_ID) {
    if (req.method === "POST") {
      HOMEWORKS.splice(HOMEWORK_INDEX, 1);
      fs.writeFile(PATH_TO_HOMEWORK_JSON, JSON.stringify(HOMEWORKS), "utf-8", (err) => {
        if (err) {
          res.statusCode = 400;
          res.end();
        }
        res.end("Succsess");
      });
    }

    let template = await READ_FILE_PROMISE(DELETE_PATH_TEMPLATE_HOMEWORKS, 'utf-8');
    const OUTPUT = Mustache.render(template, {
      _id: HOMEWORK._id,
      title: HOMEWORK.title,
      description: HOMEWORK.description,
      time_terms: HOMEWORK.time_terms
    });
    res.end(OUTPUT);
  }

  //блок по домашке - пункт 3
  else if (req.url.startsWith("/hometask-details") && HOMEWORK_ID) {
    let template = await READ_FILE_PROMISE(DETAILS_PATH_TEMPLATE_HOMEWORKS, 'utf-8');
    const OUTPUT = Mustache.render(template, {
      author: `${HOMEWORK.author.first_name} ${HOMEWORK.author.last_name}`,
      title: HOMEWORK.title,
      description: HOMEWORK.description,
      time_terms: `${new Date(HOMEWORK.time_terms).getDay()}.${new Date(HOMEWORK.time_terms).getMonth()}.${new Date(HOMEWORK.time_terms).getFullYear()}г.`
    });
    res.end(OUTPUT);
  }

  else if (req.url.includes('.html') || req.url.includes('.css') || req.url.includes('.png')) {
    try {
      const INDEX_PATH = path.join(SERVER_PATH, 'template', req.url);
      const FILE_CONTENT = await READ_FILE_PROMISE(INDEX_PATH);
      //console.log(`sending ${req.url} ${FILE_CONTENT.length} bytes`);
      res.end(FILE_CONTENT);
    } catch (err) {
      res.statusCode = 400;
      res.end(err);
    }
  }

  else if (req.url.startsWith("/edit-homework") && HOMEWORK_ID) {
    if (req.method === "POST") {
      let data = "";
      console.log(`Starting...`)
      req.on("data", (chunk) => {
        console.log(`Get data`)
        data += chunk;
      });
      req.on("end", () => {
        console.log('Finished');
        const PARSED = queryString.parse(data);
        console.log(PARSED);

        HOMEWORK.title = PARSED.title

        fs.writeFile(PATH_TO_HOMEWORK_JSON, JSON.stringify(HOMEWORKS), "utf-8", (err) => {
          if (err) {
            res.statusCode = 400;
            res.end();
          }

          fs.readFile(EDIT_PATH_TEMPLATE_HOMEWORKS, 'utf-8', (err, template) => {
            if (err) {
              res.statusCode = 400;
              res.end();
            } else {
              const OUTPUT = Mustache.render(template, {
                title: HOMEWORK.title,
                _id: HOMEWORK._id,
              });
              res.end(OUTPUT);
            }
          });
        });
      });
    } else {
      fs.readFile(EDIT_PATH_TEMPLATE_HOMEWORKS, 'utf-8', (err, template) => {
        if (err) {
          res.statusCode = 400;
          res.end();
        } else {
          const OUTPUT = Mustache.render(template, {
            title: HOMEWORK.title,
            _id: HOMEWORK._id
          });
          res.end(OUTPUT);
        }
      });
    }
  }

  else {
    res.statusCode = 404;
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log('Server is running ' + PORT);
});