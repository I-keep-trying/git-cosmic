import React, { Component } from 'react';
import Scarf1 from "./scarves/scarf1"
import Scarf2 from "./scarves/scarf2"
import Scarf3 from "./scarves/scarf3"
import Scarf4 from "./scarves/scarf4"
import Scarf5 from "./scarves/scarf5"
import "./layout.css";
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import _ from "lodash";

class Home extends Component {
    products = [];
    constructor(props) {
        super(props);
        this.state = {
            scarf1Show: false,
            scarf2Show: false,
            scarf3Show: false,
            scarf4Show: false,
            scarf5Show: false,
            alert: "",
        };
        this.handlescarf1Show = this.handlescarf1Show.bind(this);
        this.handlescarf1Close = this.handlescarf1Close.bind(this);
        this.handlescarf2Show = this.handlescarf2Show.bind(this);
        this.handlescarf2Close = this.handlescarf2Close.bind(this);
        this.handlescarf3Show = this.handlescarf3Show.bind(this);
        this.handlescarf3Close = this.handlescarf3Close.bind(this);
        this.handlescarf4Show = this.handlescarf4Show.bind(this);
        this.handlescarf4Close = this.handlescarf4Close.bind(this);
        this.handlescarf5Show = this.handlescarf5Show.bind(this);
        this.handlescarf5Close = this.handlescarf5Close.bind(this);
    }

    handlescarf1Close() {
        this.setState({ scarf1Show: false });
      }
    
      handlescarf1Show() {
        this.setState({ scarf1Show: true });
      }
      handlescarf2Close() {
        this.setState({ scarf2Show: false });
      }
    
      handlescarf2Show() {
        this.setState({ scarf2Show: true });
      }
      handlescarf3Close() {
        this.setState({ scarf3Show: false });
      }
    
      handlescarf3Show() {
        this.setState({ scarf3Show: true });
      }
      handlescarf4Close() {
        this.setState({ scarf4Show: false });
      }
    
      handlescarf4Show() {
        this.setState({ scarf4Show: true });
      }
      handlescarf5Close() {
        this.setState({ scarf5Show: false });
      }
    
      handlescarf5Show() {
        this.setState({ scarf5Show: true });
      }
    //   Add products to cart
      addToCart = (e)=>
      {
        let product = e.target.value;
        this.setState({alert: "Product Added to Cart"});
        setTimeout(
            function() {
                this.setState({alert: ""});
            }
            .bind(this),
            3000
        );
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.products))
      }

      componentDidMount()
      {
        let arr = _.values(JSON.parse(localStorage.getItem('products')));
        if(arr.length > 0)
        {
        this.products = JSON.parse(localStorage.getItem('products'));
        }
      }

    render() {
        return (
            <>
            <Container>
                 <p>{this.state.alert}</p>
             <Row className="row">
             <Col className="col"></Col>
             <Col className="col"></Col>
             <Col className="col cart">
               <Link to="/cart/">
                 <button className="btn btn-primary margin-button">
            View Cart
            </button>
            </Link>
            </Col>               
             </Row>
               
            <Row className="row top-row-margin">
            <Col className="col image-pointer" onClick={this.handlescarf1Show}>
            <Scarf1/>
                </Col>
                <Col className="col image-pointer" onClick={this.handlescarf2Show}>
            <Scarf2/>
                </Col>
                <Col className="col image-pointer" onClick={this.handlescarf3Show}>
            <Scarf3/>
                </Col>
                <Col className="col image-pointer" onClick={this.handlescarf4Show}>
            <Scarf4/>
                </Col>
                <Col className="col image-pointer" onClick={this.handlescarf5Show}>
            <Scarf5/>
                </Col>
                </Row>

                <Row className="row">
                 <Col className="col product-name" onClick={this.handlescarf1Show}>$849</Col>
                 <Col className="col product-name" onClick={this.handlescarf2Show}>$1149</Col>
                 <Col className="col product-name" onClick={this.handlescarf3Show}>$1449</Col> 
                 <Col className="col product-name" onClick={this.handlescarf4Show}>$1449</Col>                
                 <Col className="col product-name" onClick={this.handlescarf5Show}>$1449</Col>                               
                </Row>

                <Row className="row">
                 <Col className="col product-name" onClick={this.handlescarf1Show}>Scarf 1</Col>
                 <Col className="col product-name" onClick={this.handlescarf2Show}>Scarf 2</Col>
                 <Col className="col product-name" onClick={this.handlescarf3Show}>Scarf 3</Col> 
                 <Col className="col product-name" onClick={this.handlescarf4Show}>Scarf 4</Col>                
                 <Col className="col product-name" onClick={this.handlescarf5Show}>Scarf 5</Col>                               
                </Row>

                <Row className="row">
                 <Col className="col product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"scarf1"}>Add to Cart</button></Col>
                 <Col className="col product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"scarf2"}>Add to Cart</button></Col>
                 <Col className="col product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"scarf3"}>Add to Cart</button></Col> 
                 <Col className="col product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"scarf4"}>Add to Cart</button></Col>               
                 <Col className="col product-name"><button className="btn btn-primary margin-button" onClick={this.addToCart} value={"scarf5"}>Add to Cart</button></Col>                             
                </Row>

                
               

            {/* Modal for iPhone 8 info */}
        <Modal show={this.state.scarf1Show} onHide={this.handlescarf1Close}>
          <Modal.Header closeButton>
            <Modal.Title>Scarf 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p><span>Material:</span> <span className="modal-float-right">100% Silk</span></p>
              <p><span>Origin:</span> <span className="modal-float-right">Bogota</span></p>
              <p><span>Designer:</span> <span className="modal-float-right">Hermes</span></p>
              <p><span>Season:</span> <span className="modal-float-right">Fall 2018</span></p>
              <p><span>Retail Price:</span> <span className="modal-float-right">$8490</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlescarf1Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for iPhone x */}
        <Modal show={this.state.scarf2Show} onHide={this.handlescarf2Close}>
          <Modal.Header closeButton>
            <Modal.Title>Scarf 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><span>Material:</span> <span className="modal-float-right">100% Silk</span></p>
              <p><span>Origin:</span> <span className="modal-float-right">Bogota</span></p>
              <p><span>Designer:</span> <span className="modal-float-right">Hermes</span></p>
              <p><span>Season:</span> <span className="modal-float-right">Fall 2018</span></p>
              <p><span>Retail Price:</span> <span className="modal-float-right">$8490</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlescarf2Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

         {/* Modal for iPhone xs */}
         <Modal show={this.state.scarf3Show} onHide={this.handlescarf3Close}>
          <Modal.Header closeButton>
            <Modal.Title>Scarf 3</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><span>Material:</span> <span className="modal-float-right">100% Silk</span></p>
              <p><span>Origin:</span> <span className="modal-float-right">Bogota</span></p>
              <p><span>Designer:</span> <span className="modal-float-right">Hermes</span></p>
              <p><span>Season:</span> <span className="modal-float-right">Fall 2018</span></p>
              <p><span>Retail Price:</span> <span className="modal-float-right">$8490</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlescarf3Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.scarf4Show} onHide={this.handlescarf4Close}>
          <Modal.Header closeButton>
            <Modal.Title>Scarf 4</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><span>Material:</span> <span className="modal-float-right">100% Silk</span></p>
              <p><span>Origin:</span> <span className="modal-float-right">Bogota</span></p>
              <p><span>Designer:</span> <span className="modal-float-right">Hermes</span></p>
              <p><span>Season:</span> <span className="modal-float-right">Fall 2018</span></p>
              <p><span>Retail Price:</span> <span className="modal-float-right">$8490</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlescarf4Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.scarf5Show} onHide={this.handlescarf5Close}>
          <Modal.Header closeButton>
            <Modal.Title>Scarf 5</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><span>Material:</span> <span className="modal-float-right">100% Silk</span></p>
              <p><span>Origin:</span> <span className="modal-float-right">Bogota</span></p>
              <p><span>Designer:</span> <span className="modal-float-right">Hermes</span></p>
              <p><span>Season:</span> <span className="modal-float-right">Fall 2018</span></p>
              <p><span>Retail Price:</span> <span className="modal-float-right">$8490</span></p>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlescarf5Close} className="margin-button">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

                </Container>
                </>
        )}
}

export default Home;