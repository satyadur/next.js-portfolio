import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
   <>
   <Navbar />
   <Header />
   <AboutMe />
   <Services />
   <Work />
   <Contact />
   </>
  );
}
