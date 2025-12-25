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
      company: "Klay",
      href: "https://klay.in/",
      title: "Web Designer & Developer",
      location: "Raipur, Chhattisgarh",
      logoUrl: "/klay.png",
      start: "June 2025",
      end: "Dec 2025",
      description:
        "Designed and developed official website of the Rajsons Pharma Pvt Ltd. bengaluru's Biggest pharmaceutical whole selling company having more than 10,000 customers in karnataka with 1000+ employees with multiple branches in PAN India.",
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
        "Led the end-to-end development of ssfvt.com, driving an 80% surge in online engagement through a seamless React + WordPress integration. Enhanced user experience and performance, resulting in a 30% uptick in customer inquiries.",
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
      title: "Jeev Veda",
      href: "https://github.com/immohitsen/JeevVeda",
      dates: "October 2025",
      active: true,
      description:
        "JeevVeda is an AI-powered early cancer screening suite with a medical chatbot, blood report analyzer (Gemini API), MRI scan analyzer (ResNet50), and DICOM viewer.",
      technologies: ["NextJs", "Tailwind", "Resnet50", "FastAPI", "Gemini API"],
      links: [],
      image: "/jv.png",
      video: "",
    },
    {
      title: "Dreamify",
      href: "https://github.com/immohitsen/Dreamify/",
      dates: "June 2025",
      active: true,
      description:
        "A tiny, experimental AI-powered dream interpreter. It doesn't decode your dreams — it plays with them. Built with Next.js and a touch of whimsy.",
      technologies: ["Next.js", "Gemini API", "Aceternity UI"],
      links: [],
      image: "/dreamify.png",
      video: "",
    },
    {
      title: "Invoice Generator",
      href: "https://github.com/immohitsen/Invoice",
      dates: "June 2025",
      active: true,
      description:
        "A modern invoicing solution for freelancers and small businesses, offering custom templates and seamless PDF export. Built to ensure efficient financial tracking and professional presentation.",
      technologies: ["Nextjs", "React-Pdf", "Tailwind"],
      links: [],
      image: "/invoice.png",
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
        
  ],

  hackathons: [
    {
      title: "Border Patrolling UGV",
      dates: "March 2023",
      location: "IIT BHU",
      description:
        "Secured First Runner-Up at Technex'23 (IIT BHU). Our project, a surveillance bot built for unmanned operations in high-risk border zones, was remotely controlled from a central hub to protect soldiers'lives. The innovation was also featured at IIT Roorkee and spotlighted on their official platforms.",
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
      title: "Border Patrolling UGV",
      dates: "Feb 2023",
      location: "NIT Raipur",
      description:
        "Secured First Position at National Science Exhibition 2023 (NIT Raipur) at Vigyaan — the National Science Exhibition under Aavartan'23, Central India's largest tech fest hosted by NIT Raipur. Our project is a remotely operated surveillance bot built using Arduino, a motor shield, an ultrasound detector, and Bluetooth communication, enabling unmanned deployment in high-risk border zones to protect soldiers' lives.",
      image: "/aavarten.jpg",
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
