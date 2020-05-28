import React, {useEffect, useState} from 'react';
import { Form, Button, Modal, Input } from 'antd';


export const useEditModal = () => {

  const showModal = ({title, value, onOk, onChange}) => {
    const change = (e) => {
      onChange(e.target.value);
      value = e.target.value;
    }
    Modal.confirm({
      title,
      content: <Input onChange={change} defaultValue={value} />,
      onOk: () => {
        onOk(value)
      }
    })
  }

  return {showModal};
}

