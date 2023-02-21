import React from "react"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const style = {
  backgroundDescCard:{
    backgroundColor:"#F6E6DA"
  },
  cardTitle:{
    fontWeight:"bold"
  }
}

export default function Cardlist(){
  return(
    <CardGroup className="p-0">
      <Card className="mx-3">
        <Card.Img variant="top" src="Rectangle 4.png" />
        <Card.Body  style={style.backgroundDescCard}>
          <Card.Title style={style.cardTitle} className="mb-3">RWANDA Beans</Card.Title>
          <Card.Text>
            Rp.299.900
          </Card.Text>
          <Card.Text>
          Stock: 200
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-3">
        <Card.Img variant="top" src="Rectangle 4-1.png" />
        <Card.Body  style={style.backgroundDescCard}>
          <Card.Title style={style.cardTitle}  className="mb-3">ETHIOPIA Beans</Card.Title>
          <Card.Text>
            Rp.109.900
          </Card.Text>
          <Card.Text>
            Stock: 99
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="mx-3">
        <Card.Img variant="top" src="Rectangle 4-2.png" />
        <Card.Body  style={style.backgroundDescCard}>
          <Card.Title style={style.cardTitle}  className="mb-3">GUETEMALA Beans</Card.Title>
          <Card.Text>
            Rp.300.900
          </Card.Text>
          <Card.Text>
             Stock: 99
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="mx-3">
        <Card.Img variant="top" src="Rectangle 4-3.png" />
        <Card.Body  style={style.backgroundDescCard}>
          <Card.Title style={style.cardTitle}  className="mb-3">NICARAGUA Beans</Card.Title>
          <Card.Text>
            Rp.250.900
          </Card.Text>
          <Card.Text>
            Stock: 352
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    )
}