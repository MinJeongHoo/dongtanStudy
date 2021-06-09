import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./addSection.module.css";

const AddSection = () => {
  return (
    <Form className={styles.div}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" name="list" id="list" placeholder="add details" />
      </FormGroup>
      <Button className={styles.btn}>Add</Button>
    </Form>
  );
};

export default AddSection;
