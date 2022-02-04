"use strict";(self.webpackChunkgilanis=self.webpackChunkgilanis||[]).push([[216],{4216:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(2791),s=t(5861),a=t(885),i=t(7757),o=t.n(i),c="AuthForm_auth__-TECN",u="AuthForm_control__4A9Is",l="AuthForm_actions__WXgFv",d="AuthForm_toggle__6ngHr",h="AuthForm_invalid__DgLz7",p="AuthForm_eyeIcon__zW7mP",m=t(6030),f=t(6871),v=t(704),g=t(3408),x=t(6515),j=t(270),y=t(9126),b=t(184),k=function(){var e=(0,m.I0)(),n=(0,f.s0)(),t=(0,r.useRef)(),i=(0,r.useState)(!0),k=(0,a.Z)(i,2),w=k[0],N=k[1],Z=(0,r.useState)(!1),T=(0,a.Z)(Z,2),A=T[0],C=T[1],S=(0,r.useState)(!1),_=(0,a.Z)(S,2),F=_[0],L=_[1],I=(0,r.useState)(!1),P=(0,a.Z)(I,2),R=P[0],z=P[1],E=(0,x.Z)(),H=E.sendRequest,B=E.error,D=E.finished,W=(0,j.Z)((function(e){return e.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)})),q=W.value,O=W.error,U=W.isValid,G=W.inputHandler,V=W.blurHandler,X=W.clear,Y=(0,j.Z)((function(e){return e.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)})),M=Y.value,$=Y.error,J=Y.isValid,K=Y.inputHandler,Q=Y.blurHandler,ee=Y.clear,ne=function(){L((function(e){return!e}));var e="password"===t.current.getAttribute("type")?"text":"password";t.current.setAttribute("type",e)};(0,r.useEffect)((function(){z(!(!U||!J))}),[U,J]);var te=function(){var t=(0,s.Z)(o().mark((function t(r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),R){t.next=3;break}return t.abrupt("return");case 3:H({url:w?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvXaGgOIHB37ZcWDqO-6kleELjRMa-3Ns":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvXaGgOIHB37ZcWDqO-6kleELjRMa-3Ns\n    ",method:"POST",body:{email:q,password:M,returnSecureToken:!0},headers:{"Content-Type":"application/json"}},(function(t){if(w&&t){C(!0);var r=t.idToken,s=new Date((new Date).getTime()+1e3*+t.expiresIn).toISOString();setTimeout((function(){e(v.d.login(r)),e((0,g.mB)(r,s)),n("/home",{replace:!0})}),2e3)}})),X(),ee();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),re=O?"".concat(u," ").concat(h):"".concat(u),se=$?"".concat(u," ").concat(h):"".concat(u);return(0,b.jsx)("section",{className:"app-bg section-padding",children:(0,b.jsxs)("div",{className:c,children:[B&&(0,b.jsxs)("div",{className:"flex-center",children:[(0,b.jsx)("div",{children:(0,b.jsx)("p",{className:"p-opensans",children:B.message})}),(0,b.jsx)("div",{children:(0,b.jsx)("button",{type:"button",style:{marginTop:"2rem",fontFamily:"var(--font-alt)",fontWeight:400},className:"custom-button",onClick:function(){return n("/home",{replace:!0})},children:"Retry"})})]}),!w&&D&&(0,b.jsxs)("div",{className:"flex-center",style:{padding:"1rem",gap:"1.5rem"},children:[(0,b.jsx)("div",{children:(0,b.jsxs)("p",{className:"p-opensans",children:["You've successfully signed up. ",(0,b.jsx)("br",{})," Please Log in."]})}),(0,b.jsx)("div",{children:(0,b.jsx)("button",{type:"button",style:{marginTop:"2rem",fontFamily:"var(--font-alt)",fontWeight:400},className:"custom-button",onClick:function(){N(!0),X(),ee()},children:"Login"})})]}),!B&&(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)("h1",{className:"headtext-cormorant",children:w?"Login":"Sign Up"}),(0,b.jsxs)("form",{onSubmit:te,children:[(0,b.jsxs)("div",{className:re,children:[(0,b.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,b.jsx)("input",{type:"email",id:"email",value:q,onChange:G,onBlur:V,placeholder:"johndoe@johndoe.com",required:!0}),O&&(0,b.jsx)("p",{className:"p-opensans",children:"Please enter a valid e-mail"})]}),(0,b.jsxs)("div",{className:se,children:[(0,b.jsx)("label",{htmlFor:"password",children:"Your Password"}),(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsx)("input",{type:"password",id:"password",value:M,onChange:K,onBlur:Q,min:8,placeholder:"Abcdef5.",required:!0,ref:t}),F&&(0,b.jsx)(y.I$m,{className:p,size:25,onClick:ne}),!F&&(0,b.jsx)(y.rCC,{className:p,size:25,onClick:ne})]}),$&&(0,b.jsx)("p",{className:"p-opensans",children:"Password must contain one uppercase letter, one special character (,.?!), and is at least eight characters."})]}),(0,b.jsxs)("div",{className:l,children:[A&&(0,b.jsx)("button",{children:"Please Wait..."}),!A&&(0,b.jsx)("button",{children:w?"Login":"Create Account"}),(0,b.jsx)("button",{style:{marginBottom:"2rem"},type:"button",className:d,onClick:function(){N((function(e){return!e}))},children:w?"Create new account":"Login with existing account"})]})]})]})]})})},w=function(){return(0,b.jsx)(r.Fragment,{children:(0,b.jsx)(k,{})})}},6515:function(e,n,t){var r=t(5861),s=t(885),a=t(7757),i=t.n(a),o=t(2791),c=function(e){return new Promise((function(n,t){setTimeout((function(){t(new Error("Request Failed! Session Timeout after ".concat(e," seconds")))}),1e3*e)}))};n.Z=function(){var e=(0,o.useState)(!1),n=(0,s.Z)(e,2),t=n[0],a=n[1],u=(0,o.useState)(!1),l=(0,s.Z)(u,2),d=l[0],h=l[1],p=(0,o.useState)(!1),m=(0,s.Z)(p,2),f=m[0],v=m[1],g=(0,o.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,s,o,u,l,d,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,s=n.url,o=n.method,u=n.headers,l=n.body,e.next=5,Promise.race([fetch(s,{method:null!==o&&void 0!==o?o:"GET",body:null!==(r=JSON.stringify(l))&&void 0!==r?r:null,headers:null!==u&&void 0!==u?u:{}}),c(10)]);case 5:if((d=e.sent).ok){e.next=8;break}throw new Error("".concat(d.status,"! Sorry, Log In Failed. Have you signed up?"));case 8:return e.next=10,d.json();case 10:p=e.sent,t(p),v(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),h(e.t0);case 18:a(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(n,t){return e.apply(this,arguments)}}(),[]);return{isLoading:t,error:d,finished:f,sendRequest:g}}},270:function(e,n,t){var r=t(885),s=t(2791),a=function(e,n){return"INPUT"===n.type?{value:n.value,isTouched:e.isTouched}:"BLUR"===n.type?{value:e.value,isTouched:!0}:"CLEAR"===n.type?{value:"",isTouched:!1}:void 0};n.Z=function(e){var n=(0,s.useReducer)(a,{value:"",isTouched:!1}),t=(0,r.Z)(n,2),i=t[0],o=t[1],c=e(i.value),u=!c&&i.isTouched;return{value:i.value,isValid:c,error:u,inputHandler:function(e){o({type:"INPUT",value:e.target.value})},blurHandler:function(){o({type:"BLUR"})},clear:function(){o({type:"CLEAR"})}}}}}]);
//# sourceMappingURL=216.90414ce8.chunk.js.map