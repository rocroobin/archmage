var turn=null; //my and enemy

const cards = cardsRed.concat(cardsBlue, cardsGreen);
/*
var my = {
    _mana: 5,
    get mana() { return this._mana; },
    set mana(value) { 
      let newValue = value;
      if (newValue < 0 ) {
        newValue = 0;
      }
      this._mana = newValue;
      update();
    }
  } */

  /**
   * 
   * @param {Player} player 
   * @param {number} valueDamage 
   * функция урона
   */
function damage(player, valueDamage) {
    if (player.wall < valueDamage) {
        player.tower += (player.wall - valueDamage);
        player.wall = 0;
    } else {
        player.wall -= valueDamage;
    }
}

 /**
 * функция проверяет чтобы значение value было не меньше 0
 */

function guard(value) {
    let newValue = value;
    if (newValue < 0 ) {
        newValue = 0;
    }
    return newValue;
};

class Player {
    // здоровье стена
    _wall = 30;
    get wall() { return this._wall; }
    set wall(value) { 
        this._wall = guard(value);
        update();
    }

    // здоровье башнибашни
    _tower = 30;
    get tower() { return this._tower; }
    set tower(value) { 
        this._tower = guard(value);
        update();
    }

    _mana = 5; // значение маны
    get mana() { return this._mana; }
    set mana(value) { 
        this._mana = guard(value);
        update();
    }

    _monastery = 2; // монастырь, прирост маны каждый ход
    get monastery() { return this._monastery; }
    set monastery(value) { 
        this._monastery = guard(value);
        update();
    }

    _stone = 5; // начальное значение камня
    get stone() { return this._stone; }
    set stone(value) { 
        this._stone = guard(value);
        update();
    }

    _mine = 2; // шахта, прирост камня каждый ход
    get mine() { return this._mine; }
    set mine(value) { 
        this._mine = guard(value);
        update();
    }

    _army = 5; // начальное значение отрядов
    get army() { return this._army; }
    set army(value) { 
        this._army = guard(value);
        update();
    }

    _barrack = 2; // казарма, прирост отрядов каждый ход
    get barrack() { return this._barrack; }
    set barrack(value) { 
        this._barrack = guard(value);
        update();
    }
}

var my = new Player();

var enemy = new Player();

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

function getRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}

function renderNewCard(cardData) {
    
    console.log("данные карточки", cardData);
    // создаю div для карточки и заполняю его
    const newCard = document.createElement('div');
    newCard.className = "card";

    //добавляю название карточки
    const nameCard = document.createElement("string");
    nameCard.innerHTML = cardData.name;
    newCard.appendChild(nameCard);

    //добавляю картинку карточки
    const image = document.createElement("img");
    image.src = cardData.image;
    newCard.appendChild(image);

    //добавляю стоимость карточки
    const costCard = document.createElement("string");
    costCard.innerHTML = "<p>" + cardData.cost + "</p>";
    newCard.appendChild(costCard);

    //добавляю описание карточки
    const descriptionCard = document.createElement("string");
    descriptionCard.innerHTML = "<p>" + cardData.description + "</p>";
    newCard.appendChild(descriptionCard);

    // добавляю карточку в контейнер
    const container = document.querySelector(".container");
    container.appendChild(newCard);

    // функция применения эффекта к игроку/врагу
    /*function currentEffect() {
        cardData.effect(my, enemy);
    } */
    // стрелочная функция в альтелнативу выше закомментированной
    const currentEffect = () => {
        //debugger;
        if (cardData.effect) {
            cardData.effect(my, enemy);
        } else {
            alert("не найдено");
        }
    };
    // пытаюсь заставить карточку работать по своему сценарию
    newCard.addEventListener("click", currentEffect);
}

/**
 * задаю функцию хода врага (компьютера)
 */
function turnEnemy() {
    while(turn === "enemy") {
        const nextCard = getRandomCard();
        if (nextCard.effect) {
            nextCard.effect(enemy, my);
        } else {
            alert("карта не найдена во время хода врага");
        }
    }
} 

 /**
 * функция смены названия хода
 */

function toggle() {
    const state=document.querySelector(".state");
    if (turn === "my") {
        turn = "enemy";
        state.innerHTML = "Ход Врага";
        turnEnemy();
    } else {
        turn ="my";
        state.innerHTML = "Мой Ход";
    }
}

const state = document.querySelector(".state");
state.addEventListener("click", toggle);

toggle();
update();
setTimeout(() => renderNewCard(getRandomCard()), 200);
setTimeout(() => renderNewCard(getRandomCard()), 400);
setTimeout(() => renderNewCard(getRandomCard()), 600);
setTimeout(() => renderNewCard(getRandomCard()), 800);
setTimeout(() => renderNewCard(getRandomCard()), 1000);
setTimeout(() => renderNewCard(getRandomCard()), 1200);