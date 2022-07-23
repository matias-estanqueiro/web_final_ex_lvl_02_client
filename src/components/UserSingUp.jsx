import React from 'react'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'

function UserSingUp() {
    function handleRegister(event) {
        const formRegister = document.getElementById('formRegister')
        event.preventDefault()
        const info = new FormData(formRegister)
        const newUser = {
            name: info.get('name'),
            surname: info.get('surname'),
            birthdate: info.get('birthdate'),
            file: info.get('file'),
            mail: info.get('mail'),
            password: info.get('password'),
            country: info.get('country'),
            state: info.get('state'),
            address: info.get('address'),
            phone: info.get('phone'),
            admin: 'false'
        }
        console.log(newUser)
        fetch('https://api-final-drumat.herokuapp.com/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => console.log(res.json()))
    }

    return (
        <Container className='d-flex justify-content-center align-items-center mt-2' style={{ width: '100vw', height: '70vh' }}>
            <Form id='formRegister' encType='multipart/form-data' className='text-white col-8' onSubmit={handleRegister}>
                <Row className='mt-5'>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor='name'>Name</Form.Label>
                            <Form.Control id='name' name='name' placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='birthdate'>Birthdate</Form.Label>
                            <Form.Control id='birthdate' name='birthdate' placeholder="Enter Birthdate" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='mail'>Email</Form.Label>
                            <Form.Control id='mail' name='mail' type='email' placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='country'>Country</Form.Label>
                            <Form.Control id='country' name='country' placeholder="Enter Country" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='address'>Address</Form.Label>
                            <Form.Control id='address' name='address' placeholder="Enter Address" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor='surname'>Surname</Form.Label>
                            <Form.Control id='surname' name='surname' placeholder="Enter Surname" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='file'>Image Profile</Form.Label>
                            <Form.Control id='file' name='file' type='file' placeholder="Image Profile" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control id='password' name='password' type='password' placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='state'>State</Form.Label>
                            <Form.Control id='state' name='state' placeholder="Enter State" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='phone'>Phone</Form.Label>
                            <Form.Control id='phone' name='phone' placeholder="Enter Phone" />
                        </Form.Group>
                    </Col>
                </Row>
                <Container className='d-flex justify-content-center align-items-center mt-4'>
                    <Button variant="outline-success" type="submit">Submit</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default UserSingUp