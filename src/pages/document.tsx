import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" suppressHydrationWarning>
        <Head>
          {/* Here you can add global fonts, meta tags, etc. */}
            <title>Krister's Portfolio</title>
            <meta name="description" content="Explore the creative portfolio of Krister Munguia. Discover projects, skills, and professional journey." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter&display=swap" />
            <link rel="stylesheet" href="globals.css" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
