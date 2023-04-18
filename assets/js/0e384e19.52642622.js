"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Introduction",description:"File-based Routing for React Native apps",sidebar_position:1,slug:"/"},i=void 0,l={unversionedId:"intro",id:"intro",title:"Introduction",description:"File-based Routing for React Native apps",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/router/docs/",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"File-based Routing for React Native apps",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Routing",permalink:"/router/docs/features/routing"}},p={},s=[{value:"Quick Start",id:"quick-start",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Configure the Babel plugin",id:"configure-the-babel-plugin",level:3},{value:"Usage",id:"usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Expo Router brings the best routing concepts from the web to native iOS and Android apps. Every file in the ",(0,r.kt)("strong",{parentName:"p"},"app")," directory automatically becomes a route in your mobile navigation, making it easier than ever to build, maintain, and scale your project. It's built on top of our powerful ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation suite")," enabling truly native navigation. The entire deep linking system is automatically generated live, so users can share links to any route in your app."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Run the following to create a project with ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router")," setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app@latest --example with-router\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/examples/tree/master/with-router"},"Example source"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("video",{src:"/router/demo/routing.mp4",controls:!0,style:{width:"100%"},autoplay:!0,loop:!0}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native")," Truly native navigation with the most cutting-edge developer experience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deep linking")," Every screen in your app is automatically deep linkable. Making any part of your app shareable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Offline-first")," Apps are cached and run offline-first, with automatic updates when you publish a new version. Handles all incoming native URLs without a network connection or server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scale")," Apps are built with a modular architecture that scales to any size. Refactoring and upgrading are a breeze due to the declarative nature of the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Iteration")," Universal Fast Refresh across iOS, Android, and web along with artifact memoziation in the bundler keep you moving fast at scale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-Platform")," Expo Router is a large step towards universal React apps. The same codebase can be used to build iOS, Android, and web apps.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Expo Router supports ",(0,r.kt)("inlineCode",{parentName:"p"},"expo@46.0.13")," and greater.")),(0,r.kt)("p",null,"Ensure your computer is ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/get-started/installation/"},"setup for running an Expo app"),"."),(0,r.kt)("p",null,"Create a new Expo project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router")," and peer dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar\n")),(0,r.kt)("p",null,"Then delete the entry point in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", or replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," to be explicit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "index.js"\n}\n')),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," in the root of your project. If it exists already, replace it with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import "expo-router/entry";\n')),(0,r.kt)("p",null,"Add a deep linking ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," and enable ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/customizing-metro/#web-support-how"},(0,r.kt)("inlineCode",{parentName:"a"},"metro")," web")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "scheme": "myapp",\n\n    "web": {\n      "bundler": "metro"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Ensure you're using at least ",(0,r.kt)("inlineCode",{parentName:"p"},"metro@0.76.0")," by setting a Yarn resolution or npm override."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("strong",{parentName:"p"},"Yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "resolutions": {\n    "metro": "0.76.0",\n    "metro-resolver": "0.76.0"\n  }\n}\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("strong",{parentName:"p"},"npm"),", this requires npm 8.3.0 or higher. You can install this with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i -g npm@^8.3.0"),". After that, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"overrides")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "overrides": {\n    "metro": "0.76.0",\n    "metro-resolver": "0.76.0"\n  }\n}\n')),(0,r.kt)("h3",{id:"configure-the-babel-plugin"},"Configure the Babel plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = function (api) {\n  api.cache(true);\n  return {\n    presets: ["babel-preset-expo"],\n    plugins: [require.resolve("expo-router/babel")],\n  };\n};\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Start the server with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx expo --clear\n")),(0,r.kt)("p",null,"Then open by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," for web (only tested against Metro web)."),(0,r.kt)("p",null,"Create files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory and they will be automatically added to the app."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you run into any issues, please check the ",(0,r.kt)("a",{parentName:"p",href:"/router/docs/troubleshooting"},"troubleshooting guide"),". If you're still running into problems, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/router/issues"},"open an issue"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/features/routing"},"Routing"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/features/linking"},"Linking"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/guides"},"Guides"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/react-navigation"},"Migrating from React Navigation"),".")))}c.isMDXComponent=!0}}]);