import{j as s,g as j,b as v,r as _,m as R,a as h}from"./index-Bnu0vlU8.js";import{C as $,s as A,W as n,V as y}from"./index-tLH4z_h7.js";import{W as L,i as N}from"./index-Ck_1pGje.js";const S=l=>s.jsxs($,{className:A.widget_item,speed:1,width:588,height:695,viewBox:"0 0 588 695",backgroundColor:"#d1d1d1",foregroundColor:"#bfbfbf",...l,children:[s.jsx("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"541",height:"519"}),s.jsx("rect",{x:"0",y:"544",rx:"11",ry:"11",width:"541",height:"50"})]}),P="_bestSellers_1p2ui_1",U="_bestSellers_slider_1p2ui_17",C="_bestSellers_items_1p2ui_29",M="_bestSellers_items_arrow_1p2ui_69",E="_bestSellers_items_arrow_left_1p2ui_97",G="_bestSellers_items_arrow_right_1p2ui_100",T="_bestSellers_items_firstItem_1p2ui_103",k="_bestSellers_items_secondItem_1p2ui_106",H="_bestSellers_items_thirdItem_1p2ui_109",V="_bestSellers_items_lastitemIsActive_1p2ui_109",t={bestSellers:P,bestSellers_slider:U,bestSellers_items:C,bestSellers_items_arrow:M,bestSellers_items_arrow_left:E,bestSellers_items_arrow_right:G,bestSellers_items_firstItem:T,bestSellers_items_secondItem:k,bestSellers_items_thirdItem:H,bestSellers_items_lastitemIsActive:V},W=(l,i)=>{const a=j`
        query {
            goods {
            id
            name
            price
            imageURL
            }
        }
    `;v({url:"http://127.0.0.1:8000/ElectroStore/api/goods",method:"post",data:{query:a}}).then(m=>{l(m.data),i(!1)}).catch(()=>{l([{id:1,imageURL:"images/BestSellers_items/BestSellers_item--1.webp",caption:"Phone Cover 5.6 inches",price:95,description:"ewe1221w"},{id:2,imageURL:"images/BestSellers_items/BestSellers_item--2.webp",caption:"Smart Phone 128GB RAM",price:55,description:"ewe1221w"},{id:3,imageURL:"images/BestSellers_items/BestSellers_item--3.webp",caption:"Smart Phone 128GB RAM",price:55,description:"ewe1221w"},{id:4,imageURL:"images/BestSellers_items/BestSellers_item--4.webp",caption:"Phone Cover 5.6 inches",price:95,description:"ewe1221w"},{id:5,imageURL:"images/BestSellers_items/BestSellers_item--5.webp",caption:"Smart Phone 128GB RAM",price:55,description:"ewe1221w"},{id:6,imageURL:"images/BestSellers_items/BestSellers_item--6.webp",caption:"Smart Phone 128GB RAM",price:55,description:"ewe1221w"},{id:7,imageURL:"images/BestSellers_items/BestSellers_item--7.webp",caption:"Smart Phone 128GB RAM",price:55,description:"ewe1221w"},{id:8,imageURL:"images/BestSellers_items/BestSellers_item--8.webp",caption:"22 Inch LED Display",price:65,description:"ewe1221w"}]),i(!1)})},F=()=>{const l=_.useRef(null),[i,a]=_.useState([]),[m,w]=_.useState(!0),[g,p]=_.useState(!1);L(l,p);const[r,b]=_.useState(1),o=[],c=window.matchMedia("(max-width: 1000px)"),d=window.matchMedia("(max-width: 700px)");if(m)for(let e=0;e<8;d.matches?e+=1:c.matches?e+=2:e+=3)o.push({id:`item-${e}`,renderItem:s.jsxs("div",{className:`${t.bestSellers_items} ${r==3?t.bestSellers_items_lastitemIsActive:e==0?t.bestSellers_items_firstItem:e==3?t.bestSellers_items_secondItem:e==6?t.bestSellers_items_thirdItem:""}`,children:[s.jsx(S,{}),s.jsx(S,{}),s.jsx(S,{})]})});else for(let e=0;e<i.length;d.matches?e+=1:c.matches?e+=2:e+=3)o.push({id:`item-${i[e].id}`,renderItem:s.jsxs("div",{className:`${t.bestSellers_items} ${r==3?t.bestSellers_items_lastitemIsActive:e==0?t.bestSellers_items_firstItem:e==3?t.bestSellers_items_secondItem:e==6?t.bestSellers_items_thirdItem:""}`,children:[s.jsx(n,{padding_top:90,imageHeight:500,...i[e]}),!c.matches&&i[e+1]&&s.jsx(n,{padding_top:90,imageHeight:500,...i[e+1]}),!d.matches&&i[e+2]&&s.jsx(n,{padding_top:90,imageHeight:500,...i[e+2]})]})});const{carouselFragment:u,slideToPrevItem:x,slideToNextItem:f}=R({withLoop:!0,items:o}),B=()=>{x(),b(r==1?3:r-1)},I=()=>{f(),b(r==3?1:r+1)};return _.useEffect(()=>{N()&&setTimeout(()=>{p(!0)},6e3),W(a,w)},[]),s.jsxs("div",{ref:l,className:`${t.bestSellers} ${g?"":`${h.opacity_0} ${h.loading_height}`}`,children:[s.jsx(y,{caption:"Best Sellers"}),s.jsxs("div",{className:t.bestSellers_slider,children:[s.jsx("button",{"aria-label":"Кнопка для перелистывания слайдера назад",onClick:B,className:`${t.bestSellers_items_arrow} ${t.bestSellers_items_arrow_left}`,children:s.jsx("i",{className:"fa fa-arrow-left","aria-hidden":"true"})}),u,s.jsx("button",{"aria-label":"Кнопка для перелистывания слайдера вперёд",onClick:I,className:`${t.bestSellers_items_arrow} ${t.bestSellers_items_arrow_right}`,children:s.jsx("i",{className:"fa fa-arrow-right","aria-hidden":"true"})})]})]})};export{F as default};