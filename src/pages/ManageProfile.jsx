import React from "react";
import styled from "styled-components";

// 하나 만들어놓고 맵돌려서 정보 받아오는 개수 만큼 불러주기

const ManageProfile = () => {
  return (
    <Section>
      <ProfileTitle>
        <p>감상할 프로필을 선택해주세요</p>
      </ProfileTitle>
      <Profiles>
        <Profile>
          <ProfileCircle>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/emPiR9QK3LtRUgwlwAE0Pg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16QXdlRE13TUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNWelpYSXZaR1ZtWVhWc2RGOXdjbTltYVd4bFgybHRZV2RsTDNCeWIyWnBiR1ZmTURRdWNHNW5JbjAua1BKeFk1LUZnYWN3dVJmQWVyb0U1THRoSjdNQl9tNkdocTAweTNlZ0FHbw"
              alt=""
            />
          </ProfileCircle>
          <ProfileText>학새</ProfileText>
        </Profile>
      </Profiles>
      <ProfileEdit>프로필 편집</ProfileEdit>
    </Section>
  );
};

export default ManageProfile;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileTitle = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 700;

  letter-spacing: -0.05546875vw;
  margin: 0 0 6rem;
`;

const Profiles = styled.div`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem 9rem;
`;

const ProfileCircle = styled.div`
  cursor: pointer;
  position: relative;
  width: 11.0938vw;
  height: 11.0938vw;
  border-radius: 50%;
  overflow: hidden;
  border: 0.46875vw solid transparent !important;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    background: transparent;
    background-size: 5vw 5vw;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.46875vw solid #2a2b2c !important;
    border-radius: 50%;
  }
  :hover:after {
    border: 0.46875vw solid #eee !important;
  }
`;

const ProfileText = styled.div`
  color: #adadad;
  font-size: 1.40625vw;
  font-weight: 400;

  letter-spacing: -0.0390625vw;
  white-space: nowrap;
  text-align: center;
  width: 11.09375vw;
  margin: 0.8593750000000001vw 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileEdit = styled.button`
  cursor: pointer;
  background: #222324 no-repeat;
  color: #dbdbdb;
  font-size: 1.40625vw;
  font-weight: 400;
  letter-spacing: -0.0390625vw;
  line-height: 2.109375vw;
  padding: 0.625vw 1.875vw 0.703125vw 3.5937499999999996vw;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNEQkRCREIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuODkzIDEzLjYwNGwyLjU3NiAyLjU3NS0zLjAwNi40My40My0zLjAwNXptNy43MjctNy43MjhsMi41NzYgMi41NzYtNi44NjkgNi44NjktMi41NzYtMi41NzYgNi44Ny02Ljg3ek0xNC4xOTYgMy4zbDIuNTc2IDIuNTc2LTEuNzE3IDEuNzE3LTIuNTc2LTIuNTc2TDE0LjE5NiAzLjN6Ii8+Cjwvc3ZnPgo=);
  background-size: 1.5625vw 1.5625vw;
  background-position: top 0.9375vw left 1.484375vw;
  white-space: nowrap;

  :hover {
    background-color: white;
    color: black;
  }
  /* 이미지 색상 반전하는 법(안먹힘) */
  :hover img {
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
  }
`;
