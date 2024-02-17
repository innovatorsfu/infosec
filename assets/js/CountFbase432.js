/*<![CDATA[*/
const wcViewCountFbase = {
  firebaseUrl: 'https://choipan-wendy-default-rtdb.firebaseio.com/',
  abbreviation: '1', // 0 or 1 or 2
  type: '1', // 0 or 1
  sharedBy: 'www.wendycode.com' // credit
};
  
function viewCountLoad(){var script=document.createElement('script');script.async= true;script.src='https://cdn.wendycode.com/blogger/widget/viewcount.js';document.body.appendChild(script)}function vcDtcLzy(){viewCountLoad(),localStorage.setItem("viewCountJs","true")}var wcLdStorage=localStorage.getItem("viewCountJs");if("true"!=wcLdStorage){var t=!1,e=!1;window.addEventListener("scroll",()=>{(0!=document.documentElement.scrollTop&&!1===t||0!=document.body.scrollTop&&!1===t)&&(vcDtcLzy(),t=!0,e=!0)},!0),window.addEventListener("click",()=>{!1===e&&!1===e&&(vcDtcLzy(),e=!0,t=!0)},!0)}"true"===wcLdStorage&&viewCountLoad();"undefined"!= typeof infinite_scroll&&infinite_scroll.on("load",function(){viewCountLoad();});
/*]]>*/
