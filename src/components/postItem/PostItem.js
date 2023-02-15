import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Card } from "antd";

// Styles
import "./styles.css";

const PostItem = (props) => {
  const { postInfo } = props;
  const { title, body } = postInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <div className="post-item" onClick={showModal}>
          <p>{title}</p>
        </div>
      </Card>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{body}</p>
      </Modal>
    </>
  );
};

PostItem.propTypes = {
  postInfo: PropTypes.object.isRequired,
};

export default PostItem;
