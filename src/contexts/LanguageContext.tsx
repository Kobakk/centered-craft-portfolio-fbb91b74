
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.available': 'Available for work',
    'hero.jobTitle': 'Web developer',
    'hero.name': 'Sebastián Vélez',
    'hero.description': '👨‍💻 Programmer with experience in web development and systems. I create optimized pages that generate concrete results. I have developed solutions for companies like North Market, PanoImagen and independent clients, implementing functionalities that automate processes and improve conversions.',
    'section.experience': 'Work Experience',
    'job1.title': 'IT Technician / Web Development',
    'job1.company': 'North Market',
    'job1.description': 'Creating web pages with WordPress, domain, hosting, SEO and cookies. For marketing campaigns. Online and on-site technical support for hardware, software, and networking for company members.',
    'job2.title': 'Python Developer',
    'job2.company': 'PanoImagen',
    'job2.description': 'I executed data management projects for PanoImagen clients, implementing web scraping solutions with Python/Selenium and automating the processing of large volumes of PDFs. I developed efficient scripts with Jupyter Notebook, Pandas and WSL that transformed unstructured data into actionable information, reducing processing times and improving client decision making.',
    'section.projects': 'Work / Projects',
    'project1.title': 'Web Reform',
    'project1.description': 'Contact page and portfolio for reform company. Responsive, accessible with SEO.',
    'project2.title': 'Restaurant Website',
    'project2.description': 'Restaurant page with contact, reservation, and menu features created with WordPress.',
    'project.description': 'Brief description of project',
    'section.about': 'About Me',
    'about.p1': 'I am an enthusiast of programming and web design, ever since I was little I was interested in artistic/design topics that I have developed through illustration and drawing 🎨.',
    'about.p2': 'During the pandemic I started a systems degree where I learned linux and server and network management, finishing it in 2022 and starting a web development degree which I finished recently.',
    'footer.copyright': 'Copyright © 2024 sevdev'
  },
  es: {
    'nav.home': 'Presentación',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.available': 'Disponible para trabajar',
    'hero.jobTitle': 'Web developer',
    'hero.name': 'Sebastián Vélez',
    'hero.description': '👨‍💻 Programador con experiencia en desarrollo web y sistemas. Creo páginas optimizadas que generan resultados concretos. He desarrollado soluciones para empresas como North Market, PanoImagen y clientes independientes, implementando funcionalidades que automatizan procesos y mejoran conversiones.',
    'section.experience': 'Experiencia Laboral',
    'job1.title': 'Técnico Informático / Desarrollo Web',
    'job1.company': 'North Market',
    'job1.description': 'Creación de paginas web con WordPress, dominion, hosting, SEO y cookies. Para campañas de marketing. Soporte ténico online y presencial sobre hardware, hardware, red. Para los miembros de la empresa.',
    'job2.title': 'Desarrollador Python',
    'job2.company': 'PanoImagen',
    'job2.description': 'Ejecuté proyectos de manejo de datos para clientes de PanoImagen, implementando soluciones de web scraping con Python/Selenium y automatizando el procesamiento de grandes volúmenes de PDFs. Desarrollé scripts eficientes con Jupyter Notebook, Pandas y WSL que transformaron datos no estructurados en información accionable, reduciendo tiempos de procesamiento y mejorando la toma de decisiones del cliente.',
    'section.projects': 'Trabajos / Proyectos',
    'project1.title': 'Web Reforma',
    'project1.description': 'Pagina de contacto y portfolio para empresa de reforma. Responsive, accesible con SEO.',
    'project2.title': 'Web Restaurante',
    'project2.description': 'Pagina de restaurante contacto, reserva, carta realizado con Wordpress',
    'project.description': 'Descripción breve del proyecto',
    'section.about': 'Sobre mí',
    'about.p1': 'Soy una persona entusiasta de la programacion y el diseño web, desde pequeño estaba interesado por el tema artístico/diseño que he desarrollado por medio de la ilustración y dibujo 🎨.',
    'about.p2': 'Duarante la pandemia comence el grado de sistemas con el que aprendí linux y manejo de servidores y redes, acabandolo en 2022 y comenzando el grado de desarrollo web acabandolo hace un tiempo.',
    'footer.copyright': 'Copyright © 2024 sevdev'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
