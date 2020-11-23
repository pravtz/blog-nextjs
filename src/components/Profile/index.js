import * as S from "./style";
import Image from "next/image";

const Profile = () => {
  return (
    <S.container>
      <S.wrapperImage>
        <Image
          src="/images/photo-profile.jpeg"
          alt="Picture of the author"
          layout="fixed"
          width={60}
          height={60}
        />
      </S.wrapperImage>
      <S.wrapperProfile>
        <S.nameProfile>Ederson Pravtz</S.nameProfile>
        <S.descriptionProfile>Analista de Sistemas</S.descriptionProfile>
      </S.wrapperProfile>
    </S.container>
  );
};
export default Profile;
