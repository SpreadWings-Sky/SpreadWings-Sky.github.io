import{i as s,ay as o,az as t,l as r}from"./app-DvUU7Gdr.js";import{c as u}from"./index-x8TNrC4q.js";function m(i){const e=s(!1),{top:n}=o(i);return t(i,([{isIntersecting:a}])=>{e.value=a}),{show:()=>{e.value||window.scrollTo(0,n.value)}}}function d(i,e){r(i,{initial:{opacity:0,y:e.y||40},enter:{opacity:1,y:0,transition:{delay:e.i*(e.delay||50),type:"spring",ease:u.easeIn,damping:8,duration:e.duration||400}}})}export{d as a,m as u};
