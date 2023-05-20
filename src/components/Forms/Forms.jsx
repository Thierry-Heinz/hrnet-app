import React, { useContext, useRef } from "react";
import { EmployeeContext } from "../../utils/context/EmployeeContext";
import { departments } from "./departments";
import { states } from "./states";
import { ModalContext } from "../../utils/context/ModalContext";
import { FormStyled } from "./style";

const Forms = () => {
  const { handleEmployee } = useContext(EmployeeContext);
  const { handleModal } = useContext(ModalContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthDateRef = useRef();
  const startDateRef = useRef();

  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();

  const departmentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEmployee({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: birthDateRef.current.value,
      startDate: startDateRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zipCode: zipCodeRef.current.value,
      department: departmentRef.current.value,
    });
    handleModal();

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    birthDateRef.current.value = "";
    startDateRef.current.value = "";
    streetRef.current.value = "";
    cityRef.current.value = "";
    stateRef.current.value = "";
    zipCodeRef.current.value = "";
    departmentRef.current.value = "";
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <span>First Name</span>
        <input ref={firstNameRef} type="text" id="firstName" required />
      </label>
      <label htmlFor="lastName">
        <span>Last Name</span>
        <input ref={lastNameRef} type="text" id="lastName" required />
      </label>
      <label htmlFor="birthDate">
        <span>Birth Date</span>
        <input ref={birthDateRef} type="date" id="birthDate" required />
      </label>
      <label htmlFor="startDate">
        <span>Start Date</span>
        <input ref={startDateRef} type="date" id="startDate" required />
      </label>

      <fieldset>
        <legend>Address</legend>
        <label htmlFor="street">
          <span>Street</span>
          <input ref={streetRef} type="text" id="street" required />
        </label>
        <label htmlFor="city">
          <span>City</span>
          <input ref={cityRef} type="text" id="city" required />
        </label>
        <label htmlFor="state">
          <span>State</span>
          <select ref={stateRef} id="state" name="state">
            {states.map((state, i) => (
              <option key={`${state}-${i}`} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="zipCode">
          <span>Zip code</span>
          <input ref={zipCodeRef} type="number" id="zipCode" required />
        </label>
      </fieldset>

      <label htmlFor="department">
        <span>Departement</span>
        <select ref={departmentRef} id="departement" name="departement">
          {departments.map((department, i) => (
            <option key={`${department}-${i}`} value={department.value}>
              {department.name}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Save" />
    </FormStyled>
  );
};
export default Forms;
