import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/hero";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/servivices";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppPricing from "./components/pricing";
import AppBlog from "./components/block";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
