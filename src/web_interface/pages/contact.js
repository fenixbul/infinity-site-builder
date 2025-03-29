import Layout from "../ui/components/Layout";
import HeroSection from "../ui/components/Sections/HeroSection";
import ReactMarkdown from 'react-markdown';
import MarkdownLinkRenderer from "../ui/components/MarkdownLinkRenderer";

export async function getStaticProps() {
  return {
    props: {
      title: 'Контакти - Сдружение Фонд Жеравна',
    },
  };
}

function Contact() {
  const heroSection = {
    backgroundImage: "/img/contact-cover.jpg",
    title: "Контакти",
    text: "center"
  };

  const pageContent = `
  **E-mail:**  \n[fundzheravna@gmail.com](mailto:fundzheravna@gmail.com)

  ---

  **Facebook страница:**  \n[Фонд-Жеравна-127374328820346](https://www.facebook.com/fundjeravna/)

  ---

  **Телефон:**  \n0885 722 545

  ---

  **Сдружение "Фонд Жеравна":**  \nЙовина Къща  \n8988 с. Жеравна  \nобл. Сливен, общ. Котел
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

export default Contact;
