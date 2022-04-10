"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},p="Docker",d={unversionedId:"Installation/docker",id:"Installation/docker",title:"Docker",description:"Install TeleDrive with docker-compose.",source:"@site/docs/Installation/docker.md",sourceDirName:"Installation",slug:"/Installation/docker",permalink:"/docs/Installation/docker",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/docs/docs/Installation/docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Manual",permalink:"/docs/Installation/manual"}},u={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Build and Run",id:"build-and-run",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Common Issues",id:"common-issues",level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docker"},"Docker"),(0,l.kt)("p",null,"Install TeleDrive with docker-compose."),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"Get started by installing all needed services and define all variables."),(0,l.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," version 20.10.13 or above")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker compose")," version 2.3.3 or above")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define all .env variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"./docker/.env"),", you can copy from ",(0,l.kt)("inlineCode",{parentName:"p"},"./docker/.env.example")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cp ./docker/.env.example ./docker/.env\n")),(0,l.kt)("p",{parentName:"li"},"Explanation:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Hide the logs for production, default: develop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Set custom application port for running, default: 4000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID from your Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application hash from Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADMIN_USERNAME"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Telegram username of the admin TeleDrive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Database password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt JWT web token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FILES_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt public files")))))),(0,l.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,l.kt)("p",null,"Build and run with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker-compose up -d\n")),(0,l.kt)("p",null,"Done! You can now open ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:4000"},"localhost:4000")," in your browser \ud83c\udf8a"),(0,l.kt)("p",null,"View the app logs with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker-compose logs teledrive --follow\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note.")," ",(0,l.kt)("em",{parentName:"p"},"You need to set ",(0,l.kt)("inlineCode",{parentName:"em"},"ENV=develop")," in the variables to logging all events.")),(0,l.kt)("p",null,"Stop the services by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker-compose down\n")),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("p",null,"Upgrade to the latest version of TeleDrive with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git pull origin main    # or, staging for the latest updates\n\ncd docker\ndocker-compose down\ndocker-compose up --build --force-recreate -d\ndocker image prune -f   # remove dangling images\n")),(0,l.kt)("h2",{id:"common-issues"},"Common Issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"App not running after I run ",(0,l.kt)("inlineCode",{parentName:"em"},"up -d"))),(0,l.kt)("p",{parentName:"li"},"Try to up the services again with command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker\ndocker-compose up -d\n")))),(0,l.kt)("p",null,"Next, you need to reverse proxy the application to your domain with ",(0,l.kt)("a",{parentName:"p",href:"/docs/deployment/nginx"},"Nginx"),"."))}m.isMDXComponent=!0}}]);