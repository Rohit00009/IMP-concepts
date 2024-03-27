//here we done first up all define an array items
//then we define the variables for that array belown
//an then call a vriable from them and we got value from an array items .
const items = ["bananaaaa", "chocolate", "apple", "cheese"];

// const apple = items[2];
// const cheese = items[3];
// const apple = items[2];
// const cheese = items[3];
// const apple = items[2];
// const cheese = items[3];
//rather than repeating it again and again we will deconstruct
//const [banana, choco, apple, cheese] = items;  <- by these we get individual variable names for array
//let do some different
const [banana, choco, ...rest] = items; //<- by this we gave rest variable name as remaining array values and output should array of that reamaining values.
// above we used spread operator (...)

console.log(rest);

const newItems = [...items, "etc."]; //<- this will give us output with the values of items array as well as newItems array values.
console.log(newItems);

//lets do it with object
const user = {
  name: "ro",
  photos: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  age: 21,
  info: {
    skills: 7,
    power: 100,
  },
};
//const photos = user.photos; <- here we made a variable which holds photos from user object

const { photos, age } = user; //<- here we deconstructed some contents that we need from object user
console.log(photos);
//if we want skils from info then
//const skills = user.info.skills;
const { power } = user.info;
console.log(power);
