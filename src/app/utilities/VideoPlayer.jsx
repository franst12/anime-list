'use client';
import { XCircleIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const opts = {
    width: '350',
    height: '200',
  };

  const ready = (e) => {
    e.target.pauseVideo();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleError = () => {
    alert('Vidio error tidak bisa di putar');
  };

  const Player = () => {
    return (
      <>
        <div className="relative shadow-md transition-all duration-200 ease-in-out">
          <button onClick={handleClick}>
            <XCircleIcon size={32} className="absolute -top-3 rounded -left-3 hover:text-red-600 cursor-pointer" />
          </button>
          <YouTube videoId={videoId} opts={opts} onReady={ready} onError={handleError} />
        </div>
      </>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button onClick={handleClick} className="bg-accent p-2 hover:bg-amber-500 transition-all duration-200 hover:text-primary rounded absolute bottom-1 cursor-pointer right-1">
      Trailer
    </button>
  );
};

export default VideoPlayer;
