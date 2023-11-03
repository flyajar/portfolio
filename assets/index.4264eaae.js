import{o as r,c as n,a as m,b as s,t as f,F as v,d,e as u}from"./vendor.b2eb4f55.js";const h=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}};h();var y="/portfolio/images/wandering-mind.svg",x="/portfolio/images/it.gif",p="/portfolio/images/book.gif",c=(a,e)=>{const i=a.__vccOpts||a;for(const[o,t]of e)i[o]=t;return i};const b={},_={class:"py-20"},w=m('<div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16" id="about"><div class="flex flex-wrap items-center -mx-3"><div class="w-full px-10 mb-12 lg:w-1/2 order-1 lg:order-1 lg:mb-0 h-auto"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="'+y+'" alt="feature image"></div><div class="order-1 w-full px-10 lg:w-1/2 lg:order-0"><div class="w-full lg:max-w-md"><h2 class="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading">ABOUT</h2><p class="mb-4 font-medium text-xl tracking-tight text-gray-800 xl:mb-6"> A web developer proficient in both backend and frontend development. I specialize in developing responsive web pages and RESTful APIs. </p><ul><h2 class="mb-1 font-medium text-xl tracking-tight text-indigo-600 tracking-tight">Work Experience</h2><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+x+'" alt="it developer" class="w-12 h-12"><div><span class="font-medium text-gray-500">PHP Laravel Developer</span><br><span class="font-medium text-gray-500">Payo Asia</span><br><span class="font-medium text-gray-500">September 2022 - Present</span></div></li><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+x+'" alt="it developer" class="w-12 h-12"><div><span class="font-medium text-gray-500">Junior PHP Developer</span><br><span class="font-medium text-gray-500">CoreProc Inc.</span><br><span class="font-medium text-gray-500">October 2019 - April 2022</span></div></li><h2 class="mb-1 font-medium text-xl tracking-tight text-indigo-600 tracking-tight">Education</h2><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+p+'" alt="bookr" class="w-12 h-12"><div><span class="font-medium text-gray-500">Fullstack Web Development</span><br><span class="font-medium text-gray-500">Zuitt Coding Bootcamp</span><br><span class="font-medium text-gray-500">July 2019 - September 2019</span></div></li><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+p+'" alt="bookr" class="w-12 h-12"><div><span class="font-medium text-gray-500">Bachelor of Science in Information Technology</span><br><span class="font-medium text-gray-500">STI College Taft</span><br><span class="font-medium text-gray-500">June 2015 - July 2019</span></div></li></ul></div></div></div></div>',1),k=[w];function $(a,e){return r(),n("section",_,k)}var j=c(b,[["render",$]]);const P={},A={class:"relative w-full px-8 text-gray-700 body-font"},S={class:"container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"},L=s("a",{href:"#",class:"relative z-10 flex items-center w-auto text-4xl font-extrabold leading-none text-black select-none"},"Ralf",-1),I={class:"top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute"},M=s("span",{class:"block text-2xl"},"About",-1),T=s("span",{class:"absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"},[s("span",{"x-show":"hover",class:"absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900","x-transition:enter":"transition ease duration-200","x-transition:enter-start":"scale-0","x-transition:enter-end":"scale-100","x-transition:leave":"transition ease-out duration-300","x-transition:leave-start":"scale-100","x-transition:leave-end":"scale-0",style:{display:"none"}})],-1),C=[M,T],O=s("span",{class:"block text-2xl"},"Skills",-1),V=s("span",{class:"absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"},[s("span",{"x-show":"hover",class:"absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900","x-transition:enter":"transition ease duration-200","x-transition:enter-start":"scale-0","x-transition:enter-end":"scale-100","x-transition:leave":"transition ease-out duration-300","x-transition:leave-start":"scale-100","x-transition:leave-end":"scale-0",style:{display:"none"}})],-1),E=[O,V],R=s("span",{class:"block text-2xl"},"Projects",-1),B=s("span",{class:"absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"},[s("span",{"x-show":"hover",class:"absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900","x-transition:enter":"transition ease duration-200","x-transition:enter-start":"scale-0","x-transition:enter-end":"scale-100","x-transition:leave":"transition ease-out duration-300","x-transition:leave-start":"scale-100","x-transition:leave-end":"scale-0",style:{display:"none"}})],-1),D=[R,B],N=s("span",{class:"block text-2xl"},"Contact",-1),H=s("span",{class:"absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"},[s("span",{"x-show":"hover",class:"absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900","x-transition:enter":"transition ease duration-200","x-transition:enter-start":"scale-0","x-transition:enter-end":"scale-100","x-transition:leave":"transition ease-out duration-300","x-transition:leave-start":"scale-100","x-transition:leave-end":"scale-0",style:{display:"none"}})],-1),J=[N,H];function F(a,e){return r(),n("section",A,[s("div",S,[L,s("nav",I,[s("a",{href:"#about",class:"relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900","x-data":"{ hover: false }",onMouseenter:e[0]||(e[0]=i=>a.hover=!0),onMouseleave:e[1]||(e[1]=i=>a.hover=!1)},C,32),s("a",{href:"#skills",class:"relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900","x-data":"{ hover: false }",onMouseenter:e[2]||(e[2]=i=>a.hover=!0),onMouseleave:e[3]||(e[3]=i=>a.hover=!1)},E,32),s("a",{href:"#projects",class:"relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900","x-data":"{ hover: false }",onMouseenter:e[4]||(e[4]=i=>a.hover=!0),onMouseleave:e[5]||(e[5]=i=>a.hover=!1)},D,32),s("a",{href:"#contactme",class:"relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900","x-data":"{ hover: false }",onMouseenter:e[6]||(e[6]=i=>a.hover=!0),onMouseleave:e[7]||(e[7]=i=>a.hover=!1)},J,32)])])])}var z=c(P,[["render",F]]),W="/portfolio/images/hello.svg",q="/portfolio/images/scroll-down.gif";const K={name:"Landing"},U={class:"py-5 md:px-0"},Y=m('<div class="container items-center max-w-6xl px-8 mx-auto xl:px-5"><div class="flex flex-wrap items-center sm:-mx-3"><div class="w-full md:w-1/2 md:px-3"><div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"><h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 tracking-normal"><span class="">Hi! I&#39;m <span class="text-indigo-600">Ralf</span> a <span class="text-indigo-600">web developer.</span></span></h1></div></div><div class="w-full md:w-1/2"><div class="w-full h-auto overflow-hidden shadow-sm rounded-none rounded-xl"><img src="'+W+'" class="w-full" alt="hello"></div></div></div><div class="flex justify-center mt-5"><img src="'+q+'" alt="scroll-down" class="h-16"></div></div>',1),G=[Y];function Q(a,e,i,o,t,l){return r(),n("section",U,G)}var Z=c(K,[["render",Q]]),X="/portfolio/images/logos/html.png",ee="/portfolio/images/logos/css-3.png",te="/portfolio/images/logos/js.png",se="/portfolio/images/logos/php.png",ae="/portfolio/images/logos/laravel.png",ie="/portfolio/images/logos/vue.svg",le="/portfolio/images/logos/tailwind.svg",oe="/portfolio/images/logos/mysql.png",re="/portfolio/images/logos/bootstrap.png",ne="/portfolio/images/logos/git.png";const de={name:"Skill"},ce={class:"relative py-20 overflow-hidden"},me=m('<span class="absolute bottom-0 left-0"></span><div class="relative px-16 mx-auto max-w-7xl"><p class="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading" id="skills">SKILLS</p><div class="grid w-full grid-cols-4 gap-10 sm:grid-cols-4 lg:grid-cols-5"><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+X+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">HTML</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+ee+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">CSS</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+te+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">JAVASCRIPT</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+se+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">PHP</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+ae+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">LARAVEL</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+ie+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">VUE</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+le+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">TAILWIND</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+oe+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">MYSQL</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+re+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">BOOTSTRAP</h3></div></div></div><div class="flex flex-col items-center justify-center col-span-1 grayscale hover:grayscale-0"><div class="relative"><img class="relative h-8 md:h-24 w-full rounded" src="'+ne+'"></div><div class="mt-3 space-y-2 text-center"><div class="space-y-1 text-lg font-medium leading-6"><h3 class="text-indigo-600 tracking-wider text-base md:text-lg">GIT</h3></div></div></div></div></div>',2),ge=[me];function ve(a,e,i,o,t,l){return r(),n("section",ce,ge)}var xe=c(de,[["render",ve]]);const pe={name:"Project"},fe={class:"relative py-20 overflow-hidden"},ue=m('<div class="max-w-7xl px-10 mx-auto sm:text-center"><p class="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading" id="projects">PROJECTS</p><p class="mb-4 font-medium text-xl tracking-tight text-gray-800 xl:mb-6">Some of my works that I&#39;ve made</p><div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2"><div class="w-full border border-gray-200 rounded-lg shadow-sm"><div class="flex flex-col items-center justify-center p-10"><h2 class="text-lg font-medium text-indigo-500">Payo Merchant Portal</h2><p class="text-gray-800">An application for Payo&#39;s merchants&#39; basic needs </p></div><div class="flex border-t border-gray-200 divide-x divide-gray-200"><a href="https://merchant-portal.payo.asia/login" target="_blank" class="flex-1 block p-5 text-center text-gray-800 transition duration-200 ease-out hover:bg-indigo-600 hover:text-white"> View Code </a></div></div><div class="w-full border border-gray-200 rounded-lg shadow-sm"><div class="flex flex-col items-center justify-center p-10"><h2 class="text-lg font-medium text-indigo-500">Atram Prime</h2><p class="text-gray-800">A mobile app that is made for investing </p></div><div class="flex border-t border-gray-200 divide-x divide-gray-200"><a href="https://play.google.com/store/apps/details?id=com.atram_prime.v2" target="_blank" class="flex-1 block p-5 text-center text-gray-800 transition duration-200 ease-out hover:bg-indigo-600 hover:text-white"> View App </a></div></div><div class="w-full border border-gray-200 rounded-lg shadow-sm"><div class="flex flex-col items-center justify-center p-10"><h2 class="text-lg font-medium text-indigo-500">Drybrush</h2><p class="text-gray-800">An online gallery where artists can showcase their artworks </p></div><div class="flex border-t border-gray-200 divide-x divide-gray-200"><a href="https://drybrush.com/" target="_blank" class="flex-1 block p-5 text-center text-gray-800 transition duration-200 ease-out hover:bg-indigo-600 hover:text-white"> Visit site </a></div></div><div class="w-full border border-gray-200 rounded-lg shadow-sm"><div class="flex flex-col items-center justify-center p-10"><h2 class="text-lg font-medium text-indigo-500">Subsidian</h2><p class="text-gray-800">A simple static site made </p></div><div class="flex border-t border-gray-200 divide-x divide-gray-200"><a href="https://rjovenal.gitlab.io/capstone1_fv/" target="_blank" class="flex-1 block p-5 text-center text-gray-800 transition duration-200 ease-out hover:bg-indigo-600 hover:text-white"> Visit </a></div></div></div></div>',1),he=[ue];function ye(a,e,i,o,t,l){return r(),n("section",fe,he)}var be=c(pe,[["render",ye]]),_e="/portfolio/images/email.png",we="/portfolio/images/phone.png",ke="/portfolio/images/linkedin.png",$e="/portfolio/images/profile-details.svg";const je={name:"Contact.vue"},Pe=m('<section class="py-20"><div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16" id="contactme"><div class="flex flex-wrap items-center -mx-3"><div class="order-1 w-full px-10 lg:w-1/2 lg:order-0"><div class="w-full lg:max-w-md"><h2 class="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading">Contact</h2><ul><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+_e+'" alt="email" class="w-10 h-10"><div><span class="text-md text-gray-500 font-medium">rj.jovenal@gmail.com</span></div></li><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+we+'" alt="phone" class="w-10 h-10"><div><span class="font-medium text-md text-gray-500">+63 967 231 1716</span></div></li><li class="flex items-center py-2 space-x-4 xl:py-3"><img src="'+ke+'" alt="linkedin" class="w-10 h-10"><div><span class="font-medium text-md text-gray-500">linkedin.com/in/rjovenal</span></div></li></ul></div></div><div class="w-full px-10 mb-12 lg:w-1/2 order-1 lg:order-1 lg:mb-0 h-auto"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="'+$e+'" alt="feature image"></div></div></div></section>',1),Ae={class:"text-center"},Se={class:"pb-10"};function Le(a,e,i,o,t,l){return r(),n(v,null,[Pe,s("div",Ae,[s("h1",Se," Made with \u2764 by Ralf | \xA9 "+f(new Date().getFullYear()),1)])],64)}var Ie=c(je,[["render",Le]]);const Me={setup(a){return(e,i)=>(r(),n(v,null,[d(z),d(Z),d(j),d(xe),d(be),d(Ie)],64))}};u(Me).mount("#app");
