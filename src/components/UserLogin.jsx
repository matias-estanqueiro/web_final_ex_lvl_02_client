import React from 'react'
import {Button, Container, Form} from 'react-bootstrap'

function UserLogin() {
    function handleSubmit(event) {
        const formLogin = document.getElementById('formLogin')
        const data = new FormData(formLogin)
        console.log('function handleSubmit')
        event.preventDefault()
        const info = {
            mail: data.get('mail'),
            password: data.get('password')
        }
        console.log(info)
        fetch('https://api-final-drumat.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => console.log(res.json()))
            .catch(user => localStorage.setItem('token', user.token_info.token))
        
    }
    
    return (
        <Container className='d-flex justify-content-center align-items-center mt-2' style={{ width: '100vw', height: '70vh' }}>
            <Form id='formLogin' className='text-white col-5' onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id='mail' type='email' name='mail' placeholder='Enter email' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control id='password' type='password' name='password' placeholder='Enter password' />
                </Form.Group>
                <Container className='d-flex justify-content-center align-items-center mt-2'>
                    <Button variant="outline-success" type="submit">Submit</Button>
                </Container>
                <p className='forgot-password text-right'>
                    Forgot <a href='/'>password?</a>
                </p>
            </Form>
        </Container>
        
    )
}

export default UserLogin
