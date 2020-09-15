import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal,ModalHeader, ModalBody} from 'reactstrap';

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

        })

    }

return(
    <Modal isOpen={props.modal}>
    <ModalHeader toggle={props.createToggle} charCode="X">Create A New Character</ModalHeader>
    <ModalBody>

    <Form onSubmit={handleSubmit}>
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
    <Input name="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="description"/>
    <Input name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    </FormGroup>
    <Button color="outline-success"  type="submit" onClick={props.createToggle}>Create </Button>
    </Form>
    </ModalBody>
    </Modal>
   
  
)

}
export default CharaCreate;