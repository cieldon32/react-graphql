import React from 'react';
import {
  Table,
} from 'antd';
import {EditableRow, EditableCell} from './tableCellEdit';

interface Props {
  children?: React.ReactNode;
  className?: string;
  columns: any[];
  dataSource: any[];
  hasEdit: boolean;
  summary?: any;
}

interface TableProps {
  columns: any[];
  dataSource: any[];
  components?: any;
  summary?: any;
}

export default function AReactTable({
  columns,
  dataSource,
  hasEdit,
  summary
} : Props) : JSX.Element {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  columns = columns.map(col => {
    if(!col.editable){
      return col;
    }

    return {
      ...col,
      onCell: (record: any) => {
        const editable = () => {
          if(typeof col.editable === 'boolean'){
            return col.editable;
          } else {
            return col.editable(record);
          }

        }
        return {
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          width: col.width,
          editable: editable(),
          handleSave: col.handleSave,
          type: col.type
        }
      },
    };
  });

  let tableProps : TableProps = {
    columns,
    dataSource,
    summary
  }

  if(hasEdit) {
    tableProps.components = components;
  }

  return (
    <Table {...tableProps} />
  );
}
