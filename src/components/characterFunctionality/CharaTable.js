import React from 'react';
import {Table, Button} from 'reactstrap'

const CharaTable = (props) => {
    const deleteCharacter = (chara) => {
        fetch(`http://localhost:3000/chara/${chara.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchCharacters())
    }
    const charaMapper = () => { 
        return props.chara.map((chara, index) => {
            return(
                <tr key={index}>
                    <td>{chara.name}</td>
                    <td>{chara.species}</td>
                    <td>{chara.ageInYears}</td>
                    <td>{chara.description}</td>
                    <td>
                        <Button color="outline-success"  onClick={() => {props.editUpdateChara(chara); props.updateToggle()}}>Update</Button>
                        <Button color="outline-danger" onClick={() => { if (window.confirm(`Are you sure you wish to delete ${chara.name}`)) deleteCharacter(chara)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    };

return (
    <>
    <h3>Characters</h3>
    <hr />
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Name</th>
                <th>Species</th>
                <th>Age</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {charaMapper()}
        </tbody>
    </Table>
    </>
)
}
export default CharaTable;