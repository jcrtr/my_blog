import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeForm extends React.Component {
  state = {
    email: '',
    message: '',
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e)  => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email)
    this.setState({ message: result.msg });
  };
  
  render() {
    return (
      <form
        name="subscribeForm"
        method="POST"
        id="subscribe-form"
        className="subscribe-form"
        onSubmit={this.handleSubmit}
      ><h3>Subscribe</h3>
        <div className="form-row">

          <label>
            <input
              className="subscribe-email"
              type="email"
              name="email"
              placeholder="Enter Email Address..."
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <button className="subscribe-button -primary" type="submit">
          Subscribe
        </button>
        <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message}} />
      </form>
    );
  }
}
