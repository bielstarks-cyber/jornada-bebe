import React, { useState } from 'react';

const eventosBebe = [
  {
    id: 1,
    idade: "0 Meses",
    titulo: "O Grande Dia! 👶",
    descricao: "O dia em que nossas vidas mudaram para sempre. Bem-vindo ao mundo!",
    imagem: "/fotos/nascimento.jpeg" // Esse será o nome do arquivo da foto
  },
  {
    id: 2,
    idade: "0 Meses",
    titulo: "Primeiro Bainho com o papai 🛀",
    descricao: "Descobrindo como dar as melhores gargalhadas e derreter corações.",
    imagem: "/fotos/banho.jpg"
  },
  {
    id: 3,
    idade: "0 Meses",
    titulo: "A Primeira roupinha 🎀",
    descricao: "Uma bagunça deliciosa! Provando cenoura e maçã pela primeira vez.",
    imagem: "/fotos/roupinha.jpeg"
  },
  {
    id: 4,
    idade: "o Primeiro soninho com papai",
    titulo: "Primeiros Passos 👣",
    descricao: "O mundo ficou pequeno! Correndo pela casa toda.",
    imagem: "/fotos/soninho.jpeg"
  },
  {
    id: 5,
    idade: "o Primeiro soninho com a mamãe",
    titulo: "Primeiros Passos 👣",
    descricao: "O mundo ficou pequeno! Correndo pela casa toda.",
    imagem: "/fotos/soninho_mamae.jpeg"
  }


];

export default function BabyTimeline() {

  // Agrupar eventos por idade para os quadros mensais
  const groupedEvents = eventosBebe.reduce((acc, evento) => {
    const idadeKey = evento.idade;
    if (!acc[idadeKey]) {
      acc[idadeKey] = [];
    }
    acc[idadeKey].push(evento);
    return acc;
  }, {});

  // Componente interno para um quadro de linha do tempo mensal
  const MonthTimelineBox = ({ title, events }) => {
    const [isOpen, setIsOpen] = useState(false); // Começa fechado por padrão

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 relative">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <svg 
            className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isOpen && (
          <div className="mt-6 space-y-8 relative border-l-2 border-blue-100 ml-3"> {/* Mini-timeline interna com sua própria linha */}
            {events.map((evento) => (
              <div key={evento.id} className="relative pl-6"> 
                {/* Bolinha da Timeline para eventos internos ao quadro */}
                <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-2 ring-4 ring-blue-50"></span>
                
                <div className="bg-gray-50 p-4 rounded-xl shadow-xs border border-gray-100"> 
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                    {evento.idade}
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mt-1 mb-2"> 
                    {evento.titulo}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4"> 
                    {evento.descricao}
                  </p>

                  {/* Container da Foto Real */}
                  <div className="w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={evento.imagem} 
                      alt={`Foto marcando ${evento.idade}`}
                      className="w-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8"> {/* Main container with flex layout */}
        
        {/* Coluna da Esquerda (Cabeçalho e Galeria Geral) */}
        <div className="md:w-1/2">
          {/* Cabeçalho */}
          <div className="text-center md:text-left mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
              Nossa Maior Aventura
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              A linha do tempo do nosso amorzinho.
            </p>
          </div>

        </div>

        {/* Coluna da Direita (Linha do Tempo Visual e Quadros Mensais) */}
        <div className="md:w-1/2 relative flex flex-col items-start">
          {/* Linha do Tempo Vertical Azul Principal */}
          <div className="absolute left-[12px] top-0 w-1 h-full bg-blue-200 hidden md:block z-0"></div> {/* Ajuste 'left' para alinhar a linha com os quadros */}
          
          <div className="flex-1 w-full relative z-10"> {/* Container para os quadros mensais */}
            {Object.entries(groupedEvents).map(([monthKey, eventsInMonth]) => (
              <MonthTimelineBox key={monthKey} title={monthKey} events={eventsInMonth} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
