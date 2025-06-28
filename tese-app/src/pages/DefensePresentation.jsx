import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, Users, Award, BarChart3, Lightbulb, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const DefensePresentation = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const slides = [
    {
      title: "Apresentação da Tese",
      content: "Introdução, Metodologia, Discussões e Conclusões"
    },
    {
      title: "Contextualização",
      content: "Cenário atual e relevância da pesquisa"
    },
    {
      title: "Problema de Pesquisa",
      content: "Questão central da investigação"
    },
    {
      title: "Objetivo Geral",
      content: "Propósito principal do estudo"
    },
    {
      title: "Objetivos Específicos",
      content: "Etapas detalhadas da pesquisa"
    },
    {
      title: "Justificativa",
      content: "Relevância e contribuições do trabalho"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setExpandedSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 md:w-16 md:h-16 bg-white opacity-10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-white opacity-10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Apresentação da Defesa
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 px-4">
            Modelo Conceitual para Ambientes Virtuais de Ensino e Aprendizagem com Integração de Técnicas de Inteligência Artificial
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
            <div className="text-white text-base md:text-lg font-medium">
              {slides[currentSlide].title}
            </div>
            <div className="text-blue-100 text-sm mt-2">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </section>

      {/* Navegação Interativa */}
      <section className="py-6 md:py-8 bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { id: 'introducao', label: 'Introdução', color: 'from-blue-500 to-blue-600' },
              { id: 'contextualizacao', label: 'Contextualização', color: 'from-blue-500 to-blue-600' },
              { id: 'problema-pesquisa', label: 'Problema de Pesquisa', color: 'from-green-500 to-green-600' },
              { id: 'objetivo-geral', label: 'Objetivo Geral', color: 'from-orange-500 to-orange-600' },
              { id: 'objetivos-especificos', label: 'Objetivos Específicos', color: 'from-purple-500 to-purple-600' },
              { id: 'justificativa', label: 'Justificativa', color: 'from-yellow-500 to-yellow-600' },
              { id: 'artigos-tese', label: 'Artigos da Tese', color: 'from-pink-500 to-red-600' },
              { id: 'discussoes', label: 'Discussões', color: 'from-orange-500 to-red-600' },
              { id: 'consideracoes', label: 'Considerações Finais', color: 'from-purple-600 to-pink-700' }
            ].map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r ${section.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm font-medium`}
              >
                <span className="hidden sm:inline">{index + 1}. </span>
                <span className="truncate">{section.label}</span>
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dados da Pesquisa */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">Dados da Pesquisa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Artigos Científicos</div>
              <div className="text-xs md:text-sm text-gray-500 mt-2">Publicados e submetidos</div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Dimensões do Modelo</div>
              <div className="text-xs md:text-sm text-gray-500 mt-2">Personalização, Engajamento, Monitoramento, Análise</div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Etapas Metodológicas</div>
              <div className="text-xs md:text-sm text-gray-500 mt-2">Revisão, Desenvolvimento, Validação</div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Plataforma Desenvolvida</div>
              <div className="text-xs md:text-sm text-gray-500 mt-2">InteliEduca - Representação interativa</div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Introdução */}
      <section id="introducao" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 cursor-pointer"
              onClick={() => toggleSection('introducao')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4" />
                  <h2 className="text-xl md:text-3xl font-bold text-white">1. Introdução</h2>
                </div>
                {expandedSection === 'introducao' ? 
                  <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" /> : 
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                }
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out ${expandedSection === 'introducao' ? 'max-h-none opacity-100' : 'max-h-96 opacity-75 overflow-hidden'}`}>
              <div className="p-6 md:p-8">
                {/* 1.1 Contextualização */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">1.1 Contextualização</h3>
                  </div>
                  <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      A incorporação de tecnologias digitais à educação tem contribuído para a reorganização de práticas de ensino, 
                      aprendizagem e avaliação em diferentes níveis e modalidades de ensino. Ambientes Virtuais de Ensino e 
                      Aprendizagem (AVEA) têm sido utilizados em contextos formais, não formais e informais, abrangendo desde a 
                      educação básica até a formação continuada em ambientes corporativos.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      Nesse cenário, a aplicação de técnicas de Inteligência Artificial (IA) à educação tem sido objeto de 
                      investigações que buscam compreender seu potencial na organização de ambientes personalizados, adaptativos e 
                      interativos.
                    </p>
                  </div>
                </div>

                {/* 1.2 Problema de Pesquisa */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-2 md:mr-3"></div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">1.2 Problema de Pesquisa</h3>
                  </div>
                  <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                    <p className="text-red-700 font-semibold text-sm md:text-base">
                      Como um modelo conceitual pode estruturar a integração de técnicas de Inteligência Artificial em Ambientes Virtuais de Ensino e Aprendizagem para agregar valor ao processo de ensino e aprendizagem, potencializando a interação entre os seus agentes?
                    </p>
                  </div>
                </div>

                {/* 1.3 Objetivo Geral */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">1.3 Objetivo Geral</h3>
                  </div>
                  <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                    <p className="text-green-800 font-semibold text-sm md:text-base">
                      Desenvolver um modelo conceitual de Ambiente Virtual de Ensino e Aprendizagem com incorporação de técnicas de Inteligência Artificial, orientado ao suporte de processos de ensino e aprendizagem, considerando as dimensões de personalização, monitoramento, engajamento e análise de desempenho.
                    </p>
                  </div>
                </div>

                {/* 1.4 Objetivos Específicos */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full mr-2 md:mr-3"></div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">1.4 Objetivos Específicos</h3>
                  </div>
                  <div className="bg-purple-50 p-4 md:p-6 rounded-lg">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                      <li>Realizar uma revisão sistemática da literatura para identificar o estado da arte sobre a integração de técnicas de Inteligência Artificial em Ambientes Virtuais de Ensino e Aprendizagem, mapeando abordagens, desafios e lacunas.</li>
                      <li>Analisar as técnicas de Inteligência Artificial aplicáveis aos AVEAs, identificadas na revisão sistemática e em literatura complementar, considerando seus potenciais de contribuição para os processos de ensino e aprendizagem.</li>
                      <li>Propor um modelo conceitual de AVEA que incorpore técnicas de Inteligência Artificial, estruturado a partir das dimensões identificadas na literatura e na análise técnica, utilizando a abordagem da Design Science Research.</li>
                      <li>Validar o modelo conceitual proposto por meio da análise de especialistas das áreas de educação e tecnologia, avaliando critérios de aderência, clareza, aplicabilidade e consistência, por meio do método Vali-Quali.</li>
                    </ul>
                  </div>
                </div>

                {/* 1.5 Justificativa */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full mr-2 md:mr-3"></div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">1.5 Justificativa</h3>
                  </div>
                  <div className="bg-yellow-50 p-4 md:p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      A justificativa da tese fundamenta-se na crescente presença da Inteligência Artificial (IA) em ambientes digitais de aprendizagem e na carência de modelos conceituais que integrem fundamentos pedagógicos e técnicos. O trabalho busca responder à necessidade de orientar a adoção de tecnologias inteligentes de forma coerente com os objetivos educacionais. A ausência de referenciais estruturados limita a apropriação crítica da IA na educação, especialmente em Ambientes Virtuais de Ensino e Aprendizagem (AVEA), que já utilizam agentes tutores, sistemas de recomendação e ferramentas automatizadas. Assim, a proposta de um modelo conceitual sistematizado visa apoiar docentes, desenvolvedores e gestores na tomada de decisão, contribuindo para o planejamento, desenvolvimento e avaliação de soluções educacionais alinhadas à complexidade dos processos formativos contemporâneos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metodologia */}
      <section id="metodologia" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 md:p-8 cursor-pointer"
              onClick={() => toggleSection('metodologia')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4" />
                  <h2 className="text-xl md:text-3xl font-bold text-white">2. Metodologia</h2>
                </div>
                {expandedSection === 'metodologia' ? 
                  <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" /> : 
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                }
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out ${expandedSection === 'metodologia' ? 'max-h-none opacity-100' : 'max-h-96 opacity-75 overflow-hidden'}`}>
              <div className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
                  A tese foi estruturada no formato multipaper, articulando três artigos científicos a seções de contextualização, categorias teóricas, percurso metodológico, discussão integrada e considerações finais. A investigação caracteriza-se por uma natureza aplicada, com abordagem predominantemente qualitativa, focada na análise descritiva e interpretativa dos dados. O percurso metodológico foi delineado de forma sequencial e interdependente, visando a construção progressiva do objeto de estudo e sua fundamentação em evidências extraídas da literatura e de validação por especialistas.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 rounded-xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-3 text-center">Etapa 1: Revisão Sistemática da Literatura</h3>
                    <h4 className="text-base md:text-lg font-semibold text-blue-700 mb-2 md:mb-3 text-center">Artigo 1</h4>
                    <p className="text-gray-700 text-center text-xs md:text-sm">
                      **Objetivo:** Identificar abordagens, desafios e lacunas sobre IA em AVEAs.
                      **Resultado:** Definição das quatro dimensões do modelo.
                      **Desdobramento na Plataforma InteliEduca:** Referenciais conceituais e mapa de temas.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-6 rounded-xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2 md:mb-3 text-center">Etapa 2: Desenvolvimento do Modelo Conceitual</h3>
                    <h4 className="text-base md:text-lg font-semibold text-green-700 mb-2 md:mb-3 text-center">Artigo 2</h4>
                    <p className="text-gray-700 text-center text-xs md:text-sm">
                      **Objetivo:** Construir o modelo com base na DSR.
                      **Resultado:** Modelo estruturado em 4 dimensões: personalização, engajamento, monitoramento e análise de desempenho.
                      **Desdobramento na Plataforma InteliEduca:** Representação interativa do modelo e seus componentes.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-6 rounded-xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 md:mb-3 text-center">Etapa 3: Validação do Modelo Conceitual</h3>
                    <h4 className="text-base md:text-lg font-semibold text-purple-700 mb-2 md:mb-3 text-center">Artigo 3</h4>
                    <p className="text-gray-700 text-center text-xs md:text-sm">
                      **Objetivo:** Avaliar clareza, aplicabilidade e consistência do modelo.
                      **Resultado:** Ajustes e consolidação do modelo validado.
                      **Desdobramento na Plataforma InteliEduca:** Integração de feedbacks e justificativas na interface.
                    </p>
                  </div>
                </div>
                <div className="mt-8 md:mt-12 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Desdobramento Final: Plataforma Web InteliEduca</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Como desdobramento das etapas metodológicas, e com base nos resultados consolidados da revisão, modelagem e validação, desenvolveu-se a plataforma web InteliEduca. Essa aplicação tem por objetivo representar de forma interativa o modelo conceitual proposto, tornando suas dimensões e funcionalidades acessíveis por meio de uma interface interativa. A construção da plataforma representa a continuidade prática desta pesquisa, ampliando seu potencial de aplicação em contextos reais e fortalecendo o elo entre produção acadêmica e inovação educacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Artigos da Tese */}
      <section id="artigos-tese" className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="bg-gradient-to-r from-pink-600 to-red-700 p-6 md:p-8 cursor-pointer"
              onClick={() => toggleSection('artigos-tese')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4" />
                  <h2 className="text-xl md:text-3xl font-bold text-white">2.5 Artigos da Tese</h2>
                </div>
                {expandedSection === 'artigos-tese' ? 
                  <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" /> : 
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                }
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out ${expandedSection === 'artigos-tese' ? 'max-h-none opacity-100' : 'max-h-96 opacity-75 overflow-hidden'}`}>
              <div className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
                  Os três artigos científicos desenvolvidos ao longo da tese representam as etapas fundamentais do percurso metodológico, desde a revisão da literatura até a validação do modelo conceitual. Clique nas imagens abaixo para explorar cada um deles em detalhes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <a href="https://dabbsvfo.manus.space/artigo-1" className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={import.meta.env.BASE_URL + 'artigo1_thumb.png'} alt="Artigo 1" className="w-full h-48 object-cover rounded-t-lg" />
		    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Artigo 1</h3>
                      <p className="text-gray-600 text-sm">Revisão Sistemática da Literatura</p>
                    </div>
                  </a>
                  <a href="https://dabbsvfo.manus.space/artigo-2" className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={import.meta.env.BASE_URL + 'artigo2_thumb.png'} alt="Artigo 2" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Artigo 2</h3>
                      <p className="text-gray-600 text-sm">Desenvolvimento do Modelo Conceitual</p>
                    </div>
                  </a>
                  <a href="https://dabbsvfo.manus.space/artigo-3" className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
		    <img src={import.meta.env.BASE_URL + 'artigo3_thumb.png'} alt="Artigo 3" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Artigo 3</h3>
                      <p className="text-gray-600 text-sm">Validação do Modelo Conceitual</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Síntese das Discussões */}
      <section id="discussoes" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-600 to-red-700 p-6 md:p-8 cursor-pointer"
              onClick={() => toggleSection('discussoes')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4" />
                  <h2 className="text-xl md:text-3xl font-bold text-white">3. Síntese das Discussões</h2>
                </div>
                {expandedSection === 'discussoes' ? 
                  <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" /> : 
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                }
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out ${expandedSection === 'discussoes' ? 'max-h-none opacity-100' : 'max-h-96 opacity-75 overflow-hidden'}`}>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-3 md:mb-4">Principais Achados</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                      <li>A IA pode potencializar a personalização do ensino, adaptando conteúdos e ritmos de aprendizagem.</li>
                      <li>Ferramentas de IA contribuem para o monitoramento do desempenho e engajamento dos alunos.</li>
                      <li>A integração da IA em AVEAs requer um modelo conceitual que alinhe aspectos pedagógicos e tecnológicos.</li>
                      <li>A abordagem Design Science Research é eficaz para o desenvolvimento de artefatos educacionais.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold text-red-800 mb-3 md:mb-4">Contribuições</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                      <li>Proposição de um modelo conceitual inovador para integração de IA em AVEAs.</li>
                      <li>Validação do modelo por especialistas, atestando sua relevância e aplicabilidade.</li>
                      <li>Direcionamento para o desenvolvimento de futuras plataformas educacionais inteligentes.</li>
                      <li>Contribuição para a literatura sobre IA na educação e Design Science Research.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Considerações Finais */}
      <section id="consideracoes" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-700 p-6 md:p-8 cursor-pointer"
              onClick={() => toggleSection('consideracoes')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4" />
                  <h2 className="text-xl md:text-3xl font-bold text-white">4. Considerações Finais</h2>
                </div>
                {expandedSection === 'consideracoes' ? 
                  <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" /> : 
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                }
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out ${expandedSection === 'consideracoes' ? 'max-h-none opacity-100' : 'max-h-96 opacity-75 overflow-hidden'}`}>
              <div className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                  A tese apresenta um modelo conceitual robusto e validado para a integração de Inteligência Artificial em Ambientes Virtuais de Ensino e Aprendizagem. Este modelo serve como um guia prático para educadores e desenvolvedores, promovendo a inovação e aprimoramento dos processos educacionais. As contribuições deste trabalho abrem caminho para futuras pesquisas e o desenvolvimento de soluções educacionais mais inteligentes e adaptativas.
                </p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Direções Futuras</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>Implementação e teste do modelo em um ambiente real de aprendizagem.</li>
                  <li>Expansão das dimensões do modelo para incluir outros aspectos da IA na educação.</li>
                  <li>Estudo do impacto do modelo no desempenho e engajamento dos alunos.</li>
                  <li>Desenvolvimento de ferramentas e recursos para facilitar a aplicação do modelo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DefensePresentation;


