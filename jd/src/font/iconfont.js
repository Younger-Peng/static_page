(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-scan" viewBox="0 0 1024 1024">'+""+'<path d="M128 224C128 172.8 172.8 128 224 128L384 128 384 64 224 64C134.4 64 64 134.4 64 224l0 128 64 0L128 224z"  ></path>'+""+'<path d="M128 806.4l0-192L64 614.4l0 192C64 889.6 134.4 960 224 960L384 960l0-64L224 896C172.8 896 128 857.6 128 806.4z"  ></path>'+""+'<path d="M896 224l0 128 64 0 0-128C960 134.4 889.6 64 800 64L640 64l0 64 160 0C851.2 128 896 172.8 896 224z"  ></path>'+""+'<path d="M896 806.4c0 51.2-44.8 96-96 96L640 902.4l0 64 160 0c89.6 0 160-70.4 160-160l0-192-64 0L896 806.4z"  ></path>'+""+'<path d="M972.8 441.6 51.2 441.6c-12.8 0-19.2 6.4-19.2 19.2l0 38.4c0 12.8 6.4 19.2 19.2 19.2l921.6 0c12.8 0 19.2-6.4 19.2-19.2L992 460.8C992 454.4 985.6 441.6 972.8 441.6z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-message-copy" viewBox="0 0 1024 1024">'+""+'<path d="M657.635 402.774h-291.271c-20.099 0-36.41-16.311-36.41-36.41s16.311-36.407 36.41-36.407h291.271c20.134 0 36.41 16.311 36.41 36.407s-16.276 36.41-36.41 36.41z"  ></path>'+""+'<path d="M588.53 548.41h-222.166c-20.099 0-36.41-16.311-36.41-36.41s16.311-36.41 36.41-36.41h222.166c20.134 0 36.41 16.311 36.41 36.41s-16.311 36.41-36.41 36.41z"  ></path>'+""+'<path d="M1024.273 439.182c0-240.917-228.649-436.907-509.725-436.907s-509.725 195.989-509.725 436.907c0 132.566 71.726 257.193 196.754 342.098 16.638 11.36 39.285 6.992 50.572-9.684 11.286-16.638 6.954-39.285-9.684-50.572-104.748-71.107-164.825-173.814-164.825-281.841 0-200.758 195.989-364.089 436.907-364.089s436.907 163.33 436.907 364.089-195.989 364.089-436.907 364.089c-2.256 0-4.187 0.873-6.335 1.275-17.221-3.094-34.662 5.935-40.706 22.974-6.992 19.77-52.756 53.083-107.116 83.957 19.842-66.228 10.34-80.428 3.97-89.857-7.647-11.36-20.388-18.131-34.042-18.131-20.099 0-36.407 16.274-36.407 36.407 0 6.627 1.747 12.816 4.843 18.17-3.677 20.717-19.588 69.212-37.61 113.596-5.607 13.762-2.256 29.564 8.411 39.903 6.916 6.7 16.058 10.229 25.34 10.229 4.989 0 10.014-1.020 14.783-3.131 41.506-18.496 167.99-78.642 213.465-142.94 277.109-4.003 501.132-198.098 501.132-436.541z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)