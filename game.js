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

