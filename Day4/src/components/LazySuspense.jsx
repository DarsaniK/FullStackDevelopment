import { Suspense } from 'react';
import PropTypes from 'prop-types';
import loader from '../assets/images/loader.gif';
import ErrorBoundary from './ErrorBoundary';

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    // <ErrorBoundary>
    <Suspense fallback={<img src={loader} alt='Loader' style={loaderStyle}></img>}>
      <Component {...rest} />
    </Suspense>
    // </ErrorBoundary>
  )
}

LazySuspense.propTypes = {
  component: PropTypes.func.isRequired
}
const loaderStyle = {
  position: 'fixed',
  top: 250,
  left:600,
  width: '30%',
  height: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
}

export default LazySuspense;