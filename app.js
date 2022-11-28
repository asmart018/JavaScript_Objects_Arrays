console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;

  //Array into forEach function calling a new function in arrow notation
  numbers.forEach((num) => {
    sum += num;
  });

  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "Marienbad My Love";
book.author = "Mark Leach";
book.pages = 10710;
book.readCount = 0;
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverse(sentence) {
  // Splits the sentence string into an array of strings. Splits at each space between the words.
  let words = sentence.split(" ");

  let flippedArray = [];
  words.forEach((element) => {
    // Splits each word in the array into an array of characters.
    let chars = element.split("");

    // Reverses the order of the characters and then makes them an array of one string.
    let flipped = chars.reverse().join("");

    // Makes an array of all the strings separated by a space.
    flippedArray = flippedArray.concat(flipped) + " ";
  });
  return flippedArray;
}
console.log(reverse(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function rows(data) {
  let row = data.split("\n");
  let headers = row[0].split(",");
  let result = [];

  for (let i = 1; i < row.length; i++) {
    let obj = {};
    let datum = row[i].split(",");

    datum.forEach((val, index) => {
      obj[headers[index]] = val;
    });
    result.push(obj);
  }
  return result;
}

console.log(rows(csvData));
