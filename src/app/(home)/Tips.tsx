import FITTips from "@/components/client/tips/FITTips";
import { getTipsData } from "@/service/tipsService";

export default async function Tips() {
  const data = await getTipsData();
  return <FITTips data={data} />;
}
