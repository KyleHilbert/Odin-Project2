const getTheTitles = function (array) {
  //bookLength = books.length;
  //const newArray = [];

  //for (let i = 0; i < length; i++) {
  //newArray.push(books[i].title);
  //}

  //return newArray;

  return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
