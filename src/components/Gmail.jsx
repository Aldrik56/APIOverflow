import React, { useState } from 'react';
import axios from 'axios';

const Gmail = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [subject, setSubject] = useState('Pesan dari ' + nama);
  const [file, setFile] = useState(null);
  const baseUrl = "http://localhost:3000";

  function sendEmail(e) {
    e.preventDefault();

    setSubject('Pesan dari ' + nama);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', pesan);
    formData.append('file', file);

    axios.post(`${baseUrl}/email/sendEmail`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    })
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  }

  return (
    <div>
      <input id="email" onChange={(event) => setEmail(event.target.value)} type="text" />
      <input id="nama" onChange={(event) => setNama(event.target.value)} type="text" />
      <textarea id="pesan" onChange={(event) => setPesan(event.target.value)}></textarea>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <button onClick={sendEmail}>Send Email</button>
      <br/>
    </div>
  );
};

export default Gmail;
