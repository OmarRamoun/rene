import { TailSpin } from 'react-loader-spinner';

const LoaderStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '9999',
  width: '100px',
  height: '100px',
}

const Loader = () => {
  return (
    <div className="loader" style={LoaderStyles}>
      <TailSpin ariaLabel="loading-indicator" />
    </div>
  );
};

export default Loader;
