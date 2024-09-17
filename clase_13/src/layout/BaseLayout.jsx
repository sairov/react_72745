import Header from "../containers/Header";
import Footer from "../containers/Footer";

const BaseLayout = ({ children }) => {

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default BaseLayout;