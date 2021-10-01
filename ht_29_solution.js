//старый добрый формат домашечек ))
// 1
const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUser(array, index) {
  array.splice(index, 1)
}

removeUser(arr, 1)
console.group(`First task:\n`);// ['Vasya', 'Alexey']
console.log(arr);
console.groupEnd();

// 2 
class Candidate {
  constructor({ address } = person) {
    this.address = address;
  }
  state() {
    return this.address.split(", ").splice(2, 1).join();
  }
}

const candidate = new Candidate(candidateArr[0]);

console.group(`Second task:\n`);// Colorado
console.log(candidate.state());
console.groupEnd();

// 3 
function getCompanyNames() {
  return new Set(candidateArr.map(person => person.company))
}

console.group(`Third task:\n`);// ["EZENT", "JASPER" ... ]
console.log(getCompanyNames());
console.groupEnd();

// 4
function getUsersByYear(queryYear) {
  const userIdArray = [];
  candidateArr.forEach(item => {
    +item.registered.split("-")[0] === queryYear ? userIdArray.push(item["_id"]) : null
  })
  return userIdArray;
}
console.group(`Fourth task:\n`);// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]
console.log(getUsersByYear(2017));
console.groupEnd();

// 5 
function getCandidatesByUnreadMsg(amountOfMessage) {
  const resArr = candidateArr.filter(person => parseInt(person.greeting.match(/\d+/)) === amountOfMessage);
  return resArr.length ? resArr : 'We have not got such users.'
}
console.group(`Fifth task:\n`);// [Candidate, Candidate ...]
console.log(getCandidatesByUnreadMsg(9));
console.groupEnd();

// 6 
const searchCandidatesByPhoneNumber = phone => {
  return candidateArr.filter(person => person.phone.match(/\d+/g).join("").includes(phone.match(/\d+/g).join("")))
}
console.group(`Sixth task:\n`);
console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));
console.groupEnd();

// 7 
const getEyeColorMap = () => {
  const colorMap = new Map();

  candidateArr.forEach(item => colorMap.set(item.eyeColor, []));

  for (const [key, value] of colorMap.entries()) {
    candidateArr.forEach(item => {
      item.eyeColor === key ? value.push(item) : null;
    })
  }

  return colorMap;
}
console.group(`Seventh task:\n`);
console.log(getEyeColorMap());
console.groupEnd();