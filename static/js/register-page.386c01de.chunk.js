"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[316],{4902:function(e,s,a){a.r(s),a.d(s,{default:function(){return G}});var n=a(885),t=a(2791),r=a(5048),i=a(3832),c="styles_wrapper__ndyUs",o="styles_submitButton__gWVyR",l="styles_section__+qYIn",u="styles_form__ixE8U",d="styles_instructions__hh6C4",f="styles_offscreen__vQ44z",m="styles_hide__Ydv9c",p="styles_valid__66Lon",h="styles_invalid__YmorP",x="styles_errmsg__LwFf1",_="styles_line__R3Pkt",j=a(3504),b=a(3174),w=a(4483),y=a(184),g=/^[A-z][A-z0-9-_-\s?]{3,23}$/,v=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,N=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,G=function(){var e=(0,t.useRef)(),s=(0,t.useRef)(),a=(0,r.I0)(),G=(0,t.useState)(""),S=(0,n.Z)(G,2),Z=S[0],C=S[1],E=(0,t.useState)(!1),L=(0,n.Z)(E,2),q=L[0],B=L[1],F=(0,t.useState)(!1),k=(0,n.Z)(F,2),A=k[0],I=k[1],R=(0,t.useState)(""),$=(0,n.Z)(R,2),z=$[0],P=$[1],U=(0,t.useState)(!1),M=(0,n.Z)(U,2),Y=M[0],D=M[1],O=(0,t.useState)(!1),Q=(0,n.Z)(O,2),T=Q[0],V=Q[1],W=(0,t.useState)(""),H=(0,n.Z)(W,2),J=H[0],K=H[1],X=(0,t.useState)(!1),ee=(0,n.Z)(X,2),se=ee[0],ae=ee[1],ne=(0,t.useState)(!1),te=(0,n.Z)(ne,2),re=te[0],ie=te[1],ce=(0,t.useState)(""),oe=(0,n.Z)(ce,2),le=oe[0],ue=oe[1],de=(0,t.useState)(!1),fe=(0,n.Z)(de,2),me=fe[0],pe=fe[1],he=(0,t.useState)(!1),xe=(0,n.Z)(he,2),_e=xe[0],je=xe[1],be=(0,t.useState)(""),we=(0,n.Z)(be,2),ye=we[0],ge=we[1];(0,t.useEffect)((function(){e.current.focus()}),[]),(0,t.useEffect)((function(){B(g.test(Z))}),[Z]),(0,t.useEffect)((function(){D(N.test(z))}),[z]),(0,t.useEffect)((function(){ae(v.test(J)),pe(J===le)}),[J,le]),(0,t.useEffect)((function(){ge("")}),[Z,J,le]);return(0,y.jsx)("div",{className:c,children:(0,y.jsxs)("section",{className:l,children:[(0,y.jsx)("p",{ref:s,className:"".concat(ye?x:f),"aria-live":"assertive",children:ye}),(0,y.jsx)("h1",{children:"Register"}),(0,y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=g.test(Z),n=v.test(J),t=N.test(z);s&&n&&t?(a(i.Z.register({name:Z,password:J,email:z})),P(""),C(""),K(""),ue("")):ge("Invalid Entry")},className:u,children:[(0,y.jsxs)("label",{htmlFor:"username",children:["Username:",(0,y.jsx)(w.G,{icon:b.LEp,className:"".concat(q?p:m)}),(0,y.jsx)(w.G,{icon:b.NBC,className:"".concat(q||!Z?m:h)})]}),(0,y.jsx)("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return C(e.target.value)},value:Z,required:!0,"aria-invalid":q?"false":"true","aria-describedby":"uidnote",onFocus:function(){return I(!0)},onBlur:function(){return I(!1)}}),(0,y.jsxs)("p",{id:"uidnote",className:"".concat(A&&Z&&!q?d:f),children:[(0,y.jsx)(w.G,{icon:b.sqG}),"4 to 24 characters.",(0,y.jsx)("br",{}),"Must begin with a letter.",(0,y.jsx)("br",{}),"Letters, numbers, underscores, hyphens allowed."]}),(0,y.jsxs)("label",{htmlFor:"email",children:["Email:",(0,y.jsx)(w.G,{icon:b.LEp,className:"".concat(Y?p:m)}),(0,y.jsx)(w.G,{icon:b.NBC,className:"".concat(Y||!z?m:h)})]}),(0,y.jsx)("input",{type:"email",id:"email",ref:e,onChange:function(e){return P(e.target.value)},value:z,required:!0,"aria-invalid":Y?"false":"true","aria-describedby":"emailnote",onFocus:function(){return V(!0)},onBlur:function(){return V(!1)}}),(0,y.jsxs)("p",{id:"emailnote",className:"".concat(T&&z&&!Y?d:f),children:[(0,y.jsx)(w.G,{icon:b.sqG}),'An email is a string separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain Letters, numbers, underscores, hyphens allowed.',(0,y.jsx)("br",{}),"The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots."]}),(0,y.jsxs)("label",{htmlFor:"password",children:["Password:",(0,y.jsx)(w.G,{icon:b.LEp,className:"".concat(se?p:m)}),(0,y.jsx)(w.G,{icon:b.NBC,className:"".concat(se||!J?m:h)})]}),(0,y.jsx)("input",{type:"password",id:"password",onChange:function(e){return K(e.target.value)},value:J,required:!0,"aria-invalid":se?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return ie(!0)},onBlur:function(){return ie(!1)}}),(0,y.jsxs)("p",{id:"pwdnote",className:"".concat(re&&!se?d:f),children:[(0,y.jsx)(w.G,{icon:b.sqG}),"8 to 24 characters.",(0,y.jsx)("br",{}),"Must include uppercase and lowercase letters, a number and a special character.",(0,y.jsx)("br",{}),"Allowed special characters:"," ",(0,y.jsx)("span",{"aria-label":"exclamation mark",children:"!"})," ",(0,y.jsx)("span",{"aria-label":"at symbol",children:"@"})," ",(0,y.jsx)("span",{"aria-label":"hashtag",children:"#"})," ",(0,y.jsx)("span",{"aria-label":"dollar sign",children:"$"})," ",(0,y.jsx)("span",{"aria-label":"percent",children:"%"})]}),(0,y.jsxs)("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",(0,y.jsx)(w.G,{icon:b.LEp,className:"".concat(me&&le?p:m)}),(0,y.jsx)(w.G,{icon:b.NBC,className:"".concat(me||!le?m:h)})]}),(0,y.jsx)("input",{type:"password",id:"confirm_pwd",onChange:function(e){return ue(e.target.value)},value:le,required:!0,"aria-invalid":me?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return je(!0)},onBlur:function(){return je(!1)}}),(0,y.jsxs)("p",{id:"confirmnote",className:"".concat(_e&&!me?d:f),children:[(0,y.jsx)(w.G,{icon:b.sqG}),"Must match the first password input field."]}),(0,y.jsx)("button",{className:o,disabled:!(q&&se&&me),children:"Sign Up"})]}),(0,y.jsxs)("p",{children:["Already registered?",(0,y.jsx)("br",{}),(0,y.jsx)(j.OL,{className:_,to:"/LogIn",children:"Sign In"})]})]})})}}}]);
//# sourceMappingURL=register-page.386c01de.chunk.js.map