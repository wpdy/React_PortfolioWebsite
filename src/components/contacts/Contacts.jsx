import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import db from '../firebase';

import { collection, addDoc } from "firebase/firestore"; 


import './Contctas.css'



const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleSumbit = async (e) => {
        e.preventDefault()

        if (name.length < 3) {
            alert('Name cant be blank!')
            return
        }
        if (email === '') {
            alert('Email cnat be black!')
            return
        }
        if (message.length < 5) {
            alert('Message cnat be blank!')
            return
        }


        try {
            const docRef = await addDoc(collection(db, "contacts"), {
              client_name: name,
              client_email: email,
              client_message: message,
              created: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error(error);
          }

          setName('')
          setEmail('')
          setMessage('')
    }


  return (
    <div className='formcon'>
       <Form onSubmit={handleSumbit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Control
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="forText">
        <Form.Control 
            as='textarea'
            placeholder="Enter question" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  )
}

export default Contacts