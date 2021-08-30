"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[118],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Internationalization",p={unversionedId:"multi-language-support",id:"multi-language-support",isDocsHomePage:!1,title:"Internationalization",description:"Internationalization is the process of making an application available in other languages. This is important, as not everyone is a native English speaker.",source:"@site/docs/multi-language-support.md",sourceDirName:".",slug:"/multi-language-support",permalink:"/docs/multi-language-support",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/multi-language-support.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Alternate Views & Opening Methods",permalink:"/docs/alternate-views"},next:{title:"Cloud Backup and Restore",permalink:"/docs/backup-restore"}},u=[{value:"Available Languages",id:"available-languages",children:[]},{value:"How to change Language",id:"how-to-change-language",children:[]},{value:"Adding a new Language",id:"adding-a-new-language",children:[]},{value:"Adding Text",id:"adding-text",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"Internationalization is the process of making an application available in other languages. This is important, as not everyone is a native English speaker."),(0,i.kt)("h2",{id:"available-languages"},"Available Languages"),(0,i.kt)("p",null,"An up-to-date list of all currently supported languages can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/languages.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./src/utils/languages.js")),".  Languages are specified by their 2-digit ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639 code")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"en"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fr"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"de"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"es"),", etc)"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-change-language"},"How to change Language"),(0,i.kt)("p",null,"By default, Dashy will attempt to use the language of your browser or system. If a translation for your language does not yet exist, it will fallback to English."),(0,i.kt)("p",null,"You can also manually select your language. This can be done, either through the UI (Config --\x3e Language), or by setting it in your config file: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n    lang: de\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"adding-a-new-language"},"Adding a new Language"),(0,i.kt)("p",null,"Dashy is using ",(0,i.kt)("a",{parentName:"p",href:"https://vue-i18n.intlify.dev/guide/"},"vue-i18n")," to manage multi-language support."),(0,i.kt)("p",null,"Adding a new language is pretty straightforward, with just three steps:"),(0,i.kt)("h5",{id:"1-create-a-new-language-file"},"1. Create a new Language File"),(0,i.kt)("p",null,"Create a new JSON file in ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/assets/locales")," name is a 2-digit ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639 code")," for your language, E.g. for German ",(0,i.kt)("inlineCode",{parentName:"p"},"de.json"),", French ",(0,i.kt)("inlineCode",{parentName:"p"},"fr.json")," or Spanish ",(0,i.kt)("inlineCode",{parentName:"p"},"es.json")," - You can find a list of all ISO codes at ",(0,i.kt)("a",{parentName:"p",href:"https://www.iso.org/obp/ui"},"iso.org"),".\nIf your language is a specific dialect or regional language, then use the Posfix ",(0,i.kt)("a",{parentName:"p",href:"http://cldr.unicode.org/"},"CLDR")," format, where, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"en-GB.json")," (British), ",(0,i.kt)("inlineCode",{parentName:"p"},"es-MX.json")," (Spanish, in Mexico) or ",(0,i.kt)("inlineCode",{parentName:"p"},"zh-CN.json")," (Chinese, simplified) - A list of which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unicode-org/cldr-json/blob/master/cldr-json/cldr-core/availableLocales.json"},"here")),(0,i.kt)("h5",{id:"2-translate"},"2. Translate!"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/assets/locales/en.json"},(0,i.kt)("inlineCode",{parentName:"a"},"en.json"))," as an example, translate the JSON values to your language, while leaving the keys as they are. It's fine to leave out certain items, as if they're missing they will fall-back to English. If you see any attribute which include curly braces (",(0,i.kt)("inlineCode",{parentName:"p"},"{xxx}"),"), then leave the inner value of these braces as is, as this is for variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "theme-maker": {\n    "export-button": "Benutzerdefinierte Variablen exportieren",\n    "reset-button": "Stile zur\xfccksetzen f\xfcr",\n    "show-all-button": "Alle Variablen anzeigen",\n    "save-button": "Speichern",\n    "cancel-button": "Abbrechen",\n    "saved-toast": "{theme} Erfolgreich aktualisiert",\n    "reset-toast": "Benutzerdefinierte Farben f\xfcr {theme} entfernt"\n  },\n}\n')),(0,i.kt)("h5",{id:"3-add-your-file-to-the-app"},"3. Add your file to the app"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/utils/languages.js"},(0,i.kt)("inlineCode",{parentName:"a"},"./src/utils/languages.js")),", you need to do 2 small things:"),(0,i.kt)("p",null,"First import your new translation file, do this at the top of the page.\nE.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"import de from '@/assets/locales/de.json';")),(0,i.kt)("p",null,"Second, add it to the array of languages, e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const languages = [\n  {\n    name: 'English',\n    code: 'en',\n    locale: en,\n    flag: '\ud83c\uddec\ud83c\udde7',\n  },\n  {\n    name: 'German', // The name of your language\n    code: 'de', // The ISO code of your language\n    locale: de, // The name of the file you imported (no quotes)\n    flag: '\ud83c\udde9\ud83c\uddea', // An optional flag emoji\n  },\n];\n")),(0,i.kt)("p",null,"You can also add your new language to the readme, under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy#language-switching-"},"Language Switching")," section and optionally include your name/ username if you'd like to be credited for your work. Done!"),(0,i.kt)("p",null,"If you are not comfortable with making pull requests, or do not want to modify the code, then feel free to instead send the translated file to me, and I can add it into the application. I will be sure to credit you appropriately. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"adding-text"},"Adding Text"),(0,i.kt)("p",null,"If you're working on a new component, then any text that is displayed to the user should be extracted out of the component, and stored in the file. This also applies to any existing components, that might have been forgotten to be translated."),(0,i.kt)("p",null,"Thankfully, everything is already setup, and so is as easy as adding text to the JSON file, and pasting the key to that text in your component."),(0,i.kt)("h4",{id:"1-add-translated-text"},"1. Add Translated Text"),(0,i.kt)("p",null,"Firstly, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/assets/locales/en.json"},(0,i.kt)("inlineCode",{parentName:"a"},"./src/assets/locales/en.json")),", and either find the appropriate section, or create a new section. Lets say you're new component is called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-widget"),", you could add ",(0,i.kt)("inlineCode",{parentName:"p"},'"my-widget": {}')," to store all your text as key-value-pairs. E.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"my-widget": {\n    "awesome-text": "I am some text, that will be seen by the user"\n}\n')),(0,i.kt)("p",null,"Note that you ",(0,i.kt)("strong",{parentName:"p"},"must")," add English translations for all text. Missing languages are not a problem, as they will always fallback to Enslish, but if the English is missing, then nothing can be displayed."),(0,i.kt)("h4",{id:"2-use-text-within-component"},"2. Use Text within Component"),(0,i.kt)("p",null,"Once your text is in the translation file, you can now use it within your component. There is a global ",(0,i.kt)("inlineCode",{parentName:"p"},"$t")," function, with takes the key of your new translation, and returns the value. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue"},"<p>{{ $t('my-widget.awesome-text') }}</p>\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ }}")," just tells Vue that this is JavaScript/ dynamic.\nThis will render: ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>I am some text, that will be seen by the user</p>")),(0,i.kt)("p",null,"If you need to display text programmatically, from within the components JavaScript (e.g. in a toast popup), then use ",(0,i.kt)("inlineCode",{parentName:"p"},"this.$t"),".\nFor example: ",(0,i.kt)("inlineCode",{parentName:"p"},"alert(this.$t('my-widget.awesome-text'))"),"."),(0,i.kt)("p",null,"You may also need to pass a variable to be displayed within a translation. Vue I18n supports ",(0,i.kt)("a",{parentName:"p",href:"https://vue-i18n.intlify.dev/guide/essentials/syntax.html#interpolations"},"Interpolations")," using mustache-like syntax."),(0,i.kt)("p",null,"For example, you would set your translation to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "welcome-message": "Hello {name}!"\n}\n')),(0,i.kt)("p",null,"And then pass that variable (",(0,i.kt)("inlineCode",{parentName:"p"},"name"),") within a JSON object as the second parameter on ",(0,i.kt)("inlineCode",{parentName:"p"},"$t"),", like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$t('welcome-message', { name: 'Alicia' })\n")),(0,i.kt)("p",null,"Which will render:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello Alicia!\n")),(0,i.kt)("p",null,"There are many other advanced features, including  Pluralization,  Datetime & Number Formatting, Message Support and more, all of which are outlined in the ",(0,i.kt)("a",{parentName:"p",href:"https://vue-i18n.intlify.dev/guide/"},"Vue-i18n Docs"),"."),(0,i.kt)("h4",{id:"basic-example"},"Basic Example"),(0,i.kt)("p",null,"Using the search bar as an example, this would look something like:"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/components/Settings/SearchBar.vue"},(0,i.kt)("inlineCode",{parentName:"a"},"./src/components/Settings/SearchBar.vue")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <form>\n    <label for="search-input">{{ $t(\'search.search-label\') }}</label>\n    <input\n      id="search-input"\n      v-model="searchValue"\n      :placeholder="$t(\'search.search-placeholder\')"\n        />\n  </form>\n</template>\n')),(0,i.kt)("p",null,"Then in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/assets/locales/en.json"},(0,i.kt)("inlineCode",{parentName:"a"},"./src/assets/locales/en.json")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"search": {\n    "search-label": "Search",\n    "search-placeholder": "Start typing to filter",\n  },\n    ...\n}\n')))}d.isMDXComponent=!0}}]);