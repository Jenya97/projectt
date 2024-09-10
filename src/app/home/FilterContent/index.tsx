import React from 'react'
import data from "./data.json"
import CustomButton from '../../components/CustomButton/index';
import CustomSelect from '../../components/CustomSelect/index';
import "./filterContent.scss"
import CustomSwitch from '../../components/CustomSwitch/index';
import InstantIcon from "../../../assets/svg/instantIcon.svg"
import SearchInput from '../../components/SearchInput/SearchInput';
import Loop from "../../../assets/svg/loop.svg";

const FilterContent = () => {
     const deliveryOption = [
    { value: 'delivery1', label: 'Способ доставки' },
    { value: 'delivery2', label: 'Способ доставки2' },
    { value: 'delivery3', label: 'Способ доставки3' }
  ];

  return (
    <section className="container">
        <div className="filter-container">
           <div className="filter-container-btns">
               <div className="showcase-filters-container">
            {data.map((item,index)=> <CustomButton variant="btn-link" className={`${Boolean(item.active)?'active':''}`} key={index} >{item.text} </CustomButton>) }
            <CustomSelect options={deliveryOption} placeholder="Способ доставки"/>
            <CustomSwitch label="Только продавцы онлайн"/>
            <CustomSwitch label="Моментальная доставка" icon={ <InstantIcon/>}/>
          <SearchInput icon={<Loop />} placeholder="Поиск по описанию лота..."  iconPosition="right" />
              </div>
              <CustomButton variant="btn-link" className="active">Продать Blox Fruits</CustomButton>
              
           </div>
        </div>
    </section>
  )
}


export default FilterContent;