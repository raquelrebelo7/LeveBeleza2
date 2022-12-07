import React from 'react';
import '../../App.css';
import {useState} from 'react'

function Agenda() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };

  return (
    <form class="formag" onSubmit={handleSubmit}>
      <ul>
        <li>
          <h2>Agendamento</h2>
        </li>
      <li>
      <input type="text" name="name" placeholder="nome" onChange={handleInputChange} value={formValues.name || ''} />
      </li>
      <li>
      <input type="text" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''} />
      </li>
      <li>
        <p>Horário:</p>
      <select name="language" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="hora">11:00</option>
        <option value="hora">11:30</option>
        <option value="hora">13:30</option>
        <option value="hora">14:00</option>
        <option value="hora">14:30</option>
        <option value="hora">15:00</option>
        <option value="hora">15:30</option>
        <option value="hora">16:00</option>
        <option value="hora">16:30</option>
        <option value="hora">17:00</option>
      </select>
      </li>
      
      <li>
      <textarea name="bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea>
      </li>
      <li>
        <p>Nos siga nas redes sociais:</p>
      </li>
      <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://pt-br.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
      <li>
      <button class="but" type="submit">Enviar</button>
      </li>
      </ul>
    </form>
  );
}

export default Agenda;