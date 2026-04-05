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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Nossa Maior Aventura
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            A linha do tempo do nosso amorzinho.
          </p>
        </div>

        {/* Quadro Grande de Fotos (Galeria) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleGallery}>
            <h2 className="text-2xl font-bold text-gray-800">Todas as Fotos</h2>
            <svg 
              className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : 'rotate-0'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isGalleryOpen && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {eventosBebe.map((evento) => (
                <div key={`gallery-${evento.id}`} className="relative w-full overflow-hidden rounded-lg shadow-sm border border-gray-200">
                  <img 
                    src={evento.imagem} 
                    alt={`Foto de ${evento.titulo}`}
                    className="w-full h-auto object-contain bg-gray-50"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-2 text-white text-xs font-semibold">
                    {evento.titulo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-200 ml-3 md:ml-6">
          {eventosBebe.map((evento) => (
            <div key={evento.id} className="mb-12 ml-6 md:ml-10">
              
              {/* Bolinha da Timeline */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full -left-[14px] ring-8 ring-blue-50">
              </span>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">
                  {evento.idade}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mt-1 mb-2">
                  {evento.titulo}
                </h3>
                <p className="text-gray-600 mb-6">
                  {evento.descricao}
                </p>

                {/* Container da Foto Real */}
                <div className="w-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
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

      </div>
    </div>
  );
}
