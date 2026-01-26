import React, { useRef, useState, useEffect } from 'react';

interface VideoControlsProps {
  video: HTMLVideoElement;
  width: number;
  position: { x: number; y: number };
}

const VideoControls: React.FC<VideoControlsProps> = ({ video, width, position }) => {
  const [isPlaying, setIsPlaying] = useState(!video.paused);
  const [currentTime, setCurrentTime] = useState(video.currentTime);
  const [duration, setDuration] = useState(video.duration || 0);
  const [isMuted, setIsMuted] = useState(video.muted);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration || 0);
    const handleVolumeChange = () => setIsMuted(video.muted);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('volumechange', handleVolumeChange);

    // 初始化状态
    setIsPlaying(!video.paused);
    setCurrentTime(video.currentTime);
    setDuration(video.duration || 0);
    setIsMuted(video.muted);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [video]);

  const togglePlay = () => {
    if (video.paused) {
      video.play().catch(err => console.error('Video play error:', err));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    video.muted = !video.muted;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      video.currentTime = Math.max(0, Math.min(newTime, duration));
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 12px',
        background: 'rgba(24, 24, 24, 0.95)',
        borderRadius: 8,
        minWidth: Math.max(200, width),
        width: Math.min(width, 400),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      {/* 播放/暂停按钮 */}
      <button
        onClick={togglePlay}
        style={{
          width: 28,
          height: 28,
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="3" y="2" width="3" height="10" rx="1" fill="rgba(255, 255, 255, 0.85)" />
            <rect x="8" y="2" width="3" height="10" rx="1" fill="rgba(255, 255, 255, 0.85)" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 2.5v9l7-4.5-7-4.5z" fill="rgba(255, 255, 255, 0.85)" />
          </svg>
        )}
      </button>

      {/* 时间显示 */}
      <span style={{
        fontSize: 11,
        fontFamily: 'SF Mono, monospace',
        color: 'rgba(255, 255, 255, 0.65)',
        minWidth: 35,
        flexShrink: 0,
      }}>
        {formatTime(currentTime)}
      </span>

      {/* 进度条 */}
      <div
        ref={progressBarRef}
        onClick={handleProgressClick}
        style={{
          flex: 1,
          height: 4,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 2,
          cursor: 'pointer',
          position: 'relative',
          minWidth: 60,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress}%`,
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: 2,
            transition: 'width 0.1s linear',
          }}
        />
        {/* 进度条圆点 */}
        <div
          style={{
            position: 'absolute',
            left: `${progress}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 10,
            height: 10,
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* 时长显示 */}
      <span style={{
        fontSize: 11,
        fontFamily: 'SF Mono, monospace',
        color: 'rgba(255, 255, 255, 0.45)',
        minWidth: 35,
        flexShrink: 0,
      }}>
        {formatTime(duration)}
      </span>

      {/* 静音按钮 */}
      <button
        onClick={toggleMute}
        style={{
          width: 28,
          height: 28,
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        {isMuted ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2L4 5H2v4h2l3 3V2z" fill="rgba(255, 255, 255, 0.85)" />
            <path d="M10 5l3 3m0-3l-3 3" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2L4 5H2v4h2l3 3V2z" fill="rgba(255, 255, 255, 0.85)" />
            <path d="M10 4.5c.7.7 1 1.5 1 2.5s-.3 1.8-1 2.5M11.5 3c1.2 1.2 1.5 2.5 1.5 4s-.3 2.8-1.5 4" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoControls;
