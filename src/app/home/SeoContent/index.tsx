import React from 'react';
import "./seoContext.scss"
import data from "./data.json"
import seoImage from "../../../assets/img/seoImg.png"
import Image from 'next/image';
import CustomButton from '../../components/CustomButton/index';
interface SeoContext{

}

const SeoContent: React.FC<SeoContext> = () => {
  return (
    <section className="container">
       <div className="seo-sontent-container">
         <div className="seo-sontent">
           <h2 className="seo-title">Робуксы Roblox</h2>
           <p  className="seo-description">Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите. </p>
          <Image
            src={seoImage} 
            alt="Logo"
            className="seoImage"
            height="450"
            width="450"
          />
         </div>
         <div className="main_category">
           {data.map((item,index)=> <CustomButton variant="btn-link" className={`${Boolean(item.active) ? 'active' : "" }`} key={index} >{item.name} <span>{item.count}</span></CustomButton>) }
     </div>
        </div>
      
    </section>
  );
};

export default SeoContent;
