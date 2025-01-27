import React from "react";
import ReactDOM from "react-dom/client";

const FormPractise = () => {
  const SignUp = (formData) => {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const empStatus = formData.get("empStatus");
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    // const favColor = formData.get("favColor");
    // console.log(favColor);

    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    
    const alldata = {
      ...data,
      dietaryRestrictions
    }
    console.log(alldata);
  };

  return (
    <>
      <h1>Signup form</h1>
      <form action={SignUp}>
        <label>Email : </label>
        <input
          id="email"
          defaultValue="xyz@gmail.com"
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <label>Password : </label>
        <input id="password" type="password" name="password" />
        <br />
        <label>Description: </label>
        <textarea id="description" name="description"></textarea>
        <br />
        <fieldset style={{ display: "flex", flexDirection: "column" }}>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="empStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input
              type="radio"
              name="empStatus"
              defaultChecked={true}
              value="Full-Time"
            />
            Full-Time
          </label>
          <label>
            <input type="radio" name="empStatus" value="Part-Time" />
            Part-Time
          </label>
        </fieldset>
        <br />
        <fieldset style={{ display: "flex", flexDirection: "column" }}>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="Vegan"
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="Gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label>What is your favorite color </label>
        <select name="favColor" defaultValue="Choose a color" required>
        <option value="Choose a color" disabled>--- Choose a color ---</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormPractise;
