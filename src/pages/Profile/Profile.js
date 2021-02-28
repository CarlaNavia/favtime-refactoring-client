import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyBookings from "../../components/profile/MyBookings";
import MyRequests from "../../components/profile/MyRequests";
import MyReviews from "../../components/profile/MyReviews";
import MyServices from "../../components/profile/MyServices";
import Navbar from "../../components/common/Navbar/Navbar";
import "./Profile.css";
import "react-tabs/style/react-tabs.css";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <h2 className="myprofile-title">MY PROFILE</h2>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>
              <img src="../../../booking.png" alt="booking" className="icon" />
            </Tab>
            <Tab>
              <img src="../../../request.png" alt="request" className="icon" />
            </Tab>
            <Tab>
              {" "}
              <img src="../../../review.png" alt="review" className="icon" />
            </Tab>
            <Tab>
              <img src="../../../services.png" alt="service" className="icon" />
            </Tab>
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
