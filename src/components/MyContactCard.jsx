import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Center,
  Text,
  Heading,
  StackDivider,
  Stack,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
const ContactCard = () => {
  return (
    <Center mt="10">
      <Card size="lg">
        <CardHeader>
          <Heading size="md">Contact Information</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text pt="2" fontSize="sm">
                Krishjot Sarai
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Phone
              </Heading>
              <Text pt="2" fontSize="sm">
                832-202-3129
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                krishjot8@yahoo.com
              </Text>
            </Box>
            <Box>
              <Link
                href="https://www.linkedin.com/in/krishjot-sarai-023011247/"
                isExternal
              >
                <BsLinkedin
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                    color: "#0877b3",
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Link href="https://github.com/Krishjot8" isExternal>
                <AiOutlineGithub
                  style={{
                    width: "33px",
                    height: "33px",
                    display: "inline-block",
                    color: "black",
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Link
                href="https://docs.google.com/document/d/1In5JbSHycLSYmbGaE9XuiSO-6ZzkJToOnBKmNyMQxXI/edit?usp=sharing"
                isExternal
              >
                <HStack>
                  <FcDocument
                    style={{
                      width: "32px",
                      height: "32px",
                      display: "inline-block",
                    }}
                  />
                  <Text fontSize={"sm"}>Resume</Text>
                </HStack>
              </Link>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;
