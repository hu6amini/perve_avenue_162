document.addEventListener('DOMContentLoaded', function() {function resizeTextarea(){const e=document.querySelector("textarea#Post");function updateTextareaHeight(){e.style.height="0",e.style.height=e.scrollHeight+"px",e.style.maxHeight="650px"}e&&(updateTextareaHeight(),e.addEventListener("input",updateTextareaHeight),window.addEventListener("load",updateTextareaHeight),e.addEventListener("paste",(()=>{setTimeout(updateTextareaHeight,0)})))}resizeTextarea();const textareaObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches("textarea#Post")&&resizeTextarea()}))}))}));textareaObserver.observe(document.body,{childList:!0,subtree:!0});});
