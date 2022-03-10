import React, { useEffect, useState } from "react";
import Listing from "./List";
import Form from "./Form";
import "./styles.css"
import { Text, Center } from "@chakra-ui/react";

function Contacts() {
  const [contacts, setContacts] = useState([
      {
        fullname: "Ediz",
        phone_number: "31",
      },
      {
        fullname: "Yiğit",
        phone_number: "69",
      },
      {
        fullname: "Mustafa",
        phone_number: "93",
      }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <Center>
        <Text fontSize='4xl' mb={5}>Contacts App</Text>
      </Center>
      <Listing contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
