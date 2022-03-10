import React, { useState } from "react";
import { Input, List, ListItem, ListIcon, UnorderedList, Text  } from "@chakra-ui/react";

function Listing({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
      )
  })

  console.log(filtered)

  return (
    <div>
      <Input
        placeholder="Kişi Ara"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <UnorderedList className="list">
        {filtered.map((contact, i) => (
          <ListItem key={i}>
            <Text>{contact.fullname}</Text>
            <Text>{contact.phone_number}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Text className="rehber">Kayıtlı Kişi Sayısı = {filtered.length}</Text>
    </div>
  );
}

export default Listing;
