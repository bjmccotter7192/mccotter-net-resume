import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/star-wars-wallpaper.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/FakeProfilePic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'William (BJ) McCotter',
  description: "This is the full resume for William (BJ) McCotter.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm William McCotter.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A qualified professional working currently as a <strong className="text-stone-100">Staff Software Engineer</strong> 
        for <strong className="text-stone-100">Ad Hoc</strong> who focuses on CI/CD development, Full Stack Software Engineering, 
        and a growing interest in data & machine learning. Strong individual with an automation first mentality, passion for programming, 
        and have tremendous interpersonal skills.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `CHANGE THIS DESCRIPTION`,
  aboutItems: [
    {label: 'Location', text: 'Columbia, MO', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'United States of America', Icon: FlagIcon},
    {label: 'Interests', text: 'Disc Golf, Star Wars, LOTR, Baseball/Softball', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Maryland Eastern Shore', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Ad Hoc LLC', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Angular',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Dev Ops',
    skills: [
      {
        name: 'Github Actions',
        level: 5,
      },
      {
        name: 'Ansible',
        level: 4,
      },
      {
        name: 'Kubernetes',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Angular',
        level: 5,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'Postgres',
        level: 7,
      },
      {
        name: 'MS SQL',
        level: 6,
      },
      {
        name: 'Mongo DB',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2015',
    location: 'University of Maryland Eastern Shore',
    title: 'Bachelors of Science - Computer Science',
    content: <p>Focused on web development but had classes ranging from HTML, JAVA, COBOL, Database Management, Assembly Language, and business classes.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2021 - September 2021',
    location: 'Veterans United Home Loans',
    title: 'IT Team Lead',
    content: (
      <ul>
        <li>Manages a team of systems engineers to produce and improve
            the infrastructure as code around the F5 load balancers, server
            provisioning, DNS, Certificates, and more.</li>
        <li>Migrating secondary datacenter and moving all productions
            applications over to new dc to improve stability of all systems.</li>
        <li>Contributed to the design of the new Automated Service
            Account Creation service that allows service accounts to be
            created and stored in Thycotic and Vault without any manual
            intervention.</li>
        <li>Team refactored and rewrote F5 automation to fit the new
            standards and worked alongside engineers to share legacy
            knowledge of current system..</li>
        <li>Manage teams’ performance and career growth plans to
            promote and build strong and efficient engineers.</li>
        <li>Agile management style</li>
      </ul>
    ),
  },
  {
    date: 'June 2019 - Febuary 2021',
    location: 'Veterans United Home Loans',
    title: 'Application Delivery Engineer',
    content: (
      <ul>
        <li>Developed and maintained automated deployment of the F5
            load balancers, server provisioning, DNS, Certificates, and
            more using Python Rest API and Angular 8+ web site.</li>
        <li>Used RabbitMQ to queue up new server requests</li>
        <li>Designing and implementing tools in containers using
            Docker/Buildah and used Gitlab as the registry, CI/CD deployment, and issue management for our Agile team of
            engineers.</li>
        <li>Migrated to a new primary datacenter using automation tools
            to move all customer applications in a safe and efficient way.</li>
        <li>Deployed all apps to Kubernetes using Kubectl, Helm, and
            Rancher</li>
        <li>Agile team (sprints, retros, reviews)</li>
      </ul>
    ),
  },
  {
    date: 'July 2016 - June 2019',
    location: 'Veterans United Home Loans',
    title: 'Full Stack Software Engineer',
    content: (
      <ul>
        <li>Designing and implementing ASP .NET web applications using
            (C#, SQL, Angular 2+, Html, CSS, JavaScript, XML, JSON, etc.)</li>
        <li>Rewriting legacy code to improve performance and maintainability</li>
        <li>Connected to RabbitMQ and SQL Server Broker</li>
        <li>Use of SQL and LINQ to manipulate and store data efficiently</li>
        <li>Using TFS (Team Foundation Server) to create builds and
            releases and also integrate our source control</li>
        <li>Agile Methodologies (Sprints, Standups, Retros, etc.)</li>
      </ul>
    ),
  },
  {
    date: 'January 2016 - July 2016',
    location: 'Harris Corporation',
    title: 'Junior Software Engineer - Java',
    content: (
      <ul>
        <li>Designed and implemented syntax for complex java servlets</li>
        <li>Knowledge in using JDBC and Tomcat services</li>
        <li>Creating test case documentation and running validation task for specific projects</li>
      </ul>
    ),
  },
  {
    date: 'Summers of 2010 and 2011',
    location: 'NASA Wallops Island Flight Facility',
    title: 'IT Intern',
    content: (
      <ul>
        <li>Arc Map GIS</li>
        <li>Fiber Optic routing</li>
        <li>Converting old copper lines with new FO</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Where to contact me.',
  description: 'Feel free to reach out if you have any questions about my work, thank you!',
  items: [
    {
      type: ContactType.Email,
      text: 'bj.mccotter@gmail.com',
      href: 'mailto:bj.mccotter@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Columbia, MO',
      href: 'https://www.google.ca/maps/place/Columbia,+MO/@38.9466066,-92.4008786,12z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'William McCotter',
      href: 'https://www.linkedin.com/in/william-mccotter-455045188/',
    },
    {
      type: ContactType.Github,
      text: 'bjmccotter7192',
      href: 'https://github.com/bjmccotter7192',
    },
    {
      type: ContactType.Facebook,
      text: 'William McCotter',
      href: 'https://www.facebook.com/wjmccotter',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bjmccotter7192'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/william-mccotter-455045188/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/wjmccotter'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/BJMcCotter'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/10273658/bj-mccotter'},
];
