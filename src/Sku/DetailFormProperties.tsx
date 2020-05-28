import React, { useState, useEffect } from 'react'
import { Form, Spin, Card, message } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons';
import * as R from 'ramda';
import SearchSelect from './SearchSelect';
import TagSelect from './TagSelect';
import {useGoodContext} from './index.provider';
import {PropertyItem, Option, Property} from './models/useProperties';
import './DetailForm.scss';

interface IProps {
  field: any;
  dataSource?: any[];
  remove: (v: any) => any;
  onChange?: (v: any, i: number) => any;
}

const DetailFormProperties: React.FC<IProps> = ({field, remove, onChange, dataSource}) => {
  const [tags, setTags] = useState<Property[]>([]);
  const [propertyValuesList, setPropertyValuesList] = useState<Property[]>([]);
  const [propertyList, setPropertyList] = useState<Option[]>([]);
  const [property, setProperty] = useState<PropertyItem>({} as PropertyItem);
  const {
    isFetching,
    properties,
    fetchPropertyList,
    fetchPropertyValusList,
    updatePropertiesByProperty,
    updatePropertiesByPropertyValues,
    savePropertyId,
    savePropertyValue,
    updateProperties,
    skus
  } = useGoodContext();


  const changePropertyId = (v: Option) => {
    const res = updatePropertiesByProperty({value: v.value, label: v.children})(field.name);
    if(!res) {
      message.error('不要重复规格');
    } else if(R.type(res) === 'String') {
      addPropertyTopropertyList(res);
    } else {
      updateProperties();
    }
  }

  const addPropertyTopropertyList = async (propertyName: string) => {
    const res: any = await savePropertyId(propertyName);
    const {propertyId} = res;
    const property: Option = {value: propertyId, label: propertyName};
    const result = updatePropertiesByProperty(property)(field.name);
    if(result) {
      updateProperties();
      propertyList.push(property);
      setPropertyList([...propertyList]);
      setProperty({
        propertyId,
        propertyName
      });
    }

  }

  const addPropertyValuesTopropertyValuesList = async (value: string) => {
    const res: any = await savePropertyValue({
      propertyValue	: value,
      propertyId: property.propertyId
    });
    const {propertyValueId, propertyValue} = res;
    const item :Property = {
      propertyValueId,
      propertyValue
    }

    propertyValuesList.push(item);
    setPropertyValuesList([...propertyValuesList]);
    tags.push(item);
    setTags([...tags]);
    updatePropertiesByPropertyValues(tags)(field.name);
    updateProperties();
  }

  const isEmpty = (list: unknown[]) => {
    return R.filter(R.isEmpty, list).length > 0;
  }

  const changePropertyValues = (v: any[], options: Option[]) => {
    if(isEmpty(options)) {
      addPropertyValuesTopropertyValuesList(R.last(v));
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
    if(propertyList.length === 0){
      const propertyList = await fetchPropertyList();
      setPropertyList(propertyList);
    }
  }

  const onFocusPropertyValues = async () => {
    const propertyId : PropertyItem = property && property;
    if(propertyValuesList.length === 0 && propertyId.propertyId){
      const res = await fetchPropertyValusList(propertyId.propertyId);
      setPropertyValuesList(res);
    }
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
        dataSource={propertyList}
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
            dataSource={propertyValuesList}
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
