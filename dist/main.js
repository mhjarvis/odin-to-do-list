(()=>{"use strict";class t{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}}class e{constructor(t,e=[]){this.title=t,this.tasks=e}}let n=[],o=n[0];function c(e,n,c,r){let i=function(e,n,o,c){let r=[],i=new t(e,n,o,c);return r.push(i),r}(e,n,c,r);o.tasks.push(i)}function r(t,o){let c=new e(t,o);n.push(c),d()}function i(t){o=n[t]}function l(){return o}const s=document.querySelector(".project-container"),u=document.querySelector(".task-container");function d(){s.innerHTML="";let t=n;for(let e=0;e<t.length;e++){const n=document.createElement("p");n.innerHTML=t[e].title,s.appendChild(n)}}!function(){const t=document.querySelector(".new-project-button"),e=document.querySelector(".add-button"),n=document.querySelector(".cancel-button");t.addEventListener("click",(()=>{!function(){document.querySelector(".project-container");const t=document.querySelector(".new-project-button"),e=document.querySelector(".project-form-container");t.style.display="none",e.style.display="block"}()})),e.addEventListener("click",(()=>{r()})),n.addEventListener("click",(()=>{}))}(),r("Default"),r("Week 1"),i(0),c("Work Out","get to the gym","10/10/22","high"),c("Go to Sleep","by 8:00","10/22/22","low"),d(),function(){u.innerHTML="";let t=l().tasks.length;for(let e=0;e<t;e++){console.log(l().tasks[e][0].title);const t=document.createElement("div");t.innerHTML=l().tasks[e][0].title,u.appendChild(t)}}(),i(0)})();