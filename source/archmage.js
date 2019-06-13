var turn=null; //my and enemy

var my = {
    wall: 30, // здоровье стена
    tower: 30, // здоровье башнибашни
    mana: 5, // значение маны
    monastery: 2, // монастырь, прирост маны каждый ход
    stone: 5, // начальное значение камня
    mine: 2, // шахта, прирост камня каждый ход
    army: 5, // начальное значение отрядов
    barrack: 2, // казарма, прирост отрядов каждый ход
};

var enemy = {
    wall: 30, // здоровье стена
    tower: 30, // здоровье башнибашни
    mana: 5, // значение маны
    monastery: 2, // прирост маны каждый ход
    stone: 5, // начальное значение камня
    mine: 2, // прирост камня каждый ход
    army: 5, // начальное значение отрядов
    barrack: 2, // прирост отрядов каждый ход
};

function update() {
    // Моя стена
    const divMyWall = document.querySelector(".mywall .wall");
    divMyWall.innerHTML = my.wall;
    // Моя Башня
    const divMyTower = document.querySelector(".mytower .tower");
    divMyTower.innerHTML = my.tower;
    // Стена Врага
    const divEnemyWall = document.querySelector(".enemywall .wall");
    divEnemyWall.innerHTML = enemy.wall;
    // Башня Врага
    const divEnemyTower = document.querySelector(".enemytower .tower");
    divEnemyTower.innerHTML = enemy.tower;
    // Моя Руда
    const divMyStone = document.querySelector(".myredresource .stone");
    divMyStone.innerHTML = my.stone;
    // Моя Шахта
    const divMyMine = document.querySelector(".myredresource .mine");
    divMyMine.innerHTML = my.mine;
    // Руда Врага
    const divEnemyStone = document.querySelector(".enemyredresource .stone");
    divEnemyStone.innerHTML = enemy.stone;
    // Шахта Врага
    const divEnemyMine = document.querySelector(".enemyredresource .mine");
    divEnemyMine.innerHTML = enemy.mine;
    // Мои отряды
    const divMyArmy = document.querySelector(".mygreenresource .army");
    divMyArmy.innerHTML = my.army;
    // Моя Казарма
    const divMyBarrack = document.querySelector(".mygreenresource .barrack");
    divMyBarrack.innerHTML = my.barrack;
    // Отряды врага
    const divEnemyArmy = document.querySelector(".enemygreenresource .army");
    divEnemyArmy.innerHTML = enemy.army;
    // Казарма Врага
    const divEnemyBarrack = document.querySelector(".enemygreenresource .barrack");
    divEnemyBarrack.innerHTML = enemy.barrack;
    // Моя Мана
    const divMyMana = document.querySelector(".myblueresource .mana");
    divMyMana.innerHTML = my.mana;
    // Мой Монастырь
    const divMyMonastery = document.querySelector(".myblueresource .monastery");
    divMyMonastery.innerHTML = my.monastery;
    // Мана Врага
    const divEnemyMana = document.querySelector(".enemyblueresource .mana");
    divEnemyMana.innerHTML = enemy.mana;
    // Монастырь Врага
    const divEnemyMonastery = document.querySelector(".enemyblueresource .monastery");
    divEnemyMonastery.innerHTML = enemy.monastery;
}

function getNewCard(id) {
    // ищу данные карточки
    const cardData = cardsRed.find((element) => {
        console.log("ищу:", id, "проверяю:", element.id); 
        if (element.id === id) {
            console.log("нашел", element.id, element.name);
            return true;
        }
    });
    console.log("данные карточки", cardData);
    // создаю div для карточки и заполняю его
    const newCard = document.createElement('div');
    newCard.className = "card";
    const image = document.createElement("img");
    image.src = cardData.image;
    newCard.appendChild(image);
    // добавляю карточку в контейнер
    const container = document.querySelector(".container");
    container.appendChild(newCard);
}

function toggle() {
    const state=document.querySelector(".state");
    if (turn === "my") {
        turn = "enemy";
        state.innerHTML = "Ход Врага";
    } else {
        turn ="my";
        state.innerHTML = "Мой Ход";
    }
}

const state=document.querySelector(".state");
state.addEventListener("click", toggle);

toggle();
update();
setTimeout(() => getNewCard(69), 200);
setTimeout(() => getNewCard(83), 400);
setTimeout(() => getNewCard(87), 600);
setTimeout(() => getNewCard(70), 800);
setTimeout(() => getNewCard(71), 1000);
setTimeout(() => getNewCard(98), 1200);