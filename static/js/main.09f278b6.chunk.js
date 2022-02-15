(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{17:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"fetchUsers",(function(){return j})),r.d(t,"getUser",(function(){return x})),r.d(t,"getRepos",(function(){return m}));var s,c,a=r(10),n=r(4),l=r.n(n),i=r(11),o=r.n(i),u=null===(s=e)||void 0===s||null===(c=Object({NODE_ENV:"production",PUBLIC_URL:"/github-explorer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"api.github.com"}))||void 0===c?void 0:c.REACT_APP_API_URL;function d(e){var t,r,s=null!==(t=e.response)&&void 0!==t?t:{},c=s.status,a=s.data;return null!==a&&void 0!==a&&a.message.includes("API rate limit exceeded")?{error:"GitHub API rate limit exceeded. Please wait and try again after a couple of minutes. Since this is a single page app that communicates with GitHub API directly without any intermediate backend server, there is no safe way to use a GitHub API Token securely. Hence the quick API rate limit exceeded error.",status:c}:{error:null!==(r=null===a||void 0===a?void 0:a.message)&&void 0!==r?r:e.message,status:c}}function j(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(l.a.mark((function e(t){var r,s,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URLSearchParams({q:t}),e.next=4,o.a.get("/search/users?".concat(r));case 4:return s=e.sent,c=s.data,a=c.items,e.abrupt("return",{users:a});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",d(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function x(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(l.a.mark((function e(t){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/users/".concat(t));case 3:return r=e.sent,s=r.data,e.abrupt("return",{user:s});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",d(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(l.a.mark((function e(t){var r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URLSearchParams({sort:"created",per_page:10}),e.next=4,o.a.get("/users/".concat(t,"/repos?").concat(r));case 4:return s=e.sent,c=s.data,e.abrupt("return",{repos:c});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",d(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}o.a.defaults.baseURL="https://".concat(u)}.call(this,r(18))},33:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r.n(s),a=r(27),n=r.n(a),l=(r(33),r(9)),i=r(2),o=r(0);function u(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"text-6xl mb-4",children:"Github Explorer"}),Object(o.jsxs)("p",{className:"mb-4 text-2xl font-light",children:["A React app to search GitHub profiles and see profile details. This project is built by Neha Lanjewar, owner of",Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:"https://fivepillarstech.com",children:" Five Pillars Tech"})}),"."]}),Object(o.jsxs)("p",{className:"text-lg text-gray-400",children:["Version: ",Object(o.jsx)("span",{className:"text-white",children:"1.0.0"})]}),Object(o.jsxs)("p",{className:"text-lg text-gray-400",children:["Technologies Used:",Object(o.jsx)("span",{className:"text-white",children:"React, React Router Dom, Tailwind CSS, Daisy UI, GitHub REST API."})]})]})}var d="SET_ALERT",j="REMOVE_ALERT",b=function(e){var t=e.message,r=e.type;return{type:d,payload:{message:t,type:r}}},x=function(){return{type:j}},h=Object(s.createContext)();function m(e){var t=e.children,r=function(){var e=null,t=Object(s.useReducer)(O,e),r=Object(p.a)(t,2),c=r[0],a=r[1];function n(e){var t=e.message,r=e.type;a(b({message:t,type:r})),setTimeout((function(){a(x())}),3e3)}return{alert:c,setAlert:n}}(),c=r.alert,a=r.setAlert;return Object(o.jsx)(h.Provider,{value:{alert:c,setAlert:a},children:t})}var p=r(7);function O(e,t){var r=t.type,s=t.payload;switch(r){case d:return s;case j:return null;default:return e}}var g="ERROR";function f(){var e=Object(s.useContext)(h).alert;if(null===e)return null;var t=null!==e&&void 0!==e?e:{},r=t.message,c=t.type;return Object(o.jsxs)("p",{className:"flex items-start mb-4 space-x-2",children:[c===g&&Object(o.jsxs)("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none",viewBox:"0 0 24 24",children:[Object(o.jsx)("circle",{cx:"12",cy:"12",r:"12",fill:"#FECDD3"}),Object(o.jsx)("path",{d:"M8 8l8 8M16 8l-8 8",stroke:"#B91C1C",strokeWidth:"2"})]}),Object(o.jsx)("span",{className:"flex-1 text-base font-semibold leading-7 text-white",children:Object(o.jsx)("strong",{children:r})})]})}function v(){var e=(new Date).getFullYear();return Object(o.jsx)("footer",{className:"footer p-10 bg-gray-700 text-primary-content footer-center",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("svg",{width:"50",height:"50",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"inline-block fill-current",children:Object(o.jsx)("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),Object(o.jsxs)("p",{children:["Copyright \xa9 ",e," All rights reserved"]})]})})}var N=r.p+"static/media/logo.c534c20a.svg";function y(e){var t=e.title;return Object(o.jsx)("nav",{className:"navbar mb-12 shadow-lg bg-neutral text-neutral-content",children:Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsxs)("div",{className:"flex-none px-2 mx-2",children:[Object(o.jsx)("img",{src:N,alt:"Logo",width:50,className:"inline pr-2 text-3xl"}),Object(o.jsx)(l.b,{to:"/",className:"text-lg font-bold align-middle",children:t})]}),Object(o.jsx)("div",{className:"flex-1 px-2 mx-2",children:Object(o.jsxs)("div",{className:"flex justify-end",children:[Object(o.jsx)(l.b,{to:"/",className:"btn btn-ghost btn-sm rounded-btn",children:"Home"}),Object(o.jsx)(l.b,{to:"/about",className:"btn btn-ghost btn-sm rounded-btn",children:"About"})]})})]})})}y.defaultProps={title:"GitHub Explorer"};var w=r.p+"static/media/spinner.e2ffacc9.gif";function R(){return Object(o.jsx)("div",{className:"w-100 mt-20",children:Object(o.jsx)("img",{src:w,alt:"Loading",width:180,className:"text-center mx-auto"})})}var _=function(){return{type:G}},E=function(e){return{type:I,payload:e}},S=function(e){return{type:F,payload:e}},U=function(){return{type:q}},T=function(e){return{type:H,payload:e}},P=function(e){return{type:D,payload:e}},C=function(e){return{type:B,payload:e}},k=function(e){return{type:M,payload:e}},L=function(e){return{type:V,payload:e}},A=function(e){return{type:W,payload:e}},G="GET_USERS_START",I="GET_USERS_SUCCESS",F="GET_USERS_ERROR",H="GET_USER_START",D="GET_USER_SUCCESS",B="GET_USER_ERROR",M="GET_USER_REPOS_START",V="GET_USER_REPOS_SUCCESS",W="GET_USER_REPOS_ERROR",q="CLEAR_USERS",K=r(17),z=r(3),J=Object(s.createContext)(),Y=function(e){var t=e.children,r=function(){var e=Object(s.useReducer)(te,$),t=Object(p.a)(e,2),r=t[0],c=t[1];function a(e){return n.apply(this,arguments)}function n(){return(n=Object(Q.a)(Z.a.mark((function e(t){var r,s,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(_()),e.next=3,K.fetchUsers(t);case 3:if(r=e.sent,s=r.users,!(a=r.error)){e.next=8;break}return e.abrupt("return",c(S(a)));case 8:c(E(s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return i.apply(this,arguments)}function i(){return(i=Object(Q.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(U());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=Object(Q.a)(Z.a.mark((function e(t){var r,s,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(T()),e.next=3,K.getUser(t);case 3:if(r=e.sent,s=r.user,!(a=r.error)){e.next=8;break}return e.abrupt("return",c(C(a)));case 8:c(P(s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return j.apply(this,arguments)}function j(){return(j=Object(Q.a)(Z.a.mark((function e(t){var r,s;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(k()),e.next=3,K.getRepos(t);case 3:if(r=e.sent,s=r.repos,!r.error){e.next=8;break}return e.abrupt("return",c(A()));case 8:c(L(s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{state:r,searchUsers:a,clearUsers:l,getUser:o,getUserRepos:d}}(),c=r.state,a=r.searchUsers,n=r.clearUsers,l=r.getUser,i=r.getUserRepos;return Object(o.jsx)(J.Provider,{value:Object(z.a)(Object(z.a)({},c),{},{searchUsers:a,clearUsers:n,getUser:l,getUserRepos:i}),children:t})},Q=r(10),X=r(4),Z=r.n(X),$={users:[],user:{},isLoading:!1,error:null,repos:[]};var ee=r(14);function te(e,t){var r,s,c=t.type,a=t.payload;switch(c){case G:case H:case M:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0});case I:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,users:a});case F:case B:case W:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,error:a});case q:return Object(z.a)(Object(z.a)({},e),{},{users:[]});case D:return Object(z.a)(Object(z.a)({},e),{},{user:a,isLoading:!1});case V:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,repos:Object(z.a)(Object(z.a)({},e.repos),{},Object(ee.a)({},null===(r=a[0])||void 0===r||null===(s=r.owner)||void 0===s?void 0:s.login,a))});default:return e}}function re(e){var t=e.name,r=e.avatarUrl;return Object(o.jsx)("div",{className:"custom-card-image mb-6 md:mb-0",children:Object(o.jsxs)("div",{className:"rounded-lg shadow-xl card image-full",children:[Object(o.jsx)("figure",{children:Object(o.jsx)("img",{src:r,alt:""})}),Object(o.jsx)("div",{className:"card-body justify-end",children:Object(o.jsx)("h2",{className:"card-title mb-0",children:t})})]})})}function se(e){var t=e.title,r=e.value,s=e.Icon;return Object(o.jsxs)("div",{className:"stat",children:[Object(o.jsx)("div",{className:"stat-figure text-secondary",children:Object(o.jsx)(s,{className:"text-3xl md:text-5xl"})}),Object(o.jsx)("div",{className:"stat-title pr-5",children:t}),Object(o.jsx)("div",{className:"stat-value pr-5 text-3xl md:text-4xl",children:r})]})}function ce(e){var t=e.title,r=e.value,s=e.externalLink;return r?Object(o.jsxs)("div",{className:"stat",children:[Object(o.jsx)("div",{className:"stat-title text-md",children:t}),Object(o.jsx)("div",{className:"stat-value text-lg",children:s?Object(o.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:r}):r})]}):null}function ae(e){var t=e.user,r=null!==t&&void 0!==t?t:{},s=r.name,c=r.type,a=r.hireable,n=r.bio,l=r.html_url,i=r.location,u=r.blog,d=r.twitter_username;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"mb-6",children:[Object(o.jsxs)("h1",{className:"text-3xl card-title",children:[s,Object(o.jsx)("div",{className:"ml-2 mr-1 badge badge-success",children:c}),a&&Object(o.jsx)("div",{className:"mx-1 badge badge-info",children:"Hireable"})]}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("div",{className:"mt-4 card-actions",children:Object(o.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"btn btn-outline",children:"Visit GitHub Profile"})})]}),Object(o.jsxs)("div",{className:"w-full rounded-lg shadow-md bg-base-100 stats",children:[Object(o.jsx)(ce,{title:"Location",value:i}),Object(o.jsx)(ce,{title:"Website",value:u,externalLink:"https://".concat(u)}),Object(o.jsx)(ce,{title:"Twitter",value:d,externalLink:"https://twitter.com/".concat(d)})]})]})}var ne=r(28),le=r.n(ne);function ie(e){var t=e.user,r=t.login,s=t.avatar_url;return Object(o.jsx)("div",{className:"card shadow-md compact side bg-base-100",children:Object(o.jsxs)("div",{className:"flex-row items-center space-x-4 card-body",children:[Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"avatar",children:Object(o.jsx)("div",{className:"rounded-full shadow w-14 h-14",children:Object(o.jsx)("img",{src:s,alt:"Profile"})})})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"card-title",children:r}),Object(o.jsxs)(l.b,{to:"/users/".concat(r),className:"text-base-content text-opacity-40",children:["Visit Profile"," "]})]})]})})}function oe(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),r=t[0],c=t[1],a=Object(s.useContext)(J),n=a.users,l=a.searchUsers,i=a.clearUsers,u=Object(s.useContext)(h).setAlert;return Object(o.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8",children:[Object(o.jsx)("div",{children:Object(o.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!Boolean(r))return u({message:"Please enter something",type:g});l(r)},children:Object(o.jsx)("div",{className:"form-control",children:Object(o.jsxs)("div",{className:"relative",children:[Object(o.jsx)("input",{type:"text",className:"w-full pr-40 bg-gray-200 input input-lg text-black",placeholder:"Search",value:r,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("button",{className:"absolute top-0 right-0 rounded-l-none w-36 btn btn-lg",type:"submit",children:"GO"})]})})})}),(null===n||void 0===n?void 0:n.length)>0&&Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){c(""),i()},className:"btn btn-ghost btn-lg",children:"Clear"})})]})}function ue(){var e=Object(s.useContext)(J),t=e.users,r=e.isLoading,c=e.error;return r?Object(o.jsx)(R,{}):c?Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Oops, there was an error!"}),Object(o.jsxs)("p",{children:["Error: ",c]})]}):Object(o.jsx)("div",{className:"grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2",children:null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(ie,{user:e},e.id)}))})}function de(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(oe,{}),Object(o.jsx)(ue,{})]})}ie.defaultProps={user:le.a.object.isRequired};var je=r(8);function be(){return Object(o.jsx)("div",{className:"hero",children:Object(o.jsx)("div",{className:"text-center hero-content",children:Object(o.jsxs)("div",{className:"max-w-lg",children:[Object(o.jsx)("h1",{className:"text-8xl font-bold mb-8",children:"Oops"}),Object(o.jsx)("p",{className:"text-5xl mb-8",children:"404 - Page not found"}),Object(o.jsxs)(l.b,{className:"btn btn-primary btn-lg",to:"/",children:[Object(o.jsx)(je.c,{className:"mr-2"}),"Back to Home"]})]})})})}function xe(e){var t=e.repo,r=t.name,s=t.description,c=t.html_url,a=t.forks,n=t.open_issues,l=t.watchers_count,i=t.stargazers_count;return Object(o.jsx)("div",{className:"mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 text-white",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h3",{className:"mb-2 text-xl font-semibold",children:Object(o.jsxs)("a",{target:"_blank",rel:"noreferrer",href:c,children:[Object(o.jsx)(je.e,{className:"inline mr-1"}),r]})}),Object(o.jsx)("p",{className:"mb-3",children:s}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mr-2 badge badge-info badge-lg",children:[Object(o.jsx)(je.b,{className:"mr-2"})," ",l]}),Object(o.jsxs)("div",{className:"mr-2 badge badge-success badge-lg",children:[Object(o.jsx)(je.f,{className:"mr-2"})," ",i]}),Object(o.jsxs)("div",{className:"mr-2 badge badge-error badge-lg",children:[Object(o.jsx)(je.d,{className:"mr-2"})," ",n]}),Object(o.jsxs)("div",{className:"mr-2 badge badge-warning badge-lg",children:[Object(o.jsx)(je.j,{className:"mr-2"})," ",a]})]})]})})}function he(e){var t=e.repos;return t&&t.length?Object(o.jsx)("div",{className:"rounded-lg shadow-lg card bg-base-100",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h2",{className:"text-3xl my-4 font-bold card-title",children:"Latest Repositories"}),t.map((function(e){return Object(o.jsx)(xe,{repo:e},e.id)}))]})}):null}function me(){var e=Object(i.g)().username,t=Object(s.useContext)(J),r=t.getUser,c=t.isLoading,a=t.user,n=t.getUserRepos,u=t.repos[e];if(Object(s.useEffect)((function(){r(e),u||n(e)}),[e,u]),c)return Object(o.jsx)(R,{});var d=null!==a&&void 0!==a?a:{},j=d.avatar_url,b=d.name,x=d.followers,h=d.following,m=d.public_repos,p=d.public_gists;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"w-full mx-auto lg lg:w-10/12",children:[Object(o.jsx)("div",{className:"mb-4",children:Object(o.jsx)(l.b,{to:"/",className:"btn btn-ghost",children:"Back To Search"})}),Object(o.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8",children:[Object(o.jsx)(re,{name:b,avatarUrl:j}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)(ae,{user:a})})]}),Object(o.jsxs)("div",{className:"w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats",children:[Object(o.jsx)(se,{title:"Followers",value:x,Icon:je.i}),Object(o.jsx)(se,{title:"Following",value:h,Icon:je.h}),Object(o.jsx)(se,{title:"Public Repos",value:m,Icon:je.a}),Object(o.jsx)(se,{title:"Public Gists",value:p,Icon:je.g})]}),Object(o.jsx)(he,{repos:u})]})})}var pe=function(){return Object(o.jsx)(Y,{children:Object(o.jsx)(m,{children:Object(o.jsx)(l.a,{basename:"github-explorer",children:Object(o.jsxs)("div",{className:"flex flex-col justify-between h-screen",children:[Object(o.jsx)(y,{}),Object(o.jsxs)("main",{className:"container mx-auto px-3 pb-12",children:[Object(o.jsx)(f,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(de,{})}),Object(o.jsx)(i.a,{path:"/about",element:Object(o.jsx)(u,{})}),Object(o.jsx)(i.a,{path:"/users/:username",element:Object(o.jsx)(me,{})}),Object(o.jsx)(i.a,{path:"/notfound",element:Object(o.jsx)(be,{})}),Object(o.jsx)(i.a,{path:"/*",element:Object(o.jsx)(be,{})})]})]}),Object(o.jsx)(v,{})]})})})})},Oe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,56)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;r(e),s(e),c(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(pe,{})}),document.getElementById("root")),Oe()}},[[55,1,2]]]);
//# sourceMappingURL=main.09f278b6.chunk.js.map