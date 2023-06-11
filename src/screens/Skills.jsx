import { Heading, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const Skills = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
      >
        Technical Skills
      </Heading>

      <Container w="full" maxW="container.lg">
        <Prose>
          <h4>Programming Languages</h4>
          <ul>
            <li>
              <b>JavaScript</b> &emsp; Mastery in creating variables, arrays,
              and objects to store data, clean function design, use of methods
              to loop through data, conditional logic, and operators.
            </li>
            <li>
              <b>TypeScript</b> &emsp; Knowledgeable on utilizing type safety to
              help prevent errors and make code more readable
            </li>
            <li>
              <b>HTML & CSS</b> &emsp; Strong command on creating highly
              accessible and user-friendly client applicatons with stylesheets
            </li>
          </ul>

          <hr />
          <h4>Front End</h4>
          <ul>
            <li>
              <b>Angular</b> &emsp; 
              constructing components, services and models; creating forms with
              client-side validation. Handling Errors using interceptors.
            </li>
          </ul>
          <hr />
          <h4>Back End</h4>
          <ul>
            <li>
              <b>.NET Core</b> &emsp; Password hashing, tokenization of data,
              testing APIs, constructing REST APIs, CRUD operations, application
              deployment,Stripe integration, extensive library
              implementation, developing knowledge on AWS and
              utilization and Docker images and containers..
            </li>
          </ul>

          <hr />
          <h4>Databases</h4>
          <ul>
            <li>
              <b>SQL(s)</b> &emsp; Knowledgeable with data analysis with
              relational databases like PostGreSQL, MySQL, Microsoft SQL Server
              and Microsoft Access
            </li>
          </ul>
          <hr />
        </Prose>
      </Container>
    </>
  );
};

export default Skills;
