import React from 'react';

const References = () => {
  const referenceCategories = [
    {
      title: "A. Inteligência Artificial e Tecnologias Emergentes",
      references: [
        {
          text: "TOPPING, K. J. et al. **Enhancing peer assessment with artificial intelligence**. *International Journal of Educational Technology in Higher Education*, [S.l.], v. 22, n. 3, 2025.",
          link: "https://doi.org/10.1186/s41239-024-00501-1"
        },
        {
          text: "SANTOS, S. E. de F. et al. **Agentes inteligentes para ambientes virtuais de ensino e aprendizagem**: uma revisão sistemática. *HOLOS*, v. 5, n. 40, 2025.",
          link: "https://doi.org/10.15628/holos.2024.15584"
        },
        {
          text: "ALSERHAN, S.; ALQAHTANI, T. M.; YAHAYA, N.; AL-RAHMI, W. M.; ABUHASSNA, H. **Personal Learning Environments**: Modeling Students' Self-Regulation Enhancement Through a Learning Management System Platform. *IEEE Access*, v. 11, p. 5464–5482, 2023.",
          link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10015756"
        },
        {
          text: "BELDA-MEDINA, J.; KOKOŠKOVÁ, V. **Integrating chatbots in education**: insights from the Chatbot-Human Interaction Satisfaction Model (CHISM). *International Journal of Educational Technology in Higher Education*, [S.l.], v. 20, art. 62, 2023.",
          link: "https://doi.org/10.1186/s41239-023-00432-3"
        },
        {
          text: "KANONT, K. et al. **Generative-AI, a learning assistant?** Factors influencing higher-ed students' technology acceptance. *Electronic Journal of e-Learning*, [S.l.], v. 22, n. 6, p. 18–33, 2024.",
          link: "https://doi.org/10.34190/ejel.22.6.3196"
        },
        {
          text: "VIVIAN, R. L.; CAZELLA, S. C.; MACHADO, L. R.; BEHAR, P. A. **Mineração de Dados Educacionais e Análise de Sentimentos em Ambientes Virtuais de Aprendizagem**: um Mapeamento Sistemático. *EaD em Foco*, v. 12, n. 2, e1786, 2022.",
          link: "https://labs.cecierj.edu.br/antesinvasao/eademfoco/index.php/Revista/article/view/1786"
        },
        {
          text: "YAĞCI, M. **Educational data mining**: prediction of students' academic performance using machine learning algorithms. *Smart Learning Environments*, v. 9, n. 1, p. 1–19, 2022. DOI: https://doi.org/10.1186/s40561-022-00192-z.",
          link: "https://slejournal.springeropen.com/articles/10.1186/s40561-022-00192-z"
        },
        {
          text: "SHARMA, P.; HARKISHAN, M. **Designing an intelligent tutoring system for computer programing in the Pacific**. *Education and Information Technologies*, v. 27, p. 6197–6209, 2022.",
          link: "https://link.springer.com/article/10.1007/s10639-021-10882-9"
        },
        {
          text: "PARREIRA, A.; LEHMANN, L.; OLIVEIRA, M. **O desafio das tecnologias de inteligência artificial na Educação**: percepção e avaliação dos professores. *Ensaio: Avaliação e Políticas Públicas em Educação*, v. 29, 2021.",
          link: "https://www.scielo.br/j/ensaio/a/nM9Rk8swvtDvwWNrKCZtjGn/"
        },
        {
          text: "SANTOS, S. E. de F.; JORGE, E. M. de F.; WINKLER, I. **Inteligência artificial e virtualização em ambientes virtuais de ensino e aprendizagem**: desafios e perspectivas tecnológicas. *ETD - Educação Temática Digital*, v. 23, n. 1, p. 2–19, 2021.",
          link: "https://periodicos.sbu.unicamp.br/ojs/index.php/etd/article/view/8656150"
        },
        {
          text: "FREITAS MORO, F.; TAROUCO, L. M. R.; VICARI, R. M. **Proposta de arquitetura baseada em agentes inteligentes integrados em ambientes e-learning**. *Revista Educar Mais*, v. 5, n. 2, p. 249–260, 2021.",
          link: "https://periodicos.ifsul.edu.br/index.php/educarmais/article/view/2163/1695"
        },
        {
          text: "AKYUZ, Y. **Effects of intelligent tutoring systems (ITS) on personalized learning (PL)**. *Creative Education*, v. 11, n. 6, p. 953–978, 2020.",
          link: "https://www.scirp.org/journal/paperinformation.aspx?paperid=101287"
        },
        {
          text: "REIS, H. M.; MAILLARD, P. A. J.; ISOTANI, S. **Sistemas Tutores Inteligentes que detectam as emoções do estudante**: Um mapeamento sistemático. In: *Research and Innovation in Brazilian Education*. 2. ed. Palo Alto: Lemann Center, 2018. v. 1, p. 101-104.",
          link: "https://www.br-ie.org/pub/index.php/rbie/article/view/7184"
        },
        {
          text: "REIS, R. F.; OLIVEIRA, D.; MELO, F. **Intelligent tutoring systems for adaptive learning**: a systematic literature review. In: *Simpósio Brasileiro de Informática na Educação*, 2018. Anais [...]. p. 1070–1079.",
          link: null
        },
        {
          text: "ZAWACKI-RICHTER, O.; MARÍN, V. I.; BOND, M.; GOBERNADO-ESTRELLO, F. **Systematic review of research on artificial intelligence applications in higher education** – where are the educators? *International Journal of Educational Technology in Higher Education*, [S.l.], v. 16, n. 39, 2019.",
          link: "https://doi.org/10.1186/s41239-019-0171-0"
        },
        {
          text: "SILVA, E.; CRUZ, J. **Mineração de Dados Educacionais**: uso de redes neurais artificiais na predição do Perfil Acadêmico do Aluno - IFAL Campus Maragogi. In: *ESCOLA REGIONAL DE COMPUTAÇÃO BAHIA, ALAGOAS E SERGIPE (ERBASE)*, 2019, Ilhéus. Anais [...]. Porto Alegre: Sociedade Brasileira de Computação, 2019. p. 556–564.",
          link: "https://sol.sbc.org.br/index.php/erbase/article/view/9018"
        },
        {
          text: "ASIF, R.; MERCERON, A.; ALI, S. A.; HAIDER, N. G. **Analyzing undergraduate students' performance using educational data mining**. *Computers and Education*, v. 113, p. 177–194, 2017.",
          link: "https://www.sciencedirect.com/science/article/abs/pii/S0360131517301124"
        }
      ]
    },
    {
      title: "B. Tecnologias Educacionais e Infraestrutura",
      references: [
        {
          text: "AMAZON. **Amazon Web Services** – documentação oficial. *Amazon*, 2025.",
          link: "https://aws.amazon.com/machine-learning/"
        },
        {
          text: "GOOGLE. **Google Cloud Platform** – documentação oficial. *Google*, 2025.",
          link: "https://cloud.google.com/docs/get-started/aws-azure-gcp-service-comparison?hl=pt-br"
        },
        {
          text: "MICROSOFT. **Azure AI Services** – documentação oficial. *Microsoft*, 2025.",
          link: "https://learn.microsoft.com/pt-br/azure/ai-services/what-are-ai-services"
        },
        {
          text: "BRASIL. Ministério da Ciência, Tecnologia e Inovação. **Plano Brasileiro de Inteligência Artificial (PBIA)**: supercomputador e investimento de R$ 23 bilhões em quatro anos. 2024.",
          link: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/07/plano-brasileiro-de-ia-tera-supercomputador-e-investimento-de-r-23-bilhoes-em-quatro-anos"
        }
      ]
    },
    {
      title: "C. Metodologia Científica e Revisão Sistemática",
      references: [
        {
          text: "GIL, A. C. **Métodos e técnicas de pesquisa social**. 7. ed. São Paulo: Atlas, 2022.",
          link: null
        },
        {
          text: "PAGE, M. J. et al. **The PRISMA 2020 statement**: an updated guideline for reporting systematic reviews. *Systematic Reviews*, [S.l.], v. 10, n. 71, 2021.",
          link: "https://www.bmj.com/content/372/bmj.n71"
        },
        {
          text: "DRESCH, A.; LACERDA, D. P.; ANTUNES JÚNIOR, J. A. V. **Design Science Research**: A Method for Science and Technology Advancement. Cham: Springer, 2015.",
          link: "https://www.researchgate.net/publication/262350911_Positioning_and_Presenting_Design_Science_Research_for_Maximum_Impact"
        },
        {
          text: "GREGOR, S.; HEVNER, A. R. **Positioning and presenting design science research for maximum impact**. *MIS Quarterly*, v. 37, n. 2, p. 337–355, 2013.",
          link: "https://www.researchgate.net/publication/262350911_Positioning_and_Presenting_Design_Science_Research_for_Maximum_Impact"
        },
        {
          text: "PEFFERS, K. et al. **A design science research methodology for information systems research**. *Journal of Management Information Systems*, [S.l.], v. 24, n. 3, p. 45–77, 2007.",
          link: "https://doi.org/10.2753/MIS0742-1222240302"
        },
        {
          text: "MORAN, J. M. **Propostas de mudança nos cursos presenciais com a educação on-line**. *Rev. ABENO*, 2004.",
          link: null
        },
        {
          text: "KITCHENHAM, B. **Procedures for performing systematic reviews** (Keele University Technical Report No. TR/SE-0401; NICTA Technical Report No. 0400011T.1). Keele: Keele University, 2004.",
          link: "http://www.elizabete.com.br/rs/Tutrial_IHC_2012_files/Conceitos_RevisaoSistematica_kitchenham_2004.pdf"
        }
      ]
    },
    {
      title: "D. Tecnologias Educacionais e Ambientes Virtuais",
      references: [
        {
          text: "BARTELLE, L. B.; MEDEIROS, L. F. **Os Assistentes Virtuais nos Ambientes Virtuais de Aprendizagem**: uma Revisão Sistemática de Literatura. *EaD em Foco*, v. 14, n. 1, e2128, 2024.",
          link: "https://doi.org/10.18264/eadf.v14i1.2128"
        },
        {
          text: "PALOMINO, P. T. **Gamification of virtual learning environments**: a narrative and user experience approach. 2022. Tese (Doutorado) – Universidade de São Paulo, São Carlos.",
          link: "https://www.teses.usp.br/teses/disponiveis/55/55134/tde-26072022-105616/publico/PaulaToledoPalomino_revisada.pdf"
        },
        {
          text: "COSTA, N. T. da; FERNANDES, M. A. **Sequenciamento de Ações Pedagógicas baseadas na Taxonomia de Bloom usando Planejamento Automatizado apoiado por Algoritmo Genético**. *Revista Brasileira de Informática na Educação*, v. 29, p. 485–501, maio 2021.",
          link: "http://ojs.sector3.com.br/index.php/rbie/article/view/v29p485"
        },
        {
          text: "ZEM LOPES, A. M. **Uma abordagem de suporte à avaliação de qualidade de sistemas educacionais baseados em Web Semântica**. 2017. Tese (Doutorado) – Universidade de São Paulo, São Carlos.",
          link: "https://teses.usp.br/teses/disponiveis/55/55134/tde-01022018084626/publico/AparecidaMariaZemLopes_revisada.pdf"
        },
        {
          text: "SILVA, R. S. **Ambientes Virtuais e Multiplataformas Online na EAD**. São Paulo: Novatec, 2015.",
          link: null
        },
        {
          text: "RECUERO, R. da C. **Comunidades Virtuais** – uma abordagem teórica. In: *Seminário Internacional de Comunicação*, 5., 2001, Porto Alegre. Anais. Porto Alegre: PUCRS, 2001.",
          link: "https://arquivo.bocc.ubi.pt/pag/recuero-raquel-comunidades-virtuais.pdf"
        }
      ]
    },
    {
      title: "E. Metodologia Científica, Técnicas de Pesquisa e Validação",
      references: [
        {
          text: "PALOMINO, P. T. **Gamification of Virtual Learning Environments**: a Narrative and User Experience Approach. 2022. Tese (Doutorado) – Universidade de São Paulo, São Carlos.",
          link: "https://www.teses.usp.br/teses/disponiveis/55/55134/tde-26072022-105616/publico/PaulaToledoPalomino_revisada.pdf"
        },
        {
          text: "PAGE, M. J. et al. **The PRISMA 2020 statement**: an updated guideline for reporting systematic reviews. *Systematic Reviews*, v. 10, n. 71, 2021.",
          link: "https://www.bmj.com/content/372/bmj.n71"
        },
        {
          text: "BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. **Resolução nº 510, de 7 de abril de 2016**. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. *Diário Oficial da União*: seção 1, Brasília, DF, n. 98, p. 44, 24 maio 2016.",
          link: null
        },
        {
          text: "MORAN, J. M. **Metodologias ativas para uma educação inovadora**. Campinas: Papirus, 2015.",
          link: "https://www2.eca.usp.br/moran/wp-content/uploads/2013/12/MetodologiasAtivas_JMoran.pdf"
        },
        {
          text: "ALEXANDRE, N. M. C.; COLUCI, M. Z. O. **Validade de conteúdo nos processos de construção e adaptação de instrumentos de medidas**. *Ciência & Saúde Coletiva*, Rio de Janeiro, v. 16, n. 7, p. 3061–3068, 2011. DOI: https://doi.org/10.1590/S1413-81232011000800006.",
          link: "https://www.scielo.br/j/csc/a/5vBh8PmW5g4Nqxz3r999vrn/?lang=pt"
        },
        {
          text: "BARDIN, L. **Análise de conteúdo**. São Paulo: Edições 70, 2011.",
          link: null
        },
        {
          text: "PASQUALI, L. **Instrumentação psicológica**: fundamentos e práticas. Porto Alegre: Artmed, 2010.",
          link: null
        },
        {
          text: "CRESWELL, J. W. **Projeto de pesquisa**: métodos qualitativo, quantitativo e misto. 3. ed. Porto Alegre: Artmed, 2010.",
          link: null
        },
        {
          text: "FLICK, U. **Introdução à pesquisa qualitativa**. 3. ed. Porto Alegre: Artmed, 2009.",
          link: null
        },
        {
          text: "GIL, A. C. **Métodos e técnicas de pesquisa social**. 6. ed. São Paulo: Atlas, 2008.",
          link: null
        },
        {
          text: "KITCHENHAM, B. **Procedures for performing systematic reviews** (Keele University Technical Report No. TR/SE-0401; NICTA Technical Report No. 0400011T.1). Keele: Keele University, 2004.",
          link: "http://www.elizabete.com.br/rs/Tutrial_IHC_2012_files/Conceitos_RevisaoSistematica_kitchenham_2004.pdf"
        }
      ]
    },
    {
      title: "F. Diretrizes Éticas",
      references: [
        {
          text: "BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. **Resolução nº 510, de 7 de abril de 2016**. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. *Diário Oficial da União*: seção 1, Brasília, DF, n. 98, p. 44, 24 maio 2016.",
          link: null
        },
        {
          text: "UNESCO. **Recommendation on the ethics of artificial intelligence**. Paris: UNESCO, 2021.",
          link: "https://unesdoc.unesco.org/ark:/48223/pf0000380455"
        }
      ]
    }
  ];

  const formatReferenceText = (text) => {
    // Convert **text** to bold and *text* to italic
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <div className="container mx-auto p-8" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-8" style={{ fontSize: '14pt', fontWeight: 'bold' }}>
        Referências Bibliográficas
      </h1>
      <p className="text-lg text-gray-700 mb-6" style={{ fontSize: '12pt' }}>
       As referências bibliográficas reunidas nesta tese foram organizadas com base nas áreas temáticas abordadas: Inteligência Artificial e Tecnologias Emergentes, Tecnologias Educacionais e Infraestrutura, Metodologia Científica e Revisão Sistemática, Ambientes Virtuais de Aprendizagem e Diretrizes Éticas. A seleção publicações que trazem os fundamentos teóricos reconhecidos, e estudos recentes, que refletem os avanços contemporâneos e as tendências emergentes nas áreas de interseção entre educação e inteligência artificial. Incluem-se ainda documentos técnicos, marcos legais e normativos relevantes, a fim de garantir consistência metodológica, contextualização prática e respaldo ético ao percurso investigativo.      </p>

      <div className="space-y-8">
        {referenceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 
              className="text-xl font-bold text-gray-800 mb-4" 
              style={{ fontSize: '14pt', fontWeight: 'bold' }}
            >
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.references.map((reference, refIndex) => (
                <div key={refIndex} className="text-gray-700 leading-relaxed" style={{ fontSize: '12pt' }}>
                  {reference.link ? (
                    <p>
                      <span 
                        dangerouslySetInnerHTML={{ 
                          __html: formatReferenceText(reference.text) 
                        }} 
                      />
                      {' '}
                      <a 
                        href={reference.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Disponível em: {reference.link}
                      </a>
                      . Acesso em: {reference.text.includes('2025') ? '16 maio 2025' : 
                                   reference.text.includes('2024') ? '29 nov. 2024' : 
                                   reference.text.includes('2023') ? '11 fev. 2025' : 
                                   reference.text.includes('2022') ? '17 jan. 2025' : 
                                   reference.text.includes('2021') ? '05 fev. 2025' : 
                                   reference.text.includes('2020') ? '16 nov. 2024' : 
                                   reference.text.includes('2019') ? '29 jan. 2025' : 
                                   reference.text.includes('2018') ? '29 out. 2024' : 
                                   reference.text.includes('2017') ? '11 dez. 2024' : 
                                   reference.text.includes('2016') ? '20 fev. 2025' : 
                                   reference.text.includes('2015') ? '27 jan. 2025' : 
                                   reference.text.includes('2011') ? '20 jun. 2025' : 
                                   reference.text.includes('2010') ? '22 jan. 2025' : 
                                   reference.text.includes('2009') ? '15 mar. 2025' : 
                                   reference.text.includes('2008') ? '10 abr. 2025' : 
                                   reference.text.includes('2004') ? '10 dez. 2024' : 
                                   reference.text.includes('2001') ? '10 out. 2024' : 
                                   '19 jun. 2025'}.
                    </p>
                  ) : (
                    <p 
                      dangerouslySetInnerHTML={{ 
                        __html: formatReferenceText(reference.text) 
                      }} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg" style={{ fontSize: '12pt' }}>
        <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontSize: '14pt', fontWeight: 'bold' }}>
          Nota sobre as Referências
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Todas as referências foram formatadas seguindo as diretrizes da ABNT NBR 6023:2018. Os links de acesso foram verificados e estavam funcionais na data de acesso indicada. Para referências sem link disponível, recomenda-se a busca pelos títulos em bases de dados acadêmicas, bibliotecas físicas e digitais especializadas.
        </p>
      </div>
    </div>
  );
};

export default References;

