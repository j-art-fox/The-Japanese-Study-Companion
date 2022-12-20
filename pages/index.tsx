import FooterComponent from "../components/Footer";
import HeroComponent from "../components/Hero";
import { HowToComponent } from "../components/HowTo";
import NavbarComponent from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <HowToComponent />
      <FooterComponent />
    </div>
  );
}
