import Concern from "@/components/Landingpage/Concern/Concern";
import Testimonial from "@/components/Landingpage/Testimonial/Testimonial";
import TopBanner from "@/components/Landingpage/TopBanner.tsx/TopBanner";
import TreatmentTypes from "@/components/Landingpage/Treatment/TreatmentType";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <TreatmentTypes/>
      <Concern/>
      <Testimonial/>
    </div>
  );
}
