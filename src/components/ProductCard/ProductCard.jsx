const ProductCard = () => {
  return (
    <>
      <div className="lg:w-[370px] font-dm-sans">
        <div className="relative">
          <picture>
            <img src="/product.png" alt="product" />
          </picture>
          {/* New tag */}
          <div className="w-[92px] h-[35px] text-white font-bold text-sm pl-8 pr-[30px] pt-2 pb-[9px] bg-primary absolute top-[20px] left-[26px]">
            New
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-6 mb-[15px]">
            <h3 className="text-primary text-[20px] font-bold">
              Basic Crew Neck Tee
            </h3>
            <span className="text-secondary font-[16px] leading-[30px]">
              $44.00
            </span>
          </div>
          <span className="text-secondary font-[16px] leading-[30px]">
            Black
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
