import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import logo from "../assets/Logo.png";
import password from "../assets/password.png";
import back from "../assets/back.png";

const ResetPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    navigate("/toemail");
  };
  return (
    <div>
      <img className="size-14 m-10" src={logo} alt="" />
      <div className="flex flex-col items-center ">
        <img src={password} alt="" />
        <div className="flex flex-col text-center my-10">
          <h1 className="font-bold text-lg">Forgot Password?</h1>
          <p>No worries, we'll send you a reset instructions</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="ml-10">
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <button
                className="mt-[90px] px-[147px] h-10 hover:bg-blue-500 rounded-md bg-blue-800 text-white "
                type="submit"
                disabled={!formik.isValid}
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/login" className="flex text-blue-950  mt-4">
          <img src={back} alt="" /> <span>Back to Login</span>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
