import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MemberListRow = ({member}) => {
  return (
    <tr key={member.id}>
      <td><Link to={'/member/' + member.id}>{member.firstName} {member.lastName}</Link></td>
      <td>{member.city}</td>
      <td>{member.mobile}</td>
      <td>{member.email}</td>
    </tr>
  )
};

MemberListRow.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberListRow;
