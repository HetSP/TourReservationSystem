import React, { Component } from "react";
import "./signupStyles.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
    };
  }

  async componentDidMount() {
    return fetch("http://localhost:5000/signup")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          admins: responseJson,
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
          <h1 className="rr">Admins</h1>
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
              </tr>
            </thead>
            {this.state.admins.map((value, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{value.userName}</td>
                  <td>{value.userEmail}</td>
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

export default SignUp;
