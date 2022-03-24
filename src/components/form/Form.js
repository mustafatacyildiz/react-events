import { useState } from "react";
import "./styles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");

  console.log(name);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleSubmit = (e)=> {
    e.preventDefault();
    alert(`
    userName : ${name}
    email : ${email}
    pass : ${pass}
    country : ${country}
    `)
    setName("")
    setEmail("")
    setPass("")
    setCountry("")
  };
  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit ={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {name}</strong>
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleName}
            defaultValue="Jane"
            value = {name}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {email} </strong>
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleEmail}
            value = {email}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {pass} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            onChange={handlePassword}
            value = {pass}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {country} </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="country"
            onChange={handleCountry}
            value={country}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;