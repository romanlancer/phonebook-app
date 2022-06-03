"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{4937:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var s="styles_wrapper__xMELL",a="styles_icon__scjor",r=n(9126),c=n(885),l=n(2791),i=n(6036),o=n(5264),u="styles_label__zolhw",d="styles_input__OaQvx",_="styles_form__ekyuM",h="styles_submitButton__utG3H",m="styles_icon__B6WtL",x=n(532),p=n(184),b=function(){var e=(0,x.Lr)(),t=(0,c.Z)(e,1)[0],n=(0,x.wY)().data,s=(0,l.useState)(""),a=(0,c.Z)(s,2),r=a[0],b=a[1],j=(0,l.useState)(""),f=(0,c.Z)(j,2),y=f[0],N=f[1],v=(0,l.useState)(!0),g=(0,c.Z)(v,2),w=g[0],C=g[1];(0,l.useEffect)((function(){r.length>0&&y.length>0?C(!1):C(!0)}),[r,y]);return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s={name:r,number:y},a=n.find((function(e){return e.name===r||e.number===y}));a?o.Notify.warning("".concat(r," ").concat(y," is already in contacts.")):(t(s),b(""),N(""))},className:_,children:[(0,p.jsxs)("label",{className:u,children:["Name:",(0,p.jsx)("input",{className:d,type:"text",name:"name",placeholder:"john doe",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:r,onChange:function(e){return b(e.currentTarget.value)},required:!0})]}),(0,p.jsxs)("label",{className:u,children:["Number:",(0,p.jsx)("input",{className:d,type:"tel",placeholder:"+380 33 333 3333",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:y,name:"number",onChange:function(e){return N(e.currentTarget.value)},required:!0})]}),(0,p.jsxs)("button",{className:h,type:"submit",disabled:w,children:["add contact",(0,p.jsx)(i.s7o,{size:20,className:m})]})]})},j="styles_contactsList__Ev7tc",f="styles_phoneNumber__9Ub5M",y="styles_contactName__qTuby",N="styles_listItem__U7r0n",v="styles_buttons__YXtnx",g=n(5048),w=n(2112),C=n(376),z=function(){var e=(0,x.wY)(),t=e.data,n=e.isFetching,s=(0,x.Nt)(),a=(0,c.Z)(s,1)[0],r=(0,g.v9)(w.zK),l=""===r?t:t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase().trim())}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{className:j,children:t&&l.map((function(e){var t=e.name,n=e.id,s=e.number;return(0,p.jsxs)("li",{className:N,id:n,children:[(0,p.jsxs)("span",{className:y,children:[t,": "]}),(0,p.jsx)("span",{className:f,children:s}),(0,p.jsx)("button",{type:"button",className:v,onClick:function(){return a(n)},"aria-label":"delete contact button",children:(0,p.jsx)(i._LP,{size:20})})]},n)}))}),t&&0===t.length&&(0,p.jsx)("p",{style:{textDecoration:"underline"},children:"no contacts available"}),n&&(0,p.jsx)(C.n,{style:{color:"white"}})]})},k="styles_wrapper__njCtW",L="styles_text__K+7EA",Z=function(){var e=(0,g.I0)(),t=(0,g.v9)(w.zK);return(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("p",{className:L,children:"Find contacts by name"}),(0,p.jsx)("input",{name:"filter",value:t,onChange:function(t){return e((0,w.Tv)(t.currentTarget.value))}})]})},A=function(){return(0,p.jsxs)("div",{className:s,children:[(0,p.jsxs)("section",{children:[(0,p.jsxs)("h1",{children:["Phonebook ",(0,p.jsx)(r.Hfn,{size:35,className:a})]}),(0,p.jsx)(b,{})]}),(0,p.jsxs)("section",{children:[(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(Z,{}),(0,p.jsx)(z,{})]})]})}}}]);
//# sourceMappingURL=contacts-page.429bef80.chunk.js.map