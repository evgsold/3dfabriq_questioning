import type { Metadata, Viewport } from "next";
import Script from "next/script";
import HousewivesLampQuiz from "@/components/HousewivesLampQuiz";

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Тест: Какая вы лампа по «Отчаянным домохозяйкам»? | 3D FABRIQ",
  description:
    "Пройдите интерактивный психологический тест по мотивам «Отчаянных домохозяек» и узнайте, какой дизайнерский светильник или ваза от 3d fabriq идеально отражает ваш темперамент.",
  keywords: [
    "3d fabriq",
    "отчаянные домохозяйки тест",
    "какая ты домохозяйка тест",
    "дизайнерские лампы",
    "параметрические светильники",
    "вазы 3D печать",
    "предметный дизайн",
    "интерьерный декор"
  ],
  authors: [{ name: "3D FABRIQ Studio", url: "https://3dfabriq.store" }],
  creator: "3D FABRIQ",
  publisher: "3D FABRIQ",
  metadataBase: new URL("https://3dfabriq.store"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Тест: Какая вы лампа по мотивам «Отчаянных домохозяек»?",
    description:
      "5 сюжетных дилемм загородного дома. Алгоритм определит вашу форму, светотень и авторский светильник от 3D FABRIQ.",
    url: "https://3dfabriq.store",
    siteName: "3D FABRIQ",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Превью теста: Какая вы лампа по мотивам «Отчаянных домохозяек»",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Тест: Какая вы лампа по «Отчаянным домохозяйкам»?",
    description:
      "Узнайте свой интерьерный архетип и светильник 3D FABRIQ за 2 минуты.",
    images: ["/opengraph-image"],
  },
  other: {
    "vk:image": "https://3dfabriq.store/opengraph-image",
    "telegram:channel": "@3dfabriq",
    "format-detection": "telephone=no",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://3dfabriq.store/#organization",
      "name": "3D FABRIQ",
      "url": "https://3dfabriq.store",
      "description": "Студия авторского параметрического дизайна и предметов интерьера 3D-печати."
    },
    {
      "@type": "Quiz",
      "@id": "https://3dfabriq.store/#quiz",
      "name": "Какая вы лампа по вопросам из «Отчаянных домохозяек»?",
      "description": "Интерактивный тест, определяющий предметный интерьерный архетип человека по мотивам сериала «Отчаянные домохозяйки».",
      "inLanguage": "ru",
      "publisher": {
        "@id": "https://3dfabriq.store/#organization"
      },
      "hasPart": [
        {
          "@type": "Question",
          "name": "Вам подбросили записку с текстом: «Я знаю, что ты сделала». Какова первая реакция?",
          "suggestedAnswer": [
            { "@type": "Answer", "text": "Начищу серебро, сделаю идеальную укладку и встречу шантажиста с заряженным дробовиком" },
            { "@type": "Answer", "text": "Спрячу украшения, проверю тайный счет и закажу кутюрное платье, чтобы справиться со стрессом" },
            { "@type": "Answer", "text": "Включу режим антикризисного штаба, проведу расследование и лично прижму шантажиста к стенке" },
            { "@type": "Answer", "text": "Впаду в панику, побегу к подругам, споткнусь и случайно уроню улику прямо под ноги шерифу" },
            { "@type": "Answer", "text": "Вычислю автора, предложу сделку на моих условиях и параллельно уведу у него партнера" }
          ]
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HousewivesLampQuiz />
      <noscript>
        <section className="p-8 max-w-xl mx-auto bg-[#FAF7F2] text-[#2C2416]">
          <h1>Какая вы лампа по мотивам «Отчаянных домохозяек»?</h1>
          <p>
            Психологический тест от студии параметрического дизайна 3D FABRIQ.
            Ответьте на вопросы по мотивам любимого сериала и подберите свой
            авторский светильник или вазу.
          </p>
          <p>
            Официальный сайт: <a href="https://3dfabriq.store">3dfabriq.store</a>
          </p>
        </section>
      </noscript>
    </>
  );
}