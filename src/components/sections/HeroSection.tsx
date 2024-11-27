import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="h-[calc(100vh_-_86px)] flex flex-col items-center justify-center px-4">
				<div className="space-y-6 lg:text-left">
					<div className="space-y-2">
						<h1 className="text-white font-extrabold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
							Trusted Multi-Chain
							<span className="text-[#F9D423]"> DEX </span>{" "}
							Platform
						</h1>
						<span className="text-[#9E9E9E] block text-sm md:text-base lg:text-lg xl:text-xl">
							Trade, earn, and own crypto on the all-in-one
							multi-chain DEX
						</span>
					</div>
					<div className="space-y-4 max-w-max mx-auto lg:max-w-none lg:mx-0 lg:flex lg:items-center lg:space-y-0 lg:gap-x-5">
						<Button
							
							className="h-10  px-[14px] text-black font-bold text-sm  w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]"
						>
							Connect Wallet
						</Button>

						<Button
							variant="outline"
							className="h-10  px-[14px] text-brand-yellow font-bold text-sm  w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]"
						>
							Trade Crypto
						</Button>
					</div>
				</div>
			</section>

  );
};