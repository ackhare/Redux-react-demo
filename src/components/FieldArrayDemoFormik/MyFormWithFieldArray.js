import { Formik, FormikProps, Form, Field, ErrorMessage, FieldArray } from 'formik';
import React from 'react';
class MyFormWithFieldArray extends React.Component {
  
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {

    setSubmitting(false);
    return;
  }
   
  render() {

    let vehicles = [
      'car',
      'motorcycle',
      'airplane',
      'rocket'
    ];
     
    return(
      <Formik
        initialValues={{
          vehicles: vehicles
        }}
        validate={(values) => {
          let errors = [];
         
          if(!values.vehicles.length)
            errors.vehicles = "At least one vehicle is required";
          return errors;
        }}

        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form>
              <FieldArray
                name='vehicles'
                render={arrayHelpers => (
            	   <div>         
                   {formProps.values.vehicles.map((vehicle, index) => (           
                     <div key={index}>
							       
                      {/* Edit the value here */}
                      <Field 
                        name={`vehicles.${index}`} 
                       />     
							         
                       {/* Remove this vehicle */}
                       <button 
                         type="button"
                         onClick={() => arrayHelpers.remove(index)}
                        >Remove</button>
							      
                       {/* Add a new empty vehicle at this position */}
                       <button 
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')}
                       >Add Vehicle at this index</button>      
                     </div>
                  ))}

                  {/* Add a new empty vehicle at the end of the list */}
                  <button 
                    type="button"
                    onClick={() => arrayHelpers.push('')}
                  >Add Vehicle</button>
                 </div>
            	  )}
            	/>
              </Form>
          );
        }}
      />);
  }
}
export default MyFormWithFieldArray;