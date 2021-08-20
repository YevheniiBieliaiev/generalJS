"use strict";
//1

const allThings = `кусок дерева, Ненужная скромность, Очки Элвиса,  ненужные сомнения, Цветное стекло, Амулет от артрита, "Лошадиные скачки",  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка`;

//мне вот этот вариант мне больше нравится )))
// let regexp = /ненужн/gmi;
// const needfulThings = allThings.split(",").filter(item => !item.match(regexp)).join(",");


//вот по задаче
const needfulThings = allThings
  .split(",")
  .filter(item => { if (!item.toLowerCase().trim().startsWith("ненужн")) { return item } })
  .join(",");
console.log(needfulThings);