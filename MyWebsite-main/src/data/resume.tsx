import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohit Sen",
  initials: "Dev",
  url: "https://github.com/immohitsen",
  location: "U.P, India",
  locationLink: "https://www.google.com/maps/place/Uttar+Pradesh/",
  description:
    "Tech enthusiast passionate about building projects and bringing ideas to life.🚀",
  summary:
    "I'm a final-year undergrad at NIT Raipur, passionate about [Full-stack development](#skills) and [Frontend Development](#projects). I love building scalable tech, solving real-world problems, and sharing insights on X. I founded The Logicgen, an agency helping creators and businesses grow online. Through freelance work, I've collaborated with 30K+ follower clients, boosting their digital presence. Always eager to learn, I'm actively seeking impactful opportunities to apply my skills and push boundaries.",
  avatarUrl: "/mohit.jpg",

  skills: [
    "React.js",
    "Next.js",
    "Javascript",
    "SQL",
    "Python",
    "React Native",
    "Typescript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "C++",
    "Java",
    "SQL",
    "TailwindCSS",
    "Express.js",
    "Git",
    "GitHub Actions",
    "Shadcn UI",
    "WordPress",
    "MCP",
    "LLM Agent"
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "senmohit9005@gmail.com",
    tel: "+91 8957951979",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/immohitsen",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/immohitsen/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/immohitsen",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:senmohit9005@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Gokapture Event Technology",
      title: "Web Designer & Developer",
      location: "Raipur, Chhattisgarh",
      logoUrl: "/gk.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Designed and developed several webpages for the official site of the company. Used wordpress and elementor for developing the site.",
    },
    {
      company: "The Logicgen",
      href: "https://thelogigen.com/",
      title: "Co-Founder",
      location: "Remote",
      logoUrl: "/tl.png", // use your logo or placeholder
      start: "Jan 2022",
      end: "Present",
      description:
        "Founded a digital agency helping creators and businesses scale their online presence. Delivered websites, marketing funnels, and automation for clients with 30K+ followers. Managed end-to-end client operations, from ideation to deployment and growth.",
    },
    {
      company: "Super Soldier Flagging",
      href: "https://ssfvt.com/",
      title: "Tech Lead",
      location: "Remote, USA",
      logoUrl: "/ssfvt.png",
      start: "Mar 2023",
      end: "April 2023",
      description:
        "Led the end-to-end development of ssfvt.com, driving an 80% surge in online engagement through a seamless React + WordPress integration. Enhanced user experience and performance, resulting in a 30% uptick in customer inquiries. Collaborated with design and content teams to elevate brand visibility by 60% across digital platforms.",
    },
    
  ],

  education: [
    {
      school: "National Institute of Technology, Raipur",
      degree: "Bachelor of Technology, Biotechnology Engineering",
      logoUrl: "/nitrr.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "St. Thomas School, Kanpur",
      degree: "12th ISC - 91%",
      logoUrl: "/school.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "St. Thomas School, Kanpur",
      degree: "10th CISCE - 96.6%",
      logoUrl: "/school.png",
      start: "2019",
      end: "2020",
    },
  ],

  projects: [
    {
      title: "ParseMate",
      href: "https://github.com/immohitsen/ParseMate",
      dates: "March 2025",
      active: true,
      description:
        "A smart XML parsing and form rendering app. Upload or paste XML to generate interactive forms instantly.",
      technologies: ["React Native", "Nativewind", "Expo", "Android"],
      links: [],
      image: "/parsemate.png",
      video: "",
    },
    {
      title: "iScrape",
      href: "https://github.com/immohitsen/iScrape",
      dates: "Feb 2024",
      active: true,
      description:
        "A sleek and efficient note-taking app designed for seamless organization, quick access, and effortless management of your thoughts and ideas.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCSS",
        "JWT",
      ],
      links: [],
      image: "/iscrape.jpeg",
      video: "",
    },
    {
      title: "Smart Ticketing Software",
      href: "https://github.com/immohitsen/penzaNew",
      dates: "March 2025",
      active: true,
      description:
        "A modern customer support ticketing system built with React, Tailwind CSS, and Node.js. Manage tickets, track customer issues, and streamline support workflows.",
      technologies: ["MERN", "JWT", "Tailwind"],
      links: [],
      image: "/penza.png",
      video: "",
    },
    {
      title: "Headlines",
      href: "https://github.com/immohitsen/Headlines",
      dates: "March 2024",
      active: true,
      description:
        "ReactJs powered news app. It fetches content via News API and displays info on the site depending on the category which user wants to see.",
      technologies: ["MERN", "News API"],
      links: [],
      image: "/headlines.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Border Patrolling UGV",
      dates: "March 2023",
      location: "IIT BHU",
      description:
        "Secured First Runner-Up at Technex'23 (IIT BHU) and 1st position overall at Vigyaan — the National Science Exhibition under Aavartan'23, Central India's largest tech fest hosted by NIT Raipur. Our project, a surveillance bot built for unmanned operations in high-risk border zones, was remotely controlled from a central hub to protect soldiers'lives. The innovation was also featured at IIT Roorkee and spotlighted on their official platforms.",
      image: "/technex.png",
      links: [
        {
          title: "Source",
          icon: <Icons.linkedin className="h-4 w-4"/>,
          href: "https://www.linkedin.com/posts/immohitsen_aavartan-startup-nitrr-activity-7033212784867688448-bBz1"
        }
      ],
    },
    {
      title: "Google Gen AI Exchange Hackathon",
      dates: "Nov 2024",
      location: "NIT Raipur",
      description:
        "AI-powered learning platform that uses the Gemini API for personalized, adaptive education. With AI recommendations tailored to each student's learning style, it offers real-time content that evolves with the student.",
      image: "/genai.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/immohitsen_genai-hackathon-aiinnovation-activity-7249514671005724672-ZSZ6",
        },
      ],
    },
  ],
} as const;
