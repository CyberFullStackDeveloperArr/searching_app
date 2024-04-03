import PropTypes from 'prop-types';

export const AppView = ({ position }) => (
  <div style={{ left: position.x, top: position.y }} className="border">
    <div className="bulat1"></div>
  </div>
);

AppView.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
}