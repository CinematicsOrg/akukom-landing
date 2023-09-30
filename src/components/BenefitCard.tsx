interface BenefitCardProps {
  title: string;
  description: string;
  cardTopColor?: string;
}

const BenefitCard = ({
  cardTopColor = 'bg-green-700',
  description,
  title,
}: BenefitCardProps) => {
  return (
    <div className={`${cardTopColor} rounded-t-3xl  text-black mb-14 md:mb-11`}>
      <div className="bg-white rounded-t-3xl mt-7 md:mt-10 text-center h-full pb-8 px-4 md:pb-12 shadow-xl">
        <div className="mb-5 pt-7 text-base/5 md:text-2xl/7 font-medium">
          {title}
        </div>
        <div className="text-sm/4 md:text-xl/6">{description}</div>
      </div>
    </div>
  );
};

export default BenefitCard;
