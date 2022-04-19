import {
  todo_list_img,
  personal_website_img,
  PTC_coding_challenge_img,
  CRS_img,
  PTC_2020_hackathon_img,
  Elevator_system_img
} from '../images/projects/index';

var skills = [
  {
    name: 'Figma',
    area: 'Design',
    selected: true
  },
  {
    name: 'Animista',
    area: 'Design',
    selected: true
  },
  {
    name: 'HTML & CSS',
    area: 'Front-End',
    selected: true
  },
  {
    name: 'React',
    area: 'Front-End',
    selected: true
  },
  {
    name: 'SASS',
    area: 'Front-End',
    selected: true
  },
  {
    name: 'Styled Components',
    area: 'Front-End',
    selected: true
  },
  {
    name: 'MongoDB',
    area: 'Database',
    selected: true
  },
  {
    name: 'AWS S3',
    area: 'Database',
    selected: true
  },
  {
    name: 'SQL',
    area: 'Database',
    selected: true
  },
  {
    name: 'Firebase',
    area: 'Database',
    selected: true
  },
  {
    name: 'Java',
    area: 'Language',
    selected: true
  },
  {
    name: 'Python',
    area: 'Language',
    selected: true
  },
  {
    name: 'PHP',
    area: 'Language',
    selected: true
  },
  {
    name: 'Javascript',
    area: 'Language',
    selected: true
  },
  {
    name: 'Typescript',
    area: 'Language',
    selected: true
  },
  {
    name: 'Raspberry Pi',
    area: 'Hardware',
    selected: true
  }
];

var projects = [
  {
    name: 'Personal Website',
    description: 'This website 😁✌️',
    skills: ['React', 'SASS', 'Animista'],
    media: personal_website_img,
    github: 'https://github.com/Seneli/portfolio'
  },
  {
    name: 'PTC X Angstrom Coding Challenge Platform',
    description:
      'A full stack website Youngjun and I made in 2021 for PTC to host a coding competition for highschoolers. During the competition, this platform supported over 30+ users and 100+ submissions. It had user accounts, password reset capability, an admin account for grading and leaderboards.',
    //The website had the ability for participants to log into and sign up for accounts, reset their password and submit .txt files of their code. There was also a leaderboard for users and an admin account that could be used to view participant submissions and submit grades.
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'AWS S3'],
    media: PTC_coding_challenge_img,
    github: 'https://github.com/Seneli/PTC-Coding-Platform'
  },
  {
    name: 'Covid Rapid Screener',
    description:
      'The Covid Rapid Screener is a project I made with a group of 2 other students in 3rd year. This distributed embedded system can detect if a user was wearing a mask or has a body temperature over 38 degrees. The intended use case was for automated covid screening.',
    skills: ['React', 'Python', 'Firebase', 'Raspberry Pi'],
    media: CRS_img,
    github: 'https://github.com/Seneli/SYSC3010W22_L3W_G4'
  },
  {
    name: 'Elevator System',
    description:
      'This project was made in a group with 4 other students and featured 3 subsystems, the floor, scheduler and elevators that simulate an elevator system with multiple floors and elevators. Messaging between each system was done through UDP.',
    skills: ['Java', 'UDP messaging'],
    media: Elevator_system_img,
    github: 'https://github.com/Seneli/Elevator-System'
  },
  {
    name: 'PTC - 2020 Hackathon Announcement Website',
    description:
      'A website Youngjun and I made for PTC to announce a hackathon they hosted in 2020.',
    skills: ['React', 'Gatsby', 'SASS'],
    media: PTC_2020_hackathon_img,
    github: 'https://github.com/Seneli/PTC-2020-Hackathon-Website'
  },
  {
    name: 'Vanilla To Do List',
    description:
      'This was the first app I made with HTML, CSS and Javascript. It lets you add, select and delete tasks to a to-do list. I was really proud of it at the time.',
    skills: ['HTML & CSS', 'Javascript'],
    media: todo_list_img,
    github: 'https://github.com/Seneli/vanilla-todo'
  }
];

const map = {};

const generateMap = (skills) => {
  skills.forEach((skill, index) => {
    map[skill.name] = index;
  });
};

generateMap(skills);

export { skills, projects, map };
