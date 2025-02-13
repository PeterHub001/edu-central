import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import logo from "../assets/Logo.png";
import passwordIcon from "../assets/password.png";
import back from "../assets/back.png";
import eyeOpen from "../assets/eye.png";
import eyeClosed from "../assets/eye.png"; // Add a closed-eye icon

const SetNewPassword = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const options = [
    { key: "Must be at least 8 Characters.", value: "roption1" },
    { key: "At least one Uppercase", value: "roption2" },
    { key: "At least one number", value: "roption3" },
    { key: "At least one symbol", value: "roption4" },
  ];

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one symbol")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    navigate('/success')
  };

  const handlePasswordChange = (e, setFieldValue) => {
    const password = e.target.value;
    setFieldValue("password", password);

    // Check which conditions are met
    const conditionsMet = [];
    if (password.length >= 8) conditionsMet.push("roption1");
    if (/[A-Z]/.test(password)) conditionsMet.push("roption2");
    if (/\d/.test(password)) conditionsMet.push("roption3");
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) conditionsMet.push("roption4");

    setCheckedOptions(conditionsMet);
  };

  return (
    <div className="w-full h-full max-w-full max-h-full">
      <img className="size-14 ml-14 mt-4" src={logo} alt="Logo" />
      <div className="flex flex-col">
        <img
          className="size-20 self-center"
          src={passwordIcon}
          alt="Password Icon"
        />
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-bold text-3xl mb-2">Set new Password</h1>
          <p className="flex text-center">
            Your new password must be different from <br />
            previously used passwords.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, isValid, isSubmitting }) => (
            <Form className="flex flex-col items-center">
              <div className="flex items-center border-x-transparent border-t-transparent p-2">
                <FormikControl
                  className="flex-1 border-x-transparent border-t-transparent "
                  control="input"
                  type={passwordVisible ? "text" : "password"}
                  label="Password"
                  name="password"
                  onChange={(e) => handlePasswordChange(e, setFieldValue)}
                />
                <img
                  className="size-6 cursor-pointer"
                  src={passwordVisible ? eyeOpen : eyeClosed}
                  alt="Toggle Password Visibility"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </div>

              <div className=" flex-1 mr-52 mb-4">
                {options.map((option) => (
                  <div key={option.value} className="flex items-center mb-[12px] ">
                    <input
                      type="radio"
                      checked={checkedOptions.includes(option.value)}
                      className="w-4 h-4 accent-blue-900"
                    />
                    <label
                      className={`text-sm pl-[12px]  ${checkedOptions.includes(option.value)  ? "text-blue-800 " : "text-black-500 "}`
                        
                      }
                    >
                      {option.key}
                    </label>
                  </div>
                ))}
              </div>

              {/* Confirm Password Field */}
              <div className="flex items-center  p-2">
                <FormikControl
                  className="flex-1 border-x-transparent border-t-transparent"
                  control="input"
                  type={confirmPasswordVisible ? "text" : "password"}
                  label="Confirm Password"
                  name="confirmPassword"
                />
                <img
                  className="size-6 cursor-pointer"
                  src={confirmPasswordVisible ? eyeOpen : eyeClosed}
                  alt="Toggle Confirm Password Visibility"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                className="mt-10 px-[147px] h-10 hover:bg-blue-500 rounded-md bg-blue-800 text-white"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Set New Password
              </button>
            </Form>
          )}
        </Formik>

        {/* Back to Login */}
        <div className="flex self-center text-blue-950 mt-4">
          <img src={back} alt="Back" />
          <Link to="/login" className="ml-2">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
