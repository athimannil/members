import React from 'react';
import PropTypes from 'prop-types';
import MemberListRow from './MemberListRow';

const MembersList = ({members}) => {
  console.log(members);
  return (
    <table className="table table-hover table-sm">
      <thead className="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">Mobile</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member =>
          <MemberListRow key={member.id} member={member} />
        )}
      </tbody>
    </table>
  );
};

MembersList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MembersList;
