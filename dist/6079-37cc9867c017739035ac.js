"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[6079],{86079:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var i=t(89335),s=t(96499),o=(t(2784),t(76699)),a=t(82575),l=t(52322);const r=(0,a.ZP)((()=>{const{t:e}=(0,o.$)();return(0,l.jsx)(s.Z,{deviceName:e("Polkadot Vault"),instructionUrl:"",logoUrl:i.ZP.polkadot_vault,subTitle:e("Open Polkadot Vault on your phone to connect wallet"),title:e("Connect Polkadot Vault")})})).withConfig({displayName:"ConnectPolkadotVault",componentId:"sc-ez4phx-0"})((({theme:{token:e}})=>({})))},96499:(e,n,t)=>{t.d(n,{Z:()=>E});var i=t(57801),s=t(80855),o=t(80588),a=t(59566),l=t(68627),r=t(3612),c=t(5772),d=t(81620),g=t(28973),h=t(28347),m=t(21462),u=t(47088),p=t(73160),x=t(27178),f=t(99656),j=t(12162),H=t(79385),Z=t(67243),w=t(72779),k=t.n(w),b=t(18332),C=t(6746),S=t(2784),v=t(76699),N=t(82575),y=t(89335),z=t(52322);const I=(0,z.jsx)(f.Z,{phosphorIcon:b.Z,weight:"fill"}),P="attach-qr-signer-scanner-modal",E=(0,N.ZP)((e=>{(0,m.Z)();const{isWebUI:n}=(0,S.useContext)(r.sG),{className:t,deviceName:w,instructionUrl:b,logoUrl:N,subTitle:E,title:L}=e,{t:T}=(0,v.$)(),{goHome:U}=(0,u.Z)(),$=(0,c.Z)(),_=(0,g.Z)(l.kc),A=(0,d.Z)(),{inactiveModal:D}=(0,S.useContext)(j.t),[R,V]=(0,S.useState)({}),[X,q]=(0,S.useState)(!1),B=(0,S.useCallback)((e=>{q(!0),D(P),V({message:"",status:"validating"}),setTimeout((()=>{(0,p.mKk)({name:A,address:e.content,genesisHash:"",isEthereum:e.isEthereum,isAllowed:!0,isReadOnly:!1}).then((e=>{e.length?V({message:e[0].message,status:"error"}):(V({}),$())})).catch((e=>{V({message:e.message,status:"error"})})).finally((()=>{q(!1)}))}),300)}),[A,$,D]),{onClose:G,onError:O,onSuccess:Q,openCamera:F}=(0,h.Z)(P,x.IJ,V,B);return(0,z.jsx)(i.FE,{className:k()(t),children:(0,z.jsx)(i.Ar.WithSubHeaderOnly,{className:"web-single-column web-cancel-fill-height",onBack:_,rightFooterButton:{children:T(X?"Creating":"Scan QR code"),icon:I,onClick:F,loading:X},subHeaderIcons:[{icon:(0,z.jsx)(s.Z,{}),onClick:U}],title:L,children:(0,z.jsxs)("div",{className:k()("container"),children:[(0,z.jsx)("div",{className:"sub-title",children:E}),(0,z.jsx)("div",{className:"logo",children:(0,z.jsx)(o.Z,{leftLogo:(0,z.jsx)(H.Z,{height:56,shape:"squircle",src:y.ZP.subwallet,width:56}),rightLogo:(0,z.jsx)(H.Z,{height:56,shape:"squircle",src:N,width:56})})}),(0,z.jsxs)("div",{className:"instruction",children:[(0,z.jsx)("span",{children:w}),(0,z.jsxs)("span",{children:[" ",T("will provide you with a QR code to scan. Read")," "]}),(0,z.jsx)("a",{className:"link",href:b,children:T("this instruction")}),(0,z.jsx)("span",{children:", "}),(0,z.jsx)("span",{children:T("for more details.")})]}),R.message&&(0,z.jsxs)("div",{className:"error-container",children:[(0,z.jsx)(f.Z,{customSize:"28px",phosphorIcon:C.Z,weight:"fill"}),(0,z.jsx)("span",{className:"error-content",children:R.message})]}),(0,z.jsx)(Z.Z,{className:t,id:P,isError:!!R.status,onClose:G,onError:O,onSuccess:Q,overlay:R.message&&(0,z.jsx)(a.Z,{message:R.message}),selectCameraMotion:n?"move-right":void 0})]})})})})).withConfig({displayName:"ConnectQrSigner",componentId:"sc-tg52mm-0"})((({theme:{token:e}})=>({".container":{padding:e.padding,".web-ui-enable &":{paddingTop:0}},".sub-title":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".logo":{margin:`${e.controlHeightLG}px 0`,"--logo-size":e.controlHeightLG+e.controlHeightXS},".instruction":{padding:`0 ${e.padding}px`,marginBottom:e.margin,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".link":{fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorLink,textDecoration:"underline"},".error-container":{color:e.colorError,display:"flex",flexDirection:"row",alignItems:"center",marginTop:e.marginXXL-2,justifyContent:"center"},".error-content":{marginLeft:e.marginXS,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6}})))}}]);