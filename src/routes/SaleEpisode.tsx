import React from 'react';
import { AddCircleOutline, ChevronBackOutline, ChevronDownOutline, ChevronForwardOutline, ListOutline, SearchOutline } from 'react-ionicons';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import NavBar from '../components/Nav';
import AddContentBox from '../components/sale/AddContentBox';
import SaleTopBar from '../components/sale/saleTopBar';

interface title{
  title: string;
}
interface StoryDataInterface{
  img: string; 
  idx: string; 
  number: number; 
  title: string; 
  policy: number; 
  rent: number; 
  rentSale: number; 
  own: number; 
  ownSale: number; 
  textCount: number; 
  artworkCount: number; 
  sceneCount: number; 
  characterCount: number;
}

export default function SaleEpisode(title:title){
  const addStory:StoryDataInterface[] = [
    // number: 에피소드 번호, title: 제목, policy: 판매정책, rent: 대여가, rentSale: 대여할인가, own: 소장가, ownSale: 소장할인가
    {img: "5a345987bf1dda7b5d93c2971f8f4975.png", idx: "f4e8fc25-7601-4846-8644-21bdbf17be3f", number: 0, title: "재니와의 만남", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
    {img: "5a345987bf1dda7b5d93c2971f8f4975.png", idx: "d6e58a26-e7bc-4b34-9372-21771f590c9e", number: 2, title: "스승의 가르침", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
    {img: "5a345987bf1dda7b5d93c2971f8f4975.png", idx: "61ef7a72-795b-4ef8-8e79-b2ff7c43f7e6", number: 3, title: "엄마가 적이 되다", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
    {img: "5a345987bf1dda7b5d93c2971f8f4975.png", idx: "6c875b05-9717-4d18-83fc-6eb6a49f776d", number: 4, title: "아이러니 - 착오가 곧 성공 ...", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
  ]
  const storyList = [
    // public: 0-공개 / 1-비공개 / 2-팔로워에게만공개 / 3-초대된사람만
    {
      idx: "fae83f3e-5499-402e-af52-f24c30264f4a",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "맨홀 구멍",
      link: "https://storicha.in/stori/view/SKoIcN04xKW",
      public: 0,
    },
    {
      idx: "76f4fe58-da03-4387-85ba-9b13a5b9784e",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "검의 무게를 견뎌내는 자, 욕망을 다스리는 자",
      link: "https://storicha.in/stori/view/dkeodkfediehe",
      public: 1,
    },
    {
      idx: "f3a50e3b-5bbd-4c54-b6da-9f3db95495a9",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "용의 눈물을 다시 머금고서",
      link: "https://storicha.in/stori/view/FdieEiemdika8",
      public: 2,
    },
    {
      idx: "81f166e1-5fbb-40d1-b1f7-feea25d9f2d1",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "사선의 끝에서 찾아낸 아내의 시체",
      link: "https://storicha.in/stori/view/UdieUneleiJel",
      public: 3,
    },
    {
      idx: "d10980db-779d-45f0-b573-fbbcb7a3e843",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "사랑과 악마",
      link: "https://storicha.in/stori/view/FdieEiemdika8",
      public: 0,
    },
    {
      idx: "16ad3af8-c3b0-4886-ac4a-51587593098a",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "검의 무게를 견뎌내는 자, 욕망을 다스리는 자 ",
      link: "https://storicha.in/stori/view/rSelKes93ke3",
      public: 0,
    },
    {
      idx: "60b94b25-8c36-43ab-abdd-1fd9ecd0c03f",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "용의 눈물을 다시 머금고서 ",
      link: "https://storicha.in/stori/view/dkeo7630sawQ",
      public: 0,
    },
    {
      idx: "d684eba1-4304-4926-9cad-c7d98b916f0c",
      img: "5a345987bf1dda7b5d93c2971f8f4975.png",
      title: "사선의 끝에서 찾아낸 아내의 시체 ",
      link: "https://storicha.in/stori/view/FdieEiemdika8",
      public: 0,
    },
  ]
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <SaleTopBar title={title.title}/>
        <Box>
          <TopBox>
            <p className='title'>판매 할 에피소드로 추가한 스토리 ( {addStory.length} )</p>
            <p className='subtitle'>에피소드 번호를 입력 해 주세요. 미 입력시 맨 마지막에 노출 됩니다.</p>
            {addStory.map((content, i) => (
              <AddContentBox {...content} key={i}/>
            ))}
            <p className='pagingList'>
              <ChevronBackOutline
                width={"22px"}
                height={"22px"}
              />
              <b onClick={()=> alert("페이징처리")}>1</b>
              <b onClick={()=> alert("페이징처리")}>2</b>
              <b onClick={()=> alert("페이징처리")}>3</b>
              <b onClick={()=> alert("페이징처리")}>4</b>
              <b onClick={()=> alert("페이징처리")}>5</b>
              <b onClick={()=> alert("페이징처리")}>6</b>
              <b onClick={()=> alert("페이징처리")}>7</b>
              <b onClick={()=> alert("페이징처리")}>8</b>
              <b onClick={()=> alert("페이징처리")}>9</b>
              <ChevronForwardOutline
                width={"22px"}
                height={"22px"}
              />
            </p>
          </TopBox>
          <ContentBox>
            <p className='title'>내 책상의 스토리 전체목록</p>
            <p className='subtitle'>에피소드로써 판매할 스토리를 이 시리즈에 추가 하세요. 추가(플러스 버튼)을 누르면 판매할 에피소드로 추가 됩니다.</p>
            <div className='topLine'>
              <span className='left'>
                <b>전체 스토리</b> ( {storyList.length * 10 + 1} )
              </span>
              <div className='center'>
                <input type="text" placeholder='스토리 찾기'/>
                <SearchOutline
                  width={"24px"}
                  height={"24px"}
                />
              </div>
              <span className='right'>
                <ListOutline
                  width={"26px"}
                  height={"26px"}
                />
                최신순
              </span>
            </div>
          </ContentBox>
        </Box>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px 20px 30px 20px;
  max-width: 1500px;
  min-width: 1024px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  z-index: 5;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`

const Box = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 12px;
`

const TopBox = styled.div`
  padding-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .title {
    font-size: 22px;
  }
  .subtitle {
    margin-top: 12px;
    font-size: 18px;
  }
  .removeBtn{
    position: absolute;
    right: -4px;
    top:50%;
    transform: translateY(-50%) rotate(45deg);
    color: ${props=>props.theme.textColor};
    fill: ${props=>props.theme.textColor};
    cursor: pointer;
  }
  .pagingList{
    width: 100%;
    text-align: center;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    span, svg ,b{
      fill: ${props => props.theme.textColor};
      color: ${props => props.theme.textColor};
      cursor: pointer;
    }
  }
`
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 64px;
  .title {
    font-size: 24px;
    color: ${props=>props.theme.textColor};
  }
  .subtitle {
    margin-top: 12px;
    font-size: 20px;
    color: ${props=>props.theme.textColor2};
  }
  .topLine{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    margin-top: 24px;
    .left {
      font-size: 20px;
      color: ${props=>props.theme.textColor2};
      b {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .center{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 999%;
        min-width: 300px;
        max-height: 500px;
        padding: 8px 60px 8px 20px;
        font-size: 20px;
        border-radius: 28px;
        border: 2px solid ${props => props.theme.textColor2};
        color: ${props => props.theme.textColor};
        background-color: transparent;
        outline: none;
      }
      span {
        position: absolute;
        right: 16px;
      }
    }
    .right {
      font-size: 20px;
      color: ${props=>props.theme.textColor2};
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
    span, svg{
      fill: ${props => props.theme.textColor};
      color: ${props => props.theme.textColor};
    }
  }
`