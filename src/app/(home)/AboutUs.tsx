import FITAboutUs from "@/components/client/about-us/FITAboutUs";
import { getAboutUsData } from "@/service/aboutUsService";

export default async function AboutUs() {
  const data = await getAboutUsData();
  return <FITAboutUs data={data} />;
}
