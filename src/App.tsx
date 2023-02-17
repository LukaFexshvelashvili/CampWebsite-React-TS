import "./fonts/fonts.css";
import Navbar from "./components/Navbar";
import Titler from "./components/Titler";
import Carder from "./components/Carder";
import "./App.css";

import Section1 from "./components/Section_1/Section_1";
import Section2 from "./components/Section_2/Section_2";
import Section3 from "./components/Section_3/Section_3";
import Section4 from "./components/Section_4/Section_4";
import Section5 from "./components/Section_5/Section_5";
import Section6 from "./components/Section_6/Section_6";
import Section7 from "./components/Section_7/Section_7";
import Section8 from "./components/Section_8/Section_8";
import Section9 from "./components/Section_9/Section_9";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    document.title = "Camp React";
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Section1 />
        <Titler
          title="Our Services"
          content="The various services we provide to make your business more powerful"
        />
        <Carder />
        <Titler
          title="Our Documentation"
          content="See what our profile is like and how we work for your business"
        />
      </div>

      <Section2 />

      <Section3 />

      <Titler
        title="Working space"
        content="Let’s meet our interior room decoration"
      />
      <Section4 />

      <Titler
        title="Some of Our Great Customers"
        content="Some of the companies we have worked with"
      />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Section9 />

      <Footer />
    </div>
  );
}

export default App;
