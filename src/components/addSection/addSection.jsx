import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./addSection.module.css";
import { useSetRecoilState } from "recoil";
import { itemState } from "../../atom";

let id = 0;
const getId = () => id++;

const AddSection = () => {
  const [tempName, setTempName] = useState("");
  const setItems = useSetRecoilState(itemState);

  const onInsert = (e) => {
    if (tempName) {
      setItems((items) =>
        items.concat({ id: getId(), name: tempName, done: false })
      );
    }

    setTempName("");
  };

  return (
    <Form className={styles.div}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="text"
          name="list"
          id="list"
          placeholder="add details"
          onChange={(e) => setTempName(e.target.value)}
          value={tempName}
        />
      </FormGroup>
      <Button onClick={onInsert} className={styles.btn}>
        Add
      </Button>
    </Form>
  );
};

export default AddSection;
