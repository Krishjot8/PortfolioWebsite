import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";
import Viewer from '../Projects/BlogLab'
import Event from "../Projects/MovieApp";
import Chat from '../Projects/StudentAdminPortal';
import Tour from "../Projects/BookAPI";
const Contact = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" mt='10'>
        <TabList mb="1em">
          <Tab>eCommerce</Tab>
          <Tab>BlogLab</Tab>
          <Tab>MovieApp</Tab>
          <Tab>StudentAdminPortal</Tab>
          <Tab>BookAPIProject</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Ecomm />
          </TabPanel>
          <TabPanel>
            <Viewer />
          </TabPanel>
          <TabPanel>
            <Event />
          </TabPanel>
          <TabPanel>
            <Chat />
          </TabPanel>
          <TabPanel>
            <Tour />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Contact;
