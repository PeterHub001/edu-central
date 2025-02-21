import React from "react";
import search from "../assets/search.png";
import person from "../assets/personicon.png";
import unknown from "../assets/unknown.png";
import profile from "../assets/profile.png";
import trumpet from "../assets/trumpet.png";
import personadd from "../assets/personadd.png";
import fred from "../assets/fred.png";
import vector from "../assets/vector.png";
import president from "../assets/president.png";
import message from "../assets/message.png";
import smile from "../assets/smileicon.png";
import mic from "../assets/micicon.png";
import video from "../assets/video.png";
import smiling from "../assets/smilingface.png";

const MemberDashboard = () => {
  return (
    <div>
      <div className="flex m-10 justify-between items-center  mt-3">
        <div className="flex items-center">
          <img className="absolute ml-4 size-6" src={search} alt="" />
          <input
            className="pl-14 outline-none border-none rounded-l-lg bg-gray-200 placeholder:text-black"
            type="text"
            placeholder="Find your administrators"
          />
          <button className="ml-[352px] absolute bg-blue-900 px-4 py-2 rounded-lg text-white fint text-xs font-extralight">
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <img src={unknown} alt="" />
          <img src={person} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center m-10">
        <h3 className="font-bold">Presidential-Inauguration</h3>
        <div className="items-center flex border py-1 border-blue-500 rounded-full gap-3 px-3">
          <img className="size-4" src={profile} alt="" />
          <p className="text-xs">1</p>
        </div>
      </div>
      <div className="flex items-center ml-10 gap-3">
        <img className="size-16" src={trumpet} alt="" />
        <div className="flex-1 text-[#1D2433]">
          <h3 className="font-bold">
            You’re looking at the Presidential-Inauguration Forum
          </h3>
          <p>
            This forum will include every of your members once you invite or add
            them
          </p>
        </div>
      </div>
      <div className="flex items-center ml-10 mt-8 border border-blue-700 p pl-3 w-40 gap-3 rounded-md h-9 text-blue-700 font-semibold">
        <img src={personadd} alt="" />
        <p>Add members</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <hr className="w-1/2 bg-[#E1E6EF] " />
        <p className=" bg-[#5221B5] rounded-full text-white text-sm py-2 font-extralight px-7 ">
          Today
        </p>
        <hr className="w-1/2 bg-[#E1E6EF] " />
      </div>
      <div className="flex gap-3 ml-10">
        <img className="size-16 mt-3" src={fred} alt="" />
        <div>
          <div className="flex items-center">
            <h2 className="font-bold"> Mr Fred</h2>
            <p className="m-2 bg-[#D75640] rounded-full px-2 text-sm py-1 text-white">
              Admin
            </p>
            <p className="font-medium text-sm">10:58 AM</p>
          </div>

          <p>
            Welcome Everyone to our Presidential Inauguration ceremony this
            December, i hope we can work and collaborate <br /> to get the best
            out of this.
          </p>
          <img className="h-[256px] py-4" src={president} alt="" />
          <div className="flex gap-1 py-3">
            <img src={message} alt="" /> <p>12</p>
            <img src={smiling} alt="" /><p>22</p>
            <p className="text-blue-700">view in thread</p>
          </div>
        </div>
      </div>
      <div className="flex mt-24 ml-6 mr-16  items-center   mb-6">
        
          <input
            className="pl-6 py-5 w-full  outline-none border-none rounded-l-lg bg-gray-200"
            type="text"
            placeholder="Message Presidential Inauguration"
          />
          <div className=" flex size-5 ml-[870px]  absolute gap-3">
            <img src={smile} alt="" />
            <img src={video} alt="" />
            <img src={mic} alt="" />
            <img src={vector} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
