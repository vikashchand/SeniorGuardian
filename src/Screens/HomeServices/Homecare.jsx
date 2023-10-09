import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './HomeServices.css';
import {BiLogoWhatsapp} from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const HomeServices = () => {
  const services = [
    {
      name: 'Shopping Assistance',
      whatsapp: '8448520755', // Replace with the actual WhatsApp number
    },
    {
      name: 'Birthday/Social  Organization',
      whatsapp: '8448520755', // Replace with the actual WhatsApp number
    },
    {
      name: 'Mental Support from NGOs',
      whatsapp: '9655836135', // Replace with the actual WhatsApp number
    },
    {
      name: 'Cooking Assistance',
      whatsapp: '6374783198', // Replace with the actual WhatsApp number
    },
    {
      name: 'Cleaning Assistance',
      whatsapp: '6374783198', // Replace with the actual WhatsApp number
    },
    {
      name: 'Home Care Assistance',
      whatsapp: '7551067902', // Replace with the actual WhatsApp number
    },
  ];

  const serviceSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{1,10}$/, 'Phone number must contain between 1 to 10 digits'),
  
    email: Yup.string().email('Invalid email format'),
    description: Yup.string().required('Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      description: '',
      email: '',
      dateTime: '',
      selection: '',
    },
    validationSchema: serviceSchema,
    onSubmit: async (values) => {
      try {
        // Send the form data to the backend API for storage
       
        const response = await axios.post('https://seniorguardianbackend.vercel.app/api/submitForm', values);

        
        if (response.status === 200) {
          // Form data was successfully sent to the backend
          console.log('Form data sent successfully');
          toast.success("Form data sent successfully");
        } else {
          console.error('Failed to send form data to the backend');
          toast("Failed to send form data to the backend");
          
        }
      } catch (error) {
        console.error('An error occurred while sending form data:', error);
        toast.error(error);
      }

      // You can also send a WhatsApp message here using the WhatsApp API
      // ...
    },
  });

 

  const handleServiceClick = (serviceName) => {
    formik.setFieldValue('selection', serviceName);
  };

  return (
    <div className="Homecareservices">
      <br />
      <br />
      <br />
      <h1>"For urgent matters, WhatsApp us. Otherwise, use the form." </h1>
      <br/>
      
      <div className='service-list features'>
      
        {services.map((service) => (
          <div
            key={service.name}
            className={`feature ${formik.values.selection === service.name ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.name)}
          >
            {service.name}

             <button
              className="whatsapp-button"

              onClick={() => {
                // Replace '91xxxxxxxxxx' with the actual WhatsApp number for this service
                const whatsappNumber = service.whatsapp;
                window.open(`http://wa.me/${whatsappNumber}`, '_blank');
              }} 
            >
            <BiLogoWhatsapp/></button>
            <ToastContainer> </ToastContainer>
          </div>
        ))}



      </div>
      
    

      {formik.values.selection && (
        <div className="service-form">
          <h2>Service Request Form - {formik.values.selection}</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className='n'>
              <div className="form-group">
              
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  
                />

                
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
               
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="description"
                placeholder="Description of Service Required"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
           
            </div>
            <button className='btn' type="submit">Submit</button>
           
          </form>
       
        </div>
      )}
    </div>
  );
};

export default HomeServices;
