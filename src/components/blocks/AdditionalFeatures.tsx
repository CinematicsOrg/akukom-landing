import AdditionalFeaturesContainer from '../AdditionalFeaturesContainer';
import PaddinWrapper from '../PaddinWrapper';

const additionaList = [
  'Create and Capture Family Milestones',
  'Convert Old Family Video Tapes to Digital',
  'Digitize Old Family Albums and Photos',
  'Upload Photos from Digital Devices to Timeline',
  'Connect with a Community',
];

const AdditionalFeatures = () => {
  const content = additionaList.map((i, index) => {
    return <AdditionalFeaturesContainer content={i} key={index} />;
  });
  return (
    <PaddinWrapper>
      <div className="text-black flex md:flex-row flex-col py-8 md:py-10">
        <div className="my-auto">
          <div className="text-2xl/7 md:text-[42px]/[44px] font-bold mb-8">
            Additional Features
          </div>
          <div className="flex flex-col space-y-8">{content}</div>
        </div>
        <div className="hidden md:flex justify-center items-center mx-auto">
          <img src="/svg/additional_features.svg" alt="Image" />
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center md:mt-4">
        <img
          src="/svg/additional_features_small.svg"
          alt="Image"
          className=""
        />
      </div>
    </PaddinWrapper>
  );
};

export default AdditionalFeatures;
