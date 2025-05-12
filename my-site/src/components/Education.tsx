import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const timelineItems = [
  {
    icon: <FaGraduationCap className="text-white text-xl" />,
    date: "2022 - Present",
    title: "Diploma in Computer Programming",
    subtitle: "Sheridan College",
    content:
      "Focusing on software engineering, artificial intelligence, and web development. Participating in various hackathons and programming competitions.",
  },
  {
    icon: <FaGraduationCap className="text-white text-xl" />,
    date: "2019 - 2023",
    title: "Diploma in Computer Programming",
    subtitle: "Parul University ",
    content:
      "Specialized in mathematics and computer science. Participated in programming competitions and developed first web applications.",
  },
  {
    icon: <FaBriefcase className="text-white text-xl" />,
    date: "Sep/2023 - Dec/2023",
    title: "Flutter Developer Intern",
    subtitle: "Helpymoto",
    content:
      "Worked on hybrid mobile development using Flutter, contributing to the company's main product and collaborating with cross-functional teams.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 relative pb-2 text-center md:text-left">
        Education & Experience
        <span className="absolute left-0 md:left-0 bottom-0 h-1 w-12 bg-primary rounded-md transform translate-x-0 md:translate-x-0"></span>
      </h2>

        <div className="relative border-l-4 border-primary pl-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-12 relative group">
              {/* Circle Icon */}
              <div className="absolute -left-7 top-0 bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                <div className="text-primary font-medium mb-2">{item.subtitle}</div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
