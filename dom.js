console.log("***** SELECTORS *****");
document.title = ":heart: DOM";
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const myHeader = document.getElementById("header");
console.log(myHeader);
myHeader.style.color = "blue";
myHeader.style.backgroundColor = "yellow";
const button = document.getElementById("btn");
const textInput = document.getElementById("input");
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.padding = "0.7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.fontSize = "20px";
textInput.style.padding = "0.7rem";
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li");
console.log(list); //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
list[0].style.color = "magenta";
list[list.length - 1].style.color = "purple";
const header = document.getElementsByTagName("header");
console.log(header[0]);
console.log(list.item(3));
//! getElementsByTagName bize bir HTMLCollection(bir nevi dizi) dondurur.
//! Icerik degistirme (textContent, innerText, innerHTML)
// list[3].textContent = "REACT / VUE"
// list[3].innerText = "REACT / VUE / Swelte"
list[3].innerHTML = "REACT / VUE / Swelte / Angular";
console.log(list[2].textContent); //? Javascript - JS is an object-based language
//? textContent HTML elementinin tum yazi dugumlerini CSS veya HTML 'e bakmasizin verir.
console.log(list[2].innerText); //? innerText CSS parse islemi yaparak yazi elementi dondurur.
console.log(list[2].innerHTML); //? innerHTML tamamen HTML parse islemi yaparak elementlere ulasmamizi saglar
list[4].innerHTML += `<li><a class="link" href="https://www.clarusway.com">CW</a></li>`;
//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const itemList = document.getElementsByClassName("list");
console.log(itemList); //?HTMLCollection [section.item-list]
console.log(itemList);
//? Array.from() (HTMLCollection -> Array)
const itemListArr = Array.from(itemList);
console.log(...itemList);
itemListArr.forEach((x) => console.log(x));
//? SPREAD (HTMLCollection -> Array)
const itemListSpread = [...itemList];
console.log(itemListSpread);
itemListSpread.map((x) => console.log((x.style.color = "red")));
//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//? 1- queryselector() etiket secebilir.
const myLi = document.querySelector("li"); //? Tag
console.log(myLi);
myLi.style.color = "purple";
//? 2- queryselector() class secebilir.
const addItem = document.querySelector(".add-item");
console.log(addItem);
addItem.style.border = "3px solid grey";
//? 3- queryselector() id secebilir.
const addBtn = document.querySelector("#btn");
console.log(addBtn);
addBtn.style.cursor = "pointer";
//? 4- queryselector() ile CSS deki gibi secim yapilabilir.
const itemH2 = document.querySelector(".item-list h2");
console.log(itemH2);
const addBtnType = document.querySelector("input[type='button']");
console.log(addBtnType.value);
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const lists = document.querySelectorAll("ul li"); //? tagname
console.log(lists); //? Nodelist
lists.forEach((li) => console.log(li.innerText));
console.log(
  document.querySelectorAll("section.item-list ul li:nth-child(4)")[0].innerText
);
console.log(
  document.querySelector("section.item-list ul li:nth-child(4)").innerText
);
document.querySelector("section.item-list ul li:nth-child(4)").innerHTML =
  "<p>Paragraf</p>";


  //*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.
//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)
//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const list = document.querySelector("li")
console.log(list)
console.log(list.parentElement) //? ul
console.log(list.parentNode) // ? ul
console.log(list.parentNode.parentNode.parentNode) //?main
console.log(
  list.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    .parentNode
) //?null
//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer
console.log(list.closest("section")) //? item-list
console.log(list.closest("body").querySelector("#header h1"))
//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item")
console.log(addItem.children) //?HTMLCollection(3) [h2, input#input, input#btn, input: input#input, btn: input#btn]
addItem.children[0].style.color = "red" //? h2
console.log(addItem.parentNode.parentNode.children[0].children[0]) //? h1
const header = document.querySelector("header")
const h1 = header.firstElementChild
console.log(addItem.lastElementChild.value)
console.log(h1.firstChild) //? DOM SELECTORS (bir yazi elementinin icerisindeki yazi dugumunu verir)
//*3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling
const ul = document.querySelector("ul")
const lists = ul.children
console.log(lists)
const js = lists[2]
console.log(js.innerText) //? Javascript
const css = js.previousElementSibling
console.log(css.innerText) //? CSS
const django = js.nextElementSibling.nextElementSibling
console.log(django.innerHTML) //? Django



console.log("**** CREATE NODE ****");
const newPar = document.createElement("p");
// console.log(newPar);
const text = document.createTextNode("Bu bir p elementidir.");
// console.log(newPar);
// console.log(text);
newPar.appendChild(text);
console.log(newPar);
const hasan = document.querySelector(".item-list h2");
hasan.after(newPar);
//? id ,class
newPar.id = "par";
newPar.className = "white";

console.log("**** CREATE NODE ****");
//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p");
const text = document.createTextNode("Bu bir p elementidir.");
newPar.appendChild(text);
console.log(newPar);
const h2 = document.querySelector(".item-list h2");
h2.after(newPar);
// h2.before(newPar)
//?INPUT value
const myInput = document.getElementById("input"); //? element
console.log(myInput.value); //? degerini alir.
//? id ,class
newPar.id = "par";
newPar.className = "center red";
//? setAttribute
newPar.setAttribute("id", "para"); //? alternative
//? classList
newPar.classList.add("bg-tomato", "left", "blue");
newPar.classList.remove("left"); //? left classi silindi.
if (!newPar.classList.contains("blue")) {
  newPar.classList.add("blue");
} else {
  newPar.classList.add("orange");
}
//? toggle
newPar.classList.toggle("white"); //? white class'i yoksa ekler. Veya varsa kaldirir.
//? getAttribute()
console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("id"));
console.log(newPar.getAttribute("name")); //?null
console.log(myInput.getAttribute("name")); //? languages
console.log(myInput.getAttribute("type")); //? text
//? alternative
console.log(myInput.id);
console.log(newPar.className);
//? INNER HTML (Ciddi Guvenlik aciklari var)
const newDiv = document.createElement("div");
newDiv.id = "new-div";
document.getElementById("btn").after(newDiv);
newDiv.innerHTML += `<li id="go" class="red">Go</li>`;


//? EVENTS 

console.log("****** EVENTS *******");
//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("header h1");
const langInput = document.getElementById("input");
const buton = document.getElementById("btn");
h1.onmouseover = function () {
  h1.style.color = "red";
};
h1.onmouseout = () => {
  h1.style.color = "yellow";
};
buton.addEventListener("click", () => {
  console.log(langInput.value);
  langInput.value = "";
  langInput.focus();
});
langInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    buton.click();
    console.log(event);
  }
});

















