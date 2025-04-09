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
    id: "sorted-tech-website",
    title: "Sorted Tech Website",
    category: "web",
    image: "/modern-tech-dark-responsive.png",
    description:
      "A fully responsive website designed and developed from scratch for a tech startup, featuring modern UI elements and smooth interactions.",
    tags: ["Web Design", "Frontend", "React"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    client: "Sorted Tech",
    date: "2023",
    role: "UI/UX Designer",
    fullDescription: [
      "Sorted Tech needed a modern, responsive website that would effectively communicate their brand identity and showcase their innovative tech solutions. The goal was to create a digital presence that would attract potential clients and investors while providing a seamless user experience across all devices.",
      "I designed and developed a fully functional website from scratch, focusing on creating a clean, professional aesthetic that aligned with the company's forward-thinking approach. The design incorporates subtle animations and interactive elements to engage users and highlight key information without overwhelming them.",
      "The website features a modular design system that allows for easy updates and scalability as the company grows. Special attention was given to performance optimization, ensuring fast load times and smooth interactions even on mobile devices with slower connections.",
    ],
    process: [
      {
        title: "Brand Analysis",
        description:
          "Worked closely with the client to understand their brand values, target audience, and business objectives.",
      },
      {
        title: "Site Architecture",
        description:
          "Developed a logical site structure and user flows to ensure visitors could easily find the information they needed.",
      },
      {
        title: "UI Design",
        description:
          "Created high-fidelity mockups with a focus on clean typography, strategic use of whitespace, and compelling visual hierarchy.",
      },
      {
        title: "Responsive Development",
        description:
          "Built the site using modern frontend technologies, ensuring optimal display across all device sizes.",
      },
      {
        title: "Performance Optimization",
        description:
          "Implemented best practices for web performance, including image optimization, code splitting, and lazy loading.",
      },
    ],
    outcomes: [
      "Increased site traffic by 150% compared to the previous website",
      "Reduced bounce rate by 35% through improved user experience",
      "Increased average time on site by 2 minutes",
      "Generated 40% more leads through the contact form",
    ],
    gallery: ["/futuristic-tech-homepage.png", "/tech-services-dark.png", "/tech-contact-dark.png"],
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
    id: "youtube-creator-branding",
    title: "YouTube Creator Branding",
    category: "graphic",
    image: "/vibrant-youtube-branding.png",
    description:
      "Complete brand identity and thumbnail design system for a YouTube channel with over 100K subscribers.",
    tags: ["Branding", "Thumbnails", "Visual Identity"],
    links: {
      live: "https://youtube.com",
    },
    client: "Tech Influencer",
    date: "2022",
    role: "Brand Designer",
    fullDescription: [
      "A popular tech influencer with a growing YouTube channel needed a cohesive brand identity and thumbnail design system to increase channel recognition and improve click-through rates. The goal was to create a distinctive visual style that would stand out in YouTube's crowded recommendation feeds while maintaining consistency across all content.",
      "I developed a comprehensive brand identity including logo variations, color palette, typography system, and a flexible thumbnail template system that could be adapted for different video categories while maintaining a recognizable style.",
      "The project included creating a style guide and template files that allowed the client to easily create new thumbnails for future videos, ensuring brand consistency even as the channel continued to grow and evolve.",
    ],
    process: [
      {
        title: "Audience Analysis",
        description: "Researched the channel's audience demographics and preferences to inform design decisions.",
      },
      {
        title: "Competitive Audit",
        description: "Analyzed successful channels in the same niche to identify opportunities for differentiation.",
      },
      {
        title: "Brand Identity Development",
        description: "Created a distinctive visual identity including logo, color palette, and typography system.",
      },
      {
        title: "Thumbnail System Design",
        description: "Developed a flexible template system for thumbnails that balanced consistency with adaptability.",
      },
      {
        title: "Implementation & Training",
        description: "Provided the client with templates and guidelines for creating future thumbnails independently.",
      },
    ],
    outcomes: [
      "Increased click-through rate by 45% compared to previous thumbnails",
      "Improved brand recognition in YouTube search results and recommendation feeds",
      "Contributed to channel growth from 100K to 250K subscribers within 8 months",
      "Established a consistent visual identity across all channel content",
    ],
    gallery: ["/vibrant-tech-thumbnail.png", "/youtube-channel-logos.png", "/consistent-youtube-thumbnails.png"],
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
