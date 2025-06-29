import React from 'react';

const ModelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelo Conceitual
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Um modelo estruturado para integração de técnicas de Inteligência Artificial em Ambientes Virtuais de Ensino e Aprendizagem
          </p>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visão Geral do Modelo</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              O modelo conceitual foi desenvolvido utilizando a abordagem Design Science Research (DSR) e organiza-se em quatro dimensões principais que orientam a integração pedagógica da IA.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metodologia do Estudo</h3>
              <p className="text-gray-600 mb-6">
                O diagrama ilustra a sequência metodológica adotada para integrar a fundamentação teórica e a construção prática de um artefato orientado à incorporação de inteligência artificial em ambientes virtuais de ensino e aprendizagem. A etapa inicial consistiu em investigação exploratória descritiva estruturada em revisão sistemática de literatura sobre aplicações de IA em AVAs, em análise dos desafios associados à adoção dessas tecnologias e em mapeamento de lacunas conceituais na produção acadêmica. Esse procedimento permitiu caracterizar o estado da arte e fundamentar a proposição de um modelo conceitual preliminar.
Na fase subsequente, empregou-se a abordagem Design Science Research (DSR) para viabilizar ciclos iterativos de construção, avaliação e refinamento do artefato. No âmbito da pesquisa, o modelo conceitual foi desenvolvido a partir da articulação de fundamentos teóricos de áreas como educação, mineração de dados, inteligência artificial, ambientes educacionais, adequados às especificidades dos AVEAs. O processo de desenvolvimento incluiu a definição de mecanismos de interação, a formulação de critérios para avaliação de eficácia e a elaboração de protocolos de uso aplicáveis tanto a implementações pontuais quanto a estudos de caso de maior escala. Dando continuidade, delineiam-se os fundamentos de Machine Learning e Deep Learning que sustentam o modelo conceitual.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img 
		src={import.meta.env.BASE_URL + 'MetodologiadoEstudo@2x.png'}
                alt="Metodologia do Estudo" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning e Deep Learning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-lg">
              <img 
                src={import.meta.env.BASE_URL + 'MachineLearningeDeepLearning@2x.png'} 
                alt="Taxonomia de Machine Learning e Deep Learning" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fundamentos de Machine Learning e Deep Learning</h3>
              <p className="text-gray-600 mb-6">
                O modelo conceitual fundamenta-se em diferentes tipos de aprendizado de máquina, incluindo aprendizado supervisionado, não supervisionado, por reforço e aprendizado profundo. Cada tipo oferece funcionalidades específicas para diferentes contextos educacionais.
              </p>
              <p className="text-gray-600 mb-6">
                O aprendizado profundo, como subconjunto do machine learning, é particularmente eficiente para conjuntos de dados pequenos e estruturados, melhorando a acurácia dos modelos de aprendizado de máquina em aplicações como visão computacional, processamento de linguagem natural e sistemas de recomendação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo Conceitual Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Modelo Conceitual de AVEA com IA</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              O modelo resultante organiza-se em quatro dimensões: personalização, engajamento, monitoramento e análise de desempenho, que reúnem processos e funcionalidades orientadas às relações de ensino e aprendizagem com suporte da IA.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <img 
	      src={import.meta.env.BASE_URL + 'ModelodeAVEAcomIA@2x.png'}
              alt="Modelo de AVEA com IA" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Fluxograma do Modelo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fluxograma do Modelo Conceitual</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              O fluxograma apresenta o ciclo completo de funcionamento do modelo, desde a entrada de dados dos estudantes até a análise de resultados e ajustes contínuos. O processamento com inteligência artificial permeia todas as etapas, proporcionando análise de padrões de aprendizagem, identificação de dificuldades, geração de insights e monitoramento contínuo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <img 
              src={import.meta.env.BASE_URL + 'Fluxograma-ModeloConceitualdeIAemAVEAs@2x.png'}
              alt="Fluxograma do Modelo Conceitual de IA em AVEAs" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-4xl mx-auto">
              O modelo promove a contextualização através da organização e publicação de materiais baseados no plano de ensino, seguida pelo desenvolvimento de atividades personalizadas. A avaliação adaptativa alimenta o fórum de discussão, que por sua vez gera dados para análise de desempenho, engajamento e monitoramento contínuo, culminando na personalização do processo de ensino e aprendizagem.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicação de Técnicas de IA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Aplicação de Técnicas de IA em AVEAs</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              O modelo especifica como diferentes técnicas de inteligência artificial podem ser aplicadas nas quatro dimensões principais: personalização da aprendizagem, análise de desempenho e feedback, engajamento e monitoramento contínuo.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <img 
	      src={import.meta.env.BASE_URL + 'Fluxograma_AplicaçãodeTécnicasdeIAemAVEAs@2x.png'} 
              alt="Aplicação de Técnicas de IA em AVEAs" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Personalização da Aprendizagem</h4>
              <p className="text-blue-700 text-sm">
                Algoritmos de aprendizagem adaptativa que ajustam conteúdo e atividades de acordo com o progresso individual do estudante.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">Análise de Desempenho e Feedback</h4>
              <p className="text-green-700 text-sm">
                PLN (Processamento de Linguagem Natural) e análise de dados para avaliação automática de respostas e feedback personalizado.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-3">Engajamento</h4>
              <p className="text-purple-700 text-sm">
                Sistemas de recomendação que sugerem materiais personalizados com base no perfil do estudante.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3">Monitoramento Contínuo</h4>
              <p className="text-orange-700 text-sm">
                Aprendizado de máquina e análise de big data para monitoramento do acesso e da interação dos estudantes com o conteúdo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementação com AWS */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Implementação com Serviços AWS</h3>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8">
              O modelo conceitual foi projetado com potencial de implementação em plataformas como AWS, Azure e Google Cloud, aproveitando serviços especializados em machine learning e educação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Amazon SageMaker</h4>
              <p className="text-blue-100 text-sm">
                Plataforma completa para construção, treinamento e implantação de modelos de machine learning para personalização da aprendizagem.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Amazon Comprehend</h4>
              <p className="text-blue-100 text-sm">
                Serviço de processamento de linguagem natural para análise de sentimentos e feedback automatizado em fóruns de discussão.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Amazon Personalize</h4>
              <p className="text-blue-100 text-sm">
                Sistema de recomendação em tempo real para sugestão de materiais e atividades personalizadas baseadas no comportamento do estudante.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Amazon QuickSight</h4>
              <p className="text-blue-100 text-sm">
                Ferramenta de business intelligence para análise de dados educacionais e geração de insights sobre desempenho e engajamento.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">Amazon Kinesis</h4>
              <p className="text-blue-100 text-sm">
                Processamento de dados em tempo real para monitoramento contínuo de acessos e interações dos estudantes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-3">AWS Lambda</h4>
              <p className="text-blue-100 text-sm">
                Computação serverless para execução de algoritmos de IA sob demanda, otimizando custos e performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribuições e Aplicabilidade */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contribuições e Aplicabilidade</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">T</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Contribuição Teórica</h4>
              <p className="text-gray-600 text-sm">
                Oferece um referencial estruturado para a integração da IA na educação, preenchendo lacunas identificadas na literatura.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">M</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Contribuição Metodológica</h4>
              <p className="text-gray-600 text-sm">
                Apresenta uma abordagem sistemática baseada em Design Science Research para desenvolvimento de modelos educacionais.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">A</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Contribuição Aplicada</h4>
              <p className="text-gray-600 text-sm">
                Fornece diretrizes práticas para implementação em ambientes educacionais reais, incluindo plataformas de nuvem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelPage;

