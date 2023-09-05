"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[2934],{32934:(e,r,t)=>{t.r(r),t.d(r,{default:()=>j});var o=t(24358),s=t(36926),a=t(56858),i=t(57801),n=t(50334),l=t(75576),d=t(4517),c=t(43246),p=t(71871),u=t(73160),h=t(12798),m=t(99656),g=t(96108),f=t(61882),v=t(50007),b=t(81781),x=t(34878),w=t(34070),y=t(1610),k=t(46106),C=t(2784),S=t(73557),Z=t(82575),_=t(52322);const j=(0,Z.ZP)((function({className:e=""}){const{t:r}=(0,c.Z)(),t=(0,S.s0)(),j=(0,C.useContext)(l.R0),{token:E}=(0,Z.Fg)(),I=(0,S.TH)(),P=(0,d.Z)(),N=(0,C.useMemo)((()=>I.state),[I.state]),H=(0,p.Z)(N),T=(0,C.useCallback)((()=>{let e="";const r=[];(0,s.ie)(H)&&r.push("Substrate"),(0,s.h4)(H)&&r.push("EVM");for(let t=0;t<r.length;t++)e=e.concat(r[t]),t!==r.length-1&&(e=e.concat(", "));return e}),[H]),A=(0,C.useCallback)((()=>({provider:"",name:H.name,chainType:T(),symbol:(0,s.Nm)(H).symbol})),[H,T]),[B]=h.Z.useForm(),[R,z]=(0,C.useState)(!1),[F,L]=(0,C.useState)(!1),[V,M]=(0,C.useState)(!1),[O,D]=(0,C.useState)({status:""}),U=(0,C.useCallback)((()=>{t(-1)}),[t]),K=(0,C.useCallback)((()=>"success"!==O.status),[O.status]),W=(0,C.useCallback)((()=>{L(!0);const e=B.getFieldValue("provider"),{newProviderKey:o,newProviders:a}=function(e,r){let t=0;Object.keys(r).forEach((e=>{(0,s.HU)(e)&&(t+=1)}));const o=(0,s.yH)(t);return{newProviderKey:o,newProviders:{...r,[o]:e}}}(e.replaceAll(" ",""),H.providers),i={mode:"update",chainEditInfo:{slug:H.slug,currentProvider:o,providers:a}};(0,u.YYR)(i).then((e=>{L(!1),e?(P({message:r("Added a provider successfully")}),t(-1)):P({message:r("An error occurred, please try again")})})).catch((()=>{L(!1),P({message:r("An error occurred, please try again")})}))}),[H.providers,H.slug,B,t,P,r]),Y=(0,C.useCallback)((()=>{t(-1)}),[t]),G=(0,C.useCallback)((e=>{switch(e){case o.l.CONNECTION_FAILURE:return r("Cannot connect to this provider");case o.l.EXISTED_PROVIDER:return r("This provider has already been added");case o.l.PROVIDER_NOT_SAME_CHAIN:return r("This provider is not for this network");default:return r("Error validating this provider")}}),[r]),X=(0,C.useCallback)((()=>V?"success"===O.status?(0,_.jsx)(m.Z,{customSize:"20px",iconColor:E.colorSuccess,phosphorIcon:x.Z,type:"phosphor",weight:"bold"}):R?(0,_.jsx)(g.Z,{size:"20px"}):"error"===O.status?(0,_.jsx)(m.Z,{customSize:"20px",iconColor:E["gray-4"],phosphorIcon:w.Z,type:"phosphor",weight:"bold"}):(0,_.jsx)(_.Fragment,{}):(0,_.jsx)(_.Fragment,{})),[V,R,O.status,E]),$=(0,C.useCallback)(((e,t)=>new Promise(((e,o)=>{if((0,a.CB)(t)){M(!0),z(!0);const s=t.replaceAll(" ","");(0,u.t6d)(s,H.slug).then((r=>{z(!1),r.success&&(e(),D({status:"success"})),r.error&&(o(new Error(G(r.error))),D({status:"error",message:G(r.error)}))})).catch((()=>{z(!1),o(new Error(r("Error validating this provider"))),D({status:"error",message:r("Error validating this provider")})}))}else o(new Error(r("Provider URL is not valid"))),D({status:""}),M(!1)}))),[H.slug,G,r]);return(0,_.jsx)(i.FE,{className:`add_provider ${e}`,resolve:j.awaitStores(["chainStore"]),children:(0,_.jsx)(i.Ar.Base,{leftFooterButton:{onClick:Y,children:r("Cancel")},onBack:U,rightFooterButton:{block:!0,disabled:K(),loading:F,onClick:W,children:r("Save")},showBackButton:!0,showSubHeader:!0,subHeaderBackground:"transparent",subHeaderCenter:!0,subHeaderIcons:[{icon:(0,_.jsx)(n.Z,{})}],subHeaderPaddingVertical:!0,title:r("Add new provider"),children:(0,_.jsxs)("div",{className:"add_provider__container",children:[(0,_.jsx)("div",{className:"description",children:r("Currently support WSS provider for Substrate networks and HTTP provider for EVM network")}),(0,_.jsx)(h.Z,{form:B,initialValues:A(),children:(0,_.jsxs)("div",{className:"add_provider__attributes_container",children:[(0,_.jsx)(h.Z.Item,{name:"provider",rules:[{validator:$}],statusHelpAsTooltip:!0,validateTrigger:["onBlur"],children:(0,_.jsx)(f.Z,{disabled:R,placeholder:r("Provider URL"),prefix:(0,_.jsx)(m.Z,{customSize:"24px",iconColor:E["gray-4"],phosphorIcon:y.Z,type:"phosphor",weight:"bold"}),suffix:X()})}),(0,_.jsxs)(v.Z,{gutter:E.paddingSM,children:[(0,_.jsx)(b.Z,{span:16,children:(0,_.jsx)(h.Z.Item,{name:"name",children:(0,_.jsx)(f.Z,{disabled:!0,placeholder:r("Network name"),prefix:(0,_.jsx)(m.Z,{customSize:"24px",iconColor:E["gray-4"],phosphorIcon:k.Z,type:"phosphor",weight:"bold"}),tooltip:r("Network name"),tooltipPlacement:"topLeft",value:H.name})})}),(0,_.jsx)(b.Z,{span:8,children:(0,_.jsx)(h.Z.Item,{name:"symbol",children:(0,_.jsx)(f.Z,{disabled:!0,placeholder:r("Symbol"),tooltip:r("Symbol"),tooltipPlacement:"topLeft",value:H.slug})})})]}),(0,_.jsx)(h.Z.Item,{name:"chainType",children:(0,_.jsx)(f.Z,{disabled:!0,placeholder:r("Network type"),tooltip:r("Network type"),tooltipPlacement:"topLeft",value:H.slug})})]})})]})})})})).withConfig({displayName:"AddProvider",componentId:"sc-1rrdntg-0"})((({theme:{token:e}})=>({".add_provider__container":{padding:e.padding},".description":{padding:e.padding,paddingTop:0,textAlign:"center",color:e.colorTextDescription,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6},".ant-btn >span":{fontSize:e.fontSizeLG},".add_provider__attributes_container":{display:"flex",flexDirection:"column",gap:e.marginSM},".ant-input-container .ant-input-suffix":{marginRight:0,marginLeft:e.margin+2},".ant-form-item":{marginBottom:0},".ant-input-container .ant-input-affix-wrapper":{overflow:"hidden"},".ant-form-item-with-help .ant-form-item-explain":{paddingBottom:0},".web-ui-enable &":{".ant-sw-screen-layout-body":{flex:"0 0 auto"},".add_provider__container":{paddingTop:24,paddingBottom:8},".description":{maxWidth:416,marginLeft:"auto",marginRight:"auto"}}})))}}]);