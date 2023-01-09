const menuBox = document.querySelector(".menu-close");
const menuItems = document.querySelectorAll(".menu__list--text");
const menuBtn = document.querySelector(".menu__title");
const openMenu = ()=>{
    menuBox.classList.toggle("menu");
    if (menuBox.classList.contains("menu-close")) menuBox.classList.remove("menu-close");
    else menuBox.classList.add("menu-close");
    menuItems.forEach((item)=>{
        if (item.classList.contains("hidden")) item.classList.remove("hidden");
        else item.classList.add("hidden");
    });
};
menuBtn.addEventListener("click", openMenu);
// QUOTE GENERATOR
const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");
const changeQuoteBtn = document.querySelector(".quotes__change-btn");
const changeQuote = (data)=>{
    const random = Math.floor(Math.random() * data.length);
    quoteText.innerHTML = data[random].text;
    quoteAuthor.innerHTML = data[random].author;
};
const getQuote = async ()=>{
    try {
        const res = await fetch("https://type.fit/api/quotes");
        const json = await res.json();
        changeQuote(json);
    } catch (err) {
        console.error(err);
    }
};
getQuote();
changeQuoteBtn.addEventListener("click", getQuote);
// CHANGING MENU CARDS
const menuCardsBtn = document.querySelectorAll(".menu__list--item");
const cardBtn = document.querySelectorAll(".menu__list--btn");
console.log(menuCardsBtn);
console.log(cardBtn);
cardBtn.forEach((btn)=>{
    btn.addEventListener("click", console.log("ok"));
});

//# sourceMappingURL=app.8f0c9192.js.map
