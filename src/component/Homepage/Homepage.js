import Header from "./Header/Header";
import Hero from "./Hero";
import About from "./About";
import Program from "./Program";
import Pricing from "./Pricing";
import SocialMediaIcons from "./Socialmedia/Socialmedia";

function Home() {
  return (
    <div className="App">
     
    
     <Header/>
     <main>
    
      <Hero/>
      <About/>
      <Program/>
      <Pricing/>
     
      <SocialMediaIcons/>
      
      
     </main>
    
    </div>
  );
}

export default Home;