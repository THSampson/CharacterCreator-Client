import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


const CharaEdit = (props) => {
    const [editName, setEditName]=  useState(props.charaToUpdate.name);
    const [editSpecies, setEditSpecies]=  useState(props.charaToUpdate.species);
    const [editAge, setEditAge]=  useState(props.charaToUpdate.ageInYears);
    const [editDescription, setEditDescription]=  useState(props.charaToUpdate.description);
     
    const charaUpdate= (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/chara/${props.charaToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({name: editName, species: editSpecies, ageInYears: editAge, description: editDescription}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((response) => {
            props.fetchCharacters();
            props.updateToggle();

        })

    }
    return (
        <Modal isOpen={props.updateActive} className="main" >
               <ModalHeader toggle={props.updateToggle} charCode="X" className="X">Update</ModalHeader>
               <ModalBody>
            <Form onSubmit={charaUpdate}>
                <FormGroup>
                    <Label htmlFor="name"> Edit Name: </Label>
                    <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="species"> Edit Species: </Label>
                    <Input name="species" value={editSpecies} onChange={(e) => setEditSpecies(e.target.value)}  />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="age"> Edit Age: </Label>
                    <Input name="age" value={editAge} onChange={(e) => setEditAge(e.target.value)}  />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description"> Edit Description: </Label>
                    <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}  />
                </FormGroup>
                    <Button type="submit" color="outline-success" >Update the Character!</Button>
            </Form>
               </ModalBody>
           </Modal>
    )
}

export default CharaEdit;
