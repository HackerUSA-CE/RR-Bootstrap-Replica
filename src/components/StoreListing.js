import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"


function StoreListing() {
    return(
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                
                    <Row>                  
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>   
                    </Row>
                    
                    <Col sm="1"></Col>
                    
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />    
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>    
                    </Row> 
                    
                    <Col sm="1"></Col>
                    
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/287/3487908a-9bac-4272-a59a-255e4f90c9bd.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>

                </Row>
            

                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px"}} >
                        <Row>
                            <Col xs=".5" >
                                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                            </Col>
                            <Col style={{textAlign: "left"}}>
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                        <Col sm="1"></Col>
                        <Row >
                            <Col xs=".5">
                                <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                            </Col>
                            <Col style={{textAlign: "left"}}>
                                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                        <Col sm="1"></Col>
                        <Row >
                            <Col xs=".5" >
                                <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/287/3487908a-9bac-4272-a59a-255e4f90c9bd.png" roundedCircle />
                            </Col>
                            <Col md="6">
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                </Row>


            </Container>
        </div>
    )
}

export default StoreListing
