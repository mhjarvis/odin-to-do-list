(()=>{"use strict";class e{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}class t{constructor(e,t=[]){this.title=e,this.tasks=t}}let n=[],o=n[0];function c(t,n,c,l){let r=function(t,n,o,c){let l=[],r=new e(t,n,o,c);return l.push(r),l}(t,n,c,l);o.tasks.push(r)}function l(e,o){let c=new t(e,o);n.push(c),a()}function r(e){o=n[e]}function i(){return o}function s(){document.querySelector(".project-container");const e=document.querySelector(".new-project-button"),t=document.querySelector(".project-form-container");if("none"==e.style.display)return t.style.display="none",void(e.style.display="block");e.style.display="none",t.style.display="block"}const u=document.querySelector(".project-container"),d=document.querySelector(".task-container");function a(){u.innerHTML="";let e=n;console.log(e);for(let t=0;t<e.length;t++){const n=document.createElement("p");n.innerHTML=e[t].title,u.appendChild(n)}}!function(){const e=document.querySelector(".new-project-button"),t=document.querySelector(".add-button"),n=document.querySelector(".cancel-button");e.addEventListener("click",(()=>{s()})),t.addEventListener("click",(()=>{let e=document.querySelector("#project-name").value;s(),l(e)})),n.addEventListener("click",(()=>{s()}))}(),l("Default"),l("Week 1"),r(0),c("Work Out","get to the gym","10/10/22","high"),c("Go to Sleep","by 8:00","10/22/22","low"),a(),function(){d.innerHTML="";let e=i().tasks.length;for(let t=0;t<e;t++){console.log(i().tasks[t][0].title);const e=document.createElement("div");e.innerHTML=i().tasks[t][0].title,d.appendChild(e)}}(),r(0)})();