import FITEffectsOfIllicitTrade from "@/components/client/effects-of-iliicit-trade/FITEffectsOfIllicitTrade";
import { getEITData } from "@/service/effectsOfIllicitTradeService";

export default async function EffectsOfIllicitTrade() {
  const data = await getEITData();
  return <FITEffectsOfIllicitTrade data={data} />;
}
