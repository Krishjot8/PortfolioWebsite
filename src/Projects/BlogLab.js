import React from "react";
import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

import { motion } from "framer-motion";

const Viewer = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          BlogLab
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}></motion.div>
        <motion.div whileHover={{ color: "yellow" }}>
          <Link href="https://github.com/Krishjot8/BlogLab" pt="1" isExternal>
            <AiOutlineGithub
              style={{ width: "25px", height: "25px", display: "inline-block" }}
            />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built a blog application which enables different users to login and
        look at different blogs. Users can also comment on other peoples blogs
        and can view them on the page.
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>
          Created BlogLab application frontend with Angular libraries such as
          Bootstrap, Font Awesome, ngx-toastr and
        </ListItem>
        <ListItem>
          Angular Front end with dynamic form-validation, components,
          authentication guards, role based security, services and interceptors.
        </ListItem>
        <ListItem>
          Used Dapper Framework in backend to communicate with SQL Server
          easier.
        </ListItem>
        <ListItem>
          Created Migrations at backend to Generate SQL Server tables
        </ListItem>
        <ListItem>
          Added exception middleware in both frontend and backend
        </ListItem>
        <ListItem>Handled authentication using JSON Web Tokens.</ListItem>
        <ListItem>Used Cloudinary for attaching photos to blogs</ListItem>
        <ListItem>
          Created Database tables, relationship, stored procedures, and views.
        </ListItem>
        <ListItem>
          Tested API Calls Using tools such as Postman and Swagger UI.
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Viewer;
