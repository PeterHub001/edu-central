import edulogo from  "../assets/logo.png"
import BackgroundSlider from "./BackgroundSlider";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const LoginScreen = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required"),
    password: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div  className="container flex flex-row">
      <div>
        <img src={edulogo} alt="" />
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
                type="password"
                label="Password"
                name="password"
              />

              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <BackgroundSlider />
    </div>
  );
};

export default LoginScreen;
