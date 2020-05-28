import React, { useState } from 'react';
import { Button } from 'antd';
import {useEdit} from './models/useEdit';
import './DetailForm.scss';

interface IProps {
  colSpan: number;
  onChange?: (v: any) => any
}

const DetailFormSkuSummary: React.FC<IProps> = ({colSpan, onChange}) => {
  const {editValue} = useEdit();
  const [salePrice, setSalePrice] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [barcode, setBarcode] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [tagPrice, setTagPrice] = useState('');

  const editSalePrice = () => {
    editValue({
      title: '修改零售价',
      value: salePrice,
      onOk: (value: string) => {
        setSalePrice(value);
        onChange && onChange({
          salePrice: value,
          currentStock,
          barcode,
          costPrice,
          tagPrice
        });
      }
    });
  }

  const editCurrentStock = () => {
    editValue({
      title: '修改库存',
      value: currentStock,
      onOk: (value: string) => {
        setCurrentStock(value);
        onChange && onChange({
          salePrice,
          currentStock: value,
          barcode,
          costPrice,
          tagPrice
        });
      }
    });
  }

  const editBarcode = () => {
    editValue({
      title: '修改规格编码',
      value: barcode,
      onOk: (value: string) => {
        setBarcode(value);
        onChange && onChange({
          salePrice,
          currentStock,
          barcode: value,
          costPrice,
          tagPrice
        });
      }
    });
  }

  const editCostPrice = () => {
    editValue({
      title: '修改成本价',
      value: costPrice,
      onOk: (value: string) => {
        setCostPrice(value);
        onChange && onChange({
          salePrice,
          currentStock,
          barcode,
          costPrice: value,
          tagPrice
        });
      }
    });
  }

  const editTagPrice = () => {
    editValue({
      title: '修改吊牌价',
      value: tagPrice,
      onOk: (value: string) => {
        setTagPrice(value);
        onChange && onChange({
          salePrice,
          currentStock,
          barcode,
          costPrice,
          tagPrice: value
        });
      }
    });
  }

  return (
    <tr>
      <td colSpan={colSpan}>
        <label>批量设置：</label>
          <Button type="link" onClick={editSalePrice}>零售价</Button>
          <Button type="link" onClick={editCurrentStock}>库存</Button>
          <Button type="link" onClick={editBarcode}>规格编码</Button>
          <Button type="link" onClick={editCostPrice}>成本价</Button>
          <Button type="link" onClick={editTagPrice}>吊牌价</Button>
      </td>
    </tr>
  )
}

export default DetailFormSkuSummary;
