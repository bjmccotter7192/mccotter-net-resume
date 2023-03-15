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
import porfolioImage1 from '../images/portfolio/punta-cuna.jpg';
import porfolioImage2 from '../images/portfolio/vegas-trip-1.jpg';
import porfolioImage3 from '../images/portfolio/vegas-trip-2.jpg';
import porfolioImage4 from '../images/portfolio/lego-land-orlando.jpg';
import profilepic from '../images/FakeProfilePic.jpg';
import testimonialImage from '../images/nasa-hubble-dark.jpg';
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
  title: 'McCotter.net',
  description: "This is the full resume for William (BJ) McCotter.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Travel: 'travel',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  FavoriteQuotes: 'quotes',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `William McCotter`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A qualified professional working currently as a <strong className="text-stone-100">Staff Software Engineer</strong> for <strong className="text-stone-100">Ad Hoc</strong> who 
        focuses on CI/CD development, Full Stack Software Engineering, 
        and a growing interest in data & machine learning. Strong individual with an automation first mentality, passion for programming, 
        and have tremendous interpersonal skills.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/william_mccotter_resume.pdf',
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
  description: `Hello my name is William McCotter but most people call me BJ. I live in Columbia, Missouri
  but was originally from the Eastern Shore of Maryland. I love sports, code, and tech, and hope that I can bring
  some of my passions to your company.`,
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
    name: 'Dev Ops',
    skills: [
      {
        name: 'Github Actions',
        level: 8,
      },
      {
        name: 'Gitlab-ci',
        level: 6,
      },
      {
        name: 'Kubernetes',
        level: 4,
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
        name: 'C# / Java',
        level: 5,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
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
    title: 'Punta Cuna Trip March 2023',
    description: 'Our trip to Punta Cuna, DR where we swam with sharks and stingrays.',
    url: 'https://mccotter.net',
    image: porfolioImage1,
  },
  {
    title: 'Vegas Trip - When We Were Young Festival 2022',
    description: 'Trip to Las Vegas, Nevada to go see some of the best punk/hardcore bands ever!',
    url: 'https://mccotter.net',
    image: porfolioImage2,
  },
  {
    title: 'Vegas Trip - Scenery',
    description: 'A scenic view of Las Vegas, Nevada.',
    url: 'https://mccotter.net',
    image: porfolioImage3,
  },
  {
    title: 'Lego Land Orlando',
    description: 'Work trip to Orlando, Florida where we went to Disney Springs and saw Lego Land.',
    url: 'https://mccotter.net',
    image: porfolioImage4,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Ad Hoc LLC - CTO Team',
    title: 'Staff Software Engineer - Full Stack',
    content: (
      <ul>
        <li>Researched and presented finding around WebAuthn and Passwordless Authentication</li>
        <li>Created multiple write ups, proof of concepts, and presentations to share my knowledge of the topic.</li>
        <li>Created a Slack bot to automatically archive channels that have been inactive for 60 days.</li>
        <li>Researching the pros and cons of how and why to use Salesforce in the government space.</li>
        <li>Kanban style team "small team just getting started"</li>
      </ul>
    ),
  },
  {
    date: 'September 2021 - October 2022',
    location: 'Ad Hoc LLC - Platform Spike Team / Forms Library Team (VA)',
    title: 'Senior Software Engineer - Dev Ops',
    content: (
      <ul>
        <li>Worked on the underlying forms package of va.gov</li>
        <li>Took outdated react-json-schema-form that was forked from an older version and replaced it with a more modern
          framework like Formik. 
        </li>
        <li>Created all the Github Actions for the team</li>
        <ol>
          <li>Automated Test/Build/Deploy to NPM</li>
          <li>Automated Code Documentation using api-extractor</li>
        </ol>
        <li>Worked in the new package to the monolith front end of va.gov and had to deal with React Router version issues,
          automated flakey tests, and build errors
        </li>
        <li>Increased the time to learn for the new system from a couple months to a couple weeks since Front End Engineers 
          are way more familiar with React components compared to the JSON configuration building of react-json-schema-form
        </li>
        <li>Agile cross functional team with 3 engineers, 2 designers, 1 product manager, and 1 dev ops engineer</li>
      </ul>
    ),
  },
  {
    date: 'February 2021 - September 2021',
    location: 'Veterans United Home Loans  - Platform Engineering',
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
    location: 'Veterans United Home Loans - Platform Engineering',
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
    location: 'Veterans United Home Loans - Software Services',
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
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2015',
    location: 'University of Maryland Eastern Shore',
    title: 'Bachelors of Science - Computer Science',
    content: <p>Focused on web development but had classes ranging from HTML, JAVA, COBOL, Database Management, Assembly Language, and business classes.</p>,
  },
  {
    date: 'October 2022',
    location: 'Slack',
    title: 'Slack Certified Developer Certified',
    content: <p>Learned how to build, deploy, and maintain slack applications using the Slack SDKs, Web Client, and admin portal. 
      Created a slack channel archiving bot that would scrape through all the public channels and mark any 
      inactive channels for the past 60 days. This runs on a 60 day interval and once ran the second time will find the inactivity
      message and archive the channel automatically.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Yoda',
      text: 'No. Try not. Do… or do not. There is no try.',
      image: 'images/yoda-square-pic.png',
    },
    {
      name: 'Gandalf',
      text: 'All we have to decide is what to do with the time that is given to us.',
      image: 'images/Gandalf_the_Grey.webp',
    },
    {
      name: 'Sirius Black',
      text: 'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.',
      image: 'images/sirius-black.jpg',
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
