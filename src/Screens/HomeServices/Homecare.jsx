import React, { useState } from 'react';
import './HomeServices.css';

const HomeServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    email: '',
    dateTime: '',
    selection: '',
  });

  const [serviceClicked, setServiceClicked] = useState(null);

  const handleServiceClick = (serviceName) => {
    setServiceClicked(serviceName);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to an API or perform any desired action
    console.log(formData);
    // You can also send an email with the form data
    // Implementing email sending functionality is beyond the scope of this example.
  };

  const services = [
    {
      name: 'Shopping Assistance',
      whatsapp: '1234567890', // Replace with the actual WhatsApp number
    },
    {
      name: 'Birthday/Social Gathering Organization',
      whatsapp: '9876543210', // Replace with the actual WhatsApp number
    },
    {
      name: 'Mental Support from NGOs',
      whatsapp: '5555555555', // Replace with the actual WhatsApp number
    },
    {
      name: 'Cooking Assistance',
      whatsapp: '8888888888', // Replace with the actual WhatsApp number
    },
    {
      name: 'Cleaning Assistance',
      whatsapp: '9999999999', // Replace with the actual WhatsApp number
    },
    {
      name: 'Home Assistance',
      whatsapp: '7777777777', // Replace with the actual WhatsApp number
    },
  ];

  return (
    <div className="Homecareservices">
    <br></br>
    <br></br>
    <br></br>
      <div className='service-list features'>
        {services.map((service) => (
          <div 
  key={service.name}
  className={`feature ${serviceClicked === service.name ? 'active' : ''}`}
  onClick={() => handleServiceClick(service.name)}
>
  {service.name}
</div>

        ))}
      </div>

      {serviceClicked && (
        <div className="service-form">
          <h2>Service Request Form - {serviceClicked}</h2>
          <form onSubmit={handleSubmit}>
          <div className='n'>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>
            </div>
            <div className="form-group">
              <textarea
                name="description"
                placeholder="Description of Service Required"
                value={formData.description}
                onChange={handleFormChange}
                required
              />
            </div>
           
           
            <button type="submit">Submit</button>
          </form>
          <p>Contact via WhatsApp: {services.find((service) => service.name === serviceClicked).whatsapp}</p>
        </div>
      )}
    </div>
  );
};

export default HomeServices;
