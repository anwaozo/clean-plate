import Footer from "@/app/(auth)/_components/footer";
import Header from "./_components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
