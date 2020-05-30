import React, { useState, useEffect } from 'react'
import { Form, Spin, Card, message } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons';
import * as R from 'ramda';
import SearchSelect from './SearchSelect';
import TagSelect from './TagSelect';
import {useGoodContext} from './index.provider';
import {PropertyItem, SelectOption, Property, PropertyName} from './common.interface';
import './DetailForm.scss';

interface IProps {
  field: any;
  dataSource?: any[];
  remove: (v: any) => any;
  onChange?: (v: any, i: number) => any;
}

const DetailFormProperties: React.FC<IProps> = ({field, remove, onChange, dataSource}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [tags, setTags] = useState<Property[]>([]);
  const [propertyNameOptions, setPropertyNameOptions] = useState<SelectOption[]>([])
  const [propertyValuesOptions, setPropertyValuesOptions] = useState<SelectOption[]>([]);
  const [property, setProperty] = useState<PropertyItem>({} as PropertyItem);
  const {
    properties,
    fetchPropertyNameList,
    fetchPropertyValusList,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues,
    addPropertyName,
    addPropertyValue,
    updateProperties,
    skus
  } = useGoodContext();


  const changePropertyId = async (v: SelectOption) => {
    const res = updatePropertiesByProperty({value: v.value, label: v.children})(field.name);
    const {success, message, propertyName} = res;
    if(!success && !message){
      message.error(message);
    } else if (success && propertyName) {
      addPropertyTopropertyList(propertyName);
    } else {
      updateProperties();
    }
    return success
  }

  const addPropertyTopropertyList = async (propertyName: string) => {
    const res: any = await addPropertyName(propertyName);
    if(res.success){
      // mock data cant return a new propertyId
      const property: SelectOption = {value: propertyName, label: propertyName};
      const result = updatePropertiesByProperty(property)(field.name);
      if(result.success){
        updateProperties();
        propertyNameOptions.push(property);
        setPropertyNameOptions([...propertyNameOptions]);
        setProperty({
          propertyId: propertyName,
          propertyName
        });
      }
    }

  }

  const addPropertyValuesTopropertyValuesList = async (value: string | undefined) => {
    const res = await addPropertyValue(value, property.propertyId);
    console.log('addPropertyValuesTopropertyValuesList', res);
    const {success, message : text} = res;
    if(success){
      const item: SelectOption = {
        value: value || '',
        label: value || ''
      }
      propertyValuesOptions.push(item);
      setPropertyValuesOptions([...propertyValuesOptions]);
      tags.push({
        propertyId: property.propertyId,
        propertyName: property.propertyName,
        propertyValueId: value,
        propertyValue: value
      });
      setTags([...tags]);
      updatePropertiesByPropertyValues(tags)(field.name);
    } else {
      message.error(text);
    }
  }

  const isEmpty = (list: unknown[]) => {
    return R.filter(R.isEmpty, list).length > 0;
  }

  const changePropertyValues = (v: string[], options: SelectOption[]) => {
    if(isEmpty(options)) {
      const propertyValue: string | undefined = R.last(v)
      addPropertyValuesTopropertyValuesList(propertyValue);
    }
    const values = R.map(item => {
      return {
        propertyValueId: item.value,
        propertyValue: item.children
      }
    }, options);
    updatePropertiesByPropertyValues(values)(field.name);
    updateProperties();
  }

  const onFocusProperty = async () => {
    if(propertyNameOptions.length === 0){
      setIsFetching(true);
      const res = await fetchPropertyNameList();
      const {list} = res;
      if(list !== propertyNameOptions) {
        setPropertyNameOptions(list);
      }
      setIsFetching(false);
    }
  }

  const onFocusPropertyValues = async () => {
    setIsFetching(true);
    const propertyId = property.propertyId;
    const res = await fetchPropertyValusList(propertyId);
    const {list} = res;
    if(list !== propertyValuesOptions) {
      setPropertyValuesOptions(list)
    }
    setIsFetching(false);
  }

  const init = (properties: any) => {
    const propertyId = properties[field.name];
    const tags = propertyId && propertyId.propertyValues;
    setProperty(propertyId);
    setTags(tags);

  }

  useEffect(() => {
    if(properties && properties.length > 0) {
      init(properties);
    }
  }, [properties]);

  const title = (
    <Form.Item
      label="规格名"
      required={false}
    >
      <SearchSelect
        dataSource={propertyNameOptions}
        notFoundContent={isFetching && <Spin size="small" />}
        onChange={changePropertyId}
        onFocus={onFocusProperty}
        value={property}
      />
    </Form.Item>

  )

  const extra = (
    <CloseCircleOutlined
      className="detail-form-close"
      onClick={() => {
        remove(field.name);
      }}
    />
  )

  return (
    <Form.Item
      label="商品规格"
      required={false}
      key={field.key}
    >
      <Card title={title} extra={extra} type="inner">
        <Form.Item
          label="规格值"
          required={false}
        >
          <TagSelect
            value={tags}
            dataSource={propertyValuesOptions}
            disabled={!property}
            notFoundContent={isFetching && <Spin size="small" />}
            onChange={changePropertyValues}
            onFocus={onFocusPropertyValues}
          ></TagSelect>
        </Form.Item>

      </Card>

    </Form.Item>
  )
}

export default DetailFormProperties;
