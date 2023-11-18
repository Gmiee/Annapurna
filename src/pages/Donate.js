import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import roti from '../Assets/roti.jpg'
import wafers from '../Assets/wfers.jpg'
import pulses from '../Assets/pulses.jpg'
import puff from '../Assets/puff.jpg'
import pulav from '../Assets/pulav.jpg'
import chole from '../Assets/chole.jpg'
const Donate = () => {
  return (
    <>
    <div className="bg">
        <div className='head'>
        <h1 >Things you can donate</h1>
        </div>
    <div className="container"style={{marginTop:'5%'}}>
    <Row xs={1} md={2} className="g-3">

    <Card style={{margin:'auto', width :'18rem',  height:'18rem' }} >
      <Card.Img variant="top" src={pulses} height={'50%'} width={'50%'} style={{objectFit:'contain' , marginTop:'10px'}}  />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}} >Pulses</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ margin:'auto', width :'18rem',height:'18rem' }}>
      <Card.Img variant="top" src={roti} height={'50%'} width={'50%'} style={{aspectRatio:'1/1' , objectFit:'cover', marginTop:'10px' }} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Roti Sabji</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{margin:'auto', width :'18rem',  height:'18rem' }} >
      <Card.Img variant="top" src={puff} height={'50%'} width={'50%'} style={{objectFit:'cover' , marginTop:'10px'}}  />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}} >Puff</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{margin:'auto', width :'18rem',  height:'18rem' }} >
      <Card.Img variant="top" src={pulav} height={'50%'} width={'50%'} style={{objectFit:'cover' , marginTop:'10px'}}  />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Pulav</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{margin:'auto', width :'18rem',  height:'18rem' }} >
      <Card.Img variant="top" src={chole} height={'50%'} width={'50%'} style={{objectFit:'cover' , marginTop:'10px'}}  />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Chole</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ margin:'auto', width :'18rem', height:'18rem' }}> 
      <Card.Img variant="top" src={wafers} height={'50%'} width={'50%'} style={{objectFit:'contain', marginTop:'10px'}} />
      <Card.Body >
        <Card.Title style={{textAlign:'center'}}>Packed Food</Card.Title>
      </Card.Body>
    </Card>
    </Row>
    </div>
    <div className="foot">
        <h4>or any other Non-perishable food item</h4>
    </div>
    </div>
    </>
  )
}

export default Donate
