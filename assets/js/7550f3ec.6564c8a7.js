"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[5362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"MongoDB Cheatsheet"},l=void 0,s={unversionedId:"mongodb-cheatsheet",id:"mongodb-cheatsheet",title:"MongoDB Cheatsheet",description:"Published on December 23, 2020",source:"@site/docs/mongodb-cheatsheet.md",sourceDirName:".",slug:"/mongodb-cheatsheet",permalink:"/docs/mongodb-cheatsheet",tags:[],version:"current",frontMatter:{title:"MongoDB Cheatsheet"},sidebar:"docs",previous:{title:"MongoDB Setup",permalink:"/docs/mongodb-setup"},next:{title:"NodeJS Auto-reload server",permalink:"/docs/nodejs-auto-reload"}},u=[{value:"Print a collection&#39;s documents",id:"print-a-collections-documents",children:[],level:2},{value:"Delete documents",id:"delete-documents",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Published on December 23, 2020"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This document was migrated from ",(0,a.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/mongodb/cheat-sheet/"},"DigiDocs"))),(0,a.kt)("p",null,"The purpose of this page is to summarise key ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," commands you will often use."),(0,a.kt)("h2",{id:"print-a-collections-documents"},"Print a collection's documents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Select the database\nshow dbs\nuse <db-name>\n\n# Show all collections in the database\nshow collections\n\n# Print out all documents in the database\ndb.<collection-name>.find()\n\n# Print out in an easy-to-read but less compact format\ndb.<collection-name>.find().pretty()\n")),(0,a.kt)("h2",{id:"delete-documents"},"Delete documents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"show dbs\nuse <db-name>\n\n# Show all collections in the database\nshow collections\n\n# Remove all documents in the collection\ndb.<collection-name>.remove( { } )\n\n# See reference for more information\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/mongodb/cheat-sheet/"},"Original copy of this document at DigiDocs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/mongo-shell/"},"MongoDB's official guide to mongo Shell Quick Reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/method/db.collection.remove/"},"MongoDB's official guide to db.collection.remove()"))))}m.isMDXComponent=!0}}]);