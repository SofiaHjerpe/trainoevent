import  { LegacyRef } from 'react'

interface IVideoProps {
  playerRef: LegacyRef<HTMLVideoElement> | undefined;
}

const Video = ({playerRef}: IVideoProps) => {
  return (
    <div className="video">
      <video
        width="100%"
        height="100%"
        ref={playerRef}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      >
        <source src="https://traino.nu/app/assets/bg800.mp4" type="video/mp4" />
        <source
          src="https://traino.nu/app/assets/bg800.webp"
          type="video/webp"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video