import{s as b,u as g,j as s,P,_ as w,c as L,h as k,e as B,f as T,B as A,g as C,A as D,k as O,l as S,r as x,i as G,m as H,n as W,C as E}from"./sanity-15fe1a7b.js";const R=o=>{let{index:a,menuItems:t,menuItemGroups:i,title:c}=o;const{features:d}=L(),{collapsed:l,isLast:u}=k(),r=u&&!l?-1:0;return s.jsx(B,{actions:s.jsx(T,{menuItems:t,menuItemGroups:i}),backButton:d.backButton&&a>0&&s.jsx(A,{as:C,"data-as":"a",icon:D,mode:"bleed"}),tabIndex:r,title:c})};var I=Object.freeze,z=Object.defineProperty,F=(o,a)=>I(z(o,"raw",{value:I(a||o.slice())})),y;const K=b.hr(y||(y=F([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(o){const{childItemId:a,items:t,isActive:i,layout:c,showIcons:d,title:l}=o,{collapsed:u}=O(),r=S(t==null?void 0:t.filter(e=>e.type!=="divider")),m=x.useCallback(e=>{var n;return((n=t==null?void 0:t.find((p,f)=>f===e))==null?void 0:n.type)==="divider"},[t]),h=x.useCallback(e=>{var n;const p=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof p<"u"?p!==!1:d!==!1},[d]),v=x.useCallback((e,n)=>{const{virtualIndex:p}=n;if(e.type==="divider")return s.jsx(G,{marginTop:1,marginBottom:2,children:s.jsx(K,{})},"divider-".concat(p));const f=!i&&a===e.id,_=i&&a===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return s.jsx(H,{icon:h(e)?e.icon:!1,id:e.id,layout:c,marginBottom:1,pressed:f,schemaType:e.schemaType,selected:_,title:r(e).title,value:j},e.id)},[a,r,i,c,h]);return s.jsx(W,{overflow:u?"hidden":"auto",children:t&&t.length>0&&s.jsx(E,{activeItemDataAttr:"data-hovered",ariaLabel:l,canReceiveFocus:!0,focusRingOffset:-3,getItemDisabled:m,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,padding:2,paddingBottom:1,renderItem:v,wrapAround:!1})})}function q(o){const{childItemId:a,index:t,isActive:i,isSelected:c,pane:d,paneKey:l}=o,{defaultLayout:u,displayOptions:r,items:m,menuItems:h,menuItemGroups:v}=d,e=(r==null?void 0:r.showIcons)!==!1,{title:n}=g(d);return s.jsxs(P,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:c,children:[w,s.jsx(R,{index:t,menuItems:h,menuItemGroups:v,title:n}),s.jsx(M,{childItemId:a,isActive:i,items:m,layout:u,showIcons:e,title:n},l)]})}export{q as default};
