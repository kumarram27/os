import{F as g,P as m}from"./index-DmhMgyur.js";import{o as w}from"./command-nBL1aO7T-CliNWZCP.js";const d=1.25,c=[["                        (@@) (  ) (@)  ( )  @@   ()   @   o   @   o","                   (   )","               (@@@@)","            (    )","","          (@@@)"],["                        (  ) (@@) ( )  (@)  ()    @@    o    @    o   @","                   (@@@)","               (    )","            (@@@@)","","          (   )"]],h=["      ====        ________                ___________","  _D _|  |_______/        \\__I_I_____===__|_________|","   |(_)---  |   H\\________/ |   |        =|___ ___|  ","   /     |  |   H  |  |     |   |         ||_| |_||  ","  |      |  |   H  |__--------------------| [___] |  ","  | ________|___H__/__|_____/[][]~\\_______|       |  ","  |/ |   |-----------I_____I [][] []  D   |=======|__"],u=[["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\O=====O=====O=====O_/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=O=====O=====O=====O   |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-O=====O=====O=====O \\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=   O=====O=====O=====O|_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\_O=====O=====O=====O/      \\_/           "]].reverse(),p=["                             ","    _________________        ","   _|                \\_____A "," =|                        | "," -|                        | ","__|________________________|_","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],H=[[" _______================_______ ","  |  | ___  ___  ___  ___ |  |  ","  |  | | |  | |  | |  | | |  |  ","  |  | |_|  |_|  |_|  |_| |  |  ","  |  |                    |  |  ","__|__|____________________|__|__","_|____________________________|_","   |_D__D__D_|     |_D__D__D_|  ","    \\_/   \\_/       \\_/   \\_/   "],["                             ","  ________========__HH____   "," /                  HH    \\  ","/                   HH     \\ ","\\                   HH     / ","_\\__________________HH____/__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             ","                             ","                             ","                             ","                             ","_____________________________","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             ","    _|__|___________|__|___  ","   (_|__|___________|__|___) ","   _(|__|___________|__|__)_ ","  (__|__|___________|__|____)","_(___|__|___________|__|__)__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             "," ___________________________ "," \\      |           |      / ","  \\     |           |     /  ","  |\\    |           |    /|  ","__|_\\___|___________|___/_|__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "]];function I(s,D=1){const n=c[0].length,t=h.length+u[0].length,_=p.length,e=n+t-_,O=c[Math.round(s/4)%c.length],a=h,f=u[s%u.length],r=50-s;return`
${O.concat(a,f).map((o,i)=>{if(i>=e&&D>0)for(let l=0;l<D;l++)l===0?o+=p[i-e]:o+=H[(l-1)%H.length][i-e];return r===0?o:r>0?" ".repeat(r)+o:(o=o.slice(-r),o)}).join(`
`)}
`}const E=new w().setManual({purpose:"Show animations aimed to correct users who accidentally enter sl instead of ls. SL stands for Steam Locomotive.",usage:`sl
sl -w number`,options:{"-w number":"Set the amount of wagons (defaults to 1)"}}).addOption({short:"w",long:"wagons",isInput:!0}).setExecute(function(s,D){const{inputs:n}=D;let t=1;if(n!=null&&n.w&&(t=parseInt(n.w),!t||t<0))return g(this.name,"Please specify a valid amount of wagons");const _=new m;let e=0;const O=setInterval(()=>{const a=I(e,t);_.send(a),e++,a.trim().length===0&&_.stop()},100/d);return _.on(m.EVENT_NAMES.stop,()=>{clearInterval(O)}),_.start(),_});export{E as sl};
