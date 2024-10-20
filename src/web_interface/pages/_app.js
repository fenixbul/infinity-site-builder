import '../styles/global.css'; // Tailwind CSS
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head> 
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Page Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;