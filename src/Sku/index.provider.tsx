import React, { useState, useContext, createContext, useEffect } from 'react';
import {useProperties} from './models/useProperties';
import {useSkus} from './models/useSkus';
import {PropertyItem} from './common.interface';

export const GoodContext: any = createContext(null);
export const useGoodContext: any = () => useContext(GoodContext);


interface Props {
  children: any
}

interface FormData {
  skuList: any[];
  propertiesLevels: any[];
}

export default ({ children }: Props) => {
  const {
    properties,
    initProperties,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues,
    fetchPropertyNameList,
    fetchPropertyValusList,
    addPropertyName,
    addPropertyValue
  } = useProperties();

  const {
    skus,
    initSkus,
    updateSkusBySku,
    updateSkusByPrices,
    updateSkusByProperties
  } = useSkus()

  const [ cateArr, setCateArr ] = useState([]);
  const [ goodsId, setGoodsId ] = useState('');
  const [ isEditInit, toggleEditInit ] = useState(false);

  const updateProperties = (newProperties: PropertyItem[]) => {
    updateSkusByProperties(newProperties || []);
  }

  const initDetailForm = (data: FormData) => {
    const {skuList=[], propertiesLevels=[]} = data;
    initProperties(propertiesLevels);
    initSkus(skuList);
  }

  useEffect(() => {
    initDetailForm({} as FormData)
  }, [])


  const configObject = {
    fetchPropertyNameList,
    fetchPropertyValusList,
    addPropertyName,
    addPropertyValue,
    setCateArr,
    setGoodsId,
    initDetailForm,
    toggleEditInit,
    cateArr,
    goodsId,
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
