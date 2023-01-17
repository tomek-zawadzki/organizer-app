import moment from "moment";

const menuBox = document.querySelector(".menu-close");
const menuItems = document.querySelectorAll(".menu__list--text");
const menuBtn = document.querySelector(".menu__title");

const openMenu = () => {
  menuBox.classList.toggle("menu");

  if (menuBox.classList.contains("menu-close")) {
    menuBox.classList.remove("menu-close");
  } else {
    menuBox.classList.add("menu-close");
  }

  menuItems.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

menuBtn.addEventListener("click", openMenu);

// QUOTE GENERATOR
const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");
const changeQuoteBtn = document.querySelector(".quotes__change-btn");

const changeQuote = (data) => {
  const random = Math.floor(Math.random() * data.length);
  quoteText.innerHTML = data[random].text;
  quoteAuthor.innerHTML = data[random].author;
};

const getQuote = async () => {
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

cardBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.closest("li").classList.contains("item-tasks")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardTasks.classList.remove("hidden");
      cardTasks.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-notes")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardNotes.classList.remove("hidden");
      cardNotes.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-wallet")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardWallet.classList.remove("hidden");
      cardWallet.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-calendar")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardCalendar.classList.remove("hidden");
      cardCalendar.classList.add("active-card");
    }
  });
});

// TASK SECTION
const taskInput = document.querySelector(".tasks__input");
const taskBox = document.querySelector(".new-tasks-box");
const addTaskBtn = document.querySelector(".tasks__add-btn");
const acceptEditWindowBtn = document.querySelector(".edit-btn__accept");
const closeEditWindowBtn = document.querySelector(".edit-btn__close");
let editWidnow = document.querySelector(".tasks__edit");
let editInput = document.querySelector(".tasks__edit--input");

let taskPlace;
let newTask;
let idNumber = 0;
let taskToEdit;

const addNewTask = () => {
  if (taskInput.value !== "") {
    idNumber++;
    taskPlace = document.createElement("div");
    taskPlace.classList.add("tasks__new-task");
    taskPlace.setAttribute("id", `id-task-${idNumber}`);
    taskBox.appendChild(taskPlace);
    newTask = document.createElement("p");
    newTask.innerHTML = taskInput.value;
    newTask.classList.add("tasks__new-task--text");
    taskPlace.appendChild(newTask);

    createNewTaskBtns();
  } else {
    console.log("wprowadz tekst");
  }

  taskInput.value = "";
};

const createNewTaskBtns = () => {
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

const deleteTask = (e) => {
  const taskToDelete = e.target.closest(".tasks__new-task");
  taskToDelete.remove();
};

const openEditWindow = (e) => {
  const oldTask = e.target.closest(".tasks__new-task").id;
  taskToEdit = document.getElementById(oldTask);
  editInput.value = taskToEdit.firstChild.textContent;
  editWidnow.style.display = "flex";
};

const actionClick = (e) => {
  if (e.target.classList.value !== "") {
    if (
      e.target
        .closest("button")
        .classList.contains("tasks__new-task--accept-btn")
    ) {
      e.target
        .closest("div")
        .parentElement.firstElementChild.classList.toggle("task-finished");
    } else if (
      e.target
        .closest("button")
        .classList.contains("tasks__new-task--trash-btn")
    ) {
      deleteTask(e);
    } else if (
      e.target.closest("button").classList.contains("tasks__new-task--edit-btn")
    ) {
      openEditWindow(e);
    }
  }
};

const changeTask = () => {
  taskToEdit.firstChild.textContent = editInput.value;
  editWidnow.style.display = "none";
  editInput.innerHTML = "";
};

const closeEditWindow = () => {
  editWidnow.style.display = "none";
};

addTaskBtn.addEventListener("click", addNewTask);
taskBox.addEventListener("click", actionClick);
acceptEditWindowBtn.addEventListener("click", changeTask);
closeEditWindowBtn.addEventListener("click", closeEditWindow);

// NOTES SECTION
const notesBox = document.querySelector(".new-notes-box");
const noteTitle = document.querySelector(".form__note-title");
const noteContent = document.querySelector(".form__textarea");
const addNoteBtn = document.querySelector(".form__accept-btn");
let notePlace;

const addNewNote = () => {
  if (noteTitle.value !== "") {
    idNumber++;
    notePlace = document.createElement("div");
    notePlace.classList.add("notes__new-note");
    notePlace.setAttribute("id", `id-note-${idNumber}`);
    notesBox.appendChild(notePlace);
    newNote = document.createElement("p");
    newNote.innerHTML = noteTitle.value;
    newNote.classList.add("notes__new-note--title");
    notePlace.appendChild(newNote);

    createNewNoteBtns();
  } else {
    console.log("wprowadz tekst");
  }

  noteTitle.value = "";
};

const createNewNoteBtns = () => {
  const btnsNoteArea = document.createElement("div");
  btnsNoteArea.classList.add("notes__new-note--buttons");
  notePlace.appendChild(btnsNoteArea);

  const editNoteBtn = document.createElement("button");
  editNoteBtn.classList.add("note__new-note--edit-btn");
  editNoteBtn.classList.add("note__new-note--btn");
  editNoteBtn.innerHTML = "edit";

  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList.add("note__new-note--trash-btn");
  deleteNoteBtn.classList.add("note__new-note--btn");
  deleteNoteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  btnsNoteArea.appendChild(editNoteBtn);
  btnsNoteArea.appendChild(deleteNoteBtn);
};

addNoteBtn.addEventListener("click", addNewNote);

// Today
const todayDate = document.querySelector(".today__date--day");
const todayDayName = document.querySelector(".today__date--day-name");
const temperature = document.querySelector(".weather__temp");
const sunset = document.querySelector(".sunset__text");
const sunrise = document.querySelector(".sunrise__text");
const weatherIcon = document.querySelector(".weather__img");
const weatherPressure = document.querySelector(".weather__pressure");
const weatherHumidity = document.querySelector(".weather__humidity");
const weatherBox = document.querySelector(".weather");

// let getDate = new Date().toDateString();
const getDate = moment().format("DD.MM.YYYY");
const getDay = moment().format("dddd");

todayDate.textContent = getDate;
todayDayName.textContent = getDay;

const getWeatherData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0ac8d24292bec7ba2bf644e405cffefb`
    );
    const data = await res.json();
    temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)} ℃`;
    console.log(data);
    sunrise.textContent = `Sunrise: ${new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString("default")}`;
    sunset.textContent = `Sunset: ${new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString("default")}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherPressure.textContent = `${data.main.pressure} hPa`;
    weatherHumidity.textContent = `${data.main.humidity} %`;
    console.log(data.main);
  } catch (err) {
    console.error(err);
  }
};

const showWeather = () => {
  let latitude;
  let longitude;
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      function (position) {
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2);
        console.log(latitude, longitude);
        getWeatherData(latitude, longitude);
      },
      function () {
        alert("could not get your position");
      }
    );
};
showWeather();
