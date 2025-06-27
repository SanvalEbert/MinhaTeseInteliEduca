import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url("/MinhaTeseInteliEduca/1.ImagemdaPrimeiraSessao.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              InteliEduca
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Modelo Conceitual para Ambientes Virtuais de Ensino e Aprendizagem com Integração de Técnicas de Inteligência Artificial
            </p>
            <p className="text-lg leading-relaxed mb-8">
              O avanço dos Ambientes Virtuais de Ensino e Aprendizagem (AVEAs) e a crescente adoção de técnicas de Inteligência Artificial (IA) na educação evidenciam desafios relacionados à personalização, ao monitoramento e ao suporte aos processos de ensino e aprendizagem. Embora o uso da IA nesses ambientes esteja em expansão, observa-se a ausência de modelos conceituais que orientem, de forma estruturada, sua integração pedagógica. Esta tese teve como objetivo desenvolver um modelo conceitual para AVEAs com incorporação de técnicas de IA, voltado ao suporte de processos educacionais. Estruturada no formato multipaper, a pesquisa foi conduzida em três etapas metodológicas: revisão sistemática da literatura, desenvolvimento do modelo com base na abordagem Design Science Research e validação qualitativa com especialistas por meio do método Vali-Quali. O modelo resultante organiza-se em quatro dimensões, personalização, engajamento, monitoramento e análise de desempenho, que reúnem processos e funcionalidades orientadas à mediação pedagógica com suporte da IA. Como desdobramento, a pesquisa originou o desenvolvimento da plataforma web InteliEduca, que representa interativamente o modelo conceitual proposto. A aplicação visa ampliar a acessibilidade, a compreensão e a aplicabilidade do modelo em contextos reais, funcionando como recurso de apoio à formação, à pesquisa e à inovação educacional. Os resultados da tese contribuem de forma teórica, metodológica e aplicada, oferecendo um referencial estruturado para a integração da IA na educação, com potencial de implementação em plataformas como AWS, Azure e Google Cloud. Além disso, aponta direções para estudos futuros, incluindo a construção prática dos modelos de IA associados às dimensões propostas, bem como sua implementação em ambientes educacionais reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/modelo"
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
              >
                Explorar o Modelo
              </Link>
              <Link
                to="/sobre"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg"
              >
                Explorar a Tese
              </Link>
              <Link
                to="/artigo1"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg"
              >
                Ver Artigos
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Imagem ou ilustração aqui */}
            {/* <img src="/path/to/your/hero-image.png" alt="Hero" className="w-full max-w-md rounded-lg shadow-xl" /> */}
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">O que você encontrará no InteliEduca</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Modelo Conceitual Detalhado</h3>
              <p className="text-gray-600">Explore o modelo conceitual desenvolvido, suas dimensões e aplicações práticas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Artigos Científicos</h3>
              <p className="text-gray-600">Acesse os três artigos que compõem a tese, com links para as publicações originais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recursos para Defesa</h3>
              <p className="text-gray-600">Conteúdo organizado para auxiliar na apresentação da sua tese de doutorado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


