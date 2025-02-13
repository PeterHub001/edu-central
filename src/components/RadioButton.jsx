import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const RadioButtons = (props) => {
  const { className, label, name, options, ...rest } = props;
  return (
    <div className={`form-control`}>
      <label>{label}</label>
      <Field className='try' name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
             return (
              <div className={` flex ${className}`} key={option.key}>
                <input className="radio"
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
