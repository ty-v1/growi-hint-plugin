function d(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var p=g;function g(n,t,r){var e;return r==null&&(typeof t!="object"||Array.isArray(t))&&(r=t,t={}),e=Object.assign({type:String(n)},t),Array.isArray(r)?e.children=r:r!=null&&(e.value=String(r)),e}const f=p,u={"hint tip":/^!&gt;|!>\s/,"hint warn":/^\?&gt;|\?>\s/,"hint error":/^x&gt;|x>\s/},w=(n,t)=>{const r=(e,s,a)=>{const i=t(e,s,a);return Array.isArray(i.children)&&(i.children=i.children.map((o,c)=>r(o,c,e))),i};return r(n,null,null)};var h=()=>n=>w(n,t=>{const{children:r=[]}=t;if(t.type!=="paragraph")return t;const[{value:e,type:s},...a]=r;if(s!=="text"||!Object.values(u).some(l=>l.test(e)))return t;const[i,o]=Object.entries(u).find(([,l])=>l.test(e)),c={type:s,value:e.replace(o,"")};return f("paragraph",{data:{class:i,hProperties:{class:i}}},[c,...a])});const m=d(h),y=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:n}=growiFacade.markdownRenderer;n.customGenerateViewOptions=(...t)=>{const r=n.generateViewOptions(...t);return r.remarkPlugins.push(m),r}};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-hint-plugin"]={activate:y,deactivate:()=>{}};