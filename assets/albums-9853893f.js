import{f as i,o as s,c as m,w as r,a as u,i as e,t as p,e as h,g as _,F as y,h as v,j as x,C as k,W as A,a3 as L,a4 as Y,S as $,a2 as C,d as c,k as w}from"./app-5da5db97.js";import{o as B}from"./index-8f8e9689.js";import{_ as P}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-372c3b0c.js";const F=["title"],S=["src","alt","on-error"],E=i({__name:"YunAlbum",props:{album:null},setup(t){return(l,n)=>{const a=h;return s(),m(a,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[u("figure",{title:t.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":e(B)},null,40,S),u("figcaption",null," 「"+p(t.album.caption)+"」 ",1)],8,F)]),_:1},8,["to"])}}}),I={class:"yun-album-list"},N=i({__name:"YunAlbumList",props:{albums:null},setup(t){return(l,n)=>{const a=E;return s(),_("div",I,[(s(!0),_(y,null,v(t.albums,o=>(s(),m(a,{key:o.url,album:o},null,8,["album"]))),128))])}}});const V={text:"center",class:"yun-text-light",p:"2"},O=i({__name:"albums",setup(t){const{t:l}=x(),n=k(),a=A(n);L([Y({"@type":"CollectionPage"})]);const o=$(()=>n.value.albums||[]);return(W,j)=>{const b=P,d=N,f=w("router-view"),g=C;return s(),m(g,null,{"main-header":r(()=>[c(b,{title:e(a)||e(l)("title.album"),icon:e(n).icon||"i-ri-gallery-line",color:e(n).color},null,8,["title","icon","color"])]),"main-content":r(()=>[u("div",V,p(e(l)("counter.albums",e(o).length)),1),c(d,{albums:e(o)},null,8,["albums"]),c(f)]),_:1})}}});export{O as default};