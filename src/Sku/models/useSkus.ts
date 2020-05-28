import React, {useEffect, useState} from 'react';
import * as R from 'ramda';
import {PropertiesType} from './useProperties';
import {SKU, SkuListItem} from './useSkuList';

export interface Sku extends SKU {
  key: number;
  [propertyId: string]: any;
}

export type SkusType = Sku[];

export const useSkus = () => {
  const [skus, setSkus] = useState([]);
  // 编辑场景有skulist作为初始化数据
  const initSkus = (skuList: SkuListItem[]) => {
    // const fn = R.pipe(
    //   R.map(item => {
    //     let properties = item.properties || [];
    //     const newItem = R.dissoc('properties', item);
    //     newItem.key = item.id;
    //     const idsFn = R.pipe(
    //       R.indexBy(R.prop('propertyId'))
    //     );
    //     const ids = idsFn(properties);
    //     return {...newItem, ...ids};
    //   })
    // );
    // const list = fn(skuList);
    // setSkus(list);
  }
  // 根据某个sku数据来更新列表
  const updateSkusBySku = (data : Sku) => {
    // const ids = R.pipe(R.indexBy(R.prop('key')))([data]);
    // const fn = R.map(item => {
    //   if(ids[item.key]){
    //     return R.merge(item, ids[item.key])
    //   } else
    //     return item;
    // });
    // const list = fn(skus);
    // setSkus(list);
  }
  // 统一修改sku的价格
  const updateSkusByPrices = (data: any) => {
    // const concatValues = (k, l, r) => r ? r : l;
    // const fn = R.pipe(
    //   R.map(item => R.mergeWithKey(concatValues, item, data))
    // );
    // const list = fn(skus);
    // setSkus(list);
  }

  const updateSkusByProperties = (properties : PropertiesType) => {
    // const reduceDataSource = (item) => {
    //   const propertyValue = item.propertyValues;
    //   item = R.dissoc('propertyValues', item);
    //   const fn = R.pipe(
    //     R.map(R.merge(item))
    //   )
    //   return [fn(propertyValue)];
    // }
    // let newSkus = R.chain(reduceDataSource, properties);
    // const filterCon = R.compose(R.not, R.isEmpty);
    // newSkus = R.filter(filterCon, newSkus);
    // const fn = R.pipe(
    //   R.indexBy(R.prop('propertyId')),
    //   R.merge({
    //     salePrice: '',
    //     currentStock: '',
    //     barcode: '',
    //     costPrice: '',
    //     tagPrice: ''
    //   })
    // );
    // if(newSkus[0] && newSkus[0].length > 1) {
    //   const reduceSkus = R.liftN(newSkus.length, (...args) => {
    //     return fn(args)
    //   });
    //   newSkus = R.apply(reduceSkus, newSkus);
    //   newSkus = R.map((item) => R.merge(item, {key: Math.random()*100}), newSkus);
    // } else if (newSkus[0]) {
    //   newSkus = R.of(R.merge(fn(newSkus[0]), {key: Math.random()*100}));
    // }
    // setSkus(newSkus)
  }

  return {
    skus,
    initSkus,
    updateSkusBySku,
    updateSkusByPrices,
    updateSkusByProperties
  };
}

