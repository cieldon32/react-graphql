import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import * as R from 'ramda';
import {PropertyItem, SelectOption} from './common.interface';
import './DetailForm.scss';

const { Option } = Select;

interface IProps {
  value: PropertyItem;
  dataSource: SelectOption[];
  onChange: (v: SelectOption) => any;
  onFocus?: () => any;
  onAdd?: (v: any) => any;
  notFoundContent: any;
}

const SearchSelect: React.FC<IProps> = ({
  dataSource,
  onChange,
  onFocus,
  notFoundContent,
  value : v
}) => {
  const [value, setValue] = useState('');
  const [list, setList] = useState<SelectOption[]>([]);
  const [searchList, setSearchList] = useState<SelectOption[]>([]);


  const onSearch = (v: string) => {
    const hasOne = R.find(R.propEq('label', v))(list);
    if(!hasOne && R.trim(v) != ''){
      const newList = [...list, {
        value: v,
        label: v
      }];
      const newSearchList = [...searchList, {
        value: v,
        label: v
      }];
      setList(newList);
      setSearchList(newSearchList);
    }

  }

  const onSelect = async (v: string, option: any) => {
    const newList = R.difference(list, searchList);
    const hasOne = R.find(R.propEq('value', v))(list);
    if(searchList.length > 0) {
      const newItem = {
        value: v,
        label: option.children || option.value
      }
      if(!hasOne){
        newList.unshift(newItem);
      }

    }
    setList(newList);
    setSearchList([]);
    const res = await onChange(option);
    if(!res){
      setValue('')
    } else {
      setValue(v)
    }
  }

  const onBlur = () => {
    // if(searchList.length > 0){
    //   const newList = R.difference(list, searchList);
    //   const lastItem = searchList.pop();
    //   if(lastItem.value){
    //     newList.unshift(lastItem)
    //   }
    //   setList(newList);
    //   setSearchList([]);
    // }
  }

  const init = (value: PropertyItem, dataSource: SelectOption[]) => {
    if(value){
      setValue(value.propertyId);
    }
    dataSource = dataSource.length > 0 ? dataSource : [];
    if(value && dataSource.length === 0){
      dataSource = [{
        value: value.propertyId,
        label: value.propertyName
      }];
    }
    setList(dataSource);
  }

  useEffect(() => {
    init(v, dataSource);
  }, [dataSource, v]);

  return (
    <Select
      showSearch
      placeholder="Please select one..."
      value={value}
      optionFilterProp="children"
      notFoundContent={notFoundContent}
      onSearch={onSearch}
      onBlur={onBlur}
      onSelect={onSelect}
      onFocus={onFocus}
    >
      {list.map((item: any, index) => (
        <Option value={item.value} key={item.value + index}>{item.label}</Option>
      ))}
    </Select>
  )
}

export default SearchSelect;
