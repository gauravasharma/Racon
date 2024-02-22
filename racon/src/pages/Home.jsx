
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homepage from '../Images/homepage.PNG'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mission from '../Images/mission.jpg'
import values from '../Images/values.PNG'
import culture from '../Images/culture.jpg'
import Stack from 'react-bootstrap/Stack';
import hyatt from '../Images/hyatt.png'
import sheraton from '../Images/sheraton.jpg'
import mariott from '../Images/mariott.jpg'

export default function Home()
{
     return (
         <>       
          <Container fluid>
            <Row style={{marginTop:'0.5rem'}}>
            <Col>
                <Row style={{height:'75%'}}>
                    <Col><img src={homepage} width="100%" height="82%"></img></Col>
                </Row>
                <Row style={{marginTop:'-6rem' }}>
                    <Col>
                        <Card style={{ width: '26rem' }}>
                        <Card.Img variant="top" src={mission} height='180rem' />
                        <Card.Body>
                            <Card.Title>Misson</Card.Title>
                            <Card.Text style= {{fontStyle:'italic', fontWeight:'300'}}>
                             "To identify, analyze and recruit key resources that empower business to achieve their organizational goals, becoming their valued partner in success."
                            </Card.Text>
                            <Card.Link href="#">Read more</Card.Link>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{ width: '27rem' }}>
                        <Card.Img variant="top" src={values}  height='180rem'/>
                        <Card.Body>
                            <Card.Title>Values</Card.Title>
                            <Card.Text style= {{fontStyle:'italic', fontWeight:'300'}}>
                            Committed to excellence, integrity, client success and mutual respect, we empower business to achieve their organizational goals.
                            </Card.Text>
                            <Card.Link href="#">Read more</Card.Link>
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{ width: '27rem' }}>
                        <Card.Img variant="top" src={culture} height='180rem'/>
                        <Card.Body>
                            <Card.Title>Culture</Card.Title>
                            <Card.Text style= {{fontStyle:'italic', fontWeight:'300'}}>
                            Customer-centric approach,collaboration, adaptability, respect, work-life balance, integrity, innovation, celebrating success and open communication
                            </Card.Text >
                            <Card.Link href="#">Read more</Card.Link>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
            </Col>
            <Col xs={4}>
                <Row style={{marginBottom: '0.5rem'}}>
                    <Col >
                        <Card style={{ width: '41rem', zIndex: '-1' , backgroundColor:'#0f172a', color: 'white', fontFamily: 'Georgia, Times New Roman, Times, serif'}}>
                        <Card.Body>
                            <Card.Title >Client & Partners</Card.Title>
                            <Card.Text>
                            </Card.Text>

                        </Card.Body>
                        </Card>
                   </Col>
                   </Row>
                <Row style={{marginBottom: '0.5rem'}}><Col>
                        <Card style={{ width: '41rem' ,zIndex: '-1'}}>
                        <Card.Body>
                            <Card.Text>
                          <img src={hyatt} height="45rem" width="20%"></img>
                          <span style={{float: 'right',fontFamily: 'Georgia, Times New Roman, Times, serif', fontWeight:100,fontStyle: 'Italic'}}>Partner since 2019 and delivering excellence.</span>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                <Row style={{marginBottom: '0.5rem'}}>
                    <Col>
                        <Card style={{ width: '41rem' ,zIndex: '-1'}}>
                        <Card.Body>
                            <Card.Text>
                          <img src={sheraton} height="45rem" width="20%"></img>
                          <span style={{float: 'right',fontFamily: 'Georgia, Times New Roman, Times, serif',fontWeight:100,fontStyle: 'Italic'}}>Partner since 2019 and delivering excellence.</span>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                <Row style={{marginBottom: '0.5rem'}}><Col>
                        <Card style={{ width: '41rem' ,zIndex: '-1'}}>
                        <Card.Body>
                            <Card.Text>
                          <img src={mariott} height="45rem" width="20%"></img>
                          <span style={{float: 'right',fontFamily: 'Georgia, Times New Roman, Times, serif',fontWeight:100,fontStyle: 'Italic'}}>Partner since 2019 and delivering excellence.</span>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                <Row style={{marginBottom: '0.5rem'}}><Col>
                        <Card style={{ width: '41rem' ,zIndex: '-1'}}>
                        <Card.Body>
                            <Card.Text>
                          <img src={hyatt} height="45rem" width="20%"></img>
                          <span style={{float: 'right',fontFamily: 'Georgia, Times New Roman, Times, serif',fontWeight:100, fontStyle: 'Italic'}}>Partner since 2019 and delivering excellence.</span>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
                <Row style={{marginBottom: '0.5rem'}}><Col>
                        <Card style={{ width: '41rem' ,zIndex: '-1'}}>
                        <Card.Body>
                            <Card.Text>
                          <img src={hyatt} height="45rem" width="20%"></img>
                          <span style={{float: 'right',fontFamily: 'Georgia, Times New Roman, Times, serif',fontWeight:100,fontStyle: 'Italic'}}>Partner since 2019 and delivering excellence.</span>
                            </Card.Text>
                            <Card.Link href="#">View more</Card.Link>
                        </Card.Body>
                        </Card>
                   </Col>
                </Row>
               
            </Col>
            </Row>         
            </Container>
         </>
     );
}