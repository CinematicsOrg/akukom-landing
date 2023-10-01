interface AdditionalFeaturesContainerProps {
  content: string;
}

const AdditionalFeaturesContainer = ({
  content,
}: AdditionalFeaturesContainerProps) => {
  return (
    <div className="border-2 rounded-md py-4 md:py-6 border-black text-center text-black text-base/5 md:text-xl/7">
      {content}
    </div>
  );
};

export default AdditionalFeaturesContainer;
