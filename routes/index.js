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

router.get('/lesson/scratch', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Програмирование для начинающих",
                description: "Scratch - это визуальная событийно-ориентированная среда программирования для обучения школьников младших и средних классов.",
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
            name:"Scratch",
            img:"/images/lesson/scratch.png",
            description:"Изучите основы програмирования, понятие об алгоритмах на уроках Scratch."
        }
    });

});


router.get('/lesson/python', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Начало работы с Python",
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
            name:"Python",
            img:"/images/lesson/python.svg",
            description:"Изучите, что значит хранить и обрабатывать данные, принимать решения с вашей программой и использовать возможности Python."
        }
    });

});

router.get('/lesson/java', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Начало работы с Java",
                description: "Python - быстрый и мощный язык, который также прост в использовании и чтении, что делает его отличным для начинающих и экспертов. На этих курсах вы познакомитесь с основами Python, помогая вам расширить свои знания и подготовить вас к созданию широкого спектра приложений Python.",
                lessons: [
                    {
                        img: "/images/lesson/java/1.svg",
                        name: "Что такое программа?",
                        description: "Изучаем основы Java",
                        connected: false,

                        lesson: [
                            {
                                text: "Попробуйте Java на вкус"
                            },
                            {
                                text: "Применение Java на деле"
                            },

                        ]

                    },
                    {
                        img: "/images/lesson/java/2.svg",
                        name: "Создание простой программы",
                        description: "Узнайте последние версии HTML и CSS.",
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
                        img: "/images/lesson/java/3.png",
                        name: "Математические выражения",
                        description: "Узнайте последние версии HTML и CSS.",
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
                        img: "/images/lesson/java/4.jpg",
                        name: "Типы данных, циклы",
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
                        img: "/images/lesson/java/5.svg",
                        name: "Функций, рекурсия",
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
                        img: "/images/lesson/java/6.png",
                        name: "Массивы",
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
                        img: "/images/lesson/java/7.png",
                        name: "Основы ООП",
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
                        img: "/images/lesson/java/8.svg",
                        name: "Работа с файлами",
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
            },
            {
                "title": "Изучение видов",
                description: "Простой CSS может получить вас довольно далеко, но как только вы начинаете серьезно относиться к разработке интерфейса, вам необходимо получить доступ к более продвинутым темам, таким как специфика, плавание, анимация и отзывчивый дизайн. Эти курсы научат вас некоторым передовым методам работы с CSS и созданию адаптивных веб-сайтов, чтобы ваши пользователи двигались в правильном направлении.",
                lessons: [
                    {
                        img: "/images/lesson/java/9.svg",
                        name: "Строки",
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
                        img: "/images/lesson/java/10.svg",
                        name: "Подключение библиотек",
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
                        img: "/images/lesson/java/11.svg",
                        name: "Списки, словари",
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
                        img: "/images/lesson/java/12.svg",
                        name: "Графика",
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
            name:"JAVA",
            img:"/images/lesson/java/java.svg",
            description:"Изучите, что значит хранить и обрабатывать данные, принимать решения с вашей программой и использовать возможности Python."
        }
    });

});

router.get('/lesson/algorithm', function (req, res, next) {
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

router.get('/lesson/design', function (req, res, next) {
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

router.get('/lesson/web-intensive', function (req, res, next) {
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

router.get('/lesson/individual', function (req, res, next) {
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
