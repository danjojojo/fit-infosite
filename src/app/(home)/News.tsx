import FITNews from "@/components/client/news/FITNews";
import { getNewsData } from "@/service/newsService";

export default async function News() {
  const data = await getNewsData();
  return <FITNews data={data} />;
}
