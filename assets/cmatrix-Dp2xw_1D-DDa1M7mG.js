import{P as u,B as S,e as z,w,k as x,W as p}from"./index-DmhMgyur.js";import{o as d}from"./command-nBL1aO7T-CliNWZCP.js";const g=1.25,f=75,l=20,h="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.*\\/()#@&$!?%°:<>[]",c={framesBetweenSpawn:30,fallSpeed:1,minSize:5,maxSize:25};function E(i,r,o){if(i%c.framesBetweenSpawn){const e={position:new S(z(0,f),l).round(),size:Math.round(z(c.minSize,c.maxSize))};o.push(e)}return o.forEach(e=>{e.position.y-=c.fallSpeed;for(let t=0;t<c.fallSpeed;t++){const s=e.position.x,n=e.position.y+t+e.size;n<l&&n>=0&&(r[n][s]=" ")}if(e.position.y+e.size<=0||e.position.x>=f)return w(e,o);for(let t=0;t<e.size;t++){const s=x(h.split(""));let n=t==0?p.fg.white:p.fg.green;t>e.size/2&&(n=p.fg.green+p.decoration.dim);const a=e.position.x,m=e.position.y+t;a<f&&m<l&&m>=0&&(r[m][a]=n+s+p.reset)}}),[...r.map(e=>e.join(""))].reverse().join(`
`)}const M=new d().setManual({purpose:"Show a scrolling 'Matrix' like screen",usage:"cmatrix"}).setExecute(function(){const i=new u,r=[],o=[];for(let s=0;s<l;s++){const n=[];for(let a=0;a<f;a++)n.push(" ");o.push(n)}let e=0;const t=setInterval(()=>{const s=E(e,o,r);i.send(s),e++},100/g);return i.on(u.EVENT_NAMES.stop,()=>{clearInterval(t)}),i.start(),i});export{M as cmatrix};
