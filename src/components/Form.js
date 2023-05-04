import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>ADANBAGH ATTENDENCE MANAGEMENT SYSTEM</span>

          <form
            id="form"
            className="flex flex-col"
          >
            <FontAwesomeIcon icon={faUser} className="Icon1" />
            <input
             type="email"
            placeholder="Enter Email"
            />
            <FontAwesomeIcon icon={faLock} className="Icon1" />
            <input
              type="password"
              placeholder="Password"
              
            />
            <button className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
}
