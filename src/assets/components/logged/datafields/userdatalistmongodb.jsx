import React from 'react';
import PropTypes from 'prop-types';

function UserDataList({ data }) {
  return (
    <div>
      <h1>Data View</h1>
      <ul>
        {data.map(item => (
          <div key={item._id}>
            <li>{item.companyname}</li>
            <li>{item.companyaddress}</li>
            <li>{item.businesstype}</li>
            <li>{item.companynumber}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

UserDataList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default UserDataList;
