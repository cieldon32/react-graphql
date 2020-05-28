import React, { useState, useContext, createContext } from 'react';
import {useProperties, PropertyItem} from './models/useProperties';
import {useSkus} from './models/useSkus';

export const GoodContext: any = createContext(null);
export const useGoodContext: any = () => useContext(GoodContext);


interface Props {
  children: any
}

export default ({ children }: Props) => {
  const {
    properties,
    propertyNameList,
    propertyValueList,
    setPropertyId,
    initProperties,
    updatePropertiesByProperty,
    // updatePropertiesByPropertyValues,
    fetchPropertyNameList
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
  const [ isEditInit, toggleEditInit ] = useState(false);

  const fetchPropertyValusList = (propertyId: string) => {
    setPropertyId(propertyId)
  }

  // save a new propertyId
  const savePropertyId = async (propertyName: string) => {
    console.log('savePropertyId', propertyName)
    // const res = await Api.savePropertyId({propertyId: propertyName, propertyName: propertyName});
    // console.log('savePropertyId', res)
    // return res;
  }

  const savePropertyValue = async (params: any) => {
    // setIsFetching(true);
    // const res = await Api.savePropertyValue(params);
    // setIsFetching(false);
    // return res;
  }

  const updateProperties = (newProperties: any) => {
    // updateSkusByProperties(newProperties || properties);
  }

  const initDetailForm = (data: any) => {
    // setDetailSource(data);
    const {skuList, propertiesLevels} = data;
    initProperties(propertiesLevels);
    initSkus(skuList);
    // 编辑的时候，只有cateArr里面没有值的时候才会去初始化
    // if (!cateArr.length) {
    //   setCateArr(formatCateArr(data.categoryCode, data.categoryName))
    // }
  }


  const configObject = {
    propertyNameList,
    propertyValueList,
    fetchPropertyNameList,
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
    // updatePropertiesByPropertyValues,
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
