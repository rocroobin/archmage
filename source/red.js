var cardsRed = [
    {
        "name":"Бракованная руда",
        "cost":"0",
        "description":"Все игроки теряют по 8 руды",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image69.jpg"
    },
    {
        "name":"Землетрясение",
        "cost":"0",
        "description":"<font class=\"blue\">-1</font> шахта всех игроков  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image83.jpg"
    },
    {
        "name":"Обвал рудника",
        "cost":"0",
        "description":"<font class=\"blue\">-1</font> шахта, +10 к стене, вы получаете 5 маны  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image87.jpg"
    },
    {
        "name":"Счастливая монетка",
        "cost":"0",
        "description":"+2 руды, +2 маны, играем снова\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image70.jpg"
    },
    {
        "name":"Благодатная почва",
        "cost":"1",
        "description":"+1 к стене, играем снова  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image71.jpg"
    },
    {
        "name":"Сад камней",
        "cost":"1",
        "description":"+1 к стене, +1 к башне, +2 отряда  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image98.jpg"
    },
    {
        "name":"Новшества",
        "cost":"2",
        "description":"<font class=\"red\">+1</font> к шахте всех игроков, вы получаете 4 маны  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image79.jpg"
    },
    {
        "name":"Обычная стена",
        "cost":"2",
        "description":"+3 к стене  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image78.jpg"
    },
    {
        "name":"Сверхурочные",
        "cost":"2",
        "description":"+5 к стене, вы теряте 6 маны\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image75.jpg"
    },
    {
        "name":"Большая стена",
        "cost":"3",
        "description":"+4 к стене  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image77.jpg"
    },
    {
        "name":"Фундамент",
        "cost":"3",
        "description":"Если стена = 0, то +6 к стене, иначе +3 к стене\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image80.jpg"
    },
    {
        "name":"Шахтёры",
        "cost":"3",
        "description":"<font class=\"red\">+1</font> шахта\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image72.jpg"
    },
    {
        "name":"Большая жила",
        "cost":"4",
        "description":"Если шахта меньше чем у врага, то шахта <font class=\"red\">+2</font>, иначе <font class=\"red\">+1</font>  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image73.jpg"
    },
    {
        "name":"Обвал",
        "cost":"4",
        "description":"<font class=\"blue\">-1</font> шахта врага ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image85.jpg"
    },
    {
        "name":"Кража технологий",
        "cost":"5",
        "description":"Если шахта меньше шахты врага, то шахта становится   равной вражеской  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image76.jpg"
    },
    {
        "name":"Усиленная стена",
        "cost":"5",
        "description":"+6 к стене\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image84.jpg"
    },
    {
        "name":"Грунтовые воды",
        "cost":"6",
        "description":"Игрок с меньшей стеной теряет 1 казарму и получает 2 урона к башне  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image99.jpg"
    },
    {
        "name":"Новое оборудование",
        "cost":"6",
        "description":"<font class=\"red\">+2</font> к шахте\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image86.jpg"
    },
    {
        "name":"Гномы-шахтеры",
        "cost":"7",
        "description":"+4 к стене, <font class=\"red\">+1</font> шахта  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image74.jpg"
    },
    {
        "name":"Рабский труд",
        "cost":"7",
        "description":"+9 к стене, вы теряете 5 отрядов  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image97.jpg"
    },
    {
        "name":"Толчки",
        "cost":"7",
        "description":"Все стены получают по 5 повреждений, играем снова\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image81.jpg"
    },
    {
        "name":"Великая стена",
        "cost":"8",
        "description":"+8 к стене  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image88.jpg"
    },
    {
        "name":"Секретная пещера",
        "cost":"8",
        "description":"<font class=\"red\">+1</font> монастырь, играем снова\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image82.jpg"
    },
    {
        "name":"Галереи",
        "cost":"9",
        "description":"+5 к стене, <font class=\"red\">+1</font> казарма",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image89.jpg"
    },
    {
        "name":"Магическая гора",
        "cost":"9",
        "description":"+7 к стене, +7 маны\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image90.jpg"
    },
    {
        "name":"Казармы",
        "cost":"10",
        "description":"+6 отрядов, +6 к стене. Если казарма &lt; вражеской, то <font class=\"red\">+1</font> казарма  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image100.jpg"
    },
    {
        "name":"Поющий уголь",
        "cost":"11",
        "description":"+6 к стене, +3 к башне\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image91.jpg"
    },
    {
        "name":"Бастион",
        "cost":"13",
        "description":"+12 к стене\n",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image92.jpg"
    },
    {
        "name":"Укрепления",
        "cost":"14",
        "description":"+7 к стене, 6 урона врагу\n",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image101.jpg"
    },
    {
        "name":"Новые успехи",
        "cost":"15",
        "description":"+8 к стене, +5 к башне\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image93.jpg"
    },
    {
        "name":"Величайшая стена",
        "cost":"16",
        "description":"+15 к стене",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image94.jpg"
    },
    {
        "name":"Сдвиг",
        "cost":"17",
        "description":"Ваша и вражеская стена меняются местами\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image102.jpg"
    },
    {
        "name":"Скаломёт",
        "cost":"18",
        "description":"+6 к стене, 10 единиц урона врагу\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image95.jpg"
    },
    {
        "name":"Сердце дракона",
        "cost":"24",
        "description":"+20 к стене, +8 к башне\n  ",
        "image":"http://www.witchhammer.ru/images/arcomage_new/image96.jpg"
    }
]
