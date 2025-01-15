import { topbannerData } from "@/data/data";
import Image from "next/image";

export default function TopBanner() {
    return (
        <main className="container max-w-screen-2xl mx-auto">
            <div className="relative">
                <Image src={topbannerData.image} alt={topbannerData.title} objectFit="cover" style={{ height: 'calc(100vh - 60px)', maxHeight: '100vh',width:"100%" }} />
                <div className="absolute bottom-16 left-0 inset-0 flex flex-col items-center lg:items-start justify-center lg:justify-end horizantalPadding text-white">
                    <p className="text-2xl md:text-4xl xl:text-5xl text-white lg:w-2/3">{topbannerData.title}</p>
                    <button className="mt-10 text-white border border-white rounded-full py-2 px-5 hover:bg-lightBlack hover:text-white hover:border-lightBlack transition-all">
                        Book now
                    </button>
                </div>
            </div>
        </main>
    );
}