import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "ilkeerendemirtas@outlook.com",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form>
            <label>Email </label>
            <input
              name="email"
              value={values.email}
              type="email"
              onChange={handleChange}
            />

            <br />
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

export default App;
