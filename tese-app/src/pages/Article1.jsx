import React from 'react';
import { Search, Database, FileText, BarChart3, ExternalLink } from 'lucide-react';

const Article1 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
              Artigo 1
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Agentes Inteligentes para Ambientes Virtuais de Ensino e Aprendizagem: uma revisão sistemática
            </h1>
            <p className="text-xl text-blue-100">
              Revista HOLOS - Submetido e Aceito
            </p>
          </div>
        </div>
      </section>

      {/* Resumo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo</h2>
            <p className="text-gray-700 leading-relaxed">
              Este artigo apresenta uma revisão sistemática da literatura sobre o uso de agentes inteligentes em 
              ambientes virtuais de ensino e aprendizagem. A pesquisa analisa as principais aplicações, benefícios 
              e desafios da implementação de agentes inteligentes na educação, fornecendo uma base teórica sólida 
              para o desenvolvimento do modelo conceitual proposto na tese.
            </p>
            <div className="mt-6 text-center">
              <a
                href="https://www2.ifrn.edu.br/ojs/index.php/HOLOS/article/view/15584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ler Artigo Completo
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metodologia da Revisão</h2>
            <p className="text-xl text-gray-600">
              Processo sistemático baseado no protocolo PRISMA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Busca</h3>
              <p className="text-gray-600">
                Estratégia de busca em múltiplas bases de dados acadêmicas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seleção</h3>
              <p className="text-gray-600">
                Critérios de inclusão e exclusão de estudos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extração</h3>
              <p className="text-gray-600">
                Extração de dados dos estudos selecionados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análise</h3>
              <p className="text-gray-600">
                Síntese e análise qualitativa dos resultados encontrados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bases de Dados */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bases de Dados Consultadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bases Principais</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IEEE Xplore Digital Library</li>
                <li>• ACM Digital Library</li>
                <li>• ScienceDirect</li>
                <li>• Springer Link</li>
                <li>• Web of Science</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bases Complementares</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Google Scholar</li>
                <li>• ERIC (Education Resources)</li>
                <li>• CAPES Periódicos</li>
                <li>• Scopus</li>
                <li>• DBLP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Resultados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Principais Resultados</h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Distribuição Temporal</h3>
              <p className="text-gray-600">
                A análise temporal dos estudos revela um crescimento significativo no interesse por agentes inteligentes 
                em ambientes educacionais, especialmente a partir de 2018, coincidindo com os avanços em machine learning 
                e processamento de linguagem natural.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Áreas de Aplicação</h3>
              <p className="text-gray-600">
                Os agentes inteligentes são aplicados em sistemas de tutoria inteligente, sistemas de recomendação educacional, chatbots pedagógicos e ambientes de aprendizagem adaptativos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Técnicas Predominantes</h3>
              <p className="text-gray-600">
                As técnicas mais utilizadas incluem redes neurais artificiais, algoritmos de aprendizado de máquina, 
                processamento de linguagem natural e sistemas baseados em regras.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lacunas Identificadas</h3>
              <p className="text-gray-600">
        A revisão identificou lacuna para projetar a concepção de modelos conceituais mais estruturados para orientar a implementação de agentes inteligentes em ambientes educacionais, justificando o desenvolvimento do modelo proposto nesta tese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Considerações Finais */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Considerações Finais</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              A revisão sistemática evidenciou o potencial dos agentes inteligentes para transformar os ambientes 
              virtuais de ensino e aprendizagem, oferecendo possibilidades de personalização, adaptação e suporte 
              pedagógico mais eficazes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Os resultados desta revisão forneceram a base teórica necessária para o desenvolvimento do modelo 
              conceitual apresentado no segundo artigo da tese, identificando as principais dimensões e 
              funcionalidades que devem ser consideradas na integração de IA em ambientes educacionais.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As lacunas identificadas na literatura reforçam a relevância e originalidade da proposta desta tese, 
              contribuindo para o avanço do conhecimento na área de tecnologia educacional e inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Figuras e Tabelas */}
      {/* Seção removida conforme solicitação do usuário */}
    </div>
  );
};

export default Article1;

