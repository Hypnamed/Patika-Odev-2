import React from "react";
import { Formik } from "formik";

function Form() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "İlke Eren",
          lastName: "Demirtaş",
          email: "ilkeerendemirtas@outlook.com",
          gender: "male",
          hobbies: ["Football", "Programming", "Video Games"],
          nationality: "Turkey",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form>
            <label htmlFor="firstName">First Name </label>
            <input
              id="firstName"
              name="firstName"
              value={values.firstName}
              placeholder="Jane"
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="lastName">Last Name </label>
            <input
              id="lastName"
              name="lastName"
              value={values.lastName}
              placeholder="Doe"
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="email">Email </label>
            <input
              id="email"
              name="email"
              value={values.email}
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />

            <br />
            <br />

            <h3>Gender</h3>
            <label>Male </label>
            <input
              name="gender"
              value={"male"}
              type={"radio"}
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <br />
            <label>Female </label>
            <input
              name="gender"
              value={"female"}
              type={"radio"}
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <label>Leopard 2 </label>
            <input
              name="gender"
              value={"leopard2"}
              type={"radio"}
              onChange={handleChange}
              checked={values.gender === "leopard2"}
            />
            <br />
            <label>Atak Helikopteri </label>
            <input
              name="gender"
              value={"atakhelikopteri"}
              type={"radio"}
              onChange={handleChange}
              checked={values.gender === "atakhelikopteri"}
            />

            <br />
            <br />

            <h3>Hobbies</h3>
            <div>
              <input
                name="hobbies"
                value={"Football"}
                type={"checkbox"}
                onChange={handleChange}
                checked={values.hobbies.includes("Football")}
              />
              Football
            </div>
            <div>
              <input
                name="hobbies"
                value={"Programming"}
                type={"checkbox"}
                onChange={handleChange}
                checked={values.hobbies.includes("Programming")}
              />
              Programming
            </div>
            <div>
              <input
                name="hobbies"
                value={"Video Games"}
                type={"checkbox"}
                onChange={handleChange}
                checked={values.hobbies.includes("Video Games")}
              />
              Video Games
            </div>

            <br />
            <br />

            <select
              name="nationality"
              value={values.nationality}
              onChange={handleChange}
            >
              <option value={"Turkey"}>Turkey</option>
              <option value={"Canada"}>Canada</option>
              <option value={"Sweden"}>Sweden</option>
            </select>

            <br />

            <button type="submit">Submit</button>
            <br />

            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
