import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "antd";

// Constants
import { DEFAULT_PAGE_SIZE } from "../../constants/app.general";

// Styles
import "./styles.css";

const PostPagination = (props) => {
  const { currentPage, setCurrentPage, totalSize } = props;

  const onPageChange = (updatedPage) => {
    if (updatedPage === currentPage) {
      return;
    }
    setCurrentPage(updatedPage);
  };

  return (
    <div className="pagination">
      <Pagination
        onChange={onPageChange}
        defaultCurrent={1}
        current={currentPage}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        total={totalSize}
        showSizeChanger={false}
      />
    </div>
  );
};

PostPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalSize: PropTypes.number.isRequired,
};

export default PostPagination;
