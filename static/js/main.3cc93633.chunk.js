(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{16:function(e,t,n){},22:function(e,t){},23:function(e,t){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(10),i=n.n(s),o=(n(16),n(3)),l=n(2),r=n(11),u=n.n(r),j=(n(25),n(1)),d=function(){var e=Object(c.useState)(void 0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),r=i[0],d=i[1],b=Object(c.useState)([]),f=Object(o.a)(b,2),p=f[0],x=f[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("input",{type:"file",accept:".xlsx",onChange:function(e){var t=e.target.files[0];Object(l.c)(t).then((function(e){return a(e)})).catch((function(e){return console.error(e)}))},id:"upload",style:{display:"none"}}),Object(j.jsx)("label",{htmlFor:"upload",children:Object(j.jsx)("button",{className:"custom-button",style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"},onClick:function(){return document.getElementById("upload").click()},children:" Upload"})}),Object(j.jsx)(l.a,{initialData:n,onSheetUpdate:function(e){return d(e)},activeSheetClassName:"active-sheet",reactExcelClassName:"react-excel"}),n&&Object(j.jsx)("button",{className:"custom-button",onClick:function(){var e=Object(l.b)(r);x(e)},children:"Transform"}),p.length>0&&Object(j.jsx)("textarea",{cols:70,rows:30,value:JSON.stringify(p,null,2),readOnly:!0,className:"text-area",style:{display:"none"}}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"},children:Object(j.jsx)(u.a,{data:p})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,t){}},[[27,1,2]]]);
//# sourceMappingURL=main.3cc93633.chunk.js.map