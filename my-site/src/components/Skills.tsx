import React, { JSX } from 'react';
import { FaCode, FaServer, FaMobileAlt, FaBrain, FaCogs, FaSitemap } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const skills = [
    {
        icon: <FaCode className="text-4xl mb-4 text-primary" />,
        name: "Frontend Development",

        description: "HTML5, CSS3, JavaScript, React, Redux, TypeScript, Bootstrap, Tailwind CSS, Responsive Design"
    },
    {
        icon: <FaServer className="text-4xl mb-4 text-primary" />,
        name: "Backend Development",

        description: "Node.js, Express, Python, Django, RESTful APIs, GraphQL, MongoDB, PostgreSQL, Firebase"
    },
    {
        icon: <FaMobileAlt className="text-4xl mb-4 text-primary" />,
        name: "Mobile Development",

        description: "React Native, Flutter, iOS development with Swift, Android development with Kotlin"
    },
    {
        icon: <FaBrain className="text-4xl mb-4 text-primary" />,
        name: "Data Analytics",
        description: "Pandas, NumPy, data visualization, statistical analysis, Excel, Power BI, Tableau"
    },
    {
        icon: <FaCogs className="text-4xl mb-4 text-primary" />,
        name: "DevOps",

        description: "Git, GitHub, Docker, Kubernetes, CI/CD, AWS, Google Cloud, Heroku, Netlify"
    },
    {
        icon: <FaSitemap className="text-4xl mb-4 text-primary" />,
        name: "Other Skills",

        description: "Agile methodologies, system design, problem-solving, debugging, technical writing, UI/UX design"
    }
];

const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 relative pb-2 text-center md:text-left">
                    Technical Skills
                    <span className="absolute left-0 md:left-0 bottom-0 h-1 w-12 bg-primary rounded-md transform translate-x-0 md:translate-x-0"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-light p-8 rounded-lg shadow-sm border border-border hover:-translate-y-1 transition-transform">
                            {skill.icon}
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>

                            <p className="text-gray">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;