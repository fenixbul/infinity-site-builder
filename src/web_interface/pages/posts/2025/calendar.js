// pages/posts/[slug].js
import Layout from "../../../ui/components/Layout";
import PostTemplate from "../../../ui/components/PostTemplate"

export async function getStaticProps() {
  return {
    props: {
      title: 'Календар на Фонд Жеравна за 2025 г. - Сдружение Фонд Жеравна',
      thumbnail: '/img/calendar-big.jpg'
    },
  };
}

// Mock Data: Replace this with real data fetching from an API or database.
const post = {
  title: "Календар на Фонд Жеравна за 2025 г.",
  thumbnail: "/img/calendar-big.jpg",
  description: "",
  content: `
  ### Излезе от печат петият календар за 2025г. със снимки на Жеравна
  Ще го изпратим на всички, които направят дарение от 20 лв по банков път (пощенските разходи са за сметка на получателя, за изпращане в чужбина добавете 12 лв към сумата за дарение). Набраните средства ще се използват за подпомагане на дейности в селото, като довършване на настилката на детската площадка, възстановяване на сградата на читалището (която е дарена от инж. В. Ранков през 1941 год), както и за подпомагане на кметството да продължи дейности по поддържане на културния и архитектурен облик на селото.

  Календарите можете да намерите и в сувенирните магазини в селото.

  Надяваме се с даренията на всички вас – посетители, приятели, жители на Жеравна, тези цели да могат да се осъществят.

  ### Важно!!!
  **Направилите дарение по [банковите сметки на Фонд Жеравна](/donations) трябва да ни изпратят по e-мейла (fundzheravna@gmail.com) попълнен протокол за дарение, който можете да свалите от [ТУК](/docs/donation_protocol_calendar_2023.pdf) (PDF формат, с възможност за попълване директно на компютър) или [ТУК](/docs/protocol_calendar_fund_zheravna.docx) (MS Word doc файл), както и точни имена, адрес и телефон на получателя на календара – всички тези данни са изискват от куриерските фирми.**

  Лимитиран брой календари са налични в сувенирните магазини в Жеравна.

  Специално за жеравненци: можете да дарите 20 лв. (или повече, ако желаете) при Васил Евтимов, който ще оформи протокол за дарение и ще ви даде календар.
  `,
};

export default function YearOverview2023() {
  return (
    <Layout>
      <PostTemplate post={post} />
    </Layout>
  );
}