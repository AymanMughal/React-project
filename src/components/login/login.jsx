import {Formik, Form, Field } from 'formik' ;

import { Textfield } from './Textfield';
import * as Yup from 'yup';
import "./styles.css";
import auth from '../../api/auth';
import axios from 'axios';



export const Loginform = () => {
    const validate  = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),

        password: Yup.string()
        .min(6,'Password must be 6 characters')
        .required('Required'),

        
    })

    

    return ( 
        <Formik
        initialValues={{
            firstName:'' ,
            lastName: '',
            email: '',
            password: '',
        } }
        
        validationSchema={validate} 
        onSubmit={async (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            await axios.post('https://ayman-be.herokuapp.com/api/users', {values}).then(res => {  
                alert(JSON.stringify(values, null, 2));
             })  
            .catch(err => {  
                // alert(err)
            })
          }}>
            
           {formik => (
               <section className='login_section'>
              <div className='login_container login_flex'>
                  <h1 style={{margin:2.5}}>Sign Up</h1>
                  {console.log(formik.values)}

                  <Form className='signUpForm'>
                    <Textfield label="First Name" name="firstName" type="text" />
                    <Textfield label="Last Name" name="lastName" type="text" />
                    <Textfield label="Email" name="email" type="email" />
                    <Textfield label="Password" name="password" type="password" />
                    <label style={{margin:2.5}}>Select</label>
                    <Field style={{color: '#000', height:30,  background: '#E8E8E8', margin: 2.5,  paddingLeft:5, paddingRight:5, borderRadius:5}} as="select" name="option">
                        <option value="Bike">Bike</option>
                        <option value="Car">Car</option>
                        <option value="Cycle">Cycle</option>
                    </Field>  
                    <br/>
                    <label style={{margin:2.5,}}>Gender</label>
                    <Field style={{color: '#000', height:30,  background: '#E8E8E8', margin: 2.5,  paddingLeft:5, paddingRight:5, borderRadius:5}} as="select" name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Field>  
                    <br/>
                     <button style={{color: '#000', height:30,  background: '#E8E8E8', margin: 2.5,  padding:5, borderRadius:5}} className='btn btn-dark mt-3' type='submit'> Register  </button>
                    <button style={{color: '#000', height:30,  background: '#E8E8E8', margin: 2.5,  padding:5, borderRadius:5}} className='btn btn-danger' id='reset' type='reset'> Reset  </button> 
                  </Form>
              </div>
              </section>
           )}
           
        </Formik>
        
        
     );
     
}

export default Loginform;