import Form from '../form';

const Banner = () => {
  return (
    <div className="py-5 text-black">
      <div className="md:hidden mb-12">
        <img src="/svg/small_logo.svg" alt="Logo" />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="md:pr-5">
          <div className="hidden md:block">
            <img src="/svg/logo.svg" alt="Logo" />
          </div>
          <div className=" font-bold text-xl/6 md:text-[48px]/[58px] mb-4 md:mb-6 md:mt-[130px]">
            PRESERVE YOUR
            <div>
              <span className="text-green-700">FAMILY LEGACY</span>!
            </div>
            <div>ONE STORY AT A TIME</div>
          </div>
          <div className="text-sm/4 md:text-base/5 mb-6 md:mb-10">
            Akukom: Connecting families through the power of storytelling.
          </div>
          <Form
            buttonName="Get Early Access"
            fieldName="email"
            inputType="email"
          />
        </div>
        <div>
          <img
            src="/svg/family.svg"
            alt="Family Image"
            className="mt-16 md:mt-0 md:h-[800px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
