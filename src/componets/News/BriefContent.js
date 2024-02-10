import React, {useEffect}from 'react';
import '../css/BriefContent.css';

import { useParams,useNavigate  } from 'react-router-dom';
import  news from '../../data/news.js';
import RightBox from './RightBox.js';





const BriefContent = () => {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend urna eget diam ullamcorper, vitae suscipit turpis accumsan. Nunc auctor risus a justo commodo, id facilisis libero gravida. Sed ac justo in elit bibendum facilisis. Phasellus tincidunt vestibulum lacus, a bibendum nibh varius vitae. In eu odio eu justo dictum iaculis ut a mauris. Suspendisse potenti. Pellentesque ut volutpat metus. Fusce sit amet urna a leo aliquam suscipit. Duis consequat sem vel quam interdum fermentum. Nulla facilisi.

    Vivamus a tortor nec est vestibulum posuere. Integer in tincidunt arcu, a tincidunt odio. Sed quis ligula vitae massa convallis tempus. In vel justo vitae augue commodo malesuada. Morbi scelerisque venenatis risus, at accumsan metus ultrices a. Vestibulum non justo nec enim tincidunt aliquam. Aenean et justo ac mi interdum aliquet.
    
    Nam consectetur ligula sit amet est suscipit, a tempus elit varius. Nulla facilisi. Nulla facilisi. Fusce nec cursus urna, vel tristique metus. Sed consectetur, nunc sit amet accumsan hendrerit, velit sapien volutpat est, ut fringilla odio nisi ac elit. Sed in consequat justo. Quisque et augue eu augue fermentum fringilla ac vel sem. Integer dapibus ultrices elit, in accumsan odio venenatis vel. Nunc feugiat elit ut purus sagittis, sit amet vulputate purus tristique. Sed vitae cursus libero.
    Vivamus a tortor nec est vestibulum posuere. Integer in tincidunt arcu, a tincidunt odio. Sed quis ligula vitae massa convallis tempus. In vel justo vitae augue commodo malesuada. Morbi scelerisque venenatis risus, at accumsan metus ultrices a. Vestibulum non justo nec enim tincidunt aliquam. Aenean et justo ac mi interdum aliquet.
    
    Nam consectetur ligula sit amet est suscipit, a tempus elit varius. Nulla facilisi. Nulla facilisi. Fusce nec cursus urna, vel tristique metus. Sed consectetur, nunc sit amet accumsan hendrerit, velit sapien volutpat est, ut fringilla odio nisi ac elit. Sed in consequat justo. Quisque et augue eu augue fermentum fringilla ac vel sem. Integer dapibus ultrices elit, in accumsan odio venenatis vel. Nunc feugiat elit ut purus sagittis, sit amet vulputate purus tristique. Sed vitae cursus libero.
    `
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedNews = news.find(item => item.id === id);
    const heading = 'Hyper News'
     
    useEffect(() => {
        console.log("got the answer", selectedNews);
        navigate(`/content/${id}`)
    })
  return (
    <>
      <section className='dup'>
        <div id="container-dup">
           
            <div id="midbox-dup">
           
            <div id="container-inner">
            <h1 id="midheadings"><span>[</span>{heading}<span>]</span></h1>
              <div id="modibox-dup">
                <h3 style={{ color: 'teal', fontWeight: 'bold' ,paddingTop: "15px",paddingBottom:"10px"}}>{selectedNews.title}</h3>
                <h1 style={{ fontSize: 'x-large', width: '100%',paddingTop: "10px",paddingBottom:"10px"}}>
                {selectedNews.summary}
                </h1>
                <img
                  style={{ fontSize: 'x-large', width: '80%' }}
                  src={selectedNews.imageUrl}
                  alt="error"
                />
                <p>Published on {selectedNews.publishedDate} 12:11 PM IST</p>
                <img
                  id="share"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjW9U4VceErj7S76msNUAkXZHBU7EHuFiDg&usqp=CAU"
                  alt="error"
                />
                <img
                  id="bookmark"
                  src="https://www.pxpng.com/public/uploads/preview/-11608565643y2ec8jdhc7.png"
                  alt="error"
                />
              </div>
              <div>
                <p>{text}</p>
              </div>
              </div>
              
            </div>
            
            <RightBox/>
            
        </div>
      </section>
    </>
  )
}

export default BriefContent
