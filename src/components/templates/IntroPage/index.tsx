import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowWidth from "../../../lib/hooks/useWindowWidth";
import LogoWeb from "public/assets/images/round-logo.png";
import LogoMobile from "public/assets/images/intro-logo-mobile.png";
import * as S from "./introPage.style";

export const IntroPage = () => {
  const isWindowWidth = useWindowWidth();
  const [fadeItem, setFadeItem] = useState("fade-element");

  useEffect(() => {
    setTimeout(() => setFadeItem("fade-element delayed"), 2500);
  });

  return (
    <S.IntroPage className={fadeItem} window={isWindowWidth}>
      <Image
        className="intrologo"
        src={isWindowWidth < 769 ? LogoMobile : LogoWeb}
        alt="슬랙 로고"
        width={isWindowWidth < 769 ? 256 : 128}
        height={isWindowWidth < 769 ? 256 : 128}
      />
    </S.IntroPage>
  );
};
