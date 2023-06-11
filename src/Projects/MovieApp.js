import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          Movie App
        </Text>
        <motion.div whileHover={{ color: "red" }}>
          <Link href="https://github.com/Krishjot8/Movie-App" pt="1" isExternal>
            <AiOutlineGithub
              style={{ width: "25px", height: "25px", display: "inline-block" }}
            />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Built a Great Movies Application integrated with real world movie API
        data using Angular and Node.JS.
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>Built frontend using PrimeNG and rxjs libraries</ListItem>
        <ListItem>Fetch real world Movie data using API Key</ListItem>
        <ListItem>
          Added many components including Home, Tv Show, Tv Shows, Movie and
          Movies
        </ListItem>
        <ListItem>
          Added models and services like movies and Tv Show services to fetch
          data.
        </ListItem>
        <ListItem>
          Integrated PrimeNG Components like slider, pagination and carousel
          components.
        </ListItem>
        <ListItem>
          Added Routing Navigation and the ability to filter, search and
          paginate movies
        </ListItem>
        <ListItem>
          Use of Git Repository for version control: Version control with Git.
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Event;
