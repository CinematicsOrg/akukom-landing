import BenefitCard from '../BenefitCard';
import PaddinWrapper from '../PaddinWrapper';

const benefits = [
  {
    title: `CAPTURE AND PRESERVE PRESENT MEMORIES`,
    description: `Capture all those incredible, life changing moments and milestones as they happen by saving photos, videos, jot down notes, voice notes, add captions and tag people to share these unforgettable moments with you.`,
    cardTopColor: `bg-[#d4af37]`,
  },
  {
    title: `TIME TRAVEL THROUGH FAMILY MEMORIES`,
    description: `We create a visually appealing timeline that showcases your familys precious memories from the oldest black and white gems to the most recent digital snapshots.`,
    cardTopColor: `bg-[#336633]`,
  },
  {
    title: `STAY CONNECTED WITH FAMILY`,
    description: `With Akukom staying connected with family members around the world is easier than ever. Akukom enables us to bridge the distance and maintain strong bonds with our loved ones through routine video and audio calls.`,
    cardTopColor: `bg-[#80442c]`,
  },
];

const Benefits = () => {
  const content = benefits.map((i, index) => {
    return (
      <BenefitCard
        key={index}
        description={i.description}
        title={i.title}
        cardTopColor={i.cardTopColor}
      />
    );
  });
  return (
    <PaddinWrapper>
      <div className="text-black md:mx-4 md:my-11">
        <div className="text-center text-2xl/7 md:text-[42px]/[51px] font-medium mb-7 md:mb-16">
          Benefits
        </div>
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 md:gap-x-8">
          {content}
        </div>
      </div>
    </PaddinWrapper>
  );
};

export default Benefits;
