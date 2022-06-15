import {Formik, Form } from 'formik' ;

import { Textfield } from './Textfield';
import * as Yup from 'yup';



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
        validationSchema={validate}>
           {formik => (
              <div>
                  <h1 >
                         Sign Up
                  </h1>
                  {console.log(formik.values)}
                  <Form>
                    <Textfield label="First Name" name="firstName" type="text" />
                    <Textfield label="Last Name" name="lastName" type="text" />
                    <Textfield label="Email" name="email" type="email" />
                    <Textfield label="Password" name="password" type="password" />
                    
                  
                       <label>Select</label> <br></br>
                       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                       <label for="vehicle1">  Option 1</label><br></br>
                       <input type="checkbox" id="vehicle2" name="vehicle2" value="nike"></input>
                       <label for="vehicle2"> Option 2</label><br></br>
                       <input type="checkbox" id="vehicle3" name="vehicle3" value="like"></input>
                       <label for="vehicle3"> Option 3</label><br></br>

                        <label>Gender</label> <br></br> 
                        <input type="radio" id="html" name="fav_language" value="HTML">
                        </input>
                        <label for="html">Male</label> <br></br>
                        <input type="radio" id="css" name="fav_language" value="CSS">
                        </input>
                        <label for="css">Female</label> <br></br>
                      

                     <button className='btn btn-dark mt-3' type='submit'> Register  </button>
                    <button className='btn btn-danger' id='reset' type='reset'> Reset  </button> 
                    
  
          
            
           
          
                  </Form>
              </div>
           )}
        </Formik>
     );
}

export default Loginform;