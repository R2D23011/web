import React, { useState } from 'react';import emailjs from '@emailjs/browser';
import './contacto.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Quisiera mas informacion acerca de...',
    number: '+56'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email' && !isValidEmail(value)) {
      setError('Email inválido');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setError('Email inválido');
      return;
    }

    emailjs.send('serviciosintegralesdel', 'template_jo4mq9t', formData, 'gHC5h_szZ4kxq7V-b')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado exitosamente!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje.');
      });
  };

  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20soy%20${formData.name}%20y%20mi%20correo%20es%20${formData.email}.%20${formData.message}`

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Nombre Apellido'
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='mail@example.com'
          required
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="number">Numero de Telefono</label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          minLength={12}
          maxLength={12}
          placeholder='+56987705157'
          required
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          minLength={20}
          maxLength={500}
          required
        ></textarea>
      </div>
      <button className='buttonform' type="submit">Enviar</button>
      <a href={whatsappLink} className="btnn" target="_blank" rel="noopener noreferrer">
        Contactar por WhatsApp
      </a>
    </form>
  );
}

export default ContactForm;

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
