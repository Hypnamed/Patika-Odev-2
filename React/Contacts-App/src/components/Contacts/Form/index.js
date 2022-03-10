import React, { useEffect, useState } from "react";
import { Button,  Center, Input } from "@chakra-ui/react";
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    console.log("Yeni bir kişi eklendi");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            name="fullname"
            placeholder="İsim"
            value={form.fullname}
            onChange={onChangeInput}
            mb={5}
            mt={3}
          />
        </div>
        <div>
          <Input
            name="phone_number"
            placeholder="Numara"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <Center>
            <Button colorScheme={"teal"} onClick={onSubmit} className="btn" mt={5}>Kişiyi Ekle</Button>
          </Center>
        </div>
      </form>
    </div>
  );
}

export default Form;
