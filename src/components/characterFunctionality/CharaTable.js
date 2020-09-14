import React from 'react';
import {Table, Button} from 'reactstrap'

const CharaTable = (props) => {
    
    const charaMapper = () => { 
        return props.chara.map((chara, index) => {
            return(
                <tr key={index}>
                    <td>{chara.name}</td>
                    <td>{chara.species}</td>
                    <td>{chara.ageInYears}</td>
                    <td>{chara.description}</td>
                </tr>

            )
        })
    };

return (
    <>
    <h3>Characters</h3>
    <hr />
    <Table striped>
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