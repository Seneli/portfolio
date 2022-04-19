var skills = [
  {
    name: 'Figma',
    area: 'Design',
    selected: true,
  },
  {
    name: 'Animista',
    area: 'Design',
    selected: true,
  },
  {
    name: 'HTML & CSS',
    area: 'Front-End',
    selected: true,
  },
  {
    name: 'React',
    area: 'Front-End',
    selected: true,
  },
  {
    name: 'SASS',
    area: 'Front-End',
    selected: true,
  },
  {
    name: 'Styled Components',
    area: 'Front-End',
    selected: true,
  },
  {
    name: 'MongoDB',
    area: 'Database',
    selected: true,
  },
  {
    name: 'AWS S3',
    area: 'Database',
    selected: true,
  },
  {
    name: 'SQL',
    area: 'Database',
    selected: true,
  },
  {
    name: 'Firebase',
    area: 'Database',
    selected: true,
  },
  {
    name: 'Java',
    area: 'Language',
    selected: true,
  },
  {
    name: 'Python',
    area: 'Language',
    selected: true,
  },
  {
    name: 'PHP',
    area: 'Language',
    selected: true,
  },
  {
    name: 'Javascript',
    area: 'Language',
    selected: true,
  },
  {
    name: 'Typescript',
    area: 'Language',
    selected: true,
  },
];

var projects = [
  {
    name: 'Vanilla To Do List',
    description: '__',
    skills: ['HTML & CSS', 'Javascript'],
    media: '__',
    github: '__',
  },
  {
    name: 'PTC Gatsby Site',
    description: '__',
    skills: ['React', 'Gatsby'],
    media: '__',
    github: '__',
  },
  {
    name: 'PTC X Angstrom Coding Challenge Platform',
    description: '__',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'AWS S3'],
    media: '__',
    github: '__',
  },
  {
    name: 'Covid Rapid Screener',
    description: '__',
    skills: ['React', 'Python', 'Firebase'],
    media: '__',
    github: '__',
  },
  {
    name: 'Elevator System',
    description: '__',
    skills: ['Java'],
    media: '__',
    github: '__',
  },

  {
    name: 'Personal Website',
    description: '__',
    skills: ['React', 'SASS'],
    media: '__',
    github: '__',
  },
];

const map = {};

const generateMap = (skills) => {
  skills.forEach((skill, index) => {
    map[skill.name] = index;
  });
};

generateMap(skills);

export { skills, projects, map };
