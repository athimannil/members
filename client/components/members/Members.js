import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memberActions from './../../actions/membersAction';
import MembersList from './MembersList';

class Members extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirectForNewMember: false,
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

  redirectToAddMember = () => {
    this.setState({
      redirectForNewMember: true
    });
  }

  render() {
    if (this.state.redirectForNewMember) {
      return <Redirect to="member" />;
    }
    const { members } = this.props;
    console.log(members);
    return (
      <div className="container">
        <div className="table-responsive">
          <input
            type="submit"
            value="New Member"
            className="btn btn-outline-primary"
            onClick={this.redirectToAddMember}
          />
          <MembersList members={members} />
        </div>
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
