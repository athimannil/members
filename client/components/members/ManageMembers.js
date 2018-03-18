import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memberActions from './../../actions/membersAction';
import MembersForm from './MembersForm';

class ManageMembers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      member: Object.assign({}, this.props.member),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h2>Hello mate</h2>
        <MembersForm
          genders={[{male:'male', female: 'female'}]}
          member={this.state.member}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageMembers.propTypes = {
  member: PropTypes.object.isRequired,
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let member = {'id': '',  'firstname': '',  'lastname': '',  'email': '',  'mobile': '',  'abroadAddress': '',  'nativeAddress': '',  'city': '',  'postalcode': '', 'length': ''};
  console.log(member);
  return {
    // members: state.members
    member: member
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMembers)
