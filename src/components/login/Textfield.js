import React from 'react';
import { ErrorMessage, useField } from 'formik';
import "./styles.css";

export const Textfield = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label style={{margin:2.5}} htmlFor={field.name}>{label}</label>
      <input
        style={{color: '#000', height:30,  background: '#E8E8E8', margin: 2.5,  paddingLeft:5, paddingRight:5, borderRadius:5}}
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage style={{margin:2.5, color: '#ff0000'}} component="div" name={field.name} className="error" />
      
    </div>
)
}