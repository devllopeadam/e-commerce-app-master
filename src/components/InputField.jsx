/* eslint-disable react/prop-types */
import { useDataInputs } from "../context/DataInputsContext";

const InputField = ({
  id,
  name,
  errorName,
  value,
  label,
  placeholder,
  className = "",
}) => {
  const { setErrors, setData } = useDataInputs();
  const checkAndChange = (e) => {
    const { name, value } = e.target;

    // Update the data state
    setData((prevData) => ({ ...prevData, [name]: value }));

    // Validate the input
    let error = "";
    if (value.trim() === "") {
      error = "Field cannot be empty";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Wrong Email Format";
    } else if (name === "phone" && !/^[0-9]{10}$/.test(value)) {
      error = "Wrong Phone Format";
    } else if (name === "zip" && !/^[0-9]{5}$/.test(value)) {
      error = "Wrong Zip Code Format";
    } else if (name === "eNumber" && !/^[0-9]{9}$/.test(value)) {
      error = "Wrong e-Number Format";
    } else if (name === "ePin" && !/^[0-9]{4}$/.test(value)) {
      error = "Wrong e-Pin Format";
    }
    // Update the errors state+653
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex itemsc-center justify-between">
        <label
          htmlFor={id}
          className={`text-[12px] ${
            errorName !== "" ? "text-red-600" : "text-accent-black"
          } font-bold`}>
          {label}
        </label>
        <small className="text-red-600">{errorName}</small>
      </div>
      <input
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={checkAndChange}
        className={`p-4 pr-0 w-full ${
          errorName !== "" ? "" : "focus:shadow-input"
        } rounded-radius transition-all duration-300 focus:border-accent-orange border ${
          errorName !== "" ? "border-red-600" : "border-[#cfcfcf]"
        } text-[14px] text-accent-black placeholder:text-accent-grey placeholder:font-bold font-semibold outline-none`}
      />
    </div>
  );
};

export default InputField;
