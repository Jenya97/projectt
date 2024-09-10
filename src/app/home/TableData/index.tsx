import React from 'react'
import Sort from "../../../assets/svg/sort.svg"
import "./tableData.scss"
import data from "./data.json"
import StarSVG from '../../components/StarSvg.tsx';
import avatar from "../../../assets/img/avatar.png";
import Image from 'next/image';
import CustomButton from '../../components/CustomButton/index';
import { formatNumber } from '../../helpers';

 const TableData = () => {
   
  const getStyles = (rating: number) => {
    if (rating >= 5) return { background: '#1DB46214', color: '#1DB462', starColor: '#1DB462' }; // Green
    if (rating >= 4) return { background: '#FFE50014', color: '#E1B000', starColor: '#E1B000' }; // Yellow
    if (rating >= 3) return { background: '#FF8E2614', color: '#FF8E26', starColor: '#FF8E26' }; // Orange
    if (rating >= 2) return { background: '#FF5C5C14', color: '#FF5C5C', starColor: '#FF5C5C' }; // Red
    return { background: '#FF5C5C14', color: '#FF5C5C', starColor: '#FF5C5C' }; // Red for anything below 2
  };

  return (
    <section className="container table-content">
    <div className="tableData-container">
        <div className="table-header">
         <div className="table-desc">
             <span>Описание</span>
         </div>
         <div className="table-user">
             <span>Продавец</span>
         </div>
         <div className="table-stock">
             <span>Наличие <Sort/></span>
         </div>
         <div className="table-price">
             <span>Цена <Sort/></span>
         </div>
        </div>
        {data.map((item,ind)=>{
                const { background, color, starColor } = getStyles(item.seller.rating);
   
         return   (
        <div key={ind} className="table-row">
         <div className="table-desc table-td">
             <span>{item.item}</span>
         </div>
         <div className="table-user table-td">
             <div className="user-content">
             <div className="user-img-content">
                  <Image
            src={avatar} 
            alt="avatar"
            className="avatar-img"
            height="28"
            width="28"
          />
                  <span  className={`user-${item.online ? "online" : "offline"}`}></span>
             </div>
        <div className="user-info">
         <div >
                <h3>{item?.seller?.name}</h3>
            <div className="rateing-block" style={{background}}>  
            <span style={{color}}>{item.seller.rating}</span>
                   <StarSVG  fill={starColor} />
</div>
        </div>

<p><span>{item?.seller?.time_on_site}</span>, <span>{item?.seller?.reviews} отзывов</span></p>
         </div>
             </div>
         </div>
         <div className="table-stock table-td">
             <span>{formatNumber(item.availability)}</span>
         </div>
         <div className="table-price table-td">
             <span>{(item.price) }</span>
         </div>
        </div>

        )})}
    </div>
        <CustomButton variant="secondary" className="more_suggestion">Показать больше предложений</CustomButton>
    </section>
  )
}

export default TableData;