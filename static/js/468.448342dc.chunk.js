"use strict";(self.webpackChunkpf_blog_frontend=self.webpackChunkpf_blog_frontend||[]).push([[468],{7608:function(n,t,e){e.d(t,{Z:function(){return d}});var r=e(2791),i=e(715),a=e(184);function d(n){var t=n.onClose,e=n.content;return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.key&&t()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="auto"}}),[t]),(0,a.jsx)(i.V2,{onClick:t,children:(0,a.jsx)(i.QE,{onClick:function(n){return n.stopPropagation()},children:e})})}},5434:function(n,t,e){e.d(t,{Z:function(){return d}});e(2791);var r=e(5804),i=e(9764),a=e(184);function d(n){var t=n.post;return(0,a.jsxs)(i.FG,{children:[(0,a.jsxs)(i.Py,{children:[(0,a.jsx)(i.JE,{children:(0,a.jsx)("img",{src:t.imageUrl,alt:t.title,className:"img-post"})}),(0,a.jsxs)(i.HJ,{children:[(0,a.jsxs)(i.iB,{children:[(0,a.jsx)(r.M3k,{className:"icon-tag"}),(0,a.jsx)("h4",{className:"post-tag",children:t.tag})]}),(0,a.jsxs)(i.of,{children:[(0,a.jsx)(r.KC7,{className:"icon-title"}),(0,a.jsx)("h3",{className:"post-title",children:t.title})]})]})]}),(0,a.jsx)(i.On,{children:t.text}),(0,a.jsxs)(i.Jv,{children:[(0,a.jsxs)(i.a6,{children:[(0,a.jsx)(i.vB,{type:"button",children:(0,a.jsx)(r.ZsZ,{className:"icon like"})}),(0,a.jsx)(i.dW,{children:0}),(0,a.jsx)(i.vB,{children:(0,a.jsx)(r.Ohv,{className:"icon coment"})})]}),(0,a.jsxs)(i.M_,{children:[(0,a.jsx)(i.yf,{}),(0,a.jsx)(i.vB,{children:(0,a.jsx)(r.bb7,{className:"icon send"})}),(0,a.jsx)(i.vB,{children:(0,a.jsx)(r.FQA,{className:"icon dots"})})]})]})]})}},9764:function(n,t,e){e.d(t,{CS:function(){return V},FG:function(){return J},HJ:function(){return W},JE:function(){return U},Jv:function(){return M},M_:function(){return Q},OD:function(){return T},On:function(){return D},Py:function(){return O},Uc:function(){return R},Wk:function(){return B},_O:function(){return F},a6:function(){return G},dW:function(){return H},fz:function(){return E},iB:function(){return L},l5:function(){return _},lL:function(){return I},of:function(){return S},vB:function(){return A},v_:function(){return K},yf:function(){return q}});var r,i,a,d,s,l,o,p,x,c,u,m,g,f,b,h,w,y,j,v,Z,k,P,z=e(168),N=e(1142),C=e(7924),E=C.ZP.div(r||(r=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  grid-template-rows: 1fr 1fr;\n  background-color: blue;\n  gap: 8px;\n  padding: 8px 4px;\n  margin: 0 auto;\n  @media screen and (min-width: 480px) {\n    padding: 8px;\n  }\n"]))),_=C.ZP.form(i||(i=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  grid-template-rows: 40px 40px 40px auto 88px;\n  justify-content: flex-start;\n  align-items: center;\n  border: 2px solid red;\n  border-radius: 14px;\n  gap: 16px;\n  background-color: ",";\n  padding: 8px;\n  margin: 0 auto;\n  .input {\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 4px;\n    border: 1px solid #bdbdbd;\n    justify-self: stretch;\n    align-self: stretch;\n    padding: 4px 8px;\n  }\n  .wrap-radio {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 16px;\n    gap: 8px;\n  }\n  .textarea {\n    display: grid;\n    grid-template-columns: minmax(256px 444px);\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 4px;\n    border: 1px solid #bdbdbd;\n    resize: vertical;\n  }\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 460px;\n  }\n"])),N.u.colors.alabaster50),B=C.ZP.div(a||(a=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  grid-template-rows: 40px 40px;\n  gap: 8px;\n  .btn {\n    box-sizing: border-box;\n    display: grid;\n  }\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px;\n  }\n"]))),F=C.ZP.ul(d||(d=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));\n  gap: 8px;\n  padding: 8px 4px;\n  margin: 0 auto;\n  @media screen and (min-width: 480px) {\n    padding: 8px;\n  }\n"]))),J=C.ZP.li(s||(s=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  /* grid-template-rows: auto; */\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  border-radius: 14px;\n  /* border: 2px solid ","; */\n  border: 2px solid red;\n  padding: 8px;\n  margin: 0 auto;\n  background-color: ",";\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 460px;\n    grid-template-rows: 160px 100px 40px;\n  }\n"])),(function(n){return n.theme.border}),N.u.colors.alabaster50),O=C.ZP.div(l||(l=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(296px, 444px);\n  /* grid-template-rows: auto auto; */\n  padding: 0;\n  margin: 0;\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 240px 212px;\n    grid-template-rows: 160px;\n    column-gap: 8px;\n  }\n"]))),U=C.ZP.div(o||(o=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(280px, 400px);\n  grid-template-rows: auto;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  .img-post {\n    border-radius: 12px;\n    justify-self: stretch;\n    align-self: stretch;\n  }\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 240px;\n    grid-template-rows: 160px;\n  }\n"]))),W=C.ZP.div(p||(p=(0,z.Z)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 28px 1fr;\n  align-items: flex-start;\n  /* background-color: aqua; */\n  padding: 8px;\n"]))),L=C.ZP.div(x||(x=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 24px 1fr;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 8px;\n  padding: 0;\n  .icon-tag {\n    width: 20px;\n    height: 20px;\n    /* fill: ","; */\n    fill: red;\n  }\n  .post-tag {\n    box-sizing: border-box;\n    font-size: 20px;\n    /* color: ","; */\n    color: red;\n  }\n"])),(function(n){return n.theme.fill}),(function(n){return n.theme.title})),S=C.ZP.div(c||(c=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 24px 1fr;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 0;\n  .icon-title {\n    width: 20px;\n    height: 20px;\n    fill: red;\n  }\n  .post-title {\n    box-sizing: border-box;\n    font-size: 20px;\n    color: red;\n    word-wrap: break-word;\n    overflow-wrap: anywhere;\n  }\n"]))),D=(C.ZP.div(u||(u=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(280px, 444px);\n  grid-template-rows: 1fr;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0;\n  margin: 0;\n  /* .post-text {\n    font-size: 16px;\n    color: #ff1744;\n    overflow-y: auto;\n    scroll-behavior: smooth;\n  } */\n  @media screen and (min-width: 480px) {\n    grid-template-rows: 100px;\n  }\n"]))),C.ZP.p(m||(m=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(280px, 444px);\n  grid-template-rows: 1fr;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  &::-webkit-scrollbar {\n    width: 8px;\n    height: 50px;\n  }\n  /* &::-webkit-scrollbar-track {\n    background: #f6f6f6;\n  } */\n  &::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background: ",";\n  }\n  /* &::-webkit-scrollbar-thumb:hover {\n    background: #249fa3;\n  } */\n  @media screen and (min-width: 480px) {\n    grid-template-rows: 100px;\n  }\n"])),N.u.colors.alabaster300)),M=C.ZP.div(g||(g=(0,z.Z)(["\n  display: grid;\n  /* grid-template-columns: 40px 1fr 40px; */\n  grid-template-columns: minmax(280px, 444px);\n  grid-template-rows: 40px 40px;\n  gap: 4px;\n  justify-content: flex-start;\n  align-items: center;\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 40px;\n  }\n"]))),G=C.ZP.div(f||(f=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 36px 36px 36px;\n  gap: 4px;\n  justify-content: flex-start;\n  align-items: center;\n"]))),H=C.ZP.span(b||(b=(0,z.Z)(["\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  padding: 4px;\n"]))),Q=C.ZP.div(h||(h=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 36px 36px;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 4px;\n"]))),q=C.ZP.input(w||(w=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(200px 1fr);\n  border-radius: 8px;\n  font-size: 12px;\n  padding: 8px 4px;\n"]))),A=C.ZP.button(y||(y=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  background-color: transparent;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  .icon {\n    width: 36px;\n    height: 36px;\n  }\n  .like {\n    fill: #ffd740;\n  }\n  .coment {\n    fill: #ffd740;\n  }\n  .send {\n    fill: #ffd740;\n  }\n  .dots {\n    fill: #ffd740;\n  }\n"]))),K=C.ZP.ul(j||(j=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));\n  gap: 8px;\n  padding: 8px 4px;\n  margin: 0 auto;\n  @media screen and (min-width: 480px) {\n    padding: 8px;\n  }\n"]))),R=C.ZP.div(v||(v=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto;\n  gap: 8px;\n  padding: 0;\n  margin: 0;\n"]))),T=C.ZP.div(Z||(Z=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  grid-template-rows: 40px 40px;\n  gap: 8px;\n  .btn {\n    box-sizing: border-box;\n    display: grid;\n  }\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px;\n  }\n"]))),V=C.ZP.div(k||(k=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: minmax(292px, 1fr);\n  grid-template-rows: 40px 40px 40px auto 88px;\n  justify-content: flex-start;\n  align-items: center;\n  border: 2px solid red;\n  border-radius: 14px;\n  gap: 16px;\n  background-color: ",";\n  padding: 8px;\n  margin: 0 auto;\n  .input {\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 4px;\n    border: 1px solid #bdbdbd;\n    justify-self: stretch;\n    align-self: stretch;\n    padding: 4px 8px;\n  }\n  .wrap-radio {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 16px;\n    gap: 8px;\n  }\n  .textarea {\n    display: grid;\n    grid-template-columns: minmax(256px 444px);\n    box-sizing: border-box;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 4px;\n    border: 1px solid #bdbdbd;\n    resize: vertical;\n  }\n  @media screen and (min-width: 480px) {\n    grid-template-columns: 460px;\n  }\n"])),N.u.colors.alabaster50),I=C.ZP.button(P||(P=(0,z.Z)(["\n  display: grid;\n  cursor: pointer;\n"])))},9468:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(2791),i=e(6616),a=e(9439),d=e(9764),s=e(7209),l=e(4164),o=e(7608),p=e(5434),x=e(184);function c(){var n=(0,s.jW)(),t=(0,a.Z)(n,1)[0],e=(0,r.useState)(!1),i=(0,a.Z)(e,2),c=i[0],u=i[1],m=(0,r.useState)({imageUrl:"",tag:"",title:"",text:""}),g=(0,a.Z)(m,2),f=g[0],b=g[1];return(0,x.jsx)(d.fz,{children:(0,x.jsxs)(d.l5,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.target.url.value,e=n.target.title.value,r=n.target.tags.value,i=n.target.text.value;b({imageUrl:t,tag:r,title:e,text:i}),u(!0)},children:[(0,x.jsx)("input",{className:"input",name:"url",type:"text",placeholder:"Enter URL"}),(0,x.jsxs)("div",{className:"wrap-radio",children:[(0,x.jsxs)("label",{htmlFor:"tags",className:"label",children:[(0,x.jsx)("input",{type:"radio",name:"tags",value:"animals"}),"animals"]}),(0,x.jsxs)("label",{htmlFor:"tags",className:"label",children:[(0,x.jsx)("input",{type:"radio",name:"tags",value:"hobby"}),"hobby"]}),(0,x.jsxs)("label",{htmlFor:"tags",className:"label",children:[(0,x.jsx)("input",{type:"radio",name:"tags",value:"children"}),"children"]}),(0,x.jsxs)("label",{htmlFor:"tags",className:"label",children:[(0,x.jsx)("input",{type:"radio",name:"tags",value:"health"}),"health"]})]}),(0,x.jsx)("input",{className:"input",name:"title",type:"text",placeholder:"Enter title"}),(0,x.jsx)("textarea",{name:"text",rows:"auto",type:"textarea",className:"textarea"}),(0,x.jsxs)(d.Wk,{children:[(0,x.jsx)("button",{type:"submit",children:"preview"}),c&&(0,l.createPortal)((0,x.jsx)(o.Z,{onClose:function(){return u(!1)},content:(0,x.jsx)(p.Z,{post:f})}),document.body),(0,x.jsx)("button",{type:"button",onClick:function(){t(f)},children:"publish"})]})]})})}function u(){return(0,x.jsx)(i.TD,{children:(0,x.jsx)(c,{})})}}}]);
//# sourceMappingURL=468.448342dc.chunk.js.map