import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import {withAuth} from '../lib/AuthProvider'

function PrivateRoute({component: Component, isLoggedIn, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default withAuth(PrivateRoute)