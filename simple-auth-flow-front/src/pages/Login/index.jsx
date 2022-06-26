import './style.sass'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const handleChange = (e, setFormData) => {
    setFormData({
        [e.target.id]: e.target.value
        })
}

const Register = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Username: '',
        Password: ''
    });
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => {
        console.log('data: ', data)
        console.log('formData: ', formData)
    };
    useEffect(() => {

    })

    const fieldsRequired = {
        register: ["Email", "Username", "Password"],
        login: ["Emailusername", "password"],
    }

    const RequireFields = ({ fields }) => {
        return fields.map((field, i) => {
            return (
                errors[field] && errors[field].type === "required" && (
                    <span className="error" key={i} role="alert">{`${field} is required`}</span>
                )
            )
        })
    }


    return (
        <div className="register">
            <h2> Registro </h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <RequireFields fields={fieldsRequired.register} />
                <label htmlFor="Email">Email: </label>
                <input
                    id="Email"
                    aria-invalid={errors.Email ? "true" : "false"}

                    {...register('Email', {
                        required: true,
                        maxLength: 30,
                        onChange: (e) => handleChange(e, setFormData)
                    })}
                />

                <label htmlFor="Username">Username: </label>
                <input
                    id="Username"
                    aria-invalid={errors.Username ? "true" : "false"}
                    {...register('Username', { 
                        required: true, 
                        maxLength: 30,
                        onChange: (e) => handleChange(e, setFormData)
                    })}
                />

                <label htmlFor="Password">Password: </label>
                <input
                    id="Password"
                    aria-invalid={errors.Password ? "true" : "false"}
                    {...register('Password', { 
                        required: true, 
                        maxLength: 30, 
                        minLength: 8,
                        onChange: (e) => handleChange(e, setFormData)
                     })}
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Register