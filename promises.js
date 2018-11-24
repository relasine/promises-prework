const testnum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is higher than 10!`);
    } else {
      reject(`${num} is not higher than 10. Get with it, fam.`);
    }
  });
};

testnum(20)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    let check = false;
    words.forEach(word => {
      if (typeof word !== "string") {
        check = true;
      }
    });
    if (!check) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Those are not all words, dummy");
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    resolve(words.sort());
  });
};

const hereWeGo = array => {
  makeAllCaps(array)
    .then(response => sortWords(response))
    .then(sortedWords => console.log(sortedWords))
    .catch(error => console.log(error));
};
