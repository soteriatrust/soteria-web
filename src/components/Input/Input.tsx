import React from "react";
import "./Input.scss";
const Input = ({
  value = "",
  onChange,
  textarea = false,
  placeholder,
  className = "",
}: {
  className?: string;
  onChange?: (e: any) => void;
  value?: string;
  textarea?: boolean;
  placeholder?: string;
}) => {
  return (
    <div className={`input-cpn ${className} `}>
      {textarea ? (
        <textarea className="input" placeholder={placeholder} />
      ) : (
        <input className="input" placeholder={placeholder} onChange={onChange} />
      )}
    </div>
  );
};
export default Input;
