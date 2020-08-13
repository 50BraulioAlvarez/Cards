import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ace1 from './assets/ace1.jpg'

function App() {
  return (
    <div className='container'>
    <div className="App row">
      <Card style={{ width: '18rem', bottom: '5px', top:'3px', right: '20px'}} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body className='body'>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', bottom: '5px',  top:'3px' }} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', bottom: '5px', top:'3px', left: '20px'}} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>

<div className='app row'>
<Card style={{ width: '35rem', top: '10px', right: '20px' }} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body className='body'>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{  width: '35rem', top: '10px'}} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body className='body'>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '35rem', top: '10px', left: '20px' }} className='col-4'>
  <Card.Img variant="top" src={ace1} />
  <Card.Body className='body'>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
</Card>
 </div>
 </div>
 </div>
 
  );
}

export default App;
