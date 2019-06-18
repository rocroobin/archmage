var cardsBlue = [
    {
        "name":"Бижутерия",
        "id": 64,
        "cost":"0",
        "description":"Если башня &lt; вражеской, то +2 к башне, иначе +1",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image64.jpg",
        effect(summoner, opponent) {
            if (summoner.tower > opponent.tower) {
                summoner.tower += 2;
            } else {
                summoner.tower += 1;
            }
            update();
        },
    },
    {
        "name":"Радуга",
        "id": 65,
        "cost":"0",
        "description":"+1 к башням всех, вы получаете 3 маны",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image65.jpg",
        effect(summoner, opponent) {
            summoner.tower += 1;
            opponent.tower += 1;
            summoner.mana += 3;
            update();
        },
    },
    {
        "name":"Кварц",
        "id": 35,
        "cost":"1",
        "description":"+1 к башне, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image35.jpg"
    },
    {
        "name":"Призма",
        "id": 39,
        "cost":"2",
        "description":"Сдать 1 карту, сбросить одну карту, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image39.jpg"
    },
    {
        "name":"Аметист",
        "id": 37,
        "cost":"2",
        "description":"+3 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image37.jpg",
        effect(summoner, opponent) {
            summoner.tower += 3;
            update();
        },
    },
    {
        "name":"Дымчатый кварц",
        "id": 36,
        "cost":"2",
        "description":"1 урона башне врага, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image36.jpg"
    },
    {
        "name":"Трещина",
        "id": 43,
        "cost":"2",
        "description":"3 урона башне врага\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image43.jpg",
        effect(summoner, opponent) {
            opponent.tower -= 3;
            update();
        },
    },
    {
        "name":"Взрыв силы",
        "id": 46,
        "cost":"3",
        "description":"5 урона собственной башне, <font class=\"red\">+2</font> монастырь",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image46.jpg",
        effect(summoner, opponent) {
            summoner.tower -= 5;
            summoner.monastery += 2;
            update();
        },
    },
    {
        "name":"Рубин",
        "id": 44,
        "cost":"3",
        "description":"+5 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image44.jpg",
        effect(summoner, opponent) {
            summoner.tower += 5;
            update();
        },
    },
    {
        "name":"Ткачи заклинаний",
        "id": 38,
        "cost":"3",
        "description":"<font class=\"red\">+1</font>   монастырь",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image38.jpg",
        effect(summoner, opponent) {
            summoner.monastery += 1;
            update();
        },
    },
    {
        "name":"Затмение",
        "id": 41,
        "cost":"4",
        "description":"+2 к башне, 2 ед. урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image41.jpg",
        effect(summoner, opponent) {
            summoner.tower += 2;
            opponent.tower -= 2;
            update();
        },
    },
    {
        "name":"Копье",
        "id": 45,
        "cost":"4",
        "description":"5 урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image45.jpg",
        effect(summoner, opponent) {
            opponent.tower -= 5;
            update();
        },
    },
    {
        "name":"Помощь в работе",
        "id": 56,
        "cost":"4",
        "description":"+7 к башне, вы теряете 10 руды\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image56.jpg",
        effect(summoner, opponent) {
            summoner.tower += 7;
            summoner.stone -= 10;
            update();
        },
    },
    {
        "name":"Вступление",
        "id": 66,
        "cost":"5",
        "description":"+4 к башне, вы теряете 3 отряда. 2 урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image66.jpg",
        effect(summoner, opponent) {
            summoner.tower += 4;
            opponent.tower -= 2;
            summoner.army -= 3;
            update();
        },
    },
    {
        "name":"Раздоры",
        "id": 54,
        "cost":"5",
        "description":"7 урона всем башням, <font class=\"blue\">-1</font> монастырь всех игроков",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image54.jpg",
        effect(summoner, opponent) {
            summoner.tower -= 7;
            opponent.tower -= 7;
            summoner.monastery -= 1;
            opponent.monastery -= 1;
            update();
        },
    },
    {
        "name":"Рудная жила",
        "id": 40,
        "cost":"5",
        "description":"+8 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image40.jpg",
        effect(summoner, opponent) {
            summoner.tower += 8;
            update();
        },
    },
    {
        "name":"Матрица",
        "id": 42,
        "cost":"6",
        "description":"<font class=\"red\">+1</font> монастырь, +3 к башне, +1 к башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image42.jpg",
        effect(summoner, opponent) {
            summoner.tower += 3;
            opponent.tower += 1;
            summoner.monastery += 1;
            update();
        },
    },
    {
        "name":"Эмельральд",
        "id": 49,
        "cost":"6",
        "description":"+8 к башне\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image49.jpg",
        effect(summoner, opponent) {
            summoner.tower += 8;
            update();
        },
    },
    {
        "name":"Гармония",
        "id": 47,
        "cost":"7",
        "description":"<font class=\"red\">+1</font> монастырь, +3 к башне, +3 к стене",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image47.jpg",
        effect(summoner, opponent) {
            summoner.tower += 3;
            summoner.wall += 3;
            summoner.monastery += 1;
            update();
        },
    },
    {
        "name":"Мягкий камень",
        "id": 52,
        "cost":"7",
        "description":"+5 к башне, враг теряет 6 руды",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image52.jpg",
        effect(summoner, opponent) {
            summoner.tower += 5;
            opponent.stone -= 6;
            update();
        },
    },
    {
        "name":"Паритет",
        "id": 48,
        "cost":"7",
        "description":"Монастырь всех становится равным монастырю сильнейшего\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image48.jpg",
        effect(summoner, opponent) {
            if (summoner.monastery > opponent.monastery) {
                opponent.monastery = summoner.monastery;
            } else {
                summoner.monastery = opponent.monastery;
            }
            update();
        },
    },
    {
        "name":"Дробление",
        "id": 51,
        "cost":"8",
        "description":"<font class=\"blue\">-1</font> монастырь, 9 урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image51.jpg",
        effect(summoner, opponent) {
            summoner.monastery -= 1;
            opponent.tower -= 9;
            update();
        },
    },
    {
        "name":"Отвердение",
        "id": 63,
        "cost":"8",
        "description":"+11 к башне, -6 к стене\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image63.jpg",
        effect(summoner, opponent) {
            summoner.tower += 11;
            summoner.wall -= 6;
            update();
        },
    },
    {
        "name":"Жемчуг мудрости",
        "id": 50,
        "cost":"9",
        "description":"+5 к башне, <font class=\"red\">+1</font> монастырь",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image50.jpg",
        effect(summoner, opponent) {
            summoner.tower += 5;
            summoner.monastery += 1;
            update();
        },
    },
    {
        "name":"Сапфир",
        "id": 53,
        "cost":"10",
        "description":"+11 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image53.jpg",
        effect(summoner, opponent) {
            summoner.tower += 11;
            update();
        },
    },
    {
        "name":"Молния",
        "id": 67,
        "cost":"11",
        "description":"Если башня &gt; стены врага, то 8 урона башне врага, иначе 8 урона всем",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image67.jpg",
        effect(summoner, opponent) {
            if (summoner.tower > opponent.wall) {
                opponent.tower -= 8;
            } else {
                summoner.tower -= 8;
                opponent.tower -= 8;
            }
            update();
        },
    },
    {
        "name":"Кристальный щит",
        "id": 57,
        "cost":"12",
        "description":"+8 к башне, +3 к стене",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image57.jpg",
        effect(summoner, opponent) {
            summoner.tower += 8;
            summoner.wall += 3;
            update();
        },
    },
    {
        "name":"Огненный рубин",
        "id": 55,
        "cost":"13",
        "description":"+6 к башне, 4 урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image55.jpg",
        effect(summoner, opponent) {
            summoner.tower += 6;
            opponent.tower -= 4;
            update();
        },
    },
    {
        "name":"Эмпатия",
        "id": 58,
        "cost":"14",
        "description":"+8 к башне, <font class=\"red\">+1</font> казарма",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image58.jpg",
        effect(summoner, opponent) {
            summoner.tower += 8;
            summoner.barrack += 1;
            update();
        },
    },
    {
        "name":"Монастырь",
        "id": 60,
        "cost":"15",
        "description":"+10 к башне, +5 к стене, вы получаете 5 отрядов\n  \t",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image60.jpg",
        effect(summoner, opponent) {
            summoner.tower += 10;
            summoner.wall += 5;
            summoner.army += 5;
            update();
        },
    },
    {
        "name":"Алмаз",
        "id": 59,
        "cost":"16",
        "description":"+15 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image59.jpg",
        effect(summoner, opponent) {
            summoner.tower += 15;
            update();
        },
    },
    {
        "name":"Сияющий камень",
        "id": 61,
        "cost":"17",
        "description":"+12 к башне, 6 урона врагу",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image61.jpg",
        effect(summoner, opponent) {
            summoner.tower += 12;
            if (opponent.wall < 6) {
                opponent.tower += (opponent.wall - 6);
            } else {
                opponent.wall -= 6;
            }
            update();
        },
    },
    {
        "name":"Медитация",
        "id": 68,
        "cost":"18",
        "description":"+13 к башне, +6 отрядов, +6 руды\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image68.jpg",
        effect(summoner, opponent) {
            summoner.tower += 13;
            summoner.army += 6;
            summoner.stone += 6;
            update();
        },
    },
    {
        "name":"Глаз дракона",
        "id": 62,
        "cost":"21",
        "description":"+20 к башне\n",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image62.jpg",
        effect(summoner, opponent) {
            summoner.tower += 20;
            update();
        },
    }
]