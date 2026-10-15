import { InfoPageView, infoPageMetadata } from "@/components/info-page";
import { aboutPage } from "@/data/site";

export const metadata = infoPageMetadata(aboutPage);

export default function Page() {
  return <InfoPageView page={aboutPage} />;
}
