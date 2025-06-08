import React from 'react';
import { cardContents1, cardContents2 } from '../constants/AdContents';

export const AdHero = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900">
      {/* Title */}
      <h1 className="mt-8 text-3xl font-semibold text-center text-white">
        Your Internship Process Made Easy
      </h1>

      {/* Section for cardContents1 */}
      <div className="flex justify-center p-8 mt-7">
        <div className="grid grid-cols-1 gap-y-6 gap-x-20 sm:grid-cols-2 md:grid-cols-3">
          {cardContents1.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 transition-transform transform bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-md border-opacity-20 w-80 rounded-2xl hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center p-4 mr-4 text-white border border-blue-300 rounded-full">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              </div>
              <p className="text-sm text-center text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section for cardContents2 */}
      <div className="flex justify-center p-8 mt-4 mb-10">
        <div className="grid grid-cols-1 gap-y-6 gap-x-20 sm:grid-cols-2 md:grid-cols-3">
          {cardContents2.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 transition-transform transform bg-white border border-white shadow-xl bg-opacity-10 backdrop-blur-md border-opacity-20 w-80 rounded-2xl hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center p-4 mr-4 text-white border border-blue-300 rounded-full">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              </div>
              <p className="text-sm text-center text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
