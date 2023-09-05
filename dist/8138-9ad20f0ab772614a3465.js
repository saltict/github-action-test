"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[8138],{88138:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var n=i(57801),s=i(80855),a=i(48118),r=i(57343),o=i(68627),l=i(3612),c=i(5772),d=i(81620),u=i(28973),p=i(43246),m=i(88528),h=i(70497),g=i(21462),x=i(47088),f=i(73160),y=i(99656),b=i(12798),k=i(61882),v=i(92280),Z=i(72779),w=i.n(Z),j=i(90837),C=i(2784),I=i(82575),N=i(52322);const S=(0,N.jsx)(y.Z,{phosphorIcon:j.Z,weight:"fill"}),H="private-key",T=[{title:"What is a private key?",description:"A private key is like a password — a string of letters and numbers — that can be used to restore your wallet."},{title:"Is it safe to enter it into SubWallet?",description:"Yes. It will be stored locally and never leave your device without your explicit permission."}],_=(0,I.ZP)((({className:e})=>{(0,g.Z)();const{t}=(0,p.Z)(),{goHome:i}=(0,x.Z)(),y=(0,c.Z)(),Z=(0,u.Z)(o.Rt),{isWebUI:j}=(0,C.useContext)(l.sG),I=(0,C.useRef)(),[_,W]=(0,C.useState)({}),[A,F]=(0,C.useState)(!1),[E,P]=(0,C.useState)(!1),[z,V]=(0,C.useState)(!1),[$]=b.Z.useForm(),q=(0,m.Z)(),B=(0,d.Z)();(0,h.Z)($,H);const D=b.Z.useWatch(H,$),G=(0,C.useCallback)((e=>{const{[H]:t}=e;q().then((()=>{null!=t&&t.trim()&&(P(!0),(0,f.u$e)({name:B,suri:t.trim(),isAllowed:!0,types:[r.E6]}).then((()=>{y()})).catch((e=>{W({status:"error",message:e.message})})).finally((()=>{P(!1)})))})).catch((()=>{}))}),[B,q,y]);(0,C.useEffect)((()=>{let e=!0;return I.current&&clearTimeout(I.current),e&&(null!=D&&D.trim()?(F(!0),W({status:"validating",message:""}),I.current=setTimeout((()=>{(0,f.Shd)(D.trim(),[r.E6]).then((({autoAddPrefix:t})=>{e&&(t&&$.setFieldValue(H,`0x${D}`),W({}))})).catch((t=>{e&&W({status:"error",message:t.message})})).finally((()=>{e&&F(!1)}))}),300)):z&&W({status:"error",message:t("Private key is required")})),()=>{e=!1}}),[D,$,z,t]);const L=(0,C.useCallback)((e=>{H in e&&V(!0)}),[]);return(0,N.jsx)(n.FE,{className:w()(e),children:(0,N.jsx)(n.Ar.WithSubHeaderOnly,{onBack:Z,rightFooterButton:j?void 0:{children:t(A?"Validating":"Import account"),icon:S,onClick:$.submit,disabled:!D||!!_.status,loading:A||E},subHeaderIcons:[{icon:(0,N.jsx)(s.Z,{}),onClick:i}],title:t("Import by private key"),children:(0,N.jsxs)("div",{className:w()("container",{"__web-ui":j}),children:[(0,N.jsxs)("div",{className:"import-container",children:[(0,N.jsx)("div",{className:"description",children:t("To import an existing wallet, please enter the private key here")}),(0,N.jsxs)(b.Z,{className:"form-container",form:$,name:"import-private-key-form",onFinish:G,onValuesChange:L,children:[(0,N.jsx)(b.Z.Item,{name:H,validateStatus:_.status,children:(0,N.jsx)(k.Z.TextArea,{className:"private-key-input",placeholder:t("Enter or paste private key"),statusHelp:_.message})}),(0,N.jsx)(b.Z.Item,{hidden:!j,children:(0,N.jsx)(v.Z,{disabled:!D||!!_.status,icon:S,loading:A||E,onClick:$.submit,children:t(A?"Validating":"Import account")})})]})]}),j&&(0,N.jsx)(a.Z,{contents:T})]})})})})).withConfig({displayName:"ImportPrivateKey",componentId:"sc-1bax2qa-0"})((({theme:{extendToken:e,token:t}})=>({".container":{"&.__web-ui":{display:"flex",justifyContent:"center",width:e.twoColumnWidth,maxWidth:"100%",margin:"0 auto","& > *":{flex:1},"& .ant-btn":{width:"100%"}},".import-container":{padding:t.padding},".description":{padding:`0 ${t.padding}px`,fontSize:t.fontSizeHeading6,lineHeight:t.lineHeightHeading6,color:t.colorTextDescription,textAlign:"center"},".form-container":{marginTop:t.margin},".private-key-input":{textarea:{resize:"none",height:6*t.sizeLG+"px !important"}}}})))},48118:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(57801),s=i(72779),a=i.n(s),r=(i(2784),i(76699)),o=i(82575),l=i(52322);const c=(0,o.ZP)((({className:e,contents:t})=>{const{t:i}=(0,r.$)();return t.length<=0?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:a()("instruction-container",e),children:t.map(((e,t)=>(0,l.jsx)(n.e3,{description:"string"==typeof e.description?i(e.description):e.description,title:i(e.title),type:e.type||"warning"},t)))})})).withConfig({displayName:"InstructionContainer",componentId:"sc-1tjn6f7-0"})((({theme:{token:e}})=>({display:"flex",flexDirection:"column",gap:10,".alert-title.alert-title":{color:e.colorTextLight1}})))}}]);