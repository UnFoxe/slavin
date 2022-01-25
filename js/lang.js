  var arrLang = {
      'en': {
        'official': 'Official site',
        'slavin': 'SLAVIN',
        'Home': 'Home',
        'About': 'About me',
        'Projects': 'My projects',
        'Gallery': 'Gallery',
        'Merch': 'Merch',
        'Contact': 'Contact',
        'few': "A few words about me",	
        'who-1': 'Vocalist, guitarist, producer, songwriter in projects: Zen City, mezhdusnami, Slavin, Chlenskiy Vznos. Session guitarist/vocalist, teacher.',
        'who-2': 'Multi-genre, or musical "bipolar"? ',
        'who-3': 'It`s incredibly difficult for me to stay within the same style even in one album of my own band. Therefore, I have several projects and you can, after listening to the songs, determine their styles and genres.',        
		'read': 'Read more',
        'hide': 'Hide',
        'project-1.1': 'The unconscious and the conscious are mixed between sleep and reality every time we fall asleep.',
        'project-1.2': 'In "betweendreams", personal experiences and memories are so mixed up - in nervous texts, fears, anxieties and joys - in hypnotic, deceptively light guitars. And at the same time, there is an obvious reversal from loud rock towards lyrical pop music with a electronic sound.',
        'follow': 'Follow:',
        'listen': 'Listen:',
        'menu': 'Menu', 
        'close': 'Close', 
        'Phone': 'Phone', 
        'shop': 'Visit shop', 
        'social': 'Social networks', 
        'Email': 'E-mail', 
        'reserved': ' All rights reserved.', 
		'project-2.1': 'Zen City - The Heavy guitar Riff got lyrical Vocals as partners. A classic action movie with shootouts of philosophical texts in Russian and English, full of special humor and the indispensable self-irony of the author.',
		'project-2.2': "Sometimes, the heroes are helped by a violin quartet, a children's choir, or a crowd of DJ's with acid synths.",
		'project-2.3': 'On stage, all this is realized in the format of a rock trio, sometimes a quartet and sounds uncompromisingly powerful!',
		'project-3.1': 'Slavin - instrumental compositions woven from threads of various genres - be it country, rock or funk.',
		'project-3.2': 'Despite the fact that this is a project, primarily by a guitarist, the phrase "guitar music" is intentionally absent here.',
		'project-3.3': 'The guitar here is not a goal, but a means, and Slavin is a set of colors with which the listener draws cartoons or pictures in his mind, serious or not.',
       
		
      },
      'ru': {
        'official': 'Официальный сайт',
        'slavin': 'SLAVIN',
        'Home': 'Главная',
        'About': 'Обо мне',
        'Projects': 'Мои проекты',
        'Gallery': 'Галерея',
        'Merch': 'Мерч',
        'Contact': 'Контакты',
        'reserved': ' Все права защищены.',
        'menu': 'Меню',
        'social': 'СОЦИАЛЬНЫЕ СЕТИ',
        'few': 'НЕСКОЛЬКО СЛОВ ОБО МНЕ',		
        'who-1': 'Вокалист, гитарист, продюсер, автор песен в проектах: Zen City, междуснами, Slavin, Членский Взнос. Сессионный гитарист/вокалист, преподаватель.',
        'who-2': 'Мультижанровость, или музыкальная "биполярка"? ',
        'who-3': 'Мне невероятно трудно оставаться в рамках одного стиля даже в одном альбоме собственной группы. Поэтому проектов у меня несколько и вы можете, послушав песни, определить их стили и жанры.',
		'read': 'Подробнее',
		'hide': 'Скрыть',
        'Phone': 'Телефон', 
        'Email': 'E-mail', 
        'project-1.1': 'Бессознательное с осознанным смешивается между сном и явью каждый раз, когда мы засыпаем.',
        'project-1.2': 'В "междуснами" так перемешаны личные переживания и воспоминания - в нервных текстах, страхи, тревоги и радости - в гипнотических, обманчиво мягких гитарах. И при этом очевиден разворот от громкого рока в сторону лиричной поп-музыки с холодным электронным звучанием.',
        'follow': 'СЛЕДИТЬ:',
        'listen': 'СЛУШАТЬ:',		
        'close': 'Свернуть',
        'shop': 'Посетить магазин',
		'project-2.1': 'ZEN CITY - ЗЛОЙ ГИТАРНЫЙ РИФФ ПОЛУЧИЛ В НАПАРНИКИ ЛИРИЧНЫЙ ВОКАЛ. КЛАССИЧЕСКИЙ БОЕВИК С ПЕРЕСТРЕЛКАМИ ФИЛОСОФСКИХ ТЕКСТОВ НА РУССКОМ И АНГЛИЙСКОМ, ПОЛНЫЙ ХАРАКТЕРНОГО ЮМОРА И НЕПРЕМЕННОЙ САМОИРОНИИ АВТОРА.',
		'project-2.2': 'НА ПОМОЩЬ ГЕРОЯМ ПРИХОДИТ ТО СКРИПИЧНЫЙ КВАРТЕТ, ТО ДЕТСКИЙ ХОР, ТО ТОЛПА ЭЛЕКТРОНЩИКОВ С ЯДОВИТЫМИ СИНТАМИ.',
		'project-2.3': 'НА СЦЕНЕ ВСЕ ЭТО РЕАЛИЗУЕТСЯ В ФОРМАТЕ РОК-ТРИО, ИНОГДА КВАРТЕТА И ЗВУЧИТ БЕСКОМПРОМИССНО МОЩНО!',
		'project-3.1': 'SLAVIN - ИНСТРУМЕНТАЛЬНЫЕ КОМПОЗИЦИИ, СПЛЕТЕННЫЕ ИЗ НИТЕЙ САМЫХ РАЗНЫХ ЖАНРОВ - БУДЬ-ТО КАНТРИ, РОК ИЛИ ФАНК.',
		'project-3.2': 'НЕСМОТРЯ НА ТО, ЧТО ЭТО ПРОЕКТ, В ПЕРВУЮ ОЧЕРЕДЬ ГИТАРИСТА, ЗДЕСЬ НАМЕРЕННО ОТСУТСТВУЕТ СЛОВОСОЧЕТАНИЕ "ГИТАРНАЯ МУЗЫКА".',
		'project-3.3': 'ГИТАРА ЗДЕСЬ НЕ ЦЕЛЬ, А СРЕДСТВО, А SLAVIN - ЭТО НАБОР КРАСОК, КОТОРЫМИ СЛУШАТЕЛЬ РИСУЕТ В СВОЕМ СОЗНАНИИ МУЛЬТФИЛЬМЫ ИЛИ КАРТИНКИ, СЕРЬЕЗНЫЕ И НЕ ОЧЕНЬ.',
       
      }
    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });
	
	$("#tabs").on("click", ".translate", function(){
	$("#tabs .translate").removeClass("active"); //удаляем класс во всех вкладках
	$(this).addClass("active"); //добавляем класс текущей (нажатой)
});