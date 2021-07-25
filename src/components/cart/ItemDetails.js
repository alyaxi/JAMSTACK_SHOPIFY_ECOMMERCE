import React, { Component } from "react";
import { Button, Row, Col, Media, Accordion } from "react-bootstrap";

const styles = {
  mediaItemButtons: {
    paddingTop: "5px",
    paddingBottom: "5px",
    display: "flex"
  }
};

const ItemDetails = ({lineItems})  => {
  console.log(lineItems);
    const {id , quantity, title, variant : {image: {src}, price,compareAtPrice}} = lineItems
    return (
        <>
            
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src={src}
                alt="Generic placeholder"
              />
              
                <p>{title}</p>
                <Row>
                  <Col xs={6}>
                    <strong>{price}</strong>
                    <p style={{textDecoration: "line-through"}}>{compareAtPrice}</p> 
                  </Col>
                  <Col xs={6}>{quantity} piece</Col>
                </Row>

                <Row style={styles.mediaItemButtons}>
                  <Col xs={6}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
              
         

          
          </>
      
     
    );
  }
export default ItemDetails