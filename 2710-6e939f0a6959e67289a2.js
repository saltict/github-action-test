"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[2710],{32710:(e,t,n)=>{n.r(t),n.d(t,{GlobalSearchTokenModalId:()=>T,default:()=>y});var o=n(57801),a=n(84341),s=n(57190),l=n(3612),i=n(67942),r=n(82887),c=n(91580),d=n(63866),h=n(23148),u=n(43557),p=n(61882),f=n(90809),x=n(72779),g=n.n(x),m=n(2784),b=n(73557),k=n(9910),j=n(82575),v=n(52322);const S=({className:e,onChange:t,placeholder:n},o)=>{const[a,s]=(0,m.useState)("");(0,m.useImperativeHandle)(o,(()=>({setValue:s})));const l=(0,m.useCallback)((e=>{var t;const n=null==e||null===(t=e.target)||void 0===t?void 0:t.value;s(n)}),[]);return(0,m.useEffect)((()=>{const e=setTimeout((()=>{t(a)}),300);return()=>clearTimeout(e)}),[t,a]),(0,v.jsx)(p.Z.Search,{className:e,onChange:l,placeholder:n,size:"md",value:a})},C=(0,m.forwardRef)(S),w=(0,j.ZP)((function({className:e}){const{pathname:t}=(0,b.TH)(),[n,o]=(0,m.useState)(),[a,s]=(0,m.useState)(),{t:l}=(0,u.$G)(),i=(0,b.s0)(),r=(0,m.useCallback)((()=>i(-1)),[i]),[c,d]=(0,m.useState)(""),p=(0,m.useRef)(null),x=[l("Tokens"),l("NFTs")],j=(0,m.useCallback)((e=>{i(e?"nfts/collections":"tokens")}),[i]),S=(0,m.useMemo)((()=>{const e=t.split("/").filter((e=>!!e))[1];return x.map((e=>e.toLowerCase())).indexOf(e)}),[t]),w=(0,m.useMemo)((()=>t.includes("detail")),[t]);return(0,m.useEffect)((()=>{var e;null===(e=p.current)||void 0===e||e.setValue("")}),[t]),(0,v.jsxs)("div",{className:g()(e,"portfolio-container"),children:[(0,v.jsxs)("div",{className:"portfolio-header",children:[(0,v.jsx)(h.Z.Balance,{className:"portfolio-balance"}),(0,v.jsxs)("div",{className:"menu-bar",children:[w?(0,v.jsx)(f.Z,{background:"transparent",center:!1,className:"web-header",onBack:r,showBackButton:!0,title:n}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(k.mQ,{onSelect:j,selectedIndex:S,children:[(0,v.jsx)(k.td,{className:g()("react-tabs__tab-list"),children:x.map((e=>(0,v.jsx)(k.OK,{children:e},e)))}),(0,v.jsxs)("div",{style:{display:"none"},children:[(0,v.jsx)(k.x4,{}),(0,v.jsx)(k.x4,{})]})]})}),(0,v.jsx)("div",{className:"right-section",children:(0,v.jsx)(C,{className:"search-input",onChange:d,placeholder:a,ref:p})})]})]}),(0,v.jsx)("div",{className:"portfolio-content",children:(0,v.jsx)(b.j3,{context:{searchInput:c,setDetailTitle:o,setSearchPlaceholder:s}})})]})})).withConfig({displayName:"PortfolioPage",componentId:"sc-1sa9r7a-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",height:"100%",".portfolio-header":{flex:"0 0 auto",paddingBottom:e.paddingLG},".portfolio-content":{flex:"1 1 500px",paddingBottom:e.paddingLG},".react-tabs__tab-list":{display:"flex",borderRadius:e.borderRadiusLG,margin:0,padding:0},".menu-bar":{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",background:"transparent",".web-header":{flex:1,".header-content":{color:e.colorTextBase,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeHeading4,lineHeight:e.lineHeightHeading4,display:"flex",flexDirection:"row",overflow:"hidden"}},".react-tabs__tab":{textAlign:"center",display:"inline-block",border:"none",outline:"none",position:"relative",listStyle:"none",fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG,fontWeight:e.headingFontWeight,cursor:"pointer",flex:"unset",borderRadius:0,color:e.colorTextLight4,padding:0,marginRight:16,paddingTop:10,paddingBottom:e.paddingXS,borderBottom:"2px solid transparent","&--selected":{background:"transparent",color:e.colorTextLight2,borderBottomColor:e.colorTextLight2}},".right-section":{justifySelf:"end",display:"flex",".search-input":{width:360,height:50}}}})));var N=n(12162);const T="globalSearchToken",y=(0,j.ZP)((function({className:e=""}){const{activeModal:t,inactiveModal:n}=(0,m.useContext)(N.t),h=(0,c.t)(),u=(0,d.Z)(h),p=(0,r.ZP)(u.tokenGroupMap),{pathname:f}=(0,b.TH)(),x=(0,b.s0)(),{isPortfolio:k}=(0,m.useContext)(i.Fh),{isWebUI:j}=(0,m.useContext)(l.sG),S=(0,m.useCallback)((()=>{t(T)}),[t]),C=(0,m.useCallback)((()=>{n(T)}),[n]);return(0,m.useEffect)((()=>{f.split("/").filter((e=>!!e)).length<=1&&x("/home/tokens")}),[x,f]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.Q.Provider,{value:{tokenGroupStructure:u,accountBalance:p},children:(0,v.jsx)("div",{className:g()(e,"home","home-container",{"portfolio-container":k}),children:k&&j?(0,v.jsx)(w,{}):(0,v.jsx)(o.Ar.Home,{onClickSearchIcon:S,showFilterIcon:!0,showSearchIcon:!0,children:(0,v.jsx)(b.j3,{})})})}),(0,v.jsx)(a.v,{id:T,onCancel:C,sortedTokenSlugs:u.sortedTokenSlugs,tokenBalanceMap:p.tokenBalanceMap})]})})).withConfig({displayName:"Home",componentId:"sc-pxzema-0"})((({theme:{token:e}})=>({height:"100%"})))}}]);