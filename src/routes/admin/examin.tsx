import React, { useState } from 'react';
import { AddOutline, CopyOutline, Ellipse, EllipseOutline } from 'react-ionicons';
import styled from 'styled-components';
import NavBar from '../../components/Nav';

interface title {
  title: string;
}
interface modalDataInterface {
  auditRequest: string;
  seriesLink: string;
  seriesName: string;
  episodeCount: number;
  textCount: number;
  artworkCount: number;
  scenesCount: number;
  characterCount: number;
  rentalPrice: number;
  rentalSalePrice: number;
  ownPrice: number;
  ownSalePrice: number;
  auditState: number;
}
export default function AdminExamin({title}:title){
  const getData = [
    {
      auditRequest: "IDX 01500", 
      seriesName: "어느 겨울날, 운명의 밤", 
      new: true, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01501", 
      seriesName: "방과후에 추는 춤", 
      new: true, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01502", 
      seriesName: "신기루", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01503", 
      seriesName: "어느 겨울날, 마음이 머무는 곳", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01504", 
      seriesName: "두 사람의 거리", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01505", 
      seriesName: "살며시 다가온 방문자", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01506", 
      seriesName: "어느 겨울날, 소원의 형태", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01507", 
      seriesName: "이상의 회답", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01508", 
      seriesName: "내가 다다른 그 세계", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01509", 
      seriesName: "어느 겨울날, 머나먼 귀로", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01510", 
      seriesName: "명백한 현실", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01511", 
      seriesName: "그 운명의 시작으로", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
  ]
  const [modal, setModal] = useState<Boolean>(false);
  const [modalData ,setModalData] = useState<modalDataInterface>({
    auditRequest: "",
    seriesLink: "",
    seriesName: "",
    episodeCount: 0,
    textCount: 0,
    artworkCount: 0,
    scenesCount: 0,
    characterCount: 0,
    rentalPrice: 0,
    rentalSalePrice: 0,
    ownPrice: 0,
    ownSalePrice: 0,
    auditState: 0
  });
  const modalDataSet = (
    auditRequest: string,
    seriesLink: string,
    seriesName: string,
    episodeCount: number,
    textCount: number,
    artworkCount: number,
    scenesCount: number,
    characterCount: number,
    rentalPrice: number,
    rentalSalePrice: number,
    ownPrice: number,
    ownSalePrice: number,
    auditState: number,
  ) => {
    const NewData = {
      auditRequest: auditRequest,
      seriesLink: seriesLink,
      seriesName: seriesName,
      episodeCount: episodeCount,
      textCount: textCount,
      artworkCount: artworkCount,
      scenesCount: scenesCount,
      characterCount: characterCount,
      rentalPrice: rentalPrice,
      rentalSalePrice: rentalSalePrice,
      ownPrice: ownPrice,
      ownSalePrice: ownSalePrice,
      auditState: auditState,

    }
    setModalData(NewData);
    setModal((e) => !e);
  }
  return (
    <>
      <TopBar>
        <p>운영관리</p>
      </TopBar>
      <Box>
        <HeadBox>
          <div className='topBox'>
            <p className='title'>심사요청번호</p>
          </div>
          <div className='topBox'>
            <p className='title'>시리즈 제목</p>
          </div>
          <div className='topBox'>
            <p className='title'>요청일시</p>
          </div>
          <div className='topBox'>
            <p className='title'>수정일시</p>
          </div>
          <div className='topBox'>
            <p className='title'>진행상태</p>
          </div>
          <div className='topBox'>
            <p className='title'>심사하기</p>
          </div>
        </HeadBox>
        {getData.map((content, i) => (
          <ContentLine key={i}>
            <div className='topBox'>
              <p className='requestAudit'>( {content.auditRequest} )</p>
            </div>
            <div className='topBox'>
              <p className='title'>{
                content.seriesName.length > 10 ? content.seriesName.slice(0,10) + "..." : content.seriesName
              }</p>
              {content.new ? <button className='newBtn'>New</button> : ""}
            </div>
            <div className='topBox'>
              <p className='requestDate'>{content.requestDate}</p>
            </div>
            <div className='topBox'>
              <p className='reviseDate'>{content.reviseDate}</p>
            </div>
            <div className='topBox'>
              {content.state === 0 ? 
                <p className='state'>
                  <img className='infiniteLotate' src="/images/icons/request.svg" alt="" />
                  <span style={{marginTop: "2px"}}>요청중</span>
                </p> 
                : 
                content.state === 1 ?
                <p className='state'>
                  <img src="/images/icons/OnSale.svg" alt="" />
                  <span style={{marginTop: "2px"}}>판매중</span>
                </p> : 
                content.state === 2 ?
                <p className='state'>
                  <img src="/images/icons/StopSale.svg" alt="" />
                  <span style={{marginTop: "2px"}}>판매중지</span>
                </p> : ""
              }
            </div>
            <div className='topBox'>
              <button 
                className='auditBtn btn' 
                onClick={()=> 
                  modalDataSet(
                    content.auditRequest, // 심사상태
                    "https://storicha.in/testEpisode", // 시리즈링크 
                    content.seriesName, // 시리즈이름
                    1248, // 에피소드카운터
                    1721480,// 텍스트 카운터
                    32, // 삽화카운터
                    35, // 장면카운터
                    11, //캐릭터카운터
                    18,
                    18,
                    18,
                    18,
                    0
                  )
                }>심사 하기</button>
            </div>
          </ContentLine>
        ))}
      </Box>
      <BlackBox 
        className={modal ? "on" : ""}
        onClick={()=> setModal((e)=>!e)}
      />
      <RightModal className={modal ? "on" : ""}>
        <Modalhead>
          <p>심사하기</p>
          <AddOutline
            width={"34px"}
            height={"34px"}
            onClick={()=>setModal((e)=>!e)}
          />
        </Modalhead>
        <ModalHeadInfo>
          <p style={{margin: "0px"}}><b>심사 요청번호</b> : {modalData.auditRequest}</p>
          <p>
            <b>시리즈 주소</b> : {modalData.seriesLink}
            <CopyOutline
              width={"18px"}
              height={"18px"}
            />
          </p>
          <p><b>시리즈 이름</b> : {modalData.seriesName}</p>
          <p>에피소드 수 : {modalData.episodeCount}</p>
        </ModalHeadInfo>
        <ModalEpisodeInfo>
          <p>시리즈 내 EP당 평균 정보 수량  : </p>
          <div>글자수({modalData.textCount})</div>
          <div>삽화수({modalData.artworkCount})</div>
          <div>장면수({modalData.scenesCount})</div>
          <div>캐릭터수({modalData.characterCount})</div>
        </ModalEpisodeInfo>
        <ModalEpisodeInfo>
          <div style={{padding: "0px"}}>대여가: {modalData.rentalPrice} TC</div>
          <div style={{padding: "0px"}}>대여할인가: {modalData.rentalSalePrice} TC</div>
          <div>소장가: {modalData.ownPrice} TC</div>
          <div>소장할인가: {modalData.ownSalePrice} TC</div>
        </ModalEpisodeInfo>
        <ModalBtn>
          <button>판매정책보기</button>
          <button>추가된 에피소드 보기</button>
        </ModalBtn>
        <AuditBox>
          <h4>심사 상태</h4>
          <p style={{marginTop: "36px"}}>
            <Ellipse
              width={"26px"}
              height={"26px"}
            />
            작성중
          </p>
          <p>
            <EllipseOutline
              width={"26px"}
              height={"26px"}
            />
            검토 요청
          </p>
          <p>
            <EllipseOutline
              width={"26px"}
              height={"26px"}
            />
            수정 요청
          </p>
          <p>
            <EllipseOutline
              width={"26px"}
              height={"26px"}
            />
            승인 거절
          </p>
          <p>
            <EllipseOutline
              width={"26px"}
              height={"26px"}
            />
            판매 승인
          </p>
        </AuditBox>
        <AdminBox>
          <h2>관리자 운영 노트</h2>
          <textarea 
            name="" 
            id="" 
            cols={Number("30")} 
            rows={Number("10")}
            placeholder="이 심사 요청에 대해 작가의 고객문의 사항, 콘텐츠의 특이사항등을 적어 놓아서 운영자간 업무 공유가 되도록 노트 해 놓세요."
          />
        </AdminBox>
        <AdminBox>
          <h2>수정 요청 코멘트</h2>
          <textarea 
            name="" 
            id="" 
            cols={Number("30")} 
            rows={Number("10")}
            placeholder="판매자에게 검토 결과 무엇을 수정 하여야할지 또는 승인 거절 사유 등을 보내는 내용을 작성 하세요. 아래 보내기를 체크해야 발송 됩니다.  "
          />
        </AdminBox>
        <ModalLastBtn>검토 저장</ModalLastBtn>
      </RightModal>
    </>
  )
}

const Container = styled.div`
  padding: 0px 20px 30px 20px;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  @media screen and (max-width: 500px) {
    padding: 0;
    padding-bottom: 20px;
  }
`
const TopBar = styled.div`
  width: 100%;
  color: ${props => props.theme.textColor};
  p{
    width: 100%;
    padding: 12px 0 12px 0;
    font-size: 24px;
    border-bottom: 1px solid ${props => props.theme.textColor2};
  }
`

const Box = styled.div`
  width: 100%;
`
const HeadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  background-color: ${props => props.theme.boxColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 12px;
  }
  .topBox{
    width: 100%;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.textColor};
  }
`
const ContentLine = styled.div`
  margin-top: 6px;
  padding: 6px 0;
  background-color: ${props => props.theme.boxColor};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 12px;
    width: 100%;
  }
  .topBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    button {
      border: none;
      outline: none;
      border-radius: 24px;
      margin-left: 8px;
    }
  }
  .requestAudit{
    font-size: 12px;
    color: ${props => props.theme.textColor};
    letter-spacing: -.4px;
    word-spacing: -1.2px;
  }
  .title{
    font-size: 18px;
    letter-spacing: -1px;
  }
  .requestDate{
    font-size: 16px;
    letter-spacing: -.2px;
    color: ${props => props.theme.textColor2};
  }
  .reviseDate{
    font-size: 16px;
    letter-spacing: -.2px;
    color: #FFAFAF;
  }
  .state{
    font-size: 16px;
    letter-spacing: -.2px;
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    img {
      width: 18px;
      height: 20px;
    }
    .infiniteLotate {
      animation: rotate 2s infinite
    }
    @keyframes rotate {
      from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
  .newBtn {
    padding: 4px 6px;
    color: #FFFFFF;
    background-color: #E9446C;
  }
  .auditBtn {
    background-color: #9f9f9f;
    padding: 6px 14px;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
  }
`
const BlackBox = styled.div`
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.6;
  &.on{
    display: block;
  }
`
const RightModal = styled.div`
  position: fixed;
  height: 100vh;
  overflow-y: scroll;
  right: -500px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.boxColor};
  border-left: 2px solid ${props => props.theme.textColor};
  width: 400px;
  min-height: 100vh;
  transition: all .2s ease-in-out;
  z-index: 999999;
  padding-bottom: 40px;
  &.on{
    right: 0px;
  }
`

const Modalhead = styled.div`
  width: 100%;
  padding: 18px 24px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 2px solid ${props => props.theme.textColor2};
  span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    cursor: pointer;
    svg {
      color: ${props => props.theme.textColor};
    }
  }
`

const ModalHeadInfo = styled.div`
  width: 100%;
  padding: 18px 24px;
  border-bottom: 2px solid ${props => props.theme.textColor2};
  p {
    width: 100%;
    font-size: 14px;
    margin-top: 12px;
    span {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      svg{
        color: ${props => props.theme.textColor};
      }
    }
    b {
      font-weight: bold;
      color: ${props => props.theme.textColor2};
    }
  }
`
const ModalEpisodeInfo = styled.div`
  width: 100%;
  padding: 18px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.textColor2};
  p {
    width: 100%;
    font-size: 16px;
  }
  div{
    width: 49%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 18px;
  }
`
const ModalBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  gap: 18px;
  border-bottom: 2px solid ${props => props.theme.textColor2};
  button {
    width: 150px;
    padding: 8px 0;
    border-radius: 24px;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  button:nth-child(1){
    background-color: #5472B4;
  }
  button:nth-child(2){
    background-color: #FBBD1E;
  }
`
const AuditBox = styled.div`
  width: 100%;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h4 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
  }
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    margin-top: 10px;
    span{
      margin-right: 12px;
    }
    svg{
      fill: #E9446C;
      color: #E9446C;
      font-weight: bold;
    }
  }
  p:nth-child(1){
    margin-top: 48px;
  }
`
const AdminBox = styled.div`
  width: 100%;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${props => props.theme.textColor};
  h2{
    font-size: 20px;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    padding: 12px;
    resize: none;
    border: none;
    outline: none;
    margin-top: 18px;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    font-size: 16px;
    height: 140px;
  }
`
const ModalLastBtn = styled.button`
  margin-top: 24px;
  width: 200px;
  background-color: #E9446C;
  padding: 8px 0;
  border: none;
  outline: none;
  color: #FFFFFF;
  border-radius: 28px;
  font-size: 20px;
`