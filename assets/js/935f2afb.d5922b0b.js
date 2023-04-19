"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/router/docs/","docId":"intro"},{"type":"category","label":"Features","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Routing","href":"/router/docs/features/routing","docId":"features/routing"},{"type":"link","label":"Linking","href":"/router/docs/features/linking","docId":"features/linking"},{"type":"link","label":"404s","href":"/router/docs/features/unmatched","docId":"features/unmatched"},{"type":"link","label":"Errors","href":"/router/docs/features/errors","docId":"features/errors"},{"type":"link","label":"Splash Screen","href":"/router/docs/features/splash","docId":"features/splash"},{"type":"link","label":"Head","href":"/router/docs/features/head","className":"hidden","docId":"features/head"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Building a layout","href":"/router/docs/guides/","docId":"guides/index"},{"type":"link","label":"Configuring the header bar","href":"/router/docs/guides/headers","docId":"guides/headers"},{"type":"link","label":"Header buttons","href":"/router/docs/guides/header-buttons","docId":"guides/header-buttons"},{"type":"link","label":"Nesting navigators","href":"/router/docs/guides/nesting-navigators","docId":"guides/nesting-navigators"},{"type":"link","label":"Authentication","href":"/router/docs/guides/auth","docId":"guides/auth"},{"type":"link","label":"Hosting","href":"/router/docs/guides/hosting","docId":"guides/hosting"},{"type":"link","label":"Modals","href":"/router/docs/guides/modals","docId":"guides/modals"},{"type":"link","label":"Root Layout","href":"/router/docs/guides/root-layout","docId":"guides/root-layout"},{"type":"link","label":"Tabs","href":"/router/docs/guides/tabs","docId":"guides/tabs"},{"type":"link","label":"Universal Links","href":"/router/docs/guides/universal-links","docId":"guides/universal-links"}],"href":"/router/docs/category/guides"},{"type":"category","label":"Migration","collapsible":false,"collapsed":false,"items":[{"type":"category","label":"React Navigation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Link","href":"/router/docs/migration/react-navigation/link","docId":"migration/react-navigation/link"},{"type":"link","label":"Navigation Container","href":"/router/docs/migration/react-navigation/navigation-container","docId":"migration/react-navigation/navigation-container"},{"type":"link","label":"Native Stack","href":"/router/docs/migration/react-navigation/native-stack","docId":"migration/react-navigation/native-stack"},{"type":"link","label":"Moving between screens","href":"/router/docs/migration/react-navigation/navigating","docId":"migration/react-navigation/navigating"},{"type":"link","label":"Passing parameters to the routes","href":"/router/docs/migration/react-navigation/params","docId":"migration/react-navigation/params"},{"type":"link","label":"Custom navigators","href":"/router/docs/migration/react-navigation/custom-navigators","docId":"migration/react-navigation/custom-navigators"},{"type":"link","label":"Drawer navigation","href":"/router/docs/migration/react-navigation/drawer-navigator","docId":"migration/react-navigation/drawer-navigator"},{"type":"link","label":"Drawer","href":"/router/docs/migration/react-navigation/drawer","docId":"migration/react-navigation/drawer"},{"type":"link","label":"Navigation State","href":"/router/docs/migration/react-navigation/navigation-state","docId":"migration/react-navigation/navigation-state"},{"type":"link","label":"Screen tracking for analytics","href":"/router/docs/migration/react-navigation/screen-tracking","docId":"migration/react-navigation/screen-tracking"},{"type":"link","label":"Screen","href":"/router/docs/migration/react-navigation/screen","docId":"migration/react-navigation/screen"},{"type":"link","label":"Stack","href":"/router/docs/migration/react-navigation/stack","docId":"migration/react-navigation/stack"},{"type":"link","label":"Themes","href":"/router/docs/migration/react-navigation/themes","docId":"migration/react-navigation/themes"},{"type":"link","label":"useLinkTo","href":"/router/docs/migration/react-navigation/use-link-to","docId":"migration/react-navigation/use-link-to"},{"type":"link","label":"useNavigation","href":"/router/docs/migration/react-navigation/use-navigation","docId":"migration/react-navigation/use-navigation"},{"type":"link","label":"useRoute","href":"/router/docs/migration/react-navigation/use-route","docId":"migration/react-navigation/use-route"}],"href":"/router/docs/category/react-navigation"}]},{"type":"link","label":"FAQ","href":"/router/docs/faq","docId":"faq"},{"type":"link","label":"Troubleshooting","href":"/router/docs/troubleshooting","docId":"troubleshooting"},{"type":"category","label":"Experimental","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Bundle Splitting","href":"/router/docs/lab/bundle-splitting","className":"hidden","docId":"lab/bundle-splitting"},{"type":"link","label":"Testing with Jest","href":"/router/docs/lab/jest","className":"hidden","docId":"lab/jest"},{"type":"link","label":"Custom Root HTML","href":"/router/docs/lab/root-html","className":"hidden","docId":"lab/root-html"},{"type":"link","label":"window.location","href":"/router/docs/lab/runtime-location","docId":"lab/runtime-location"},{"type":"link","label":"Styling","href":"/router/docs/lab/styles","docId":"lab/styles"},{"type":"link","label":"TypeScript","href":"/router/docs/lab/typescript","docId":"lab/typescript"}]}]},"docs":{"faq":{"id":"faq","title":"FAQ","description":"Discuss them with us on GitHub.","sidebar":"tutorialSidebar"},"features/errors":{"id":"features/errors","title":"Errors","description":"Expo Router enables fine-tuned error handling to enable a more opinionated data loading strategy in the future. You can export a nested ErrorBoundary component from any route to intercept and format component-level errors using React Error Boundaries:","sidebar":"tutorialSidebar"},"features/head":{"id":"features/head","title":"Head","description":"This guide refers to upcoming Expo Router features, all of which are experimental.","sidebar":"tutorialSidebar"},"features/linking":{"id":"features/linking","title":"Linking","description":"Use the ` component to navigate between pages. This is conceptually similar to the ` element in HTML.","sidebar":"tutorialSidebar"},"features/routing":{"id":"features/routing","title":"Routing","description":"The file-based routing convention enables developers to structure their app in a logic and intuitive way. Expo Router uses this convention to optimize the app by generating native deep links and web routes automatically.","sidebar":"tutorialSidebar"},"features/splash":{"id":"features/splash","title":"Splash Screen","description":"Expo Router automatically orchestrates the native splash screen to keep it visible until the first route is rendered, this applies to any route that the user deep links into. To enable this functionality, install expo-splash-screen in your project.","sidebar":"tutorialSidebar"},"features/unmatched":{"id":"features/unmatched","title":"404s","description":"Native apps don\'t have a server so there are technically no 404s. However, if you\'re implementing a router universally, then it makes sense to handle missing routes. This is done automatically for each app, but you can also customize it.","sidebar":"tutorialSidebar"},"guides/auth":{"id":"guides/auth","title":"Authentication","description":"It\'s common to restrict certain routes to users who are not authenticated. This can be achieved in a very organized way by using React Context and Route Groups.","sidebar":"tutorialSidebar"},"guides/header-buttons":{"id":"guides/header-buttons","title":"Header buttons","description":"Ports the guide React Navigation: header buttons to Expo Router.","sidebar":"tutorialSidebar"},"guides/headers":{"id":"guides/headers","title":"Configuring the header bar","description":"Ports the guide React Navigation: header buttons to Expo Router.","sidebar":"tutorialSidebar"},"guides/hosting":{"id":"guides/hosting","title":"Hosting","description":"The current behavior of web is to export as a single-page application or (SPA). This means you need to redirect incoming URL requests on the server to the root index.html file.","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Building a layout","description":"First create a layout route in app/_layout.js which uses the pre-built Stack component from expo-router to render a native stack navigator.","sidebar":"tutorialSidebar"},"guides/modals":{"id":"guides/modals","title":"Modals","description":"Modals are a common pattern in mobile apps. They are a way to present a new screen on top of the current screen. They are often used for things like creating a new account, or for a user to select an option from a list.","sidebar":"tutorialSidebar"},"guides/nesting-navigators":{"id":"guides/nesting-navigators","title":"Nesting navigators","description":"Ports the guide React Navigation: Nesting navigators to Expo Router.","sidebar":"tutorialSidebar"},"guides/root-layout":{"id":"guides/root-layout","title":"Root Layout","description":"Traditional React Native projects are structured with a single root component that is often defined in ./App.js or ./index.js. This pattern is often used to inject global providers such as Redux, Themes, Styles, etc. into the app, and to delay rendering until assets and fonts are loaded.","sidebar":"tutorialSidebar"},"guides/tabs":{"id":"guides/tabs","title":"Tabs","description":"Expo Router adds an additional href screen option which can only be used with screen options that are an object (e.g. screenOptions={{ href: \\"/path\\" }}) and cannot be used simultaneously with tabBarButton.","sidebar":"tutorialSidebar"},"guides/universal-links":{"id":"guides/universal-links","title":"Universal Links","description":"Expo Router automatically creates deep links for every page. You can promote your deep links to universal links by adding verification files to your website and native app.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"File-based Routing for React Native apps","sidebar":"tutorialSidebar"},"lab/bundle-splitting":{"id":"lab/bundle-splitting","title":"Bundle Splitting","description":"This guide refers to upcoming Expo Router features, all of which are experimental. You may need to use Expo CLI on main to use these features.","sidebar":"tutorialSidebar"},"lab/jest":{"id":"lab/jest","title":"Testing with Jest","description":"This guide refers to upcoming Expo Router features, all of which are experimental.","sidebar":"tutorialSidebar"},"lab/root-html":{"id":"lab/root-html","title":"Custom Root HTML","description":"This guide refers to upcoming Expo Router features, all of which are experimental. You may need to use Expo CLI on main to use these features.","sidebar":"tutorialSidebar"},"lab/runtime-location":{"id":"lab/runtime-location","title":"window.location","description":"This guide refers to upcoming Expo Router features, all of which are experimental. You may need to use Expo CLI on main to use these features.","sidebar":"tutorialSidebar"},"lab/styles":{"id":"lab/styles","title":"Styling","description":"This guide refers to upcoming Expo Router features, all of which are experimental. You may need to use Expo CLI on main to use these features.","sidebar":"tutorialSidebar"},"lab/typescript":{"id":"lab/typescript","title":"TypeScript","description":"This guide refers to upcoming Expo Router features, all of which are experimental.","sidebar":"tutorialSidebar"},"migration/react-navigation/custom-navigators":{"id":"migration/react-navigation/custom-navigators","title":"Custom navigators","description":"You can create your own custom navigators with the Navigator component.","sidebar":"tutorialSidebar"},"migration/react-navigation/drawer":{"id":"migration/react-navigation/drawer","title":"Drawer","description":"To use drawer navigator you\'ll need to install some extra dependencies.","sidebar":"tutorialSidebar"},"migration/react-navigation/drawer-navigator":{"id":"migration/react-navigation/drawer-navigator","title":"Drawer navigation","description":"To use the React Navigation drawer navigator with Expo Router, do the following:","sidebar":"tutorialSidebar"},"migration/react-navigation/link":{"id":"migration/react-navigation/link","title":"Link","description":"The Expo Router Link component is a wrapper around the React Navigation Link component. It is used to navigate to a route using a declarative API.","sidebar":"tutorialSidebar"},"migration/react-navigation/native-stack":{"id":"migration/react-navigation/native-stack","title":"Native Stack","description":"The Stack Layout in Expo Router wraps the Native Stack Navigator from React Navigation, not to be confused with the legacy JS Stack Navigator.","sidebar":"tutorialSidebar"},"migration/react-navigation/navigating":{"id":"migration/react-navigation/navigating","title":"Moving between screens","description":"Ports the guide React Navigation: Navigating to Expo Router.","sidebar":"tutorialSidebar"},"migration/react-navigation/navigation-container":{"id":"migration/react-navigation/navigation-container","title":"Navigation Container","description":"The global React Navigation ` is completely managed by Expo Router. Expo Router provides systems for achieving the same functionality as the NavigationContainer` without needing to use it directly.","sidebar":"tutorialSidebar"},"migration/react-navigation/navigation-state":{"id":"migration/react-navigation/navigation-state","title":"Navigation State","description":"Use routes instead of the navigation state.","sidebar":"tutorialSidebar"},"migration/react-navigation/params":{"id":"migration/react-navigation/params","title":"Passing parameters to the routes","description":"Ports the guide React Navigation: Params to Expo Router.","sidebar":"tutorialSidebar"},"migration/react-navigation/screen":{"id":"migration/react-navigation/screen","title":"Screen","description":"Qualified layouts, like the ones found in expo-router (Stack, Tabs, Navigator) have a static Screen component which can be used to configure the behavior of a route declaratively.","sidebar":"tutorialSidebar"},"migration/react-navigation/screen-tracking":{"id":"migration/react-navigation/screen-tracking","title":"Screen tracking for analytics","description":"Unlike React Navigation, Expo Router always has access to a URL. This means screen tracking is as easy as the web.","sidebar":"tutorialSidebar"},"migration/react-navigation/stack":{"id":"migration/react-navigation/stack","title":"Stack","description":"The Stack Layout in Expo Router wraps the Native Stack Navigator from React Navigation, if you want to use the legacy JS Stack Navigator then do the following.","sidebar":"tutorialSidebar"},"migration/react-navigation/themes":{"id":"migration/react-navigation/themes","title":"Themes","description":"In React Navigation, you set the theme for the entire app using the ` component. Expo Router manages the root container for you, so instead you should set the theme using the ThemeProvider` directly.","sidebar":"tutorialSidebar"},"migration/react-navigation/use-link-to":{"id":"migration/react-navigation/use-link-to","title":"useLinkTo","description":"Do not use the useLinkTo hook from React Navigation, instead use the useRouter hook from Expo Router.","sidebar":"tutorialSidebar"},"migration/react-navigation/use-navigation":{"id":"migration/react-navigation/use-navigation","title":"useNavigation","description":"Expo Router exports a custom useNavigation hook that optionally accepts a relative route fragment to access any parent navigation prop.","sidebar":"tutorialSidebar"},"migration/react-navigation/use-route":{"id":"migration/react-navigation/use-route","title":"useRoute","description":"Do not use the useRoute hook from React Navigation, instead use the following hooks:","sidebar":"tutorialSidebar"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Fixing common issues with Expo Router setup.","sidebar":"tutorialSidebar"}}}')}}]);