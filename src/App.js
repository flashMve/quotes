import React, { Fragment, Component } from "react";
import ".//App.css";
import Header from "./Components/Layout/Header";
import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";
import Loading from "./Components/UI/Loading";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        content: "",
        author: "",
      },
      loading: false,
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  async getQuote() {
    this.setState({ loading: true ,quote:{content:"",author:""}});
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1a971608a0msh6e736db9a330b2ap1291bajsn35a1ac16d7ff",
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/",
        options
      );
      const data = await response.json();
      const quote = {
        content: data.content,
        author: data.originator.name,
      };
      this.setState({
        quote: quote,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  }

  render() {
    let content = "";

    if (this.state.loading) {
      content = <Loading />;
    }
    if (this.state.quote.content.length > 0) {
      content = (
        <Card author={this.state.quote.author}>{this.state.quote.content}</Card>
      );
    }

    return (
      <Fragment>
        <Header />
        {content}
        <Button type="button" clicked={this.getQuote.bind(this)}>
          Get Random Quotes
        </Button>
      </Fragment>
    );
  }
}

export default Home;
