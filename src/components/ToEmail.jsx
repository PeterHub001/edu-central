import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import logo from "../assets/Logo.png";
import msgicon from "../assets/msgicon.png";
import back from "../assets/back.png";

const ToEmail = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("Form data", values);
    navigate("/newpassword");
  };

  return (
    <div>
      <img className="size-14 ml-14 mt-4" src={logo} alt="" />
      <div className="flex flex-col">
        <img className="size-20 self-center" src={msgicon} alt="" />
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-bold text-xl mb-2">Check your Email</h1>
          <p>We sent a Password reset link to</p>
          <p className="font-bold">example@gmail.com</p>
        </div>

        <Formik
          initialValues={{ email: "" }}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="flex self-center">
              <button
                className="mt-10 px-[147px] h-10 hover:bg-blue-500 rounded-md bg-blue-800 text-white"
                type="submit"
              >
                Open your email app
              </button>
            </Form>
          )}
        </Formik>

        <div className="flex self-center text-blue-950 mt-4">
          <p>Didn't receive the email?<span className="text-blue-700 pl-1 cursor-pointer">Click to resend</span></p>
        </div>
        <div className="flex self-center text-blue-950 mt-4">
          <img src={back} alt="" /> <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ToEmail;
