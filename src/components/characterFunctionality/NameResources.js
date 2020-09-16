import React from 'react';
import {Container} from 'reactstrap';

const NameResources = () => {
return(
<Container className="container">
    <h1>Naming Resources</h1>
    <h3>For Your Jane or John Doe</h3>
    <p>Can't think of the perfect name? Here's a few websites that might be able to help.</p>

        <ul>
            <li><a href="https://www.behindthename.com/" target="_blank" > Behind The Name</a></li>
            <li><a href="https://www.babynames.com/" target="_blank">Baby Names</a></li>
            <li><a href="https://www.s-gabriel.org/names/english.shtml" target="_blank">Medieval Names Archive</a></li>
            <li><a href="https://www.behindthename.com/random/" target="_blank">Random Name Generator</a></li>
            
        </ul>
</Container>
)
}

export default NameResources;