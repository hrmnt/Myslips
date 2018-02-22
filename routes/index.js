var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Keynote'});
});
router.get('/lesson/html', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Начало работы с HTML и CSS",
                description: "HTML и CSS - это языки, которые вы можете использовать для создания и стилей веб-сайтов. На этих курсах вы узнаете основы HTML и CSS, построите свой первый веб-сайт, а затем просмотрите некоторые из современных методов HTML5 и CSS3.",
                lessons: [
                    {
                        img: "/images/lesson/html-5.svg",
                        name: "Изучение HTML/CSS",
                        description: "Изучаем как построить сайт HTML и CSS",
                        connected: false,

                        lesson: [
                            {
                                text: "Знакомство с HTML5 и CSS"
                            },
                            {
                                text: "Понимание классов и разметки"
                            },
                            {
                                text: "Подключение шрифтов и форм"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/html-icon.svg",
                        name: "Углубление в HTML/CSS",
                        description: "Узнайте последние версии HTML и CSS.",
                        connected: true,
                        lesson: [
                            {
                                text: "HTML5 элементы и формы"
                            },
                            {
                                text: "Шрифты и взаимодействия"
                            },
                            {
                                text: "Изучение методов стилизации CSS3"
                            }
                        ]

                    }
                ]
            },
            {
                "title": "Изучение видов",
                description: "Простой CSS может получить вас довольно далеко, но как только вы начинаете серьезно относиться к разработке интерфейса, вам необходимо получить доступ к более продвинутым темам, таким как специфика, плавание, анимация и отзывчивый дизайн. Эти курсы научат вас некоторым передовым методам работы с CSS и созданию адаптивных веб-сайтов, чтобы ваши пользователи двигались в правильном направлении.",
                lessons: [
                    {
                        img: "/images/lesson/chrome.svg",
                        name: "CSS кросбраузерная-верстка",
                        description: "Понимание стилей",
                        connected: false,

                        lesson: [
                            {
                                text: "Знакомство с HTML5 и CSS"
                            },
                            {
                                text: "Понимание классов и разметки"
                            },
                            {
                                text: "Подключение шрифтов и форм"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/iphone.svg",
                        name: "Мобильная адаптация",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "HTML5 элементы и формы"
                            },
                            {
                                text: "Шрифты и взаимодействия"
                            },
                            {
                                text: "Изучение методов стилизации CSS3"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/grid.png",
                        name: "Понятия о верстке с помощью Flexbox",
                        description: "Раскрите секретов использования Flexbox для макетов веб-сайтов.",
                        connected: false,
                        lesson: [
                            {
                                text: "HTML5 элементы и формы"
                            },
                            {
                                text: "Шрифты и взаимодействия"
                            },
                            {
                                text: "Изучение методов стилизации CSS3"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/animation.png",
                        name: "Путешествие в мир анимации",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "HTML5 элементы и формы"
                            },
                            {
                                text: "Шрифты и взаимодействия"
                            },
                            {
                                text: "Изучение методов стилизации CSS3"
                            }
                        ]

                    }
                ]
            }
        ],
        lesson:{
            name:"HTML/CSS",
            img:"/images/lesson/html.svg",
            description:"Изучите основы дизайна, разработки в интерфейсе и создайте пользовательские впечатления, которые легко видны на глазах."
        }
    });

});


module.exports = router;
