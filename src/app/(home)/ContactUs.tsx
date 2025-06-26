import FITContactUs from "@/components/client/contact-us/FITContactUs";
import { getContactUsData } from "@/service/contactUsService";

export default async function ContactUs() {
  const data = await getContactUsData();
  return <FITContactUs data={data} />;
}
