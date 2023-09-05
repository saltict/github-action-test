"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[4966],{94966:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var o=t(56858),a=t(57801),s=t(89558),i=t(43557),r=t(73160),l=t(99656),c=t(79385),d=t(92280),u=t(58094),g=t(17446),h=t(72779),p=t.n(h),m=t(89710),f=t(12604),k=t(75720),b=t(2784),w=t(76699),x=t(35185),v=t(82575),j=t(89335),L=t(52322);const S=(0,L.jsx)(l.Z,{phosphorIcon:m.Z,weight:"fill"}),y=(0,v.ZP)((e=>{(0,i.IR)();const{className:n}=e,{t}=(0,w.$)(),{goHome:h}=(0,i.yu)(),v=(0,i.Eb)(),y=(0,i.u4)(),C=(0,i.Hz)(s.kc),{accounts:E}=(0,x.v9)((e=>e.accountState)),[H,N]=(0,b.useState)(!0),Z=(0,b.useMemo)((()=>v.map((e=>({name:e.networkName,slug:e.slug})))),[v]),[M,I]=(0,b.useState)(v[0].slug),[$,F]=(0,b.useState)([]),[z,T]=(0,b.useState)(0),[A,W]=(0,b.useState)([]),[B,O]=(0,b.useState)(!1),[P,_]=(0,b.useState)(!1),q=(0,b.useMemo)((()=>v.find((e=>e.slug===M))),[M,v]),D=(0,b.useMemo)((()=>(null==q?void 0:q.accountName)||"Unknown"),[q]),{error:G,getAddress:R,isLoading:X,isLocked:U,ledger:Y,refresh:J,warning:K}=(0,i.c5)(M),Q=(0,b.useCallback)((()=>{N(!0),W([])}),[]),V=(0,b.useCallback)((e=>{const n=e.target.value;I(n)}),[]),ee=(0,b.useCallback)(((e,n)=>()=>{e||(O(!0),T(n+1),(async()=>{const e=5*n,t=5*(n+1),o=new Array(5).fill(null);F((e=>[...e,...o]));for(let n=e;n<t;n++)try{const{address:t}=await R(n);o[n-e]={accountIndex:n,name:`Ledger ${D} ${n+1}`,address:t}}catch(e){J(),N(!0);break}F((n=>{const a=[...n];for(let n=e;n<t;n++)a[n]=o[n-e];return a}))})().then().catch().finally((()=>O(!1))))}),[R,D,J]),ne=(0,b.useCallback)((()=>{N(!1),z||ee(B,z)()}),[B,ee,z]),te=(0,b.useCallback)(((e,n)=>()=>{let t;e.find((e=>e.address===n.address))?t=e.filter((e=>e.address!==n.address)):(t=[...e],t.push(n)),W(t)}),[]),oe=(0,b.useCallback)((e=>(n,t)=>{if(!n)return(0,L.jsx)(a.Y0,{direction:"vertical"},t);const s=!!e.find((e=>e.address===n.address)),i=(0,o.k1)(n.address,42),r=!!E.find((e=>e.address===i));return(0,L.jsx)(a.HL,{accountName:n.name,address:n.address,className:p()({disabled:r}),direction:"vertical",genesisHash:null==q?void 0:q.genesisHash,isSelected:s||r,onClick:r?void 0:te(e,n),showUnselectIcon:!0},n.address)}),[E,te,null==q?void 0:q.genesisHash]),ae=(0,b.useCallback)((()=>{A.length&&q&&(_(!0),setTimeout((()=>{(0,r.dSP)({accounts:A.map((e=>({accountIndex:e.accountIndex,address:e.address,addressOffset:0,genesisHash:q.genesisHash,hardwareType:"ledger",name:e.name,isEthereum:q.isEthereum})))}).then((()=>{y()})).catch((e=>{console.log(e)})).finally((()=>{_(!1)}))}),300))}),[A,q,y]);(0,b.useEffect)((()=>{W([]),F([]),T(0)}),[Y]);const se=!U&&!X&&!!Y;return(0,L.jsx)(a.FE,{className:p()(n),children:(0,L.jsx)(a.Ar.WithSubHeaderOnly,{className:"web-single-column web-cancel-fill-height",onBack:H?C:Q,rightFooterButton:{children:t("Connect Ledger device"),icon:S,disabled:!se||!H&&!A.length,onClick:H?ne:ae,loading:P},subHeaderIcons:[{icon:(0,L.jsx)(a.Tw,{}),onClick:h}],title:t("Connect Ledger device"),children:(0,L.jsxs)("div",{className:p()("container"),children:[(0,L.jsx)("div",{className:"sub-title",children:t("Connect and unlock your Ledger, then open the selected network on your Ledger.")}),H&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"logo",children:(0,L.jsx)(a.qB,{leftLogo:(0,L.jsx)(c.Z,{height:56,shape:"squircle",src:j.ZP.subwallet,width:56}),rightLogo:(0,L.jsx)(c.Z,{height:56,shape:"squircle",src:j.ZP.ledger,width:56})})}),(0,L.jsx)(a.oT,{items:Z,label:t("Select network"),onChange:V,placeholder:t("Select network"),value:M}),(0,L.jsx)(d.Z,{block:!0,className:p()("ledger-button",{connected:se,loading:X}),contentAlign:"left",icon:(0,L.jsx)(u.Z,{backgroundColor:"var(--icon-bg-color)",phosphorIcon:se?m.Z:f.Z,size:"sm",weight:"fill"}),onClick:J,schema:"secondary",children:(0,L.jsxs)("div",{className:"ledger-button-content",children:[(0,L.jsx)("span",{className:"ledger-info-text",children:se?t("Device found"):K||G||t(Y?"Loading":"Searching Ledger device")}),se&&(0,L.jsx)(l.Z,{className:"check-icon",phosphorIcon:k.Z,size:"md",weight:"fill"})]})})]}),!H&&(0,L.jsx)(g.Z.Section,{className:"list-container",displayRow:!0,list:$,pagination:{hasMore:!B,loadMore:ee(B,z)},renderItem:oe(A),renderOnScroll:!1,rowGap:"var(--list-gap)"})]})})})})).withConfig({displayName:"ConnectLedger",componentId:"sc-1o5hc6q-0"})((({theme:{token:e}})=>({"--list-gap":e.sizeXS,".ant-sw-screen-layout-body":{overflow:"hidden"},".container":{padding:`${e.padding}px ${e.padding}px 0`,overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",".web-ui-enable &":{paddingTop:0,".list-container":{maxHeight:372}}},".sub-title":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".logo":{margin:`${e.controlHeightLG}px 0`,"--logo-size":e.controlHeightLG+e.controlHeightXS,".dual-logo-container":{marginBottom:0,padding:0}},".ledger-button-content":{marginLeft:e.marginSM,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1,overflow:"hidden"},".ledger-info-text":{overflow:"hidden",textOverflow:"ellipsis"},".ledger-button":{marginTop:e.margin-2,padding:`0 ${e.paddingSM}px`,"--icon-bg-color":e["gray-4"],"&.connected":{"--icon-bg-color":e["green-6"]}},".check-icon":{color:e.colorSuccess},".list-container":{margin:`${e.margin}px -${e.margin}px 0`,flex:1},".ant-sw-list":{gap:e.sizeXS,".ant-web3-block":{display:"flex",overflow:"visible","&.disabled":{opacity:.4,cursor:"not-allowed"}},".ant-account-item":{paddingTop:e.paddingSM,paddingBottom:e.paddingSM}},".loading":{".anticon":{animation:"spinner-loading 1s infinite linear"}}})))},12604:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(2784),a=t(21890),s=t(76712),i=new Map;i.set("bold",(function(e){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M168,40.7a96,96,0,1,1-80,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),i.set("duotone",(function(e){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M168,40.7a96,96,0,1,1-80,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),i.set("fill",(function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z"}))})),i.set("light",(function(e){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M168,40.7a96,96,0,1,1-80,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),i.set("thin",(function(e){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M168,40.7a96,96,0,1,1-80,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),i.set("regular",(function(e){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M168,40.7a96,96,0,1,1-80,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var r=function(e,n){return(0,a._)(e,n,i)},l=(0,o.forwardRef)((function(e,n){return o.createElement(s.Z,Object.assign({ref:n},e,{renderPath:r}))}));l.displayName="CircleNotch";const c=l}}]);