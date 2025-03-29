import { useRef, useEffect } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { Modal, Button } from 'flowbite-react';

const CookieConsentModal = () => {
  const { cookieConsent, acceptCookies } = useCookieConsent();
  const acceptButtonRef = useRef(null);

  if (cookieConsent !== false) return null;

  return (
    <Modal
      show={!cookieConsent}
      size="md"
      onClose={() => {}}
      initialFocus={acceptButtonRef} // Set initial focus to the "Приемам" button
    >
      <Modal.Header>Съгласие за използване на бисквитки (cookies) съгласно GDPR</Modal.Header>
      <Modal.Body>
        <p className="text-sm text-gray-500">
          Този сайт използва бисквитки за да работи с пълната си функционалност. Ползваме също Google Analytics, за да следим броя на посещенията на сайта ни, бисквитките на Google Analytics можете да контролирате през сайта на Google. С натискането на „Приемам“ вие се съгласявате с използването на ВСИЧКИ бисквитки, както и с това, че някои лични данни могат да бъдат препратени към Фонд Жеравна, например, когато ни изпращате e-mail, ние ще видим вашите имена и електронен адрес. Тези данни се използват само и единствено с цел да контактуваме с вас и не се предоставят на трети лица.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button ref={acceptButtonRef} onClick={acceptCookies} color="blue">
          Приемам
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieConsentModal;
