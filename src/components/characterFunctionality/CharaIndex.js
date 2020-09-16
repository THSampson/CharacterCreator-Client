import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CharaCreate from "./CharaCreate";
import CharaTable from "./CharaTable.js";
import CharaEdit from "./CharaEdit";

const CharaIndex = (props) => {
  const [chara, setChara] = useState([]);
  const [createActive, setCreateActive] = useState(false);
  const [updateActive, setUpdateActive] = useState(false);
  const [charaToUpdate, setCharaToUpdate] = useState({});
  const [modal, setModal] = useState(false);


  const fetchCharacters = () => {
    fetch('http://localhost:3000/chara', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': props.token,
      }),
    })
      .then((response) => response.json())
      .then((charaData) => {
        setChara(charaData);
      });
  };

  const editUpdateChara = (chara) => {
    setCharaToUpdate(chara);
  };

  const updateToggle = () => {
    setUpdateActive(!updateActive);
  };

  
  const createToggle = () => {
    setCreateActive(!createActive);
    setModal(!modal)
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Row>
        <Button onClick={createToggle}color="outline-primary" className="create">Create Character</Button>
        <Col md="2">
          { createActive ? 
          <CharaCreate fetchCharacters={fetchCharacters} token={props.token} createToggle={createToggle} modal={modal} />
         : <div></div> } 
        </Col>
        <Col md="8">
          {(chara.length) ? 
          <CharaTable
            chara={chara}
            editUpdateChara={editUpdateChara}
            updateToggle={updateToggle}
            fetchCharacters={fetchCharacters}
            token={props.token}
          /> : <h1>Create a New Character</h1>}
        </Col>
        {updateActive ? 
          <CharaEdit
            updateToggle= {updateToggle}
            updateActive= {updateActive}
            charaToUpdate={charaToUpdate}
            token={props.token}
            fetchCharacters={fetchCharacters}
          />
        : <div></div>}
      </Row>
    </Container>
  );
};
export default CharaIndex;
