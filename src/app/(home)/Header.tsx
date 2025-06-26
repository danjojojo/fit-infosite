import FITNavHeader from "@/components/client/header/FITNavHeader";
import { getNavLinks } from "@/service/headerService";

export default async function Header() {
  const navLinks = await getNavLinks();

  return <FITNavHeader links={navLinks} />;
}
