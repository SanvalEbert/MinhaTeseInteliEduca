import React from 'react';
import { BookOpen, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a Tese
          </h1>
          <p className="text-xl text-blue-100">
            Conheça os detalhes da pesquisa e sua contribuição para a educação com IA
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introdução</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A incorporação de tecnologias digitais à educação tem contribuído para a reorganização de práticas de ensino, 
              aprendizagem e avaliação em diferentes níveis e modalidades de ensino. Ambientes Virtuais de Ensino e 
              Aprendizagem (AVEA) têm sido utilizados em contextos formais, não formais e informais, abrangendo desde a 
              educação básica até a formação continuada em ambientes corporativos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              A diversidade de aplicações dos AVEA reflete não apenas mudanças no uso de recursos tecnológicos, mas também 
              reconfigurações nos papéis docentes e discentes, nas dinâmicas de mediação pedagógica e nas formas de 
              acompanhamento do percurso formativo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nesse cenário, a aplicação de técnicas de Inteligência Artificial (IA) à educação tem sido objeto de 
              investigações que buscam compreender seu potencial na organização de ambientes personalizados, adaptativos 
              e interativos. Essas técnicas incluem mecanismos como sistemas de recomendação, agentes conversacionais, 
              análise de sentimentos e avaliação automatizada, utilizados com a finalidade de apoiar a tomada de decisão 
              pedagógica e promover adaptações em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Percurso Metodológico</h2>
            <p className="text-xl text-gray-600">
              A pesquisa foi conduzida em três etapas metodológicas principais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Etapa 1</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-3 text-center">Revisão Sistemática da Literatura</h4>
              <p className="text-gray-600 text-center">
                Análise da literatura existente sobre inteligência artificial e ambientes virtuais de ensino e aprendizagem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Etapa 2</h3>
              <h4 className="text-lg font-medium text-green-600 mb-3 text-center">Desenvolvimento do Modelo Conceitual</h4>
              <p className="text-gray-600 text-center">
                Criação do modelo baseado na abordagem Design Science Research (DSR) com foco na integração de técnicas de IA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Etapa 3</h3>
              <h4 className="text-lg font-medium text-purple-600 mb-3 text-center">Validação do Modelo Conceitual</h4>
              <p className="text-gray-600 text-center">
                Validação qualitativa com especialistas por meio do método Vali-Quali para verificar a adequação do modelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados e Contribuições */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resultados e Contribuições</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              O modelo resultante organiza-se em quatro dimensões: personalização, engajamento, monitoramento e análise 
              de desempenho, que reúnem processos e funcionalidades orientadas à mediação pedagógica com suporte da IA.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Como desdobramento, a pesquisa originou o desenvolvimento da plataforma web InteliEduca, que representa 
              interativamente o modelo conceitual proposto. A aplicação visa ampliar a acessibilidade, a compreensão e 
              a aplicabilidade do modelo em contextos reais, funcionando como recurso de apoio à formação, à pesquisa 
              e à inovação educacional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Os resultados da tese contribuem de forma teórica, metodológica e aplicada, oferecendo um referencial 
              estruturado para a integração da IA na educação, com potencial de implementação em plataformas como AWS, 
              Azure e Google Cloud. Além disso, aponta direções para estudos futuros, incluindo a construção prática 
              dos modelos de IA associados às dimensões propostas, bem como sua implementação em ambientes educacionais reais.
            </p>
          </div>
        </div>
      </section>

      {/* Informações Acadêmicas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Informações Acadêmicas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Autor</h3>
                <p className="text-gray-600">Sanval Ebert de Freitas Santos</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Orientador</h3>
                <p className="text-gray-600">Prof. Dr. Hugo Saba Pereira Cardoso</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Programa</h3>
                <p className="text-gray-600">Pós-Graduação Multi-Institucional em Difusão de Conhecimento</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instituição</h3>
                <p className="text-gray-600">Instituto Federal da Bahia (IFBA)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Área de Concentração</h3>
                <p className="text-gray-600">Modelagem da Geração e Difusão do Conhecimento</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Linha de Pesquisa</h3>
                <p className="text-gray-600">Difusão do Conhecimento – Informação, Comunicação e Gestão</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data de Defesa</h3>
                <p className="text-gray-600">21 de julho de 2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Local</h3>
                <p className="text-gray-600">Salvador - BA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agradecimentos */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Agradecimentos</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Agradeço a todos que fizeram parte desta jornada de doutorado, em especial à minha família, pelo amor, 
              paciência e apoio incondicional. Às minhas filhas Geovanna Maia Freitas e Rebeca Maia Freitas, minha 
              maior fonte de inspiração. Aos meus pais, Lourival Almeida Santos e Maria Sandra de Freitas, que me 
              ensinaram com o exemplo a importância da educação, da humildade e da dedicação. E à minha noiva e parceira, Raquel Moura, pelo apoio e compreensão constantes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sou especialmente grato ao meu orientador, Prof. Dr. Hugo Saba Pereira Cardoso, pela orientação firme, pela escuta generosa e pelas provocações que elevaram a qualidade deste trabalho. Registro também minha gratidão aos membros da banca de defesa, que tiveram um papel especial na avaliação da qualificação da tese.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Estendo minha sincera gratidão aos coautores dos artigos que compõem esta tese, cuja colaboração foi 
              pontual para o desenvolvimento da pesquisa: Prof. Dr. Eduardo Manuel de Freitas Jorge, Profa. Dra. 
              Ingrid Winkler, Prof. Dr. Márcio Luís Valença Araújo, Prof. Dr. Aloisio Santos Nascimento Filho.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

