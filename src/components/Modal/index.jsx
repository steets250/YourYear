import React from 'react';
import { Modal } from 'antd';

import './style.less';

const ModalComponent = (props) => {
  const { title, image, visible, handleOk, handleCancel, content } = props;

  return (
    <Modal className="modal" footer={null} onOk={handleOk} onCancel={handleCancel} title={title} visible={visible}>
      {content}
    </Modal>
  );
};

export default ModalComponent;
