import React, { useState, useContext, createContext } from 'react';
import {useProperties, PropertyItem} from './models/useProperties';
import {useSkus} from './models/useSkus';
import { usePropertyNameQuery, usePropertyValueQuery } from '../generated/graphql';

export const GoodContext: any = createContext(null);
export const useGoodContext: any = () => useContext(GoodContext);


interface Props {
  children: any
}

export default ({ children }: Props) => {
  const {
    properties,
    initProperties,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues
  } = useProperties();

  const {
    skus,
    initSkus,
    updateSkusBySku,
    updateSkusByPrices,
    updateSkusByProperties
  } = useSkus()

  const [ isFetching, setIsFetching ] = useState(false);
  const [ cateArr, setCateArr ] = useState([]);
  const [ goodsId, setGoodsId ] = useState('');
  const [ detailSource, setDetailSource ] = useState({});
  const [ isEditInit, toggleEditInit ] = useState(false);  // 编辑的时候初始化是否完成

  const fetchPropertyList = async () => {
    setIsFetching(true);
    const res = await usePropertyNameQuery.propertyNames();
    const propertyList = res.map((item: PropertyItem) => {
      return {
        value: item.propertyId,
        label: item.propertyName
      }
    });
    setIsFetching(false);
    return propertyList;
  }

  const fetchPropertyValusList = async (propertyId: string) => {
    setIsFetching(true);
    const propertyValuesList = await usePropertyValueQuery.propertyValues(propertyId);
    setIsFetching(false);
    return propertyValuesList;
  }

  // save a new propertyId
  const savePropertyId = async (propertyName: string) => {
    setIsFetching(true);
    const res = await Api.savePropertyId({propertyId: propertyName, propertyName: propertyName});
    console.log('savePropertyId', res)
    setIsFetching(false);
    return res;
  }

  const savePropertyValue = async (params) => {
    setIsFetching(true);
    const res = await Api.savePropertyValue(params);
    setIsFetching(false);
    return res;
  }

  const updateProperties = (newProperties) => {
    updateSkusByProperties(newProperties || properties);
  }

  const formatCateArr = (code, name) => {
    const codeArr = code.split('/');
    const nameArr = name.split('/');
    return codeArr.map((item, index) => {
      return {
        categoryName: nameArr[index],
        categoryCode: item
      }
    })
  }

  const initDetailForm = data => {
    setDetailSource(data);
    const {skuList, propertiesLevels} = data;
    initProperties(propertiesLevels);
    initSkus(skuList);
    // 编辑的时候，只有cateArr里面没有值的时候才会去初始化
    if (!cateArr.length) {
      setCateArr(formatCateArr(data.categoryCode, data.categoryName))
    }
  }


  const configObject = {
    fetchPropertyList,
    fetchPropertyValusList,
    savePropertyId,
    savePropertyValue,
    setCateArr,
    setGoodsId,
    initDetailForm,
    toggleEditInit,
    isFetching,
    cateArr,
    goodsId,
    detailSource,
    isEditInit,
    properties,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues,
    skus,
    updateSkusByPrices,
    updateSkusBySku,
    updateSkusByProperties,
    updateProperties
  }

  return (
    <GoodContext.Provider value={ configObject }>
      { children }
    </GoodContext.Provider>
  );
}
