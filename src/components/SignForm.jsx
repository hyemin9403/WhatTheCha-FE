import React from 'react';
import styled from 'styled-components';

import { Input } from '../elements';

const SignForm = (props) => {
    const { type } = props
    if(type === "sign_in"){
        return (
            <StyleSignForm>
                <div className="input-sign">
                  <Input _type="email" _name="email" _autocomplete="off" _placeholder="이메일 (example@gmail.com)" />
                </div>
                <div className="input-sign">
                  <Input _type="password" _name="password" _autocomplete="off" _placeholder="비밀번호" /> 
                </div>
            </StyleSignForm>
        );
    }else if(type === "SignUp"){
        return null;
    }
    return null;
};
const StyleSignForm = styled.div`
    .input-sign{
        &:first-child{
        input{
            border-radius: 0.4rem 0.4rem 0rem 0rem;
        }
        }
        &:last-child{
        input{
            border-radius: 0rem 0rem 0.4rem 0.4rem;
        }
        }
    }
`
export default SignForm;