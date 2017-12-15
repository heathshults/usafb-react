import React from 'react';
import PropTypes from 'prop-types';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Label from './components/label/Label';

const pagination = props => (
  <div className="row d-flex justify-content-between mt-3 mb-3">
    <Label
      currentPage={props.currentPage}
      totalItems={props.totalItems}
    />
    <Pagination className="mb-0">
      <PaginationItem>
        <PaginationLink previous />
      </PaginationItem>
      {[...Array(20)].map((val, index) => (
        <PaginationItem key={index}>
          <PaginationLink>
            {index}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next />
      </PaginationItem>
    </Pagination>
  </div>
);

pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default pagination;
