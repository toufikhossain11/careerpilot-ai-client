import { careersData, type Career } from './careers';

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  position: string;
  gradient: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export interface CareerDetails {
  id: string;
  title: string;
  category: string;
  description: string;
  averageSalary: number;
  rating: number;
  experienceLevel: string;
  location: string;
  workType: string;
  requiredSkills: string[];
  gradient: string;
  iconName: string;
  
  // Extended details
  fullDescription: string;
  responsibilities: string[];
  dailyTasks: string[];
  whyChoose: string[];
  jobGrowth: string;
  remoteAvailability: string;
  demandLevel: string;
  aiMatchScore: number;
  
  roadmap: RoadmapStep[];
  reviews: Review[];
}

// Predefined detailed reviews to reuse across careers or select dynamically
const MOCK_REVIEWS: Review[] = [
  {
    name: 'Michael Chang',
    avatar: 'MC',
    rating: 5,
    review: 'This learning path was incredibly clear and accurate. The roadmap matched exactly what hiring managers asked in my interviews. I got hired in 4 months!',
    position: 'Junior Developer',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Sophia Miller',
    avatar: 'SM',
    rating: 5,
    review: 'Transitioning from another industry was terrifying, but the step-by-step guidance on skills gap analysis gave me the confidence to focus on the right libraries. Essential tool.',
    position: 'Career Switcher',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Amara Okafor',
    avatar: 'AO',
    rating: 5,
    review: 'The interview prep steps were a lifesaver. Practicing the specific framework questions listed on Step 4 helped me land my dream remote role.',
    position: 'Systems Engineer',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'Lucas Dupont',
    avatar: 'LD',
    rating: 4,
    review: 'Highly recommend the project phase. Building the recommended full stack apps gave me a strong portfolio that immediately got attention on LinkedIn.',
    position: 'Self-taught Dev',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    name: 'Jessica Vance',
    avatar: 'JV',
    rating: 5,
    review: 'I followed the exact roadmap for frontend engineering and the curated topics list saved me hundreds of hours of researching what to learn next.',
    position: 'Frontend Dev',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Arjun Mehta',
    avatar: 'AM',
    rating: 5,
    review: 'The salary insights and remote availability rankings helped me negotiate my salary offer with real confidence. CareerPilot is worth its weight in gold!',
    position: 'Product Designer',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

// Helper to get detailed career data with dynamic fallbacks
export function getCareerDetails(id: string): CareerDetails | null {
  const baseCareer = careersData.find((c) => c.id === id);
  if (!baseCareer) return null;

  // Pre-configured custom detailed details for key roles
  const customDetails: Record<string, Partial<CareerDetails>> = {
    'frontend-engineer': {
      fullDescription: 'Frontend Engineering is the practice of crafting the visual, interactive, and client-side components of web applications. You will translate designs into clean, responsive HTML, CSS, and JavaScript, while ensuring maximum accessibility, search engine friendliness, and optimized loading performance.',
      responsibilities: [
        'Build and maintain highly responsive, accessible web interfaces.',
        'Collaborate with UI/UX designers to translate Figma design tokens into production-ready web layouts.',
        'Optimize client-side application performance, bundles, and assets.',
        'Integrate RESTful APIs and handle asynchronous data states smoothly.',
        'Write reusable, clean component structures and ensure comprehensive cross-browser test compliance.',
      ],
      dailyTasks: [
        'Review Figma design specs and plan component modularity structures.',
        'Write clean React components using TypeScript and style them with Tailwind CSS.',
        'Participate in code reviews, design system updates, and daily sprint standups.',
        'Optimize Next.js routes, server components, and client-side page load times.',
        'Debug layout inconsistencies and resolve client state management queries.',
      ],
      whyChoose: [
        'High demand: Almost every software company requires top-tier frontend talent to build consumer products.',
        'Visual feedback: You can immediately see the fruits of your labor in the browser as you write code.',
        'Vibrant ecosystem: The React, Next.js, and TypeScript communities are active and filled with constant innovation.',
        'Excellent remote options: Due to the nature of web development, frontend roles are highly suited to remote environments.',
      ],
      jobGrowth: '+18% (Much faster than average)',
      remoteAvailability: '92% (High)',
      demandLevel: 'Very High',
      aiMatchScore: 95,
      roadmap: [
        {
          title: 'Learn Fundamentals',
          description: 'Master the core pillars of the web. Learn semantic layout tags, structural styling, and program logic loops.',
          topics: ['HTML5 Semantics', 'CSS Flexbox & Grid', 'JavaScript ES6+', 'Git & GitHub Version Control', 'Web Accessibility (a11y)'],
          duration: 'Months 1-3',
        },
        {
          title: 'Build Projects',
          description: 'Construct interactive web applications to apply coding principles. Master responsive designs and REST integration.',
          topics: ['Dynamic DOM Manipulation', 'Tailwind CSS Utility Frameworks', 'Fetching API Endpoints', 'Deploying to Vercel/Netlify', 'Handling JSON States'],
          duration: 'Months 4-6',
        },
        {
          title: 'Master Frameworks',
          description: 'Learn modern, scalable UI frameworks and component systems. Build robust single-page and server-side apps.',
          topics: ['React Hooks & Context', 'Next.js App Router', 'TypeScript Interface Typings', 'TanStack Query Data Fetching', 'Zod Input Schema Validation'],
          duration: 'Months 7-9',
        },
        {
          title: 'Prepare Interviews',
          description: 'Practice common tech interview formats, JavaScript algorithm questions, and behavioral criteria.',
          topics: ['JavaScript Event Loop & Closures', 'Virtual DOM & Memoization', 'Web Performance Audits', 'Mock System Design Challenges', 'Behavioral STAR Method'],
          duration: 'Month 10',
        },
        {
          title: 'Apply for Jobs',
          description: 'Build a premium portfolio, optimize your LinkedIn profile, write targeted cold emails, and submit resume scans.',
          topics: ['ATS-optimized Resume Writing', 'Portfolio Project Showcases', 'LinkedIn Networking Strategies', 'Navigating Technical Screener Chats', 'Negotiating Job Offers'],
          duration: 'Months 11-12',
        },
      ],
    },
    'backend-engineer': {
      fullDescription: 'Backend Engineering focuses on designing, writing, and optimizing the server-side architecture, databases, business logic layer, and communication protocols. You will enable frontend interfaces to store, retrieve, and process user data securely and seamlessly.',
      responsibilities: [
        'Architect scalable, microservices-oriented backend server logic and databases.',
        'Design and program robust, type-safe REST, GraphQL, and gRPC APIs.',
        'Optimize slow database queries, table relationships, and index caching.',
        'Implement authentication, authorization boundaries, and security cryptosystems.',
        'Manage cloud application container deployments and log monitors.',
      ],
      dailyTasks: [
        'Write type-safe API route handlers using Node.js, Go, or Python.',
        'Design database schemas, write migrations, and optimize queries.',
        'Integrate third-party services (payment gateways, notification services).',
        'Review database server performance graphs and container memory usage logs.',
        'Collaborate with frontend developers on API contracts and mock response shapes.',
      ],
      whyChoose: [
        'Intellectual challenge: Solve complex algorithmic, database scaling, and caching challenges.',
        'Platform stability: Play a critical role in keeping applications secure, fast, and constantly available.',
        'High earning potential: Advanced backend, infrastructure, and cloud roles carry premium industry salaries.',
        'Tech longevity: Fundamental backend architectural patterns (SQL, HTTP, APIs) evolve slowly, giving skills high durability.',
      ],
      jobGrowth: '+21% (Very high growth)',
      remoteAvailability: '85% (High)',
      demandLevel: 'High',
      aiMatchScore: 88,
      roadmap: [
        {
          title: 'Learn Fundamentals',
          description: 'Learn system programming, fundamental network protocols, and standard query formats.',
          topics: ['Programming in Go / Node.js / Python', 'HTTP, REST & TCP/IP Networks', 'Relational Database Queries (SQL)', 'Linux Command Line Basics', 'Git Version Control'],
          duration: 'Months 1-3',
        },
        {
          title: 'Build Projects',
          description: 'Construct full API applications, integrate relational databases, and implement session tokens.',
          topics: ['Express.js / Gin Server Routes', 'PostgreSQL Schema & Queries', 'JWT & Session Authentication', 'VPC & Hosting Basics', 'Writing Integration Tests'],
          duration: 'Months 4-6',
        },
        {
          title: 'Master Frameworks',
          description: 'Adopt production-grade architectural tools, key-value storage, and deployment container platforms.',
          topics: ['Docker Containerization', 'ORM Databases (Prisma, Mongoose)', 'Redis Caching & Session Storage', 'GraphQL Schema Definitions', 'Kubernetes Clusters'],
          duration: 'Months 7-9',
        },
        {
          title: 'Prepare Interviews',
          description: 'Master system design, SQL query optimizations, database sharding, and coding test algorithms.',
          topics: ['Data Structures & Algorithms', 'System Design Patterns', 'SQL Join Optimizations', 'OAuth & API Gateway Security', 'Concurrency & Event Loops'],
          duration: 'Month 10',
        },
        {
          title: 'Apply for Jobs',
          description: 'Present polished backend github code, write developer blog articles, and prepare system diagrams.',
          topics: ['System Architecture Portfolios', 'LinkedIn Dev Community Networking', 'ATS-optimized Tech Resumes', 'System Design Whiteboard Practice', 'Contract Negotiations'],
          duration: 'Months 11-12',
        },
      ],
    },
  };

  // Merge base features with custom details, or generate fallbacks dynamically
  const details = customDetails[id] || {};

  const fallbackRoadmap: RoadmapStep[] = [
    {
      title: 'Learn Fundamentals',
      description: 'Acquire foundational skills, core theories, and baseline technical languages for this career.',
      topics: [`Core ${baseCareer.category} Principles`, 'Industry-standard Tools', 'Basic Version Control', 'Terminology & Definitions', 'Baseline Standards'],
      duration: 'Months 1-3',
    },
    {
      title: 'Build Projects',
      description: 'Build small practical projects, establish code patterns, and apply your newly acquired baseline tools.',
      topics: ['Standard Feature Sets', 'Responsive Design Integrations', 'Interactive API Elements', 'Portfolio Setup', 'Independent Sandbox Apps'],
      duration: 'Months 4-6',
    },
    {
      title: 'Master Frameworks',
      description: 'Progress to advanced platforms, framework abstractions, and optimization configurations.',
      topics: ['Advanced Libraries', 'TypeScript Integration', 'System Performance Optimization', 'Production Architecture', 'Continuous Integration basics'],
      duration: 'Months 7-9',
    },
    {
      title: 'Prepare Interviews',
      description: 'Drill down on typical technical challenges, problem-solving reviews, and behavioral criteria.',
      topics: ['Live Coding Practices', 'System Architecture Reviews', 'Common Algorithmic Questions', 'STAR Interview Methods', 'Screener Call preparation'],
      duration: 'Month 10',
    },
    {
      title: 'Apply for Jobs',
      description: 'Launch your application campaigns, build networking contacts, and navigate career offers.',
      topics: ['ATS Resumes', 'LinkedIn Profiles', 'Cold Contact Strategies', 'Whiteboard Problem Solving', 'Offer Review & Negotiation'],
      duration: 'Months 11-12',
    },
  ];

  return {
    id: baseCareer.id,
    title: baseCareer.title,
    category: baseCareer.category,
    description: baseCareer.description,
    averageSalary: baseCareer.averageSalary,
    rating: baseCareer.rating,
    experienceLevel: baseCareer.experienceLevel,
    location: baseCareer.location,
    workType: baseCareer.workType,
    requiredSkills: baseCareer.requiredSkills,
    gradient: baseCareer.gradient,
    iconName: baseCareer.category,
    
    // Dynamic fallbacks if not defined
    fullDescription: details.fullDescription || `${baseCareer.title} is a key specialized role in the ${baseCareer.category} space. In this career path, you will harness professional tools to solve unique technical problems, build digital layouts, and collaborate with cross-functional teams to build state of the art application suites.`,
    responsibilities: details.responsibilities || [
      `Design and maintain highly optimized solutions for the ${baseCareer.category} layer.`,
      'Collaborate with developers, engineers, and product leads on features implementation.',
      'Ensure standard security constraints and accessible HTML structure are implemented.',
      'Optimize web performance, resource allocation, and API integration.',
      'Participate in development standups, sprint reviews, and technical retro assessments.',
    ],
    dailyTasks: details.dailyTasks || [
      'Write clean, modular code to implement target design cards and backend routers.',
      'Review open pull requests, suggest feedback adjustments, and coordinate merges.',
      'Troubleshoot active bugs, write regression test coverage, and deploy hotfixes.',
      'Refactor slow methods, optimize network queries, and inspect logs.',
      'Document feature APIs, maintain architecture wiki pages, and map dependencies.',
    ],
    whyChoose: details.whyChoose || [
      `Rapid industry expansion: The demand for ${baseCareer.title} continues to grow exponentially worldwide.`,
      'Compelling salary: Companies offer premium salaries, stock option grants, and flexible healthcare packages.',
      'Excellent remote options: Professional workflows are highly decentralized, supporting remote and flexible work.',
      'Constantly evolving tools: You get to play with modern packages, keeping your career learning path fresh and exciting.',
    ],
    jobGrowth: details.jobGrowth || '+15% (Faster than average)',
    remoteAvailability: details.remoteAvailability || '75% (Moderate-High)',
    demandLevel: details.demandLevel || (baseCareer.isPopular ? 'Very High' : 'High'),
    aiMatchScore: details.aiMatchScore || Math.floor(Math.random() * 15) + 81, // 81 to 95
    
    roadmap: details.roadmap || fallbackRoadmap,
    reviews: MOCK_REVIEWS,
  };
}
