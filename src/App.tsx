import { RefObject } from 'react';
import { Earth, User } from "lucide-react";
import Skills from "./components/Skills";

import "./App.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import { useRef, useState } from "react";
import Overlay from "./components/Overlay";
import ScrollToTop from "./components/TopToBottomScroll";

function App() {
  const [languageChange, setLanguageChange] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLanguageChange = () => {
    setLanguageChange(!languageChange);
  };

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToText = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Overlay />
      <div className="scroll-smooth">
        <header className="flex justify-end">
          <div className="fixed inline-flex space-x-10 text-xl font-semibold pr-5 bg-slate-500/20 backdrop-blur-sm shadow-lg p-6 rounded-lg">
            <button onClick={() => scrollToTop()} className="m-4 hover:text-gray-500 transition-colors duration-300">
              {languageChange ? "Sobre mim" : "About me"}
            </button>
            <button onClick={() => scrollToText(projectsRef)} className="m-4 hover:text-gray-500 transition-colors duration-200">
              {languageChange ? "Projetos" : "Projects"}
            </button>
            <button onClick={() => scrollToText(contactRef)} className="m-4 hover:text-gray-500 transition-colors duration-200">
              {languageChange ? "Contato" : "Contact"}
            </button>
          </div>
        </header>

        <div>
          <div className="flex items-center">
            <div className="bg-cover bg-center"></div>
            <img
              className="rounded-full relative -top-7 shadow-black/50 shadow-2xl -left-40 w-4/12"
              src="plangg0042.png"
              alt="Josué Moutinho Silva"
            />
            <div className="shadow-md max-w-4xl p-4">
              <div className="inline-flex items-center gap-4">
                <User size={40} />
                <h1 className="text-4xl font-bold text-black">Josué Moutinho Silva</h1>
                <h1 className="text-gray-600 text-2xl pt-2">
                  {languageChange ? "19 anos" : "19 years old"}
                </h1>
              </div>
              <h2 className="mt-7 text-lg text-center">
                {languageChange
                  ? "Tenho como objetivo inserir-me no campo da tecnologia e da informação, aprimorar meus conhecimentos na área e promover crescimento profissional a mim e à empresa."
                  : "I have the determination to enter the technology and information field, improve my knowledge on the area and promote professional growth for myself and the company."}
              </h2>
              <Skills />
            </div>
          </div>
        </div>

        <div className="fixed border-2 border-black right-0 top-24 w-60 bg-slate-500 float-right -mr-44 transition-transform hover:-translate-x-40">
          <button
            onClick={handleLanguageChange}
            className="flex items-center gap-3 p-1"
          >
            <Earth size={48} />
            <p className="text-lg font-semibold flex">
              {languageChange ? "Read in English" : "Ler em Português"}
            </p>
          </button>
        </div>

        <div className="z-10 group hover:scale-110 transition-transform duration-400 flex items-center fixed size-16 border-2 border-black bg-slate-500 bottom-2 left-2">
          <a
            href={
              languageChange
                ? "https://drive.google.com/file/d/1FO61s45Nagi-GmPUa2twxz_mkwF_lWAz/view?usp=sharing"
                : "https://drive.google.com/file/d/1cXhsEKeo3Q4uUhxeFM6pbEu4It7grRJN/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-clipboard2-minus text-5xl ml-1"></i>
          </a>
        </div>

        <div ref={projectsRef}>
          <Grid languageChange={languageChange} />
        </div>

        <div ref={contactRef}>
        <Footer languageChange={languageChange} />
        </div>

        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
