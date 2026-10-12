import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Projects from "@/app/components/projects";
import Experience from "@/app/components/experience";
import Skills from "@/app/components/skills";
import Education from "@/app/components/education";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Head from "next/head";

const siteUrl = "https://kristerch65.github.io/";
const title = "Krister Munguia · Software Analyst & Full-Stack Developer";
const description =
    "Software Analyst and Full-Stack Developer with 5+ years in IT. C#, .NET MVC, Angular, JavaScript, ServiceNow and Dynamics Navision. Based in San Pedro Sula, Honduras.";

const Home = () => {
    return (
        <div>
            <Head>
            {/* Here you can add global fonts, meta tags, etc. */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={siteUrl} />

                {/* Link previews (LinkedIn, WhatsApp, Facebook, X) */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${siteUrl}profile.jpg`} />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="800" />
                <meta property="og:image:alt" content="Photo of Krister Munguia" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="es_HN" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}profile.jpg`} />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Providers come from RootLayout in _app.tsx */}
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Education/>
                <Contact/>
            </main>
            <Footer/>
        </div>

    )
  }

  export default Home;
