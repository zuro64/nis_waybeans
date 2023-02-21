

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Cardlist from '../components/Cardlist';
const style = { 
        pageContainer:{
            position: "relative",
            width:"1100px",
            height:"500px",
            backgroundColor:"#DBB699"
        },
        sizeContainer:{
            width:"1100px",
            height:"500px",
        },
        rectangle3:{
            position: "absolute",
            top:"35px",
            right: "-30px",
            width: "500px"
        },
        beanImg:{
                width:"50px",
            
            },
        titleHeading:{
            fontSize:"100px",
            marginBottom:"50px",
        }
    }

export default function LandingPage(){
    return(
        <>
            <Container  style={style.pageContainer} className="mt-5 p-5">
                <Row>
                    <Col className="">
                        <h1 className="charlesSebastian" style={style.titleHeading} href="#home">WaysBe<img style={style.beanImg} src="beans.png" alt="" />ns</h1>
                        <h2 className="avenirFont">BEST QUALITY COFFEE BEANS</h2>
                        <p className="avenirFont">Quality freshly roasted coffee made just for you. Pour, brew and enjoy</p>
                        <img  style={style.rectangle3}  src="Rectangle 3.png" alt="" />
                    </Col>
                    <Col style={{height:"400px"}} className="row align-items-end w-100">
                        <div className="d-grid">
                            <img className='mb-3' src="vector.png" alt="" />
                            <img className='mb-3' src="vector.png" alt="" />
                            <img className='mb-3' src="vector.png" alt="" />
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container style={style.sizeContainer} className="mt-5 p-0">
                <Cardlist/>
            </Container>
        </>
    )
}

