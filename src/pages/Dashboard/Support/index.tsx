import React from "react";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import ChatIcon from "../../../components/atoms/vectors/ChatIcon";
import MessageNotificationIcon from "../../../components/atoms/vectors/MessageNotficationIcon";
import SmsOutlineIcon from "../../../components/atoms/vectors/SmsOutlineIcon";
import SupportIllustration from "../../../components/atoms/vectors/SupportIllustration";
import TelephoneIconOutline from "../../../components/atoms/vectors/TelephoneIconOutline";
import DashboardLayout from "../../../components/templates/MainLayout";
import { SupportPageWrapper } from "./supportStyles";

const Support = () => {
  return (
    <DashboardLayout>
      <HorizontalLinedTitle text="Support" />
      <SupportPageWrapper>
        <div className="icon-wrapper">
          <SupportIllustration />
        </div>
        <div className="support-text-content">
          <h1>We are here to support you!</h1>

          <div className="support-contact-channels">
            <div className="channel">
              <CircledBackground>
                <TelephoneIconOutline />
              </CircledBackground>
              <span className="title">Phone Number</span>
              <span className="description">+234 8077 233 456</span>
            </div>
            <div className="channel">
              <CircledBackground>
                <SmsOutlineIcon />
              </CircledBackground>
              <span className="title">Send us a mail</span>
              <span className="description">info@ridima.com</span>
            </div>
          </div>

          <div className="card">
            <CircledBackground
              width="4rem"
              height="4rem"
              bgColor="rgba(255, 255, 255, 0.1)"
            >
              <ChatIcon />
            </CircledBackground>
            <div className="card-text-content">
              <h3>Live Chat Support</h3>
              <span>We’re standing by to answer your questions right now</span>
            </div>
          </div>
        </div>
      </SupportPageWrapper>
    </DashboardLayout>
  );
};

export default Support;
