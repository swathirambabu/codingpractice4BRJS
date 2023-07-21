// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerateButton = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onApplyBrakeButton = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="title">
          Speed is <span className="span">{count}mph</span>
        </h1>
        <p className="description">Min limit is 0mph,Max limit is 200mph</p>
        <div className="button-container">
          <button
            className="button1"
            type="button"
            onClick={this.onAccelerateButton}
          >
            Accelerate
          </button>
          <button
            className="button2"
            type="button"
            onClick={this.onApplyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
