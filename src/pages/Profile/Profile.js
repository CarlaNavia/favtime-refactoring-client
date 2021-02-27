import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyBookings from "../../components/profile/MyBookings";
import MyRequests from "../../components/profile/MyRequests";
import MyReviews from "../../components/profile/MyReviews";
import MyServices from "../../components/profile/MyServices";
import Navbar from "../../components/common/Navbar/Navbar"

export default function Profile() {
  return (
    <div>
      <Navbar />
      {/* <HeaderProfile history={props.history} user={props.user} /> */}

      <div>
        <Tabs>
          <TabList>
            <Tab>My bookings</Tab>
            <Tab>My requests</Tab>
            <Tab>My reviews</Tab>
            <Tab>My services</Tab>
          </TabList>
          <TabPanel>
            <MyBookings />
          </TabPanel>
          <TabPanel>
            <MyRequests />
          </TabPanel>
          <TabPanel>
            <MyReviews />
          </TabPanel>
          <TabPanel>
            <MyServices />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
