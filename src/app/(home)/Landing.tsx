import FITLanding from "@/components/client/landing/FITLanding";
import { getLandingData } from "@/service/landingService";

export default async function Landing() {
  const landingData = await getLandingData();

  return <FITLanding landingData={landingData} />;
}
