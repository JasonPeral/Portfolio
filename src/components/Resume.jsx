import React from 'react';

function Resume() {
    return (
            <div className="bg-white p-6 lg:p-12 mx-4 lg:mx-auto my-12 mt-20 max-w-4xl rounded shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">Jason Peral</h1>
            <p className="text-center mb-6">Computer Programming Graduate </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>Mobile: (647) 778-6589</div>
                <div>Email: <a href="mailto:jasonperal@hotmail.com" className="text-blue-500 underline">jasonperal@hotmail.com</a></div>
                <div colSpan={2}>LinkedIn: <a href="https://www.linkedin.com/in/jason-peral-89919716b/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://www.linkedin.com/in/jason-peral-89919716b/</a></div>
                <div colSpan={2} className="text-center">Toronto, ON</div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <ul className="list-disc pl-5 mb-6">
                <li>Strong core knowledge in HTML, CSS, JavaScript and react.js</li>
                <li>Proficient with JavaScript to create dynamic front end web applications</li>
                <li>Knowledge in git version control, react.js, react native, node.js, express.js, mongo DB, mongoose, MySQL, python and java technologies</li>
                <li>Strong knowledge of the key principals of object-oriented programming </li>
                <li>Dynamic problem solver creating efficient and effective solution</li>
                <li>Strong organizational skills using applications to prioritize critical tasks / tickets</li>
                <li>Ability to learn and adapt to new technologies</li>

                
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Relevant Work Experience</h2>
            <div className="mb-6">
                <h3 className="font-medium">Orkin Canada | IT Department - Cooperative Education Student</h3>
                <ul className="list-disc pl-5">
                    <li>Diagnosed and resolved hardware and software issues on workstations and handheld scanners</li>
                    <li>Performed password resets and virtual installs of various software onto workstations</li>
                    <li>Managed system issues using Spiceworks ticketing system for accounts, software, and hardware issues</li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="font-medium">Erin Mills Pump & Patio| Line Cook</h3>
                <ul className="list-disc pl-5">
                    <li>Preparing and cooking food items according to recipes, ensuring proper portion sizes and maintaining consistent quality</li>
                    <li>Proficiency in various cooking techniques such as grilling, sauté, baking and frying</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div>
                <h3 className="font-medium mb-2">Humber College - Computer Programming & Analysis</h3>
                <p>September 2021 – September 2023</p>
                <ul className="list-disc pl-5">
                    <li>Achievements: Dean’s list while maintaining an 88% average</li>
                    <li>Key Project: Worked alongside 3 colleagues to create a GitHub search engine with React.JS using GitHubs’ API</li>
                    <li>Learning technologies such as HTML, CSS, JavaScript, React.js, React Native, Node.js, Express.js, MongoDB, Mongoose, Redux, Java, Python, Django, SpringBoot, R and MySQL</li>
                    <li>Looking to specialize in software development / software engineering and cyber security</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
