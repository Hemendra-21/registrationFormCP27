import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    emptyFirstName: false,
    emptyLastName: false,
    registrationSuccessful: false,
  }

  formOnSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({emptyFirstName: true})
    }
    if (lastName === '') {
      this.setState({emptyLastName: true})
    }
    if (firstName && lastName !== '') {
      this.setState({registrationSuccessful: true})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({emptyFirstName: true})
    } else {
      this.setState({firstName: event.target.value, emptyFirstName: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({emptyLastName: true})
    } else {
      this.setState({lastName: event.target.value, emptyLastName: false})
    }
  }

  renderFirstNamefield = () => (
    <>
      <label htmlFor="first-name" className="label-text">
        FIRST NAME
      </label>
      <input
        type="text"
        placeholder="First name"
        className="input-field"
        onBlur={this.onBlurFirstName}
      />
    </>
  )

  renderLastNameField = () => (
    <>
      <label htmlFor="last-name" className="label-text">
        LAST NAME
      </label>
      <input
        type="text"
        placeholder="Last name"
        className="input-field"
        onBlur={this.onBlurLastName}
      />
    </>
  )

  submitAnotherResponse = () => {
    this.setState({registrationSuccessful: false})
  }

  renderRegistrationSubmitView = () => {
    const {emptyFirstName, emptyLastName} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="registration-main-heading">Registration</h1>
        <form className="form-container" onSubmit={this.formOnSubmit}>
          <div className="input-field-container">
            {this.renderFirstNamefield()}
            {emptyFirstName && <p className="required-text">Required</p>}
          </div>
          <div className="input-field-container">
            {this.renderLastNameField()}
            {emptyLastName && <p className="required-text">Required</p>}
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  renderRegistrationSuccessView = () => (
    <div className="success-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-text">Submitted Successfully</p>
      <div>
        <button
          type="button"
          className="submit-another-btn"
          onClick={this.submitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {registrationSuccessful} = this.state

    return (
      <div>
        {registrationSuccessful
          ? this.renderRegistrationSuccessView()
          : this.renderRegistrationSubmitView()}
      </div>
    )
  }
}
export default RegistrationForm
