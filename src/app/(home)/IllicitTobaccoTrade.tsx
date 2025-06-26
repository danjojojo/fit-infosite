import FITIllicitTobaccoTrade from "@/components/client/illicit-tobbaco-trade/FITIllicitTobaccoTrade";
import { getITTData } from "@/service/illicitTobaccoTradeService";

export default async function IllicitTobaccoTrade() {
  const data = await getITTData();
  return <FITIllicitTobaccoTrade data={data} />;
}
