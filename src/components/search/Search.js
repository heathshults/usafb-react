import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ updateSearchFilters, clearSearchFilters, usafbId, firstName, lastName, dateOfBirth, city, state }) => (
  <div id="s-o" className="search-overlay flexi-container align-items-stretch ">
    <a id="sfGrow" className="search-overlay-shrink-btn" hidden>
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="-16 -16 64 64" className="icon-white icon-tiny mr-1">
        <path d="M-13.938 45.857c0.068 0.516 0.469 0.979 0.992 0.992 2.419 0.061 4.886-0.184 7.183-0.979 1.651-0.572 3.214-1.488 4.335-2.834 1.964-2.365 2.242-5.578 2.596-8.514 0.034-0.279 0.258-0.504 0.537-0.531 0.292-0.033 0.578-0.061 0.863-0.094 0.313-0.035 0.604 0.176 0.659 0.488 0.122 0.686 0.298 1.387 0.53 2.1 2.283 6.869 9.982 8.371 16.28 6.762 2.637-0.674 4.771-1.855 6.932-3.486 1.849-1.393 3.758-2.84 6.007-3.5 0.659-0.197 1.271-0.291 1.821-0.291 0.707 0 1.108 0.236 1.332 0.502 0.395 0.455 0.985 0.707 1.59 0.707h2.161c0.646 0 1.257-0.299 1.651-0.809C45.812 30.785 48 23.738 48 16.495c0-17.286-13.258-31.353-29.552-31.353 -7.217 0-14.121 2.875-19.346 7.814C-4.153-3.965-6.891-0.208-8.719 3.883c-1.624 3.642-3.445 8.929 0.761 11.511 2.881 1.766 6.313 1.889 8.976 4.112 1.088 0.902 1.74 2.031 2.256 3.336 0.149 0.387-0.075 0.814-0.482 0.904l-17.804 4.498c-0.645 0.162-1.06 0.775-0.978 1.434C-15.997 29.678-14.386 42.371-13.938 45.857zM21.777 21.715c2.168 0 3.921 1.752 3.921 3.92s-1.753 3.92-3.921 3.92 -3.921-1.752-3.921-3.92S19.609 21.715 21.777 21.715zM1.705 29.996c0.102-0.889 0.19-1.617 0.251-2.188 0.027-0.258 0.217-0.469 0.476-0.523 0.095-0.02 0.197-0.041 0.292-0.066 0.265-0.063 0.516 0.154 0.489 0.428 -0.088 0.773-0.169 1.59-0.21 2.439 -0.014 0.299-0.245 0.543-0.543 0.576 -0.027 0-0.055 0.008-0.088 0.008C1.983 30.711 1.657 30.385 1.705 29.996zM-2.175 35.188c-0.102 0.838-0.211 1.727-0.333 2.686 -0.598 4.865-5.239 5.803-7.882 5.938 -0.313 0.014-0.591-0.211-0.632-0.523l-0.945-7.053c-0.047-0.332 0.19-0.639 0.523-0.68 1.828-0.23 5.035-0.625 8.589-1.039C-2.461 34.469-2.128 34.801-2.175 35.188zM-12.185 30.363c2.562-0.543 7.04-1.502 10.315-2.195 0.265-0.053 0.51 0.164 0.476 0.436 -0.068 0.584-0.149 1.264-0.238 2.039 -0.034 0.277-0.251 0.502-0.537 0.529 -4.002 0.463-7.712 0.918-9.717 1.17 -0.333 0.041-0.632-0.191-0.68-0.523l-0.102-0.789C-12.701 30.725-12.497 30.432-12.185 30.363z" className="icon-white" />
      </svg>
      Search
    </a>
    <div id="s-f" className="flexi-container align-items-center mx-auto">
      <div className="search-form card-theme-blue m-auto">
        <div id="sForm" className="card">
          <h4 className="card-header">SEARCH</h4>
          <div className="card-body form-group">
            <div className="column">
              <div className="input-group">
                <input type="text" className="form-control search-field" id="usafbId" value={usafbId} name="PlayerID" placeholder="USAFB ID" aria-label="PlayerID" onChange={updateSearchFilters} />
              </div>
              <div className="input-group">
                <input id="firstName" value={firstName} className="form-control search-field flexi-search-input" type="text" placeholder="First Name" aria-label="Search" onChange={updateSearchFilters} />
              </div>
              <div className="input-group">
                <input type="text" value={lastName} className="form-control search-field" id="lastName" name="lName" placeholder="Last Name" aria-label="lName" onChange={updateSearchFilters} />
              </div>
            </div>
            <div className="column">
              <div className="input-group">
                <input type="text" value={dateOfBirth} className="form-control search-field" id="dateOfBirth" name="BirthDate" placeholder="Date of Birth" aria-label="BirthDate" onChange={updateSearchFilters} />
              </div>
              <div className="input-group">
                <input type="text" value={city} className="form-control search-field" id="city" name="City" placeholder="City" aria-label="City" onChange={updateSearchFilters} />
              </div>
              <div className="input-group">
                <select id="state" value={state} className="form-control radius-control search-field" name="State" aria-label="State" onChange={updateSearchFilters}>
                  <option disabled>State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <button type="button" className="bss-btn btn-primary-02" id="btnSearch" onClick={clearSearchFilters}>
                  Clear Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  clearSearchFilters: PropTypes.func.isRequired,
  usafbId: PropTypes.any.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Search;
