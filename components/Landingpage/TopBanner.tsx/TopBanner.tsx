import { topbannerData } from "@/data/data";
import Image from "next/image";

export default function TopBanner() {
    return (
        <main className="container max-w-screen-2xl mx-auto">
            <div className="relative">
                <Image src={topbannerData.image} alt={topbannerData.title} className="max-h-screen" />
                <div className="absolute bottom-7 md:bottom-20 left-0 horizantalPadding text-white">
                    <p className="text-2xl md:text-4xl xl:text-5xl text-white lg:w-2/3">{topbannerData.title}</p>
                    <button
                        aria-label="Book a service"
                        className="mt-5 md:mt-10 text-white border border-white rounded-full py-2 px-5 
              hover:bg-lightBlack hover:text-white hover:border-lightBlack 
              focus:outline-none focus:ring-2 focus:ring-lightBlack 
              focus:ring-offset-2 transition-all"
                    >
                        Book Now
                    </button>

                </div>
            </div>
        </main>
    );
}