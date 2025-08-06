import { metaTags } from "../../../cms-services/contact";
import ContactForm from "./_components/contact-form";

export const metadata = {
  title: `${metaTags.metatitle}`,
  description: `${metaTags.metaDescription}`,
};
const page = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default page;
