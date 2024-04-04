import React from 'react';

const ContactInfoPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="./Jason.jpeg" alt="Your Name" className="mx-auto w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md object-cover"/>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4 text-center">Jason Peral</h1>
                <p className="text-md text-gray-600 mt-2 text-center">Full Stack Developer</p>
                
                <div className="mt-6 text-center">
                    <div className="my-2">
                        <a href="mailto:jasonperal@hotmail.com" className="text-blue-500">jasonperal@hotmail.com</a>
                    </div>
                    <div className="my-2">
                        <a href="tel:+16477786589" className="text-blue-500">+1 (647) 778-6589</a>
                    </div>
                    <div className="my-2">
                        <a href="https://www.linkedin.com/in/jason-peral-89919716b/" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoPage;
