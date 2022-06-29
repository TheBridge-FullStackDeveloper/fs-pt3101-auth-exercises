import './style.sass'
import React, { useContext, useEffect, useState } from "react";
//import { useForm } from "react-hook-form";
import authContext from "../../context/authContext"
import { useNavigate } from "react-router-dom";


const Register = ({ registerUser, loginUser }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const { user, setUser } = useContext(authContext)

    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/profile')
        }
      }, [user])
      

    return (
        <div className="register">
            <h2> Register </h2>
                <label htmlFor="Email">Email: </label>
                <input
                    id="Email"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                />

                <label htmlFor="Username">Username: </label>
                <input
                    id="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                />

                <label htmlFor="Password">Password: </label>
                <input
                    id="Password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                />
                <button
                    onClick={() => {
                        registerUser({
                            email,
                            password,
                            username,
                        });
                    }}
                >
                    Sign Up
                </button>
                <button
                    onClick={() => {
                        loginUser(
                            {
                                email,
                                password,
                                username,
                            },
                            setUser
                        );
                    }}
                >
                    Login
                </button>
        </div>
    );
}

export default Register

      /* TRIED TO DO A HANDLECHANGE FOR ALL INPUTS 
      const handleChange = (e, setFormData) => {
          setFormData({
              [e.target.id]: e.target.value
          })
          console.log(`${e.target.id} :`, e.target.value,)
          console.log('formData: ', formData)
      } */
  
  
      /* COULDN'T DO IT WITH REACT FOOK FORM USING THE SUBMIT
      const onSubmit = data => {
          console.log('data: ', data)
      };
      const { register, handleSubmit, formState: { errors } } = useForm();
      
      const fieldsRequired = ["Email", "Username", "Password"];
      const RequireFields = ({ fields }) => {
          return fields.map((field, i) => {
              return (
                  errors[field] && errors[field].type === "required" && (
                      <span className="error" key={i} role="alert">{`${field} is required`}</span>
                      )
                      )
                  })
              }
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
              </form>
      
      
      */