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

type CharacterKey = "bree" | "gaby" | "lynette" | "susan" | "edie";

interface CharacterProfile {
  name: string;
  definition: string;
  description: string;
  itemId: number;
}

const CHARACTERS: Record<CharacterKey, CharacterProfile> = {
  bree: {
    name: "Бри",
    definition: "Симметрия, перфекционизм и порядок",
    description: "Абсолютный контроль над формой. Выверенные пропорции, сдержанность и внутренняя стойкость, скрытая за безупречной поверхностью.",
    itemId: 17
  },
  gaby: {
    name: "Габриэль",
    definition: "Струящийся шелк и чувственная роскошь",
    description: "Осознание собственной ценности, текучие мягкие складки, тактильный лоск и отказ от любых компромиссов в эстетике.",
    itemId: 18
  },
  lynette: {
    name: "Линетт",
    definition: "Монолитная устойчивость и функция",
    description: "Практичность, способная выдержать любой внешний хаос. Четкая геометрия, надежный баланс и честная конструктивная логика.",
    itemId: 20
  },
  susan: {
    name: "Сьюзан",
    definition: "Бионическая органика и открытость",
    description: "Искренность, не боящаяся ошибок. Мягкие контуры, живая пластика и человеческое тепло взамен холодной строгости.",
    itemId: 3
  },
  edie: {
    name: "Иди",
    definition: "Острая геометрия и преломление света",
    description: "Драматичный силуэт, экспрессия и независимость. Объект, который трансформирует пространство вокруг себя и собирает свет.",
    itemId: 19
  }
};

interface Question {
  id: number;
  title: string;
  options: {
    text: string;
    character: CharacterKey;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Субботнее утро в пригородном доме. Ваше естественное состояние?",
    options: [
      { text: "Выверенный фамильный завтрак, скатерть без складок и абсолютная тишина", character: "bree" },
      { text: "Поздний подъем в шелке, аромат свежего кофе и выбор наряда на вечер", character: "gaby" },
      { text: "Координация домашних дел параллельно с решением сложных задач в телефоне", character: "lynette" },
      { text: "Попытка навести порядок, закончившаяся разлитым чаем и новыми мыслями", character: "susan" },
      { text: "Пробежка по улице в открытой форме, приковывающая взгляды всех вокруг", character: "edie" }
    ]
  },
  {
    id: 2,
    title: "Что скрывается за закрытыми ставнями вашего личного пространства?",
    options: [
      { text: "Семейный кризис, о котором внешний мир никогда не должен догадаться", character: "bree" },
      { text: "Счета за неоправданно дорогой шопинг, спрятанные от посторонних глаз", character: "gaby" },
      { text: "Желание остаться в абсолютном одиночестве хотя бы на двадцать четыре часа", character: "lynette" },
      { text: "Тайник со старыми письмами, дневниками и дорогими сердцу воспоминаниями", character: "susan" },
      { text: "Никаких секретов: пусть обсуждают все, что считают нужным", character: "edie" }
    ]
  },
  {
    id: 3,
    title: "Закрытый вечер у соседей. Атмосфера накаляется. Что вы выберете?",
    options: [
      { text: "Сухое выдержанное белое вино правильной температуры в тонком хрустале", character: "bree" },
      { text: "Коллекционное шампанское со свежей садовой клубникой", character: "gaby" },
      { text: "Двойной эспрессо или чистый виски безо льда, чтобы контролировать ситуацию", character: "lynette" },
      { text: "Оригинальный пунш, бокал которого я почти наверняка уроню", character: "susan" },
      { text: "Сухой ледяной мартини с оливкой и прямой оценивающий взгляд", character: "edie" }
    ]
  },
  {
    id: 4,
    title: "Ваши личные границы были нарушены. Каков метод реагирования?",
    options: [
      { text: "Безупречная вежливость, теплый пирог в подарок и тонкий намек на компромат", character: "bree" },
      { text: "Публичный красивый жест, наносящий точный удар по самолюбию обидчика", character: "gaby" },
      { text: "Сухие факты, стратегический расчет и бескомпромиссная аргументация", character: "lynette" },
      { text: "Эмоциональный прямой разговор, который случайно обернется новой путаницей", character: "susan" },
      { text: "Холодная контратака и демонстративное присвоение чужой выгоды", character: "edie" }
    ]
  },
  {
    id: 5,
    title: "Какая пластика объекта вам ближе всего?",
    options: [
      { text: "Классическая гармония пропорций, устойчивость и строгая симметрия", character: "bree" },
      { text: "Струящиеся мягкие перекаты, игра градиентов и атласный перелив", character: "gaby" },
      { text: "Архитектурный кубический монолит с плотными монолитными гранями", character: "lynette" },
      { text: "Плавные природные линии, бионическая мягкость и открытое тепло", character: "susan" },
      { text: "Ломаные зигзагообразные ребра, направленный свет и острый ритм", character: "edie" }
    ]
  }
];

export default function Quiz() {
  const [step, setStep] = useState<number>(-1);
  const [picks, setPicks] = useState<CharacterKey[]>([]);
  const [resultCharacter, setResultCharacter] = useState<CharacterProfile | null>(null);
  const [resultItem, setResultItem] = useState<CatalogItem | null>(null);
  const [imgFailed, setImgFailed] = useState<boolean>(false);

  const start = () => {
    setPicks([]);
    setImgFailed(false);
    setResultCharacter(null);
    setResultItem(null);
    setStep(0);
  };

  const handlePick = (key: CharacterKey) => {
    const updated = [...picks, key];
    setPicks(updated);

    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      resolveResult(updated);
    }
  };

  const resolveResult = (allPicks: CharacterKey[]) => {
    const counts: Record<CharacterKey, number> = { bree: 0, gaby: 0, lynette: 0, susan: 0, edie: 0 };
    allPicks.forEach((k) => (counts[k] += 1));

    let dominant: CharacterKey = "bree";
    let max = -1;
    (Object.keys(counts) as CharacterKey[]).forEach((k) => {
      if (counts[k] > max) {
        max = counts[k];
        dominant = k;
      }
    });

    const charProfile = CHARACTERS[dominant];
    const item = CATALOG_ITEMS.find((i) => i.id === charProfile.itemId) || CATALOG_ITEMS[0];

    setResultCharacter(charProfile);
    setResultItem(item);
    setStep(QUESTIONS.length);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2416] flex flex-col justify-between font-sans antialiased selection:bg-[#EADBCE] selection:text-[#2C2416]">
      {/* Верхний минималистичный бар */}
      <header className="w-full max-w-xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between border-b border-[#E6DFD5]">
        <span className="text-[11px] tracking-[0.28em] font-medium uppercase text-[#2C2416]">
          3d fabriq
        </span>
        {step >= 0 && step < QUESTIONS.length && (
          <span className="text-[11px] font-mono tracking-widest text-[#8A7E70]">
            0{step + 1} / 0{QUESTIONS.length}
          </span>
        )}
      </header>

      {/* Центральная часть */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 w-full max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {/* СТАРТ */}
          {step === -1 && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full text-left"
            >
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#2C2416] leading-tight mb-6">
                Форма и характер
              </h1>
              <p className="text-sm sm:text-base text-[#756857] font-light leading-relaxed mb-10 max-w-md">
                Пять вопросов о закрытых дверях тихого загородного дома. Исследование вашего архетипа и соответствующей ему материальной формы.
              </p>
              <button
                onClick={start}
                className="inline-block px-8 py-3.5 bg-[#2C2416] text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.2em] rounded-md hover:opacity-90 transition-opacity"
              >
                Начать
              </button>
            </motion.div>
          )}

          {/* ВОПРОСЫ */}
          {step >= 0 && step < QUESTIONS.length && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full text-left"
            >
              <h2 className="text-xl sm:text-2xl font-light text-[#2C2416] leading-snug mb-8">
                {QUESTIONS[step].title}
              </h2>

              <div className="space-y-3">
                {QUESTIONS[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePick(option.character)}
                    className="w-full text-left p-4 sm:p-5 border border-[#E6DFD5] hover:border-[#2C2416] rounded-lg text-xs sm:text-sm text-[#2C2416] leading-relaxed transition-colors flex items-start space-x-3.5 group"
                  >
                    <span className="text-[11px] font-mono text-[#8A7E70] group-hover:text-[#2C2416] transition-colors mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* РЕЗУЛЬТАТ */}
          {step === QUESTIONS.length && resultCharacter && resultItem && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full text-left"
            >
              {/* Типаж */}
              <div className="pb-8 border-b border-[#E6DFD5] mb-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7E70] mb-2">
                  Архетип
                </div>
                <h2 className="text-3xl font-light text-[#2C2416] mb-1">
                  {resultCharacter.name}
                </h2>
                <div className="text-xs tracking-wider text-[#756857] mb-4">
                  {resultCharacter.definition}
                </div>
                <p className="text-xs sm:text-sm text-[#524637] font-light leading-relaxed">
                  {resultCharacter.description}
                </p>
              </div>

              {/* Рекомендованный объект */}
              <div className="mb-10">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7E70] mb-4">
                  Рекомендованный объект
                </div>

                <div className="border border-[#E6DFD5] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  {/* Изображение из каталога со скруглением */}
                  <div className="w-full sm:w-40 aspect-square bg-[#F3ECE1] border border-[#E6DFD5] rounded-lg relative overflow-hidden flex items-center justify-center flex-shrink-0">
                    {!imgFailed ? (
                      <img
                        src={resultItem.images[0]}
                        alt={resultItem.name}
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-[10px] font-mono text-[#8A7E70] uppercase tracking-widest text-center px-2">
                        {resultItem.name}
                      </div>
                    )}
                  </div>

                  {/* Свойства */}
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

                    <div className="text-[11px] text-[#8A7E70] space-y-1 font-mono">
                      <div>— {resultItem.features[0]}</div>
                      <div>— {resultItem.features[1]}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Действия со скруглениями */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://3dfabriq.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 text-center py-3.5 px-6 bg-[#2C2416] text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.2em] rounded-md hover:opacity-90 transition-opacity"
                >
                  3dfabriq.store
                </a>

                <button
                  onClick={start}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#E6DFD5] text-[#2C2416] text-xs font-mono uppercase tracking-widest rounded-md hover:border-[#2C2416] transition-colors"
                >
                  Заново
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Минимальный футер */}
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