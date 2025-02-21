import { useSidebar } from "../context/SidebarContext";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const CreateGroup = () => {
  const { setSidebarState } = useSidebar();
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Final Form Data", values);
      setSidebarState("groupCreated");
    }
  };

  const stepContent = [
    {
      title: "What’s the name of your Group?",
      description:
        "This will be the name of your eduCENTRAL Group- Choose something that your team will recognize.",
      inputPlaceholder: "Napps",
    },
    {
      title: "Invite other members of your organization",
      inviteLink: "https://members.edu-central.org/register/gsfv48y7",
    },
    {
      title: "What’s your team working on right now?",
      description:
        "This could be anything ranging from a project, campaign, event, or deal you’re trying to close.",
      inputPlaceholder: "Ex.Napps-Meeting, Inauguration-Lecture",
    },
  ];

  return (
    <div className="ml-24 mt-14 relative">
      {/* Step Indicator */}
      <p className="ml-64 font-bold text-[#0539B4]">
        Step {step} <span>of 3</span>
      </p>

      {/* Progress Bar */}
      <div className="relative w-full max-w-[450px] ml-24 mt-2 h-2 bg-gray-300 rounded-full">
        {/* Step 1 - Only the first part is blue */}
        <div
          className={`absolute h-2 bg-[#1A0B8A] rounded-full transition-all duration-300`}
          style={{
            width: "33%",
            left: "0%",
            opacity: step === 1 ? 1 : 0, // Show only on Step 1
          }}
        />

        {/* Step 2 - Only the middle part is blue */}
        <div
          className={`absolute h-2 bg-[#1A0B8A] rounded-full transition-all duration-300`}
          style={{
            width: "33%",
            left: "33%",
            opacity: step === 2 ? 1 : 0, // Show only on Step 2
          }}
        />

        {/* Step 3 - Only the last part is blue */}
        <div
          className={`absolute h-2 bg-[#1A0B8A] rounded-full transition-all duration-300`}
          style={{
            width: "34%",
            left: "66%",
            opacity: step === 3 ? 1 : 0, // Show only on Step 3
          }}
        />
      </div>

      {/* Skip Button (only on Step 2) */}
      {step === 2 && (
        <button
          className="absolute top-5 right-10 text-blue-600 font-semibold"
          onClick={() => setShowModal(true)} // Open modal on click
        >
          Skip
        </button>
      )}

      {/* Step Content */}
      <div
        className="ml-32 mt-6 text-center w-full transition-all duration-300"
      >
        <h1 className={`font-bold  text-3xl mb-6 ${
          step === 1 ? "max-w-80 " : step === 2 ? "max-w-80" : step === 3 ? "max-w-[360px]" : ""
        } `}>
          {stepContent[step - 1].title}
        </h1>
        <p className={` ${
          step === 1 ? "max-w-[280px] " : step === 2 ? "max-w-24" : step === 3 ? "max-w-96" : ""
        } `}>{stepContent[step - 1].description}</p>

        {/* Invite Link (Step 2) */}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="flex flex-col  mt-6 ml-24">
            {/* Show Input on Step 1 & 3 */}
            {(step === 1 || step === 3) && (
              <FormikControl
                className="outline-none w-full border-l-transparent border-t-transparent border-r-transparent border-[#E1E6EF]  max-w-[450px] "
                control="input"
                type="text"
                label={step === 1 ? "Name Of Group" : ""}
                name="name"
                placeholder={stepContent[step - 1].inputPlaceholder}
              />
            )}

            {/* Next Button */}
            {step === 2 && (
              <div className="flex w-full mt-10 flex-col ">
                <input
                  type="text"
                  value={stepContent[1].inviteLink}
                  readOnly
                  className="mb-32 outline-none border-transparent text-[#3F444D]  bg-transparent w-full max-w-[600px] text-lg"
                />
                <button
                  className="absolute mt-56 w-full max-w-[450px] h-10 bg-[#8B54F7] text-white rounded-md"
                  onClick={() =>
                    navigator.clipboard.writeText(stepContent[1].inviteLink)
                  }
                >
                  Copy Invite Link
                </button>
              </div>
            )}
            <button
              className="h-10 w-1/2 mt-28 hover:bg-blue-500 rounded-md bg-blue-800 text-white"
              type="submit"
            >
              Next
            </button>

            <p className="pl-3 text-sm mt-4">
              By continuing, you’re agreeing to our Customer Terms of Service,
              User
              <br />
              <span className="pl-16">
                Terms of Service, Privacy Policy, and Cookie Policy.
              </span>
            </p>
          </Form>
        )}
      </Formik>

      {/* Modal for Skip Confirmation */}
      {showModal && (
        <div className="fixed inset-0  bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[600px] h-[300px]  rounded-lg ">
            <h2 className="text-lg mt-8 ml-20 font-bold">
              Skip without inviting
            </h2>
            <div className="flex flex-col items-start ml-40">
              <p className=" text-sm text-center mt-6 mb-20 text-gray-600">
                To get a better feel of our platform- and to see ways it <br />
                can make you and your members sync well- you will <br /> need a
                few members here.
              </p>
              <div className=" flex gap-6">
                <button
                  className="px-12 border py-1 text-blue-700   border-blue-700 rounded-md"
                  onClick={() => setShowModal(false)} // Close modal
                >
                  Cancel
                </button>
                <button
                  className="px-12 py-1 text-white  bg-red-500 rounded-md"
                  onClick={() => {
                    setStep(3); // Move to step 3
                    setShowModal(false); // Close modal
                  }}
                >
                  Skip Step
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateGroup;
