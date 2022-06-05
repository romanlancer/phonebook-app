import { useAudio } from 'Hooks/useAudio';

const Player = ({ url }) => {
  const [playing] = useAudio(url);

  return <div onLoad={() => playing}></div>;
};

export default Player;
