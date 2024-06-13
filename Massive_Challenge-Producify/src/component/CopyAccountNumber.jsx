import React from "react";
import "./style.css";

const CopyAccountNumber = () => {
  const copyAccountNumber = () => {
    const accountNumber = "8807 0857 0432 2222";
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert("Account number copied to clipboard");
    });
  };

  return (
    <div>
      <button className="button" onClick={copyAccountNumber}>
        Copy
      </button>
    </div>
  );
};

export default CopyAccountNumber;
