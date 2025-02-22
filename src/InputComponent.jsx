import React, { useState } from "react";
import ListComponent from "./ListComponent"; // Import the ListComponent

const InputComponent = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [submittedNames, setSubmittedNames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "lastName") setLastName(value);
    else if (name === "firstName") setFirstName(value);
    else if (name === "middleName") setMiddleName(value);
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClick = () => {
    handleSubmit();
    if (inputValue) {
      setSubmittedValues([...submittedValues, inputValue]);
      setInputValue("");
    }
  };

  const handleSubmit = () => {
    if (lastName || firstName || middleName) {
      setSubmittedNames([
        ...submittedNames,
        { lastName, firstName, middleName },
      ]);
      setLastName("");
      setFirstName("");
      setMiddleName("");
    }
  };

  return (
    <div>
      <h3>Input Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ListComponent items={submittedValues} />
    </div>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        name="middleName"
        placeholder="Middle Name"
        value={middleName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Submit</button>
      <ListComponent
        items={submittedNames.map(
          (name) => `${name.lastName}, ${name.firstName} ${name.middleName}`
        )}
      />
    </div>
  );
};

export default InputComponent;
