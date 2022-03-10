import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function TasksInput({ tasks, setTasks, newTask, setNewTask }) {
  const onChangeInput = (e) => {
    setNewTask(e.target.value);
  };
  const onSubmit = () => {
    if (newTask === "") {
      return false;
    }
    setTasks([...tasks, newTask]);
    console.log("Yeni görev eklendi.");
    setNewTask([]);
  };
  console.log(tasks)
  return (
    <div className="container">
      <form>
      <Center>
        <Box
          bg="yellow.400"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          mt={200}
          width={"fit-content"}
          p={30}
          flexDirection={"column"}
          borderRadius={"25px"}
        >
          <Heading color={"orange.900"}>Yapılacaklar Listesi</Heading>
          <br />
          <InputGroup>
            <Input
              value={newTask}
              onChange={onChangeInput}
              focusBorderColor={"orange.400"}
              textColor={"blue.800"}
            />
            <InputRightElement>
              <Button onClick={onSubmit}>
                <AddIcon color={"orange.400"} />
              </Button>
            </InputRightElement>
          </InputGroup>
          <UnorderedList className="list">
            {tasks.map((task, i) => (
              <ListItem key={i}>
                <Text>{task}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Center>
      </form>
    </div>
  );
}

export default TasksInput;
