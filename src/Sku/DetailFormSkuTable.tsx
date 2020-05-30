import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import DetailFormSkuSummary from './DetailFormSkuSummary';
import AReactTable from './table';
import {useGoodContext} from './index.provider';
import {PropertyItem} from './common.interface';
import './DetailForm.scss';

interface IProps {
  dataSource: any[]
}

const DetailFormSku: React.FC<IProps> = ({dataSource}) => {
  const [columns, setColumns] = useState([]);
  const {
    skus,
    properties,
    updateSkusByPrices,
    updateSkusBySku
  } = useGoodContext();


  const initColumns = () => {
    const columns: any = [{
      title: '零售价（元）',
      dataIndex: 'salePrice',
      key: 'salePrice',
      type: 'number',
      editable: true,
      handleSave: (data: string) => {
        changeSkus(data);
      },
      render: (text: unknown) => text,
    },{
      title: '库存',
      dataIndex: 'currentStock',
      key: 'currentStock',
      type: 'number',
      editable: true,
      handleSave: (data: string) => {
        changeSkus(data);
      },
      render: (text: unknown) => text,
    },{
      title: '规格编码',
      dataIndex: 'barcode',
      type: 'string',
      key: 'barcode',
      editable: true,
      handleSave: (data: string) => {
        changeSkus(data);
      },
      render: (text: unknown) => text,
    },{
      title: '成本价',
      dataIndex: 'costPrice',
      key: 'costPrice',
      type: 'number',
      editable: true,
      handleSave: (data: string) => {
        changeSkus(data);
      },
      render: (text: unknown) => text,
    },{
      title: '吊牌价',
      dataIndex: 'tagPrice',
      key: 'tagPrice',
      type: 'number',
      editable: true,
      handleSave: (data: string) => {
        changeSkus(data);
      },
      render: (text: unknown) => text,
    },];

    properties.map((item: PropertyItem) => {
      if(item.propertyValues && item.propertyValues.length > 0){
        columns.unshift({
          title: item.propertyIdLabel || item.propertyName,
          dataIndex: item.propertyId,
          key: item.propertyId,
          editable: false,
          type: 'string',
          handleSave: () => {},
          render: (item: any) => {
            return (
              <span>
                {item && (item.value || item.propertyValue)}
              </span>
            )
          }
        });
      }

    });
    setColumns(columns);
  }

  const changeSummary = (res: unknown) => {
    updateSkusByPrices(res);
  }

  const changeSkus = (data: unknown) => {
    updateSkusBySku(data);
  }

  const summary = (currentData: unknown) => (
    <DetailFormSkuSummary colSpan={columns.length} onChange={changeSummary} />
  );

  useEffect(() => {
    initColumns();

  }, [dataSource]);

  return (
    <Form.Item
      label="规格明细"
      required={false}
      wrapperCol={ { span: 22 } }
    >
      <AReactTable
        columns={columns}
        dataSource={skus}
        summary={summary}
        hasEdit={true}
      />
    </Form.Item>
  )
}

export default DetailFormSku;
