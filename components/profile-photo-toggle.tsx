'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function ProfilePhotoToggle() {
  const [isPreviousPinned, setIsPreviousPinned] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);

  const showPrevious = isPreviousPinned || (isMouseOver && !suppressHover);

  function togglePinnedPhoto() {
    if (isPreviousPinned) {
      setIsPreviousPinned(false);
      setSuppressHover(isMouseOver);
      return;
    }

    setIsPreviousPinned(true);
    setSuppressHover(false);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      className={`about-photo-toggle${showPrevious ? ' show-previous' : ''}`}
      aria-label={isPreviousPinned ? 'Show current portrait' : 'Show previous portrait'}
      aria-pressed={isPreviousPinned}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') {
          setIsMouseOver(true);
        }
      }}
      onPointerLeave={() => {
        setIsMouseOver(false);
        setSuppressHover(false);
      }}
      onClick={togglePinnedPhoto}
    >
      <img
        className="about-photo-current"
        src="/hojin-chu-main.jpg"
        alt=""
        width="1181"
        height="1575"
        loading="lazy"
      />
      <img
        className="about-photo-previous"
        src="/hojin-chu.jpg"
        alt=""
        width="1280"
        height="1689"
        loading="lazy"
        aria-hidden="true"
      />
      <span className="photo-switch-hint" aria-hidden="true">
        {isPreviousPinned ? 'Previous · tap to return' : showPrevious ? 'Previous portrait' : 'Hover or tap'}
      </span>
    </Button>
  );
}
