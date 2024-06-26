import About from "@/app/components/about";
import RootLayout from "./layout"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Head from "next/head";


const Home = () => {
    return (
        <div>
            <Head>
            {/* Here you can add global fonts, meta tags, etc. */}
                <title>Krister&#39;s Portfolio</title>
                <meta name="description" content="Explore the creative portfolio of Krister Munguia. Discover projects, skills, and professional journey." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter&display=swap" />
                <link rel="stylesheet" href="globals.css" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RootLayout >
                <Navbar/>
                <About/>
                <Footer/>
            </RootLayout>
        </div>
        
    )
  }
  
  export default Home;