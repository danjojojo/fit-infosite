import FITIllicitCigarettes from "@/components/client/illicit-cigarettes/FITIllicitCigarettes";
import {
  getIllicitCigsData,
  getIllegalCigsData,
} from "@/service/illicitCigarettesService";

export default async function IllicitCigarettes() {
  const illicitCigsData = await getIllicitCigsData();
  const illegalCigsData = await getIllegalCigsData();

  return (
    <FITIllicitCigarettes
      illicitCigsData={illicitCigsData}
      illegalCigsData={illegalCigsData}
    />
  );
}
