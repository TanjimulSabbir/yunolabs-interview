import Concern from "@/components/Landingpage/Concern/Concern";
import TopBanner from "@/components/Landingpage/TopBanner.tsx/TopBanner";
import TreatmentTypes from "@/components/Landingpage/Treatment/TreatmentType";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <TreatmentTypes/>
      <Concern/>
    </div>
  );
}
