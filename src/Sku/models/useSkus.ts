import React, {useEffect, useState} from 'react';
import * as R from 'ramda';
import {PropertyValue, Property, PropertyItem, Sku, SkuByKey} from '../common.interface';

type MatchSKu= (a: Sku) => string;

export const useSkus = () => {
  const [skus, setSkus] = useState<Sku[]>([]);
  // 编辑场景有skulist作为初始化数据
  const initSkus = (skuList: Sku[]) => {
    const fn = R.pipe(
      R.map((item: Sku) => {
        let properties: Property[] = item.properties || [];
        const newItem: Sku = R.dissoc('properties', item);
        newItem.key = item.id;
        const idsFn = R.prop('propertyId') ;
        const ids: Sku = idsFn(properties as any);
        return {...newItem, ...ids};
      })
    );
    const list = fn(skuList);
    console.log('setSkus', list)
    setSkus(list);
  }
  // 根据某个sku数据来更新列表
  const updateSkusBySku = (data : Sku) => {
    const mathed = R.prop('key') as MatchSKu;
    const ids: SkuByKey = R.indexBy<Sku>(mathed)([data]);
    const fn = R.map<Sku, any>((item: Sku) => {
      if(item.key && ids[item.key]){
        return R.merge<Sku, SkuByKey>(item, ids[item.key])
      } else {
        return item;
      }
        
    });
    const list = fn(skus);
    setSkus(list);
  }
  // 统一修改sku的价格
  const updateSkusByPrices = (data: any) => {
    const concatValues = (k: string, l: any, r: any) => r ? r : l;
    const fn = R.pipe(
      R.map(item => R.mergeWithKey(concatValues, item, data))
    );
    const list = fn(skus);
    setSkus(list);
  }

  const updateSkusByProperties = (properties : PropertyItem[]) => {
    const reduceDataSource = (item: PropertyItem) => {
      const propertyValue: PropertyValue[] = item.propertyValues || [];
      item = R.dissoc('propertyValues', item);
      const fn = R.pipe(
        R.map(R.merge(item))
      )
      return [fn(propertyValue)];
    }
    let newSkus: any = R.chain<PropertyItem, Property[]>(reduceDataSource, properties);
    const filterCon = R.compose<any, boolean, boolean>(R.not, R.isEmpty);
    newSkus = R.filter(filterCon, newSkus);
    const mathed = R.prop<any>('propertyId') as MatchSKu;
    const fn = R.pipe(
      R.indexBy<Sku>(mathed),
      R.merge({
        salePrice: '',
        currentStock: '',
        barcode: '',
        costPrice: '',
        tagPrice: ''
      })
    );
    if(newSkus[0] && newSkus[0].length > 1) {
      const reduceSkus = R.liftN(newSkus.length, (...args) => {
        return fn(args)
      });
      newSkus = R.apply(reduceSkus, newSkus);
      newSkus = R.map((item) => R.merge(item, {key: Math.random()*100}), newSkus);
    } else if (newSkus[0]) {
      newSkus = R.of(R.merge(fn(newSkus[0]), {key: Math.random()*100}));
    }
    setSkus(newSkus)
  }

  return {
    skus,
    initSkus,
    updateSkusBySku,
    updateSkusByPrices,
    updateSkusByProperties
  };
}

