import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, MapPin, GraduationCap, Briefcase, Linkedin, Book, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contato
          </h1>
          <p className="text-xl text-indigo-100">
            Entre em contato para discussões acadêmicas, colaborações ou dúvidas sobre a pesquisa
          </p>
        </div>
      </section>

      {/* Informações do Doutorando */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Informações do Doutorando</h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
		<img src="**/MinhaTeseInteliEduca/SanvalEbert.jpg**" alt="Foto do Doutorando" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sanval Ebert de Freitas Santos</h3>
                <p className="text-lg text-gray-600 mb-4">Doutorando em Difusão do Conhecimento</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span>Instituto Federal da Bahia (IFBA)</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>Programa de Pós-Graduação Multi-Institucional e Multidisciplinar em Difusão do Conhecimento (DMMDC)</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Salvador - BA, Brasil</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <Linkedin className="h-5 w-5 mr-1" /> LinkedIn
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <Book className="h-5 w-5 mr-1" /> ResearchGate
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-1" /> Lattes
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-1" /> Orcid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Orientador */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Orientador</h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
		<img src="**/MinhaTeseInteliEduca/HugoSaba.jpg**" alt="Prof. Dr. Hugo Saba Pereira Cardoso" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prof. Dr. Hugo Saba Pereira Cardoso</h3>
                <p className="text-lg text-gray-600 mb-4">Orientador da Tese</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span>Instituto Federal da Bahia (IFBA)</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>Programa de Pós-Graduação Multi-Institucional em Difusão de Conhecimento</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Salvador - BA, Brasil</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="https://www.linkedin.com/in/hugo-saba-28847127/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <Linkedin className="h-5 w-5 mr-1" /> LinkedIn
                  </a>
                  <a href="https://www.researchgate.net/profile/Hugo-Saba" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <Book className="h-5 w-5 mr-1" /> ResearchGate
                  </a>
                  <a href="http://lattes.cnpq.br/1966167015825708" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-1" /> Lattes
                  </a>
                  <a href="https://orcid.org/0000-0001-8402-6416" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-1" /> Orcid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Interessado em colaborações, discussões acadêmicas ou tem dúvidas sobre a pesquisa?
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Assunto da sua mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Áreas de Interesse */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Áreas de Interesse para Colaboração</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pesquisa Acadêmica</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inteligência Artificial na Educação</li>
                <li>• Ambientes Virtuais de Aprendizagem</li>
                <li>• Learning Analytics e Educational Data Mining</li>
                <li>• Design Science Research em Educação</li>
                <li>• Personalização de Ambientes Educacionais</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicações Práticas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Implementação de Modelos de IA em Educação</li>
                <li>• Desenvolvimento de Plataformas Educacionais</li>
                <li>• Consultoria em Tecnologia Educacional</li>
                <li>• Formação de Professores em Tecnologia</li>
                <li>• Avaliação de Sistemas Educacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

