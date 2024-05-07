import About from "@/app/components/about";
import RootLayout from "./layout"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


const Home = () => {
    return (
        <RootLayout >
            <Navbar/>
            <h2 className="text-3xl text-pink-500">Home Page</h2>
            <About/>
            <Footer/>
        </RootLayout>
        
    )
  }
  
  export default Home;