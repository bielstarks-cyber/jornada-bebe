import React from 'react';

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
                <div className="w-full h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                  <img 
                    src={evento.imagem} 
                    alt={`Foto marcando ${evento.idade}`}
                    //className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    // O object-cover garante que a foto preencha o espaço sem amassar a imagem
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