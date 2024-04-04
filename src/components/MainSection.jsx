import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const MainSection = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-200 p-4 md:p-0 m-0">
            <div className="max-w-2xl w-full">
                <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <div className="w-24 md:w-32 h-24 md:h-32">
                        <img className="w-full h-full rounded-full shadow-md object-cover transform hover:scale-105 transition-transform duration-300" src="./Jason.jpeg" alt="Jason" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">Hi, I'm Jason Peral</h1>
                        <p className="text-lg md:text-xl text-gray-600 mt-2 font-semibold tracking-wider">Full Stack Developer</p>
                        <Link to="/resume" className="resume-button mt-4 inline-block">View Resume</Link>
                        <Link to="/portfolio" className="resume-button mt-4 inline-block">View Projects</Link>
                    </div>
                </div>

                <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full text-center md:text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">About Me</h2>
                    <p className="text-md md:text-lg lg:text-xl text-gray-600 mt-2">
                     I'm a young, driven, and detail-oriented developer, fueled by a huge passion for both software and hardware technology. My meticulous attention to detail has propelled me to delve deep into languages, frameworks, and libraries that power the modern web and beyond. My toolkit includes but isn't limited to:
                     <span className="font-bold">HTML, CSS, JavaScript, React.js, React Native, Node.js, Express.js, MongoDB, Mongoose, Redux, Java, Python, Django, SpringBoot, R</span>, and <span className="font-bold">MySQL</span>.
                     </p>
                     <p className="text-md md:text-lg lg:text-xl text-gray-600">
                     In an era where technology is advancing at an unprecedented rate, my enthusiasm remains unwavering. I'm perpetually on the lookout for emerging technologies, always ready to embrace and master what's on the horizon.
                     </p>
                </div>
            </div>
        </div>
    );
}

export default MainSection;











// import React from 'react';
// import '../App.css';
// import { Link } from 'react-router-dom';

// const MainSection = () => {
//     return (
//         <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-200 p-4 md:p-0 m-0">
//             <div className="max-w-2xl w-full">
//                 <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
//                     <div className="w-24 md:w-32 h-24 md:h-32">
//                         <img className="w-full h-full rounded-full shadow-md object-cover transform hover:scale-105 transition-transform duration-300" src="./Jason.jpeg" alt="Jason" />
//                     </div>
//                     <div className="text-center md:text-left">
//                         <h1 className="text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">Hi, I'm Jason Peral</h1>
//                         <p className="text-lg md:text-xl text-gray-600 mt-2 font-semibold tracking-wider">Full Stack Developer</p>
//                         <a href="/resume">
//                             <button className="resume-button mt-4">View Resume</button>
//                         </a>
//                         <a href="/portfolio">
//                             <button className="resume-button mt-4">View Projects</button>
//                         </a>
//                     </div>
//                 </div>

//                 <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full text-center md:text-left space-y-4">
//                     <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">About Me</h2>
//                     <p className="text-md md:text-lg lg:text-xl text-gray-600 mt-2">
//                     I'm a young, driven, and detail-oriented developer, fueled by a huge passion for both software and hardware technology. My meticulous attention to detail has propelled me to delve deep into languages, frameworks, and libraries that power the modern web and beyond. My toolkit includes but isn't limited to:
//                     <span className="font-bold">HTML, CSS, JavaScript, React.js, React Native, Node.js, Express.js, MongoDB, Mongoose, Redux, Java, Python, Django, SpringBoot, R</span>, and <span className="font-bold">MySQL</span>.
//                     </p>
//                     <p className="text-md md:text-lg lg:text-xl text-gray-600">
//                     In an era where technology is advancing at an unprecedented rate, my enthusiasm remains unwavering. I'm perpetually on the lookout for emerging technologies, always ready to embrace and master what's on the horizon.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainSection;
