import React, {useEffect, useState} from 'react';
import * as R from 'ramda';
import {Property} from './useProperties';
import {SkusType} from './useSkus';

export interface SKU {
  id?: number;
  salePrice: number;
  costPrice: number;
  tagPrice: number;
  skuDistribute?: any;
  currentStock: number;
  spcItemCode?: any;
  skuCode?: string;
  storeCode?: string;
  productCode?: string;
  barcode?: string;
}

interface SkuListItem extends SKU {
  properties: Property[];
}

export type SkuList = SkuListItem[];

export const useSkuList = () => {
  const [skuList, setSkuList] = useState([]);

  const initSkuList = (list: SkuList) => {
    setSkuList(list);
  }

  const transformSkusToSkuList = (skus: SkusType) => {
    let list = [];
    const fn = R.pipe(
      R.map(item => {
        const dissocFn = R.pipe(
          R.dissoc('salePrice'),
          R.dissoc('currentStock'),
          R.dissoc('barcode'),
          R.dissoc('costPrice'),
          R.dissoc('tagPrice'),
          R.dissoc('key'),
          R.dissoc('id'),
          R.dissoc('skuDistribute'),
          R.dissoc('spcItemCode'),
          R.dissoc('skuCode'),
          R.dissoc('storeCode'),
          R.dissoc('productCode'),
        )
        let newItem = dissocFn(item);
        let propertiesList = R.values(newItem);
        propertiesList = R.map(item => {
          return {
            propertyId: item.propertyId,
            propertyValueId: item.propertyValueId
          }
        })(propertiesList);
        return {
          properties: propertiesList,
          salePrice: item.salePrice,
          currentStock: item.currentStock,
          barcode: item.barcode,
          costPrice: item.costPrice,
          tagPrice: item.tagPrice,
          key: item.key,
          skuCode: item.skuCode,
          id: item.id
        }
      })
    )
    list = fn(skus);
    return list;

  }

  const reduceSkuListforSubmit = (skus: SkusType) => {
    let list = transformSkusToSkuList(skus);
    let deletedSkuCodeList = []; //被删除的sku
    const hasNullSalePrice = R.filter(item => !item.salePrice)(list).length > 0;
    const hasNullCurrentStock = R.filter(item => !item.currentStock)(list).length > 0;
    const hasSkuCode = (item) => {
      return item.skuCode
    }
    const fn1 = R.filter(hasSkuCode);
    let editSkuList = fn1(list);
    if(editSkuList.length <= 0) {
      // 有删除新增
      deletedSkuCodeList = R.map(R.prop('skuCode'), skuList);
    } else {
      //有修改就不会有新增
      list = [];
    }

    return {
      skuList: list,
      editSkuList,
      deletedSkuCodeList,
      hasNullSalePrice,
      hasNullCurrentStock
    }
  }

  return {
    skuList,
    initSkuList,
    reduceSkuListforSubmit
  };
}

