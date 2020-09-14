import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CharaCreate from "./CharaCreate";
import CharaTable from "./CharaTable.js";
import CharaEdit from "./CharaEdit";

const CharaIndex = (props) => {
  console.log(props);
  const [chara, setChara] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [charaToUpdate, setCharaToUpdate] = useState({});

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
    console.log(chara);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="4">
          <CharaCreate fetchCharacters={fetchCharacters} token={props.token} />
        </Col>
        <Col md="8">
          {(chara.length) ? 
          <CharaTable
            chara={chara}
            editUpdateChara={editUpdateChara}
            updateOn={updateOn}
            fetchCharacters={fetchCharacters}
            token={props.token}
          /> : <h1>Create a New Character</h1>}
        </Col>
        {updateActive ? 
          <CharaEdit
            charaToUpdate={charaToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchCharacters={fetchCharacters}
          />
        : <div></div>}
      </Row>
    </Container>
  );
};
export default CharaIndex;
