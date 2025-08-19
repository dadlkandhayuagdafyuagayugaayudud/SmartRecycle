import React, { useState, useEffect } from 'react';
import { ChevronDown, Recycle, Brain, Zap, Users, Camera, Cpu, Smartphone, Heart, Instagram, MessageCircle, Youtube, Mail, ArrowRight, Play, Lightbulb, Leaf, Target, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    {
      name: 'Arduino',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Microcontrolador que controla toda a automação da esteira e coordena os sensores',
      color: 'bg-teal-500'
    },
    {
      name: 'YOLOv8',
      icon: <Brain className="w-8 h-8" />,
      description: 'Inteligência Artificial para reconhecimento visual e classificação de objetos',
      color: 'bg-green-500'
    },
    {
      name: 'Sensores FC-51',
      icon: <Zap className="w-8 h-8" />,
      description: 'Sensores infravermelhos que detectam a presença de objetos na esteira',
      color: 'bg-blue-500'
    },
    {
      name: 'Motores 28BYJ-48',
      icon: <Recycle className="w-8 h-8" />,
      description: 'Motores de passo que controlam o movimento da esteira transportadora',
      color: 'bg-emerald-500'
    },
    {
      name: 'Servo Motores',
      icon: <Zap className="w-8 h-8" />,
      description: 'Controlam a abertura e fechamento das portinholas das lixeiras',
      color: 'bg-cyan-500'
    },
    {
      name: 'Câmera Smartphone',
      icon: <Camera className="w-8 h-8" />,
      description: 'Celular usado como webcam para capturar imagens dos objetos',
      color: 'bg-indigo-500'
    }
  ];

  const teamMembers = [
    {
      name: 'João Victor do Prado',
      role: 'Programação & IA',
      description: 'Responsável pela implementação do YOLOv8 e algoritmos de reconhecimento',
      image: 'https://i.ibb.co/Gr8Bcvp/1000115792.jpg'
    },
    {
      name: 'Nasser Younis',
      role: 'Conhecimento científico',
      description: 'Responsável pela parte teorica do projeto',
      image: 'https://i.ibb.co/TBBj4KD5/1000116046.jpg'
    },
    {
      name: 'João Pedro Pandolfo',
      role: 'Eletrônica & Arduino',
      description: 'Montagem dos circuitos e programação do microcontrolador',
      image: 'https://i.ibb.co/2YYqB0Hk/1000115697.jpg'
    },
    
     {
      name: 'João Victor Barros',
      role: 'Testes & Apresentação',
      description: 'Validação do sistema e preparação das apresentações',
      image: 'https://i.ibb.co/qFktzzpk/1000115695.jpg'
    },
     {
      name: 'Yuri Scapin',
      role: 'Montagem da esteira',
      description: 'Criação da esteira',
      image: 'https://i.ibb.co/xSsRWZ9d/1000115694.jpg'
    },
     {
      name: 'Rian Rizatti',
      role: 'Testes do RoboFlow e validação dos resultados',
      description: 'Validação do sistema',
      image: 'https://i.ibb.co/FbdbDMyb/1000115698.jpg'
    }
  ];

  const galleryImages = [
    'https://i.ibb.co/TDBMv2rc/IMG-20250816-WA0011.jpg',
    'https://i.ibb.co/C3b1KCc3/2.jpg',
    'https://i.ibb.co/BKGQk9fm/3.jpg',
    'https://i.ibb.co/V0QNyRmg/1.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Smart Recycle</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Projeto' },
                { id: 'tech', label: 'Tecnologias' },
                { id: 'impact', label: 'Impacto' },
                { id: 'gallery', label: 'Galeria' },
                { id: 'team', label: 'Equipe' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Recycle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Smart <span className="text-green-600">Recycle</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Sustentabilidade, Robótica e Inteligência Artificial em um só projeto
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
                Desenvolvido por estudantes do 2º ano do ensino médio, nosso projeto revoluciona a separação de resíduos 
                com tecnologia acessível e inovação educacional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Funcionamento
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-green-600"
              >
                <Camera className="w-5 h-5 mr-2" />
                Galeria
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre o <span className="text-green-600">Projeto</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma esteira automatizada que identifica e separa automaticamente materiais recicláveis 
                usando inteligência artificial e componentes acessíveis.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <img 
                    src="https://i.ibb.co/V0QNyRmg/1.jpg" 
                    alt="Smart Recycle em funcionamento"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Camera className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reconhecimento Visual</h3>
                    <p className="text-gray-600">
                      Utilizamos YOLOv8 para identificar objetos em tempo real através de uma câmera de smartphone, 
                      classificando automaticamente papel, plástico e metal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automação Inteligente</h3>
                    <p className="text-gray-600">
                      Sensores infravermelhos FC-51 detectam a presença de objetos, acionando motores que direcionam 
                      os materiais para as lixeiras corretas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 rounded-full p-3">
                    <Leaf className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Materiais Sustentáveis</h3>
                    <p className="text-gray-600">
                      Toda a estrutura é feita com papelão e materiais recicláveis, provando que inovação 
                      e sustentabilidade podem andar juntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tecnologias <span className="text-green-600">Utilizadas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combinamos componentes acessíveis com tecnologia avançada para criar uma solução inovadora e replicável.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`${tech.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.impact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Impacto <span className="text-green-600">Educacional</span> e <span className="text-blue-600">Ambiental</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nosso projeto vai além da tecnologia, promovendo educação e consciência ambiental para as futuras gerações.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Educação Prática</h3>
                <p className="text-gray-600">
                  Ensina robótica, programação e inteligência artificial de forma hands-on, 
                  inspirando jovens a seguir carreiras STEM.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consciência Ambiental</h3>
                <p className="text-gray-600">
                  Promove o descarte correto de resíduos e demonstra como a tecnologia pode 
                  ser uma aliada na preservação do meio ambiente.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Replicabilidade</h3>
                <p className="text-gray-600">
                  Pode ser facilmente replicado em escolas, ONGs e comunidades, 
                  multiplicando o impacto positivo da iniciativa.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Resultados Esperados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Precisão na classificação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3s</div>
                  <div className="text-sm text-gray-600">Tempo médio de processamento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Materiais recicláveis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Galeria do <span className="text-green-600">Projeto</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja nosso protótipo em ação e acompanhe o desenvolvimento do Smart Recycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={image}
                    alt={`Smart Recycle - Imagem ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Projeto em desenvolvimento</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                <Youtube className="w-5 h-5 mr-2" />
                Ver Vídeo Demonstrativo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Equipe <span className="text-green-600">Smart Recycle</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça os estudantes do 2º ano do ensino médio que desenvolveram esta solução inovadora.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-600/20 rounded-full group-hover:bg-green-600/30 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold">Smart Recycle</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Projeto desenvolvido por estudantes do 2º ano do ensino médio, 
              demonstrando como a tecnologia pode transformar o mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Agradecimentos</h3>
              <p className="text-gray-400 text-sm">
                À nossa escola, professores orientadores e a todos que apoiaram este projeto inovador.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="flex justify-center space-x-4">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Sustentabilidade</h3>
              <p className="text-gray-400 text-sm">
                Juntos por um futuro mais sustentável através da tecnologia e educação.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Smart Recycle. Desenvolvido com <Heart className="w-4 h-4 inline text-red-500" /> por João Victor P.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
