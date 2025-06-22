import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, User, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a Tese', href: '/sobre' },
    { name: 'Modelo Conceitual', href: '/modelo' },
    { name: 'Artigo 1', href: '/artigo-1' },
    { name: 'Artigo 2', href: '/artigo-2' },
    { name: 'Artigo 3', href: '/artigo-3' },
    { name: 'Referências', href: '/referencias' },
    { name: 'Contato', href: '/contato' },
    { name: 'Apresentação da Defesa', href: '/defesa' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Award className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="text-2xl font-bold text-gray-900 leading-tight">InteliEduca</div>
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">Sanval Ebert de Freitas Santos</span>
              </div>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                Doutorando
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-700 bg-blue-100 shadow-lg border-b-4 border-blue-700 font-bold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:font-bold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-gray-50 rounded-b-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

