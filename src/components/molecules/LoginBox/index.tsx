import React from "react";
import * as S from "./loginBox.style";
import Image from "next/image";
import Loginlogo from "public/assets/images/intro-logo-web.png";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from "../../atoms/Button";
import InputText from "../../atoms/Input/InputText";

const LoginBox = () => {
  return (
    <S.LoginBox>
      <Image src={Loginlogo} alt="슬랙 로고" width={120} height={30} />
      <h1>이메일로 로그인해 보세요</h1>
      <p>직장에서 사용하는 이메일 주소로 로그인하는 걸 추천드려요.</p>
      <S.ButtonWrapper>
        <Button
          width="100%"
          height="30px"
          backgroundColor="clear"
          color="#4285F4"
          border="2px solid"
        >
          <FcGoogle />
          Google을(를) 사용하여 로그인
        </Button>
        <Button
          width="100%"
          height="30px"
          backgroundColor="clear"
          color="black"
          border="2px solid"
        >
          <BsApple />
          Apple을(를) 사용하여 로그인
        </Button>
        <Button
          width="100%"
          height="30px"
          backgroundColor="#FAE100"
          color="#3B1E1E"
          border="2px solid"
        >
          <RiKakaoTalkFill />
          KaKao을(를) 사용하여 로그인
        </Button>
      </S.ButtonWrapper>

      <S.DividingLine>또는</S.DividingLine>

      <S.InputWrapper>
        <InputText />
        <InputText />
      </S.InputWrapper>
    </S.LoginBox>
  );
};

export default LoginBox;
