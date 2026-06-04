(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="158",Ql=0,da=1,ec=2,$o=1,Qo=2,cn=3,Rn=0,Ut=1,Zt=2,bn=0,xi=1,pa=2,ma=3,ga=4,tc=5,Bn=100,nc=101,ic=102,_a=103,xa=104,sc=200,rc=201,ac=202,oc=203,Pr=204,Lr=205,lc=206,cc=207,hc=208,uc=209,fc=210,dc=211,pc=212,mc=213,gc=214,_c=0,xc=1,vc=2,Ls=3,Mc=4,Sc=5,yc=6,Ec=7,el=0,Tc=1,bc=2,wn=0,wc=1,Ac=2,Rc=3,tl=4,Cc=5,nl=300,Mi=301,Si=302,Dr=303,Ur=304,Bs=306,Ir=1e3,Jt=1001,Nr=1002,Dt=1003,va=1004,Ys=1005,Ht=1006,Pc=1007,Vi=1008,An=1009,Lc=1010,Dc=1011,Yr=1012,il=1013,En=1014,Tn=1015,Wi=1016,sl=1017,rl=1018,kn=1020,Uc=1021,Kt=1023,Ic=1024,Nc=1025,Gn=1026,yi=1027,Oc=1028,al=1029,Fc=1030,ol=1031,ll=1033,js=33776,Zs=33777,Js=33778,Ks=33779,Ma=35840,Sa=35841,ya=35842,Ea=35843,Bc=36196,Ta=37492,ba=37496,wa=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ua=37815,Ia=37816,Na=37817,Oa=37818,Fa=37819,Ba=37820,za=37821,$s=36492,ka=36494,Ga=36495,zc=36283,Ha=36284,Va=36285,Wa=36286,cl=3e3,Hn=3001,kc=3200,Gc=3201,hl=0,Hc=1,Wt="",Mt="srgb",mn="srgb-linear",jr="display-p3",zs="display-p3-linear",Ds="linear",at="srgb",Us="rec709",Is="p3",jn=7680,Xa=519,Vc=512,Wc=513,Xc=514,qc=515,Yc=516,jc=517,Zc=518,Jc=519,Or=35044,qa="300 es",Fr=1035,fn=2e3,Ns=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Br=180/Math.PI;function dn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Kc(n,e){return(n%e+e)%e}function er(n,e,t){return(1-t)*n+t*e}function Ya(n){return(n&n-1)===0&&n!==0}function zr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,a,o,c,h){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h)}set(e,t,i,s,r,a,o,c,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],f=i[7],d=i[2],g=i[5],_=i[8],x=s[0],m=s[3],p=s[6],E=s[1],M=s[4],S=s[7],A=s[2],R=s[5],C=s[8];return r[0]=a*x+o*E+c*A,r[3]=a*m+o*M+c*R,r[6]=a*p+o*S+c*C,r[1]=h*x+u*E+f*A,r[4]=h*m+u*M+f*R,r[7]=h*p+u*S+f*C,r[2]=d*x+g*E+_*A,r[5]=d*m+g*M+_*R,r[8]=d*p+g*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-i*r*u+i*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,d=o*c-u*r,g=h*r-a*c,_=t*f+i*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*h-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=g*x,e[7]=(i*c-h*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tr.makeScale(e,t)),this}rotate(e){return this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new Ye;function ul(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $c(){const n=Os("canvas");return n.style.display="block",n}const ja={};function Bi(n){n in ja||(ja[n]=!0,console.warn(n))}const Za=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ja=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[mn]:{transfer:Ds,primaries:Us,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:at,primaries:Us,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zs]:{transfer:Ds,primaries:Is,toReference:n=>n.applyMatrix3(Ja),fromReference:n=>n.applyMatrix3(Za)},[jr]:{transfer:at,primaries:Is,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ja),fromReference:n=>n.applyMatrix3(Za).convertLinearToSRGB()}},Qc=new Set([mn,zs]),tt={enabled:!0,_workingColorSpace:mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=es[e].toReference,s=es[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return es[n].primaries},getTransfer:function(n){return n===Wt?Ds:es[n].transfer}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zn;class fl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Os("canvas")),Zn.width=e.width,Zn.height=e.height;const i=Zn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ir(s[a].image)):r.push(ir(s[a]))}else r=ir(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ir(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class It extends bi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Jt,s=Jt,r=Ht,a=Vi,o=Kt,c=An,h=It.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=dn(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hn?Mt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Hn:cl}set encoding(e){Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?Mt:Wt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=nl;It.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,h=c[0],u=c[4],f=c[8],d=c[1],g=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(h+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,S=(g+1)/2,A=(p+1)/2,R=(u+d)/4,C=(f+x)/4,O=(_+m)/4;return M>S&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=C/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=O/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=O/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-x)/E,this.z=(d-u)/E,this.w=Math.acos((h+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hn?Mt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new It(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends nh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pl extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],h=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],g=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==d||h!==g||u!==_){let m=1-o;const p=c*d+h*g+u*_+f*x,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,p*E);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const S=o*E;if(c=c*m+d*S,h=h*m+g*S,u=u*m+_*S,f=f*m+x*S,m===1-o){const A=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=A,h*=A,u*=A,f*=A}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a],d=r[a+1],g=r[a+2],_=r[a+3];return e[t]=o*_+u*f+c*g-h*d,e[t+1]=c*_+u*d+h*f-o*g,e[t+2]=h*_+u*g+o*d-c*f,e[t+3]=u*_-o*f-c*d-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(s/2),f=o(r/2),d=c(i/2),g=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*f+h*g*_,this._y=h*g*f-d*u*_,this._z=h*u*_+d*g*f,this._w=h*u*f-d*g*_;break;case"YXZ":this._x=d*u*f+h*g*_,this._y=h*g*f-d*u*_,this._z=h*u*_-d*g*f,this._w=h*u*f+d*g*_;break;case"ZXY":this._x=d*u*f-h*g*_,this._y=h*g*f+d*u*_,this._z=h*u*_+d*g*f,this._w=h*u*f-d*g*_;break;case"ZYX":this._x=d*u*f-h*g*_,this._y=h*g*f+d*u*_,this._z=h*u*_-d*g*f,this._w=h*u*f+d*g*_;break;case"YZX":this._x=d*u*f+h*g*_,this._y=h*g*f+d*u*_,this._z=h*u*_-d*g*f,this._w=h*u*f-d*g*_;break;case"XZY":this._x=d*u*f-h*g*_,this._y=h*g*f-d*u*_,this._z=h*u*_+d*g*f,this._w=h*u*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(a-s)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+h)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(r-h)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-s)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=i*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-i*h,this._z=r*u+a*h+i*c-s*o,this._w=a*u-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*h+a*f-o*u,this.y=i+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new D,Ka=new Ji;class Ki{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),ns.subVectors(this.max,Ci),Jn.subVectors(e.a,Ci),Kn.subVectors(e.b,Ci),$n.subVectors(e.c,Ci),gn.subVectors(Kn,Jn),_n.subVectors($n,Kn),Ln.subVectors(Jn,$n);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!rr(t,Jn,Kn,$n,ns)||(t=[1,0,0,0,1,0,0,0,1],!rr(t,Jn,Kn,$n,ns))?!1:(is.crossVectors(gn,_n),t=[is.x,is.y,is.z],rr(t,Jn,Kn,$n,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new D,new D,new D,new D,new D,new D,new D,new D],qt=new D,ts=new Ki,Jn=new D,Kn=new D,$n=new D,gn=new D,_n=new D,Ln=new D,Ci=new D,ns=new D,is=new D,Dn=new D;function rr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Dn.fromArray(n,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=e.dot(Dn),h=t.dot(Dn),u=i.dot(Dn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const sh=new Ki,Pi=new D,ar=new D;class Zr{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(ar)),this.expandByPoint(Pi.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new D,or=new D,ss=new D,xn=new D,lr=new D,rs=new D,cr=new D;class rh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){or.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(or);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=xn.dot(this.direction),c=-xn.dot(ss),h=xn.lengthSq(),u=Math.abs(1-a*a);let f,d,g,_;if(u>0)if(f=a*c-o,d=a*o-c,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,g=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=r,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+h;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+h):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+h):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+h);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(or).addScaledVector(ss,d),g}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),s=rn.dot(rn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,s,r){lr.subVectors(t,e),rs.subVectors(i,e),cr.crossVectors(lr,rs);let a=this.direction.dot(cr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const c=o*this.direction.dot(rs.crossVectors(xn,rs));if(c<0)return null;const h=o*this.direction.dot(lr.cross(xn));if(h<0||c+h>a)return null;const u=-o*xn.dot(cr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,a,o,c,h,u,f,d,g,_,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h,u,f,d,g,_,x,m)}set(e,t,i,s,r,a,o,c,h,u,f,d,g,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=f,p[14]=d,p[3]=g,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Qn.setFromMatrixColumn(e,0).length(),r=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,g=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=g+_*h,t[5]=d-x*h,t[9]=-o*c,t[2]=x-d*h,t[6]=_+g*h,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,g=c*f,_=h*u,x=h*f;t[0]=d+x*o,t[4]=_*o-g,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=g*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,g=c*f,_=h*u,x=h*f;t[0]=d-x*o,t[4]=-a*f,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,g=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*h-g,t[8]=d*h+x,t[1]=c*f,t[5]=x*h+d,t[9]=g*h-_,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*h,_=o*c,x=o*h;t[0]=c*u,t[4]=x-d*f,t[8]=_*f+g,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=g*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*c,g=a*h,_=o*c,x=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=d*f+x,t[5]=a*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,i){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),vn.crossVectors(i,Ft),vn.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),vn.crossVectors(i,Ft)),vn.normalize(),as.crossVectors(Ft,vn),s[0]=vn.x,s[4]=as.x,s[8]=Ft.x,s[1]=vn.y,s[5]=as.y,s[9]=Ft.y,s[2]=vn.z,s[6]=as.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],f=i[5],d=i[9],g=i[13],_=i[2],x=i[6],m=i[10],p=i[14],E=i[3],M=i[7],S=i[11],A=i[15],R=s[0],C=s[4],O=s[8],v=s[12],T=s[1],N=s[5],B=s[9],Y=s[13],L=s[2],H=s[6],q=s[10],j=s[14],te=s[3],Q=s[7],K=s[11],I=s[15];return r[0]=a*R+o*T+c*L+h*te,r[4]=a*C+o*N+c*H+h*Q,r[8]=a*O+o*B+c*q+h*K,r[12]=a*v+o*Y+c*j+h*I,r[1]=u*R+f*T+d*L+g*te,r[5]=u*C+f*N+d*H+g*Q,r[9]=u*O+f*B+d*q+g*K,r[13]=u*v+f*Y+d*j+g*I,r[2]=_*R+x*T+m*L+p*te,r[6]=_*C+x*N+m*H+p*Q,r[10]=_*O+x*B+m*q+p*K,r[14]=_*v+x*Y+m*j+p*I,r[3]=E*R+M*T+S*L+A*te,r[7]=E*C+M*N+S*H+A*Q,r[11]=E*O+M*B+S*q+A*K,r[15]=E*v+M*Y+S*j+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],d=e[10],g=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+r*c*f-s*h*f-r*o*d+i*h*d+s*o*g-i*c*g)+x*(+t*c*g-t*h*d+r*a*d-s*a*g+s*h*u-r*c*u)+m*(+t*h*f-t*o*g-r*a*f+i*a*g+r*o*u-i*h*u)+p*(-s*o*u-t*c*f+t*o*d+s*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],d=e[10],g=e[11],_=e[12],x=e[13],m=e[14],p=e[15],E=f*m*h-x*d*h+x*c*g-o*m*g-f*c*p+o*d*p,M=_*d*h-u*m*h-_*c*g+a*m*g+u*c*p-a*d*p,S=u*x*h-_*f*h+_*o*g-a*x*g-u*o*p+a*f*p,A=_*f*c-u*x*c-_*o*d+a*x*d+u*o*m-a*f*m,R=t*E+i*M+s*S+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(x*d*r-f*m*r-x*s*g+i*m*g+f*s*p-i*d*p)*C,e[2]=(o*m*r-x*c*r+x*s*h-i*m*h-o*s*p+i*c*p)*C,e[3]=(f*c*r-o*d*r-f*s*h+i*d*h+o*s*g-i*c*g)*C,e[4]=M*C,e[5]=(u*m*r-_*d*r+_*s*g-t*m*g-u*s*p+t*d*p)*C,e[6]=(_*c*r-a*m*r-_*s*h+t*m*h+a*s*p-t*c*p)*C,e[7]=(a*d*r-u*c*r+u*s*h-t*d*h-a*s*g+t*c*g)*C,e[8]=S*C,e[9]=(_*f*r-u*x*r-_*i*g+t*x*g+u*i*p-t*f*p)*C,e[10]=(a*x*r-_*o*r+_*i*h-t*x*h-a*i*p+t*o*p)*C,e[11]=(u*o*r-a*f*r-u*i*h+t*f*h+a*i*g-t*o*g)*C,e[12]=A*C,e[13]=(u*x*s-_*f*s+_*i*d-t*x*d-u*i*m+t*f*m)*C,e[14]=(_*o*s-a*x*s-_*i*c+t*x*c+a*i*m-t*o*m)*C,e[15]=(a*f*s-u*o*s+u*i*c-t*f*c-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+i,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,f=o+o,d=r*h,g=r*u,_=r*f,x=a*u,m=a*f,p=o*f,E=c*h,M=c*u,S=c*f,A=i.x,R=i.y,C=i.z;return s[0]=(1-(x+p))*A,s[1]=(g+S)*A,s[2]=(_-M)*A,s[3]=0,s[4]=(g-S)*R,s[5]=(1-(d+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(_+M)*C,s[9]=(m-E)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const a=Qn.set(s[4],s[5],s[6]).length(),o=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const h=1/r,u=1/a,f=1/o;return Yt.elements[0]*=h,Yt.elements[1]*=h,Yt.elements[2]*=h,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=fn){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(o===fn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=fn){const c=this.elements,h=1/(t-e),u=1/(i-s),f=1/(a-r),d=(t+e)*h,g=(i+s)*u;let _,x;if(o===fn)_=(a+r)*f,x=-2*f;else if(o===Ns)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qn=new D,Yt=new ut,ah=new D(0,0,0),oh=new D(1,1,1),vn=new D,as=new D,Ft=new D,$a=new ut,Qa=new Ji;class Ei{constructor(e=0,t=0,i=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const eo=new D,ei=new Ji,an=new ut,os=new D,Li=new D,ch=new D,hh=new Ji,to=new D(1,0,0),no=new D(0,1,0),io=new D(0,0,1),uh={type:"added"},fh={type:"removed"};class yt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new Ei,i=new Ji,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(to,e)}rotateY(e){return this.rotateOnAxis(no,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return eo.copy(e).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(to,e)}translateY(e){return this.translateOnAxis(no,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Li,os,this.up):an.lookAt(os,Li,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(an),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new D,on=new D,hr=new D,ln=new D,ti=new D,ni=new D,so=new D,ur=new D,fr=new D,dr=new D;let ls=!1;class Vt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jt.subVectors(s,t),on.subVectors(i,t),hr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(on),c=jt.dot(hr),h=on.dot(on),u=on.dot(hr),f=a*h-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,g=(h*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-g-_,_,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,i,s,r,a,o,c){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,ln),c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c}static isFrontFacing(e,t,i,s){return jt.subVectors(i,t),on.subVectors(e,t),jt.cross(on).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),jt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,i),ni.subVectors(r,i),ur.subVectors(e,i);const c=ti.dot(ur),h=ni.dot(ur);if(c<=0&&h<=0)return t.copy(i);fr.subVectors(e,s);const u=ti.dot(fr),f=ni.dot(fr);if(u>=0&&f<=u)return t.copy(s);const d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ti,a);dr.subVectors(e,r);const g=ti.dot(dr),_=ni.dot(dr);if(_>=0&&g<=_)return t.copy(r);const x=g*h-c*_;if(x<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(i).addScaledVector(ni,o);const m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return so.subVectors(r,s),o=(f-u)/(f-u+(g-_)),t.copy(s).addScaledVector(so,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function pr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=Kc(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=gl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return tt.fromWorkingColorSpace(bt.copy(this),e),Math.round(wt(bt.r*255,0,255))*65536+Math.round(wt(bt.g*255,0,255))*256+Math.round(wt(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,s=bt.g,r=bt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){tt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,s=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(cs);const i=er(Mn.h,cs.h,t),s=er(Mn.s,cs.s,t),r=er(Mn.l,cs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ve;Ve.NAMES=gl;let dh=0;class wi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=xi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pr&&(i.blendSrc=this.blendSrc),this.blendDst!==Lr&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new D,hs=new ue;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Or,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _l extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xl extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ph=0;const Gt=new ut,mr=new yt,ii=new D,Bt=new Ki,Di=new Ki,vt=new D;class At extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ul(e)?xl:_l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return mr.lookAt(e),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Bt.min,Di.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Di.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Di.min),Bt.expandByPoint(Di.max))}Bt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)vt.fromBufferAttribute(o,h),c&&(ii.fromBufferAttribute(e,h),vt.add(ii)),s=Math.max(s,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let T=0;T<o;T++)h[T]=new D,u[T]=new D;const f=new D,d=new D,g=new D,_=new ue,x=new ue,m=new ue,p=new D,E=new D;function M(T,N,B){f.fromArray(s,T*3),d.fromArray(s,N*3),g.fromArray(s,B*3),_.fromArray(a,T*2),x.fromArray(a,N*2),m.fromArray(a,B*2),d.sub(f),g.sub(f),x.sub(_),m.sub(_);const Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(Y),E.copy(g).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Y),h[T].add(p),h[N].add(p),h[B].add(p),u[T].add(E),u[N].add(E),u[B].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,N=S.length;T<N;++T){const B=S[T],Y=B.start,L=B.count;for(let H=Y,q=Y+L;H<q;H+=3)M(i[H+0],i[H+1],i[H+2])}const A=new D,R=new D,C=new D,O=new D;function v(T){C.fromArray(r,T*3),O.copy(C);const N=h[T];A.copy(N),A.sub(C.multiplyScalar(C.dot(N))).normalize(),R.crossVectors(O,N);const Y=R.dot(u[T])<0?-1:1;c[T*4]=A.x,c[T*4+1]=A.y,c[T*4+2]=A.z,c[T*4+3]=Y}for(let T=0,N=S.length;T<N;++T){const B=S[T],Y=B.start,L=B.count;for(let H=Y,q=Y+L;H<q;H+=3)v(i[H+0]),v(i[H+1]),v(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,h=new D,u=new D,f=new D;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),o.add(u),c.add(u),h.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,f=o.normalized,d=new h.constructor(c.length*u);let g=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?g=c[x]*o.data.stride+o.offset:g=c[x]*u;for(let p=0;p<u;p++)d[_++]=h[g++]}return new $t(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){const d=h[u],g=e(d,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const h=i[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){const g=h[f];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],f=r[h];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new ut,Un=new rh,us=new Zr,ao=new D,si=new D,ri=new D,ai=new D,gr=new D,fs=new D,ds=new ue,ps=new ue,ms=new ue,oo=new D,lo=new D,co=new D,gs=new D,_s=new D;class z extends yt{constructor(e=new At,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],f=r[c];u!==0&&(gr.fromBufferAttribute(f,e),a?fs.addScaledVector(gr,u):fs.addScaledVector(gr.sub(t),u))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(us.containsPoint(Un.origin)===!1&&(Un.intersectSphere(us,ao)===null||Un.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(ro.copy(r).invert(),Un.copy(e.ray).applyMatrix4(ro),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=a[m.materialIndex],E=Math.max(m.start,g.start),M=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,A=M;S<A;S+=3){const R=o.getX(S),C=o.getX(S+1),O=o.getX(S+2);s=xs(this,p,e,i,h,u,f,R,C,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const E=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);s=xs(this,a,e,i,h,u,f,E,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=a[m.materialIndex],E=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,A=M;S<A;S+=3){const R=S,C=S+1,O=S+2;s=xs(this,p,e,i,h,u,f,R,C,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const E=m,M=m+1,S=m+2;s=xs(this,a,e,i,h,u,f,E,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function mh(n,e,t,i,s,r,a,o){let c;if(e.side===Ut?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Rn,o),c===null)return null;_s.copy(o),_s.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(_s);return h<t.near||h>t.far?null:{distance:h,point:_s.clone(),object:n}}function xs(n,e,t,i,s,r,a,o,c,h){n.getVertexPosition(o,si),n.getVertexPosition(c,ri),n.getVertexPosition(h,ai);const u=mh(n,e,t,i,si,ri,ai,gs);if(u){s&&(ds.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,c),ms.fromBufferAttribute(s,h),u.uv=Vt.getInterpolation(gs,si,ri,ai,ds,ps,ms,new ue)),r&&(ds.fromBufferAttribute(r,o),ps.fromBufferAttribute(r,c),ms.fromBufferAttribute(r,h),u.uv1=Vt.getInterpolation(gs,si,ri,ai,ds,ps,ms,new ue),u.uv2=u.uv1),a&&(oo.fromBufferAttribute(a,o),lo.fromBufferAttribute(a,c),co.fromBufferAttribute(a,h),u.normal=Vt.getInterpolation(gs,si,ri,ai,oo,lo,co,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new D,materialIndex:0};Vt.getNormal(si,ri,ai,f.normal),u.face=f}return u}class qe extends At{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function _(x,m,p,E,M,S,A,R,C,O,v){const T=S/C,N=A/O,B=S/2,Y=A/2,L=R/2,H=C+1,q=O+1;let j=0,te=0;const Q=new D;for(let K=0;K<q;K++){const I=K*N-Y;for(let V=0;V<H;V++){const ge=V*T-B;Q[x]=ge*E,Q[m]=I*M,Q[p]=L,h.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(V/C),f.push(1-K/O),j+=1}}for(let K=0;K<O;K++)for(let I=0;I<C;I++){const V=d+I+H*K,ge=d+I+H*(K+1),_e=d+(I+1)+H*(K+1),re=d+(I+1)+H*K;c.push(V,ge,re),c.push(ge,_e,re),te+=6}o.addGroup(g,te,v),g+=te,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const s in i)e[s]=i[s]}return e}function gh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vl(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const _h={clone:Ti,merge:Lt};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ml extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Ml{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class Mh extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(oi,li,e,t);s.layers=this.layers,this.add(s);const r=new zt(oi,li,e,t);r.layers=this.layers,this.add(r);const a=new zt(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new zt(oi,li,e,t);o.layers=this.layers,this.add(o);const c=new zt(oi,li,e,t);c.layers=this.layers,this.add(c);const h=new zt(oi,li,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Sl extends It{constructor(e,t,i,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,i,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?Mt:Wt),this.texture=new Sl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:bn});r.uniforms.tEquirect.value=t;const a=new z(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Ht),new Mh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const _r=new D,yh=new D,Eh=new Ye;class Nn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_r.subVectors(i,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_r),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Eh.getNormalMatrix(e),s=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Zr,vs=new D;class Jr{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],_=s[9],x=s[10],m=s[11],p=s[12],E=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-r,d-h,m-g,S-p).normalize(),i[1].setComponents(c+r,d+h,m+g,S+p).normalize(),i[2].setComponents(c+a,d+u,m+_,S+E).normalize(),i[3].setComponents(c-a,d-u,m-_,S-E).normalize(),i[4].setComponents(c-o,d-f,m-x,S-M).normalize(),t===fn)i[5].setComponents(c+o,d+f,m+x,S+M).normalize();else if(t===Ns)i[5].setComponents(o,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Th(n,e){const t=e.isWebGL2,i=new WeakMap;function s(h,u){const f=h.array,d=h.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,d),h.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version}}function r(h,u,f){const d=u.array,g=u.updateRange;n.bindBuffer(f,h),g.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(n.deleteBuffer(u.buffer),i.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=i.get(h);f===void 0?i.set(h,s(h,u)):f.version<h.version&&(r(f.buffer,h,u),f.version=h.version)}return{get:a,remove:o,update:c}}class Yn extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),h=o+1,u=c+1,f=e/o,d=t/c,g=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let M=0;M<h;M++){const S=M*f-r;_.push(S,-E,0),x.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const M=E+h*p,S=E+h*(p+1),A=E+1+h*(p+1),R=E+1+h*p;g.push(M,S,R),g.push(S,A,R)}this.setIndex(g),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,td=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:bh,alphahash_pars_fragment:wh,alphamap_fragment:Ah,alphamap_pars_fragment:Rh,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Lh,aomap_pars_fragment:Dh,begin_vertex:Uh,beginnormal_vertex:Ih,bsdfs:Nh,iridescence_fragment:Oh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Gh,color_fragment:Hh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Zh,displacementmap_vertex:Jh,emissivemap_fragment:Kh,emissivemap_pars_fragment:$h,colorspace_fragment:Qh,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:su,envmap_physical_pars_fragment:gu,envmap_vertex:ru,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:hu,lightmap_fragment:uu,lightmap_pars_fragment:fu,lights_lambert_fragment:du,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:Mu,lights_physical_fragment:Su,lights_physical_pars_fragment:yu,lights_fragment_begin:Eu,lights_fragment_maps:Tu,lights_fragment_end:bu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Cu,map_fragment:Pu,map_pars_fragment:Lu,map_particle_fragment:Du,map_particle_pars_fragment:Uu,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Nu,morphcolor_vertex:Ou,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:Zu,opaque_fragment:Ju,packing:Ku,premultiplied_alpha_fragment:$u,project_vertex:Qu,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:ff,specularmap_fragment:df,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:xf,uv_pars_fragment:vf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:yf,background_vert:Ef,background_frag:Tf,backgroundCube_vert:bf,backgroundCube_frag:wf,cube_vert:Af,cube_frag:Rf,depth_vert:Cf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:Uf,equirect_frag:If,linedashed_vert:Nf,linedashed_frag:Of,meshbasic_vert:Ff,meshbasic_frag:Bf,meshlambert_vert:zf,meshlambert_frag:kf,meshmatcap_vert:Gf,meshmatcap_frag:Hf,meshnormal_vert:Vf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:jf,meshtoon_vert:Zf,meshtoon_frag:Jf,points_vert:Kf,points_frag:$f,shadow_vert:Qf,shadow_frag:ed,sprite_vert:td,sprite_frag:nd},me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},en={basic:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Lt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Lt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Lt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Lt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Lt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Lt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Lt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Lt([me.lights,me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};en.physical={uniforms:Lt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ms={r:0,b:0,g:0};function id(n,e,t,i,s,r,a){const o=new Ve(0);let c=r===!0?0:1,h,u,f=null,d=0,g=null;function _(m,p){let E=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?x(o,c):M&&M.isColor&&(x(M,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Bs)?(u===void 0&&(u=new z(new qe(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ti(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=tt.getTransfer(M.colorSpace)!==at,(f!==M||d!==M.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new z(new Yn(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ti(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,g=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function x(m,p){m.getRGB(Ms,vl(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:_}}function sd(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=m(null);let h=c,u=!1;function f(L,H,q,j,te){let Q=!1;if(a){const K=x(j,q,H);h!==K&&(h=K,g(h.object)),Q=p(L,j,q,te),Q&&E(L,j,q,te)}else{const K=H.wireframe===!0;(h.geometry!==j.id||h.program!==q.id||h.wireframe!==K)&&(h.geometry=j.id,h.program=q.id,h.wireframe=K,Q=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,O(L,H,q,j),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,H,q){const j=q.wireframe===!0;let te=o[L.id];te===void 0&&(te={},o[L.id]=te);let Q=te[H.id];Q===void 0&&(Q={},te[H.id]=Q);let K=Q[j];return K===void 0&&(K=m(d()),Q[j]=K),K}function m(L){const H=[],q=[],j=[];for(let te=0;te<s;te++)H[te]=0,q[te]=0,j[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:j,object:L,attributes:{},index:null}}function p(L,H,q,j){const te=h.attributes,Q=H.attributes;let K=0;const I=q.getAttributes();for(const V in I)if(I[V].location>=0){const _e=te[V];let re=Q[V];if(re===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),_e===void 0||_e.attribute!==re||re&&_e.data!==re.data)return!0;K++}return h.attributesNum!==K||h.index!==j}function E(L,H,q,j){const te={},Q=H.attributes;let K=0;const I=q.getAttributes();for(const V in I)if(I[V].location>=0){let _e=Q[V];_e===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor));const re={};re.attribute=_e,_e&&_e.data&&(re.data=_e.data),te[V]=re,K++}h.attributes=te,h.attributesNum=K,h.index=j}function M(){const L=h.newAttributes;for(let H=0,q=L.length;H<q;H++)L[H]=0}function S(L){A(L,0)}function A(L,H){const q=h.newAttributes,j=h.enabledAttributes,te=h.attributeDivisors;q[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),te[L]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),te[L]=H)}function R(){const L=h.newAttributes,H=h.enabledAttributes;for(let q=0,j=H.length;q<j;q++)H[q]!==L[q]&&(n.disableVertexAttribArray(q),H[q]=0)}function C(L,H,q,j,te,Q,K){K===!0?n.vertexAttribIPointer(L,H,q,te,Q):n.vertexAttribPointer(L,H,q,j,te,Q)}function O(L,H,q,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const te=j.attributes,Q=q.getAttributes(),K=H.defaultAttributeValues;for(const I in Q){const V=Q[I];if(V.location>=0){let ge=te[I];if(ge===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),ge!==void 0){const _e=ge.normalized,re=ge.itemSize,Se=t.get(ge);if(Se===void 0)continue;const Ae=Se.buffer,Ce=Se.type,De=Se.bytesPerElement,Ze=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||ge.gpuType===il);if(ge.isInterleavedBufferAttribute){const Pe=ge.data,P=Pe.stride,fe=ge.offset;if(Pe.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)A(V.location+Z,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Z=0;Z<V.locationSize;Z++)S(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Z=0;Z<V.locationSize;Z++)C(V.location+Z,re/V.locationSize,Ce,_e,P*De,(fe+re/V.locationSize*Z)*De,Ze)}else{if(ge.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)A(V.location+Pe,ge.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)S(V.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Pe=0;Pe<V.locationSize;Pe++)C(V.location+Pe,re/V.locationSize,Ce,_e,re*De,re/V.locationSize*Pe*De,Ze)}}else if(K!==void 0){const _e=K[I];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(V.location,_e);break;case 3:n.vertexAttrib3fv(V.location,_e);break;case 4:n.vertexAttrib4fv(V.location,_e);break;default:n.vertexAttrib1fv(V.location,_e)}}}}R()}function v(){B();for(const L in o){const H=o[L];for(const q in H){const j=H[q];for(const te in j)_(j[te].object),delete j[te];delete H[q]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const H=o[L.id];for(const q in H){const j=H[q];for(const te in j)_(j[te].object),delete j[te];delete H[q]}delete o[L.id]}function N(L){for(const H in o){const q=o[H];if(q[L.id]===void 0)continue;const j=q[L.id];for(const te in j)_(j[te].object),delete j[te];delete q[L.id]}}function B(){Y(),u=!0,h!==c&&(h=c,g(h.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:B,resetDefaultState:Y,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function rd(n,e,t,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=c}function ad(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,S=a||e.has("OES_texture_float"),A=M&&S,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:R}}function od(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Nn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||i!==0||s;return s=d,i=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):h();else{const E=r?0:i,M=E*4;let S=p.clippingState||null;c.value=S,S=u(_,d,M,g);for(let A=0;A!==M;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,g,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=g+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=g;M!==x;++M,S+=4)a.copy(f[M]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ld(n){let e=new WeakMap;function t(a,o){return o===Dr?a.mapping=Mi:o===Ur&&(a.mapping=Si),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Dr||o===Ur)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Sh(c.height/2);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class El extends Ml{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,ho=[.125,.215,.35,.446,.526,.582],zn=20,xr=new El,uo=new Ve;let vr=null,Mr=0,Sr=0;const On=(1+Math.sqrt(5))/2,ci=1/On,fo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,On,ci),new D(0,On,-ci),new D(ci,0,On),new D(-ci,0,On),new D(On,ci,0),new D(-On,ci,0)];class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vr,Mr,Sr),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Wi,format:Kt,colorSpace:mn,depthBuffer:!1},s=mo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cd(r)),this._blurMaterial=hd(r,e,t)}return s}_compileMaterial(e){const t=new z(this._lodPlanes[0],e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,s){const o=new zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(uo),u.toneMapping=wn,u.autoClear=!1;const g=new Xi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new z(new qe,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(uo),x=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const M=this._cubeSize;Ss(s,E*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Mi||e.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new z(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fo[(s-1)%fo.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new z(this._lodPlanes[s],h),d=h.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*zn-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):zn;m>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const p=[];let E=0;for(let C=0;C<zn;++C){const O=C/x,v=Math.exp(-O*O/2);p.push(v),C===0?E+=v:C<m&&(E+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],A=3*S*(s>M-gi?s-M+gi:0),R=4*(this._cubeSize-S);Ss(t,A,R,3*S,2*S),c.setRenderTarget(t),c.render(f,xr)}}function cd(n){const e=[],t=[],i=[];let s=n;const r=n-gi+1+ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-gi?c=ho[a-n+gi-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,x=3,m=2,p=1,E=new Float32Array(x*_*g),M=new Float32Array(m*_*g),S=new Float32Array(p*_*g);for(let R=0;R<g;R++){const C=R%3*2/3-1,O=R>2?0:-1,v=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];E.set(v,x*_*R),M.set(d,m*_*R);const T=[R,R,R,R,R,R];S.set(T,p*_*R)}const A=new At;A.setAttribute("position",new $t(E,x)),A.setAttribute("uv",new $t(M,m)),A.setAttribute("faceIndex",new $t(S,p)),e.push(A),s>gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mo(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=Bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hd(n,e,t){const i=new Float32Array(zn),s=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function go(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function _o(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===Dr||c===Ur,u=c===Mi||c===Si;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new po(n)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new po(n));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dd(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const g=r.get(d);g&&(e.remove(g),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function h(f){const d=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const E=g.array;x=g.version;for(let M=0,S=E.length;M<S;M+=3){const A=E[M+0],R=E[M+1],C=E[M+2];d.push(A,R,R,C,C,A)}}else if(_!==void 0){const E=_.array;x=_.version;for(let M=0,S=E.length/3-1;M<S;M+=3){const A=M+0,R=M+1,C=M+2;d.push(A,R,R,C,C,A)}}else return;const m=new(ul(d)?xl:_l)(d,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function pd(n,e,t,i){const s=i.isWebGL2;let r;function a(d){r=d}let o,c;function h(d){o=d.type,c=d.bytesPerElement}function u(d,g){n.drawElements(r,g,o,d*c),t.update(g,r,1)}function f(d,g,_){if(_===0)return;let x,m;if(s)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,g,o,d*c,_),t.update(g,r,_)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f}function md(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gd(n,e){return n[0]-e[0]}function _d(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xd(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,f){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==x){let H=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var g=H;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let v=0;M===!0&&(v=1),S===!0&&(v=2),A===!0&&(v=3);let T=u.attributes.position.count*v,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const B=new Float32Array(T*N*4*x),Y=new pl(B,T,N,x);Y.type=Tn,Y.needsUpdate=!0;const L=v*4;for(let q=0;q<x;q++){const j=R[q],te=C[q],Q=O[q],K=T*N*4*q;for(let I=0;I<j.count;I++){const V=I*L;M===!0&&(a.fromBufferAttribute(j,I),B[K+V+0]=a.x,B[K+V+1]=a.y,B[K+V+2]=a.z,B[K+V+3]=0),S===!0&&(a.fromBufferAttribute(te,I),B[K+V+4]=a.x,B[K+V+5]=a.y,B[K+V+6]=a.z,B[K+V+7]=0),A===!0&&(a.fromBufferAttribute(Q,I),B[K+V+8]=a.x,B[K+V+9]=a.y,B[K+V+10]=a.z,B[K+V+11]=Q.itemSize===4?a.w:1)}}m={count:x,texture:Y,size:new ue(T,N)},r.set(u,m),u.addEventListener("dispose",H)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];const E=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[u.id]=x}for(let S=0;S<_;S++){const A=x[S];A[0]=S,A[1]=d[S]}x.sort(_d);for(let S=0;S<8;S++)S<_&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(gd);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const A=o[S],R=A[0],C=A[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+S)!==m[R]&&u.setAttribute("morphTarget"+S,m[R]),p&&u.getAttribute("morphNormal"+S)!==p[R]&&u.setAttribute("morphNormal"+S,p[R]),s[S]=C,E+=C):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function vd(n,e,t,i){let s=new WeakMap;function r(c){const h=i.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}const Tl=new It,bl=new pl,wl=new ih,Al=new Sl,xo=[],vo=[],Mo=new Float32Array(16),So=new Float32Array(9),yo=new Float32Array(4);function Ai(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xo[s];if(r===void 0&&(r=new Float32Array(s),xo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Md(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function yd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Ed(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Td(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;yo.set(i),n.uniformMatrix2fv(this.addr,!1,yo),_t(t,i)}}function bd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;So.set(i),n.uniformMatrix3fv(this.addr,!1,So),_t(t,i)}}function wd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Mo.set(i),n.uniformMatrix4fv(this.addr,!1,Mo),_t(t,i)}}function Ad(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Cd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Pd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Ld(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Ud(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Id(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Nd(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Tl,s)}function Od(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wl,s)}function Fd(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Al,s)}function Bd(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bl,s)}function zd(n){switch(n){case 5126:return Md;case 35664:return Sd;case 35665:return yd;case 35666:return Ed;case 35674:return Td;case 35675:return bd;case 35676:return wd;case 5124:case 35670:return Ad;case 35667:case 35671:return Rd;case 35668:case 35672:return Cd;case 35669:case 35673:return Pd;case 5125:return Ld;case 36294:return Dd;case 36295:return Ud;case 36296:return Id;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Bd}}function kd(n,e){n.uniform1fv(this.addr,e)}function Gd(n,e){const t=Ai(e,this.size,2);n.uniform2fv(this.addr,t)}function Hd(n,e){const t=Ai(e,this.size,3);n.uniform3fv(this.addr,t)}function Vd(n,e){const t=Ai(e,this.size,4);n.uniform4fv(this.addr,t)}function Wd(n,e){const t=Ai(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xd(n,e){const t=Ai(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qd(n,e){const t=Ai(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yd(n,e){n.uniform1iv(this.addr,e)}function jd(n,e){n.uniform2iv(this.addr,e)}function Zd(n,e){n.uniform3iv(this.addr,e)}function Jd(n,e){n.uniform4iv(this.addr,e)}function Kd(n,e){n.uniform1uiv(this.addr,e)}function $d(n,e){n.uniform2uiv(this.addr,e)}function Qd(n,e){n.uniform3uiv(this.addr,e)}function ep(n,e){n.uniform4uiv(this.addr,e)}function tp(n,e,t){const i=this.cache,s=e.length,r=ks(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tl,r[a])}function np(n,e,t){const i=this.cache,s=e.length,r=ks(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wl,r[a])}function ip(n,e,t){const i=this.cache,s=e.length,r=ks(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Al,r[a])}function sp(n,e,t){const i=this.cache,s=e.length,r=ks(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bl,r[a])}function rp(n){switch(n){case 5126:return kd;case 35664:return Gd;case 35665:return Hd;case 35666:return Vd;case 35674:return Wd;case 35675:return Xd;case 35676:return qd;case 5124:case 35670:return Yd;case 35667:case 35671:return jd;case 35668:case 35672:return Zd;case 35669:case 35673:return Jd;case 5125:return Kd;case 36294:return $d;case 36295:return Qd;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}class ap{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=zd(t.type)}}class op{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rp(t.type)}}class lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const yr=/(\w+)(\])?(\[|\.)?/g;function Eo(n,e){n.seq.push(e),n.map[e.id]=e}function cp(n,e,t){const i=n.name,s=i.length;for(yr.lastIndex=0;;){const r=yr.exec(i),a=yr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Eo(t,h===void 0?new ap(o,n,e):new op(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new lp(o),Eo(t,f)),t=f}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);cp(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function To(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hp=37297;let up=0;function fp(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function dp(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Is&&t===Us?i="LinearDisplayP3ToLinearSRGB":e===Us&&t===Is&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case zs:return[i,"LinearTransferOETF"];case Mt:case jr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fp(n.getShaderSource(e),a)}else return s}function pp(n,e){const t=dp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mp(n,e){let t;switch(e){case wc:t="Linear";break;case Ac:t="Reinhard";break;case Rc:t="OptimizedCineon";break;case tl:t="ACESFilmic";break;case Cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fi).join(`
`)}function _p(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fi(n){return n!==""}function wo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(n){return n.replace(vp,Sp)}const Mp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sp(n,e){let t=We[e];if(t===void 0){const i=Mp.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kr(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(n){return n.replace(yp,Ep)}function Ep(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Co(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function bp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function Ap(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case bc:e="ENVMAP_BLENDING_ADD";break}return e}function Rp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Tp(t),h=bp(t),u=wp(t),f=Ap(t),d=Rp(t),g=t.isWebGL2?"":gp(t),_=_p(r),x=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),m.length>0&&(m+=`
`),p=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),p.length>0&&(p+=`
`)):(m=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),p=[g,Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?We.tonemapping_pars_fragment:"",t.toneMapping!==wn?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,pp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=kr(a),a=wo(a,t),a=Ao(a,t),o=kr(o),o=wo(o,t),o=Ao(o,t),a=Ro(a),o=Ro(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+a,S=E+p+o,A=To(s,s.VERTEX_SHADER,M),R=To(s,s.FRAGMENT_SHADER,S);s.attachShader(x,A),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(N){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),Y=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(R).trim();let H=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,R);else{const j=bo(s,A,"vertex"),te=bo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+j+`
`+te)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(Y===""||L==="")&&(q=!1);q&&(N.diagnostics={runnable:H,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(A),s.deleteShader(R),O=new Ps(s,x),v=xp(s,x)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,hp)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=up++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let Pp=0;class Lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dp(e),t.set(e,i)),i}}class Dp{constructor(e){this.id=Pp++,this.code=e,this.usedTimes=0}}function Up(n,e,t,i,s,r,a){const o=new ml,c=new Lp,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,T,N,B,Y){const L=B.fog,H=Y.geometry,q=v.isMeshStandardMaterial?B.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),te=j&&j.mapping===Bs?j.image.height:null,Q=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,I=K!==void 0?K.length:0;let V=0;H.morphAttributes.position!==void 0&&(V=1),H.morphAttributes.normal!==void 0&&(V=2),H.morphAttributes.color!==void 0&&(V=3);let ge,_e,re,Se;if(Q){const ft=en[Q];ge=ft.vertexShader,_e=ft.fragmentShader}else ge=v.vertexShader,_e=v.fragmentShader,c.update(v),re=c.getVertexShaderID(v),Se=c.getFragmentShaderID(v);const Ae=n.getRenderTarget(),Ce=Y.isInstancedMesh===!0,De=!!v.map,Ze=!!v.matcap,Pe=!!j,P=!!v.aoMap,fe=!!v.lightMap,Z=!!v.bumpMap,se=!!v.normalMap,$=!!v.displacementMap,we=!!v.emissiveMap,ee=!!v.metalnessMap,ie=!!v.roughnessMap,Ee=v.anisotropy>0,ze=v.clearcoat>0,ot=v.iridescence>0,w=v.sheen>0,y=v.transmission>0,k=Ee&&!!v.anisotropyMap,ae=ze&&!!v.clearcoatMap,ne=ze&&!!v.clearcoatNormalMap,oe=ze&&!!v.clearcoatRoughnessMap,Te=ot&&!!v.iridescenceMap,he=ot&&!!v.iridescenceThicknessMap,xe=w&&!!v.sheenColorMap,Oe=w&&!!v.sheenRoughnessMap,$e=!!v.specularMap,le=!!v.specularColorMap,et=!!v.specularIntensityMap,ke=y&&!!v.transmissionMap,Fe=y&&!!v.thicknessMap,Le=!!v.gradientMap,ye=!!v.alphaMap,Je=v.alphaTest>0,U=!!v.alphaHash,ve=!!v.extensions,ce=!!H.attributes.uv1,J=!!H.attributes.uv2,de=!!H.attributes.uv3;let Ue=wn;return v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ue=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:_e,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:Ce,instancingColor:Ce&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:mn,map:De,matcap:Ze,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:te,aoMap:P,lightMap:fe,bumpMap:Z,normalMap:se,displacementMap:d&&$,emissiveMap:we,normalMapObjectSpace:se&&v.normalMapType===Hc,normalMapTangentSpace:se&&v.normalMapType===hl,metalnessMap:ee,roughnessMap:ie,anisotropy:Ee,anisotropyMap:k,clearcoat:ze,clearcoatMap:ae,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:ot,iridescenceMap:Te,iridescenceThicknessMap:he,sheen:w,sheenColorMap:xe,sheenRoughnessMap:Oe,specularMap:$e,specularColorMap:le,specularIntensityMap:et,transmission:y,transmissionMap:ke,thicknessMap:Fe,gradientMap:Le,opaque:v.transparent===!1&&v.blending===xi,alphaMap:ye,alphaTest:Je,alphaHash:U,combine:v.combine,mapUv:De&&x(v.map.channel),aoMapUv:P&&x(v.aoMap.channel),lightMapUv:fe&&x(v.lightMap.channel),bumpMapUv:Z&&x(v.bumpMap.channel),normalMapUv:se&&x(v.normalMap.channel),displacementMapUv:$&&x(v.displacementMap.channel),emissiveMapUv:we&&x(v.emissiveMap.channel),metalnessMapUv:ee&&x(v.metalnessMap.channel),roughnessMapUv:ie&&x(v.roughnessMap.channel),anisotropyMapUv:k&&x(v.anisotropyMap.channel),clearcoatMapUv:ae&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(v.sheenRoughnessMap.channel),specularMapUv:$e&&x(v.specularMap.channel),specularColorMapUv:le&&x(v.specularColorMap.channel),specularIntensityMapUv:et&&x(v.specularIntensityMap.channel),transmissionMapUv:ke&&x(v.transmissionMap.channel),thicknessMapUv:Fe&&x(v.thicknessMap.channel),alphaMapUv:ye&&x(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(se||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:J,vertexUv3s:de,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(De||ye),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zt,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ve&&v.extensions.derivatives===!0,extensionFragDepth:ve&&v.extensions.fragDepth===!0,extensionDrawBuffers:ve&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(E(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function E(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function S(v){const T=_[v.type];let N;if(T){const B=en[T];N=_h.clone(B.uniforms)}else N=v.uniforms;return N}function A(v,T){let N;for(let B=0,Y=h.length;B<Y;B++){const L=h[B];if(L.cacheKey===T){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Cp(n,T,v,r),h.push(N)),N}function R(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:O}}function Ip(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Po(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,g,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=g,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function o(f,d,g,_,x,m){const p=a(f,d,g,_,x,m);g.transmission>0?i.push(p):g.transparent===!0?s.push(p):t.push(p)}function c(f,d,g,_,x,m){const p=a(f,d,g,_,x,m);g.transmission>0?i.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function h(f,d){t.length>1&&t.sort(f||Np),i.length>1&&i.sort(d||Po),s.length>1&&s.sort(d||Po)}function u(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Op(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Lo,n.set(i,[a])):s>=r.length?(a=new Lo,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Bp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zp=0;function kp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gp(n,e){const t=new Fp,i=Bp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,a=new ut,o=new ut;function c(u,f){let d=0,g=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,m=0,p=0,E=0,M=0,S=0,A=0,R=0,C=0,O=0,v=0;u.sort(kp);const T=f===!0?Math.PI:1;for(let B=0,Y=u.length;B<Y;B++){const L=u[B],H=L.color,q=L.intensity,j=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*q*T,g+=H.g*q*T,_+=H.b*q*T;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(L.sh.coefficients[Q],q);v++}else if(L.isDirectionalLight){const Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const K=L.shadow,I=i.get(L);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,s.directionalShadow[x]=I,s.directionalShadowMap[x]=te,s.directionalShadowMatrix[x]=L.shadow.matrix,S++}s.directional[x]=Q,x++}else if(L.isSpotLight){const Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(H).multiplyScalar(q*T),Q.distance=j,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,s.spot[p]=Q;const K=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&O++),s.spotLightMatrix[p]=K.matrix,L.castShadow){const I=i.get(L);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,s.spotShadow[p]=I,s.spotShadowMap[p]=te,R++}p++}else if(L.isRectAreaLight){const Q=t.get(L);Q.color.copy(H).multiplyScalar(q),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=Q,E++}else if(L.isPointLight){const Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const K=L.shadow,I=i.get(L);I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,s.pointShadow[m]=I,s.pointShadowMap[m]=te,s.pointShadowMatrix[m]=L.shadow.matrix,A++}s.point[m]=Q,m++}else if(L.isHemisphereLight){const Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(q*T),Q.groundColor.copy(L.groundColor).multiplyScalar(q*T),s.hemi[M]=Q,M++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=_;const N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==E||N.hemiLength!==M||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==C||N.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=E,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+C-O,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=v,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=E,N.hemiLength=M,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=C,N.numLightProbes=v,s.version=zp++)}function h(u,f){let d=0,g=0,_=0,x=0,m=0;const p=f.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){const S=u[E];if(S.isDirectionalLight){const A=s.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(S.isSpotLight){const A=s.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const A=s.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const A=s.point[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){const A=s.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:s}}function Do(n,e){const t=new Gp(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(f){i.push(f)}function o(f){s.push(f)}function c(f){t.setup(i,f)}function h(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Hp(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Do(n,e),t.set(r,[c])):a>=o.length?(c=new Do(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class Vp extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yp(n,e,t){let i=new Jr;const s=new ue,r=new ue,a=new St,o=new Vp({depthPacking:Gc}),c=new Wp,h={},u=t.maxTextureSize,f={[Rn]:Ut,[Ut]:Rn,[Zt]:Zt},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new z(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let p=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const O=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),N=n.state;N.setBlending(bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==cn&&this.type===cn,Y=p===cn&&this.type!==cn;for(let L=0,H=A.length;L<H;L++){const q=A[L],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const te=j.getFrameExtents();if(s.multiply(te),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,j.mapSize.y=r.y)),j.map===null||B===!0||Y===!0){const K=this.type!==cn?{minFilter:Dt,magFilter:Dt}:{};j.map!==null&&j.map.dispose(),j.map=new Vn(s.x,s.y,K),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const Q=j.getViewportCount();for(let K=0;K<Q;K++){const I=j.getViewport(K);a.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),N.viewport(a),j.updateMatrices(q,K),i=j.getFrustum(),S(R,C,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===cn&&E(j,C),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(O,v,T)};function E(A,R){const C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,C,g,x,null)}function M(A,R,C,O){let v=null;const T=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=C.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=v.uuid,B=R.uuid;let Y=h[N];Y===void 0&&(Y={},h[N]=Y);let L=Y[B];L===void 0&&(L=v.clone(),Y[B]=L),v=L}if(v.visible=R.visible,v.wireframe=R.wireframe,O===cn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:f[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=n.properties.get(v);N.light=C}return v}function S(A,R,C,O,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===cn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const L=B.groups;for(let H=0,q=L.length;H<q;H++){const j=L[H],te=Y[j.materialIndex];if(te&&te.visible){const Q=M(A,te,O,v);n.renderBufferDirect(C,null,B,Q,A,j)}}}else if(Y.visible){const L=M(A,Y,O,v);n.renderBufferDirect(C,null,B,L,A,null)}}const N=A.children;for(let B=0,Y=N.length;B<Y;B++)S(N[B],R,C,O,v)}}function jp(n,e,t){const i=t.isWebGL2;function s(){let U=!1;const ve=new St;let ce=null;const J=new St(0,0,0,0);return{setMask:function(de){ce!==de&&!U&&(n.colorMask(de,de,de,de),ce=de)},setLocked:function(de){U=de},setClear:function(de,Ue,Qe,ft,kt){kt===!0&&(de*=ft,Ue*=ft,Qe*=ft),ve.set(de,Ue,Qe,ft),J.equals(ve)===!1&&(n.clearColor(de,Ue,Qe,ft),J.copy(ve))},reset:function(){U=!1,ce=null,J.set(-1,0,0,0)}}}function r(){let U=!1,ve=null,ce=null,J=null;return{setTest:function(de){de?De(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(de){ve!==de&&!U&&(n.depthMask(de),ve=de)},setFunc:function(de){if(ce!==de){switch(de){case _c:n.depthFunc(n.NEVER);break;case xc:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case yc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=de}},setLocked:function(de){U=de},setClear:function(de){J!==de&&(n.clearDepth(de),J=de)},reset:function(){U=!1,ve=null,ce=null,J=null}}}function a(){let U=!1,ve=null,ce=null,J=null,de=null,Ue=null,Qe=null,ft=null,kt=null;return{setTest:function(rt){U||(rt?De(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!U&&(n.stencilMask(rt),ve=rt)},setFunc:function(rt,Rt,Qt){(ce!==rt||J!==Rt||de!==Qt)&&(n.stencilFunc(rt,Rt,Qt),ce=rt,J=Rt,de=Qt)},setOp:function(rt,Rt,Qt){(Ue!==rt||Qe!==Rt||ft!==Qt)&&(n.stencilOp(rt,Rt,Qt),Ue=rt,Qe=Rt,ft=Qt)},setLocked:function(rt){U=rt},setClear:function(rt){kt!==rt&&(n.clearStencil(rt),kt=rt)},reset:function(){U=!1,ve=null,ce=null,J=null,de=null,Ue=null,Qe=null,ft=null,kt=null}}}const o=new s,c=new r,h=new a,u=new WeakMap,f=new WeakMap;let d={},g={},_=new WeakMap,x=[],m=null,p=!1,E=null,M=null,S=null,A=null,R=null,C=null,O=null,v=new Ve(0,0,0),T=0,N=!1,B=null,Y=null,L=null,H=null,q=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),te=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),te=Q>=2);let I=null,V={};const ge=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),re=new St().fromArray(ge),Se=new St().fromArray(_e);function Ae(U,ve,ce,J){const de=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(U,Ue),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ce;Qe++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ve+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ue}const Ce={};Ce[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),De(n.DEPTH_TEST),c.setFunc(Ls),ee(!1),ie(da),De(n.CULL_FACE),$(bn);function De(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Ze(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Pe(U,ve){return g[U]!==ve?(n.bindFramebuffer(U,ve),g[U]=ve,i&&(U===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ve),U===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function P(U,ve){let ce=x,J=!1;if(U)if(ce=_.get(ve),ce===void 0&&(ce=[],_.set(ve,ce)),U.isWebGLMultipleRenderTargets){const de=U.texture;if(ce.length!==de.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Qe=de.length;Ue<Qe;Ue++)ce[Ue]=n.COLOR_ATTACHMENT0+Ue;ce.length=de.length,J=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,J=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function fe(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const Z={[Bn]:n.FUNC_ADD,[nc]:n.FUNC_SUBTRACT,[ic]:n.FUNC_REVERSE_SUBTRACT};if(i)Z[_a]=n.MIN,Z[xa]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Z[_a]=U.MIN_EXT,Z[xa]=U.MAX_EXT)}const se={[sc]:n.ZERO,[rc]:n.ONE,[ac]:n.SRC_COLOR,[Pr]:n.SRC_ALPHA,[fc]:n.SRC_ALPHA_SATURATE,[hc]:n.DST_COLOR,[lc]:n.DST_ALPHA,[oc]:n.ONE_MINUS_SRC_COLOR,[Lr]:n.ONE_MINUS_SRC_ALPHA,[uc]:n.ONE_MINUS_DST_COLOR,[cc]:n.ONE_MINUS_DST_ALPHA,[dc]:n.CONSTANT_COLOR,[pc]:n.ONE_MINUS_CONSTANT_COLOR,[mc]:n.CONSTANT_ALPHA,[gc]:n.ONE_MINUS_CONSTANT_ALPHA};function $(U,ve,ce,J,de,Ue,Qe,ft,kt,rt){if(U===bn){p===!0&&(Ze(n.BLEND),p=!1);return}if(p===!1&&(De(n.BLEND),p=!0),U!==tc){if(U!==E||rt!==N){if((M!==Bn||R!==Bn)&&(n.blendEquation(n.FUNC_ADD),M=Bn,R=Bn),rt)switch(U){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.ONE,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,A=null,C=null,O=null,v.set(0,0,0),T=0,E=U,N=rt}return}de=de||ve,Ue=Ue||ce,Qe=Qe||J,(ve!==M||de!==R)&&(n.blendEquationSeparate(Z[ve],Z[de]),M=ve,R=de),(ce!==S||J!==A||Ue!==C||Qe!==O)&&(n.blendFuncSeparate(se[ce],se[J],se[Ue],se[Qe]),S=ce,A=J,C=Ue,O=Qe),(ft.equals(v)===!1||kt!==T)&&(n.blendColor(ft.r,ft.g,ft.b,kt),v.copy(ft),T=kt),E=U,N=!1}function we(U,ve){U.side===Zt?Ze(n.CULL_FACE):De(n.CULL_FACE);let ce=U.side===Ut;ve&&(ce=!ce),ee(ce),U.blending===xi&&U.transparent===!1?$(bn):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const J=U.stencilWrite;h.setTest(J),J&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){B!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),B=U)}function ie(U){U!==Ql?(De(n.CULL_FACE),U!==Y&&(U===da?n.cullFace(n.BACK):U===ec?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),Y=U}function Ee(U){U!==L&&(te&&n.lineWidth(U),L=U)}function ze(U,ve,ce){U?(De(n.POLYGON_OFFSET_FILL),(H!==ve||q!==ce)&&(n.polygonOffset(ve,ce),H=ve,q=ce)):Ze(n.POLYGON_OFFSET_FILL)}function ot(U){U?De(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function w(U){U===void 0&&(U=n.TEXTURE0+j-1),I!==U&&(n.activeTexture(U),I=U)}function y(U,ve,ce){ce===void 0&&(I===null?ce=n.TEXTURE0+j-1:ce=I);let J=V[ce];J===void 0&&(J={type:void 0,texture:void 0},V[ce]=J),(J.type!==U||J.texture!==ve)&&(I!==ce&&(n.activeTexture(ce),I=ce),n.bindTexture(U,ve||Ce[U]),J.type=U,J.texture=ve)}function k(){const U=V[I];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){re.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Fe(U){Se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Se.copy(U))}function Le(U,ve){let ce=f.get(ve);ce===void 0&&(ce=new WeakMap,f.set(ve,ce));let J=ce.get(U);J===void 0&&(J=n.getUniformBlockIndex(ve,U.name),ce.set(U,J))}function ye(U,ve){const J=f.get(ve).get(U);u.get(ve)!==J&&(n.uniformBlockBinding(ve,J,U.__bindingPointIndex),u.set(ve,J))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},I=null,V={},g={},_=new WeakMap,x=[],m=null,p=!1,E=null,M=null,S=null,A=null,R=null,C=null,O=null,v=new Ve(0,0,0),T=0,N=!1,B=null,Y=null,L=null,H=null,q=null,re.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:De,disable:Ze,bindFramebuffer:Pe,drawBuffers:P,useProgram:fe,setBlending:$,setMaterial:we,setFlipSided:ee,setCullFace:ie,setLineWidth:Ee,setPolygonOffset:ze,setScissorTest:ot,activeTexture:w,bindTexture:y,unbindTexture:k,compressedTexImage2D:ae,compressedTexImage3D:ne,texImage2D:le,texImage3D:et,updateUBOMapping:Le,uniformBlockBinding:ye,texStorage2D:Oe,texStorage3D:$e,texSubImage2D:oe,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:ke,viewport:Fe,reset:Je}}function Zp(n,e,t,i,s,r,a){const o=s.isWebGL2,c=s.maxTextures,h=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,y){return p?new OffscreenCanvas(w,y):Os("canvas")}function M(w,y,k,ae){let ne=1;if((w.width>ae||w.height>ae)&&(ne=ae/Math.max(w.width,w.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const oe=y?zr:Math.floor,Te=oe(ne*w.width),he=oe(ne*w.height);x===void 0&&(x=E(Te,he));const xe=k?E(Te,he):x;return xe.width=Te,xe.height=he,xe.getContext("2d").drawImage(w,0,0,Te,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Te+"x"+he+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Ya(w.width)&&Ya(w.height)}function A(w){return o?!1:w.wrapS!==Jt||w.wrapT!==Jt||w.minFilter!==Dt&&w.minFilter!==Ht}function R(w,y){return w.generateMipmaps&&y&&w.minFilter!==Dt&&w.minFilter!==Ht}function C(w){n.generateMipmap(w)}function O(w,y,k,ae,ne=!1){if(o===!1)return y;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe=y;if(y===n.RED&&(k===n.FLOAT&&(oe=n.R32F),k===n.HALF_FLOAT&&(oe=n.R16F),k===n.UNSIGNED_BYTE&&(oe=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(oe=n.R8UI),k===n.UNSIGNED_SHORT&&(oe=n.R16UI),k===n.UNSIGNED_INT&&(oe=n.R32UI),k===n.BYTE&&(oe=n.R8I),k===n.SHORT&&(oe=n.R16I),k===n.INT&&(oe=n.R32I)),y===n.RG&&(k===n.FLOAT&&(oe=n.RG32F),k===n.HALF_FLOAT&&(oe=n.RG16F),k===n.UNSIGNED_BYTE&&(oe=n.RG8)),y===n.RGBA){const Te=ne?Ds:tt.getTransfer(ae);k===n.FLOAT&&(oe=n.RGBA32F),k===n.HALF_FLOAT&&(oe=n.RGBA16F),k===n.UNSIGNED_BYTE&&(oe=Te===at?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(w,y,k){return R(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Dt&&w.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){return w===Dt||w===va||w===Ys?n.NEAREST:n.LINEAR}function N(w){const y=w.target;y.removeEventListener("dispose",N),Y(y),y.isVideoTexture&&_.delete(y)}function B(w){const y=w.target;y.removeEventListener("dispose",B),H(y)}function Y(w){const y=i.get(w);if(y.__webglInit===void 0)return;const k=w.source,ae=m.get(k);if(ae){const ne=ae[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(w),Object.keys(ae).length===0&&m.delete(k)}i.remove(w)}function L(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const k=w.source,ae=m.get(k);delete ae[y.__cacheKey],a.memory.textures--}function H(w){const y=w.texture,k=i.get(w),ae=i.get(y);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(k.__webglFramebuffer[ne]))for(let oe=0;oe<k.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(k.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(k.__webglFramebuffer[ne]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[ne])}else{if(Array.isArray(k.__webglFramebuffer))for(let ne=0;ne<k.__webglFramebuffer.length;ne++)n.deleteFramebuffer(k.__webglFramebuffer[ne]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ne=0;ne<k.__webglColorRenderbuffer.length;ne++)k.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,oe=y.length;ne<oe;ne++){const Te=i.get(y[ne]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(y[ne])}i.remove(y),i.remove(w)}let q=0;function j(){q=0}function te(){const w=q;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),q+=1,w}function Q(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){const k=i.get(w);if(w.isVideoTexture&&ze(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const ae=w.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,w,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function I(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){De(k,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function V(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){De(k,w,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function ge(w,y){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Ze(k,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const _e={[Ir]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[Nr]:n.MIRRORED_REPEAT},re={[Dt]:n.NEAREST,[va]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Se={[Vc]:n.NEVER,[Jc]:n.ALWAYS,[Wc]:n.LESS,[qc]:n.LEQUAL,[Xc]:n.EQUAL,[Zc]:n.GEQUAL,[Yc]:n.GREATER,[jc]:n.NOTEQUAL};function Ae(w,y,k){if(k?(n.texParameteri(w,n.TEXTURE_WRAP_S,_e[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,_e[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,_e[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,re[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,re[y.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Jt||y.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Dt&&y.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Dt||y.minFilter!==Ys&&y.minFilter!==Vi||y.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Wi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(w,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Ce(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",N));const ae=y.source;let ne=m.get(ae);ne===void 0&&(ne={},m.set(ae,ne));const oe=Q(y);if(oe!==w.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ne[oe].usedTimes++;const Te=ne[w.__cacheKey];Te!==void 0&&(ne[w.__cacheKey].usedTimes--,Te.usedTimes===0&&L(y)),w.__cacheKey=oe,w.__webglTexture=ne[oe].texture}return k}function De(w,y,k){let ae=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=n.TEXTURE_3D);const ne=Ce(w,y),oe=y.source;t.bindTexture(ae,w.__webglTexture,n.TEXTURE0+k);const Te=i.get(oe);if(oe.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+k);const he=tt.getPrimaries(tt.workingColorSpace),xe=y.colorSpace===Wt?null:tt.getPrimaries(y.colorSpace),Oe=y.colorSpace===Wt||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const $e=A(y)&&S(y.image)===!1;let le=M(y.image,$e,!1,u);le=ot(y,le);const et=S(le)||o,ke=r.convert(y.format,y.colorSpace);let Fe=r.convert(y.type),Le=O(y.internalFormat,ke,Fe,y.colorSpace,y.isVideoTexture);Ae(ae,y,et);let ye;const Je=y.mipmaps,U=o&&y.isVideoTexture!==!0,ve=Te.__version===void 0||ne===!0,ce=v(y,le,et);if(y.isDepthTexture)Le=n.DEPTH_COMPONENT,o?y.type===Tn?Le=n.DEPTH_COMPONENT32F:y.type===En?Le=n.DEPTH_COMPONENT24:y.type===kn?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:y.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Gn&&Le===n.DEPTH_COMPONENT&&y.type!==Yr&&y.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=En,Fe=r.convert(y.type)),y.format===yi&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,y.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=kn,Fe=r.convert(y.type))),ve&&(U?t.texStorage2D(n.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,ke,Fe,null));else if(y.isDataTexture)if(Je.length>0&&et){U&&ve&&t.texStorage2D(n.TEXTURE_2D,ce,Le,Je[0].width,Je[0].height);for(let J=0,de=Je.length;J<de;J++)ye=Je[J],U?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,ke,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Le,ye.width,ye.height,0,ke,Fe,ye.data);y.generateMipmaps=!1}else U?(ve&&t.texStorage2D(n.TEXTURE_2D,ce,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ke,Fe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,ke,Fe,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Le,Je[0].width,Je[0].height,le.depth);for(let J=0,de=Je.length;J<de;J++)ye=Je[J],y.format!==Kt?ke!==null?U?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,le.depth,ke,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Le,ye.width,ye.height,le.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ye.width,ye.height,le.depth,ke,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Le,ye.width,ye.height,le.depth,0,ke,Fe,ye.data)}else{U&&ve&&t.texStorage2D(n.TEXTURE_2D,ce,Le,Je[0].width,Je[0].height);for(let J=0,de=Je.length;J<de;J++)ye=Je[J],y.format!==Kt?ke!==null?U?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,ke,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ye.width,ye.height,ke,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,J,Le,ye.width,ye.height,0,ke,Fe,ye.data)}else if(y.isDataArrayTexture)U?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ke,Fe,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,ke,Fe,le.data);else if(y.isData3DTexture)U?(ve&&t.texStorage3D(n.TEXTURE_3D,ce,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ke,Fe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,ke,Fe,le.data);else if(y.isFramebufferTexture){if(ve)if(U)t.texStorage2D(n.TEXTURE_2D,ce,Le,le.width,le.height);else{let J=le.width,de=le.height;for(let Ue=0;Ue<ce;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Le,J,de,0,ke,Fe,null),J>>=1,de>>=1}}else if(Je.length>0&&et){U&&ve&&t.texStorage2D(n.TEXTURE_2D,ce,Le,Je[0].width,Je[0].height);for(let J=0,de=Je.length;J<de;J++)ye=Je[J],U?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ke,Fe,ye):t.texImage2D(n.TEXTURE_2D,J,Le,ke,Fe,ye);y.generateMipmaps=!1}else U?(ve&&t.texStorage2D(n.TEXTURE_2D,ce,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Fe,le)):t.texImage2D(n.TEXTURE_2D,0,Le,ke,Fe,le);R(y,et)&&C(ae),Te.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ze(w,y,k){if(y.image.length!==6)return;const ae=Ce(w,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const oe=i.get(ne);if(ne.version!==oe.__version||ae===!0){t.activeTexture(n.TEXTURE0+k);const Te=tt.getPrimaries(tt.workingColorSpace),he=y.colorSpace===Wt?null:tt.getPrimaries(y.colorSpace),xe=y.colorSpace===Wt||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,$e=y.image[0]&&y.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!Oe&&!$e?le[J]=M(y.image[J],!1,!0,h):le[J]=$e?y.image[J].image:y.image[J],le[J]=ot(y,le[J]);const et=le[0],ke=S(et)||o,Fe=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),ye=O(y.internalFormat,Fe,Le,y.colorSpace),Je=o&&y.isVideoTexture!==!0,U=oe.__version===void 0||ae===!0;let ve=v(y,et,ke);Ae(n.TEXTURE_CUBE_MAP,y,ke);let ce;if(Oe){Je&&U&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ye,et.width,et.height);for(let J=0;J<6;J++){ce=le[J].mipmaps;for(let de=0;de<ce.length;de++){const Ue=ce[de];y.format!==Kt?Fe!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ye,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Ue.width,Ue.height,Fe,Le,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ye,Ue.width,Ue.height,0,Fe,Le,Ue.data)}}}else{ce=y.mipmaps,Je&&U&&(ce.length>0&&ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ye,le[0].width,le[0].height));for(let J=0;J<6;J++)if($e){Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Fe,Le,le[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,le[J].width,le[J].height,0,Fe,Le,le[J].data);for(let de=0;de<ce.length;de++){const Qe=ce[de].image[J].image;Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Qe.width,Qe.height,Fe,Le,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ye,Qe.width,Qe.height,0,Fe,Le,Qe.data)}}else{Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,Le,le[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ye,Fe,Le,le[J]);for(let de=0;de<ce.length;de++){const Ue=ce[de];Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Fe,Le,Ue.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ye,Fe,Le,Ue.image[J])}}}R(y,ke)&&C(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Pe(w,y,k,ae,ne,oe){const Te=r.convert(k.format,k.colorSpace),he=r.convert(k.type),xe=O(k.internalFormat,Te,he,k.colorSpace);if(!i.get(y).__hasExternalTextures){const $e=Math.max(1,y.width>>oe),le=Math.max(1,y.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,xe,$e,le,y.depth,0,Te,he,null):t.texImage2D(ne,oe,xe,$e,le,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ee(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ne,i.get(k).__webglTexture,0,ie(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ne,i.get(k).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(w,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let ae=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Ee(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Tn?ae=n.DEPTH_COMPONENT32F:ne.type===En&&(ae=n.DEPTH_COMPONENT24));const oe=ie(y);Ee(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ae,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ae,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const ae=ie(y);k&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):Ee(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const ae=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<ae.length;ne++){const oe=ae[ne],Te=r.convert(oe.format,oe.colorSpace),he=r.convert(oe.type),xe=O(oe.internalFormat,Te,he,oe.colorSpace),Oe=ie(y);k&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,xe,y.width,y.height):Ee(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const ae=i.get(y.depthTexture).__webglTexture,ne=ie(y);if(y.depthTexture.format===Gn)Ee(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===yi)Ee(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Z(w){const y=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");fe(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=n.createRenderbuffer(),P(y.__webglDepthbuffer[ae],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),P(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(w,y,k){const ae=i.get(w);y!==void 0&&Pe(ae.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Z(w)}function $(w){const y=w.texture,k=i.get(w),ae=i.get(y);w.addEventListener("dispose",B),w.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=y.version,a.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,oe=w.isWebGLMultipleRenderTargets===!0,Te=S(w)||o;if(ne){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let xe=0;xe<y.mipmaps.length;xe++)k.__webglFramebuffer[he][xe]=n.createFramebuffer()}else k.__webglFramebuffer[he]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)k.__webglFramebuffer[he]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){const he=w.texture;for(let xe=0,Oe=he.length;xe<Oe;xe++){const $e=i.get(he[xe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Ee(w)===!1){const he=oe?y:[y];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Oe=he[xe];k.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);const $e=r.convert(Oe.format,Oe.colorSpace),le=r.convert(Oe.type),et=O(Oe.internalFormat,$e,le,Oe.colorSpace,w.isXRRenderTarget===!0),ke=ie(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,et,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),P(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,y,Te);for(let he=0;he<6;he++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Pe(k.__webglFramebuffer[he][xe],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else Pe(k.__webglFramebuffer[he],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);R(y,Te)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const he=w.texture;for(let xe=0,Oe=he.length;xe<Oe;xe++){const $e=he[xe],le=i.get($e);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ae(n.TEXTURE_2D,$e,Te),Pe(k.__webglFramebuffer,w,$e,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),R($e,Te)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ae.__webglTexture),Ae(he,y,Te),o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Pe(k.__webglFramebuffer[xe],w,y,n.COLOR_ATTACHMENT0,he,xe);else Pe(k.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,he,0);R(y,Te)&&C(he),t.unbindTexture()}w.depthBuffer&&Z(w)}function we(w){const y=S(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0,ne=k.length;ae<ne;ae++){const oe=k[ae];if(R(oe,y)){const Te=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(oe).__webglTexture;t.bindTexture(Te,he),C(Te),t.unbindTexture()}}}function ee(w){if(o&&w.samples>0&&Ee(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,ae=w.height;let ne=n.COLOR_BUFFER_BIT;const oe=[],Te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(w),xe=w.isWebGLMultipleRenderTargets===!0;if(xe)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){oe.push(n.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&oe.push(Te);const $e=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if($e===!1&&(w.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Oe]),$e===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),xe){const le=i.get(y[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,k,ae,0,0,k,ae,ne,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,he.__webglColorRenderbuffer[Oe]);const $e=i.get(y[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ie(w){return Math.min(f,w.samples)}function Ee(w){const y=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ze(w){const y=a.render.frame;_.get(w)!==y&&(_.set(w,y),w.update())}function ot(w,y){const k=w.colorSpace,ae=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Fr||k!==mn&&k!==Wt&&(tt.getTransfer(k)===at?o===!1?e.has("EXT_sRGB")===!0&&ae===Kt?(w.format=Fr,w.minFilter=Ht,w.generateMipmaps=!1):y=fl.sRGBToLinear(y):(ae!==Kt||ne!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=te,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=ge,this.rebindTextures=se,this.setupRenderTarget=$,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ee}function Jp(n,e,t){const i=t.isWebGL2;function s(r,a=Wt){let o;const c=tt.getTransfer(a);if(r===An)return n.UNSIGNED_BYTE;if(r===sl)return n.UNSIGNED_SHORT_4_4_4_4;if(r===rl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Lc)return n.BYTE;if(r===Dc)return n.SHORT;if(r===Yr)return n.UNSIGNED_SHORT;if(r===il)return n.INT;if(r===En)return n.UNSIGNED_INT;if(r===Tn)return n.FLOAT;if(r===Wi)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Uc)return n.ALPHA;if(r===Kt)return n.RGBA;if(r===Ic)return n.LUMINANCE;if(r===Nc)return n.LUMINANCE_ALPHA;if(r===Gn)return n.DEPTH_COMPONENT;if(r===yi)return n.DEPTH_STENCIL;if(r===Fr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Oc)return n.RED;if(r===al)return n.RED_INTEGER;if(r===Fc)return n.RG;if(r===ol)return n.RG_INTEGER;if(r===ll)return n.RGBA_INTEGER;if(r===js||r===Zs||r===Js||r===Ks)if(c===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ma||r===Sa||r===ya||r===Ea)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ta||r===ba)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ta)return c===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ba)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wa||r===Aa||r===Ra||r===Ca||r===Pa||r===La||r===Da||r===Ua||r===Ia||r===Na||r===Oa||r===Fa||r===Ba||r===za)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wa)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Aa)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ra)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ca)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pa)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===La)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Da)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ua)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ia)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Na)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oa)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fa)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ba)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===za)return c===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$s||r===ka||r===Ga)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===$s)return c===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ka)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ga)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zc||r===Ha||r===Va||r===Wa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===$s)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ha)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Va)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Kp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,_=.005;h.inputState.pinching&&d>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qp extends It{constructor(e,t,i,s,r,a,o,c,h,u){if(u=u!==void 0?u:Gn,u!==Gn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gn&&(i=En),i===void 0&&u===yi&&(i=kn),super(null,s,r,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class em extends bi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,d=null,g=null,_=null;const x=t.getContextAttributes();let m=null,p=null;const E=[],M=[],S=new zt;S.layers.enable(1),S.viewport=new St;const A=new zt;A.layers.enable(2),A.viewport=new St;const R=[S,A],C=new Kp;C.layers.enable(1),C.layers.enable(2);let O=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=E[I];return V===void 0&&(V=new Er,E[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=E[I];return V===void 0&&(V=new Er,E[I]=V),V.getGripSpace()},this.getHand=function(I){let V=E[I];return V===void 0&&(V=new Er,E[I]=V),V.getHandSpace()};function T(I){const V=M.indexOf(I.inputSource);if(V===-1)return;const ge=E[V];ge!==void 0&&(ge.update(I.inputSource,I.frame,h||a),ge.dispatchEvent({type:I.type,data:I.inputSource}))}function N(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let I=0;I<E.length;I++){const V=M[I];V!==null&&(M[I]=null,E[I].disconnect(V))}O=null,v=null,e.setRenderTarget(m),g=null,d=null,f=null,s=null,p=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(I){h=I},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:g}),p=new Vn(g.framebufferWidth,g.framebufferHeight,{format:Kt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,ge=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=x.stencil?yi:Gn,ge=x.stencil?kn:En);const re={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(re),s.updateRenderState({layers:[d]}),p=new Vn(d.textureWidth,d.textureHeight,{format:Kt,type:An,depthTexture:new Qp(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Se=e.properties.get(p);Se.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(I){for(let V=0;V<I.removed.length;V++){const ge=I.removed[V],_e=M.indexOf(ge);_e>=0&&(M[_e]=null,E[_e].disconnect(ge))}for(let V=0;V<I.added.length;V++){const ge=I.added[V];let _e=M.indexOf(ge);if(_e===-1){for(let Se=0;Se<E.length;Se++)if(Se>=M.length){M.push(ge),_e=Se;break}else if(M[Se]===null){M[Se]=ge,_e=Se;break}if(_e===-1)break}const re=E[_e];re&&re.connect(ge)}}const Y=new D,L=new D;function H(I,V,ge){Y.setFromMatrixPosition(V.matrixWorld),L.setFromMatrixPosition(ge.matrixWorld);const _e=Y.distanceTo(L),re=V.projectionMatrix.elements,Se=ge.projectionMatrix.elements,Ae=re[14]/(re[10]-1),Ce=re[14]/(re[10]+1),De=(re[9]+1)/re[5],Ze=(re[9]-1)/re[5],Pe=(re[8]-1)/re[0],P=(Se[8]+1)/Se[0],fe=Ae*Pe,Z=Ae*P,se=_e/(-Pe+P),$=se*-Pe;V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX($),I.translateZ(se),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const we=Ae+se,ee=Ce+se,ie=fe-$,Ee=Z+(_e-$),ze=De*Ce/ee*we,ot=Ze*Ce/ee*we;I.projectionMatrix.makePerspective(ie,Ee,ze,ot,we,ee),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function q(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;C.near=A.near=S.near=I.near,C.far=A.far=S.far=I.far,(O!==C.near||v!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,v=C.far);const V=I.parent,ge=C.cameras;q(C,V);for(let _e=0;_e<ge.length;_e++)q(ge[_e],V);ge.length===2?H(C,S,A):C.projectionMatrix.copy(S.projectionMatrix),j(I,C,V)};function j(I,V,ge){ge===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy(ge.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Br*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(I){c=I,d!==null&&(d.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let te=null;function Q(I,V){if(u=V.getViewerPose(h||a),_=V,u!==null){const ge=u.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let _e=!1;ge.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let re=0;re<ge.length;re++){const Se=ge[re];let Ae=null;if(g!==null)Ae=g.getViewport(Se);else{const De=f.getViewSubImage(d,Se);Ae=De.viewport,re===0&&(e.setRenderTargetTextures(p,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let Ce=R[re];Ce===void 0&&(Ce=new zt,Ce.layers.enable(re),Ce.viewport=new St,R[re]=Ce),Ce.matrix.fromArray(Se.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Se.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),re===0&&(C.matrix.copy(Ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(Ce)}}for(let ge=0;ge<E.length;ge++){const _e=M[ge],re=E[ge];_e!==null&&re!==void 0&&re.update(_e,V,h||a)}te&&te(I,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const K=new yl;K.setAnimationLoop(Q),this.setAnimationLoop=function(I){te=I},this.dispose=function(){}}}function tm(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&g(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nm(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const S=M.program;i.uniformBlockBinding(E,S)}function h(E,M){let S=s[E.id];S===void 0&&(_(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(E,A);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const M=f();E.__bindingPointIndex=M;const S=n.createBuffer(),A=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],S=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,C=S.length;R<C;R++){const O=S[R];if(g(O,R,A)===!0){const v=O.__offset,T=Array.isArray(O.value)?O.value:[O.value];let N=0;for(let B=0;B<T.length;B++){const Y=T[B],L=x(Y);typeof Y=="number"?(O.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,v+N,O.__data)):Y.isMatrix3?(O.__data[0]=Y.elements[0],O.__data[1]=Y.elements[1],O.__data[2]=Y.elements[2],O.__data[3]=Y.elements[0],O.__data[4]=Y.elements[3],O.__data[5]=Y.elements[4],O.__data[6]=Y.elements[5],O.__data[7]=Y.elements[0],O.__data[8]=Y.elements[6],O.__data[9]=Y.elements[7],O.__data[10]=Y.elements[8],O.__data[11]=Y.elements[0]):(Y.toArray(O.__data,N),N+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,O.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,M,S){const A=E.value;if(S[M]===void 0){if(typeof A=="number")S[M]=A;else{const R=Array.isArray(A)?A:[A],C=[];for(let O=0;O<R.length;O++)C.push(R[O].clone());S[M]=C}return!0}else if(typeof A=="number"){if(S[M]!==A)return S[M]=A,!0}else{const R=Array.isArray(S[M])?S[M]:[S[M]],C=Array.isArray(A)?A:[A];for(let O=0;O<R.length;O++){const v=R[O];if(v.equals(C[O])===!1)return v.copy(C[O]),!0}}return!1}function _(E){const M=E.uniforms;let S=0;const A=16;let R=0;for(let C=0,O=M.length;C<O;C++){const v=M[C],T={boundary:0,storage:0},N=Array.isArray(v.value)?v.value:[v.value];for(let B=0,Y=N.length;B<Y;B++){const L=N[B],H=x(L);T.boundary+=H.boundary,T.storage+=H.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=S,C>0){R=S%A;const B=A-R;R!==0&&B-T.boundary<0&&(S+=A-R,v.__offset=S)}S+=T.storage}return R=S%A,R>0&&(S+=A-R),E.__size=S,E.__cache={},this}function x(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class $r{constructor(e={}){const{canvas:t=$c(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const M=this;let S=!1,A=0,R=0,C=null,O=-1,v=null;const T=new St,N=new St;let B=null;const Y=new Ve(0);let L=0,H=t.width,q=t.height,j=1,te=null,Q=null;const K=new St(0,0,H,q),I=new St(0,0,H,q);let V=!1;const ge=new Jr;let _e=!1,re=!1,Se=null;const Ae=new ut,Ce=new ue,De=new D,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return C===null?j:1}let P=i;function fe(b,F){for(let G=0;G<b.length;G++){const W=b[G],X=t.getContext(W,F);if(X!==null)return X}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),P===null){const F=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&F.shift(),P=fe(F,b),P===null)throw fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,se,$,we,ee,ie,Ee,ze,ot,w,y,k,ae,ne,oe,Te,he,xe,Oe,$e,le,et,ke,Fe;function Le(){Z=new fd(P),se=new ad(P,Z,e),Z.init(se),et=new Jp(P,Z,se),$=new jp(P,Z,se),we=new md(P),ee=new Ip,ie=new Zp(P,Z,$,ee,se,et,we),Ee=new ld(M),ze=new ud(M),ot=new Th(P,se),ke=new sd(P,Z,ot,se),w=new dd(P,ot,we,ke),y=new vd(P,w,ot,we),Oe=new xd(P,se,ie),Te=new od(ee),k=new Up(M,Ee,ze,Z,se,ke,Te),ae=new tm(M,ee),ne=new Op,oe=new Hp(Z,se),xe=new id(M,Ee,ze,$,y,d,c),he=new Yp(M,y,se),Fe=new nm(P,we,se,$),$e=new rd(P,Z,we,se),le=new pd(P,Z,we,se),we.programs=k.programs,M.capabilities=se,M.extensions=Z,M.properties=ee,M.renderLists=ne,M.shadowMap=he,M.state=$,M.info=we}Le();const ye=new em(M,P);this.xr=ye,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(H,q,!1))},this.getSize=function(b){return b.set(H,q)},this.setSize=function(b,F,G=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,q=F,t.width=Math.floor(b*j),t.height=Math.floor(F*j),G===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*j,q*j).floor()},this.setDrawingBufferSize=function(b,F,G){H=b,q=F,j=G,t.width=Math.floor(b*G),t.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,F,G,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,F,G,W),$.viewport(T.copy(K).multiplyScalar(j).floor())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,F,G,W){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,F,G,W),$.scissor(N.copy(I).multiplyScalar(j).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){$.setScissorTest(V=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(b=!0,F=!0,G=!0){let W=0;if(b){let X=!1;if(C!==null){const Me=C.texture.format;X=Me===ll||Me===ol||Me===al}if(X){const Me=C.texture.type,Re=Me===An||Me===En||Me===Yr||Me===kn||Me===sl||Me===rl,Ie=xe.getClearColor(),Be=xe.getClearAlpha(),Xe=Ie.r,Ge=Ie.g,He=Ie.b;Re?(g[0]=Xe,g[1]=Ge,g[2]=He,g[3]=Be,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Xe,_[1]=Ge,_[2]=He,_[3]=Be,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ne.dispose(),oe.dispose(),ee.dispose(),Ee.dispose(),ze.dispose(),y.dispose(),ke.dispose(),Fe.dispose(),k.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",kt),ye.removeEventListener("sessionend",rt),Se&&(Se.dispose(),Se=null),Rt.stop()};function Je(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=we.autoReset,F=he.enabled,G=he.autoUpdate,W=he.needsUpdate,X=he.type;Le(),we.autoReset=b,he.enabled=F,he.autoUpdate=G,he.needsUpdate=W,he.type=X}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ce(b){const F=b.target;F.removeEventListener("dispose",ce),J(F)}function J(b){de(b),ee.remove(b)}function de(b){const F=ee.get(b).programs;F!==void 0&&(F.forEach(function(G){k.releaseProgram(G)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,W,X,Me){F===null&&(F=Ze);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Ie=Zl(b,F,G,W,X);$.setMaterial(W,Re);let Be=G.index,Xe=1;if(W.wireframe===!0){if(Be=w.getWireframeAttribute(G),Be===void 0)return;Xe=2}const Ge=G.drawRange,He=G.attributes.position;let ht=Ge.start*Xe,Nt=(Ge.start+Ge.count)*Xe;Me!==null&&(ht=Math.max(ht,Me.start*Xe),Nt=Math.min(Nt,(Me.start+Me.count)*Xe)),Be!==null?(ht=Math.max(ht,0),Nt=Math.min(Nt,Be.count)):He!=null&&(ht=Math.max(ht,0),Nt=Math.min(Nt,He.count));const xt=Nt-ht;if(xt<0||xt===1/0)return;ke.setup(X,W,Ie,G,Be);let nn,ct=$e;if(Be!==null&&(nn=ot.get(Be),ct=le,ct.setIndex(nn)),X.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*Pe()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(X.isLine){let je=W.linewidth;je===void 0&&(je=1),$.setLineWidth(je*Pe()),X.isLineSegments?ct.setMode(P.LINES):X.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else X.isPoints?ct.setMode(P.POINTS):X.isSprite&&ct.setMode(P.TRIANGLES);if(X.isInstancedMesh)ct.renderInstances(ht,xt,X.count);else if(G.isInstancedBufferGeometry){const je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Vs=Math.min(G.instanceCount,je);ct.renderInstances(ht,xt,Vs)}else ct.render(ht,xt)};function Ue(b,F,G){b.transparent===!0&&b.side===Zt&&b.forceSinglePass===!1?(b.side=Ut,b.needsUpdate=!0,Qi(b,F,G),b.side=Rn,b.needsUpdate=!0,Qi(b,F,G),b.side=Zt):Qi(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),m=oe.get(G),m.init(),E.push(m),G.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),b!==G&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(M._useLegacyLights);const W=new Set;return b.traverse(function(X){const Me=X.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ie=Me[Re];Ue(Ie,G,X),W.add(Ie)}else Ue(Me,G,X),W.add(Me)}),E.pop(),m=null,W},this.compileAsync=function(b,F,G=null){const W=this.compile(b,F,G);return new Promise(X=>{function Me(){if(W.forEach(function(Re){ee.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){X(b);return}setTimeout(Me,10)}Z.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Qe=null;function ft(b){Qe&&Qe(b)}function kt(){Rt.stop()}function rt(){Rt.start()}const Rt=new yl;Rt.setAnimationLoop(ft),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(b){Qe=b,ye.setAnimationLoop(b),b===null?Rt.stop():Rt.start()},ye.addEventListener("sessionstart",kt),ye.addEventListener("sessionend",rt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,F,C),m=oe.get(b,E.length),m.init(),E.push(m),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ge.setFromProjectionMatrix(Ae),re=this.localClippingEnabled,_e=Te.init(this.clippingPlanes,re),x=ne.get(b,p.length),x.init(),p.push(x),Qt(b,F,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(te,Q),this.info.render.frame++,_e===!0&&Te.beginShadows();const G=m.state.shadowsArray;if(he.render(G,b,F),_e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(x,b),m.setupLights(M._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let X=0,Me=W.length;X<Me;X++){const Re=W[X];oa(x,b,Re,Re.viewport)}}else oa(x,b,F);C!==null&&(ie.updateMultisampleRenderTarget(C),ie.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(M,b,F),ke.resetDefaultState(),O=-1,v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Qt(b,F,G,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ge.intersectsSprite(b)){W&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Re=y.update(b),Ie=b.material;Ie.visible&&x.push(b,Re,Ie,G,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ge.intersectsObject(b))){const Re=y.update(b),Ie=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),De.copy(Re.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ie)){const Be=Re.groups;for(let Xe=0,Ge=Be.length;Xe<Ge;Xe++){const He=Be[Xe],ht=Ie[He.materialIndex];ht&&ht.visible&&x.push(b,Re,ht,G,De.z,He)}}else Ie.visible&&x.push(b,Re,Ie,G,De.z,null)}}const Me=b.children;for(let Re=0,Ie=Me.length;Re<Ie;Re++)Qt(Me[Re],F,G,W)}function oa(b,F,G,W){const X=b.opaque,Me=b.transmissive,Re=b.transparent;m.setupLightsView(G),_e===!0&&Te.setGlobalState(M.clippingPlanes,G),Me.length>0&&jl(X,Me,F,G),W&&$.viewport(T.copy(W)),X.length>0&&$i(X,F,G),Me.length>0&&$i(Me,F,G),Re.length>0&&$i(Re,F,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function jl(b,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Me=se.isWebGL2;Se===null&&(Se=new Vn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Wi:An,minFilter:Vi,samples:Me?4:0})),M.getDrawingBufferSize(Ce),Me?Se.setSize(Ce.x,Ce.y):Se.setSize(zr(Ce.x),zr(Ce.y));const Re=M.getRenderTarget();M.setRenderTarget(Se),M.getClearColor(Y),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Ie=M.toneMapping;M.toneMapping=wn,$i(b,G,W),ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se);let Be=!1;for(let Xe=0,Ge=F.length;Xe<Ge;Xe++){const He=F[Xe],ht=He.object,Nt=He.geometry,xt=He.material,nn=He.group;if(xt.side===Zt&&ht.layers.test(W.layers)){const ct=xt.side;xt.side=Ut,xt.needsUpdate=!0,la(ht,G,W,Nt,xt,nn),xt.side=ct,xt.needsUpdate=!0,Be=!0}}Be===!0&&(ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se)),M.setRenderTarget(Re),M.setClearColor(Y,L),M.toneMapping=Ie}function $i(b,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Me=b.length;X<Me;X++){const Re=b[X],Ie=Re.object,Be=Re.geometry,Xe=W===null?Re.material:W,Ge=Re.group;Ie.layers.test(G.layers)&&la(Ie,F,G,Be,Xe,Ge)}}function la(b,F,G,W,X,Me){b.onBeforeRender(M,F,G,W,X,Me),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(M,F,G,W,b,Me),X.transparent===!0&&X.side===Zt&&X.forceSinglePass===!1?(X.side=Ut,X.needsUpdate=!0,M.renderBufferDirect(G,F,W,X,b,Me),X.side=Rn,X.needsUpdate=!0,M.renderBufferDirect(G,F,W,X,b,Me),X.side=Zt):M.renderBufferDirect(G,F,W,X,b,Me),b.onAfterRender(M,F,G,W,X,Me)}function Qi(b,F,G){F.isScene!==!0&&(F=Ze);const W=ee.get(b),X=m.state.lights,Me=m.state.shadowsArray,Re=X.state.version,Ie=k.getParameters(b,X.state,Me,F,G),Be=k.getProgramCacheKey(Ie);let Xe=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?ze:Ee).get(b.envMap||W.environment),Xe===void 0&&(b.addEventListener("dispose",ce),Xe=new Map,W.programs=Xe);let Ge=Xe.get(Be);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Re)return ha(b,Ie),Ge}else Ie.uniforms=k.getUniforms(b),b.onBuild(G,Ie,M),b.onBeforeCompile(Ie,M),Ge=k.acquireProgram(Ie,Be),Xe.set(Be,Ge),W.uniforms=Ie.uniforms;const He=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Te.uniform),ha(b,Ie),W.needsLights=Kl(b),W.lightsStateVersion=Re,W.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function ca(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Ps.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ha(b,F){const G=ee.get(b);G.outputColorSpace=F.outputColorSpace,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Zl(b,F,G,W,X){F.isScene!==!0&&(F=Ze),ie.resetTextureUnits();const Me=F.fog,Re=W.isMeshStandardMaterial?F.environment:null,Ie=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mn,Be=(W.isMeshStandardMaterial?ze:Ee).get(W.envMap||Re),Xe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,Nt=!!G.morphAttributes.color;let xt=wn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=M.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=nn!==void 0?nn.length:0,je=ee.get(W),Vs=m.state.lights;if(_e===!0&&(re===!0||b!==v)){const Ot=b===v&&W.id===O;Te.setState(W,b,Ot)}let dt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vs.state.version||je.outputColorSpace!==Ie||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||je.envMap!==Be||W.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Te.numPlanes||je.numIntersection!==Te.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Ge||je.morphTargets!==He||je.morphNormals!==ht||je.morphColors!==Nt||je.toneMapping!==xt||se.isWebGL2===!0&&je.morphTargetsCount!==ct)&&(dt=!0):(dt=!0,je.__version=W.version);let Cn=je.currentProgram;dt===!0&&(Cn=Qi(W,F,X));let ua=!1,Ri=!1,Ws=!1;const Ct=Cn.getUniforms(),Pn=je.uniforms;if($.useProgram(Cn.program)&&(ua=!0,Ri=!0,Ws=!0),W.id!==O&&(O=W.id,Ri=!0),ua||v!==b){Ct.setValue(P,"projectionMatrix",b.projectionMatrix),Ct.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ot=Ct.map.cameraPosition;Ot!==void 0&&Ot.setValue(P,De.setFromMatrixPosition(b.matrixWorld)),se.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ri=!0,Ws=!0)}if(X.isSkinnedMesh){Ct.setOptional(P,X,"bindMatrix"),Ct.setOptional(P,X,"bindMatrixInverse");const Ot=X.skeleton;Ot&&(se.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ct.setValue(P,"boneTexture",Ot.boneTexture,ie),Ct.setValue(P,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xs=G.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0&&se.isWebGL2===!0)&&Oe.update(X,G,Cn),(Ri||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ct.setValue(P,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pn.envMap.value=Be,Pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ri&&(Ct.setValue(P,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&Jl(Pn,Ws),Me&&W.fog===!0&&ae.refreshFogUniforms(Pn,Me),ae.refreshMaterialUniforms(Pn,W,j,q,Se),Ps.upload(P,ca(je),Pn,ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ps.upload(P,ca(je),Pn,ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(P,"center",X.center),Ct.setValue(P,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(P,"normalMatrix",X.normalMatrix),Ct.setValue(P,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ot=W.uniformsGroups;for(let qs=0,$l=Ot.length;qs<$l;qs++)if(se.isWebGL2){const fa=Ot[qs];Fe.update(fa,Cn),Fe.bind(fa,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Jl(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,G){ee.get(b.texture).__webglTexture=F,ee.get(b.depthTexture).__webglTexture=G;const W=ee.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const G=ee.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,G=0){C=b,A=F,R=G;let W=!0,X=null,Me=!1,Re=!1;if(b){const Be=ee.get(b);Be.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),W=!1):Be.__webglFramebuffer===void 0?ie.setupRenderTarget(b):Be.__hasExternalTextures&&ie.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const Ge=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?X=Ge[F][G]:X=Ge[F],Me=!0):se.isWebGL2&&b.samples>0&&ie.useMultisampledRTT(b)===!1?X=ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[G]:X=Ge,T.copy(b.viewport),N.copy(b.scissor),B=b.scissorTest}else T.copy(K).multiplyScalar(j).floor(),N.copy(I).multiplyScalar(j).floor(),B=V;if($.bindFramebuffer(P.FRAMEBUFFER,X)&&se.drawBuffers&&W&&$.drawBuffers(b,X),$.viewport(T),$.scissor(N),$.setScissorTest(B),Me){const Be=ee.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,G)}else if(Re){const Be=ee.get(b.texture),Xe=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,G||0,Xe)}O=-1},this.readRenderTargetPixels=function(b,F,G,W,X,Me,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){$.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Be=b.texture,Xe=Be.format,Ge=Be.type;if(Xe!==Kt&&et.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ge===Wi&&(Z.has("EXT_color_buffer_half_float")||se.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ge!==An&&et.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Tn&&(se.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&G>=0&&G<=b.height-X&&P.readPixels(F,G,W,X,et.convert(Xe),et.convert(Ge),Me)}finally{const Be=C!==null?ee.get(C).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(b,F,G=0){const W=Math.pow(2,-G),X=Math.floor(F.image.width*W),Me=Math.floor(F.image.height*W);ie.setTexture2D(F,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,b.x,b.y,X,Me),$.unbindTexture()},this.copyTextureToTexture=function(b,F,G,W=0){const X=F.image.width,Me=F.image.height,Re=et.convert(G.format),Ie=et.convert(G.type);ie.setTexture2D(G,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,b.x,b.y,X,Me,Re,Ie,F.image.data):F.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Re,F.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,W,b.x,b.y,Re,Ie,F.image),W===0&&G.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(b,F,G,W,X=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,Ie=b.max.z-b.min.z+1,Be=et.convert(W.format),Xe=et.convert(W.type);let Ge;if(W.isData3DTexture)ie.setTexture3D(W,0),Ge=P.TEXTURE_3D;else if(W.isDataArrayTexture)ie.setTexture2DArray(W,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);const He=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nt=P.getParameter(P.UNPACK_SKIP_PIXELS),xt=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES),ct=G.isCompressedTexture?G.mipmaps[0]:G.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,b.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,b.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?P.texSubImage3D(Ge,X,F.x,F.y,F.z,Me,Re,Ie,Be,Xe,ct.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,X,F.x,F.y,F.z,Me,Re,Ie,Be,ct.data)):P.texSubImage3D(Ge,X,F.x,F.y,F.z,Me,Re,Ie,Be,Xe,ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(P.UNPACK_SKIP_ROWS,xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),X===0&&W.generateMipmaps&&P.generateMipmap(Ge),$.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,$.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jr?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===zs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Hn:cl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?Mt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class im extends $r{}im.prototype.isWebGL1Renderer=!0;class yn{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new yn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rl extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class sm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new D;class Fs{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qr extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hi;const Ui=new D,ui=new D,fi=new D,di=new ue,Ii=new ue,Cl=new ut,ys=new D,Ni=new D,Es=new D,Uo=new ue,Tr=new ue,Io=new ue;class Pl extends yt{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",hi===void 0){hi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sm(t,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new Fs(i,3,0,!1)),hi.setAttribute("uv",new Fs(i,2,3,!1))}this.geometry=hi,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ui.setFromMatrixScale(this.matrixWorld),Cl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ui.multiplyScalar(-fi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ts(ys.set(-.5,-.5,0),fi,a,ui,s,r),Ts(Ni.set(.5,-.5,0),fi,a,ui,s,r),Ts(Es.set(.5,.5,0),fi,a,ui,s,r),Uo.set(0,0),Tr.set(1,0),Io.set(1,1);let o=e.ray.intersectTriangle(ys,Ni,Es,!1,Ui);if(o===null&&(Ts(Ni.set(-.5,.5,0),fi,a,ui,s,r),Tr.set(0,1),o=e.ray.intersectTriangle(ys,Es,Ni,!1,Ui),o===null))return;const c=e.ray.origin.distanceTo(Ui);c<e.near||c>e.far||t.push({distance:c,point:Ui.clone(),uv:Vt.getInterpolation(Ui,ys,Ni,Es,Uo,Tr,Io,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ts(n,e,t,i,s,r){di.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ii.x=r*di.x-s*di.y,Ii.y=s*di.x+r*di.y):Ii.copy(di),n.copy(e),n.x+=Ii.x,n.y+=Ii.y,n.applyMatrix4(Cl)}class Ll extends It{constructor(e,t,i,s,r,a,o,c,h){super(e,t,i,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,g=(a-u)/d;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ue:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,s=[],r=[],a=[],o=new D,c=new ut;for(let g=0;g<=e;g++){const _=g/e;s[g]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),f<=h&&(h=f,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(wt(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(o,_))}a[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(wt(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(g=-g);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ea extends tn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const i=t||new ue,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,g=h-this.aY;c=d*u-g*f+this.aX,h=d*f+g*u+this.aY}return i.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rm extends ea{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ta(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,f){let d=(a-r)/h-(o-r)/(h+u)+(o-a)/u,g=(o-a)/u-(c-a)/(u+f)+(c-o)/f;d*=u,g*=u,s(a,o,d,g)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const bs=new D,br=new ta,wr=new ta,Ar=new ta;class Dl extends tn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(bs.subVectors(s[0],s[1]).add(s[0]),h=bs);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(bs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bs),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(f),g),x=Math.pow(f.distanceToSquared(d),g),m=Math.pow(d.distanceToSquared(u),g);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),br.initNonuniformCatmullRom(h.x,f.x,d.x,u.x,_,x,m),wr.initNonuniformCatmullRom(h.y,f.y,d.y,u.y,_,x,m),Ar.initNonuniformCatmullRom(h.z,f.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(br.initCatmullRom(h.x,f.x,d.x,u.x,this.tension),wr.initCatmullRom(h.y,f.y,d.y,u.y,this.tension),Ar.initCatmullRom(h.z,f.z,d.z,u.z,this.tension));return i.set(br.calc(c),wr.calc(c),Ar.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function No(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function am(n,e){const t=1-n;return t*t*e}function om(n,e){return 2*(1-n)*n*e}function lm(n,e){return n*n*e}function zi(n,e,t,i){return am(n,e)+om(n,t)+lm(n,i)}function cm(n,e){const t=1-n;return t*t*t*e}function hm(n,e){const t=1-n;return 3*t*t*n*e}function um(n,e){return 3*(1-n)*n*n*e}function fm(n,e){return n*n*n*e}function ki(n,e,t,i,s){return cm(n,e)+hm(n,t)+um(n,i)+fm(n,s)}class Ul extends tn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ki(e,s.x,r.x,a.x,o.x),ki(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dm extends tn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ki(e,s.x,r.x,a.x,o.x),ki(e,s.y,r.y,a.y,o.y),ki(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Il extends tn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends tn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nl extends tn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(zi(e,s.x,r.x,a.x),zi(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mm extends tn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(zi(e,s.x,r.x,a.x),zi(e,s.y,r.y,a.y),zi(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(No(o,c.x,h.x,u.x,f.x),No(o,c.y,h.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:rm,CatmullRomCurve3:Dl,CubicBezierCurve:Ul,CubicBezierCurve3:dm,EllipseCurve:ea,LineCurve:Il,LineCurve3:pm,QuadraticBezierCurve:Nl,QuadraticBezierCurve3:mm,SplineCurve:Ol});class gm extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const u=c[h];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Gr[s.type]().fromJSON(s))}return this}}class Oo extends gm{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Il(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Nl(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Ul(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ol(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){const h=new ea(e,t,i,s,r,a,o,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ne extends At{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],g=[];let _=0;const x=[],m=i/2;let p=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(g,2));function E(){const S=new D,A=new D;let R=0;const C=(t-e)/i;for(let O=0;O<=r;O++){const v=[],T=O/r,N=T*(t-e)+e;for(let B=0;B<=s;B++){const Y=B/s,L=Y*c+o,H=Math.sin(L),q=Math.cos(L);A.x=N*H,A.y=-T*i+m,A.z=N*q,f.push(A.x,A.y,A.z),S.set(H,C,q).normalize(),d.push(S.x,S.y,S.z),g.push(Y,1-T),v.push(_++)}x.push(v)}for(let O=0;O<s;O++)for(let v=0;v<r;v++){const T=x[v][O],N=x[v+1][O],B=x[v+1][O+1],Y=x[v][O+1];u.push(T,N,Y),u.push(N,B,Y),R+=6}h.addGroup(p,R,0),p+=R}function M(S){const A=_,R=new ue,C=new D;let O=0;const v=S===!0?e:t,T=S===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*T,0),d.push(0,T,0),g.push(.5,.5),_++;const N=_;for(let B=0;B<=s;B++){const L=B/s*c+o,H=Math.cos(L),q=Math.sin(L);C.x=v*q,C.y=m*T,C.z=v*H,f.push(C.x,C.y,C.z),d.push(0,T,0),R.x=H*.5+.5,R.y=q*.5*T+.5,g.push(R.x,R.y),_++}for(let B=0;B<s;B++){const Y=A+B,L=N+B;S===!0?u.push(L,L+1,Y):u.push(L+1,L,Y),O+=3}h.addGroup(p,O,S===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ne(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Et extends Ne{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Et(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gs extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),h(i),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new D,S=new D,A=new D;for(let R=0;R<t.length;R+=3)g(t[R+0],M),g(t[R+1],S),g(t[R+2],A),c(M,S,A,E)}function c(E,M,S,A){const R=A+1,C=[];for(let O=0;O<=R;O++){C[O]=[];const v=E.clone().lerp(S,O/R),T=M.clone().lerp(S,O/R),N=R-O;for(let B=0;B<=N;B++)B===0&&O===R?C[O][B]=v:C[O][B]=v.clone().lerp(T,B/N)}for(let O=0;O<R;O++)for(let v=0;v<2*(R-O)-1;v++){const T=Math.floor(v/2);v%2===0?(d(C[O][T+1]),d(C[O+1][T]),d(C[O][T])):(d(C[O][T+1]),d(C[O+1][T+1]),d(C[O+1][T]))}}function h(E){const M=new D;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(E),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function u(){const E=new D;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const S=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;a.push(S,1-A)}_(),f()}function f(){for(let E=0;E<a.length;E+=6){const M=a[E+0],S=a[E+2],A=a[E+4],R=Math.max(M,S,A),C=Math.min(M,S,A);R>.9&&C<.1&&(M<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function g(E,M){const S=E*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function _(){const E=new D,M=new D,S=new D,A=new D,R=new ue,C=new ue,O=new ue;for(let v=0,T=0;v<r.length;v+=9,T+=6){E.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),R.set(a[T+0],a[T+1]),C.set(a[T+2],a[T+3]),O.set(a[T+4],a[T+5]),A.copy(E).add(M).add(S).divideScalar(3);const N=m(A);x(R,T+0,E,N),x(C,T+2,M,N),x(O,T+4,S,N)}}function x(E,M,S,A){A<0&&E.x===1&&(a[M]=E.x-1),S.x===0&&S.z===0&&(a[M]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.vertices,e.indices,e.radius,e.details)}}class na extends Gs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}}class Sn extends Oo{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Oo().fromJSON(s))}return this}}const _m={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Fl(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,f,d,g;if(i&&(r=ym(n,e,r,t)),n.length>80*t){o=h=n[0],c=u=n[1];for(let _=t;_<s;_+=t)f=n[_],d=n[_+1],f<o&&(o=f),d<c&&(c=d),f>h&&(h=f),d>u&&(u=d);g=Math.max(h-o,u-c),g=g!==0?32767/g:0}return qi(r,a,t,o,c,g,0),a}};function Fl(n,e,t,i,s){let r,a;if(s===Um(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Fo(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Fo(r,n[r],n[r+1],a);return a&&Hs(a,a.next)&&(ji(a),a=a.next),a}function Xn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Hs(t,t.next)||lt(t.prev,t,t.next)===0)){if(ji(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qi(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Am(n,i,s,r);let o=n,c,h;for(;n.prev!==n.next;){if(c=n.prev,h=n.next,r?vm(n,i,s,r):xm(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(h.i/t|0),ji(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=Mm(Xn(n),e,t),qi(n,e,t,i,s,r,2)):a===2&&Sm(n,e,t,i,s,r):qi(Xn(n),e,t,i,s,r,1);break}}}function xm(n){const e=n.prev,t=n,i=n.next;if(lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,h=i.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<h?o:h:c<h?c:h,d=s>r?s>a?s:a:r>a?r:a,g=o>c?o>h?o:h:c>h?c:h;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=g&&_i(s,o,r,c,a,h,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vm(n,e,t,i){const s=n.prev,r=n,a=n.next;if(lt(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,u=s.y,f=r.y,d=a.y,g=o<c?o<h?o:h:c<h?c:h,_=u<f?u<d?u:d:f<d?f:d,x=o>c?o>h?o:h:c>h?c:h,m=u>f?u>d?u:d:f>d?f:d,p=Hr(g,_,e,t,i),E=Hr(x,m,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=E;){if(M.x>=g&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&_i(o,u,c,f,h,d,M.x,M.y)&&lt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=g&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&_i(o,u,c,f,h,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=g&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&_i(o,u,c,f,h,d,M.x,M.y)&&lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=E;){if(S.x>=g&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&_i(o,u,c,f,h,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Mm(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Hs(s,r)&&Bl(s,i,i.next,r)&&Yi(s,r)&&Yi(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ji(i),ji(i.next),i=n=r),i=i.next}while(i!==n);return Xn(i)}function Sm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pm(a,o)){let c=zl(a,o);a=Xn(a,a.next),c=Xn(c,c.next),qi(a,e,t,i,s,r,0),qi(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ym(n,e,t,i){const s=[];let r,a,o,c,h;for(r=0,a=e.length;r<a;r++)o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,h=Fl(n,o,c,i,!1),h===h.next&&(h.steiner=!0),s.push(Cm(h));for(s.sort(Em),r=0;r<s.length;r++)t=Tm(s[r],t);return t}function Em(n,e){return n.x-e.x}function Tm(n,e){const t=bm(n,e);if(!t)return e;const i=zl(t,n);return Xn(i,i.next),Xn(t,t.next)}function bm(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,h=s.y;let u=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&_i(a<h?r:i,a,c,h,a<h?i:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Yi(t,n)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&wm(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function wm(n,e){return lt(n.prev,n,e.prev)<0&&lt(e.next,n,n.next)<0}function Am(n,e,t,i){let s=n;do s.z===0&&(s.z=Hr(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rm(s)}function Rm(n){let e,t,i,s,r,a,o,c,h=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<h&&(o++,i=i.nextZ,!!i);e++);for(c=h;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,h*=2}while(a>1);return n}function Hr(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Cm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _i(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Pm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Lm(n,e)&&(Yi(n,e)&&Yi(e,n)&&Dm(n,e)&&(lt(n.prev,n,e.prev)||lt(n,e.prev,e))||Hs(n,e)&&lt(n.prev,n,n.next)>0&&lt(e.prev,e,e.next)>0)}function lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Hs(n,e){return n.x===e.x&&n.y===e.y}function Bl(n,e,t,i){const s=As(lt(n,e,t)),r=As(lt(n,e,i)),a=As(lt(t,i,n)),o=As(lt(t,i,e));return!!(s!==r&&a!==o||s===0&&ws(n,t,e)||r===0&&ws(n,i,e)||a===0&&ws(t,n,i)||o===0&&ws(t,e,i))}function ws(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function As(n){return n>0?1:n<0?-1:0}function Lm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Bl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yi(n,e){return lt(n.prev,n,n.next)<0?lt(n,e,n.next)>=0&&lt(n,n.prev,e)>=0:lt(n,e,n.prev)<0||lt(n,n.next,e)<0}function Dm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zl(n,e){const t=new Vr(n.i,n.x,n.y),i=new Vr(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Fo(n,e,t,i){const s=new Vr(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ji(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vr(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Um(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Gi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Bo(e),zo(i,e);let a=e.length;t.forEach(Bo);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,zo(i,t[c]);const o=_m.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Bo(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zo(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class hn extends At{constructor(e=new Sn([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];a(h)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:g-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Im;let M,S=!1,A,R,C,O;p&&(M=p.getSpacedPoints(u),S=!0,d=!1,A=p.computeFrenetFrames(u,!1),R=new D,C=new D,O=new D),d||(m=0,g=0,_=0,x=0);const v=o.extractPoints(h);let T=v.shape;const N=v.holes;if(!Gi.isClockWise(T)){T=T.reverse();for(let P=0,fe=N.length;P<fe;P++){const Z=N[P];Gi.isClockWise(Z)&&(N[P]=Z.reverse())}}const Y=Gi.triangulateShape(T,N),L=T;for(let P=0,fe=N.length;P<fe;P++){const Z=N[P];T=T.concat(Z)}function H(P,fe,Z){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(fe,Z)}const q=T.length,j=Y.length;function te(P,fe,Z){let se,$,we;const ee=P.x-fe.x,ie=P.y-fe.y,Ee=Z.x-P.x,ze=Z.y-P.y,ot=ee*ee+ie*ie,w=ee*ze-ie*Ee;if(Math.abs(w)>Number.EPSILON){const y=Math.sqrt(ot),k=Math.sqrt(Ee*Ee+ze*ze),ae=fe.x-ie/y,ne=fe.y+ee/y,oe=Z.x-ze/k,Te=Z.y+Ee/k,he=((oe-ae)*ze-(Te-ne)*Ee)/(ee*ze-ie*Ee);se=ae+ee*he-P.x,$=ne+ie*he-P.y;const xe=se*se+$*$;if(xe<=2)return new ue(se,$);we=Math.sqrt(xe/2)}else{let y=!1;ee>Number.EPSILON?Ee>Number.EPSILON&&(y=!0):ee<-Number.EPSILON?Ee<-Number.EPSILON&&(y=!0):Math.sign(ie)===Math.sign(ze)&&(y=!0),y?(se=-ie,$=ee,we=Math.sqrt(ot)):(se=ee,$=ie,we=Math.sqrt(ot/2))}return new ue(se/we,$/we)}const Q=[];for(let P=0,fe=L.length,Z=fe-1,se=P+1;P<fe;P++,Z++,se++)Z===fe&&(Z=0),se===fe&&(se=0),Q[P]=te(L[P],L[Z],L[se]);const K=[];let I,V=Q.concat();for(let P=0,fe=N.length;P<fe;P++){const Z=N[P];I=[];for(let se=0,$=Z.length,we=$-1,ee=se+1;se<$;se++,we++,ee++)we===$&&(we=0),ee===$&&(ee=0),I[se]=te(Z[se],Z[we],Z[ee]);K.push(I),V=V.concat(I)}for(let P=0;P<m;P++){const fe=P/m,Z=g*Math.cos(fe*Math.PI/2),se=_*Math.sin(fe*Math.PI/2)+x;for(let $=0,we=L.length;$<we;$++){const ee=H(L[$],Q[$],se);Ae(ee.x,ee.y,-Z)}for(let $=0,we=N.length;$<we;$++){const ee=N[$];I=K[$];for(let ie=0,Ee=ee.length;ie<Ee;ie++){const ze=H(ee[ie],I[ie],se);Ae(ze.x,ze.y,-Z)}}}const ge=_+x;for(let P=0;P<q;P++){const fe=d?H(T[P],V[P],ge):T[P];S?(C.copy(A.normals[0]).multiplyScalar(fe.x),R.copy(A.binormals[0]).multiplyScalar(fe.y),O.copy(M[0]).add(C).add(R),Ae(O.x,O.y,O.z)):Ae(fe.x,fe.y,0)}for(let P=1;P<=u;P++)for(let fe=0;fe<q;fe++){const Z=d?H(T[fe],V[fe],ge):T[fe];S?(C.copy(A.normals[P]).multiplyScalar(Z.x),R.copy(A.binormals[P]).multiplyScalar(Z.y),O.copy(M[P]).add(C).add(R),Ae(O.x,O.y,O.z)):Ae(Z.x,Z.y,f/u*P)}for(let P=m-1;P>=0;P--){const fe=P/m,Z=g*Math.cos(fe*Math.PI/2),se=_*Math.sin(fe*Math.PI/2)+x;for(let $=0,we=L.length;$<we;$++){const ee=H(L[$],Q[$],se);Ae(ee.x,ee.y,f+Z)}for(let $=0,we=N.length;$<we;$++){const ee=N[$];I=K[$];for(let ie=0,Ee=ee.length;ie<Ee;ie++){const ze=H(ee[ie],I[ie],se);S?Ae(ze.x,ze.y+M[u-1].y,M[u-1].x+Z):Ae(ze.x,ze.y,f+Z)}}}_e(),re();function _e(){const P=s.length/3;if(d){let fe=0,Z=q*fe;for(let se=0;se<j;se++){const $=Y[se];Ce($[2]+Z,$[1]+Z,$[0]+Z)}fe=u+m*2,Z=q*fe;for(let se=0;se<j;se++){const $=Y[se];Ce($[0]+Z,$[1]+Z,$[2]+Z)}}else{for(let fe=0;fe<j;fe++){const Z=Y[fe];Ce(Z[2],Z[1],Z[0])}for(let fe=0;fe<j;fe++){const Z=Y[fe];Ce(Z[0]+q*u,Z[1]+q*u,Z[2]+q*u)}}i.addGroup(P,s.length/3-P,0)}function re(){const P=s.length/3;let fe=0;Se(L,fe),fe+=L.length;for(let Z=0,se=N.length;Z<se;Z++){const $=N[Z];Se($,fe),fe+=$.length}i.addGroup(P,s.length/3-P,1)}function Se(P,fe){let Z=P.length;for(;--Z>=0;){const se=Z;let $=Z-1;$<0&&($=P.length-1);for(let we=0,ee=u+m*2;we<ee;we++){const ie=q*we,Ee=q*(we+1),ze=fe+se+ie,ot=fe+$+ie,w=fe+$+Ee,y=fe+se+Ee;De(ze,ot,w,y)}}}function Ae(P,fe,Z){c.push(P),c.push(fe),c.push(Z)}function Ce(P,fe,Z){Ze(P),Ze(fe),Ze(Z);const se=s.length/3,$=E.generateTopUV(i,s,se-3,se-2,se-1);Pe($[0]),Pe($[1]),Pe($[2])}function De(P,fe,Z,se){Ze(P),Ze(fe),Ze(se),Ze(fe),Ze(Z),Ze(se);const $=s.length/3,we=E.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);Pe(we[0]),Pe(we[1]),Pe(we[3]),Pe(we[1]),Pe(we[2]),Pe(we[3])}function Ze(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function Pe(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gr[s.type]().fromJSON(s)),new hn(i,e.options)}}const Im={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],h=e[s*3],u=e[s*3+1];return[new ue(r,a),new ue(o,c),new ue(h,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[s*3],g=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new ue(a,1-c),new ue(h,1-f),new ue(d,1-_),new ue(x,1-p)]:[new ue(o,1-c),new ue(u,1-f),new ue(g,1-_),new ue(m,1-p)]}};function Nm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ia extends Gs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ia(e.radius,e.detail)}}class Ke extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const u=[],f=new D,d=new D,g=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const E=[],M=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const R=A/t;f.x=-e*Math.cos(s+R*r)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(s+R*r)*Math.sin(a+M*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(R+S,1-M),E.push(h++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const M=u[p][E+1],S=u[p][E],A=u[p+1][E],R=u[p+1][E+1];(p!==0||a>0)&&g.push(M,S,R),(p!==i-1||c<Math.PI)&&g.push(S,A,R)}this.setIndex(g),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qn extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],h=[],u=new D,f=new D,d=new D;for(let g=0;g<=i;g++)for(let _=0;_<=s;_++){const x=_/s*r,m=g/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),h.push(_/s),h.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=s;_++){const x=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,p=(s+1)*(g-1)+_,E=(s+1)*g+_;a.push(x,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class be extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sa extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class kl extends sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rr=new ut,ko=new D,Go=new D;class Om{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Go),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fm extends Om{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gl extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hl extends sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const Zi=[{name:"Radical Reboot",color:16729088,accent:16746496,maxSpd:85,accel:1.2,turn:.045,turbo:3,nozzles:2,finScale:.7,hull:"standard"},{name:"Vortex",color:16711782,accent:16737962,maxSpd:92,accel:1,turn:.038,turbo:2,nozzles:1,finScale:.5,hull:"torpedo"},{name:"Blaze",color:16737792,accent:16755200,maxSpd:90,accel:1.1,turn:.04,turbo:3,nozzles:2,finScale:.8,hull:"delta"},{name:"Razor",color:8913151,accent:12281599,maxSpd:88,accel:1,turn:.042,turbo:2,nozzles:1,finScale:.6,hull:"arrow"},{name:"Tempest",color:17663,accent:4491519,maxSpd:95,accel:.9,turn:.035,turbo:2,nozzles:1,finScale:.4,hull:"catamaran"},{name:"Sky Shark",color:2263295,accent:6737151,maxSpd:80,accel:1.2,turn:.06,turbo:3,nozzles:3,finScale:1,hull:"stealth"},{name:"Stingray",color:52428,accent:6750207,maxSpd:82,accel:1.1,turn:.065,turbo:3,nozzles:2,finScale:1.2,hull:"ufo"},{name:"Piranha",color:65382,accent:6750122,maxSpd:78,accel:1.3,turn:.07,turbo:4,nozzles:4,finScale:.9,hull:"hover"},{name:"Barracuda",color:8978176,accent:12320614,maxSpd:84,accel:1,turn:.058,turbo:3,nozzles:4,finScale:1.1,hull:"torpedo"},{name:"Marlin",color:65484,accent:6750173,maxSpd:80,accel:1.2,turn:.062,turbo:3,nozzles:2,finScale:1.4,hull:"skiff"},{name:"Mako",color:2293606,accent:6750122,maxSpd:84,accel:1.6,turn:.045,turbo:3,nozzles:3,finScale:.8,hull:"standard"},{name:"Dolphin",color:6728447,accent:11193599,maxSpd:82,accel:1.8,turn:.042,turbo:3,nozzles:3,finScale:.6,hull:"ufo"},{name:"Orca",color:2236962,accent:6710886,maxSpd:86,accel:1.5,turn:.048,turbo:2,nozzles:4,finScale:1,hull:"stealth"},{name:"Hammerhead",color:16763904,accent:16737792,maxSpd:80,accel:1.7,turn:.05,turbo:4,nozzles:4,finScale:.7,hull:"arrow"},{name:"Leviathan",color:13378303,accent:16738047,maxSpd:88,accel:1.9,turn:.04,turbo:2,nozzles:3,finScale:1.2,hull:"catamaran"}],ra=24,it=900,Ho=2500,l={scene:null,cam:null,ren:null,hudCtx:null,hudEl:null,audio:null,state:"MENU",raceTime:0,lastTime:0,keys:{},prev:{},pBoat:null,aiList:[],trackPts:[],trackSeg:[],boostObjs:[],waterMesh:null,waterGeo:null,cliffMeshes:[],boatIdx:0,countVal:4,countTimer:.001,countDone:!1,camShake:0,cloudMeshes:[],boatThumbnails:{},pov:"third",testingMode:!1,freeCam:!1,freeCamEuler:null,achievements:{}};function pe(n){return l.keys[n]&&!l.prev[n]}function Bm(){const e=[[0,2,120],[120,4,60],[160,6,0],[120,8,-60],[0,10,-120],[-120,8,-60],[-160,6,0],[-120,4,60]].map(f=>new D(f[0]*2.5,f[1]*1.5,f[2]*2.5)),t=new Dl(e,!0,"catmullrom",.5),i=[],s=[],r=[],a=ra*.5,o=t.computeFrenetFrames(it,!0);l.trackPts=[],l.trackSeg=[];for(let f=0;f<=it;f++){const d=f/it,g=t.getPoint(d),_=o.tangents[f%it].clone().normalize(),x=new D(0,1,0),m=new D().crossVectors(x,_).normalize(),p=new D().crossVectors(_,m).normalize();l.trackPts.push({pos:g,tan:_,right:m,up:p,t:d});const E=g.clone().add(m.clone().multiplyScalar(-a)),M=g.clone().add(m.clone().multiplyScalar(a)),S=f*2;i.push(E.x,E.y,E.z,M.x,M.y,M.z),s.push(0,d*80,1,d*80),f<it&&r.push(S,S+2,S+1,S+1,S+2,S+3),l.trackSeg.push({pos:g,right:m,up:p,tan:_,halfW:a,t:d,boost:f>20&&f%80===0,obstacle:!1,ramp:!1,checkpoint:f>0&&f%Math.floor(it/3)===0?Math.floor(f/(it/3)):-1,finish:f===0})}const c=new At;c.setAttribute("position",new st(i,3)),c.setAttribute("uv",new st(s,2)),c.setAttribute("normal",new st(new Float32Array(i.length),3)),c.setIndex(r),c.computeVertexNormals();const h=new be({color:1730184,roughness:.35,metalness:.1,side:Zt}),u=new z(c,h);u.receiveShadow=!0,l.scene.add(u),l.racingMeshes=[u],zm(a),km()}function zm(n){const t=[],i=[];for(let a=-1;a<=1;a+=2)for(let o=0;o<=it;o++){const c=l.trackPts[o],h=c.pos.clone().add(c.right.clone().multiplyScalar(n*a)),u=h.clone().add(new D(0,2.5,0)),f=t.length/3;t.push(h.x,h.y,h.z,u.x,u.y,u.z),o<it&&i.push(f,f+2,f+1,f+1,f+2,f+3)}const s=new At;s.setAttribute("position",new st(t,3)),s.setIndex(i),s.computeVertexNormals();const r=[13382451,14540253];for(let a=0;a<2;a++){const o=Math.floor(i.length/2),c=a===0?i.slice(0,o):i.slice(o),h=t.slice(0),u=new At;u.setAttribute("position",new st(h,3)),u.setIndex(c),u.computeVertexNormals();const f=new z(u,new be({color:r[a],roughness:.7,metalness:.3,side:Zt}));f.receiveShadow=!0,l.scene.add(f),l.racingMeshes.push(f)}}function km(){l.boostObjs=[];for(let n=0;n<it;n++){if(!l.trackSeg[n].boost)continue;const e=l.trackPts[n],t=n%3===0?1:-1,i=e.pos.clone().add(e.right.clone().multiplyScalar(t*l.trackSeg[n].halfW*.35));i.y+=4;const s=n%400===0&&n>0,r=new ia(s?1.5:1.2),a=new be({color:s?16720384:16768256,emissive:s?16711680:16746496,emissiveIntensity:.8}),o=new z(r,a);o.position.copy(i),o.userData={idx:n,collected:!1,side:t,baseY:i.y,isRed:s},l.scene.add(o),l.boostObjs.push(o),l.racingMeshes.push(o)}}function aa(n,e,t,i,s){t=t||3,i=i||1,s=s||"standard";const r={1:[0],2:[-.3,.3],3:[-.4,0,.4],4:[-.5,-.17,.17,.5]},a=r[t]||r[3],o=new mt;o.rotation.order="YXZ";const c=new mt;c.position.x=-2.6;const h=new be({color:n,roughness:.25,metalness:.7}),u=new be({color:e,roughness:.3,metalness:.6}),f=new be({color:1710618,roughness:.5,metalness:.8}),d=new be({color:8965375,roughness:.05,metalness:.1,transparent:!0,opacity:.5});switch(s){case"torpedo":{const v=new Ne(.55,.25,5.5,10);v.rotateZ(Math.PI/2);const T=new z(v,h);T.castShadow=!0,c.add(T);const N=new qe(3,.15,.08),B=new z(N,u);B.position.set(0,.5,0),c.add(B);break}case"delta":{const v=new Sn;v.moveTo(-2,0),v.quadraticCurveTo(0,-.4,2.8,-2),v.lineTo(2.8,2),v.quadraticCurveTo(0,.4,-2,0);const T=new hn(v,{depth:.35,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:3});T.translate(0,0,-.175);const N=new z(T,h);N.castShadow=!0,c.add(N);break}case"ufo":{const v=new Ke(2,20,10);v.scale(1,.28,1);const T=new z(v,h);T.castShadow=!0,c.add(T);const N=new qn(2,.08,8,24);N.rotateX(Math.PI/2);const B=new z(N,u);B.position.y=.05,c.add(B);const Y=new Ke(.7,12,8,0,Math.PI*2,0,Math.PI*.5),L=new z(Y,d);L.position.y=.15,c.add(L);break}case"catamaran":{[-.9,.9].forEach(N=>{const B=new Sn;B.moveTo(-1.8,-.25),B.lineTo(1.2,-.35),B.quadraticCurveTo(2,-.15,2.2,0),B.quadraticCurveTo(2,.15,1.2,.35),B.lineTo(-1.8,.25),B.lineTo(-1.8,-.25);const Y=new hn(B,{depth:.35,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03});Y.translate(0,0,-.175);const L=new z(Y,h);L.position.z=N,L.castShadow=!0,c.add(L)});const v=new qe(3.5,.08,2.4),T=new z(v,f);c.add(T);break}case"stealth":{const v=new Sn;v.moveTo(-2.2,-.4),v.lineTo(1.5,-.75),v.lineTo(2.8,0),v.lineTo(1.5,.75),v.lineTo(-2.2,.4),v.lineTo(-2.2,-.4);const T=new hn(v,{depth:.22,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2});T.translate(0,0,-.11);const N=new z(T,h);N.castShadow=!0,c.add(N);const B=new qe(2,.06,1.2),Y=new z(B,u);Y.position.set(0,.22,0),c.add(Y);break}case"arrow":{const v=new Sn;v.moveTo(-1.8,0),v.lineTo(1.5,-.3),v.lineTo(3,-1.6),v.lineTo(2.8,0),v.lineTo(3,1.6),v.lineTo(1.5,.3),v.lineTo(-1.8,0);const T=new hn(v,{depth:.4,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3});T.translate(0,0,-.2);const N=new z(T,h);N.castShadow=!0,c.add(N);break}case"hover":{const v=new qe(4,.5,2.8),T=new z(v,h);T.castShadow=!0,c.add(T);const N=new qe(4.2,.08,3),B=new z(N,f);B.position.y=-.28,c.add(B);const Y=new Ke(.8,10,6,0,Math.PI*2,0,Math.PI*.5),L=new z(Y,d);L.position.set(.3,.25,0),L.scale.set(1,.5,1),c.add(L);break}case"skiff":{const v=new Sn;v.moveTo(-2,-.85),v.lineTo(1.2,-.95),v.lineTo(2.2,-.5),v.lineTo(2.2,.5),v.lineTo(1.2,.95),v.lineTo(-2,.85),v.lineTo(-2,-.85);const T=new hn(v,{depth:.55,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:3});T.translate(0,0,-.275);const N=new z(T,h);N.castShadow=!0,c.add(N);const B=new qe(3.8,.22,.1);[-.9,.9].forEach(Y=>{const L=new z(B,u);L.position.set(0,.45,Y),c.add(L)});break}default:{const v=new Sn;v.moveTo(-2,-.7),v.lineTo(1.2,-.85),v.quadraticCurveTo(2.2,-.6,2.6,0),v.quadraticCurveTo(2.2,.6,1.2,.85),v.lineTo(-2,.7),v.lineTo(-2,-.7);const T=new hn(v,{depth:.5,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:3});T.translate(0,0,-.25);const N=new z(T,h);N.castShadow=!0,c.add(N)}}if(s!=="ufo"){const v=new qe(3.5,.08,1.85),T=new z(v,u);T.position.set(.2,.32,0),c.add(T);const N=new qe(2.5,.08,1.4),B=new z(N,f);B.position.set(-.3,.35,0),c.add(B);const Y=new qe(1,.35,.9),L=new z(Y,d);L.position.set(.3,.55,0),c.add(L);const H=new qe(.5,.35,1.3),q=new z(H,f);if(q.position.set(-1.6,.25,0),c.add(q),s!=="catamaran"){const j=new Et(.7,1.2,4),te=new z(j,h.clone());te.rotation.z=-Math.PI/2,te.position.x=2.8,te.castShadow=!0,c.add(te)}}const g=1.5/t,_=new Ne(.14*g,.18*g,.5,8);a.forEach(v=>{const T=new z(_,f);T.rotation.x=Math.PI/2,T.position.set(s==="ufo"?-2.2:-2.15,s==="ufo"?0:.15,v),c.add(T)});const x=new qe(.7,1*i,.08),m=new z(x,u);m.position.set(-1.5,.55+i*.25,0),c.add(m);const p=new mt;p.userData.isJet=!0,p.visible=!1;const E=new Ne(.35*g,.45*g,.8,8);E.rotateX(Math.PI/2);const M=new z(E,f.clone());M.position.set(-2.3,.15,0),p.add(M);const S=new Ne(.25*g,.3*g,.9,8);S.rotateX(Math.PI/2);const A=new be({color:16729088,roughness:.3,metalness:.4,emissive:16729088,emissiveIntensity:0}),R=new z(S,A);R.position.set(-2.3,.15,0),R.userData.isNozzleInner=!0,p.add(R);const C=new Ne(.3*g,.35*g,1.2,8);C.rotateX(Math.PI/2),a.forEach(v=>{const T=new z(C.clone(),new be({color:4473924,roughness:.3,metalness:.8}));T.position.set(-2,.15,v),p.add(T)}),c.add(p);const O=new mt;return O.userData.isFlameGroup=!0,a.forEach(v=>{const T=document.createElement("canvas");T.width=64,T.height=64;const N=T.getContext("2d"),B=N.createRadialGradient(32,32,0,32,32,32);B.addColorStop(0,"rgba(255,200,50,1)"),B.addColorStop(.3,"rgba(255,120,0,0.8)"),B.addColorStop(.7,"rgba(255,60,0,0.3)"),B.addColorStop(1,"rgba(255,0,0,0)"),N.fillStyle=B,N.fillRect(0,0,64,64);const Y=new Ll(T),L=new Pl(new Qr({map:Y,transparent:!0,opacity:0,depthWrite:!1}));L.position.set(-3.2,.15,v),L.scale.set(0,0,0),L.userData.isFlame=!0,O.add(L)}),c.add(O),o.add(c),o}function Gm(){const n=new mt;n.rotation.order="YXZ";const e=new mt;e.position.x=-2.6;const t=new be({color:13421772,roughness:.3,metalness:.4}),i=new be({color:8947848,roughness:.7,metalness:.1}),s=new be({color:15658734,roughness:.4,metalness:.2}),r=new be({color:2236962,roughness:.5,metalness:.7}),a=new be({color:8965375,roughness:.05,metalness:.1,transparent:!0,opacity:.6}),o=new Sn;o.moveTo(-2.8,-.9),o.lineTo(1.5,-1.05),o.quadraticCurveTo(2.8,-.7,3.2,0),o.quadraticCurveTo(2.8,.7,1.5,1.05),o.lineTo(-2.8,.9),o.lineTo(-2.8,-.9);const c=new hn(o,{depth:.9,bevelEnabled:!0,bevelThickness:.1,bevelSize:.08,bevelSegments:3});c.translate(0,0,-.45);const h=new z(c,t);h.castShadow=!0,e.add(h);const u=new qe(6,.12,2.8),f=new z(u,i);f.position.set(0,.42,0),f.receiveShadow=!0,e.add(f);const d=new qe(1.8,1.3,2),g=new z(d,s);g.position.set(-1.3,1.1,0),g.castShadow=!0,e.add(g);const _=new qe(2.2,.1,2.4),x=new z(_,r);x.position.set(-1.3,1.8,0),e.add(x);const m=new qe(.06,.6,1.6),p=new z(m,a);p.position.set(-.35,1.2,0),e.add(p);const E=new qe(1.2,.5,.06);[-1.05,1.05].forEach(re=>{const Se=new z(E,a);Se.position.set(-1.3,1.2,re),e.add(Se)});const M=new qn(.22,.035,8,16),S=new z(M,r);S.position.set(-.8,1.3,0),S.rotation.y=Math.PI/2,e.add(S);const A=new qe(.7,.45,.7),R=new z(A,r);R.position.set(-.5,.7,0),e.add(R);const C=new qe(.25,1,.6),O=new z(C,r);O.position.set(-3.1,.3,0),e.add(O);const v=new Ne(.2,.28,.7,8);v.rotateX(Math.PI/2);const T=new z(v,r);T.position.set(-3.3,-.1,0),e.add(T);const N=new Ne(.2,.2,.06,6);N.rotateX(Math.PI/2);const B=new z(N,r);B.position.set(-3.5,-.1,0),e.add(B);const Y=new Ne(.035,.035,.45,6);[[2.2,.7,-.9],[2.2,.7,.9],[1.6,.7,-.9],[1.6,.7,.9],[1,.7,-.9],[1,.7,.9]].forEach(re=>{const Se=new z(Y,r);Se.position.set(re[0],re[1],re[2]),e.add(Se)});const L=new Ne(.02,.012,3.5,4),H=new be({color:8939076,roughness:.7});[[2.2,-.9,.3],[2.2,.9,-.3],[1.6,-.9,.25],[1.6,.9,-.25]].forEach((re,Se)=>{const Ae=new z(L.clone(),H);Ae.position.set(re[0]+1.2,2.3,re[1]),Ae.rotation.z=.35,Ae.rotation.x=re[2],e.add(Ae)});const q=new qe(.9,.55,.9),j=new be({color:3368618,roughness:.3,metalness:.4,transparent:!0,opacity:.6}),te=new z(q,j);te.position.set(2,.72,0),e.add(te);const Q=new qe(.7,.45,.55),K=new z(Q,new be({color:2245802,roughness:.5}));K.position.set(2,.68,-1),e.add(K);const I=new Ne(.03,.03,.8,4);for(let re=-2.2;re<=2.8;re+=.7)[re,.9,-1.4].concat([re,.9,1.4]).forEach((Se,Ae)=>{const Ce=Ae===0?-1.4:1.4,De=new z(I,r);De.position.set(re,.9,Ce),e.add(De)});const V=new Ne(.02,.02,6,6);V.rotateZ(Math.PI/2),[-1.4,1.4].forEach(re=>{const Se=new z(V.clone(),r);Se.position.set(0,1.3,re),e.add(Se)});const ge=new qe(.04,.01,2.8),_e=new be({color:5592405,roughness:.8});for(let re=-2.5;re<=2.5;re+=.25){const Se=new z(ge,_e);Se.position.set(re,.49,0),e.add(Se)}return n.add(e),n}function Oi(n){const e=mi(n.pos.x,n.pos.z);n.pos.y=e+.5;const t=.8,i=.8,s=mi(n.pos.x-t,n.pos.z),r=mi(n.pos.x+t,n.pos.z),a=mi(n.pos.x,n.pos.z-i),o=mi(n.pos.x,n.pos.z+i),c=Math.atan2(o-a,i*2),h=Math.atan2(r-s,t*2),u=Math.abs(n.speed)/Math.max(1,n.maxSpd),f=Math.sin(performance.now()*.004)*.2*(.1+.9*u);n.mesh.position.copy(n.pos),n.mesh.position.y+=f,n.mesh.rotation.y=n.heading,n.mesh.rotation.x=c*.6,n.mesh.rotation.z=h*.6+Math.sin(performance.now()*.003)*.04*u}function Vl(n,e){if(n.finished)return null;n.colTimer>0&&(n.colTimer-=e),n.turboActive&&(n.turboCharges-=e,n.turboCharges<=0&&(n.turboCharges=0,n.turboActive=!1));const t=n.maxSpd;if(n.throttle>0){const f=n.throttle*t,d=n.speed<f?n.accel:n.accel*1.5;n.speed+=(f-n.speed)*(1-Math.exp(-d*e))}else if(n.throttle<0){const f=n.throttle*t*.4;n.speed+=(f-n.speed)*(1-Math.exp(-n.accel*.8*e))}else n.speed*=Math.pow(.95,e*60);n.colTimer>0&&(n.speed*=.3),n.speed>t?n.speed+=(t-n.speed)*(1-Math.exp(-3*e)):n.speed=Math.max(-n.maxSpd*.4,Math.min(t,n.speed));const i=n.speed/Math.max(1,n.maxSpd),s=Math.abs(i),r=.1+.1*Math.pow(s,.7);n.heading-=n.steer*n.turnSpeed*r*e*60*Math.sign(i||1);const a=new D(Math.cos(n.heading),0,-Math.sin(n.heading)),o=n.speed*e;n.pos.x+=a.x*o,n.pos.z+=a.z*o;const c=Wm(n.pos);if(c){const f=n.pos.distanceTo(c.pos),d=ra*.55;if(f>d){const g=c.pos.clone().sub(n.pos).normalize();n.pos.add(g.multiplyScalar(f-d)),n.speed*=.95}}const h=c?c.idx:0,u=l.trackSeg[h];if(n.airborne?(n.airVY-=25*e,u&&u.pos.y+2<0&&(n.airborne=!1,n.airVY=0,l.camShake=Math.max(l.camShake,.3))):u&&u.ramp&&n.speed>30&&(n.airborne=!0,n.airVY=14+n.speed*.04,l.camShake=Math.max(l.camShake,.2)),c){if(n._trackT=c.t,n._segIdx=h,u&&u.finish&&n.cp>=2&&Math.abs(n.speed)>2&&!n.airborne)return n.lap++,n.cp=0,n.lap>=3?(n.finished=!0,n.finTime=l.raceTime,"finish"):"lap";if(u&&u.checkpoint>=0&&n.cp===u.checkpoint&&n.cp++,u&&u.obstacle&&n.colTimer<=0&&c.dist<3&&n.speed>20)return n.colTimer=.5,l.camShake=.6,"crash";if(u&&u.boost){const f=l.boostObjs.find(d=>!d.userData.collected&&d.userData.idx===h);if(f&&c.dist<u.halfW*.65)return f.userData.collected=!0,f.visible=!1,n.turboCharges+=f.userData.isRed?10:3,"pickup"}}return null}function Rs(n){const e=n.pos.clone(),t=mi(e.x,e.z),i=n._trackT!==void 0?Xm(n._trackT):0;n.airborne?e.y=i+Math.max(0,n.airVY*.15)+2:e.y=Math.max(t+.3,i+.3);const r=Math.abs(n.speed)/Math.max(1,n.maxSpd),a=Math.max(0,1-r*.85),o=Math.sin(performance.now()*.005)*.3*a,c=Math.sin(performance.now()*.003+n.pos.x*.01)*.2*a;e.y+=o,n.mesh.position.copy(e),n.pos.y=e.y,n.mesh.rotation.set(0,0,0),n.mesh.rotation.y=n.heading,n.mesh.rotation.x=n.steer*.3*r,n.mesh.rotation.z=c,n.mesh.traverse(h=>{if(h.userData.isFlame)if(n.turboActive&&n.speed>5){const u=performance.now()*.01,f=.6+Math.sin(u+Math.random()*3)*.3;h.material.opacity=.7+f*.3;const d=.6+f*.5,g=1.5+f*1.5;h.scale.set(d,g,1)}else h.material.opacity=0,h.scale.set(0,0,0);else h.userData.isJet?h.visible=n.turboCharges>0:h.userData.isNozzleInner&&h.material.emissive&&(h.material.emissiveIntensity=n.turboActive?1.5+Math.sin(performance.now()*.01)*.5:n.turboCharges>0?.3:0)})}function Vo(n,e,t,i,s){const r=aa(n.color,n.accent,n.nozzles,n.finScale,n.hull);l.scene.add(r);const a=Math.floor(e*it)%it,o=l.trackPts[a].pos.clone(),c=l.trackPts[a].tan.clone(),h=l.trackPts[a].right.clone();return o.add(h.multiplyScalar(t)),{mesh:r,name:n.name,color:n.color,accent:n.accent,maxSpd:n.maxSpd,accel:n.accel,turnSpeed:n.turn,turboMax:n.turbo,pos:o,heading:Math.atan2(-c.z,c.x),speed:i,_trackT:e,turboCharges:0,turboActive:!1,lap:0,cp:0,finished:!1,finTime:0,colTimer:0,steer:0,throttle:0,isPlayer:s,aiTarget:0,aiTimer:0,airborne:!1,airVY:0}}function Hm(n,e){n.throttle>0?n.speed+=(n.throttle*n.maxSpd-n.speed)*(1-Math.exp(-n.accel*e)):n.throttle<0?n.speed+=(n.throttle*n.maxSpd*.4-n.speed)*(1-Math.exp(-n.accel*.8*e)):n.speed*=Math.pow(.95,e*60),n.speed=Math.max(-n.maxSpd*.3,Math.min(n.maxSpd,n.speed));const t=Math.abs(n.speed)/Math.max(1,n.maxSpd),i=.1+.1*Math.pow(t,.7);n.heading-=n.steer*n.turnSpeed*i*e*60*Math.sign(n.speed||1);const s=new D(Math.cos(n.heading),0,-Math.sin(n.heading));n.pos.x+=s.x*n.speed*e,n.pos.z+=s.z*n.speed*e}function Vm(){const n=new mt,e=new be({color:1710634,roughness:.6,metalness:.2}),t=new be({color:14527112,roughness:.7}),i=new be({color:2236962,roughness:.5}),s=new be({color:8947848,roughness:.3,metalness:.7}),r=new Ne(.22,.18,.9,8),a=new z(r,e);a.position.y=.1,n.add(a);const o=new Ke(.22,8,6),c=new z(o,t);c.position.y=.7,n.add(c);const h=new Ke(.24,8,6,0,Math.PI,.3,1.5),u=new be({color:2271999,roughness:.05,metalness:.2,transparent:!0,opacity:.55}),f=new z(h,u);f.position.set(0,.72,.06),f.rotation.x=-.1,n.add(f);const d=new Ne(.1,.1,.6,6),g=new z(d,s);g.position.set(0,.15,-.2),n.add(g);const _=new Ne(.06,.05,.5,6);[-.25,.25].forEach(m=>{const p=new z(_.clone(),e);p.position.set(0,.05,m),p.rotation.z=.5,p.rotation.x=m<0?-.3:.3,n.add(p)});const x=new Ne(.08,.06,.5,6);return[-.12,.12].forEach(m=>{const p=new z(x.clone(),e);p.position.set(0,-.4,m),n.add(p);const E=new qe(.15,.04,.35),M=new z(E,i);M.position.set(0,-.65,m),n.add(M)}),n.castShadow=!0,n}function Wm(n){let e=1/0,t=0;const i=20;for(let a=0;a<it;a+=i){const o=n.distanceTo(l.trackPts[a].pos);o<e&&(e=o,t=a)}const s=Math.max(0,t-i*2),r=Math.min(it,t+i*2);for(let a=s;a<=r;a++){const o=a%it,c=n.distanceTo(l.trackPts[o].pos);c<e&&(e=c,t=o)}return{pos:l.trackPts[t].pos,idx:t,t:t/it,dist:e}}function Xm(n){const e=Math.floor(n*it)%it,t=(e+1)%it,i=n*it%1;return l.trackPts[e].pos.y+(l.trackPts[t].pos.y-l.trackPts[e].pos.y)*i}function mi(n,e){const t=performance.now()*.001;return Math.sin(n*.008+t*.5)*1.5+Math.sin(e*.012+t*.4)*1.2+Math.sin((n+e)*.006+t*.6)*1+Math.sin(n*.025+e*.02+t*1.3)*.5+Math.sin(n*.003+t*.2)*2-3}const qm=function(){const n={A2:110,D3:146.83,E3:164.81,A3:220,C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25},e=[n.A3,n.C4,n.E4,n.A4,n.G4,n.E4,n.D4,n.C4,n.E4,n.G4,n.B4,n.C5,n.A4,n.E4,n.A3,-1],t=[n.A2,n.E3,n.A2,n.E3,n.D3,n.A3,n.D3,n.E3];function i(){this.ctx=null,this.master=null,this.engineGain=null,this.engineOsc1=null,this.engineOsc2=null,this.engineFilter=null,this.musicGain=null,this.musicPlaying=!1,this.beatTime=0,this.melIdx=0,this.bassIdx=0,this.initialized=!1,this.volume=.5,this.sfxCh=[];for(let s=0;s<6;s++)this.sfxCh.push({busy:!1})}return i.prototype.init=function(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),this.initEngine(),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master),this.initialized=!0}catch{console.warn("Audio unavailable")}},i.prototype.initEngine=function(){this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(this.master),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.value=60,this.engineOsc1.start(0),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="sawtooth",this.engineOsc2.frequency.value=62,this.engineOsc2.start(0);const s=this.ctx.createGain();s.gain.value=.12,this.engineOsc2.connect(s),s.connect(this.engineGain),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=300,this.engineFilter.Q.value=3,this.engineOsc1.connect(this.engineFilter),this.engineFilter.connect(this.engineGain);const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=30,r.start(0);const a=this.ctx.createGain();a.gain.value=.06,r.connect(a),a.connect(this.engineGain),this.subOsc=r,this.subGain=a},i.prototype.updateEngine=function(s,r,a){if(!this.initialized)return;const o=Math.min(1,s/r),c=50+o*160+(a?50:0);this.engineOsc1.frequency.linearRampToValueAtTime(c,this.ctx.currentTime+.05),this.engineOsc2.frequency.linearRampToValueAtTime(c+4,this.ctx.currentTime+.05),this.subOsc.frequency.linearRampToValueAtTime(c*.5,this.ctx.currentTime+.05);const h=.03+o*.1;this.engineGain.gain.linearRampToValueAtTime(h,this.ctx.currentTime+.05),this.engineFilter.frequency.value=150+o*700+(a?500:0),this.subGain.gain.value=.02+o*.08},i.prototype.sfx=function(s){if(!this.initialized)return;const r=this.ctx,a=r.currentTime,o=this.sfxCh.find(h=>!h.busy)||this.sfxCh[0];o.busy=!0;const c=h=>{o.busy=!1};switch(s){case"boost":{const h=r.createOscillator(),u=r.createGain();h.type="sine",h.frequency.setValueAtTime(300,a),h.frequency.exponentialRampToValueAtTime(1200,a+.5),u.gain.setValueAtTime(.18,a),u.gain.exponentialRampToValueAtTime(.001,a+.6),h.connect(u),u.connect(this.master),h.start(a),h.stop(a+.6),setTimeout(c,600);break}case"boost_end":{const h=r.createOscillator(),u=r.createGain();h.type="sine",h.frequency.setValueAtTime(800,a),h.frequency.exponentialRampToValueAtTime(100,a+.4),u.gain.setValueAtTime(.12,a),u.gain.exponentialRampToValueAtTime(.001,a+.45),h.connect(u),u.connect(this.master),h.start(a),h.stop(a+.45),setTimeout(c,450);break}case"crash":{const h=r.sampleRate*.25,u=r.createBuffer(1,h,r.sampleRate),f=u.getChannelData(0);for(let x=0;x<h;x++)f[x]=(Math.random()*2-1)*Math.exp(-x/(r.sampleRate*.04));const d=r.createBufferSource();d.buffer=u;const g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=250;const _=r.createGain();_.gain.setValueAtTime(.25,a),_.gain.exponentialRampToValueAtTime(.001,a+.25),d.connect(g),g.connect(_),_.connect(this.master),d.start(a),setTimeout(c,250);break}case"splash":{const h=r.sampleRate*.1,u=r.createBuffer(1,h,r.sampleRate),f=u.getChannelData(0);for(let x=0;x<h;x++)f[x]=(Math.random()*2-1)*Math.exp(-x/(r.sampleRate*.015));const d=r.createBufferSource();d.buffer=u;const g=r.createBiquadFilter();g.type="bandpass",g.frequency.value=1500,g.Q.value=.5;const _=r.createGain();_.gain.setValueAtTime(.1,a),_.gain.exponentialRampToValueAtTime(.001,a+.1),d.connect(g),g.connect(_),_.connect(this.master),d.start(a),setTimeout(c,100);break}case"pickup":{[880,1100,1320].forEach((u,f)=>{const d=r.createOscillator(),g=r.createGain();d.type="sine",d.frequency.value=u,g.gain.setValueAtTime(.12,a+f*.06),g.gain.exponentialRampToValueAtTime(.001,a+f*.06+.15),d.connect(g),g.connect(this.master),d.start(a+f*.06),d.stop(a+f*.06+.15)}),setTimeout(c,300);break}case"lap":{[523,659,784].forEach((h,u)=>{const f=r.createOscillator(),d=r.createGain();f.type="triangle",f.frequency.value=h,d.gain.setValueAtTime(.15,a+u*.08),d.gain.exponentialRampToValueAtTime(.001,a+u*.08+.3),f.connect(d),d.connect(this.master),f.start(a+u*.08),f.stop(a+u*.08+.3)}),setTimeout(c,400);break}case"count":{const h=r.createOscillator(),u=r.createGain();h.type="square",h.frequency.value=880,u.gain.setValueAtTime(.12,a),u.gain.exponentialRampToValueAtTime(.001,a+.2),h.connect(u),u.connect(this.master),h.start(a),h.stop(a+.2),setTimeout(c,200);break}case"go":{[440,554,659].forEach((h,u)=>{const f=r.createOscillator(),d=r.createGain();f.type="sine",f.frequency.value=h,d.gain.setValueAtTime(.18,a+u*.05),d.gain.exponentialRampToValueAtTime(.001,a+u*.05+.4),f.connect(d),d.connect(this.master),f.start(a+u*.05),f.stop(a+u*.05+.4)}),setTimeout(c,500);break}case"finish":{[523,659,784,1047].forEach((h,u)=>{const f=r.createOscillator(),d=r.createGain();f.type="triangle",f.frequency.value=h,d.gain.setValueAtTime(.18,a+u*.12),d.gain.exponentialRampToValueAtTime(.001,a+u*.12+.6),f.connect(d),d.connect(this.master),f.start(a+u*.12),f.stop(a+u*.12+.6)}),setTimeout(c,700);break}case"select":{const h=r.createOscillator(),u=r.createGain();h.type="sine",h.frequency.value=660,u.gain.setValueAtTime(.08,a),u.gain.exponentialRampToValueAtTime(.001,a+.1),h.connect(u),u.connect(this.master),h.start(a),h.stop(a+.1),setTimeout(c,100);break}}},i.prototype.startMusic=function(){!this.initialized||this.musicPlaying||(this.musicPlaying=!0,this.beatTime=0,this.melIdx=0,this.bassIdx=0,this.musicGain.gain.linearRampToValueAtTime(.12,this.ctx.currentTime+1),this.sched())},i.prototype.sched=function(){if(!this.musicPlaying)return;const s=this.ctx,r=s.currentTime,a=.214;for(;this.beatTime<r+1;){const o=this.beatTime,c=s.createGain();c.gain.setValueAtTime(.18,o),c.gain.exponentialRampToValueAtTime(.001,o+.08);const h=s.createOscillator();if(h.type="sine",h.frequency.setValueAtTime(120,o),h.frequency.exponentialRampToValueAtTime(40,o+.06),h.connect(c),c.connect(this.musicGain),h.start(o),h.stop(o+.08),Math.random()<.4){const u=s.createGain();u.gain.setValueAtTime(.03,o),u.gain.exponentialRampToValueAtTime(.001,o+.04);const f=s.sampleRate*.04,d=s.createBuffer(1,f,s.sampleRate),g=d.getChannelData(0);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.exp(-x/(s.sampleRate*.008));const _=s.createBufferSource();_.buffer=d,_.connect(u),u.connect(this.musicGain),_.start(o)}if(this.beatTime%(a*4)<a){const u=t[this.bassIdx%t.length],f=s.createGain();f.gain.setValueAtTime(.1,o),f.gain.exponentialRampToValueAtTime(.001,o+.25);const d=s.createOscillator();d.type="square",d.frequency.value=u,d.connect(f),f.connect(this.musicGain),d.start(o),d.stop(o+.25),this.bassIdx++}if(this.beatTime%(a*2)<a){const u=e[this.melIdx%e.length];if(u>0){const f=s.createGain();f.gain.setValueAtTime(.05,o),f.gain.setValueAtTime(.05,o+.08),f.gain.exponentialRampToValueAtTime(.001,o+.4);const d=s.createOscillator();d.type="triangle",d.frequency.value=u;const g=s.createBiquadFilter();g.type="lowpass",g.frequency.value=2e3,d.connect(g),g.connect(f),f.connect(this.musicGain),d.start(o),d.stop(o+.4)}this.melIdx++}this.beatTime+=a}requestAnimationFrame(()=>this.sched())},i.prototype.stopMusic=function(){this.musicPlaying=!1,this.beatTime=0,this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.3)},i.prototype.setVolume=function(s){this.volume=Math.max(0,Math.min(1,s)),this.master&&(this.master.gain.value=this.volume)},i}();function Ym(){l.waterGeo=new Yn(Ho,Ho,120,120),l.waterGeo.rotateX(-Math.PI/2);const n=new be({color:948121,roughness:.12,metalness:.2,transparent:!0,opacity:.92,envMapIntensity:.5});l.waterMesh=new z(l.waterGeo,n),l.waterMesh.position.y=-3,l.waterMesh.receiveShadow=!0,l.scene.add(l.waterMesh)}function jm(){const n=new Ke(1,48,36),e=n.attributes.position,t=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){const o=(e.getY(r)+1)*.5;let c,h,u;if(o>.7){const f=(o-.7)/.3;c=.15+f*.1,h=.35+f*.15,u=.8+f*.12}else if(o>.5){const f=(o-.5)/.2;c=.35+f*-.2,h=.55+f*-.2,u=.85+f*-.05}else if(o>.4){const f=(o-.4)/.1;c=.55+f*-.2,h=.7+f*-.15,u=.88+f*-.03}else c=.53,h=.68,u=.87;t[r*3]=c,t[r*3+1]=h,t[r*3+2]=u}n.setAttribute("color",new st(t,3));const i=new Xi({vertexColors:!0,side:Ut,fog:!1}),s=new z(n,i);s.scale.set(1800,1800,1800),l.scene.add(s)}function Zm(){for(let n=0;n<60;n++){const e=document.createElement("canvas");e.width=256,e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(128,64,10,128,64,100);i.addColorStop(0,"rgba(255,255,255,0.7)"),i.addColorStop(.5,"rgba(255,255,255,0.3)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,256,128);for(let h=0;h<5;h++){const u=128+(Math.random()-.5)*120,f=64+(Math.random()-.5)*40,d=20+Math.random()*50,g=t.createRadialGradient(u,f,5,u,f,d);g.addColorStop(0,"rgba(255,255,255,0.5)"),g.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=g,t.beginPath(),t.arc(u,f,d,0,Math.PI*2),t.fill()}const s=new Ll(e),r=new Qr({map:s,transparent:!0,opacity:.5+Math.random()*.3,depthWrite:!1}),a=new Pl(r),o=Math.random()*Math.PI*2,c=300+Math.random()*600;a.position.set(Math.cos(o)*c,150+Math.random()*200,Math.sin(o)*c),a.scale.set(100+Math.random()*150,30+Math.random()*50,1),l.scene.add(a),l.cloudMeshes.push(a)}}function Jm(){const n=new qe(1),e=[8018474,6965786,9071162,5913098];for(let a=0;a<it;a+=30)for(let o=-1;o<=1;o+=2){const c=l.trackPts[a],h=ra*.5+120,u=c.pos.clone().add(c.right.clone().multiplyScalar(o*h));u.y=-6;const f=20+a%4*8,d=8+a%3*6,g=8+(a+2)%3*6,_=e[a%e.length],x=new z(n,new be({color:_,roughness:.92,metalness:0}));x.scale.set(d,f,g),x.position.copy(u),x.position.y+=f*.5,x.rotation.y=a*.07%Math.PI,x.castShadow=!0,x.receiveShadow=!0,l.scene.add(x),l.cliffMeshes.push(x),l.racingMeshes.push(x)}const t=[6967360,8020048,5914672,9072736];for(let a=0;a<24;a++){const o=a/24*Math.PI*2+.3,c=500+a%5*50,h=50+a%7*10,u=40+a%4*15,f=40+a%3*15,d=new z(n,new be({color:t[a%t.length],roughness:.95}));d.scale.set(u,h,f),d.position.set(Math.cos(o)*c,-3+h*.3,Math.sin(o)*c),d.castShadow=!0,d.receiveShadow=!0,l.scene.add(d),l.racingMeshes.push(d)}const i=new Yn(2500,2500);i.rotateX(-Math.PI/2);const s=new be({color:3832362,roughness:.9,metalness:0}),r=new z(i,s);r.position.y=-80,r.receiveShadow=!0,l.scene.add(r),l.racingMeshes.push(r)}function Km(){l.scene.add(new Hl(10079470,.5));const n=new Gl(16774368,2);n.position.set(300,400,200),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=1,n.shadow.camera.far=600,n.shadow.camera.left=-200,n.shadow.camera.right=200,n.shadow.camera.top=200,n.shadow.camera.bottom=-200,n.shadow.bias=-.001,l.scene.add(n),l.scene.add(new kl(8965375,4500036,.7))}function $m(){const n=new Ke(20,20,20),e=new Xi({color:16777096}),t=new z(n,e);t.position.set(300,400,200),l.scene.add(t);const i=new Ke(40,20,20),s=new Xi({color:16777130,transparent:!0,opacity:.25}),r=new z(i,s);r.position.copy(t.position),l.scene.add(r)}function Wo(){const n=l.waterGeo.attributes.position,e=performance.now()*.001;for(let t=0;t<n.count;t++){const i=n.getX(t),s=n.getZ(t),r=Math.sin(i*.008+e*.5)*1.5+Math.sin(s*.012+e*.4)*1.2+Math.sin((i+s)*.006+e*.6)*1+Math.sin(i*.025+s*.02+e*1.3)*.5+Math.sin(i*.003+e*.2)*2;n.setY(t,r-3)}n.needsUpdate=!0,l.waterGeo.computeVertexNormals()}function Xo(n){l.boostObjs.forEach(e=>{e.userData.collected||(e.position.y=e.userData.baseY+Math.sin(n*3+e.userData.idx*.5)*.8,e.rotation.y=n*2,e.rotation.x=n*1.3)})}function qo(n){l.cloudMeshes.forEach((e,t)=>{e.position.x+=Math.sin(n*.1+t)*.03,e.position.z+=Math.cos(n*.08+t*.7)*.03})}function Qm(){l.islands=[],[{x:200,z:200,s:12},{x:-300,z:350,s:9},{x:500,z:-150,s:14},{x:-450,z:-250,s:10},{x:150,z:-500,s:11},{x:-600,z:150,s:8},{x:350,z:500,s:13},{x:-200,z:-550,s:10},{x:650,z:300,s:9},{x:-700,z:-100,s:15},{x:100,z:700,s:11},{x:-500,z:600,s:8}].forEach(e=>{const t=new mt,i=new be({color:12759680,roughness:.9}),s=new be({color:4880938,roughness:.85}),r=new be({color:9139029,roughness:.8}),a=new be({color:2263842,roughness:.7}),o=new Ne(e.s*.6,e.s,e.s*.4,8),c=new z(o,i);c.position.y=-3+e.s*.2,t.add(c);const h=new Ne(e.s*.55,e.s*.65,e.s*.25,8),u=new z(h,s);u.position.y=-3+e.s*.45,t.add(u);for(let f=0;f<3;f++){const d=f/3*Math.PI*2+e.x*.1,g=e.s*.2+Math.random()*e.s*.15,_=3+Math.random()*4,x=new z(new Ne(.15,.25,_,6),r);x.position.set(Math.cos(d)*g,-3+e.s*.45+_*.5,Math.sin(d)*g),x.rotation.z=(Math.random()-.5)*.2,t.add(x);const m=new z(new Ke(1.5+Math.random()*1.5,8,6),a);m.position.set(Math.cos(d)*g,-3+e.s*.45+_+.5,Math.sin(d)*g),t.add(m)}t.position.set(e.x,0,e.z),t.userData={radius:e.s*1.2},l.scene.add(t),l.islands.push(t)})}function Wl(){const n=new mt,e=new be({color:4478310,roughness:.4,metalness:.3}),t=new be({color:10066329,roughness:.5}),i=new Ne(1.8,.8,18,10);i.rotateZ(Math.PI/2);const s=new z(i,e);n.add(s);const r=new Ne(1.2,.6,16,8);r.rotateZ(Math.PI/2);const a=new z(r,t);a.position.y=-.6,n.add(a);const o=new Ke(2,10,8);o.scale(1.5,.8,.9);const c=new z(o,e);c.position.x=9,n.add(c);const h=new Ke(1.5,8,6);h.scale(1.2,.4,.8);const u=new z(h,t);u.position.set(9.5,-.8,0),n.add(u);const f=new Et(1.5,3,4),d=new z(f,e);d.position.set(2,2.5,0),n.add(d);const g=new Et(2,4,4);g.rotateZ(Math.PI/2);const _=new z(g,e);_.position.x=-10,_.rotation.z=.3,n.add(_);const x=new Et(1.2,3,4);x.rotateX(Math.PI/2),[-1.5,1.5].forEach(p=>{const E=new z(x.clone(),e);E.position.set(3,-.5,p),E.rotation.z=p<0?-.4:.4,n.add(E)});const m=new be({color:1118481,roughness:.1,metalness:.8});return[-1,1].forEach(p=>{const E=new z(new Ke(.25,6,4),m);E.position.set(9.5,.5,p*1.2),n.add(E)}),n.scale.set(1.5,1.5,1.5),n}function Yo(n){if(l.megalodon)return;const e=Wl(),t=Math.random()*Math.PI*2,i=60+Math.random()*40,s=n.x+Math.cos(t)*i,r=n.z+Math.sin(t)*i;e.position.set(s,-8+Math.random()*4,r);const a=t+Math.PI+(Math.random()-.5)*1.5;e.rotation.y=a,e.userData={vx:Math.cos(a)*25,vz:Math.sin(a)*25,timer:8+Math.random()*4,wobble:Math.random()*Math.PI*2},l.scene.add(e),l.megalodon=e}function e0(n){if(!l.megalodon)return;const e=l.megalodon;if(e.userData.timer-=n,e.userData.timer<=0){l.scene.remove(e),l.megalodon=null;return}e.position.x+=e.userData.vx*n,e.position.z+=e.userData.vz*n,e.userData.wobble+=n*2,e.position.y+=Math.sin(e.userData.wobble)*.3,e.rotation.z=Math.sin(e.userData.wobble*.7)*.08}function Cs(n){l.racingMeshes&&l.racingMeshes.forEach(e=>{e.visible=!n}),l.cliffMeshes&&l.cliffMeshes.forEach(e=>{e.visible=!n})}function jo(){l.oceanFloor=new mt,l.hasMegalodonSkeleton=!1,l.megalodonSkeletonPos=null,l.skeletonSeen=!1,l.hasSub44=!1,l.sub44Seen=!1;const n=new Yn(2e3,2e3,30,30);n.rotateX(-Math.PI/2);const e=n.attributes.position;for(let s=0;s<e.count;s++){const r=e.getX(s),a=e.getZ(s);e.setY(s,Math.sin(r*.008)*3+Math.cos(a*.01)*2)}n.computeVertexNormals();const t=new z(n,new be({color:2767434,roughness:.95}));t.position.y=-50,l.oceanFloor.add(t);const i=new be({color:13421738,roughness:.7});for(let s=0;s<80;s++){const r=t0(i);r.position.set((Math.random()-.5)*900,-50+Math.random()*3,(Math.random()-.5)*900),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.scale.setScalar(.4+Math.random()*2),l.oceanFloor.add(r)}for(let s=0;s<15;s++){const r=new z(new Ke(.8+Math.random()*.5,8,6),i.clone());r.scale.set(1,.7,.9),r.position.set((Math.random()-.5)*800,-50+Math.random()*2,(Math.random()-.5)*800),r.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),l.oceanFloor.add(r),[-.4,.4].forEach(a=>{const o=new z(new Ke(.2,6,4),new be({color:1118481}));o.position.copy(r.position),o.position.x+=a*r.scale.x,o.position.y+=.15,l.oceanFloor.add(o)})}if(Math.random()<.15){const s=Wr();s.position.set((Math.random()-.5)*500,-48,(Math.random()-.5)*500),s.rotation.y=Math.random()*Math.PI*2,l.oceanFloor.add(s),l.hasMegalodonSkeleton=!0,l.megalodonSkeletonPos=s.position.clone()}if(Math.random()<.01){const s=Xl();s.position.set((Math.random()-.5)*400,-47,(Math.random()-.5)*400),s.rotation.y=Math.random()*Math.PI*2,s.rotation.z=.3,l.oceanFloor.add(s),l.hasSub44=!0,l.sub44Pos=s.position.clone()}l.scene.add(l.oceanFloor)}function t0(n){const e=new mt,t=new z(new Ne(.08,.06,1.8,6),n);e.add(t);const i=new Ke(.14,6,4),s=new z(i,n);s.position.y=.9,e.add(s);const r=new z(i.clone(),n);return r.position.y=-.9,e.add(r),e}function Wr(){const n=new mt,e=new be({color:12303274,roughness:.8}),t=new be({color:2236962}),i=new z(new Ne(.5,.2,30,8),e);i.rotation.z=Math.PI/2,n.add(i);const s=new z(new Ke(3,10,8),e);s.scale.set(1.8,.9,1),s.position.x=16,n.add(s);const r=new z(new Ke(2.5,8,6),e);r.scale.set(1.4,.4,.9),r.position.set(16.5,-1.5,0),n.add(r),[-1.3,1.3].forEach(h=>{const u=new z(new Ke(.6,6,4),t);u.position.set(17,1,h),n.add(u)});for(let h=0;h<12;h++){const u=new z(new qn(2.5,.15,6,8,Math.PI),e);u.position.x=10-h*2,u.rotation.y=Math.PI/2,n.add(u)}for(let h=0;h<6;h++){const u=new z(new Ke(.7-h*.08,6,4),e);u.position.x=-12-h*1.8,n.add(u)}const a=new z(new Et(2,5,4),e);a.position.set(4,4,0),n.add(a);const o=new z(new Et(2.5,6,4),e);o.position.set(-17,4,0),o.rotation.z=.3,n.add(o);const c=new z(new Et(2,5,4),e);return c.position.set(-17,-3,0),c.rotation.z=-.3,n.add(c),[-2,2].forEach(h=>{const u=new z(new Et(1.5,5,4),e);u.position.set(6,-1.5,h),u.rotation.x=h<0?-.5:.5,n.add(u)}),n.scale.set(2.5,2.5,2.5),n}function n0(){const n=new mt,e=new be({color:6710869,roughness:.6,metalness:.2}),t=new be({color:7829350,roughness:.6,metalness:.2}),i=new z(new Ke(3,10,8),e);i.scale.set(1.2,.4,1.4),n.add(i);for(let r=0;r<5;r++){const a=r/4*Math.PI*.5-Math.PI*.25,o=2.5+(r===2?1.2:r===0||r===4?-.5:0),c=new z(new Ne(.3,.22,o,6),t);c.position.set(Math.cos(a)*2.2,.5,Math.sin(a)*2.2),c.rotation.x=Math.PI/2,c.rotation.z=a,n.add(c);const h=new z(new Ke(.35,6,4),t);h.position.set(Math.cos(a)*2.2,.5,Math.sin(a)*2.2),n.add(h)}const s=new z(new Ne(1.8,1.4,20,8),e);return s.position.y=-12,n.add(s),n.scale.set(1.5,1.5,1.5),n}function Zo(n){if(l.giantHand)return;const e=n0();e.position.set(n.x+(Math.random()-.5)*6,-55,n.z+(Math.random()-.5)*6),e.userData={phase:"rising",timer:0,targetY:n.y},l.scene.add(e),l.giantHand=e}function i0(n){if(!l.giantHand)return null;const e=l.giantHand;switch(e.userData.timer+=n,e.userData.phase){case"rising":e.position.y+=18*n,e.position.y>=e.userData.targetY-1&&(e.position.y=e.userData.targetY-1,e.userData.phase="grabbing",e.userData.timer=0);break;case"grabbing":e.userData.timer>1.2&&(e.userData.phase="pulling",e.userData.timer=0);break;case"pulling":if(e.position.y+=30*n,e.position.y>5)return l.scene.remove(e),l.giantHand=null,"pulled";break}return e.rotation.z=Math.sin(e.userData.timer*3)*.12,e.rotation.x=Math.sin(e.userData.timer*2.3)*.06,null}function Xl(){const n=new mt,e=new be({color:4478310,roughness:.4,metalness:.6}),t=new be({color:9127187,roughness:.7,metalness:.3}),i=new be({color:13421772,roughness:.5,metalness:.4}),s=new Ne(3,3,20,12);s.rotateZ(Math.PI/2);const r=new z(s,e);n.add(r);const a=new Ne(1.5,1.5,4,8),o=new z(a,e);o.position.set(0,3.5,0),n.add(o);const c=new qe(8,6,6),h=new z(c,t);h.position.set(3,0,0),h.rotation.set(.2,.3,.1),n.add(h);for(let x=0;x<8;x++){const m=new z(new qe(1+Math.random()*2,.3,.5+Math.random()),t);m.position.set(3+Math.random()*4,(Math.random()-.5)*4,(Math.random()-.5)*4),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),n.add(m)}const u=new qe(1.5,2,.1),f=new z(u,i);f.position.set(-2,0,3.1),n.add(f);const d=new z(u.clone(),i);d.position.set(-4.5,0,3.1),n.add(d),[-1,1].forEach(x=>{const m=new Ne(.08,.08,15,4);m.rotateZ(Math.PI/2);const p=new z(m,i);p.position.set(0,2.8,x*2.8),n.add(p)});const g=new Ne(1.5,1.5,.2,6);g.rotateZ(Math.PI/2);const _=new z(g,t);return _.position.set(-11,0,0),n.add(_),n.scale.set(1.5,1.5,1.5),n}function Jo(){const n=new mt,e=new be({color:3820122,roughness:.35,metalness:.75}),t=new be({color:4872810,roughness:.3,metalness:.7}),i=new be({color:1710618,roughness:.4,metalness:.85}),s=new be({color:6710886,roughness:.3,metalness:.9}),r=new be({color:8965375,roughness:.02,metalness:.1,transparent:!0,opacity:.6}),a=new be({color:13378082,roughness:.5,metalness:.3}),o=new Ne(2.2,2.8,22,16);o.rotateZ(Math.PI/2);const c=new z(o,e);c.castShadow=!0,n.add(c);const h=new qe(18,.15,3.5),u=new z(h,t);u.position.y=-2.2,n.add(u);const f=new Ke(2.5,16,12);f.scale(1.8,.8,.8);const d=new z(f,e);d.position.x=12,d.castShadow=!0,n.add(d);const g=new Et(.8,2,8);g.rotateZ(-Math.PI/2);const _=new z(g,i);_.position.x=14.5,n.add(_);const x=new Ne(1.8,2.2,4,12);x.rotateZ(Math.PI/2);const m=new z(x,e);m.position.x=-12,n.add(m);const p=new Et(1.8,3,12);p.rotateZ(Math.PI/2);const E=new z(p,e);E.position.x=-15,n.add(E);const M=new Ne(1.8,2,2.5,12),S=new z(M,e);S.position.set(2,3.2,0),S.castShadow=!0,n.add(S);const A=new Ne(1.2,1.8,1.5,12),R=new z(A,e);R.position.set(2,5.2,0),n.add(R);const C=new Ne(1.3,1.3,.15,12),O=new z(C,i);O.position.set(2,6,0),n.add(O);const v=new Ne(.5,.5,.12,8),T=new z(v,i);T.position.set(2,6.1,0),n.add(T);const N=new Ne(.06,.06,2.5,6),B=new z(N,i);B.position.set(2.3,7.5,0),n.add(B);const Y=new qe(.2,.15,.3),L=new z(Y,i);L.position.set(2.3,8.7,0),n.add(L);const H=new Ne(.03,.03,3,4),q=new z(H,i);q.position.set(1.5,8,0),n.add(q);const j=new Ke(.08,6,4),te=new z(j,a);te.position.set(1.5,9.5,0),n.add(te);const Q=new qn(.35,.06,6,12),K=new Ke(.3,10,8);for(let ee=0;ee<6;ee++){const ie=7-ee*2.8,Ee=new z(Q,s);Ee.position.set(ie,1.5,2.5),n.add(Ee);const ze=new z(K,r);ze.position.set(ie,1.5,2.4),n.add(ze)}for(let ee=0;ee<3;ee++){const ie=new z(Q.clone(),s);ie.position.set(2,4+ee*.6,1.6),ie.rotation.x=Math.PI/2,n.add(ie);const Ee=new z(K.clone(),r);Ee.position.set(2,4+ee*.6,1.5),n.add(Ee)}for(let ee=0;ee<3;ee++){const ie=-1.5+ee*1.5;for(let Ee=0;Ee<20;Ee++){const ze=-8+Ee*1,ot=new Ke(.05,4,4),w=new z(ot,s);w.position.set(ze,2.5,ie),n.add(w)}}const I=new qe(.08,.6,2.5);[-1,1].forEach(ee=>{const ie=new z(I,e);ie.position.set(2,3,ee*2.2),n.add(ie)});const V=new qe(.08,.08,3);[-1,1].forEach(ee=>{const ie=new z(V,e);ie.position.set(-8,0,ee*3),n.add(ie)});const ge=new qe(2.5,2,.08),_e=new z(ge,e);_e.position.set(-14.5,0,0),n.add(_e);const re=new Ne(.4,.4,.3,8);re.rotateZ(Math.PI/2);const Se=new z(re,i);Se.position.x=-16.5,n.add(Se);for(let ee=0;ee<5;ee++){const ie=new qe(.06,1.2,.35),Ee=new z(ie,i);Ee.position.x=-16.5,Ee.rotation.x=ee/5*Math.PI*2,Ee.rotation.y=.3,n.add(Ee)}const Ae=new qn(1.4,.08,6,16);Ae.rotateY(Math.PI/2);const Ce=new z(Ae,i);Ce.position.x=-16.5,n.add(Ce);const De=new Ne(.12,.12,.5,6);De.rotateZ(Math.PI/2),[-.6,.6].forEach(ee=>{const ie=new z(De,i);ie.position.set(14.8,-.3,ee),n.add(ie)});const Ze=new Ne(.6,.6,12,8);Ze.rotateZ(Math.PI/2),[-1,1].forEach(ee=>{const ie=new z(Ze,t);ie.position.set(0,-1.5,ee*2.8),n.add(ie)});const Pe=new Ne(.04,.04,.6,4);for(let ee=0;ee<8;ee++){const ie=8-ee*2;[-1.2,1.2].forEach(Ee=>{const ze=new z(Pe,i);ze.position.set(ie,2.8,Ee),n.add(ze)})}const P=new Ne(.03,.03,16,6);P.rotateZ(Math.PI/2),[-1.2,1.2].forEach(ee=>{const ie=new z(P,i);ie.position.set(0,3.1,ee),n.add(ie)});const fe=new qe(20,.3,.15),Z=new z(fe,i);Z.position.y=-2.8,n.add(Z);const se=new qe(.8,.08,.4);[-1,1].forEach(ee=>{const ie=new z(se,i);ie.position.set(-3,-2.3,ee*1.5),n.add(ie)});const $=new Ne(.15,.2,.4,6);$.rotateZ(Math.PI/2);const we=new z($,i);return we.position.set(-10,1.8,0),n.add(we),n.scale.set(1.5,1.5,1.5),n}function Ko(){const n=new mt,e=new be({color:1714714,roughness:.6,metalness:.2}),t=new be({color:16711680,emissive:16711680,emissiveIntensity:2}),i=new be({color:15658700,roughness:.3}),s=new be({color:3355443,roughness:.4,metalness:.6}),r=25;for(let _=0;_<r;_++){const x=_/r,m=1.8-Math.abs(x-.5)*2,p=new Ke(Math.max(.5,m),8,6),E=new z(p,e);if(E.position.x=-_*2.2,E.position.y=Math.sin(_*.4)*.8,E.scale.set(1,.7,1),n.add(E),_%3===0&&_>2&&_<r-3){const M=new Et(.15,1.5,4),S=new z(M,s);S.position.set(-_*2.2,m*.7+.7,0),S.rotation.z=Math.PI,n.add(S)}}const a=new Ke(2.5,12,8);a.scale(1.8,.7,.9);const o=new z(a,e);o.position.x=3,n.add(o);const c=new Ke(2,10,8);c.scale(1.5,.3,.8);const h=new z(c,e);h.position.set(4,.5,0),n.add(h);const u=new Ke(1.8,10,8);u.scale(1.5,.25,.7);const f=new z(u,e);f.position.set(4,-.7,0),n.add(f);for(let _=0;_<8;_++){const x=new Et(.08,.5,4),m=new z(x,i);m.position.set(3.5+_*.3,.2,-.6+_%2*1.2),m.rotation.z=Math.PI,n.add(m)}for(let _=0;_<8;_++){const x=new Et(.08,.5,4),m=new z(x,i);m.position.set(3.5+_*.3,-.4,-.6+_%2*1.2),n.add(m)}[-1,1].forEach(_=>{const x=new Ke(.6,10,8),m=new z(x,t);m.position.set(4.5,.8,_*1.5),n.add(m);const p=new Ke(.3,8,6),E=new be({color:0}),M=new z(p,E);M.position.set(4.8,.8,_*1.5),n.add(M)});const d=new Et(2,5,6),g=new z(d,e);return g.position.set(-8,3,0),n.add(g),[-1,1].forEach(_=>{const x=new Et(1.5,4,4),m=new z(x,e);m.position.set(-5,-.5,_*2),m.rotation.x=_*.5,n.add(m)}),n.scale.set(2.5,2.5,2.5),n}function Cr(n,e){const t=n.pos.clone();t.y+=1.5;const i=new D(Math.cos(n.heading),0,-Math.sin(n.heading));if(l.diving){const s=n.pos.x+l.diverPos.x,r=n.pos.y+l.diverPos.y,a=n.pos.z+l.diverPos.z,o=new D(s,r,a),c=o.clone().add(i.clone().multiplyScalar(3)).add(new D(0,2,0));l.cam.position.lerp(c,Math.min(1,e*8)),l.cam.lookAt(o)}else if(l.walkingMode){const s=Math.cos(n.heading),r=Math.sin(n.heading),a=n.pos.x+l.walkPos.x*s-l.walkPos.z*r,o=n.pos.z+l.walkPos.x*r+l.walkPos.z*s,c=new D(a,n.pos.y+1.8,o),h=c.clone().add(i.clone().multiplyScalar(4)).add(new D(0,3,0));l.cam.position.lerp(h,Math.min(1,e*8)),l.cam.lookAt(c)}else if(l.pov==="first"){const s=t.clone().add(i.clone().multiplyScalar(.5)).add(new D(0,.8,0));l.cam.position.lerp(s,Math.min(1,e*12)),l.cam.lookAt(t.clone().add(i.clone().multiplyScalar(50)))}else{const s=Math.min(1,Math.abs(n.speed)/Math.max(1,n.maxSpd)),r=n.speed<-1,a=10-s*2,o=5+s*2.5,c=r?i.clone():i.clone().multiplyScalar(-1),h=t.clone().add(c.multiplyScalar(a)).add(new D(0,o,0));l.camShake>0&&(h.x+=(Math.random()-.5)*l.camShake*3,h.y+=(Math.random()-.5)*l.camShake*2,l.camShake*=.9,l.camShake<.01&&(l.camShake=0)),l.cam.position.lerp(h,Math.min(1,e*10)),l.cam.lookAt(t)}}function s0(n,e){if(n.finished)return;const t=Math.floor((n._trackT||0)*it)%it,i=100;let s=1/0,r=t;for(let x=t-i;x<=t+i;x++){const m=(x%it+it)%it,p=n.pos.distanceTo(l.trackPts[m].pos);p<s&&(s=p,r=m)}const o=(r+60)%it,h=l.trackPts[o].pos.clone().clone().sub(n.pos);h.y=0;let f=Math.atan2(-h.z,h.x)-n.heading;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;n.steer=Math.max(-1,Math.min(1,-f*2));let d=(n._trackT||0)-(l.pBoat._trackT||0);d>.5&&(d-=1),d<-.5&&(d+=1);const g=d>0?.92:1.08;n.throttle=g,n.turboCharges>0&&Math.random()<.003*e*60&&Math.abs(n.speed)>30&&(n.turboActive=!0,l.audio.sfx("boost")),n.turboActive&&n.turboCharges<=0&&(n.turboActive=!1);const _=Vl(n,e);_==="crash"&&l.audio.sfx("crash"),_==="finish"&&setTimeout(()=>{l.state==="RACING"&&(l.state="RESULTS")},2e3)}const Xt=[{id:0,name:"Minnow",rarity:"common",minSize:1,maxSize:3,value:5,color:"#aaaaaa"},{id:1,name:"Perch",rarity:"common",minSize:2,maxSize:5,value:10,color:"#ccaa44"},{id:2,name:"Bass",rarity:"common",minSize:3,maxSize:8,value:15,color:"#558833"},{id:3,name:"Trout",rarity:"uncommon",minSize:4,maxSize:10,value:25,color:"#dd8866"},{id:4,name:"Pike",rarity:"uncommon",minSize:5,maxSize:12,value:35,color:"#446644"},{id:5,name:"Catfish",rarity:"uncommon",minSize:6,maxSize:15,value:40,color:"#665544"},{id:6,name:"Salmon",rarity:"rare",minSize:8,maxSize:20,value:60,color:"#ee6644"},{id:7,name:"Swordfish",rarity:"rare",minSize:10,maxSize:25,value:80,color:"#4466aa"},{id:8,name:"Tuna",rarity:"rare",minSize:12,maxSize:30,value:100,color:"#334466"},{id:9,name:"Marlin",rarity:"legendary",minSize:15,maxSize:40,value:150,color:"#2244aa"},{id:10,name:"Golden Koi",rarity:"legendary",minSize:5,maxSize:15,value:200,color:"#ffcc00"},{id:11,name:"Kraken",rarity:"legendary",minSize:20,maxSize:50,value:500,color:"#440066"},{id:12,name:"Gay Fish",rarity:"legendary",minSize:3,maxSize:8,value:333,color:"#ff69b4"},{id:13,name:"Baby Eel",rarity:"legendary",minSize:2,maxSize:5,value:666,color:"#1a3a1a"},{id:14,name:"Rubber Duck",rarity:"common",minSize:1,maxSize:2,value:2,color:"#ffdd00"},{id:15,name:"Ancient Trident",rarity:"rare",minSize:4,maxSize:6,value:250,color:"#4488cc"},{id:16,name:"Crystal Jellyfish",rarity:"uncommon",minSize:2,maxSize:5,value:45,color:"#cc88ff"},{id:17,name:"Ghost Fish",rarity:"rare",minSize:3,maxSize:10,value:120,color:"#ddeeff"},{id:18,name:"Golden Boot",rarity:"common",minSize:1,maxSize:2,value:8,color:"#aa8833"},{id:99,name:"Mega Gay Fish",rarity:"legendary",minSize:5,maxSize:12,value:999,color:"#ff00ff"}],pn=[{id:0,name:"Basic Rod",cost:0,catchRate:.5,luckBonus:0,desc:"A stick with string. Gets the job done."},{id:1,name:"Fiberglass Rod",cost:100,catchRate:.62,luckBonus:.05,desc:"Lightweight and flexible."},{id:2,name:"Graphite Rod",cost:250,catchRate:.74,luckBonus:.1,desc:"Strong backbone, sensitive tip."},{id:3,name:"Tournament Rod",cost:500,catchRate:.85,luckBonus:.15,desc:"Competition-grade equipment."},{id:4,name:"Lucky Lure Rod",cost:300,catchRate:.58,luckBonus:.35,desc:"Attracts rare fish like a magnet."},{id:5,name:"Deep Sea Rod",cost:400,catchRate:.7,luckBonus:.08,desc:"Built for the biggest catches."}],Hi=[{id:0,name:"Basic Booster",cost:200,speedBonus:.1,desc:"+10% top speed. Bolt-on fins."},{id:1,name:"Turbo Booster",cost:500,speedBonus:.25,desc:"+25% top speed. Aftermarket exhaust."},{id:2,name:"Nitro System",cost:1e3,speedBonus:.5,desc:"+50% top speed. Full NOS kit."},{id:3,name:"Basic GPS",cost:300,hasGPS:!0,gpsRange:30,desc:"Shows treasure direction underwater."},{id:4,name:"Fish Finder GPS",cost:700,hasGPS:!0,gpsRange:60,desc:"Shows treasure direction + distance."}],Xr=[{id:"gay_fish",name:"Gay Fish Found",desc:"You found the legendary Gay Fish!"},{id:"mega_gay_fish",name:"Mega Gay Fish",desc:"Two Gay Fish in a row?! Incredible!"},{id:"baby_eel",name:"Baby Eel Found",desc:"Congratulations, goo-goo ga-ga!"},{id:"rubber_duck",name:"Rubber Duck",desc:"Quack."},{id:"golden_boot",name:"Golden Boot",desc:"You found a golden boot. Why?"},{id:"kraken",name:"Kraken Hunter",desc:"You caught a Kraken. Brave."},{id:"iron_lung_win",name:"Iron Lung Survivor",desc:"You found the skeleton and survived!"},{id:"eel_flash",name:"Eel Slayer",desc:"You flashed a monster eel!"},{id:"full_dex",name:"Master Angler",desc:"Caught every single fish!"}],r0={common:50,uncommon:25,rare:10,legendary:2},a0={common:"#aaaaaa",uncommon:"#44cc44",rare:"#4488ff",legendary:"#ffaa00"};function o0(){l.fishing={coins:0,ownedRods:[0],equippedRod:0,caughtFish:{},tank:[],tankCapacity:10,grindTimer:0,grindRate:1.2,taxRate:.15,totalTax:0,state:"idle",timer:0,currentFish:null,currentSize:0,message:"",messageTimer:0,shopCursor:0,shopTab:0,dexCursor:0,ownedUpgrades:[],upgrades:{speedBonus:0,hasGPS:!1,gpsRange:0},lastCaughtFish:null,reelProgress:0,reelDecay:.4,biteTimer:0}}function Fn(n){if(l.achievements||(l.achievements={}),!l.achievements[n]){l.achievements[n]=!0;const e=Xr.find(t=>t.id===n);e&&l.fishing&&(l.fishing.message="🏆 "+e.name+"!",l.fishing.messageTimer=3)}}function l0(){const n=l.fishing;if(n.state!=="idle")return;if(n.tank.length>=n.tankCapacity){n.message="Tank full! Wait for the grinder.",n.messageTimer=2;return}const e=pn[n.equippedRod],t=h0(e.luckBonus);n.state="casting",n.timer=.8,n.currentFish=t,n.currentSize=0,n.reelProgress=0,n.message="Casting line..."}function c0(n){const e=l.fishing;if(e.messageTimer>0&&(e.messageTimer-=n,e.messageTimer<=0&&(e.message="")),e.state==="casting")e.timer-=n,e.timer<=0&&(e.state="waiting",e.timer=1.5+Math.random()*3,e.message="Waiting for a bite...");else if(e.state==="waiting"){if(e.timer-=n,e.timer<=0){e.state="bite",e.biteTimer=4+Math.random()*3,e.reelProgress=0;const t=pn[e.equippedRod];if(Math.random()<t.catchRate){const s=e.currentFish,r=s.minSize+(s.maxSize-s.minSize)*(.4+Math.random()*.6);e.currentSize=Math.round(r*10)/10,e.message="BITE! Mash SPACE to reel!"}else e.currentSize=0,e.message="BITE! Mash SPACE!"}}else if(e.state==="bite")if(e.biteTimer-=n,e.reelProgress-=e.reelDecay*n,e.reelProgress<0&&(e.reelProgress=0),l.keys[" "]&&!l.prev[" "]&&(e.reelProgress+=.12+pn[e.equippedRod].catchRate*.08,e.reelProgress>1&&(e.reelProgress=1)),e.reelProgress>=1&&e.currentSize>0){let t=e.currentFish;const i=e.lastCaughtFish;e.lastCaughtFish=t.name,t.name==="Gay Fish"&&i==="Gay Fish"&&(t={id:99,name:"Mega Gay Fish",rarity:"legendary",minSize:5,maxSize:12,value:999,color:"#ff00ff"},e.lastCaughtFish="Mega Gay Fish",Fn("mega_gay_fish")),t.name==="Gay Fish"&&Fn("gay_fish"),t.name==="Baby Eel"&&Fn("baby_eel"),t.name==="Rubber Duck"&&Fn("rubber_duck"),t.name==="Golden Boot"&&Fn("golden_boot"),t.name==="Kraken"&&Fn("kraken"),e.caughtFish[t.name]||(e.caughtFish[t.name]={count:0,bestSize:0}),e.caughtFish[t.name].count++,e.currentSize>e.caughtFish[t.name].bestSize&&(e.caughtFish[t.name].bestSize=e.currentSize);const s=Math.round(t.value*(e.currentSize/t.maxSize));e.tank.push({fish:t,size:e.currentSize,value:s}),e.state="caught",e.timer=2.5;const r={"Gay Fish":"🌈 Gay Fish! "+e.currentSize+"cm → tank 🌈","Mega Gay Fish":"🌈🌈 MEGA GAY FISH!!! "+e.currentSize+"cm → tank 🌈🌈","Baby Eel":"A baby monster eel?! It's cute... for now. "+e.currentSize+"cm → tank","Rubber Duck":"Just a rubber duck. "+e.currentSize+"cm → tank","Golden Boot":"A golden boot! Fancy. "+e.currentSize+"cm → tank","Ancient Trident":"An ancient trident! "+e.currentSize+"cm → tank","Ghost Fish":"It's... transparent? "+e.currentSize+"cm → tank"};e.message=r[t.name]||t.name+"! "+e.currentSize+"cm → tank"}else e.biteTimer<=0&&(e.state="idle",e.message=e.currentSize>0?"Too slow! It got away!":"It got away...",e.messageTimer=2,e.currentSize=0);else e.state==="caught"&&(e.timer-=n,e.timer<=0&&(e.state="idle",e.message=""));if(e.tank.length>0){if(e.grindTimer-=n,e.grindTimer<=0){e.grindTimer=e.grindRate;const t=e.tank.shift(),i=Math.round(t.value*e.taxRate),s=t.value-i;e.coins+=s,e.totalTax+=i,e.message="Ground "+t.fish.name+" → $"+s+" (taxed $"+i+")",e.messageTimer=2}}else e.grindTimer=0}function h0(n){const e=Xt.map(s=>{const r=r0[s.rarity]||1;return s.rarity==="rare"?r+n*20:s.rarity==="legendary"?r+n*12:r}),t=e.reduce((s,r)=>s+r,0);let i=Math.random()*t;for(let s=0;s<Xt.length;s++)if(i-=e[s],i<=0)return Xt[s];return Xt[0]}function u0(n){const e=pn[n],t=l.fishing;return t.ownedRods.includes(n)?(t.equippedRod=n,!0):t.coins>=e.cost?(t.coins-=e.cost,t.ownedRods.push(n),t.equippedRod=n,!0):!1}function f0(n){const e=Hi[n],t=l.fishing;return t.ownedUpgrades.includes(n)?!1:t.coins>=e.cost?(t.coins-=e.cost,t.ownedUpgrades.push(n),e.speedBonus&&(t.upgrades.speedBonus=Math.max(t.upgrades.speedBonus,e.speedBonus)),e.hasGPS&&(t.upgrades.hasGPS=!0,t.upgrades.gpsRange=Math.max(t.upgrades.gpsRange,e.gpsRange)),!0):!1}function d0(){return Math.round(Object.keys(l.fishing.caughtFish).length/Xt.length*100)}function p0(n){return a0[n]||"#fff"}function m0(){const n=devicePixelRatio||1;l.hudEl.width=innerWidth*n,l.hudEl.height=innerHeight*n,l.hudEl.style.width=innerWidth+"px",l.hudEl.style.height=innerHeight+"px";const e=l.hudCtx;e.setTransform(n,0,0,n,0,0),e.clearRect(0,0,innerWidth,innerHeight),l.state==="MENU"?g0(e,innerWidth,innerHeight):l.state==="SELECT"?_0(e,innerWidth,innerHeight):l.state==="COUNTDOWN"?x0(e,innerWidth,innerHeight):l.state==="RACING"?v0(e,innerWidth,innerHeight):l.state==="RESULTS"?ql(e,innerWidth,innerHeight):l.state==="FREE_ROAM"?M0(e,innerWidth,innerHeight):l.state==="SHOP"?S0(e,innerWidth,innerHeight):l.state==="DEX"?y0(e,innerWidth,innerHeight):l.state==="IRON_LUNG"?E0(e,innerWidth,innerHeight):l.state==="ACHIEVEMENTS"?T0(e,innerWidth,innerHeight):l.state==="UPDATES"&&b0(e,innerWidth,innerHeight)}function g0(n,e,t){const i=.5+.5*Math.sin(performance.now()*.003);n.shadowColor="rgba(0,150,255,0.6)",n.shadowBlur=30,n.fillStyle="#ffffff",n.font="bold 56px Orbitron, monospace",n.textAlign="center",n.fillText("HYDRO",e/2,t*.22),n.font="bold 76px Orbitron, monospace",n.fillText("THUNDER",e/2,t*.32),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.3)",n.font="14px Rajdhani, sans-serif",n.fillText("3D ARCADE RACING & FISHING",e/2,t*.4),n.fillStyle="rgba(255,255,255,"+i+")",n.font="20px Rajdhani, sans-serif",n.fillText("ENTER — Race  |  F — Free Roam  |  A — Achievements  |  U — Updates",e/2,t*.5),n.fillStyle="rgba(255,80,80,"+(.4+.3*Math.sin(performance.now()*.002))+")",n.font="18px Rajdhani, sans-serif",n.fillText("I — IRON LUNG (Secret)",e/2,t*.58),n.fillStyle="rgba(255,255,255,0.2)",n.font="12px Rajdhani, sans-serif",n.fillText("WASD: Steer  |  Space: Turbo  |  E: Stand  |  G: Dive  |  B: Shop  |  D: Dex",e/2,t*.68),n.fillStyle=l.testingMode?"rgba(255,200,0,0.8)":"rgba(255,255,255,0.15)",n.font="13px Rajdhani, sans-serif",n.fillText("T — Testing Mode: "+(l.testingMode?"ON":"OFF"),e/2,t*.78),l.testingMode&&(n.fillStyle="rgba(255,200,0,0.5)",n.font="10px Rajdhani, sans-serif",n.fillText("N: Meg  |  K: Sub44  |  O: Skel  |  P: Hand  |  U: Sub  |  J: Eel  |  C: Cam",e/2,t*.83))}function _0(n,e,t){n.fillStyle="rgba(0,20,40,0.85)",n.fillRect(0,0,e,t),n.fillStyle="#ffffff",n.font="bold 30px Orbitron, monospace",n.textAlign="center",n.fillText("SELECT YOUR BOAT",e/2,t*.05);const i=["SPEED","HANDLING","ACCELERATION"],s=["#ff4444","#44aaff","#44ff88"],r=5,a=3,o=160,c=160,h=16,u=10,f=r*o+(r-1)*h,d=(e-f)/2,g=t*.1;for(let _=0;_<a;_++){const x=g+_*(c+u+18);n.fillStyle=s[_],n.font="bold 13px Orbitron, monospace",n.textAlign="left",n.fillText(i[_],d,x+12);for(let m=0;m<r;m++){const p=_*r+m;if(p>=Zi.length)continue;const E=Zi[p],M=d+m*(o+h),S=x+18,A=p===l.boatIdx;if(n.fillStyle=A?"rgba(0,150,255,0.25)":"rgba(255,255,255,0.05)",n.strokeStyle=A?"#00aaff":"rgba(255,255,255,0.12)",n.lineWidth=A?2:1,n.fillRect(M,S,o,c),n.strokeRect(M,S,o,c),l.boatThumbnails[p]){const R=new Image;R.src=l.boatThumbnails[p],n.save(),n.beginPath(),n.rect(M+4,S+4,o-8,c-52),n.clip(),n.drawImage(R,M+4,S+4,o-8,c-52),n.restore()}else n.fillStyle="#"+E.color.toString(16).padStart(6,"0"),n.fillRect(M+30,S+20,o-60,40);n.fillStyle="#fff",n.font="bold 11px Rajdhani, sans-serif",n.textAlign="center",n.fillText(E.name,M+o/2,S+c-38),n.fillStyle="rgba(255,255,255,0.4)",n.font="9px Rajdhani, sans-serif",n.fillText("SPD "+E.maxSpd+"  ACC "+E.accel+"  HDL "+Math.round(E.turn*1e3),M+o/2,S+c-22),n.fillText("Jets: "+E.nozzles+"  Fin: "+Math.round(E.finScale*100)+"%  "+(E.hull||"standard"),M+o/2,S+c-10)}}n.fillStyle="rgba(255,255,255,"+(.4+.3*Math.sin(performance.now()*.003))+")",n.font="14px Rajdhani, sans-serif",n.textAlign="center",n.fillText("← ↑ → ↓ Select  |  ENTER Confirm",e/2,t*.95)}function x0(n,e,t){if(l.countVal<0)return;const i=l.countVal>0?String(l.countVal):"GO!";let s=1;const r=l.countTimer;l.countVal>0?s=r<.15?r/.15:r>.85?0:1:s=r<.15?r/.15:r>.6?(.8-r)/.2:1,!(s<=0)&&(n.save(),n.globalAlpha=s,n.shadowColor="rgba(255,255,255,0.8)",n.shadowBlur=20,n.fillStyle="#ffffff",n.font="bold 110px Orbitron, monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e/2,t*.38),n.restore())}function v0(n,e,t){if(!l.pBoat)return;const i=l.pBoat,s=i.speed/i.maxSpd,r=e*.11,a=t-80,o=45;n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=3,n.beginPath(),n.arc(r,a,o,Math.PI*.75,Math.PI*2.25),n.stroke(),n.strokeStyle=s>.8?"#ff4444":s>.5?"#ffaa00":"#00ccff",n.lineWidth=4,n.lineCap="round",n.beginPath(),n.arc(r,a,o,Math.PI*.75,Math.PI*.75+s*Math.PI*1.5),n.stroke(),n.fillStyle="#fff",n.font="bold 20px Orbitron, monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(Math.round(i.speed*1.4),r,a-3),n.fillStyle="rgba(255,255,255,0.4)",n.font="8px Orbitron, monospace",n.fillText("MPH",r,a+16);const c=e*.11,h=t-135;n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(c-35,h,70,8);const u=Math.min(1,i.turboCharges/10);u>0&&(n.fillStyle=i.turboActive?"#ffcc00":"#ff8800",n.shadowColor="rgba(255,130,0,0.5)",n.shadowBlur=6,n.fillRect(c-35+2,h+1,66*u,6)),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.4)",n.font="7px Orbitron, monospace",n.fillText("TURBO",c,h-4),n.fillStyle="#fff",n.font="bold 26px Orbitron, monospace",n.textAlign="right",n.textBaseline="top",n.fillText("LAP "+Math.min(i.lap+1,3)+"/3",e-20,20),n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.fillText(i.name,e-20,52);const f=[{name:i.name,t:i.t,lap:i.lap,col:"#00ccff",me:!0}];l.aiList.forEach(p=>f.push({name:p.name,t:p.t,lap:p.lap,col:"#"+p.color.toString(16).padStart(6,"0"),me:!1})),f.sort((p,E)=>E.lap!==p.lap?E.lap-p.lap:E.t-p.t);const d=e-20,g=72;n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(d-175,g-5,190,f.length*20+5),f.forEach((p,E)=>{const M=g+E*20,S=["1ST","2ND","3RD"][E]||E+1+"TH";n.fillStyle=p.me?"#00ccff":"rgba(255,255,255,0.4)",n.font="9px Orbitron, monospace",n.textAlign="right",n.fillText(S,d-5,M+3),n.fillStyle=p.me?"#00ccff":p.col,n.font=(p.me?"bold ":"")+"12px Rajdhani, sans-serif",n.fillText((p.me?">":" ")+p.name,d-10,M+3)});const _=Math.floor(l.raceTime/60),x=Math.floor(l.raceTime%60),m=Math.floor(l.raceTime%1*100);n.fillStyle="rgba(255,255,255,0.5)",n.font="13px Orbitron, monospace",n.textAlign="center",n.textBaseline="bottom",n.fillText(_+":"+(x<10?"0":"")+x+"."+(m<10?"0":"")+m,e/2,t-10),i.finished&&(n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(0,0,e,t),n.shadowColor="rgba(0,200,255,0.5)",n.shadowBlur=20,n.fillStyle="#ffffff",n.font="bold 52px Orbitron, monospace",n.textAlign="center",n.textBaseline="middle",n.fillText("FINISH!",e/2,t*.35),n.shadowBlur=0,n.font="22px Rajdhani, sans-serif",n.fillText("Time: "+_+":"+(x<10?"0":"")+x+"."+(m<10?"0":"")+m,e/2,t*.45)),l.state==="RESULTS"&&ql(n,e,t)}function ql(n,e,t){n.fillStyle="rgba(0,10,20,0.85)",n.fillRect(0,0,e,t),n.shadowColor="rgba(0,150,255,0.5)",n.shadowBlur=15,n.fillStyle="#ffffff",n.font="bold 36px Orbitron, monospace",n.textAlign="center",n.fillText("RACE RESULTS",e/2,t*.1),n.shadowBlur=0;const i=t*.18,s=50,r=[{name:l.pBoat.name,lap:l.pBoat.lap,col:"#00ccff",me:!0}];l.aiList.forEach(a=>r.push({name:a.name,lap:a.lap,col:"#"+a.color.toString(16).padStart(6,"0"),me:!1})),r.sort((a,o)=>o.lap-a.lap),r.forEach((a,o)=>{const c=i+o*s;n.fillStyle=a.me?"rgba(0,150,255,0.15)":"rgba(255,255,255,0.05)",n.fillRect(e*.25,c,e*.5,s-5);const h=["1ST","2ND","3RD","4TH"][o];n.fillStyle=["#ffd700","#c0c0c0","#cd7f32","#888"][o],n.font="bold 18px Orbitron, monospace",n.textAlign="center",n.fillText(h,e*.32,c+s/2),n.fillStyle=a.me?"#00ccff":a.col,n.font=(a.me?"bold ":"")+"16px Rajdhani, sans-serif",n.textAlign="left",n.fillText(a.name,e*.42,c+s/2),n.fillStyle="rgba(255,255,255,0.4)",n.font="13px Rajdhani, sans-serif",n.textAlign="right",n.fillText("Lap "+a.lap+"/3",e*.72,c+s/2)}),n.globalAlpha=.4+.6*Math.sin(performance.now()*.003),n.fillStyle="#fff",n.font="16px Rajdhani, sans-serif",n.textAlign="center",n.fillText("Press ENTER to return",e/2,t*.85),n.globalAlpha=1}function M0(n,e,t){const i=l.fishing,s=pn[i.equippedRod];n.fillStyle="#fff",n.font="bold 16px Orbitron, monospace",n.textAlign="left",n.fillText("$"+i.coins,20,30),n.fillStyle="rgba(255,255,255,0.5)",n.font="12px Rajdhani, sans-serif",n.fillText(s.name,20,50);const r=i.tank.length/i.tankCapacity;if(n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(20,60,120,10),n.fillStyle=i.tank.length>0?"#44aaff":"rgba(255,255,255,0.15)",n.fillRect(20,60,120*r,10),n.fillStyle="rgba(255,255,255,0.5)",n.font="9px Rajdhani, sans-serif",n.fillText("Tank: "+i.tank.length+"/"+i.tankCapacity,20,82),i.tank.length>0&&(n.fillStyle="rgba(255,255,255,0.35)",n.font="9px Rajdhani, sans-serif",n.fillText("Grinding in "+Math.ceil(i.grindTimer*10)/10+"s...",20,96)),l.diving){const a=l.oxygen/l.maxOxygen;n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(e-170,20,150,14),n.fillStyle=a>.3?"#44ccff":"#ff4444",n.fillRect(e-168,22,146*a,10),n.fillStyle="#fff",n.font="bold 10px Orbitron, monospace",n.textAlign="right",n.fillText("O₂ "+Math.ceil(l.oxygen)+"%",e-24,31);const o=Math.sqrt(l.diverPos.x*l.diverPos.x+l.diverPos.z*l.diverPos.z),c=o/l.tetherMaxDist;n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(e-170,40,150,14),n.fillStyle=c<.7?"#44ff88":c<.9?"#ffaa00":"#ff4444",n.fillRect(e-168,42,146*c,10),n.fillStyle="#fff",n.font="bold 10px Orbitron, monospace",n.fillText("Tether "+Math.round(o)+"/"+l.tetherMaxDist+"m",e-24,51),n.fillStyle="rgba(0,40,80,0.6)",n.fillRect(e-170,60,150,18),n.fillStyle="#88ddff",n.font="10px Rajdhani, sans-serif",n.textAlign="right",n.fillText("Loot nearby: "+(l.underwaterLoot?l.underwaterLoot.filter(h=>!h.collected).length:0),e-24,74),l.megalodon&&(n.fillStyle="rgba(180,0,0,0.8)",n.font="bold 18px Orbitron, monospace",n.textAlign="center",n.fillText("! MEGALODON DETECTED !",e/2,t*.15),n.fillStyle="rgba(255,100,100,0.6)",n.font="12px Rajdhani, sans-serif",n.fillText("A massive shadow passes through the deep...",e/2,t*.15+22)),l.giantHand&&(n.fillStyle="rgba(100,0,0,0.9)",n.font="bold 22px Orbitron, monospace",n.textAlign="center",n.fillText("SOMETHING IS GRABBING YOU",e/2,t*.25),n.fillStyle="rgba(200,80,80,0.7)",n.font="13px Rajdhani, sans-serif",n.fillText("A massive hand rises from the abyss...",e/2,t*.25+24))}if(l.megAttack){const a=l.megAttack.phase;n.fillStyle="rgba(180,0,0,0.9)",n.font="bold 28px Orbitron, monospace",n.textAlign="center",a==="spotted"?n.fillText("A MEGALODON HAS SPOTTED YOU!",e/2,t*.2):a==="stalking"?n.fillText("MASH SPACE TO ESCAPE!",e/2,t*.2):a==="charging"?n.fillText("IT'S TOO LATE...",e/2,t*.2):a==="catch"&&n.fillText("YOU HAVE BEEN EATEN.",e/2,t*.2),n.fillStyle="rgba(255,100,100,0.5)",n.font="13px Rajdhani, sans-serif",a==="spotted"?n.fillText("Mash SPACE to swim away!",e/2,t*.2+30):a==="stalking"&&n.fillText("Keep mashing! The beast approaches...",e/2,t*.2+30)}if(i.message){const a=i.state==="caught";n.fillStyle=a?"rgba(0,0,0,0.7)":"rgba(0,0,0,0.5)";const o=Math.min(400,n.measureText(i.message).width+40);if(n.fillRect(e/2-o/2,t*.35,o,36),n.fillStyle=a?"#ffcc00":"#fff",n.font="bold 16px Rajdhani, sans-serif",n.textAlign="center",n.fillText(i.message,e/2,t*.35+24),i.state==="bite"){const u=e/2-100,f=t*.35+44;n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(u,f,200,14),n.fillStyle=i.reelProgress>.7?"#44ff88":i.reelProgress>.3?"#ffcc00":"#ff4444",n.fillRect(u+2,f+2,196*i.reelProgress,10),n.fillStyle="#fff",n.font="bold 10px Orbitron, monospace",n.fillText("MASH SPACE!",e/2,f+14+14)}}n.fillStyle="rgba(255,255,255,0.25)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",l.testingMode&&(n.fillStyle="rgba(255,200,0,0.7)",n.font="bold 10px Orbitron, monospace",n.fillText("TESTING MODE | N: Meg  K: Sub  O: Skel  P: Hand  C: Cam",e/2,t-30)),l.diving?n.fillText("WASD/Arrows: Swim  |  Space: Up  |  Shift: Down  |  G: Surface  |  B: Shop  |  D: Dex",e/2,t-15):l.walkingMode?n.fillText("WASD/Arrows: Walk  |  E: Sit  |  G: Dive  |  F: Fish  |  B: Shop  |  D: Dex",e/2,t-15):n.fillText("WASD/Arrows: Drive  |  E: Stand  |  F: Fish  |  V: POV  |  B: Shop  |  D: Dex",e/2,t-15)}function S0(n,e,t){n.fillStyle="rgba(0,20,40,0.92)",n.fillRect(0,0,e,t),n.fillStyle="#ff6644",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("BAIT & TACKLE",e/2,40),n.fillStyle="rgba(255,255,255,0.2)",n.font="italic 11px Rajdhani, sans-serif",n.fillText("All purchases are 100% tax-free. We definitely pay all our taxes. Wink.",e/2,60);const i=l.fishing;n.fillStyle="#ffcc00",n.font="bold 14px Orbitron, monospace",n.textAlign="left",n.fillText("Your cash: $"+i.coins,40,85);const s=95;["FISHING RODS","BOAT UPGRADES"].forEach((h,u)=>{const d=e/2-190+u*200;n.fillStyle=i.shopTab===u?"rgba(0,150,255,0.3)":"rgba(255,255,255,0.05)",n.fillRect(d,s,180,28),n.strokeStyle=i.shopTab===u?"#00aaff":"rgba(255,255,255,0.15)",n.lineWidth=i.shopTab===u?2:1,n.strokeRect(d,s,180,28),n.fillStyle=i.shopTab===u?"#fff":"rgba(255,255,255,0.4)",n.font="bold 12px Orbitron, monospace",n.textAlign="center",n.fillText(h,d+180/2,s+19)}),n.fillStyle="rgba(255,255,255,0.2)",n.font="10px Rajdhani, sans-serif",n.textAlign="center",n.fillText("TAB to switch",e/2,s+42);const r=40,a=145,o=50;(i.shopTab===0?pn:Hi).forEach((h,u)=>{const f=a+u*o,d=u===i.shopCursor,g=i.shopTab===0?i.ownedRods.includes(u):i.ownedUpgrades.includes(u),_=i.shopTab===0&&u===i.equippedRod;n.fillStyle=d?"rgba(0,150,255,0.2)":"rgba(255,255,255,0.03)",n.fillRect(r,f,e-80,o-4),d&&(n.strokeStyle="#00aaff",n.lineWidth=2,n.strokeRect(r,f,e-80,o-4)),n.fillStyle=_?"#00ccff":g?"#44cc44":"#fff",n.font="bold 13px Rajdhani, sans-serif",n.textAlign="left",n.fillText(h.name+(_?" [EQUIPPED]":g?" [OWNED]":""),r+10,f+17),n.fillStyle="rgba(255,255,255,0.5)",n.font="10px Rajdhani, sans-serif",n.fillText(h.desc,r+10,f+32),n.textAlign="right",i.shopTab===0?(n.fillStyle="rgba(255,255,255,0.4)",n.font="10px Rajdhani, sans-serif",n.fillText("Catch: "+Math.round(h.catchRate*100)+"%  Luck: +"+Math.round(h.luckBonus*100)+"%",r+e-90,f+17)):(n.fillStyle="rgba(255,255,255,0.4)",n.font="10px Rajdhani, sans-serif",n.fillText(h.speedBonus?"Speed: +"+Math.round(h.speedBonus*100)+"%":"GPS Range: "+h.gpsRange+"m",r+e-90,f+17)),g||(n.fillStyle=i.coins>=h.cost?"#ffcc00":"#ff4444",n.font="bold 12px Rajdhani, sans-serif",n.fillText("$"+h.cost,r+e-90,f+32))}),n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",n.fillText("↑↓ Navigate  |  TAB Switch  |  ENTER Buy/Equip  |  B Close",e/2,t-15)}function y0(n,e,t){n.fillStyle="rgba(0,20,40,0.92)",n.fillRect(0,0,e,t),n.fillStyle="#44cc88",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("FISH DEX",e/2,45);const i=d0();n.fillStyle="rgba(255,255,255,0.4)",n.font="13px Rajdhani, sans-serif",n.fillText("Completion: "+i+"%  ("+Object.keys(l.fishing.caughtFish).length+"/"+Xt.length+")",e/2,68);const s=l.fishing,r=40,a=82,o=42,c=Math.max(0,s.dexCursor-10),h=Math.min(Xt.length,c+12);Xt.slice(c,h).forEach((u,f)=>{const d=c+f,g=a+f*o,_=d===s.dexCursor,x=!!s.caughtFish[u.id];if(n.fillStyle=_?"rgba(0,150,255,0.15)":"rgba(255,255,255,0.02)",n.fillRect(r,g,e-80,o-2),_&&(n.strokeStyle="#00aaff",n.lineWidth=1,n.strokeRect(r,g,e-80,o-2)),x&&u.name==="Gay Fish"){const m=performance.now()*.001%1;n.fillStyle=`hsl(${m*360}, 80%, 60%)`}else if(x&&u.name==="Mega Gay Fish"){const m=performance.now()*.002%1;n.fillStyle=`hsl(${m*360}, 100%, 50%)`}else x&&u.name==="Baby Eel"?n.fillStyle="#44ff44":x&&u.name==="Ghost Fish"?n.fillStyle="rgba(200,220,255,0.7)":n.fillStyle=x?p0(u.rarity):"rgba(255,255,255,0.2)";if(n.font="bold 13px Rajdhani, sans-serif",n.textAlign="left",n.fillText(x?u.name:"???",r+10,g+16),x){const m=s.caughtFish[u.id];n.fillStyle="rgba(255,255,255,0.4)",n.font="10px Rajdhani, sans-serif",n.fillText(u.rarity.toUpperCase()+"  |  "+u.minSize+"-"+u.maxSize+"cm  |  $"+u.value,r+10,g+32),n.textAlign="right",n.fillText("Caught: "+m.count+"  Best: "+m.bestSize+"cm",r+e-90,g+16)}else n.fillStyle="rgba(255,255,255,0.15)",n.font="10px Rajdhani, sans-serif",n.fillText(u.rarity.toUpperCase(),r+10,g+32)}),c>0&&(n.fillStyle="rgba(255,255,255,0.3)",n.font="12px Rajdhani, sans-serif",n.textAlign="center",n.fillText("▲ More",e/2,a-5)),h<Xt.length&&(n.fillStyle="rgba(255,255,255,0.3)",n.font="12px Rajdhani, sans-serif",n.textAlign="center",n.fillText("▼ More",e/2,a+12*o+12)),n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",n.fillText("↑↓ Scroll  |  D Close",e/2,t-15)}function E0(n,e,t){if(n.fillStyle="rgba(200,0,0,0.15)",n.fillRect(0,0,e,t),n.fillStyle="#ff2200",n.font="bold 22px Orbitron, monospace",n.textAlign="center",n.fillText("IRON LUNG",e/2,30),l.sub){const i=Math.abs(l.sub.position.y);n.fillStyle="#fff",n.font="bold 14px Orbitron, monospace",n.textAlign="left",n.fillText("DEPTH: "+Math.round(i)+"m",20,60),n.fillStyle=l.xrayActive?"#00ff88":"#ff4444",n.fillText("X-RAY: "+(l.xrayActive?"ACTIVE":"OFF"),20,85)}if(l.ironLungState==="found"&&(n.fillStyle="rgba(255,0,0,0.8)",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("THE SKELETON IS ALIVE...",e/2,t*.3)),l.ironLungState==="eaten"&&(n.fillStyle="rgba(255,0,0,0.9)",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("THE BEAST CONSUMED YOU",e/2,t*.3)),l.monsterEel&&(n.fillStyle="rgba(255,0,0,0.9)",n.font="bold 22px Orbitron, monospace",n.textAlign="center",n.fillText("SOMETHING APPROACHES!",e/2,t*.2),n.font="14px Rajdhani, sans-serif",n.fillText("Press ANY KEY to flash the beast!",e/2,t*.2+28)),l.jumpscareTimer>0){const i=l.jumpscareTimer,s=Math.sin(i*20)*.3+.5;n.fillStyle=`rgba(180,0,0,${s})`,n.fillRect(0,0,e,t),n.fillStyle="#ff0000",n.shadowColor="#ff0000",n.shadowBlur=40,n.font="bold 40px Orbitron, monospace",n.textAlign="center",n.fillText("👀",e/2-80,t*.35),n.fillText("👀",e/2+80,t*.35),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.9)",n.font="bold 14px Orbitron, monospace",n.fillText("Press ANY KEY to flash!",e/2,t*.55);const r=(Math.random()-.5)*20,a=(Math.random()-.5)*20;n.setTransform(1,0,0,1,r,a)}else n.setTransform(1,0,0,1,0,0);if(l.xrayActive){n.fillStyle="rgba(0,255,100,0.1)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(0,255,100,0.05)",n.lineWidth=1;for(let i=0;i<t;i+=3)n.beginPath(),n.moveTo(0,i),n.lineTo(e,i),n.stroke()}n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",n.fillText("WASD: Move  |  Space/Shift: Up/Down  |  X: X-Ray  |  ESC: Exit",e/2,t-15)}function T0(n,e,t){n.fillStyle="rgba(0,20,40,0.92)",n.fillRect(0,0,e,t),n.fillStyle="#ffcc00",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("ACHIEVEMENTS",e/2,45);const i=l.achievements?Object.keys(l.achievements).length:0;n.fillStyle="rgba(255,255,255,0.4)",n.font="13px Rajdhani, sans-serif",n.fillText(i+"/"+Xr.length+" Unlocked",e/2,68);const s=e*.15,r=85,a=42;Xr.forEach((o,c)=>{const h=r+c*a,u=l.achievements&&l.achievements[o.id];n.fillStyle=u?"rgba(255,200,0,0.12)":"rgba(255,255,255,0.02)",n.fillRect(s,h,e*.7,a-4),u&&(n.strokeStyle="rgba(255,200,0,0.3)",n.lineWidth=1,n.strokeRect(s,h,e*.7,a-4)),n.fillStyle=u?"#ffcc00":"rgba(255,255,255,0.15)",n.font="bold 13px Rajdhani, sans-serif",n.textAlign="left",n.fillText(u?o.name:"???",s+12,h+16),n.fillStyle=u?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.1)",n.font="10px Rajdhani, sans-serif",n.fillText(u?o.desc:"Locked",s+12,h+30)}),n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",n.fillText("A Close",e/2,t-15)}function b0(n,e,t){n.fillStyle="rgba(0,20,40,0.92)",n.fillRect(0,0,e,t),n.fillStyle="#44ccff",n.font="bold 28px Orbitron, monospace",n.textAlign="center",n.fillText("UPDATE LOG",e/2,45);const i=[{version:"1.0",date:"Day 1",items:["Initial release","Racing mode with 5 boats","Track with boosts and ramps","AI opponents","HUD with speed/lap/timer"]},{version:"1.1",date:"Day 1",items:["Modular file structure","Boost pickups with yellow/red variants","Jet flame visual effects","Free roam ocean mode"]},{version:"1.2",date:"Day 2",items:["15 unique boats across 3 tiers","Boat upgrades shop","Fish Dex system","Achievement system","Testing mode"]},{version:"1.3",date:"Day 2",items:["Iron Lung secret mode","Submarine with X-ray camera","Monster eel boss fight","Blood ocean effect"]},{version:"1.4",date:"Day 3",items:["Fishing with space mashing","Gay Fish + Mega Gay Fish easter egg","Baby Eel catch","Treasure chests underwater","Giant hand grab event"]},{version:"1.5",date:"Day 3",items:["Visible fishing rod","Reel progress bar","Open ocean with islands","Scuba diving with oxygen","Sharks underwater"]}],s=e*.1,r=70,a=65;i.forEach((o,c)=>{const h=r+c*a;n.fillStyle="rgba(0,150,255,0.08)",n.fillRect(s,h,e*.8,a-4),n.fillStyle="#44ccff",n.font="bold 14px Orbitron, monospace",n.textAlign="left",n.fillText("v"+o.version,s+10,h+18),n.fillStyle="rgba(255,255,255,0.4)",n.font="11px Rajdhani, sans-serif",n.textAlign="right",n.fillText(o.date,s+e*.8-10,h+18),n.fillStyle="rgba(255,255,255,0.6)",n.font="11px Rajdhani, sans-serif",n.textAlign="left",o.items.forEach((u,f)=>{n.fillText("• "+u,s+15,h+32+f*14)})}),n.fillStyle="rgba(255,255,255,0.3)",n.font="11px Rajdhani, sans-serif",n.textAlign="center",n.fillText("U Close",e/2,t-15)}var pi=null;function w0(){pi||(pi=new $r({antialias:!0,alpha:!0}),pi.setPixelRatio(2)),Zi.forEach((n,e)=>{const t=new Rl;t.background=new Ve(1122867),t.add(new Hl(8956620,.6));const i=new Gl(16774368,2);i.position.set(5,8,5),t.add(i),t.add(new kl(8965375,3364147,.5));const s=aa(n.color,n.accent,n.nozzles,n.finScale,n.hull);s.matrixAutoUpdate=!0,t.add(s);const r=new zt(35,1.2,.1,100);r.position.set(3,2.5,5),r.lookAt(-1,.2,0),pi.setSize(240,200),pi.render(t,r),l.boatThumbnails[e]=pi.domElement.toDataURL(),t.clear()})}function A0(){const n=document.getElementById("loading-screen");n&&(n.style.opacity="0",setTimeout(()=>n.style.display="none",600))}function R0(){l.hudEl=document.getElementById("hud-canvas"),l.hudCtx=l.hudEl.getContext("2d"),l.scene=new Rl,l.scene.background=new Ve(8900331),l.scene.fog=new yn(10343918,200,2e3),l.cam=new zt(65,innerWidth/innerHeight,.5,4e3),l.ren=new $r({antialias:!0,alpha:!1}),l.ren.setSize(innerWidth,innerHeight),l.ren.setPixelRatio(Math.min(devicePixelRatio,2)),l.ren.shadowMap.enabled=!0,l.ren.shadowMap.type=Qo,l.ren.toneMapping=tl,l.ren.toneMappingExposure=1.3,l.ren.outputColorSpace=Mt,l.ren.setClearColor(8900331,1),document.body.prepend(l.ren.domElement),l.audio=new qm,l.audio.init(),o0(),A0(),document.addEventListener("keydown",t=>{l.keys[t.key]=!0,(t.key==="Enter"||t.key===" ")&&t.preventDefault()}),document.addEventListener("keyup",t=>{l.keys[t.key]=!1}),addEventListener("resize",()=>{l.cam.aspect=innerWidth/innerHeight,l.cam.updateProjectionMatrix(),l.ren.setSize(innerWidth,innerHeight)}),Bm(),Ym(),jm(),Zm(),Jm(),Km(),$m(),w0(),l.displayBoats=[],l.displayStartIdx=[0,873,855,837,820];const n=[{color:16729088,accent:16746496,nz:2,fs:.7,h:"standard"},{color:2263295,accent:6737151,nz:3,fs:1,h:"stealth"},{color:2293606,accent:6750122,nz:3,fs:.8,h:"ufo"},{color:52428,accent:6750207,nz:2,fs:1.2,h:"delta"},{color:17663,accent:4491519,nz:1,fs:.4,h:"catamaran"}],e=[0,-3,3,-6,6];n.forEach((t,i)=>{const s=aa(t.color,t.accent,t.nz,t.fs,t.h),r=l.trackPts[l.displayStartIdx[i]];s.position.copy(r.pos),s.position.add(r.right.clone().multiplyScalar(e[i])),s.position.y=r.pos.y+.3,s.rotation.y=Math.atan2(-r.tan.z,r.tan.x),s.visible=!1,l.scene.add(s),l.displayBoats.push(s)}),l.state="MENU",l.lastTime=performance.now(),requestAnimationFrame(Yl)}function C0(n){l.pBoat=Vo(n,0,0,0,!0),l.aiList=[];const e=Zi.filter((t,i)=>i!==l.boatIdx);for(let t=0;t<3;t++){const i=e[t%e.length],s=Vo(i,.97-t*.02,(t-1)*2,15+t*3,!1);l.aiList.push(s)}l.boostObjs.forEach(t=>{t.userData.collected=!1,t.visible=!0}),l.raceTime=0,l.camShake=0,l.countVal=4,l.countTimer=.001,l.countDone=!1,l.state="COUNTDOWN",l.audio.stopMusic()}function P0(){l.underwaterLoot=[];const n=[{name:"Gold Nugget",value:75,color:"#ffcc00"},{name:"Old Coin",value:40,color:"#cc8844"},{name:"Scrap Metal",value:15,color:"#888888"},{name:"Coral",value:10,color:"#ff6644"},{name:"Pearl",value:100,color:"#eeeeff"},{name:"Anchor",value:50,color:"#555555"},{name:"Seaweed",value:5,color:"#44aa44"},{name:"Old Boot",value:3,color:"#664422"}];for(let e=0;e<25;e++){const t=n[Math.floor(Math.random()*n.length)],i=Math.random()*Math.PI*2,s=3+Math.random()*22,r=t.name==="Pearl"?new Ke(.2,8,6):t.name==="Anchor"?new Ne(.15,.25,.8,6):new na(.25+Math.random()*.2),a=new be({color:t.color,emissive:t.color,emissiveIntensity:.4,roughness:.4,metalness:.3}),o=new z(r,a),c=l.pBoat.pos.x,h=l.pBoat.pos.z,u=l.pBoat.pos.y;o.position.set(c+Math.cos(i)*s,u-2-Math.random()*12,h+Math.sin(i)*s),l.scene.add(o),l.underwaterLoot.push({mesh:o,lootType:t,size:1+Math.random()*4,value:t.value,collected:!1})}}function Yl(n){const e=Math.min((n-l.lastTime)/1e3,.05);l.lastTime=n,L0(e),l.ren.render(l.scene,l.cam),m0();for(const t in l.keys)l.prev[t]=l.keys[t];requestAnimationFrame(Yl)}function L0(n){const e=performance.now()*.001;switch(l.displayBoats&&l.displayBoats.forEach(t=>{t.visible=!1}),l.state){case"MENU":if((pe("Enter")||pe(" "))&&(l.state="SELECT",l.audio.sfx("select")),pe("f")||pe("F")){l.state="FREE_ROAM",l.pov="first";const r=Gm();l.scene.add(r),l.pBoat={mesh:r,pos:new D(0,0,0),heading:0,speed:0,maxSpd:40,baseMaxSpd:40,accel:.8,turnSpeed:.04,throttle:0,steer:0},l.walkingMode=!1,l.walkPos={x:0,z:0},l.diving=!1,l.oxygen=100,l.maxOxygen=100,l.oxygenDepleteRate=3.33,l.diverPos={x:0,y:-2,z:0},l.diverSpeed=5,l.tetherMaxDist=25,l.diverMesh=null,l.underwaterLoot=[],l.megalodon=null,l.megalodonMsg="",l.giantHand=null,l.hasMegalodonSkeleton=!1,l.megalodonSkeletonPos=null,l.skeletonSeen=!1,l.hasSub44=!1,l.sub44Seen=!1,l.sub44Pos=null,l.aiList=[],Cs(!0),l.testingMode?(l.scene.background=new Ve(1714746),l.scene.fog=new yn(1714746,200,600),l.testGround||(l.testGround=new z(new Yn(500,500,10,10),new be({color:5592422,roughness:.9})),l.testGround.rotation.x=-Math.PI/2,l.testGround.position.y=-.5,l.testGround.receiveShadow=!0,l.scene.add(l.testGround)),l.testGround.visible=!0,l.waterMesh&&(l.waterMesh.visible=!1)):(Qm(),jo(),l.testGround&&(l.testGround.visible=!1),l.waterMesh&&(l.waterMesh.visible=!0)),l.audio.sfx("go")}(pe("t")||pe("T"))&&(l.testingMode=!l.testingMode,l.audio.sfx("select")),(pe("a")||pe("A"))&&(l.state="ACHIEVEMENTS",l.audio.sfx("select")),(pe("u")||pe("U"))&&(l.state="UPDATES",l.audio.sfx("select")),(pe("i")||pe("I"))&&(l.state="IRON_LUNG",l.sub=Jo(),l.sub.position.set(400,-5,400),l.subHeading=0,l.scene.add(l.sub),l.scene.background=new Ve(3342336),l.scene.fog=new yn(3342336,5,80),l.waterMesh&&l.waterMesh.material.color.setHex(8912896),Cs(!0),jo(),l.skeletonTarget=Wr(),l.skeletonTarget.position.set(400+(Math.random()-.5)*200,-48,400+(Math.random()-.5)*200),l.scene.add(l.skeletonTarget),l.monsterEel=null,l.eelSpawnTimer=15+Math.random()*20,l.eelFlashed=!1,l.xrayActive=!1,l.ironLungState="playing",l.jumpscareTimer=0,l.audio.sfx("go")),l.displayBoats&&l.displayBoats.forEach((r,a)=>{r.visible=!0;const o=l.trackPts[l.displayStartIdx[a]];r.position.y=o.pos.y+.3+Math.sin(e*1.5+a*1.2)*.2});const t=l.trackPts[0];l.cam.position.copy(t.pos.clone().add(t.right.clone().multiplyScalar(40)).add(new D(0,18,0))),l.cam.lookAt(t.pos);break;case"FREE_ROAM":if(!l.pBoat)break;if(pe("Escape")){if(l.megAttack){l.megAttack.meg&&l.scene.remove(l.megAttack.meg),l.megAttack=null,l.pBoat.pos.set(400,0,400),l.pBoat.heading=0,l.pBoat.speed=0,l.pBoat.mesh.visible=!0,Oi(l.pBoat),l.fishing.message="You escaped the Megalodon!",l.fishing.messageTimer=3;break}l.state="MENU",l.pov="third",l.diverMesh&&(l.scene.remove(l.diverMesh),l.diverMesh=null),l.underwaterLoot&&(l.underwaterLoot.forEach(r=>l.scene.remove(r.mesh)),l.underwaterLoot=[]),l.megalodon&&(l.scene.remove(l.megalodon),l.megalodon=null),l.giantHand&&(l.scene.remove(l.giantHand),l.giantHand=null),l.islands&&(l.islands.forEach(r=>l.scene.remove(r)),l.islands=[]),l.oceanFloor&&(l.scene.remove(l.oceanFloor),l.oceanFloor=null),l.testGround&&(l.testGround.visible=!1),l.waterMesh&&(l.waterMesh.visible=!0),Cs(!1),l.scene.remove(l.pBoat.mesh),l.pBoat=null;break}if((pe("v")||pe("V"))&&(l.pov=l.pov==="first"?"third":"first",l.audio.sfx("select")),(pe("e")||pe("E"))&&(l.diving?(l.diving=!1,l.diverMesh&&(l.scene.remove(l.diverMesh),l.diverMesh=null),l.walkingMode=!0,l.walkPos={x:0,z:0}):l.walkingMode?l.walkingMode=!1:(l.walkingMode=!0,l.walkPos={x:0,z:0}),l.audio.sfx("select")),(pe("g")||pe("G"))&&(l.diving?(l.diving=!1,l.diverMesh&&(l.scene.remove(l.diverMesh),l.diverMesh=null),l.underwaterLoot&&(l.underwaterLoot.forEach(r=>l.scene.remove(r.mesh)),l.underwaterLoot=[])):l.diving||(l.diving=!0,l.oxygen=l.maxOxygen,l.diverPos={x:0,y:-2,z:0},l.diverMesh=Vm(),l.scene.add(l.diverMesh),l.walkingMode=!1,(!l.underwaterLoot||l.underwaterLoot.length===0)&&P0()),l.audio.sfx("splash")),pe("b")||pe("B")){l.state="SHOP",l.audio.sfx("select");break}if(pe("d")||pe("D")){l.state="DEX",l.audio.sfx("select");break}if((pe("f")||pe("F"))&&l.fishing.state==="idle"&&!l.diving&&Math.abs(l.pBoat.speed)<3&&(l0(),l.audio.sfx("splash")),l.testingMode){if((pe("n")||pe("N"))&&(Yo(l.pBoat.pos),l.fishing.message="MEGALODON SPAWNED",l.fishing.messageTimer=2),pe("k")||pe("K")){const r=Xl(),a=l.pBoat.heading;r.position.set(l.pBoat.pos.x+Math.cos(a)*20,-47,l.pBoat.pos.z-Math.sin(a)*20),r.rotation.y=a,l.scene.add(r),l.fishing.message="SUBMARINE 44 SPAWNED",l.fishing.messageTimer=2}if((pe("c")||pe("C"))&&(l.freeCam=!l.freeCam,l.freeCam&&(l.freeCamEuler=new Ei(0,0,0,"YXZ"),l.freeCamEuler.y=l.pBoat.heading),l.fishing.message=l.freeCam?"FREE CAM ON - WASD+Arrows":"FREE CAM OFF",l.fishing.messageTimer=2),pe("o")||pe("O")){const r=Wr(),a=l.pBoat.heading;r.position.set(l.pBoat.pos.x+Math.cos(a)*15,-48,l.pBoat.pos.z-Math.sin(a)*15),r.rotation.y=a+Math.PI,l.scene.add(r),l.fishing.message="MEGALODON SKELETON SPAWNED",l.fishing.messageTimer=2}if((pe("p")||pe("P"))&&(Zo(l.diving?l.diverPos:{x:0,y:-2,z:0}),l.fishing.message="GIANT HAND SPAWNED",l.fishing.messageTimer=2),pe("u")||pe("U")){const r=Jo(),a=l.pBoat.heading;r.position.set(l.pBoat.pos.x+Math.cos(a)*15,-5,l.pBoat.pos.z-Math.sin(a)*15),r.rotation.y=a,l.scene.add(r),l.fishing.message="DETAILED SUBMARINE SPAWNED",l.fishing.messageTimer=2}if(pe("j")||pe("J")){const r=Ko(),a=l.pBoat.heading;r.position.set(l.pBoat.pos.x+Math.cos(a)*30,-8,l.pBoat.pos.z-Math.sin(a)*30),r.rotation.y=a+Math.PI,l.scene.add(r),l.fishing.message="MONSTER EEL SPAWNED",l.fishing.messageTimer=2}}if(l.freeCam){const r=(l.keys.Shift||l.keys.shift?40:20)*n,a=1.5*n;l.freeCamEuler||(l.freeCamEuler=new Ei(0,0,0,"YXZ")),l.keys.ArrowLeft&&(l.freeCamEuler.y+=a),l.keys.ArrowRight&&(l.freeCamEuler.y-=a),l.keys.ArrowUp&&(l.freeCamEuler.x=Math.max(-Math.PI/2,l.freeCamEuler.x-a)),l.keys.ArrowDown&&(l.freeCamEuler.x=Math.min(Math.PI/2,l.freeCamEuler.x+a));const o=new D(0,0,-1).applyEuler(l.freeCamEuler),c=new D(1,0,0).applyEuler(l.freeCamEuler);l.keys.w&&l.cam.position.add(o.clone().multiplyScalar(r)),l.keys.s&&l.cam.position.add(o.clone().multiplyScalar(-r)),l.keys.a&&l.cam.position.add(c.clone().multiplyScalar(-r)),l.keys.d&&l.cam.position.add(c.clone().multiplyScalar(r)),l.keys[" "]&&(l.cam.position.y+=r),l.cam.rotation.copy(l.freeCamEuler);break}if(l.diving){l.oxygen-=l.oxygenDepleteRate*n,l.oxygen<=0&&(l.oxygen=0,l.diving=!1,l.diverMesh&&(l.scene.remove(l.diverMesh),l.diverMesh=null),l.underwaterLoot&&(l.underwaterLoot.forEach(f=>l.scene.remove(f.mesh)),l.underwaterLoot=[]));const r=l.pBoat.heading,a=Math.cos(r),o=Math.sin(r),c=l.diverSpeed*n;(l.keys.w||l.keys.ArrowUp)&&(l.diverPos.x+=a*c,l.diverPos.z-=o*c),(l.keys.s||l.keys.ArrowDown)&&(l.diverPos.x-=a*c,l.diverPos.z+=o*c),(l.keys.a||l.keys.ArrowLeft)&&(l.diverPos.x-=o*c,l.diverPos.z-=a*c),(l.keys.d||l.keys.ArrowRight)&&(l.diverPos.x+=o*c,l.diverPos.z+=a*c),l.keys[" "]&&(l.diverPos.y+=c),(l.keys.Shift||l.keys.shift)&&(l.diverPos.y-=c);const h=Math.sqrt(l.diverPos.x*l.diverPos.x+l.diverPos.z*l.diverPos.z);if(h>l.tetherMaxDist){const f=l.tetherMaxDist/h;l.diverPos.x*=f,l.diverPos.z*=f}if(l.diverPos.y=Math.max(-50,Math.min(-.5,l.diverPos.y)),l.diverMesh&&(l.diverMesh.position.set(l.pBoat.pos.x+l.diverPos.x,l.pBoat.pos.y+l.diverPos.y,l.pBoat.pos.z+l.diverPos.z),l.diverMesh.rotation.y=r,l.diverMesh.rotation.x=l.keys[" "]?-.5:l.keys.Shift||l.keys.shift?.5:0),l.underwaterLoot)for(let f=l.underwaterLoot.length-1;f>=0;f--){const d=l.underwaterLoot[f];if(d.collected)continue;const g=l.pBoat.pos.x+l.diverPos.x,_=l.pBoat.pos.y+l.diverPos.y,x=l.pBoat.pos.z+l.diverPos.z,m=g-d.mesh.position.x,p=_-d.mesh.position.y,E=x-d.mesh.position.z;m*m+p*p+E*E<2.25&&(d.collected=!0,d.mesh.visible=!1,l.fishing.tank.push({fish:d.lootType,size:d.size,value:d.value}),l.fishing.message=d.lootType.name+"! → tank",l.fishing.messageTimer=2,l.audio.sfx("pickup"))}if(Math.random()<.001*n&&!l.megalodon&&(Yo(l.pBoat.pos),l.megalodonMsg="MEGALODON DETECTED",l.fishing.message="MEGALODON DETECTED",l.fishing.messageTimer=4),Math.random()<.002*n&&!l.giantHand&&(Zo(l.diverPos),l.fishing.message="Something is grabbing you!",l.fishing.messageTimer=3),i0(n)==="pulled"&&(l.diving=!1,l.diverMesh&&(l.scene.remove(l.diverMesh),l.diverMesh=null),l.underwaterLoot&&(l.underwaterLoot.forEach(f=>l.scene.remove(f.mesh)),l.underwaterLoot=[]),l.megalodon&&(l.scene.remove(l.megalodon),l.megalodon=null),l.walkingMode=!0,l.walkPos={x:0,z:0},l.fishing.message="A giant hand pulled you back to the boat!",l.fishing.messageTimer=3),l.hasMegalodonSkeleton&&l.megalodonSkeletonPos&&!l.skeletonSeen){const f=l.pBoat.pos.x+l.diverPos.x-l.megalodonSkeletonPos.x,d=l.pBoat.pos.z+l.diverPos.z-l.megalodonSkeletonPos.z;f*f+d*d<900&&(l.skeletonSeen=!0,l.fishing.message="A massive Megalodon skeleton... incredible!",l.fishing.messageTimer=4)}if(l.hasSub44&&l.sub44Pos&&!l.sub44Seen){const f=l.pBoat.pos.x+l.diverPos.x-l.sub44Pos.x,d=l.pBoat.pos.z+l.diverPos.z-l.sub44Pos.z;f*f+d*d<625&&(l.sub44Seen=!0,l.fishing.message="A torn-open submarine... the number 44 is barely visible.",l.fishing.messageTimer=5)}e0(n)}else if(l.walkingMode){const r=l.pBoat.heading,a=Math.cos(r),o=Math.sin(r),c=3*n;(l.keys.w||l.keys.ArrowUp)&&(l.walkPos.x+=a*c,l.walkPos.z-=o*c),(l.keys.s||l.keys.ArrowDown)&&(l.walkPos.x-=a*c,l.walkPos.z+=o*c),(l.keys.a||l.keys.ArrowLeft)&&(l.walkPos.x-=o*c,l.walkPos.z-=a*c),(l.keys.d||l.keys.ArrowRight)&&(l.walkPos.x+=o*c,l.walkPos.z+=a*c),l.walkPos.x=Math.max(-2.3,Math.min(2.3,l.walkPos.x)),l.walkPos.z=Math.max(-1.3,Math.min(1.3,l.walkPos.z)),Oi(l.pBoat)}else l.pBoat.maxSpd=l.pBoat.baseMaxSpd*(1+(l.fishing.upgrades?l.fishing.upgrades.speedBonus:0)),l.pBoat.throttle=0,(l.keys.ArrowUp||l.keys.w)&&(l.pBoat.throttle=1),(l.keys.ArrowDown||l.keys.s)&&(l.pBoat.throttle=-1),l.pBoat.steer=0,(l.keys.ArrowLeft||l.keys.a)&&(l.pBoat.steer-=1),(l.keys.ArrowRight||l.keys.d)&&(l.pBoat.steer+=1),Hm(l.pBoat,n),l.islands&&l.islands.forEach(r=>{const a=l.pBoat.pos.x-r.position.x,o=l.pBoat.pos.z-r.position.z,c=Math.sqrt(a*a+o*o),h=r.userData.radius;c<h&&c>0&&(l.pBoat.pos.x+=a/c*(h-c),l.pBoat.pos.z+=o/c*(h-c),l.pBoat.speed*=.85)}),Oi(l.pBoat);if((pe("m")||pe("M"))&&!l.megAttack&&l.diving&&(l.megAttack={phase:"spotted",timer:0,meg:null,redAlpha:0},l.fishing.message="A MEGALODON HAS SPOTTED YOU! SWIM!",l.fishing.messageTimer=3),l.megAttack){const r=l.megAttack;r.timer+=n;const a=new D(l.pBoat.pos.x+l.diverPos.x,l.pBoat.pos.y+l.diverPos.y,l.pBoat.pos.z+l.diverPos.z),o=!!(l.keys.w||l.keys.ArrowUp||l.keys.s||l.keys.ArrowDown||l.keys.a||l.keys.ArrowLeft||l.keys.d||l.keys.ArrowRight||l.keys[" "]||l.keys.Shift);if(r.phase==="spotted"){if(!r.meg){r.meg=Wl();const c=Math.random()*Math.PI*2;r.meg.position.set(l.pBoat.pos.x+Math.cos(c)*60,-15,l.pBoat.pos.z+Math.sin(c)*60),l.scene.add(r.meg)}r.redAlpha=Math.max(0,r.redAlpha-n*.5),r.timer>3&&(r.phase="stalking",r.timer=0)}else if(r.phase==="stalking"){const c=r.meg.position.distanceTo(a),h=a.clone().sub(r.meg.position).normalize();r.meg.position.add(h.multiplyScalar(2*n)),r.meg.lookAt(a),r.redAlpha=Math.max(0,1-c/60),(c<10||!o&&r.timer>5)&&(r.phase="charging",r.timer=0)}else if(r.phase==="charging"){const c=a.clone().sub(r.meg.position).normalize();r.meg.position.add(c.multiplyScalar(45*n)),r.meg.lookAt(a),r.redAlpha=1,r.meg.position.distanceTo(a)<3&&(r.phase="catch",r.timer=0)}else r.phase==="catch"?(l.pBoat.pos.y-=n*4,r.meg.position.copy(l.pBoat.pos),r.meg.position.y-=3,l.camShake=Math.max(l.camShake,2),Oi(l.pBoat),r.timer>5&&(r.phase="destroying",r.timer=0)):r.phase==="destroying"?(l.pBoat.mesh.visible=!1,r.meg.position.x+=n*30*Math.cos(r.meg.rotation.y),r.meg.position.z-=n*30*Math.sin(r.meg.rotation.y),l.camShake=Math.max(l.camShake,2.5),r.timer>4&&(r.phase="respawning",r.timer=0)):r.phase==="respawning"&&(l.scene.remove(r.meg),l.megAttack=null,l.pBoat.pos.set(400,0,400),l.pBoat.heading=0,l.pBoat.speed=0,l.pBoat.mesh.visible=!0,Oi(l.pBoat),l.fishing.message="You barely survived a Megalodon attack!",l.fishing.messageTimer=4);if(r.phase==="stalking"&&pe(" ")){const c=r.meg.position.clone().sub(a).normalize();r.meg.position.add(c.multiplyScalar(8))}l.megAttack&&r.phase!=="respawning"&&(l.cam.position.lerp(a.clone().add(new D(0,8,15)),n*3),l.cam.lookAt(a))}c0(n),Wo(),Xo(e),qo(e),Cr(l.pBoat,n);break;case"SHOP":if(pe("b")||pe("B")||pe("Escape")){l.state="FREE_ROAM",l.audio.sfx("select");break}if(pe("Tab")){l.fishing.shopTab=(l.fishing.shopTab+1)%2,l.fishing.shopCursor=0,l.audio.sfx("select");break}if(l.fishing.shopTab===0){if(pe("ArrowUp")&&(l.fishing.shopCursor=(l.fishing.shopCursor-1+pn.length)%pn.length,l.audio.sfx("select")),pe("ArrowDown")&&(l.fishing.shopCursor=(l.fishing.shopCursor+1)%pn.length,l.audio.sfx("select")),pe("Enter")||pe(" "))if(u0(l.fishing.shopCursor))l.audio.sfx("pickup");else if(l.fishing.ownedRods.includes(l.fishing.shopCursor))l.fishing.message="Already owned!",l.fishing.messageTimer=2;else{const r=["Insufficient currency, captain!","Your wallet weeps, sailor!","Not enough doubloons!","The ocean laughs at your poverty!","Even the crabs have more money!"];l.fishing.message=r[Math.floor(Math.random()*r.length)],l.fishing.messageTimer=2,l.audio.sfx("crash")}}else if(pe("ArrowUp")&&(l.fishing.shopCursor=(l.fishing.shopCursor-1+Hi.length)%Hi.length,l.audio.sfx("select")),pe("ArrowDown")&&(l.fishing.shopCursor=(l.fishing.shopCursor+1)%Hi.length,l.audio.sfx("select")),pe("Enter")||pe(" "))if(f0(l.fishing.shopCursor))l.audio.sfx("pickup");else if(l.fishing.ownedUpgrades.includes(l.fishing.shopCursor))l.fishing.message="Already installed!",l.fishing.messageTimer=2;else{const r=["Insufficient currency, captain!","Your wallet weeps, sailor!","Not enough doubloons!","The ocean laughs at your poverty!","Even the crabs have more money!"];l.fishing.message=r[Math.floor(Math.random()*r.length)],l.fishing.messageTimer=2,l.audio.sfx("crash")}break;case"DEX":if(pe("d")||pe("D")||pe("Escape")){l.state="FREE_ROAM",l.audio.sfx("select");break}pe("ArrowUp")&&(l.fishing.dexCursor=(l.fishing.dexCursor-1+Xt.length)%Xt.length),pe("ArrowDown")&&(l.fishing.dexCursor=(l.fishing.dexCursor+1)%Xt.length);break;case"IRON_LUNG":if(!l.sub)break;if(pe("Escape")){l.state="MENU",l.scene.remove(l.sub),l.sub=null,l.monsterEel&&(l.scene.remove(l.monsterEel),l.monsterEel=null),l.skeletonTarget&&(l.scene.remove(l.skeletonTarget),l.skeletonTarget=null),l.scene.background=new Ve(8900331),l.scene.fog=new yn(10343918,200,2e3),l.waterMesh&&l.waterMesh.material.color.setHex(948121),Cs(!1),l.oceanFloor&&(l.scene.remove(l.oceanFloor),l.oceanFloor=null),l.jumpscareTimer=0,l.camShake=0;break}{const r=15*n,a=1*n;if((l.keys.w||l.keys.ArrowUp)&&(l.sub.position.x+=Math.cos(l.subHeading)*r,l.sub.position.z-=Math.sin(l.subHeading)*r),(l.keys.s||l.keys.ArrowDown)&&(l.sub.position.x-=Math.cos(l.subHeading)*r,l.sub.position.z+=Math.sin(l.subHeading)*r),(l.keys.a||l.keys.ArrowLeft)&&(l.subHeading+=a),(l.keys.d||l.keys.ArrowRight)&&(l.subHeading-=a),l.keys[" "]&&(l.sub.position.y+=r),(l.keys.Shift||l.keys.shift)&&(l.sub.position.y-=r),l.sub.position.y=Math.max(-50,Math.min(-2,l.sub.position.y)),l.sub.rotation.y=l.subHeading,(pe("x")||pe("X"))&&(l.xrayActive=!l.xrayActive,l.xrayActive?(l.scene.background=new Ve(4386),l.scene.fog=new yn(4386,20,150),l.waterMesh&&l.waterMesh.material.color.setHex(13124)):(l.scene.background=new Ve(3342336),l.scene.fog=new yn(3342336,5,80),l.waterMesh&&l.waterMesh.material.color.setHex(8912896))),l.skeletonTarget&&l.ironLungState==="playing"&&l.sub.position.distanceTo(l.skeletonTarget.position)<15&&(l.ironLungState="found",l.fishing.message="THE SKELETON... IT'S MOVING!",l.fishing.messageTimer=5),!l.monsterEel&&l.eelSpawnTimer>0&&(l.eelSpawnTimer-=n),!l.monsterEel&&l.eelSpawnTimer<=0){l.monsterEel=Ko();const c=Math.random()*Math.PI*2;l.monsterEel.position.set(l.sub.position.x+Math.cos(c)*60,l.sub.position.y,l.sub.position.z+Math.sin(c)*60),l.scene.add(l.monsterEel),l.eelFlashed=!1,l.fishing.message="SOMETHING IS COMING...",l.fishing.messageTimer=3}if(l.monsterEel){const c=l.sub.position.distanceTo(l.monsterEel.position),h=l.sub.position.clone().sub(l.monsterEel.position).normalize();l.monsterEel.position.add(h.multiplyScalar(12*n)),l.monsterEel.lookAt(l.sub.position),l.monsterEel.position.y+=Math.sin(performance.now()*.003)*.2,c<12&&!l.jumpscareTimer&&!l.eelFlashed&&(l.jumpscareTimer=1.5,l.camShake=3,l.audio.sfx("crash")),l.jumpscareTimer>0&&(l.jumpscareTimer-=n,l.camShake=Math.max(l.camShake,2.5),l.jumpscareTimer<=0&&(l.jumpscareTimer=0)),c<25&&!l.eelFlashed&&l.jumpscareTimer<=0&&Object.keys(l.keys).some(f=>l.keys[f]&&f!=="Escape"&&f!=="x"&&f!=="X")&&(l.eelFlashed=!0,l.scene.remove(l.monsterEel),l.monsterEel=null,l.fishing.message="YOU FLASHED THE BEAST!",l.fishing.messageTimer=3,l.eelSpawnTimer=20+Math.random()*30,Fn("eel_flash")),c<5&&!l.eelFlashed&&(l.ironLungState="eaten",l.scene.remove(l.monsterEel),l.monsterEel=null,l.jumpscareTimer=0,l.fishing.message="THE BEAST CONSUMED YOUR SUBMARINE...",l.fishing.messageTimer=5)}const o=l.sub.position.clone().add(new D(0,5,10));l.cam.position.lerp(o,n*3),l.cam.lookAt(l.sub.position)}break;case"ACHIEVEMENTS":(pe("a")||pe("A")||pe("Escape")||pe("Enter"))&&(l.state="MENU",l.audio.sfx("select"));break;case"UPDATES":(pe("u")||pe("U")||pe("Escape")||pe("Enter"))&&(l.state="MENU",l.audio.sfx("select"));break;case"SELECT":if(pe("ArrowLeft")){const r=Math.floor(l.boatIdx/5),a=l.boatIdx%5;l.boatIdx=r*5+(a-1+5)%5,l.audio.sfx("select")}if(pe("ArrowRight")){const r=Math.floor(l.boatIdx/5),a=l.boatIdx%5;l.boatIdx=r*5+(a+1)%5,l.audio.sfx("select")}if(pe("ArrowUp")){const r=Math.floor(l.boatIdx/5),a=l.boatIdx%5;l.boatIdx=(r-1+3)%3*5+a,l.audio.sfx("select")}if(pe("ArrowDown")){const r=Math.floor(l.boatIdx/5),a=l.boatIdx%5;l.boatIdx=(r+1)%3*5+a,l.audio.sfx("select")}(pe("Enter")||pe(" "))&&(C0(Zi[l.boatIdx]),l.audio.sfx("count"));break;case"COUNTDOWN":l.countTimer-=n,l.countTimer<=0&&(l.countVal--,l.countVal>=1?(l.audio.sfx("count"),l.countTimer=1):l.countVal===0?(l.audio.sfx("go"),l.countTimer=.8):(l.countDone=!0,l.state="RACING",l.audio.startMusic())),l.pBoat&&(Rs(l.pBoat),l.aiList.forEach(r=>Rs(r)),Cr(l.pBoat,n));break;case"RACING":if(!l.pBoat)break;l.pBoat.throttle=0,(l.keys.ArrowUp||l.keys.w)&&(l.pBoat.throttle=1),(l.keys.ArrowDown||l.keys.s)&&(l.pBoat.throttle=-1),l.pBoat.steer=0,(l.keys.ArrowLeft||l.keys.a)&&(l.pBoat.steer-=1),(l.keys.ArrowRight||l.keys.d)&&(l.pBoat.steer+=1);const i=l.pBoat.turboActive;l.pBoat.turboActive=!!l.keys[" "]&&l.pBoat.turboCharges>0&&l.pBoat.speed>5,!i&&l.pBoat.turboActive&&l.audio.sfx("boost"),i&&!l.pBoat.turboActive&&l.audio.sfx("boost_end");const s=Vl(l.pBoat,n);s==="crash"&&l.audio.sfx("crash"),s==="lap"&&l.audio.sfx("lap"),s==="finish"&&(l.audio.sfx("finish"),l.audio.stopMusic(),setTimeout(()=>{l.state="RESULTS"},2500)),s==="pickup"&&l.audio.sfx("pickup"),l.aiList.forEach(r=>s0(r,n)),l.audio.updateEngine(l.pBoat.speed,l.pBoat.maxSpd,l.pBoat.turboActive),Wo(),Xo(e),qo(e),Rs(l.pBoat),l.aiList.forEach(r=>Rs(r)),Cr(l.pBoat,n),l.raceTime+=n;break;case"RESULTS":(pe("Enter")||pe(" "))&&(l.state="MENU",l.pBoat&&(l.scene.remove(l.pBoat.mesh),l.pBoat=null),l.aiList.forEach(r=>l.scene.remove(r.mesh)),l.aiList=[],l.audio.stopMusic());break}}window.addEventListener("load",R0);
