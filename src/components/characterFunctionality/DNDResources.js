import React from 'react';
import {Container} from 'reactstrap';

const DNDResources = () => {
return(
<Container className="container">
    <h1>DND Resources</h1>
    <h2>For New and Old Fans</h2>
    <p>New to the game or just need a little refresher? Here's a few resources and 
        guides that will get you rolling the dice in no time.</p>
        <hr />
        <h3>Links:</h3>
        <ul>
            <li><a href="https://dnd.wizards.com/" target="_blank" > Official Site</a></li>
            <li><a href="https://dnd.wizards.com/%3Cnolink%3E/basics-play" target="_blank">Gameplay Basics</a></li>
            <li><a href="https://dnd.wizards.com/products/tabletop-games/trpg-resources/trpg-resources" target="_blank">Character Sheets</a></li>
            <li><a href="https://www.dnd-compendium.com/dm-resources" target="_blank">List of Resources for DMs</a></li>
            <li><a href="https://dnd.wizards.com/remote/online_tools" target="_blank">How to Play Online</a></li>
        </ul>
</Container>
)
}

export default DNDResources;