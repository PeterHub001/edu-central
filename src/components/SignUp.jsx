import { Link } from 'react-router-dom'
import edulogo from "../assets/logo.png";
import BackgroundSlider from "./BackgroundSlider";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const SignUp = () => {
  const radioOptions = [{ key: "remember me", value: "option1" }];
  const initialValues = {
    email: "",
    password: "",
    phone: "",
    radioOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required"),
    password: Yup.string().required("required"),
    phone: Yup.string()
      .required("Phone number is required"),
    radioOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="container flex w-full max-w-full">
      <div className="flex-1">
        <img className="size-16  ml-32 my-8" src={edulogo} alt="" />
        <div className="flex flex-col  w-full justify-center items-center">
          <div className="flex flex-col items-center pb-[50px]">
            <h1 className="font-bold text-3xl">Welcome to eduCENTRAL</h1>
            <p className="text-lg">Welcome! please enter your details.</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone number"
                  name="phone"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <div className="flex justify-between ">
                  <FormikControl
                    control="radio"
                    name="radioOption"
                    options={radioOptions}
                  />
                </div>

                <button
                  className="mt-[100px] px-[180px] h-10 hover:bg-blue-500 rounded-md bg-blue-800 text-white "
                  type="submit"
                  disabled={!formik.isValid}
                >
                  SignUp
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-16">
            already have an account?
            <Link to="/login" className="ml-1 text-xl hover:text-blue-500 cursor-pointer font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <BackgroundSlider />
      </div>
    </div>
  );
};

export default SignUp;
