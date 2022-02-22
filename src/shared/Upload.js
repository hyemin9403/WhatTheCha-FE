import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

/* Source */
import {actionCreator as imgActions} from '../redux/modules/image';

const Upload = (props) => {
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.image.uploading);
    const fileInput = React.useRef();
    console.log("파일이름", fileInput)


    const selectFile = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.files[0]);
        //console.log(fileInput.current.files[0]);
        const reader = new FileReader();
        const currentFile = fileInput.current.files[0]
        console.log(typeof(currentFile))

        reader.readAsDataURL(currentFile);

        reader.onloadend = () => {
            console.log(reader.result)
            console.log(typeof(reader.result))
            dispatch(imgActions.setPreview(reader.result))
            console.log(fileInput.current.files[0])
        }
    } 
    const uploadFB = () => {
        if (!fileInput.current || fileInput.current.files.length === 0) {
          window.alert("파일을 선택해주세요!");
          return;
        }
    
        dispatch(imgActions.uploadImgFB(fileInput.current.files[0]));
    };

    return (
        <React.Fragment>
            <StyleUpload>
                <label className='upload-layer'>
                    <span className="upload-layer-btn">이미지 변경</span>
                    <input
                        type="file"
                        onChange={selectFile}
                        ref={fileInput}
                        disabled={uploading}
                    />
                </label>
            </StyleUpload>
            {/* <Btn eventType={"click"} event={uploadFB} text={"업로드하기"}/> */}
        </React.Fragment>
    );
};
const StyleUpload = styled.div`
  .upload-layer {
    padding: 0.3125vw 2.73438vw 0.46875vw;
    border: 0.078125vw solid rgb(64, 64, 66);
    font-size: 1.09375vw;
    font-weight: 400;
    color: rgb(93, 94, 95);
    letter-spacing: -0.03125vw;
    vertical-align: top;
    white-space: nowrap;
    cursor: pointer;
  }
  input {
    display: none;
  }
`;

export default Upload;