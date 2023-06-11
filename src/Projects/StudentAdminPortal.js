import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Chat = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          Student Admin Portal
        </Text>
        <motion.div whileHover={{ color: "purple" }}>
          <Link
            href="https://github.com/Krishjot8/StudentAdminPortal"
            pt="1"
            isExternal
          >
            <AiOutlineGithub
              style={{ width: "25px", height: "25px", display: "inline-block" }}
            />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Built a Portal where we display a list of students and the user has the
        ability to add, update and delete students from the list
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>
          Created nice looking User interface using FlexBoxGrid and Angular
          Material Libraries
        </ListItem>
        <ListItem>
          Added filtering, sorting, and pagination of students
        </ListItem>
        <ListItem>
          Used Controllers, Repositories and DbContext using .NET CORE.
        </ListItem>
        <ListItem>
          Added Components like student list to show and update list of students
          and a student-add page to add another student to the current list.
        </ListItem>
        <ListItem>Added Domain and Data Models to Backend.</ListItem>
        <ListItem>Created Migrations to Generate SQL Server Tables.</ListItem>
        <ListItem>
          Added server and client side validations using FluentValidation
        </ListItem>
        <ListItem>
          Used CRUD Operations for adding, updating and deleting students.
        </ListItem>
        <ListItem>Added Reactive Form Validation</ListItem>
        Added Services like gender and student services to fetch data from the
        backend.
        <ListItem>
          Integrated Automapper functionality to map students and addresses
          easier.
        </ListItem>
        <ListItem>Tested API calls using Swagger and Postman</ListItem>
        <ListItem>Initialized Git Repository for version control</ListItem>
      </UnorderedList>
    </>
  );
};

export default Chat;
