
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

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.
//JavaScript'te polimorfizm, farklı tipte nesnelerin aynı arayüzü veya metotları paylaşarak benzer şekilde davranmalarını sağlayan bir programlama kavramıdır. Bu, aynı işlevin farklı veri tipleri için farklı işlemler gerçekleştirmesine olanak tanır.
//Örneğin, bir "Shape" (şekil) sınıfı oluşturabiliriz ve bu sınıftan türetilen "Rectangle" (dikdörtgen) ve "Circle" (çember) sınıfları oluşturabiliriz. Her iki sınıf da "area" (alan) metoduna sahip olabilir. Ancak dikdörtgenin alanı uzunluk ve genişliğin çarpımı ile hesaplanırken, çemberin alanı yarıçapın karesinin pi sayısı ile çarpılmasıyla hesaplanır.
//Bu durumda, dikdörtgen ve çember nesnelerinin her ikisi de Shape sınıfının birer örneği olsa da, her biri "area" metodu farklı bir şekilde uygular. Bu, polimorfizmin bir örneğidir.
class Book3 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
  setPrice(price) {
    const taxRate = 1.1;
    this.price = Math.trunc(price.taxRate);
  }
}
class Magazine3 extends Book3 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
  //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
  setPrice(price, taxRate) {
    this.price = Math.trunc(price * taxRate);
  }
  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
  }
}
const mag1111 = new Magazine3("SRE", "Einstion", 1930, "Nov");
console.log(mag1111);
console.log(mag1111.getAge());
//?Overloaded Metot cagriliyor.
mag1111.setPrice(100, 1.2);
console.log(mag1111);
console.log(mag1111.getSummary());

//? sencron

/*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================
//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.
//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.
//* Senkron
//* ------------------------------------------------
const wait = (waitingTime) => {
  const starTime = new Date().getTime()
  while (new Date().getTime() < starTime + waitingTime) {}
}
console.log("hello")
// alert("hi") //? blocking code
console.time("myTimer")
wait(2000) //? blocking code
console.timeEnd("myTimer")
console.log("fs13")

//? asenkron

* Asenkron (setTimeout)
*------------------------------------------------
console.log("Timeout started")
setTimeout(() => {
  //? non-blocking code- asyn
  console.log("1 sec")
}, 1000)
console.log("Timeout finished")
setTimeout(() => {
  //? non-blocking code- asyn
  console.log("2 sec")
}, 1000)


/* Asenkron (setInterval, clearInterval)
//*------------------------------------------------
console.log("Timer started")
let counter = 0
let sec1 = setInterval(() => {
  console.log(++counter)
  if (counter > 3) {
    clearInterval(sec1)
    console.log("Timer stoped")
  }
}, 1000)

//*========================================
//*             3- FETCH API
//*========================================
//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.
//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
console.log("FETCH")
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res)
    //! Error Handling
    // if (res.status>= 200 && res.status <=299)
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status} `)
    }
    return res.json()
  })
  .then((data) => showGithubUsers(data))
  .catch((hata) => {
    console.log(hata)
    const userArticle = document.querySelector(".users")
    userArticle.innerHTML = `
     <h2 class="text-warning display-6">${hata}</h2>
    `
  })
const showGithubUsers = (users) => {
  console.log(users)
  const userArticle = document.querySelector(".users")
  users.forEach((user) => {
    //  console.log(user)
    userArticle.innerHTML += `
    <h2 class="h6 text-warning">${user.login}</h2>
    <img class="w-25 mb-4" src=${user.avatar_url} alt="" />`
  })
}
console.log("Bitti")







