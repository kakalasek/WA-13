/* Classes */
class Author {
  constructor(name, surname, date_of_birth) {
    this.name = name;
    this.surname = surname;
    this.date_of_birth = date_of_birth;
  }
}

class Painting {
  constructor(author, name, price, date_of_creation) {
    this.author = author;
    this.name = name;
    this.price = price;
    this.date_of_creation = date_of_creation;
  }
}

class Gallery {
  constructor() {
    this.paintings = [];
  }

  addPainting(painting) {
    if (!(painting instanceof Painting)) throw "Not a painting";
    this.paintings.push(painting);
    this.paintings.sort((p1, p2) => {
      return p2.price - p1.price;
    });
  }

  finalPrice() {
    let output = 0;
    this.paintings.forEach((element) => {
      output += element.price;
    });
    return output;
  }

  expensiveThree() {
    let output = [];
    for (let i = 0; i < 3; i++) {
      if (this.paintings[i] === undefined) break;
      output.push([this.paintings[i].author, this.paintings[i].price]);
    }
    return output;
  }

  allPaintingsFrom(author) {
    let output = [];
    if (!(author instanceof Author)) throw "Not an author";
    output[0] = author;
    output[1] = [];
    this.paintings.forEach((element) => {
      if (element.author === author) {
        output[1].push([element.name, element.price]);
      }
    });
    return output;
  }

  allPaintings() {
    let output = [];
  }
}

/* Form stuff */

/* ADD */
// Variables
const gallery = new Gallery();

const addForm = document.querySelector(".add-form");

const authorName = document.querySelector("#author-name");
const authorSurname = document.querySelector("#author-surname");
const authorDateOfBirth = document.querySelector("#author-date-of-birth");

const paintingName = document.querySelector("#painting-name");
const paintingPrice = document.querySelector("#painting-price");
const paintingDateOfCreation = document.querySelector(
  "#painting-date-of-creation"
);

const submit = document.querySelector("#add-to-gallery");

addForm.addEventListener("submit", (e) => e.preventDefault());

submit.addEventListener("click", () => {
  gallery.addPainting(
    new Painting(
      new Author(
        authorName.value,
        authorSurname.value,
        authorDateOfBirth.value
      ),
      paintingName.value,
      Number(paintingPrice.value),
      paintingDateOfCreation.value
    )
  );
});

/* The Rest */
const output = document.querySelector(".output");

/* FULL PRICE */
const fullPrice = document.querySelector("#full-price");
fullPrice.addEventListener("click", () => {
  output.textContent = "";
  output.textContent = gallery.finalPrice();
});

/* EXPENSIVE THREE */
const expensiveThree = document.querySelector("#expensive-three");

expensiveThree.addEventListener("click", () => {
  output.textContent = "";
  gallery.expensiveThree().forEach((element) => {
    output.textContent += `${element[0].name}: ${element[1]} `;
  });
});

/* GET BY AUTHOR */
const getByAuthor = document.querySelector("#get-paintings-by-author");
const getAuthorName = document.querySelector("#get-author-name");

/* GET ALL */

/* LOCALSTORAGE */

/* ADD TO STORAGE */
const storeItems = document.querySelector("#store-items");

storeItems.addEventListener("click", () => {
  let i = 0;
  gallery.paintings.forEach((element) => {
    localStorage.setItem(i++, JSON.stringify(element));
  });
});

/* DELETE ALL FROM STORAGE */
const deleteAllItems = document.querySelector("#delete-items");

deleteAllItems.addEventListener("click", localStorage.clear);
