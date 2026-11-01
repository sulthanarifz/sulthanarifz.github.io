// src/data/projectsData.js

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} year
 * @property {string} status
 * @property {string} type
 * @property {string} role
 * @property {string} timeline
 * @property {string} liveUrl
 * @property {string} slug
 * @property {string} overview
 * @property {string} short_description
 * @property {string[]} techStack
 * @property {{ main: string; gallery: string[] }} images
 */

/** @type {Record<string, Project>} */
export const projectsData = {
  'mala-nusa': {
    title: 'Mala Nusa',
    year: '2026',
    status: 'Ongoing',
    type: 'Individual Project',
    role: 'Web Developer',
    timeline: '',
    liveUrl: '',
    slug: 'mala-nusa',
    short_description:
      'A community-based travel platform showcasing authentic cultural and nature experiences in East Nusa Tenggara, built with Laravel.',
    overview:
      'Mala Nusa is a community-based travel platform that connects travellers with authentic experiences in the coastal villages of East Nusa Tenggara (NTT). It showcases local culture, natural ecosystems, and community knowledge while promoting tourism that provides greater visibility and economic benefits to local communities. I developed the website using Laravel, featuring responsive experience listings, detailed travel information, and an admin dashboard for managing its content.',
    techStack: ['Web App', 'PHP', 'Laravel', 'JavaScript', 'CSS', 'SQLite'],
    images: {
      main: '/cover/mala-nusa-cover.jpg',
      gallery: [],
    },
  },

  'manuscript-illumination': {
    title: 'Manuscript Illumination',
    year: '2025',
    status: 'Completed',
    type: 'Group Project',
    role: 'Mobile Developer & UI Designer',
    timeline: '',
    liveUrl: '',
    slug: 'manuscript-illumination',
    short_description:
      'A mobile application that uses image processing and machine learning to extract traditional manuscript motifs and transform them into batik patterns, supporting Indonesian cultural preservation.',
    overview:
      'Manuscript Illuminations is mobile application project designed to preserve and modernize Indonesian cultural heritage. Inspired by the rich illuminations of ancient Malay and Sumatra manuscripts, this application addresses the challenge of manually identifying and adapting these motifs into batik designs. The application uses image processing and machine learning to automatically detect, classify, and extract motifs from manuscript images. Designers can then apply these motifs to generate batik patterns directly within the app, making the process faster. By digitizing and adapting traditional designs, this application not only supports cultural preservation but also empowers new generations to innovate while staying rooted in heritage. This project taught me how to integrate AI with cultural heritage and exploring how technology can support cultural preservation.',
    techStack: [
      'Android App',
      'Kotlin',
      'Android Studio',
      'TensorFlow Lite',
      'Figma',
    ],
    images: {
      main: '/cover/manuscript-cover.jpg',
      gallery: [],
    },
  },

  infruit: {
    title: 'InFruit',
    year: '2024',
    status: 'Completed',
    type: 'Group Project',
    role: 'Mobile Developer',
    timeline: '',
    liveUrl: '',
    slug: 'infruit',
    short_description:
      'A mobile application that uses computer vision to assess fruit freshness and quality, featuring an integrated marketplace to reduce food waste and support farmers.',
    overview:
      'InFruit is a mobile application designed to tackle the problem of high fruit waste, where around 30% of harvests are lost due to inconsistent manual inspection. Many fruits that could still be consumed or processed are discarded leading to financial losses for farmers and negative environmental impacts. Our solution uses computer vision to detect freshness and grading quality from a photo. InFruit also integrates a marketplace that allows lower-grade fruits to be sold instead of wasted, helping farmers maximize their yield while reducing food loss. Through this project, I learned how to integrate machine learning into mobile app, collaborate across disciplines and design a technology that solves real-world agricultural challenges.',
    techStack: [
      'Android App',
      'Kotlin',
      'TensorFlow Lite',
      'Android Studio',
      'MySQL',
    ],
    images: {
      main: '/cover/infruit-cover.jpg',
      gallery: [],
    },
  },

  tangguh: {
    title: 'Tangguh',
    year: '2024',
    status: 'Completed',
    type: 'Group Project',
    role: 'Mobile Developer',
    timeline: '',
    liveUrl: '',
    slug: 'tangguh',
    short_description:
      'A disaster relief mobile application that connects donors with aid posts, providing donation tracking and real-time updates to improve transparency and aid distribution.',
    overview:
      'Tangguh is a mobile application created to address the urgent need for efficient disaster relief and social support. In many natural disasters, victims struggle to receive timely aid, while donors often lack visibility on whether their contributions truly reach those in need. This gap leads to inefficiencies and uneven distributions.Our solution connects donors with disaster relief posts, making it easier to donate clothes, food, and other essentials. Tangguh also provides news updates about disaster needs and allows users to track the status of their donations until they reach recipients. By increasing transparency and simplifying the donation process, it ensures that assistance reaches communities more effectively. Through this project, I learned how to design applications for social impact and create transparent donation workflows.',
    techStack: ['Android App', 'Kotlin', 'Django REST API', 'Android Studio'],
    images: {
      main: '/cover/tangguh-cover.jpg',
      gallery: [],
    },
  },

  'rs-naili-dbs': {
    title: 'RS Naili DBS',
    year: '2024',
    status: 'Completed',
    type: 'Group Project',
    role: 'Web Developer',
    timeline: '',
    liveUrl: '',
    slug: 'rs-naili-dbs',
    short_description:
      'A hospital company profile website built with Laravel, featuring a responsive frontend and an admin dashboard for managing healthcare information and content.',
    overview:
      'The RS Naili DBS Web Project is an integrated platform developed during my internship to modernize the hospital’s digital presence. It addresses the need for a dynamic company profile that allows internal staff to manage and update healthcare information efficiently without technical complexity. Built with the Laravel framework, the application features a responsive frontend and a robust admin dashboard for seamless data management. By bridging the gap between backend logic and intuitive UI, this project ensures that vital hospital services are easily accessible to the public. This experience sharpened my skills in building scalable web architectures and delivering functional technology tailored to institutional needs.',
    techStack: ['Web App', 'PHP', 'Laravel', 'MySQL', 'Bootstrap CSS'],
    images: {
      main: '/cover/naili-cover.jpg',
      gallery: [],
    },
  },
};
