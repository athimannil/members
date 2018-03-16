import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as memberActions from './../../actions/membersAction';
import MembersList from './MembersList';

class Members extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      passwordType: 'password',
      fillables: ['firstName', 'lastName', 'email', 'mobile', 'abroadAddress', 'city'], // this is done through manual listing in array so that you have control which fields should be validated for before submit
      member: {
        firstName: {
          val: '',
          isValid: true,
          error: 'Please enter your first name'
        },
        lastName: {
          val: '',
          isValid: true,
          error: 'Please enter your last name'
        },
        email: {
          val: '',
          isValid: true,
          error: 'Please enter valid email address'
        },
        mobile: {
          val: '',
          isValid: true,
          error: 'Please enter mobile'
        },
        abroadAddress: {
          val: '',
          isValid: true,
          error: 'Please enter mobile'
        },
        nativeAddress: {
          val: '',
          isValid: true,
          error: 'Please enter mobile'
        },
        city: {
          val: '',
          isValid: true,
          error: 'Please enter mobile'
        }
      }
    };
  }

  onChange = (event) => {
    const input = event.target;
    const inputValue = input.type === "checkbox" ? input.checked : input.value;
    this.setState({
      member: {
        ...this.state.member,
        [input.name]: {
          val: inputValue,
          isValid: this.validateFormField(input)
        }
      }
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const isFormValid = this.validateForm();
    // console.log(event);
    // console.log(this.state);
    if (isFormValid) {
      // this.submitFormData();
      this.props.dispatch(memberActions.createMembers(this.state.member));
    } else {
    //   this.displayErrorsForInvalidFields();
    //   // invoke some popup saying that some validations didn't pass
      console.log(isFormValid);
    }
  }

  validateForStringChars(str) {
    const re = /\b[^\d\W]+\b/g;
    const preparedStr = str.replace(/ /g, '');
    return re.test(preparedStr);
  }

  validateForEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
  }

  validateFormField(field) {
    let inputValidationResult = false;
    switch (field.name) {
      case 'firstName':
        inputValidationResult = this.validateForStringChars(field.value) && field.value.length > 0;
        break;
      case 'lastName':
        inputValidationResult = this.validateForStringChars(field.value) && field.value.length > 0;
        break;
      case 'email':
        inputValidationResult = this.validateForEmail(field.value) && field.value.length > 0;
        break;
      case 'mobile':
        inputValidationResult = field.value.length > 8;
        break;
      case 'abroadAddress':
        inputValidationResult = field.value.length > 0;
        break;
      case 'nativeAddress':
        inputValidationResult = field.value.length > 0;
        break;
      case 'city':
        inputValidationResult = field.value.length > 0;
        break;
      case 'terms':
        inputValidationResult = field.checked;
        break;
      default:
        inputValidationResult = false;
    }
    return inputValidationResult;
  }

  validateForm() {
    return this.state.fillables.every((field) => this.state.member[field].isValid && this.state.member[field].val);
  }

  render() {
    const { members } = this.props;
console.log(members);
    return (
      <div className="container">
        <div className="table-responsive">
          <MembersList members={members} />
        </div>
        <hr />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={this.state.member.firstName.val}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={this.state.member.lastName.val}
                onChange={this.onChange}
                />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.member.email.val}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                value={this.state.member.mobile.val}
                onChange={this.onChange}
                />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="abroadAddress">Abroad Address</label>
            <input
              type="text"
              className="form-control"
              id="abroadAddress"
              name="abroadAddress"
              placeholder="Apartment, studio, or floor"
              value={this.state.member.abroadAddress.val}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="nativeAddress">Native Address</label>
            <input
              type="text"
              className="form-control"
              id="nativeAddress"
              placeholder="1234 Main St"
              name="nativeAddress"
              value={this.state.member.nativeAddress.val}
              onChange={this.onChange}
              />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                name="city"
                value={this.state.member.city.val}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Post Code</label>
              <input
                type="text"
                className="form-control"
                id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
            >Sign in</button>
        </form>
      </div>
    );
  }
}

Members.propTypes = {
  members: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    members: state.members
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Members)
