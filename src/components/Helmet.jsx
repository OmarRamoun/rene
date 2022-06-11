import { Helmet } from "react-helmet";

const HelmetTitle = ({ pageTitle }) => {

  return (
    <Helmet>
      <title>
        {
          pageTitle ?
          `${pageTitle} - Rene | Project Management Software` :
          ` Rene | Project Management as it should be`
        }
      </title>
    </Helmet>
  );
};

export default HelmetTitle;
