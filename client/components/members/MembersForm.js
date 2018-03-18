import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// const MembersForm = ({member, allAuthors, onSave, onChange, loading, errors}) => {
const MembersForm = ({member, genders, onSave, onChange, loading, errors}) => {
  console.log(errors);
  console.log(errors.firstName);
  return(
    <form>
      <div className="form-row">
        <div className="col-md-6">
          <TextInput
            name="firstName"
            label="First Name"
            value={member.firstname}
            onChange={onChange}
            error={errors.firstName}
            />
        </div>
        <div className="col-md-6">
          <TextInput
            name="lastName"
            label="Last name"
            value={member.lastname}
            onChange={onChange}
            error={errors.lastName}
            />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <TextInput
            name="email"
            label="Email"
            value={member.email}
            onChange={onChange}
            error={errors.email}
            />
        </div>
        <div className="col-md-6">
          <TextInput
            name="mobile"
            label="Mobile"
            value={member.mobile}
            onChange={onChange}
            error={errors.mobile}
            />
        </div>
      </div>
      <div className="form-group">
        <TextInput
          name="abroadAddress"
          label="Apartment, studio, or floor"
          value={member.abroadAddress}
          onChange={onChange}
          error={errors.abroadAddress}
          />
      </div>
      <div className="form-group">
        <TextInput
          type="text"
          label="1234 Main St"
          value={member.nativeAddress}
          onChange={onChange}
          error={errors.nativeAddress}
          />
      </div>
      <div className="form-row">
        <div className="col-md-6">
          <TextInput
            name="city"
            label="City"
            value={member.city}
            onChange={onChange}
            error={errors.city}
            />
        </div>
        {/*
        <div className="form-group col-md-4">
          <SelectInput
            name="gender"
            label="gender"
            defaultOption="Select Gender"
            options={genders}
            onChange={onChange}
            error={errors.gender}
          />
        </div>
        */}
        <div className="col-md-6">
          <TextInput
            name="postalcode"
            label="Post Code"
            value="676122"
          />
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
      {/*disable={loading}*/}
      {/*onClick={onSave}*/}
      <input
        type="submit"
        className="btn btn-primary"
        value={loading ? 'Saving..' : 'Save'}
      />
    </form>
  )
}

MembersForm.propTypes = {
  member: PropTypes.object.isRequired,
  // allAuthors: PropTypes.array.isRequired,
  // onSave: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
};

export default MembersForm;
