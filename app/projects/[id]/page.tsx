"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, ExternalLink, Github, Layers, User } from "lucide-react"

// This would typically come from a database or API
const projectsData = [
  {
    id: "nit-hamirpur-app",
    title: "NIT Hamirpur App",
    category: "mobile",
    image: "/vibrant-purple-app.png",
    description:
      "Official mobile application for NIT Hamirpur students with features for campus updates, academic resources, and event notifications.",
    tags: ["UI/UX", "Mobile App", "React Native"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
    client: "NIT Hamirpur",
    date: "2022-2023",
    role: "Lead UI/UX Designer",
    fullDescription: [
      "The NIT Hamirpur App was designed to serve as a comprehensive digital platform for students, faculty, and staff at the National Institute of Technology, Hamirpur. The goal was to create a centralized mobile application that would streamline access to campus resources, provide timely updates, and enhance the overall campus experience.",
      "As the Lead UI/UX Designer, I conducted extensive user research with students and faculty to understand their needs and pain points. This research informed the design of an intuitive interface that prioritizes easy access to frequently used features while maintaining a clean, modern aesthetic aligned with the institute's brand identity.",
      "The app includes features such as a personalized dashboard, academic calendar integration, course schedules, campus news and announcements, event notifications, and access to digital library resources. Special attention was given to ensuring the app was accessible to all users, including those with disabilities.",
    ],
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted user interviews, surveys, and competitive analysis to understand user needs and market standards.",
      },
      {
        title: "Wireframing & Information Architecture",
        description:
          "Created low-fidelity wireframes and established a logical information hierarchy to ensure intuitive navigation.",
      },
      {
        title: "Visual Design",
        description:
          "Developed a clean, modern UI with the institute's brand colors and created a comprehensive design system for consistency.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built interactive prototypes and conducted usability testing with students and faculty to refine the user experience.",
      },
      {
        title: "Developer Handoff",
        description:
          "Created detailed specifications and worked closely with developers to ensure accurate implementation.",
      },
    ],
    outcomes: [
      "Successfully launched on Google Play Store with over 5,000 downloads in the first month",
      "Reduced student inquiries at administrative offices by 40%",
      "Increased student participation in campus events by 25%",
      "Received an average rating of 4.7/5 from users",
    ],
    gallery: ["/purple-app-dashboard.png", "/purple-events-calendar.png", "/purple-app-profile.png"],
  },
  {
    id: "hill-ffair-app",
    title: "HILL’FFAIR 2k22 APP",
    category: "mobile",
    image: "/Hill ffair 2022 cover.jpg",
    description:
      "An immersive mobile app designed for NIT Hamirpur’s annual cultural fest, featuring event listings, real-time updates, interactive social feed, and society promotions—all in one engaging experience.",
    tags: ["UI/UX Design", "Mobile App Design", "Figma", "Community Engagement", "EdTech"],
    links: {
      
    },
    client: "APP Team, NIT Hamirpur",
    date: "Oct - Dec 2022",
    role: "Lead UI/UX Designer",
    fullDescription: [
      "Hillffair 2022 was the official mobile application designed and developed for the annual cultural fest of NIT Hamirpur, catering to thousands of students, alumni, and guests. The goal was to centralize all fest-related information, streamline event updates, and enhance student engagement through a modern, interactive experience.",
      "As the Lead UI/UX Designer of the institute's APP Team, I spearheaded the end-to-end design of the app, focusing on intuitive navigation, real-time communication, and social interactivity. The app featured a dynamic event schedule, society showcase sections, live notifications, and an Instagram-style posting and chatting system, allowing users to post updates, share moments, and connect with peers.",
      "We also included a dedicated section to showcase student societies, their past work, and member rosters to increase visibility and engagement. Other features included a real-time chat system, notification center for instant alerts, interactive maps, and performance leaderboards for various competitions. This was a full-stack collaborative effort with the development team, where my focus was on designing a cohesive, festive-themed UI that remained intuitive and scalable throughout the event’s lifecycle.",
    ],
    process: [
      {
        title: "Understanding Fest Needs",
        description:
          "We began by gathering inputs from event organizers, society heads, and students to map out the must-have features and pain points from past fest experiences. This helped us define a clear product vision focused on accessibility, engagement, and campus spirit.",
      },
      {
        title: "Feature Prioritization",
        description:
          "We brainstormed ideas and narrowed down features based on feasibility, impact, and timeline. Chat functionality, live updates, event scheduling, and society promotion were selected as high-impact priorities.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low-fidelity wireframes were created to visualize the structure and user flow. After quick feedback loops, we moved to high-fidelity mockups in Figma with a vibrant, youth-focused design.",
      },
      {
        title: "Iterative Feedback",
        description:
          "We conducted mini user testing rounds within the student body and fest volunteers to validate design decisions. Based on the feedback, we refined usability aspects like navigation, event visibility, and notification clarity.",
      },
      {
        title: "Developer Handoff & QA",
        description:
          "Detailed design specs and assets were handed off to the dev team with responsive breakpoints and motion guidelines. We worked closely during development, testing the app rigorously before release to ensure a smooth user experience.",
      },
    ],
    outcomes: [
      "4,000+ Downloads within 3 days of launch, making it the most downloaded app in the institute's fest history.",
      "70% Student Engagement with the in-app feed, chats, and event bookmarking features.",
      "Real-time Notifications helped boost event attendance by over 50% across major cultural events.",
      "24% Increase in Society Visibility through the dedicated society showcase and member directory feature.",
    ],
    gallery: ["/Hill ffair 2022 1.png", "/Hill ffair 2022 2.png", "/Hill ffair 2022 3.png", "/Hill ffair 2022 4.png", "/Hill ffair 2022 5.png", "/Hill ffair 2022 6.png"],
  },
  {
    id: "vaani-sudhar-app",
    title: "Vaani Sudhar App",
    category: "mobile",
    image: "/Vaani Sudhar cover.jpg",
    description:
      "A playful, child-friendly mobile app designed to support Hindi speech therapy for kids aged 2–5, featuring engaging visuals, voice interactions, and a simple, intuitive UI.",
    tags: ["UI/UX Design", "Mobile App", "Design for Kids", "Voice UI", "EdTech", "Accessibility"],
    links: {
    
    },
    client: "Independent Project   (Freelance)",
    date: "Sept - Dec 2023",
    role: "UI/UX Designer",
    fullDescription: [
      "Vaani Sudhar is a mobile application designed to support Hindi-speaking children aged 2–5 in overcoming speech articulation challenges. The app combines expert-backed speech therapy techniques with playful, interactive learning experiences to make early intervention engaging and effective for young users.",
      "As the Lead UI/UX Designer, I focused on crafting a child-friendly interface that’s visually intuitive and developmentally appropriate. The app includes educational games, sound repetition exercises, and reward-based progress tracking to maintain user engagement while reinforcing correct speech patterns.",
      "From initial research to prototyping and interface development, every design decision was made with empathy, accessibility, and clarity in mind. Vaani Sudhar stands as a meaningful contribution to the ed-tech space, blending thoughtful design with real-world impact for children and parents navigating speech development.",
    ],
    process: [
      {
        title: "Understanding Early Speech Needs",
        description:
          "We conducted interviews with parents, speech therapists, and educators to understand the daily challenges of kids with speech disorders aged 2–5, helping us empathize deeply with our target users.",
      },
      {
        title: "Problem Definition",
        description:
          "Defined core pain points such as lack of engaging content, language barriers, and difficulty in tracking a child’s progress, which shaped the core value proposition of the app.",
      },
      {
        title: "Ideation & User Flow Planning",
        description:
          "Brainstormed feature ideas like gamified articulation exercises, progress dashboards, and multilingual support, then mapped out seamless user flows for parents and therapists.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Created low-fidelity wireframes followed by interactive high-fidelity prototypes in Figma, ensuring child-friendly UI with large tap targets and vibrant visuals.",
      },
      {
        title: "Usability Validation",
        description:
          "Ran early-stage feedback sessions with parents and a speech therapist to validate design decisions, gather insights, and iterate on the flow and visual tone.",
      },
    ],
    outcomes: [
      
      
    ],
    gallery: ["/Vaani Sudhar 1.png", "/Vaani Sudhar 2.png", "/Vaani Sudhar 3.png", "/Vaani Sudhar 4.png", "/Vaani Sudhar 5.png", "/Vaani Sudhar 6.png"],
  },
  {
    id: "sorted-tech-website",
    title: "Sorted Tech",
    category: "web",
    image: "/Sorted Tech Cover Pic 4.png",
    description:
      "A fully responsive website designed and developed from scratch for a tech-driven startup, featuring modern UI, clean layout, and smooth micro-interactions.",
    tags: ["Web Design", "Frontend", "Figma", "UX Design"],
    links: {
      live: "https://www.sortedtech.io",
    },
    client: "Sorted Tech",
    date: "Jan - June 2024",
    role: "UI/UX Designer Intern",
    fullDescription: [
      "Sorted Tech is an AI-powered recycling technology startup aiming to transform how materials are sorted and recovered in large-scale facilities. Their solution boosts the efficiency of manual pickers and provides actionable insights for facility managers through real-time data analytics.",
      "As a UI/UX Design Intern, I was responsible for designing and developing their official website from the ground up. The objective was to create a clean, responsive, and informative platform that clearly communicates the startup’s mission, product value, and innovative tech offerings. My focus was on building a user-friendly experience that felt modern, trustworthy, and aligned with the brand's identity.",
      "Throughout the project, I collaborated closely with the development team to ensure seamless handoff and accurate implementation. I incorporated smooth transitions, organized content flow, and a scalable design system to support future updates. The final website serves as a professional digital presence that reflects Sorted Tech’s goals and engages potential partners, clients, and investors.",
    ],
    process: [
      {
        title: "Understanding the Vision",
        description:
          "Began by diving into the product’s core purpose, team expectations, and user needs. This ensured the design wasn’t just beautiful, but aligned with business goals from day one.",
      },
      {
        title: "Experience Mapping",
        description:
          "Defined the site structure and user flow to guide visitors toward key actions with ease. The focus was on simplicity, clarity, and reducing decision fatigue.",
      },
      {
        title: "UI Design Execution",
        description:
          "Crafted a clean, modern interface that reflects Sorted Tech’s tech-driven identity. Prioritized consistency, accessibility, and responsiveness across devices.",
      },
      {
        title: "Design-Dev Sync",
        description:
          "Maintained close collaboration with developers to ensure smooth handoff and real-time implementation. Every component was tested for accuracy and usability.",
      },
      {
        title: "Polishing & QA",
        description:
          "Conducted responsive testing and refined micro-interactions for a smooth user experience. Final reviews ensured everything looked and functioned perfectly.",
      },
    ],
    outcomes: [
      
      "Achieved a 150% growth in website visits by revamping the site structure and visuals.",
      "Lowered drop-off rate by 35% through a more intuitive and user-friendly interface.",
      "Users spent 2+ extra minutes on site, engaging with content and features.",
      "Boosted lead submissions by 40% with clear CTAs and streamlined forms.",
    ],
    gallery: ["/Sorted tech Galary 1.png", "/Sorted tech Galary 2.png", "/Sorted tech Galary 3.png"],
  },
  {
    id: "bharatpros-mobile-app",
    title: "BharatPros Mobile App",
    category: "mobile",
    image: "/mobile-service-dashboard.png",
    description:
      "Cross-platform mobile application with seamless user flows and consistent design language across iOS and Android.",
    tags: ["Mobile Design", "Flutter", "UX Research"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
    client: "BharatPros",
    date: "2022",
    role: "UI/UX Designer",
    fullDescription: [
      "BharatPros required a cross-platform mobile application that would connect skilled professionals with customers needing various services. The challenge was to create a consistent user experience across both iOS and Android platforms while accommodating the unique design patterns of each operating system.",
      "I designed a comprehensive mobile application with intuitive user flows for both service providers and customers. The design focused on simplifying the process of finding, booking, and paying for services, with special attention to the onboarding experience for new users.",
      "The app features a clean, accessible interface with a consistent design language that maintains platform-specific interactions where appropriate. The result is a seamless experience that feels native on both iOS and Android devices.",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted interviews with potential users from both customer and service provider segments to understand their needs and expectations.",
      },
      {
        title: "Competitive Analysis",
        description:
          "Analyzed similar apps in the market to identify best practices and opportunities for differentiation.",
      },
      {
        title: "User Flow Mapping",
        description: "Created detailed user flows for key tasks to ensure a logical and efficient path to completion.",
      },
      {
        title: "UI Design",
        description: "Developed a consistent design system with platform-specific adaptations where necessary.",
      },
      {
        title: "Usability Testing",
        description: "Conducted testing sessions with users on both iOS and Android devices to refine the experience.",
      },
    ],
    outcomes: [
      "Successfully launched on both App Store and Google Play with consistent 4.5+ star ratings",
      "Onboarded 500+ service providers in the first three months",
      "Achieved 20,000+ app downloads within six months of launch",
      "Maintained a 70% user retention rate after 30 days",
    ],
    gallery: ["/service-provider-list.png", "/service-booking-blue-ui.png", "/service-payment-confirmation.png"],
  },
  {
    id: "uber-website",
    title: "Uber Website Layout",
    category: "web",
    image: "/uber cover.png",
    description:
      "A pixel-perfect clone of Uber’s official website, built from scratch with a focus on responsive design, layout accuracy, and performance optimization.",
    tags: ["Web Design", "Frontend Development", "Responsive UI", "UI Cloning", "Web Performance"],
    links: {
      
    },
    client: "Personal Project",
    date: "2021",
    role: "UI/UX Designer",
    fullDescription: [
      "This self-initiated UI design project was a deep dive into visual deconstruction and rebuilding of Uber’s official website. The goal was to sharpen my visual consistency, layout skills, and component structuring by recreating Uber’s homepage and key internal pages in Figma.",
      "The project required close attention to typography, spacing, layout rhythm, visual hierarchy, and branding consistency. I designed each section with responsiveness in mind—ensuring the interface would adapt cleanly to mobile, tablet, and desktop screens. I also created reusable components and applied atomic design principles to maintain visual harmony throughout the layout.",
      "This exercise significantly improved my attention to design detail, speed in Figma, and ability to replicate complex web UI in a structured, scalable design system.",
    ],
    process: [
      {
        title: "Visual Deconstruction",
        description: "Carefully analyzed Uber’s site structure, branding, and design patterns to map out key UI components and layout logic.",
      },
      {
        title: "Wireframing & Grids",
        description: "Started with basic wireframes and established a clean grid system and typography scale to maintain alignment and responsiveness.",
      },
      {
        title: "High-Fidelity Design",
        description: "Recreated the entire interface in Figma with attention to pixel accuracy, branding guidelines, and user flow clarity.",
      },
      {
        title: "Component Structuring",
        description: "Designed scalable, reusable UI components using auto layout and variants to simulate real product structure.",
      },
      {
        title: "Prototyping & Presentation",
        description: "Connected screens to simulate user flow and interactions, then prepared polished mockups for showcasing in my portfolio.",
      },
    ],
    outcomes: [
      "Achieved 98% visual match with Uber’s live site using only Figma.",
      "Created a structured design system with 20+ reusable components.",
      "Improved layout design speed by 40% through consistent spacing and grids.",
      "Enhanced precision in responsive UI design for real-world projects.",
    ],
    gallery: ["/Uber 1.png", "/Uber 2.png"],
  },
  {
    id: "campus-recruitment-portal",
    title: "Campus Recruitment Portal",
    category: "web",
    image: "/recruitment-dashboard-professional.png",
    description:
      "Web portal for campus recruitment activities with dashboards for students, recruiters, and placement cell administrators.",
    tags: ["UI Design", "Dashboard", "Web App"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    client: "NIT Hamirpur Placement Cell",
    date: "2021-2022",
    role: "UI/UX Designer",
    fullDescription: [
      "The Training and Placement Cell at NIT Hamirpur needed a comprehensive web portal to streamline the campus recruitment process. The existing system relied heavily on manual processes and disparate tools, creating inefficiencies for students, recruiters, and administrators.",
      "I designed a unified web portal with role-specific dashboards for students, recruiters, and placement cell administrators. The system includes features for company registration, job posting, application management, interview scheduling, and placement analytics.",
      "The design prioritizes clarity and efficiency, with intuitive navigation and data visualization that helps each user group quickly access the information most relevant to them. Special attention was given to the mobile experience to ensure students could access critical information on the go.",
    ],
    process: [
      {
        title: "Stakeholder Interviews",
        description:
          "Conducted interviews with students, recruiters, and placement cell staff to understand pain points and requirements.",
      },
      {
        title: "Process Mapping",
        description:
          "Documented the end-to-end recruitment process to identify opportunities for digital optimization.",
      },
      {
        title: "Information Architecture",
        description: "Developed a logical structure for the portal with role-based access and intuitive navigation.",
      },
      {
        title: "UI Design",
        description:
          "Created high-fidelity mockups for all key screens with a focus on data visualization and usability.",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted testing sessions with representatives from each user group to validate and refine the design.",
      },
    ],
    outcomes: [
      "Reduced administrative workload for the placement cell by 60%",
      "Improved student application rate by 35% through streamlined process",
      "Increased recruiter satisfaction scores by 40% compared to previous system",
      "Successfully facilitated placement process for over 500 students",
    ],
    gallery: ["/student-dashboard-career-prep.png", "/recruitment-admin-dashboard.png", "/modern-job-listings.png"],
  },
  {
    id: "design-system",
    title: "Design System",
    category: "ui",
    image: "/placeholder.svg?height=600&width=800&query=ui+component+library+design+system+documentation",
    description:
      "Comprehensive design system with reusable components, style guides, and documentation for consistent product development.",
    tags: ["Design System", "Components", "Documentation"],
    links: {
      github: "https://github.com",
    },
    client: "Internal Project",
    date: "2023",
    role: "Design Systems Designer",
    fullDescription: [
      "As design teams and products scaled, there was a growing need for a unified design system to ensure consistency across multiple projects and streamline the collaboration between designers and developers.",
      "I created a comprehensive design system including a component library, style guide, and detailed documentation. The system includes atomic design principles with reusable components that can be assembled into more complex interfaces.",
      "The design system was built with scalability and flexibility in mind, allowing teams to maintain brand consistency while adapting to the specific needs of different products and platforms.",
    ],
    process: [
      {
        title: "Audit & Inventory",
        description: "Conducted a thorough audit of existing interfaces to identify patterns and inconsistencies.",
      },
      {
        title: "Design Principles",
        description:
          "Established core design principles to guide decision-making and ensure cohesive user experiences.",
      },
      {
        title: "Component Library",
        description: "Designed a library of reusable components with variants and states for different contexts.",
      },
      {
        title: "Documentation",
        description: "Created comprehensive documentation with usage guidelines and code examples for developers.",
      },
      {
        title: "Implementation & Adoption",
        description:
          "Worked with teams to implement the design system and establish processes for maintenance and updates.",
      },
    ],
    outcomes: [
      "Reduced design time for new features by 40% through reusable components",
      "Improved design-to-development handoff efficiency by 50%",
      "Established consistent user experience across multiple products",
      "Created a scalable foundation for future product development",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&query=design+system+component+library+documentation",
      "/placeholder.svg?height=600&width=800&query=design+system+style+guide+typography+colors",
      "/placeholder.svg?height=600&width=800&query=design+system+usage+guidelines+examples",
    ],
  },
  {
    id: "e-commerce-app",
    title: "E-Commerce App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800&query=e-commerce+mobile+app+shopping+cart+product+gallery",
    description:
      "Mobile shopping application with intuitive product browsing, cart management, and checkout experience.",
    tags: ["Mobile Design", "E-Commerce", "UX/UI"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
    client: "Fashion Retailer",
    date: "2022",
    role: "UI/UX Designer",
    fullDescription: [
      "A fashion retailer needed a mobile e-commerce application to expand their digital presence and provide customers with a seamless shopping experience on mobile devices. The goal was to create an app that would showcase their products effectively while making the browsing and purchasing process as frictionless as possible.",
      "I designed a comprehensive mobile shopping experience with intuitive product browsing, detailed product pages, easy cart management, and a streamlined checkout process. The design emphasizes high-quality product imagery while maintaining fast performance and ease of navigation.",
      "The app includes features such as personalized recommendations, saved favorites, size guides, and order tracking to enhance the overall shopping experience and encourage repeat purchases.",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted research to understand mobile shopping behaviors and user expectations for fashion e-commerce.",
      },
      {
        title: "Information Architecture",
        description:
          "Developed a logical product categorization and navigation structure to help users find products easily.",
      },
      {
        title: "Wireframing",
        description: "Created low-fidelity wireframes to establish core user flows and screen layouts.",
      },
      {
        title: "Visual Design",
        description:
          "Developed a visually appealing interface that showcases products while maintaining brand identity.",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted testing with target users to identify and address pain points in the shopping experience.",
      },
    ],
    outcomes: [
      "Achieved 25,000+ app downloads within the first three months",
      "Increased mobile conversion rate by 35% compared to the mobile website",
      "Reduced cart abandonment rate by 40% through streamlined checkout",
      "Generated 30% of total online sales through the app within six months of launch",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=400&query=fashion+e-commerce+app+product+listing",
      "/placeholder.svg?height=800&width=400&query=fashion+e-commerce+app+product+detail",
      "/placeholder.svg?height=800&width=400&query=fashion+e-commerce+app+checkout+process",
    ],
  },
  {
    id: "travel-website",
    title: "Travel Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800&query=travel+website+destination+booking+scenic+views",
    description: "Responsive travel booking website with destination discovery, booking management, and user reviews.",
    tags: ["Web Design", "Travel", "Booking System"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    client: "Wanderlust Travel",
    date: "2021",
    role: "UI/UX Designer",
    fullDescription: [
      "Wanderlust Travel needed a modern, responsive website to showcase their curated travel experiences and streamline the booking process for customers. The goal was to create an inspiring digital platform that would highlight destinations while making the research and booking process intuitive and enjoyable.",
      "I designed a visually rich website that balances stunning destination imagery with clear information architecture and efficient booking flows. The design emphasizes discovery and inspiration while ensuring that practical details and booking functionality are easily accessible.",
      "The website includes features such as destination guides, interactive maps, booking management, user reviews, and personalized recommendations to create a comprehensive travel planning platform.",
    ],
    process: [
      {
        title: "Competitive Analysis",
        description:
          "Analyzed leading travel websites to identify best practices and opportunities for differentiation.",
      },
      {
        title: "User Journey Mapping",
        description:
          "Mapped the end-to-end travel planning journey to ensure the website supported all key user needs.",
      },
      {
        title: "Content Strategy",
        description: "Developed a content strategy that balances inspirational imagery with practical information.",
      },
      {
        title: "Responsive Design",
        description:
          "Created designs for desktop, tablet, and mobile to ensure a seamless experience across all devices.",
      },
      {
        title: "Interactive Prototyping",
        description: "Built interactive prototypes to test and refine key user flows such as search and booking.",
      },
    ],
    outcomes: [
      "Increased website traffic by 120% through improved SEO and user engagement",
      "Improved booking conversion rate by 45% compared to the previous website",
      "Reduced customer support inquiries by 30% through clearer information architecture",
      "Increased average session duration by 2.5 minutes through engaging content",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&query=travel+website+homepage+destination+showcase",
      "/placeholder.svg?height=600&width=800&query=travel+website+destination+detail+page",
      "/placeholder.svg?height=600&width=800&query=travel+website+booking+interface",
    ],
  },
  {
    id: "restaurant-branding",
    title: "Restaurant Branding",
    category: "graphic",
    image: "/placeholder.svg?height=600&width=800&query=restaurant+branding+logo+menu+design+elegant",
    description:
      "Complete brand identity for a high-end restaurant including logo, menu design, and marketing materials.",
    tags: ["Branding", "Logo Design", "Print Design"],
    links: {
      live: "https://example.com",
    },
    client: "Fusion Bistro",
    date: "2022",
    role: "Brand Designer",
    fullDescription: [
      "Fusion Bistro, a new high-end restaurant combining Asian and Mediterranean cuisines, needed a complete brand identity that would reflect their unique culinary approach and upscale dining experience. The goal was to create a sophisticated visual identity that would appeal to discerning diners and stand out in a competitive market.",
      "I developed a comprehensive brand identity including logo design, color palette, typography system, menu design, signage, business cards, and other marketing materials. The design balances elegance with a contemporary edge, reflecting the restaurant's innovative fusion concept.",
      "The branding emphasizes craftsmanship and attention to detail, mirroring the restaurant's approach to cuisine. Special consideration was given to how the brand would be experienced across different touchpoints, from digital presence to physical dining environment.",
    ],
    process: [
      {
        title: "Brand Discovery",
        description:
          "Conducted workshops with the restaurant owners to understand their vision, values, and target audience.",
      },
      {
        title: "Market Research",
        description:
          "Researched the local dining scene and competitor branding to identify opportunities for differentiation.",
      },
      {
        title: "Logo Development",
        description: "Created multiple logo concepts and refined the selected direction through iterative feedback.",
      },
      {
        title: "Brand System Design",
        description:
          "Developed a cohesive visual system including typography, color palette, patterns, and imagery style.",
      },
      {
        title: "Collateral Design",
        description: "Applied the brand identity to menus, business cards, signage, and other customer touchpoints.",
      },
    ],
    outcomes: [
      "Successfully launched the restaurant with a distinctive brand identity",
      "Received positive feedback from customers on the sophisticated brand experience",
      "Featured in local design publications for outstanding restaurant branding",
      "Established strong brand recognition in the local dining scene within six months",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&query=restaurant+logo+design+elegant+fusion",
      "/placeholder.svg?height=600&width=800&query=restaurant+menu+design+luxury+dining",
      "/placeholder.svg?height=600&width=800&query=restaurant+branding+business+cards+signage",
    ],
  },
  {
    id: "fitness-app",
    title: "Fitness App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800&query=fitness+app+workout+tracker+progress+charts",
    description: "Workout tracking and fitness planning app with progress visualization and social features.",
    tags: ["Mobile Design", "Health", "UX Research"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
    client: "FitTrack",
    date: "2023",
    role: "UI/UX Designer",
    fullDescription: [
      "FitTrack needed a comprehensive fitness application that would help users track workouts, monitor progress, and stay motivated through social features. The goal was to create an engaging and intuitive app that would appeal to fitness enthusiasts of all levels, from beginners to advanced athletes.",
      "I designed a feature-rich fitness app with workout tracking, customizable training plans, progress visualization, and community features. The design emphasizes clarity and motivation, with a focus on helping users understand their progress and celebrate achievements.",
      "The app includes features such as workout libraries, exercise demonstrations, progress tracking with data visualization, goal setting, social sharing, and challenges to keep users engaged and motivated in their fitness journey.",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted interviews and surveys with fitness enthusiasts to understand their needs and pain points.",
      },
      {
        title: "Competitive Analysis",
        description: "Analyzed leading fitness apps to identify best practices and opportunities for innovation.",
      },
      {
        title: "Information Architecture",
        description: "Developed a logical structure for the app's features and content to ensure intuitive navigation.",
      },
      {
        title: "Visual Design",
        description:
          "Created a dynamic and energetic visual design that motivates users while ensuring clarity of information.",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted testing with fitness enthusiasts to validate the design and refine the user experience.",
      },
    ],
    outcomes: [
      "Achieved 50,000+ downloads within the first six months",
      "Maintained a 4.6/5 star rating on app stores",
      "Achieved 65% user retention rate after 30 days, above industry average",
      "Featured in health and fitness app collections on major app stores",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=400&query=fitness+app+workout+tracking+interface",
      "/placeholder.svg?height=800&width=400&query=fitness+app+progress+charts+visualization",
      "/placeholder.svg?height=800&width=400&query=fitness+app+social+features+challenges",
    ],
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    category: "web",
    image: "/placeholder.svg?height=600&width=800&query=portfolio+website+template+designer+showcase",
    description: "Customizable portfolio website template for designers and creative professionals.",
    tags: ["Web Design", "Template", "Portfolio"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    client: "Design Community",
    date: "2023",
    role: "UI/UX Designer",
    fullDescription: [
      "Many designers and creative professionals struggle to create effective portfolio websites that showcase their work while being easy to maintain. The goal was to create a customizable template that would help creatives present their work professionally without requiring extensive web development knowledge.",
      "I designed a flexible portfolio website template with modular components that can be easily customized to suit different creative disciplines and personal styles. The design prioritizes the showcase of work while providing clear information about the designer's skills, experience, and contact information.",
      "The template includes multiple project layout options, about and skills sections, contact forms, and responsive design to ensure optimal display across all devices. Special attention was given to performance optimization and accessibility to ensure a positive experience for all users.",
    ],
    process: [
      {
        title: "Needs Analysis",
        description:
          "Researched the needs of different creative professionals to ensure the template would be versatile.",
      },
      {
        title: "Information Architecture",
        description: "Developed a logical structure that balances portfolio showcase with professional information.",
      },
      {
        title: "Component Design",
        description: "Created modular components that can be combined and customized to create unique portfolio sites.",
      },
      {
        title: "Responsive Design",
        description: "Ensured optimal display and functionality across desktop, tablet, and mobile devices.",
      },
      {
        title: "Documentation",
        description: "Created comprehensive documentation to help users customize and deploy their portfolio sites.",
      },
    ],
    outcomes: [
      "Adopted by 200+ designers and creative professionals",
      "Received positive feedback for ease of customization and professional appearance",
      "Featured in design resources collections on major platforms",
      "Helped numerous early-career designers establish their online presence",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&query=portfolio+template+homepage+showcase",
      "/placeholder.svg?height=600&width=800&query=portfolio+template+project+detail+page",
      "/placeholder.svg?height=600&width=800&query=portfolio+template+about+contact+sections",
    ],
  },
  {
    id: "music-streaming-app",
    title: "Music Streaming App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800&query=music+streaming+app+player+playlist+interface",
    description: "Music streaming application with personalized recommendations and playlist management.",
    tags: ["Mobile Design", "Music", "UX/UI"],
    links: {
      live: "https://play.google.com/store",
      github: "https://github.com",
    },
    client: "MelodiStream",
    date: "2022",
    role: "UI/UX Designer",
    fullDescription: [
      "MelodiStream needed a modern music streaming application that would compete with established platforms by offering a superior user experience and unique features. The goal was to create an intuitive and visually appealing app that would make discovering and enjoying music effortless.",
      "I designed a comprehensive music streaming app with features for music discovery, playlist management, personalized recommendations, and social sharing. The design emphasizes visual appeal and ease of use, with special attention to the core listening experience.",
      "The app includes features such as a customizable player, seamless playlist management, artist pages, music discovery tools, and integration with social platforms to share music with friends. The interface adapts to different contexts, such as listening at home versus on the go, to provide the most relevant features when needed.",
    ],
    process: [
      {
        title: "User Research",
        description:
          "Conducted research on music consumption habits and pain points with existing streaming platforms.",
      },
      {
        title: "Competitive Analysis",
        description:
          "Analyzed leading music streaming apps to identify opportunities for differentiation and improvement.",
      },
      {
        title: "Information Architecture",
        description:
          "Developed a logical structure for music organization and discovery that balances exploration with quick access.",
      },
      {
        title: "Visual Design",
        description:
          "Created a visually rich interface that showcases album art while maintaining usability and readability.",
      },
      {
        title: "Interaction Design",
        description:
          "Designed intuitive gestures and transitions to make navigation and playback control feel natural and effortless.",
      },
    ],
    outcomes: [
      "Achieved 100,000+ downloads within the first year",
      "Maintained a 4.7/5 star rating on app stores",
      "Users spend an average of 45 minutes per session in the app",
      "Featured in 'Best New Apps' collections on major app stores",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=400&query=music+app+player+interface+modern",
      "/placeholder.svg?height=800&width=400&query=music+app+playlist+management+screen",
      "/placeholder.svg?height=800&width=400&query=music+app+discovery+recommendations+interface",
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id)
      if (foundProject) {
        setProject(foundProject)
      } else {
        // Project not found, redirect to projects page
        router.push("/projects")
      }
      setLoading(false)

      // Scroll to the top of      window.scrollTo(0, 0)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen grid-pattern noise-bg flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <main className="min-h-screen grid-pattern noise-bg">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <Badge variant="outline" className="mb-4">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </Button>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Client</h3>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Timeline</h3>
                      <p className="text-muted-foreground">{project.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">My Role</h3>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
              <Image
                src={project.id === "nit-hamirpur-app" ? "/kundan-image.png" : project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6">
                {project.fullDescription.map((paragraph: string, i: number) => (
                  <p key={i} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Outcomes</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-medium text-sm">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Design Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.process.map((step: any, i: number) => (
                <Card key={i} className="card-hover">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image: string, i: number) => (
                <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden card-hover">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
