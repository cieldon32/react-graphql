import React, {useEffect, useState} from 'react';
import { Form, Modal, Input } from 'antd';
import {useEditModal} from './useEditModal';

interface Props {
  title: string;
  value: unknown;
  onOk: (v: any) => void
}

export const useEdit = () => {
  const [value, setValue] = useState();
  const {showModal} = useEditModal();

  const editValue = ({title, value, onOk}: Props) => {
    showModal({
      title,
      value,
      onOk: (v: any) => {
        onOk(v);
      },
      onChange: (v: any) => {
        setValue(v)
      }
    });
  }

  return {value, editValue};
}

