import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { HowTo } from "../components/HowTo";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowTo />
      <Footer />
    </div>
  );
}
