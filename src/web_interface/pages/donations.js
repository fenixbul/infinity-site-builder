import Layout from "../ui/components/Layout";
import MarkdownLinkRenderer from "../ui/components/MarkdownLinkRenderer";
import HeroSection from "../ui/components/Sections/HeroSection";
import ReactMarkdown from 'react-markdown';

function Donations() {
  const heroSection = {
    backgroundImage: "/img/donations-header.jpg",
    title: "Дарения",
    text: "center"
  };

  const pageContent = `
  За да може **„Фонд Жеравна“** да продължи да работи за съхранението и развитието на Жеравна са нужни дарения. Разчитаме на всички жители, гости и приятели на Жеравна да ни подкрепят не само с дарения, но също така и с идеи.

  Желаещите да ни подпомогнат с парично дарение могат да го направят на следните сметки:

  **Сдружение „Фонд Жеравна“**  
  Банка ДСК клон Котел, BIC STSABGSF  
  **IBAN:** BG29 STSA 9300 0027 2597 69

  **ЕИК/ПИК:** 206175161

  ---

  ### ВАЖНО!!!!
  След като преведете желаната от Вас сума, трябва да ни изпратите по e-мейла (fundzheravna@gmail.com) попълнен протокол за дарение, който можете да свалите от [ТУК](./docs/протокол_дарение_пари.docx) (MS Word формат) или [ТУК](./docs/протокол_дарение_пари.pdf) (PDF формат, с полета за попълване директно на компютър).

  ---

  ![Дърворезба от къщата на Сава Филаретов в Жеравна](./img/donations-img.jpg)
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

export default Donations;
