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
    if (painting !== Painting) throw "Not a painting";
    this.paintings.push(painting);
    this.paintings.sort((p1, p2) => {
      p2.price - p1.price;
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
    if (author !== Author) throw "Not an author";
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
