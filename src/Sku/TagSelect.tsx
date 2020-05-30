import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { Select } from 'antd';
import {SelectOption} from './common.interface'
import './DetailForm.scss';

interface IProps {
  value: any;
  dataSource: SelectOption[];
  onChange?: (v: any, options: any) => void;
  onFocus?: () => any;
  notFoundContent: any;
  disabled: boolean;
}

const TagSelect: React.FC<IProps> = ({
  dataSource,
  onChange,
  onFocus,
  disabled,
  notFoundContent,
  value : v
}) => {
  const [value, setValue] = useState<string[]>([]);
  const [list, setList] = useState<SelectOption[]>([]);

  const init = (value: unknown, dataSource: SelectOption[]) => {
    setList(dataSource);
    if(value){
      const tagsValue: string[] = R.map(R.prop('propertyValueId'), value);
      setValue(tagsValue);
    }
  }

  useEffect(() => {
    init(v, dataSource);
  }, [dataSource, v]);


  return (
    <Select
      mode="tags"
      placeholder="Please select one"
      notFoundContent={notFoundContent}
      disabled={disabled}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
    >
      {
        list.map((item, index) => (
          <Select.Option key={item.value + index} value={item.value}>
            {item.label}
          </Select.Option>
        ))
      }
    </Select>
  )
}

export default TagSelect;
