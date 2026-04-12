import Header from "./components/Header";
import Hero from "./components/Hero";
import BusinessAreas from "./components/BusinessAreas";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import Company from "./components/Company";
import LocationMap from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BusinessAreas />
        <Solutions />
        <Portfolio />
        <Company />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}