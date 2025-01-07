// CSS-IN-JS를 사용하기 위해 Emotion 불러오기
import styled from '@emotion/styled'

//HTML에서 불러서 사용하기위 export를 이용하여 내보내기
export const Wrapper = styled.div`
    width: 1200px;
    // height: 1847px;          // 높이를 고정하면, 나중에 글을 쓸 때 모양이 오바될 수 있음
    border: 1px solid black;
    margin: 100px;
    // padding: 80px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px gray;
    border-radius: 15px;
`;

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size : 34px;
    font-weight : bold;
    // margin-bottom: 80px;
`;

export const WriterWrapper = styled.div`
    // width: 100%;
    width: 996px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Word = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 16px;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Subject = styled.input`
    // width: 100%;
    width: 996px;
    height: 52px;
    padding-left: 10px;
    border: 1px solid #bdbdbd;
`;

// export const Wrapper__body = styled.div`
//     margin-bottom: 50px;
// `

// export const Content = styled.div`
//     width: 996px;
//     height: 520px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-bottom: 30px;
// `

export const Contents = styled.textarea`
    width: 996px;
    height: 480px;
    border: 1px solid #BDBDBD;
    padding-top: 10px;
    padding-left: 16px;
`;

// export const Address = styled.div`
//     width: 996px;
//     height: 228px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-bottom: 30px;
// 

export const ZipcodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Zipcode = styled.input`
    width: 77px;
    height: 52px;
    margin-right: 20px;
    padding-left: 20px;
    border: 1px solid #BDBDBD;
`;

export const Address = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    margin-top: 16px;
    padding-left: 16px;
`;

export const AddressButton = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    color: white;
    border: 1px solid black;
`;

export const Link = styled.div`
    width: 996px;
    height: 92px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 20px;
    border: 1px solid #BDBDBD;
`;

export const UploadWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    margin-bottom: 30px;
`;

export const UpdatePicture = styled.div`
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Picture = styled.div`
    width: 78px;
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: gray;
    margin-right: 10px;
`;

export const SettingWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioWord = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    width: 996px;
    padding-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const EnrollButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;
    background: yellow;
`;

export const ErrorMessage = styled.div`
    color: red;
    padding-top: 10px;
    font-size: 14px;

`