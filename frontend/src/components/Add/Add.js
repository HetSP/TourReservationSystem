import React, { Component } from "react";
import "./AddStyles.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import additional from "./additional.png";

const initialState = {
  name: "",
  email: "",
  phone: "",
  quantity: null,
  country: "",
  gender: "",
  tourname: "",
  price: "",

  nameerror: "",
  emailerror: "",
  phoneerror: "",
  quantityerror: "",
  countryerror: "",
  gendererror: "",
};

class Add extends React.Component {
  constructor(props) {
    super(props);
  }
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let emailerror = "";
    let phoneerror = "";
    let quantityerror = "";
    let countryerror = "";
    let gendererror = "";

    if (!this.state.name) {
      nameerror = "Enter User Name";
    }

    if (!this.state.email) {
      emailerror = "Enter User Email";
    }
    if (!this.state.phone) {
      phoneerror = "Enter Phone Number";
    }
    if (!this.state.quantity) {
      quantityerror = "Enter Quantity";
    }
    if (!this.state.country) {
      countryerror = "Enter Country Name";
    }
    if (!this.state.gender) {
      gendererror = "Enter Gender";
    }

    if (
      nameerror ||
      emailerror ||
      phoneerror ||
      quantityerror ||
      countryerror ||
      gendererror
    ) {
      this.setState({
        nameerror,
        emailerror,
        phoneerror,
        quantityerror,
        countryerror,
        gendererror,
      });
      return false;
    }
    swal("Guest Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.phone);
      console.log(this.state.quantity);
      console.log(this.state.country);
      console.log(this.state.gender);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.quantity == null &&
      this.state.country == null &&
      this.state.gender == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        quantity: this.state.quantity,
        country: this.state.country,
        gender: this.state.gender,
        tourname: this.props.match.params.name,
        price: this.props.match.params.price,
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
      quantity: 0,
      country: "",
      gender: "",
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmitHandler}>
          <div className="container text-center">
            <br></br>
            <br></br>
            <br></br>

            <h1 className="o">
              {" "}
              <img src={additional}></img>&nbsp;Tour Package Reservation
            </h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Name
                </label>
                <input
                  name="name"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="User Name"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.name}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
                </label>
                <input
                  name="email"
                  onChange={this.onChangeHandler}
                  type="email"
                  placeholder="User Email"
                  className="form-control"
                  value={this.state.email}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone
                  Number
                </label>
                <input
                  name="phone"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 9477711188)"
                  className="form-control"
                  value={this.state.phone}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.phoneerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;No of Members
                </label>
                <input
                  name="quantity"
                  onChange={this.onChangeHandler}
                  type="number"
                  placeholder="Enter Number>0"
                  className="form-control"
                  value={this.state.quantity}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.quantityerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-globe" aria-hidden="true"></i>&nbsp;Country
                </label>
                <input
                  name="country"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Country"
                  className="form-control"
                  value={this.state.country}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.countryerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Gender
                </label>
                <input
                  name="gender"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Female / Male"
                  className="form-control"
                  value={this.state.gender}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.gendererror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-plane" aria-hidden="true"></i>&nbsp;Tour Name
                </label>
                <input
                  name="tourname"
                  type="text"
                  className="form-control"
                  value={this.props.match.params.name}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-money" aria-hidden="true"></i>&nbsp;Tour Price
                </label>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  value={this.props.match.params.price}
                  readOnly
                />
              </div>
              <br></br>
              <br></br>
              <div className="form-group">
                <button
                  className="btn btn-outline-danger"
                  onClick={this.onSubmitHandler}
                >
                  <i className="fa fa-send"></i>&nbsp; Submit
                </button>
                <Link to="/home">
                  <button className="btn btn-outline-info ml-2">
                    <i className="fa fa-arrow-left"></i>&nbsp; Back to Home Page
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
