import React from "react";
import { Form } from "antd";
import SKUsProvider from "./index.provider";
import SKUs from "./DetailFormSKUs";

export default function App() {
  return (
    <SKUsProvider>
      <Form>
        <SKUs name="skus" />
      </Form>
    </SKUsProvider>
  );
}