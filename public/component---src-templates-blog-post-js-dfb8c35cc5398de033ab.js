(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yZlL:function(e,t,a){"use strict";a.r(t);var r=a("9Hrx"),l=a("q1tI"),n=a.n(l),i=a("Wbzz"),o=a("yBb5"),s=a("/4kY"),c=a("IP2g"),p=a("wHSu"),f=function(e){function t(t){return e.call(this,t)||this}Object(r.a)(t,e);var a=t.prototype;return a.renderTitleBar=function(e,t,a,r,l){return n.a.createElement("div",{className:"post-footer"},n.a.createElement("ul",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",listStyle:"none",padding:0,marginBottom:"18px",marginTop:"0px"}},a&&n.a.createElement(i.Link,{to:a.fields.slug,rel:"start",style:{paddingRight:"36px",color:"#0f0",fontSize:"18px",fontFamily:"Courier"}},n.a.createElement(c.a,{icon:p.a,style:{verticalAlign:"-4px"}}),n.a.createElement("span",{style:{color:"#fff"}},"START")),e&&n.a.createElement(i.Link,{to:e.fields.slug,rel:"prev",style:{paddingRight:"90px",color:"#0f0",fontSize:"18px",fontFamily:"Courier"}},n.a.createElement(c.a,{icon:p.c,style:{verticalAlign:"-4px"}}),n.a.createElement("span",{style:{color:"#fff"}},"PREV")),n.a.createElement("div",{className:"article"},n.a.createElement("p",{className:"subtitle"},n.a.createElement("span",{style:{color:"#0f0"}}," ",l.frontmatter.title)," ",l.frontmatter.date)),t&&n.a.createElement(i.Link,{to:t.fields.slug,rel:"next",style:{paddingLeft:"90px",color:"#0f0",fontSize:"18px",fontFamily:"Courier"}},n.a.createElement("span",{style:{color:"#fff"}},"NEXT"),n.a.createElement(c.a,{icon:p.d,style:{verticalAlign:"-4px"}})),r&&n.a.createElement(i.Link,{to:r.fields.slug,rel:"end",style:{paddingLeft:"36px",color:"#0f0",fontSize:"18px",fontFamily:"Courier"}},n.a.createElement("span",{style:{color:"#fff"}},"END"),n.a.createElement(c.a,{icon:p.b,style:{verticalAlign:"-4px"}}))))},a.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,a=t.previous,r=t.next,l=t.start,i=t.end;return n.a.createElement(o.a,null,n.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),this.renderTitleBar(a,r,l,i,e),n.a.createElement("article",{dangerouslySetInnerHTML:{__html:e.html}}),this.renderTitleBar(a,r,l,i,e))},t}(n.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dfb8c35cc5398de033ab.js.map