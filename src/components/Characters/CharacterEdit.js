import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


const CharacterEdit = (props) => {
    const [editName, setEditName]=  useState(props.characterUpdate.name);
    const [editSpecies, setEditSpecies]=  useState(props.characterUpdate.species);
    const [editAge, setEditAge]=  useState(props.characterUpdate.age);
    const [editDescription, setEditDescription]=  useState(props.characterUpdate.description);
     
    const characterUpdate= (event, character) => {
        event.preventDefault();
        fetch(`http://localhost:3000/chara/${character.id}`, {
            method: 'PUT',
            body: JSON.stringify({character: character}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.Auth.sessionToken
            })
        })
        .then((res) => {
            this.setState({updatePressed: false})
            this.fetchCharacters();
        })
    }
    return (
        <Modal isOpen={true} style={{backgroundColor: '#909090' }}>
               <ModalHeader>Create a Character</ModalHeader>
               <ModalBody>
            <Form onSubmit={characterUpdate}>
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
                    <Button type="submit">Update the Character!</Button>
            </Form>
               </ModalBody>
           </Modal>
    )
}

export default CharacterEdit;
