import React, { useState } from 'react';
// Importamos nuestra lógica de validación
import { validateEmail, validateName } from '../utils/validators';
import './NewsletterForm.css';



function NewsletterForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setError('');
    setSuccess('');

    // --- Validación ---
    if (!validateName(name)) {
    setError('Por favor, ingresa un nombre válido.');
    return;
    }
    if (!validateEmail(email)) {
    setError('Por favor, ingresa un correo electrónico válido.');
    return;
    }
    
    // --- Éxito ---
    // (Aquí es donde en el futuro llamarías a tu API)
    console.log('Datos enviados:', { name, email });
    setSuccess(`¡Gracias por tu interés, ${name}! Recibirás noticias de Azules Esports.`);
    setName('');
    setEmail('');
};

return (
    <div className="newsletter-form-container">
    <h2>¡Recibe más info de Azules!</h2>
    <p>Suscríbete para recibir noticias, acceso a torneos y más.</p>
    
      {/* Mostramos mensaje de éxito o error */}
    {success && <p className="form-success">{success}</p>}
    {error && <p className="form-error">{error}</p>}

      {!success && ( // Ocultamos el form si ya se suscribió
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button type="submit" className="form-button">Suscribirme</button>
        </form>
    )}
    </div>
);
}

export default NewsletterForm;