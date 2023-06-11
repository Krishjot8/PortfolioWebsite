import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Tour = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          BookAPI Project
        </Text>
        <motion.div whileHover={{ color: "green" }}>
          <Link href="https://github.com/Krishjot8/BookAPIProject" pt="1" isExternal>
            <AiOutlineGithub
              style={{ width: "25px", height: "25px", display: "inline-block" }}
            />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Created an Application program Interface using .NET Core and SQL Server
        that handles CRUD Operations for items such as Books, Countries,
        Authors, Categories, Reviews and Reviewers.
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>
          Added Controllers ,Repositories and Models in the backend.
        </ListItem>
        <ListItem>
         Excecuted reference loop error handling.
        </ListItem>
        <ListItem>
          Seeded the database using a database seeding class to fill database with data.
        </ListItem>
        <ListItem>
          Added the table relationships in SQL Server
        </ListItem>
        <ListItem>Added Migrations using DbContext to create tables in SQL Server</ListItem>
        <ListItem>Added Data transfer Objects</ListItem>
        <ListItem>Tested API calls using Swagger and Postman</ListItem>
        <ListItem>Initialized Git repository for version control</ListItem>
      </UnorderedList>
    </>
  );
};

export default Tour;
