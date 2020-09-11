import React from 'react';

const CharaDelete = (props) => {
    const deleteCharacter = (character) => {
        fetch(`http://localhost:3000/chara/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({chara: {id: event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.Auth.sessionToken
            })
        })
        .then(() => props.fetchCharacters())
    }
    
    const characterMapper = () => {
        return props.characters.map((character, index) => {
                return (
                    <tr key={index}>
                    <th scope="row">{character.id}</th>
                    <td>{character.name}</td>
                    <td>{character.species}</td>
                    <td>{character.age}</td>
                    <td>{character.description}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                    </td>
                </tr>
                )
            }
        )}
    }
    const CharaDelete = () => {
        return (
            <div>
             <h2> Character History</h2>
             <Table striped>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Species</th>
                      <th>Age</th>
                      <th>Description</th>
                  </tr>
              </thead>
              <tbody>
                  {characterMapper()}
              </tbody>
          </Table>
        </div>
    )
}


export default CharaDelete;
