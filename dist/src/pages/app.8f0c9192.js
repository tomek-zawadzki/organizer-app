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
const cardBtn = document.querySelectorAll(".menu__list--btn");
const cardNotes = document.querySelector(".notes");
const cardWallet = document.querySelector(".wallet");
const cardCalendar = document.querySelector(".calendar");
const cardTasks = document.querySelector(".tasks");
const cards = document.querySelectorAll(".card");
cardBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if (e.target.closest("li").classList.contains("item-tasks")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardTasks.classList.remove("hidden");
            cardTasks.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-notes")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardNotes.classList.remove("hidden");
            cardNotes.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-wallet")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardWallet.classList.remove("hidden");
            cardWallet.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-calendar")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardCalendar.classList.remove("hidden");
            cardCalendar.classList.add("active-card");
        }
    });
});
// TASK SECTION
const taskInput = document.querySelector(".tasks__input");
const taskBox = document.querySelector(".new-tasks-box");
const addTaskBtn = document.querySelector(".tasks__add-btn");
let taskPlace;
let newTask;
const addNewTask = ()=>{
    if (taskInput.value !== "") {
        taskPlace = document.createElement("div");
        taskPlace.classList.add("tasks__new-task");
        taskBox.appendChild(taskPlace);
        newTask = document.createElement("p");
        newTask.innerHTML = taskInput.value;
        newTask.classList.add("tasks__new-task--text");
        taskPlace.appendChild(newTask);
        createNewTaskBtns();
    } else console.log("wprowadz tekst");
    taskInput.value = "";
};
const createNewTaskBtns = ()=>{
    const btnsArea = document.createElement("div");
    btnsArea.classList.add("tasks__new-task--buttons");
    taskPlace.appendChild(btnsArea);
    const acceptBtn = document.createElement("button");
    acceptBtn.classList.add("tasks__new-task--accept-btn");
    acceptBtn.classList.add("tasks__new-task--btn");
    acceptBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    const editBtn = document.createElement("button");
    editBtn.classList.add("tasks__new-task--edit-btn");
    editBtn.classList.add("tasks__new-task--btn");
    editBtn.innerHTML = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("tasks__new-task--trash-btn");
    deleteBtn.classList.add("tasks__new-task--btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnsArea.appendChild(acceptBtn);
    btnsArea.appendChild(editBtn);
    btnsArea.appendChild(deleteBtn);
};
addTaskBtn.addEventListener("click", addNewTask);

//# sourceMappingURL=app.8f0c9192.js.map
