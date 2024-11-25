import ComparisonImage from '../../assets/Group18.png';

const ComparisonSection = () => {
  return (
    <div className="pb-10 relative lg:mt-20 2xl:px-32 px-3 sm:px-5 md:px-8 lg:px-16">
      <h1 className="lg:text-[3rem] text-[1.8rem] 2xl:ml-16 font-bold text-white 2xl:mt-12">
        Why <span className="text-[#F9D423]">MoonEx</span>?
      </h1>

      <div className="relative w-full mt-8 bg-[#0D1B28] lg:p-2">
        <div className="bg-[#0D1B25] rounded">
          <div className="absolute top-[5rem] left-[5rem] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,100,0.1)_0%,_rgba(255,255,120,0)_70%)]"></div>

          <div className="flex 2xl:text-[2rem] items-center justify-center">
            <img
              src={ComparisonImage}
              alt="Comparison Image"
              className="w-full max-w-6xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;