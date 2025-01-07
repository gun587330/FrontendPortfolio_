import {
    WriterWrapper, 
    Wrapper, 
    Title,
    InputWrapper,
    Writer,
    Password,
    Word, 
    Subject,
    Contents,  
    Zipcode, 
    AddressButton, 
    Address, 
    Youtube, 
    UploadWrapper, 
    UpdatePicture, 
    Picture, 
    SettingWrapper,
    RadioButton,
    RadioWord, 
    ButtonWrapper, 
    EnrollButton, 
    ZipcodeWrapper,
    ErrorMessage,
} from '../../../styles/section05'
import { useState } from "react"

export default function PortfolioPage(){
    //Javascript Zone

    //State 선언
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setContents] = useState("");

    //Error에 관한 State 선언
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setContentsError] = useState("");

    function onChangeWriter(event){
        // 스테이트에 데이턱가 잘 저장되었는지 체크용
        // console.log(event.target.value)
        setWriter(event.target.value);
        if(event.target.value !== ""){
            setWriterError("");
        }
    };

    function onChangePassword(event){
        setPassword(event.target.value);
        if (event.target.value){
            setPasswordError("");
        }
    };

    function onChangeSubject(event){
        setSubject(event.target.value);
        if (event.target.value){
            setSubjectError("");
        }
    };

    function onChangeContents(event){
        setContents(event.target.value);
        if (event.target.value){
            setContentsError("");
        }
    };

    const onClickEnroll = () => {
        if(!writer){
            setWriterError("작성자를 입력해주세요.");
        }
        if(!(password)){
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if(!(subject)){
            setSubjectError("제목을 입력해주세요.");
        }
        if(!(contents)){
            setContentsError("내용을 입력해주세요.");
        }
        if(writer && password && subject && contents){
            alert("가입을 환영합니다!")
        }
    };

    return(
        // HTML Zone
        <Wrapper>
            <Title>게시물 등록</Title>

            <WriterWrapper>
                <InputWrapper>
                    <Word>작성자</Word>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
                    <ErrorMessage>{writerError}</ErrorMessage>
                </InputWrapper>

                <InputWrapper>
                    <Word>비밀번호</Word>
                    <Password type="password" placeholder="바말번호를 입력해주세요." onChange={onChangePassword} />
                    <ErrorMessage>{passwordError}</ErrorMessage>
                </InputWrapper>
            </WriterWrapper>

            <InputWrapper>
                <Word>제목</Word>
                <Subject placeholder="제목을 작성해주세요." onChange={onChangeSubject}/>
                <ErrorMessage>{subjectError}</ErrorMessage>
            </InputWrapper>

            <InputWrapper>
                <Word>내용</Word>
                <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
                <ErrorMessage>{contentsError}</ErrorMessage>
            </InputWrapper>

            <InputWrapper>
                <Word>주소</Word>
                <ZipcodeWrapper>
                    <Zipcode placeholder='07250'/>
                    <AddressButton>우편번호 검색</AddressButton>
                </ZipcodeWrapper>
                <Address></Address>
                <Address></Address>
            </InputWrapper>

            <InputWrapper>
                <Word>유튜브</Word>
                <Youtube placeholder="링크를 복사해주세요."/>
            </InputWrapper>

            <UploadWrapper>
                <Word>사진 첨부</Word>
                <UpdatePicture>
                    <Picture>+</Picture>
                    <Picture>+</Picture>
                    <Picture>+</Picture>
                </UpdatePicture>
            </UploadWrapper>

            <SettingWrapper>
                <Word>메인 설정</Word>
                {/* <input type="radio" className="mainSetting" name="mainSetting"/> 유튜브
                <input type="radio" className="mainSetting" name="mainSetting"/> 사진 */}
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioWord htmlFor="youtube">유튜브</RadioWord>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioWord htmlFor="image">사진</RadioWord>
            </SettingWrapper>

            <ButtonWrapper>
                <EnrollButton onClick={onClickEnroll}>등록하기</EnrollButton>
            </ButtonWrapper>
        </Wrapper>
    )
}