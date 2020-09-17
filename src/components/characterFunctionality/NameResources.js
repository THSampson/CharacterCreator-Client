import React from 'react';
import {Container} from 'reactstrap';

const NameResources = () => {
return(
<Container className="container">
    <h1>Naming Resources</h1>
    <h2>For Your Jane or John Doe</h2>
    <p>Can't think of the perfect name? Here's a few websites that might be able to help.</p>
    <hr />
        <ul>
            <h3>Links:</h3>
            <li><a href="https://www.behindthename.com/" target="_blank" > Behind The Name</a></li>
            <li><a href="https://www.babynames.com/" target="_blank">Baby Names</a></li>
            <li><a href="https://www.s-gabriel.org/names/english.shtml" target="_blank">Medieval Names Archive</a></li>
            <li><a href="https://www.behindthename.com/random/" target="_blank">Random Name Generator</a></li>
            </ul>
</Container>
)
}

export default NameResources;