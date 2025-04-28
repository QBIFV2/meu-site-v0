import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_43qg60x', 'template_k5t68f8', e.target) // Aqui está o novo Template ID
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao enviar a mensagem: ' + error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Seu nome"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Seu e-mail"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Sua mensagem"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contato;
