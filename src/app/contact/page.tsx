import { InfoPageView, infoPageMetadata } from "@/components/info-page";
import { contactPage } from "@/data/site";

export const metadata = infoPageMetadata(contactPage);

export default function Page() {
  return <InfoPageView page={contactPage} />;
}
