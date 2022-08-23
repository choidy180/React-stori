import React, { useEffect, useRef, useState } from 'react';
import { BookmarkOutline, BookOutline, ChevronBackCircleOutline, ChevronDownOutline, ChevronForwardCircleOutline, ListOutline, MenuOutline, Star } from 'react-ionicons';
import { IoMdCheckbox } from '@react-icons/all-files/io/IoMdCheckbox';
import { IoMdSquareOutline } from '@react-icons/all-files/io/IoMdSquareOutline';
import styled from 'styled-components';
import HelmetPd from '../components/Helmet';
import NavBar from "../components/Nav";
import AOS from 'aos';
import "aos/dist/aos.css";

interface title {
  title: string;
}

export default function Series(title: title){
  const tabTitle = ["대여하기","소장하기","NFT IP 구매"];
  const ListSort = ["인기순","업데이트순","조회순","별점순"];
  const [tabState, setTabState] = useState<Number>(0);
  const [listOn, setListOn] = useState<Boolean>(false);
  const [sort, setSort] = useState<String>("업데이트순");
  const [moreView, setMoreview] = useState<Boolean>(false);
  const slideRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [otherState, setOtherState] = useState<any>(0);

  const OtherMoveLeft = () => {
    if((-(otherData.length-1) * 170) !== otherState){
      slideRef.current.style.transform = `translateX(${otherState - 170}px)`;
      setOtherState(otherState - 170);
    }
  }
  const OtherMoveRight = () => {
    if(otherState !== 0){
      slideRef.current.style.transform = `translateX(${otherState + 170}px)`;
      setOtherState(otherState + 170);
    }
  }
  // 체크 아이템 배열
  const [checkItems, setCheckItems] = useState([]);
  // 체크박스 전체 선택
  const handleAllCheck = (checked:Boolean) => {
    if(checked){
      const idArray:any = [];
      data.forEach((el) => idArray.push(el.idx));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  }
  // 체크박스 단일 선택
  const handleSingleCheck = (checked:any , idx:any) => {
    if(checked){
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems([...checkItems, idx])
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== idx));
    }
  };
  const SortSelect = (content:string) => {
    setListOn((e) => !e);
    setSort(content);
  }
  const data = [
    {idx: "e1894d49-8483-4dcf-8436-aefb3449f9ce", episode: 1, title: "어느 겨울, 운명의 밤", score: 4.8, date: "22.06.22", free: true},
    {idx: "189bccc4-1845-45b0-a596-6b12e4786b4d", episode: 2, title: "개막의 시각", score: 4.8, date: "22.06.22", free: true},
    {idx: "710d58f5-948f-414f-9775-ba27be29399a", episode: 3, title: "전의의 소재", score: 4.8, date: "22.06.22", free: false},
    {idx: "74a3edf5-13db-43ed-8210-74c5393c054c", episode: 4, title: "방과 후에 추는 춤", score: 4.8, date: "22.06.22", free: false},
    {idx: "e9d9e6b7-66ff-46e2-81c8-a2bdc73afd24", episode: 5, title: "어느 겨울날, 마음이 머무는 곳", score: 4.8, date: "22.06.22", free: false},
    {idx: "f1f426cb-32af-4d49-96d4-c72e352dedd3", episode: 6, title: "두 사람의 거리", score: 4.8, date: "22.06.22", free: false},
    {idx: "b1ce70a8-986e-4ea4-b883-2f5d8a0a0ca5", episode: 7, title: "살며시 다가온 방문자", score: 4.8, date: "22.06.22", free: false},
    {idx: "c680891e-2c65-4287-944a-595f5c5617d8", episode: 8, title: "어느 겨울날, 소원의 형태", score: 4.8, date: "22.06.22", free: false},
    {idx: "6539a18a-5705-4f64-bb39-06925c9f63c4", episode: 9, title: "그 운명의 시작으로", score: 4.8, date: "22.06.22", free: false},
    {idx: "4f310282-584f-4718-92ce-f3f56cf3eee0", episode: 10, title: "어느 겨울 날, 머나먼 귀로", score: 4.8, date: "22.06.22", free: false},
  ]
  const otherData = [
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 1", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 2", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 3", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 4", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 5", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 6", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 7", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 8", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 9", genre: "판타지, 멜로"},
    {image: "255EA54B57636A8102.png", title: "천재 뱀파이어 10", genre: "판타지, 멜로"},
  ]
  useEffect(()=>{
    AOS.init();
  },[]);
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
                <BookOutline/>
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
                <p key={i} className={tabState === Number(i) ? "tabChoice" : ""} onClick={() => setTabState(i)}>{title}</p>
              ))}
            </SelectTab>
            <ListTop>
              <label htmlFor="allSelect">
                {checkItems.length === data.length ? 
                  <IoMdCheckbox className='ckbox'/>
                :
                  <IoMdSquareOutline className='ckbox'/>
                }
                <input 
                  id='allSelect' 
                  type="checkbox"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={checkItems.length === data.length ? true : false}
                />
              전체선택</label>
              {/* <label htmlFor="allSelect">전체선택</label> */}
              <p className='sortList' onClick={()=> setListOn((e) => !e)}>
                <ListOutline
                  width={"28px"}
                  height={"28px"}
                />
                <span>{sort}</span>
              </p>
              <SortBox className={listOn ? "sortListView" : ""}>
                {listOn && 
                  ListSort.map((content, i) => (
                    <p key={i} onClick={()=>{
                      SortSelect(content);
                    }}>{content}</p>
                  ))
                }
              </SortBox>
            </ListTop>
            <ContentBox className={moreView ? "moreView" : ""}>
              {data.map((content,i)=>(
                <ContentLine key={i} data-aos="fade-up">
                  { checkItems.includes(content.idx) ? 
                    <label htmlFor={`selectBox${i}`}>
                      <IoMdCheckbox 
                        className='ckbox'
                      /> 
                    </label>
                    : 
                    <label htmlFor={`selectBox${i}`}>
                      <IoMdSquareOutline 
                        className='ckbox'
                      /> 
                    </label>
                  }
                  <input 
                    id={`selectBox${i}`} 
                    type="checkbox" 
                    onChange={(e)=>handleSingleCheck(e.target.checked, content.idx)}
                    checked={checkItems.includes(content.idx) ? true : false}
                  />
                  <ContentImageBox>
                    <img src="images/Illustration/5a345987bf1dda7b5d93c2971f8f4975.png" alt="" />
                  </ContentImageBox>
                  <ContentTextLine className='mobileBoxCon'>
                    <p className='ep'><b>EP</b>{content.episode}</p>
                    <p className='epTitle'>{content.title.length < 10 ? content.title : content.title}</p>
                    <p className='scoreDate'>
                      <Star
                        width={"20px"}
                        height={"20px"}
                      />
                      {content.score}&nbsp;&nbsp;&nbsp;&nbsp;{content.date}
                    </p>
                    <button 
                      className={content.free ? "freeBtn" : ""}
                      onClick={()=>console.log(checkItems)}
                    >
                      {content.free ? "무료보기" : "대여하기"}
                    </button>
                  </ContentTextLine>
                </ContentLine>
              ))}
            </ContentBox>
            <MoreViewBtn 
              className={moreView ? "moreViewHide" : ""}
              onClick={()=> setMoreview((e) => !e)}
            >
              <ChevronDownOutline
                width={"24px"}
                height={"24px"}
              /> 더보기
            </MoreViewBtn>
          </Right>
          <OtherBox>
            <p className='title' onClick={()=>console.log(otherState)}>이 작가의 다른 작품 보기</p>
            <OtherContentBox>
              <ChevronBackCircleOutline
                width={"42px"}
                height={"42px"}
                onClick={OtherMoveLeft}
              />
              <ChevronForwardCircleOutline
                width={"42px"}
                height={"42px"}
                onClick={OtherMoveRight}
              />
              <OtherLine>
                <OtherWrapper className='slideRef' ref={slideRef} style={listStyled}>
                  {otherData.map((content, i) => (
                    <OtherContent key={i} data-aos="fade-up">
                      <OtherImage>
                        <img src={`images/Illustration/${content.image}`} alt=""/>
                      </OtherImage>
                      <OtherTitle>{content.title.length < 10 ? content.title : content.title.slice(0, 10)+"..."}</OtherTitle>
                      <OtherGenre>{content.genre}</OtherGenre>
                    </OtherContent>
                  ))}
                </OtherWrapper>
              </OtherLine>
            </OtherContentBox>
          </OtherBox>
        </Box>
        <ResultBox
          className={checkItems[0] ? "" : "showResult"}
        >
          <div className='top'>
            <p>총 주문 금액</p>
            <p>100 TC</p>
            <p>총 2건</p>
          </div>
          <button>선택 구매</button>
          <MenuOutline
            width={"36px"}
            height={"36px"}
            cssClasses={"menuOutline"}
          />
        </ResultBox>
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
  z-index: 5;
  @media screen and (max-width: 1000px) {
    min-width: 400px;
    padding: 0px 0px 30px 0px;
    gap: 0;
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
  @media screen and (max-width: 1000px) {
    border-radius: 0px;
  }
`
const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px 370px 350px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 15px;
  @media screen and (max-width: 1000px) {
    width: calc(100% - 8px);
    flex-direction: column;
    justify-content: center;
    padding: 18px;
    border-radius: 0px;
  }
  @media screen and (max-width: 500px) {
    padding: 8px;
  }
`

const Left = styled.div`
  position: absolute;
  left: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    position: relative;
    width: 100%;
    left: 0;
  }
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
      margin-top: 4px;
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
  @media screen and (max-width: 1000px) {
    font-size: 22px;
    padding: 10.5px 20px;
    margin-top: 28px;
    .publicTitle{
      font-size: 22px;
      margin-top: 6px;
    }
    .public{
      font-size: 20px;
      line-height: 24px;
    }
  }
`
const TitleHead = styled.p`
  width: 100%;
  margin-top: 32px;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
`
const TitleSubText = styled.p`
  width: 100%;
  font-size: 16px;
  margin-top: 18px;
  line-height: 26px;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .moreView{
    height: auto;
  }
  .moreViewHide{
    display: none;
  }
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
  @media screen and (max-width: 1000px) {
    margin-top: 36px;
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
  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 12px;
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
    letter-spacing: -.2px;
    word-spacing: -1px;
  }
  .tabChoice{
    border-bottom: 3px solid #E9446C;
  }
  @media screen and (max-width: 1000px) {
    p{
      font-size: 20px;
    }
  }
`
const ListTop = styled.div`
  width: 100%;
  padding: 14px 0;
  background-color: ${props => props.theme.bgColor};
  margin-top: 18px;
  border-radius: 6px;
  #allSelect{
    display: none;
  }
  label{
    left: 12px;
    width: 200px;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      font-size: 18px;
      padding-left: 4px;
    }
    svg{
      margin-right: 6px;
    }
  }
  .ckbox{
    width: 32px;
    height: 32px;
    color: #E9446C;
  }
  .sortList{
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    svg {
      margin-top: 4px;
      color: ${props => props.theme.textColor};
      margin-right: 4px;
      @media screen and (max-width: 500px) {
        width: 20px;
        margin-right: 2px;
      }
    }
    span {
      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding: 6px 0;
  }
`
const SortBox = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.bgColor};
  color: ${props=> props.theme.textColor};
  border-radius: 12px;
  z-index: 999999;
  p{
    padding: 14.5px 18px;
    cursor: pointer;
    transition: all .1s ease-in-out;
  }
  p:hover{
    color: #E9446C;
  }
  &.sortListView{
    border: 2px solid ${props => props.theme.textColor};
  }
`
const ContentBox = styled.div`
  width: 100%;
  height: 888px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  div{
    border-bottom: 2px solid ${props => props.theme.textColor2};
  }
  div:last-child{
    border: none;
  }
  @media screen and (max-width: 1000px) {
    height: auto;
    div{
      border-bottom: 1.4px solid ${props => props.theme.textColor2};
    }
  }
  @media screen and (max-width: 500px) {
    .mobileBoxCon{
      width: calc(100% - 100px);
    }
  }
`
const ContentLine = styled.div`
  width: 100%;
  height: 222px;
  padding: 20px 0 20px 54px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input[type="checkbox"]{
    display: none;
  }
  label{
    position: absolute;
    left: 4px;
    width: 32px;
    height: 100%;
    .ckbox{
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      color: #E9446C;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    height: 160px;
    padding: 12px 0 12px 54px;
  }
`
const ContentTextLine = styled.div`
  width: calc(100% - 140px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  .ep{
    font-size: 22px;
    b{
      color: ${props => props.theme.textColor2};
      font-weight: bold;
      margin-right: 4px;
    }
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      top: auto;
      margin-left: 12px;
    }
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  .epTitle{
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 8px;
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      top: auto;
      margin-left: 12px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      margin-top: 4px;
      font-size: 16px;
    }
  }
  .scoreDate{
    position: absolute;
    bottom: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    svg {
      color: ${props => props.theme.textColor};
      fill: ${props => props.theme.textColor};
      margin-right: 4px;
    }
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      bottom: auto;
      margin-left: 12px;
      margin-top: 8px;
    }
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 500px) {
      margin-top: 0px;
      font-size: 14px;
    }
  }
  button{
    position: absolute;
    padding: 8px 24px;
    right: 8px;
    bottom: 0px;
    border-radius: 28px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid ${props => props.theme.bgColor};
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: all .15s ease-in-out;
    @media screen and (max-width: 500px) {
      padding: 4px 14px;
      font-size: 14px;
    }
  }
  .freeBtn{
    border: 2px solid #E9446C;
    background-color: #E9446C;
    color: #ffffff;
  }
  .freeBtn:hover{
    color: #E9446C;
    background-color: transparent;
  }
`

const ContentImageBox = styled.div`
  width: 135px;
  height: 180px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    height: 140px;
    width: 104px;
  }
`

const MoreViewBtn = styled.div`
  width: 100%;
  padding: 8px 0;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  font-size: 18px;
  border-radius: 24px;
  cursor: pointer;
  svg {
    color: ${props => props.theme.textColor};
    fill: ${props => props.theme.textColor};
    margin-right: 4px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const ResultBox = styled.div`
  position: fixed;
  left: 0;
  bottom: 0px;
  padding: 24px 20px 22px 20px;
  background-color: ${props => props.theme.bgColor};
  width: 100%;
  border: 2px solid #D7D7D7;
  border-bottom: none;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999 !important;
  transition: all .45s ease-in-out;
  .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 100%;
      font-size: 22px;
      text-align: center;
    }
    p:nth-child(1){
      text-align: left;
    }
    p:nth-child(3){
      text-align: right;
    }
  }
  button{
    padding: 12px 150px;
    font-size: 22px;
    font-weight: bold;
    background-color: #E9446C;
    border-radius: 28px;
    margin-top: 24px;
    border: none;
    outline: none;
    color: #FFFFFF;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 12px 0;
    }
  }
  &::after{
    position: absolute;
    content: "";
    top: -32px;
    width: 200px;
    height: 30px;
    background-color: ${props => props.theme.bgColor};
    border: 2px solid #D7D7D7;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom: none;
    z-index: 99 !important;
    left: 50%;
    transform: translateX(-50%);
  }
  .menuOutline {
    position: absolute;
    bottom: 110px;
    left: 50%;
    transform: translateX(-50%);
    color: #FFFFFF;
    fill: #FFFFFF;
    z-index: 99999;
    cursor: pointer;
  }
  &.showResult{
    bottom: -500px;
  }
  @media screen and (max-width: 1000px) {
    padding: 24px 20px;
    .menuOutline{
      bottom: 106px;
    }
    button{
      padding: 8px 120px;
      font-size: 20px;
    }
  }
`

const OtherBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    margin-top: 54px;
    width: 100%;
    .title{
      font-size: 24px;
    }
  }
`
const OtherContentBox = styled.div`
  width: 100%;
  border-radius: 15px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 24px 78px;
  background-color: ${props => props.theme.bgColor};
  margin-top: 24px;
  overflow: hidden;
  span{
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    svg{
      color: ${props => props.theme.textColor};
      fill: ${props => props.theme.textColor};
    }
  }
  span:nth-child(1){
    left: 18px;
  }
  span:nth-child(2){
    right: 18px;
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    margin-top: 16px;
    padding: 0;
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    border-radius: 0;
    svg{
      display: none;
    }
  }
`
const OtherLine = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  height: auto;
`
const OtherWrapper = styled.div`
  width: 999%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  transition: all .3s ease-in-out;
  row-gap: 8px;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: hidden;
    height: auto !important;
    background-color: ${props => props.theme.boxColor};
    }
`
const listStyled = {
  width: "200%",
  height: "100%",
}

const OtherContent = styled.div`
  width: 152px;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background-color: ${props => props.theme.boxColor};
  cursor: pointer;
  margin-right: 18px;
  @media screen and (max-width: 1000px) {
    width: calc(33% - 4px);
    margin-right: 0px;
    border-radius: 0;
    background-color: ${props => props.theme.bgColor};
  }
  @media screen and (max-width: 500px) {
    width: calc(50% - 4px);
  }
`
const OtherImage = styled.div`
  width: 100%;
  height: 135px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const OtherTitle = styled.p`
  width: 100%;
  padding-left: 8px;
  margin-top: 12px;
  font-size: 16px;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`
const OtherGenre = styled.p`
  font-size: 14px;
  width: 100%;
  padding-left: 8px;
  margin-top: 8px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`