import About from "@/app/components/about";
import RootLayout from "./layout"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


const Home = () => {
    return (
        <RootLayout >
            <Navbar/>
            <About/>
            <Footer/>
        </RootLayout>
        
    )
  }
  
  export default Home;