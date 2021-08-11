(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{55:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return T})),n.d(r,"addContact",(function(){return U})),n.d(r,"deleteContact",(function(){return V}));var a={};n.r(a),n.d(a,"getFilter",(function(){return W})),n.d(a,"getContacts",(function(){return Z})),n.d(a,"getFilteredContacts",(function(){return E})),n.d(a,"getIsLoading",(function(){return N}));var o=n(1),c=n.n(o),i=n(17),s=n.n(i),l=n(5),u=(n(55),n(25)),d=n(3);var p=Object(d.a)("section",{target:"e1d2ixlt1"})({name:"i1tn3z",styles:"padding:40px 0"}),b=Object(d.a)("h2",{target:"e1d2ixlt0"})({name:"1exvbqk",styles:"display:flex;justify-content:center;align-items:center;margin-bottom:50px;margin-left:auto;margin-right:auto;text-transform:uppercase;font-size:32px;text-align:center"}),f=n(2),m=function(t){var e=t.title,n=t.children;return Object(f.jsxs)(p,{children:[e&&Object(f.jsx)(b,{children:e}),n]})};var j=Object(d.a)("div",{target:"e132qmfd0"})({name:"mjvq0e",styles:"width:800px;margin:0 auto;padding:30px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.5) 0 0 10px 5px;background-color:var(--color-bg);& h1{font-size:40px;margin-bottom:40px;}& h2{font-size:28px;margin-bottom:60px;}& h1,h2{display:flex;justify-content:center;align-items:center;color:var(--color-dark);& svg{margin-right:10px;}}"}),x=function(t){var e=t.children;return Object(f.jsx)(j,{children:e})},g=n(26),h=n(24),v=n.n(h),O=n(13);var y=Object(d.a)("form",{target:"e1a0fnd84"})({name:"1smjx7h",styles:"width:450px;margin-left:auto;margin-right:auto;margin-bottom:40px"}),w=Object(d.a)("div",{target:"e1a0fnd83"})({name:"1cyqgoz",styles:"position:relative;width:100%;margin-bottom:40px"}),C=Object(d.a)("input",{target:"e1a0fnd82"})({name:"1faqpm1",styles:"display:block;width:100%;height:40px;padding-left:30px;border:none;border-bottom:1px solid tan;font-size:20px;color:var(--color-accent);background-color:transparent;&::placeholder{opacity:0;color:var(--color-accent);transition:opacity 250ms ease;}&:focus{outline:none;border-color:var(--color-accent);&::placeholder{opacity:0.7;transition-delay:250ms;}}&:focus+label,&:not(:placeholder-shown)+label{transform:translate(-32px, -30px);font-size:14px;text-transform:uppercase;font-weight:600;color:var(--color-accent);& svg{color:var(--color-accent);transform:translate(32px, 30px);}}"}),k=Object(d.a)("label",{target:"e1a0fnd81"})({name:"18ohee2",styles:"position:absolute;left:0;bottom:5px;display:flex;align-items:center;margin-bottom:5px;cursor:text;font-size:20px;color:var(--color-light);transition:color 250ms ease-in-out,transform 250ms ease-in-out;& svg{margin-right:10px;transition:color 250ms ease-in-out,transform 250ms ease-in-out;}"}),z=Object(d.a)("button",{target:"e1a0fnd80"})({name:"1sfglxc",styles:"display:flex;align-items:center;margin-left:auto;margin-right:auto;padding:5px 10px;cursor:pointer;border:2px solid tan;border-radius:4px;font-size:20px;text-transform:uppercase;color:var(--color-light);background-color:transparent;transition:all 250ms ease-in-out;&:hover{border-color:var(--color-accent);color:var(--color-accent);}& svg{margin-right:10px;}"}),F=n(19),L=n(6),q=n.n(L),A=n(11),M=n(8),S=n(39),B=n(40),D=n(16),I=n.n(D);I.a.defaults.baseURL="http://localhost:7777";var J=function(){function t(){Object(S.a)(this,t)}return Object(B.a)(t,null,[{key:"fetchContacts",value:function(){var t=Object(A.a)(q.a.mark((function t(){var e,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addContact",value:function(){var t=Object(A.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.post("/contacts",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteContact",value:function(){var t=Object(A.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.delete("/contacts/".concat(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),T=Object(M.b)("contacts/getContacts",function(){var t=Object(A.a)(q.a.mark((function t(e,n){var r,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,J.fetchContacts();case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),U=Object(M.b)("contacts/addContact",function(){var t=Object(A.a)(q.a.mark((function t(e,n){var r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,J.addContact(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),V=Object(M.b)("contacts/deleteContact",function(){var t=Object(A.a)(q.a.mark((function t(e,n){var r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,J.deleteContact(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),W=function(t){return t.contacts.filter},Z=function(t){return t.contacts.items},E=function(t){var e=Z(t),n=W(t);return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())||t.number.includes(n)}))},N=function(t){return t.contacts.isLoading},R=function(){var t=Object(o.useState)(""),e=Object(g.a)(t,2),n=e[0],c=e[1],i=Object(o.useState)(""),s=Object(g.a)(i,2),u=s[0],d=s[1],p=Object(l.b)(),b=Object(l.c)(a.getContacts),m=Object(O.a)(),j=Object(O.a)(),x=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":d(r);break;default:return}};return Object(f.jsxs)(y,{onSubmit:function(t){t.preventDefault(),function(t,e,n){var r=t.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),a=t.find((function(t){return t.number.replace(/[^0-9]/g,"")===n.replace(/[^0-9]/g,"")}));return r?(v.a.fire({position:"center",icon:"error",title:"".concat(e.toUpperCase(),"\nis already in contacts!"),confirmButtonColor:"indianred"}),r):a?(v.a.fire({position:"center",icon:"error",title:"This number is already in contacts as\n".concat(a.name.toUpperCase()),confirmButtonColor:"indianred"}),a):void 0}(b,n,u)||(p(r.addContact({id:Object(O.a)(),name:n,number:u})),c(""),d(""))},children:[Object(f.jsxs)(w,{children:[Object(f.jsx)(C,{id:m,type:"text",name:"name",value:n,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",placeholder:"Dmitry Karas",maxLength:"40",required:!0}),Object(f.jsxs)(k,{htmlFor:m,children:[Object(f.jsx)(F.b,{size:"22"}),"Name"]})]}),Object(f.jsxs)(w,{children:[Object(f.jsx)(C,{id:j,type:"tel",name:"number",value:u,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",autoComplete:"off",placeholder:"444-55-66",maxLength:"17",required:!0}),Object(f.jsxs)(k,{htmlFor:j,children:[Object(f.jsx)(F.a,{size:"22"}),"Number"]})]}),Object(f.jsxs)(z,{type:"submit",children:[Object(f.jsx)(F.c,{size:"30"}),"add"]})]})},K=n(42),P=n(41);var $=Object(d.a)("ul",{target:"e11oc7sy2"})({name:"1un96hd",styles:"border-radius:4px;overflow:hidden"}),G=Object(d.a)("li",{target:"e11oc7sy1"})({name:"13q7btu",styles:"display:flex;align-items:center;width:100%;margin:0 auto;padding:10px 5px;border-bottom:1px solid rosybrown;text-transform:capitalize;& span{display:inline-flex;align-items:center;font-weight:600;color:var(--color-dark);&:first-of-type{color:var(--color-accent);margin-right:10px;}& svg{margin-right:10px;color:var(--color-accent);}}& svg{color:var(--color-title);}"}),H=Object(d.a)("button",{target:"e11oc7sy0"})({name:"ov240o",styles:"display:block;margin-left:auto;padding:10px;border:none;cursor:pointer;background-color:transparent;transition:all 250ms ease-in-out;&:hover{color:var(--color-accent);transform:scale(1.3);}"}),Q=function(){var t=Object(l.c)(a.getFilteredContacts),e=Object(l.b)();return Object(f.jsx)($,{children:t.map((function(t){var n=t.id,a=t.name,o=t.number;return Object(f.jsxs)(G,{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)(P.a,{size:"20"}),a,":"]}),Object(f.jsx)("span",{children:o}),Object(f.jsx)(H,{onClick:function(){return e(r.deleteContact(n))},children:Object(f.jsx)(K.a,{size:"20"})})]},n)}))})},X=n(43);var Y=Object(d.a)("div",{target:"emy27ew2"})({name:"1cyqgoz",styles:"position:relative;width:100%;margin-bottom:40px"}),_=Object(d.a)("input",{target:"emy27ew1"})({name:"p2vnvg",styles:"display:block;width:100%;height:40px;margin-bottom:40px;padding-left:40px;border:none;border-bottom:1px solid tan;font-size:20px;color:var(--color-accent);background-color:transparent;transition:all 250ms ease-in-out;&::placeholder{opacity:0;color:var(--color-accent);transition:opacity 250ms ease;}&:focus{outline:none;border-bottom:1px solid var(--color-accent);&::placeholder{opacity:0.7;transition-delay:250ms;}}&:focus+label,&:not(:placeholder-shown)+label{transform:translate(-36px, -30px);font-size:14px;text-transform:uppercase;font-weight:600;color:var(--color-accent);& svg{color:var(--color-accent);transform:translate(36px, 30px);}}"}),tt=Object(d.a)("label",{target:"emy27ew0"})({name:"l2xk2w",styles:"position:absolute;left:0;bottom:5px;display:flex;align-items:center;margin-bottom:5px;cursor:text;font-size:20px;color:tan;transition:color 250ms ease-in-out,transform 250ms ease-in-out;& svg{margin-right:10px;transition:color 250ms ease-in-out,transform 250ms ease-in-out;}"}),et=Object(M.c)({name:"contacts",initialState:{items:[],filter:"",isLoading:!1,error:null},reducers:{changeFilter:function(t,e){t.filter=e.payload}},extraReducers:function(t){t.addCase(T.fulfilled,(function(t,e){t.items=e.payload})).addCase(U.fulfilled,(function(t,e){t.items.push(e.payload)})).addCase(V.fulfilled,(function(t,e){t.items=t.items.filter((function(t){return t.id!==e.payload}))})).addMatcher(Object(M.d)(T.pending,U.pending,V.pending),(function(t){t.isLoading=!0,t.error=null})).addMatcher(Object(M.d)(T.fulfilled,U.fulfilled,V.fulfilled),(function(t){t.isLoading=!1})).addMatcher(Object(M.d)(T.rejected,U.rejected,V.rejected),(function(t,e){t.error=e.payload,console.error(e.payload)}))}}),nt=et.actions.changeFilter,rt=et.reducer,at=function(){var t=Object(O.a)(),e=Object(l.c)(a.getFilter),n=Object(l.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(Y,{children:[Object(f.jsx)(_,{id:t,type:"text",value:e,onChange:function(t){return n(nt(t.target.value))},placeholder:"Dmitry"}),Object(f.jsxs)(tt,{htmlFor:t,children:[Object(f.jsx)(X.a,{size:"30"}),"Find contacts by name"]})]})})},ot=n(44),ct=n.n(ot);var it=Object(d.a)("div",{target:"e5hl3cy0"})({name:"jd0tk2",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;pointer-events:none"}),st=function(t){var e=t.loading;return Object(f.jsx)(it,{children:Object(f.jsx)(ct.a,{loading:e,color:"rosybrown",size:400})})},lt=function(){var t=Object(l.c)(a.getContacts),e=Object(l.c)(a.getIsLoading),n=Object(l.b)();return Object(o.useEffect)((function(){n(r.fetchContacts())}),[n]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{children:Object(f.jsxs)(x,{children:[Object(f.jsxs)("h1",{children:[Object(f.jsx)(u.a,{}),"Phonebook"]}),Object(f.jsx)(R,{}),t.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{children:[Object(f.jsx)(u.b,{}),"Contacts"]}),Object(f.jsx)(at,{}),Object(f.jsx)(Q,{})]})]})}),Object(f.jsx)(st,{loading:e})]})},ut=Object(M.a)({reducer:{contacts:rt},devTools:!1});s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(l.a,{store:ut,children:Object(f.jsx)(lt,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.880ef4e6.chunk.js.map