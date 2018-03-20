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
      member: Object.assign({}, props.member),
      errors: {}
    };

    this.updateMemberState = this.updateMemberState.bind(this);
    this.saveMember = this.saveMember.bind(this);
  }

  updateMemberState(event) {
    const field = event.target.name;
    let member = this.state.member;
    member[field] = event.target.value;
    return this.setState({member: member});
  }

  saveMember(event) {
    event.preventDefault();
    this.props.actions.saveMember(this.state.member);
    // this.context.router.push('/members');
  }

  render() {
    return (
      <div>
        <MembersForm
          genders={[{text:'Male', value:'male'}, {text: 'Female', value: 'female'}]}
          onChange={this.updateMemberState}
          onSave={this.saveMember}
          member={this.state.member}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageMembers.propTypes = {
  member: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageMembers.contextTypes = {
  router: PropTypes.object
};

function getMemberById(members, id) {
  const member = members.filter(member => member.id == id);
console.log(member);
  if (member.length) return member[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  // console.clear();
  const memberId = ownProps.match.params.id;
  console.log(memberId);

  let member = {'id': '',  'firstName': '',  'lastName': '',  'email': '',  'mobile': '',  'abroadAddress': '',  'nativeAddress': '',  'city': '',  'postalcode': '', 'length': ''};

  if (memberId) {
    member = getMemberById(state.members, memberId);
  }

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
