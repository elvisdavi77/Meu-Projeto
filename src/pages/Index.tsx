"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Elvis Dev
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Início
            </a>
            <a href="#features" className="hover:text-blue-400 transition-colors">
              Funcionalidades
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              Sobre
            </a>
            <a href="#github" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="#future" className="hover:text-blue-400 transition-colors">
              Futuro
            </a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() =>
              document.querySelector(".mobile-menu")?.classList.toggle("active")
            }
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed inset-0 bg-gray-900/95 backdrop-blur-sm transform -translate-x-full transition-transform duration-300 z-40">
        <div className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
          ×
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#home" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
            Início
          </a>
          <a href="#features" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
            Funcionalidades
          </a>
          <a href="#about" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
            Sobre
          </a>
          <a href="#github" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
            GitHub
          </a>
          <a href="#future" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>
            Futuro
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt<dyad-write path="src/pages/Index.tsx" description="Complete rewritten Index page with proper JSX, lucide icons, and future projects section">
"use client";

import { Code, Palette, Shield } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Elvis Dev
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Funcionalidades</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#github" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#future" className="hover:text-blue-400 transition-colors">Futuro</a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => document.querySelector(".mobile-menu")?.classList.toggle("active")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed inset-0 bg-gray-900/95 backdrop-blur-sm transform -translate-x-full transition-transform duration-300 z-40">
        <div
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}
        >
          ×
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#home" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>Início</a>
          <a href="#features" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>Funcionalidades</a>
          <a href="#about" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>Sobre</a>
          <a href="#github" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>GitHub</a>
          <a href="#future" className="text-xl hover:text-blue-400" onClick={() => document.querySelector(".mobile-menu")?.classList.remove("active")}>Futuro</a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Criando soluções digitais inovadoras com tecnologia de ponta
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Projetos
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-300">
                Criação de aplicações web modernas e responsivas com as melhores tecnologias do mercado.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design UI/UX</h3>
              <p className="text-gray-300">
                Interfaces intuitivas e experiências de usuário memoráveis com design moderno.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Segurança</h3>
              <p className="text-gray-300">
                Aplicações seguras e confiáveis com as melhores práticas de segurança da informação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Sobre Mim</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">ED</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Elvis Dev</h3>
                  <p className="text-gray-300 mb-4">
                    Sou um desenvolvedor full-stack apaixonado por tecnologia e inovação. Com experiência em diversas linguagens e frameworks, 
                    estou sempre buscando aprender e aplicar as melhores práticas para criar soluções digitais de alta qualidade.
                  </p>
                  <p className="text-gray-300">
                    Meu foco é desenvolver aplicações que não apenas funcionam bem, mas também proporcionam excelentes experiências 
                    aos usuários, combinando design moderno com funcionalidade robusta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 bg-gray-800/70 rounded-2xl mx-4 md:mx-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Veja meu GitHub</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore meus projetos, contribuições e ideias inovadoras. Cada repositório reflete minha paixão por desenvolvimento full‑stack e boas práticas de código.
          </p>
          <a
            href="https://github.com/elvisdavi77/Meu-Projeto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Acessar GitHub
          </a>
        </div>
      </section>

      {/* Future Projects Section */}
      <section id="future" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Futuros Projetos</h2>
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">App para Crianças com Autismo</h3>
            <p className="text-gray-300 mb-4">
              Estamos desenvolvendo um aplicativo interativo dedicado ao desenvolvimento da aprendizagem de crianças com autismo.
              O app utilizará técnicas de ensino personalizadas, jogos educativos e acompanhamento de progresso para auxiliar no desenvolvimento cognitivo e social.
            </p>
            <p className="text-gray-300">
              A interface será colorida, intuitiva e adaptada às necessidades individuais, garantindo uma experiência de aprendizagem envolvente e eficaz.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Elvis Dev. Todos os direitos reservados.</p>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;