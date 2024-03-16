import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Code, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaTerminal, FaCode, FaDatabase, FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleCommandChange = (e) => {
    setCommand(e.target.value);
  };

  const handleSubmit = () => {
    // TODO: Integrate AI model/API for code generation
    // For demo purposes, just display the command as output
    setOutput(command);
    setCommand("");
    toast({
      title: "Command Executed",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleHelp = () => {
    const helpText = `
      Available Commands:
      - generate html: Generates HTML code snippet
      - generate css: Generates CSS code snippet 
      - generate js: Generates JavaScript code snippet
      - generate component: Generates a web component
      - generate schema: Generates a database schema
      - generate query: Generates a database query
    `;
    setOutput(helpText);
  };

  return (
    <Box p={8}>
      <Heading mb={4}>AI Web App Dev Tool</Heading>

      <HStack spacing={4} mb={8}>
        <Button leftIcon={<FaTerminal />}>CLI</Button>
        <Button leftIcon={<FaCode />}>Code</Button>
        <Button leftIcon={<FaDatabase />}>DB</Button>
        <Button leftIcon={<FaQuestionCircle />} onClick={handleHelp}>
          Help
        </Button>
      </HStack>

      <VStack align="stretch" spacing={4}>
        <HStack>
          <Text>Enter a command:</Text>
          <Input value={command} onChange={handleCommandChange} placeholder="e.g. generate html" />
          <Button colorScheme="blue" onClick={handleSubmit}>
            Execute
          </Button>
        </HStack>

        <Box borderWidth={1} borderRadius="md" p={4}>
          <Text fontSize="xl" mb={2}>
            Output:
          </Text>
          <Code whiteSpace="pre">{output}</Code>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
