// let arr =["js","react","C++","CSS"];

// arr.push("go");
// // alert (arr.length);

// for (let i=0;i<=15; i++){
//      console.log(i);
// }

//  let i=0
// while (i<=100){
//      console.log("i değeri:"+i);
//      i+=2;
// }
// function selamla (isim){
//      console.log("methaba"  +isim);
// }
// selamla("selahaddin")

// document.write("selam ve sevgiler <br>")
// document.write("selam ve sevgiler")
// console.log(document.location.host);
// console.log(window);


// // /*1     \'     '   Single quote        tek tırnak
// // //*2     \"     "   Double quote        çift tırnak
// // //*3      \\    \   Backslash            \ işareti koyar
// // //*4      \b        Backspace           geriye doğru bir karakter siler bazen konsolda tarayıcıdan dolayı ? görünür
// // //*5      \n        New Line            yeni satıra geçer
// // //*6       \t       Horizontal Tabulator bir tab boşluk bırakır
// // let mtn = 'Ali\'nin "evi" ve arabası\\ çok güzel.\b Ali\n okula\t gidiyor.';
// // console.log(mtn);
//ÖRNEK
//text-1 de verilen "hello world ifadesini tersten yazdırınız.//dlrow olleh"
// let text1 = "hello world";
// for (let i = text1.length - 1; i >= 0; i--) {
//   console.log(text1[i]);
//   console.log(" ");
// }
// //YANYANA ÇÖZÜM
// let ters = "";
// for (let i = text1.length - 1; i >= 0; i--) {
//   ters = ters + text1[i];
// }
// console.log(ters);

// let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// let sonuc = "";
// sonuc = text2.toLowerCase(); // tüm texti küçük harfe çevirir
// sonuc = text2.toUpperCase(); //tüm texti büyük harfe çevirir
// sonuc = text2.length; //textin uzunluğunu verir
// sonuc = text2.length - 1; //textin kaç indexli olduğunu verir
// sonuc = text2[0]; //L
// sonuc = text2[1];//o


//STRİNG METHODS
let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let sonuc = "";
sonuc = text2.toLowerCase(); // tüm texti küçük harfe çevirir
sonuc = text2.toUpperCase(); //tüm texti büyük harfe çevirir
sonuc = text2.length; //textin uzunluğunu verir
sonuc = text2.length - 1; //textin kaç indexli olduğunu verir
sonuc = text2[0]; //L
sonuc = text2[1]; //o
//------------------------------------------------------------------
sonuc = text2.slice(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.slice(10); // 10.indexten basla sona kadar kes ve al
sonuc = text2.slice(-4); //-4. indexten basla sona kadar kes ve al //lit.
sonuc = text2.slice(-4, -2); //-4. indexten basla -2 ye kadar kes ve al //li
//------------------------------------------------------------------
sonuc = text2.substring(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.substring(10); // 10.indexten basla sona kadar kes ve al
//--------------------------------------------------------------------
sonuc = text2.replace("Lorem", "Merhaba"); //Bulduğu ilk Lorem kelimesinin yerine Merhaba yazar
sonuc = text2.replaceAll("Lorem", "Merhaba"); //replaceAll() ise tüm kelimeleri değiştirir.
//--------------------------------------------------------------------
sonuc = text2.trim(); //metnin başında ve sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimEnd(); //metnin sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimStart(); //metnin başında boşluk varsa o boşluğu siler
//--------------------------------------------------------------------
sonuc = text2.charAt(0); //verilen indexteki harfi döndürür //L
//--------------------------------------------------------------------
sonuc = text2.split(""); // A string can be converted to an array with the split() method://tırnak içerisine verdiğim karaktere kadar eleman eleman böler ve dizi oluşturur
sonuc = text2.split("")[0];
//--------------------------------------------------------------------
text1 = "merhaba";
sonuc = text2.concat(text1); //iki stringi birleştirir
//--------------------------------------------------------------------
sonuc = text2.includes("Lorem"); //true // verilen kelimeyi içeriyor mu diye bakar
//--------------------------------------------------------------------
sonuc = text2.indexOf("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.
//--------------------------------------------------------------------
sonuc = text2.lastIndexOf("ipsum"); //soldan sağa tarar en son bulduğunun başladığı indexi verir. yoksa -1 döndürür.
//--------------------------------------------------------------------
sonuc = text2.search("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.
//--------------------------------------------------------------------
sonuc = text2.startsWith("Lorem"); //Lorem ile mi başlıyor true veya false döndürür.//true
//--------------------------------------------------------------------
sonuc = text2.endsWith("elit.");//elit. ile mi bitiyor true veya false döndürür.//true
console.log(sonuc);

 // SORULAR
let url = "https://www.google.com";
let str = "Lorem ipsum dolor sit amet";
//1-url kaç karakterlidir?
let sonuc1 = "";
sonuc1 = url.length;
//2-str kaç kelimeden oluşmaktadır?
sonuc1 = str.split(" ").length;
//3-url https ile mi başlıyor?
sonuc1 = url.startsWith("https");
if (sonuc1) {
  //   console.log("evet başlıyor");
}
//4-str içerisinde ipsum kelimesi var mı?
sonuc1 = str.includes("ipsum");
if (sonuc1) {
  console.log("evet var");
} else {
  console.log("hayır yok");
}
//5-url ve str değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//https://www.google.com/lorem-ipsum-dolor-sit-amet
str = str.toLowerCase().replaceAll(" ", "-");
sonuc1 = `${url}/${str}`;
console.log(sonuc1);
// 6- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh
function reverseString(metin3) {
  let str1 = "";
  for (let i = metin3.length - 1; i >= 0; i--) {
    str1 += metin3[i];
  }
  return str1;
}
console.log(reverseString("hello world"));
console.log(reverseString("ali"));
console.log(reverseString("veli"));
// // 7- Belirli bir string ifadenin terside aynı kelime ise buna palindrome kelime denir. Örn: NAZAN, KAZAK, TİRİT ..Girilen bir kelimenin palindrome olup olmadığını bulan fonksiyonu yazınız...
// function reverseString1(dz) {
//   let trs = "";
//   for (let i = dz.length - 1; i >= 0; i--) {
//     trs += dz[i];
//   }
//   return trs;
// }
// const isPalindrome = function (w) {
//   const reversed = reverseString1(w);
//   return reversed == w
//     ? `${w} bir palindrome texttir`
//     : `${w} bir palindrome text değildir`;
// };
// console.log(isPalindrome("nazan"));
// console.log(isPalindrome("ali"));
// console.log(isPalindrome("kazak"));


// //8-konsoldan girilen harf sayısının kaç tane olduğunu aşağıda verilen metinde bulan uygulamayı yazınız.
// let metin =
//   "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, omnis temporibus dignissimos officia adipisci sed quasi ratione dolorum neque cumque quia quibusdam ullam possimus. Magnam facilis tenetur, laudantium a dolorum explicabo, corporis deleniti aspernatur excepturi distinctio, voluptate est! Quibusdam, blanditiis?";
// // let harf = prompt("harfi giriniz");
// function harfBul(harf) {
//   let counter = 0;
//   for (let i = 0; i < metin.length; i++) {
//     if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) counter += 1;
//   }
//   return counter;
// }
// // console.log(harfBul(harf));
// // 9- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// // console.log(findVowels('hello world')) // output: eoo
// const sntc = "hello world";
// function findVowels(sntc) {
//   let vowels = "";
//   for (let i = 0; i < sntc.length; i++) {
//     if (
//       sntc[i] == "a" ||
//       sntc[i] == "e" ||
//       sntc[i] == "ı" ||
//       sntc[i] == "i" ||
//       sntc[i] == "o" ||
//       sntc[i] == "ö" ||
//       sntc[i] == "u" ||
//       sntc[i] == "ü"
//     ) {
//       vowels += sntc[i];
//     }
//   }
//   return vowels;
// }
// console.log(findVowels(sntc));
// console.log(findVowels("alex"));
// console.log(findVowels("mehmet"));
// console.log(findVowels("araba"));
// console.log(findVowels("ahmet"));

// const worker = {
//   name: "can",
//   surname:"canan",
//   age: "33",
//   languages: ["go", "JS", "react"],
//   salary :100000
// };
// console.log(worker);
// worker.newName = "Ahmet",
// worker.newSurname = "Atmaca",


// worker.languages.forEach((l)=>console.log(l));
// worker["languages"].forEach((l)=>console.log(l));
// console.log(worker);

// const person = worker;
// person.dob = 20000;
// console.log({person});
// console.log({worker});

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};
console.log(people);
console.log(people.person1.name);
console.log(people["person2"].name);

for(let p in people){
  console.log(p);
  console.log(people[p].name);
}


//? person 2 ad ve maaşı

console.log(people.person2.name);
console.log(people.person2.salary);

//? tüm maaşları yazdır

for(let s in people){
  console.log(people[s].salary);
  console.log(people[s].name);
}

//! object methods (3 türlü ulasım)
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));


// for(let k in Object.keys(people)){
//   console.log(k);
// }
Object.keys(people).forEach((p)=>console.log(p));
Object.values(people).forEach((p)=>console.log(p));

// Object.values(people).filter((p)=>p.job ==="developer").map((p))

//? job u developer olanları yazınız

const dobs =Object.values(people).filter((p)=>p.job === "developer")
// .map((p)=>p.dob);
console.log(dobs);


//?JSON => JavaScript Object Notation
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON
// console.log(team);
// console.log(team[1]);
//? team dizisine veri ekledik
team.push({ name: "Ahmet", surname: "yilmaz", job: "developer", age: 22 });
// console.log(team);
//ÖRNEKLER
//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));
//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const agesIncByOne = team.map((x) => x.age + 1);
console.log(agesIncByOne);

