import React from 'react';
import { Lightbulb, Cog, Users, BarChart3, Brain, Target, Download } from 'lucide-react';

const Article2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full mb-4">
              Artigo 2
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Modelo Conceitual para Ambientes Virtuais de Ensino e Aprendizagem com Inteligência Artificial
            </h1>
            <p className="text-xl text-green-100">
              IEEE Transactions on Learning Technologies - Submetido
            </p>
          </div>
        </div>
      </section>

      {/* Resumo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo</h2>
            <p className="text-gray-700 leading-relaxed">
              Este artigo apresenta o desenvolvimento de um modelo conceitual para ambientes virtuais de ensino e 
              aprendizagem com integração de técnicas de inteligência artificial. O modelo foi desenvolvido utilizando 
              a abordagem Design Science Research (DSR) e organiza-se em quatro dimensões principais: personalização, 
              engajamento, monitoramento e análise de desempenho.
            </p>
            <div className="mt-6 text-center">
              <a
                href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.174888374.45497793/v1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Acessar Artigo no TechRxiv
                <Download className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-gray-600 mt-3">
                Seguindo a orientação do retorno da submissão do artigo, enviamos o paper para o servidor de pré-impressão do IEEE com o objetivo de disseminar o trabalho rapidamente para um público amplo e obter feedback da comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abordagem Metodológica */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Science Research</h2>
            <p className="text-xl text-gray-600">
              Abordagem metodológica para desenvolvimento do modelo conceitual
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                A abordagem Design Science Research (DSR) foi escolhida por sua adequação ao desenvolvimento de 
                artefatos inovadores que visam resolver problemas práticos. O DSR combina rigor científico com 
                relevância prática, sendo ideal para a criação de modelos conceituais em áreas emergentes como 
                a integração de IA na educação.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O processo de desenvolvimento seguiu as etapas clássicas do DSR: identificação do problema, 
                definição dos objetivos, design e desenvolvimento do artefato, demonstração, avaliação e comunicação 
                dos resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo Conceitual - 4 Dimensões */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modelo Conceitual de IA em AVEAs</h2>
            <p className="text-xl text-gray-600">
              Quatro dimensões integradas para suporte pedagógico com IA
            </p>
          </div>
          
          {/* Dimensão 1: Personalização */}
          <div className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dimensão 1: Personalização</h3>
                  <p className="text-gray-600">Adaptação às necessidades individuais dos estudantes</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Funcionalidades</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Perfil de aprendizagem do estudante</li>
                    <li>• Recomendação de conteúdos</li>
                    <li>• Adaptação de trilhas de aprendizagem</li>
                    <li>• Personalização de interfaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Técnicas de IA</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sistemas de recomendação</li>
                    <li>• Algoritmos de clustering</li>
                    <li>• Aprendizado de máquina supervisionado</li>
                    <li>• Mineração de dados educacionais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dimensão 2: Engajamento */}
          <div className="mb-16">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dimensão 2: Engajamento</h3>
                  <p className="text-gray-600">Estratégias para manter interesse e participação ativa</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Funcionalidades</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Gamificação inteligente</li>
                    <li>• Chatbots pedagógicos</li>
                    <li>• Feedback em tempo real</li>
                    <li>• Colaboração assistida por IA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Técnicas de IA</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Processamento de linguagem natural</li>
                    <li>• Análise de sentimentos</li>
                    <li>• Agentes conversacionais</li>
                    <li>• Sistemas de recompensa adaptativos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dimensão 3: Monitoramento */}
          <div className="mb-16">
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dimensão 3: Monitoramento</h3>
                  <p className="text-gray-600">Acompanhamento contínuo do progresso dos estudantes</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Funcionalidades</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rastreamento de atividades</li>
                    <li>• Detecção de dificuldades</li>
                    <li>• Alertas automáticos</li>
                    <li>• Dashboards inteligentes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Técnicas de IA</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Learning Analytics</li>
                    <li>• Detecção de anomalias</li>
                    <li>• Análise preditiva</li>
                    <li>• Processamento de eventos complexos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dimensão 4: Análise de Desempenho */}
          <div className="mb-16">
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dimensão 4: Análise de Desempenho</h3>
                  <p className="text-gray-600">Avaliação e feedback baseados em dados e métricas</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Funcionalidades</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Avaliação automatizada</li>
                    <li>• Análise de competências</li>
                    <li>• Relatórios inteligentes</li>
                    <li>• Predição de desempenho</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Técnicas de IA</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Modelos de regressão</li>
                    <li>• Redes neurais profundas</li>
                    <li>• Análise de padrões</li>
                    <li>• Mineração de processos educacionais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura do Modelo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Arquitetura do Modelo</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                O modelo conceitual proposto apresenta uma arquitetura modular e flexível, permitindo a implementação 
                gradual das diferentes dimensões conforme as necessidades específicas de cada ambiente educacional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A integração entre as dimensões é facilitada por uma camada de orquestração que coordena as diferentes 
                funcionalidades de IA, garantindo coerência e eficiência no processamento das informações educacionais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O modelo foi projetado para ser agnóstico em relação à plataforma tecnológica, podendo ser implementado 
                em diferentes infraestruturas de nuvem como AWS, Azure ou Google Cloud Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados e Discussões */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resultados e Discussões</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Inovação</h3>
              </div>
              <p className="text-gray-600">
                O modelo proposto representa uma contribuição inovadora ao estruturar de forma sistemática a 
                integração de IA em ambientes educacionais, preenchendo uma lacuna identificada na literatura.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Cog className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Aplicabilidade</h3>
              </div>
              <p className="text-gray-600">
                A modularidade do modelo permite sua aplicação em diferentes contextos educacionais, desde 
                instituições de ensino básico até programas de formação corporativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Figuras e Tabelas */}
      {/* Seção removida conforme solicitação do usuário */}

      {/* Considerações Finais */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Considerações Finais</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
          O modelo conceitual desenvolvido pode representar um avanço na estruturação da integração de técnicas de inteligência artificial em ambientes virtuais de ensino e aprendizagem. As quatro dimensões propostas oferecem um framework abrangente e prático para orientar implementações futuras.
A validação do modelo, apresentada no terceiro artigo desta tese, pareceu adequada e com potencial de aplicação em contextos educacionais reais, abrindo rotas para reconhecimento da relevância da proposta para a comunidade acadêmica e profissional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Como desdobramento desta pesquisa, foi desenvolvida a plataforma InteliEduca, que materializa o modelo 
              conceitual em uma aplicação web interativa, facilitando sua compreensão e aplicação prática.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article2;

