import { FaRegCopyright } from 'react-icons/fa';
import Form from '../Form';
import PaddinWrapper from '../PaddinWrapper';

const Footer = () => {
  return (
    <div className="bg-[#F6EFD7] text-black">
      <PaddinWrapper>
        <div className="text-center md:w-[70%] mx-auto py-7 md:py-24">
          <div className="text-xl/5 md:text-4xl/[44px] font-bold mb-2">
            Get Early Access
          </div>
          <div className="text-sm/4 md:text-base mb-12">
            Akukom: Connecting families through the power of storytelling.
          </div>
          <Form
            buttonName="SUBSCRIBE"
            fieldName="email"
            inputPlaceholder="Your Email"
            inputType="email"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-5 text-sm/4 md:text-base mb-5 md:mb-12">
            <div className="text-base/5 md:text-[36px]/[44px] font-bold">
              CONTACT US
            </div>
            <a href="tel:+2349030003360" className="flex">
              <img src="/svg/phone.svg" alt="phone icon" className="mr-2" />
              +234-913-876-5442
            </a>

            <div className="flex">
              <img src="/svg/mail.svg" alt="mail icon" />
              <div className="flex flex-col ml-2">
                <a href="mailto:hello@akukom.io">hello@akukom.io</a>
                <a href="mailto:akukomio@gmail.com">akukomio@gmail.com</a>
              </div>
            </div>
            <div className="flex space-x-1 mdPro:space-x-3 ">
              <a
                href="https://www.instagram.com/cinematicsng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svg/instagram.svg" alt="ig icon" />
              </a>
              <a
                href="https://www.instagram.com/cinematicsng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svg/tweeter.svg" alt="tweeter icon" />
              </a>
              <a
                href="https://www.instagram.com/cinematicsng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svg/facebook.svg" alt="facebook icon" />
              </a>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img src="/svg/small_logo.svg" alt="Logo" />
          </div>
          <div className="flex items-center justify-center">
            <FaRegCopyright />
            <div className="ml-1 text-base/7 md:text-xl/7">
              {new Date().getFullYear()} Akukom | All Rights Reserved.
            </div>
          </div>
        </div>
      </PaddinWrapper>
    </div>
  );
};

export default Footer;
