import Layout from "../ui/components/Layout";
import HeroSection from "../ui/components/Sections/HeroSection";
import ReactMarkdown from 'react-markdown';
import MarkdownLinkRenderer from "../ui/components/MarkdownLinkRenderer";

export async function getStaticProps() {
  return {
    props: {
      title: 'За Фонд Жеравна - Сдружение Фонд Жеравна',
    },
  };
}

function About() {
  const heroSection = {
    backgroundImage: "/img/about-us-cover.jpg",
    title: "За Фонд Жеравна",
    text: "center"
  };

  const pageContent = `
  #### Основните цели на Фонда са:
  
  - Да насърчава, подпомага и развива културния, икономически и туристически облик на село Жеравна, като чрез това съдейства за възраждането му като развито културно, икономическо и туристическо селище;
  - Да спомага за развитието на инвестиционна среда и инфраструктурата в село Жеравна с цел неговото икономическо развитие;
  - Да насърчава, подпомага и развива туризма и други стопански дейности;
  - Да работи за опазване и възстановяване на природата, околната среда и предотвратяване на екологични проблеми, за формиране на природозащитна култура и повишаване на общественото съзнание относно начините за опазване и възстановяване на околната среда.

  ---

  #### Документи

  - [УСТАВ 2020](/docs/ustav2020.pdf)
  - [Заявление за членство](/docs/zayawlenieChlenstvo.docx)

  ---

  #### Отчети

  - 2023
    - [Отчет за приходи и разходи за 2023г.](/docs/2023-НСЦ-Отчет-за-приходите-и-разходите-от-нестопанска-дейност-за-2023-година.pdf)
    - [Счетоводен баланс за 2023г.](/docs/2023-НСЦ-Счетоводен-баланс-към-31.12.2023-година.pdf)
  - 2022
    - [Отчет за приходи и разходи за 2022г.](/docs/2022-НСЦ-ОПРНСД.pdf)
    - [Счетоводен баланс за 2022г.](/docs/2022-НСЦ-БАЛАНС.pdf)
    - [Протокол от общо събрание от 20 Май 2022г.](/docs/Protocol_OS_May-2022.pdf)
  - 2021
    - [Отчет за приходи и разходи за 2021г.](/docs/2021_OPR_Fond_Zheravna.pdf)
    - [Счетоводен баланс за 2021г.](/docs/2021-Balance_Fond_Zheravna.pdf)

  ---

  #### Данни за регистрацията на Фонда:  \nАдрес:  \n„Йовина къща“  \nс. Жеравна 8988, община Котел  \nЕИК: 206175161
  
  ---

  #### Представляващ и председател на управителния съвет:  \nМарин Маринов

  ---

  #### Управителен съвет:  \nд-р Валентина Митева  \nМарин Маринов  \nРалица Раева
  `

  return (
    <>
      <Layout>
        <div className="bg-primary-bg">
          <HeroSection {...heroSection} />
          <div className="container sm:px-6 mx-auto sm:py-6">
            <div className="bg-white shadow-md rounded-lg border border-gray-200 md:p-10 p-4 max-w-[900px] mx-auto markdown">
              <ReactMarkdown components={{ a: MarkdownLinkRenderer }}>
                {pageContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
