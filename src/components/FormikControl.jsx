import React from "react";
import Input from "./Input";
import RadioButtons from "./RadioButton";


const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />
    case "textarea":
        return <TextArea {...rest} />
    case "select":
        return <Select {...rest} />
    case "radio":
        return <RadioButtons {...rest} />
    case "checkbox":
        return <Checkbox {...rest}/>
    case "date":
    default:
      return null;
  }
  
};

export default FormikControl;
