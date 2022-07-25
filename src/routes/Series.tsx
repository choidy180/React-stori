import React, { MouseEventHandler, useState } from 'react';
import { BookmarkOutline, BookOutline } from 'react-ionicons';
import styled from 'styled-components';
import HelmetPd from '../components/Helmet';
import NavBar from "../components/Nav";

interface title {
  title: string;
}
interface Iprops{
  onClick: () => void;
}

export default function Series(title: title){
  const tabTitle = ["대여하기","소장하기","NFT IP 구매"];
  const [TabState, setTabState] = useState<Number>(0);
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetPd title={title.title}/>
        <TopupBox>
          <p>양과 여우들의 밤</p>
        </TopupBox>
        <Box>
          <Left>
            <TitleImg>
              <img src="images/Illustration/011454884a20ebe329565d653639090d.png" alt="" />
            </TitleImg>
            <SubBox>
              <p className='firstEpisode'>
                <BookOutline
                  width={"20px"}
                  height={"20px"}
                />
                첫화 보기
              </p>
            </SubBox>
            <TitleHead>줄거리</TitleHead>
            <TitleSubText>「패왕을 보았다」의 작가 추공. 이번에는 레이드의 진수를 보여준다! 『나 혼자만 레벨업』 재능 없는 만년 E급의 헌터, 성진우. 기이한 던전에서 죽음을 목전에 두지만 위기는 언제나 기회와 함께 찾아오는 법! [플레이어가 되실 자격을 획득하셨습니다.] “플레이어? 내가 레벨업을 할 수 있다고?” 전 세계 헌터 중 유일무이, 전무후무 시스템과 레벨업 능력을 각성한 진우. 세상을 향해 자유를 선포한다!</TitleSubText>
            <SubBox style={{paddingTop: "176px"}}>
              <WriterImg>
                <img src="images/Illustration/5a345987bf1dda7b5d93c2971f8f4975.png" alt="" />
              </WriterImg>
              <WriteInfo>
                <p className='title'>Richard Ottemant</p>
                <p className='tag'>@Illustrator</p>
                <WriteFollow>Follow</WriteFollow>
                <WriteSupport>Staking Support</WriteSupport>
              </WriteInfo>
            </SubBox>
            <SubBox style={{flexDirection:"column"}}>
              <p className='publicTitle'>작가의 공지</p>
              <p className='public'>이전 주 연재가 조금 늦었습니다.<br/>많은 양해 바랍니다.</p>
            </SubBox>
          </Left>
          <Right>
            <BookMark>
              <BookmarkOutline
                width={"22px"}
                height={"22px"}
              />
              북마크하기
            </BookMark>
            <InfoBox>
              <div>
                <p>장르</p>
                <p>액션, 판타지</p>
              </div>
              <div>
                <p>에피소드</p>
                <p>148</p>
              </div>
              <div>
                <p>포멧라벨</p>
                <p>웹소설, 시나리오, 드라마대본</p>
              </div>
            </InfoBox>
            <SelectTab>
              {tabTitle.map((title, i)=>(
                <p  key={i} className={TabState === Number(i) ? "tabChoice" : ""} onClick={() => setTabState(i)}>{title}</p>
              ))}
            </SelectTab>
            <ListTop>
              <input id='allSelect' type="checkbox" />
              <label htmlFor="allSelect">생성</label>
            </ListTop>
          </Right>
        </Box>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 0px 20px 30px 20px;
  max-width: 1500px;
  min-width: 1024px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`
const TopupBox = styled.div`
  width: 100%;
  padding: 24px 0;
  font-family: 'NEXON Lv1 Gothic OTF';
  background-color: ${props => props.theme.boxColor};
  border-radius: 15px;
  p{
    text-align: center;
    color: ${props => props.theme.textColor};
    font-size: 24px;
    font-weight: bold;
  }
`
const Box = styled.div`
  width: 100%;
  min-height: 1200px;
  padding: 20px 30px 20px 350px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 15px;
`

const Left = styled.div`
  position: absolute;
  left: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleImg = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SubBox = styled.div`
  width: 100%;
  padding: 9.5px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  border-radius: 9px;
  .firstEpisode{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
      color: ${props => props.theme.textColor};
      margin-right: 6px;
    }
  }
  .publicTitle{
    width: 100%;
    text-align: left;
    font-size: 18px;
    margin-top: 12px;
  }
  .public{
    width: 100%;
    text-align: left;
    font-size: 16px;
    margin-top: 12px;
    color: #6C6C6C;
    line-height: 22px;
  }
`
const TitleHead = styled.p`
  width: 100%;
  margin-top: 32px;
  font-size: 18px;
  font-weight: bold;
`
const TitleSubText = styled.p`
  width: 100%;
  font-size: 16px;
  margin-top: 18px;
  line-height: 26px;
`

const WriterImg = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const WriteInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .tag{
    margin-top: 8px;
    color: ${props => props.theme.textColor2};
  }
`

const WriteFollow = styled.button`
  width: 100%;
  border-radius: 28px;
  border: 2px solid #E9446C;
  color: #E9446C;
  padding: 6.5px 0;
  font-size: 16px;
  margin-top: 24px;
  background-color: transparent;
  cursor: pointer;
`
const WriteSupport = styled.button`
  width: 100%;
  border-radius: 28px;
  border: 2px solid #E9446C;
  color: white;
  padding: 6.5px 0;
  font-size: 16px;
  margin-top: 12px;
  background-color: #E9446C;
  cursor: pointer;
`
const Right = styled.div`
  position: absolute;
  width: calc(100% - 390px);
  right: 30px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const BookMark = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  padding-right: 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid ${props => props.theme.textColor2};
  font-size: 18px;
  font-weight: bold;
  svg{
    color: ${props => props.theme.textColor};
    margin-right: 4px;
  }
`
const InfoBox = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  border-radius: 10px;
  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  div :nth-child(1){
    font-size: 18px;
    color: ${props => props.theme.textColor2};
  }
  div :nth-child(2){
    font-size: 18px;
  }
`
const SelectTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  p{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    border-bottom: 3px solid transparent;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.textColor};
    cursor: pointer;
  }
  .tabChoice{
    border-bottom: 3px solid #E9446C;
  }
`
const ListTop = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${props => props.theme.bgColor};
  margin-top: 18px;
  border-radius: 6px;
`
