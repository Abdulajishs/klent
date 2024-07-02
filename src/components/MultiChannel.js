import dailerIcon from "../assets/multichannel/dailerIcon.png";
import linkedIcon from "../assets/multichannel/linkedIcon.png";
import emailIcon from "../assets/multichannel/emailIcon.png";
import smsIcon from "../assets/multichannel/smsIcon.png";
import dailer from "../assets/multichannel/dailer.png";
import linkedIn from "../assets/multichannel/linkedIn.png";
import email from "../assets/multichannel/email.png";
import whatsapp from "../assets/multichannel/whatsapp.png";
import { useState } from "react";
const MultiChannel = () => {
  const [showDailer, setShowDailer] = useState(true);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showSMS, setShowSMS] = useState(false);
  const [active, setActive] = useState("dailer");
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center text-center container">
        <p className="my-4 font-bold  text-violet-600">
          MULTI-CHANNEL OUTREACH
        </p>
        <h3 className="font-bold text-violet-950">
          Reach Prospects Wherever They're Active
        </h3>
        <p className="w-[882px] h-[48px] my-4 font-semibold">
          Unite your sales workflows across 5+ channels into one platform. With
          1-click automation, blitz through activities across channels, saving
          hours.
        </p>
        <div className="flex flex-row justify-center items-center w-[743px] h-[48px] my-2">
          <div
            className={`flex flex-row w-[233px] h-[48px] cursor-pointer rounded-lg p-1 ${
              active === "dailer" ? "bg-violet-200" : ""
            }`}
            onClick={() => {
              setActive("dailer");
              setShowDailer(true);
              setShowLinkedIn(false);
              setShowEmail(false);
              setShowSMS(false);
            }}
          >
            <img
              src={dailerIcon}
              alt="dailerIcon"
              className="w-[19.83px] h-[24px]"
            />
            <p
              className={`font-bold text-violet-400 ${
                active === "dailer" ? "text-violet-700" : ""
              }`}
            >
              Powerful Dialer
            </p>
          </div>

          <div
            className={`flex flex-row w-[233px] h-[48px] cursor-pointer rounded-lg p-1 ${
              active === "linkedIn" ? "bg-violet-200" : ""
            }`}
            onClick={() => {
              setActive("linkedIn");
              setShowDailer(false);
              setShowLinkedIn(true);
              setShowEmail(false);
              setShowSMS(false);
            }}
          >
            <img
              src={linkedIcon}
              alt="socialIcon"
              className="w-[24px] h-[24px]"
            />
            <p
              className={`font-bold text-violet-400 ${
                active === "linkedIn" ? "text-violet-700" : ""
              }`}
            >
              LinkedIn
            </p>
          </div>

          <div
            className={`flex flex-row w-[233px] h-[48px] cursor-pointer rounded-lg p-1 ${
              active === "email" ? "bg-violet-200" : ""
            }`}
            onClick={() => {
              setActive("email");
              setShowDailer(false);
              setShowLinkedIn(false);
              setShowEmail(true);
              setShowSMS(false);
            }}
          >
            <img
              src={emailIcon}
              alt="socialIcon"
              className="w-[24px] h-[24px]"
            />
            <p
              className={`font-bold text-violet-400 ${
                active === "email" ? "text-violet-700" : ""
              }`}
            >
              Email
            </p>
          </div>

          <div
            className={`flex flex-row w-[233px] h-[48px] cursor-pointer rounded-lg p-1 ${
              active === "sms" ? "bg-violet-200" : ""
            }`}
            onClick={() => {
              setActive("sms");
              setShowDailer(false);
              setShowLinkedIn(false);
              setShowEmail(false);
              setShowSMS(true);
            }}
          >
            <img src={smsIcon} alt="socialIcon" className="w-[24px] h-[24px]" />
            <p
              className={`font-bold text-violet-400 ${
                active === "sms" ? "text-violet-700" : ""
              }`}
            >
              SMS And WhatsApp
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-violet-200 w-full my-1" />

        {showDailer && (
          <div className="flex flex-row justify-center items-start my-16">
            <div className="flex flex-col justify-start  text-start  h-[198px] w-[442px]">
              <h3 className="font-bold text-violet-950">
                Powerful Sales Dialer
              </h3>
              <p className=" font-semibold">
                Place call after call without dialing. Use voicemails to
                increase call connect rates. Sync all notes to CRM.
              </p>
              <p className="font-bold text-violet-500">LEARN MORE</p>
            </div>
            <img src={dailer} alt="dailer" className="h-[350px] w-[600px]" />
          </div>
        )}

        {showLinkedIn && (
          <div className="flex flex-row justify-center items-start my-16">
            <div className="flex flex-col justify-start text-start h-[198px] w-[442px]">
              <h3 className="font-bold text-violet-950">LinkedIn</h3>
              <p className=" font-semibold">
                Klenty types and personalizes LinkedIn connect requests,
                InMails, and Messages for you. Just hit send.
              </p>
              <p className="font-bold text-violet-500">LEARN MORE</p>
            </div>
            <img
              src={linkedIn}
              alt="linkedIn"
              className="h-[350px] w-[600px]"
            />
          </div>
        )}

        {showEmail && (
          <div className="flex flex-row justify-center items-start my-16">
            <div className="flex flex-col justify-start text-start h-[198px] w-[442px]">
              <h3 className="font-bold text-violet-950">Email</h3>
              <p className=" font-semibold">
                Built for personalization-first sales teams. Insert prospect
                information, contextual snippets, videos, and well-researched
                openers into sales emails.
              </p>
              <p className="font-bold text-violet-500">LEARN MORE</p>
            </div>
            <img src={email} alt="email" className="h-[350px] w-[600px]" />
          </div>
        )}

        {showSMS && (
          <div className="flex flex-row justify-center items-start my-16">
            <div className="flex flex-col justify-start text-start h-[198px] w-[442px]">
              <h3 className="font-bold text-violet-950">SMS And Whatsapp</h3>
              <p className=" font-semibold">
                Add quick SMS and WhatsApp follow-ups for mobile-savvy prospects
                (that's everyone, btw). Gently nudge prospects towards a
                conversation.
              </p>
              <p className="font-bold text-violet-500">LEARN MORE</p>
            </div>
            <img
              src={whatsapp}
              alt="whatsapp"
              className="h-[350px] w-[600px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default MultiChannel;
