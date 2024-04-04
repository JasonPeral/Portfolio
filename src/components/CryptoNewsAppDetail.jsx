import React from 'react';

const CryptoNewsAppDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <main className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Crypto News App</h1>
          <div className="space-y-4">
            <img src="./cryptoNews.png" alt="Crypto News App Screenshot" className="w-full rounded-lg shadow-md"/>
            <p className="text-gray-700">
              The Crypto News App is an innovative platform designed for cryptocurrency enthusiasts. It aggregates real-time news from leading crypto news APIs and provides up-to-date coin information, helping users stay informed about the latest trends in the cryptocurrency market.
            </p>
            <p className="text-gray-700">
              Key features include the ability to save articles for later reading, create a mock crypto portfolio, and track the value of cryptocurrencies in real-time. Whether you're a seasoned investor or new to the world of cryptocurrency, the Crypto News App offers valuable insights and tools to enhance your experience.
            </p>
            <img src="./Crypto2.jpg" alt="Crypto Portfolio Feature" className="w-full rounded-lg shadow-md"/>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python & Django Framework: For a robust, scalable backend.</li>
              <li>SQLite: A lightweight database solution for storing user data and articles.</li>
              <li>Real-time Crypto News API: To fetch and display the latest news and coin information.</li>
            </ul>
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default CryptoNewsAppDetail;
