import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button} from "reactstrap";
import APIURL from '../../helpers/environment';
import CharaCreate from "./CharaCreate";
import CharaTable from "./CharaTable.js";
import CharaEdit from "./CharaEdit";
import NavbarComponent from '../Navbar/Navbar'



const CharaIndex = (props) => {
  const [chara, setChara] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [charaToUpdate, setCharaToUpdate] = useState({});
  const [modal, setModal] = useState(false);

  const fetchCharacters = () => {
    fetch(`${APIURL}/chara`, {
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
    <>
    <Container>
      <NavbarComponent token={props.token} setSessionToken={props.setSessionToken} createToggle={createToggle}/>
      <Row>
        <Col md="2">
          {createActive ? 
          <CharaCreate fetchCharacters={fetchCharacters} token={props.token} createToggle={createToggle} modal={modal}/> : null
        }
        </Col>
        <Col md="8">
          {(chara.length) ? 
          <CharaTable
            chara={chara}
            editUpdateChara={editUpdateChara}
            updateToggle={updateToggle}
            fetchCharacters={fetchCharacters}
            token={props.token}
          /> : ''}
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
    </>
  );
};
export default CharaIndex;
