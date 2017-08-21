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
      <div id="Reservation">
      <h3> Make a Reservation </h3>
        <form>
          <FormGroup type="text" placeholder="First Name" />
          <FormGroup type="text" placeholder="Last Name" />
          <FormGroup type="email" placeholder="Email" />
          <FormGroup type="tel" placeholder="Telephone Number" />
          <FormGroup type="date" placeholder="Date" />
          <FormGroup type="time" placeholder="Time" />
          <Button color="success" message="Submit Reservation" />
        </form>
      </div>
    );
  }
}

export default Form;
