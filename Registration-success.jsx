import React from "react";

import { Button, Img, Text } from "components";

const RegistrationsuccessfulpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[200px] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex relative w-[21%]">
          <Img
            className="h-[117px] my-auto object-cover w-[61%]"
            src="images/img_desktop8anywork.png"
            alt="desktop8anywork"
          />
          <Text
            className="mb-[25px] ml-[-17.96px] mt-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center z-[1]"
            size="txtInterSemiBold28"
          >
            AnyWork
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[317px] w-[36%] md:w-full">
          <Img
            className="h-[95px] w-[95px]"
            src="images/img_akariconscirclecheckfill.svg"
            alt="akariconscircle"
          />
          <Text
            className="mt-[13px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtInterMedium36Black900"
          >
            Registration successful{" "}
          </Text>
          <Text
            className="mt-[30px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtInterRegular24"
          >
            Please check your email for activation link
          </Text>
          <div className="flex flex-col items-center justify-start mt-[29px] w-[43%] md:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[200px] rounded-lg text-center text-sm tracking-[0.20px]"
              shape="round"
              color="teal_500"
              size="md"
              variant="outline"
            >
              Email account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationsuccessfulpagePage;
