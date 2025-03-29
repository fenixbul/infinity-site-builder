import '../styles/global.css'; // Tailwind CSS
import Head from 'next/head';
import { CookieConsentProvider } from '../context/CookieConsentContext';
import CookieConsentModal from '../ui/components/CookieConsentModal';

function App({ Component, pageProps }) {
  const defaultTitle = "Сдружение Фонд Жеравна";
  const defaultDescription = "Подпомага развитието на културния, икономически и туристически облик на село Жеравна.";
  const defaultThumbnail = "/img/default-thumbnail.jpg"; // Default image for pages without a thumbnail

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
        {/* Dynamic Title */}
        <title>{pageProps.title || defaultTitle}</title>
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
        
        {/* Meta Description */}
        <meta name="description" content={pageProps.description || defaultDescription}></meta>
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageProps.title || defaultTitle}></meta>
        <meta property="og:description" content={pageProps.description || defaultDescription}></meta>
        <meta property="og:image" content={pageProps.thumbnail || defaultThumbnail}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={pageProps.url || "https://your-default-url.com"}></meta>
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content={pageProps.title || defaultTitle}></meta>
        <meta name="twitter:description" content={pageProps.description || defaultDescription}></meta>
        <meta name="twitter:image" content={pageProps.thumbnail || defaultThumbnail}></meta>
      </Head>
      
      <CookieConsentProvider>
        <div>
          <Component {...pageProps} />
        </div>
        <CookieConsentModal />
      </CookieConsentProvider>
    </>
  );
}

export default App;
