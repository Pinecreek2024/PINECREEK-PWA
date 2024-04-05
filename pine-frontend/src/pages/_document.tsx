// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* Set the appropriate language */}
        <Head>
          {/* Example of adding a Google Font */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" 
            rel="stylesheet" 
          />

          {/* Favicons */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Any additional meta tags */}
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Your website description." />

          {/* External scripts can be added here */}
          {/* <script src="https://example.com/script.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
