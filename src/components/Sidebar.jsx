import { useSidebar } from "../context/SidebarContext";
import logo from "../assets/Logo.png";
import compass from "../assets/compass.png"
import dropdown from "../assets/dropdown.png"
import plus from "../assets/plus.png"
import edit from "../assets/edit.png"
import signout from "../assets/signOut.png"
import seaimg from "../assets/seaimg.png"
import imageicone from "../assets/imageicone.png"
import jake from "../assets/jakedot.png"


const Sidebar = () => {
  const { sidebarState } = useSidebar();

  return (
    <div >
      
       {/* Hide h1 when group is created */}
       {sidebarState === "default" && (
        <div className="flex h-screen flex-col items-center w-64  bg-[#1A0B8A] text-white p-4">
          <img className="size-16 mt-4 mb-28 ml-22" src={logo} alt="logo" />
        <h1 className="bg-white py-3 text-[#0539B4] font-bold font-serif px-28 text-center">
          Napps
        </h1>
        </div>
        

      )}


      {/* Hide h1 when group is created */}
      {sidebarState === "user" && (
        <div className="flex h-screen flex-col items-center w-64  bg-[#1A0B8A] text-white p-4">
          <img className="size-16 mt-4 mb-28 ml-22" src={logo} alt="logo" />
        <h1 className="bg-white py-3 text-[#0539B4] font-bold font-serif px-28 text-center">
          Napps
        </h1>
        </div>
        

      )}

      {/* Conditionally render new sidebar items when group is created */}
      {sidebarState === "groupCreated" && (
        <div className="flex h-full flex-col items-center w-64  bg-[#1A0B8A] text-white p-4">
          <img className="size-12 mt-1 mb-6" src={logo} alt="logo" />
          <div className="flex size-4 items-center mr-8 font-bold  gap-3">
            <h2>Napps</h2>
            <img src={dropdown} alt="dropdown" />
            <img src={edit} alt="edit" />
          </div>
          <p className="flex items-center justify-center ml-10 mt-6 gap-5 font-thin">Forum<img className="size-4" src={plus} alt="" /></p>
          <ul className="flex ml-4 mt-11 gap-[16px] items-center">
          <li className="flex gap-3 font-thin transition-all"><img src={compass} alt="" />
            Presidential-inauguration
          </li>
        </ul>
        <ul className=" ml-4 mt-40 gap-[16px] items-center">
          
          <h1  className="flex text-xl gap-3 items-center font-bold"><img className="size-4" src={dropdown} alt="" />
            Direct Messages
          </h1>
          
          <li className="flex my-4 gap-3 items-center font-thin"><img className="size-6" src={seaimg} alt="" />
            Tobiloba
          </li>
          <li className="flex my-4 gap-3 items-center font-thin"><img className="size-6" src={seaimg} alt="" />
            Tobiloba
          </li>
          <li className="flex my-4 gap-3 items-center font-thin"><img className="size-6" src={imageicone} alt="" />
            jake
          </li>
          <li className="flex my-4 gap-3 items-center font-thin"><img className="size-6" src={jake} alt="" />
            jake
          </li>
        </ul>
        <p className="flex font-extralight h-1 gap-2 items-center mr-16 mt-64"><img className="size-4" src={signout} alt="" />Sign out</p>
        
        

        </div>
        
      )}
    </div>
  );
};

export default Sidebar;
