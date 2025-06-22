import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Tese de Doutorado</h3>
                <p className="text-gray-400">Sanval Ebert de Freitas Santos</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Modelo Conceitual para Ambientes Virtuais de Ensino e Aprendizagem com Integração de Técnicas de Inteligência Artificial
            </p>
            <p className="text-sm text-gray-400">
              Programa de Pós-Graduação Multi-Institucional em Difusão de Conhecimento - IFBA
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre a Tese</Link></li>
              <li><Link to="/artigo-1" className="text-gray-300 hover:text-blue-400 transition-colors">Artigo 1</Link></li>
              <li><Link to="/artigo-2" className="text-gray-300 hover:text-blue-400 transition-colors">Artigo 2</Link></li>
              <li><Link to="/artigo-3" className="text-gray-300 hover:text-blue-400 transition-colors">Artigo 3</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <Link to="/contato" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>Entre em contato</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sanval Ebert de Freitas Santos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

