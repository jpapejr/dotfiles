"use strict";var yn=Object.create;var B=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var gn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,wn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bn=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},Ee=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of gn(t))!wn.call(e,s)&&s!==n&&B(e,s,{get:()=>t[s],enumerable:!(r=Sn(t,s))||r.enumerable});return e};var Ie=(e,t,n)=>(n=e!=null?yn(xn(e)):{},Ee(t||!e||!e.__esModule?B(n,"default",{value:e,enumerable:!0}):n,e)),vn=e=>Ee(B({},"__esModule",{value:!0}),e);var Ge=c((gs,Ce)=>{Ce.exports=Pe;Pe.sync=In;var Te=require("fs");function En(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ae(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:En(t,n)}function Pe(e,t,n){Te.stat(e,function(r,s){n(r,r?!1:Ae(s,e,t))})}function In(e,t){return Ae(Te.statSync(e),e,t)}});var _e=c((xs,qe)=>{qe.exports=Re;Re.sync=Tn;var Oe=require("fs");function Re(e,t,n){Oe.stat(e,function(r,s){n(r,r?!1:Ne(s,t))})}function Tn(e,t){return Ne(Oe.statSync(e),t)}function Ne(e,t){return e.isFile()&&An(e,t)}function An(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=n&l||n&u&&s===i||n&a&&r===o||n&f&&o===0;return h}});var ke=c((bs,$e)=>{var ws=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Ge():j=_e();$e.exports=J;J.sync=Pn;function J(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){J(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Pn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var De=c((vs,Ue)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Le=require("path"),Cn=I?";":":",Me=ke(),Be=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),je=(e,t)=>{let n=t.colon||Cn,r=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(n):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Fe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=je(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===r.length)return t.all&&i.length?f(i):h(Be(e));let m=r[l],y=/^".*"$/.test(m)?m.slice(1,-1):m,S=Le.join(y,e),g=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;f(u(g,l,0))}),u=(l,f,h)=>new Promise((m,y)=>{if(h===s.length)return m(a(f+1));let S=s[h];Me(l+S,{pathExt:o},(g,E)=>{if(!g&&E)if(t.all)i.push(l+S);else return m(l+S);return m(u(l,f,h+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Gn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=je(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=Le.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<r.length;h++){let m=f+r[h];try{if(Me.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Be(e)};Ue.exports=Fe;Fe.sync=Gn});var te=c((Es,ee)=>{"use strict";var He=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ee.exports=He;ee.exports.default=He});var ze=c((Is,We)=>{"use strict";var Xe=require("path"),On=De(),Rn=te();function Ke(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=On.sync(e.command,{path:n[Rn({env:n})],pathExt:t?Xe.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Xe.resolve(s?e.options.cwd:"",i)),i}function Nn(e){return Ke(e)||Ke(e,!0)}We.exports=Nn});var Ve=c((Ts,re)=>{"use strict";var ne=/([()\][%!^"`<>&|;, *?])/g;function qn(e){return e=e.replace(ne,"^$1"),e}function _n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ne,"^$1"),t&&(e=e.replace(ne,"^$1")),e}re.exports.command=qn;re.exports.argument=_n});var Qe=c((As,Ye)=>{"use strict";Ye.exports=/^#!(.*)/});var Je=c((Ps,Ze)=>{"use strict";var $n=Qe();Ze.exports=(e="")=>{let t=e.match($n);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var tt=c((Cs,et)=>{"use strict";var se=require("fs"),kn=Je();function Ln(e){let n=Buffer.alloc(150),r;try{r=se.openSync(e,"r"),se.readSync(r,n,0,150,0),se.closeSync(r)}catch{}return kn(n.toString())}et.exports=Ln});var ot=c((Gs,st)=>{"use strict";var Mn=require("path"),nt=ze(),rt=Ve(),Bn=tt(),jn=process.platform==="win32",Fn=/\.(?:com|exe)$/i,Un=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Dn(e){e.file=nt(e);let t=e.file&&Bn(e.file);return t?(e.args.unshift(e.file),e.command=t,nt(e)):e.file}function Hn(e){if(!jn)return e;let t=Dn(e),n=!Fn.test(t);if(e.options.forceShell||n){let r=Un.test(t);e.command=Mn.normalize(e.command),e.command=rt.command(e.command),e.args=e.args.map(o=>rt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Xn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Hn(r)}st.exports=Xn});var ct=c((Os,at)=>{"use strict";var oe=process.platform==="win32";function ie(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Kn(e,t){if(!oe)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=it(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function it(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawn"):null}function Wn(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawnSync"):null}at.exports={hookChildProcess:Kn,verifyENOENT:it,verifyENOENTSync:Wn,notFoundError:ie}});var dt=c((Rs,T)=>{"use strict";var ut=require("child_process"),ae=ot(),ce=ct();function lt(e,t,n){let r=ae(e,t,n),s=ut.spawn(r.command,r.args,r.options);return ce.hookChildProcess(s,r),s}function zn(e,t,n){let r=ae(e,t,n),s=ut.spawnSync(r.command,r.args,r.options);return s.error=s.error||ce.verifyENOENTSync(s.status,r),s}T.exports=lt;T.exports.spawn=lt;T.exports.sync=zn;T.exports._parse=ae;T.exports._enoent=ce});var pt=c((Ns,ft)=>{"use strict";ft.exports=e=>{let t=typeof e=="string"?`
`:10,n=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var yt=c((qs,q)=>{"use strict";var N=require("path"),mt=te(),ht=e=>{e={cwd:process.cwd(),path:process.env[mt()],execPath:process.execPath,...e};let t,n=N.resolve(e.cwd),r=[];for(;t!==n;)r.push(N.join(n,"node_modules/.bin")),t=n,n=N.resolve(n,"..");let s=N.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(N.delimiter)};q.exports=ht;q.exports.default=ht;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=mt({env:t});return e.path=t[n],t[n]=q.exports(e),t}});var gt=c((_s,ue)=>{"use strict";var St=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ue.exports=St;ue.exports.default=St});var wt=c(($s,U)=>{"use strict";var Vn=gt(),F=new WeakMap,xt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Vn(o,e),F.set(o,r),o};U.exports=xt;U.exports.default=xt;U.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var bt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var Yn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=Yn});var le=c(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.SIGRTMAX=A.getRealtimeSignals=void 0;var Qn=function(){let e=Et-vt+1;return Array.from({length:e},Zn)};A.getRealtimeSignals=Qn;var Zn=function(e,t){return{name:`SIGRT${t+1}`,number:vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},vt=34,Et=64;A.SIGRTMAX=Et});var It=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var Jn=require("os"),er=bt(),tr=le(),nr=function(){let e=(0,tr.getRealtimeSignals)();return[...er.SIGNALS,...e].map(rr)};H.getSignals=nr;var rr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Jn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var At=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.signalsByNumber=P.signalsByName=void 0;var sr=require("os"),Tt=It(),or=le(),ir=function(){return(0,Tt.getSignals)().reduce(ar,{})},ar=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}}},cr=ir();P.signalsByName=cr;var ur=function(){let e=(0,Tt.getSignals)(),t=or.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>lr(s,e));return Object.assign({},...n)},lr=function(e,t){let n=dr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:u}}},dr=function(e,t){let n=t.find(({name:r})=>sr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},fr=ur();P.signalsByNumber=fr});var Ct=c((js,Pt)=>{"use strict";var{signalsByName:pr}=At(),mr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",hr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:pr[s].description,y=r&&r.code,g=`Command ${mr({timedOut:u,timeout:h,errorCode:y,signal:s,signalDescription:m,exitCode:o,isCanceled:l})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",L=E?`${g}
${r.message}`:g,M=[L,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=m,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=!!u,r.isCanceled=l,r.killed=f&&!u,r};Pt.exports=hr});var Ot=c((Fs,de)=>{"use strict";var X=["stdin","stdout","stderr"],yr=e=>X.some(t=>e[t]!==void 0),Gt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(r=>e[r]);if(yr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,X.length);return Array.from({length:n},(r,s)=>t[s])};de.exports=Gt;de.exports.node=e=>{let t=Gt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Rt=c((Us,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var kt=c((Ds,O)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(Nt=require("assert"),C=Rt(),qt=/^win/i.test(d.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new _,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),O.exports=function(e,t){if(!b(global.process))return function(){};Nt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&fe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){p.removeListener(n,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&W()};return p.on(n,e),r},W=function(){!G||!b(global.process)||(G=!1,C.forEach(function(t){try{d.removeListener(t,z[t])}catch{}}),d.emit=V,d.reallyExit=pe,p.count-=1)},O.exports.unload=W,v=function(t,n,r){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,n,r))},z={},C.forEach(function(e){z[e]=function(){if(b(global.process)){var n=d.listeners(e);n.length===p.count&&(W(),v("exit",null,e),v("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),O.exports.signals=function(){return C},G=!1,fe=function(){G||!b(global.process)||(G=!0,p.count+=1,C=C.filter(function(t){try{return d.on(t,z[t]),!0}catch{return!1}}),d.emit=$t,d.reallyExit=_t)},O.exports.load=fe,pe=d.reallyExit,_t=function(t){b(global.process)&&(d.exitCode=t||0,v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),pe.call(d,d.exitCode))},V=d.emit,$t=function(t,n){if(t==="exit"&&b(global.process)){n!==void 0&&(d.exitCode=n);var r=V.apply(this,arguments);return v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),r}else return V.apply(this,arguments)}):O.exports=function(){return function(){}};var Nt,C,qt,_,p,W,v,z,G,fe,pe,_t,V,$t});var Mt=c((Hs,Lt)=>{"use strict";var Sr=require("os"),gr=kt(),xr=1e3*5,wr=(e,t="SIGTERM",n={})=>{let r=e(t);return br(e,t,n,r),r},br=(e,t,n,r)=>{if(!vr(t,n,r))return;let s=Ir(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},vr=(e,{forceKillAfterTimeout:t},n)=>Er(e)&&t!==!1&&n,Er=e=>e===Sr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Ir=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return xr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Tr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Ar=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Pr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,u)=>{s=setTimeout(()=>{Ar(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Cr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Gr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=gr(()=>{e.kill()});return r.finally(()=>{s()})};Lt.exports={spawnedKill:wr,spawnedCancel:Tr,setupTimeout:Pr,validateTimeout:Cr,setExitHandler:Gr}});var jt=c((Xs,Bt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Bt.exports=x});var Ut=c((Ks,Ft)=>{"use strict";var{PassThrough:Or}=require("stream");Ft.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Or({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",u=>{a.push(u),s?i=a.length:i+=u.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Dt=c((Ws,$)=>{"use strict";var{constants:Rr}=require("buffer"),Nr=require("stream"),{promisify:qr}=require("util"),_r=Ut(),$r=qr(Nr.pipeline),Y=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function me(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=_r(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Rr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await $r(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Y)})}),r.getBufferedValue()}$.exports=me;$.exports.buffer=(e,t)=>me(e,{...t,encoding:"buffer"});$.exports.array=(e,t)=>me(e,{...t,array:!0});$.exports.MaxBufferError=Y});var Xt=c((zs,Ht)=>{"use strict";var{PassThrough:kr}=require("stream");Ht.exports=function(){var e=[],t=new kr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Vt=c((Vs,zt)=>{"use strict";var Wt=jt(),Kt=Dt(),Lr=Xt(),Mr=(e,t)=>{t===void 0||e.stdin===void 0||(Wt(t)?t.pipe(e.stdin):e.stdin.end(t))},Br=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Lr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},he=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Kt(e,{encoding:t,maxBuffer:r}):Kt.buffer(e,{maxBuffer:r})},jr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=ye(e,{encoding:r,buffer:s,maxBuffer:o}),u=ye(t,{encoding:r,buffer:s,maxBuffer:o}),l=ye(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},he(e,a),he(t,u),he(n,l)])}},Fr=({input:e})=>{if(Wt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};zt.exports={handleInput:Mr,makeAllStream:Br,getSpawnedResult:jr,validateInputSync:Fr}});var Qt=c((Ys,Yt)=>{"use strict";var Ur=(async()=>{})().constructor.prototype,Dr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Ur,e)]),Hr=(e,t)=>{for(let[n,r]of Dr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:s})}return e},Xr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});Yt.exports={mergePromise:Hr,getSpawnedPromise:Xr}});var en=c((Qs,Jt)=>{"use strict";var Zt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Kr=/^[\w.-]+$/,Wr=/"/g,zr=e=>typeof e!="string"||Kr.test(e)?e:`"${e.replace(Wr,'\\"')}"`,Vr=(e,t)=>Zt(e,t).join(" "),Yr=(e,t)=>Zt(e,t).map(n=>zr(n)).join(" "),Qr=/ +/g,Zr=e=>{let t=[];for(let n of e.trim().split(Qr)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};Jt.exports={joinCommand:Vr,getEscapedCommand:Yr,parseCommand:Zr}});var cn=c((Zs,R)=>{"use strict";var Jr=require("path"),Se=require("child_process"),es=dt(),ts=pt(),ns=yt(),rs=wt(),Q=Ct(),nn=Ot(),{spawnedKill:ss,spawnedCancel:os,setupTimeout:is,validateTimeout:as,setExitHandler:cs}=Mt(),{handleInput:us,getSpawnedResult:ls,makeAllStream:ds,validateInputSync:fs}=Vt(),{mergePromise:tn,getSpawnedPromise:ps}=Qt(),{joinCommand:rn,parseCommand:sn,getEscapedCommand:on}=en(),ms=1e3*1e3*100,hs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?{...process.env,...e}:e;return n?ns.env({env:o,cwd:r,execPath:s}):o},an=(e,t,n={})=>{let r=es._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:ms,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=hs(n),n.stdio=nn(n),process.platform==="win32"&&Jr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},k=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ts(t):t,Z=(e,t,n)=>{let r=an(e,t,n),s=rn(e,t),o=on(e,t);as(r.options);let i;try{i=Se.spawn(r.file,r.args,r.options)}catch(y){let S=new Se.ChildProcess,g=Promise.reject(Q({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return tn(S,g)}let a=ps(i),u=is(i,r.options,a),l=cs(i,r.options,u),f={isCanceled:!1};i.kill=ss.bind(null,i.kill.bind(i)),i.cancel=os.bind(null,i,f);let m=rs(async()=>{let[{error:y,exitCode:S,signal:g,timedOut:E},L,M,hn]=await ls(i,r.options,l),xe=k(r.options,L),we=k(r.options,M),be=k(r.options,hn);if(y||S!==0||g!==null){let ve=Q({error:y,exitCode:S,signal:g,stdout:xe,stderr:we,all:be,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:f.isCanceled,killed:i.killed});if(!r.options.reject)return ve;throw ve}return{command:s,escapedCommand:o,exitCode:0,stdout:xe,stderr:we,all:be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return us(i,r.options.input),i.all=ds(i,r.options),tn(i,m)};R.exports=Z;R.exports.sync=(e,t,n)=>{let r=an(e,t,n),s=rn(e,t),o=on(e,t);fs(r.options);let i;try{i=Se.spawnSync(r.file,r.args,r.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=k(r.options,i.stdout,i.error),u=k(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Q({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[n,...r]=sn(e);return Z(n,r,t)};R.exports.commandSync=(e,t)=>{let[n,...r]=sn(e);return Z.sync(n,r,t)};R.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=nn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Z(o,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var ys={};bn(ys,{default:()=>mn});module.exports=vn(ys);var w=require("@raycast/api");var un=Ie(require("node:process"),1),ln=Ie(cn(),1);async function ge(e){if(un.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,ln.default)("osascript",["-e",e]);return t}var dn=require("@raycast/api");async function fn(){return!!(await(0,dn.getApplications)()).find(n=>n.bundleId==="com.if.Amphetamine")}var pn="https://apps.apple.com/br/app/amphetamine/id937984704";async function mn(e){let t=e?.duration,n=e?.interval,r=t===1?n?.substring(0,n.length-1):n,s=new w.Toast({title:"Starting a new session",style:w.Toast.Style.Animated});return s.show(),await fn()?await ge(`
    tell application "Amphetamine"
    		return session is active
    end tell
  `)==="true"?(s.title="A session is already running",s.style=w.Toast.Style.Failure,!1):(await ge(`
    tell application "Amphetamine"
        start new session ${t?`with options {duration: ${t}, interval: ${n}, displaySleepAllowed: false}`:""}
    end tell
  `),await(0,w.showHUD)(t?`New session started with ${t} ${r}`:"New default session started"),!0):(s.title="Amphetamine is no installed",s.message="Press Command + D to download",s.primaryAction={title:"Download",shortcut:{modifiers:["cmd"],key:"d"},onAction:async()=>await(0,w.open)(pn)},s.style=w.Toast.Style.Failure,!1)}
