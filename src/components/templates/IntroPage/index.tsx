import Image from 'next/image';
import { useEffect, useState } from 'react';
import useWindowWidth from '../../../lib/hooks/useWindowWidth';
import LogoWeb from "public/assets/images/intro-logo.png"

export const IntroPage = () => {
  const isWindowWidth = useWindowWidth();

  return (
    <div>
      <Image
        src={isWindowWidth < 769 ? LogoMobile : LogoWeb}
        alt="슬랙 로고"
        width={isWindowWidth < 769 ? 139 : 378}
        height={isWindowWidth < 769 ? 56 : 55}
      />
    </div>
  );
};
