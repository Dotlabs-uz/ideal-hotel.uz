type RoomCardProps = {
  image: string;
  title: string;
  features: string[];
};

const RoomCard = ({ image, title, features }: RoomCardProps) => {
  return (
    <div className="max-w-[418px] rounded overflow-hidden">
      <img src={image} alt={title} className="w-[209px] sm:w-[260px] md:w-[300px] lg:w-[418px] bg-cover bg-center" />
      {/* h-[209px] sm:h-[260px] md:h-[300px] lg:h-[419px] */}

      <div className="mt-[13px]">
        <h3 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium text-[#17849A]">{title}</h3>
        <p className="text-[#000] text-[8px] lg:text-[14px]">
          {features.join(' | ')}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
