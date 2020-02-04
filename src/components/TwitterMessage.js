import  React, {Component} from 'react';

export default class TwitterMessage extends Component {
  state = {
    maxChars: this.props.maxChars,
    message: "",
    charsRemaining: this.props.maxChars
  }

  handleOnChange = event => {
    const message = event.target.value
    if(message.length > this.state.maxChars) return;
    this.setState({
      message: message,
      charsRemaining: this.state.maxChars - message.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleOnChange(event)} />
        <div>{this.state.charsRemaining}</div>
      </div>
    )
  }
}