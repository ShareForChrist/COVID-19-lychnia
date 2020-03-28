import React, { Component } from "react";
import "./subpage.css";
import About from "../components/about/about";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact/contact";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
        <Contact></Contact>
        <Footer />
      </div>
    );
  }
}

export default Home;
