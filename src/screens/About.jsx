import { Box, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const About = () => {
  return (
    <Box pt={{ base: "20px", xl: "40px" }}>
      <Container w="full" maxW="container.lg" mt={-10}>
        <Prose>
          <h3>Continuing Education</h3>
          <table>
            <thead>
              <tr>
                <th>Courses</th>
                <th>Skills Gained</th>
                <th>Training</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/?kw=build+e&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">Online eCommerce Website</u>
                  </a>
                </td>
                <td>
                  I learned how to create a fully functional e-commerce
                  application using Angular, .NET Core, Redis, and SQL Server. I
                  created a user interface with Angular, made CRUD API calls
                  with .NET Core Entity Framework, stored data in SQL Server and
                  Redis, accepted payments with Stripe, authenticated users with
                  JSON tokens and identity, handled errors with ngx Toastr.
                  versioned my code with Git and GitHub, and styled my
                  application using Bootstrap, BreadCrumbs, Font-Awesome and
                  rxjs. Additionally, we added lazyLoading in Modules and
                  implemented Paging, Sorting, Searching, and also Filtering.
                </td>
                <td>34 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">
                      Docker & Kubernetes for .NET and Angular developers
                    </u>
                  </a>
                </td>
                <td>
                  Learned how to build, test and deploy .net and angular apps
                  using docker. Created docker files for Angular and .NET Core
                  apps. Containerized SQL Server.Created Docker Compose Files.
                  Docker Commands, Virtual Machines, Docker Hub, CI/CD setup
                  with Github actions. Deploying containers on Azure web apps.
                </td>
                <td>7 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">DevOps on AWS</u>
                  </a>
                </td>
                <td>
                  Understood the DevOps philosophies and its lifecycle,
                  implement and Manage xontinuous delivery Systems and
                  methodologies on AWS. Branching strategies, Automate testing,
                  Building the pipeline and Automate the SAM Deploy.
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">JSON</u>
                  </a>
                </td>
                <td>
                  Learned about JSON language, Validation, Schema, PATH and its
                  syntax
                </td>
                <td>1 hour</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">XML</u>
                  </a>
                </td>
                <td>
                  Learned about XML Language, XML, Syntax, the DOM,XML
                  Namespace, XSLT, XSD - XML Schema.
                </td>
                <td>1 hour</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">CI/CD Pipelines</u>
                  </a>
                </td>
                <td>
                  Covers Continuous Integration and Continuous Delivery when
                  deploying to Production. CI/CD vs DevOps. Learned about
                  Waterfall vs Agile Methodology and about Jenkins.
                </td>
                <td>1 hour</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/animated-sql-for-beginners/?kw=animated+SQL&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">Animated SQL For Beginners</u>
                  </a>
                </td>
                <td>
                  Used PostgreSQL and PgAdmin. Usung logical operators to add
                  logic flow to your SQL queries. Common SQL Join commands.
                  Created tables, Filter Records CRUD Operations, Primary and
                  Foreign Keys, Joining Tables, Grouping & Aggregating. Unions,
                  Subquery, Distinct records and table relationships.
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/?"
                    rel="noreferrer"
                  >
                    <u color="red">Cloud Computing on AWS for Beginners</u>
                  </a>
                </td>
                <td>
                  Learned fundamental concepts of cloud computing including
                  storage, database networking, virtualization, containers and
                  cloud architecture. Configured elasticity, high availibility
                  and fault tolerance using Amazon EC2 Auto Scaling and Elastic
                  Load Balancing. Create and configure storage services and
                  upload files and objects using S3 buckets Amazon EBS and EFS.
                  Used AWS elastic Beanstalk. Used Devops tools on AWS for
                  Continuous Integration. and Continous Delivery. Created
                  serverless event driven architectures on Lambda.
                </td>
                <td>7 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/c-sharp-oop-ultimate-guide-project-master-class/"
                    rel="noreferrer"
                  >
                    <u color="red">C# 10 Ultimate Guide Beginner to Advanced</u>
                  </a>
                </td>
                <td>
                  Learned about C# Constructors,C# interviews, .NET CORE CLI,
                  Arrays, Collections, Handling Null, Inheritance Classes,
                  Generics and Methods. Better Object Oriented Programming code.
                </td>
                <td>61 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/csharp-beginner-to-advanced/?kw=getting+started+with+C%23&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">Getting Started with C#</u>
                  </a>
                </td>
                <td>
                  Learned about C# Data Types, Functions, Loops, Hashtable,
                  Stack, Queue, Operators, Enums, Constants, Variables etc.
                </td>
                <td>4 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/50-projects-50-days/?kw=50&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">50 Projects with HTML CSS & JavaScript</u>
                  </a>
                </td>
                <td>
                  Created projects using HTML, CSS and JavaScript that relate to
                  the DOM such as Expanding Cards, Progress Steps, Rotating
                  Navigation Animation and Hidden Search Widget.
                </td>
                <td>19 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/angular-material-course/?kw=angular+material&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">Angular Material in Depth</u>
                  </a>
                </td>
                <td>
                  Learned about the 3rd party Angular Material Library annd its
                  components such as mat-Grid, Mat-Header, Mat-Cell and more.
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/real-world-app-angular-aspnet-core-web-api-and-sql/?kw=build+amazi&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">Student Admin Portal</u>
                  </a>
                </td>
                <td>
                  Created an application where we have a list of students and
                  the user has the ability to sort, filter, paginate and search
                  students in the student list. On one page we have the list of
                  student and on another page we can add another student to the
                  student list. We used Angular to Create the User Interface,
                  .NET Core to handle the CRUD Operations in the backend, and
                  used SQL Server to create, update and delete students in its
                  database. We tested API calls using Postman and Swagger UI.
                  Integrated Form Validation and Created Angular Services. In
                  the backend, used AutoMapper Dependency Injection and also
                  FluentValidation.
                </td>
                <td>8 hours</td>
              </tr>

              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/learn-web-development-by-building-a-blog/"
                    rel="noreferrer"
                  >
                    <u color="red">BlogLab API</u>
                  </a>
                </td>
                <td>
                  Built a Full Stack Application using Angular, .NET Core and
                  SQL Server. In this app users have the ability to login,
                  register using JWT tokens and create blogs and also comments.
                  Users can also attach their own photos in the blogs. Different
                  users can log in and view other users blogs in the application
                  as well as adding comments to other users blogs. In the
                  Frontend we used libraries such as Font-Awesome, Bootstrap and
                  ngx-toastr. In the backend, we used Cloudinary to add photos
                  to blogs, Dapper to communicate with SQL server, and added
                  Swagger UI to test our endpoints. In SQL Server, we added
                  stored procedures like account_insert,
                  blog_delete,blog_GetByUserId, blogComment_get, Photo_get and
                  many more.
                </td>
                <td>16 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/angular-beginner-practical-guide/?kw=angular+15+practical&src=sac"
                    rel="noreferrer"
                  >
                    <u color="red">MovieApp</u>
                  </a>
                </td>
                <td>
                  We created a Movie Application where we can see real world
                  data of movies and can paginate, search, filter and sort
                  movies by genre, year and rating. We added a real API Key to
                  get the movies. We used Angular to create the frontend of the
                  application and NodeJS for backend. We added many components
                  such as pagination component, movie detail page, movies, and
                  also TV Shows. We used PrimeNG library for slider banners
                  carousels. We added alot of Services and used RXJS. We used
                  HTTP services like get and Post to retrive the movies.
                </td>
                <td>9 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/ssrs-reporting/"
                    rel="noreferrer"
                  >
                    <u color="red">SQL Server Reporting Services</u>
                  </a>
                </td>
                <td>
                  We learned how to create different types of reports with data
                  from SQL Server databases and convert them into different
                  formats. Learned how to create tables, Matrices, Lists and
                  Subreports.
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/creating-net-core-api/"
                    rel="noreferrer"
                  >
                    <u color="red">BookAPI Project</u>
                  </a>
                </td>
                <td>
                  Created an API which handles CRUD operations from a database
                  using SQL Server and backend using .NET CORE and Entity
                  Framework. Used Crud Operations at all endpoints such as
                  Books, Authors, Categories, Countries, etc.
                </td>
                <td>25 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLbJ-fy-2JEVkpz73RDkbA7dGtn8CNgwzm"
                    rel="noreferrer"
                  >
                    <u color="red">PragimTech SQL Server</u>
                  </a>
                </td>
                <td>
                  SQL Server basics. CRUD Operations. CTE’s, Queries Basics,
                  Classes, Constraints, Joins, StoredQueries Basics, Classes,
                  Constraints, Joins, Stored Procedures, Triggers, Views, Data
                  Types, Indexes,User Defined Functions, Transactions, SQL
                  Injection
                </td>
                <td>4 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLAC325451207E3105"
                    rel="noreferrer"
                  >
                    <u color="red">PragimTech C# Videos</u>
                  </a>
                </td>
                <td>
                  Learned about C# Arrays, Comments, Loops, Operators
                  Inheritance, Type Conversions, Classes, Structs, Enums,
                  Generics Async-Await.
                </td>
                <td>10 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
                    rel="noreferrer"
                  >
                    <u color="red">MySQL Bootcamp</u>
                  </a>
                </td>
                <td>
                  Creating Database & tables, Created an Instagram Clone,
                  Inserting Data, Table Joins, Data types. String Functions and
                  Aggregate Functions.
                </td>
                <td>36 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/mysql-dba-for-beginners/"
                    rel="noreferrer"
                  >
                    <u color="red">My SQL Database Administration</u>
                  </a>
                </td>
                <td>
                  I learned about creating queries using MySQL Workbench also
                  created tables which included relational databases, foreign
                  keys, creating and altering, constraints, stored procedures,
                  triggers, CRUD operations. We understood common relational
                  Database Management Systems. and managing users and
                  permissions through administration.
                </td>
                <td>7 hours</td>
              </tr>
              <tr>
                <td>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/course/html5-fundamentals-for-beginners/"
                    rel="noreferrer"
                  >
                    <u color="red">HTML and CSS</u>
                  </a>
                </td>
                <td>
                  I created a complete website with navigation using HTML and
                  CSS and also included Forms, Links, and video HTML.
                </td>
                <td>5 hours</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Certifications</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Verification</th>
                <th>Issued</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <a
                    target="_blank"
                    href="https://interstate21.com/certificate/?code=3J04KWF"
                    rel="noreferrer"
                  >
                    <u color="red">Junior Angular Developer</u>
                  </a>
                </td>
                <td>Angular Developer Certified Level 1</td>
                <td>Interstate 21: 3J04KWF</td>
                <td>October 2022</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Education</h3>
          <table>
            <thead>
              <tr>
                <th>College</th>
                <th>Classes</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Houston Community College</td>
                <td>Basic Credit Classes - English & Math</td>
                <td>August 2015 to May 2017</td>
              </tr>
              <tr>
                <td>Lone Star College</td>
                <td>Basic Credit Classes Online - English & Math</td>
                <td>August 2018 - June 2019</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Work Experience</h3>
          <table>
            <thead>
              <tr>
                <th>Employer</th>
                <th>Title</th>
                <th>Duty</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Axis Epc</td>
                <td>Junior Drafter</td>
                <td>
                  I created and designed arcetecture of building and structures
                  as an intern using AutoCad for 2D Drawings and Revit for 3D
                  Drawings.
                </td>
                <td>August 2019 to March 2020</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </Prose>
      </Container>
    </Box>
  );
};

export default About;
