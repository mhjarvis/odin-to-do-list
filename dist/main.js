(()=>{"use strict";class t{constructor(t,e=[]){this.title=t,this.tasks=e}}class e{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}}function n(t,n,o,s){return new e(t,n,o,s)}let o,s=[];const r=document.querySelector(".task-container");function c(t){o=t}function i(){return o}function l(t){s[o].tasks.push(t)}function a(){const t=document.querySelector(".project-container");t.innerHTML="",r.innerHTML="";for(let e=0;e<s.length;e++){const n=document.createElement("h4");n.className="p"+e,n.innerText=s[e].title,t.appendChild(n)}if(s.length>0){let t=document.querySelector(".project-container").children;t[o].style.color="var(--darkGrayishBlue)",t[o].style.borderBottom="2px dashed var(--darkGrayishBlue",t[o].style.fontSize="2.7rem",console.log(t)}s[o].tasks.length>0&&function(){for(let t=0;t<s[o].tasks.length;t++){const e=document.createElement("div");e.id=`p${i}t${t}`,e.className="task",e.innerText=s[o].tasks[t].title,r.appendChild(e)}document.createElement("div")}(),u()}function u(){const t=document.querySelector(".new-project-button"),e=document.querySelectorAll(".project-container h4");t.addEventListener("click",(()=>{console.log("test")})),e.forEach((t=>{t.addEventListener("click",(function(t){let e=this.className.substring(1);c(e),a(),console.log(e)}))}))}u(),function(){c(0);for(let n=0;n<2;n++){e=new t("Project-"+n),s.push(e)}var e;let o=n("Eat Breakfast","Various Foods","10/10/22","high"),r=n("Buy Christmas Presents","none","10/23/22","low");l(o),l(r),a()}()})();