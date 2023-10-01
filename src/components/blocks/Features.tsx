import Phonecard from '../Phonecard';

const featuresList = [
  {
    title: `Organize  Family  Stories in Pictures and Videos`,
    desc: `Arrange pictures and videos chronologically, add titles and description and curate a beautiful timeline of family memories and history.`,

    img: '/svg/features_1.svg',
  },
  {
    title: `Make Family Video and Audio Calls`,
    desc: `Set up regular calls with family members through routine video and audio calls, ensuring that you never miss a chance to share experience.`,
    icon: `/svg/double_chat_brown.svg`,
    img: '/svg/features_2.svg',
  },
  {
    title: `Learn and Earn with Family Games`,
    desc: `Learn about your family’s history with puzzles and quiz generated from rich tapestry of your family’s stories.`,
    img: '/svg/features_3.svg',
  },
  {
    title: `Learn About African Tribes, History and Culture`,
    desc: `Explore a diverse range of communities in Africa focused on specific historical periods, regions, themes, or topics of interest. `,
    icon: `/svg/double_chat_brown.svg`,
    img: '/svg/features_4.svg',
  },
];

const Features = () => {
  const content = featuresList.map((i, index) => {
    return (
      <Phonecard
        img={i.img}
        desc={i.desc}
        icon={i.icon}
        key={index}
        title={i.title}
      />
    );
  });
  return (
    <div className="text-black  px-4 md:px-14 md:py-11 bg-[#F6EFD7]">
      <div className="text-center font-medium text-2xl/7 md:text-[42px]/[51px] mb-7 md:mb-24">
        Features
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-[130px]">
        {content}
      </div>
    </div>
  );
};

export default Features;
