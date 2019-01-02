import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import SectionHomeTabs from "../Components/Sections/SectionHomeTabs.jsx";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import HeaderLinks from "components/Header/StaticHeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import CallMade from "@material-ui/icons/CallMade";
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

const styles = {

  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class HomePage extends React.Component {
  static propTypes = {
    memories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  constructor(props) {
    super(props);
    this.state = {
      memories: [],
      searchUser: ""
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchUser: e.target.value
    });
    console.log(this.state.searchUser);
  }

  componentDidMount() {
    var userToken = localStorage.getItem('token');
    var _this = this;
    console.log(userToken);
    fetch('http://ec2-18-234-162-48.compute-1.amazonaws.com:8000/post/list/',
      {
        mode: 'cors',
        headers: {
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization' : 'JWT ' + userToken,
        },
        method: 'GET',
      })
      .then(response => response.json())
      .then(function(data){
        console.log(data);
        _this.setState({memories: data});
      })

      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="MEMORIST"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bg2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://github.com/bounswe/bounswe2018group4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Go to Github
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <br />
            <CustomInput
              id="searchUser"
              onChange={this.handleSearchChange}
              inputProps={{
                onChange: this.handleSearchChange,
                type: "text",
                placeholder: "Enter username here"
              }}
            />
            &nbsp;
            <Link
              to={{
                pathname: "/search-page",
                state: { searchUser: this.state.searchUser }
              }}
              className={classes.link}
            >
              <Button default color="primary" size="lg">
                Search a user
              </Button>
            </Link>
            <Link
                to={{
                  pathname: "/generic-recommendation-page"
                }}
                className={classes.link}
            >&nbsp; &nbsp;
              <Button default color="primary" size="lg">
                Bring me the best memories!
              </Button>
            </Link>
            <SectionHomeTabs memories={this.state.memories} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(HomePage);
