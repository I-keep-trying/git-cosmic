import React, { Component } from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import { Modal } from 'react-bootstrap';
import cosmicService from './../services/cosmicService';
import Scarf1 from '../components/scarves/scarf1';
import Scarf2 from '../components/scarves/scarf2';
import Scarf3 from '../components/scarves/scarf3';
import Scarf4 from '../components/scarves/scarf4';
import Scarf5 from '../components/scarves/scarf5';

class Cart extends Component {
  productArray = [];
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: 'false',
      message: 'My Cart:',
      scarf1: false,
      scarf2: false,
      scarf3: false,
      scarf4: false,
      scarf5: false,
      nav: true,
      checkoutShow: false,
      userName: '',
      address: '',
      cardNumber: '',
      cvv: '',
      cardExpiryDate: '',
      mobile: '',
      amount: '',
      isLoading: '',
      dynamic: ''
    };
    this.handleCheckoutShow = this.handleCheckoutShow.bind(this);
    this.handleCheckoutClose = this.handleCheckoutClose.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  // getting products which are in cart
  getProducts() {
    this.productArray = _.values(JSON.parse(localStorage.getItem('products')));
    if (this.productArray.length < 1) {
      this.setState({ isEmpty: 'true' });
      this.setState({ dynamic: 'dynamic' });
      this.setState({ message: 'Your Cart is Empty' });
      this.setState({ nav: false });
    }
  }

  componentDidMount() {
    this.getProducts();
    this.checkingCart();
  }

  //checking products in Cart
  checkingCart() {
    var amount = 0;
    if (this.productArray.indexOf('scarf1') >= 0) {
      this.setState({ scarf1: true });
      amount = amount + 849;
    }

    if (this.productArray.indexOf('scarf2') >= 0) {
      this.setState({ scarf2: true });
      amount = amount + 1149;
    }

    if (this.productArray.indexOf('scarf3') >= 0) {
      this.setState({ scarf3: true });
      amount = amount + 1449;
    }

    if (this.productArray.indexOf('scarf4') >= 0) {
      this.setState({ scarf4: true });
      amount = amount + 1449;
    }

    if (this.productArray.indexOf('scarf5') >= 0) {
      this.setState({ scarf5: true });
      amount = amount + 1449;
    }

    this.setState({ amount: amount });
  }

  handleCheckoutShow() {
    this.setState({ checkoutShow: true });
  }

  handleCheckoutClose() {
    this.setState({ checkoutShow: false });
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  emptyCart() {
    localStorage.removeItem('products');
  }

  onSubmit = e => {
    this.setState({ isLoading: 'Placing order...' });
    e.preventDefault();
    cosmicService
      .placeOrder(
        this.state.userName,
        this.state.address,
        this.state.cardNumber,
        this.state.cvv,
        this.state.cardExpiryDate,
        this.state.mobile,
        this.state.amount
      )
      .then(result => {
        this.setState({ isLoading: 'Order successfully placed!' });
        setTimeout(() => {
          this.setState({ checkoutShow: false });
          localStorage.removeItem('products');
        }, 3000);
      });
  };

  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="jumbotron jumbotron-fluid">
            <b>Gatsby Ecommerce App in Cosmic JS</b>
          </div>
          <button type="button" class="btn btn-dark">
            <Link to="/">Back</Link>
          </button>
          <>
            <div className="row justify-content-center">
              <div>
                <h1>{this.state.message}</h1>
                <div class="col-sm">
                  {this.state.scarf1 ? <Scarf1 /> : null}
                </div>
                <div class="col-sm">
                  {this.state.scarf2 ? <Scarf2 /> : null}
                </div>
                <div class="col-sm">
                  {this.state.scarf3 ? <Scarf3 /> : null}
                </div>
                <div class="col-sm">
                  {this.state.scarf4 ? <Scarf4 /> : null}
                </div>
                <div class="col-sm">
                  {this.state.scarf5 ? <Scarf5 /> : null}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="button-padding justify-content-center">
                <div className={this.state.dynamic}>
                  <Link to="/">
                    <button className="btn btn-danger" onClick={this.emptyCart}>
                      Empty Cart
                    </button>
                  </Link>

                  <button
                    className="btn btn-primary margin-button"
                    onClick={this.handleCheckoutShow}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
          <Modal
            show={this.state.checkoutShow}
            onHide={this.handleCheckoutClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.onSubmit}>
                <p>
                  <input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                    placeholder="Enter your name"
                    className="form-control"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                    placeholder="Enter your address"
                    className="form-control"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="cardNumber"
                    value={this.state.cardNumber}
                    onChange={this.onChange}
                    placeholder="Enter your card number"
                    className="form-control"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="cvv"
                    value={this.state.cvv}
                    onChange={this.onChange}
                    placeholder="Enter your cvv"
                    className="form-control"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="cardExpiryDate"
                    value={this.state.cardExpiryDate}
                    onChange={this.onChange}
                    placeholder="Enter card's expiry date"
                    className="form-control"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChange}
                    placeholder="Enter your mobile"
                    className="form-control"
                  />
                </p>
                <p>
                  <span>Total Amount:</span>
                  <span>${this.state.amount}</span>
                </p>

                <p>
                  <input
                    type="submit"
                    value="Place Order"
                    className="margin-button btn btn-primary"
                  />
                </p>
                <p>{this.state.isLoading}</p>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
export default Cart;
