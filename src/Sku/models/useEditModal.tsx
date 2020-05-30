import React, {useEffect, useState} from 'react';
import { Form, Modal, Input } from 'antd';

interface Props {
  title: string;
  value: any;
  onOk: (v: any) => void;
  onChange: (v: any) => void;
}

export const useEditModal = () => {

  const showModal = ({title, value, onOk, onChange}: Props) => {
    const change = (e: any) => {
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

