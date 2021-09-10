import dataWarehouse from '../assets/projects-images/data-warehouse.jpg'
import healthIntegrator from '../assets/projects-images/health-integrator.jpg'
import develup from '../assets/projects-images/develup.jpg'
import general from '../assets/projects-images/general.jpeg'
import goodMorning from '../assets/projects-images/good-morning.png'
import amazonClone from '../assets/projects-images/amazon-clone.jpg'
import portfolio from '../assets/projects-images/portfolio.jpg'
import instagramClone from '../assets/projects-images/instagram-clone.jpg'

export const projectData = [
  {
    id: 1,
    name: 'Data Warehouse',
    image: dataWarehouse,
    description:
      'App that allows a Marketing company to manage all the contacts of its clients. JavaScript, Node, Express, MongoDB, HTML and SaaS',
    link: '',
    github: 'https://github.com/FacundoOs/data_warehouse',
  },
  {
    id: 2,
    name: 'Healt Integrator web site',
    image: healthIntegrator,
    description:
      'New website of the Health Integrator company. Full Stack Ruby on Rails, Strapi CMS, Stimulus and Tailwind',
    link: 'https://www.healthintegrator.se/',
    github: '',
  },
  {
    id: 3,
    name: 'Delilah Resto',
    image: general,
    description:
      'API that allows to create an online food ordering system. Node, Express and MySQL',
    link: '',
    github: 'https://github.com/FacundoOs/delilah-resto',
  },
  {
    id: 4,
    name: 'Matchup mobile app',
    image: develup,
    description:
      'Final project at Craft Academy. B2B Mobile application. React Native and Ruby on Rails',
    link: '',
    github: 'https://github.com/FacundoOs/develUp_mobile',
  },
  {
    id: 5,
    name: 'Digital newspaper',
    image: goodMorning,
    description:
      'This project includes 3 front-end (client, administrator and mobile). React, React native and Ruby on Rails',
    link: 'https://goodmorningnews.netlify.app/',
    github: 'https://github.com/FacundoOs/client_user_good_morning_news',
  },
  {
    id: 6,
    name: 'Instagram Clone',
    image: instagramClone,
    description: 'React Native - in progress',
    link: '',
    github: 'https://github.com/FacundoOs/Instagram_clone_react_native',
  },
  {
    id: 7,
    name: 'Amazon Clone',
    image: amazonClone,
    description: 'React, Firebase, Node and Stripe',
    link: 'https://clone-1b668.web.app/',
    github: 'https://github.com/FacundoOs/amazon-clone',
  },
  {
    id: 8,
    name: 'Portfolio',
    image: portfolio,
    description: 'UI/UX design with Figma. React ',
    link: 'https://facundoosores.com/',
    github: 'https://github.com/FacundoOs/react_portfolio',
  },
]
