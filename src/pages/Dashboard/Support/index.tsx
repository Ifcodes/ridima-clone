import React from "react";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1 } from "../../../components/atoms/Typography";
import ChatIcon from "../../../components/atoms/vectors/ChatIcon";
import MessageNotificationIcon from "../../../components/atoms/vectors/MessageNotficationIcon";
import SmsOutlineIcon from "../../../components/atoms/vectors/SmsOutlineIcon";
import SupportIllustration from "../../../components/atoms/vectors/SupportIllustration";
import TelephoneIconOutline from "../../../components/atoms/vectors/TelephoneIconOutline";
import DashboardLayout from "../../../components/templates/MainLayout";
import { SupportContentWrapper, SupportPageWrapper } from "./supportStyles";

const Support = () => {
  return (
    <DashboardLayout mobileChildPadding="0">
      <SupportPageWrapper>
        <div className="support-header-title">
          <HorizontalLinedTitle text="Support" />
        </div>
        <div className="support-header-title-mobile">
          <H1>Support</H1>
        </div>
        <SupportContentWrapper>
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
                <span>
                  We’re standing by to answer your questions right now
                </span>
              </div>
            </div>
          </div>
        </SupportContentWrapper>
      </SupportPageWrapper>
    </DashboardLayout>
  );
};

export default Support;
