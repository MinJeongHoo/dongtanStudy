import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./addSection.module.css";
import { useRecoilState } from "recoil";
import { item } from "../../atom";

const AddSection = () => {
  const [tempName, setTempName] = useState("");
  const [items, setItems] = useRecoilState(item);

  useEffect(() => {
    console.log(items);
    setTempName("");
  }, [items]);

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
      <Button
        onClick={(e) => setItems({ name: tempName })}
        className={styles.btn}
      >
        Add
      </Button>
    </Form>
  );
};

export default AddSection;
