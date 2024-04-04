import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const PortfolioSection = () => {

    const projects = [
        {
            id: 1,
            title: "QuantaQue Booking App",
            description: "A booking app that connects contract services to customers",
            imageUrl: "./quantaQue.png",
            projectUrl: "/project1" 
        },
        {
            id: 2,
            title: "Crypto News App",
            description: "Real-Time crypto currency News application ",
            imageUrl: "./cryptoNews.png",
            projectUrl: "/project2"
        },
        {
            id: 3,
            title: "Task Manager",
            description: "A simple task manager/to-do application",
            imageUrl: "./todo1.png",
            projectUrl: "/project3" 
        },
    ];

    return (
        <div className="bg-gray-100 p-8 mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between">
                            <img className="rounded-md mb-4" src={project.imageUrl} alt={project.title} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <Link to={project.projectUrl} className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                                    Project Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection;
