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
  mario,
  jobit,
  tripguide,
  threejs,
  balls,
  book,
  books,
  bookstr,
  candle,
  carbanner,
  goblin,
  game,
  foodbanner,
  mall,
  phppj,
  springboot,
  starwars,
  watch,
  colorado,
  nauryz,
  postgre,
  autodesk,
  c,
  spring,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Про меня",
  },
  {
    id: "work",
    title: "Работы",
  },
  {
    id: "contact",
    title: "Контакт",
  },
];

const services = [
  {
    title: "Веб-разработчик",
    icon: web,
  },
  {
    title: "Графический дизайнер",
    icon: mobile,
  },
  {
    title: "Разработчик PHP",
    icon: backend,
  },
  {
    title: "Разработчик 3D-моделей",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "autodesk",
    icon: autodesk,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "spring",
    icon: spring,
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
    name: "c",
    icon: c,
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
    name: "postgre",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Графический дизайнер",
    company_name: "Colorado",
    icon: colorado,
    iconBg: "#383E56",
    date: "Декабрь 2021 - Февраль 2022",
    points: [
      "Моя работа включала в себя разработку дизайна печатной продукции, начиная от брошюр и каталогов и заканчивая упаковкой и рекламными материалами. В процессе работы я уделял особое внимание деталям и корректировал макеты в соответствии с замечаниями клиентов",
      "Мне часто приходилось работать в сжатые сроки и быстро находить решения, сохраняя при этом качество и креативность дизайна."
    ],
  },
  {
    title: "Фрилансер",
    icon: nauryz,
    iconBg: "#383E56",
    date: "Сентябрь 2022 - Январь 2023",
    points: [
      "У меня был опыт работы в качестве цифрового дизайнера-фрилансера, создающего уникальные дизайнерские решения для различных клиентов.", 
      "Моя работа включала в себя разработку логотипов, веб-дизайн, создание макетов для социальных сетей, а также другие проекты в области цифрового и графического дизайна."
    ],
  },
];


const projects = [
  {
    name: " Mario 3D model",
    description:
      "My project is to create a 3D model of the Mario character. This project will not only allow me to apply my skills in 3D modeling, but also support my love of classic video games.",
    tags: [
      {
        name: "autodesk",
        color: "blue-text-gradient",
      },
      {
        name: "3DS_MAX",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: mario,
    source_code_link: "https://github.com/",
  },
  {
    name: "Laraver Game Website Banner",
    description:
      "Banner for the UI/UX design of a website for selling computer games in PHP Laravel with a Postgresql database and blade Bootstrap 5 templates.",
    tags: [
      {
        name: "LaravelPHP",
        color: "blue-text-gradient",
      },
      {
        name: "UX/UI",
        color: "green-text-gradient",
      },
      {
        name: "PgAdmin4",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/meontinar/MoshiApp1",
  },
  {
    name: "2D Candle Animation Project",
    description:
      "Animation of a cartoon candle for a duration of 10 seconds, FPS 24 frames, adhering to the 12 principles of animation Slow In & Slow Out, Squash and stretch, Anticipation, Timing made in the Blender application.",
    tags: [
      {
        name: "AfterEffects",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "2Danimation",
        color: "pink-text-gradient",
      },
    ],
    image: candle,
    source_code_link: "https://www.behance.net/mochimpark",
  },
  {
    name: "UI/UX Car Rent Banner",
    description:
      "This is a banner for the UI/UX design of car rental made in the Figma application.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UX/UI",
        color: "green-text-gradient",
      },
      {
        name: "GraphicDesign",
        color: "pink-text-gradient",
      },
    ],
    image: carbanner,
    source_code_link: "https://www.behance.net/mochimpark",
  },
  {
    name: "Balls 2D Animation",
    description:
      "Animation of balls for a duration of 10 seconds, FPS 24 frames, adhering to the 12 principles of animation Slow In & Slow Out, Squash and stretch, Anticipation, Timing made in the Blender application.",
    tags: [
      {
        name: "AfterEffects",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "2Danimation",
        color: "pink-text-gradient",
      },
    ],
    image: balls,
    source_code_link: "https://www.behance.net/mochimpark",
  },
  {
    name: "Goblin 3D model",
    description:
      "My project to create a 3D model of the Goblin character was made after completing a 3d modeling course from Digital Tutors in the 3Ds max application.",
    tags: [
      {
        name: "autodesk",
        color: "blue-text-gradient",
      },
      {
        name: "3DS_MAX",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: goblin,
    source_code_link: "https://www.behance.net/mochimpark",
  },
  {
    name: "UI/UX Watch Sale Banner",
    description:
      "This is a banner for the UI/UX design of watch sale made in the Figma application.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UX/UI",
        color: "green-text-gradient",
      },
      {
        name: "GraphicDesign",
        color: "pink-text-gradient",
      },
    ],
    image: watch,
    source_code_link: "https://www.behance.net/mochimpark",
  },
  {
    name: "ReactJS Star Wars movie",
    description:
      "This website is a platform dedicated to characters from the famous Star Wars universe, developed using AngularJS and for storing status data.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: starwars,
    source_code_link: "https://github.com/meontinar/Film-react",
  },
  {
    name: "PHP Book store project",
    description:
      "This project is a fully functional website designed for the purchase of books, which uses the PHP programming language and the XAMPP database for storing and processing data.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "PgAdmin4",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: phppj,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
