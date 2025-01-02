// CSS-IN-JS를 사용하기 위해 Emotion 불러오기
import styled from '@emotion/styled'

//HTML에서 불러서 사용하기위 export를 이용하여 내보내기
export const Wrapper = styled.div`
    width: 1200px;
    // height: 1847px;          // 높이를 고정하면, 나중에 글을 쓸 때 모양이 오바될 수 있음
    border: 1px solid #BDBDBD;
    display: flex;
    margin: 100px;
    padding: 80px;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px gray;
    border-radius: 15px;
`
// reference: Title
export const Wrapper__title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size : 34px;
    font-weight : bold;
    margin-bottom: 80px;
`
// reference: Writer
export const Author__textBox = styled.input`
    height: 52px;
    padding-left: 10px;
    border: 1px solid #bdbdbd;
`
// reference: WriterWrapper
export const Wrapper__header = styled.div`
    width: 996px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

// reference: 
export const Author = styled.div`
    width: 486px;
    height: 92px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const Word = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const Title = styled.div`
    width: 996px;
    height: 92px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const Title__textBox = styled.input`
    height: 52px;
    padding-left: 10px;
    border: 1px solid #bdbdbd;
`

export const Wrapper__body = styled.div`
    margin-bottom: 50px;
`

export const Content = styled.div`
    width: 996px;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const Content__textBox = styled.textarea`
    height: 480px;
    border: 1px solid #BDBDBD;
    padding-top: 10px;
    padding-left: 10px;
`

export const Address = styled.div`
    width: 996px;
    height: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
`
export const AddressMail__textBox = styled.input`
    width: 77px;
    height: 52px;
    margin-right: 20px;
    padding-left: 20px;
    border: 1px solid #BDBDBD;
`

export const Address__textBox = styled.input`
    height: 52px;
    border: 1px solid #BDBDBD;
`

export const Address__Button = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    color: white;
    border: 1px solid black;
`

export const Link = styled.div`
    width: 996px;
    height: 92px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const Link__textBox = styled.input`
    height: 52px;
    padding-left: 20px;
    border: 1px solid #BDBDBD;
`

export const Update = styled.div`
    width: 282px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const UpdatePicture = styled.div`
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Picture = styled.div`
    width: 78px;
    height: 78px;
    background-color: gray; 
`

export const Setting = styled.div`
    width: 159px;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Setting__radio = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Wrapper__footer = styled.div`
    width: 996px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Enroll__button = styled.button`
    width: 179px;
    height: 52px;
    background-color: #FFD600;
`