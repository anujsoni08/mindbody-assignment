import React, { useEffect, useState } from "react";

// Components
import PostList from "../../components/postList";
import PostPagination from "../../components/postPagination";

const PostListContainer = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPostList();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  async function fetchPostList() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const postListResponse = await fetch(url);
    const postList = await postListResponse.json();
    setPosts(postList);
  }

  const renderPostList = () => {
    return <PostList posts={posts} currentPage={currentPage} />;
  };

  const renderPagination = () => {
    return (
      <PostPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalSize={posts.length}
      />
    );
  };

  return (
    <div>
      <h1>Post List</h1>
      {renderPostList()}
      {renderPagination()}
    </div>
  );
};

export default PostListContainer;
