import About from "@/section/About";
import Benefits from "@/section/Benefits";
import Contact from "@/section/Contact";
import Faq from "@/section/Faq";
import Features from "@/section/Features";
import Hero from "@/section/Hero";
import Industries from "@/section/Industries";
import Integration from "@/section/Integration";
import Partners from "@/section/Partners";
import Products from "@/section/Products";
import Service from "@/section/Service";
import Success_Stories from "@/section/Success_Stories";
import Support from "@/section/Support";
import Vision from "@/section/Vision";
import Workflow from "@/section/Workflow";
// import "./index.css";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Features />
      <Workflow />
      <Products />
      <Benefits />
      <Success_Stories />
      <Partners />
      <Industries />
      <Service />
      <Integration />
      <Support />
      <Faq />
      <Contact />
    </>
  );
}
