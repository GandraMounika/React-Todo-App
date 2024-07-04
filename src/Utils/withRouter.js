// src/utils/withRouter.js

import { useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        navigate={navigate}
        params={params}
      />
    );
  }

  return ComponentWithRouterProp;
};

export default withRouter;
