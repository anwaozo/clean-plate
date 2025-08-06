import Footer from "../components/footer";
import Header from "../components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <main className="h-full">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default layout;
