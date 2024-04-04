import React from 'react';


const ReactTaskManagerDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">React Task Manager</h1>
          <div className="space-y-4">
            <img src="./todo1.png" alt="Task Manager Interface" className="w-full rounded-lg shadow-md"/>
            <p className="text-gray-700">
              The React Task Manager is a dynamic, single-page application (SPA) designed to help users efficiently manage their daily tasks. Built with React, it showcases the power of modern JavaScript frameworks in creating responsive and interactive user experiences.
            </p>
            <p className="text-gray-700">
              Utilizing React's <code>useState</code> hook, the app maintains a local state for each task, enabling users to add, delete, and mark tasks as complete with instant UI updates. The <code>useEffect</code> hook is employed to fetch tasks from a backend server, demonstrating React's capabilities in handling side effects in functional components.
            </p>
            <img src="./todo2.png" alt="Task Editing Feature" className="w-full rounded-lg shadow-md"/>
            <img src="./todo3.png" alt="Task List Overview" className="w-full rounded-lg shadow-md"/>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Real-time task management with instant UI updates.</li>
              <li>Effortless task tracking with a clean, intuitive design.</li>
              <li>Custom task categorization for enhanced organization.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReactTaskManagerDetail;
