import React from 'react';
import nostrIcon from '@/assets/nostr-icon.png';

interface NostrIconProps {
  className?: string;
}

export const NostrIcon: React.FC<NostrIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <img
      src={nostrIcon}
      alt="Nostr icon"
      className={className}
    />
  );
};
