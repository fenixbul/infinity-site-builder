// context/CookieConsentContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent === 'true') {
      setCookieConsent(true);
    } else {
      setCookieConsent(false)
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, acceptCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
