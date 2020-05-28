import React, {
    useState,
    useEffect,
    createContext,
    useRef,
    useContext
} from 'react';
import {
    Form,
    InputNumber,
    Input
  } from 'antd';

interface ContextValueType {
  validateFields();
  setFieldsValue(arg0: { [x: string]: any; });

}

const EditableContext = createContext<ContextValueType | null>(null);

interface Item {
  key: string;
  name: string;
}

interface EditableRowProps {
  index: number;
}

export const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable?: boolean;
    children: React.ReactNode;
    dataIndex: string;
    record: Item;
    width: string | number;
    handleSave?: (record: Item) => void;
    type?: string;
  }

export const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    width,
    handleSave,
    type,
    ...restProps
  }) => {
    const props = {
      ...restProps,
      width,
      style: {
        width
      }
    }
    const [editing, setEditing] = useState(true);
    const [values, setValues] = useState({});
    const inputRef = useRef();
    const form = useContext(EditableContext);

    const toggleEdit = () => {
      form.setFieldsValue({ [dataIndex]: values[dataIndex] || record[dataIndex] });
    };

    const save = async e => {
      try {
        const values = await form.validateFields();
        setValues(values);
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };

    useEffect(() => {
      if(dataIndex){
        toggleEdit();
      }

    }, [record])

    let childNode = children;
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
        >
          {
            type === 'number' ? (
              <InputNumber
                ref={inputRef}
                onPressEnter={save}
                onBlur={save}
              />
            ) : (
              <Input
                ref={inputRef}
                onPressEnter={save}
                onBlur={save}
              />
            )
          }
        </Form.Item>
      ) : (
        <div style={{ paddingRight: 24}} onClick={toggleEdit}>
          {values[dataIndex] || record[dataIndex] || children}
        </div>
      );
    }


    return <td {...props}>{childNode}</td>;
  };
