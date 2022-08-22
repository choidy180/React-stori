import React, { useState } from 'react';
import { ChevronDownOutline, RemoveCircleOutline } from 'react-ionicons';
import styled from 'styled-components';
import Swal from 'sweetalert2';

export default function AddContentBox(props:any){
  const [ selectPriceBoxView, useSelectPriceBoxView ] = useState(false);
  const RemoveStory = () => {
    Swal.fire({
      title: '스토리를 삭제하시겠습니까?',
      text: "삭제 후에는 다시 되돌릴 수 없습니다",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '삭제하겠습니다',
      cancelButtonText: '취소합니다',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '삭제되었습니다',
          '버튼을 누르시면 페이지가 새로고침됩니다.',
          'success'
        )
      }
    })
  }
  return(
    <AddContent>
      <div className='left'>
        <AddImageBox>
          <img src={`/images/Illustration/${props.img}`} alt="" />
        </AddImageBox>
        <span className='epText'>EP</span>
        <input type="text" placeholder={props.number !== 0 ? String(props.number) : "에피소드 번호"}/>
        <p className='title'>{props.title.length < 10 ? props.title : props.title.slice(0,10)+"..."}</p>
        <p className='underText'>글자수 ({props.textCount})&nbsp;&nbsp;삽화수({props.artworkCount})&nbsp;&nbsp;장면수({props.sceneCount})&nbsp;&nbsp;캐릭터수({props.characterCount})</p>
      </div>
      <div className='right'>
        <div className='selectPrice'>
          <span onClick={() => useSelectPriceBoxView((e) => !e)}>적용된 판매정책 : 기본가격<ChevronDownOutline width={"20px"} height={"20px"}/></span>
          <SelectPriceBox className={selectPriceBoxView ? "selectPriceBoxView" : ""}>
            <p>기본 가격정책 적용</p>
            <p>예외 가격정책 적용</p>
            <p>012 글자수 많은...</p>
            <p>010 단행 본 가격...</p>
            <p>009 드라마 대본...</p>
            <p>무료 가격정책 적용</p>
          </SelectPriceBox>
        </div>
        <div className='top'>
          <span>대여가 : {props.rent}TC</span>
          <span>대여할인가 : {props.rentSale}TC</span>
        </div>
        <div className='bottom'>
          <span>소장가: {props.own} TC</span>
          <span>소장가: {props.ownSale} TC</span>
        </div>
      </div>
      <AddCircle>
        <RemoveCircleOutline
          width={"36px"}
          height={"36px"}
          cssClasses={"removeBtn"}
          onClick={RemoveStory}
        />
      </AddCircle>
    </AddContent>
  )
}

const AddContent = styled.div`
  padding: 16px;
  width: 100%;
  height: 140px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  margin-top: 12px;
  .left{
    width: calc(100% - 30px);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .epText{
      width: 50px;
      font-size: 22px;
      padding: 4px 11px;
    }
    input{
      width: 120px;
      background-color: transparent;
      color: ${props => props.theme.textColor};
      border: 1.4px solid ${props => props.theme.textColor};
      outline: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 16px;
      margin-top: 2px;
    }
    .title{
      font-size: 20px;
      padding: 6px 0 0 16px;
      font-weight: bold;
      letter-spacing: -.6px;
    }
    .underText{
      position: absolute;
      bottom: 4px;
      left: 105px;
    }
  }
  .right{
    width: 100%;
    height: 100%;
    padding: 6px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .top{
      position: absolute;
      right: 50px;
      top: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 17px;
      letter-spacing: -.4px;
      gap: 42px;
      .selectPrice {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .bottom{
      position: absolute;
      right: 50px;
      bottom: 4px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 42px;
    }
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg{
        color: ${props=>props.theme.textColor};
        margin-left: 4px;
      }
    }
  }
  .removeBtn{
    position: absolute;
    right: -4px;
    top:50%;
    transform: translateY(-50%);
    color: ${props=>props.theme.textColor};
    fill: ${props=>props.theme.textColor};
    cursor: pointer;
  }
  @media screen and (max-width:1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto !important;
    gap: 12px;
    .left {
      width: 100%;
    }
    .underText{
      bottom: 0 !important;
      left: 100px !important;
    }
    .right{
      flex-direction: column;
      gap: 12px;
      font-size: 18px !important;
      .top {
        position: relative !important;
        top: 0 !important;
        right: 0 !important;
      }
      .bottom{
        position: relative !important;
        bottom: 0 !important;
        right: 0 !important;
      }
    }
  }
`
const AddImageBox = styled.div`
  width: 90px !important; 
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }
`
const SelectPriceBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 999;
  background-color: ${props => props.theme.boxColor};
  border: 1.4px solid ${props => props.theme.textColor};
  border-radius: 8.5px;
  p {
    padding: 10.5px 14px;
    font-size: 16px;
    text-align: left;
  }
  &.selectPriceBoxView{
    display: flex;
  }
`

const AddCircle = styled.div`
  position: absolute;
  right: 18px;
  @media screen and (max-width:769px) {
    bottom: 30px !important;
  }
`