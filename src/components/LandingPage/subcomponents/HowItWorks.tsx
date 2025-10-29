import React from "react";
import { FaUser, FaBuilding, FaUsers, FaShareAlt, FaCheck } from "react-icons/fa";

const steps = [
  { title: "Your Details", description: "Provide your name & email", icon: <FaUser /> },
  { title: "Company Details", description: "A few details about your company", icon: <FaBuilding /> },
  { title: "Invite Your Team", description: "Start collaborating with your team", icon: <FaUsers /> },
  { title: "Add Your Socials", description: "Share posts to your social accounts", icon: <FaShareAlt /> },
];

const HowItWorks = ({ currentStep = 1 }) => (
  <div className="flex flex-col relative">
    {steps.map((step, index) => {
      const completed = index < currentStep;
      const isActive = index === currentStep;

      return (
        <div key={index} className="flex flex-row items-start relative mb-10">
          <div className="flex flex-col items-center mr-6">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2
                transition-all duration-500
                ${completed ? "bg-green-500 text-white shadow-lg scale-105" : ""}
                ${isActive ? "bg-blue-500 text-white animate-pulse shadow-xl scale-110" : ""}
                ${!completed && !isActive ? "bg-gray-300 text-gray-500" : ""}`}
            >
              {completed ? <FaCheck className="w-7 h-7" /> : React.cloneElement(step.icon, { className: "w-7 h-7" })}
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`w-1 flex-1 rounded-full transition-all duration-500
                  ${completed ? "bg-gradient-to-b from-green-400 to-green-600" : "bg-gray-300"}`}
              ></div>
            )}
          </div>
          <div>
            <p
              className={`text-2xl font-extrabold mb-2 transition-colors duration-500
                ${isActive ? "text-blue-500" : completed ? "text-gray-700" : "text-gray-400"}`}
            >
              {step.title}
            </p>
            <p className="text-sm text-gray-400">{step.description}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default HowItWorks;
