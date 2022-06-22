import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    //console.log(watch("email")); // watch input value by passing the name of it

    const fieldsRequired = {
        register: ["email", "username", "password"],
        login: ["emailusername", "password"],
    }
    const RequireFields = (...fields) => {
        for (const field of fields) {
            return (
                errors[field] && errors[field].type === "required" && (
                    <span role="alert">{`${field} is required`}</span>
                )
            )
        }
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email">Email: </label>
            <input
                id="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register('email', { required: true, maxLength: 30 })}
            />

            <label htmlFor="username">Username: </label>
            <input
                id="username"
                aria-invalid={errors.username ? "true" : "false"}
                {...register('username', { required: true, maxLength: 30 })}
            />

            <label htmlFor="password">Password: </label>
            <input
                id="password"
                aria-invalid={errors.password ? "true" : "false"}
                {...register('password', { required: true, maxLength: 30, minLength: 8 })}
            />
            <input type="submit" />
            {errors.email && errors.email.type === "required" && (
                    <span role="alert">{`Email is required`}</span>
                )}
        </form>
    );
}

export default Form