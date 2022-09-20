/* Game logic */
let itemToFind;
let items = [];
let emojis = ["🍎", "🍊", "🍇", "🍓", "🍒", "🍑", "🍍", "🥝", "🍅", "🍆", "🥑", "🥦", "🥒", "🌶", "🌽", "🥕", "🥔", "🍠", "🥐", "🍞", "🥖", "🥨", "🥯", "🥞", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "☕", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🥢", "🍽", "🍴", "🥄", "🔪"]

const createItem =() => {
    return [randomEmoji(), randomEmoji(), randomEmoji()]
}

const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// TODO add something to check that the items are unique
const createItems = () => {
    for (let i = 0; i < 9; i++) {
        items.push(createItem())
    }
}

const selectItemToFind = () => {
    itemToFind = items[Math.floor(Math.random() * items.length)];
}

const checkEquality = (item1, item2) => {
    return item1[0] === item2[0] && item1[1] === item2[1] && item1[2] === item2[2]
}

/* Playability */

const startGame = () => {
    createItems();
    selectItemToFind();
    console.log(itemToFind);
    console.log(items);
}

startGame()

/* UI */
// select the elements
const _itemToFindBtn = document.getElementById("item-to-find-btn");
const _itemToFind = document.getElementById("item-to-find");

const _item1Btn = document.getElementById("item-1-btn");
const _item2Btn = document.getElementById("item-2-btn");
const _item3Btn = document.getElementById("item-3-btn");
const _item4Btn = document.getElementById("item-4-btn");
const _item5Btn = document.getElementById("item-5-btn");
const _item6Btn = document.getElementById("item-6-btn");
const _item7Btn = document.getElementById("item-7-btn");
const _item8Btn = document.getElementById("item-8-btn");
const _item9Btn = document.getElementById("item-9-btn");

const _item1 = document.getElementById("item-1");
const _item2 = document.getElementById("item-2");
const _item3 = document.getElementById("item-3");
const _item4 = document.getElementById("item-4");
const _item5 = document.getElementById("item-5");
const _item6 = document.getElementById("item-6");
const _item7 = document.getElementById("item-7");
const _item8 = document.getElementById("item-8");
const _item9 = document.getElementById("item-9");

const _grid = document.getElementById("items-grid");

// populate the elements
_itemToFind.innerHTML = `${itemToFind[0]}  ${itemToFind[1]}  ${itemToFind[2]}`;
_item1.innerHTML = `${items[0][0]}  ${items[0][1]}  ${items[0][2]}`;
_item2.innerHTML = `${items[1][0]}  ${items[1][1]}  ${items[1][2]}`;
_item3.innerHTML = `${items[2][0]}  ${items[2][1]}  ${items[2][2]}`;
_item4.innerHTML = `${items[3][0]}  ${items[3][1]}  ${items[3][2]}`;
_item5.innerHTML = `${items[4][0]}  ${items[4][1]}  ${items[4][2]}`;
_item6.innerHTML = `${items[5][0]}  ${items[5][1]}  ${items[5][2]}`;
_item7.innerHTML = `${items[6][0]}  ${items[6][1]}  ${items[6][2]}`;
_item8.innerHTML = `${items[7][0]}  ${items[7][1]}  ${items[7][2]}`;
_item9.innerHTML = `${items[8][0]}  ${items[8][1]}  ${items[8][2]}`;

// add event listeners
_item1Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[0])) {
        _item1Btn.classList.add("green");
    }
    else {
        _item1Btn.classList.add("red");
    }
})

_item2Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[1])) {
        _item2Btn.classList.add("green");
    }
    else {
        _item2Btn.classList.add("red");
    }
})

_item3Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[2])) {
        _item3Btn.classList.add("green");
    }
    else {
        _item3Btn.classList.add("red");
    }
})

_item4Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[3])) {
        _item4Btn.classList.add("green");
    }
    else {
        _item4Btn.classList.add("red");
    }
})

_item5Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[4])) {
        _item5Btn.classList.add("green");
    }
    else {
        _item5Btn.classList.add("red");
    }
})

_item6Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[5])) {
        _item6Btn.classList.add("green");
    }
    else {
        _item6Btn.classList.add("red");
    }
})

_item7Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[6])) {
        _item7Btn.classList.add("green");
    }
    else {
        _item7Btn.classList.add("red");
    }
})

_item8Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[7])) {
        _item8Btn.classList.add("green");
    }
    else {
        _item8Btn.classList.add("red");
    }
})

_item9Btn.addEventListener("click", () => {
    if (checkEquality(itemToFind, items[8])) {
        _item9Btn.classList.add("green");
    }
    else {
        _item9Btn.classList.add("red");
    }
})



