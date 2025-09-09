import Footer from "@/app/(auth)/_components/footer";
import DashHeader from "./_components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashHeader />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
