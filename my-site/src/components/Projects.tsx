// import React from 'react';
// import { FaLink, FaGithub, FaAppStore, FaGooglePlay } from 'react-icons/fa';

// const projects = [
//   {
//     image: "https://via.placeholder.com/350x200",
//     tags: ["React", "Node.js", "MongoDB"],
//     title: "StudyBuddy - Learning Platform",
//     description: "A collaborative learning platform for students to form study groups, share resources, and track progress together.",
//     links: [
//       { icon: <FaLink />, text: "Live Demo", url: "#" },
//       { icon: <FaGithub />, text: "GitHub", url: "#" }
//     ]
//   },
//   {
//     image: "https://via.placeholder.com/350x200",
//     tags: ["Python", "TensorFlow", "Flask"],
//     title: "AI Content Generator",
//     description: "A machine learning application that generates creative content like stories, articles, and social media posts based on user prompts.",
//     links: [
//       { icon: <FaLink />, text: "Live Demo", url: "#" },
//       { icon: <FaGithub />, text: "GitHub", url: "#" }
//     ]
//   },
//   {
//     image: "https://via.placeholder.com/350x200",
//     tags: ["React Native", "Firebase", "Redux"],
//     title: "FitTrack - Fitness Tracker",
//     description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations and social features.",
//     links: [
//       { icon: <FaAppStore />, text: "App Store", url: "#" },
//       { icon: <FaGooglePlay />, text: "Play Store", url: "#" }
//     ]
//   },
//   {
//     image: "https://via.placeholder.com/350x200",
//     tags: ["TypeScript", "Next.js", "PostgreSQL"],
//     title: "DevConnect - Developer Network",
//     description: "A professional networking platform for developers to connect, collaborate on projects, share resources, and find job opportunities.",
//     links: [
//       { icon: <FaLink />, text: "Live Demo", url: "#" },
//       { icon: <FaGithub />, text: "GitHub", url: "#" }
//     ]
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-light">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-12 relative pb-2 text-center md:text-left">
//           Featured Projects
//           <span className="absolute left-0 md:left-0 bottom-0 h-1 w-12 bg-primary rounded-md transform translate-x-0 md:translate-x-0"></span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:-translate-y-1 transition-transform">
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span key={i} className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded text-sm font-medium">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray mb-6">{project.description}</p>
//                 <div className="flex space-x-4">
//                   {project.links.map((link, i) => (
//                     <a 
//                       key={i} 
//                       href={link.url} 
//                       className="text-primary font-medium text-sm flex items-center hover:underline"
//                     >
//                       <span className="mr-1">{link.icon}</span>
//                       {link.text}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;