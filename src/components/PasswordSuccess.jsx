import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import success from "../assets/success.png";



const PasswordSuccess = () => {

  return (
    <div>
      <img className="size-14 ml-10 mt-4" src={logo} alt="" />
      <div className="flex flex-col items-center ">
        <img src={success} alt="" />
        <div className="flex flex-col text-center my-10">
          <h1 className="font-bold text-3xl mb-3">Password Reset</h1>
          <p className="mb-4">Your Password has been successfully <br /> reset.</p>
          <p>Click below to Login</p>
        </div>
        <div>
          
        </div>
        <Link to="/login" className=" bg-blue-800 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md p-2 text-white w-96 mt-8 text-center">
           Log in
        </Link>
      </div>
    </div>
  );
};

export default PasswordSuccess;
