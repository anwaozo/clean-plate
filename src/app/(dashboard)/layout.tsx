import Footer from "@/app/(auth)/_components/footer";
import Header from "./_components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
