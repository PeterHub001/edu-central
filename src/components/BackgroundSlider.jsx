import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images directly
import loginimg from "../assets/loginimg.png";
import logo from "../assets/logo.png";

const BackgroundSlider = () => {
  const backgrounds = [
    { image: loginimg, heading: "Welcome to Image 1", paragraph: "This is the first background image." },
    { image: logo, heading: "Welcome to Image 2", paragraph: "This is the second background image." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % backgrounds.length
        : (prevIndex - 1 + backgrounds.length) % backgrounds.length
    );
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center relative transition-all duration-500"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white text-center p-6 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-3xl font-bold">{backgrounds[currentIndex].heading}</h1>
        <p className="mt-4 text-lg">{backgrounds[currentIndex].paragraph}</p>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-5 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        onClick={() => handleNavigation("prev")}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-5 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-600"
        onClick={() => handleNavigation("next")}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default BackgroundSlider;
