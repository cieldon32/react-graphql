import React, {useState} from 'react';
import * as R from 'ramda';

export interface PropertyValue {
  propertyValueId: string;
  propertyValue: string;
}

export interface PropertyItem {
  propertyIdLabel?: string;
  propertyId: string;
  propertyName: string;
  propertyValues?: PropertyValue[];
}

export interface Option {
  value: string;
  label: string;
  children?: string;
}

export interface Property {
  propertyId?: string;
  propertyName?: string;
  propertyValueId?: string;
  propertyValue?: string;
}

export type PropertiesType = PropertyItem[];

type OptionType = Option | null;

type OptionsType = Option[];

type PropertyValuesType = PropertyValue[];

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  // 初始化列表，编辑场景下，会有初始化的列表传入。
  const initProperties = (properties: PropertiesType) => {
    setProperties(properties);
  }
  // 根据索引号删除指定的规格
  const deleteProperty = (index) => {
    const newProperties = R.remove(index, 1, properties);

    setProperties(newProperties);
    return true;
  }
  // 更新列表
  const updatePropertiesByProperty = R.curry((property: OptionType, index: number) : string | boolean => {
    // 如果没有传入的规格, 则代表是删除某规格
    if(!property) {
      return deleteProperty(index);
    } else {

      const propertyName = property.label;
      const hasProperty = checkHasProperty(propertyName);

      if(hasProperty) {
        // 如果传入的规格名存在，怎更新失败
        return false;
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
          return true;
        } else {
          // 如果传入的规格id为null，代表传入的规格是手动输入待入库的，则返回规格名
          return propertyName;
        }
      }
    }
  });

  const updatePropertiesByPropertyValues = R.curry((
    propertyValues: PropertyValuesType,
    index: number
  ) => {
    if(R.type(index) === 'Number') {
      properties[index].propertyValues = propertyValues;
      setProperties([...properties]);
    }
  });

  const checkHasProperty = (propertyName) => {
    const hasProperty = R.find(
      R.propEq('propertyName', propertyName)
    )(properties);
    return hasProperty;
  }
  return {
    properties,
    initProperties,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues
  };
}

