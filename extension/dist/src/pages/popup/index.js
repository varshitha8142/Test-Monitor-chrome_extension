import"../../../assets/js/modulepreload-polyfill.0c213636.js";import{r as n,a,j as e,c as p}from"../../../assets/js/jsx-runtime.28b60716.js";function x({setLogin:s,newWindowRef:o}){const[t,c]=n.exports.useState(""),[i,g]=n.exports.useState(""),[d,m]=n.exports.useState(""),[u,h]=n.exports.useState(null),f=async()=>{const l=await fetch("http://localhost:3000/user",{method:"POST",body:JSON.stringify({name:t,email:i,invitecode:d}),headers:{"Content-Type":"application/json"}}),r=await l.json();l.ok?(chrome.storage.local.set({IsLogin:!0,User:r},()=>{console.log("login successful :",r)}),s({IsLogin:!0,User:r}),window.open("../newtab/index.html")):h(r.message)};return n.exports.useEffect(()=>{chrome.storage.local.get(["IsLogin","User"],l=>{l.IsLogin?(s({IsLogin:!0,User:l.User}),console.log(l)):s({IsLogin:!1,User:null})})},[]),a("div",{className:"w-full h-full bg-gray-100 rounded-md flex flex-col justify-center items-center gap-5",children:[e("h1",{className:"font-bold font-serif text-3xl",children:"Login Details"}),e("div",{className:"w-1/2",children:a("fieldset",{className:`border-2 hover:border-[#0198A5] rounded-lg  ${t!=""&&"border-[#0198A5]"}`,children:[e("legend",{className:"ml-2.5 text-[#0198A5]",children:"Name"}),e("div",{className:"flex w-full gap-2 px-2",children:e("input",{type:"email",className:"outline-none bg-transparent pl-2 w-full",value:t,onChange:l=>c(l.target.value)})})]})}),e("div",{className:"w-1/2",children:a("fieldset",{className:`border-2 hover:border-[#0198A5] rounded-lg  ${t!=""&&"border-[#0198A5]"}`,children:[e("legend",{className:"ml-2.5 text-[#0198A5]",children:"Email"}),e("div",{className:"flex w-full gap-2 px-2",children:e("input",{type:"email",className:"outline-none pl-2 bg-transparent w-full",value:i,onChange:l=>g(l.target.value)})})]})}),e("div",{className:"w-1/2",children:a("fieldset",{className:`border-2 hover:border-[#0198A5] rounded-lg  ${t!=""&&"border-[#0198A5]"}`,children:[e("legend",{className:"ml-2.5 text-[#0198A5]",children:"Invite Code"}),e("div",{className:"flex w-full gap-2 px-2",children:e("input",{type:"text",className:"outline-none pl-2 bg-transparent w-full",value:d,onChange:l=>m(l.target.value)})})]})}),e("div",{children:u&&e("h1",{className:"border border-red-300 p-2 rounded-lg bg-red-200",children:u})}),e("div",{className:"w-full flex justify-center  gap-10",children:e("button",{className:"w-1/5 h-10 bg-green-400 rounded-md active:scale-95",onClick:f,children:"Start Test"})})]})}function w({setLogin:s}){return e("div",{className:"w-full h-full bg-[#00000020] rounded-md flex flex-col justify-center items-center gap-5",children:e("div",{className:"w-full flex justify-center  gap-10",children:e("button",{className:"w-1/5 h-10 bg-red-300 rounded-md active:scale-95",onClick:async()=>{const t=await fetch("http://localhost:3000/user",{method:"DELETE"}),c=await fetch("http://localhost:3000/image",{method:"DELETE"});t.ok&&c.ok&&(chrome.storage.local.remove(["IsLogin","User"],()=>{console.log("logout succefully")}),s({IsLogin:!1,User:null}))},children:"Logout"})})})}function N(){const[s,o]=n.exports.useState({IsLogin:!1,User:null});return e("div",{className:"w-[400px] h-[600px] bg-[#00000020]",children:s.IsLogin?e(w,{setLogin:o}):e(x,{setLogin:o})})}function b(){const s=document.querySelector("#app-container");if(!s)throw new Error("Can not find #app-container");p(s).render(e(N,{}))}b();
