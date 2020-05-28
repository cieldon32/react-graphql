import React from 'react'
import { Form, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import * as R from 'ramda';
import DetailFormProperties from './DetailFormProperties';
import DetailFormSku from './DetailFormSkuTable';
import {useSkuList} from './models/useSkuList';
import {useGoodContext} from './index.provider';
import './DetailForm.scss';

interface IProps {
  name?: string;
  value?: string;
}

const DetailFormSKUs: React.FC<IProps> = ({name = ''}) => {
  const {
    properties,
    updatePropertiesByProperty,
    skus,
    updateProperties
  } = useGoodContext();
  const {reduceSkuListforSubmit} = useSkuList();

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => {
        const removeProperty = (index: number) => {
          const res = updatePropertiesByProperty(null)(index);
          if(res){
            debugger;
            const newProperties = R.remove(index, 1, properties);
            updateProperties(newProperties);
            remove(index);
          }

        }
        return (
          <div>
            {
              fields.map((field) => (
                <DetailFormProperties
                  field={field}
                  remove={removeProperty}
                  key={field.key}
                />
              ))
            }
            <Form.Item
              wrapperCol={fields.length > 0 ? {offset: 2, span: 8} : {}}
              label={fields.length > 0 ? '' : '商品规格'}
              rules={[]}
              valuePropName="value"

            >
              <Button type="dashed" onClick={add}> <PlusOutlined /> 添加商品规格</Button>
            </Form.Item>
            {
              skus.length > 0 && <DetailFormSku dataSource={skus} />
            }
          </div>
        )
      }}
    </Form.List>
  )
}

export default DetailFormSKUs;
