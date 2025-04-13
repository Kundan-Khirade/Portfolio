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
    id: "prompt-pdf",
    title: "PromptPDF Website",
    category: "mobile",
    image: "/Prompt pdf Cover.png",
    description:
      "Designed the user interface for PromptPDF, an AI-driven platform that enables users to generate professional documents effortlessly across various formats.",
    tags: ["UI Design", "UX Design", "Figma", "AI SaaS", "Web App","Responsive Design", "Prototyping"],
    links: {
      live: "https://promptpdf.vercel.app/",
    },
    client: "PromptPDF",
    date: "Feb - March 2025",
    role: "UI/UX Designer",
    fullDescription: [
      "PromptPDF is an AI-powered web application designed to streamline the way users interact with PDF documents. The platform allows users to upload any PDF and instantly ask questions about its contents, receiving context-aware, intelligent answers—making it especially useful for research, legal, academic, or corporate documentation.",
      "As the UI/UX Designer for PromptPDF, I was responsible for designing a clean, intuitive, and accessible user interface that made complex AI functionalities feel effortless and easy to use. My primary goal was to ensure that the design aligned with the modern SaaS aesthetic while prioritizing functionality and responsiveness across devices.",
      "I worked closely with the development team to craft user flows, refine interaction patterns, and implement a minimal yet engaging visual language. From landing page to dashboard design, I focused on user trust, clear CTAs, and a frictionless onboarding experience. The final product delivers a seamless PDF chat experience, built to scale and optimized for usability.",
    ],
    process: [
      {
        title: "User Research & Requirement Gathering",
        description:
          "Conducted interviews and surveys to understand user needs, pain points, and expectations from an AI-driven document generator.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed low-fidelity wireframes to map out user flows, followed by high-fidelity prototypes in Figma to visualize the final design.",
      },
      {
        title: "UI Design & Branding",
        description: "Created a clean and modern visual language that aligns with the brand's identity, ensuring consistency across all interface elements.",
      },
      {
        title: "Usability Testing & Iteration",
        description: "Performed usability tests with a diverse group of users to gather feedback, leading to iterative improvements in the design.",
      },
      {
        title: "Developer Handoff & Collaboration",
        description: "Prepared detailed design specifications and collaborated closely with the development team to ensure accurate implementation of the designs.",
      },
    ],
    outcomes: [
      "Enhanced User Engagement: Positive user feedback highlighted the platform's ease of use and efficient workflow.",
      "Streamlined Document Creation: Users reported a significant reduction in time spent on document formatting and editing.",
      "Scalable Design System: Established a cohesive design system that supports future feature expansions and maintains brand consistency.",
    ],
    gallery: ["/Prompt pdf 1.png", "/Prompt pdf 2.PNG"],
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
    id: "nith-career-website",
    title: "NITH Career Compass Website",
    category: "web",
    image: "/NITH career compass cover.jpg",
    description:
      "A collaborative platform connecting placed students with juniors, sharing real placement journeys, tips, and insights across on-campus and off-campus experiences.",
    tags: ["UX Design", "UI Design", "Web Platform", "Community Building",  "Figma",  "Responsive Design"],
    links: {
      live: "https://nithcc.vercel.app/",
    },
    client: "NIT Hamirpur- Training & Placement Cell",
    date: "April - May 2025",
    role: "UI/UX Designer",
    fullDescription: [
      "NITH Career Connect is a student-centric platform built to bridge the gap between placed students and aspiring juniors at NIT Hamirpur. The website serves as a centralized hub where final-year students share their placement stories, interview tips, preparation strategies, and company insights to guide and motivate upcoming batches. Whether it's for on-campus or off-campus placements, students can contribute real experiences and foster a knowledge-sharing network that benefits the entire campus.",
      "As part of the core design and development team, my goal was to create an intuitive, modern, and responsive web interface that encourages exploration and easy story submission. The design emphasizes accessibility, user engagement, and trust, ensuring that even first-time users can navigate and find relevant information quickly.",
      "Working closely with both student contributors and developers, I focused on structuring a clean user journey, designing submission flows, and implementing a scalable design system to accommodate future features like filters, bookmarks, or login systems. The platform is live and continues to grow as more students contribute, making it a living resource for career preparation at NITH.",
    ],
    process: [
      {
        title: "Understanding the Gap",
        description:
          "We conducted informal interviews and surveys with juniors and seniors to understand their struggles in finding real placement experiences and prep materials tailored to NITH students.",
      },
      {
        title: "Experience Mapping",
        description:
          "We mapped out the user journeys for readers and contributors separately, ensuring both groups could meet their goals easily without overwhelming interfaces.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "I created low-fidelity wireframes in Figma and rapidly iterated on feedback. We validated clickable prototypes with peers before moving to high-fidelity designs.",
      },
      {
        title: "UI Development Collaboration",
        description:
          "While the dev team handled backend submissions and deployment, I closely collaborated to ensure pixel-perfect UI integration and maintained responsiveness across devices.",
      },
      {
        title: "Scalability & Future Scope",
        description:
          "The design system supports modular feature additions like search filters, user profiles, and bookmarking – all aligned with long-term student engagement goals.",
      },
    ],
    outcomes: [
      "Reduced student dependency on external prep platforms by providing verified, relevant content from seniors.",
      "Fostered inter-batch interaction and network-building within the NIT Hamirpur community.",
      "Increased average user engagement time to over 3 minutes per session with effective navigation and content discovery.",
    ],
    gallery: ["/NITH career compass.png", "/NITH career compass 2.png", "/NITH career compass 3.png"],
  },
  {
    id: "bharat-pros",
    title: "BharatPro Website",
    category: "web",
    image: "/Bharatpros cover.jpg",
    description:
      "A responsive service marketplace platform designed to seamlessly connect users with verified professionals across India—featuring intuitive navigation, scalable design systems, and a clean, modern UI.",
    tags: ["E-commerce", "Marketplace Design", "UI/UX Design", "User Research", "Figma", "Responsive Web Design", "Design Systems"],
    links: {
      live: "https://www.bharatpros.com/",
    },
    client: "BharatPros",
    date: "July - Sept 2024",
    role: "UI Designer Intern",
    fullDescription: [
      "BharatPros is an emerging digital marketplace that connects skilled Indian freelancers and businesses with clients across the globe. With a vision to empower local talent and streamline the hiring process, the platform focuses on building trust through verified profiles, secure transactions, and a seamless user experience. The core objective was to present a scalable and professional platform that can compete with global freelance marketplaces while keeping its Indian identity intact.",
      "As the UI/UX Designer for this project, my role involved designing key user flows and enhancing usability across the platform—from the homepage and service listings to profile dashboards and payment modules. I focused on creating a clean, intuitive interface with clear navigation, a consistent design system, and components that support both desktop and mobile responsiveness. Special attention was given to visual hierarchy, accessibility, and conversion-oriented design choices, especially on critical pages like service listings and checkout flows.",
      "To ensure the platform met modern product standards, I conducted competitive analysis and usability audits, integrating feedback loops from early users. The result is a user-centered marketplace that not only supports seamless hiring and service delivery but also reflects trust, professionalism, and the spirit of a growing digital India. BharatPros is currently evolving, with plans to expand into niche service categories and further optimize engagement and conversion rates through iterative design improvements.",
    ],
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted market research to understand the needs of both service providers and seekers, identifying pain points in existing solutions.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Developed wireframes to map out user flows, followed by high-fidelity prototypes in Figma to visualize the final design.",
      },
      {
        title: "Visual Design & Branding",
        description: "Created a cohesive visual identity that reflects the platform's mission, ensuring consistency across all interface elements.",
      },
      {
        title: "Usability Testing & Iteration",
        description: "Performed usability tests with target users to gather feedback, leading to iterative improvements in the design.",
      },
      {
        title: "Developer Collaboration",
        description:
          "Worked closely with developers to ensure accurate implementation of the design, addressing any challenges promptly.",
      },
    ],
    outcomes: [
      "Enhanced User Engagement: The intuitive design led to increased user interaction and time spent on the platform.",
      "Increased Service Provider Registrations: A streamlined registration process encouraged more professionals to join the platform.",
      "Positive User Feedback: Users reported satisfaction with the ease of finding and booking services.",
      "Scalable Design System: Established a design framework that supports future feature additions and platform scalability.",
    ],
    gallery: [
      "/BharatPros 1.png",
      "/BharatPros 2.png",
      "/BharatPros 3.png",
    ],
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website",
    category: "web",
    image: "/E-Commerce Cover.png",
    description:
      "A modern, conversion-focused e-commerce website designed from scratch with user-centric features, responsive UI, and a seamless shopping experience tailored for today’s online retail expectations.",
    tags: ["E-Commerce", "UI/UX Design", "Product Design", "Figma", "User Flow", "Web", "Design System"],
    links: {
     
    },
    client: "Personal Project",
    date: "2023",
    role: "UI/UX Designer",
    fullDescription: [
      "As part of my initiative to deepen my understanding of product design in high-conversion environments, I created a fully responsive e-commerce website from scratch. This personal project was driven by a desire to replicate industry-level workflows while experimenting with modern design patterns, usability best practices, and scalable components.",
      "The goal was to simulate a real-world shopping experience that meets the expectations of today’s online users. From product exploration to checkout, I focused on streamlining user interactions and minimizing friction. Key features included dynamic product cards, search filters, wishlist and cart features, responsive grid layouts, and a clean, distraction-free checkout process.",
      "This project gave me the opportunity to practice end-to-end UI/UX processes—starting from user flow mapping to crafting polished, high-fidelity designs in Figma. I also studied top-performing platforms like Amazon, Nykaa, and Flipkart to identify and integrate successful patterns and conversion-boosting tactics.",
    ],
    process: [
      {
        title: "Research & Benchmarking",
        description:
          "Studied leading e-commerce platforms to identify UX trends and pain points that commonly lead to user drop-offs or cart abandonment.",
      },
      {
        title: "User Flow & Wireframes",
        description:
          "Defined user journey stages such as browsing, filtering, and purchasing. Created low-fidelity wireframes to establish layout hierarchy and content structure.",
      },
      {
        title: " High-Fidelity Design in Figma",
        description: "Designed pixel-perfect UI screens for mobile and desktop. Included reusable components like product cards, banners, filters, and navbars.",
      },
      {
        title: "Iterative Feedback",
        description:
          "Self-critiqued and peer-reviewed through online design communities and forums to refine usability and visual balance.",
      },
    ],
    outcomes: [
      "Showcased ability to independently deliver industry-standard e-commerce UI design.",
      "Strengthened understanding of user psychology, hierarchy, and visual balance in retail-focused products.",
      "Demonstrated knowledge of responsive design principles and component-based design systems.",
      "Built a project portfolio piece aligned with real-world business goals like improving conversions and retention.",
    ],
    gallery: [
      "/E-Commerce 1.png",
      "/E-Commerce 2.jpg",
      "/E-Commerce 3.jpg",
    ],
  },
  {
    id: "nimbus-2022",
    title: "Nimbus 2k22 APP",
    category: "mobile",
    image: "/Nimbus 2k22 Cover.png",
    description:
      "Designed and led the development of Nimbus 2022 — an all-in-one mobile app for NIT Hamirpur’s annual technical fest, enabling real-time updates, event tracking, and student engagement through modern social features and intuitive UX.",
    tags: ["Mobile", "UX/UI", "Figma", "Gamification", "Community Engagement", "Android App Design", "Design Systems", "Product Thinking"],
    links: {
     
    },
    client: "APP Team, NIT Hamirpur",
    date: "2022",
    role: "Lead UI/UX Designer",
    fullDescription: [
      "Nimbus is NIT Hamirpur’s flagship technical festival, and for the 2022 edition, we aimed to elevate the student experience through a modern, community-driven mobile app. As the Lead UI/UX Designer of the APP Team (a student-led development society), I was responsible for designing the entire interface of the official app, which was later launched on the Play Store.",
      "The app served as the central hub for all fest-related activities—featuring the event schedule, venue maps, speaker profiles, and live notifications. To foster campus-wide engagement, we included features inspired by social media platforms: users could create posts, upload images, and interact through comments within the app. A real-time chat system allowed students and societies to coordinate smoothly.",
      "We also introduced features like a live quiz module, interactive leaderboards, a society showcase section with member directories, and gamified participation badges. All UI elements were designed to be vibrant, intuitive, and in sync with the festive branding of Nimbus 2022. The goal was to blend functionality with a sense of celebration and community, and we succeeded.",
    ],
    process: [
      {
        title: "Team Coordination & Requirement Gathering",
        description:
          "Led brainstorming sessions with organizers and team members to define core objectives, user roles, and must-have features tailored for a college-wide tech fest.",
      },
      {
        title: "Information Architecture & Wireframing",
        description:
          "Oversaw the creation of user flows and low-fidelity wireframes that prioritized intuitive navigation, real-time updates, and seamless access to event details.",
      },
      {
        title: "Visual Design & Prototyping",
        description: "Directed the design in Figma—building a scalable design system, interactive UI components, and a visually engaging theme aligned with the fest's branding.",
      },
      {
        title: "User Testing & Iteration",
        description:
          "Conducted peer testing across various devices to ensure usability and accessibility; refined designs based on feedback to improve engagement and discoverability.",
      },
      {
        title: "Handoff & Development Oversight",
        description: "Supervised the handoff process by preparing detailed specs, exporting assets, and collaborating with developers to ensure pixel-perfect implementation.",
      },
    ],
    outcomes: [
      "5000+ Downloads within the first week of launch on the Play Store.",
      "1500+ User Posts created during the 3-day fest through the in-app social wall.",
      "92% User Retention during the fest, with positive feedback from students and faculty.",
      "Empowered societies with in-app promotion and recognition via featured profiles.",
      "Strengthened peer collaboration and visibility across departments through real-time chat and content sharing.",
    ],
    gallery: [
      "/Nimbus 2k22.png",
      "/Nimbus 2k22 1.png",
      "/Nimbus 2k22 2.png",
      "/Nimbus 2k22 3.png",
      "/Nimbus 2k22 4.png",
      "/Nimbus 2k22 5.png",
    ],
  },
  {
    id: "nimbus-2023",
    title: "Nimbus 2k23 APP",
    category: "mobile",
    image: "/Nimbus 2k23 Cover.png",
    description:
      "Official mobile app for NIT Hamirpur's tech fest, designed to deliver personalized schedules, real-time updates, quizzes, and a social feed — enhancing engagement for 5,000+ users.",
    tags: ["Mobile App Design", "UI/UX", "Figma", "User Engagement", "Event App", "College Fest", "Community Building"],
    links: {
      
    },
    client: "APP Team, NIT Hamirpur",
    date: "2023",
    role: "Lead UI/UX Designer",
    fullDescription: [
      "Nimbus 2023 was the official mobile application developed for NIT Hamirpur's annual technical fest. As the Lead UI/UX Designer of the App Team, I spearheaded the design of an interactive, scalable, and student-centric digital experience that became the fest’s primary engagement platform for thousands of participants.",
      "This year’s version evolved beyond schedules and event listings. We introduced a real-time notification system, interactive campus map, and personalized user dashboards for a tailored fest journey. A built-in quiz hub added gamification to the user experience, while the social module allowed users to post images, chat, and engage, echoing the dynamics of modern social apps but within the boundaries of our college community.",
      "From society showcases to event leaderboards, the app was not just an information portal—it was a fest companion. It reflected the spirit of innovation and tech celebration, driving engagement, promoting student initiatives, and leaving a lasting digital legacy for NIT Hamirpur.",
    ],
    process: [
      {
        title: "Goal Alignment & Discovery",
        description:
          "Collaborated with core organizers to identify user personas and define goals that balanced utility, performance, and fest excitement.",
      },
      {
        title: "Wireframing & Experience Mapping",
        description:
          "Created structured low-fidelity wireframes mapping out event flows, interaction logic, and modular components for rapid scalability.",
      },
      {
        title: "Visual Design & Branding",
        description: "Designed vibrant, responsive interfaces in Figma using a custom UI kit that visually aligned with Nimbus 2023’s futuristic theme.",
      },
      {
        title: "Usability Testing & Iteration",
        description:
          "Conducted peer usability sessions, collected feedback via surveys, and refined features like quiz UX and chat smoothness for real-time use.",
      },
      {
        title: "Handoff & Cross-Team Collaboration",
        description: "Coordinated with developers for smooth asset delivery and implementation, ensuring UI consistency and interaction integrity across devices.",
      },
    ],
    outcomes: [
      "Over 5,000+ app downloads during fest week",
      "Increased session duration by 40% compared to previous year",
      " 85% of participants used the in-app quiz feature",
    ],
    gallery: [
      "/Nimbus 2k23.png",
      "/Nimbus 2k23 0.png",
      "Nimbus 2k23 1.png",
      "/Nimbus 2k23 2.png",
      "/Nimbus 2k23 3.png",
      "/Nimbus 2k23 4.png",
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
