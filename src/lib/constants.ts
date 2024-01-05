export const background = "0 0% 100%";
export const darkBackground = "0 0% 3.9%";
export const foreground = "0 0% 3.9%";
export const darkForeground = "0 0% 98%";
export const accent = "0 0% 98%";
export const darkAccent = "0 0% 9%";

export const projects = [
  {
    id: 1,
    name: "Sloopy",
    type: "Project",
    summary:
      "Inspired by Ultimate Guitar, Sloopy is a platform for users to connect, learn and create compositions for all of their favourite songs. Integrated with Spotify to allow for streaming audio and a seamless connection to their personal music libraries, users are able to break down songs into loops, access and annotate keys, bpm, modes and scales, and sync individual sections with chords or tablature. Turning once previously complex musical progressions into much more manageable and accessible arrangements, Sloopy fosters creativity and musical exploration for users of all skill levels.",
    links: [
      {
        link: "Source",
        type: "Github",
        href: "https://github.com/saddagada1/sloopy",
      },
      { link: "Demo", type: "Web", href: "https://sloopy.saivamsi.ca" },
    ],
    glyph: [
      45, 32, 31, 19, 18, 30, 42, 54, 66, 78, 90, 102, 114, 125, 124, 123, 110,
      98, 87, 88, 89, 101, 113, 112, 111, 99, 100,
    ],
  },
  {
    id: 2,
    name: "Bella",
    type: "Project",
    summary:
      "An e-commerce marketplace, inspired by Depop and Grailed, with a robust array of features. This includes user authentication, account and store setup, product creation, advanced search and filtering options, product sorting, shopping cart management, checkout and secure payment processing, shipping and order management, and streamlined refund procedures. While certain elements, like the forgot password feature and the implementation of reviews and ratings, are still in development, the core functionality is fully operational and functions seamlessly.",
    links: [
      {
        link: "Source",
        type: "Github",
        href: "https://github.com/saddagada1/bella-t3",
      },
      { link: "Demo", type: "Web", href: "https://bella.saivamsi.ca" },
    ],
    glyph: [
      14, 15, 27, 39, 40, 41, 42, 43, 44, 45, 57, 68, 80, 91, 103, 102, 101,
      100, 87, 75, 63, 51, 64, 65, 66, 67, 127, 124,
    ],
  },
  {
    id: 3,
    name: "Arcade",
    type: "Project",
    summary:
      "A growing collection of video games created using JavaScript, WebGL, or Unreal Engine. Currently only includes the classic game Tetris but you can look forward to an exciting Pokemon-inspired game which is currently under development. This is a passion project to demonstrate the creative potential of web-based gaming and gain a thorough understanding of game engine mechanics.",
    links: [
      {
        link: "Source",
        type: "Github",
        href: "https://github.com/saddagada1/arcade",
      },
      { link: "Demo", type: "Web", href: "https://arcade.saivamsi.ca" },
    ],
    glyph: [
      26, 38, 50, 62, 98, 99, 111, 110, 40, 28, 29, 30, 66, 78, 77, 76, 113,
      114, 115, 102, 33, 45, 44, 56, 80, 92, 93, 105,
    ],
  },
  {
    id: 4,
    name: "Auth",
    type: "Experiment",
    summary:
      "A collection of foundational setups for GraphQL backends with user authentication; designed for either web or mobile applications. Encompassing essential features such as email verification using Nodemailer, support for password recovery, and comprehensive endpoints for user data manipulation, configuration is finely tuned for secure authentication through JWT or database sessions.",
    links: [
      {
        link: "JWT",
        type: "Github",
        href: "https://github.com/saddagada1/graphql-jwt-auth-boiler-plate",
      },
      {
        link: "JWT for Mobile",
        type: "Github",
        href: "https://github.com/saddagada1/graphql-jwt-auth-boiler-plate-mobile",
      },
      {
        link: "Session",
        type: "Github",
        href: "https://github.com/saddagada1/graphql-session-auth-boiler-plate",
      },
    ],
    glyph: [
      43, 31, 18, 17, 28, 40, 52, 64, 63, 75, 87, 99, 111, 124, 125, 126, 127,
      116, 104, 92, 80, 68, 67, 66, 65, 76, 88, 100, 112, 113, 114, 115, 103,
      91, 79, 78, 77,
    ],
  },
];

export const experience = [
  {
    company: "Uncrafted Design",
    title: "Professional Development",
    location: "Toronto, ON",
    start: "January 2022",
    end: "Present",
    description: [
      `Learning industry standard technologies and developing my understanding
      of core web application properties.`,
      `Creating personal projects that reflect my progress and showcase my
      proficiency and skills.`,
    ],
  },
  {
    company: "Integrity IT Solutions",
    title: "IT Field Technician",
    location: "Toronto, ON",
    start: "March 2019",
    end: "January 2022",
    description: [
      `Working in partnership with Telus Communications; completing Kroll
        software setups, workflow and upgrades at contracted pharmacies.`,
      `Setting up network, computers, peripherals and software in compliance
        with Telus and Integrity protocols.`,
      `Completing thorough check of software to ensure peripherals are
        communicating correctly and pharmacists are able to fill prescriptions and
        carry out all necessary tasks.`,
      `Recording and logging any issues raised during install and compiling a
        complete report of the install to be placed under the client's record.`,
    ],
  },
];

export const skills = [
  {
    experience: "Languages",
    skills: ["Java", "Javascript", "Typescript", "Python"],
  },
  {
    experience: "Frameworks",
    skills: ["Spring Boot", "NodeJS", "React", "NextJS", "React Native"],
  },
  {
    experience: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  { experience: "Architecture", skills: ["REST", "GraphQL", "tRPC"] },
  {
    experience: "Services",
    skills: ["AWS", "Google Cloud Platform", "Vercel"],
  },
  {
    experience: "Miscellaneous",
    skills: ["Git", "Unit Testing", "SEO", "Prisma", "Tailwind"],
  },
];

export const stack = [
  {
    name: "Frontend",
    stack: ["Typescript", "NextJS", "React Native", "TailwindCSS", "WebGL"],
  },
  { name: "Backend", stack: ["NodeJS", "Next API Routes", "tRPC"] },
  { name: "Storage", stack: ["MySQL", "PostgreSQL", "Redis", "S3"] },
  {
    name: "Services",
    stack: ["Vercel", "Upstash", "Neon", "Planetscale", "Resend", "AWS"],
  },
];

export const essentials = [
  "https://www.youtube.com/watch?v=DYHng61lftA&ab_channel=CarreroQuirogaDanielAlejandro",
  "https://www.youtube.com/watch?v=6TWdLqER014&ab_channel=WalterCalloni",
  "https://www.youtube.com/watch?v=cJunCsrhJjg&ab_channel=JimiHendrixVEVO",
  "https://www.youtube.com/watch?v=NWJwj4tZMOU&ab_channel=PaulRatcliff",
  "https://www.youtube.com/watch?v=3c_8VUL5jks&ab_channel=stevierayvaughnVEVO",
  "https://www.youtube.com/watch?v=VSLc0tCnOrM&ab_channel=stevie%27sblues",
  "https://www.youtube.com/watch?v=hHHY3eRUMsM&ab_channel=feedbackbro",
  "https://www.youtube.com/watch?v=AU432SxopNM&ab_channel=HoraceWinkk",
  "https://www.youtube.com/watch?v=PDLFoKwTtk4&ab_channel=belinleelo",
  "https://www.youtube.com/watch?v=WZn9QZykx10&ab_channel=neilyoungchannel",
  "https://www.youtube.com/watch?v=OuVIJlSDOs0&ab_channel=neilyoungchannel",
  "https://www.youtube.com/watch?v=pKwQlm-wldA&ab_channel=EricClaptonVEVO",
  "https://www.youtube.com/watch?v=P701paKEMXs&ab_channel=EchelonEntertainment",
  "https://www.youtube.com/watch?v=fJlkkRub6MU&ab_channel=Hayato0313",
  "https://www.youtube.com/watch?v=ZPwCnNwhgFA&ab_channel=johnmayerVEVO",
  "https://www.youtube.com/watch?v=yVrMqvu2_fE&ab_channel=tavarinho123",
];
