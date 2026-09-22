"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CatalogItem {
  id: number;
  name: string;
  category: string;
  price: number;
  images: string[];
  inStock: boolean;
  description: string;
  features: string[];
  specifications: {
    brand: string;
    collection: string;
    style: string;
    room: string;
  };
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 1,
    name: "Ваза 'Баскет'",
    category: "decor",
    price: 120,
    images: ["/uploads/image_0_0.jpg"],
    inStock: true,
    description: "Сложная плетеная геометрия с объемным рельефом. Выразительный акцент для сухих букетов или как самостоятельная скульптурная форма.",
    features: [
      "Материал: Экологичный PLA-полимер",
      "Технология: Послойная 3D-печать",
      "Фактура: Плетеная параметрическая",
      "Влагостойкость: Для сухоцветов"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Organic Mesh",
      style: "Параметрический, Минимализм",
      room: "Гостиная, Прихожая, Кабинет"
    }
  },
  {
    id: 2,
    name: "Ваза 'Трансформер'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_1.jpg"],
    inStock: true,
    description: "Динамичные грани и строгие граненые грани создают игру светотени при любом угле обзора.",
    features: [
      "Материал: Биоразлагаемый пластик",
      "Матовая фактурная поверхность",
      "Устойчивое широкое основание",
      "Ручная постобработка"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Geometric",
      style: "Лофт, Минимализм",
      room: "Гостиная, Спальня"
    }
  },
  {
    id: 3,
    name: "Скульптура-ваза 'Сердце'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_2.jpg"],
    inStock: true,
    description: "Анатомически вдохновленный арт-объект с плавными линиями. Символичный и эффектный акцент для интерьера.",
    features: [
      "Материал: Органический полимер PLA",
      "Гладкая шелковистая текстура",
      "Устойчивая центровка",
      "Оригинальный подарок"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Sculpt",
      style: "Контемпорари, Авангард",
      room: "Спальня, Кабинет"
    }
  },
  {
    id: 4,
    name: "Ваза 'Сфера'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_3.jpg"],
    inStock: true,
    description: "Классическая округлая форма, переосмысленная через ритмичные горизонтальные слои печати.",
    features: [
      "Материал: Эко-пластик",
      "Сферическая гармоничная форма",
      "Равномерная плотность стенок",
      "Легкий уход"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Harmonic",
      style: "Скандинавский, Джапанди",
      room: "Гостиная, Столовая"
    }
  },
  {
    id: 5,
    name: "Ваза 'Буфо'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_4.jpg"],
    inStock: true,
    description: "Пышный бионический силуэт с мягкими волнообразными складками, создающий ощущение уюта и тепла.",
    features: [
      "Материал: PLA-полимер",
      "Мягкие волнистые грани",
      "Приятная тактильная поверхность",
      "Не выгорает на солнце"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Bionic",
      style: "Органический минимализм",
      room: "Спальня, Гостиная"
    }
  },
  {
    id: 6,
    name: "Ваза 'Спринг Классик'",
    category: "decor",
    price: 70,
    images: ["/uploads/image_0_5.jpg"],
    inStock: true,
    description: "Спиралевидный узор, напоминающий сжатую пружину в движении. Легкая и упругая визуальная ритмика.",
    features: [
      "Материал: Высокоточный PLA-пластик",
      "Спиральная закрученная геометрия",
      "Высокая прочность на излом",
      "Стойкость к ультрафиолету"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Dynamic",
      style: "Модерн, Минимализм",
      room: "Кабинет, Прихожая"
    }
  },
  {
    id: 7,
    name: "Ваза 'Витраж'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_6.jpg"],
    inStock: true,
    description: "Сетка из тонких полигональных ячеек, напоминающая витражные оконные переплеты в современном исполнении.",
    features: [
      "Материал: Экополимер",
      "Ажурная светопроницаемая фактура",
      "Небольшой вес при высокой жесткости",
      "Для монобукетов и ветвей"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Lattice",
      style: "Контемпорари, Арт-деко",
      room: "Гостиная, Коридор"
    }
  },
  {
    id: 8,
    name: "Интерьерная ель 'Классико'",
    category: "decor",
    price: 80,
    images: ["/uploads/image_0_7.jpg"],
    inStock: true,
    description: "Стилизованная геометрическая ель для круглогодичного или сезонного декора рабочего стола и полок.",
    features: [
      "Материал: Износостойкий PLA",
      "Ступенчатая ярусная структура",
      "Безопасно для детей и животных",
      "Компактные габариты"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Seasonal",
      style: "Скандинавский, Нордик",
      room: "Любое помещение"
    }
  },
  {
    id: 9,
    name: "Ваза 'Вейв'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_8.jpg"],
    inStock: true,
    description: "Плавные вертикальные гребни имитируют морские волны, плавно расширяясь от основания к горловине.",
    features: [
      "Материал: PLA-пластик",
      "Волнообразный рельеф",
      "Удобный захват при перемещении",
      "Матовый благородный оттенок"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Waterline",
      style: "Джапанди, Минимализм",
      room: "Ванная, Гостиная, Спальня"
    }
  },
  {
    id: 10,
    name: "Ваза 'Дрил'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_9.jpg"],
    inStock: true,
    description: "Винтовая конусообразная форма с острыми гранями, создающая строгий технологичный силуэт.",
    features: [
      "Материал: Биополимер",
      "Динамическая винтовая резьба",
      "Антискользящая подошва",
      "Точность каждого слоя"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Industrial",
      style: "Техно, Минимализм",
      room: "Кабинет, Офис, Гостиная"
    }
  },
  {
    id: 11,
    name: "Пиала-подсвечник 'Лотос'",
    category: "decor",
    price: 20,
    images: ["/uploads/image_0_10.jpg"],
    inStock: true,
    description: "Компактная чаша в виде раскрывающихся лепестков. Подходит для хранения украшений, ключей или чайных свечей.",
    features: [
      "Материал: PLA-полимер",
      "Цветочная форма",
      "Компактный размер",
      "Многофункциональное применение"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Botanica",
      style: "Восточный, Минимализм",
      room: "Спальня, Прихожая"
    }
  },
  {
    id: 12,
    name: "Ваза 'Ананас'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_11.jpg"],
    inStock: true,
    description: "Объемный рельеф из ромбовидных сегментов, напоминающий фактуру тропического фрукта в лаконичной подаче.",
    features: [
      "Материал: Органический экопластик",
      "Выраженная сегментированная текстура",
      "Устойчивая монолитная форма",
      "Эстетична даже без цветов"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Tropic",
      style: "Поп-арт, Контемпорари",
      room: "Кухня, Гостиная, Терраса"
    }
  },
  {
    id: 13,
    name: "Ваза 'Медуза'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_12.jpg"],
    inStock: true,
    description: "Органический куполообразный силуэт с легким сужением к основанию. Доступна в базовом и шелковистом полимере.",
    features: [
      "Материал: PLA премиум-класса",
      "Плавный купольный переход",
      "Тактильно бархатистая поверхность",
      "Легко очищается сухой тканью"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Oceanic",
      style: "Биоморфизм, Минимализм",
      room: "Спальня, Гостиная"
    }
  },
  {
    id: 14,
    name: "Арт-сет 'Микро челиксы'",
    category: "decor",
    price: 90,
    images: ["/uploads/image_0_13.jpg"],
    inStock: true,
    description: "Коллекционный сет миниатюрных фигурок с характером. Отлично дополняют полки с книгами и рабочие пространства.",
    features: [
      "Материал: Высокодетализированный полимер",
      "Комплект авторских фигурок",
      "Гладкая обработка граней",
      "Идеально для настольного декора"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Characters",
      style: "Арт-игрушки, Современный",
      room: "Кабинет, Детская, Студия"
    }
  },
  {
    id: 15,
    name: "Ваза 'Брумо'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_14.jpg"],
    inStock: true,
    description: "Монументальная форма с плавными горизонтальными расширениями. Визуально уравновешивает пространство.",
    features: [
      "Материал: Эко-полимер",
      "Основательная форма с низким центром тяжести",
      "Тонкая послойная фактура",
      "Универсальный нейтральный стиль"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Earth",
      style: "Ваби-саби, Джапанди",
      room: "Гостиная, Прихожая"
    }
  },
  {
    id: 16,
    name: "Ваза 'Пикси'",
    category: "decor",
    price: 60,
    images: ["/uploads/image_0_15.jpg"],
    inStock: true,
    description: "Изящная и миниатюрная форма с легким изгибом. Создана для одного акцентного цветка или тонких трав.",
    features: [
      "Материал: PLA-пластик",
      "Узкое аккуратное горлышко",
      "Легкий изящный вес",
      "Для сухих колосьев и лаванды"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Grace",
      style: "Минимализм, Прованс",
      room: "Спальня, Туалетный столик"
    }
  },
  {
    id: 17,
    name: "Ваза 'Восточная'",
    category: "decor",
    price: 150,
    images: ["/uploads/image_0_16.jpg"],
    inStock: true,
    description: "Крупное интерьерное изделие с силуэтом традиционных восточных амфор, исполненное в прогрессивном 3D-формате.",
    features: [
      "Материал: Усиленный экополимер",
      "Увеличенная высота и объем",
      "Трудоемкая многочасовая печать",
      "Премиальная фактура"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Heritage",
      style: "Неоклассика, Этно-минимализм",
      room: "Просторная гостиная, Холл"
    }
  },
  {
    id: 18,
    name: "Ваза 'Силк'",
    category: "decor",
    price: 50,
    images: ["/uploads/image_0_17.jpg"],
    inStock: true,
    description: "Текстура изделия напоминает струящиеся шелковые складки, которые переливаются на свету мягким градиентом.",
    features: [
      "Материал: Шелк-PLA полимер",
      "Эффект атласного перелива",
      "Мягкие складчатые линии",
      "Устойчива к выцветанию"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Silk Touch",
      style: "Современный, Романтизм",
      room: "Спальня, Гостиная"
    }
  },
  {
    id: 19,
    name: "Светильник-ваза 'Лайтнинг'",
    category: "decor",
    price: 75,
    images: ["/uploads/image_0_18.jpg"],
    inStock: true,
    description: "Зигзагообразные ломаные ребра создают драматичный светотеневой рисунок. Подходит как ваза или корпус под светодиодную подсветку.",
    features: [
      "Материал: Полупрозрачный полимер",
      "Зигзагообразная геометрия",
      "Красивое свечение на просвет",
      "Термостойкий корпус"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Energy",
      style: "Хай-тек, Футуризм",
      room: "Кабинет, Гостиная"
    }
  },
  {
    id: 20,
    name: "Кашпо-ваза 'Кьюб'",
    category: "decor",
    price: 90,
    images: ["/uploads/image_0_19.jpg"],
    inStock: true,
    description: "Кубическая архитектурная форма с внутренним переходом в округлую чашу. Идеально подходит для строгих интерьеров.",
    features: [
      "Материал: Плотный PLA-пластик",
      "Архитектурная строгая геометрия",
      "Утолщенные монолитные стенки",
      "Универсально: ваза или кашпо"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Cubism",
      style: "Брутализм, Минимализм",
      room: "Офис, Кабинет, Гостиная"
    }
  },
  {
    id: 21,
    name: "Ваза 'Сеть'",
    category: "decor",
    price: 120,
    images: ["/uploads/image_0_20.jpg"],
    inStock: true,
    description: "Сложная ячеистая структура с двойными стенками. Вершина возможностей параметрической 3D-печати.",
    features: [
      "Материал: Прочный биополимер",
      "Двойная сетчатая структура",
      "Сложная пространственная модель",
      "Устойчива на любой поверхности"
    ],
    specifications: {
      brand: "3d fabriq",
      collection: "Complex",
      style: "Био-тек, Параметрика",
      room: "Гостиная, Прихожая, Зал"
    }
  }
];

interface LampDiagnosis {
  archetypeTitle: string;
  resonance: string;
  rationale: string;
}

const LAMP_DIAGNOSES: Record<number, LampDiagnosis> = {
  19: {
    archetypeTitle: "Энергия Иди Бритт",
    resonance: "Драматичный рассеянный свет и острая геометрия",
    rationale: "Как и героиня, этот объект не признает полутонов. Ломаные ребра рассеивают свет под острыми углами, преображая любое пространство вокруг себя и притягивая внимание."
  },
  18: {
    archetypeTitle: "Шелковый шик Габриэль Солис",
    resonance: "Текучая пластика и мерцающий атласный лоск",
    rationale: "Воплощение подиумного темперамента. Форма струится, словно кутюрное вечернее платье, реагируя на малейшие лучи света мягким чувственным градиентом."
  },
  17: {
    archetypeTitle: "Античная выдержка Бри Ван де Камп",
    resonance: "Монументальная неоклассика и безупречные пропорции",
    rationale: "Чистейшая симметрия и строгость формы. Подобно Бри, этот объект служит эталоном благородной сдержанности, скрывающей внутри несокрушимый стержень."
  },
  3: {
    archetypeTitle: "Открытое сердце Сьюзан Майер",
    resonance: "Бионическая скульптура и теплая искренность",
    rationale: "Форма, созданная вопреки холодным канонам. Живая анатомическая пластика отражает способность любить, ошибаться и сохранять трогательную романтичность."
  },
  20: {
    archetypeTitle: "Инженерная стойкость Линетт Скаво",
    resonance: "Бруталистский монолит и функциональное ядро",
    rationale: "Объект максимальной выдержки. Плотные кубические грани удерживают устойчивость в эпицентре любого хаоса, сочетая архитектурный каркас с внутренним теплом."
  },
  7: {
    archetypeTitle: "Витражная тайна Кэтрин Мейфеир",
    resonance: "Светопроницаемая полигональная решетка",
    rationale: "Сложная игра светотени сквозь ажурные ячейки. Объект хранит полумрак и глубину, открываясь только тем, кто умеет вглядываться в детали."
  },
  4: {
    archetypeTitle: "Гармоничный круг семьи Скаво",
    resonance: "Абсолютная круговая форма и ритмичные слои",
    rationale: "Идеальный баланс без острых углов. Спокойный медитативный объект, примиряющий внутренний мир с внешними бурями."
  },
  11: {
    archetypeTitle: "Свеча памяти Мэри Элис",
    resonance: "Камерное пламя и лепестки спокойствия",
    rationale: "Таинственный интимный свет, хранящий сокровенные признания. Мягкая раскрывающаяся чаша для уютных вечеров и глубоких размышлений."
  }
};

const DEFAULT_DIAGNOSIS: LampDiagnosis = {
  archetypeTitle: "Параметрическая загадка загородного дома",
  resonance: "Гармония ритма, тени и современного полимера",
  rationale: "Ваш выбор объединяет тонкую чувствительность к порядку и смелость выделиться на фоне привычных стандартов."
};

interface QuestionOption {
  text: string;
  weights: Record<number, number>;
}

interface Question {
  id: number;
  title: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Вам подбросили записку с текстом: «Я знаю, что ты сделала». Какова первая реакция?",
    options: [
      {
        text: "Начищу серебро, сделаю идеальную укладку и встречу шантажиста с заряженным дробовиком",
        weights: { 17: 4, 4: 2, 16: 1 }
      },
      {
        text: "Спрячу украшения, проверю тайный счет и закажу кутюрное платье, чтобы справиться со стрессом",
        weights: { 18: 4, 1: 2, 12: 1 }
      },
      {
        text: "Включу режим антикризисного штаба, проведу расследование и лично прижму шантажиста к стенке",
        weights: { 20: 4, 10: 2, 2: 1 }
      },
      {
        text: "Впаду в панику, побегу к подругам, споткнусь и случайно уроню улику прямо под ноги шерифу",
        weights: { 3: 4, 5: 2, 11: 1 }
      },
      {
        text: "Вычислю автора, предложу сделку на моих условиях и параллельно уведу у него партнера",
        weights: { 19: 4, 7: 2, 21: 1 }
      }
    ]
  },
  {
    id: 2,
    title: "Пятничный вечер покера в кругу подруг. Как проходит ваша игра?",
    options: [
      {
        text: "Принесу корзинку со свежими сконами с лавандой и буду блефовать с непроницаемым лицом",
        weights: { 17: 3, 4: 3, 16: 2 }
      },
      {
        text: "Буду жаловаться на блокировку кредитки мужа, параллельно забирая весь банк ради азарта",
        weights: { 18: 4, 7: 2, 1: 1 }
      },
      {
        text: "Рассчитаю вероятности каждой карты, попутно укладывая детей спать криком через весь дом",
        weights: { 20: 4, 2: 2, 10: 1 }
      },
      {
        text: "Раскрою свои карты раньше времени, пожалею проигравших и разрыдаюсь из-за неудачного свидания",
        weights: { 3: 4, 9: 2, 5: 1 }
      },
      {
        text: "Приду в самом эффектном наряде, чтобы отпустить пару колких шуток и разнюхать чужие тайны",
        weights: { 19: 4, 6: 2, 21: 1 }
      }
    ]
  },
  {
    id: 3,
    title: "Какой мужчина имеет наибольшие шансы покорить ваше сердце?",
    options: [
      {
        text: "Респектабельный джентльмен с безупречной родословной, принимающий мои стандарты этикета",
        weights: { 17: 4, 4: 2, 20: 1 }
      },
      {
        text: "Вспыльчивый миллионер, готовый осыпать меня драгоценностями, или молодой садовник без обязательств",
        weights: { 18: 4, 12: 2, 1: 1 }
      },
      {
        text: "Преданный партнер, готовый делить лидерство, даже если он решит открыть собственную пиццерию",
        weights: { 20: 4, 10: 2, 15: 1 }
      },
      {
        text: "Загадочный сантехник с туманным прошлым и золотым сердцем, готовый спасать меня из любой беды",
        weights: { 3: 4, 5: 2, 9: 1 }
      },
      {
        text: "Яркий харизматичный холостяк, на которого уже положили глаз все остальные женщины",
        weights: { 19: 4, 7: 2, 21: 1 }
      }
    ]
  },
  {
    id: 4,
    title: "Вам нужно скрыть серьезное происшествие от полиции. Что вы сделаете?",
    options: [
      {
        text: "Организую захоронение улики по всем правилам протокола и заставлю всех хранить строгое молчание",
        weights: { 17: 3, 4: 4, 16: 1 }
      },
      {
        text: "Отрепетирую слезы на допросе и убежу следователя, что такая женщина не способна на преступление",
        weights: { 18: 4, 19: 2, 7: 1 }
      },
      {
        text: "Составлю поминутное алиби для каждого участника и ликвидирую любые несостыковки в показаниях",
        weights: { 20: 4, 10: 3, 2: 1 }
      },
      {
        text: "Нарисую недвусмысленную картину с местом преступления и случайно выставлю ее в галерее",
        weights: { 3: 4, 11: 3, 5: 1 }
      },
      {
        text: "Использую информацию как рычаг давления, чтобы заключить самую выгодную сделку в карьере",
        weights: { 19: 4, 21: 3, 6: 1 }
      }
    ]
  },
  {
    id: 5,
    title: "В чем ваш личный источник света, когда все вокруг рушится?",
    options: [
      {
        text: "В железном порядке, безупречной выдержке и верности семейным традициям",
        weights: { 17: 4, 4: 3, 16: 2 }
      },
      {
        text: "В удовольствии, чувственности, блеске тканей и восхищении окружающих",
        weights: { 18: 4, 7: 2, 1: 2 }
      },
      {
        text: "В несокрушимой стойкости, трезвом уме и защите благополучия своего дома",
        weights: { 20: 4, 10: 2, 15: 2 }
      },
      {
        text: "В умении искренне чувствовать, любить вопреки ошибкам и начинать заново",
        weights: { 3: 4, 5: 3, 11: 2 }
      },
      {
        text: "В бескомпромиссной независимости, остром азарте и ярком огне страсти",
        weights: { 19: 5, 21: 2, 6: 1 }
      }
    ]
  }
];

export default function HousewivesLampQuiz() {
  const [step, setStep] = useState<number>(-1);
  const [accumulatedScores, setAccumulatedScores] = useState<Record<number, number>>({});
  const [resultItem, setResultItem] = useState<CatalogItem | null>(null);
  const [diagnosis, setDiagnosis] = useState<LampDiagnosis | null>(null);
  const [matchPercent, setMatchPercent] = useState<number>(97);
  const [imgFailed, setImgFailed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const start = () => {
    setAccumulatedScores({});
    setImgFailed(false);
    setCopied(false);
    setResultItem(null);
    setDiagnosis(null);
    setStep(0);
  };

  const handlePick = (weights: Record<number, number>) => {
    const nextScores = { ...accumulatedScores };
    Object.entries(weights).forEach(([idStr, val]) => {
      const id = Number(idStr);
      nextScores[id] = (nextScores[id] || 0) + val;
    });
    setAccumulatedScores(nextScores);

    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      resolveResult(nextScores);
    }
  };

  const resolveResult = (finalScores: Record<number, number>) => {
    let topItemId = 19;
    let maxScore = -1;

    Object.entries(finalScores).forEach(([idStr, score]) => {
      const id = Number(idStr);
      if (score > maxScore) {
        maxScore = score;
        topItemId = id;
      }
    });

    const calculatedPercent = Math.min(99, Math.max(88, 85 + Math.round((maxScore / 18) * 14)));
    setMatchPercent(calculatedPercent);

    const matchedCatalogItem = CATALOG_ITEMS.find((i) => i.id === topItemId) || CATALOG_ITEMS[0];
    const lampDiag = LAMP_DIAGNOSES[topItemId] || DEFAULT_DIAGNOSIS;

    setResultItem(matchedCatalogItem);
    setDiagnosis(lampDiag);
    setStep(QUESTIONS.length);
  };

  const handleShare = async (platform?: "tg" | "vk") => {
    if (!resultItem) return;

    const shareTitle = `Моя лампа по «Отчаянным домохозяйкам»: ${resultItem.name}`;
    const shareText = `Я — ${resultItem.name} (${diagnosis?.archetypeTitle || ""}) по тесту «Отчаянные домохозяйки» на 3D FABRIQ. Узнай свой объект:`;
    const shareUrl = "https://3dfabriq.store";

    if (platform === "tg") {
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        "_blank"
      );
      return;
    }

    if (platform === "vk") {
      window.open(
        `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
        "_blank"
      );
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Окно закрыто пользователем
      }
    }

    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2416] flex flex-col justify-between font-sans antialiased selection:bg-[#EADBCE] selection:text-[#2C2416]">
      {/* Хедер */}
      <header className="w-full max-w-xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between border-b border-[#E6DFD5]">
        <span className="text-[11px] tracking-[0.28em] font-medium uppercase text-[#2C2416]">
          3d fabriq
        </span>
        {step >= 0 && step < QUESTIONS.length && (
          <span 
            className="text-[11px] font-mono tracking-widest text-[#8A7E70]"
            aria-live="polite"
            aria-atomic="true"
          >
            0{step + 1} / 0{QUESTIONS.length}
          </span>
        )}
      </header>

      {/* Основная часть */}
      <main 
        className="flex-1 flex items-center justify-center px-6 py-12 w-full max-w-xl mx-auto"
        role="main"
      >
        <AnimatePresence mode="wait">
          {/* СТАРТ */}
          {step === -1 && (
            <motion.article
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full text-left"
            >
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#2C2416] leading-tight mb-6">
                Какая вы лампа по вопросам из «Отчаянных домохозяек»?
              </h1>
              <p className="text-sm sm:text-base text-[#756857] font-light leading-relaxed mb-10 max-w-md">
                Пять дилемм в духе культового сериала. Наш алгоритм сопоставит ваши решения с геометрией, светотенью и материалом одного из арт-объектов 3d fabriq.
              </p>
              <button
                type="button"
                onClick={start}
                className="inline-block px-8 py-3.5 bg-[#2C2416] text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.2em] rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#2C2416] focus:ring-offset-2 focus:ring-offset-[#FAF7F2]"
              >
                Начать
              </button>
            </motion.article>
          )}

          {/* ВОПРОСЫ */}
          {step >= 0 && step < QUESTIONS.length && (
            <motion.section
              key={`q-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full text-left"
              aria-labelledby={`question-title-${step}`}
            >
              <h2 
                id={`question-title-${step}`} 
                className="text-xl sm:text-2xl font-light text-[#2C2416] leading-snug mb-8"
              >
                {QUESTIONS[step].title}
              </h2>

              <div className="space-y-3" role="radiogroup" aria-label="Варианты ответа">
                {QUESTIONS[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePick(option.weights)}
                    className="w-full text-left p-4 sm:p-5 border border-[#E6DFD5] hover:border-[#2C2416] rounded-lg text-xs sm:text-sm text-[#2C2416] leading-relaxed transition-colors flex items-start space-x-3.5 group focus:outline-none focus:ring-1 focus:ring-[#2C2416]"
                  >
                    <span 
                      aria-hidden="true" 
                      className="text-[11px] font-mono text-[#8A7E70] group-hover:text-[#2C2416] transition-colors mt-0.5"
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.section>
          )}

          {/* РЕЗУЛЬТАТ */}
          {step === QUESTIONS.length && resultItem && diagnosis && (
            <motion.article
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full text-left"
            >
              {/* Диагностика */}
              <div className="pb-8 border-b border-[#E6DFD5] mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7E70]">
                    Результат диагностики
                  </span>
                  <span className="text-xs font-mono text-[#2C2416] bg-[#EFE9DF] px-2 py-0.5 rounded">
                    {matchPercent}% совпадение
                  </span>
                </div>

                <h2 className="text-3xl font-light text-[#2C2416] mb-1">
                  {resultItem.name}
                </h2>
                <p className="text-xs tracking-wider text-[#756857] mb-4">
                  {diagnosis.archetypeTitle} • {diagnosis.resonance}
                </p>
                <p className="text-xs sm:text-sm text-[#524637] font-light leading-relaxed">
                  {diagnosis.rationale}
                </p>
              </div>

              {/* Карточка объекта */}
              <div className="mb-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7E70] mb-4">
                  Ваш объект в коллекции
                </div>

                <div className="border border-[#E6DFD5] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-full sm:w-40 aspect-square bg-[#F3ECE1] border border-[#E6DFD5] rounded-lg relative overflow-hidden flex items-center justify-center flex-shrink-0">
                    {!imgFailed ? (
                      <img
                        src={resultItem.images[0]}
                        alt={`${resultItem.name} — интерьерный светильник 3d fabriq`}
                        width={160}
                        height={160}
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="text-[10px] font-mono text-[#8A7E70] uppercase tracking-widest text-center px-2">
                        {resultItem.name}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-normal text-[#2C2416]">
                        {resultItem.name}
                      </h3>
                      <span className="text-xs font-mono text-[#2C2416]">
                        €{resultItem.price}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A7E70] mb-3">
                      {resultItem.specifications.collection} • {resultItem.specifications.style}
                    </div>

                    <p className="text-xs text-[#756857] font-light leading-relaxed mb-4">
                      {resultItem.description}
                    </p>

                    <ul className="text-[11px] text-[#8A7E70] space-y-1 font-mono list-none p-0">
                      <li>— {resultItem.features[0]}</li>
                      <li>— {resultItem.features[1]}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Социальный шеринг */}
              <div className="mb-8 pt-4 border-t border-[#E6DFD5]">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7E70] mb-3">
                  Поделиться результатом
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => handleShare("tg")}
                    className="px-4 py-2 border border-[#E6DFD5] hover:border-[#2C2416] text-[#2C2416] rounded-md transition-colors"
                  >
                    Telegram
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("vk")}
                    className="px-4 py-2 border border-[#E6DFD5] hover:border-[#2C2416] text-[#2C2416] rounded-md transition-colors"
                  >
                    ВКонтакте
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare()}
                    className="px-4 py-2 border border-[#E6DFD5] hover:border-[#2C2416] text-[#2C2416] rounded-md transition-colors"
                  >
                    {copied ? "Ссылка скопирована ✓" : "Скопировать"}
                  </button>
                </div>
              </div>

              {/* Действия */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://3dfabriq.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Перейти в интернет-магазин 3d fabriq"
                  className="w-full sm:flex-1 text-center py-3.5 px-6 bg-[#2C2416] text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.2em] rounded-md hover:opacity-90 transition-opacity focus:ring-2 focus:ring-[#2C2416]"
                >
                  3dfabriq.store
                </a>

                <button
                  type="button"
                  onClick={start}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#E6DFD5] text-[#2C2416] text-xs font-mono uppercase tracking-widest rounded-md hover:border-[#2C2416] transition-colors"
                >
                  Заново
                </button>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </main>

      {/* Футер */}
      <footer className="w-full max-w-xl mx-auto px-6 py-8 border-t border-[#E6DFD5] flex justify-between items-center text-[10px] font-mono tracking-widest text-[#8A7E70]">
        <span>3D FABRIQ</span>
        <a
          href="https://3dfabriq.store"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2C2416] transition-colors"
        >
          3dfabriq.store
        </a>
      </footer>
    </div>
  );
}