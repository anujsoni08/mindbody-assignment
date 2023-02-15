import React from "react";
import PropTypes from "prop-types";

// Constants
import { DEFAULT_PAGE_SIZE } from "../../constants/app.general";

// Components
import PostItem from "../postItem";

// Styles
import "./styles.css";

const PostList = (props) => {
  const { posts, currentPage } = props;

  const renderPostList = () => {
    if (posts.length === 0) {
      <h1> Please refresh</h1>;
    }

    const start = (currentPage - 1) * DEFAULT_PAGE_SIZE;

    const postsToBeDisplayed = posts.slice(start, start + DEFAULT_PAGE_SIZE);

    return (
      <div className="post-list-wrapper">
        {postsToBeDisplayed.map((postInfo) => (
          <PostItem postInfo={postInfo} key={postInfo.id} />
        ))}
      </div>
    );
  };

  return renderPostList();
};

PostItem.propTypes = {
  posts: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PostList;
