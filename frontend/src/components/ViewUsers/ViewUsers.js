import React, { Component } from "react";
import "./ViewUsers.css";
import { Link } from "react-router-dom";

export class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    return fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          users: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className={"container"}>
        <br></br>
        <div className={"justify-content-center"}>
          <h1 className="rr">Bookings</h1>
        </div>
        <br></br>
        <br></br>

        <div class="row">
          <table className="table">
            <thead>
              <tr className="first">
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">Members</th>
                <th scope="col">country</th>
                <th scope="col">gender</th>
                <th scope="col">tourname</th>
                <th scope="col">tourprice</th>
              </tr>
            </thead>
            {this.state.users.map((value, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.quantity}</td>
                  <td>{value.country}</td>
                  <td>{value.gender}</td>
                  <td>{value.tourname}</td>
                  <td>{value.price}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <Link to="/tours">
          <button className="btn btn-outline-primary ml-2">
            <i className="fa fa-arrow-left"></i>&nbsp; Back to Admin Home Page
          </button>
        </Link>
      </div>
    );
  }
}

export default ViewUsers;
