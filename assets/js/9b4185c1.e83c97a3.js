"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[775],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Privacy & Security",c={unversionedId:"privacy",id:"privacy",isDocsHomePage:!1,title:"Privacy & Security",description:"Dashy was built with privacy in mind. Self-hosting your own apps and services is a great way to protect yourself from the mass data collection employed by big tech companies, and Dashy was designed to keep your local services organized and accessible from a single place.",source:"@site/docs/privacy.md",sourceDirName:".",slug:"/privacy",permalink:"/docs/privacy",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/privacy.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Cloud Backup and Restore",permalink:"/docs/backup-restore"},next:{title:"Changelog",permalink:"/docs/changelog"}},u=[{value:"External Requests",id:"external-requests",children:[{value:"Font Awesome",id:"font-awesome",children:[]},{value:"Favicon Fetching",id:"favicon-fetching",children:[]},{value:"Other Icons",id:"other-icons",children:[]},{value:"Web Assets",id:"web-assets",children:[]},{value:"Status Checking",id:"status-checking",children:[]},{value:"Update Checks",id:"update-checks",children:[]},{value:"Anonymous Error Reporting",id:"anonymous-error-reporting",children:[]}]},{value:"Local Storage",id:"local-storage",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Securing your Environment",id:"securing-your-environment",children:[]},{value:"Reporting a Security Issue",id:"reporting-a-security-issue",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"privacy--security"},"Privacy & Security"),(0,r.kt)("p",null,"Dashy was built with privacy in mind. Self-hosting your own apps and services is a great way to protect yourself from the mass data collection employed by big tech companies, and Dashy was designed to keep your local services organized and accessible from a single place."),(0,r.kt)("p",null,"It's fully open source, and I've tried to keep to code as clear and thoroughly documented as possible, which will make it easy for you to understand exactly how it works, and what goes on behind the scenes."),(0,r.kt)("p",null,"For privacy and security tips, check out another project of mine: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Lissy93/personal-security-checklist"},"Personal Security Checklist")),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"external-requests"},"External Requests"),(0,r.kt)("p",null,"By default, Dashy will not make any external requests, unless you configure it to. Some features (which are all off by default) do require internat access, and this section outlines those features, the services used, and links to their privacy policies."),(0,r.kt)("h3",{id:"font-awesome"},"Font Awesome"),(0,r.kt)("p",null,"If either any of your sections or items are using font-awesome icons, then these will be fetched directly from font-awesome on page load. See the ",(0,r.kt)("a",{parentName:"p",href:"https://fontawesome.com/privacy"},"Font Awesome Privacy Policy")," for more info."),(0,r.kt)("h3",{id:"favicon-fetching"},"Favicon Fetching"),(0,r.kt)("p",null,"If an item's icon is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon"),", then it will be auto-fetched from the corresponding URL. Since not all websites have their icon located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/favicon.ico"),", and if they do, it's often very low resolution (like ",(0,r.kt)("inlineCode",{parentName:"p"},"16 x 16 px"),"). Therefore, the default behavior is for Dashy to check if the URL is public, and if so will use an API to fetch the favicon. For self-hosted services, the favion will be fetched from the default path, and no external requests will be made."),(0,r.kt)("p",null,"The default favicon API is ",(0,r.kt)("a",{parentName:"p",href:"https://faviconkit.com/"},"Favicon Kit"),", but this can be changed by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"appConfig.faviconApi")," to an alternate source (",(0,r.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"clearbit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"webmasterapi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"allesedv")," are supported). If you do not want to use any API, then you can set this property to ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", and the favicon will be fetched from the default path. For hosted services, this will still incur an external request."),(0,r.kt)("h3",{id:"other-icons"},"Other Icons"),(0,r.kt)("p",null,"Section icons, item icons and app icons are able to accept a URL to a raw image, if the image is hosted online then an external request will be made. To avoid the need to make external requests for icon assets, you can either use a self-hosted CDN, or store your images within ",(0,r.kt)("inlineCode",{parentName:"p"},"./public/item-icons")," (which can be mounted as a volume if you're using Docker)."),(0,r.kt)("h3",{id:"web-assets"},"Web Assets"),(0,r.kt)("p",null,"By default, all assets required by Dashy come bundled within the source, and so no external requests are made. If you add an additional font, which is imported from a CDN, then that will incur an external request. The same applies for other web assets, like external images, scripts or styles."),(0,r.kt)("h3",{id:"status-checking"},"Status Checking"),(0,r.kt)("p",null,"The status check util will ping your services directly, and does not rely on any third party. If you are checking the uptime status of a public/ hosted application, then please refer to that services privacy policy. For all self-hosted services, requests happen locally within your network, and are not external."),(0,r.kt)("h3",{id:"update-checks"},"Update Checks"),(0,r.kt)("p",null,"When the application loads, it checks for updates. The results of which are displayed in the config menu of the UI. This was implemented because using a very outdated version of Dashy may have unfixed issues. Your version is fetched from the source (local request), but the latest version is fetched from GitHub, which is an external request. This can be disabled by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"appConfig.disableUpdateChecks: true")),(0,r.kt)("h3",{id:"anonymous-error-reporting"},"Anonymous Error Reporting"),(0,r.kt)("p",null,"Error reporting is disabled by default, and no data will ever be sent without your explicit consent. In fact, the error tracking method will not even be imported unless you have actively enabled it. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/getsentry/sentry"},"Sentry")," is used for this, it's an open source error tracking and performance monitoring tool, which is used to identify any issues which occur in the production app (if you enable it). "),(0,r.kt)("p",null,"The crash report includes the file or line of code that triggered the error, and a 2-layer deep stack trace. Reoccurring errors will also include the following user information: OS type (Mac, Windows, Linux, Android or iOS) and browser type (Firefox, Chrome, IE, Safari). Data scrubbing is enabled. IP address will not be stored. If any potentially identifiable data ever finds its way into a crash report, it will be automatically and permanently erased. All statistics collected are anonomized and stored securely, and ae automatically deleted after 14 days. For more about privacy and security, see the ",(0,r.kt)("a",{parentName:"p",href:"https://sentry.io/security/"},"Sentry Docs"),"."),(0,r.kt)("p",null,"Enabling anonymous error reporting helps me to discover bugs I was unaware of, and then fix them, in order to make Dashy more reliable long term. Error reporting is activated  by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"appConfig.enableErrorReporting: true"),"."),(0,r.kt)("p",null,"If you need to monitor bugs yourself, then you can ",(0,r.kt)("a",{parentName:"p",href:"https://develop.sentry.dev/self-hosted/"},"self-host your own Sentry Server"),", and use it by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"appConfig.sentryDsn")," to your Sentry instances ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sentry.io/product/sentry-basics/dsn-explainer/"},"Data Source Name"),", then just enable error reporting in Dashy."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"local-storage"},"Local Storage"),(0,r.kt)("p",null,"In order for user preferences to be persisted between sessions, certain data needs to be stored in the browsers local storage. No personal info is kept here, none of this data can be accessed by other domains, and no data is ever sent to any server without your prior consent.\nYou can view your browsers session storage by opening up the dev tools (F12) --\x3e Application --\x3e Storage."),(0,r.kt)("p",null,"The following section outlines all data that is stored in the browsers, as cookies or local storage."),(0,r.kt)("h4",{id:"cookies"},"Cookies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_TOKEN")," - A unique token, generated from a hash of users credentials, to verify they are authenticated. Only used when auth is enabled ")),(0,r.kt)("h4",{id:"local-storage-1"},"Local Storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGE")," - The locale to show app text in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIDE_WELCOME_BANNER")," - Set to true once user dismissed welcome message, so that it's not shown again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LAYOUT_ORIENTATION")," - Preferred section layout, either horizontal, vertical or auto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COLLAPSE_STATE")," - Remembers which sections are collapsed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ICON_SIZE")," - Size of items, either small, medium or large"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"THEME: 'theme")," - Users applied theme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CUSTOM_COLORS")," - Any color modifications made to a given theme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BACKUP_ID")," - If a backup has been made, the ID is stored here"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BACKUP_HASH")," - A unique hash of the previous backups meta data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIDE_SETTINGS")," - Lets user hide or show the settings menu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"USERNAME")," - If user logged in, store username in order to welcome them"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONF_SECTIONS")," - Array of sections, only used when user applies changes locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PAGE_INFO")," - Config page info, only used when user applies changes locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APP_CONFIG")," - App config, only used when user applies changes locally")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"As with most web projects, Dashy relies on several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/credits#dependencies-"},"dependencies"),". For links to each, and a breakdown of their licenses, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/.github/LEGAL"},"Legal"),"."),(0,r.kt)("p",null,"Dependencies can introduce security vulnerabilities, but since all these packages are open source any issues are usually very quickly spotted. Dashy is using Snyk for dependency security monitoring, and you can see ",(0,r.kt)("a",{parentName:"p",href:"https://snyk.io/test/github/lissy93/dashy"},"the latest report here"),". If any issue is detected by Snyk, a note about it will appear at the top of the Reamde, and will usually be fixed within 48 hours."),(0,r.kt)("p",null,"Note that packages listed under ",(0,r.kt)("inlineCode",{parentName:"p"},"deDependencies")," section are only used for building the project, and are not included in the production environment."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"securing-your-environment"},"Securing your Environment"),(0,r.kt)("p",null,"Running your self-hosted applications in individual, containerized environments (such as containers or VMs) helps keep them isolated, and prevent an exploit in one service effecting another."),(0,r.kt)("p",null,"There is very little complexity involved with Dashy, and therefore the attack surface is reasonably small, but it is still important to follow best practices and employ monitoring for all your self-hosted apps. A couple of things that you should look at include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use SSL for securing traffic in transit"),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"/docs/authentication#alternative-authentication-methods"},"authentication")," to prevent unauthorized access"),(0,r.kt)("li",{parentName:"ul"},"Keep your system, software and Dashy up-to-date"),(0,r.kt)("li",{parentName:"ul"},"Ensure your server is appropriately secured"),(0,r.kt)("li",{parentName:"ul"},"Manage users and SSH correctly"),(0,r.kt)("li",{parentName:"ul"},"Enable and configure firewall rules"),(0,r.kt)("li",{parentName:"ul"},"Implement security, malware and traffic scanning"),(0,r.kt)("li",{parentName:"ul"},"Setup malicious traffic detection"),(0,r.kt)("li",{parentName:"ul"},"Understand the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/security/"},"Docker attack fronts"),", and follow ",(0,r.kt)("a",{parentName:"li",href:"https://snyk.io/blog/10-docker-image-security-best-practices/"},"Docker Security Best Practices"))),(0,r.kt)("p",null,"This is covered in more detail in ",(0,r.kt)("a",{parentName:"p",href:"/docs/management"},"App Management"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reporting-a-security-issue"},"Reporting a Security Issue"),(0,r.kt)("p",null,"If you think you've found a critical issue with Dashy, please send an email to ",(0,r.kt)("inlineCode",{parentName:"p"},"security@mail.alicia.omg.lol"),". You can encrypt it, using ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/aliciasykes/pgp_keys.asc?fingerprint=0688f8d34587d954e9e51fb8fedb68f55c0283a7"},(0,r.kt)("inlineCode",{parentName:"a"},"0688 F8D3 4587 D954 E9E5 1FB8 FEDB 68F5 5C02 83A7")),". You should receive a response within 48 hours."),(0,r.kt)("p",null,"All non-critical issues can be raised as a ticket."),(0,r.kt)("p",null,"Please include the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Full paths of source file(s) related to the manifestation of the issue"),(0,r.kt)("li",{parentName:"ul"},"The location of the affected source code (tag/branch/commit or direct URL)"),(0,r.kt)("li",{parentName:"ul"},"Any special configuration required to reproduce the issue"),(0,r.kt)("li",{parentName:"ul"},"Step-by-step instructions to reproduce the issue"),(0,r.kt)("li",{parentName:"ul"},"Proof-of-concept or exploit code (if possible)"),(0,r.kt)("li",{parentName:"ul"},"Impact of the issue, including how an attacker might exploit the issue")))}d.isMDXComponent=!0}}]);