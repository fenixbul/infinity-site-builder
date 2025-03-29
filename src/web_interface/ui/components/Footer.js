import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2020; // You can adjust the starting year as needed
  const yearRange = `${startYear}-${currentYear}`;

  return (
    <Footer className=" shadow-none container px-4 mx-auto my-6">
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center justify-center sm:space-x-3 header-font">
          <Footer.Copyright className="text-base" href="#" by={`Сдружение Фонд Жеравна ${yearRange}`} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center relative bottom-[2px]">
            <Footer.Icon href="https://www.facebook.com/fundjeravna/" target="_blank" icon={BsFacebook} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
