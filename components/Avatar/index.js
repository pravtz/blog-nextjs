import * as S from "./style";
import Image from 'next/image';

const Avatar = () => {
  return (
    <S.container>
      <Image
              src="/images/photo-profile.jpeg"
              alt="Picture of the author"
              className="imgProfile"
              width={60}
              height={60}
      />
    </S.container>
  );
};
export default Avatar;
