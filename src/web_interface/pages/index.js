import HeroSection from "../ui/components/Sections/HeroSection";
import Layout from "../ui/components/Layout";
import CTASection from "../ui/components/Sections/CTASection";
import CardListSection from "../ui/components/Sections/CardListSection";
import BackgroundSection from "../ui/components/Sections/BackgroundSection";

function Home() {
  const heroSection = {
    backgroundImage: "/img/homepage-cover.jpg",
    title: "Сдружение Фонд Жеравна",
    fullScreen: true,
  };

  const cards = [
    {
      image: '/img/calendar-mini.jpg',
      title: 'Календар',
      description: 'Излезе от печат петият календар за 2025. със снимки на Жеравна с подбрани снимки от началото на настоящия век. Ще го изпратим на всички, които направят дарение от 20 лв по банков път (пощенските разходи са за сметка…',
      link: '/posts/2025/calendar',
      linkText: 'Виж повече'
    },
    {
      image: '/img/book-mini.jpg',
      title: 'Ново издание на книгата Жеравна',
      description: 'Излезе от печат ново издание на фундаменталния труд на Данаил Константинов „Жеравна в миналото и до днешно време“, издаден през 1948 г. от читалище Единство – с. Жеравна.',
      link: '/posts/book',
      linkText: 'Виж повече'
    },
    {
      image: '/img/posts-card.jpg',
      title: 'Публикации',
      description: 'Публикациите отразяват развитието на Жеравна, както и значими събития и инициативи, които допринасят за напредъка на селото и фонда.',
      link: '/posts',
      linkText: 'Виж повече'
    }
  ];

  const missionContent = [
    'Основната ни мисия е да запазим Жеравна за бъдещите поколения във вида, в който я познаваме днес.',
    'Целите на фонда са:',
    'да насърчава, подпомага и развива културния, икономически и туристически облик на село Жеравна...',
    // Add more paragraphs as needed
  ];

  const ctaData = {
    header: "Дарения",
    content: [
      'За да може „Фонд Жеравна“ да продължи да работи за съхранението и развитието на Жеравна са нужни дарения. Разчитаме на всички жители, гости и приятели на Жеравна да ни подкрепят не само с дарения, но също така и с идеи.',
      'Желаещите да ни подпомогнат с парично дарение могат да го направят тук:'
    ],
    subHeader:"Благодарим Ви!",
    subHeaderContent: "Фонд Жеравна благодари на всички дарители и помощници в благородното дело за съхранението и развитието на Жеравна!",
    buttonText: "Направи дарение",
    headerText: "Дарения",
    buttonLink: "/donations",
    imageSrc: "/img/donations-cover.jpg"
  };
  
  const newYearMessageData = {
    image: "/img/message-bg.jpg",
    title: "Сдружение „Фонд Жеравна“ ви пожелава Весела Коледа и щастлива Нова 2026 година.",
    fullScreen: true,
    useOverlay: true,
    overlayDepth: 0.4,
    textColor: "text-white",
    textHeaderColor: "text-white",
    containerSize: "default",
    textAlign: "left"
  };

  const backgroundSectionData = {
    image: "/img/homepage-our-mission-cover.jpg",
    title: `
      Нашата мисия e да запазим Жеравна
      за бъдещите поколения.
    `,
    subTitle: 'Целите на фонда са:',
    content: `
  - Да насърчава, подпомага и развива културния, икономически и туристически облик на село Жеравна, като чрез това съдейства за възраждането му като развито културно, икономическо и туристическо селище;
  - Да спомага за развитието на инвестиционна среда и инфраструктурата в село Жеравна с цел неговото икономическо развитие;
  - Да насърчава, подпомага и развива туризма и други стопански дейности;
  - Да работи за опазване и възстановяване на природата, околната среда и предотвратяване на екологични проблеми, за формиране на природозащитна култура и повишаване на общественото съзнание относно начините за опазване и възстановяване на околната среда.
  `,
    useOverlay: false
  };

  return (
    <>
      <Layout>
        <div className="">
          {/* <BackgroundSection {...newYearMessageData} /> */}
          <BackgroundSection {...backgroundSectionData} textColor="text-black" textHeaderColor="text-[#784D2A]" />
          {/* <HeroSection {...heroSection} /> */}
          <CTASection {...ctaData} />
          <CardListSection cards={cards} />
        </div>
      </Layout>
    </>
  );
}

export default Home;
