import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Upload from "../shared/Upload";
import { actionCreator as userActions } from "../redux/modules/user";
import { actionCreator as imgActions } from "../redux/modules/image";
import imgProfile from "../img/profile/img_profile_01.jpg";
import plus from "../img/profile/btn_plus.svg";
//import { DivideLine } from "../elements/index"
// 하나 만들어놓고 맵돌려서 정보 받아오는 개수 만큼 불러주기

const ManageProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.user);
  const preview = useSelector((state) => state.image.preview);
  const ImgData = useSelector((state) => state.image.data);
  const [is_edit, setEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  // console.log("profile", profile);

  const changeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    const length = e.target.value.length;

    if ((length >= 2) & (length <= 20)) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.remove("correct");
    }
  };

  const cancelProfile = () => {
    setEdit(false);
    dispatch(imgActions.setPreview(null));
  };

  const createProfile = () => {
    dispatch(userActions.makeProfileFB(name, ImgData));
    //cancelProfile();
  };

  const selectProfile = (e) => {
    console.log(e.target);
    dispatch(userActions.checkProfileFB());
  };
  return (
    <Section>
      <ProfileTitle>
        {!is_edit ? "감상할 프로필을 선택해주세요" : "새 프로필"}
      </ProfileTitle>
      {(() => {
        if (is_edit) {
          return (
            <React.Fragment>
              <EditInfo>
                <div className="edit-left">
                  <div className="edit-img">
                    <div className="img-wrap">
                      <img src={preview ? preview : imgProfile} alt="" />
                    </div>
                  </div>
                  <Upload />
                  <button className="btn-img--delete">이미지 삭제</button>
                </div>
                <div className="edit-right">
                  <p>이름</p>
                  <input onChange={changeName} type="text" value={name} />
                  <span>• 이름은 최소 2자, 최대 20자 까지 입력이 가능해요</span>
                </div>
              </EditInfo>
              <DivideLine />
              <EditBtnGroup>
                <BtnEdit onClick={createProfile}>프로필 생성</BtnEdit>
                <BtnEdit onClick={cancelProfile}>취소</BtnEdit>
              </EditBtnGroup>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <Profiles>
                {profile !== null &&
                  profile.map((list) => {
                    return (
                      <Profile>
                        <ProfileCircle
                          name={list.profileName}
                          onClick={selectProfile}
                        >
                          <img
                            src={list.profileImage}
                            alt="프로파일 설정 이미지"
                          />
                        </ProfileCircle>
                        <ProfileText>{list.profileName}</ProfileText>
                      </Profile>
                    );
                  })}
                <Profile>
                  <ProfileCircle onClick={() => setEdit(true)}>
                    <img className="plus" src={plus} alt="" />
                  </ProfileCircle>
                  <ProfileText>새 프로필</ProfileText>
                </Profile>
              </Profiles>
              <ProfileEdit>프로필 편집</ProfileEdit>
            </React.Fragment>
          );
        }
      })()}
    </Section>
  );
};

export default ManageProfile;

const Section = styled.section`
  margin: 0 auto;
  width: 42.5781vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileTitle = styled.h3`
  margin: 0px 0px 4.0625vw;
  font-size: 3.125vw;
  font-weight: 700;
  color: rgb(255, 255, 255);
  letter-spacing: -0.0554687vw;
`;

const Profiles = styled.div`
  margin: 0px 0px 4.92188vw;
  display: flex;
  text-align: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem;
`;

const ProfileCircle = styled.div`
  cursor: pointer;
  position: relative;
  width: 11.0938vw;
  height: 11.0938vw;
  border-radius: 50%;
  border: 0.46875vw solid #000000;
  background-color: rgb(30, 31, 31);
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    background-color: transparent;
    background-size: 5vw 5vw;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.46875vw solid rgb(42, 43, 44);
    border-radius: 50%;
  }
  :hover:after {
    border: 0.46875vw solid #ffffff !important;
  }
  img {
    border-radius: 50%;
  }
  .plus {
    vertical-align: top;
    width: 100%;
    height: 100%;
    min-height: 1px;
    object-fit: none;
    transition: opacity 420ms ease 0s;
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
  font-size: 1.40625vw;
  font-weight: 400;
  letter-spacing: -0.0390625vw;
  line-height: 2.10938vw;
  color: rgb(219, 219, 219);
  padding: 0.625vw 1.875vw 0.703125vw 3.59375vw;
  white-space: nowrap;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNEQkRCREIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuODkzIDEzLjYwNGwyLjU3NiAyLjU3NS0zLjAwNi40My40My0zLjAwNXptNy43MjctNy43MjhsMi41NzYgMi41NzYtNi44NjkgNi44NjktMi41NzYtMi41NzYgNi44Ny02Ljg3ek0xNC4xOTYgMy4zbDIuNTc2IDIuNTc2LTEuNzE3IDEuNzE3LTIuNTc2LTIuNTc2TDE0LjE5NiAzLjN6Ii8+Cjwvc3ZnPgo=)
    left 1.48438vw top 0.9375vw / 1.5625vw 1.5625vw no-repeat rgb(34, 35, 36);

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

const EditInfo = styled.div`
  display: flex;
  .edit-left {
    margin: 0 1.875vw 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .edit-img {
      margin: 0 0 1.5625vw 0;
      position: relative;
      width: 11.0938vw;
      height: 11.0938vw;
      border-radius: 50%;
      .img-wrap {
        border-radius: 50%;
        border: 0.46875vw solid transparent;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
          opacity: 1;
          object-fit: cover;
          transition: opacity 420ms ease 0s;
          border-radius: 50%;
        }
        :after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%, -50%);
          box-sizing: content-box;
          width: 100%;
          height: 100%;
          background: 0% 0% / 5vw 5vw transparent;
          border-radius: 50%;
          border-width: 0.46875vw !important;
          border-style: solid !important;
          border-color: rgb(42, 43, 44) !important;
          border-image: initial !important;
        }
      }
    }
    .btn-img--delete {
      margin: 7rem 0rem 0rem;
      padding: 0.3125vw 2.73438vw 0.46875vw;
      border: 0.078125vw solid rgb(64, 64, 66);
      font-size: 1.09375vw;
      font-weight: 400;
      color: rgb(93, 94, 95);
      letter-spacing: -0.03125vw;
      vertical-align: top;
      white-space: nowrap;
      visibility: hidden;
    }
  }
  .edit-right {
    padding: 1.01562vw 0px 0px;
    font-size: 1.40625vw;
    p {
      margin: 0 0 0.703125vw 0;
      font-size: 1.40625vw;
      font-weight: 400;
      color: rgb(255, 255, 255);
      letter-spacing: -0.0390625vw;
    }
    input {
      margin: 0 0 0.78125vw 0;
      padding: 0.78125vw 0.9375vw;
      width: 29.5312vw;
      display: block;
      background: rgb(26, 27, 28);
      border: 0.078125vw solid rgb(219, 24, 24);
      font-size: 100%;
      color: rgb(255, 255, 255);
      &:focus {
        outline: 0;
      }
      &.correct {
        border: 0.078125vw solid rgb(51, 52, 53);
      }
      &.correct + span {
        color: rgb(93, 94, 95);
      }
    }
    span {
      color: rgb(219, 24, 24);
      font-size: 1.09375vw;
      font-weight: 400;
      letter-spacing: -0.0078125vw;
      line-height: 1.5625vw;
    }
  }
`;

const DivideLine = styled.hr`
  margin: 3.35938vw auto 1.32812vw;
  width: 100%;
  height: 0.078125vw;
  background: rgba(255, 255, 255, 0.09);
`;

const EditBtnGroup = styled.div`
  width: 100%;
  display: flex;
`;

const BtnEdit = styled.button`
  margin: 0 0.390625vw 0 0;
  padding: 0.625vw 1.875vw 0.703125vw;
  background: no-repeat rgb(34, 35, 36);
  font-size: 1.40625vw;
  font-weight: 400;
  color: rgb(219, 219, 219);
  letter-spacing: -0.0390625vw;
  line-height: 2.10938vw;
  :hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
