"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[375],{80375:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var t=a(57801),n=a(29836),o=a(80855),i=a(68627),c=a(5772),r=a(81620),l=a(28973),d=a(7688),h=a(21462),u=a(47088),p=a(73160),m=a(96701),g=a(27178),f=a(99656),y=a(12798),w=a(95023),b=a(72779),k=a.n(b),x=a(80205),j=a(2784),Z=a(76699),H=a(35185),v=a(82575),C=a(52322);const S=(0,C.jsx)(f.Z,{phosphorIcon:x.Z,weight:"fill"}),A="attach-read-only-scanner-modal",F="address",N=(0,v.ZP)((({className:e})=>{(0,h.Z)();const{t:s}=(0,Z.$)(),{goHome:a}=(0,u.Z)(),f=(0,c.Z)(),b=(0,r.Z)(),v=(0,H.v9)((e=>e.accountState.accounts)),N=(0,l.Z)(i.kc),[I]=y.Z.useForm(),[P,B]=(0,j.useState)(""),[T,_]=(0,j.useState)(!1),[q,z]=(0,j.useState)(!1),[E,O]=(0,j.useState)(!0),L=(0,j.useCallback)((e=>{const s=(0,g.H9)(e);s&&(B(s.content),z(s.isEthereum))}),[]),R=(0,j.useCallback)(((e,s)=>{const{empty:a,error:t}=(0,m.ij)(s);O(t||a);const n=(0,m.eW)(e);n.address&&L(n.address)}),[L]),W=(0,j.useCallback)(((e,a)=>{const t=(0,g.H9)(a);if(t){for(const e of v)if(e.address===t.content)return B(""),Promise.reject(s("Account already exists"))}else if(B(""),""!==a)return Promise.reject(s("Invalid address"));return Promise.resolve()}),[v,s]),X=(0,j.useCallback)((()=>{_(!0),P?(0,p.mKk)({name:b,address:P,genesisHash:"",isEthereum:q,isAllowed:!0,isReadOnly:!0}).then((e=>{e.length?I.setFields([{name:F,errors:e.map((e=>e.message))}]):f()})).catch((e=>{I.setFields([{name:F,errors:[e.message]}])})).finally((()=>{_(!1)})):_(!1)}),[I,P,b,q,f]);return(0,d.Z)(A),(0,C.jsx)(t.FE,{className:k()(e),children:(0,C.jsx)(t.Ar.WithSubHeaderOnly,{className:"web-single-column web-cancel-fill-height",onBack:N,rightFooterButton:{children:s("Attach watch-only account"),icon:S,disabled:E,onClick:X,loading:T},subHeaderIcons:[{icon:(0,C.jsx)(o.Z,{}),onClick:a}],title:s("Attach watch-only account"),children:(0,C.jsxs)("div",{className:k()("container"),children:[(0,C.jsx)("div",{className:"description",children:s("Track the activity of any wallet without a private key")}),(0,C.jsx)("div",{className:"page-icon",children:(0,C.jsx)(w.Z,{color:"var(--page-icon-color)",iconProps:{weight:"fill",phosphorIcon:x.Z}})}),(0,C.jsx)(y.Z,{form:I,initialValues:{address:""},name:"attach-read-only-form",onFieldsChange:R,onFinish:X,children:(0,C.jsx)(y.Z.Item,{name:F,rules:[{message:s("Account address is required"),required:!0},{validator:W}],statusHelpAsTooltip:!0,children:(0,C.jsx)(n.J,{id:A,placeholder:s("Please type or paste account address"),showScanner:!0})})})]})})})})).withConfig({displayName:"AttachReadOnly",componentId:"sc-1s88dfq-0"})((({theme:{token:e}})=>({".container":{padding:e.padding,".web-ui-enable &":{paddingTop:0,paddingBottom:0,marginBottom:-16}},".description":{padding:`0 ${e.padding}px`,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextDescription,textAlign:"center"},".page-icon":{display:"flex",justifyContent:"center",marginTop:e.controlHeightLG,marginBottom:e.sizeXXL,"--page-icon-color":e.colorSecondary}})))}}]);