
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection"; // Import your new About section

import YoutubeSection from "./components/YoutubeSection"; // Import the YouTube section
import PublicationsSection from "./components/PublicationsSection"; // Import the Publications section

export default function Home() {
  return (
    <>
    <Navbar />
    
     <main>
        <Hero />
        <AboutSection /> {/* Add your new About section here */}
        {/* Other sections of your portfolio will go here */}
        <PublicationsSection /> {/* Add your Publications section here */}
      
        <YoutubeSection />
       
      </main>
    </>
  );
}
