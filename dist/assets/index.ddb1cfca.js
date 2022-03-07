import{r as e,D as A,F as C,T as L,C as P,P as S,a as w,g as D,S as O,s as x,M as i,U as f,b as I,c as N,d as B,L as F,G as M,e as _,A as b,u as T,f as k,m as $,B as E,N as p,h as u,i as z,R as g,j as o,W as j,k as U,O as H,l as q}from"./vendor.d7d50fbc.js";const G=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerpolicy&&(m.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?m.credentials="include":s.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(s){if(s.ep)return;s.ep=!0;const m=a(s);fetch(s.href,m)}};G();var r=(t=>(t[t.Login=0]="Login",t[t.Register=1]="Register",t[t.Dashboard=2]="Dashboard",t[t.Category=3]="Category",t[t.Tag=4]="Tag",t[t.Comment=5]="Comment",t[t.Advertisement=6]="Advertisement",t[t.Article=7]="Article",t[t.ArticleList=8]="ArticleList",t[t.ArticleCreate=9]="ArticleCreate",t[t.ArticleEdit=10]="ArticleEdit",t[t.Setting=11]="Setting",t[t.Profile=12]="Profile",t[t.SiteOption=13]="SiteOption",t))(r||{});const y=new Map([{key:0,path:"/login"},{key:1,path:"/register"},{key:2,name:"\u6570\u636E\u6982\u89C8",path:"/dashboard",icon:e.exports.createElement(A,null)},{key:3,name:"\u5206\u7C7B\u7BA1\u7406",path:"/category",icon:e.exports.createElement(C,null)},{key:4,name:"\u6807\u7B7E\u7BA1\u7406",path:"/tag",icon:e.exports.createElement(L,null)},{key:5,name:"\u8BC4\u8BBA\u7BA1\u7406",path:"/comment",icon:e.exports.createElement(P,null)},{key:6,name:"\u5E7F\u544A\u7BA1\u7406",path:"/advertisement",icon:e.exports.createElement(S,null)},{key:7,name:"\u6587\u7AE0\u7BA1\u7406",path:"/article",icon:e.exports.createElement(w,null)},{key:8,name:"\u6587\u7AE0\u5217\u8868",path:"/article/list",subPath:"list"},{key:9,name:"\u53D1\u8868\u6587\u7AE0",path:"/article/create",subPath:"create"},{key:10,name:"\u7F16\u8F91\u6587\u7AE0",path:"/article/edit/:id",subPath:"edit/:id",pather(t){return D(this.path,{id:t})}},{key:11,name:"\u7CFB\u7EDF\u8BBE\u7F6E",path:"/setting",icon:e.exports.createElement(O,null)},{key:12,name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/setting/profile",subPath:"profile"},{key:13,name:"\u7AD9\u70B9\u914D\u7F6E",path:"/setting/option",subPath:"option"}].map(t=>[t.key,t])),n=t=>y.get(t);const W=x.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

  .trigger {
    padding: 0 24px;
    font-size: 16px;
    line-height: 64px;
    cursor: pointer;
    transition: background-color .3s;
  }

  .trigger:hover, .link:hover, .github:hover {
    background-color: #f0f2f5;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link, .github {
      padding: 0 16px;
      font-size: 16px;
      line-height: 64px;
      cursor: pointer;
      transition: background-color .3s;
    }

    .user {
      margin-left: 16px;
      cursor: pointer;
    }
  }
`,Y=t=>{const l=e.exports.useCallback(({key:c})=>{switch(c){case"logout":console.log("logout");break;default:console.log("other");break}},[]),a=e.exports.useMemo(()=>e.exports.createElement(i,{onClick:l},e.exports.createElement(i.Item,{key:"profile",icon:e.exports.createElement(f,null)},"\u4E2A\u4EBA\u4E2D\u5FC3"),e.exports.createElement(i.Item,{key:"logout",icon:e.exports.createElement(I,null)},"\u9000\u51FA\u767B\u5F55")),[]);return e.exports.createElement(W,null,e.exports.createElement("div",{className:"trigger",onClick:t.setCollapsed},t.collapsed?e.exports.createElement(N,null):e.exports.createElement(B,null)),e.exports.createElement("div",{className:"right"},e.exports.createElement("div",{className:"link"},e.exports.createElement(F,null)),e.exports.createElement("div",{className:"github"},e.exports.createElement(M,null)),e.exports.createElement(_,{overlay:a,placement:"bottomRight",arrow:!0},e.exports.createElement(b,{icon:e.exports.createElement(f,null),className:"user"}))))},J=t=>{var l,a,c,s;return e.exports.createElement("svg",{className:t.className,width:(l=t.width)!=null?l:"24px",height:(a=t.height)!=null?a:"24px",onClick:t.onClick,"aria-hidden":"true",style:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}},e.exports.createElement("use",{xlinkHref:`#${(c=t.prefix)!=null?c:"icon"}-${t.symbolId}`,fill:(s=t.color)!=null?s:"#ccc"}))},Q=x.div`
  .logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-title {
      font-size: 18px;
      color: #1890ff;
      margin-left: 20px;
    }
  }

  .user-info {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,V=t=>{const l=T(),a=k();return e.exports.createElement(Q,null,e.exports.createElement("div",{className:"logo"},e.exports.createElement(J,{symbolId:"logo",width:"32px",height:"32px"}),!t.collapsed&&e.exports.createElement("span",{className:"logo-title"},"ADMIN SYSTEM")),e.exports.createElement("div",{className:"user-info"},e.exports.createElement("div",{className:"avatar"},e.exports.createElement(b,{size:52,src:"https://admin.evanone.site/img/avatar.adf3a350.png"})),!t.collapsed&&e.exports.createElement("div",{className:"info",style:{marginLeft:10}},e.exports.createElement("div",{className:"name",style:{fontSize:16,fontWeight:600}},"Evan"),e.exports.createElement("div",null,"\u6210\u90FD @ undefined"))),e.exports.createElement(i,{mode:"inline",defaultSelectedKeys:[n(r.Dashboard).path],onClick:c=>l(c.key),selectedKeys:[a.pathname]},e.exports.createElement(i.Item,{key:n(r.Dashboard).path,icon:n(r.Dashboard).icon},n(r.Dashboard).name),e.exports.createElement(i.SubMenu,{key:n(r.Article).path,icon:n(r.Article).icon,title:n(r.Article).name},e.exports.createElement(i.Item,{key:n(r.ArticleList).path},n(r.ArticleList).name),e.exports.createElement(i.Item,{key:n(r.ArticleCreate).path},n(r.ArticleCreate).name)),e.exports.createElement(i.Item,{key:n(r.Category).path,icon:n(r.Category).icon},n(r.Category).name),e.exports.createElement(i.Item,{key:n(r.Tag).path,icon:n(r.Tag).icon},n(r.Tag).name),e.exports.createElement(i.Item,{key:n(r.Comment).path,icon:n(r.Comment).icon},n(r.Comment).name),e.exports.createElement(i.Item,{key:n(r.Advertisement).path,icon:n(r.Advertisement).icon},n(r.Advertisement).name),e.exports.createElement(i.SubMenu,{key:n(r.Setting).path,icon:n(r.Setting).icon,title:n(r.Setting).name},e.exports.createElement(i.Item,{key:n(r.Profile).path},n(r.Profile).name),e.exports.createElement(i.Item,{key:n(r.SiteOption).path},n(r.SiteOption).name))))};const X=x.div`
  .breadcrumb {
    padding: 16px 24px;
  }

  .content {
    margin: 0 24px;
    padding: 16px;
    background-color: #ffffff;
  }
`,Z=t=>{const l=k(),a=Array.from(y.values()).find(c=>$(c.path,l.pathname));return e.exports.createElement(X,null,e.exports.createElement(E,{className:"breadcrumb"},e.exports.createElement(E.Item,{href:n(r.Dashboard).path},n(r.Dashboard).icon,e.exports.createElement("span",null,n(r.Dashboard).name)),n(r.Dashboard).path!==(a==null?void 0:a.path)&&e.exports.createElement(E.Item,{href:a==null?void 0:a.path},a==null?void 0:a.icon,e.exports.createElement("span",null,a==null?void 0:a.name))),e.exports.createElement("div",{className:"content"},t.children))},R=x.div`
  .frame-layout {
    min-height: 100vh;
  }

  .frame-header {
    background-color: #ffffff;
    padding: 0;
  }
`,K=t=>{const[l,a]=e.exports.useState(!1);return localStorage.getItem("token")?e.exports.createElement(R,null,e.exports.createElement(u,{className:"frame-layout"},e.exports.createElement(u.Sider,{theme:"light",width:240,trigger:null,collapsible:!0,collapsed:l},e.exports.createElement(V,{collapsed:l})),e.exports.createElement(u,null,e.exports.createElement(u.Header,{className:"frame-header"},e.exports.createElement(Y,{collapsed:l,setCollapsed:()=>a(!l)})),e.exports.createElement(u.Content,null,e.exports.createElement(Z,null,t.children))))):e.exports.createElement(p,{to:n(r.Login).path})},d=z.create({baseURL:"https://api.evanone.site",timeout:1e4});d.interceptors.request.use(t=>{const l=localStorage.getItem("token");return t.headers=t.headers||{},t.headers.Authorization=`Bearer ${l}`,t},t=>Promise.reject(t));d.interceptors.response.use(t=>Promise.resolve(t.data),t=>{var l,a;return t.response.status===401&&localStorage.removeItem("token"),Promise.reject((a=(l=t.response)==null?void 0:l.data)==null?void 0:a.message)});const ee={login(t){return d.post("/users/login",t)},register(t){return d.post("/users/register",t)},getUserInfo(){return d.get("/users")}},te=()=>(e.exports.useEffect(()=>{ee.getUserInfo().then(t=>{console.log(t)})},[]),e.exports.createElement("div",null,"Dashboard")),re=()=>e.exports.createElement("div",null,"Category"),ne=()=>e.exports.createElement("div",null,"Tag"),ae=()=>e.exports.createElement("div",null,"article list"),v=()=>e.exports.createElement("div",null,"article edit"),le=()=>e.exports.createElement(g,null,e.exports.createElement(o,{index:!0,element:e.exports.createElement(p,{to:n(r.ArticleList).subPath,replace:!0})}),e.exports.createElement(o,{path:n(r.ArticleList).subPath,element:e.exports.createElement(ae,null)}),e.exports.createElement(o,{path:n(r.ArticleCreate).subPath,element:e.exports.createElement(v,null)}),e.exports.createElement(o,{path:n(r.ArticleEdit).subPath,element:e.exports.createElement(v,null)}),e.exports.createElement(o,{path:"*",element:e.exports.createElement(p,{to:n(r.ArticleList).path,replace:!0})})),oe=()=>e.exports.createElement("div",null,"Comment"),se=()=>e.exports.createElement("div",null,"Login"),ie=()=>e.exports.createElement("div",null,"register"),ce=()=>e.exports.createElement("div",null,"advertisement"),me=()=>e.exports.createElement("div",null,"Profile"),pe=()=>e.exports.createElement("div",null,"SiteOption"),ue=()=>e.exports.createElement(g,null,e.exports.createElement(o,{index:!0,element:e.exports.createElement(p,{to:n(r.Profile).subPath,replace:!0})}),e.exports.createElement(o,{path:n(r.Profile).subPath,element:e.exports.createElement(me,null)}),e.exports.createElement(o,{path:n(r.SiteOption).subPath,element:e.exports.createElement(pe,null)}),e.exports.createElement(o,{path:"*",element:e.exports.createElement(p,{to:n(r.Profile).path,replace:!0})}));const de=j`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .ant-menu-inline {
    border: none;
  }

  .ant-menu-inline .ant-menu-item::after {
    border: none;
  }

  .ant-menu-sub.ant-menu-inline {
    background: #ffffff;
  }
`,xe=()=>e.exports.createElement("div",{className:"app"},e.exports.createElement(de,null),e.exports.createElement(U,null,e.exports.createElement(g,null,e.exports.createElement(o,{path:n(r.Login).path,element:e.exports.createElement(se,null)}),e.exports.createElement(o,{path:n(r.Register).path,element:e.exports.createElement(ie,null)}),e.exports.createElement(o,{path:"/",element:e.exports.createElement(K,null,e.exports.createElement(H,null))},e.exports.createElement(o,{index:!0,element:e.exports.createElement(p,{to:n(r.Dashboard).path,replace:!0})}),e.exports.createElement(o,{path:n(r.Dashboard).path,element:e.exports.createElement(te,null)}),e.exports.createElement(o,{path:n(r.Category).path,element:e.exports.createElement(re,null)}),e.exports.createElement(o,{path:n(r.Tag).path,element:e.exports.createElement(ne,null)}),e.exports.createElement(o,{path:n(r.Comment).path,element:e.exports.createElement(oe,null)}),e.exports.createElement(o,{path:n(r.Advertisement).path,element:e.exports.createElement(ce,null)}),e.exports.createElement(o,{path:`${n(r.Article).path}/*`,element:e.exports.createElement(le,null)}),e.exports.createElement(o,{path:`${n(r.Setting).path}/*`,element:e.exports.createElement(ue,null)})))));if(typeof window!="undefined"){let t=function(){var l=document.body,a=document.getElementById("__svg__icons__dom__");a||(a=document.createElementNS("http://www.w3.org/2000/svg","svg"),a.style.position="absolute",a.style.width="0",a.style.height="0",a.id="__svg__icons__dom__",a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),a.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-logo"><path d="M612.267 130.133c-17.067-4.266-34.134 6.4-38.4 23.467L390.4 832c-4.267 17.067 6.4 34.133 23.467 38.4 2.133 0 6.4 2.133 8.533 2.133 14.933 0 27.733-8.533 29.867-23.466L633.6 168.533c6.4-17.066-4.267-34.133-21.333-38.4zm403.2 347.734L744.533 206.933c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L947.2 499.2 697.6 748.8c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l270.934-270.933c6.4-6.4 8.533-14.934 8.533-23.467s-4.267-14.933-8.533-21.333zM326.4 206.933c-12.8-12.8-32-12.8-44.8 0L8.533 477.867C4.267 484.267 0 490.667 0 499.2s4.267 17.067 8.533 23.467L279.467 793.6c6.4 6.4 14.933 8.533 23.466 8.533S320 800 326.4 793.6c12.8-12.8 12.8-32 0-44.8L76.8 499.2l247.467-247.467c12.8-12.8 12.8-32 2.133-44.8z" fill="#1890FF" /></symbol>',l.insertBefore(a,l.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}q.render(e.exports.createElement(xe,null),document.getElementById("root"));
