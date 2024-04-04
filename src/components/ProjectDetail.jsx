import React from 'react';

const Project1Detail = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 sm:py-8 lg:py-10">
      <div className="max-w-4xl mx-auto py-2 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mt-6 mb-4">
          QuantaQue Booking App
        </h1>
        <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-blue-600 mt-6 mb-4">(On going Project)</h2>
        <img
          src="./QuantaWideAngle.png"
          alt="QuantaQue Booking App"
          className="w-full h-auto rounded-md mb-6"
        />
        <p className="text-gray-700 text-lg mb-4">
          The <strong>QuantaQue Booking App</strong> is a cutting-edge solution designed to connect contract services with customers efficiently. It simplifies the process of finding, booking, and managing contract services.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Built with a focus on user experience, the QuantaQue Booking App incorporates a seamless interface, real-time notifications, and comprehensive service listings.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Real-time booking and scheduling</li>
            <li>Intuitive search and filters for finding services</li>
            <li>User profiles for both service providers and customers</li>
            <li>Secure in-app payment system</li>
            <li>Feedback and rating mechanisms</li>
          </ul>
        </div>
        <p className="text-gray-700 text-lg mb-6 pb-10">
          This project leverages the MERN stack, ensuring a robust, scalable platform that supports real-time data processing and provides a rich user experience.
        </p>
      </div>
    </div>
  );
};

export default Project1Detail;
