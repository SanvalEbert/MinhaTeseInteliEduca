import React from 'react';
import { CheckCircle, XCircle, Download } from 'lucide-react';

const Article3 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full mb-4">
              Artigo 3
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Validação do Modelo Conceitual de Ambientes Virtuais de Ensino e Aprendizagem com Técnicas de Inteligência Artificial
            </h1>
            <p className="text-xl text-purple-100">
              Artigo não submetido - Conteúdo integral na Tese de Doutorado
            </p>
          </div>
        </div>
      </section>

      {/* Resumo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo</h2>
            <p className="text-gray-700 leading-relaxed">
              Este artigo detalha o processo de validação qualitativa do modelo conceitual proposto, 
              envolvendo especialistas da área de tecnologia educacional e inteligência artificial. 
              A validação buscou verificar a adequação, relevância e aplicabilidade do modelo em 
              diferentes contextos de ensino e aprendizagem.
            </p>
            <div className="mt-6 text-center">
              <a
                href="https://drive.google.com/file/d/19D3U2DBXtVNJUNVJrSrWN9Nt86WNedWM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Acessar Tese Completa (Google Drive)
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia de Validação */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metodologia de Validação</h2>
            <p className="text-xl text-gray-600">
              Validação qualitativa com especialistas (Método Vali-Quali)
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                A validação do modelo conceitual foi realizada por meio de um estudo qualitativo, 
                utilizando o método Vali-Quali, que envolve a avaliação de especialistas por meio 
                de questionários e entrevistas semiestruturadas. Foram selecionados especialistas 
                com experiência em inteligência artificial, educação e design de sistemas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                O processo de validação buscou coletar percepções e sugestões dos especialistas 
                sobre a clareza, completude, consistência e aplicabilidade do modelo, contribuindo 
                para seu refinamento e robustez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados da Validação */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resultados da Validação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Pontos Fortes</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Clareza e coerência do modelo</li>
                <li>• Abrangência das dimensões propostas</li>
                <li>• Potencial de aplicabilidade em diversos contextos</li>
                <li>• Relevância para a área de tecnologia educacional</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Sugestões de Melhoria</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Detalhamento de exemplos práticos de implementação</li>
                <li>• Inclusão de métricas de avaliação de impacto</li>
                <li>• Exploração de aspectos éticos da IA na educação</li>
                <li>• Adaptação para diferentes níveis de ensino</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Considerações Finais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Considerações Finais</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              A validação do modelo conceitual evidenciou sua consistência e pertinência para a área de estudo, contribuindo com subsídios relevantes para seu aprimoramento contínuo. As contribuições dos especialistas poderão ser consideradas em versões futuras do modelo e em investigações complementares.
            </p>
          </div>
        </div>
      </section>

      {/* Figuras e Tabelas */}
      {/* Seção removida conforme solicitação do usuário */}
    </div>
  );
};

export default Article3;

