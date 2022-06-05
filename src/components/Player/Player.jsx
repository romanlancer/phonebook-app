import { useAudio } from 'Hooks/useAudio';
import PropTypes from 'prop-types';
const Player = ({ url }) => {
  const [playing] = useAudio(url);

  return <div onLoad={() => playing}></div>;
};

Player.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Player;
