import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { Select } from 'antd';
import {Property, Option} from './models/useProperties'
import './DetailForm.scss';

interface IProps {
  value: any;
  dataSource: Property[];
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
  const [list, setList] = useState<Option[]>([]);

  const init = (value: unknown, dataSource: Property[]) => {
    if(value){
      const tagsValue: string[] = R.map(R.prop('propertyValueId'), value);
      setValue(tagsValue);
    }
    // if(value && dataSource.length === 0){
    //   const list: Option[] = R.map((item: Property) => {
    //     return {
    //       value: item.propertyValueId,
    //       label: item.propertyValue
    //     }
    //   }, value);
    //   setList(list)
    // }
    // if(dataSource.length > 0) {
    //   const list: Option[] = R.map((item: Property) => {
    //     return {
    //       value: item.propertyValueId,
    //       label: item.propertyValue
    //     }
    //   }, dataSource);
    //   setList(list);
    // }
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
