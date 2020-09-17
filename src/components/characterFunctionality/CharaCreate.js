import React, {useState} from 'react';
import './CharaCreate.css';
import {Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';
import APIURL from '../../helpers/environment';

const CharaCreate = (props) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
          let charaObject = {
            name: name,
            species: species,
            age: age,
            description: description
        }
        fetch('http://localhost:3000/chara', {
            method: 'POST',
            body: JSON.stringify(charaObject),
            headers: new Headers({
            'Content-Type': 'application/json', 
            'authorization': props.token
            })
        })
        .then(response => response.json())
        .then((charaData) => {
        setName('')
        setSpecies('')
        setAge('')
        setDescription('');
        props.fetchCharacters();
        props.createToggle();
        })
    }
    const closeBtn = <Button className="close" onClick={props.createToggle}>X</Button>
return(
    <>
    <Form onSubmit={handleSubmit}>
    <Modal isOpen={props.modal} toggle={props.createToggle} className="createMain">
    <ModalHeader toggle={props.createToggle} close={closeBtn}>Create</ModalHeader>
    <ModalBody>
    <Form onSubmit={handleSubmit} className="createForm">
    <FormGroup>
    <Label htmlFor="name"/>
    <Input name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="species"/>
    <Input name="species" placeholder="species" value={species} onChange={(e) => setSpecies(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="age"/>
    <Input type="number" min="0" name="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="description"/>
    <Input name="description" type="textarea" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    </FormGroup>
     <Button color="outline-success"  type="submit" >Create </Button>
    </Form>
    </ModalBody>
    </Modal>
    </Form>
    </>

)
}
export default CharaCreate;