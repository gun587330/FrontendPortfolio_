import {
    Wrapper, 
    Wrapper__header, 
    Wrapper__title, 
    Author,
    Writer,
    Password,
    Word, 
    Title, 
    Subject,
    Content, 
    Contents, 
    Address, 
    AddressMail__textBox, 
    Address__Button, 
    Address__textBox, 
    Link,
    Link__textBox, 
    Update, 
    UpdatePicture, 
    Picture, 
    Setting, 
    Setting__radio, 
    Wrapper__footer, 
    Enroll__button, 
    Wrapper__body,
} from '../../../styles/section05'
import { useState } from "react"

export default function PortfolioPage(){
    //Javascript Zone

    //State 선언
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [subject, setSubject] = useState("")
    const [contents, setContents] = useState("")

    function onChangeWriter(event){
        // 스테이트에 데이턱가 잘 저장되었는지 체크용
        // console.log(event.target.value)
        setWriter(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onChangeSubject(event){
        setSubject(event.target.value)
    }

    function onChangeContents(event){
        setContents(event.target.value)
    }

    return(
        // HTML Zone
        <Wrapper>
            <Wrapper__title>게시물 등록</Wrapper__title>
            <Wrapper__header>

                <Author>
                    <Word>작성자</Word>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
                </Author>

                <Author>
                    <Word>비밀번호</Word>
                    <Password type="password" placeholder="바말번호를 입력해주세요." onChange={onChangePassword} />
                </Author>

            </Wrapper__header>

            <Wrapper__body>
                <Title>
                    <Word>제목</Word>
                    <Subject placeholder="제목을 작성해주세요." onChange={onChangeSubject}/>
                </Title>

                <Content>
                    <Word>내용</Word>
                    <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
                </Content>

                <Address>
                    <Word>주소</Word>
                    <div className="mailName">
                        <AddressMail__textBox placeholder='07250'></AddressMail__textBox>
                        <Address__Button>우편번호 검색</Address__Button>
                    </div>
                    <Address__textBox></Address__textBox>
                    <Address__textBox></Address__textBox>
                </Address>

                <Link>
                    <Word>유튜브</Word>
                    <Link__textBox placeholder="링크를 복사해주세요." />
                </Link>

                <Update>
                    <Word>사진 첨부</Word>
                    <UpdatePicture>
                        <Picture></Picture>
                        <Picture></Picture>
                        <Picture></Picture>
                    </UpdatePicture>
                </Update>

                <Setting>
                    <Word>메인 설정</Word>
                    <Setting__radio>
                        <input type="radio" className="mainSetting" name="mainSetting"/> 유튜브
                        <input type="radio" className="mainSetting" name="mainSetting"/> 사진
                    </Setting__radio>
                </Setting>
            </Wrapper__body>

            <Wrapper__footer>
                <Enroll__button>등록하기</Enroll__button>
            </Wrapper__footer>
        </Wrapper>
    )
}