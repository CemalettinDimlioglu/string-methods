
//? object literal
const book111 = {
  title: "The Karamazov Brothers",
  author: "Dostoyevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book111);
console.log(book111.getSummary());
console.log(book111.hasOwnProperty("year"));
const book222 = {
  title: "The Lily of Valley",
  author: "Honore de Balzac",
  year: 1889,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book222.getSummary());


//? constructure 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
const book11 = new Book("kaşağı", "Ömer Seyfettin", 1920);
console.log(book11);
const book22 = new Book("Simyacı", "Paulo Coelho", 1990);
console.log(book22.getSummary());
console.log(Book.prototype);
console.log(book22.__proto__);
book11.price = 200;
book22.price = 300;
console.log(book11, book22);
console.log(new Date().getFullYear());

//? inheritance

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);
const mag11 = new Magazine("SRE", "Einstein", 1930, "Nov");
console.log(mag11);
console.log(mag11.getSummary());

//? classes inheritance

class Book1 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // ? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
    //  this.getTitle = function () {
    //    return this.title
    //  }
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
}
const book1 = new Book1("Kasagi", "Ömer Seyfettin", 1920);
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
const book2 = new Book1("Simyaci", "Pauolo Coelho", 1990);
console.log(book2.getSummary());
console.log(book2.getAge());
class Magazine1 extends Book1 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new Magazine1("Sre", "Einstein", 1930, "Nov");
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());







