"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ТИПЫ ДАННЫХ ---
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

// Данные из вашего каталога
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

type CharacterKey = "bree" | "gaby" | "lynette" | "susan" | "edie";

interface CharacterProfile {
  name: string;
  role: string;
  tagline: string;
  quote: string;
  recommendedItemId: number;
}

const CHARACTERS: Record<CharacterKey, CharacterProfile> = {
  bree: {
    name: "Бри Ван де Камп",
    role: "Безупречная перфекционистка",
    tagline: "Традиции, строгая симметрия, столовое серебро и скрытая буря страстей.",
    quote: "«Улыбка — это броня, которая защищает нас от грубости внешнего мира».",
    recommendedItemId: 17 // Ваза 'Восточная' (или Пикси / Сфера)
  },
  gaby: {
    name: "Габриэль Солис",
    role: "Королева гламура и соблазна",
    tagline: "Шелк, высокая мода, дерзкие желания и уверенность в своей неотразимости.",
    quote: "«Я не создана для того, чтобы убирать. Я создана, чтобы сиять и тратить деньги».",
    recommendedItemId: 18 // Ваза 'Силк' (или Лайтнинг)
  },
  lynette: {
    name: "Линетт Скаво",
    role: "Стратег и железная леди",
    tagline: "Практичность, карьерный напор, управление хаосом и непоколебимая стойкость.",
    quote: "«Если вы думаете, что я сдамся без боя, вы явно не знаете матерей четверых детей».",
    recommendedItemId: 20 // Кашпо-ваза 'Кьюб' (или Дрил)
  },
  susan: {
    name: "Сьюзан Майер",
    role: "Искренняя романтичная натура",
    tagline: "Большое любящее сердце, легкая неуклюжесть, вдохновение и душевное тепло.",
    quote: "«Я просто верю в сказки... пусть даже в конце сказки я обязательно споткнусь и упаду».",
    recommendedItemId: 3 // Скульптура-ваза 'Сердце' (или Буфо)
  },
  edie: {
    name: "Иди Бритт",
    role: "Дерзкая бунтарка пригорода",
    tagline: "Хищный темперамент, независимость, игра по своим правилам и яркие акценты.",
    quote: "«Дорогая, я никогда не извиняюсь за то, что беру от этой жизни лучшее».",
    recommendedItemId: 19 // Светильник-ваза 'Лайтнинг'
  }
};

interface QuestionOption {
  text: string;
  character: CharacterKey;
}

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Субботнее утро на Вистерия Лейн. Чем заняты вы?",
    subtitle: "Солнце только встает над идиллическим пригородом...",
    options: [
      { text: "Выпекаю идеальные маффины с лимонной цедрой и проверяю стрелки на скатертях", character: "bree" },
      { text: "Потягиваю эспрессо в шелковом пеньюаре, изучая новый лукбук с Миланской недели моды", character: "gaby" },
      { text: "Одной рукой варю овсянку детям, другой завершаю стратегический отчет для шефа", character: "lynette" },
      { text: "Споткнулась о поливочный шланг Майка, пока несла ему слегка подгоревший пирог", character: "susan" },
      { text: "Выхожу на пробежку в облегающем топе, ловя завистливые взгляды всех мужей на улице", character: "edie" }
    ]
  },
  {
    id: 2,
    question: "Какой секрет вы бережно прячете за парадной дверью дома?",
    subtitle: "У каждого дома на этой улице есть свой тайный шкаф...",
    options: [
      { text: "Тайны семьи, которые никогда и ни при каких обстоятельствах не выйдут на свет", character: "bree" },
      { text: "Скрытые выписки по кредитным картам с суммами, способными разорить банк", character: "gaby" },
      { text: "Жгучее желание сбежать хотя бы на пару суток в тихий отель без шума и детских криков", character: "lynette" },
      { text: "Кипу старых любовных писем и набросков, которые вызывают тихие слезы", character: "susan" },
      { text: "Я ничего не прячу: пусть весь квартал обсуждает мои романы и завидует", character: "edie" }
    ]
  },
  {
    id: 3,
    question: "Званый ужин у соседей. Какой напиток наполняет ваш бокал?",
    subtitle: "Разговоры становятся тише, а взгляды — острее...",
    options: [
      { text: "Безупречно охлажденное шардоне высшей категории в тончайшем хрустале", character: "bree" },
      { text: "Винтажное розовое шампанское с клубникой — только премиум-сегмент", character: "gaby" },
      { text: "Крепкий двойной эспрессо или скотч со льдом, чтобы пережить этот вечер", character: "lynette" },
      { text: "Сладкий пунш, половину которого я случайно пролью на чужой ковер", character: "susan" },
      { text: "Сухой мартини с тремя оливками и взглядом, предвещающим бурю", character: "edie" }
    ]
  },
  {
    id: 4,
    question: "Кто-то в пригороде перешел вам дорогу. Ваш ответный ход?",
    subtitle: "На Вистерия Лейн месть — это блюдо, подаваемое безукоризненно...",
    options: [
      { text: "Принесу корзину фирменной выпечки и невозмутимо намекну на знание их грязной тайны", character: "bree" },
      { text: "Устрою эффектную публичную сцену и разорю их репутацию одним звонком ювелиру", character: "gaby" },
      { text: "Соберу неопровержимые факты, выстрою аналитическую партию и разгромлю противника", character: "lynette" },
      { text: "Попробую объясниться по душам, но случайно наломаю дров еще сильнее", character: "susan" },
      { text: "Уведу у обидчицы самого привлекательного мужчину или перекуплю ее любимый дом", character: "edie" }
    ]
  },
  {
    id: 5,
    question: "Что для вас идеальный домашний уют и эстетика?",
    subtitle: "Интерьер говорит о владельце громче любых признаний...",
    options: [
      { text: "Антикварные формы, выверенные пропорции, благородство и абсолютный порядок", character: "bree" },
      { text: "Шелковистые переливы, утонченный блеск, чувственность и дорогая роскошь", character: "gaby" },
      { text: "Четкая геометрия, монументальность, долговечные материалы без лишней мишуры", character: "lynette" },
      { text: "Трогательные арт-объекты, теплота, органические бионические линии и романтика", character: "susan" },
      { text: "Драматичный свет, авангардные острые грани и дерзкий футуристичный стиль", character: "edie" }
    ]
  }
];

export default function DesperateHousewivesQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1 = Welcome screen
  const [answers, setAnswers] = useState<CharacterKey[]>([]);
  const [resultItem, setResultItem] = useState<CatalogItem | null>(null);
  const [resultCharacter, setResultCharacter] = useState<CharacterProfile | null>(null);

  // Старт квиза
  const handleStart = () => {
    setAnswers([]);
    setCurrentStep(0);
    setResultItem(null);
    setResultCharacter(null);
  };

  // Выбор ответа
  const handleAnswer = (character: CharacterKey) => {
    const updated = [...answers, character];
    setAnswers(updated);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updated);
    }
  };

  // Подсчет результатов
  const calculateResult = (finalAnswers: CharacterKey[]) => {
    const counts: Record<CharacterKey, number> = {
      bree: 0,
      gaby: 0,
      lynette: 0,
      susan: 0,
      edie: 0
    };

    finalAnswers.forEach((key) => {
      counts[key] = (counts[key] || 0) + 1;
    });

    let topCharacter: CharacterKey = "bree";
    let maxVotes = -1;

    (Object.keys(counts) as CharacterKey[]).forEach((key) => {
      if (counts[key] > maxVotes) {
        maxVotes = counts[key];
        topCharacter = key;
      }
    });

    const characterData = CHARACTERS[topCharacter];
    const item = CATALOG_ITEMS.find((i) => i.id === characterData.recommendedItemId) || CATALOG_ITEMS[0];

    setResultCharacter(characterData);
    setResultItem(item);
    setCurrentStep(QUESTIONS.length); // Экран результатов
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#3D352E] flex flex-col justify-between selection:bg-[#E2D2BE] selection:text-[#2B231D] font-sans relative overflow-hidden">
      {/* Мягкие фоновые декоративные круги в бежевых тонах */}
      <div className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full bg-[#EFE7DC] opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[460px] h-[460px] rounded-full bg-[#F3ECE1] opacity-70 blur-3xl pointer-events-none" />

      {/* Верхний лаконичный хедер */}
      <header className="w-full max-w-4xl mx-auto px-6 py-8 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-[#C2A382]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C7A68] font-medium">
            Wisteria Lane • Décor Collection
          </span>
        </div>
        <div className="text-xs tracking-wider text-[#A89887] uppercase">
          3d fabriq aesthetic
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 z-10 w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {/* 1. ПРИВЕТСТВЕННЫЙ ЭКРАН */}
          {currentStep === -1 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-[#FCFAF6] border border-[#EBE3D5] rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_-15px_rgba(164,142,120,0.12)] text-center backdrop-blur-sm"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#F2EAE0] text-[#7A6450] text-xs uppercase tracking-widest font-semibold mb-6">
                Интерактивный тест
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif text-[#2F2720] leading-tight mb-4">
                Какая вы Отчаянная Домохозяйка и какой арт-объект вам сужден?
              </h1>
              <p className="text-sm sm:text-base text-[#7A6E63] leading-relaxed max-w-lg mx-auto mb-8 font-light">
                Пройдите 5 вопросов о тайнах за идеальными газонами Вистерия Лейн, чтобы раскрыть свой тайный типаж и найти свой авторский акцент в интерьере.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStart}
                className="w-full sm:w-auto px-10 py-4 bg-[#C8A885] hover:bg-[#BA9974] text-white rounded-full text-sm font-medium tracking-wide shadow-md transition-colors"
              >
                Войти на Вистерия Лейн
              </motion.button>
            </motion.div>
          )}

          {/* 2. ЭКРАН ВОПРОСНИКА */}
          {currentStep >= 0 && currentStep < QUESTIONS.length && (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-[#FCFAF6] border border-[#EBE3D5] rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_-15px_rgba(164,142,120,0.1)] backdrop-blur-sm"
            >
              {/* Прогресс-бар */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs tracking-wider uppercase text-[#9B8C7E] mb-2 font-medium">
                  <span>Вопрос {currentStep + 1} из {QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#EFE7DC] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#C8A885] rounded-full"
                    initial={{ width: `${(currentStep / QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Заголовок вопроса */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-serif text-[#2E2721] mb-2 leading-snug">
                  {QUESTIONS[currentStep].question}
                </h2>
                <p className="text-xs sm:text-sm text-[#87796D] italic">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Варианты ответов */}
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01, backgroundColor: "#F7EFE5" }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswer(option.character)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#E8DFD3] bg-[#FAF6F0] text-[#423932] transition-all flex items-start space-x-3.5 group"
                  >
                    <span className="w-6 h-6 rounded-full border border-[#D5C6B5] bg-white flex items-center justify-center text-xs text-[#8A7969] font-medium flex-shrink-0 mt-0.5 group-hover:border-[#C8A885] group-hover:text-[#C8A885]">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed text-[#4A4038]">
                      {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. ЭКРАН РЕЗУЛЬТАТА */}
          {currentStep === QUESTIONS.length && resultCharacter && resultItem && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-[#FCFAF6] border border-[#EBE3D5] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(150,130,110,0.15)]"
            >
              {/* Бейдж типажа */}
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFE4D6] text-[#7A6450] text-xs uppercase tracking-widest font-semibold mb-3">
                  Ваш типаж на Вистерия Лейн
                </span>
                <h2 className="text-3xl font-serif text-[#2B231D] mb-1">
                  {resultCharacter.name}
                </h2>
                <p className="text-sm font-medium text-[#A68665] tracking-wide">
                  {resultCharacter.role}
                </p>
              </div>

              {/* Характеристика и цитата */}
              <div className="bg-[#FAF5ED] border border-[#EAE0D2] rounded-2xl p-5 mb-8 text-center">
                <p className="text-sm text-[#5C5046] mb-3 leading-relaxed">
                  {resultCharacter.tagline}
                </p>
                <p className="text-xs text-[#8A7B6D] italic">
                  {resultCharacter.quote}
                </p>
              </div>

              {/* Карточка подобранного арт-объекта / лампы */}
              <div className="border border-[#E7DDD0] rounded-2xl p-5 sm:p-6 bg-white/70 shadow-sm mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Заглушка/изображение товара */}
                  <div className="w-full sm:w-44 h-48 rounded-xl bg-gradient-to-tr from-[#EFE8DE] to-[#F7F2EA] flex flex-col items-center justify-center p-4 border border-[#E2D8CA] flex-shrink-0 text-center relative overflow-hidden">
                    <div className="text-3xl mb-2">🏺</div>
                    <span className="text-xs font-serif font-medium text-[#6B5C4E]">
                      {resultItem.name}
                    </span>
                    <span className="text-[10px] uppercase text-[#9B8C7D] mt-1 tracking-wider">
                      {resultItem.specifications.style}
                    </span>
                    <div className="absolute top-2 right-2 text-[10px] bg-[#E8DFD1] px-2 py-0.5 rounded text-[#5D4E3F]">
                      €{resultItem.price}
                    </div>
                  </div>

                  {/* Описание товара */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A28263]">
                        {resultItem.specifications.collection}
                      </span>
                      <span className="text-[#D3C7B7]">•</span>
                      <span className="text-xs text-[#8F8174]">
                        {resultItem.specifications.room}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#2B231D] mb-2">
                      {resultItem.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed mb-4">
                      {resultItem.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#7A6B5E]">
                      {resultItem.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <span className="text-[#C8A885] font-bold">✓</span>
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопка повторного прохождения */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStart}
                  className="px-8 py-3.5 bg-[#C8A885] hover:bg-[#B99672] text-white rounded-full text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  Пройти тест заново
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Футер */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-6 text-center text-xs text-[#A89887] tracking-wider z-10">
        © {new Date().getFullYear()} 3d fabriq • Коллекция интерьерных форм в стиле Wisteria Lane
      </footer>
    </div>
  );
}