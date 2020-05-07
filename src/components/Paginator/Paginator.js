import React from "react";

// Styles
import { PaginatorWrapper, PaginatorArrow, PaginatorPage } from "./styled";

const Paginator = ({ currentPage, totalPages, moveBack, moveForward }) => {
  return (
    <PaginatorWrapper className="Paginator">
      <PaginatorArrow disabled={currentPage === 1} onClick={() => moveBack()}>
        <i className="material-icons">keyboard_arrow_left</i>
      </PaginatorArrow>
      <PaginatorPage>{currentPage}</PaginatorPage>
      <PaginatorArrow
        disabled={currentPage === totalPages}
        onClick={() => moveForward()}
      >
        <span className="material-icons">keyboard_arrow_right</span>
      </PaginatorArrow>
    </PaginatorWrapper>
  );
};

Paginator.propTypes = {};

export default Paginator;
