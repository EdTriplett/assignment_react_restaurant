import React from "react";
import Button from "./Button.js";

const FormGroup = ({ type, placeholder }) => {
  return (
    <div className="form-group">
      <label>
        {placeholder}
      </label>
      <input
        type={`${type}`}
        className="form-control"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

class Form extends React.Component {
  render() {
    return (
      <div className="Reservation container" id="Reservation">
        <form>
          <FormGroup type="text" placeholder="First Name" />
          <FormGroup type="text" placeholder="Last Name" />
          <FormGroup type="email" placeholder="Email" />
          <FormGroup type="tel" placeholder="Telephone Number" />
          <FormGroup type="date" placeholder="" />
          <FormGroup type="time" placeholder="" />
          <Button color="success" message="Submit Reservation" />
        </form>
      </div>
    );
  }
}

export default Form;
