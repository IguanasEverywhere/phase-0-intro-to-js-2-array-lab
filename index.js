// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newCatsArr = [...cats, name];
  return newCatsArr;
}

function prependCat(name) {
  let newCatsArr = [name, ...cats];
  return newCatsArr;
}

function removeLastCat() {
  let newCatsArr = cats.slice(0, cats.length - 1);
  return newCatsArr;
}

function removeFirstCat() {
  let newCatsArr = cats.slice(1, cats.length);
  return newCatsArr;
}