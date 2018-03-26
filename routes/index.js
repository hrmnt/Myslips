var express = require('express');
var router = express.Router();

//Telegram bot
// var TelegramBot = require('node-telegram-bot-api');
// var token = '519140551:AAEPG0N-K_X1EhvcOcaJKrTG8czFSnj6Am0';
// var bot = new TelegramBot(token, {polling: true});
// bot.on('message', function(msg) {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });


router.get('/',function (req,res) {
    res.redirect("/main");
})


/* GET home page. */
router.get('/main', function (req, res, next) {
    res.render('index', {title: 'Keynote | Школа программирования и дизайна'});
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
                                text: "Знакомство с видами браузеров"
                            },
                            {
                                text: "Изучение префиксов"
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
                                text: "Знакомство с медиа запросами"
                            },
                            {
                                text: "Изучение адаптивности"
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
                                text: "Знакомство с Bootstrap"
                            },
                            {
                                text: "Изучение Flexbox"
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
                                text: "Знакомство с анимацией"
                            },
                            {
                                text: "Использование @keyframe"
                            }
                        ]

                    }
                ]
            }
        ],
        lesson: {
            name: "HTML/CSS",
            bg: "/images/lesson/html-lesson.svg",
            img: "/images/lesson/html.svg",
            description: "Изучите основы дизайна, разработки в интерфейсе и создайте пользовательские впечатления, которые легко видны на глазах.",
            preName: "Воплоти свои мечты в реальность",
            preDesc: "На этом с HTML мы завершаем и переходим к языку CSS. CSS – это язык описания внешнего вида документа, написанного с использованием языка разметки. Название произошло от англ. Cascading Style Sheets — каскадные таблицы стилей."
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
                        img: "/images/lesson/scratch/1.png",
                        name: "Знакомство с Scratch",
                        description: "Привет Scratch",
                        connected: false,

                        lesson: [
                            {
                                text: "Что такое Scratch?"
                            },
                            {
                                text: "Установка Scratch"
                            },
                            {
                                text: "Знакомство с интерфейсом"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/scratch/2.png",
                        name: "Углубление в Scratch",
                        description: "Изучаем scratch более подробно",
                        connected: true,
                        lesson: [
                            {
                                text: "Понимание спрайтов"
                            },
                            {
                                text: "Работа с цветными блоками"
                            },
                            {
                                text: "Работа с шрифтами"
                            }
                        ]

                    }
                ]
            },
            {
                "title": "Изучение функции",
                description: "Так как програмиование это не только создание объектов а еще и функции и движения, мы начнем изучать основы функции как loop,for,if,else и т.д. ",
                lessons: [
                    {
                        img: "/images/lesson/scratch/3.svg",
                        name: "Простые функции",
                        description: "",
                        connected: false,

                        lesson: [
                            {
                                text: "Перемещение объектов"
                            },
                            {
                                text: "Простые циклы"
                            }, {
                                text: "Прятки"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/scratch/4.svg",
                        name: "Стилизация",
                        description: "Придаем вид нашему спрайту",
                        connected: false,
                        lesson: [
                            {
                                text: "Костюмы"
                            },
                            {
                                text: "События"
                            },
                            {
                                text: "Пр"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/scratch/5.svg",
                        name: "Сложные функции",
                        description: "",
                        connected: false,
                        lesson: [
                            {
                                text: "Циклы"
                            },
                            {
                                text: "Вычесления"
                            },
                            {
                                text: "Координаты"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/scratch/6.svg",
                        name: "Взаимодействие с функциями",
                        description: "Подключаем словари и понимаем как пользоватся",
                        connected: false,
                        lesson: [
                            {
                                text: "Кортежи и словари"
                            },
                            {
                                text: "Списки в переменных"
                            },
                            {
                                text: "Переменные и функции"
                            }
                        ]

                    }
                ]
            }
        ],
        lesson: {
            name: "Scratch",
            img: "/images/lesson/scratch.png",
            description: "Изучите основы програмирования, понятие об алгоритмах на уроках Scratch."
        }
    });

});

router.get('/lesson/python', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Начало работы с Python",
                description: "Python - быстрый и мощный язык, который также прост в использовании и чтении, что делает его отличным для начинающих и экспертов. На этих курсах вы познакомитесь с основами Python, помогая вам расширить свои знания и подготовить вас к созданию широкого спектра приложений Python.",
                lessons: [
                    {
                        img: "/images/lesson/java/1p.png",
                        name: "Что такое программа?",
                        description: "Изучаем основы Python",
                        connected: false,

                        lesson: [
                            {
                                text: "Знакомство с Python"
                            },
                            {
                                text: "Первая программа"
                            },
                            {
                                text: "Установка IDE"
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
                                text: "Введние в написание программ"
                            },
                            {
                                text: "Операции с числами, условные выражения"
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
                                text: "Условная конструкция if"
                            },
                            {
                                text: "Функции. Область видимости переменных"
                            },
                            {
                                text: "Модули. Обработка исключений"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/4.JPG",
                        name: "Списки, кортежи, словари",
                        description: "Узнайте последние версии HTML и CSS.",
                        connected: true,
                        lesson: [
                            {
                                text: "Списки"
                            },
                            {
                                text: "Кортежи"
                            },
                            {
                                text: "Словари"
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
                        img: "/images/lesson/java/8.svg",
                        name: "Работа с файлами",
                        description: "Понимание стилей",
                        connected: false,

                        lesson: [
                            {
                                text: "Работа с файлами"
                            },
                            {
                                text: "Текстовые файлы"
                            },
                            {
                                text: "JSON файлы"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/6.png",
                        name: "Строки",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "Работа со строками"
                            },
                            {
                                text: "Основные методы строк"
                            },
                            {
                                text: "Форматирование"
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
                                text: "Основные методы строк"
                            },
                            {
                                text: "Инкапсулляция"
                            },
                            {
                                text: "Наследование. Полиморфизм"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/layers.svg",
                        name: "Создание графического интерфейса ч1",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Tkinter.  Создание окна приложения"
                            },
                            {
                                text: "Изменение свойств элементов"
                            },
                            {
                                text: "Позиционирование элементов"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/layers.svg",
                        name: "Создание графического интерфейса ч2",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Поле ввода Entry"
                            },
                            {
                                text: "Checkbutton. RadioButton"
                            },
                            {
                                text: "Listbox. Меню."
                            }
                        ]

                    }
                ]
            },

            {
                "title": "PyAutoGui",
                description: "Это ссылка рецепты для использования PyAutoGUI. PyAutoGUI это кроссплатформенный модуль автоматизации GUI, работает на Python 2 и 3. Вы можете управлять мышью и клавиатурой, а также выполнять другие действия необходимые при автоматизации задач на компьютере.",
                lessons: [
                    {
                        img: "/images/lesson/java/9.svg",
                        name: "PyAutoGui ч1",
                        description: "Понимание стилей",
                        connected: false,

                        lesson: [
                            {
                                text: "Установка. Знакомство"
                            },
                            {
                                text: " General Functions"
                            },
                            {
                                text: " Mouse Control Functions"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/10.svg",
                        name: "PyAutoGui ч2. Начало проектов.",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "Keyboard control funcitons"
                            },
                            {
                                text: "Screenshot functions"
                            },
                            {
                                text: "Презентация готовых проектов Tkinter and PyAutoGUI "
                            }
                        ]

                    },

                ]
            }

        ],
        lesson: {
            name: "Python",
            bg: "/images/lesson/python-lesson.svg",
            img: "/images/lesson/java/python.svg",
            description: "Изучите, что значит хранить и обрабатывать данные, принимать решения с вашей программой и использовать возможности Python.",
            preName: "Стань частью нового поколения",
            preDesc: "21 век - век технологий. В будущем языки програмирования будут неотъемлемой частью жизни. Так начинай же учить его сейчас."
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
                                text: "Язык программирования JAVA"
                            },
                            {
                                text: "Первая программа"
                            },
                            {
                                text: "Установка NetBeans"
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
                                text: "Переменные и типы данных"
                            },
                            {
                                text: "Операции языка Java"
                            },
                            {
                                text: "Массивы.Условные конструкции"
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
                                text: "Циклы.Методы"
                            },
                            {
                                text: "Рекурсивные функций"
                            },
                            {
                                text: "Консольный ввод/вывод в Java"
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
                                text: "Классы и объекты"
                            },
                            {
                                text: "Модификаторы доступа и инкапсуляция"
                            },
                            {
                                text: "Статические члены и модификатор static"
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
                                text: "Наследование"
                            },
                            {
                                text: "Переопределение методов и ключевое слово super"
                            },

                        ]

                    },
                    {
                        img: "/images/lesson/java/6.png",
                        name: "Обработка исключений",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "Оператор throws"
                            },
                            {
                                text: "Классы исключений"
                            },
                            {
                                text: "Создание свойх классов исключений"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/7.png",
                        name: "Колекций",
                        description: "Раскрите секретов использования Flexbox для макетов веб-сайтов.",
                        connected: false,
                        lesson: [
                            {
                                text: "Введение в коллекции в Java"
                            },
                            {
                                text: "ArrayList, LinkedList, HashSet"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/8.svg",
                        name: "Работа со строками",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Работа со строками"
                            },
                            {
                                text: "Класс String"
                            },
                            {
                                text: "Основные операции со строками"
                            }
                        ]

                    }
                ]
            },
            {
                "title": "Java FX",
                description: "Простой CSS может получить вас довольно далеко, но как только вы начинаете серьезно относиться к разработке интерфейса, вам необходимо получить доступ к более продвинутым темам, таким как специфика, плавание, анимация и отзывчивый дизайн. Эти курсы научат вас некоторым передовым методам работы с CSS и созданию адаптивных веб-сайтов, чтобы ваши пользователи двигались в правильном направлении.",
                lessons: [
                    {
                        img: "/images/lesson/java/9.svg",
                        name: "Introduction to FX",
                        description: "Понимание стилей",
                        connected: false,

                        lesson: [
                            {
                                text: "Введение в JavaFX"
                            },
                            {
                                text: "JavaFX Basics"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/java/10.svg",
                        name: "Создание проекта",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "Анимация"
                            },
                            {
                                text: "Управляемая событиями"
                            },
                            {
                                text: "JavaFX UI Controls and Multimedia"
                            }
                        ]

                    },

                ]
            }
        ],
        lesson: {
            name: "JAVA",
            bg: "/images/lesson/python-lesson.svg",
            img: "/images/lesson/java/java.svg",
            description: "Изучите, что значит хранить и обрабатывать данные, принимать решения с вашей программой и использовать возможности Python.",
            preName: "Стань частью нового поколения",
            preDesc: "21 век - век технологий. В будущем языки програмирования будут неотъемлемой частью жизни. Так начинай же учить его сейчас."
        }
    });

});

router.get('/lesson/algorithm', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Введение в алгоритмы",
                description: "HTML и CSS - это языки, которые вы можете использовать для создания и стилей веб-сайтов. На этих курсах вы узнаете основы HTML и CSS, построите свой первый веб-сайт, а затем просмотрите некоторые из современных методов HTML5 и CSS3.",
                lessons: [
                    {
                        img: "/images/lesson/html-5.svg",
                        name: "Введение в алгоритмы",
                        description: "Изучаем как построить сайт HTML и CSS",
                        connected: false,

                        lesson: [
                            {
                                text: "Книги и алгоритмы"
                            },
                            {
                                text: "Вычисление чисел Фибоначчи"
                            },
                            {
                                text: "О-символика(сложность алгоритма)"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/html-icon.svg",
                        name: "Числовые алгоритмы",
                        description: "Узнайте последние версии HTML и CSS.",
                        connected: true,
                        lesson: [
                            {
                                text: "Проверка чисел на простоту. "
                            },
                            {
                                text: "Алгоритм Евклида"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/chrome.svg",
                        name: "Алгоритмы поискa",
                        description: "Понимание стилей",
                        connected: false,

                        lesson: [
                            {
                                text: "Последовательный поиск"
                            },
                            {
                                text: "Бинарный поиск"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/iphone.svg",
                        name: "Алгоритмы сортировки ч.1",
                        description: "Изучение мобильного, адаптивного и отзывчивого веб-дизайна",
                        connected: false,
                        lesson: [
                            {
                                text: "Сортировка вставками"
                            },
                            {
                                text: "Пузырьковая сортировка  "
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/grid.png",
                        name: "Алгоритмы сортировки ч.2",
                        description: "Раскрите секретов использования Flexbox для макетов веб-сайтов.",
                        connected: false,
                        lesson: [
                            {
                                text: "Сортировка слиянием  "
                            },
                            {
                                text: "Быстрая сортировка"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/animation.png",
                        name: "Графы",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Основные понятия теории графов"
                            },
                            {
                                text: "Структуры данных для представления графов"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/animation.png",
                        name: "Динамическое программирование",
                        description: "Сделайте свой сайт более привлекательным с помощью анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Одномерная динамика"
                            },
                            {
                                text: "Двумерная динамика на таблицах "
                            },
                            {
                                text: "Задача о рюкзаке "
                            },
                        ]

                    }
                ]
            },

        ],
        lesson: {
            name: "Algorithm",
            img: "/images/lesson/algorithm.svg",
            description: "Курс представляет собой изучение основных алгоритмов и структур данных, необходимых\n" +
            "                                программистам для качественного решения ежедневных задач."
        }
    });

});

router.get('/lesson/design', function (req, res, next) {
    res.render('lesson', {
        title: 'Keynote',
        sylabus: [
            {
                title: "Начало работы с дизайном",
                description: "Дизайн неотемлимая часть нашей жизни. При повседневной нашей жизни мы видим дизайн в каждом елементе нашей жизни. Так будь создателем этого дизайна",
                lessons: [
                    {
                        img: "/images/lesson/intro.png",
                        name: "Введение в дизайн",
                        description: "Изучаем как построить сайт HTML и CSS",
                        connected: false,

                        lesson: [
                            {
                                text: "Теория цветов"
                            },
                            {
                                text: "Adobe Photoshop"
                            },
                            {
                                text: "Sketch"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/graph.png",
                        name: "Графичиский дизайн",
                        description: "Узнайте последние версии HTML и CSS.",
                        connected: true,
                        lesson: [
                            {
                                text: "Теория дизайна"
                            },
                            {
                                text: "Типография"
                            },
                            {
                                text: "Создание стиля"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/uiux.svg",
                        name: "UI/UX",
                        description: "Построение интерфейса пользователя, изучение информационной архитектуры",
                        connected: true,

                        lesson: [
                            {
                                text: "Понятие о UI/UX"
                            },
                            {
                                text: "Понимание классов и разметки"
                            },
                            {
                                text: "Подключение шрифтов и форм"
                            }
                        ]

                    },
                ]
            },
            {
                "title": "Изучение видов",
                description: "Простой CSS может получить вас довольно далеко, но как только вы начинаете серьезно относиться к разработке интерфейса, вам необходимо получить доступ к более продвинутым темам, таким как специфика, плавание, анимация и отзывчивый дизайн. Эти курсы научат вас некоторым передовым методам работы с CSS и созданию адаптивных веб-сайтов, чтобы ваши пользователи двигались в правильном направлении.",
                lessons: [
                    {
                        img: "/images/lesson/autocad.png",
                        name: "AutoCAD",
                        description: "трёхмерная система автоматизированного проектирования и черчения, разработанная компанией Autodesk. ",
                        connected: false,
                        lesson: [
                            {
                                text: "Знакомство с интерфейсом"
                            },
                            {
                                text: "Создание объектов"
                            },
                            {
                                text: "Подготовка к распечатке"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/3ds-max.png",
                        name: "3ds Max",
                        description: "профессиональная программная система для создания и редактирования трёхмерной графики и анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Знакомство с интерфейсом"
                            },
                            {
                                text: "Создание объектов"
                            },
                            {
                                text: "Подготовка к распечатке"
                            }
                        ]

                    },
                    {
                        img: "/images/lesson/maya.png",
                        name: "Maya 3d",
                        description: "  предоставляет универсальный набор функциональных возможностей для компьютерной 3D-анимации.",
                        connected: false,
                        lesson: [
                            {
                                text: "Знакомство с интерфейсом"
                            },
                            {
                                text: "Создание объектов"
                            },
                            {
                                text: "Подготовка к распечатке"
                            }
                        ]

                    },
                    // {
                    //     img: "/images/lesson/grid.png",
                    //     name: "Понятия о верстке с помощью Flexbox",
                    //     description: "Раскрите секретов использования Flexbox для макетов веб-сайтов.",
                    //     connected: false,
                    //     lesson: [
                    //         {
                    //             text: "HTML5 элементы и формы"
                    //         },
                    //         {
                    //             text: "Шрифты и взаимодействия"
                    //         },
                    //         {
                    //             text: "Изучение методов стилизации CSS3"
                    //         }
                    //     ]
                    //
                    // }
                ]
            }
        ],
        lesson: {
            name: "Design",
            bg: "/images/lesson/design-lesson.svg",
            img: "/images/lesson/drawing.svg",
            description: "Изучите основы дизайна, разработки в интерфейсе и создайте пользовательские впечатления, которые легко видны на глазах.",
            preName: "Стань частью нового поколения",
            preDesc: "21 век - век технологий. В будущем языки програмирования будут неотъемлемой частью жизни. Так начинай же учить его сейчас."
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
        lesson: {
            name: "HTML/CSS",
            img: "/images/lesson/html.svg",
            description: "Изучите основы дизайна, разработки в интерфейсе и создайте пользовательские впечатления, которые легко видны на глазах."
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
        lesson: {
            name: "HTML/CSS",
            img: "/images/lesson/html.svg",
            description: "Изучите основы дизайна, разработки в интерфейсе и создайте пользовательские впечатления, которые легко видны на глазах."
        }
    });

});

module.exports = router;
