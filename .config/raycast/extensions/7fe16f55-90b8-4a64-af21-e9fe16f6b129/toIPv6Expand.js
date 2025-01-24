"use strict";var D=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var K=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},Q=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of G(t))!J.call(e,i)&&i!==r&&D(e,i,{get:()=>t[i],enumerable:!(n=Y(t,i))||n.enumerable});return e};var U=e=>Q(D({},"__esModule",{value:!0}),e);var be={};K(be,{default:()=>z});module.exports=U(be);var Z=Object.defineProperty,E=(e,t)=>{for(var r in t)Z(e,r,{get:t[r],enumerable:!0})},N=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},g=(e,t,r)=>(N(e,t,"read from private field"),r?r.call(e):t.get(e)),j=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},M=(e,t,r,n)=>(N(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),_={};E(_,{contains:()=>ie,ip2long:()=>ee,isCIDR:()=>re,isConflict:()=>ne,isValidIP:()=>B,long2ip:()=>te});function ee(e){return B(e)?c.ip2long(e)||u.ip2long(e):!1}function te(e){return typeof e!="number"&&typeof e!="bigint"?!1:c.long2ip(e)||u.long2ip(e)}function re(e){return typeof e!="string"?!1:c.isCIDR(e)||u.isCIDR(e)}function B(e){return typeof e!="string"?!1:c.isValidIP(e)||u.isValidIP(e)}function ne(e){return!Array.isArray(e)||e.length===0?!1:c.isConflict(e)||u.isConflict(e)}function ie(e,t){return typeof e!="string"||typeof t!="string"?!1:c.contains(e,t)||u.contains(e,t)}var c={};E(c,{contains:()=>T,ip2long:()=>a,ipRange:()=>k,isCIDR:()=>se,isConflict:()=>le,isEqual:()=>ae,isPrivate:()=>fe,isSameSubnet:()=>pe,isValidIP:()=>d,isValidMask:()=>v,long2ip:()=>p,parseCIDR:()=>A,parseSubnet:()=>ue,toBinHex:()=>de,toIPv6Format:()=>ye,toInverseMask:()=>he,toMaskLength:()=>L,toSubnetMask:()=>P});function a(e){if(!d(e))return!1;let t=0,r=e.split(".");for(let n of r)t=(t<<8)+ +n;return t>>>0}function p(e){if(typeof e!="number"||isNaN(e))return!1;if(e>=0&&e<=4294967295){let t=[];for(let r=3;r>=0;r--)t.push(e>>>r*8&255);return t.join(".")}else return!1}var h,b,oe=class x{constructor(t,r){if(j(this,h,void 0),j(this,b,void 0),+t<0||+t>4294967295||+r<0||+r>4294967295)throw new Error("Invalid start or end IPv4 address");M(this,h,t),M(this,b,r)}static fromLong(t,r){if(typeof t!="number"||typeof r!="number")throw new Error("Invalid start or end IPv4 address");if(+r<+t)throw new Error("Invalid range value, end must be greater than or equal to start");return new x(t,r)}static fromString(t,r){let n=a(t),i=a(r);if(typeof n!="number"||typeof i!="number")throw new Error("Invalid start or end IPv4 address");if(i<n)throw new Error("Invalid range value, end must be greater than or equal to start");return new x(n,i)}ip2long(){return[g(this,h),g(this,b)]}long2ip(){return[p(g(this,h)),p(g(this,b))]}ipCount(){return g(this,b)-g(this,h)+1}contains(t){let r=a(t);return typeof r!="number"?!1:r>=g(this,h)&&r<=g(this,b)}};h=new WeakMap,b=new WeakMap;var k=oe;function se(e){return typeof e!="string"?!1:typeof A(e)=="object"}function ae(e,t){return typeof e=="number"&&(e<0||e>4294967295)||typeof t=="number"&&(t<0||t>4294967295)||(typeof e=="string"&&(e=a(e)),typeof t=="string"&&(t=a(t)),typeof e!="number"||typeof t!="number")?!1:e===t}function T(e,t){let r=A(e);if(typeof r!="object"||!d(t))return!1;let{cidrMask:n,firstHost:i,lastHost:o,networkAddress:f,broadcastAddress:l}=r;return n>=31?k.fromString(i,o).contains(t):k.fromString(f,l).contains(t)}function d(e,t={strict:!1}){return t.strict?/^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)){3}$/.test(e):/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(e)}function fe(e){if(!d(e))return!1;let t=[{start:"10.0.0.0",end:"10.255.255.255"},{start:"127.0.0.0",end:"127.255.255.255"},{start:"172.16.0.0",end:"172.31.255.255"},{start:"169.254.0.0",end:"169.254.255.255"},{start:"192.168.0.0",end:"192.168.255.255"}];for(let r of t)if(k.fromString(r.start,r.end).contains(e))return!0;return!1}function A(e){if(typeof e!="string")return!1;let[t,r]=e.split("/");if(t===void 0||r===void 0||r===""||!d(t,{strict:!0})||!v(+r))return!1;let n=32-+r,i=a(t),o=Number(0b1n<<BigInt(n)),f=+r?i>>n<<n>>>0:0,l=(f|o-1)>>>0;return{ipCount:o,cidrMask:+r,usableCount:+r<31?o-2:o,subnetMask:P(+r),networkAddress:+r<31?p(f):"",broadcastAddress:+r<31?p(l):"",firstHost:p(f+(+r<31?1:0)),lastHost:p(l-(+r<31?1:0))}}function le(e){if(!Array.isArray(e)||e.length===0)return!1;let t=[];for(let r of e){let n=A(r);typeof n=="object"&&t.push({cidr:r,networkAddress:n.networkAddress||n.firstHost})}for(let r=0;r<t.length;r++)for(let n=r+1;n<t.length;n++){let i=T(t[n].cidr,t[r].networkAddress),o=T(t[r].cidr,t[n].networkAddress);if(i||o)return!0}return!1}function ue(e,t){if(!d(e)||!v(t))return!1;let r=L(t);return A(`${e}/${r}`)}function v(e){if(typeof e=="number"&&!isNaN(e))return!(e<0||e>32);if(typeof e=="string"){let t=a(e);return typeof t!="number"?!1:/^1*0*$/.test(t.toString(2).padStart(32,"0"))}else return!1}function pe(e,t,r){if(!d(e)||!d(t)||!v(r))return!1;let n=a(e),i=a(t);typeof r=="number"&&(r=P(r));let o=a(r);return(n&o)===(i&o)}function de(e){if(!d(e))return!1;let t=a(e);return{decimal:t,hex:`0x${t.toString(16).padStart(8,"0")}`,binary:t.toString(2).padStart(32,"0")}}var u={};E(u,{compressedForm:()=>R,contains:()=>V,expandedForm:()=>X,ip2long:()=>m,isCIDR:()=>ce,isConflict:()=>me,isEqual:()=>ge,isValidIP:()=>I,long2ip:()=>H,parseCIDR:()=>C});function m(e){if(!I(e))return!1;let t=[];e=X(e);let r=e.split(":");for(let n=0;n<r.length;n++){let i=parseInt(r[n],16);t.push(i.toString(2).padStart(16,"0"))}return BigInt(`0b${t.join("")}`)}function R(e){if(!I(e))return!1;if(m(e)===0n)return"::";e=X(e);let t=e.split(":").map(n=>{let i=parseInt(n,16);return i?i.toString(16):"X"}).join(":"),r=[/(X:X:X:X:X:X:X)/,/(X:X:X:X:X:X)/,/(X:X:X:X:X)/,/(X:X:X:X)/,/(X:X:X)/,/(X:X)/];for(let n=0;n<r.length;n++)if(t.match(r[n]))return t.replace(r[n],":").replace(":::","::").replaceAll("X","0");return t.replaceAll("X","0")}function H(e){if(typeof e!="bigint")return!1;if(e>=0n&&e<=340282366920938463463374607431768211455n){let t=[],r=e.toString(16).padStart(32,"0");for(let n=0;n<8;n++)t.push(r.slice(n*4,(n+1)*4));return R(t.join(":"))}else return!1}function V(e,t){let r=C(e);if(typeof r!="object"||!I(t))return!1;let{lastHost:n,firstHost:i}=r,o=m(t),f=m(n),l=m(i);return o>=l&&o<=f}function ce(e){return typeof e!="string"?!1:typeof C(e)=="object"}function ge(e,t){return typeof e=="bigint"&&(e<0n||e>340282366920938463463374607431768211455n)||typeof t=="bigint"&&(t<0||t>340282366920938463463374607431768211455n)||(typeof e=="string"&&(e=m(e)),typeof t=="string"&&(t=m(t)),typeof e!="bigint"||typeof t!="bigint")?!1:e===t}function I(e){return/^[\s]*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}))|:)))(%.+)?[\s]*$/.test(e)}function me(e){if(!Array.isArray(e)||e.length===0)return!1;let t=[];for(let r of e){let n=C(r);typeof n=="object"&&t.push({cidr:r,firstHost:n.firstHost})}for(let r=0;r<t.length;r++)for(let n=r+1;n<t.length;n++){let i=V(t[n].cidr,t[r].firstHost),o=V(t[r].cidr,t[n].firstHost);if(i||o)return!0}return!1}function C(e){if(typeof e!="string")return!1;let[t,r]=e.split("/");if(t===void 0||r===void 0||r==="")return!1;let n=+r;if(!I(t)||isNaN(n)||n<0||n>128)return!1;let i=BigInt(128-n),o=m(t),f=BigInt(0b1n<<i),l=o>>i<<i,w=H(l),O=H(l|f-1n);return{ipCount:f,firstHost:w,lastHost:O,prefixLength:n}}function X(e){if(!I(e))return!1;if(e==="::")return"0000:".repeat(8).slice(0,-1);let t=e.split(":");for(let n=0;n<t.length;n++)t[n]===""&&t[n+1]===""&&t.splice(n,1);let r=t[t.length-1];if(c.isValidIP(r)){let n=c.toBinHex(r).hex.slice(2);t.pop()&&t.push(n.slice(0,4),n.slice(4))}return t.map(n=>n?n.padStart(4,"0"):"0000:".repeat(9-t.length).slice(0,-1)).join(":")}function ye(e){if(!d(e))return!1;let t=a(e),r=p(t);return{mapped:`::ffff:${r}`,comperssed:R(`::ffff:${r}`),expanded:X(`::ffff:${r}`)}}function P(e){if(typeof e!="number"||isNaN(e)||!v(e))return!1;let t=4294967295<<32-e;return e?p(t>>>0):"0.0.0.0"}function L(e){if(typeof e!="string"||!v(e))return!1;let t=a(e);return t===0?0:t.toString(2).replaceAll("0","").length}function he(e){if(!v(e))return!1;typeof e=="number"&&(e=P(e));let t=~a(e)>>>0;return p(t)}var $=require("react"),s=require("@raycast/api");var S=require("@raycast/api"),F=require("react/jsx-runtime");var q=[{id:"expanded",name:"expanded"},{id:"compressed",name:"compressed"}];function W(e){let{drinkTypes:t,onDrinkTypeChange:r}=e;return(0,F.jsx)(S.List.Dropdown,{storeValue:!0,tooltip:"Select IP Version",onChange:n=>r(n),children:(0,F.jsx)(S.List.Dropdown.Section,{children:t.map(n=>(0,F.jsx)(S.List.Dropdown.Item,{title:n.name,value:n.id},n.id))})})}var y=require("react/jsx-runtime");function z(e){let{keywork:t}=e.arguments,[r,n]=(0,$.useState)("expanded"),[i,o]=(0,$.useState)(t||""),f=i.trim()==="",l=f?!1:u.isValidIP(i),w=l?(r==="expanded"?u.expandedForm(i):u.compressedForm(i)).toString():"";return(0,y.jsx)(s.List,{throttle:!0,searchText:i,onSearchTextChange:o,searchBarPlaceholder:"Input IPv6 address that needs to be converted\uFF01",searchBarAccessory:(0,y.jsx)(W,{drinkTypes:q,onDrinkTypeChange:n}),children:f?(0,y.jsx)(s.List.EmptyView,{icon:{source:s.Icon.Warning,tintColor:s.Color.Yellow},title:"Please enter the IPv6 address that needs to be converted\uFF01"}):l?(0,y.jsx)(s.List.Item,{icon:s.Icon.Clipboard,title:w,subtitle:i,actions:(0,y.jsx)(s.ActionPanel,{children:(0,y.jsx)(s.Action.CopyToClipboard,{content:w})})}):(0,y.jsx)(s.List.EmptyView,{icon:{source:s.Icon.XMarkCircle,tintColor:s.Color.Red},title:"Please enter a valid IPv6 address\uFF01"})})}
