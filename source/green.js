var cardsGreen = [
    {
        "name":"Коровье бешенство",
        "id": 1,
        "cost":"0",
        "description":"Все игроки теряют по 6 отрядов",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image1.jpg",
        effect(summoner, opponent) {
            summoner.army -= 6;
            opponent.army -= 6;
            update();
        },
    },
    {
        "name":"Полнолуние",
        "id": 14,
        "cost":"0",
        "description":"<font class=\"red\">+1</font> казарма всем игрокам, вы получаете 3 отряда",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image14.jpg",
        effect(summoner, opponent) {
            summoner.barrack += 1;
            opponent.barrack += 1;
            summoner.army += 3;
            update();
        },
    },
    {
        "name":"Гоблины",
        "id": 3,
        "cost":"1",
        "description":"4 единицы урона. Вы теряете 3 маны",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image3.jpg",
        effect(summoner, opponent) {
            summoner.mana -= 3;
            if (opponent.wall < 4) {
                opponent.tower += (opponent.wall - 4);
            } else {
                opponent.wall -= 4;
            }
            update();
        },
    },
    {
        "name":"Фея",
        "id": 2,
        "cost":"1",
        "description":"2 единицы урона, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image2.jpg"
    },
    {
        "name":"Эльфы-скауты",
        "id": 5,
        "cost":"2",
        "description":"Сдать 1 карту, сбросить одну карту, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image5.jpg"
    },
    {
        "name":"Карлик",
        "id": 31,
        "cost":"2",
        "description":"3 урона, +1 мана",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image31.jpg",
        effect(summoner, opponent) {
            summoner.mana += 1;
            if (opponent.wall < 3) {
                opponent.tower += (opponent.wall - 3);
            } else {
                opponent.wall -= 3;
            }
            update();
        },
    },
    {
        "name":"Копьеносец",
        "id": 30,
        "cost":"2",
        "description":"Если стена больше, чем у врага, то 3 урона, иначе 2 урона\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image30.jpg"
    },
    {
        "name":"Армия гоблинов",
        "id": 6,
        "cost":"3",
        "description":"6 единиц урона. Вы получаете 3 единицы урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image6.jpg"
    },
    {
        "name":"Минотавр",
        "id": 4,
        "cost":"3",
        "description":"<font class=\"red\">+1</font> казарма",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image4.jpg"
    },
    {
        "name":"Орк",
        "id": 9,
        "cost":"3",
        "description":"5 урона\n  \t",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image9.jpg"
    },
    {
        "name":"Берсерк",
        "id": 32,
        "cost":"4",
        "description":"8 урона, 3 урона вашей башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image32.jpg"
    },
    {
        "name":"Гоблины-лучники",
        "id": 7,
        "cost":"4",
        "description":"3 урона башне врага. Вы получаете 1 ед. урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image7.jpg"
    },
    {
        "name":"Гномы",
        "id": 10,
        "cost":"5",
        "description":"4 урона, +3 к стене",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image10.jpg"
    },
    {
        "name":"Крушитель",
        "id": 16,
        "cost":"5",
        "description":"6 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image16.jpg"
    },
    {
        "name":"Черт",
        "id": 18,
        "cost":"5",
        "description":"6 урона, все игроки теряют по 5 руды, маны, отрядов\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image18.jpg"
    },
    {
        "name":"Бешеная овца",
        "id": 17,
        "cost":"6",
        "description":"6 урона, враг теряет 3 отряда",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image17.jpg"
    },
    {
        "name":"Маленькие змейки",
        "id": 11,
        "cost":"6",
        "description":"4 урона башне врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image11.jpg"
    },
    {
        "name":"Огр",
        "id": 15,
        "cost":"6",
        "description":"7 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image15.jpg"
    },
    {
        "name":"Призрачная фея",
        "id": 8,
        "cost":"6",
        "description":"2 урона башне врага, играем снова",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image8.jpg"
    },
    {
        "name":"Тролль-наставник",
        "id": 12,
        "cost":"7",
        "description":"<font class=\"red\">+2</font> к казарме\n  \t",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image12.jpg"
    },
    {
        "name":"Гремлин в башне",
        "id": 13,
        "cost":"8",
        "description":"2 урона, +4 к стене, +2 к башне",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image13.jpg"
    },
    {
        "name":"Жучара",
        "id": 19,
        "cost":"8",
        "description":"Если стена у врага =0, то 10 урона, иначе 6 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image19.jpg"
    },
    {
        "name":"Единорог",
        "id": 22,
        "cost":"9",
        "description":"Если монастырь больше, чем у врага, то 12 урона, иначе 8 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image22.jpg"
    },
    {
        "name":"Оборотень",
        "id": 20,
        "cost":"9",
        "description":"9 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image20.jpg"
    },
    {
        "name":"Эльфы-лучники",
        "id": 23,
        "cost":"10",
        "description":"Если стена больше, чем у врага, то 6 урона башне врага, иначе 6 урона\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image23.jpg"
    },
    {
        "name":"Едкое облако",
        "id": 21,
        "cost":"11",
        "description":"Если стена врага &gt; 10, то 10 урона, иначе 7 урона",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image21.jpg"
    },
    {
        "name":"Камнееды",
        "id": 25,
        "cost":"11",
        "description":"8 урона, <font class=\"blue\">-1</font> шахта врага",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image25.jpg"
    },
    {
        "name":"Вор",
        "id": 26,
        "cost":"12",
        "description":"Враг теряет 10 маны, 5 руды. Вы получаете   половину от этого",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image26.jpg"
    },
    {
        "name":"Воитель",
        "id": 33,
        "cost":"13",
        "description":"13 урона, вы теряете 3 маны",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image33.jpg"
    },
    {
        "name":"Суккубы",
        "id": 24,
        "cost":"14",
        "description":"5 урона башне врага, враг теряет 8 отрядов",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image24.jpg"
    },
    {
        "name":"Каменный гигант",
        "id": 27,
        "cost":"15",
        "description":"10 урона, +4 к стене",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image27.jpg"
    },
    {
        "name":"Вампир",
        "id": 28,
        "cost":"17",
        "description":"10 урона, враг теряет 5 отрядов, <font class=\"blue\">-1</font> к его казарме\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image28.jpg"
    },
    {
        "name":"Всадник на пегасе",
        "id": 34,
        "cost":"18",
        "description":"12 урона башне врага\n    ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image34.jpg"
    },
    {
        "name":"Дракон",
        "id": 29,
        "cost":"25",
        "description":"20 урона, враг теряет 10 маны, <font class=\"blue\">-1</font> к его казарме\n",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image29.jpg"
    }
]