import { InfoPageView, infoPageMetadata } from "@/components/info-page";
import { privacyPage } from "@/data/site";

export const metadata = infoPageMetadata(privacyPage);

export default function Page() {
  return <InfoPageView page={privacyPage} />;
}
