import { createAction, handleActions } from "redux-actions";
import instance from "../../shared/request";
import { produce } from "immer";

import profileImg from "../../img/profile/img_profile_01.jpg"


// actions
const UPLODING = "UPLODING";
const UPLOAD_IMG = "UPLOAD_IMG";
const SET_PREVIEW = "SET_PREVIEW";

// action creators
const uploading = createAction(UPLODING, (uploading) => ({ uploading }));
const uploadImg = createAction(UPLOAD_IMG, (image) => ({ image }));
const setPreview = createAction(SET_PREVIEW, (preview, data) => ({ preview, data }));

// initialState
const initialState = {
  image: "",
  uploading: false,
  preview: profileImg,
  DataImg: null,
};

// const uploadImgFB = (image) => {
//   return async function (dispatch, getState) {
//     instance
//       .post(
//         "/profile/create", 
//         {
//           "profileName" :
//           "profileImage" :
//         } 
//         // {headers: { 'Authorization': '내 토큰 보내주기' },}
//       )
//       .then(function (response) {
//         console.log(response);
//         dispatch(uploading(true));
//         dispatch(uploadImg(image))
//           .then(() => {
//             console.log("이미지 업로드 완료");
//           })
//           .catch((error) => {
//             console.log("이미지 업로드 오류", error);
//           });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

//reducer
export default handleActions(
  {
    [UPLOAD_IMG]: (state, action) =>
      produce(state, (draft) => {
        draft.image = action.payload.image;
        draft.uploading = false;
        console.log(draft.image);
      }),
    [UPLODING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.data = action.payload.data
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreator = {
  uploadImg,
  setPreview,
};

export { actionCreator };
