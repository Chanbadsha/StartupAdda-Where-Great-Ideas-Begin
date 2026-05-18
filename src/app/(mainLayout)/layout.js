import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Nab Section */}
      <Navbar />
      {/* Main Section */}
      <main>{children}</main>
      {/* Footer Section */}
    </div>
  );
};

export default MainLayout;
