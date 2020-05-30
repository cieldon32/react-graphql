import React, {useEffect, useState} from 'react';
import * as R from 'ramda';
import {Sku, Property} from '../common.interface';

type MatchSKu= (a: Sku) => boolean;

export const useSkuList = () => {
  const [skuList, setSkuList] = useState<Sku[]>([]);

  const initSkuList = (list: Sku[]) => {
    setSkuList(list);
  }

  const transformSkusToSkuList = (skus: Sku[]) => {
    let list = [];
    const fn = R.pipe(
      R.map((item: Sku) => {
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
          R.dissoc('skuCode')
        )
        let newItem: any = dissocFn(item);
        let propertiesList = R.values(newItem);
        propertiesList = R.map((item: Property) => {
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

  const reduceSkuListforSubmit = (skus: Sku[]) => {
    let list = transformSkusToSkuList(skus);
    let deletedSkuCodeList: unknown[] = []; //被删除的sku
    const hasNullSalePrice = R.filter((item: Sku) => !item.salePrice)(list).length > 0;
    const hasNullCurrentStock = R.filter((item: Sku) => !item.currentStock)(list).length > 0;
    const hasSkuCode = (item : Sku) => R.isNil(item.skuCode);
    const fn1 = R.filter<Sku>(hasSkuCode);
    let editSkuList = fn1(list);
    if(editSkuList.length <= 0) {
      // 有删除新增
      const match = R.prop('skuCode') as MatchSKu;
      deletedSkuCodeList = R.map(match, skuList);
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

