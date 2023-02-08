import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const resetField = () => setValue("");

  return {
    type,
    value,
    onChange,
    resetField,
  };
};

export default useField;
