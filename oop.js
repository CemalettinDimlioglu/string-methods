
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
