import { metaTags } from "../../../cms-services/listing";
import Listing from "./_components/Listing";
export const metadata = {
  title: `${metaTags.metatitle}`,
  description: `${metaTags.metaDescription}`,
};
const page = () => {
  return (
    <>
      <Listing />
    </>
  );
};

export default page;
