export interface PropertyName {
  propertyId: string;
  propertyName: string;
}

export interface PropertyValue {
  propertyId?: string;
  propertyValueId: string;
  propertyValue: string;
}

export interface PropertyItem {
  propertyIdLabel?: string;
  propertyId: string;
  propertyName: string;
  propertyValues?: PropertyValue[];
}

export type SelectValue =  string;
export type SelectLabel = string;
export interface SelectOption {
  value: SelectValue;
  label: SelectLabel;
  children?: string;
  key?: string;
}

export type Property = Partial<{
  propertyId?: string;
  propertyName?: string;
  propertyValueId?: string;
  propertyValue?: string;
}>

export interface Sku {
  id?: string;
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
  properties?: Property[];
  key?: string;
  [propertyId: string]: any;
}

export interface SkuByKey {
  [key: string]: Sku;
}