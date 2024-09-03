import Header from "../containers/Header";

const BaseLayout = ({ children }) => {

  return (
    <>
      <Header />
      { children }
      <footer>
        <p>Footer del site</p>
      </footer>
    </>
  );
};

export default BaseLayout;