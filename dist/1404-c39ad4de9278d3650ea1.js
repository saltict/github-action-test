"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp=("undefined"!=typeof self?self:this).webpackChunk_subwallet_webapp||[]).push([[1404],{1404:(e,s,n)=>{n.r(s),n.d(s,{default:()=>$});var o=n(57801),t=n(94716),i=n(80855),l=n(32204),a=n(5769),r=n(89558),c=n(67145),d=n(86041),u=n(18742),p=n(70497),g=n(47088),h=n(73160),m=n(99656),x=n(12162),f=n(12798),E=n(61882),S=n(1072),y=n(58094),b=n(19201),j=n(92280),v=n(5165),w=n(95023),N=n(72779),P=n.n(N),Z=n(46782),I=n(75720),A=n(12029),C=n(54105),R=n(47856),_=n(18332),k=n(11283),H=n(13739),O=n(2784),T=n(76699),D=n(73557),F=n(82575),Y=n(68774),z=n(52322),K=function(e){return e.JSON_FILE="json-file",e.PRIVATE_KEY="private-key",e.QR_CODE="qr-code",e.SEED_PHRASE="seed-phrase",e}(K||{}),L=function(e){return e.PASSWORD="password",e.TYPES="types",e}(L||{});const M=(e,s)=>()=>{if(e){const n=new Blob([JSON.stringify(e)],{type:"application/json; charset=utf-8"});(0,Z.saveAs)(n,`${s}.json`)}},W=(0,z.jsx)(m.Z,{phosphorIcon:I.Z,weight:"fill"}),$=(0,F.ZP)((e=>{const{accountAddress:s,className:n,isModalMode:N,onCancelModal:Z}=e,{t:F}=(0,T.$)(),$=(0,D.s0)(),{goHome:B}=(0,g.Z)(),{accountAddress:J}=(0,D.UO)(),{inactiveModal:Q}=(0,O.useContext)(x.t),V=(0,O.useMemo)((()=>s&&N?s:J),[s,J,N]),q=(0,d.Z)(V),[G]=f.Z.useForm(),[X,U]=(0,O.useState)([]),ee=X.length<=1,[se,ne]=(0,O.useState)(!0),[oe,te]=(0,O.useState)(!0),[ie,le]=(0,O.useState)(!1),[ae,re]=(0,O.useState)(""),[ce,de]=(0,O.useState)(""),[ue,pe]=(0,O.useState)(null),[ge,he]=(0,O.useState)(""),me=(0,O.useMemo)((()=>({[K.JSON_FILE]:F("Successful"),[K.QR_CODE]:F("Your QR code"),[K.PRIVATE_KEY]:F("Your private key"),[K.SEED_PHRASE]:F("Your seed phrase")})),[F]),xe=(0,O.useMemo)((()=>{const e=["secret",ae||"",ce];return null!=q&&q.name&&e.push(q.name),e.join(":")}),[null==q?void 0:q.name,ce,ae]),fe=(0,u.Z)(ae),Ee=(0,O.useCallback)(((e,s)=>{const n=s.map((e=>e.errors||[])).reduce(((e,s)=>[...e,...s])).some((e=>!!e)),o=s.map((e=>e.value)).some((e=>!e));te(n||o)}),[]),Se=(0,O.useCallback)((e=>{const s=e[L.PASSWORD],n=e[L.TYPES],o=n.length<=1;if(!n.length)return;if(!q)return;const t=q.address;t&&(le(!0),setTimeout((()=>{new Promise(((e,i)=>{const l={privateKey:!1,seedPhrase:!1,jsonFile:!1},a=()=>{Object.values(l).every((e=>e))&&e()};n.includes(K.PRIVATE_KEY)||n.includes(K.QR_CODE)?(0,h.T7o)(t,s).then((e=>{re(e.privateKey),de(e.publicKey),l.privateKey=!0,a()})).catch((e=>{i(new Error(e.message))})):l.privateKey=!0,n.includes(K.SEED_PHRASE)&&null!=q&&q.isMasterAccount?(0,h.drq)({address:t,password:s}).then((e=>{he(e.result),l.seedPhrase=!0,a()})).catch((e=>{i(new Error(e.message))})):l.seedPhrase=!0,n.includes(K.JSON_FILE)?(0,h.ONw)(t,s).then((e=>{pe(e.exportedJson),l.jsonFile=!0,a(),o&&M(e.exportedJson,t)()})).catch((e=>{i(new Error(e.message))})):l.jsonFile=!0})).then((()=>{ne(!1)})).catch((e=>{G.setFields([{name:L.PASSWORD,errors:[e.message]}])})).finally((()=>{le(!1)}))}),500))}),[q,G]),ye=(0,O.useCallback)((e=>()=>{const s=G.getFieldValue(L.TYPES);let n;n=s.includes(e)?s.filter((s=>s!==e)):[...s,e],G.setFieldValue(L.TYPES,n),U(n)}),[G]),be=(0,O.useMemo)((()=>[{disable:!q||q.isExternal||!q.isMasterAccount,hidden:!1,icon:A.Z,label:F("Export seed phrase"),type:K.SEED_PHRASE},{disable:!q||!!q.isExternal,hidden:!1,icon:C.Z,label:F("Export JSON file"),type:K.JSON_FILE},{disable:!q||q.isExternal||!(0,Y.u)(q.address),hidden:!(0,Y.u)((null==q?void 0:q.address)||""),icon:R.Z,label:F("Export private key"),type:K.PRIVATE_KEY},{disable:!q||!(null==q||!q.isExternal),hidden:!1,icon:_.Z,label:F("Export QR Code"),type:K.QR_CODE}]),[q,F]),je=(0,O.useCallback)((()=>{ie||(Q(r.K),null==Z||Z())}),[Q,ie,Z]),ve=(0,O.useCallback)((()=>{$(V?`/accounts/detail/${V}`:c.Y)}),[V,$]);if((0,O.useEffect)((()=>{q||B()}),[q,B,$]),(0,O.useEffect)((()=>{null!=q&&q.address&&G.resetFields()}),[null==q?void 0:q.address,G]),(0,p.Z)(G,L.PASSWORD),!q)return null;const we=(0,z.jsx)(o.FE,{className:N?"modal-content":P()(n),children:(0,z.jsx)(o.Ar.WithSubHeaderOnly,{disableBack:ie,onBack:N?je:ve,rightFooterButton:{children:F(se?"Confirm":"Finish"),icon:se?void 0:W,disabled:oe||!X.length,loading:ie,onClick:se?G.submit:B},subHeaderIcons:N?void 0:[{icon:(0,z.jsx)(i.Z,{}),onClick:B,disabled:ie}],subHeaderLeft:N?(0,z.jsx)(i.Z,{}):void 0,title:se?F("Export account"):ee?me[X[0]]:F("Export successful"),children:(0,z.jsxs)("div",{className:"body-container",children:[(0,z.jsx)("div",{className:P()("notice",{"mb-large":!se}),children:(0,z.jsx)(t.Z,{description:F("Anyone with your key can use any assets held in your account."),title:F("Warning: Never disclose this key"),type:"warning"})}),se&&(0,z.jsxs)(f.Z,{form:G,initialValues:{[L.PASSWORD]:"",[L.TYPES]:[]},name:"account-export-form",onFieldsChange:Ee,onFinish:Se,children:[(0,z.jsx)(f.Z.Item,{name:L.PASSWORD,rules:[{message:F("Password is required"),required:!0}],statusHelpAsTooltip:!0,children:(0,z.jsx)(E.Z,{disabled:ie,placeholder:F("Type your Subwallet password"),suffix:(0,z.jsx)("span",{}),type:"password"})}),(0,z.jsx)(f.Z.Item,{className:"mb-0",name:L.TYPES,children:(0,z.jsx)("div",{className:"export-types-container",children:be.map((e=>{const s=null==X?void 0:X.includes(e.type);return e.hidden?null:(0,z.jsx)(S.Z,{className:P()("export-item",`export-${e.type}`,{selected:s,disabled:e.disable}),leftItemIcon:(0,z.jsx)(y.Z,{backgroundColor:"var(--icon-bg-color)",phosphorIcon:e.icon,size:"sm",weight:"fill"}),name:e.label,onPressItem:e.disable||ie?void 0:ye(e.type),rightItem:(0,z.jsx)(m.Z,{className:"setting-item-right-icon",iconColor:"var(--selected-icon-color)",phosphorIcon:I.Z,size:"sm",weight:"fill"})},e.type)}))})})]}),!se&&(0,z.jsxs)("div",{className:P()("result-container",{"export-single":ee}),children:[X.includes(K.PRIVATE_KEY)&&(0,z.jsxs)("div",{className:"result-content",children:[(0,z.jsx)("div",{className:"result-title",children:me[K.PRIVATE_KEY]}),(0,z.jsx)(b.Z,{className:"private-key-field",content:ae,maxLine:10}),(0,z.jsx)(j.Z,{icon:(0,z.jsx)(m.Z,{phosphorIcon:k.Z}),onClick:fe,type:"ghost",children:F("Copy to clipboard")})]}),X.includes(K.SEED_PHRASE)&&(0,z.jsxs)("div",{className:"result-content",children:[(0,z.jsx)("div",{className:"result-title",children:me[K.SEED_PHRASE]}),(0,z.jsx)(a.Z,{seedPhrase:ge})]}),X.includes(K.QR_CODE)&&(0,z.jsxs)("div",{className:"result-content",children:[(0,z.jsx)("div",{className:"result-title",children:me[K.QR_CODE]}),(0,z.jsx)("div",{className:"qr-area",children:(0,z.jsx)(v.Z,{errorLevel:"Q",logoPadding:(0,Y.u)(q.address)?3:4,size:264,value:xe})})]}),X.includes(K.JSON_FILE)&&ue&&(0,z.jsxs)("div",{className:"result-content",children:[(0,z.jsx)("div",{className:"result-title",children:F("Your json file")}),ee&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:"page-icon",children:(0,z.jsx)(w.Z,{color:"var(--page-icon-color)",iconProps:{phosphorIcon:I.Z,weight:"fill"}})}),(0,z.jsx)("div",{className:"json-done-tile",children:F("Success!")}),(0,z.jsx)("div",{className:"json-done-description",children:F("You have successfully exported JSON file for this account")})]}),!ee&&(0,z.jsx)(S.Z,{className:"download-json",leftItemIcon:(0,z.jsx)(y.Z,{backgroundColor:"var(--icon-bg-color)",phosphorIcon:C.Z,size:"sm",weight:"fill"}),name:`${q.address}.json`,onPressItem:M(ue,q.address),rightItem:(0,z.jsx)(m.Z,{className:"setting-item-right-icon",phosphorIcon:H.Z,size:"sm",weight:"fill"})})]})]})]})})});return N?(0,z.jsx)(l.I,{className:P()(n,"-modal-container"),closable:!1,id:r.K,onCancel:je,children:we}):we})).withConfig({displayName:"AccountExport",componentId:"sc-nxcsoe-0"})((({theme:{token:e}})=>({".body-container":{padding:`0 ${e.padding}px`},".notice":{marginTop:e.margin,marginBottom:e.margin,"&.mb-large":{marginBottom:e.marginLG}},".export-types-container":{display:"flex",flexDirection:"column",gap:e.sizeXS},".export-item":{"--selected-icon-color":e["gray-4"],textAlign:"start","&.selected":{"--selected-icon-color":e.colorSecondary},"&.disabled":{opacity:.4,".ant-web3-block":{cursor:"not-allowed","&:hover":{backgroundColor:e["gray-1"]}}}},".setting-item-right-icon":{paddingRight:8},".download-json":{".ant-web3-block-middle-item":{overflow:"hidden",".ant-setting-item-name":{textOverflow:"ellipsis",width:"100%",overflow:"hidden",paddingRight:e.paddingXS}}},[`.export-${K.SEED_PHRASE}`]:{"--icon-bg-color":e["green-7"]},[`.export-${K.JSON_FILE}, .download-json`]:{"--icon-bg-color":e["orange-7"]},[`.export-${K.PRIVATE_KEY}`]:{"--icon-bg-color":e["gray-3"]},[`.export-${K.QR_CODE}`]:{"--icon-bg-color":e["geekblue-7"]},".result-container":{display:"flex",flexDirection:"column",gap:e.sizeLG},".result-content":{display:"flex",flexDirection:"column",gap:e.size,".result-title":{fontWeight:e.fontWeightStrong,fontSize:e.fontSizeHeading6,lineHeight:e.lineHeightHeading6,color:e.colorTextLabel,textTransform:"uppercase"},".private-key-field":{".ant-field-wrapper":{alignItems:"start",textAlign:"center"}},".qr-area":{display:"flex",flexDirection:"row",justifyContent:"center"}},".export-single":{".result-title":{display:"none"}},".page-icon":{display:"flex",justifyContent:"center","--page-icon-color":e.colorSecondary},".json-done-tile":{color:e.colorTextHeading,textAlign:"center",fontWeight:e.fontWeightStrong,fontSize:e.fontSizeHeading3,lineHeight:e.lineHeightHeading3},".json-done-description":{padding:`0 ${e.controlHeightLG-e.padding}px`,color:e.colorTextLabel,textAlign:"center",fontSize:e.fontSizeHeading5,lineHeight:e.lineHeightHeading5},"&.-modal-container":{".notice.notice":{marginTop:0},".ant-sw-screen-layout-header":{paddingTop:e.paddingSM,paddingBottom:e.paddingSM,borderBottom:`2px solid ${e.colorBgSecondary}`},".ant-sw-modal-content":{overflow:"hidden",paddingTop:0,maxHeight:"100%"},".ant-sw-modal-body":{padding:0},".ant-sw-screen-layout-body":{marginTop:e.margin,paddingTop:e.paddingXS,paddingBottom:e.margin},".ant-sw-screen-layout-container .ant-sw-screen-layout-footer-button-container-alone":{marginBottom:e.margin}}})))}}]);