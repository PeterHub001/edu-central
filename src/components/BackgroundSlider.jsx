import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images directly
import loginimg from "../assets/loginimg.png";
import hands from "../assets/hands.png";

const BackgroundSlider = () => {
  const backgrounds = [
    { image: loginimg, heading: "Manage your team properly and share thoughts together with our Platform!", paragraph: "Stay on the same page and make decisions more quickly by bringing all of your work communication into one place." },
    { image: hands, heading: "Connect with your members", paragraph: "Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place." }
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
      className="h-full w-full flex items-center relative transition-all duration-500"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex].image})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white absolute self-end flex-1  text-left p-20 ">
        <h1 className=" text-3xl font-bold ">{backgrounds[currentIndex].heading}</h1>
        <p className="mt-4 text-lg">{backgrounds[currentIndex].paragraph}</p>
      </div>

      
      <div className=" flex border-s-red-800 relative pl-[550px] self-end pb-10 gap-[32px]">
      <button 
        className=" text-white border-s-red-800 bg-[#E1E6EF] p-3 rounded-full hover:bg-gray-600"
        onClick={() => handleNavigation("next")}
      >
        <ChevronRight size={10} />
      </button>
      <button
        className="  text-white border-s-red-800 bg-[#E1E6EF] p-3 rounded-full hover:bg-gray-600"
        onClick={() => handleNavigation("prev")}
      >
        <ChevronLeft size={10} />
      </button>

      
      </div>
      
    </div>
  );
};

export default BackgroundSlider;
