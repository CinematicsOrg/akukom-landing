interface PhonecardProps {
  img: string;
  icon?: string;
  title?: string;
  desc?: string;
}

const Phonecard = ({
  img,
  desc,
  title,
  icon = '/svg/double_chat.svg',
}: PhonecardProps) => {
  console.log({ icon });
  return (
    <div className="text-center mb-7 md:mb-0">
      <div className="mb-4 md:mb-11">
        <img src={img} alt="Pone image" />
      </div>
      <div className="mb-2 md:mb-5 flex justify-center">
        <img src={icon} alt="chat icon" />
      </div>
      <div className="mb-2 text-sm/4  md:text-xl/7 font-medium">{title}</div>
      <div className="text-xs/4 md:text-base/5">{desc}</div>
    </div>
  );
};

export default Phonecard;
