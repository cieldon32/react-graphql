import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Modal, Input } from 'antd';
import {useEditModal} from './useEditModal';

export const useEdit = () => {
  const [value, setValue] = useState();
  const {showModal} = useEditModal();

  const editValue = ({title, value, onOk}) => {
    showModal({
      title,
      value,
      onOk: (v) => {
        onOk(v);
      },
      onChange: (v) => {
        setValue(v)
      }
    });
  }

  return {value, editValue};
}

