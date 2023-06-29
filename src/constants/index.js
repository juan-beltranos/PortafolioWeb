import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  molta,
  adherencia,
  channelglow,
  carpas,
  armada,
  campestre,
  poke,
  peli,
  ypmf,
  simple,
  baconmigo,
  coandes,
  bosca,
  loce,
  civicus,
  exeltis,
  plato,
  itau,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 4",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "SOSADIAZBROS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Junio 2021 - Actual",
    points: [
      "Desarrollo aplicaciones web usando tecnologías como REACTJS,NODEJS,FIREBASE.",
      "Mantenimiento de paginas y aplicaciones WEB Usando tecnologías como HTML,CSS,JAVASCRIPT,DRUPAL.",
      "Creación de API REST robustas y seguras con NODEJS, PHP,MYSQL, MONGODB y FIREBASE.",
      "Consumo de diferentes servicios externos y propios con diferentes tecnologías.",
      "Realidad aumentada y virtual.",
      "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
      "Desarrollo de video juegos Web con HTML,CSS,JASVASCRIPT.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "Gracia Dev's",
    icon: shopify,
    iconBg: "#383E56",
    date: "Enero 2020 - Diciembre 2020",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js.",
      "Desarrollo de componentes.",
      "Gestión del estado de las aplicaciones.",
      "Soporte a paginas webs.",
      "Implementar diseños receptivo.",
      "Consumo de API REST con AXIOS y FETCH.",
      "Clean code y buenas practicas de desarrollo.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Molta",
    description:
      "PLataforma web para creacion de ordenes especializadas para laboratorios clinicos del pais.",
    tags: [
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: molta,
    source_code_link: "https://github.com/",
    url: 'https://molta.app/'
  },

  {
    name: "Adherencia",
    description:
      "PLataforma web para creacion de ordenes y dosis para los ojos.",
    tags: [
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: adherencia,
    source_code_link: "https://github.com/",
    url: 'https://adherencia-7a6c3.web.app/'
  },

  {
    name: "Channel Glow",
    description:
      "Aplicacion web para agendar citas y servicios de una estetica integral.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
    ],
    image: channelglow,
    source_code_link: "https://github.com/",
    url: 'https://chanel-glow.netlify.app/'
  },

  {
    name: "Carpas Alemanas",
    description:
      "Pagina web informativa para un negocio de carrocerias.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carpas,
    source_code_link: "https://github.com/",
    url: 'https://carpasalemanas.netlify.app/'
  },

  {
    name: "Web Armada",
    description:
      "Pagina web informativa para la armada nacional.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: armada,
    url: 'https://armada-oceanos.netlify.app/'
  },

  {
    name: "Conjunto Paraiso Campestre",
    description:
      "Pagina web informativa para una empresa.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: campestre,
    source_code_link: "https://github.com/",
    url: 'https://conjuntoparaisocampestre.com'
  },

  {
    name: "Poke App",
    description:
      "Aplicacion web consumiendo la API de pokemon.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/",
    url: 'https://pokemondeveloper.netlify.app'
  },

  {
    name: "Peliculas App",
    description:
      "Aplicacion web consumiendo la API de themoviedb.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: peli,
    source_code_link: "https://github.com/",
    url: 'https://pruebareactsb.netlify.app'
  },

  {
    name: "YPMF - Directorio Ginecologico",
    description:
      "Buscador de medicos Ginecologico.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Fetch",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: ypmf,
    source_code_link: "https://github.com/",
    url: 'https://www.yoplaneomifuturoweb.com/directorio-ginecologico'
  },

  {
    name: "Mas Simple Argentina",
    description:
      "Inscripcion de pacientes al programa.",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "Fetch",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: simple,
    source_code_link: "https://github.com/",
    url: 'https://massimple.bayer.com.ar/'
  },

  {
    name: "Baconmigo (Formularios)",
    description:
      "Inscripcion de pacientes, consultas de farmacias y estados de cuenta en las paginas de Salud Fememina,  Cardiología , Insuficiencia cardiaca , Enfermedad Renal Crónica.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: baconmigo,
    source_code_link: "https://github.com",
    url: 'https://www.baconmigo.com'
  },

  {
    name: "Coandes",
    description:
      "Pagina para una compañía de contrucciones.",
    tags: [
      {
        name: "Laravel 8",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "TalwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: coandes,
    source_code_link: "https://github.com/",
    url: 'https://www.coandes.com'
  },

  {
    name: "Bosca 129",
    description:
      "Pagina informativa para un proyecto de vivienda.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: bosca,
    source_code_link: "https://github.com/",
    url: 'https://www.bosca129.com'
  },

  {
    name: "Locetar",
    description:
      "Pagina web informativa sobre un producto.",
    tags: [
      {
        name: "Laravel 5",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: loce,
    source_code_link: "https://github.com/",
    url: 'https://locetar.pt'
  },

  {
    name: "Civicus",
    description:
      "Pagina para una alianza global de organizaciones de la sociedad civil y activistas dedicada a fortalecer la acción ciudadana.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Postgress",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: civicus,
    source_code_link: "https://github.com/",
    url: 'https://monitor.civicus.org'
  },

  {
    name: "Juego Exeltis",
    description:
      "video juego Web para una empresa tipo Angry Birds.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: exeltis,
    source_code_link: "https://github.com/",
    url: 'https://exeltis.netlify.app'
  },

  {
    name: "Juego Obesidad",
    description:
      "video juego Web para preparar platos saludables.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: plato,
    source_code_link: "https://github.com/",
    url: 'https://trusting-colden-4e4b29.netlify.app'
  },

  {
    name: "Juego Itau",
    description:
      "video juego Web para un banco.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: itau,
    source_code_link: "https://github.com/",
    url: 'https://itaugame.netlify.app/'
  },

];

export { services, technologies, experiences, testimonials, projects };
