import React, {useState, useEffect} from 'react';
import * as R from 'ramda';
import { usePropertyNamesQuery, usePropertyValuesQuery, useAddNameMutation, useAddValueMutation } from '../../generated/graphql';
import {Property, PropertyName, PropertyValue, PropertyItem, SelectLabel, SelectOption} from '../common.interface';

export const useProperties = () => {
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [propertyId, setPropertyId] = useState('');
  const propertyNameListRes = usePropertyNamesQuery();
  const propertyValueListRes = usePropertyValuesQuery({variables: {propertyId}});
  const [addName] = useAddNameMutation();
  const [addValue] = useAddValueMutation();

  const fetchPropertyNameList = async () => {
    const {data, loading, error} = propertyNameListRes;
    const list: PropertyName[] = data?.propertyNames as PropertyName[] || [];
    let propertyNameOptions: SelectOption[] = [];
    if(list.length > 0) {
      propertyNameOptions = R.map((item: PropertyName) => ({
        value: item.propertyId,
        label: item.propertyName
      }))(list);
    }
    if(error){
      return {error};
    }
    if(loading) {
      return {loading}
    } else {
      return {list: propertyNameOptions, loading};
    }
  }

  const fetchPropertyValusList = async (propertyId: string) => {
    await setPropertyId(propertyId);
    const {data, loading, error} = propertyValueListRes;
    const list: PropertyValue[] = data?.propertyValues as PropertyValue[];
    let propertyValueOptions: SelectOption[] = [];
    if(list.length > 0) {
      propertyValueOptions = R.map((item: PropertyValue) => ({
        value: item.propertyValueId,
        label: item.propertyValue
      }))(list);
    }
    if(error){
      return {error};
    }
    if(loading) {
      return {loading}
    } else {
      return {list: propertyValueOptions, loading};
    }
  }

  const addPropertyName = async(propertyName: string) => {
    const res = await addName({
      variables: {propertyName}
    });
    return res.data?.addPropertyName;
  }

  const addPropertyValue = async(propertyId: string, propertyValue: string) => {
    const res = await addValue({
      variables: {propertyId, propertyValue}
    });
    return res.data?.addPropertyValue;
  }

  // 初始化列表，编辑场景下，会有初始化的列表传入。
  const initProperties = (properties: PropertyItem[]) => {
    setProperties(properties);
  }
  // 根据索引号删除指定的规格
  const deleteProperty = (index: number) => {
    const newProperties = R.remove(index, 1, properties);

    setProperties(newProperties);
    return true;
  }
  // 更新列表
  const updatePropertiesByProperty = R.curry((property: SelectOption | null, index: number) : any => {
    // 如果没有传入的规格, 则代表是删除某规格
    if(!property) {
      return deleteProperty(index);
    } else {
      const propertyName: SelectLabel = property.label;
      const hasProperty = checkHasProperty(propertyName);

      if(hasProperty) {
        // 如果传入的规格名存在，怎更新失败
        return {
          success: false,
          message: '不要重复规格'
        };
      } else {
        const propertyId = property.value;
        // 如果传入的规格id和规格名不相同，表示规格来源有现有的规格源列表中
        if(propertyId !== propertyName){
          const item = {
            propertyId,
            propertyName,
            propertyValues: []
          };
          if(R.type(index) === 'Number') {
            // 如果索引号存在，则将传入的规格替换现有的
            properties[index] = item;
          } else {
            // 如果索引号不存在，则将传入的规格加进列表
            properties.push(item);
          }
          setProperties([...properties]);
          return {
            success: true
          };
        } else {
          // 如果传入的规格id为null，代表传入的规格是手动输入待入库的，则返回规格名
          return {
            success: true,
            propertyName
          };
        }
      }
    }
  });

  const updatePropertiesByPropertyValues = R.curry((
    propertyValues: PropertyValue[],
    index: number
  ) => {
    if(R.type(index) === 'Number') {
      properties[index].propertyValues = propertyValues || [];
      setProperties([...properties]);
    }
  });

  type Match = (p: Property) => boolean

  const checkHasProperty = (propertyName: Property['propertyName']) => {
    const matched = R.propEq('propertyName', propertyName) as Match;
    return R.find<Property>(matched)(properties);
  }

  

  return {
    properties,
    setPropertyId,
    initProperties,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues,
    fetchPropertyNameList,
    fetchPropertyValusList,
    addPropertyName,
    addPropertyValue
  };
}

