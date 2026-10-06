export type TechItem = {
  name: string;
  icon: string;
  role: string;
  level: number;
  environment?: "Node.js" | "Python" | "Go";
};

export type StackCategory = {
  title: string;
  items: TechItem[];
};

export const STACK_DATA: StackCategory[] = [
  {
    title: "FRONTEND",
    items: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        role: "MARKUP LANGUAGE",
        level: 90,
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        role: "STYLING LANGUAGE",
        level: 88,
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        role: "UI LIBRARY",
        level: 95,
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        role: "FULL STACK FRAMEWORK",
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        role: "CSS FRAMEWORK",
        level: 90,
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        role: "STATE MANAGEMENT",
        level: 82,
      },
      {
        name: "Apollo",
        icon: "https://cdn.simpleicons.org/apollographql/311C87",
        role: "GRAPHQL CLIENT",
        level: 78,
      },
      {
        name: "Vite",
        icon: "https://cdn.simpleicons.org/vite/646CFF",
        role: "BUILD TOOL",
        level: 80,
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
        role: "INTERFACE BLUEPRINT",
        level: 75,
      },
    ],
  },

  {
    title: "BACKEND",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        role: "RUNTIME ENVIRONMENT",
        level: 90,
        environment: "Node.js",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/68A063",
        role: "BACKEND FRAMEWORK",
        level: 88,
        environment: "Node.js",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 85,
        environment: "Python",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.simpleicons.org/fastapi/009688",
        role: "PYTHON API FRAMEWORK",
        level: 85,
        environment: "Python",
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 75,
        environment: "Go",
      },
      {
        name: "Echo",
        icon: "/echo-square.png",
        role: "GO WEB FRAMEWORK",
        level: 75,
        environment: "Go",
      },
      {
        name: "SQLAlchemy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
        role: "PYTHON ORM",
        level: 80,
        environment: "Python",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        role: "BACKEND SERVICE",
        level: 78,
        environment: "Node.js",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        role: "ORM TOOL",
        level: 85,
        environment: "Node.js",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
        role: "MONGODB ODM",
        level: 82,
        environment: "Node.js",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.simpleicons.org/graphql/E10098",
        role: "API QUERY LANGUAGE",
        level: 78,
        environment: "Node.js",
      },
      {
        name: "GORM",
        icon: "/gorm-square.png",
        role: "GO ORM",
        level: 75,
        environment: "Go",
      },
    ],
  },

  {
    title: "DATABASE",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        role: "RELATIONAL DATABASE",
        level: 85,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        role: "NoSQL DATABASE",
        level: 84,
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        role: "RELATIONAL DATABASE",
        level: 80,
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        role: "EMBEDDED DATABASE",
        level: 78,
      },
      {
        name: "Redis",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redis-icon.png",
        role: "IN-MEMORY DATABASE",
        level: 76,
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        role: "BACKEND DATABASE",
        level: 78,
      },
    ],
  },

  {
    title: "LANGUAGES",
    items: [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 72,
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 78,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 88,
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 85,
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 75,
      },
    ],
  },

  {
    title: "TOOLS",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        role: "VERSION CONTROL",
        level: 92,
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        role: "CODE EDITOR",
        level: 70,
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        role: "CONTAINER PLATFORM",
        level: 80,
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        role: "OPERATING SYSTEM",
        level: 85,
      },
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/000000",
        role: "HOSTING PLATFORM",
        level: 80,
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        role: "API TESTING TOOL",
        level: 86,
      },
    ],
  },

  {
    title: "CLOUD & DEPLOYMENT",
    items: [
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/000000",
        role: "WEB HOSTING PLATFORM",
        level: 80,
      },
      {
        name: "Neon",
        icon: "https://cdn.simpleicons.org/neon/000000",
        role: "SERVERLESS POSTGRESQL",
        level: 75,
      },
      {
        name: "Netlify",
        icon: "https://cdn.simpleicons.org/netlify/00C7B7",
        role: "WEB HOSTING PLATFORM",
        level: 75,
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
        role: "BACKEND PLATFORM",
        level: 75,
      },
      {
        name: "Render",
        icon: "https://cdn.simpleicons.org/render/46E3B7",
        role: "CLOUD PLATFORM",
        level: 72,
      },
      {
        name: "Aiven",
        icon: "https://aiven.io/favicon.ico",
        role: "CLOUD DATABASE PLATFORM",
        level: 75,
      },
    ],
  },

  {
    title: "PAYMENTS",
    items: [
      {
        name: "Stripe",
        icon: "https://cdn.simpleicons.org/stripe/635BFF",
        role: "PAYMENT PLATFORM",
        level: 75,
      },
      {
        name: "SSLCommerz",
        icon: "https://sslcommerz.com/wp-content/uploads/2024/03/z.svg",
        role: "BANGLADESH PAYMENT GATEWAY",
        level: 75,
      },
    ],
  },

  {
    title: "AUTHENTICATION",
    items: [
      {
        name: "JWT",
        icon: "https://jwt.io/img/pic_logo.svg",
        role: "TOKEN AUTHENTICATION",
        level: 85,
      },
      {
        name: "Passport.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/passport/passport-original.svg",
        role: "AUTHENTICATION MIDDLEWARE",
        level: 85,
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        role: "FIREBASE AUTHENTICATION",
        level: 85,
      },
    ],
  },

  {
    title: "AI & APIs",
    items: [
      {
        name: "OpenRouter",
        icon: "https://cdn.simpleicons.org/openrouter/6467F2",
        role: "AI API PLATFORM",
        level: 70,
      },
    ],
  },
];
