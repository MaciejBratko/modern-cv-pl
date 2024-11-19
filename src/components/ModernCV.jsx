import React from 'react';
import { Mail, Phone, Github, Code } from 'lucide-react';
import profilePic from '../profile_pic.JPG';

const ModernCV = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-gray-800 text-white p-8">
            <div className="flex flex-col items-center mb-8">
              <img 
                src={profilePic} 
                alt="Zdjęcie profilowe" 
                className="rounded-full w-48 h-48 object-cover mb-4 border-4 border-gray-600"
              />
              <h2 className="text-2xl font-bold mb-2">MACIEJ BRATKO</h2>
              <p className="text-gray-300 text-center">Specjalista IT w Hemmersbach GmbH</p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">PROFIL</h3>
                <p className="text-gray-300">
                  Doświadczony specjalista IT w Hemmersbach GmbH, specjalizujący się w rozwiązaniach DaaS i rozwiązywaniu problemów na miejscu. 
                  Posiadacz certyfikatów zawodowych EE.08 i EE.09, obecnie rozwija umiejętności Full Stack JavaScript Development.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">KONTAKT</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+48 690 136 499</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>maciej.bratko@outlook.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5" />
                    <a href="https://github.com/MaciejBratko" className="hover:text-blue-300 transition">
                      Profil GitHub
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">ZAINTERESOWANIA</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Ogólne tworzenie oprogramowania komputerowego</li>
                  <li>Sztuczna inteligencja (głównie modele językowe)</li>
                  <li>Gry komputerowe (historia i rozwój)</li>
                </ul>
              </section>

              <section className="mt-8 pt-8 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Code className="w-4 h-4" />
                  <span>CV stworzone przy użyciu React i Tailwind CSS</span>
                </div>
              </section>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 p-8">
            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                DOŚWIADCZENIE ZAWODOWE
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">Specjalista IT - Hemmersbach GmbH</h4>
                  <span className="text-gray-600">09/2021 -- obecnie</span>
                </div>
                <p className="text-gray-600 mb-2">Bielany Wrocławskie</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Przygotowywanie sprzętu DaaS do wysyłki międzynarodowej</li>
                  <li>Wdrażanie i utrzymanie rozwiązań infrastruktury IT</li>
                  <li>Świadczenie usług wsparcia technicznego i rozwiązywania problemów</li>
                </ul>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                UMIEJĘTNOŚCI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Języki Programowania:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>Rozwój front-end i back-end</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Rozwój Stron WWW:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Rozwój front-end i back-end</li>
                    <li>Projektowanie responsywne</li>
                    <li>Architektura aplikacji webowych</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Administracja Systemami:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Systemy komputerowe i urządzenia peryferyjne</li>
                    <li>Konfiguracja i utrzymanie sieci</li>
                    <li>Biegłość w systemach Windows i Linux</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Kontrola Wersji:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Zarządzanie repozytoriami Git i GitHub</li>
                    <li>Doświadczenie z systemami kontroli wersji</li>
                    <li>Doświadczenie w prowadzeniu zespołu</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-800 pb-2">
                EDUKACJA I CERTYFIKATY
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">Full Stack Javascript Developer — GoIT</h4>
                  <span className="text-gray-600">01/2024 -- 11/2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Tworzenie semantycznych struktur stron i responsywnych layoutów</li>
                  <li>React, Redux, Node.js i React Native</li>
                  <li>Rozwój backend z Express.js i MongoDB</li>
                  <li>Liczne projekty indywidualne i zespołowe</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-700">Powiatowy Zespół Szkół nr 2 im. Wincentego Witosa</h4>
                  <span className="text-gray-600">2017 -- 2020</span>
                </div>
                <p className="text-gray-700 mb-2">Technik Informatyk z certyfikatami:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>EE.09 Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych</li>
                  <li>EE.08 Montaż i eksploatacja systemów komputerowych</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCV;
