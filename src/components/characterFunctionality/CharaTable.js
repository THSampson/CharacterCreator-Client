import React from 'react';
import {Button, Card, CardTitle, CardSubtitle, CardText, CardHeader, CardFooter} from 'reactstrap'
import './CharaTable.css'
import APIURL from '../../helpers/environment';

const CharaTable = (props) => {
    const deleteCharacter = (chara) => {
        fetch(`${APIURL}/chara/${chara.id}`, {
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
                <Card key={index}>
                    <CardHeader tag="h2">{chara.name}</CardHeader>
                    <CardText>{chara.species}</CardText>
                    <CardText>{chara.ageInYears}</CardText>
                    <CardText>{chara.description}</CardText>
                     <CardFooter>
                        <Button color="outline-success" onClick={() => {props.editUpdateChara(chara); props.updateToggle()}}>Update</Button>
                        <Button color="outline-danger" onClick={() => {if(window.confirm(`Are you sure you wish to delete ${chara.name}?`))deleteCharacter(chara)}}>Delete</Button>
                    </CardFooter>
                </Card>
            )
        })
    };

return (
 <div className="main"> 
    <div className="mainDiv">
        <h1>Character List</h1>
           {charaMapper()}
        </div>
    </div>
)
}

export default CharaTable;