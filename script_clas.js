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
  }
}
