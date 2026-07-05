var Jm=0,zh=1,Qm=2;var af=1,lu=2,ui=3,Mt=0,Pt=1,Tt=2,It=0,Un=1,Bt=2,kh=3,pa=4,cu=5,pn=100,$m=101,e0=102,t0=103,n0=104,fr=200,i0=201,s0=202,r0=203,Jl=204,Ql=205,Ba=206,o0=207,za=208,a0=209,l0=210,c0=211,u0=212,h0=213,d0=214,$l=0,ec=1,tc=2,$s=3,nc=4,ic=5,sc=6,rc=7,lf=0,f0=1,p0=2,Ui=0,uu=1,hu=2,du=3,uo=4,m0=5,fu=6,pu=7,Hh="attached",g0="detached",cf=300,er=301,tr=302,oc=303,ac=304,ka=306,xt=1e3,hi=1001,Kr=1002,St=1003,mu=1004;var Zs=1005;var wt=1006,qr=1007;var mn=1008,gu=1008,on=1009,uf=1010,hf=1011,Jr=1012,vu=1013,ls=1014,Nn=1015,Nt=1016,xu=1017,yu=1018,Oi=1020,df=35902,ff=1021,pf=1022,en=1023,mf=1024,gf=1025,Ks=1026,Fi=1027,_u=1028,Mu=1029,Ha=1030,bu=1031;var wu=1033,ca=33776,ua=33777,ha=33778,da=33779,lc=35840,cc=35841,uc=35842,hc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,vc=37810,xc=37811,yc=37812,_c=37813,Mc=37814,bc=37815,wc=37816,Sc=37817,Ec=37818,Tc=37819,Ac=37820,Rc=37821,fa=36492,Cc=36494,Pc=36495,vf=36283,Ic=36284,Dc=36285,Lc=36286;var nr=2300,ir=2301,xl=2302,Vh=2400,Gh=2401,Wh=2402,v0=2500;var xf=0,Va=1,ho=2,x0=3200,y0=3201;var Su=0,_0=1,Di="",vt="srgb",Gt="srgb-linear",Ga="linear",ct="srgb";var Cs=7680;var Xh=519,M0=512,b0=513,w0=514,yf=515,S0=516,E0=517,T0=518,A0=519,Nc=35044,_f=35048;var ma="300 es",di=2e3,ga=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=1234567,Yr=Math.PI/180,sr=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function Eu(i,e){return(i%e+e)%e}function R0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function C0(i,e,t){return i!==e?(t-i)/(e-i):0}function Zr(i,e,t){return(1-t)*i+t*e}function P0(i,e,t,n){return Zr(i,e,1-Math.exp(-t*n))}function I0(i,e=1){return e-Math.abs(Eu(i,e*2)-e)}function D0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function L0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function N0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U0(i,e){return i+Math.random()*(e-i)}function O0(i){return i*(.5-Math.random())}function F0(i){i!==void 0&&(qh=i);let e=qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(i){return i*Yr}function z0(i){return i*sr}function k0(i){return(i&i-1)===0&&i!==0}function H0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function V0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function G0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yi={DEG2RAD:Yr,RAD2DEG:sr,generateUUID:On,clamp:Ft,euclideanModulo:Eu,mapLinear:R0,inverseLerp:C0,lerp:Zr,damp:P0,pingpong:I0,smoothstep:D0,smootherstep:L0,randInt:N0,randFloat:U0,randFloatSpread:O0,seededRandom:F0,degToRad:B0,radToDeg:z0,isPowerOfTwo:k0,ceilPowerOfTwo:H0,floorPowerOfTwo:V0,setQuaternionFromProperEuler:G0,normalize:ut,denormalize:Ln},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],w=s[4],y=s[7],I=s[2],S=s[5],E=s[8];return r[0]=o*v+a*_+l*I,r[3]=o*m+a*w+l*S,r[6]=o*p+a*y+l*E,r[1]=c*v+u*_+h*I,r[4]=c*m+u*w+h*S,r[7]=c*p+u*y+h*E,r[2]=d*v+f*_+g*I,r[5]=d*m+f*w+g*S,r[8]=d*p+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yl=new Ke;function Mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function W0(){let i=Qr("canvas");return i.style.display="block",i}var Yh={};function Wr(i){i in Yh||(Yh[i]=!0,console.warn(i))}function X0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function q0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Y0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zh=[.64,.33,.3,.6,.15,.06],jh=[.2126,.7152,.0722],Kh=[.3127,.329],Jh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Gt]:{primaries:Zh,whitePoint:Kh,transfer:Ga,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:jh,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:Zh,whitePoint:Kh,transfer:ct,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:jh,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});var Ps,Uc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Qr("canvas")),Ps.width=e.width,Ps.height=e.height;let n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Z0=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var j0=0,At=class i extends Bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hi,s=hi,r=wt,o=mn,a=en,l=on,c=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=On(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xt:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xt:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=cf;At.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(f+1)/2,I=(p+1)/2,S=(u+d)/4,E=(h+v)/4,C=(g+m)/4;return w>y&&w>I?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=E/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*v,_=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let I=Math.sqrt(w),S=Math.atan2(I,p*_);m=Math.sin(m*S)/I,a=Math.sin(a*S)/I}let y=a*_;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+v*y,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new R,$h=new Yt,gn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),No.subVectors(this.max,Lr),Is.subVectors(e.a,Lr),Ds.subVectors(e.b,Lr),Ls.subVectors(e.c,Lr),Ti.subVectors(Ds,Is),Ai.subVectors(Ls,Ds),es.subVectors(Is,Ls);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-es.z,es.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,es.z,0,-es.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-es.y,es.x,0];return!bl(t,Is,Ds,Ls,No)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Is,Ds,Ls,No))?!1:(Uo.crossVectors(Ti,Ai),t=[Uo.x,Uo.y,Uo.z],bl(t,Is,Ds,Ls,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new R,new R,new R,new R,new R,new R,new R,new R],Pn=new R,Lo=new gn,Is=new R,Ds=new R,Ls=new R,Ti=new R,Ai=new R,es=new R,Lr=new R,No=new R,Uo=new R,ts=new R;function bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var K0=new gn,Nr=new R,wl=new R,an=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(wl)),this.expandByPoint(Nr.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new R,Sl=new R,Oo=new R,Ri=new R,El=new R,Fo=new R,Tl=new R,cs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Ri.dot(this.direction),l=-Ri.dot(Oo),c=Ri.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sl).addScaledVector(Oo,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){El.subVectors(t,e),Fo.subVectors(n,e),Tl.crossVectors(El,Fo);let o=this.direction.dot(Tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);let l=a*this.direction.dot(Fo.crossVectors(Ri,Fo));if(l<0)return null;let c=a*this.direction.dot(El.cross(Ri));if(c<0||l+c>o)return null;let u=-a*Ri.dot(Tl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,Q0)}lookAt(e,t,n){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ci.crossVectors(n,sn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ci.crossVectors(n,sn)),Ci.normalize(),Bo.crossVectors(sn,Ci),s[0]=Ci.x,s[4]=Bo.x,s[8]=sn.x,s[1]=Ci.y,s[5]=Bo.y,s[9]=sn.y,s[2]=Ci.z,s[6]=Bo.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],w=n[7],y=n[11],I=n[15],S=s[0],E=s[4],C=s[8],M=s[12],x=s[1],P=s[5],N=s[9],O=s[13],H=s[2],z=s[6],B=s[10],j=s[14],k=s[3],Y=s[7],oe=s[11],he=s[15];return r[0]=o*S+a*x+l*H+c*k,r[4]=o*E+a*P+l*z+c*Y,r[8]=o*C+a*N+l*B+c*oe,r[12]=o*M+a*O+l*j+c*he,r[1]=u*S+h*x+d*H+f*k,r[5]=u*E+h*P+d*z+f*Y,r[9]=u*C+h*N+d*B+f*oe,r[13]=u*M+h*O+d*j+f*he,r[2]=g*S+v*x+m*H+p*k,r[6]=g*E+v*P+m*z+p*Y,r[10]=g*C+v*N+m*B+p*oe,r[14]=g*M+v*O+m*j+p*he,r[3]=_*S+w*x+y*H+I*k,r[7]=_*E+w*P+y*z+I*Y,r[11]=_*C+w*N+y*B+I*oe,r[15]=_*M+w*O+y*j+I*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,w=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,y=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,I=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,S=t*_+n*w+s*y+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=_*E,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*E,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*E,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*E,e[4]=w*E,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*E,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*E,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*E,e[8]=y*E,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*E,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=I*E,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*E,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*E,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,_=l*c,w=l*u,y=l*h,I=n.x,S=n.y,E=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+y)*I,s[2]=(g-w)*I,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+w)*E,s[9]=(m-_)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=di){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===di)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ga)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,v;if(a===di)g=(o+r)*h,v=-2*h;else if(a===ga)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new R,In=new Ve,J0=new R(0,0,0),Q0=new R(1,1,1),Ci=new R,Bo=new R,sn=new R,ed=new Ve,td=new Yt,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$0=0,nd=new R,Us=new Yt,oi=new Ve,zo=new R,Ur=new R,eg=new R,tg=new Yt,id=new R(1,0,0),sd=new R(0,1,0),rd=new R(0,0,1),od={type:"added"},ng={type:"removed"},Os={type:"childadded",child:null},Al={type:"childremoved",child:null},yt=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new vn,n=new Yt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ke}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ur,zo,this.up):oi.lookAt(zo,Ur,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(oi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new R,ai=new R,Rl=new R,li=new R,Fs=new R,Bs=new R,ad=new R,Cl=new R,Pl=new R,Il=new R,Dl=new nt,Ll=new nt,Nl=new nt,Li=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ai.subVectors(n,t),Rl.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ai),l=Dn.dot(Rl),c=ai.dot(ai),u=ai.dot(Rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dl.setScalar(0),Ll.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),Nl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ai.subVectors(e,t),Dn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Bs.subVectors(r,n),Cl.subVectors(e,n);let l=Fs.dot(Cl),c=Bs.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,s);let u=Fs.dot(Pl),h=Bs.dot(Pl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fs,o);Il.subVectors(e,r);let f=Fs.dot(Il),g=Bs.dot(Il);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ad.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(ad,a);let p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Eu(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ul(o,r,e+1/3),this.g=Ul(o,r,e),this.b=Ul(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return $e.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ft(Vt.r*255,0,255))*65536+Math.round(Ft(Vt.g*255,0,255))*256+Math.round(Ft(Vt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vt){$e.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(ko);let n=Zr(Pi.h,ko.h,t),s=Zr(Pi.s,ko.s,t),r=Zr(Pi.l,ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new se;se.NAMES=bf;var ig=0,Zt=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=On(),this.name="",this.blending=Un,this.side=Mt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(n.blending=this.blending),this.side!==Mt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends Zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new R,Ho=new ce,Qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var ya=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},sg=0,fn=new Ve,Ol=new yt,zs=new R,rn=new gn,Or=new gn,Ot=new R,it=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(rn.min,Or.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,Or.max),rn.expandByPoint(Ot)):(rn.expandByPoint(Or.min),rn.expandByPoint(Or.max))}rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),Ot.add(zs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;let c=new R,u=new R,h=new R,d=new ce,f=new ce,g=new ce,v=new R,m=new R;function p(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(v),a[M].add(v),a[x].add(v),l[C].add(m),l[M].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){let x=_[C],P=x.start,N=x.count;for(let O=P,H=P+N;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new R,y=new R,I=new R,S=new R;function E(C){I.fromBufferAttribute(s,C),S.copy(I);let M=a[C];w.copy(M),w.sub(I.multiplyScalar(I.dot(M))).normalize(),y.crossVectors(S,M);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,w.x,w.y,w.z,P)}for(let C=0,M=_.length;C<M;++C){let x=_[C],P=x.start,N=x.count;for(let O=P,H=P+N;O<H;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ld=new Ve,ns=new cs,Vo=new an,cd=new R,Go=new R,Wo=new R,Xo=new R,Fl=new R,qo=new R,ud=new R,Yo=new R,We=class extends yt{constructor(e=new it,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Fl.fromBufferAttribute(h,e),o?qo.addScaledVector(Fl,u):qo.addScaledVector(Fl.sub(t),u))}t.add(qo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Vo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Vo,cd)===null||ns.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),ns.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let S=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);s=Zo(this,p,e,n,c,u,h,S,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=Zo(this,o,e,n,c,u,h,_,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let S=y,E=y+1,C=y+2;s=Zo(this,p,e,n,c,u,h,S,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,w=m+1,y=m+2;s=Zo(this,o,e,n,c,u,h,_,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function rg(i,e,t,n,s,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Mt,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yo);return c<t.near||c>t.far?null:{distance:c,point:Yo.clone(),object:i}}function Zo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Go),i.getVertexPosition(l,Wo),i.getVertexPosition(c,Xo);let u=rg(i,e,t,n,Go,Wo,Xo,ud);if(u){let h=new R;Li.getBarycoord(ud,Go,Wo,Xo,h),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Li.getNormal(Go,Wo,Xo,d.normal),u.face=d,u.barycoord=h}return u}var us=class i extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(v,m,p,_,w,y,I,S,E,C,M){let x=y/E,P=I/C,N=y/2,O=I/2,H=S/2,z=E+1,B=C+1,j=0,k=0,Y=new R;for(let oe=0;oe<B;oe++){let he=oe*P-O;for(let fe=0;fe<z;fe++){let me=fe*x-N;Y[v]=me*_,Y[m]=he*w,Y[p]=H,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(fe/E),h.push(1-oe/C),j+=1}}for(let oe=0;oe<C;oe++)for(let he=0;he<E;he++){let fe=d+he+z*oe,me=d+he+z*(oe+1),W=d+(he+1)+z*(oe+1),te=d+(he+1)+z*oe;l.push(fe,me,te),l.push(me,W,te),k+=6}a.addGroup(f,k,M),f+=k,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function og(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Rt={clone:rr,merge:qt},ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ma=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new R,hd=new ce,dd=new ce,Et=class extends Ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,hd,dd),t.subVectors(dd,hd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Hs=1,to=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Et(ks,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Et(ks,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Et(ks,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Et(ks,Hs,e,t);a.layers=this.layers,this.add(a);let l=new Et(ks,Hs,e,t);l.layers=this.layers,this.add(l);let c=new Et(ks,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ba=class extends At{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},no=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ba(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new us(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:It});r.uniforms.tEquirect.value=t;let o=new We(s,r),a=t.minFilter;return t.minFilter===mn&&(t.minFilter=wt),new to(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Bl=new R,cg=new R,ug=new Ke,$t=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bl.subVectors(n,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ug.getNormalMatrix(e),s=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new an,jo=new R,io=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,o=new $t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],w=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+u,m+g,y+_).normalize(),n[3].setComponents(l-o,d-u,m-g,y-_).normalize(),n[4].setComponents(l-a,d-h,m-v,y-w).normalize(),t===di)n[5].setComponents(l+a,d+h,m+v,y+w).normalize();else if(t===ga)n[5].setComponents(a,h,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ln=class i extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let _=p*d-o;for(let w=0;w<c;w++){let y=w*h-r;g.push(y,-_,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let w=_+c*p,y=_+c*(p+1),I=_+1+c*(p+1),S=_+1+c*p;f.push(w,y,S),f.push(y,I,S)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
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
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
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
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,sv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,hv=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ox=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_x=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rx=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Px=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dx=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nx=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ox=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bx=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zx=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,kx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Vx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:dg,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:vg,aomap_fragment:xg,aomap_pars_fragment:yg,batching_pars_vertex:_g,batching_vertex:Mg,begin_vertex:bg,beginnormal_vertex:wg,bsdfs:Sg,iridescence_fragment:Eg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Lg,color_vertex:Ng,common:Ug,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Fg,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:kg,emissivemap_pars_fragment:Hg,colorspace_fragment:Vg,colorspace_pars_fragment:Gg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:qg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:sv,envmap_vertex:Zg,fog_vertex:jg,fog_pars_vertex:Kg,fog_fragment:Jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:rv,lights_toon_pars_fragment:ov,lights_phong_fragment:av,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:hv,lights_fragment_maps:dv,lights_fragment_end:fv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:vv,map_fragment:xv,map_pars_fragment:yv,map_particle_fragment:_v,map_particle_pars_fragment:Mv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:wv,morphinstance_vertex:Sv,morphcolor_vertex:Ev,morphnormal_vertex:Tv,morphtarget_pars_vertex:Av,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Iv,normal_pars_vertex:Dv,normal_vertex:Lv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:Zv,shadowmap_vertex:jv,shadowmask_pars_fragment:Kv,skinbase_vertex:Jv,skinning_pars_vertex:Qv,skinning_vertex:$v,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:dx,backgroundCube_vert:fx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:vx,depth_frag:xx,distanceRGBA_vert:yx,distanceRGBA_frag:_x,equirect_vert:Mx,equirect_frag:bx,linedashed_vert:wx,linedashed_frag:Sx,meshbasic_vert:Ex,meshbasic_frag:Tx,meshlambert_vert:Ax,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Lx,meshphong_frag:Nx,meshphysical_vert:Ux,meshphysical_frag:Ox,meshtoon_vert:Fx,meshtoon_frag:Bx,points_vert:zx,points_frag:kx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:Wx},we={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new se(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new se(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:qt([we.common,we.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:qt([we.lights,we.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};qn.physical={uniforms:qt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Ko={r:0,b:0,g:0},ss=new vn,Xx=new Ve;function qx(i,e,t,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?t:e).get(w)),w}function v(_){let w=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),w=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,w){let y=g(w);y&&(y.isCubeTexture||y.mapping===ka)?(u===void 0&&(u=new We(new us(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:rr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(w.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(ss)),u.material.toneMapped=$e.getTransfer(y.colorSpace)!==ct,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new We(new ln(2,2),new ze({name:"BackgroundMaterial",uniforms:rr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,w){_.getRGB(Ko,wf(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:m}}function Yx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,P,N,O,H){let z=!1,B=h(O,N,P);r!==B&&(r=B,c(r.object)),z=f(x,O,N,H),z&&g(x,O,N,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(x,P,N,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,P,N){let O=N.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let z=H[P.id];z===void 0&&(z={},H[P.id]=z);let B=z[O];return B===void 0&&(B=d(l()),z[O]=B),B}function d(x){let P=[],N=[],O=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,P,N,O){let H=r.attributes,z=P.attributes,B=0,j=N.getAttributes();for(let k in j)if(j[k].location>=0){let oe=H[k],he=z[k];if(he===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(x,P,N,O){let H={},z=P.attributes,B=0,j=N.getAttributes();for(let k in j)if(j[k].location>=0){let oe=z[k];oe===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));let he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),H[k]=he,B++}r.attributes=H,r.attributesNum=B,r.index=O}function v(){let x=r.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){let N=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;N[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==P&&(i.vertexAttribDivisor(x,P),H[x]=P)}function _(){let x=r.newAttributes,P=r.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==x[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function w(x,P,N,O,H,z,B){B===!0?i.vertexAttribIPointer(x,P,N,H,z):i.vertexAttribPointer(x,P,N,O,H,z)}function y(x,P,N,O){v();let H=O.attributes,z=N.getAttributes(),B=P.defaultAttributeValues;for(let j in z){let k=z[j];if(k.location>=0){let Y=H[j];if(Y===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){let oe=Y.normalized,he=Y.itemSize,fe=e.get(Y);if(fe===void 0)continue;let me=fe.buffer,W=fe.type,te=fe.bytesPerElement,re=W===i.INT||W===i.UNSIGNED_INT||Y.gpuType===vu;if(Y.isInterleavedBufferAttribute){let q=Y.data,Z=q.stride,ee=Y.offset;if(q.isInstancedInterleavedBuffer){for(let pe=0;pe<k.locationSize;pe++)p(k.location+pe,q.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<k.locationSize;pe++)m(k.location+pe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let pe=0;pe<k.locationSize;pe++)w(k.location+pe,he/k.locationSize,W,oe,Z*te,(ee+he/k.locationSize*pe)*te,re)}else{if(Y.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)p(k.location+q,Y.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let q=0;q<k.locationSize;q++)m(k.location+q);i.bindBuffer(i.ARRAY_BUFFER,me);for(let q=0;q<k.locationSize;q++)w(k.location+q,he/k.locationSize,W,oe,he*te,he/k.locationSize*q*te,re)}}else if(B!==void 0){let oe=B[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}_()}function I(){C();for(let x in n){let P=n[x];for(let N in P){let O=P[N];for(let H in O)u(O[H].object),delete O[H];delete P[N]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let N in P){let O=P[N];for(let H in O)u(O[H].object),delete O[H];delete P[N]}delete n[x.id]}function E(x){for(let P in n){let N=n[P];if(N[x.id]===void 0)continue;let O=N[x.id];for(let H in O)u(O[H].object),delete O[H];delete N[x.id]}}function C(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Zx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==en&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===Nt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==on&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Nn&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:I,maxSamples:S}}function Kx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new $t,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,w=_*4,y=p.clippingState||null;l.value=y,y=u(g,d,w,f);for(let I=0;I!==w;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)o.copy(h[w]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Jx(i){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=er:a===ac&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new no(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var zi=class extends Ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,fd=[.125,.215,.35,.446,.526,.582],as=20,zl=new zi,pd=new se,kl=null,Hl=0,Vl=0,Gl=!1,os=(1+Math.sqrt(5))/2,Vs=1/os,md=[new R(-os,Vs,0),new R(os,Vs,0),new R(-Vs,0,os),new R(Vs,0,os),new R(0,os,-Vs),new R(0,os,Vs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Hl,Vl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Nt,format:en,colorSpace:Gt,depthBuffer:!1},s=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=$x(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,s){let a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(pd),u.toneMapping=Ui,u.autoClear=!1;let f=new zt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new We(new us,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(pd),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;Jo(s,_*w,p>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Jo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=md[(s-r-1)%md.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new We(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],_=0;for(let E=0;E<as;++E){let C=E/v,M=Math.exp(-C*C/2);p.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let y=this._sizeLods[s],I=3*y*(s>w-js?s-w+js:0),S=4*(this._cubeSize-y);Jo(t,I,S,3*y,2*y),l.setRenderTarget(t),l.render(h,zl)}};function Qx(i){let e=[],t=[],n=[],s=i,r=i-js+1+fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-js?l=fd[o-i+js-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),w=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let S=0;S<f;S++){let E=S%3*2/3-1,C=S>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(M,v*g*S),w.set(d,m*g*S);let x=[S,S,S,S,S,S];y.set(x,p*g*S)}let I=new it;I.setAttribute("position",new Qe(_,v)),I.setAttribute("uv",new Qe(w,m)),I.setAttribute("faceIndex",new Qe(y,p)),e.push(I),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(i,e,t){let n=new bt(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $x(i,e,t){let n=new Float32Array(as),s=new R(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:It,depthTest:!1,depthWrite:!1})}function vd(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:It,depthTest:!1,depthWrite:!1})}function xd(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}function ey(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oc||l===ac,u=l===er||l===tr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new or(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new or(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ny(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let w=0,y=_.length;w<y;w+=3){let I=_[w+0],S=_[w+1],E=_[w+2];d.push(I,S,S,E,E,I)}}else if(g!==void 0){let _=g.array;v=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){let I=w+0,S=w+1,E=w+2;d.push(I,S,S,E,E,I)}}else return;let m=new(Mf(d)?_a:ya)(d,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ry(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let y=a.attributes.position.count*w,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*I*4*h),E=new xa(S,y,I,h);E.type=Nn,E.needsUpdate=!0;let C=w*4;for(let x=0;x<h;x++){let P=m[x],N=p[x],O=_[x],H=y*I*4*x;for(let z=0;z<P.count;z++){let B=z*C;f===!0&&(s.fromBufferAttribute(P,z),S[H+B+0]=s.x,S[H+B+1]=s.y,S[H+B+2]=s.z,S[H+B+3]=0),g===!0&&(s.fromBufferAttribute(N,z),S[H+B+4]=s.x,S[H+B+5]=s.y,S[H+B+6]=s.z,S[H+B+7]=0),v===!0&&(s.fromBufferAttribute(O,z),S[H+B+8]=s.x,S[H+B+9]=s.y,S[H+B+10]=s.z,S[H+B+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new ce(y,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function oy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ar=class extends At{constructor(e,t,n,s,r,o,a,l,c,u=Ks){if(u!==Ks&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ks&&(n=ls),n===void 0&&u===Fi&&(n=Oi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ef=new At,yd=new ar(1,1),Tf=new xa,Af=new $r,Rf=new ba,_d=[],Md=[],bd=new Float32Array(16),wd=new Float32Array(9),Sd=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),Lt(t,n)}}function dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),Lt(t,n)}}function fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),Lt(t,n)}}function py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function by(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yd.compareFunction=yf,r=yd):r=Ef,t.setTexture2D(e||r,s)}function wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Af,s)}function Sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rf,s)}function Ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tf,s)}function Ty(i){switch(i){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return uy;case 35674:return hy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return vy;case 5125:return xy;case 36294:return yy;case 36295:return _y;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ay(i,e){i.uniform1fv(this.addr,e)}function Ry(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cy(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Py(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Iy(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dy(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ly(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ny(i,e){i.uniform1iv(this.addr,e)}function Uy(i,e){i.uniform2iv(this.addr,e)}function Oy(i,e){i.uniform3iv(this.addr,e)}function Fy(i,e){i.uniform4iv(this.addr,e)}function By(i,e){i.uniform1uiv(this.addr,e)}function zy(i,e){i.uniform2uiv(this.addr,e)}function ky(i,e){i.uniform3uiv(this.addr,e)}function Hy(i,e){i.uniform4uiv(this.addr,e)}function Vy(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ef,r[o])}function Gy(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function Wy(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rf,r[o])}function Xy(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function qy(i){switch(i){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Iy;case 35675:return Dy;case 35676:return Ly;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Oy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return zy;case 36295:return ky;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qy(t.type)}},zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function Ed(i,e){i.seq.push(e),i.map[e.id]=e}function Yy(i,e,t){let n=i.name,s=n.length;for(Wl.lastIndex=0;;){let r=Wl.exec(n),o=Wl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ed(t,c===void 0?new Fc(a,i,e):new Bc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new zc(a),Ed(t,h)),t=h}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Zy=37297,jy=0;function Ky(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ad=new Ke;function Jy(i){$e._getMatrix(Ad,$e.workingColorSpace,i);let e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ky(i.getShaderSource(e),o)}else return s}function Qy(i,e){let t=Jy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $y(i,e){let t;switch(e){case uu:t="Linear";break;case hu:t="Reinhard";break;case du:t="Cineon";break;case uo:t="ACESFilmic";break;case fu:t="AgX";break;case pu:t="Neutral";break;case m0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qo=new R;function e_(){$e.getLuminanceCoefficients(Qo);let i=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function n_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function Cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(s_,o_)}var r_=new Map;function o_(i,e){let t=Je[e];if(t===void 0){let n=r_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(a_,l_)}function l_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===tr&&(e="ENVMAP_MODE_REFRACTION"),e}function d_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lf:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case p0:e="ENVMAP_BLENDING_ADD";break}return e}function f_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=c_(t),c=u_(t),u=h_(t),h=d_(t),d=f_(t),f=t_(t),g=n_(r),v=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ui?$y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Qy("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=kc(o),o=Cd(o,t),o=Pd(o,t),a=kc(a),a=Cd(a,t),a=Pd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=_+m+o,y=_+p+a,I=Td(s,s.VERTEX_SHADER,w),S=Td(s,s.FRAGMENT_SHADER,y);s.attachShader(v,I),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(I).trim(),H=s.getShaderInfoLog(S).trim(),z=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,S);else{let j=Rd(s,I,"vertex"),k=Rd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+j+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(B=!1);B&&(P.diagnostics={runnable:z,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(I),s.deleteShader(S),C=new Qs(s,v),M=i_(s,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Zy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=S,this}var m_=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vc(e),t.set(e,n)),n}},Vc=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function g_(i,e,t,n,s,r,o){let a=new eo,l=new Hc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,N,O){let H=N.fog,z=O.geometry,B=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),k=j&&j.mapping===ka?j.image.height:null,Y=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=oe!==void 0?oe.length:0,fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let me,W,te,re;if(Y){let ot=qn[Y];me=ot.vertexShader,W=ot.fragmentShader}else me=M.vertexShader,W=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);let q=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),ee=O.isInstancedMesh===!0,pe=O.isBatchedMesh===!0,Se=!!M.map,Le=!!M.matcap,qe=!!j,F=!!M.aoMap,ke=!!M.lightMap,Ce=!!M.bumpMap,Ne=!!M.normalMap,ue=!!M.displacementMap,Ue=!!M.emissiveMap,xe=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,U=M.clearcoat>0,X=M.dispersion>0,ne=M.iridescence>0,K=M.sheen>0,Me=M.transmission>0,de=b&&!!M.anisotropyMap,ge=U&&!!M.clearcoatMap,Re=U&&!!M.clearcoatNormalMap,ie=U&&!!M.clearcoatRoughnessMap,ve=ne&&!!M.iridescenceMap,Pe=ne&&!!M.iridescenceThicknessMap,De=K&&!!M.sheenColorMap,be=K&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,Ie=!!M.specularColorMap,ye=!!M.specularIntensityMap,L=Me&&!!M.transmissionMap,le=Me&&!!M.thicknessMap,J=!!M.gradientMap,ae=!!M.alphaMap,Ee=M.alphaTest>0,Te=!!M.alphaHash,Ye=!!M.extensions,ht=Ui;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Ut={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:W,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:pe,batchingColor:pe&&O._colorsTexture!==null,instancing:ee,instancingColor:ee&&O.instanceColor!==null,instancingMorph:ee&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Gt,alphaToCoverage:!!M.alphaToCoverage,map:Se,matcap:Le,envMap:qe,envMapMode:qe&&j.mapping,envMapCubeUVHeight:k,aoMap:F,lightMap:ke,bumpMap:Ce,normalMap:Ne,displacementMap:d&&ue,emissiveMap:Ue,normalMapObjectSpace:Ne&&M.normalMapType===_0,normalMapTangentSpace:Ne&&M.normalMapType===Su,metalnessMap:xe,roughnessMap:A,anisotropy:b,anisotropyMap:de,clearcoat:U,clearcoatMap:ge,clearcoatNormalMap:Re,clearcoatRoughnessMap:ie,dispersion:X,iridescence:ne,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:K,sheenColorMap:De,sheenRoughnessMap:be,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:ye,transmission:Me,transmissionMap:L,thicknessMap:le,gradientMap:J,opaque:M.transparent===!1&&M.blending===Un&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:Te,combine:M.combine,mapUv:Se&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:ke&&v(M.lightMap.channel),bumpMapUv:Ce&&v(M.bumpMap.channel),normalMapUv:Ne&&v(M.normalMap.channel),displacementMapUv:ue&&v(M.displacementMap.channel),emissiveMapUv:Ue&&v(M.emissiveMap.channel),metalnessMapUv:xe&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:de&&v(M.anisotropyMap.channel),clearcoatMapUv:ge&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(M.sheenRoughnessMap.channel),specularMapUv:Ge&&v(M.specularMap.channel),specularColorMapUv:Ie&&v(M.specularColorMap.channel),specularIntensityMapUv:ye&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:le&&v(M.thicknessMap.channel),alphaMapUv:ae&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ne||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Se||ae),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tt,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(x,M),w(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function _(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function w(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let x=g[M.type],P;if(x){let N=qn[x];P=Rt.clone(N.uniforms)}else P=M.uniforms;return P}function I(M,x){let P;for(let N=0,O=u.length;N<O;N++){let H=u[N];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new p_(i,x,M,r),u.push(P)),P}function S(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:C}}function v_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function x_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Ld),s.length>1&&s.sort(d||Ld)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nd,i.set(n,[o])):s>=r.length?(o=new Nd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function __(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new se};break;case"SpotLight":t={position:new R,direction:new R,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var b_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S_(i){let e=new __,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,w=0,y=0,I=0,S=0,E=0;c.sort(w_);for(let M=0,x=c.length;M<x;M++){let P=c[M],N=P.color,O=P.intensity,H=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*O,h+=N.g*O,d+=N.b*O;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],O);E++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=B,f++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(N).multiplyScalar(O),B.distance=H,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let j=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[v]=j.matrix,P.castShadow){let k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=z,y++}v++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let j=P.shadow,k=t.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=B,g++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(O),B.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==w||C.numSpotShadows!==y||C.numSpotMaps!==I||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=w,C.numSpotShadows=y,C.numSpotMaps=I,C.numLightProbes=E,n.version=b_++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let w=c[p];if(w.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(w.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ud(i){let e=new S_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function E_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ud(i),e.set(s,[a])):r>=o.length?(a=new Ud(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gc=class extends Zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wc=class extends Zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(i,e,t){let n=new io,s=new ce,r=new ce,o=new nt,a=new Gc({depthPacking:y0}),l=new Wc,c={},u=t.maxTextureSize,h={[Mt]:Pt,[Pt]:Mt,[Tt]:Tt},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new it;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let p=this.type;this.render=function(S,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(It),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==ui&&this.type===ui,H=p===ui&&this.type!==ui;for(let z=0,B=S.length;z<B;z++){let j=S[z],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();if(s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y)),k.map===null||O===!0||H===!0){let he=this.type!==ui?{minFilter:St,magFilter:St}:{};k.map!==null&&k.map.dispose(),k.map=new bt(s.x,s.y,he),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let oe=k.getViewportCount();for(let he=0;he<oe;he++){let fe=k.getViewport(he);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),N.viewport(o),k.updateMatrices(j,he),n=k.getFrustum(),y(E,C,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ui&&_(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,P)};function _(S,E){let C=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bt(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,C,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,C,f,v,null)}function w(S,E,C,M){let x=null,P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=x.uuid,O=E.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let z=H[O];z===void 0&&(z=x.clone(),H[O]=z,E.addEventListener("dispose",I)),x=z}if(x.visible=E.visible,x.wireframe=E.wireframe,M===ui?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=i.properties.get(x);N.light=C}return x}function y(S,E,C,M,x){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ui)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let O=e.update(S),H=S.material;if(Array.isArray(H)){let z=O.groups;for(let B=0,j=z.length;B<j;B++){let k=z[B],Y=H[k.materialIndex];if(Y&&Y.visible){let oe=w(S,Y,M,x);S.onBeforeShadow(i,S,E,C,O,oe,k),i.renderBufferDirect(C,null,O,oe,S,k),S.onAfterShadow(i,S,E,C,O,oe,k)}}}else if(H.visible){let z=w(S,H,M,x);S.onBeforeShadow(i,S,E,C,O,z,null),i.renderBufferDirect(C,null,O,z,S,null),S.onAfterShadow(i,S,E,C,O,z,null)}}let N=S.children;for(let O=0,H=N.length;O<H;O++)y(N[O],E,C,M,x)}function I(S){S.target.removeEventListener("dispose",I);for(let C in c){let M=c[C],x=S.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var C_={[$l]:ec,[tc]:sc,[nc]:rc,[$s]:ic,[ec]:$l,[sc]:tc,[rc]:nc,[ic]:$s};function P_(i,e){function t(){let L=!1,le=new nt,J=null,ae=new nt(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!L&&(i.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,Te,Ye,ht,Ut){Ut===!0&&(Ee*=ht,Te*=ht,Ye*=ht),le.set(Ee,Te,Ye,ht),ae.equals(le)===!1&&(i.clearColor(Ee,Te,Ye,ht),ae.copy(le))},reset:function(){L=!1,J=null,ae.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,J=null,ae=null,Ee=null;return{setReversed:function(Te){if(le!==Te){let Ye=e.get("EXT_clip_control");le?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let ht=Ee;Ee=null,this.setClear(ht)}le=Te},getReversed:function(){return le},setTest:function(Te){Te?q(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Te){J!==Te&&!L&&(i.depthMask(Te),J=Te)},setFunc:function(Te){if(le&&(Te=C_[Te]),ae!==Te){switch(Te){case $l:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Te}},setLocked:function(Te){L=Te},setClear:function(Te){Ee!==Te&&(le&&(Te=1-Te),i.clearDepth(Te),Ee=Te)},reset:function(){L=!1,J=null,ae=null,Ee=null,le=!1}}}function s(){let L=!1,le=null,J=null,ae=null,Ee=null,Te=null,Ye=null,ht=null,Ut=null;return{setTest:function(ot){L||(ot?q(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(ot){le!==ot&&!L&&(i.stencilMask(ot),le=ot)},setFunc:function(ot,Jt,Rn){(J!==ot||ae!==Jt||Ee!==Rn)&&(i.stencilFunc(ot,Jt,Rn),J=ot,ae=Jt,Ee=Rn)},setOp:function(ot,Jt,Rn){(Te!==ot||Ye!==Jt||ht!==Rn)&&(i.stencilOp(ot,Jt,Rn),Te=ot,Ye=Jt,ht=Rn)},setLocked:function(ot){L=ot},setClear:function(ot){Ut!==ot&&(i.clearStencil(ot),Ut=ot)},reset:function(){L=!1,le=null,J=null,ae=null,Ee=null,Te=null,Ye=null,ht=null,Ut=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,w=null,y=null,I=null,S=null,E=new se(0,0,0),C=0,M=!1,x=null,P=null,N=null,O=null,H=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,j=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=j>=2);let Y=null,oe={},he=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),me=new nt().fromArray(he),W=new nt().fromArray(fe);function te(L,le,J,ae){let Ee=new Uint8Array(4),Te=i.createTexture();i.bindTexture(L,Te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<J;Ye++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(le+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Te}let re={};re[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc($s),Ce(!1),Ne(zh),q(i.CULL_FACE),F(It);function q(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Z(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ee(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function pe(L,le){let J=f,ae=!1;if(L){J=d.get(le),J===void 0&&(J=[],d.set(le,J));let Ee=L.textures;if(J.length!==Ee.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ye=Ee.length;Te<Ye;Te++)J[Te]=i.COLOR_ATTACHMENT0+Te;J.length=Ee.length,ae=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ae=!0);ae&&i.drawBuffers(J)}function Se(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Le={[pn]:i.FUNC_ADD,[$m]:i.FUNC_SUBTRACT,[e0]:i.FUNC_REVERSE_SUBTRACT};Le[t0]=i.MIN,Le[n0]=i.MAX;let qe={[fr]:i.ZERO,[i0]:i.ONE,[s0]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[l0]:i.SRC_ALPHA_SATURATE,[za]:i.DST_COLOR,[Ba]:i.DST_ALPHA,[r0]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[a0]:i.ONE_MINUS_DST_COLOR,[o0]:i.ONE_MINUS_DST_ALPHA,[c0]:i.CONSTANT_COLOR,[u0]:i.ONE_MINUS_CONSTANT_COLOR,[h0]:i.CONSTANT_ALPHA,[d0]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,le,J,ae,Ee,Te,Ye,ht,Ut,ot){if(L===It){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(q(i.BLEND),v=!0),L!==cu){if(L!==m||ot!==M){if((p!==pn||y!==pn)&&(i.blendEquation(i.FUNC_ADD),p=pn,y=pn),ot)switch(L){case Un:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bt:i.blendFunc(i.ONE,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,w=null,I=null,S=null,E.set(0,0,0),C=0,m=L,M=ot}return}Ee=Ee||le,Te=Te||J,Ye=Ye||ae,(le!==p||Ee!==y)&&(i.blendEquationSeparate(Le[le],Le[Ee]),p=le,y=Ee),(J!==_||ae!==w||Te!==I||Ye!==S)&&(i.blendFuncSeparate(qe[J],qe[ae],qe[Te],qe[Ye]),_=J,w=ae,I=Te,S=Ye),(ht.equals(E)===!1||Ut!==C)&&(i.blendColor(ht.r,ht.g,ht.b,Ut),E.copy(ht),C=Ut),m=L,M=!1}function ke(L,le){L.side===Tt?Z(i.CULL_FACE):q(i.CULL_FACE);let J=L.side===Pt;le&&(J=!J),Ce(J),L.blending===Un&&L.transparent===!1?F(It):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ae=L.stencilWrite;a.setTest(ae),ae&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function Ne(L){L!==Jm?(q(i.CULL_FACE),L!==P&&(L===zh?i.cullFace(i.BACK):L===Qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),P=L}function ue(L){L!==N&&(B&&i.lineWidth(L),N=L)}function Ue(L,le,J){L?(q(i.POLYGON_OFFSET_FILL),(O!==le||H!==J)&&(i.polygonOffset(le,J),O=le,H=J)):Z(i.POLYGON_OFFSET_FILL)}function xe(L){L?q(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+z-1),Y!==L&&(i.activeTexture(L),Y=L)}function b(L,le,J){J===void 0&&(Y===null?J=i.TEXTURE0+z-1:J=Y);let ae=oe[J];ae===void 0&&(ae={type:void 0,texture:void 0},oe[J]=ae),(ae.type!==L||ae.texture!==le)&&(Y!==J&&(i.activeTexture(J),Y=J),i.bindTexture(L,le||re[L]),ae.type=L,ae.texture=le)}function U(){let L=oe[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){me.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),me.copy(L))}function be(L){W.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Ge(L,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let ae=J.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(le,L.name),J.set(L,ae))}function Ie(L,le){let ae=c.get(le).get(L);l.get(le)!==ae&&(i.uniformBlockBinding(le,ae,L.__bindingPointIndex),l.set(le,ae))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,oe={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,w=null,y=null,I=null,S=null,E=new se(0,0,0),C=0,M=!1,x=null,P=null,N=null,O=null,H=null,me.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:Z,bindFramebuffer:ee,drawBuffers:pe,useProgram:Se,setBlending:F,setMaterial:ke,setFlipSided:Ce,setCullFace:Ne,setLineWidth:ue,setPolygonOffset:Ue,setScissorTest:xe,activeTexture:A,bindTexture:b,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:Re,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:De,viewport:be,reset:ye}}function Od(i,e,t,n){let s=I_(n);switch(t){case ff:return i*e;case mf:return i*e;case gf:return i*e*2;case _u:return i*e/s.components*s.byteLength;case Mu:return i*e/s.components*s.byteLength;case Ha:return i*e*2/s.components*s.byteLength;case bu:return i*e*2/s.components*s.byteLength;case pf:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case wu:return i*e*4/s.components*s.byteLength;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fa:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vf:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I_(i){switch(i){case on:case uf:return{byteLength:1,components:1};case Jr:case hf:case Nt:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case ls:case vu:case Nn:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):Qr("canvas")}function v(A,b,U){let X=1,ne=xe(A);if((ne.width>U||ne.height>U)&&(X=U/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(X*ne.width),Me=Math.floor(X*ne.height);h===void 0&&(h=g(K,Me));let de=b?g(K,Me):h;return de.width=K,de.height=Me,de.getContext("2d").drawImage(A,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Me+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,b,U,X,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(U===i.FLOAT&&(K=i.R32F),U===i.HALF_FLOAT&&(K=i.R16F),U===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.R8UI),U===i.UNSIGNED_SHORT&&(K=i.R16UI),U===i.UNSIGNED_INT&&(K=i.R32UI),U===i.BYTE&&(K=i.R8I),U===i.SHORT&&(K=i.R16I),U===i.INT&&(K=i.R32I)),b===i.RG&&(U===i.FLOAT&&(K=i.RG32F),U===i.HALF_FLOAT&&(K=i.RG16F),U===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RG8UI),U===i.UNSIGNED_SHORT&&(K=i.RG16UI),U===i.UNSIGNED_INT&&(K=i.RG32UI),U===i.BYTE&&(K=i.RG8I),U===i.SHORT&&(K=i.RG16I),U===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGB8UI),U===i.UNSIGNED_SHORT&&(K=i.RGB16UI),U===i.UNSIGNED_INT&&(K=i.RGB32UI),U===i.BYTE&&(K=i.RGB8I),U===i.SHORT&&(K=i.RGB16I),U===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),U===i.UNSIGNED_INT&&(K=i.RGBA32UI),U===i.BYTE&&(K=i.RGBA8I),U===i.SHORT&&(K=i.RGBA16I),U===i.INT&&(K=i.RGBA32I)),b===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let Me=ne?Ga:$e.getTransfer(X);U===i.FLOAT&&(K=i.RGBA32F),U===i.HALF_FLOAT&&(K=i.RGBA16F),U===i.UNSIGNED_BYTE&&(K=Me===ct?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(A,b){let U;return A?b===null||b===ls||b===Oi?U=i.DEPTH24_STENCIL8:b===Nn?U=i.DEPTH32F_STENCIL8:b===Jr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===Oi?U=i.DEPTH_COMPONENT24:b===Nn?U=i.DEPTH_COMPONENT32F:b===Jr&&(U=i.DEPTH_COMPONENT16),U}function I(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==wt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function S(A){let b=A.target;b.removeEventListener("dispose",S),C(b),b.isVideoTexture&&u.delete(b)}function E(A){let b=A.target;b.removeEventListener("dispose",E),x(b)}function C(A){let b=n.get(A);if(b.__webglInit===void 0)return;let U=A.source,X=d.get(U);if(X){let ne=X[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(A),Object.keys(X).length===0&&d.delete(U)}n.remove(A)}function M(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let U=A.source,X=d.get(U);delete X[b.__cacheKey],o.memory.textures--}function x(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let ne=0;ne<b.__webglFramebuffer[X].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[X][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let U=A.textures;for(let X=0,ne=U.length;X<ne;X++){let K=n.get(U[X]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(U[X])}n.remove(A)}let P=0;function N(){P=0}function O(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function H(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function z(A,b){let U=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){let X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,A,b);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function B(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){W(U,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function j(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){W(U,A,b);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function k(A,b){let U=n.get(A);if(A.version>0&&U.__version!==A.version){te(U,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}let Y={[xt]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},oe={[St]:i.NEAREST,[mu]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},he={[M0]:i.NEVER,[A0]:i.ALWAYS,[b0]:i.LESS,[yf]:i.LEQUAL,[w0]:i.EQUAL,[T0]:i.GEQUAL,[S0]:i.GREATER,[E0]:i.NOTEQUAL};function fe(A,b){if(b.type===Nn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===wt||b.magFilter===qr||b.magFilter===Zs||b.magFilter===mn||b.minFilter===wt||b.minFilter===qr||b.minFilter===Zs||b.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,oe[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===St||b.minFilter!==Zs&&b.minFilter!==mn||b.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function me(A,b){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",S));let X=b.source,ne=d.get(X);ne===void 0&&(ne={},d.set(X,ne));let K=H(b);if(K!==A.__cacheKey){ne[K]===void 0&&(ne[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ne[K].usedTimes++;let Me=ne[A.__cacheKey];Me!==void 0&&(ne[A.__cacheKey].usedTimes--,Me.usedTimes===0&&M(b)),A.__cacheKey=K,A.__webglTexture=ne[K].texture}return U}function W(A,b,U){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);let ne=me(A,b),K=b.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+U);let Me=n.get(K);if(K.version!==Me.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);let de=$e.getPrimaries($e.workingColorSpace),ge=b.colorSpace===Di?null:$e.getPrimaries(b.colorSpace),Re=b.colorSpace===Di||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ie=v(b.image,!1,s.maxTextureSize);ie=Ue(b,ie);let ve=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),De=w(b.internalFormat,ve,Pe,b.colorSpace,b.isVideoTexture);fe(X,b);let be,Ge=b.mipmaps,Ie=b.isVideoTexture!==!0,ye=Me.__version===void 0||ne===!0,L=K.dataReady,le=I(b,ie);if(b.isDepthTexture)De=y(b.format===Fi,b.type),ye&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,De,ie.width,ie.height,0,ve,Pe,null));else if(b.isDataTexture)if(Ge.length>0){Ie&&ye&&t.texStorage2D(i.TEXTURE_2D,le,De,Ge[0].width,Ge[0].height);for(let J=0,ae=Ge.length;J<ae;J++)be=Ge[J],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ve,Pe,be.data):t.texImage2D(i.TEXTURE_2D,J,De,be.width,be.height,0,ve,Pe,be.data);b.generateMipmaps=!1}else Ie?(ye&&t.texStorage2D(i.TEXTURE_2D,le,De,ie.width,ie.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,De,ie.width,ie.height,0,ve,Pe,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,Ge[0].width,Ge[0].height,ie.depth);for(let J=0,ae=Ge.length;J<ae;J++)if(be=Ge[J],b.format!==en)if(ve!==null)if(Ie){if(L)if(b.layerUpdates.size>0){let Ee=Od(be.width,be.height,b.format,b.type);for(let Te of b.layerUpdates){let Ye=be.data.subarray(Te*Ee/be.data.BYTES_PER_ELEMENT,(Te+1)*Ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Te,be.width,be.height,1,ve,Ye)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,ie.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,De,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,ie.depth,ve,Pe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,De,be.width,be.height,ie.depth,0,ve,Pe,be.data)}else{Ie&&ye&&t.texStorage2D(i.TEXTURE_2D,le,De,Ge[0].width,Ge[0].height);for(let J=0,ae=Ge.length;J<ae;J++)be=Ge[J],b.format!==en?ve!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,J,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ve,Pe,be.data):t.texImage2D(i.TEXTURE_2D,J,De,be.width,be.height,0,ve,Pe,be.data)}else if(b.isDataArrayTexture)if(Ie){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,ie.width,ie.height,ie.depth),L)if(b.layerUpdates.size>0){let J=Od(ie.width,ie.height,b.format,b.type);for(let ae of b.layerUpdates){let Ee=ie.data.subarray(ae*J/ie.data.BYTES_PER_ELEMENT,(ae+1)*J/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ie.width,ie.height,1,ve,Pe,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ve,Pe,ie.data);else if(b.isData3DTexture)Ie?(ye&&t.texStorage3D(i.TEXTURE_3D,le,De,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ve,Pe,ie.data);else if(b.isFramebufferTexture){if(ye)if(Ie)t.texStorage2D(i.TEXTURE_2D,le,De,ie.width,ie.height);else{let J=ie.width,ae=ie.height;for(let Ee=0;Ee<le;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,De,J,ae,0,ve,Pe,null),J>>=1,ae>>=1}}else if(Ge.length>0){if(Ie&&ye){let J=xe(Ge[0]);t.texStorage2D(i.TEXTURE_2D,le,De,J.width,J.height)}for(let J=0,ae=Ge.length;J<ae;J++)be=Ge[J],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ve,Pe,be):t.texImage2D(i.TEXTURE_2D,J,De,ve,Pe,be);b.generateMipmaps=!1}else if(Ie){if(ye){let J=xe(ie);t.texStorage2D(i.TEXTURE_2D,le,De,J.width,J.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,De,ve,Pe,ie);m(b)&&p(X),Me.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function te(A,b,U){if(b.image.length!==6)return;let X=me(A,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let K=n.get(ne);if(ne.version!==K.__version||X===!0){t.activeTexture(i.TEXTURE0+U);let Me=$e.getPrimaries($e.workingColorSpace),de=b.colorSpace===Di?null:$e.getPrimaries(b.colorSpace),ge=b.colorSpace===Di||Me===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Re=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!Re&&!ie?ve[ae]=v(b.image[ae],!0,s.maxCubemapSize):ve[ae]=ie?b.image[ae].image:b.image[ae],ve[ae]=Ue(b,ve[ae]);let Pe=ve[0],De=r.convert(b.format,b.colorSpace),be=r.convert(b.type),Ge=w(b.internalFormat,De,be,b.colorSpace),Ie=b.isVideoTexture!==!0,ye=K.__version===void 0||X===!0,L=ne.dataReady,le=I(b,Pe);fe(i.TEXTURE_CUBE_MAP,b);let J;if(Re){Ie&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ge,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){J=ve[ae].mipmaps;for(let Ee=0;Ee<J.length;Ee++){let Te=J[Ee];b.format!==en?De!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,Te.width,Te.height,De,be,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Ge,Te.width,Te.height,0,De,be,Te.data)}}}else{if(J=b.mipmaps,Ie&&ye){J.length>0&&le++;let ae=xe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ge,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ie){Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,De,be,ve[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,ve[ae].width,ve[ae].height,0,De,be,ve[ae].data);for(let Ee=0;Ee<J.length;Ee++){let Ye=J[Ee].image[ae].image;Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Ye.width,Ye.height,De,be,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Ge,Ye.width,Ye.height,0,De,be,Ye.data)}}else{Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,be,ve[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,De,be,ve[ae]);for(let Ee=0;Ee<J.length;Ee++){let Te=J[Ee];Ie?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,De,be,Te.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Ge,De,be,Te.image[ae])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=ne.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function re(A,b,U,X,ne,K){let Me=r.convert(U.format,U.colorSpace),de=r.convert(U.type),ge=w(U.internalFormat,Me,de,U.colorSpace),Re=n.get(b),ie=n.get(U);if(ie.__renderTarget=b,!Re.__hasExternalTextures){let ve=Math.max(1,b.width>>K),Pe=Math.max(1,b.height>>K);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,ge,ve,Pe,b.depth,0,Me,de,null):t.texImage2D(ne,K,ge,ve,Pe,0,Me,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,ie.__webglTexture,0,Ce(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,ie.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(A,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let X=b.depthTexture,ne=X&&X.isDepthTexture?X.type:null,K=y(b.stencilBuffer,ne),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Ce(b);Ne(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,K,b.width,b.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,A)}else{let X=b.textures;for(let ne=0;ne<X.length;ne++){let K=X[ne],Me=r.convert(K.format,K.colorSpace),de=r.convert(K.type),ge=w(K.internalFormat,Me,de,K.colorSpace),Re=Ce(b);U&&Ne(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,b.width,b.height):Ne(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let ne=X.__webglTexture,K=Ce(b);if(b.depthTexture.format===Ks)Ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Fi)Ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ee(A){let b=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=X}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,A)}else if(U){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),q(b.__webglDepthbuffer[X],A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),q(b.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,b,U){let X=n.get(A);b!==void 0&&re(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ee(A)}function Se(A){let b=A.texture,U=n.get(A),X=n.get(b);A.addEventListener("dispose",E);let ne=A.textures,K=A.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,o.memory.textures++),K){U.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[de]=[];for(let ge=0;ge<b.mipmaps.length;ge++)U.__webglFramebuffer[de][ge]=i.createFramebuffer()}else U.__webglFramebuffer[de]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)U.__webglFramebuffer[de]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Me)for(let de=0,ge=ne.length;de<ge;de++){let Re=n.get(ne[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ne(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){let ge=ne[de];U.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[de]);let Re=r.convert(ge.format,ge.colorSpace),ie=r.convert(ge.type),ve=w(ge.internalFormat,Re,ie,ge.colorSpace,A.isXRRenderTarget===!0),Pe=Ce(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,U.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),q(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),fe(i.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)re(U.__webglFramebuffer[de][ge],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else re(U.__webglFramebuffer[de],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,ge=ne.length;de<ge;de++){let Re=ne[de],ie=n.get(Re);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),fe(i.TEXTURE_2D,Re),re(U.__webglFramebuffer,A,Re,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Re)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,X.__webglTexture),fe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)re(U.__webglFramebuffer[ge],A,b,i.COLOR_ATTACHMENT0,de,ge);else re(U.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,de,0);m(b)&&p(de),t.unbindTexture()}A.depthBuffer&&ee(A)}function Le(A){let b=A.textures;for(let U=0,X=b.length;U<X;U++){let ne=b[U];if(m(ne)){let K=_(A),Me=n.get(ne).__webglTexture;t.bindTexture(K,Me),p(K),t.unbindTexture()}}}let qe=[],F=[];function ke(A){if(A.samples>0){if(Ne(A)===!1){let b=A.textures,U=A.width,X=A.height,ne=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(A),de=b.length>1;if(de)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);let Re=n.get(b[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,U,X,0,0,U,X,ne,i.NEAREST),l===!0&&(qe.length=0,F.length=0,qe.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(qe.push(K),F.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);let Re=n.get(b[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ce(A){return Math.min(s.maxSamples,A.samples)}function Ne(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(A){let b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ue(A,b){let U=A.colorSpace,X=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Gt&&U!==Di&&($e.getTransfer(U)===ct?(X!==en||ne!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=pe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ne}function L_(i,e){function t(n,s=Di){let r,o=$e.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uf)return i.BYTE;if(n===hf)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===vu)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Nt)return i.HALF_FLOAT;if(n===ff)return i.ALPHA;if(n===pf)return i.RGB;if(n===en)return i.RGBA;if(n===mf)return i.LUMINANCE;if(n===gf)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===Mu)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===bu)return i.RG_INTEGER;if(n===wu)return i.RGBA_INTEGER;if(n===ca||n===ua||n===ha||n===da)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===uc||n===hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===vc||n===xc||n===yc||n===_c||n===Mc||n===bc||n===wc||n===Sc||n===Ec||n===Tc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===Cc||n===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fa)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vf||n===Ic||n===Dc||n===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xc=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tn=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},N_={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ze({vertexShader:U_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends Bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,v=new qc,m=t.getContextAttributes(),p=null,_=null,w=[],y=[],I=new ce,S=null,E=new Et;E.viewport=new nt;let C=new Et;C.viewport=new nt;let M=[E,C],x=new Xc,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=w[W];return te===void 0&&(te=new jr,w[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=w[W];return te===void 0&&(te=new jr,w[W]=te),te.getGripSpace()},this.getHand=function(W){let te=w[W];return te===void 0&&(te=new jr,w[W]=te),te.getHandSpace()};function O(W){let te=y.indexOf(W.inputSource);if(te===-1)return;let re=w[te];re!==void 0&&(re.update(W.inputSource,W.frame,c||o),re.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let W=0;W<w.length;W++){let te=y[W];te!==null&&(y[W]=null,w[W].disconnect(te))}P=null,N=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new bt(f.framebufferWidth,f.framebufferHeight,{format:en,type:on,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,re=null,q=null;m.depth&&(q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Fi:Ks,re=m.stencil?Oi:ls);let Z={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new bt(d.textureWidth,d.textureHeight,{format:en,type:on,depthTexture:new ar(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(W){for(let te=0;te<W.removed.length;te++){let re=W.removed[te],q=y.indexOf(re);q>=0&&(y[q]=null,w[q].disconnect(re))}for(let te=0;te<W.added.length;te++){let re=W.added[te],q=y.indexOf(re);if(q===-1){for(let ee=0;ee<w.length;ee++)if(ee>=y.length){y.push(re),q=ee;break}else if(y[ee]===null){y[ee]=re,q=ee;break}if(q===-1)break}let Z=w[q];Z&&Z.connect(re)}}let B=new R,j=new R;function k(W,te,re){B.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);let q=B.distanceTo(j),Z=te.projectionMatrix.elements,ee=re.projectionMatrix.elements,pe=Z[14]/(Z[10]-1),Se=Z[14]/(Z[10]+1),Le=(Z[9]+1)/Z[5],qe=(Z[9]-1)/Z[5],F=(Z[8]-1)/Z[0],ke=(ee[8]+1)/ee[0],Ce=pe*F,Ne=pe*ke,ue=q/(-F+ke),Ue=ue*-F;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Z[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let xe=pe+ue,A=Se+ue,b=Ce-Ue,U=Ne+(q-Ue),X=Le*Se/A*xe,ne=qe*Se/A*xe;W.projectionMatrix.makePerspective(b,U,X,ne,xe,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let te=W.near,re=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(re=v.depthFar)),x.near=C.near=E.near=te,x.far=C.far=E.far=re,(P!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far),E.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,x.layers.mask=E.layers.mask|C.layers.mask;let q=W.parent,Z=x.cameras;Y(x,q);for(let ee=0;ee<Z.length;ee++)Y(Z[ee],q);Z.length===2?k(x,E,C):x.projectionMatrix.copy(E.projectionMatrix),oe(W,x,q)};function oe(W,te,re){re===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let he=null;function fe(W,te){if(u=te.getViewerPose(c||o),g=te,u!==null){let re=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let q=!1;re.length!==x.cameras.length&&(x.cameras.length=0,q=!0);for(let ee=0;ee<re.length;ee++){let pe=re[ee],Se=null;if(f!==null)Se=f.getViewport(pe);else{let qe=h.getViewSubImage(d,pe);Se=qe.viewport,ee===0&&(e.setRenderTargetTextures(_,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(_))}let Le=M[ee];Le===void 0&&(Le=new Et,Le.layers.enable(ee),Le.viewport=new nt,M[ee]=Le),Le.matrix.fromArray(pe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(pe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Se.x,Se.y,Se.width,Se.height),ee===0&&(x.matrix.copy(Le.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),q===!0&&x.cameras.push(Le)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let ee=h.getDepthInformation(re[0]);ee&&ee.isValid&&ee.texture&&v.init(e,ee,s.renderState)}}for(let re=0;re<w.length;re++){let q=y[re],Z=w[re];q!==null&&Z!==void 0&&Z.update(q,te,c||o)}he&&he(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let me=new Sf;me.setAnimationLoop(fe),this.setAnimationLoop=function(W){he=W},this.dispose=function(){}}},rs=new vn,F_=new Ve;function B_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(rs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let y=w.program;n.uniformBlockBinding(_,y)}function c(_,w){let y=s[_.id];y===void 0&&(g(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(_,I);let S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function u(_){let w=h();_.__bindingPointIndex=w;let y=i.createBuffer(),I=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],y=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let S=0,E=y.length;S<E;S++){let C=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,x=C.length;M<x;M++){let P=C[M];if(f(P,S,M,I)===!0){let N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],H=0;for(let z=0;z<O.length;z++){let B=O[z],j=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+H,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,w,y,I){let S=_.value,E=w+"_"+y;if(I[E]===void 0)return typeof S=="number"||typeof S=="boolean"?I[E]=S:I[E]=S.clone(),!0;{let C=I[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return I[E]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(_){let w=_.uniforms,y=0,I=16;for(let E=0,C=w.length;E<C;E++){let M=Array.isArray(w[E])?w[E]:[w[E]];for(let x=0,P=M.length;x<P;x++){let N=M[x],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,z=O.length;H<z;H++){let B=O[H],j=v(B),k=y%I,Y=k%j.boundary,oe=k+Y;y+=Y,oe!==0&&I-oe<j.storage&&(y+=I-oe),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=j.storage}}}let S=y%I;return S>0&&(y+=I-S),_.__size=y,_.__cache={},this}function v(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var wa=class{constructor(e={}){let{canvas:t=W0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,I=!1,S=0,E=0,C=null,M=-1,x=null,P=new nt,N=new nt,O=null,H=new se(0),z=0,B=t.width,j=t.height,k=1,Y=null,oe=null,he=new nt(0,0,B,j),fe=new nt(0,0,B,j),me=!1,W=new io,te=!1,re=!1,q=new Ve,Z=new Ve,ee=new R,pe=new nt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function qe(){return C===null?k:1}let F=n;function ke(T,V){return t.getContext(T,V)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){let V="webgl2";if(F=ke(V,T),F===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Ne,ue,Ue,xe,A,b,U,X,ne,K,Me,de,ge,Re,ie,ve,Pe,De,be,Ge,Ie,ye,L;function le(){Ce=new ty(F),Ce.init(),Ie=new L_(F,Ce),Ne=new jx(F,Ce,e,Ie),ue=new P_(F,Ce),Ne.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Ue=new sy(F),xe=new v_,A=new D_(F,Ce,ue,xe,Ne,Ie,Ue),b=new Jx(y),U=new ey(y),X=new hg(F),ye=new Yx(F,X),ne=new ny(F,X,Ue,ye),K=new oy(F,ne,X,Ue),De=new ry(F,Ne,A),ie=new Kx(xe),Me=new g_(y,b,U,Ce,Ne,ye,ie),de=new B_(y,xe),ge=new y_,Re=new E_(Ce),Pe=new qx(y,b,U,ue,K,f,l),ve=new R_(y,K,Ne),L=new z_(F,Ue,Ne,ue),be=new Zx(F,Ce,Ue),Ge=new iy(F,Ce,Ue),Ue.programs=Me.programs,y.capabilities=Ne,y.extensions=Ce,y.properties=xe,y.renderLists=ge,y.shadowMap=ve,y.state=ue,y.info=Ue}le();let J=new Yc(y,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(B,j,!1))},this.getSize=function(T){return T.set(B,j)},this.setSize=function(T,V,Q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,j=V,t.width=Math.floor(T*k),t.height=Math.floor(V*k),Q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(B*k,j*k).floor()},this.setDrawingBufferSize=function(T,V,Q){B=T,j=V,k=Q,t.width=Math.floor(T*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,V,Q,$){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,V,Q,$),ue.viewport(P.copy(he).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,V,Q,$){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,V,Q,$),ue.scissor(N.copy(fe).multiplyScalar(k).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){ue.setScissorTest(me=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,V=!0,Q=!0){let $=0;if(T){let G=!1;if(C!==null){let _e=C.texture.format;G=_e===wu||_e===bu||_e===Mu}if(G){let _e=C.texture.type,Ae=_e===on||_e===ls||_e===Jr||_e===Oi||_e===xu||_e===yu,Oe=Pe.getClearColor(),Fe=Pe.getClearAlpha(),Ze=Oe.r,je=Oe.g,Be=Oe.b;Ae?(g[0]=Ze,g[1]=je,g[2]=Be,g[3]=Fe,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ze,v[1]=je,v[2]=Be,v[3]=Fe,F.clearBufferiv(F.COLOR,0,v))}else $|=F.COLOR_BUFFER_BIT}V&&($|=F.DEPTH_BUFFER_BIT),Q&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ge.dispose(),Re.dispose(),xe.dispose(),b.dispose(),U.dispose(),K.dispose(),ye.dispose(),L.dispose(),Me.dispose(),J.dispose(),J.removeEventListener("sessionstart",Cr),J.removeEventListener("sessionend",Ts),ni.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=Ue.autoReset,V=ve.enabled,Q=ve.autoUpdate,$=ve.needsUpdate,G=ve.type;le(),Ue.autoReset=T,ve.enabled=V,ve.autoUpdate=Q,ve.needsUpdate=$,ve.type=G}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){let V=T.target;V.removeEventListener("dispose",Ye),ht(V)}function ht(T){Ut(T),xe.remove(T)}function Ut(T){let V=xe.get(T).programs;V!==void 0&&(V.forEach(function(Q){Me.releaseProgram(Q)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Q,$,G,_e){V===null&&(V=Se);let Ae=G.isMesh&&G.matrixWorld.determinant()<0,Oe=Zm(T,V,Q,$,G);ue.setMaterial($,Ae);let Fe=Q.index,Ze=1;if($.wireframe===!0){if(Fe=ne.getWireframeAttribute(Q),Fe===void 0)return;Ze=2}let je=Q.drawRange,Be=Q.attributes.position,rt=je.start*Ze,dt=(je.start+je.count)*Ze;_e!==null&&(rt=Math.max(rt,_e.start*Ze),dt=Math.min(dt,(_e.start+_e.count)*Ze)),Fe!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Fe.count)):Be!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,Be.count));let mt=dt-rt;if(mt<0||mt===1/0)return;ye.setup(G,$,Oe,Q,Fe);let Qt,at=be;if(Fe!==null&&(Qt=X.get(Fe),at=Ge,at.setIndex(Qt)),G.isMesh)$.wireframe===!0?(ue.setLineWidth($.wireframeLinewidth*qe()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(G.isLine){let He=$.linewidth;He===void 0&&(He=1),ue.setLineWidth(He*qe()),G.isLineSegments?at.setMode(F.LINES):G.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else G.isPoints?at.setMode(F.POINTS):G.isSprite&&at.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let He=G._multiDrawStarts,ii=G._multiDrawCounts,lt=G._multiDrawCount,Cn=Fe?X.get(Fe).bytesPerElement:1,Rs=xe.get($).currentProgram.getUniforms();for(let nn=0;nn<lt;nn++)Rs.setValue(F,"_gl_DrawID",nn),at.render(He[nn]/Cn,ii[nn])}else if(G.isInstancedMesh)at.renderInstances(rt,mt,G.count);else if(Q.isInstancedBufferGeometry){let He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ii=Math.min(Q.instanceCount,He);at.renderInstances(rt,mt,ii)}else at.render(rt,mt)};function ot(T,V,Q){T.transparent===!0&&T.side===Tt&&T.forceSinglePass===!1?(T.side=Pt,T.needsUpdate=!0,Do(T,V,Q),T.side=Mt,T.needsUpdate=!0,Do(T,V,Q),T.side=Tt):Do(T,V,Q)}this.compile=function(T,V,Q=null){Q===null&&(Q=T),p=Re.get(Q),p.init(V),w.push(p),Q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==Q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let $=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let Oe=_e[Ae];ot(Oe,Q,G),$.add(Oe)}else ot(_e,Q,G),$.add(_e)}),w.pop(),p=null,$},this.compileAsync=function(T,V,Q=null){let $=this.compile(T,V,Q);return new Promise(G=>{function _e(){if($.forEach(function(Ae){xe.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){G(T);return}setTimeout(_e,10)}Ce.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Jt=null;function Rn(T){Jt&&Jt(T)}function Cr(){ni.stop()}function Ts(){ni.start()}let ni=new Sf;ni.setAnimationLoop(Rn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(T){Jt=T,J.setAnimationLoop(T),T===null?ni.stop():ni.start()},J.addEventListener("sessionstart",Cr),J.addEventListener("sessionend",Ts),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,C),p=Re.get(T,w.length),p.init(V),w.push(p),Z.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(Z),re=this.localClippingEnabled,te=ie.init(this.clippingPlanes,re),m=ge.get(T,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&Co(_e,V,-1/0,y.sortObjects)}Co(T,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Y,oe),Le=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Le&&Pe.addToRenderList(m,T),this.info.render.frame++,te===!0&&ie.beginShadows();let Q=p.state.shadowsArray;ve.render(Q,T,V),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){let _e=V.cameras;if(G.length>0)for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){let Fe=_e[Ae];Io($,G,T,Fe)}Le&&Pe.render(T);for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++){let Fe=_e[Ae];Po(m,T,Fe,Fe.viewport)}}else G.length>0&&Io($,G,T,V),Le&&Pe.render(T),Po(m,T,V);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,V),ye.resetDefaultState(),M=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],te===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Co(T,V,Q,$){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){$&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);let Ae=K.update(T),Oe=T.material;Oe.visible&&m.push(T,Ae,Oe,Q,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let Ae=K.update(T),Oe=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),pe.copy(Ae.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(Oe)){let Fe=Ae.groups;for(let Ze=0,je=Fe.length;Ze<je;Ze++){let Be=Fe[Ze],rt=Oe[Be.materialIndex];rt&&rt.visible&&m.push(T,Ae,rt,Q,pe.z,Be)}}else Oe.visible&&m.push(T,Ae,Oe,Q,pe.z,null)}}let _e=T.children;for(let Ae=0,Oe=_e.length;Ae<Oe;Ae++)Co(_e[Ae],V,Q,$)}function Po(T,V,Q,$){let G=T.opaque,_e=T.transmissive,Ae=T.transparent;p.setupLightsView(Q),te===!0&&ie.setGlobalState(y.clippingPlanes,Q),$&&ue.viewport(P.copy($)),G.length>0&&As(G,V,Q),_e.length>0&&As(_e,V,Q),Ae.length>0&&As(Ae,V,Q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Io(T,V,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new bt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Nt:on,minFilter:mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let _e=p.state.transmissionRenderTarget[$.id],Ae=$.viewport||P;_e.setSize(Ae.z,Ae.w);let Oe=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(H),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Le&&Pe.render(Q);let Fe=y.toneMapping;y.toneMapping=Ui;let Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),te===!0&&ie.setGlobalState(y.clippingPlanes,$),As(T,Q,$),A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Be=0,rt=V.length;Be<rt;Be++){let dt=V[Be],mt=dt.object,Qt=dt.geometry,at=dt.material,He=dt.group;if(at.side===Tt&&mt.layers.test($.layers)){let ii=at.side;at.side=Pt,at.needsUpdate=!0,Pr(mt,Q,$,Qt,at,He),at.side=ii,at.needsUpdate=!0,je=!0}}je===!0&&(A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e))}y.setRenderTarget(Oe),y.setClearColor(H,z),Ze!==void 0&&($.viewport=Ze),y.toneMapping=Fe}function As(T,V,Q){let $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,_e=T.length;G<_e;G++){let Ae=T[G],Oe=Ae.object,Fe=Ae.geometry,Ze=$===null?Ae.material:$,je=Ae.group;Oe.layers.test(Q.layers)&&Pr(Oe,V,Q,Fe,Ze,je)}}function Pr(T,V,Q,$,G,_e){T.onBeforeRender(y,V,Q,$,G,_e),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,V,Q,$,T,_e),G.transparent===!0&&G.side===Tt&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,y.renderBufferDirect(Q,V,$,G,T,_e),G.side=Mt,G.needsUpdate=!0,y.renderBufferDirect(Q,V,$,G,T,_e),G.side=Tt):y.renderBufferDirect(Q,V,$,G,T,_e),T.onAfterRender(y,V,Q,$,G,_e)}function Do(T,V,Q){V.isScene!==!0&&(V=Se);let $=xe.get(T),G=p.state.lights,_e=p.state.shadowsArray,Ae=G.state.version,Oe=Me.getParameters(T,G.state,_e,V,Q),Fe=Me.getProgramCacheKey(Oe),Ze=$.programs;$.environment=T.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(T.isMeshStandardMaterial?U:b).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",Ye),Ze=new Map,$.programs=Ze);let je=Ze.get(Fe);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Ae)return Fh(T,Oe),je}else Oe.uniforms=Me.getUniforms(T),T.onBeforeCompile(Oe,y),je=Me.acquireProgram(Oe,Fe),Ze.set(Fe,je),$.uniforms=Oe.uniforms;let Be=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ie.uniform),Fh(T,Oe),$.needsLights=Km(T),$.lightsStateVersion=Ae,$.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function Oh(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Fh(T,V){let Q=xe.get(T);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Zm(T,V,Q,$,G){V.isScene!==!0&&(V=Se),A.resetTextureUnits();let _e=V.fog,Ae=$.isMeshStandardMaterial?V.environment:null,Oe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gt,Fe=($.isMeshStandardMaterial?U:b).get($.envMap||Ae),Ze=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Q.morphAttributes.position,rt=!!Q.morphAttributes.normal,dt=!!Q.morphAttributes.color,mt=Ui;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=y.toneMapping);let Qt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,at=Qt!==void 0?Qt.length:0,He=xe.get($),ii=p.state.lights;if(te===!0&&(re===!0||T!==x)){let dn=T===x&&$.id===M;ie.setState($,T,dn)}let lt=!1;$.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ii.state.version||He.outputColorSpace!==Oe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Fe||$.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==Ze||He.vertexTangents!==je||He.morphTargets!==Be||He.morphNormals!==rt||He.morphColors!==dt||He.toneMapping!==mt||He.morphTargetsCount!==at)&&(lt=!0):(lt=!0,He.__version=$.version);let Cn=He.currentProgram;lt===!0&&(Cn=Do($,V,G));let Rs=!1,nn=!1,Ir=!1,gt=Cn.getUniforms(),Xn=He.uniforms;if(ue.useProgram(Cn.program)&&(Rs=!0,nn=!0,Ir=!0),$.id!==M&&(M=$.id,nn=!0),Rs||x!==T){ue.buffers.depth.getReversed()?(q.copy(T.projectionMatrix),q0(q),Y0(q),gt.setValue(F,"projectionMatrix",q)):gt.setValue(F,"projectionMatrix",T.projectionMatrix),gt.setValue(F,"viewMatrix",T.matrixWorldInverse);let Si=gt.map.cameraPosition;Si!==void 0&&Si.setValue(F,ee.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,nn=!0,Ir=!0)}if(G.isSkinnedMesh){gt.setOptional(F,G,"bindMatrix"),gt.setOptional(F,G,"bindMatrixInverse");let dn=G.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),gt.setValue(F,"boneTexture",dn.boneTexture,A))}G.isBatchedMesh&&(gt.setOptional(F,G,"batchingTexture"),gt.setValue(F,"batchingTexture",G._matricesTexture,A),gt.setOptional(F,G,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",G._indirectTexture,A),gt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",G._colorsTexture,A));let Dr=Q.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&De.update(G,Q,Cn),(nn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,gt.setValue(F,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xn.envMap.value=Fe,Xn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Xn.envMapIntensity.value=V.environmentIntensity),nn&&(gt.setValue(F,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&jm(Xn,Ir),_e&&$.fog===!0&&de.refreshFogUniforms(Xn,_e),de.refreshMaterialUniforms(Xn,$,k,j,p.state.transmissionRenderTarget[T.id]),Qs.upload(F,Oh(He),Xn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qs.upload(F,Oh(He),Xn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(F,"center",G.center),gt.setValue(F,"modelViewMatrix",G.modelViewMatrix),gt.setValue(F,"normalMatrix",G.normalMatrix),gt.setValue(F,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let dn=$.uniformsGroups;for(let Si=0,Ei=dn.length;Si<Ei;Si++){let Bh=dn[Si];L.update(Bh,Cn),L.bind(Bh,Cn)}}return Cn}function jm(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Km(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,V,Q){xe.get(T.texture).__webglTexture=V,xe.get(T.depthTexture).__webglTexture=Q;let $=xe.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){let Q=xe.get(T);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Q=0){C=T,S=V,E=Q;let $=!0,G=null,_e=!1,Ae=!1;if(T){let Fe=xe.get(T);if(Fe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Fe.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Fe.__hasExternalTextures)A.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&xe.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ae=!0);let je=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[V])?G=je[V][Q]:G=je[V],_e=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?G=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[Q]:G=je,P.copy(T.viewport),N.copy(T.scissor),O=T.scissorTest}else P.copy(he).multiplyScalar(k).floor(),N.copy(fe).multiplyScalar(k).floor(),O=me;if(ue.bindFramebuffer(F.FRAMEBUFFER,G)&&$&&ue.drawBuffers(T,G),ue.viewport(P),ue.scissor(N),ue.setScissorTest(O),_e){let Fe=xe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,Q)}else if(Ae){let Fe=xe.get(T.texture),Ze=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,Ze)}M=-1},this.readRenderTargetPixels=function(T,V,Q,$,G,_e,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){ue.bindFramebuffer(F.FRAMEBUFFER,Oe);try{let Fe=T.texture,Ze=Fe.format,je=Fe.type;if(!Ne.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-$&&Q>=0&&Q<=T.height-G&&F.readPixels(V,Q,$,G,Ie.convert(Ze),Ie.convert(je),_e)}finally{let Fe=C!==null?xe.get(C).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,V,Q,$,G,_e,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){let Fe=T.texture,Ze=Fe.format,je=Fe.type;if(!Ne.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-$&&Q>=0&&Q<=T.height-G){ue.bindFramebuffer(F.FRAMEBUFFER,Oe);let Be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(V,Q,$,G,Ie.convert(Ze),Ie.convert(je),0);let rt=C!==null?xe.get(C).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,rt);let dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await X0(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.deleteBuffer(Be),F.deleteSync(dt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,Q=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);let $=Math.pow(2,-Q),G=Math.floor(T.image.width*$),_e=Math.floor(T.image.height*$),Ae=V!==null?V.x:0,Oe=V!==null?V.y:0;A.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ae,Oe,G,_e),ue.unbindTexture()},this.copyTextureToTexture=function(T,V,Q=null,$=null,G=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],V=arguments[2],G=arguments[3]||0,Q=null);let _e,Ae,Oe,Fe,Ze,je,Be,rt,dt,mt=T.isCompressedTexture?T.mipmaps[G]:T.image;Q!==null?(_e=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,Ze=Q.min.y,je=Q.isBox3?Q.min.z:0):(_e=mt.width,Ae=mt.height,Oe=mt.depth||1,Fe=0,Ze=0,je=0),$!==null?(Be=$.x,rt=$.y,dt=$.z):(Be=0,rt=0,dt=0);let Qt=Ie.convert(V.format),at=Ie.convert(V.type),He;V.isData3DTexture?(A.setTexture3D(V,0),He=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(A.setTexture2DArray(V,0),He=F.TEXTURE_2D_ARRAY):(A.setTexture2D(V,0),He=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let ii=F.getParameter(F.UNPACK_ROW_LENGTH),lt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=F.getParameter(F.UNPACK_SKIP_PIXELS),Rs=F.getParameter(F.UNPACK_SKIP_ROWS),nn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je);let Ir=T.isDataArrayTexture||T.isData3DTexture,gt=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Xn=xe.get(T),Dr=xe.get(V),dn=xe.get(Xn.__renderTarget),Si=xe.get(Dr.__renderTarget);ue.bindFramebuffer(F.READ_FRAMEBUFFER,dn.__webglFramebuffer),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ei=0;Ei<Oe;Ei++)Ir&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(T).__webglTexture,G,je+Ei),T.isDepthTexture?(gt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(V).__webglTexture,G,dt+Ei),F.blitFramebuffer(Fe,Ze,_e,Ae,Be,rt,_e,Ae,F.DEPTH_BUFFER_BIT,F.NEAREST)):gt?F.copyTexSubImage3D(He,G,Be,rt,dt+Ei,Fe,Ze,_e,Ae):F.copyTexSubImage2D(He,G,Be,rt,dt+Ei,Fe,Ze,_e,Ae);ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(He,G,Be,rt,dt,_e,Ae,Oe,Qt,at,mt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(He,G,Be,rt,dt,_e,Ae,Oe,Qt,mt.data):F.texSubImage3D(He,G,Be,rt,dt,_e,Ae,Oe,Qt,at,mt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,Be,rt,_e,Ae,Qt,at,mt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,Be,rt,mt.width,mt.height,Qt,mt.data):F.texSubImage2D(F.TEXTURE_2D,G,Be,rt,_e,Ae,Qt,at,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ii),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nn),G===0&&V.generateMipmaps&&F.generateMipmap(He),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Q=null,$=null,G=0){return T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,T=arguments[2],V=arguments[3],G=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,Q,$,G)},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){S=0,E=0,C=null,ue.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var so=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new R,hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends Zt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Fr=new R,Ws=new R,Xs=new R,qs=new ce,Br=new ce,Cf=new Ve,$o=new R,zr=new R,ea=new R,Fd=new ce,Xl=new ce,Bd=new ce,ro=class extends yt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lr(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new hs(n,3,0,!1)),Gs.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ta($o.set(-.5,-.5,0),Xs,o,Ws,s,r),ta(zr.set(.5,-.5,0),Xs,o,Ws,s,r),ta(ea.set(.5,.5,0),Xs,o,Ws,s,r),Fd.set(0,0),Xl.set(1,0),Bd.set(1,1);let a=e.ray.intersectTriangle($o,zr,ea,!1,Fr);if(a===null&&(ta(zr.set(-.5,.5,0),Xs,o,Ws,s,r),Xl.set(0,1),a=e.ray.intersectTriangle($o,ea,zr,!1,Fr),a===null))return;let l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:Li.getInterpolation(Fr,$o,zr,ea,Fd,Xl,Bd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ta(i,e,t,n,s,r){qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*qs.x-s*qs.y,Br.y=s*qs.x+r*qs.y):Br.copy(qs),i.copy(e),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(Cf)}var zd=new R,kd=new nt,Hd=new nt,k_=new R,Vd=new Ve,na=new R,ql=new an,Gd=new Ve,Yl=new cs,Sa=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(s),e.ray.intersectsSphere(ql)!==!1&&(Gd.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(Gd),!(this.boundingBox!==null&&Yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;kd.fromBufferAttribute(s.attributes.skinIndex,e),Hd.fromBufferAttribute(s.attributes.skinWeight,e),zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Hd.getComponent(r);if(o!==0){let a=kd.getComponent(r);Vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(k_.copy(zd).applyMatrix4(Vd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},oo=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ki=class extends At{constructor(e=null,t=1,n=1,s,r,o,a,l,c=St,u=St,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wd=new Ve,H_=new Ve,Ea=class i{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:H_;Wd.multiplyMatrices(a,t[r]),Wd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ki(t,e,e,en,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new oo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},pi=class extends Qe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new Ve,Xd=new Ve,ia=[],qd=new gn,V_=new Ve,kr=new We,Hr=new an,ds=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),qd.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Hr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Xd.multiplyMatrices(n,Ys),kr.matrixWorld=Xd,kr.raycast(e,ia);for(let o=0,a=ia.length;o<a;o++){let l=ia[o];l.instanceId=r,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ki(new Float32Array(s*this.count),s,this.count,_u,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yn=class extends Zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new R,Aa=new R,Yd=new Ve,Vr=new cs,sa=new an,Zl=new R,Zd=new R,ur=class extends yt{constructor(e=new it,t=new Yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Yd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),_=u.getX(v+1),w=ra(this,e,Vr,l,p,_);w&&t.push(w)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=ra(this,e,Vr,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=ra(this,e,Vr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=ra(this,e,Vr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ra(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Aa,Zl,Zd)>n)return;Zl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Zl);if(!(l<e.near||l>e.far))return{distance:l,point:Zd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var jd=new R,Kd=new R,fs=class extends ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)jd.fromBufferAttribute(t,s),Kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jd.distanceTo(Kd);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hr=class extends ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xn=class extends Zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new Ve,Zc=new cs,oa=new an,aa=new R,cn=class extends yt{constructor(e=new it,t=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Jd.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);aa.fromBufferAttribute(h,m),Qd(aa,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)aa.fromBufferAttribute(h,g),Qd(aa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qd(i,e,t,n,s,r,o){let a=Zc.distanceSqToPoint(i);if(a<t){let l=new R;Zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fn=class extends At{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ra=class i extends it{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new R,d=new ce,f=new R,g=new R,v=new R,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let w=n+_*u*s,y=Math.sin(w),I=Math.cos(w);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*y,h.y=e[S].y,h.z=e[S].x*I,o.push(h.x,h.y,h.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);let E=l[3*S+0]*y,C=l[3*S+1],M=l[3*S+0]*I;c.push(E,C,M)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,I=y,S=y+e.length,E=y+e.length+1,C=y+1;r.push(I,S,C),r.push(E,C,S)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var yn=class i extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ps=class i extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function _(){let y=new R,I=new R,S=0,E=(t-e)/n;for(let C=0;C<=r;C++){let M=[],x=C/r,P=x*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,H=O*l+a,z=Math.sin(H),B=Math.cos(H);I.x=P*z,I.y=-x*n+m,I.z=P*B,h.push(I.x,I.y,I.z),y.set(z,E,B).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-x),M.push(g++)}v.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let x=v[M][C],P=v[M+1][C],N=v[M+1][C+1],O=v[M][C+1];(e>0||M!==0)&&(u.push(x,P,O),S+=3),(t>0||M!==r-1)&&(u.push(P,N,O),S+=3)}c.addGroup(p,S,0),p+=S}function w(y){let I=g,S=new ce,E=new R,C=0,M=y===!0?e:t,x=y===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let H=N/s*l+a,z=Math.cos(H),B=Math.sin(H);E.x=M*B,E.y=m*x,E.z=M*z,h.push(E.x,E.y,E.z),d.push(0,x,0),S.x=z*.5+.5,S.y=B*.5*x+.5,f.push(S.x,S.y),g++}for(let N=0;N<s;N++){let O=I+N,H=P+N;y===!0?u.push(H,H+1,O):u.push(H+1,H,O),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jc=class i extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new R,y=new R,I=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],w),f(t[S+1],y),f(t[S+2],I),l(w,y,I,_)}function l(_,w,y,I){let S=I+1,E=[];for(let C=0;C<=S;C++){E[C]=[];let M=_.clone().lerp(y,C/S),x=w.clone().lerp(y,C/S),P=S-C;for(let N=0;N<=P;N++)N===0&&C===S?E[C][N]=M:E[C][N]=M.clone().lerp(x,N/P)}for(let C=0;C<S;C++)for(let M=0;M<2*(S-C)-1;M++){let x=Math.floor(M/2);M%2===0?(d(E[C][x+1]),d(E[C+1][x]),d(E[C][x])):(d(E[C][x+1]),d(E[C+1][x+1]),d(E[C+1][x]))}}function c(_){let w=new R;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(_),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){let _=new R;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let y=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;o.push(y,1-I)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let w=o[_+0],y=o[_+2],I=o[_+4],S=Math.max(w,y,I),E=Math.min(w,y,I);S>.9&&E<.1&&(w<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let _=new R,w=new R,y=new R,I=new R,S=new ce,E=new ce,C=new ce;for(let M=0,x=0;M<r.length;M+=9,x+=6){_.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),I.copy(_).add(w).add(y).divideScalar(3);let P=m(I);v(S,x+0,_,P),v(E,x+2,w,P),v(C,x+4,y,P)}}function v(_,w,y,I){I<0&&_.x===1&&(o[w]=_.x-1),y.x===0&&y.z===0&&(o[w]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ao=class i extends jc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ca=class i extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new R,g=new ce;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let _=p+m,w=_,y=_+n+1,I=_+n+2,S=_+1;a.push(w,y,S),a.push(y,I,S)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _n=class i extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],w=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let S=I/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(S+y,1-w),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let w=u[p][_+1],y=u[p][_],I=u[p+1][_],S=u[p+1][_+1];(p!==0||o>0)&&f.push(w,y,S),(p!==n-1||l<Math.PI)&&f.push(y,I,S)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var dr=class extends ze{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Zn=class extends Zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jt=class extends Zn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends Zt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function la(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function G_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function W_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $d(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Pf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gh:r=e,a=2*t-n;break;case Wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:o=e,l=2*n-t;break;case Wh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+_*o[c+I]+w*o[l+I]+y*o[h+I];return r}},Jc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Qc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&G_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ir;var Vi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=nr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Mn{};Ia.prototype.ValueTypeName="color";var mi=class extends Mn{};mi.prototype.ValueTypeName="number";var $c=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Yt.slerpFlat(r,0,o,c-a,o,c,l);return r}},gi=class extends Mn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion";gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=nr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Mn{};vi.prototype.ValueTypeName="vector";var Da=class{constructor(e="",t=-1,n=[],s=v0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(q_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=W_(l);l=$d(l,1,u),c=$d(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new mi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,v){if(f.length!==0){let m=[],p=[];Pf(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(let v in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let w=d[g];m.push(w.time),p.push(w.morphTarget===v?1:0)}s.push(new mi(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(vi,f+".position",d,"pos",s),n(gi,f+".quaternion",d,"rot",s),n(vi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function X_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Ia;case"quaternion":return gi;case"bool":case"boolean":return Vi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function q_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=X_(i.type);if(i.times===void 0){let t=[],n=[];Pf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},eu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Y_=new eu,xi=class{constructor(e){this.manager=e!==void 0?e:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ci={},tu=class extends Error{constructor(e,t){super(e),this.response=t}},lo=class extends xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ci[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){_();function _(){h.read().then(({done:w,value:y})=>{if(w)p.close();else{v+=y.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let S=0,E=u.length;S<E;S++){let C=u[S];C.onProgress&&C.onProgress(I)}p.enqueue(y),_()}},w=>{p.error(w)})}}});return new Response(m)}else throw new tu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ni.add(e,c);let u=ci[e];delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var nu=class extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qr("img");function l(){u(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var bn=class extends xi{constructor(e){super(e)}load(e,t,n,s){let r=new At,o=new nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ms=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},La=class extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jl=new Ve,ef=new R,tf=new R,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},iu=class extends co{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Na=class extends ms{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nf=new Ve,Gr=new R,Kl=new R,su=class extends co{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),Kl.copy(n.position),Kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kl),n.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}},jn=class extends ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ru=class extends co{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ua=class extends ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Oa=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,l),r.manager.itemStart(e)}};var Kn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sf(){return performance.now()}var Au="\\[\\]\\.:\\/",Z_=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",j_="[^"+Au.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",Ru),J_=/(WCOD+)?/.source.replace("WCOD",j_),Q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),eM=new RegExp("^"+K_+J_+Q_+$_+"$"),tM=["material","materials","bones","map"],ou=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(e){let t=eM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=ou;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sw=new Float32Array(1);var rf=new Ve,Fa=class{constructor(e,t,n=0,s=1/0){this.ray=new cs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,n=[]){return au(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)au(e[s],this,n,t);return n.sort(of),n}};function of(i,e){return i.distance-e.distance}function au(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)au(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xe=.6,st=31.5,Jn=6,Cu=20,Xa=512,Bn=3,wn=Xe-Bn,mr=Jn*.95;var _i=new R(-620,0,-250),qa=90,If=420,Df=-1.107,Lf=40,Pu=.002;var D={scene:null,camera:null,renderer:null,composer:null,islandGroup:null,SUN_DIR:new R(1,.4,0).normalize(),sunFixedPos:null,water:null,mtnGeo:null,_starbox:null,sunLight:null,moonLight:null,hemiLight:null,ambLight:null,rimLight:null,grainPass:null,dofPass:null,euler:new vn(0,0,0,"YXZ"),isPointerLocked:!1,keys:{},glassMat:null,envMode:"A",floorA:null,floorB:null,sunOrb:null,moonOrb:null,gateway:null,_dragOverride:{}};function Nf(i,e){let t=[{t:0,r:.08,g:.07,b:.06},{t:.1,r:.12,g:.1,b:.08},{t:.25,r:.2,g:.14,b:.09},{t:.4,r:.3,g:.18,b:.1},{t:.55,r:.35,g:.22,b:.13},{t:.7,r:.28,g:.2,b:.14},{t:.85,r:.22,g:.18,b:.15},{t:1,r:.18,g:.15,b:.13}],n=t[0],s=t[t.length-1];for(let c=0;c<t.length-1;c++)if(i>=t[c].t&&i<=t[c+1].t){n=t[c],s=t[c+1];break}let r=(i-n.t)/(s.t-n.t||1),o=n.r+(s.r-n.r)*r,a=n.g+(s.g-n.g)*r,l=n.b+(s.b-n.b)*r;if(e>0){let c=e*e;o+=(.21-o)*c,a+=(.175-a)*c,l+=(.13-l)*c}return{r:o,g:a,b:l}}function Iu(i,e){e=e||0;let t=[{t:0,r:.1,g:.11,b:.13},{t:.15,r:.13,g:.12,b:.12},{t:.3,r:.16,g:.11,b:.08},{t:.5,r:.22,g:.16,b:.1},{t:.7,r:.28,g:.2,b:.13},{t:.85,r:.32,g:.24,b:.16},{t:1,r:.38,g:.28,b:.18}],n=t[0],s=t[t.length-1];for(let c=0;c<t.length-1;c++)if(i>=t[c].t&&i<=t[c+1].t){n=t[c],s=t[c+1];break}let r=(i-n.t)/(s.t-n.t||1),o=n.r+(s.r-n.r)*r,a=n.g+(s.g-n.g)*r,l=n.b+(s.b-n.b)*r;return e>0&&(o+=e*.6,a+=e*.12,l+=e*.02),{r:o,g:a,b:l}}function Du(i,e){let t=new Image;t.crossOrigin="anonymous",t.onload=()=>{let n=document.createElement("canvas");n.width=t.width,n.height=t.height;let s=n.getContext("2d");s.drawImage(t,0,0),e(s.getImageData(0,0,n.width,n.height),n.width,n.height)},t.src=i}function Lu(i,e,t,n,s){let r=Math.floor(n*(e-1)),o=Math.floor((1-s)*(t-1));return i.data[(o*e+r)*4]/255}var qi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var kt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nM=new zi(-1,1,1,-1,0,1),Nu=class extends it{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},iM=new Nu,Sn=class{constructor(e){this._mesh=new We(iM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qn=class extends kt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ze?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rt.clone(e.uniforms),this.material=new ze({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var fo=class extends kt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ya=class extends kt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Za=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qn(qi),this.copyPass.material.blending=It,this.clock=new Kn}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(o instanceof fo?n=!0:o instanceof Ya&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ja=class extends kt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Uf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var gr=class i extends kt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bt(r,o,{type:Nt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new bt(r,o,{type:Nt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new bt(r,o,{type:Nt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Uf;this.highPassUniforms=Rt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=qi;this.copyUniforms=Rt.clone(u.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Sn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ze({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ze({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};gr.BlurDirectionX=new ce(1,0);gr.BlurDirectionY=new ce(0,1);var Of={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ka=class extends kt{constructor(){super();let e=Of;this.uniforms=Rt.clone(e.uniforms),this.material=new dr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Sn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===du?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var po={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},mo={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Ja={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Qa=class extends kt{constructor(e,t){super(),this.edgesRT=new bt(e,t,{depthBuffer:!1,type:Nt}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new bt(e,t,{depthBuffer:!1,type:Nt}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new At,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=wt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new At,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=St,this.searchTexture.minFilter=St,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Rt.clone(po.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ze({defines:Object.assign({},po.defines),uniforms:this.uniformsEdges,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader}),this.uniformsWeights=Rt.clone(mo.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ze({defines:Object.assign({},mo.defines),uniforms:this.uniformsWeights,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader}),this.uniformsBlend=Rt.clone(Ja.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ze({uniforms:this.uniformsBlend,vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader}),this.fsQuad=new Sn(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var go={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},vo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},$a={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ff(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=sM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ki(s,e,e);return r.wrapS=xt,r.wrapT=xt,r.needsUpdate=!0,r}function sM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var xo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Uu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Uu(i,e,t){let n=rM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function rM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new R(Math.cos(r),Math.sin(r),o))}return n}var el=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+u,w=v-p+u,y=g-1+2*u,I=v-1+2*u,S=l&255,E=c&255,C=this.perm[S+this.perm[E]]%12,M=this.perm[S+m+this.perm[E+p]]%12,x=this.perm[S+1+this.perm[E+1]]%12,P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this.dot(this.grad3[C],g,v));let N=.5-_*_-w*w;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[M],_,w));let O=.5-y*y-I*I;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[x],y,I)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,v=u-g,m=h-g,p=d-g,_=e-v,w=t-m,y=n-p,I,S,E,C,M,x;_>=w?w>=y?(I=1,S=0,E=0,C=1,M=1,x=0):_>=y?(I=1,S=0,E=0,C=1,M=0,x=1):(I=0,S=0,E=1,C=1,M=0,x=1):w<y?(I=0,S=0,E=1,C=0,M=1,x=1):_<y?(I=0,S=1,E=0,C=0,M=1,x=1):(I=0,S=1,E=0,C=1,M=1,x=0);let P=_-I+f,N=w-S+f,O=y-E+f,H=_-C+2*f,z=w-M+2*f,B=y-x+2*f,j=_-1+3*f,k=w-1+3*f,Y=y-1+3*f,oe=u&255,he=h&255,fe=d&255,me=this.perm[oe+this.perm[he+this.perm[fe]]]%12,W=this.perm[oe+I+this.perm[he+S+this.perm[fe+E]]]%12,te=this.perm[oe+C+this.perm[he+M+this.perm[fe+x]]]%12,re=this.perm[oe+1+this.perm[he+1+this.perm[fe+1]]]%12,q=.6-_*_-w*w-y*y;q<0?s=0:(q*=q,s=q*q*this.dot3(this.grad3[me],_,w,y));let Z=.6-P*P-N*N-O*O;Z<0?r=0:(Z*=Z,r=Z*Z*this.dot3(this.grad3[W],P,N,O));let ee=.6-H*H-z*z-B*B;ee<0?o=0:(ee*=ee,o=ee*ee*this.dot3(this.grad3[te],H,z,B));let pe=.6-j*j-k*k-Y*Y;return pe<0?a=0:(pe*=pe,a=pe*pe*this.dot3(this.grad3[re],j,k,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),w=Math.floor(s+v),y=(m+p+_+w)*c,I=m-y,S=p-y,E=_-y,C=w-y,M=e-I,x=t-S,P=n-E,N=s-C,O=M>x?32:0,H=M>P?16:0,z=x>P?8:0,B=M>N?4:0,j=x>N?2:0,k=P>N?1:0,Y=O+H+z+B+j+k,oe=o[Y][0]>=3?1:0,he=o[Y][1]>=3?1:0,fe=o[Y][2]>=3?1:0,me=o[Y][3]>=3?1:0,W=o[Y][0]>=2?1:0,te=o[Y][1]>=2?1:0,re=o[Y][2]>=2?1:0,q=o[Y][3]>=2?1:0,Z=o[Y][0]>=1?1:0,ee=o[Y][1]>=1?1:0,pe=o[Y][2]>=1?1:0,Se=o[Y][3]>=1?1:0,Le=M-oe+c,qe=x-he+c,F=P-fe+c,ke=N-me+c,Ce=M-W+2*c,Ne=x-te+2*c,ue=P-re+2*c,Ue=N-q+2*c,xe=M-Z+3*c,A=x-ee+3*c,b=P-pe+3*c,U=N-Se+3*c,X=M-1+4*c,ne=x-1+4*c,K=P-1+4*c,Me=N-1+4*c,de=m&255,ge=p&255,Re=_&255,ie=w&255,ve=a[de+a[ge+a[Re+a[ie]]]]%32,Pe=a[de+oe+a[ge+he+a[Re+fe+a[ie+me]]]]%32,De=a[de+W+a[ge+te+a[Re+re+a[ie+q]]]]%32,be=a[de+Z+a[ge+ee+a[Re+pe+a[ie+Se]]]]%32,Ge=a[de+1+a[ge+1+a[Re+1+a[ie+1]]]]%32,Ie=.6-M*M-x*x-P*P-N*N;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this.dot4(r[ve],M,x,P,N));let ye=.6-Le*Le-qe*qe-F*F-ke*ke;ye<0?h=0:(ye*=ye,h=ye*ye*this.dot4(r[Pe],Le,qe,F,ke));let L=.6-Ce*Ce-Ne*Ne-ue*ue-Ue*Ue;L<0?d=0:(L*=L,d=L*L*this.dot4(r[De],Ce,Ne,ue,Ue));let le=.6-xe*xe-A*A-b*b-U*U;le<0?f=0:(le*=le,f=le*le*this.dot4(r[be],xe,A,b,U));let J=.6-X*X-ne*ne-K*K-Me*Me;return J<0?g=0:(J*=J,g=J*J*this.dot4(r[Ge],X,ne,K,Me)),27*(u+h+d+f+g)}};var yo=class i extends kt{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ff(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new bt(this.width,this.height,{type:Nt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ze({defines:Object.assign({},go.defines),uniforms:Rt.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,blending:It,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pa,this.normalMaterial.blending=It,this.pdMaterial=new ze({defines:Object.assign({},xo.defines),uniforms:Rt.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ze({defines:Object.assign({},vo.defines),uniforms:Rt.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:It}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ze({uniforms:Rt.clone(qi.uniforms),vertexShader:qi.vertexShader,fragmentShader:qi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:za,blendDst:fr,blendEquation:pn,blendSrcAlpha:Ba,blendDstAlpha:fr,blendEquationAlpha:pn}),this.blendMaterial=new ze({uniforms:Rt.clone($a.uniforms),vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cu,blendSrc:za,blendDst:fr,blendEquation:pn,blendSrcAlpha:Ba,blendDstAlpha:fr,blendEquationAlpha:pn}),this.fsQuad=new Sn(null),this.originalClearColor=new se,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ar,this.depthTexture.format=Fi,this.depthTexture.type=Oi,this.normalRenderTarget=new bt(this.width,this.height,{minFilter:St,magFilter:St,type:Nt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Uu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new el,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ki(s,e,e,en,on);return r.wrapS=xt,r.wrapT=xt,r.needsUpdate=!0,r}};yo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var oM=`
    varying vec3 vDir;
    void main() {
        // Cancel translation so the sphere is locked to the camera.
        vDir = normalize(position);
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        // Push to far plane so it never z-fights with anything in scene.
        gl_Position.z = gl_Position.w;
    }
`,aM=`
    precision highp float;
    varying vec3 vDir;
    uniform float uStarPulse;
    uniform float uNebulaPulse;
    uniform float uSkyPulse;

    // --- 3D hash + value noise (cheap, no texture lookup) ---
    float hash13(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float vnoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n000 = hash13(i + vec3(0,0,0));
        float n100 = hash13(i + vec3(1,0,0));
        float n010 = hash13(i + vec3(0,1,0));
        float n110 = hash13(i + vec3(1,1,0));
        float n001 = hash13(i + vec3(0,0,1));
        float n101 = hash13(i + vec3(1,0,1));
        float n011 = hash13(i + vec3(0,1,1));
        float n111 = hash13(i + vec3(1,1,1));
        float nx00 = mix(n000, n100, f.x);
        float nx10 = mix(n010, n110, f.x);
        float nx01 = mix(n001, n101, f.x);
        float nx11 = mix(n011, n111, f.x);
        float nxy0 = mix(nx00, nx10, f.y);
        float nxy1 = mix(nx01, nx11, f.y);
        return mix(nxy0, nxy1, f.z);
    }

    // 4-octave fBm in 3D
    float fbm(vec3 p) {
        float a = 0.5;
        float s = 0.0;
        for (int i = 0; i < 4; i++) {
            s += a * vnoise(p);
            p = p * 2.03 + vec3(11.3, 7.7, 3.1);
            a *= 0.5;
        }
        return s;
    }

    // Domain-warped fBm \u2014 I\xF1igo Quilez "warp" article style.
    // q = fbm(p), r = fbm(p + q*K), out = fbm(p + r*K).
    float warpedFbm(vec3 p) {
        vec3 q = vec3(
            fbm(p + vec3(0.0, 0.0, 0.0)),
            fbm(p + vec3(5.2, 1.3, 2.8)),
            fbm(p + vec3(1.7, 9.2, 4.4))
        );
        vec3 r = vec3(
            fbm(p + 2.5 * q + vec3(1.7, 9.2, 0.0)),
            fbm(p + 2.5 * q + vec3(8.3, 2.8, 5.1)),
            fbm(p + 2.5 * q + vec3(3.1, 4.7, 6.6))
        );
        return fbm(p + 2.0 * r);
    }

    // --- Sparse starfield via 3D hash thresholding ---
    // Quantize direction onto a 3D grid; each cell either contains a star
    // (above threshold) or doesn't. Star is a tight gaussian-ish halo
    // around a hashed sub-cell position. Because we sample a unit
    // direction, "cells" are stable spherical patches \u2014 stars never move.
    float starfield(vec3 dir, float cellSize, float density, float bright) {
        vec3 g = dir * cellSize;
        vec3 i = floor(g);
        vec3 f = fract(g);
        // Three independent hashes for x/y/z jitter and one for "is star"
        float h0 = hash13(i + 17.0);
        if (h0 < 1.0 - density) return 0.0;
        vec3 jitter = vec3(
            hash13(i + 1.3),
            hash13(i + 7.1),
            hash13(i + 4.9)
        );
        vec3 d = f - jitter;
        float r2 = dot(d, d);
        // Softened core (220 -> 150): at 220 most stars resolved as
        // single hard pixels, and a dense field of 1px points reads as
        // pixel noise. The wider gaussian gives each star a 2-3px
        // gradient footprint that antialiases naturally.
        float core = exp(-r2 * 150.0);
        // Per-star brightness variation
        float bvar = 0.35 + 0.65 * hash13(i + 23.0);
        return core * bvar * bright;
    }

    // --- Output-pipeline compensation ------------------------------------
    // The palette in main() is authored in display sRGB: the site
    // originally blitted this shader raw to the canvas. The composer now
    // ends in an OutputPass (three ACES filmic at the renderer exposure,
    // then linear->sRGB encode), so we run the exact inverse of that
    // transform here and the backdrop displays byte-identical to the
    // locked grade. Constants are three.js's Hill-fit ACES matrices,
    // numerically inverted.
    const mat3 ACESInputMatInv = mat3(
        vec3(  1.7647410, -0.1470279, -0.0363368 ),
        vec3( -0.6757777,  1.1602515, -0.1624364 ),
        vec3( -0.0889633, -0.0132237,  1.1987733 )
    );
    const mat3 ACESOutputMatInv = mat3(
        vec3( 0.6430382, 0.0592687, 0.0059619 ),
        vec3( 0.3111868, 0.9314365, 0.0639290 ),
        vec3( 0.0457755, 0.0092949, 0.9301184 )
    );
    // Must match renderer.toneMappingExposure (scene.js / lighting.js).
    const float OUTPUT_EXPOSURE = 1.1;

    // Per-channel inverse of three's RRTAndODTFit (valid for y in [0,1)).
    vec3 RRTAndODTFitInv( vec3 y ) {
        y = clamp( y, vec3(0.0), vec3(0.999) );
        vec3 A = 1.0 - 0.983729 * y;
        vec3 B = 0.0245786 - 0.4329510 * y;
        vec3 C = -0.000090537 - 0.238081 * y;
        return ( -B + sqrt( max( B * B - 4.0 * A * C, vec3(0.0) ) ) ) / ( 2.0 * A );
    }

    vec3 displayToSceneLinear( vec3 srgb ) {
        // Exact sRGB EOTF (decode)
        vec3 lin = mix( srgb / 12.92,
                        pow( ( srgb + 0.055 ) / 1.055, vec3(2.4) ),
                        step( 0.04045, srgb ) );
        vec3 v = max( ACESOutputMatInv * lin, vec3(0.0) );
        v = RRTAndODTFitInv( v );
        v = ACESInputMatInv * v;
        return max( v * ( 0.6 / OUTPUT_EXPOSURE ), vec3(0.0) );
    }

    void main() {
        vec3 dir = normalize(vDir);

        // --- Large-scale color field (slow, low-frequency warp) ---
        // Scale chosen so the dominant filament is ~30deg across.
        float n = warpedFbm(dir * 1.6);
        // Coverage: leave real dark gaps between structures so the sky reads
        // like space, not a uniform wash.
        float nebula = smoothstep(0.40, 0.82, n);

        // Secondary higher-frequency wisps for finer structure
        float n2 = warpedFbm(dir * 4.0 + vec3(13.0, 0.0, 7.0));
        float wisp = smoothstep(0.55, 0.88, n2);

        // A third even-higher frequency thread for fine variation
        float n3 = warpedFbm(dir * 9.0 + vec3(2.0, 19.0, 5.0));
        float thread = smoothstep(0.58, 0.85, n3);

        // --- Color grading: Astroneer-style nebula with teal + purple/pink
        // hue zones and dark voids between. Raw ShaderMaterial (toneMapped
        // false) writes straight to sRGB, so these are effectively sRGB
        // values; the floor stays a visible blue (~0.04+) so non-OLED panels
        // never crush to black.
        vec3 voidCol  = vec3(0.038, 0.080, 0.170);   // deep blue floor (visible, not black)
        vec3 midCol   = vec3(0.085, 0.160, 0.300);   // navy horizon lift
        vec3 tealCol  = vec3(0.150, 0.360, 0.520);   // teal filament (blue zones)
        vec3 deepCol  = vec3(0.070, 0.180, 0.340);   // deep teal between filaments
        vec3 purpCol  = vec3(0.330, 0.150, 0.540);   // purple
        vec3 pinkCol  = vec3(0.540, 0.190, 0.400);   // rose/pink accent

        // Hue field: a broad teal -> purple/pink gradient across the sky (so
        // both color families are always in frame from any camera pose) plus
        // low-frequency noise blobs for organic variation. Real nebulae read
        // as color "continents", not one flat wash.
        float dirHue   = smoothstep(-0.7, 0.7, dir.x * 0.8 + dir.y * 0.35);
        float noiseHue = smoothstep(0.28, 0.72, warpedFbm(dir * 1.05 + vec3(31.0, 7.0, 19.0)));
        float hueF     = clamp(dirHue * 0.6 + noiseHue * 0.6, 0.0, 1.0);
        vec3 warmCol     = mix(purpCol, pinkCol, wisp);     // purple -> pink on wisps
        vec3 filamentCol = mix(tealCol, warmCol, hueF);     // teal <-> purple/pink by region
        vec3 deepMix     = mix(deepCol, purpCol * 0.55, hueF);

        // Large-scale dimming field: broad regions fall into darker "space"
        // for contrast (the "less bright in some areas" look). The floor is
        // re-asserted afterward so dark regions still read as blue, not black.
        float dimF = mix(0.45, 1.0, smoothstep(0.20, 0.72, warpedFbm(dir * 0.75 + vec3(5.0, 41.0, 2.0))));

        // Build base from a slow large gradient on dir.y for "horizon" feel.
        float vert = dir.y * 0.5 + 0.5;
        vec3 col = mix(voidCol, midCol, smoothstep(-0.25, 0.95, vert) * 0.85);

        // Bass drives the nebula structures \u2014 filament glow swells with
        // sub-bass hits so the cosmic clouds "breathe" with the track.
        float nebBoost = 1.0 + uNebulaPulse * 1.2;
        col = mix(col, deepMix,     nebula * 0.55 * nebBoost);
        col = mix(col, filamentCol, nebula * (0.35 + 0.65 * wisp) * nebBoost);
        // Threadlike texture additive \u2014 tinted by the same hue zone.
        col += filamentCol * thread * nebula * 0.30 * nebBoost;

        // Apply the broad dimming, then re-assert the visible floor.
        col *= dimF;
        col = max(col, voidCol * 0.85);

        // Mids drive an overall sky brightness lift \u2014 a soft atmospheric swell.
        col += vec3(0.012, 0.028, 0.055) * uSkyPulse;

        // --- Starfield: three layers ---
        // Densities roughly doubled across the board: the sparse field
        // read as an almost-empty sky, and the sister-world story needs
        // a backdrop that suggests thousands of systems.
        // Far layer: dense, very dim \u2014 texture, not punctate. Pulled
        // back from the doubling (0.055 -> 0.042): the densest layer is
        // also the most sub-pixel, so it contributes the most grain.
        float farStars = starfield(dir, 320.0, 0.042, 0.26);
        // Mid layer: medium density, medium brightness
        float midStars = starfield(dir, 140.0, 0.042, 0.55);
        // Near "feature" layer: sparse, brightest \u2014 these are the specks
        float nearStars = starfield(dir, 55.0, 0.020, 0.80);

        // Star color: cool white with a faint blue tint.
        // uStarPulse (driven by the audio AnalyserNode when sound is on)
        // scales star brightness so the backdrop breathes with the
        // currently-playing Hubble sonification.
        vec3 starCol = vec3(0.78, 0.86, 1.00);
        float starBoost = 1.0 + uStarPulse * 1.6;
        col += starCol * (farStars + midStars + nearStars) * starBoost;

        // Suppress stars sitting inside dense nebula (looks more natural \u2014
        // bright nebulosity occludes background stars).
        // Already done by additive \u2014 but reduce mid/far inside nebula:
        col -= starCol * farStars * nebula * 0.7;
        col -= starCol * midStars * nebula * 0.4;

        // --- Global brightness clamp ---
        // Raised to 0.85 so the brighter nebula cores and horizon glow can
        // show without banding, while bright stars still punch through.
        col = max(col, vec3(0.0));
        col = min(col, vec3(0.85));

        // Composer ends in an OutputPass (ACES + sRGB encode); run the
        // exact inverse here so the authored display-sRGB grade above
        // reaches the screen byte-identical. See the compensation block.
        col = displayToSceneLinear(col);

        gl_FragColor = vec4(col, 1.0);
    }
`;function Bf(i){let e=new _n(1,32,16),t=new ze({uniforms:{uStarPulse:{value:0},uNebulaPulse:{value:0},uSkyPulse:{value:0}},vertexShader:oM,fragmentShader:aM,side:Pt,depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1}),n=new We(e,t);return n.frustumCulled=!1,n.renderOrder=-1e3,n.name="spaceEnvironment",i.add(n),n}function zf(){let i=new so,e=new Et(45,window.innerWidth/window.innerHeight,.5,1e3);e.layers.enable(2),e.layers.enable(4),window.camera=e,e.position.set(0,200,5e3),e.far=6e3,e.updateProjectionMatrix(),e.lookAt(0,0,0);let t;try{t=new wa({antialias:!0})}catch(S){try{localStorage.setItem("reviewer","1")}catch{}throw location.reload(),S}t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,3)),t.toneMapping=uo,t.toneMappingExposure=1.1,t.localClippingEnabled=!0,document.body.appendChild(t.domElement),t.domElement.setAttribute("aria-label","3D volcanic island world \u2014 interactive research visualization"),t.domElement.setAttribute("role","img"),D._spaceEnv=Bf(i,void 0);let n=new tn;i.add(n),window._island=n;let s=new ze({transparent:!1,depthWrite:!0,side:Mt,uniforms:{},vertexShader:`
            varying vec2 vWorldXZ;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldXZ = worldPos.xz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
        `,fragmentShader:`
            varying vec2 vWorldXZ;
            void main() {
                float dist = length(vWorldXZ);
                // Discard beyond radius 300 to avoid z-fighting at horizon
                if (dist > 300.0) discard;
                // Base: almost black
                vec3 base = vec3(0.039, 0.039, 0.047); // #0a0a0c
                // Subtle circular glow under the dish
                vec3 glow = vec3(0.082, 0.082, 0.094); // #151518
                float glowFactor = smoothstep(60.0, 0.0, dist);
                vec3 col = mix(base, glow, glowFactor * 0.6);
                // Slight reflective sheen falloff from center
                col += vec3(0.01) * smoothstep(80.0, 0.0, dist);
                gl_FragColor = vec4(col, 1.0);
            }
        `}),r=new ln(800,800),o=new We(r,s);o.rotation.x=-Math.PI/2,o.position.y=-5,o.renderOrder=-2,o.userData.aoInclude=!0,i.add(o),D.floorA=o;let a=new ze({transparent:!1,depthWrite:!0,side:Mt,uniforms:{},vertexShader:`
            varying vec2 vWorldXZ;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldXZ = worldPos.xz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
        `,fragmentShader:`
            varying vec2 vWorldXZ;

            float gridLine(float coord, float spacing, float thickness) {
                float halfThick = thickness * 0.5;
                float d = abs(mod(coord + halfThick, spacing) - halfThick);
                return 1.0 - smoothstep(0.0, thickness, d);
            }

            void main() {
                float dist = length(vWorldXZ);
                if (dist > 300.0) discard;

                vec3 base = vec3(0.067); // #111111
                vec3 majorLineCol = vec3(0.2);   // #333333
                vec3 minorLineCol = vec3(0.102);  // #1a1a1a

                // Anti-aliased grid lines
                float majorX = gridLine(vWorldXZ.x, 10.0, 0.15);
                float majorY = gridLine(vWorldXZ.y, 10.0, 0.15);
                float major = max(majorX, majorY);

                float minorX = gridLine(vWorldXZ.x, 2.0, 0.08);
                float minorY = gridLine(vWorldXZ.y, 2.0, 0.08);
                float minor = max(minorX, minorY);

                // Fade grid beyond radius 150
                float gridFade = 1.0 - smoothstep(100.0, 150.0, dist);

                vec3 col = base;
                col = mix(col, minorLineCol, minor * gridFade * 0.5);
                col = mix(col, majorLineCol, major * gridFade * 0.7);

                // Circular glow under the dish (same as Option A)
                vec3 glow = vec3(0.082, 0.082, 0.094);
                float glowFactor = smoothstep(60.0, 0.0, dist);
                col += (glow - base) * glowFactor * 0.6;

                gl_FragColor = vec4(col, 1.0);
            }
        `}),l=new ln(800,800),c=new We(l,a);c.rotation.x=-Math.PI/2,c.position.y=-5,c.renderOrder=-2,i.add(c),D.floorB=c,o.visible=!1,c.visible=!1,D.scene=i,D.camera=e,D.renderer=t,D.islandGroup=n,D.lowPower=(function(){let S=new URLSearchParams(location.search).get("lowpower");if(S==="1")return!0;if(S==="0")return!1;let E=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches),C=navigator.hardwareConcurrency||8,M=navigator.deviceMemory||8;return E&&(C<=4||M<=4)})();let u=new Za(t);u.renderTarget1.samples=4,u.renderTarget2.samples=4,u.addPass(new ja(i,e));class h extends yo{render(E,C,M,x,P){let N=[];this.scene.traverse(z=>{z.isMesh&&z.visible&&!z.userData.aoInclude&&(N.push(z),z.visible=!1)});let O=D.water,H=O?O.onBeforeRender:null;O&&(O.onBeforeRender=()=>{}),super.render(E,C,M,x,P),O&&(O.onBeforeRender=H);for(let z of N)z.visible=!0}}let d=new h(i,e,window.innerWidth,window.innerHeight);d.updateGtaoMaterial({radius:.8,distanceExponent:1.5,thickness:1,scale:1.2,samples:16}),d.updatePdMaterial({lumaPhi:10,depthPhi:4,normalPhi:8,radius:5,radiusExponent:1,rings:3,samples:12}),d.blendIntensity=.62,d.setSize(window.innerWidth*Math.min(window.devicePixelRatio,3),window.innerHeight*Math.min(window.devicePixelRatio,3)),u.addPass(d),D.gtaoPass=d,D.lowPower&&(d.enabled=!1);let f=new gr(new ce(window.innerWidth,window.innerHeight),.6,.5,.8);u.addPass(f),D.bloomPass=f,u.addPass(new Ka);let g=new bn().load("lensDirtTexture.png"),v=new Qn({uniforms:{tDiffuse:{value:null},iTime:{value:0},lensPosition:{value:new ce(0,0)},iResolution:{value:new ce(window.innerWidth,window.innerHeight)},colorGain:{value:new R(56,22,11)},starPoints:{value:6},glareSize:{value:.3},flareSize:{value:.004},flareSpeed:{value:.4},flareShape:{value:.1},haloScale:{value:.5},opacity:{value:1},animated:{value:!0},anamorphic:{value:!1},enabled:{value:!1},secondaryGhosts:{value:1},starBurst:{value:!1},ghostScale:{value:.1},aditionalStreaks:{value:1},lensDirtTexture:{value:g}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
            uniform sampler2D tDiffuse;
            varying vec2 vUv;
            uniform float iTime;
            uniform vec2 lensPosition;
            uniform vec2 iResolution;
            uniform vec3 colorGain;
            uniform float starPoints;
            uniform float glareSize;
            uniform float flareSize;
            uniform float flareSpeed;
            uniform float flareShape;
            uniform float haloScale;
            uniform float opacity;
            uniform bool animated;
            uniform bool anamorphic;
            uniform bool enabled;
            uniform float secondaryGhosts;
            uniform float ghostScale;
            uniform float aditionalStreaks;

            float rndf(float n) { return fract(sin(n) * 43758.5453123); }
            float niz(float p) { float fl = floor(p); float fc = fract(p); return mix(rndf(fl), rndf(fl + 1.0), fc); }
            vec3 hsv2rgb(vec3 c) {
                vec4 k = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
                vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
                return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);
            }
            float satU(float x) { return clamp(x, 0.0, 1.0); }
            vec2 rtU(vec2 n, float r) { return vec2(cos(r)*n.x+sin(r)*n.y, cos(r)*n.y-sin(r)*n.x); }
            float fpow(float x, float k) { return x > k ? pow((x-k)/(1.0-k), 2.0) : 0.0; }
            float rnd1(float w) { return fract(sin(w) * 1000.0); }

            float glR(vec2 n, vec2 pos, float zsi) {
                vec2 m; if(animated){m=rtU(n-pos,iTime*0.1);}else{m=n-pos;}
                float ang = atan(m.y,m.x) * (anamorphic ? 1.0 : starPoints);
                float a = length(m); a = pow(a, 0.9);
                float f0 = 1.0/(length(n-pos)*(1.0/zsi*16.0)+0.2);
                return f0 + f0*(sin(ang)*0.2+0.3);
            }

            vec3 drwF(vec2 p, float intensity, float rnd, float speed, int id) {
                float flh = (1.0/32.0)*float(id)*0.1;
                float lg = distance(vec2(0.0), p);
                float eg = 1.0/exp(lg*(fract(rnd)*0.66+0.33));
                vec3 q = hsv2rgb(vec3(fract((eg*8.0)+speed*flareSpeed+flh), pow(1.0-abs(eg*2.0-1.0),0.45), 20.0*eg*intensity));
                float sp = anamorphic ? 1.0 : starPoints;
                float am = length(p*flareShape*sin(sp*atan(p.x,p.y)));
                float k = pow(1.0-satU(am), anamorphic ? 100.0 : 12.0);
                k += satU(eg-0.9)*3.0;
                k = pow(k*eg, 8.0+(1.0-intensity)*5.0);
                return flareSpeed > 0.0 ? vec3(k)*q : vec3(k)*flareSize*15.0;
            }

            float sdHex(vec2 p) {
                p = abs(p);
                vec2 q = vec2(p.x*2.0*0.5773503, p.y+p.x*0.5773503);
                return dot(step(q.xy,q.yx), 1.0-q.yx);
            }

            vec3 rHx(vec2 n, vec2 p, float s, vec3 col) {
                n -= p;
                if(abs(n.x)<0.2*s && abs(n.y)<0.2*s) {
                    return mix(vec3(0.0), mix(vec3(0.0),col,0.1+fpow(length(n/s),0.1)*10.0), smoothstep(0.0,0.1,sdHex(n*20.0/s)));
                }
                return vec3(0.0);
            }

            float rShp(vec2 p, int N) {
                float a = atan(p.x,p.y)+0.2;
                float b = 6.28319/float(N);
                return smoothstep(0.5,0.51,cos(floor(0.5+a/b)*b-a)*length(p.xy)*2.0-ghostScale);
            }

            vec3 drC(vec2 p, float zsi, float dCy, vec3 o, vec3 q, float am, vec2 es) {
                float c = max(0.01-pow(length(p+es*am),zsi*ghostScale),0.0)*10.0;
                vec3 cl = cos(vec3(0.44,0.24,0.2)*8.0+am*4.0)*0.5+0.5;
                float s = max(0.02-pow(rShp(p*5.0+es*am*5.0+dCy,6),1.0),0.0)*1.5;
                return (c+s)*cl - 0.01;
            }

            vec3 mLs(vec2 n, vec2 pos) {
                vec2 m = n-pos;
                vec2 z = n*length(n);
                float ang = atan(m.x,m.y);
                float f0 = 0.3/(length(n-pos)*16.0+1.0);
                f0 = f0*(sin(niz(sin(ang*3.9-(animated?iTime:0.0)*0.3)*starPoints))*0.2);
                float f1 = max(0.01-pow(length(n+1.2*pos),1.9),0.0)*7.0;
                float f2 = max(0.9/(10.0+32.0*pow(length(z+0.99*pos),2.0)),0.0)*0.35;
                float f22 = max(0.9/(11.0+32.0*pow(length(z+0.85*pos),2.0)),0.0)*0.23;
                float f23 = max(0.9/(12.0+32.0*pow(length(z+0.95*pos),2.0)),0.0)*0.6;
                vec2 t = mix(n,z,0.1);
                float f4 = max(0.01-pow(length(t+0.4*pos),2.9),0.0)*4.02;
                float f42 = max(0.0-pow(length(t+0.45*pos),2.9),0.0)*4.1;
                float f43 = max(0.01-pow(length(t+0.5*pos),2.9),0.0)*4.6;
                t = mix(n,z,-0.4);
                float f5 = max(0.01-pow(length(t+0.1*pos),5.5),0.0)*2.0;
                float f52 = max(0.01-pow(length(t+0.2*pos),5.5),0.0)*2.0;
                float f53 = max(0.01-pow(length(t+0.1*pos),5.5),0.0)*2.0;
                t = mix(n,z,2.1);
                float f6 = max(0.01-pow(length(t-0.3*pos),1.61),0.0)*3.159;
                float f62 = max(0.01-pow(length(t-0.325*pos),1.614),0.0)*3.14;
                float f63 = max(0.01-pow(length(t-0.389*pos),1.623),0.0)*3.12;
                vec3 c = vec3(glR(n,pos,glareSize));
                vec2 pr;
                if(animated){pr=rtU(n-pos,iTime*0.1);}else if(anamorphic){pr=rtU(n-pos,1.570796);}else{pr=n-pos;}
                c += drwF(pr, anamorphic?flareSize*10.0:flareSize, 0.1, iTime, 1);
                c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;
                c = c*1.3*vec3(length(z)+0.09);
                c += vec3(f0);
                return c;
            }

            void main() {
                vec4 sc = texture2D(tDiffuse, vUv);
                if(!enabled) { gl_FragColor = sc; return; }
                vec2 g = vUv - 0.5;
                g.y *= iResolution.y / iResolution.x;
                vec2 l = lensPosition * 0.5;
                l.y *= iResolution.y / iResolution.x;
                vec3 f = mLs(g, l) * 20.0 * colorGain / 256.0;
                // aditionalStreaks / secondaryGhosts are 0..1 floats. We
                // still skip the heavy work when the factor is zero (the
                // sun is fully off-screen), but otherwise scale the
                // contribution by the float so it can fade smoothly.
                if(aditionalStreaks > 0.0) {
                    vec3 streaks = vec3(0.0);
                    vec3 o=vec3(0.9,0.2,0.1); vec3 p=vec3(0.3,0.1,0.9);
                    for(float n=0.0;n<10.0;n++) {
                        streaks += drC(g, pow(rnd1(n*2000.0)*2.8,0.1)+1.41, 0.0, o+n, p+n, rnd1(n*20.0)*3.0+0.2-0.5, lensPosition);
                    }
                    f += streaks * aditionalStreaks;
                }
                if(secondaryGhosts > 0.0) {
                    vec3 n = vec3(0.0);
                    n += rHx(g,-lensPosition*0.25,ghostScale*1.4,vec3(0.25,0.35,0.0));
                    n += rHx(g,lensPosition*0.25,ghostScale*0.5,vec3(1.0,0.5,0.5));
                    n += rHx(g,lensPosition*0.1,ghostScale*1.6,vec3(1.0));
                    n += rHx(g,lensPosition*1.8,ghostScale*2.0,vec3(0.0,0.5,0.75));
                    n += rHx(g,lensPosition*1.25,ghostScale*0.8,vec3(1.0,1.0,0.5));
                    n += rHx(g,-lensPosition*1.25,ghostScale*5.0,vec3(0.5,0.5,0.25));
                    n += fpow(1.0-abs(distance(lensPosition*0.8,g)-0.7),0.985)*colorGain/2100.0;
                    f += n * secondaryGhosts;
                }
                vec3 result = mix(f, vec3(0.0), opacity);
                gl_FragColor = vec4(result + sc.rgb, sc.a);
            }
        `});u.addPass(v),D.lensFlarePass=v;let m=new Qn({uniforms:{tDiffuse:{value:null},darkness:{value:.2},offset:{value:1.2}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
            uniform sampler2D tDiffuse;
            uniform float darkness;
            uniform float offset;
            varying vec2 vUv;
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                vec2 uv = (vUv - 0.5) * 2.0;
                float dist = length(uv);
                float vig = smoothstep(offset, offset - 0.5, dist);
                texel.rgb *= mix(1.0 - darkness * 0.5, 1.0, vig);
                gl_FragColor = texel;
            }
        `});u.addPass(m),D.vignettePass=m;let p=new Qn({uniforms:{tDiffuse:{value:null},resolution:{value:new ce(window.innerWidth,window.innerHeight)},strength:{value:0}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
            uniform sampler2D tDiffuse;
            uniform vec2 resolution;
            uniform float strength;
            varying vec2 vUv;
            void main() {
                vec2 uv = (vUv - 0.5) * 2.0;
                float dist = length(uv);
                // Only blur edges of screen, center stays sharp
                float blurAmount = smoothstep(0.3, 1.0, dist) * strength;
                vec2 texel = 1.0 / resolution;
                vec4 col = texture2D(tDiffuse, vUv);
                if (blurAmount > 0.01) {
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, 0.0) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(0.0, -texel.y) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(0.0, texel.y) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y) * blurAmount * 3.0);
                    col /= 9.0;
                }
                gl_FragColor = col;
            }
        `});u.addPass(p),D.dofPass=p;let _=new Qn({uniforms:{tDiffuse:{value:null},strength:{value:7e-4}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
            uniform sampler2D tDiffuse;
            uniform float strength;
            varying vec2 vUv;
            void main() {
                vec2 dir = vUv - 0.5;
                float dist = length(dir);
                vec2 offset = dir * dist * strength;
                float r = texture2D(tDiffuse, vUv + offset).r;
                float g = texture2D(tDiffuse, vUv).g;
                float b = texture2D(tDiffuse, vUv - offset).b;
                gl_FragColor = vec4(r, g, b, 1.0);
            }
        `});u.addPass(_),D.chromaticPass=_;let w=new Qn({uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.015}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
            uniform sampler2D tDiffuse;
            uniform float time;
            uniform float intensity;
            varying vec2 vUv;
            float rand(vec2 co) {
                return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
            }
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                float grain = rand(vUv + time) * 2.0 - 1.0;
                texel.rgb += grain * intensity;
                gl_FragColor = texel;
            }
        `});D.grainPass=null;let y=Math.min(window.devicePixelRatio,3),I=new Qa(window.innerWidth*y,window.innerHeight*y);u.addPass(I),D.fxaaPass=I,D.composer=u;{let S=new or(t);S.compileEquirectangularShader();let E=new so,C=new _n(10,32,16);C.scale(-1,1,1);let M=new ze({side:Pt,uniforms:{},vertexShader:`
                varying vec3 vDir;
                void main() {
                    vDir = normalize(position);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec3 vDir;
                void main() {
                    float y = vDir.y;
                    // Brighter museum environment \u2014 glass needs contrast to refract.
                    // The glass dish samples this PMREM env through transmission,
                    // so the env brightness directly controls dish clarity.
                    // Zero cost per frame \u2014 PMREM is baked once.
                    vec3 top = vec3(0.55, 0.52, 0.50);
                    vec3 mid = vec3(0.22, 0.25, 0.32);
                    vec3 bot = vec3(0.08, 0.08, 0.10);
                    // Broad key light area for glass caustics
                    float keyDot = max(0.0, dot(vDir, normalize(vec3(0.6, 0.5, 0.6))));
                    float keyHighlight = pow(keyDot, 16.0) * 3.2 + pow(keyDot, 4.0) * 0.55;
                    // Rim light \u2014 wider, brighter
                    float rimDot = max(0.0, dot(vDir, normalize(vec3(-0.6, 0.4, -0.8))));
                    float rimHighlight = pow(rimDot, 12.0) * 1.4 + pow(rimDot, 3.0) * 0.30;
                    vec3 col = y > 0.0 ? mix(mid, top, y) : mix(mid, bot, -y);
                    col += vec3(1.0, 0.95, 0.88) * keyHighlight;
                    col += vec3(0.5, 0.7, 1.0) * rimHighlight;
                    gl_FragColor = vec4(col, 1.0);
                }
            `});E.add(new We(C,M));let x=S.fromScene(E,.04);i.environment=x.texture,D.glassMat&&(D.glassMat.envMap=x.texture,D.glassMat.needsUpdate=!0),D._envTexture=x.texture,S.dispose()}window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio,3)),t.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,3)),u.setSize(window.innerWidth,window.innerHeight),p.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),D.lensFlarePass&&D.lensFlarePass.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)}),D.euler.setFromQuaternion(e.quaternion)}function Ou(i,e){if(e===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ho||e===Va){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ho)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var tl=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Xi.extractUrlBase(e);o=Xi.resolveURL(c,this.path)}else o=Xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wf){try{o[et.KHR_BINARY_GLTF]=new sh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Hu;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new rh(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new oh;break;case et.KHR_MESH_QUANTIZATION:o[h]=new ah;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ku=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jn(u),c.distance=h;break;case"spot":c=new Na(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Hu=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let s=[];e.color=new se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Gu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],Gt),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ku=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},$u=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},eh=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},th=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nh=class{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},ih=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let v=new Ve,m=new R,p=new Yt,_=new R(1,1,1),w=new ds(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),w.setMatrixAt(y,v.compose(m,p,_));for(let y in l)if(y==="_COLOR_0"){let I=l[y];w.instanceColor=new pi(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Wf="glTF",_o=12,kf={JSON:1313821514,BIN:5130562},sh=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,_o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-_o,r=new DataView(e,_o),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===kf.JSON){let c=new Uint8Array(e,_o+o,a);this.content=n.decode(c)}else if(l===kf.BIN){let c=_o+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=ch[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=ch[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=vr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},a,c,Gt,d)})})}},oh=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ah=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},nl=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,w=p-d+h;for(let y=0;y!==a;y++){let I=o[v+y+a],S=o[v+y+l]*u,E=o[g+y+a],C=o[g+y]*u;r[y]=_*I+w*S+m*E+p*C}return r}},cM=new Yt,lh=class extends nl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return cM.fromArray(r).normalize().toArray(r),r}},En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:St,9729:wt,9984:mu,9985:qr,9986:Zs,9987:mn},Vf={33071:hi,33648:Kr,10497:xt},Fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uM={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},Bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mt})),i.DefaultMaterial}function gs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zu(t.attributes):e=i.indices+":"+zu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+zu(i.targets[n]);return e}function zu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gM=new Ve,hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new bn(this.options.manager):this.textureLoader=new Oa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return gs(r,a,s),Mi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Xi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fu[s.type],a=vr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Fu[s.type],c=vr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==h){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,w=t.cache.get(_);w||(v=new c(a,p*f,s.count*f/u),w=new lr(v,f/u),t.cache.add(_,w)),m=new hs(w,l,d%f/u,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),m=new Qe(v,l,g);if(s.sparse!==void 0){let p=Fu.SCALAR,_=vr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,I=new _(o[1],w,s.sparse.count*p),S=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Qe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=I.length;E<C;E++){let M=I[E];if(m.setX(M,S[E*l]),l>=2&&m.setY(M,S[E*l+1]),l>=3&&m.setZ(M,S[E*l+2]),l>=4&&m.setW(M,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Hf[d.magFilter]||wt,u.minFilter=Hf[d.minFilter]||mn,u.wrapS=Vf[d.wrapS]||xt,u.wrapT=Vf[d.wrapT]||xt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==St&&u.minFilter!==wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new At(v);m.needsUpdate=!0,d(m)}),t.load(Xi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Mi(h,o),h.userData.mimeType=o.mimeType||mM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new xn,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Yn,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let h=s[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tt);let u=r.alphaMode||Bu.OPAQUE;if(u===Bu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zt){let h=r.emissiveFactor;a.emissive=new se().setRGB(h[0],h[1],h[2],Gt)}return r.emissiveTexture!==void 0&&o!==zt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&gs(s,h,r),h})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=pM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Gf(new it,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?hM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let v=u[f],m=o[f],p,_=c[f];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Sa(v,_):new We(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?p.geometry=Ou(p.geometry,Va):m.mode===En.TRIANGLE_FAN&&(p.geometry=Ou(p.geometry,ho));else if(m.mode===En.LINES)p=new fs(v,_);else if(m.mode===En.LINE_STRIP)p=new ur(v,_);else if(m.mode===En.LINE_LOOP)p=new hr(v,_);else if(m.mode===En.POINTS)p=new cn(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mi(p,r),m.extensions&&gs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&gs(s,h[0],r),h[0];let d=new tn;r.extensions&&gs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(yi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ea(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let _=0,w=d.length;_<w;_++){let y=d[_],I=f[_],S=g[_],E=v[_],C=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,I,S,E,C);if(M)for(let x=0;x<M.length;x++)p.push(M[x])}return new Da(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new oo:c.length>1?u=new tn:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Mi(u,r),r.extensions&&gs(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tn;n.name&&(r.name=s.createUniqueName(n.name)),Mi(r,n),n.extensions&&gs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Zt||d instanceof At)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Yi[r.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Yi[r.path]){case Yi.weights:c=mi;break;case Yi.rotation:c=gi;break;case Yi.position:case Yi.scale:c=vi;break;default:n.itemSize===1?c=mi:c=vi;break}let u=s.interpolation!==void 0?uM[s.interpolation]:ir,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Yi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof gi?lh:nl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vM(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let u=uh(vr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=uh(vr[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new an;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=ch[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return $e.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Mi(i,e),vM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(i,e.targets,t):i})}var Xf=new R,xM=new R,yM=new R;function qf(){let{scene:i,renderer:e}=D;D.sunFixedPos=null,D.SUN_DIR.copy(_i).normalize(),i.fog=null;let t=new Wi(new se(1,.97,.92),6.5);e.shadowMap.enabled=!0,e.shadowMap.type=lu,t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=400,t.shadow.camera.far=900,t.shadow.camera.left=-36,t.shadow.camera.right=36,t.shadow.camera.top=36,t.shadow.camera.bottom=-36,t.shadow.bias=-2e-4,t.shadow.normalBias=.06,t.layers.enable(2),i.add(t);let n=new Wi(6719675,0);i.add(n);let s=new La(new se(.42,.54,.75),new se(.12,.1,.08),.65);window.__DAILY_PARAMS&&(s.color.set(window.__DAILY_PARAMS.hemiSky),s.groundColor.set(window.__DAILY_PARAMS.hemiGround)),i.add(s);let r=new Ua(4479354,.85);i.add(r);let o=new Wi(window.__DAILY_PARAMS?.rimColor??11850478,1.2);o.position.set(80,45,130),i.add(o),e.toneMappingExposure=1.1;let a=new bn().load("moon.jpg");a.colorSpace=vt;let l=new _n(1.2,64,64),c=new ze({uniforms:{uMap:{value:a},uSunWorldPos:{value:_i.clone()},uTint:{value:new se(13421789)},uAmbient:{value:.1},uGlow:{value:.4},uBumpScale:{value:2.2}},vertexShader:`
            varying vec3 vWorldNormal;
            varying vec3 vWorldPos;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vWorldNormal = normalize(mat3(modelMatrix) * normal);
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }`,fragmentShader:`
            uniform sampler2D uMap;
            uniform vec3 uSunWorldPos;
            uniform vec3 uTint;
            uniform float uAmbient;
            uniform float uGlow;
            uniform float uBumpScale;
            varying vec3 vWorldNormal;
            varying vec3 vWorldPos;
            varying vec2 vUv;
            float lum(vec2 uv) {
                vec3 c = texture2D(uMap, uv).rgb;
                return dot(c, vec3(0.299, 0.587, 0.114));
            }
            void main() {
                vec3 N = normalize(vWorldNormal);
                vec3 L = normalize(uSunWorldPos - vWorldPos);

                // Bump normal from the texture-luminance gradient. The
                // sphere's tangent frame is analytic: east = up x N,
                // north = N x east (degenerate only at the poles, which
                // face away from every camera pose in this scene).
                vec2 texel = vec2(1.5) / vec2(1024.0, 512.0);
                float hL = lum(vUv - vec2(texel.x, 0.0));
                float hR = lum(vUv + vec2(texel.x, 0.0));
                float hD = lum(vUv - vec2(0.0, texel.y));
                float hU = lum(vUv + vec2(0.0, texel.y));
                vec3 east  = normalize(cross(vec3(0.0, 1.0, 0.0), N));
                vec3 north = cross(N, east);
                vec3 Nb = normalize(N + (east  * (hL - hR) +
                                         north * (hD - hU)) * uBumpScale);

                float lambert = max(dot(Nb, L), 0.0);
                // Geometric-normal lambert gates the bump so relief cannot
                // light pixels past the true terminator into the night side.
                float gate = smoothstep(0.0, 0.06, dot(N, L));
                // Soften the terminator so the phase feels natural.
                float lit = pow(lambert, 0.80) * gate;
                vec3 tex = texture2D(uMap, vUv).rgb;
                // Ambient bumped so night side still shows surface detail.
                vec3 col = tex * uTint * (uAmbient + lit * 1.85);
                // Fresnel rim: warm moonrise-grey instead of the old
                // synthetic ice-blue, softened (higher power, sun-weighted
                // so the lit limb carries most of it) \u2014 the limb still
                // reads during an eclipse, it just no longer looks lit
                // by a neon tube.
                vec3 V = normalize(cameraPosition - vWorldPos);
                float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0);
                float sunSide = 0.35 + 0.65 * smoothstep(-0.2, 0.5, dot(N, L));
                col += vec3(0.72, 0.68, 0.60) * rim * uGlow * sunSide;
                gl_FragColor = vec4(col, 1.0);
            }`}),u=new We(l,c);u.frustumCulled=!1,u.layers.set(4),i.add(u),D.moonOrb=u;let h=()=>new tl().load("gateway.min.glb",he=>{let fe=he.scene;fe.scale.set(.03,.03,.03),fe.frustumCulled=!1,i.add(fe),D.gateway=fe;let me=[];fe.traverse(ee=>{ee.isMesh&&(ee.userData.aoInclude=!0,ee.material&&ee.material.emissive&&me.push(ee),ee.material&&ee.material.color&&(ee.material.color.multiplyScalar(.5),ee.material.roughness!==void 0&&(ee.material.roughness=Math.max(ee.material.roughness,.55))))}),D._gatewayEmissiveMeshes=me;let W=new _n(120,8,8),te=new zt({visible:!1}),re=new We(W,te);re.name="_gatewayHitSphere",fe.add(re),D._gatewayHitSphere=re;let q=[];fe.traverse(ee=>{ee.isMesh&&ee.material&&(q.push({m:ee.material,t:ee.material.transparent,o:ee.material.opacity??1}),ee.material.transparent=!0,ee.material.opacity=0)});let Z=performance.now();(function ee(){let pe=Math.min(1,(performance.now()-Z)/900);for(let Se of q)Se.m.opacity=pe*Se.o;if(pe<1)requestAnimationFrame(ee);else for(let Se of q)Se.m.transparent=Se.t,Se.m.opacity=Se.o})()});typeof requestIdleCallback=="function"?requestIdleCallback(h,{timeout:4e3}):setTimeout(h,2500);let d=new _n(10,64,64),f=new ze({uniforms:{uTime:{value:0},uLimbCenter:{value:new se(1,.97,.88)},uLimbMid:{value:new se(1,.78,.42)},uLimbEdge:{value:new se(.95,.45,.15)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewNormal;
            varying vec3 vPosition;
            void main() {
                vUv = uv;
                vNormal = normal;
                // View-space normal for proper limb darkening from any camera angle
                vViewNormal = normalize(normalMatrix * normal);
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform vec3 uLimbCenter;
            uniform vec3 uLimbMid;
            uniform vec3 uLimbEdge;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewNormal;
            varying vec3 vPosition;

            // --- 3D hash + value noise (no UV seam artifacts at poles) ---
            float hash13(vec3 p) {
                p = fract(p * vec3(0.1031, 0.1030, 0.0973));
                p += dot(p, p.yxz + 33.33);
                return fract((p.x + p.y) * p.z);
            }
            float noise3D(vec3 p) {
                vec3 i = floor(p), f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float n000 = hash13(i);
                float n100 = hash13(i + vec3(1,0,0));
                float n010 = hash13(i + vec3(0,1,0));
                float n110 = hash13(i + vec3(1,1,0));
                float n001 = hash13(i + vec3(0,0,1));
                float n101 = hash13(i + vec3(1,0,1));
                float n011 = hash13(i + vec3(0,1,1));
                float n111 = hash13(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }

            void main() {
                // 3D position-based noise \u2014 no UV seams, no pole pinching
                vec3 p = normalize(vPosition) * 6.0;

                // 4-octave fBm for solar granulation / supergranulation
                float n = noise3D(p + uTime * 0.08) * 0.35
                        + noise3D(p * 2.1 - uTime * 0.12) * 0.25
                        + noise3D(p * 4.3 + uTime * 0.18) * 0.15
                        + noise3D(p * 8.7 - uTime * 0.25) * 0.08;

                // Slow large-scale convection cells (supergranulation)
                float cells = noise3D(p * 1.2 + vec3(uTime * 0.03, 0.0, uTime * 0.02));
                cells = smoothstep(0.35, 0.65, cells);

                // View-dependent limb darkening \u2014 works from any camera angle
                float limb = max(0.0, vViewNormal.z);
                // Realistic solar limb darkening: stronger at edge, keeps center bright
                float limbDark = 0.3 + 0.7 * pow(limb, 0.45);

                // Base color: preset-driven (star spectral class)
                vec3 center = uLimbCenter;
                vec3 midLimb = uLimbMid;
                vec3 edge = uLimbEdge;
                // Two-stage limb color: center->mid at limb 0.6, mid->edge below
                float limbN = pow(limb, 0.5);
                vec3 limbColor = mix(edge, midLimb, smoothstep(0.0, 0.45, limbN));
                limbColor = mix(limbColor, center, smoothstep(0.45, 1.0, limbN));

                // Composite: base color * darkening * turbulence
                vec3 col = limbColor * limbDark;
                col *= 0.82 + n * 0.36;
                // Granulation: subtle bright network between convection cells
                col += vec3(0.12, 0.08, 0.02) * cells * limbDark;

                // HDR emissive boost: the disc must sit WELL above the
                // bloom threshold (0.8 scene-linear) so the pass builds a
                // real glare core around it \u2014 at 1.35 it barely cleared
                // the knee and read as a flat orange sticker. Limb stays
                // relatively darker so the disc keeps its sphere read
                // inside the glow.
                col *= 2.2;

                gl_FragColor = vec4(col, 1.0);
            }
        `,depthWrite:!0}),g=new We(d,f);g.frustumCulled=!1,g.visible=!0,i.add(g);function v(he,fe,me){let te=document.createElement("canvas");te.width=te.height=256;let re=te.getContext("2d"),q=re.createImageData(256,256),Z=256/2;for(let pe=0;pe<256;pe++)for(let Se=0;Se<256;Se++){let Le=(Se-Z)/Z,qe=(pe-Z)/Z,F=Math.min(1,Math.sqrt(Le*Le+qe*qe)),ke=Math.pow(1-F,me),Ce=(pe*256+Se)*4;q.data[Ce]=he[0]*ke+fe[0]*(1-ke),q.data[Ce+1]=he[1]*ke+fe[1]*(1-ke),q.data[Ce+2]=he[2]*ke+fe[2]*(1-ke),q.data[Ce+3]=ke*255}re.putImageData(q,0,0);let ee=new Fn(te);return ee.anisotropy=4,ee}let m=v([255,240,200],[255,200,130],2.4),p=new cr({map:m,color:16777215,transparent:!0,opacity:.17,blending:Bt,depthWrite:!1,depthTest:!0}),_=new ro(p);_.scale.setScalar(32),g.add(_);let w=v([255,180,100],[255,120,40],1.6),y=new cr({map:w,color:16777215,transparent:!0,opacity:.11,blending:Bt,depthWrite:!1,depthTest:!0}),I=new ro(y);I.scale.setScalar(70),g.add(I),D.sunOrb=g,D._sunHaloMat=y,D._sunHaloInnerMat=p;let S=new _n(10,16,16),E=new zt({visible:!1}),C=new We(S,E);C.name="_sunHitSphere",g.add(C),D._sunHitSphere=C;let M=new _n(2,16,16),x=new We(M,E.clone());x.material.visible=!1,x.name="_moonHitSphere",x.layers.set(4),u.add(x),D._moonHitSphere=x;let P=new tn;P.name="orbitalDiagramGroup",i.add(P);let N=Math.cos(il),O=Math.sin(il),H=new R(_i.x*N-_i.z*O,_i.y,_i.x*O+_i.z*N),z=Math.hypot(H.x,H.z);function B(he,fe,me,W){let te=[],re=[];for(let ee=0;ee<=W;ee++){let pe=ee/W*Math.PI*2;te.push(new R(Math.cos(pe)*he,0,Math.sin(pe)*he)),re.push(ee/W)}let q=new it().setFromPoints(te);q.setAttribute("aProgress",new tt(re,1));let Z=new hr(q,fe);return Z.position.copy(me),Z.renderOrder=-5,Z.frustumCulled=!1,Z}let j=new ze({transparent:!0,depthWrite:!1,uniforms:{baseColor:{value:new se(6264248)},baseOpacity:{value:.15},nearFalloff:{value:40},farFalloff:{value:340},innerStart:{value:33},innerEnd:{value:50}},vertexShader:`
            varying vec3 vWorldPos;
            void main() {
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `,fragmentShader:`
            uniform vec3 baseColor;
            uniform float baseOpacity;
            uniform float nearFalloff;
            uniform float farFalloff;
            uniform float innerStart;
            uniform float innerEnd;
            varying vec3 vWorldPos;
            void main() {
                float d = length(vWorldPos.xz);
                float fade = 1.0 - smoothstep(nearFalloff, farFalloff, d);
                // Kill the arc inside the dish/glass footprint.
                fade *= smoothstep(innerStart, innerEnd, d);
                if (fade < 0.01) discard;
                gl_FragColor = vec4(baseColor, baseOpacity * fade);
            }
        `}),k=B(z,j,H,1024);P.add(k),D._islandOrbitRing=k;let Y=new Yn({color:7316936,transparent:!0,opacity:.16,depthWrite:!1}),oe=B(qa,Y,new R(0,0,0),512);oe.layers.set(4),P.add(oe),D._moonOrbitRing=oe,D._diagramGroup=P,requestAnimationFrame(()=>{D.islandGroup&&D.islandGroup.traverse(he=>{he.isMesh&&he.geometry===D.mtnGeo&&(he.castShadow=!0,he.receiveShadow=!0)})}),D.sunLight=t,D.moonLight=n,D.hemiLight=s,D.ambLight=r,D.rimLight=o}var il=-.35,xr=new R;function Yf(i){let{scene:e,camera:t,sunLight:n,moonLight:s,SUN_DIR:r,water:o}=D,a=D._dragOverride||{};if(xr.copy(a.sun||_i),!a.sun){let m=Math.cos(il),p=Math.sin(il),_=xr.x,w=xr.z;xr.x=_*m-w*p,xr.z=_*p+w*m}let l=xr;n.position.copy(l),r.copy(l).normalize(),D.sunOrb&&(a.sun||D.sunOrb.position.copy(l),D.sunOrb.material.uniforms&&(D.sunOrb.material.uniforms.uTime.value=i%600));let c=window.__moonBoost;D._moonPhase||(D._moonPhase=Df),D._moonPrevElapsed===void 0&&(D._moonPrevElapsed=i);let u=Math.max(0,i-D._moonPrevElapsed);D._moonPrevElapsed=i;let h=Math.PI*2/If,d=c&&c.orbitsLeft>0?c.factor:1,f=h*d*u;if(D._moonPhase+=f,c&&c.orbitsLeft>0&&d!==1){c._swept=(c._swept||0)+Math.abs(f);let m=Math.PI*2;for(;c._swept>=m&&c.orbitsLeft>0;)c._swept-=m,c.orbitsLeft-=1;c.orbitsLeft<=0&&(window.__moonBoost=null)}let g=D._moonPhase;a.moon||Xf.set(Math.cos(g)*qa,0,Math.sin(g)*qa);let v=a.moon||Xf;if(D.moonOrb&&(D.moonOrb.position.copy(v),D.moonOrb.visible=!0,D.moonOrb.material.uniforms&&D.sunOrb&&D.moonOrb.material.uniforms.uSunWorldPos.value.copy(D.sunOrb.position),s.position.copy(v),D.gateway)){if(a.gateway){let y=D.gateway.position,I=D.sunOrb?y.distanceTo(D.sunOrb.position):1/0,S=D.moonOrb?y.distanceTo(D.moonOrb.position):1/0;I<15?D._gwCaptureTarget="sun":S<15?D._gwCaptureTarget="moon":D._gwCaptureTarget=null}else{let y=D._gwCaptureTarget||D._gwOrbitTarget||"moon";D._gwOrbitTarget=y,D._gwCaptureTarget=null;let I=y==="sun"&&D.sunOrb?D.sunOrb.position:D.moonOrb?D.moonOrb.position:null;if(I){let S=i/50*Math.PI*2;D.gateway.position.set(I.x+Math.sin(S)*6*.5,I.y+Math.cos(S)*6,I.z+Math.cos(S)*6*.5),D.gateway.rotation.y=S*.5}a.gateway&&delete a.gateway}D.gateway.visible=!0;let w=D._gatewayEmissiveMeshes;if(w&&w.length){let y=xM.subVectors(n.position,D.gateway.position).normalize(),I=yM.subVectors(t.position,D.gateway.position).normalize(),S=Math.pow(Math.max(0,y.dot(I)),64),E=S*1,C=S*1,M=S*1.2,x=S*1.3;for(let P=0;P<w.length;P++){let N=w[P].material;N.emissive.setRGB(E,C,M),N.emissiveIntensity=x}}}window._lightRays&&(window._lightRays.uniforms.uDayBlend.value=.7),window._caustics&&(window._caustics.uniforms.uDayBlend.value=.7),window._foam&&window._foam.mesh&&window._foam.mesh.visible&&(window._foam.mat.opacity=.09+Math.sin(i*.8)*.035),D.terrainPulseUniform&&(D.terrainPulseUniform.value=.6*(.8+Math.sin(i*1.5)*.2)*(window._volcanoGlow||1))}var Zf="mountain_height_8bit.webp";function jf(i,e,t){let s=e/t;Math.abs(s-1)>.1&&console.warn(`heightmap aspect ${s.toFixed(2)} differs from expected 1; island shape may distort`);let r=0,o=0,a=0,l=Math.max(1,Math.floor(i.length/4/256)),c=0;for(let v=0;v<i.length;v+=4*l)r+=i[v],o+=i[v+1],a+=i[v+2],c++;let u=r/c,h=o/c,d=a/c,f=Math.abs(u-h)/255,g=Math.abs(u-d)/255;(f>.1||g>.1)&&console.warn("heightmap red channel differs strongly from green/blue; this may be a colormap, not grayscale elevation")}function Kf(){let{islandGroup:i,SUN_DIR:e}=D,t=new ln(Cu,Cu,Xa,Xa);t.rotateX(-Math.PI/2);let n={value:.6*.8},s=new bn,r=D.renderer?Math.min(8,D.renderer.capabilities.getMaxAnisotropy()):4;function o(E,C){let M=s.load(E);return M.wrapS=M.wrapT=xt,M.repeat.set(3,3),M.anisotropy=r,C&&(M.colorSpace=vt),M}let a=o("rockface_color.jpg",!0),l=o("rockface_normal.jpg",!1),c=o("rockface_rough.jpg",!1),u=o("sand_color.jpg",!0),h=o("sand_normal.jpg",!1),d={uSandMap:{value:u},uSandNrm:{value:h}},f=new Zn({map:a,color:new se(3.4,3.4,3.4),vertexColors:!0,roughness:.9,metalness:.05,emissive:new se(1715524),emissiveIntensity:.75,normalMap:l,normalScale:new ce(.82,.82),roughnessMap:c,envMapIntensity:.05}),g={value:new R(1,.4,0).normalize()};window._terrain={sunUniform:g},f.onBeforeCompile=E=>{E.uniforms.uPulse=n,E.uniforms.uSunLocal=g,E.uniforms.uSandMap=d.uSandMap,E.uniforms.uSandNrm=d.uSandNrm,E.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},E.vertexShader=E.vertexShader.replace("#include <common>",["#include <common>","attribute vec3 aEmissive;","attribute float aSand;","uniform float uPulse;","uniform vec3 uSunLocal;","varying float vSunFacing;","varying float vSand;","varying float vSlopeY;","varying vec2 vLocXZ;","// uTime removed \u2014 lava trickle was stripped"].join(`
`)).replace("#include <beginnormal_vertex>",["#include <beginnormal_vertex>","// Sun-facing in object space, for the day/night fill split.","vSunFacing = dot(normalize(objectNormal), normalize(uSunLocal));","vSand = aSand;","// Terrain slope (1 = level bench, 0 = vertical cliff) for","// the slope-zoned material below.","vSlopeY = clamp(normalize(objectNormal).y, 0.0, 1.0);"].join(`
`)).replace("#include <color_vertex>",["#include <color_vertex>","#ifdef USE_COLOR","  // --- Rock grain speckle: breaks up smooth vertex-color gradient.","  // Half the old +-12% swing: per-vertex noise this dense is","  // sub-pixel from every camera pose, and at full strength it","  // shimmered like static as the island rotated. ---","  float grain = fract(sin(dot(floor(position.xz * 40.0), vec2(127.1, 311.7))) * 43758.5453);","  vColor.rgb *= 0.94 + grain * 0.12;","","  // --- Geological strata: very subtle horizontal variation ---","  float strata = sin(position.y * 12.0 + grain * 2.0) * 0.5 + 0.5;","  strata = smoothstep(0.35, 0.65, strata);","  vColor.rgb *= 0.97 + strata * 0.03;","","  vColor.rgb += aEmissive * uPulse;","","  // Volcano peak red glow \u2014 always-on, concentrated at the summit","  float peakHeight = clamp((position.y - 4.5) / 1.5, 0.0, 1.0);","  float peakGlow = peakHeight * peakHeight * 0.35;","  vColor.rgb += vec3(peakGlow * 0.8, peakGlow * 0.25, peakGlow * 0.04);","","  // --- Crevice veins: hash-grid crack pattern on upper slopes ---","  float veinHeightNorm = clamp((position.y - 0.6) / 5.1, 0.0, 1.0);","  float veinMask = smoothstep(0.45, 0.6, veinHeightNorm) * 0.35;","  if (veinMask > 0.01) {","    vec2 cellA = position.xz * 2.5;","    vec2 cellB = position.xz * 6.0;","    vec2 fracA = fract(cellA);","    vec2 fracB = fract(cellB);","    float edgeA = min(min(fracA.x, 1.0 - fracA.x), min(fracA.y, 1.0 - fracA.y));","    float edgeB = min(min(fracB.x, 1.0 - fracB.x), min(fracB.y, 1.0 - fracB.y));","    float crackA = 1.0 - smoothstep(0.0, 0.08, edgeA);","    float crackB = 1.0 - smoothstep(0.0, 0.05, edgeB);","    float veinGlow = max(crackA * 0.7, crackB * 0.5);","    vColor.rgb += vec3(0.8, 0.25, 0.04) * veinGlow * veinMask;","  }","#endif"].join(`
`)),E.vertexShader=E.vertexShader.replace("#include <common>",["#include <common>","varying float vWorldHeight;","varying float vWorldDist;"].join(`
`)).replace("#include <worldpos_vertex>",["#include <worldpos_vertex>","vWorldHeight = position.y;","vWorldDist = length(position.xz);","vLocXZ = position.xz;"].join(`
`)),E.fragmentShader=E.fragmentShader.replace("#include <common>",["#include <common>","varying float vWorldHeight;","varying float vWorldDist;","varying float vSunFacing;","varying float vSand;","varying float vSlopeY;","varying vec2 vLocXZ;","uniform sampler2D uSandMap;","uniform sampler2D uSandNrm;","uniform float uDeepLight;","uniform vec3 uSunLocal;"].join(`
`)).replace("#include <color_fragment>",["#include <color_fragment>","// Beach sand albedo: where the baked aSand mask says beach,","// swap the rock-photo x vertex-tint product for real sand","// grain (tiled fine so footprint pocks read at close range).","// The 1.6 lift compensates the material color multiplier the","// sand sample bypasses.","if (vSand > 0.003) {","  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 9.0).rgb;","  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.6, vSand);","}","// --- Slope-zoned volcanic material (ALU only, no taps) ---","// A single tiled rock hue read as procedural. Real volcanic","// terrain is zoned: near-black basalt on steep faces, rusty","// oxidized scoria patches on the upper flanks, pale ash on","// level benches near the summit, faint strata banding, and","// a dark wet tide ring where rock meets sea.","{","  float dryLand = smoothstep(0.62, 0.95, vWorldHeight) * (1.0 - vSand);","  if (dryLand > 0.001) {","    float steep = 1.0 - vSlopeY;","    float h01 = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);","    float m1 = sin(vLocXZ.x * 0.55 + 1.3) * cos(vLocXZ.y * 0.48 + 4.2);","    float m2 = sin(vLocXZ.x * 1.7 + 0.4) * cos(vLocXZ.y * 1.5 + 2.1);","    float macro = m1 * 0.65 + m2 * 0.35;","    // Steep faces: dark cool basalt. Gentle ground: warm tuff.","    vec3 zone = mix(vec3(1.06, 1.01, 0.90), vec3(0.48, 0.47, 0.50), smoothstep(0.2, 0.75, steep));","    // Rust scoria lobes on the upper flanks.","    float rust = smoothstep(0.1, 0.7, macro) * smoothstep(0.2, 0.55, h01);","    zone = mix(zone, vec3(1.22, 0.74, 0.52), rust * 0.55);","    // Pale ash benches near the summit on flat ground.","    float ash = smoothstep(0.6, 0.95, h01) * vSlopeY;","    zone = mix(zone, vec3(1.14, 1.10, 1.02), ash * 0.5);","    // Faint strata banding tied to elevation.","    float strataB = 0.95 + 0.05 * sin(vWorldHeight * 9.0 + macro * 2.0);","    diffuseColor.rgb *= mix(vec3(1.0), zone * strataB, dryLand);","  }","  // Wet tide ring: dark saturated band just above the water,","  // anchoring the island INTO the sea (skipped on sand).","  float tide = smoothstep(1.05, 0.72, vWorldHeight) * smoothstep(0.5, 0.66, vWorldHeight);","  diffuseColor.rgb *= 1.0 - tide * 0.45 * (1.0 - vSand);","}"].join(`
`)).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","// The cool-blue night-readability emissive floor is a DRY-LAND","// term. Underwater it glowed through the semi-transparent ocean","// as a centered pale halo that erased the land/water boundary in","// the top-down framing. Fade it out just below the waterline.","totalEmissiveRadiance *= smoothstep(0.10, 0.55, vWorldHeight);","// And keep most of it on the day side: at full strength it","// filled the shadow hemisphere and flattened the island into","// an evenly-lit blob. A low floor keeps a whisper of night","// relief while matching the storm-mode night darkness.","totalEmissiveRadiance *= mix(0.12, 1.0, smoothstep(-0.30, 0.40, vSunFacing));"].join(`
`)).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","// Day/night split: the ambient + hemi fill is what washed the","// island into a uniformly-lit mass with no terminator. Pull","// the indirect fill down on slopes facing away from the sun","// so the island reads half lit / half shadow like the moon.","// Floors sit low (0.12) so the clear-weather night side is as","// dark as the storm one \u2014 the split must not change with weather.","float dayside = smoothstep(-0.30, 0.40, vSunFacing);","reflectedLight.indirectDiffuse *= mix(0.12, 1.0, dayside);","reflectedLight.indirectSpecular *= mix(0.0, 1.0, dayside);","// Direct specular too: the camera-facing rim fill was making","// the wet low-roughness shore band sparkle on the NIGHT side,","// which read as light leaking through the terrain. Capped at","// 0.30 even on the day side \u2014 grazing-angle GGX spikes at the","// terminator were blooming into blinding white flickers that","// made the island glimmer in a way rock never would.","reflectedLight.directSpecular *= mix(0.0, 0.30, dayside);","// Specular only where light actually LANDS: gate by the","// received direct diffuse (which already includes the","// shadow map). Kills the single-pixel glints inside","// day-side crevices \u2014 dark hollows whose detail normals","// still caught the sun through the position-only gate.","float litAmt = smoothstep(0.02, 0.18, dot(reflectedLight.directDiffuse, vec3(0.3333)));","reflectedLight.directSpecular *= litAmt;","// Silhouette de-twinkle: grazing-angle pixels are the last","// shimmer source (sub-pixel silhouette facets catch the key","// for one frame at a time as the island turns). Fade all","// specular where the surface goes edge-on to the camera \u2014","// matte rock loses nothing visually there.","float rimNV = abs(dot(normal, normalize(vViewPosition)));","float rimFade = smoothstep(0.04, 0.28, rimNV);","reflectedLight.directSpecular *= rimFade;","reflectedLight.indirectSpecular *= mix(0.4, 1.0, rimFade);","// Absolute ceiling: every gate above SCALES the specular,","// but a single GGX spike is HDR \u2014 scale 3.0 by 0.3 and the","// pixel still flashes white. Matte volcanic rock never","// flashes; clamp the term itself, and fade it out with","// distance (past ~50u a one-pixel highlight is pure noise","// while the diffuse sheen carries the material).","float specDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);","reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * specDist;","reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));"].join(`
`)).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Detail normal: second tap of the SAME rock normal map at","// a finer scale, blended in. One extra texture fetch buys","// small-rock surface detail everywhere (apparent resolution","// roughly doubles at close range). tbn is threes own","// cotangent frame (built by getTangentFrame even without a","// tangent attribute) so this needs no extra geometry data.","#ifdef USE_NORMALMAP","// Distance fade: past ~mid-range these micro-normals are","// SUB-PIXEL, and sub-pixel normal variance under the sun","// key re-rolls per frame as the island turns \u2014 the","// twinkling/deep-fried shimmer. Full detail up close,","// gone by 130u where it could only alias.","float dtlFade = clamp(1.0 - (length(vViewPosition) - 35.0) / 60.0, 0.0, 1.0);","vec3 dtlN = texture2D( normalMap, vNormalMapUv * 4.3 ).xyz * 2.0 - 1.0;","normal = normalize( normal + tbn * vec3( dtlN.xy * 0.35 * dtlFade, 0.0 ) );","#endif","// Specular AA: widen roughness by per-pixel normal","// variance (screen derivatives) so sub-pixel normal","// detail can never flash single-pixel highlights \u2014 the","// fried speckle killed at the source instead of by blur.","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption (Beer-Lambert): submerged","// slopes darken and blue-shift with true water depth, so","// looking inward through the glass the floor visibly","// deepens toward the island base. max() floor: pure","// exponential drove the basin to PITCH black \u2014 real deep","// water keeps a dim blue ambient from downwelled scatter.","float wDepth = clamp(0.62 - vWorldHeight, 0.0, 4.0);","// Downwelling light is DIRECTIONAL: the water column on","// the night side receives no sun, so submerged ground","// there dims (including the shallow shore ring) \u2014 but the","// dimming applies BEFORE the ambient floor, so the night","// basin bottoms out at the same never-darker-than-space","// level instead of going pitch black.","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vLocXZ), normalize(uSunLocal.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Bloom-proof the rock: the bloom pass thresholds at 0.8","// scene-linear, and single sunlit-speckle pixels crossing it","// bloom into flashing buds as the island turns \u2014 the fried","// look. Rock never legitimately glows; ceiling it just under","// the threshold starves bloom of terrain input entirely.","// (The lava pool + crater glow are separate meshes and keep","// their bloom.) Soft knee, not a hard min: linear below 0.62,","// asymptotic cap. History: 0.78 read OVERCAST (full sun never","// landed), 0.92 restored brilliant faces but left 0.12 of bloom","// headroom over the 0.80 threshold \u2014 enough for a lone bright","// DIFFUSE pixel to bloom-flicker as the island turns, the last","// twinkle path once specular is ceilinged. 0.84 keeps the sun","// on the lit faces while cutting bloom overshoot to 0.04.","vec3 kneeExcess = max(outgoingLight - vec3(0.62), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.62)) + 0.22 * (vec3(1.0) - exp(-kneeExcess / 0.22));","#include <opaque_fragment>"].join(`
`)).replace("#include <roughnessmap_fragment>",["#include <roughnessmap_fragment>","// Photo roughness (sampled by the include above, normalized","// by the 0.9 material constant) modulates a height-based","// base: wet near shore, matte mid-slope, dusty at peak.","// Floors stay high \u2014 glossy pixels on detailed normals fire","// the white specular flicker (the old fried look).","float texRough = clamp(roughnessFactor / 0.9, 0.0, 1.0);","float heightNorm = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);","roughnessFactor = mix(0.5, 0.85, smoothstep(0.0, 0.3, heightNorm));","roughnessFactor = mix(roughnessFactor, 0.55, smoothstep(0.8, 1.0, heightNorm));","// Lava crevices: cooled-lava sheen where emissive is strong","float creviceWet = smoothstep(0.3, 0.0, vWorldHeight - 0.6) * 0.35;","// Floors raised 0.42 -> 0.52: glossy pixels on the dense","// detail normals fire the white specular twinkle.","roughnessFactor = max(0.52, roughnessFactor - creviceWet);","roughnessFactor = clamp(roughnessFactor * mix(0.85, 1.15, texRough), 0.52, 1.0);","// Dry sand is matte, wet swash sand is glossier.","if (vSand > 0.003) {","  float wetSand = smoothstep(0.35, 0.0, vWorldHeight - 0.62);","  roughnessFactor = mix(roughnessFactor, mix(0.85, 0.5, wetSand), vSand);","}"].join(`
`))};let v=new We(t,f);v.renderOrder=1,v.userData.aoInclude=!0,i.add(v);{let E=new Zn({map:a,normalMap:l,roughnessMap:c,normalScale:new ce(.8,.8),color:new se(1.35,1.28,1.18),roughness:.9,metalness:.02,envMapIntensity:.05});E.onBeforeCompile=M=>{M.uniforms.uSandMap=d.uSandMap,M.uniforms.uSandNrm=d.uSandNrm,M.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},M.uniforms.uSunW=window.__sunDirW=window.__sunDirW||{value:new R(1,.2,0)},M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIsWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vIsWP = (modelMatrix * vec4(position, 1.0)).xyz;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",["#include <common>","varying vec3 vIsWP;","uniform sampler2D uSandMap;","uniform sampler2D uSandNrm;","uniform float uDeepLight;","uniform vec3 uSunW;","// Static per-position hash (no time input, cannot flicker):","// patchy sand pockets around each skerry waterline.","float isletSand() {","  float band = 1.0 - smoothstep(0.0, 0.22, abs(vIsWP.y - 0.70));","  float pk = max(0.0, sin(vIsWP.x * 6.5 + 1.3) * cos(vIsWP.z * 5.7 + 4.1));","  return clamp(band * (0.35 + pk), 0.0, 1.0);","}"].join(`
`)).replace("#include <color_fragment>",["#include <color_fragment>","float sMask = isletSand();","if (sMask > 0.003) {","  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 7.0).rgb;","  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.5, sMask);","}"].join(`
`)).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Specular AA (see mountain material).","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","// Anti-twinkle ceiling (see mountain material) \u2014 the","// skerries had NO specular gate and pipped freely.","float isSpecDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);","reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * isSpecDist;","reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption (see seabed material).","float wDepth = clamp(0.62 - vIsWP.y, 0.0, 4.0);","// Directional downwelling, floor applied last (world","// sun here since vIsWP is a world position).","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vIsWP.xz), normalize(uSunW.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Bloom-proof soft knee (see mountain material).","vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));","#include <opaque_fragment>"].join(`
`))},E.vertexColors=!0;let C=[{a:.55,r:9.2,s:1.05,squash:.5},{a:1.15,r:10.6,s:.55,squash:.6},{a:2.95,r:8.6,s:1.35,squash:.42},{a:3.35,r:11.3,s:.5,squash:.55},{a:5.05,r:9.8,s:.8,squash:.48},{a:.85,r:11.8,s:.28,squash:.5},{a:3.05,r:10.2,s:.24,squash:.5},{a:5.45,r:11,s:.32,squash:.45}];for(let M=0;M<C.length;M++){let x=C[M],P=new ao(1,3),N=P.attributes.position;for(let z=0;z<N.count;z++){let B=N.getX(z),j=N.getY(z),k=N.getZ(z),oe=1+(Math.sin(B*5.1+M*7.7)*Math.cos(k*4.3+M*3.1)+Math.sin(j*6.7+M*11.3)*.6)*.16;N.setXYZ(z,B*oe,j*oe,k*oe)}P.computeVertexNormals();let O=new We(P,E);O.scale.set(x.s,x.s*x.squash,x.s*(.8+M%3*.15)),O.position.set(Math.cos(x.a)*x.r,Xe-x.s*x.squash*.45,Math.sin(x.a)*x.r);{let z=x.s*x.squash,B=new Float32Array(N.count*3);for(let j=0;j<N.count;j++){let k=N.getY(j)*z+O.position.y,Y=1-Math.min(1,Math.abs((k-Xe-.06)/.14)),oe=Math.max(0,Math.sin(N.getX(j)*9+M*5)),he=Math.max(0,Y)*oe*.85;B[j*3]=1+he*.45,B[j*3+1]=1+he*.32,B[j*3+2]=1+he*.1}P.setAttribute("color",new Qe(B,3))}O.rotation.y=x.a*2.3,O.userData.aoInclude=!0,O.castShadow=!0,O.receiveShadow=!0,i.add(O);let H=M<5?2:0;for(let z=0;z<H;z++){let B=M*3.7+z*2.3,j=new ao(1,2),k=j.attributes.position;for(let W=0;W<k.count;W++){let te=k.getX(W),re=k.getY(W),q=k.getZ(W),ee=1+(Math.sin(te*6.3+B)*Math.cos(q*5.1+B*1.7)+Math.sin(re*7.9+B*.9)*.5)*.22;k.setXYZ(W,te*ee,re*ee,q*ee)}j.computeVertexNormals();let Y=new Float32Array(k.count*3).fill(1);j.setAttribute("color",new Qe(Y,3));let oe=new We(j,E),he=x.s*(.1+.09*Math.abs(Math.sin(B*3.1)));oe.scale.set(he,he*.8,he*(.85+.3*Math.abs(Math.cos(B))));let fe=x.a+Math.sin(B)*.9,me=x.r+Math.cos(B*1.3)*x.s*.9;oe.position.set(Math.cos(fe)*me,Xe+.02+Math.sin(B*2.1)*.05-he*.35,Math.sin(fe)*me),oe.rotation.set(B,B*1.7,B*.6),oe.castShadow=!1,oe.receiveShadow=!0,i.add(oe)}}}{let E=function(te){let re=document.createElement("canvas");re.width=re.height=128;let q=re.getContext("2d"),Z=q.createImageData(128,128);for(let pe=0;pe<16384*4;pe+=4){let Se=Math.floor((Math.sin((pe+te)*127.1)*43758.5453%1+1)%1*255);Z.data[pe]=Z.data[pe+1]=Z.data[pe+2]=Se,Z.data[pe+3]=255}q.putImageData(Z,0,0);let ee=new Fn(re);return ee.wrapS=ee.wrapT=xt,ee},C=E(0),M=E(7919),x={value:0},P=new ze({uniforms:{uTime:x,uNoise1:{value:C},uNoise2:{value:M}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime;
                uniform sampler2D uNoise1;
                uniform sampler2D uNoise2;
                varying vec2 vUv;
                void main() {
                    float dist = length(vUv - 0.5) * 2.0;
                    float mask = 1.0 - smoothstep(0.6, 1.0, dist);
                    vec2 d1 = (texture2D(uNoise1, vUv * 1.5 + vec2(uTime * 0.02, -uTime * 0.015)).rg - 0.5) * 0.08;
                    vec2 d2 = (texture2D(uNoise2, vUv * 1.2 + vec2(-uTime * 0.018, uTime * 0.025)).rg - 0.5) * 0.08;
                    vec2 distorted = vUv + d1 + d2;
                    float n1 = texture2D(uNoise1, distorted * 2.0).r;
                    float n2 = texture2D(uNoise2, distorted * 1.8 + 0.3).r;
                    float heat = (n1 + n2) * 0.5 * mask * (0.9 + 0.1 * sin(uTime * 0.4));
                    vec3 col = vec3(0.45, 0.06, 0.02) * smoothstep(0.1, 0.3, heat)
                             + vec3(0.55, 0.28, 0.04) * smoothstep(0.3, 0.55, heat)
                             + vec3(0.25, 0.32, 0.06) * smoothstep(0.55, 0.75, heat);
                    // Darken edges to blend into crater walls
                    float edgeDarken = smoothstep(0.5, 0.85, dist);
                    col *= (1.0 - edgeDarken * 0.7);
                    gl_FragColor = vec4(col * heat * 2.8, smoothstep(0.0, 0.15, heat) * (1.0 - edgeDarken * 0.5));
                }
            `,transparent:!0,depthWrite:!1,side:Tt}),N=.35,O=.7,H=.45,z=new yn(N,32),B=new We(z,P);B.rotation.x=-Math.PI/2,B.position.set(0,mr-H-.05,0),B.renderOrder=2,i.add(B);let j=new yn(N*.85,32),k=new ze({uniforms:{uTime:x,uNoise1:{value:C}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime;
                uniform sampler2D uNoise1;
                varying vec2 vUv;
                void main() {
                    float dist = length(vUv - 0.5) * 2.0;
                    float mask = 1.0 - smoothstep(0.5, 0.9, dist);
                    float n = texture2D(uNoise1, vUv * 1.2 + vec2(uTime * 0.008, -uTime * 0.006)).r;
                    float heat = n * mask * 0.6;
                    vec3 col = vec3(0.35, 0.04, 0.01) * heat;
                    gl_FragColor = vec4(col * 2.0, heat * 0.7);
                }
            `,transparent:!0,depthWrite:!1,side:Tt}),Y=new We(j,k);Y.rotation.x=-Math.PI/2,Y.position.set(0,mr-H-.15,0),Y.renderOrder=1,i.add(Y);let oe=new Ca(N,N+.25,32),he=new ze({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec2 vUv;
                void main() {
                    // vUv.x goes 0 (inner) to 1 (outer) on a RingGeometry
                    float t = vUv.x;
                    // Inner edge: warm glow, outer: dark rock
                    vec3 inner = vec3(0.25, 0.06, 0.02);
                    vec3 outer = vec3(0.04, 0.03, 0.02);
                    vec3 col = mix(inner, outer, smoothstep(0.0, 0.7, t));
                    float alpha = (1.0 - smoothstep(0.5, 1.0, t)) * 0.8;
                    gl_FragColor = vec4(col, alpha);
                }
            `,transparent:!0,depthWrite:!1,side:Tt}),fe=new We(oe,he);fe.rotation.x=-Math.PI/2,fe.position.set(0,mr-H-.03,0),fe.renderOrder=2,i.add(fe);let me=new jn(16732192,.5,3);me.position.set(0,mr-H+.2,0),i.add(me);let W=new Kn;B.onBeforeRender=()=>{x.value=W.getElapsedTime()%600},D.lavaPool={mesh:B,deepMesh:Y,ringMesh:fe,light:me,timeUniform:x}}D.mtnGeo=t,D.terrainPulseUniform=n,Du(Zf,(E,C,M)=>{jf(E,C,M);let x=null,P={a:0,b:0,c:0,d:0},N=()=>{let q=P,Z=t.attributes.position,ee=t.attributes.uv,pe=new Float32Array(Z.count*3),Se=new Float32Array(Z.count),Le={},qe=9.8,F=7;for(let ue=0;ue<Z.count;ue++){let Ue=Lu(E,C,M,ee.getX(ue),ee.getY(ue)),xe=Z.getX(ue),A=Z.getZ(ue),b=Math.sqrt(xe*xe+A*A),U=Ue*Jn,X=.7,ne=.45;if(b<X*1.5){let ye=Math.max(0,1-b/X),L=ye*ye*(3-2*ye);if(U-=L*ne,b>X*.8&&b<X*1.4){let le=1-Math.abs(b-X)/(X*.4);U+=Math.max(0,le)*.08}}let K=0;if(b>F){let ye=Math.min(1,(b-F)/(qe-F));K=ye*ye*(3-2*ye);let L=Xe-1.2;U=U+(L-U)*K}if(b>qe){let ye=qe/b;Z.setX(ue,xe*ye),Z.setZ(ue,A*ye),U=Xe-1.2}let Me=0;{let ye=U-Xe,L=1.6;if(Math.abs(ye)<L&&b<qe){let le=Math.abs(ye)/L;Me=1-le*le*le*(le*(le*6-15)+10);let J=Xe-.08+ye*.16,ae=Math.sin(b*5.5-Math.atan2(A,xe)*3)*.03+Math.sin(xe*3.1+A*2.7)*.02;U=U+(J+ae*Me-U)*Me}}{let ye=Math.max(0,Math.min(1,(U-Xe)/(mr-Xe))),L=(1-Me)*Math.min(1,U-Xe>.2?1:(U-Xe-.2)/.2+1);if(ye>.02&&L>0){let le=Math.sin(xe*3.1+Math.cos(A*2.4)+q.a)*Math.cos(A*3.4+Math.sin(xe*1.9)+q.b),J=Math.sin(xe*6.7+1.1+q.c)*Math.cos(A*5.9+2.3+q.d),ae=Math.sin(xe*12.9+4.2+q.a)*Math.cos(A*11.3+.7+q.c),Ee=(1-Math.abs(le))*.55+(1-Math.abs(J))*.28+(1-Math.abs(ae))*.14,Te=.5+.5*Math.sin(xe*.9+2+q.b)*Math.cos(A*.8+.5+q.d),Ye=(.26+.65*ye*ye)*L*(.45+.8*Te);U+=(Ee-.55)*Ye,U+=Math.pow(ye,3)*.35*L*(.6+.4*(1-Math.abs(le)));let ht=Math.atan2(A,xe),Ut=Math.sin(b*1.6+ht*2+q.a)*.4,ot=Math.sin(ht*7+Ut+Math.sin(ht*3+1.7+q.b)*.8+q.c),Jt=1-Math.abs(ot),Rn=Math.sin(Math.PI*Math.min(1,Math.max(0,(ye-.04)/.9)));U-=Jt*Jt*.45*Rn*L;let Cr=.9,Ts=U/Cr,ni=Ts-Math.floor(Ts),Po=(Math.floor(Ts)+Math.min(1,Math.max(0,(ni-.35)/.3)))*Cr,Io=Math.max(0,Math.sin(xe*.55+4+q.d)*Math.cos(A*.6+1.2+q.a)),As=Math.sin(Math.PI*Math.min(1,Math.max(0,(ye-.05)/.75))),Pr=Math.min(.7,Io*1.15)*As*L;U=U*(1-Pr)+Po*Pr}}Z.setY(ue,U);let de=(Math.random()-.5)*.04,ge=Math.max(0,1-Math.min(1,Math.abs(U-Xe)/.5)),Re,ie,ve;if(U>Xe-.3){let ye=Nf(Math.max(0,Math.min(1,Ue+de)),ge);Re=ye.r,ie=ye.g,ve=ye.b}else{let ye=Iu(Math.max(0,Math.min(1,(U-wn)/Bn)));Re=ye.r,ie=ye.g,ve=ye.b}if(U>Xe+.04&&U<Xe+.5){let ye=1-Math.abs((U-Xe-.22)/.28),L=Math.max(0,Math.sin(xe*1.9+4.7)*Math.cos(A*2.3+1.3)),le=Math.min(1,Math.max(0,ye)*L*1.15);Re+=(.375-Re)*le,ie+=(.32-ie)*le,ve+=(.235-ve)*le,Se[ue]=Math.max(Se[ue],le)}if(U>Xe-.55&&U<=Xe+.04){let ye=1-Math.abs((U-Xe+.22)/.35),L=Math.max(0,Math.sin(xe*1.9+4.7)*Math.cos(A*2.3+1.3)),le=Math.min(1,Math.max(0,ye)*L*1.05);Re+=(.31-Re)*le,ie+=(.28-ie)*le,ve+=(.215-ve)*le,Se[ue]=Math.max(Se[ue],le*.8)}if(Me>.05){let ye=.55+.45*Math.max(0,Math.sin(xe*2.4+3.1)*Math.cos(A*2.8+.9));Se[ue]=Math.max(Se[ue],Math.min(1,Me*1.2*ye))}let Pe=U>Xe-.3,De=Pe?3.4:1.4,be=Pe?1.05:.4;if(Re=Math.min(be,Re*De),ie=Math.min(be,ie*De),ve=Math.min(be,ve*De),!Pe&&K>0){let ye=1-K*.5;Re*=ye,ie*=ye,ve*=ye}if(b<1.5){let ye=Math.max(0,1-b/1.5),L=ye*ye*.35;Re*=1-L,ie*=1-L*1.2,ve*=1-L*.8}pe[ue*3]=Re,pe[ue*3+1]=ie,pe[ue*3+2]=ve;let Ge=Z.getX(ue),Ie=Z.getZ(ue);if(U>Xe&&U<Xe+.5){let ye=Math.atan2(Ie,Ge),L=Math.round((ye+Math.PI)/(Math.PI*2)*360),le=Math.sqrt(Ge*Ge+Ie*Ie);(!Le[L]||le>Le[L].dist)&&(Le[L]={x:Ge,z:Ie,dist:le})}}Z.needsUpdate=!0,t.setAttribute("color",new Qe(pe,3)),t.setAttribute("aSand",new Qe(Se,1)),t.computeVertexNormals();let ke=Xa+1,Ce=new Float32Array(Z.count);for(let ue=0;ue<Z.count;ue++)Ce[ue]=Z.getY(ue);let Ne=new Float32Array(Z.count*3);for(let ue=0;ue<Z.count;ue++){let Ue=Ce[ue];if(Ue<Xe+.2)continue;let xe=Math.floor(ue/ke),A=ue%ke,b=Ue,U=Ue,X=0,ne=0;for(let be=-2;be<=2;be++)for(let Ge=-2;Ge<=2;Ge++){if(be===0&&Ge===0)continue;let Ie=xe+be,ye=A+Ge;if(Ie>=0&&Ie<ke&&ye>=0&&ye<ke){let L=Ce[Ie*ke+ye];b=Math.max(b,L),U=Math.min(U,L),X+=L,ne++}}let K=ne>0?X/ne:Ue,Me=Math.max(0,Ue-b+.05)*20,de=Math.max(0,(Ue-Jn*.85)/(Jn*.15)),ge=Math.max(0,K-Ue),Re=ge*5*(1-ge*.5),ie=Math.min(1,Me+de*1.6+Re),ve=Z.getX(ue),Pe=Z.getZ(ue),De=Math.sqrt(ve*ve+Pe*Pe);ie*=1-Math.min(1,De/8),Ne[ue*3]=ie,Ne[ue*3+1]=ie*.25,Ne[ue*3+2]=ie*.03}t.setAttribute("aEmissive",new Qe(Ne,3));{let ue=1/0;for(let Ue=0;Ue<Z.count;Ue++){let xe=Z.getX(Ue),A=Z.getZ(Ue);Math.sqrt(xe*xe+A*A)<.3&&(ue=Math.min(ue,Z.getY(Ue)))}if(ue<1/0&&D.lavaPool){let Ue=ue+.02;D.lavaPool.mesh.position.y=Ue,D.lavaPool.deepMesh.position.y=Ue-.1,D.lavaPool.ringMesh.position.y=Ue+.02,D.lavaPool.light.position.y=Ue+.3}}x=Le};N(),window.__regenIsland=()=>{let q=Math.PI*2;P={a:Math.random()*q,b:Math.random()*q,c:Math.random()*q,d:Math.random()*q};try{N(),t.attributes.position.needsUpdate=!0,t.computeVertexNormals()}catch(Z){console.warn("island regen failed",Z)}};let O=t.attributes.position,H=Object.values(x),z=4,B=H.length*z,j=400,k=B+j,Y=new Float32Array(k*3),oe=new Float32Array(k),he=new Float32Array(k),fe=new Uint8Array(k),me=0;for(let q=0;q<H.length;q++){let Z=H[q].x,ee=H[q].z;for(let pe=0;pe<z;pe++)Y[me*3]=Z+(Math.random()-.5)*.1,Y[me*3+1]=Xe+.12,Y[me*3+2]=ee+(Math.random()-.5)*.1,oe[me]=.5+Math.random()*.5,he[me]=Math.random()*Math.PI*2,fe[me]=0,me++}for(let q=0;q<j;q++){let Z=Math.random()*Math.PI*2,ee=st-.15+Math.random()*.1;Y[me*3]=Math.cos(Z)*ee+(Math.random()-.5)*.1,Y[me*3+1]=Xe+.12,Y[me*3+2]=Math.sin(Z)*ee+(Math.random()-.5)*.1,oe[me]=.5+Math.random()*.5,he[me]=Math.random()*Math.PI*2,fe[me]=1,me++}let W=new it;W.setAttribute("position",new Qe(Y,3));let te=new xn({color:16777215,size:.006,transparent:!0,opacity:.07,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),re=new cn(W,te);re.layers.set(1),re.renderOrder=12,re.visible=!1,i.add(re),window._foam={geo:W,speeds:oe,phases:he,types:fe,count:k,mat:te,mesh:re}});let m=512,p=new ln(st*2,st*2,m,m);p.rotateX(-Math.PI/2);let _=o("rockface_color.jpg",!0),w=o("rockface_normal.jpg",!1),y=o("rockface_rough.jpg",!1);_.repeat.set(6,6),w.repeat.set(6,6),y.repeat.set(6,6);let I=new Zn({map:_,color:new se(1.7,1.7,1.7),vertexColors:!0,roughness:.85,metalness:0,normalMap:w,normalScale:new ce(.6,.6),roughnessMap:y,envMapIntensity:.05});I.onBeforeCompile=E=>{E.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},E.uniforms.uSunLocal=g,E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
varying float vSbWY;
varying vec2 vSbXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vSbWY = position.y;
vSbXZ = position.xz;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
varying float vSbWY;
varying vec2 vSbXZ;
uniform float uDeepLight;
uniform vec3 uSunLocal;`).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Specular AA (see mountain material) \u2014 derivative math","// only, no texture cost.","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption: the floor darkens and","// blue-shifts with true depth \u2014 the shallow rim shelf","// stays readable while the basin toward the island base","// falls into deep-water dark. THE inward-depth cue.","// max() floor keeps the basin a dim blue instead of the","// pitch black the raw exponential produced.","float wDepth = clamp(0.62 - vSbWY, 0.0, 4.0);","// Directional downwelling with the ambient floor applied","// LAST: night side dims but never below the space level","// (see mountain material).","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vSbXZ), normalize(uSunLocal.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Same bloom-proof soft knee as the mountain: the sun","// hotspot on the SHALLOW SHELF (seen through clear water)","// was blooming into a white patch that tracked the sun","// azimuth around the island.","vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));","#include <opaque_fragment>"].join(`
`))};let S=new We(p,I);S.renderOrder=2,S.userData.aoInclude=!0,i.add(S),Du("ocean_floor.webp",(E,C,M)=>{let x=p.attributes.position,P=p.attributes.uv,N=new Float32Array(x.count*3);for(let z=0;z<x.count;z++){let B=P.getX(z),j=P.getY(z),k=x.getX(z),Y=x.getZ(z),oe=Math.sqrt(k*k+Y*Y),he=Lu(E,C,M,B,j),fe=wn+.2+he*(Bn-.5);fe=Math.min(fe,Xe-.5);let me=wn+Bn*.15,W=st-2;if(oe>W){let ke=Math.min(1,(oe-W)/2),Ce=ke*ke*(3-2*ke);fe=fe+(me-fe)*Ce}if(oe>st-.05){let ke=(st-.05)/oe;x.setX(z,k*ke),x.setZ(z,Y*ke),fe=me}if(oe>st-.9){let ke=Math.min(1,(oe-(st-.9))/.9);fe-=ke*ke*.38}x.setY(z,fe);let te=(Math.random()-.5)*.03,re=Math.max(0,Math.min(1,(fe-wn)/Bn+te)),q=0;if(re<.3){let ke=x.getX(z),Ce=x.getZ(z),Ne=Math.sin(ke*1.5+Ce*.7)*Math.sin(ke*.3-Ce*1.8),ue=Math.sin(ke*2.8-Ce*1.2)*Math.cos(ke*.9+Ce*2.1),Ue=Math.max(0,Ne*.5+.5)*Math.max(0,ue*.5+.5),xe=1-re/.3;q=Ue*xe*.4}let Z=Iu(re,q),ee=1-Math.min(1,1-oe/st)*.6,pe=.6+re*.3,Se=Math.max(ee*pe,.55),Le=Z.r*Se,qe=Z.g*Se,F=Z.b*Se;if(oe>st-2.2){let ke=Math.min(1,(oe-(st-2.2))/2),Ce=ke*ke*.85;Le+=(.012-Le)*Ce,qe+=(.02-qe)*Ce,F+=(.026-F)*Ce}N[z*3]=Le,N[z*3+1]=qe,N[z*3+2]=F}x.needsUpdate=!0,p.setAttribute("color",new Qe(N,3)),p.computeVertexNormals();let O=[];for(let z=0;z<x.count;z++){let B=x.getY(z),j=x.getX(z),k=x.getZ(z),Y=Math.sqrt(j*j+k*k);Y>st*.75&&Y<st-1&&B>wn+Bn*.45&&Math.random()<.05&&O.push({x:j,y:B,z:k,d:Y})}O.sort((z,B)=>B.y-z.y);let H=O.slice(0,Math.min(30,O.length));if(H.length>0){let B=H.length*15,j=new Float32Array(B*3),k=new Float32Array(B),Y=new Float32Array(B);for(let te=0;te<H.length;te++){let re=H[te],q=.95;for(let Z=0;Z<15;Z++){let ee=te*15+Z;j[ee*3]=re.x*q+(Math.random()-.5)*.3,j[ee*3+1]=re.y+Math.random()*(Xe-re.y),j[ee*3+2]=re.z*q+(Math.random()-.5)*.3,k[ee]=.2+Math.random()*.4,Y[ee]=Math.random()*Math.PI*2}}let oe=new it;oe.setAttribute("position",new Qe(j,3));let he=new $t(new R(0,-1,0),Xe-.05),fe=new $t(new R(0,1,0),-wn+.1),me=new xn({color:11197951,size:.02,transparent:!0,opacity:.25,depthWrite:!1,sizeAttenuation:!0,blending:Bt,clippingPlanes:[he,fe]}),W=new cn(oe,me);W.renderOrder=5,W.visible=!1,i.add(W),window._rimBubbles={geo:oe,positions:j,speeds:k,phases:Y,sources:H,perVent:15,count:B,mat:me,mesh:W}}})}var sl=class extends We{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new R(.70707,.70707,0),h=new se(t.sunColor!==void 0?t.sunColor:16777215),d=new se(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new R(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Mt,m=t.fog!==void 0?t.fog:!1,p=new $t,_=new R,w=new R,y=new R,I=new Ve,S=new R(0,0,-1),E=new nt,C=new R,M=new R,x=new nt,P=new Ve,N=new Et,O=new bt(s,r),H={name:"MirrorShader",uniforms:Rt.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new se(8355711)},sunDirection:{value:new R(.70707,.70707,0)},eye:{value:new R},waterColor:{value:new se(5592405)},dishRotation:{value:0},oceanRadius:{value:31.5},uGlintShiny:{value:110},uGlintSpec:{value:1.9}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;
				uniform float dishRotation; // angle of dish rotation \u2014 syncs wave scroll
				uniform float oceanRadius;  // for radial depth color variation
				uniform float uGlintShiny;
				uniform float uGlintSpec;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec2 rotateUV(vec2 uv, float angle) {
					float c = cos(angle);
					float s = sin(angle);
					return vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
				}

				vec4 getNoise( vec2 uv ) {
					// Rotate UV to match dish rotation so waves spin with the dish
					uv = rotateUV(uv, dishRotation);
					// Constant per-layer phase offsets: without them all
					// layers sample the same texture unshifted at time=0,
					// so right after page load they constructively align
					// into coarse high-contrast blotches that only decay
					// as the drifts decorrelate. Offsets kill the overlap.
					// Fine detail layer (original)
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 ) + vec2( 0.23, 0.71 );
					// Large-scale wave layer \u2014 visible from orbital distance
					vec2 uv2 = uv / vec2( 17.0, 19.0 ) + vec2( time / 101.0, time / 97.0 ) + vec2( 0.51, 0.13 );
					vec2 uv3 = uv / vec2( 23.0, 21.0 ) - vec2( time / 109.0, time / -113.0 ) + vec2( 0.88, 0.37 );
					// (A 5th micro-ripple tap lived here briefly \u2014 cut: the
					// water shader covers a huge screen area and renders
					// twice via the mirror pass, and the extra fetch cost
					// ~6fps. The four offset taps carry the detail.)
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					// Distance-based normal flattening (ocean LOD): far
					// from the camera the wave normals are SUB-PIXEL, and
					// their moving speculars strobe \u2014 the persistent
					// shimmer along the dish rim. Flattening toward the
					// up-vector with distance keeps full chop up close
					// (water-level views) and a calm, stable sheen at
					// range. This attenuates specular ALIASING, which no
					// post-AA can fix on moving sub-pixel detail.
					// Fade starts at 150u (was 60): the flicker floor is
					// structurally fixed elsewhere, so mid-range water
					// keeps its living chop \u2014 only the far rim (where
					// wavelets are genuinely sub-pixel) flattens.
					float camDist = length( eye - worldPosition.xyz );
					// Cap dropped again 0.65 -> 0.35: the flattening zone is
					// exactly where the sun's mirror trail lives (the far
					// half of the disc), and flat normals collapse what
					// should be a long shimmering COLUMN into a small pool \u2014
					// the reason the glint presets read as doing nothing.
					// SMAA + specular caps now carry the strobe protection.
					float lodFade = clamp( ( camDist - 150.0 ) / 300.0, 0.0, 0.35 );
					surfaceNormal = normalize( mix( surfaceNormal, vec3( 0.0, 1.0, 0.0 ), lodFade ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					// Tight sun-path lobe (shiny 110): with the sun direction at
					// its real elevation the old broad 30/3.5 lobe aligned over
					// a huge patch of sea and bloomed into a white blob. A
					// tighter, dimmer lobe breaks against the wave normals into
					// a sparkling glint TRAIL along the sun azimuth instead.
					// Preset-driven lobe: this analytic term is the sun's
					// visible reflection on the sea (the mirrored disc
					// itself dies at the fresnel x clamp, see below).
					sunLight( surfaceNormal, eyeDirection, uGlintShiny, uGlintSpec, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					// Capped at 0.85: the mirrored sun disc is HDR (2.2x) and
					// uncapped it floods a patch of sea + feeds bloom into a
					// white blob. Clamping keeps the reflected sun as a
					// wave-broken trail that never crosses the bloom knee.
					// Reinhard soft clamp instead of a hard min(x, 0.85):
					// the hard clamp flattened the HDR sun disc to the same
					// level as bright sky, and after the ~0.05 steep-angle
					// fresnel the mirrored sun vanished entirely. The soft
					// curve keeps highlight SEPARATION (sun stays ~2x sky
					// in the mirror) while still bounding output at ~0.85
					// so nothing feeds bloom.
					vec3 reflRaw = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );
					vec3 reflectionSample = reflRaw / ( vec3( 1.0 ) + reflRaw ) * 1.7;

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.04; // physically-based water IOR ~1.33
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );

					// --- Radial depth color: shallow near island, deep at edges ---
					// Sun-facing factor dims the shallow teal on the night side so
					// the center doesn't glow unnaturally in top-down views.
					float radialDist = length(worldPosition.xz);
					float depthT = smoothstep(6.0, oceanRadius * 0.85, radialDist);
					vec2 sunDir2D = normalize(sunDirection.xz);
					vec2 fragDir2D = normalize(worldPosition.xz);
					float sunFacing = dot(fragDir2D, sunDir2D) * 0.5 + 0.5; // 0=night, 1=day
					sunFacing = mix(0.25, 1.0, sunFacing); // night side gets 25% of shallow brightness
					vec3 shallowCol = vec3(0.05, 0.13, 0.18) * sunFacing;
					vec3 deepCol    = waterColor;
					vec3 localWaterColor = mix(shallowCol, deepCol, depthT);

					// Subsurface scatter \u2014 weaker on the night side. Raised
					// 1.2 -> 1.6 to hand back the brightness the diffuse cut
					// removed, but as WATER-COLORED light instead of grey.
					float sss = pow( max( 0.0, dot( surfaceNormal, eyeDirection ) ), 1.5 );
					vec3 scatter = sss * localWaterColor * 1.6 * sunFacing;
					// Depth-tinted ambient \u2014 darker water absorbs more red
					vec3 depthTint = localWaterColor * 0.15;
					// Shore proximity brightening \u2014 subtle lightening near island.
					// Was (1.0 - depthT) * 0.08: a flat white lift that spanned
					// from the island out to ~85% of the dish radius, which in
					// the top-down framing washed the whole inner ocean up to
					// the same brightness as the sunlit land and erased the
					// shoreline. Now a dimmer lift that hugs the island base.
					float shoreBoost = (1.0 - smoothstep(5.0, 12.0, radialDist)) * 0.03;
					// Dish-wide day/night gradient: the sun-facing half of
					// the ocean carries visibly more light than the far half,
					// so the water agrees with the island's terminator and
					// the viewer can read which side the sun is on.
					float sunSide = mix(0.55, 1.15, (sunFacing - 0.25) / 0.75);
					// Wave crests: where the summed normal field tips
					// steepest, real chop breaks into brief foam flecks.
					// Threshold sits high so only the sharpest few percent
					// of wavelets fire, day side only, capped below the
					// bloom knee so crests can never strobe.
					float crest = smoothstep(0.72, 0.94, 1.0 - surfaceNormal.y);
					// Grazing-view fade: seen edge-on (the rim band from
					// outside the dish), the crest flecks line up into a
					// chain of DISCRETE white dashes along the waterline.
					// Foam is a top-down phenomenon \u2014 kill it as the view
					// flattens toward the surface plane.
					float grazeView = pow(1.0 - abs(eyeDirection.y), 3.0);
					vec3 crestCol = vec3(0.55, 0.62, 0.66) * crest * sunSide * 0.5 * (1.0 - grazeView * 0.9);
					// The reflected branch is capped as a WHOLE, and the cap
					// must sit BELOW the 0.8 bloom threshold \u2014 at 0.82 the
					// glint area still fed bloom and fuzzed into a white
					// patch. 0.74 renders as a crisp bright trail with zero
					// bloom contribution.
					vec3 reflBranch = min( vec3( 0.08 ) + reflectionSample * 0.92 + reflectionSample * specularLight, vec3( 0.74 ) );
					// Diffuse weight 0.3 -> 0.12: water has almost NO diffuse
					// reflectance in reality. At steep view angles fresnel is
					// ~0.05, so the lambert term dominated the whole surface
					// and printed the low-frequency wave-noise octave as a
					// grey MARBLE mottle (the milky look). Killing most of it
					// lets the deep body color carry the surface; the scatter
					// term is raised to keep the sun side alive.
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.12 + scatter + depthTint + shoreBoost + crestCol ) * sunSide * getShadowMask(), reflBranch, reflectance);
					// The sun's glitter path gets its OWN additive channel.
					// Buried inside reflBranch it is multiplied by the
					// mirror sample (near-black space, ~0.1) and then by
					// mean-surface fresnel (~0.05 at steep angles) \u2014 a
					// 30-60x crush that reduced every glint preset to one
					// blob at the horizon. Real sun glitter is per-facet:
					// wave faces tilted into the mirror geometry reflect
					// at near-grazing LOCAL incidence, so the trail stays
					// bright even when mean fresnel is small. Weight by a
					// floored fresnel, soft-clamp, and cap the summed
					// output at the 0.8 bloom knee so the trail can never
					// fuzz into the white patch again.
					vec3 glintPath = specularLight * mix( 0.35, 1.0, reflectance ) * getShadowMask();
					glintPath = glintPath / ( vec3( 1.0 ) + glintPath );
					vec3 outgoingLight = min( albedo + glintPath, vec3( 0.80 ) );
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},z=new ze({name:H.name,uniforms:Rt.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,lights:!0,side:v,fog:m});z.uniforms.mirrorSampler.value=O.texture,z.uniforms.textureMatrix.value=P,z.uniforms.alpha.value=a,z.uniforms.time.value=l,z.uniforms.normalSampler.value=c,z.uniforms.sunColor.value=h,z.uniforms.waterColor.value=d,z.uniforms.sunDirection.value=u,z.uniforms.distortionScale.value=g,z.uniforms.eye.value=f,n.material=z,n.onBeforeRender=function(B,j,k){if(w.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(k.matrixWorld),I.extractRotation(n.matrixWorld),_.set(0,0,1),_.applyMatrix4(I),C.subVectors(w,y),C.dot(_)>0)return;C.reflect(_).negate(),C.add(w),I.extractRotation(k.matrixWorld),S.set(0,0,-1),S.applyMatrix4(I),S.add(y),M.subVectors(w,S),M.reflect(_).negate(),M.add(w),N.position.copy(C),N.up.set(0,1,0),N.up.applyMatrix4(I),N.up.reflect(_),N.lookAt(M),N.far=k.far,N.updateMatrixWorld(),N.projectionMatrix.copy(k.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(N.projectionMatrix),P.multiply(N.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(_,w),p.applyMatrix4(N.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let Y=N.projectionMatrix;x.x=(Math.sign(E.x)+Y.elements[8])/Y.elements[0],x.y=(Math.sign(E.y)+Y.elements[9])/Y.elements[5],x.z=-1,x.w=(1+Y.elements[10])/Y.elements[14],E.multiplyScalar(2/E.dot(x)),Y.elements[2]=E.x,Y.elements[6]=E.y,Y.elements[10]=E.z+1-o,Y.elements[14]=E.w,f.setFromMatrixPosition(k.matrixWorld);let oe=B.getRenderTarget(),he=B.xr.enabled,fe=B.shadowMap.autoUpdate;n.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(O),B.state.buffers.depth.setMask(!0),N.layers.enable(1),B.autoClear===!1&&B.clear(),B.render(j,N),n.visible=!0,B.xr.enabled=he,B.shadowMap.autoUpdate=fe,B.setRenderTarget(oe);let me=k.viewport;me!==void 0&&B.state.viewport(me)}}};function _M(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=64,s=new Float32Array((n+1)*(n+1));for(let l=0;l<s.length;l++)s[l]=Math.random();let r=t.createImageData(256,256),o=r.data;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let u=c/256*n,h=l/256*n,d=Math.floor(u),f=Math.floor(h),g=u-d,v=h-f,m=g*g*(3-2*g),p=v*v*(3-2*v),_=n+1,w=s[f*_+d],y=s[f*_+d+1],I=s[(f+1)*_+d],S=s[(f+1)*_+d+1],C=(w+(y-w)*m+(I-w)*p+(w-y-I+S)*m*p)*255|0,M=(l*256+c)*4;o[M]=C,o[M+1]=C,o[M+2]=C,o[M+3]=C}t.putImageData(r,0,0);let a=new Fn(e);return a.wrapS=a.wrapT=xt,a.magFilter=wt,a.minFilter=gu,a}function MM(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=28,s=new Float32Array(n),r=new Float32Array(n);for(let c=0;c<n;c++)s[c]=Math.random()*256,r[c]=Math.random()*256;let o=t.createImageData(256,256),a=o.data;for(let c=0;c<256;c++)for(let u=0;u<256;u++){let h=1e9,d=1e9;for(let _=0;_<n;_++){let w=Math.abs(u-s[_]);w>256/2&&(w=256-w);let y=Math.abs(c-r[_]);y>256/2&&(y=256-y);let I=Math.sqrt(w*w+y*y);I<h?(d=h,h=I):I<d&&(d=I)}let f=Math.min(1,(d-h)/18),g=1-Math.min(1,h/40),m=Math.min(1,g*.6+f*.6)*255|0,p=(c*256+u)*4;a[p]=m,a[p+1]=m*.7|0,a[p+2]=m*.3|0,a[p+3]=255}t.putImageData(o,0,0);let l=new Fn(e);return l.wrapS=l.wrapT=xt,l.magFilter=wt,l.minFilter=gu,l}function Qf(){let{islandGroup:i,SUN_DIR:e}=D,t=new bn().load("waternormals.jpg",O=>{O.wrapS=O.wrapT=xt,D.renderer&&(O.anisotropy=Math.min(4,D.renderer.capabilities.getMaxAnisotropy())),D.waterNormalsReady=!0,typeof D._onWaterReady=="function"&&D._onWaterReady()}),n=new yn(st,128),s=e.clone();s.y=.6,s.normalize();let r=new sl(n,{textureWidth:1024,textureHeight:1024,waterNormals:t,sunDirection:s,sunColor:16314851,waterColor:400942,distortionScale:3.7,size:2.5,fog:!1,alpha:.82});r.rotation.x=-Math.PI/2,r.position.y=Xe+.05,r.renderOrder=3,r.material.depthWrite=!0,r.material.uniforms.oceanRadius.value=st,i.add(r);let o=new yn(st,64);o.rotateX(Math.PI/2);let a=new ze({uniforms:{uRadius:{value:st},uTime:{value:0}},vertexShader:`
            varying vec2 vPos;
            void main() {
                vPos = position.xz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform float uRadius;
            uniform float uTime;
            varying vec2 vPos;

            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p); vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
                           mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
            }

            void main() {
                float dist = length(vPos);
                float norm = dist / uRadius;

                // Deep ocean blue at center, near-black at edges
                vec3 centerCol = vec3(0.04, 0.10, 0.16);
                vec3 edgeCol   = vec3(0.015, 0.03, 0.06);
                vec3 col = mix(centerCol, edgeCol, smoothstep(0.1, 0.9, norm));

                // Subtle animated caustic hint from below
                float c = noise(vPos * 0.12 + uTime * 0.02);
                c = smoothstep(0.45, 0.65, c) * 0.06 * (1.0 - norm);
                col += vec3(0.3, 0.5, 0.6) * c;

                gl_FragColor = vec4(col, 1.0);
            }
        `,side:Mt,depthWrite:!0}),l=new We(o,a);l.position.y=Xe-.05,l.renderOrder=3,i.add(l),window._undersideMat=a,D.water=r,r.userData.aoInclude=!0;let c=_M(),u=MM(),h=new yn(st,128);h.rotateX(Math.PI/2);let d=new ze({depthWrite:!0,uniforms:{uTime:{value:0},uRadius:{value:st-.1},uPulse:{value:.48},uErupt:{value:0},uNoiseTex:{value:c},uLavaTex:{value:u}},vertexShader:`
            varying vec2 vUv;
            varying vec2 vPos;
            void main() {
                vUv = uv;
                vPos = position.xz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform float uRadius;
            uniform float uPulse;
            uniform float uErupt;

            uniform sampler2D uNoiseTex;
            uniform sampler2D uLavaTex;
            varying vec2 vUv;
            varying vec2 vPos;

            void main() {
                float dist = length(vPos);
                float norm = dist / uRadius;

                // Clean edge clip
                if (norm > 0.998) discard;

                // ---- Radial intensity: white-hot at center, cold at edges.
                // pow 2.4 (was 1.5): heat hugs the magma conduit under the
                // volcano instead of washing the whole underside \u2014 the
                // full-disc glow read cartoon-bright from the connect view.
                float radial = 1.0 - smoothstep(0.0, uRadius * 0.85, dist);
                radial = pow(radial, 2.4);

                // Secondary ridge ring at 55-75% radius (mid-ocean ridges)
                float ridgeRing = smoothstep(0.50, 0.62, norm) * (1.0 - smoothstep(0.72, 0.88, norm));
                float heatMask = max(radial, ridgeRing * 0.30);

                // ---- Radial dike veins: bright filaments TRACING OUTWARD
                // from the central volcano, like spokes of a magma plumbing
                // system. Ridged noise in (angle, radius) space keeps them
                // elongated along the radial direction; they fade with
                // distance and flicker gently as the texture drifts.
                float ang = atan(vPos.y, vPos.x);
                float veinNoise = texture2D(uNoiseTex, vec2(ang * 1.9099, norm * 0.55 - uTime * 0.004)).r;
                float radialVein = pow(1.0 - abs(veinNoise - 0.5) * 2.0, 6.0);
                radialVein *= (1.0 - smoothstep(0.15, 0.9, norm)) * smoothstep(0.02, 0.1, norm);
                heatMask = max(heatMask, radialVein * 0.85);

                // ---- Two-texture UV distortion (TheGameMaker technique) ----
                // Sample noise texture for UV warping
                vec4 noiseA = texture2D(uNoiseTex, vUv * 3.0 + uTime * 0.005);

                // First distorted UV \u2014 slow drift
                vec2 T1 = vUv * 2.0 + vec2(1.5, -1.5) * uTime * 0.015;
                T1 += noiseA.xy * 0.8;
                float p = texture2D(uNoiseTex, T1).r;

                // Second distorted UV \u2014 counter-drift for turbulence
                vec2 T2 = vUv * 2.0 + vec2(-0.5, 2.0) * uTime * 0.01;
                T2 -= noiseA.yz * 0.3;
                vec4 lava = texture2D(uLavaTex, T2);

                // Combine: texture interaction creates flowing magma cells
                float heat = lava.r * p * 2.0 * heatMask;

                // ---- Dike veins: ridged noise -> thin bright filaments,
                // the magma plumbing that feeds the crater. Faintly present
                // at rest; surges hard while the volcano above erupts so
                // the underside visibly participates in the event.
                float vein = 1.0 - smoothstep(0.0, 0.18, abs(p - 0.5));
                vein *= vein;
                heat += vein * (0.28 + uErupt * 1.5) * (0.35 + heatMask);

                // ---- Pulse: multiply by terrain pulse uniform ----
                float pulseMul = 0.6 + uPulse * 1.2;
                heat *= pulseMul;

                // Slow organic breathing (barely perceptible)
                heat *= 0.92 + sin(uTime * 0.3 + dist * 0.15) * 0.08;

                // ---- Color ramp: black \u2192 dark red \u2192 orange \u2192 white-hot ----
                vec3 col = vec3(0.0);
                // Dark red / maroon base
                col += vec3(0.4, 0.05, 0.02) * smoothstep(0.05, 0.25, heat);
                // Orange
                col += vec3(0.6, 0.45, 0.08) * smoothstep(0.25, 0.55, heat);
                // Yellow-orange
                col += vec3(0.3, 0.35, 0.0) * smoothstep(0.55, 0.75, heat);
                // White-hot core
                col += vec3(0.2, 0.45, 0.65) * smoothstep(0.80, 1.0, heat);
                col *= heat;

                // 1.6 (was 2.8): only the white-hot conduit core should
                // clear the bloom threshold \u2014 the old value floodlit the
                // entire underside into an unrealistic lava lamp.
                col *= 1.6;

                // Alpha: fully opaque at hot spots, transparent at cold edges
                float alpha = smoothstep(0.0, 0.08, heat);

                gl_FragColor = vec4(col, max(alpha, 0.85));
            }
        `,side:Mt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),f=new We(h,d);f.position.y=wn+.35,f.renderOrder=2,i.add(f),window._lavaBottom=d;let g=.27,v=new ps(st-.1,st-.1,g,64,1,!0),m=new zt({color:1709328,side:Tt,depthWrite:!0}),p=new We(v,m);p.position.y=wn+.35+g/2,p.renderOrder=1,p.visible=!1,i.add(p);let _=2.8,w=new ps(st,st,_,64,8,!0);window.__deepLightU=window.__deepLightU||{value:0};let y=new ze({uniforms:{uSunXZ:{value:new ce(1,0)},uSurfY:{value:Xe+.05},uDeepLight:window.__deepLightU},vertexShader:`
            varying vec3 vLocal;
            varying vec3 vWorld;
            void main() {
                vLocal = position;
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorld = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `,fragmentShader:`
            uniform vec2 uSunXZ;
            uniform float uSurfY;
            uniform float uDeepLight;
            varying vec3 vLocal;
            varying vec3 vWorld;
            void main() {
                // Depth below the water surface (world units).
                float d = max(uSurfY - vWorld.y, 0.0);

                // Downwelling light: I(d) = I0 * exp(-k d). k ~ 1.0/u at
                // this scene scale gives a bright first half-unit and a
                // lightless floor \u2014 the "real depth" read.
                float light = exp(-d * 1.05);

                // Spectral absorption \u2014 palette matched to the SURFACE
                // ocean (deep navy-teal, 0x061e2e family). The first pass
                // ran too saturated-BLUE against the grey-navy top and the
                // wall read as tinted plastic instead of the same water.
                vec3 absorb = vec3(3.0, 1.4, 0.8);
                // Base desaturated a step (0.20,0.36,0.42 ran electric):
                // real coastal water is a grayer teal.
                vec3 bodyCol = vec3(0.16, 0.30, 0.36) * exp(-absorb * (d + 0.25));

                // Sun-side: the lit hemisphere carries more in-scattered
                // light, matching the terrain terminator. Night floor
                // dropped hard (0.5 -> 0.25) so the bright shallow band
                // reads DAY vs NIGHT like everything else on the dish.
                float facing = dot(normalize(vLocal.xz), normalize(uSunXZ)) * 0.5 + 0.5;
                bodyCol *= mix(0.25, 1.15, facing);

                // Subsurface glow just under the waterline, sun side only
                // \u2014 squared so it dies completely on the night half.
                // Narrower band, dimmer, and broken up by a static
                // positional swell pattern: the old uniform ribbon read
                // as a painted stripe, real backlit swash varies along
                // the shore.
                float swell = 0.72 + 0.28 * sin(atan(vLocal.z, vLocal.x) * 17.0 + sin(atan(vLocal.z, vLocal.x) * 5.0) * 2.0);
                // Dimmer + cubed facing (was squared): the waterline glow was
                // still too bright where it wrapped toward the night rim.
                // Cubing keeps the sun-centre band (facing~1) essentially
                // unchanged while collapsing it fast past the terminator.
                bodyCol += vec3(0.013, 0.038, 0.041) * exp(-d * 3.6) * facing * facing * facing * swell;

                // Scattered ambient so depth never goes darker than the
                // space background (raised from a whisper (0.003,0.008,
                // 0.015) that lost to the backdrop). uDeepLight is the
                // owner-facing dial.
                bodyCol += vec3(0.014, 0.028, 0.042) * uDeepLight;

                // Opacity from the actual optical path: a HORIZONTAL
                // sight-line crosses tens of units of water and must go
                // opaque; a steep downward view exits through the nearby
                // seabed and stays clearer (bathymetry ghosts through).
                vec3 V = normalize(vWorld - cameraPosition);
                float horiz = 1.0 - clamp(abs(V.y), 0.0, 1.0);
                // Effective optical path through the column: a horizontal
                // ray at depth d crosses many units of water before it
                // reaches the island base, so path scales steeply with
                // both depth and horizontality. THE inward-depth cue:
                // near the surface the water stays readable, sight-lines
                // aimed at the island base go near-black.
                float path = d * (1.0 + 5.5 * horiz * horiz) + 0.08;
                float alpha = 1.0 - exp(-path);
                alpha = clamp(alpha, 0.10, mix(0.74, 0.93, horiz));
                // The color absorbs along the path too (not just the
                // alpha) \u2014 deep inward views lose red then green until
                // only blue-black remains.
                bodyCol *= exp(-vec3(1.4, 0.62, 0.30) * max(path - 0.4, 0.0) * 0.55);

                // Below the shelf line (~y -0.6) the seabed face sits
                // DIRECTLY behind the glass, so the water path to solid
                // ground is short \u2014 the wall must go CLEAR there and let
                // the rock detail show (the payoff of a cutaway aquarium
                // view). The old version instead slammed this zone to a
                // near-opaque black band, which read as a pitch-black
                // void at the bottom of the edge view.
                float belowBed = smoothstep(-0.35, -1.1, vWorld.y);
                alpha *= mix(1.0, 0.30, belowBed);
                // Thin sediment contact seam at the very floor junction
                // only \u2014 a grounded line, not a band.
                float seam = smoothstep(-1.80, -2.0, vWorld.y);
                bodyCol = mix(bodyCol, vec3(0.010, 0.016, 0.020), seam * 0.8);
                alpha = max(alpha, seam * 0.55);

                gl_FragColor = vec4(bodyCol * (0.45 + 0.55 * light), alpha);
            }
        `,transparent:!0,depthWrite:!1,side:Tt});window._edgeColumn=y;let I=new We(w,y);I.position.y=-2+_/2,I.renderOrder=4,i.add(I);let S=3e3,E=new Float32Array(S*3),C=new Float32Array(S),M=new Float32Array(S);for(let O=0;O<S;O++){let H,z,B,j=Math.random();if(j<.4){let k=Math.random()*Math.PI*2,Y=7.5+Math.random()*3;H=Math.cos(k)*Y,z=Math.sin(k)*Y}else if(j<.6){let k=Math.random()*Math.PI*2,Y=st-.5-Math.random()*2;H=Math.cos(k)*Y,z=Math.sin(k)*Y}else{let k=Math.random()*Math.PI*2,Y=Math.random()*(st-2);H=Math.cos(k)*Y,z=Math.sin(k)*Y,B=Math.sqrt(H*H+z*z),B<6&&(H*=6/B,z*=6/B)}E[O*3]=H,E[O*3+1]=Xe-.02-Math.random()*.08,E[O*3+2]=z,C[O]=Math.random()*Math.PI*2,M[O]=.2+Math.random()*.4}let x=new it;x.setAttribute("position",new Qe(E,3));let P=new xn({color:9480376,size:.015,transparent:!0,opacity:.12,depthWrite:!1,sizeAttenuation:!0}),N=new cn(x,P);N.renderOrder=2,N.visible=!1,i.add(N),window._oceanParticles={geo:x,positions:E,phases:C,speeds:M,count:S,mat:P,mesh:N}}var bM=new Kn,Jf=0;function $f(){let{water:i,SUN_DIR:e}=D,t=bM.getElapsedTime(),n=t%600,s=window._weather&&window._weather.smoothed||0,r=.13+s*s*.3;i.material.uniforms.time.value+=r/60,D.islandGroup&&(i.material.uniforms.dishRotation.value=D.islandGroup.rotation.y);let o=i.material.uniforms.sunDirection.value,a=typeof window.__glintElev=="number"?window.__glintElev:.6;if(o.set(e.x,a,e.z).normalize(),window._lightRays&&(window._lightRays.uniforms.uTime.value=n,window._lightRays.uniforms.uSunDir.value.set(e.x,a,e.z)),window._caustics&&window._causticsMesh&&window._causticsMesh.visible){let l=window._caustics.uniforms,c=Math.min(Math.max(t-(Jf||t),0),.1);Jf=t,l.uTime.value=n,window._terrain&&window._terrain.sunUniform&&l.uSunDir.value.copy(window._terrain.sunUniform.value);let u=l.uSunDir.value,h=Math.hypot(u.x,u.z)||1,d=u.x/h,f=u.z/h;l.uDrift1.value.x+=d*.034*c,l.uDrift1.value.y+=f*.034*c,l.uDrift2.value.x-=f*.023*c,l.uDrift2.value.y-=d*.023*c}if(window._edgeColumn&&window._terrain&&window._terrain.sunUniform){let l=window._terrain.sunUniform.value;window._edgeColumn.uniforms.uSunXZ.value.set(l.x,l.z)}if(window._oceanParticles&&window._oceanParticles.mesh&&window._oceanParticles.mesh.visible){let l=window._oceanParticles,c=l.positions;for(let u=0;u<l.count;u++)c[u*3]+=Math.sin(t*l.speeds[u]+l.phases[u])*.002,c[u*3+2]+=Math.cos(t*l.speeds[u]*.7+l.phases[u])*.002,c[u*3+1]=Xe-.02+Math.sin(t*l.speeds[u]*1.5+l.phases[u])*.01;l.geo.attributes.position.needsUpdate=!0}if(window._foam&&window._foam.types&&window._foam.mesh&&window._foam.mesh.visible){let l=window._foam,c=l.geo.attributes.position.array;for(let u=0;u<l.count;u++){let h=l.types[u],d=l.speeds[u],f=l.phases[u];h===0?(c[u*3]+=Math.sin(t*d*3+f)*.002,c[u*3+2]+=Math.cos(t*d*2.5+f)*.002,c[u*3+1]=Xe+.12+Math.sin(t*d+f)*.02):h===1&&(c[u*3]+=Math.sin(t*d*3+f)*.002,c[u*3+2]+=Math.cos(t*d*2.5+f)*.002,c[u*3+1]=Xe+.12+Math.sin(t*d+f)*.02)}l.geo.attributes.position.needsUpdate=!0}if(window._peakFoam){let l=window._peakFoam,c=l.positions;for(let u=0;u<l.count;u++)c[u*3+1]+=Math.sin(t*1.5+l.phases[u])*.001;l.geo.attributes.position.needsUpdate=!0}if(window._rimFoam){let l=window._rimFoam,c=l.positions;for(let u=0;u<l.count;u++){let h=l.angles[u],d=l.phases[u],f=l.speeds[u],g=Math.sin(t*f+d)*.08,v=st-.2+g;c[u*3]=Math.cos(h)*v,c[u*3+2]=Math.sin(h)*v,c[u*3+1]=Xe+.01+Math.sin(t*f*1.2+d)*.03}l.geo.attributes.position.needsUpdate=!0}if(window._rimBubbles&&window._rimBubbles.mesh&&window._rimBubbles.mesh.visible){let l=window._rimBubbles,c=l.positions;for(let u=0;u<l.count;u++)if(c[u*3+1]+=l.speeds[u]*.016,c[u*3]+=Math.sin(t*1.5+l.phases[u])*.002,c[u*3+2]+=Math.cos(t*1.2+l.phases[u])*.002,c[u*3+1]>Xe-.15){let h=Math.floor(u/l.perVent),d=l.sources[h];c[u*3]=d.x*.95+(Math.random()-.5)*.3,c[u*3+1]=d.y,c[u*3+2]=d.z*.95+(Math.random()-.5)*.3}l.geo.attributes.position.needsUpdate=!0}window._lavaBottom&&(window._lavaBottom.uniforms.uTime.value=n,D.terrainPulseUniform&&(window._lavaBottom.uniforms.uPulse.value=D.terrainPulseUniform.value),window._lavaBottom.uniforms.uErupt.value=Math.max(0,Math.min(1,((window._volcanoGlow||1)-1)/1.6))),window._undersideMat&&(window._undersideMat.uniforms.uTime.value=n)}function ep(){let{islandGroup:i}=D,e=new jt({color:16777215,roughness:.025,metalness:0,transparent:!0,opacity:1,transmission:1,thickness:.35,ior:1.5,clearcoat:.45,clearcoatRoughness:.11,specularIntensity:0,specularColor:new se(16777215),attenuationColor:new se(.62,.86,.8),attenuationDistance:1.5,depthWrite:!1,side:Mt,envMapIntensity:.95,fog:!1});e.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying float vGlassWY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vGlassWY = (modelMatrix * vec4(transformed, 1.0)).y;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlassWY;`).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","float glassAbove = smoothstep(0.05, 0.72, vGlassWY);","reflectedLight.indirectSpecular *= mix(0.05, 1.0, glassAbove);","reflectedLight.directSpecular *= mix(0.10, 1.0, glassAbove);","#ifdef USE_CLEARCOAT","clearcoatSpecularIndirect *= mix(0.05, 1.0, glassAbove);","clearcoatSpecularDirect *= mix(0.10, 1.0, glassAbove);","#endif"].join(`
`))},"dispersion"in e&&(e.dispersion=.18),"iridescence"in e&&(e.iridescence=.12,e.iridescenceIOR=1.3,e.iridescenceThicknessRange=[120,400]),D._envTexture&&(e.envMap=D._envTexture,e.needsUpdate=!0),D.glassMat=e;let t=new no(1024,{type:Nt,generateMipmaps:!0,minFilter:mn}),n=new to(.5,2e3,t);n.layers.enable(4),n.position.set(0,4,0),D.scene.add(n),D._glassCubeCam=n,D._glassCubeRT=t;let s=32.1,r=.55,o=s-r,a=1.2,l=-2.8,c=l-r,u=[];u.push(new ce(.001,c)),u.push(new ce(14,c+.02)),u.push(new ce(24,c+.1)),u.push(new ce(29.5,c+.32)),u.push(new ce(31.4,c+.62)),u.push(new ce(s,c+1.35)),u.push(new ce(s,a-.55)),u.push(new ce(s-.04,a-.18)),u.push(new ce(s-r/2,a)),u.push(new ce(o+.04,a-.18)),u.push(new ce(o,a-.55)),u.push(new ce(o,l+.75)),u.push(new ce(o-1.3,l+.18)),u.push(new ce(28.5,l+.06)),u.push(new ce(14,l)),u.push(new ce(.001,l));let h=new Ra(u,192);h.computeVertexNormals();let d=new We(h,e);d.renderOrder=10,d.layers.set(2),d.userData.aoInclude=!0,i.add(d)}var Mo=0;function tp(){let i=D._glassCubeCam;if(!i||!D.renderer||!D.scene)return;let{islandGroup:e,glassMat:t,renderer:n,scene:s}=D,r=D._glassCubeRT,o=e.visible;e.visible=!1;let a=i.children[Mo],l=n.getRenderTarget(),c=n.xr.enabled;n.xr.enabled=!1;let u=r.texture.generateMipmaps;r.texture.generateMipmaps=Mo===5?u:!1,n.setRenderTarget(r,Mo),n.render(s,a),r.texture.generateMipmaps=u,n.setRenderTarget(l),n.xr.enabled=c,Mo=(Mo+1)%6,e.visible=o,t&&t.envMap!==r.texture&&(t.envMap=r.texture,t.needsUpdate=!0)}function ap(){let{islandGroup:i,scene:e,camera:t,SUN_DIR:n}=D,s=new yn(st,64);s.rotateX(-Math.PI/2);let r=new ze({uniforms:{uTime:{value:0},uSunDir:{value:n},uDayBlend:{value:.5},uRadius:{value:st},uDrift1:{value:new ce(0,0)},uDrift2:{value:new ce(0,0)}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vPos;
            void main() {
                vUv = uv;
                vPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform vec3 uSunDir;
            uniform float uDayBlend;
            uniform float uRadius;
            uniform vec2 uDrift1;
            uniform vec2 uDrift2;
            varying vec2 vUv;
            varying vec3 vPos;

            // --- Voronoi helpers for sharp caustic network ---
            vec2 hash2(vec2 p) {
                p = vec2(dot(p, vec2(127.1, 311.7)),
                         dot(p, vec2(269.5, 183.3)));
                return fract(sin(p) * 43758.5453);
            }

            // Returns (F1, F2) \u2014 closest and second-closest Voronoi distances
            vec2 voronoi(vec2 p) {
                vec2 n = floor(p);
                vec2 f = fract(p);
                float d1 = 8.0, d2 = 8.0;
                for (int j = -1; j <= 1; j++) {
                    for (int i = -1; i <= 1; i++) {
                        vec2 g = vec2(float(i), float(j));
                        vec2 o = hash2(n + g);
                        vec2 r = g + o - f;
                        float d = dot(r, r);
                        if (d < d1) { d2 = d1; d1 = d; }
                        else if (d < d2) { d2 = d; }
                    }
                }
                return vec2(sqrt(d1), sqrt(d2));
            }

            void main() {
                float dist = length(vPos.xz);
                if (dist > uRadius) discard;

                // Two overlapping Voronoi layers at different scales/speeds
                // produce the sharp bright-line network of real water caustics
                vec2 sunXZ = normalize(uSunDir.xz + vec2(0.001));
                // Drift comes in PRE-INTEGRATED (see uniform comment):
                // direction changes only steer future motion, they can
                // never spin the accumulated offset.
                vec2 uv1 = vPos.xz * 0.25 + uDrift1;
                vec2 uv2 = vPos.xz * 0.38 + uDrift2 + vec2(5.1, 2.7);

                vec2 v1 = voronoi(uv1);
                vec2 v2 = voronoi(uv2);

                // F2 - F1 gives the bright edges between cells \u2014 the caustic lines
                float edge1 = smoothstep(0.0, 0.18, v1.y - v1.x);
                float edge2 = smoothstep(0.0, 0.18, v2.y - v2.x);

                // Combine: where both layers have edges = bright focal line
                float caustic = edge1 * edge2;
                // Add individual contributions at lower intensity for fill
                caustic += (edge1 + edge2) * 0.15;
                caustic = pow(caustic, 0.7); // compress dynamic range slightly

                // Visible across the whole floor, slightly stronger at edges
                float radialFade = 0.5 + 0.5 * smoothstep(uRadius * 0.3, uRadius * 0.85, dist);

                // Sun-facing side stronger
                float sunFace = dot(normalize(vPos.xz + vec2(0.001)), sunXZ) * 0.35 + 0.65;

                // 0.15 (was 0.28): subtle shimmer, not a light show.
                float light = caustic * radialFade * sunFace * uDayBlend * 0.15;

                if (light < 0.003) discard;

                // Slightly blue-green tint \u2014 underwater light
                vec3 col = vec3(0.55, 0.72, 0.82) * light;
                gl_FragColor = vec4(col, light);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Bt,side:Mt}),o=new We(s,r);o.position.y=-1.88,o.renderOrder=3,o.visible=!1,i.add(o),window._caustics=r,window._causticsMesh=o;let a=Bn+.1,l=new ps(st-.2,st-.2,a,64,16,!0),c=new ze({uniforms:{uTime:{value:0},uSunDir:{value:n},uDayBlend:{value:.5},uRadius:{value:st},uBeamMul:{value:1.5}},vertexShader:`
            varying vec3 vPos;
            varying vec3 vWorld;
            varying vec3 vNormal;
            void main() {
                vPos = position;
                // World position for the day/night gate: the mesh is a child
                // of the rotating island group, so an object-space gate rode
                // the lit beams around to the night side. World space keeps
                // them pinned to the sun-facing half as the island turns.
                vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform vec3 uSunDir;
            uniform float uDayBlend;
            uniform float uRadius;
            uniform float uBeamMul;
            varying vec3 vPos;
            varying vec3 vWorld;
            varying vec3 vNormal;

            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p), f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
                           mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
            }

            void main() {
                float cylAngle = atan(vPos.z, vPos.x);
                float dist = length(vPos.xz);
                float normY = (vPos.y + ${(Bn+.1).toFixed(1)} * 0.5) / ${(Bn+.1).toFixed(1)};

                // Sun position drives everything
                vec2 sunXZ = normalize(uSunDir.xz + vec2(0.001));
                float sunAngle = atan(sunXZ.y, sunXZ.x);
                float sunElev = uSunDir.y; // raw, not clamped \u2014 negative = below horizon

                // Beam intensity scales smoothly with sun elevation
                float sunStrength = smoothstep(-0.3, 0.8, sunElev); // gradual 0->1
                float beamWidth = 0.3 + sunStrength * 0.5; // narrow at dusk, wide at noon

                // Tilt follows sun XZ angle directly
                float tilt = dot(normalize(vPos.xz), sunXZ) * (0.1 + sunStrength * 0.2) * (1.0 - normY);

                // Wobble \u2014 livelier, faster
                float wobble = noise(vec2(cylAngle * 6.0 + uTime * 0.25, normY * 3.0 + uTime * 0.1)) * 0.15;

                // Many fine beams \u2014 40+ shafts, very thin
                float b1 = sin(cylAngle * 40.0 + tilt + wobble + sunAngle);
                b1 = smoothstep(1.0 - beamWidth * 0.3, 1.0, b1);

                float b2 = sin(cylAngle * 65.0 + tilt * 1.2 + wobble * 2.0 + sunAngle * 0.7 + 2.1);
                b2 = smoothstep(1.0 - beamWidth * 0.2, 1.0, b2) * 0.5;

                float b3 = sin(cylAngle * 90.0 + tilt * 0.6 - uTime * 0.05 + sunAngle * 1.3);
                b3 = smoothstep(1.0 - beamWidth * 0.15, 1.0, b3) * 0.25;

                float beam = b1 + b2 + b3;

                // Lively flicker \u2014 faster, more variation
                float flicker = noise(vec2(cylAngle * 15.0 + uTime * 0.5, normY * 4.0 - uTime * 0.3));
                float flicker2 = noise(vec2(cylAngle * 25.0 - uTime * 0.3, normY * 2.0 + uTime * 0.2));
                beam *= 0.4 + flicker * 0.35 + flicker2 * 0.25;

                // Depth fade. pow base clamped: normY interpolates a
                // hair NEGATIVE at the bottom edge and pow(negative, x)
                // NaNs on ANGLE/D3D \u2014 the NaN quads rendered as the big
                // BLACK SQUARES when the beams were enabled (same bug
                // class as the historical bloom black-rectangle frames).
                float depthFade = pow(max(normY, 1e-4), 1.5);

                // Edge-focused
                float radialFade = smoothstep(uRadius * 0.65, uRadius, dist);

                // Sun-facing: DAY EDGES ONLY. The old window opened at
                // dot -0.2 (past the terminator) and a 0.03 uncondition-
                // al floor kept a ghost of the beams on the night glass.
                // Window now starts clearly inside the lit half and the
                // floor is gone \u2014 the cathedral light lives and dies
                // with the day side.
                // Gate in WORLD space so the lit beams never rotate onto the
                // night side with the island. Hard window on the lit half so
                // they die before the terminator.
                float sunFacing = dot(normalize(vWorld.xz), sunXZ);
                sunFacing = smoothstep(0.30, 0.74, sunFacing);

                float light = beam * depthFade * radialFade * sunFacing;

                // Scale with sun \u2014 smooth swell/shrink, NOT binary
                light *= sunStrength * 0.38;

                // Faint moonlight scatter, same day-side gate.
                float moonGlow = (1.0 - sunStrength) * 0.02 * beam * depthFade * radialFade * sunFacing;
                light += moonGlow;

                if (light < 0.003) discard;

                // Color shifts with sun position
                float warmth = sunElev * 0.5 + 0.5; // 0=cool, 1=warm
                vec3 col = mix(vec3(0.2, 0.35, 0.55), vec3(0.6, 0.5, 0.35), warmth) * light;

                gl_FragColor = vec4(col * uBeamMul, light * 0.35 * uBeamMul);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Bt,side:Mt}),u=new We(l,c);u.position.y=wn+a/2+.05,u.renderOrder=5,u.visible=!0,i.add(u),window._lightRays=c,window._lightRaysMesh=u;let h=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=h?70:140,f=11.5,g=Jn+2.2,v=Xe+.2,m=.2,p=.022,_=new Float32Array(d*3),w=new Float32Array(d),y=new Float32Array(d),I=48,S=new Float32Array(I*I);(function(){function W(re,q,Z){let ee=Math.sin(re*127.1+q*311.7+Z*74.7)*43758.5453;return ee-Math.floor(ee)}function te(re,q,Z){let ee=Math.floor(re),pe=Math.floor(q),Se=Math.floor(Z),Le=re-ee,qe=q-pe,F=Z-Se,ke=Le*Le*(3-2*Le),Ce=qe*qe*(3-2*qe),Ne=F*F*(3-2*F),ue=W(ee,pe,Se),Ue=W(ee+1,pe,Se),xe=W(ee,pe+1,Se),A=W(ee+1,pe+1,Se),b=W(ee,pe,Se+1),U=W(ee+1,pe,Se+1),X=W(ee,pe+1,Se+1),ne=W(ee+1,pe+1,Se+1);return(ue+(Ue-ue)*ke)*(1-Ce)*(1-Ne)+(xe+(A-xe)*ke)*Ce*(1-Ne)+(b+(U-b)*ke)*(1-Ce)*Ne+(X+(ne-X)*ke)*Ce*Ne}for(let re=0;re<I;re++)for(let q=0;q<I;q++){let Z=q/I,ee=re/I,pe=0,Se=1,Le=0,qe=3;for(let F=0;F<4;F++)pe+=Se*te(Z*qe,1.5,ee*qe),Le+=Se,Se*=.5,qe*=2;S[re*I+q]=pe/Le}})();for(let me=0;me<d;me++){let W=Math.random()*Math.PI*2,te=Math.sqrt(Math.random())*f;_[me*3]=Math.cos(W)*te,_[me*3+1]=v+Math.random()*(g-v),_[me*3+2]=Math.sin(W)*te,w[me]=.85+Math.random()*.4,y[me]=.82+Math.random()*.38}let E=new ln(p,m);E.translate(0,m*.5,0);let C=new ze({uniforms:{uIntensity:{value:.42},uColor:{value:new se(10467028)},uColumnR:{value:f}},vertexShader:`
            varying vec2 vUv;
            varying vec3 vInstancePos; // world XZ (y unused) of head
            void main() {
                vUv = uv;
                // Column center comes from the instance translation.
                // Extract xyz from instanceMatrix column 3.
                vInstancePos = vec3(instanceMatrix[3].x, instanceMatrix[3].y, instanceMatrix[3].z);
                vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mv;
            }
        `,fragmentShader:`
            precision highp float;
            varying vec2 vUv;
            varying vec3 vInstancePos;
            uniform float uIntensity;
            uniform vec3  uColor;
            uniform float uColumnR;

            // Uneven capsule SDF. r1=wide (head), r2=narrow (tail), h=height.
            // p is the local coord with origin at the head center.
            float sdUnevenCapsule(vec2 p, float r1, float r2, float h) {
                p.x = abs(p.x);
                float b = (r1 - r2) / h;
                float a = sqrt(1.0 - b * b);
                float k = dot(p, vec2(-b, a));
                if (k < 0.0) return length(p) - r1;
                if (k > a * h) return length(p - vec2(0.0, h)) - r2;
                return dot(p, vec2(a, b)) - r1;
            }

            void main() {
                // Remap uv \u2192 local capsule frame. Head is at uv.y=0 (pivot).
                // c.x centered [-1,1], c.y measured from head along tail
                // direction [0 at head, 2 at tail end].
                vec2 c = vec2((vUv.x - 0.5) * 2.0, vUv.y * 2.0);

                // Stacked blur: 5 capsule samples vertically offset so the
                // streak reads as motion-blurred rather than geometric.
                float acc = 0.0;
                for (int i = 0; i < 5; i++) {
                    vec2 pp = c - vec2(0.0, 0.2 * float(i));
                    float d = sdUnevenCapsule(pp, 0.05, 0.0, 2.0);
                    acc += 1.0 - smoothstep(0.0, 0.08, d);
                }
                acc /= 5.0;

                // Column edge fade \u2014 drops near the rim taper out so the
                // shower doesn't terminate on a hard disc boundary.
                float rad = length(vInstancePos.xz);
                float columnFade = 1.0 - smoothstep(uColumnR * 0.70, uColumnR, rad);

                // Head-bright tail-dim so the leading edge pops and the
                // tail feels like true motion decay. Head is at uv.y=0.
                float headLift = smoothstep(0.15, 0.0, vUv.y);
                float alpha = acc * (0.55 + 0.45 * headLift) * uIntensity * columnFade;

                if (alpha < 0.005) discard;
                gl_FragColor = vec4(uColor, alpha);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Un,side:Tt}),M=new ds(E,C,d);M.instanceMatrix.setUsage(_f),M.frustumCulled=!1,M.visible=!0,M.renderOrder=12,M.layers.set(2),i.add(M);let x=h?0:55,P=null,N=null;if(x>0){let me=new ln(.08,.08);me.rotateX(-Math.PI/2);let W=new ze({uniforms:{uIntensity:{value:.42},uColor:{value:new se(12899560)}},vertexShader:`
                attribute float aProgress;
                varying vec2 vUv;
                varying float vProgress;
                void main() {
                    vUv = uv;
                    vProgress = aProgress;
                    // Scale the plane as the ring expands so outer ripple
                    // gets room to travel. instanceMatrix provides position.
                    float s = 0.4 + aProgress * 1.4;
                    vec3 p = position * s;
                    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
                }
            `,fragmentShader:`
                precision highp float;
                varying vec2 vUv;
                varying float vProgress;
                uniform float uIntensity;
                uniform vec3  uColor;
                void main() {
                    if (vProgress <= 0.0 || vProgress >= 1.0) discard;
                    vec2 c = vUv - 0.5;
                    float r = length(c) * 2.0;
                    // Two rings \u2014 primary expanding crown + inner secondary.
                    float ringR1 = vProgress * 0.95;
                    float ringR2 = vProgress * 0.55;
                    float w = 0.05 + vProgress * 0.05;
                    float ring1 = smoothstep(w, 0.0, abs(r - ringR1));
                    float ring2 = smoothstep(w * 0.7, 0.0, abs(r - ringR2)) * 0.5;
                    float ring = ring1 + ring2;
                    // Fade ring with progress so impact flashes then dies.
                    float life = (1.0 - vProgress) * smoothstep(0.0, 0.08, vProgress);
                    float alpha = ring * life * uIntensity * 0.9;
                    if (alpha < 0.005) discard;
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Un,side:Tt});P=new ds(me,W,x),P.frustumCulled=!1;let te=new Float32Array(x),re=new Float32Array(x),q=new Float32Array(x),Z=new Float32Array(x*2);for(let ee=0;ee<x;ee++){let pe=Math.random()*Math.PI*2,Se=Math.sqrt(Math.random())*f;Z[ee*2]=Math.cos(pe)*Se,Z[ee*2+1]=Math.sin(pe)*Se,re[ee]=Math.random(),q[ee]=.6+Math.random()*.5,te[ee]=re[ee]}me.setAttribute("aProgress",new pi(te,1)),P.renderOrder=11,P.layers.set(2),i.add(P),N={mesh:P,mat:W,progress:re,life:q,pos:Z,aProgress:te,count:x}}window._rain={enabled:!0,mesh:M,mat:C,heads:_,velocities:w,scales:y,count:d,radius:f,top:g,bottom:v,speed:13,streak:m,width:p,intensity:.42,densGrid:S,densRes:I,driftX:.0085*14,driftZ:.0055*14,splash:N,reducedMotion:h};let O=3,H=8,z=O*H,B=new Float32Array(z*3),j=new Float32Array(z*3),k=new Float32Array(z),Y=[];for(let me=0;me<O;me++){let W=me/O*Math.PI*2+.5;Y.push(W);let te=Math.cos(W)*5.5,re=Math.sin(W)*5.5;for(let q=0;q<H;q++){let Z=me*H+q;B[Z*3]=te+(Math.random()-.5)*.3,B[Z*3+1]=Xe+.05,B[Z*3+2]=re+(Math.random()-.5)*.3,j[Z*3]=(Math.random()-.5)*.06,j[Z*3+1]=.12+Math.random()*.06,j[Z*3+2]=(Math.random()-.5)*.06,k[Z]=Math.random()*2}}let oe=new it;oe.setAttribute("position",new Qe(B,3));let he=new xn({color:16777215,size:.03,transparent:!0,opacity:.1,depthWrite:!1,sizeAttenuation:!0}),fe=new cn(oe,he);fe.visible=!1,i.add(fe),window._shoreVent={pos:B,vel:j,life:k,geo:oe,count:z,angles:Y,pp:H,mesh:fe};{let Z=function(A,b,U){let X=Math.sin(A*127.1+b*311.7+U*74.7)*43758.5453;return X-Math.floor(X)},ee=function(A,b,U){let X=Math.floor(A),ne=Math.floor(b),K=Math.floor(U),Me=A-X,de=b-ne,ge=U-K,Re=Me*Me*(3-2*Me),ie=de*de*(3-2*de),ve=ge*ge*(3-2*ge),Pe=Z(X,ne,K),De=Z(X+1,ne,K),be=Z(X,ne+1,K),Ge=Z(X+1,ne+1,K),Ie=Z(X,ne,K+1),ye=Z(X+1,ne,K+1),L=Z(X,ne+1,K+1),le=Z(X+1,ne+1,K+1),J=Pe+(De-Pe)*Re,ae=be+(Ge-be)*Re,Ee=Ie+(ye-Ie)*Re,Te=L+(le-L)*Re,Ye=J+(ae-J)*ie,ht=Ee+(Te-Ee)*ie;return Ye+(ht-Ye)*ve},pe=function(A,b,U,X,ne){let K=0,Me=1,de=0,ge=1;for(let Re=0;Re<X;Re++){let ie=ne*ge,ve=(A*ge%ie+ie)%ie,Pe=(b*ge%ie+ie)%ie,De=(U*ge%ie+ie)%ie;K+=Me*ee(ve,Pe,De),de+=Me,Me*=.5,ge*=2}return K/de},Se=function(A,b,U,X){let ne=Math.floor(A),K=Math.floor(b),Me=Math.floor(U),de=1e9;for(let ge=-1;ge<=1;ge++)for(let Re=-1;Re<=1;Re++)for(let ie=-1;ie<=1;ie++){let ve=ne+ie,Pe=K+Re,De=Me+ge,be=(ve%X+X)%X,Ge=(Pe%X+X)%X,Ie=(De%X+X)%X,ye=ve+Z(be,Ge,Ie),L=Pe+Z(be+57.3,Ge+21.7,Ie),le=De+Z(be,Ge+113.1,Ie+45.9),J=(ye-A)*(ye-A)+(L-b)*(L-b)+(le-U)*(le-U);J<de&&(de=J)}return Math.max(0,1-Math.sqrt(de))},Le=function(A,b,U,X){return Se(A,b,U,X)*.625+Se(A*2,b*2,U*2,X*2)*.25+Se(A*4,b*4,U*4,X*4)*.125},te=Jn+3.5,re=64,q=new Uint8Array(re*re*re*2),qe=0;for(let A=0;A<re;A++)for(let b=0;b<re;b++)for(let U=0;U<re;U++){let X=U/re,ne=b/re,K=A/re,Me=pe(X*3,ne*3,K*3,4,3),de=Le(X*3,ne*3,K*3,3),ge=de+Me*(1-de),Re=Le(X*8,ne*8,K*8,8);q[qe++]=Math.max(0,Math.min(255,ge*255)),q[qe++]=Math.max(0,Math.min(255,Re*255))}let F=new $r(q,re,re,re);F.format=Ha,F.type=on,F.minFilter=wt,F.magFilter=wt,F.wrapS=xt,F.wrapT=xt,F.wrapR=xt,F.unpackAlignment=1,F.needsUpdate=!0;let ke=new dr({glslVersion:ma,uniforms:{map:{value:F},cameraPos:{value:new R},sunDirLocal:{value:new R(-.93,0,-.37).normalize()},sunColor:{value:new se(.99,.95,.84)},skyColor:{value:new se(.3,.44,.66)},groundColor:{value:new se(.06,.1,.16)},coverage:{value:.72},densityScale:{value:3.2},absorption:{value:new R(.72,.78,1.05)},sunIntensity:{value:10.5},uStormDark:{value:0},anisoForward:{value:.82},anisoBack:{value:-.3},lobeMix:{value:.38},msAtten:{value:.4},msContrib:{value:.3},msPhase:{value:.7},frame:{value:0},uTime:{value:0},uDensityMul:{value:1},uWindMul:{value:1},uWindT:{value:0},uVolScale:{value:new R(28,5.4,28)}},vertexShader:`
                in vec3 position;
                uniform mat4 modelMatrix;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform vec3 cameraPos;
                out vec3 vOrigin;
                out vec3 vDirection;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.0)).xyz;
                    vDirection = position - vOrigin;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                precision highp float;
                precision highp sampler3D;
                in vec3 vOrigin;
                in vec3 vDirection;
                out vec4 color;

                uniform sampler3D map;
                uniform vec3  sunDirLocal;
                uniform vec3  sunColor;
                uniform vec3  skyColor;
                uniform vec3  groundColor;
                uniform vec3  absorption;
                uniform float coverage;
                uniform float densityScale;
                uniform float sunIntensity;
                uniform float uStormDark;
                uniform float anisoForward;
                uniform float anisoBack;
                uniform float lobeMix;
                uniform float msAtten;
                uniform float msContrib;
                uniform float msPhase;
                uniform float frame;
                uniform float uTime;
                uniform float uDensityMul;
                uniform float uWindMul;
                uniform float uWindT;
                uniform vec3  uVolScale;

                // Unit cube bound in object space (mesh is scaled to fill).
                vec2 hitBox(vec3 orig, vec3 dir) {
                    const vec3 box_min = vec3(-0.5);
                    const vec3 box_max = vec3(0.5);
                    vec3 inv_dir = 1.0 / dir;
                    vec3 t0s = (box_min - orig) * inv_dir;
                    vec3 t1s = (box_max - orig) * inv_dir;
                    vec3 tmin = min(t0s, t1s);
                    vec3 tmax = max(t0s, t1s);
                    return vec2(max(tmin.x, max(tmin.y, tmin.z)),
                                min(tmax.x, min(tmax.y, tmax.z)));
                }

                // Blue-noise-ish dither so the first march step jitters
                // per-pixel per-frame. Kills slab banding in thin bounds.
                float ign(vec2 p, float f) {
                    p += f * vec2(47.0, 113.0);
                    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
                }

                // Sample density at object-space p (range -0.5..0.5).
                // Tiled wrap + two drift velocities for the big base and
                // the fine detail, so the edges shimmer while the body
                // moves slower \u2014 reads as turbulent convection.
                float sampleDensity(vec3 p) {
                    // Drift: body moves slow, detail moves faster but
                    // scaled down so the small-scale shimmer doesn't
                    // outrun the macro motion. Divergent direction per
                    // octave to avoid a marching conveyor look.
                    // uWindT is an INTEGRATED wind phase (accumulated per
                    // frame in animate.js), not absolute time times a
                    // multiplier: with uTime * uWindMul, dragging the
                    // weather slider changed the multiplier and the whole
                    // deck TELEPORTED to a new phase \u2014 clouds raced,
                    // formed, and tore during the drag. Integrate, never
                    // multiply absolute time (the caustics lesson).
                    vec3 qBase = p + vec3(uWindT * 0.0085, 0.0, uWindT * 0.0055);
                    vec3 qDet  = p + vec3(uWindT * 0.022, uWindT * 0.006, uWindT * 0.018);
                    // Domain warp: bend the sample coordinates by a very
                    // low-frequency tap before the tiled lookups. From
                    // TOP-DOWN the raw tiling read as a square repeating
                    // grid \u2014 the warp shears every repeat differently so
                    // the pattern never lines up with itself.
                    vec3 warp = vec3(
                        texture(map, p * 0.31 + vec3(0.13, 0.71, 0.37)).r - 0.5,
                        0.0,
                        texture(map, p * 0.29 + vec3(0.83, 0.29, 0.61)).r - 0.5
                    ) * 0.55;
                    qBase += warp;
                    qDet += warp * 1.4;
                    float base = texture(map, qBase + 0.5).r;
                    float det  = texture(map, qDet  * 2.3 + 0.5).g;
                    // Second tap at a different phase breaks the uniform
                    // puck into distinct cumulus cells. Must vary FASTER
                    // than once per volume (the old 0.6x sampling gave a
                    // near-constant field across the disc, so the deck
                    // stayed one merged blob no matter the coverage) \u2014
                    // 2.2x gives roughly 4-6 lobes across the footprint.
                    float cell = texture(map, qBase * 2.2 + vec3(0.37, 0.19, 0.73)).r;

                    // Radial disc falloff \u2014 warped by noise so the cloud
                    // cluster's outline is organic, not a perfect circle.
                    // Noise pushes the effective radius \xB10.12 unit per
                    // cell so some edges bulge out, others cut in.
                    float outlineWarp = (cell - 0.5) * 0.24;
                    float r = length(p.xz) * 2.0;
                    // Cauliflower narrowing with height: the disc pulls
                    // inward as it climbs, so cumulus SIDE-ON reads as
                    // a rounded dome instead of a puck. Upper half of
                    // the volume loses up to 42% of its radius; the LCL
                    // stays wide so the flat base keeps its footprint.
                    float hyNorm = p.y + 0.5;
                    float vertNarrow = 1.0 - smoothstep(0.42, 0.95, hyNorm) * 0.42;
                    float outerR = 0.96 * vertNarrow + outlineWarp;
                    float innerR = 0.50 * vertNarrow + outlineWarp;
                    float discMask = smoothstep(outerR, innerR, r);

                    // Cumulus vertical profile: hard floor at the LCL
                    // (lifting condensation level) so the base reads
                    // FLAT rather than tapered \u2014 real cumulus looks
                    // like someone sliced the bottom off with a razor.
                    // Base height jitters per cell (0.02..0.10) so it's
                    // not a perfect plane, and the ramp over just 0.04
                    // produces a crisp dark underside. Top varies per
                    // cell (short puffs vs tall towers) with extra
                    // jitter so overhead view doesn't look like a ceiling.
                    float hy = p.y + 0.5;
                    float baseH = mix(0.02, 0.10, cell);
                    // Steepened cell response: the Perlin-Worley cell
                    // field clusters around 0.65, so a linear map put
                    // nearly every cell at the same cap height and the
                    // deck skyline read as a flat-topped puck edge-on.
                    // Squaring the spread gives mostly low puffs with a
                    // few genuine towers.
                    float tCell = smoothstep(0.42, 0.95, cell);
                    float topCap = mix(0.32, 1.05, tCell * tCell);
                    topCap += (base - 0.5) * 0.24;
                    // Virga: under the densest cells, leak a whisper of
                    // density below the LCL \u2014 reads as trailing rain-shaft
                    // wisps connecting cloud base to shower column. Only
                    // active where the cell is dense (cell > 0.55) and
                    // modulated by detail noise so it breaks into strands
                    // rather than a uniform drool.
                    float baseRamp = smoothstep(baseH, baseH + 0.04, hy);
                    float virgaMask = smoothstep(0.55, 0.85, cell) *
                                      smoothstep(0.0, baseH, hy) *
                                      (0.3 + 0.7 * det) * 0.18;
                    float vProf = max(baseRamp, virgaMask) *
                                  smoothstep(topCap, topCap - 0.55, hy);

                    // Multiply by cell mask so the coverage threshold
                    // varies spatially \u2014 some regions clear sky, some
                    // thick cumulus. The Perlin-Worley base sits higher
                    // than the old value-noise field, so the cell swing
                    // must be wide (0.30..1.15 through a steepened cell
                    // response) or the whole disc saturates into one
                    // merged cottonball with no gaps between cells.
                    float cellW = smoothstep(0.40, 0.92, cell);
                    float localCov = coverage * mix(0.30, 1.15, cellW);

                    float d = base;
                    d = smoothstep(1.0 - localCov, 1.0 - localCov + 0.30, d);
                    d *= discMask * vProf;
                    // Erode with the high-freq Worley detail so
                    // silhouettes break into billowed scallops rather than
                    // terminating on a smooth contour. Weight rises where
                    // density is thin, so interiors stay solid.
                    d = max(0.0, d - (1.0 - d) * det * 0.85);
                    return d * densityScale * uDensityMul;
                }

                // Dual-lobe Henyey-Greenstein. Strong forward lobe for
                // silver-lining + wide back lobe for side-lit softness.
                float hg(float cosT, float g) {
                    float g2 = g * g;
                    float denom = 1.0 + g2 - 2.0 * g * cosT;
                    return (1.0 - g2) / (12.566370614 * pow(max(denom, 1e-4), 1.5));
                }
                float phase(float cosT) {
                    return mix(hg(cosT, anisoForward), hg(cosT, anisoBack), lobeMix);
                }

                // Short cone-march toward the sun through the volume.
                // Returns optical depth (density*length sum) rather than
                // transmittance so we can evaluate Beer-Lambert with
                // per-channel absorption outside the loop.
                float sunMarch(vec3 p, vec3 sunCube) {
                    const int SUN_STEPS = 5;
                    // Geometric step schedule: short near-sample steps
                    // catch the hot occluder, long far steps catch bulk.
                    float stepLens[5] = float[5](0.03, 0.04, 0.06, 0.10, 0.18);
                    float tau = 0.0;
                    vec3 q = p;
                    float t = 0.0;
                    for (int i = 0; i < SUN_STEPS; i++) {
                        float s = stepLens[i];
                        t += s;
                        q = p + sunCube * t;
                        if (any(greaterThan(abs(q), vec3(0.5)))) break;
                        float d = sampleDensity(q);
                        tau += d * s;
                    }
                    return tau;
                }

                void main() {
                    vec3 rayDir = normalize(vDirection);
                    vec2 bounds = hitBox(vOrigin, rayDir);
                    if (bounds.x > bounds.y || bounds.y < 0.0) discard;
                    bounds.x = max(bounds.x, 0.0);

                    float marchLen = bounds.y - bounds.x;
                    // Adaptive step count: thin grazing paths get few
                    // steps, long vertical paths get more. Clamp 20..64.
                    int STEPS = int(clamp(marchLen * 40.0, 20.0, 64.0));
                    float stepSize = marchLen / float(STEPS);

                    // Dither start to break slab banding.
                    float j = ign(gl_FragCoord.xy, frame);
                    vec3 p = vOrigin + rayDir * (bounds.x + stepSize * j);

                    // The march happens in unit-cube space but the box is
                    // scaled (wide, shallow), so directions must be mapped
                    // between spaces. sunCube drives the shadow march
                    // (true top-down occlusion); the phase angle is taken
                    // between the REAL island-local directions or the
                    // silver-lining lobe lands on the wrong silhouette.
                    vec3 sunCube = normalize(sunDirLocal / uVolScale);
                    vec3 rayLocal = normalize(rayDir * uVolScale);
                    float cosT = dot(rayLocal, sunDirLocal);
                    float ph = phase(cosT);
                    // Wrenninge-style multiple scattering: sum N octaves
                    // of lower-attenuation, flatter-phase light so the
                    // inside of the cloud glows instead of going black.
                    float phMS = mix(ph, 0.25 / 12.566370614, msPhase);

                    vec3 scatter = vec3(0.0);
                    vec3 trans = vec3(1.0);

                    for (int i = 0; i < 64; i++) {
                        if (i >= STEPS) break;
                        // Early-out when nearly opaque.
                        if (max(trans.r, max(trans.g, trans.b)) < 0.01) break;

                        float d = sampleDensity(p);
                        if (d > 0.002) {
                            // Per-step extinction (Beer-Lambert).
                            vec3 sigmaE = absorption * d;
                            vec3 stepTrans = exp(-sigmaE * stepSize);

                            // Light at this sample: direct sun through
                            // cone-march depth, plus multi-scatter octaves
                            // with decaying attenuation & contribution.
                            float tauSun = sunMarch(p, sunCube);
                            vec3 sunAtt = exp(-absorption * tauSun);
                            vec3 sunAtt2 = exp(-absorption * tauSun * msAtten);
                            vec3 sunAtt3 = exp(-absorption * tauSun * msAtten * msAtten);

                            // Powder / dark-edge cue (Schneider): thin
                            // fringe density scatters little back toward
                            // the eye, so fresh billow edges read darker
                            // than the bright interior behind them. Only
                            // modulates the direct sun term.
                            float powder = 1.0 - exp(-d * 4.0);

                            vec3 lit = sunColor * sunIntensity * (
                                sunAtt * ph * mix(0.35, 1.0, powder) +
                                sunAtt2 * phMS * msContrib +
                                sunAtt3 * phMS * msContrib * msContrib
                            );

                            // Sky ambient from above, ground bounce from
                            // below. Tighter ramp (0.15..0.9) so the
                            // flat cumulus base stays dark & blue rather
                            // than glowing from the sky lift.
                            float hy = p.y + 0.5;
                            vec3 amb = mix(groundColor, skyColor, smoothstep(0.15, 0.9, hy));
                            lit += amb;
                            // Storm decks are optically thick: swallow
                            // scattered light as the weather rises so the
                            // deck goes properly DARK \u2014 and shift it cool,
                            // the bruised blue-gray of a real cell, not a
                            // sunlit cream puff.
                            lit *= mix(vec3(1.0), vec3(0.20, 0.23, 0.28), uStormDark);

                            // Integrate: scattered radiance over this
                            // interval (Sebastien Hillaire form).
                            vec3 integScatter = (lit - lit * stepTrans) / max(sigmaE, vec3(1e-4));
                            scatter += trans * integScatter;
                            trans *= stepTrans;
                        }
                        p += rayDir * stepSize;
                    }

                    float alpha = 1.0 - dot(trans, vec3(0.3333));
                    if (alpha < 0.005) discard;

                    // Mild tone curve so the sun-intensity pump doesn't
                    // clip when the bloom pass amps highlights.
                    vec3 rgb = scatter / (1.0 + scatter * 0.6);

                    // Aerial perspective \u2014 distant (near-horizon) rays
                    // travel through more atmosphere. Keep the fade
                    // modest or the sun-facing silver lining washes out
                    // into a bright smear. Softer ramp + lower mix keep
                    // the silhouette legible while still pulling
                    // distant puffs toward the sky palette.
                    float horiz = 1.0 - smoothstep(0.02, 0.55, abs(rayDir.y));
                    vec3 hazeCol = mix(skyColor, vec3(0.60, 0.66, 0.74), 0.30);
                    rgb = mix(rgb, hazeCol, horiz * 0.22);
                    alpha *= 1.0 - horiz * 0.12;

                    color = vec4(rgb, alpha);
                }
            `,side:Pt,transparent:!0,depthWrite:!1}),Ce=new us(1,1,1),Ne=new We(Ce,ke);Ne.scale.set(28,5.4,28),Ne.position.y=te,Ne.renderOrder=16,Ne.visible=!0,Ne.layers.set(2),i.add(Ne),window._cloud={mesh:Ne,mat:ke};let ue=new yn(28/2,96);ue.rotateX(-Math.PI/2);let Ue=new ze({uniforms:{map:{value:F},uTime:{value:0},uStrength:{value:.42},uRadius:{value:28/2},uDensityMul:{value:1},uWindMul:{value:1},uWindT:{value:0},uCoverage:{value:.72},uSunOffset:{value:new ce(0,0)}},vertexShader:`
                varying vec3 vLocal;
                void main() {
                    vLocal = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                precision highp float;
                precision highp sampler3D;
                varying vec3 vLocal;
                uniform sampler3D map;
                uniform float uTime;
                uniform float uStrength;
                uniform float uRadius;
                uniform float uDensityMul;
                uniform float uWindMul;
                    uniform float uWindT;
                uniform vec2  uSunOffset;
                uniform float uCoverage;
                void main() {
                    float r = length(vLocal.xz) / uRadius;
                    if (r > 0.99) discard;

                    // Sample the cloud 3D texture at the point up-sun of
                    // this ground point (shadows land down-sun of their
                    // caster). Same drift velocities as the cloud shader
                    // so shadows track their caster. Vertical coordinate
                    // is mid-volume so we read the densest band.
                    vec3 p;
                    p.x = (vLocal.x + uSunOffset.x) / uRadius * 0.5 + 0.5 + uWindT * 0.0085 / 2.0;
                    p.z = (vLocal.z + uSunOffset.y) / uRadius * 0.5 + 0.5 + uWindT * 0.0055 / 2.0;
                    p.y = 0.55;
                    float d = texture(map, p).r;
                    // Same coverage-modulated threshold as the volume
                    // shader (cell mask widening the local coverage), so
                    // the shadow pattern tracks the actual cloud amount:
                    // zero coverage = zero shadow, broken cumulus = spot
                    // shadows, overcast = broad shade.
                    vec3 pc = p * 2.2 + vec3(0.37, 0.19, 0.73);
                    float cell = texture(map, pc).r;
                    float cellW = smoothstep(0.40, 0.92, cell);
                    float localCov = uCoverage * mix(0.30, 1.15, cellW);
                    d = smoothstep(1.0 - localCov, 1.0 - localCov + 0.30, d) * uDensityMul;

                    // Soft radial falloff at the disc rim so shadow doesn't
                    // terminate in a hard line \u2014 clouds don't have edges.
                    float rim = smoothstep(0.98, 0.55, r);
                    float shadow = d * uStrength * rim;

                    // Output color for MultiplyBlending: white = no change,
                    // dark = shadow. Cool blue tint matches the cool ocean
                    // palette rather than the previous warm-grey cast.
                    vec3 col = mix(vec3(1.0), vec3(0.32, 0.38, 0.52), shadow);
                    gl_FragColor = vec4(col, 1.0);
                }
            `,blending:pa,transparent:!0,depthWrite:!1,depthTest:!0}),xe=new We(ue,Ue);xe.position.y=Xe+.18,xe.renderOrder=9,xe.layers.set(2),i.add(xe),window._cloudShadow={mesh:xe,mat:Ue}}}var np=new Ve,dh=new R,ip=new R,sp=new R,yr=new R,Zi=new R,_r=new R,wM=new R,rp=new Ve,op=new Yt;function lp(i,e){let t=window._rain;if(!t||!t.enabled){t&&(t.mesh.visible=!1);return}t.mesh.visible=!0,t.mat.uniforms.uIntensity.value=t.intensity;let n=t.stormT!=null?t.stormT:0,s=1+n*.35,r=1+n*.3,o=1+n*.45,a=1+n*3,c=-.35*a,u=t.heads,h=t.top-t.bottom,d=(e||0)*t.driftX*a,f=(e||0)*t.driftZ*a,g=t.densRes,v=t.densGrid,m=t.radius,p=D.camera;D.islandGroup.worldToLocal(sp.copy(p.position));for(let _=0;_<t.count;_++){let w=t.speed*t.velocities[_]*o,y=c*t.driftX,I=c*t.driftZ;if(u[_*3]+=y*i,u[_*3+1]-=w*i,u[_*3+2]+=I*i,u[_*3+1]<t.bottom){let O=0,H=0,z=!1;for(let B=0;B<6;B++){let j=Math.random()*Math.PI*2,k=Math.sqrt(Math.random())*m,Y=Math.cos(j)*k,oe=Math.sin(j)*k,he=(Y-d)/(m*2)+.5,fe=(oe-f)/(m*2)+.5;he=(he%1+1)%1,fe=(fe%1+1)%1;let me=Math.min(g-1,Math.max(0,Math.floor(he*g))),W=Math.min(g-1,Math.max(0,Math.floor(fe*g))),te=v[W*g+me];if(Math.random()<te*te*2.2){O=Y,H=oe,z=!0;break}}if(!z){let B=Math.random()*Math.PI*2,j=Math.sqrt(Math.random())*m*.6;O=Math.cos(B)*j,H=Math.sin(B)*j}u[_*3]=O,u[_*3+1]=t.top-Math.random()*h*.25,u[_*3+2]=H}let S=u[_*3],E=u[_*3+1],C=u[_*3+2];dh.set(S,E,C),ip.set(y,-w,I).normalize(),yr.copy(ip).multiplyScalar(-1),_r.copy(sp).sub(dh).normalize(),Zi.crossVectors(yr,_r);let M=Zi.length();M<1e-4?Zi.set(1,0,0):Zi.multiplyScalar(1/M),_r.crossVectors(Zi,yr).normalize();let x=t.scales[_],P=x*s,N=x*r;np.set(Zi.x*P,yr.x*N,_r.x*x,S,Zi.y*P,yr.y*N,_r.y*x,E,Zi.z*P,yr.z*N,_r.z*x,C,0,0,0,1),t.mesh.setMatrixAt(_,np)}if(t.mesh.instanceMatrix.needsUpdate=!0,t.splash&&!t.reducedMotion){let _=t.splash;_.mat.uniforms.uIntensity.value=t.intensity;for(let y=0;y<_.count;y++){if(_.progress[y]+=i/_.life[y],_.progress[y]>=1){let I=0,S=0,E=!1;for(let C=0;C<4;C++){let M=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*m,P=Math.cos(M)*x,N=Math.sin(M)*x,O=(P-d)/(m*2)+.5,H=(N-f)/(m*2)+.5;O=(O%1+1)%1,H=(H%1+1)%1;let z=Math.min(g-1,Math.max(0,Math.floor(O*g))),B=Math.min(g-1,Math.max(0,Math.floor(H*g))),j=v[B*g+z];if(Math.random()<j*j*2.2){I=P,S=N,E=!0;break}}if(!E){let C=Math.random()*Math.PI*2,M=Math.sqrt(Math.random())*m*.6;I=Math.cos(C)*M,S=Math.sin(C)*M}_.pos[y*2]=I,_.pos[y*2+1]=S,_.progress[y]=0,_.life[y]=.55+Math.random()*.55}_.aProgress[y]=_.progress[y],op.identity(),rp.compose(dh.set(_.pos[y*2],Xe+.07,_.pos[y*2+1]),op,wM.set(1,1,1)),_.mesh.setMatrixAt(y,rp)}_.mesh.instanceMatrix.needsUpdate=!0;let w=_.mesh.geometry.getAttribute("aProgress");w&&(w.needsUpdate=!0)}}function cp(i){let e=window._shoreVent;if(e&&e.mesh&&e.mesh.visible){for(let t=0;t<e.count;t++){if(e.life[t]+=i,e.life[t]>2){let n=Math.floor(t/e.pp),s=e.angles[n];e.pos[t*3]=Math.cos(s)*5.5+(Math.random()-.5)*.3,e.pos[t*3+1]=Xe+.05,e.pos[t*3+2]=Math.sin(s)*5.5+(Math.random()-.5)*.3,e.vel[t*3]=(Math.random()-.5)*.06,e.vel[t*3+1]=.12+Math.random()*.06,e.vel[t*3+2]=(Math.random()-.5)*.06,e.life[t]=0}e.pos[t*3]+=e.vel[t*3]*i,e.pos[t*3+1]+=e.vel[t*3+1]*i,e.pos[t*3+2]+=e.vel[t*3+2]*i}e.geo.attributes.position.needsUpdate=!0}}var vs="orbit";function hp(){let{camera:i,renderer:e,euler:t,keys:n}=D;document.addEventListener("keydown",u=>n[u.code]=!0),document.addEventListener("keyup",u=>n[u.code]=!1),e.domElement.addEventListener("mousedown",()=>{D.isPointerLocked||vs==="fly"&&e.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{D.isPointerLocked=document.pointerLockElement===e.domElement}),document.addEventListener("mousemove",u=>{vs!=="fly"||!D.isPointerLocked||(t.setFromQuaternion(i.quaternion),t.y-=u.movementX*Pu,t.x-=u.movementY*Pu,t.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,t.x)),i.quaternion.setFromEuler(t))});let s=document.getElementById("coords"),r=document.getElementById("copyBtn"),o=document.getElementById("viewBtn"),a=document.getElementById("edgeBtn");r&&r.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new R;i.getWorldDirection(d);let f=`pos: ${h.x.toFixed(2)}, ${h.y.toFixed(2)}, ${h.z.toFixed(2)}
dir: ${d.x.toFixed(3)}, ${d.y.toFixed(3)}, ${d.z.toFixed(3)}
rot: ${yi.radToDeg(t.x).toFixed(1)}, ${yi.radToDeg(t.y).toFixed(1)}, 0.0`;navigator.clipboard.writeText(f),r.textContent="copied",r.classList.add("copied"),setTimeout(()=>{r.textContent="copy",r.classList.remove("copied")},1200)});let l=document.getElementById("zoneBtn");l&&l.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new R;i.getWorldDirection(d);let f=h.clone().addScaledVector(d,50),g=`camera: { x: ${h.x.toFixed(0)}, y: ${h.y.toFixed(0)}, z: ${h.z.toFixed(0)} },
lookAt: { x: ${f.x.toFixed(0)}, y: ${f.y.toFixed(0)}, z: ${f.z.toFixed(0)} },`;navigator.clipboard.writeText(g),l.textContent="copied!",setTimeout(()=>{l.textContent="copy zone"},1200)}),a&&a.addEventListener("click",u=>{u.stopPropagation(),vs==="fly"?(i.position.set(50,3,35),t.set(yi.degToRad(-3),yi.degToRad(55),0),i.quaternion.setFromEuler(t)):dp(new R(50,3,35))});let c=document.getElementById("noonBtn");c&&(c.style.display="none"),o&&o.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new R;i.getWorldDirection(d);let f=`Camera view:
pos: (${h.x.toFixed(1)}, ${h.y.toFixed(1)}, ${h.z.toFixed(1)})
dir: (${d.x.toFixed(2)}, ${d.y.toFixed(2)}, ${d.z.toFixed(2)})
rot: (${yi.radToDeg(t.x).toFixed(1)}\xB0, ${yi.radToDeg(t.y).toFixed(1)}\xB0)
Paste this into the chat so I can see your exact view.`;navigator.clipboard.writeText(f),o.textContent="copied!",setTimeout(()=>{o.textContent="send view"},1200)}),D._coordsEl=s,document.addEventListener("keydown",u=>{!u.ctrlKey||!u.shiftKey||u.code!=="KeyF"||u.target instanceof Element&&u.target.matches("input, textarea, [contenteditable]")||(u.preventDefault(),EM())}),SM()}var up={default:new R(40,25,50),research:new R(5,70,5),publications:new R(45,3,25),about:new R(8,5,10),skills:new R(10,-15,10),connect:new R(60,30,70)};function SM(){let i=document.getElementById("preset-nav");i&&i.addEventListener("click",e=>{let t=e.target.closest(".preset-dot");if(!t)return;let n=t.dataset.zone;n&&up[n]&&(dp(up[n]),i.querySelectorAll(".preset-dot").forEach(s=>s.classList.remove("preset-dot--active")),t.classList.add("preset-dot--active"))})}function dp(i,e=800){let t=D.camera.position.clone(),n=performance.now();function s(r){let o=Math.min(1,(r-n)/e),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;D.camera.position.lerpVectors(t,i,a),o<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function EM(){let i=document.getElementById("hud");if(!i)return;i.style.display==="none"?(i.style.display="flex",vs="fly",D.euler.setFromQuaternion(D.camera.quaternion)):(i.style.display="none",vs="orbit",document.pointerLockElement&&document.exitPointerLock())}function fp(i){let{camera:e,euler:t,keys:n,_coordsEl:s}=D;if(vs==="fly"){let r=new R;n.KeyW&&(r.z-=1),n.KeyS&&(r.z+=1),n.KeyA&&(r.x-=1),n.KeyD&&(r.x+=1),n.Space&&(r.y+=1),(n.ShiftLeft||n.ShiftRight)&&(r.y-=1),r.lengthSq()>0&&(r.normalize().multiplyScalar(Lf*i),r.applyQuaternion(e.quaternion),e.position.add(r))}if(s&&vs==="fly"){let r=e.position,o=new R;e.getWorldDirection(o),s.textContent=`pos  ${r.x.toFixed(1)}  ${r.y.toFixed(1)}  ${r.z.toFixed(1)}
dir  ${o.x.toFixed(2)} ${o.y.toFixed(2)} ${o.z.toFixed(2)}`}}var un=[{name:"default",camera:{x:84,y:33,z:78},lookAt:{x:2,y:5,z:-4},orbit:{minDist:40,maxDist:320,minPolar:.3,maxPolar:1.6}},{name:"about",camera:{x:19,y:159,z:-22},lookAt:{x:10,y:0,z:-25},orbit:{minDist:40,maxDist:200,minPolar:.05,maxPolar:.6}},{name:"research",camera:{x:17,y:6,z:15},lookAt:{x:-18,y:3,z:-20},orbit:{minDist:10,maxDist:120,minPolar:.3,maxPolar:1.6}},{name:"publications",camera:{x:64,y:6,z:-9},lookAt:{x:-35,y:0,z:-18},orbit:{minDist:20,maxDist:130,minPolar:.5,maxPolar:2}},{name:"connect",camera:{x:81,y:-28,z:-40},lookAt:{x:-11,y:6,z:-20},orbit:{minDist:30,maxDist:130,minPolar:.5,maxPolar:2.2}}],An=0,zn=null,$n={},So=!1;var gp=!1;function mh(i){gp=i}var ji=!1,vp=0,xp=900,TM=700,AM=2200,RM=5.5,wo=new R,Mr=new R,yp=new R,fh=new R,bi=new R(2,5,-4);function CM(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function ph(i){if(zn===i)return;zn&&$n[zn]&&($n[zn].classList.remove("zone--active"),$n[zn].style.removeProperty("--scroll-y")),zn=i;let e=document.getElementById("home-typed-msg");e&&(e.style.opacity=i==="default"?"":"0"),i&&$n[i]?setTimeout(()=>{if(zn===i&&$n[i]){$n[i].classList.add("zone--active");let t=$n[i].querySelector(".zone__body");t&&Array.from(t.children).forEach((n,s)=>{n.style.setProperty("--stagger-index",s)})}So=!1},80):So=!1}function xs(i){if(gp||i<0||i>=un.length||So||ji)return;So=!0,An=i;let e=un[i];wo.copy(D.camera.position),Mr.set(e.camera.x,e.camera.y,e.camera.z),yp.copy(bi),fh.set(e.lookAt.x,e.lookAt.y,e.lookAt.z);let t=wo.distanceTo(Mr);xp=Math.round(Math.max(TM,Math.min(AM,t*RM))),vp=performance.now(),ji=!0,zn&&$n[zn]&&$n[zn].classList.remove("zone--active")}function PM(){if(D.SUN_DIR){let i=D.SUN_DIR.y;if(i<-.3)return 1;if(i<-.05)return(-.05-i)/.25}return 0}function _p(){let i=document.getElementById("zone-progress-fill"),e=document.getElementById("zone-progress-label");if(i&&e){let t=(An+1)/un.length*100;i.style.height=t+"%",e.textContent=An+1+"/"+un.length}}function Mp(){let i=["default","research","publications","about","connect","night"];for(let c of i)$n[c]=document.getElementById(`zone-${c}`);let e=document.querySelectorAll(".cv-tab");e.forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();let h=c.dataset.tab;e.forEach(f=>{f.classList.remove("active"),f.setAttribute("aria-selected","false")}),c.classList.add("active"),c.setAttribute("aria-selected","true"),document.querySelectorAll(".cv-content").forEach(f=>f.classList.remove("cv-content--active"));let d=document.getElementById("tab-"+h);d&&d.classList.add("cv-content--active")})});let t=0,n=80;window.addEventListener("wheel",c=>{if(ji||So){t=0;return}if(c.target instanceof Element&&c.target.closest(".zone, .home-terminal, .audio-viz, .cv-viewer, .reviewer-footer, .reviewer-hero, .editor-panel, .cv-details, #site-header, #reviewer-toggle, .audio-toggle, #cv-btn-fixed, #audio-viz")){t=0;return}if(t+=c.deltaY,Math.abs(t)<n)return;let u=t>0?1:-1;t=0,u>0?xs((An+1)%un.length):xs((An-1+un.length)%un.length)},{passive:!0});let s=0,r=0,o=50,a=400;window.addEventListener("touchstart",c=>{s=c.touches[0].clientY,r=performance.now()},{passive:!0}),window.addEventListener("touchend",c=>{if(ji)return;let u=s-c.changedTouches[0].clientY;performance.now()-r>a||Math.abs(u)<o||(u>0?xs((An+1)%un.length):xs((An-1+un.length)%un.length))},{passive:!0}),document.querySelectorAll(".section-nav__item").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation(),u.preventDefault();let h=parseInt(c.dataset.zone,10);!isNaN(h)&&h<un.length&&xs(h)})}),window.addEventListener("keydown",c=>{c.target instanceof Element&&c.target.matches("input, textarea, [contenteditable]")||(c.key==="ArrowDown"||c.key==="PageDown"?(c.preventDefault(),ji||xs(Math.min(An+1,un.length-1))):(c.key==="ArrowUp"||c.key==="PageUp")&&(c.preventDefault(),ji||xs(Math.max(An-1,0))))}),An=0,setTimeout(()=>{ph("default"),_p()},600)}var pp=330,IM=110,DM=.85,bo=new R(0,8,0),Tn=0,ys=new R,_s=new R,mp=0,LM=1.6;function bp(i){if(ji){let e=performance.now()-vp,t=Math.min(1,e/xp),n=CM(t);i.position.lerpVectors(wo,Mr,n);let s=Math.sqrt(Math.pow(Mr.x-wo.x,2)+Math.pow(Mr.z-wo.z,2)),o=Math.min(s*.08,10)*4*n*(1-n);if(i.position.y+=o,bi.lerpVectors(yp,fh,n),i.lookAt(bi),t>=1){ji=!1,i.position.copy(Mr),bi.copy(fh),i.lookAt(bi);let a=un[An];PM()>.7&&a.name!=="default"?ph("night"):ph(a.name),document.querySelectorAll(".section-nav__item").forEach(c=>{parseInt(c.dataset.zone,10)===An?(c.classList.remove("leaving"),c.classList.add("active"),c.setAttribute("aria-current","true")):c.classList.contains("active")?(c.classList.add("leaving"),c.classList.remove("active"),c.removeAttribute("aria-current"),setTimeout(()=>c.classList.remove("leaving"),300)):c.removeAttribute("aria-current")}),_p()}return}if(zn==="connect"&&D.moonOrb){let e=typeof window<"u"&&window._elapsed||0,t=D.moonOrb.position,s=Math.atan2(t.z,t.x)-DM,r=pp*Math.cos(s),o=pp*Math.sin(s),a=IM+Math.sin(e*.2)*4;if(Tn<1){Tn===0&&(ys.copy(i.position),_s.copy(bi),mp=e);let l=Math.min(1,(e-mp)/LM);Tn=l*l*(3-2*l),i.position.x=ys.x+(r-ys.x)*Tn,i.position.y=ys.y+(a-ys.y)*Tn,i.position.z=ys.z+(o-ys.z)*Tn;let c=_s.x+(bo.x-_s.x)*Tn,u=_s.y+(bo.y-_s.y)*Tn,h=_s.z+(bo.z-_s.z)*Tn;bi.set(c,u,h),i.lookAt(bi),l>=1&&(Tn=1)}else i.position.set(r,a,o),i.lookAt(bo),bi.copy(bo)}else Tn!==0&&(Tn=0)}var NM=220,UM=90,wp=3.5,Sp=6.5,Ep=7,br=0,Ip=1,Tp=2,Ap=3,OM=new se(1,.86,.55),Rp=new se(1,.32,.1),FM=new se(.24,.04,.01),BM=new se(.16,.11,.09),zM=new se(.05,.035,.03),wr=null,Eo=null,Ki=null,kn=br,hn=0,gh=200+Math.random()*200,rl=!1,To=4.8,vh=0,xh=0,wi=new se,kM=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Cp(i){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(i,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);let r=new Fn(t);return r.colorSpace=vt,r}function Pp(i,e,t){let n=new it,s=new Float32Array(i*3),r=new Float32Array(i*3),o=new Float32Array(i),a=new Float32Array(i);n.setAttribute("position",new Qe(s,3)),n.setAttribute("aColor",new Qe(r,3)),n.setAttribute("aSize",new Qe(o,1)),n.setAttribute("aAlpha",new Qe(a,1));let l=new ze({uniforms:{map:{value:e}},vertexShader:`
            attribute vec3 aColor;
            attribute float aSize;
            attribute float aAlpha;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vAlpha = aAlpha;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = aSize * (1300.0 / max(1.0, -mv.z));
                gl_Position = projectionMatrix * mv;
            }`,fragmentShader:`
            uniform sampler2D map;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                float a = texture2D(map, gl_PointCoord).a * vAlpha;
                if (a < 0.004) discard;
                gl_FragColor = vec4(vColor, a);
            }`,blending:t,transparent:!0,depthWrite:!1}),c=new cn(n,l);return c.frustumCulled=!1,c.renderOrder=8,{mesh:c,geo:n,pos:s,col:r,size:o,alpha:a,vel:new Float32Array(i*3),life:new Float32Array(i),maxLife:new Float32Array(i),count:i}}function Dp(){let{islandGroup:i}=D;i&&(wr=Pp(NM,Cp(.25),Bt),Eo=Pp(UM,Cp(.55),Un),wr.geo.getAttribute("aAlpha").array.fill(0),Eo.geo.getAttribute("aAlpha").array.fill(0),i.add(wr.mesh),i.add(Eo.mesh),Ki=new jn(16737320,0,26,2),Ki.position.set(0,To+.6,0),Ki.visible=!1,i.add(Ki),window._volcanoGlow=1,window.eruptVolcano=Lp)}function Lp(){return kn!==br?!1:(D.lavaPool&&D.lavaPool.mesh&&(To=D.lavaPool.mesh.position.y),Ki.position.y=To+.6,kn=Ip,hn=0,!0)}function HM(i){let e=Np(i);if(e<0)return;let t=Math.random()*Math.PI*2,n=Math.random()*.22;i.pos[e*3]=Math.cos(t)*n,i.pos[e*3+1]=To+.15,i.pos[e*3+2]=Math.sin(t)*n;let s=Math.random()*Math.PI*2,r=.35+Math.random()*1.15;i.vel[e*3]=Math.cos(s)*r,i.vel[e*3+1]=2.2+Math.random()*2.2,i.vel[e*3+2]=Math.sin(s)*r,i.maxLife[e]=1.8+Math.random()*1.7,i.life[e]=i.maxLife[e],i.size[e]=2.2+Math.random()*2.4}function VM(i){let e=Np(i);if(e<0)return;let t=Math.random()*Math.PI*2,n=Math.random()*.3;i.pos[e*3]=Math.cos(t)*n,i.pos[e*3+1]=To+.3,i.pos[e*3+2]=Math.sin(t)*n,i.vel[e*3]=(Math.random()-.5)*.35,i.vel[e*3+1]=.85+Math.random()*.6,i.vel[e*3+2]=(Math.random()-.5)*.35,i.maxLife[e]=5.5+Math.random()*3,i.life[e]=i.maxLife[e],i.size[e]=4.5+Math.random()*3.5}function Np(i){for(let e=0;e<i.count;e++)if(i.life[e]<=0)return e;return-1}function Up(i){if(!wr)return;i=Math.min(i,.05),kn===br&&!kM&&window._volcanoAuto&&(gh-=i,gh<=0&&(gh=240+Math.random()*240,Lp()));let e=1,t=0,n=0,s=0;if(kn!==br&&(hn+=i),kn===Ip){let l=Math.min(1,hn/wp);e=1+l*l*1.6,t=l*l*1.2,n=l*6,hn>=wp&&(kn=Tp,hn=0)}else if(kn===Tp){let c=1-Math.min(1,hn/Sp)*.45;e=2.6*c+.4,t=(7+Math.sin(hn*23)*1.3+Math.sin(hn*7.3)*.9)*c,n=52*c,s=11*c,hn>=Sp&&(kn=Ap,hn=0)}else if(kn===Ap){let l=Math.min(1,hn/Ep),c=(1-l)*(1-l);e=1+c*1.4,t=c*1.6,n=c*4,hn>=Ep&&(kn=br,hn=0)}for(window._volcanoGlow=e,Ki&&(Ki.intensity=t,Ki.visible=t>.01),D.lavaPool&&D.lavaPool.light&&(D.lavaPool.light.intensity=.5*e),vh+=n*i;vh>=1;)HM(wr),vh-=1,rl=!0;for(xh+=s*i;xh>=1;)VM(Eo),xh-=1,rl=!0;if(kn===br&&!rl)return;let r=!1,o=wr;for(let l=0;l<o.count;l++){if(o.life[l]<=0){o.alpha[l]=0;continue}r=!0,o.life[l]-=i,o.vel[l*3+1]-=2.6*i,o.pos[l*3]+=o.vel[l*3]*i,o.pos[l*3+1]+=o.vel[l*3+1]*i,o.pos[l*3+2]+=o.vel[l*3+2]*i,o.pos[l*3+1]<.7&&(o.life[l]=0);let c=Math.max(0,o.life[l]/o.maxLife[l]);c>.6?wi.lerpColors(Rp,OM,(c-.6)/.4):wi.lerpColors(FM,Rp,c/.6),o.col[l*3]=wi.r,o.col[l*3+1]=wi.g,o.col[l*3+2]=wi.b,o.alpha[l]=Math.min(1,c*2.5)}let a=Eo;for(let l=0;l<a.count;l++){if(a.life[l]<=0){a.alpha[l]=0;continue}r=!0,a.life[l]-=i,a.vel[l*3+1]=Math.max(.25,a.vel[l*3+1]-.06*i),a.pos[l*3]+=a.vel[l*3]*i,a.pos[l*3+1]+=a.vel[l*3+1]*i,a.pos[l*3+2]+=a.vel[l*3+2]*i;let c=1-a.life[l]/a.maxLife[l];a.size[l]+=i*1.5;let u=Math.min(c/.18,1)*(1-Math.pow(c,2.2));a.alpha[l]=u*.34,wi.lerpColors(BM,zM,c),a.col[l*3]=wi.r,a.col[l*3+1]=wi.g,a.col[l*3+2]=wi.b}rl=r;for(let l of[o,a])l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.aColor.needsUpdate=!0,l.geo.attributes.aSize.needsUpdate=!0,l.geo.attributes.aAlpha.needsUpdate=!0}var GM=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;window._weather={t:0,smoothed:0,suppressLightning:!!GM};var Bp="weather:v1";function Op(i,e={}){let t=Math.max(0,Math.min(1,+i||0));if(window._weather.t=t,e.persist!==!1)try{localStorage.setItem(Bp,String(t))}catch{}window.dispatchEvent(new CustomEvent("weather:change",{detail:{t}}))}function zp(i){let e=window._weather,t=e.t,n=1-Math.exp(-i*1.25);e.smoothed+=(t-e.smoothed)*n}function kp(){let i=document.getElementById("weather-slider"),e=document.getElementById("weather-label");if(!i){let n=WM();if(!n)return;i=n.slider,e=n.label}let t=0;try{localStorage.removeItem(Bp)}catch{}i.value=String(t),Op(t,{persist:!1}),Fp(e,t),i.addEventListener("input",()=>{let n=parseFloat(i.value);Op(n),Fp(e,n)})}function WM(){let i=document.querySelector(".chrome-tile");if(!i||!i.parentElement)return null;let e=i.parentElement,t=document.createElement("div");t.className="chrome-tile",t.style.position="relative";let n=document.createElement("button");n.className="chrome-tile__btn",n.setAttribute("aria-label","Weather control"),n.setAttribute("aria-expanded","false"),n.innerHTML='<svg aria-hidden="true" class="chrome-tile__icon" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',t.appendChild(n);let s=document.createElement("div");s.id="weather-pop",s.style.cssText=["position:absolute","bottom:calc(100% + 12px)","left:0","display:none","align-items:center","gap:10px","padding:10px 14px","width:200px","box-sizing:border-box","background:rgba(7,9,14,0.94)","border:1px solid rgba(236,231,219,0.26)","border-radius:0","z-index:30"].join(";");let r=document.createElement("input");r.id="weather-slider",r.type="range",r.min="0",r.max="1",r.step="0.01",r.setAttribute("aria-label","Weather intensity"),r.style.cssText="flex:1;accent-color:#d9a441;cursor:pointer;min-width:0",s.appendChild(r);let o=document.createElement("span");return o.id="weather-label",o.style.cssText=["font-family:Inter,system-ui,sans-serif","font-weight:500","font-size:10px","letter-spacing:0.18em","text-transform:uppercase","color:#c9c3b4","min-width:62px","text-align:right","white-space:nowrap"].join(";"),s.appendChild(o),t.appendChild(s),e.appendChild(t),n.addEventListener("click",()=>{let a=s.style.display!=="none"&&s.style.display!=="";s.style.display=a?"none":"flex",n.setAttribute("aria-expanded",String(!a))}),{slider:r,label:o}}function Fp(i,e){if(!i)return;let t;e<.08?t="clear":e<.3?t="hazy":e<.55?t="overcast":e<.8?t="raining":t="storm",i.textContent=t}var XM=new se(.58,.62,.72),qM=new se(.18,.21,.27),YM=new se(.008,.012,.02),ZM=new se(.1,.13,.2),jM=new se(.28,.34,.44),KM=.8,JM=.82,QM=.82,$M=.72,Yp=Jn+3.5,eb=5.4;var tb=new se(.75,.85,1),Hp=new se(.95,.96,1),nb=new se(1,.9,.72),Vp=new se(.8,.9,1.05),ib=1200,sb=150,rb=1.5,Ao=null,Zp=!1,Hn=null,jp=220,Vn=null,wh=null,ol=null,Ji=null,Ms=null,yh=new R,Gp=new R,_t={nextStrikeIn:3+Math.random()*5,flashQueue:[],decayUntil:0,peak:0,elapsed:0,strikeColor:new se(.8,.9,1),plasmaOnPeak:!1},Wp=new se,_h=new se,Xp=new se,Mh=new se,qp=new se,bh=new se;function Sh(){if(Ao)return;let{sunLight:i,hemiLight:e,ambLight:t,rimLight:n,scene:s}=D;if(!(!i||!e||!t)){if(Ao={sun:{color:i.color.clone(),intensity:i.intensity},hemiS:e.color.clone(),hemiG:e.groundColor.clone(),hemiI:e.intensity,amb:{color:t.color.clone(),intensity:t.intensity},rim:n?{color:n.color.clone(),intensity:n.intensity}:null},s&&!Hn&&(Hn=new jn(12638463,0,sb,rb),Hn.position.set(0,Yp,0),Hn.castShadow=!1,s.add(Hn)),s&&!Ji){let r=new Float32Array(jp*3);Vn=new it,Vn.setAttribute("position",new Qe(r,3)),Vn.setDrawRange(0,0),ol=new Yn({color:7254271,transparent:!0,opacity:0,blending:Bt,depthWrite:!1}),Ms=new fs(Vn,ol),Ms.renderOrder=14,Ms.frustumCulled=!1,wh=new Yn({color:16054527,transparent:!0,opacity:0,blending:Bt,depthWrite:!1}),Ji=new fs(Vn,wh),Ji.renderOrder=15,Ji.frustumCulled=!1,s.add(Ms),s.add(Ji)}window.matchMedia&&(Zp=window.matchMedia("(prefers-reduced-motion: reduce)").matches)}}function ob(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}function ab(i,e){if(!Vn)return;let t=Vn.attributes.position.array,n=new R().subVectors(e,i),s=n.length();n.divideScalar(s||1);let r=new R(1,0,0);r.addScaledVector(n,-n.dot(r)),r.lengthSq()<1e-4&&r.set(0,1,0),r.normalize();let o=new R().crossVectors(n,r).normalize(),a=[i.clone()];(function d(f,g,v,m){if(v===0){a.push(g.clone());return}let p=f.clone().add(g).multiplyScalar(.5);p.addScaledVector(r,(Math.random()*2-1)*m),p.addScaledVector(o,(Math.random()*2-1)*m*.6),d(f,p,v-1,m*.52),d(p,g,v-1,m*.52)})(i,e,5,s*.11);let l=[],c=2+(Math.random()*2|0);for(let d=0;d<c;d++){let f=6+(Math.random()*(a.length*.45)|0),g=a[Math.min(f,a.length-2)],v=s*(.14+Math.random()*.16),m=Math.random()<.5?-1:1,p=g.clone().addScaledVector(n,v*.6).addScaledVector(r,m*v*(.5+Math.random()*.5)).addScaledVector(o,(Math.random()*2-1)*v*.3),_=[g.clone()];(function w(y,I,S,E){if(S===0){_.push(I.clone());return}let C=y.clone().add(I).multiplyScalar(.5);C.addScaledVector(r,(Math.random()*2-1)*E),C.addScaledVector(o,(Math.random()*2-1)*E*.6),w(y,C,S-1,E*.52),w(C,I,S-1,E*.52)})(g,p,3,v*.18),l.push(_)}let u=0;function h(d){for(let f=0;f<d.length-1&&u+2<=jp;f++)t[u*3]=d[f].x,t[u*3+1]=d[f].y,t[u*3+2]=d[f].z,u++,t[u*3]=d[f+1].x,t[u*3+1]=d[f+1].y,t[u*3+2]=d[f+1].z,u++}h(a);for(let d of l)h(d);Vn.setDrawRange(0,u),Vn.attributes.position.needsUpdate=!0,Vn.computeBoundingSphere()}function lb(i){if(Math.random()<.25)i.copy(Hp);else{let t=Math.random()*.35;i.copy(tb).lerp(Hp,t)}}function cb(i){let e=3+(Math.random()*3|0),t=90+Math.random()*130;for(let o=0;o<e;o++)_t.flashQueue.push({at:_t.elapsed+Math.random()*t/1e3,peak:.7+Math.random()*.55});_t.decayUntil=_t.elapsed+.7+Math.random()*.7;let r=3.5+(1-Math.max(.7,Math.min(1,i)))/.3*10.5;if(_t.nextStrikeIn=-Math.log(1-Math.random())*r,lb(_t.strikeColor),_t.plasmaOnPeak=Math.random()<.25,Vn&&Hn){let o=Math.random()<.7,a=o?Math.sqrt(Math.random())*5.5:8+Math.random()*4,l=Math.random()*Math.PI*2,c=Math.cos(l)*a,u=Math.sin(l)*a,h=o?a<2.5?2.6:1.1:Xe;Gp.set(c,h,u);let d=window._cloud&&window._cloud.mesh?window._cloud.mesh.position.y:Yp;yh.set(c+(Math.random()*2-1)*2.2,d+eb*(Math.random()*.2-.05),u+(Math.random()*2-1)*2.2),Hn.position.copy(yh),ab(yh,Gp)}}function ub(i,e){if(i<=.7)return _t.peak=0,0;if(Zp||window._weather?.suppressLightning)return 0;_t.elapsed+=e,_t.nextStrikeIn-=e,_t.nextStrikeIn<=0&&cb(i);let t=0,n=_t.flashQueue;for(let s=n.length-1;s>=0;s--)_t.elapsed>=n[s].at&&(n[s].peak>t&&(t=n[s].peak),n.splice(s,1));if(t>_t.peak)_t.peak=t;else{let s=Math.max(0,_t.decayUntil-_t.elapsed),r=s>0?Math.min(1,e/s):1;_t.peak*=1-r,_t.peak<.002&&(_t.peak=0)}return _t.peak}function Kp(i,e){if(Ao||Sh(),!Ao)return;let{sunLight:t,hemiLight:n,ambLight:s,rimLight:r}=D,o=ob(i),a=Ao;Wp.lerpColors(a.sun.color,XM,o),_h.lerpColors(a.hemiS,qM,o),Xp.lerpColors(a.hemiG,YM,o),Mh.lerpColors(a.amb.color,ZM,o);let l=a.sun.intensity*(1-o*(1-KM)),c=a.hemiI*(1-o*(1-JM)),u=a.amb.intensity*(1-o*(1-QM)),h=ub(i,e||0);t.color.copy(Wp),t.intensity=l;let d=Math.min(1,h*.55);if(_h.lerp(Vp,d*.3),n.color.copy(_h),n.groundColor.copy(Xp),n.intensity=c+a.hemiI*h*.15,Mh.lerp(Vp,d*.2),s.color.copy(Mh),s.intensity=u+a.amb.intensity*h*.1,r&&a.rim&&(qp.lerpColors(a.rim.color,jM,o),r.color.copy(qp),r.intensity=a.rim.intensity*(1-o*(1-$M))),Hn)if(h>.001){if(bh.copy(_t.strikeColor),_t.plasmaOnPeak){let f=Math.min(1,h*h*.9);bh.lerp(nb,f*.35)}Hn.color.copy(bh),Hn.intensity=h*ib}else Hn.intensity=0;Ji&&Ms&&(h>.01?(Ji.visible=!0,Ms.visible=!0,wh.opacity=Math.min(1,.65+h*.55),ol.opacity=Math.min(.95,.35+h*.6),ol.color.copy(_t.strikeColor)):(Ji.visible=!1,Ms.visible=!1))}var Jp=new se,Qp=new se,$p=new R,em=new se,tm=new se,nm=new se,hb=new se(.3,.44,.66),db=new se(.26,.3,.36),fb=new se(.06,.1,.16),pb=new se(.04,.06,.1),mb=new R(.72,.78,1.05),gb=new R(1.25,1.4,1.7),vb=new se(10467028),xb=new se(7375526),yb=new se(.612,.557,.459),_b=new se(.34,.4,.5),Mb=new se(400942),bb=new se(266264);function im(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}var Eh=null;function wb(i,e){if(window._cloud&&window._cloud.mat&&window._cloud.mat.uniforms){let t=window._cloud.mat.uniforms;Eh||(Eh={coverage:t.coverage?t.coverage.value:.72,densityScale:t.densityScale?t.densityScale.value:3.5,sunIntensity:t.sunIntensity?t.sunIntensity.value:9.2});let n=Eh;t.coverage.value=.88*Math.pow(Math.min(1,e/.85),.65),t.densityScale.value=n.densityScale+e*(5.2-n.densityScale),t.sunIntensity.value=n.sunIntensity+e*(3.8-n.sunIntensity),Jp.lerpColors(hb,db,e),Qp.lerpColors(fb,pb,e),t.skyColor.value.copy(Jp),t.groundColor.value.copy(Qp),t.absorption&&($p.copy(mb).lerp(gb,e),t.absorption.value.copy($p)),t.uWindT&&(t.uWindT.value=(D._windT||0)%36e3),t.uStormDark&&(t.uStormDark.value=e)}if(window._cloudShadow&&window._cloudShadow.mat){let t=window._cloudShadow.mat.uniforms;t.uWindT&&(t.uWindT.value=(D._windT||0)%36e3),t.uStrength&&(t.uStrength.value=.38+e*.18),t.uCoverage&&window._cloud&&(t.uCoverage.value=window._cloud.mat.uniforms.coverage.value)}if(window._rain&&window._rain.mat&&window._rain.mat.uniforms.uColor&&(em.lerpColors(vb,xb,e),window._rain.mat.uniforms.uColor.value.copy(em),window._rain.stormT=e),D.water&&D.water.material&&D.water.material.uniforms){let t=D.water.material.uniforms,n=e*e;t.sunColor&&(tm.lerpColors(yb,_b,n),t.sunColor.value.copy(tm)),t.waterColor&&(nm.lerpColors(Mb,bb,n),t.waterColor.value.copy(nm)),t.distortionScale&&(t.distortionScale.value=3.2+n*2.8)}D.scene&&D.scene.fog&&(D.scene.fog=null)}var sm=new Kn,Sb=new R,Eb=new R,Sr=new R,Tb=new R,Ab=new R,rm=new Yt,Qi=0,om=0,am=0,f1=new Uint8Array(128);function Rb(){Qi=0,om=0,am=0}function lm(){function i(){requestAnimationFrame(i);let e=sm.getDelta(),t=sm.elapsedTime;if(window._elapsed=t,Yf(t),Rb(),D._sunHaloMat&&(D._sunHaloMat.opacity=.06+Qi*.55),D._sunHaloInnerMat&&(D._sunHaloInnerMat.opacity=.14+Qi*.7),D.sunOrb){let o=1+Qi*.22;D.sunOrb.scale.setScalar(o)}if(D._spaceEnv&&D._spaceEnv.material&&D._spaceEnv.material.uniforms){let o=D._spaceEnv.material.uniforms;o.uStarPulse&&(o.uStarPulse.value=am),o.uNebulaPulse&&(o.uNebulaPulse.value=Qi),o.uSkyPulse&&(o.uSkyPulse.value=om)}let n=Math.min(e,.05);D.islandGroup.rotation.y+=.008*n,window.__sunDirW&&D.SUN_DIR&&window.__sunDirW.value.copy(D.SUN_DIR),fp(e),$f(),tp(t),zp(e);let s=window._weather&&window._weather.smoothed||0,r=im(s);if(D._windT=(D._windT||0)+Math.min(e,.05)*(1+r*3),Kp(window._weather?.t??0,e),wb(s,r),window._rain){let o=Math.max(0,(s-.08)/.92),a=1+r*.85;window._rain.enabled=o>.01,window._rain.intensity=(.55+Qi*.35)*o*a}if(lp(e,t),cp(e),Up(e),bp(D.camera),D.bloomPass){let a=.24*(1-im(window._weather&&window._weather.smoothed||0)*.55);D.bloomPass.strength=D.camera.position.y<Xe?.072:a}if(D.lensFlarePass){let o=D.lensFlarePass.uniforms;if(o.iTime.value=41.7,D.sunOrb){let a=D.sunOrb.position,l=D.camera.position,c=Tb.subVectors(a,l).normalize(),u=D.camera.getWorldDirection(Ab);if(c.dot(u)<=0)o.enabled.value=!1;else{let d=Sb.copy(a).project(D.camera),f=Math.max(Math.abs(d.x),Math.abs(d.y)),g=Math.max(0,Math.min(1,(1.2-f)/.2)),v=Eb.subVectors(a,l),m=v.length();v.divideScalar(m);let p=-l.dot(v),_=1;if(p>0&&p<m){let w=l.x+v.x*p,y=l.y+v.y*p,I=l.z+v.z*p,S=Math.sqrt(w*w+y*y+I*I),E=2,C=8;S<E?_=0:S<C&&(_=(S-E)/(C-E))}o.enabled.value=!0,o.lensPosition.value.set(d.x,d.y),o.opacity.value=1-_*.25,o.colorGain.value.set(35,15,6),o.glareSize.value=.06*_*g,o.flareSize.value=.002*_*g,o.secondaryGhosts.value=g,o.aditionalStreaks.value=g,_<=0&&(o.enabled.value=!1)}}else o.enabled.value=!1}if(window._cloud){let o=window._cloud.mat.uniforms;o.cameraPos.value.copy(D.camera.position),o.uTime.value=t,o.frame.value=(o.frame.value+1)%1024,D.SUN_DIR&&D.islandGroup&&(rm.copy(D.islandGroup.quaternion).invert(),Sr.copy(D.SUN_DIR).applyQuaternion(rm).normalize(),o.sunDirLocal.value.copy(Sr),window._terrain&&window._terrain.sunUniform&&window._terrain.sunUniform.value.copy(Sr)),o.uDensityMul.value=1+Qi*.45}if(window._cloudShadow){let o=window._cloudShadow.mat.uniforms;if(o.uTime.value=t,o.uDensityMul.value=1+Qi*.45,o.uSunOffset&&window._cloud&&D.SUN_DIR&&D.islandGroup){let l=(window._cloud.mesh.position.y-window._cloudShadow.mesh.position.y)/Math.max(Sr.y,.2),c=Sr.x*l,u=Sr.z*l,h=Math.hypot(c,u),d=o.uRadius.value*.35;h>d&&(c*=d/h,u*=d/h),o.uSunOffset.value.set(c,u)}}D.grainPass&&(D.grainPass.uniforms.time.value=t),D.composer.render()}i()}var cm=new R(84,33,78),um=new R(2,5,-4),hm=new R(0,120,600),dm=new R(0,0,0),Cb=5e3,Th=800,fm=1200,Ah=99999,pm=99999,Er=3200,al=3800;function Pb(i){return i*i*i*(6*i*i-15*i+10)}function Ib(){let i=document.getElementById("loading-screen");if(!i)return null;let e=i.querySelector(".loading-name"),t=i.querySelector(".loading-spinner"),n=i.querySelector(".loading-content");t&&(t.style.display="none"),e&&(e.style.cssText=`
            font-size: clamp(36px, 6vw, 72px);
            letter-spacing: 0.055em;
            opacity: 0;
            transition: none;
            text-shadow: 0 0 40px rgba(236, 231, 219, 0.18),
                         0 0 80px rgba(159, 212, 236, 0.1),
                         0 2px 4px rgba(0, 0, 0, 0.9);
        `),n&&(n.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            opacity: 1;
        `);let s=document.createElement("span");return s.className="loading-kicker",s.textContent="PhD Candidate \xB7 Computational Astrobiology",s.style.cssText=`
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 500;
        font-size: clamp(10px, 1.2vw, 13px);
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: rgba(201, 195, 180, 0.8);
        opacity: 0;
        transition: none;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    `,n&&n.appendChild(s),{loadingScreen:i,nameEl:e,kicker:s,contentEl:n}}function Db(i,e){if(!i)return;let{nameEl:t,kicker:n}=i;if(t)if(e<Th)t.style.opacity="0";else if(e<fm){let s=(e-Th)/(fm-Th);t.style.opacity=String(s*s)}else if(e<Er)t.style.opacity="1";else if(e<al){let s=(e-Er)/(al-Er);t.style.opacity=String(1-s)}else t.style.opacity="0";if(n)if(e<Ah)n.style.opacity="0";else if(e<pm){let s=(e-Ah)/(pm-Ah);n.style.opacity=String(s*.7)}else if(e<Er)n.style.opacity="0.7";else if(e<al){let s=(e-Er)/(al-Er);n.style.opacity=String(.7*(1-s))}else n.style.opacity="0"}function Lb(){return document.getElementById("loading-progress-fill")}function Nb(i,e){if(!i)return;let n=Math.min(80,e/3e3*80);i.style.width=n+"%"}function Ub(i){i&&(i.style.width="100%")}function mm(i,e,t,n){let s=n||Cb;i.position.copy(hm),i.lookAt(dm);let r=Ib(),o=Lb(),a=performance.now(),l=new R;function c(){let u=performance.now()-a,h=Math.min(1,u/s),d=Pb(h);i.position.lerpVectors(hm,cm,d),l.lerpVectors(dm,um,d),i.lookAt(l),Db(r,u),Nb(o,u),h<1?requestAnimationFrame(c):(i.position.copy(cm),i.lookAt(um),Ub(o),t&&t())}requestAnimationFrame(c)}var ll=new Fa,Rh=new ce;function vm(){let{renderer:i,camera:e}=D;if(!i||!e)return;let t=i.domElement;ll.layers.enableAll();let n=!1,s=!1;t.addEventListener("click",r=>{let o=t.getBoundingClientRect();if(Rh.x=(r.clientX-o.left)/o.width*2-1,Rh.y=-((r.clientY-o.top)/o.height)*2+1,ll.setFromCamera(Rh,e),!s&&D.gateway){let a=[];if(D._gatewayHitSphere&&a.push(D._gatewayHitSphere),a.push(D.gateway),ll.intersectObjects(a,!0).length>0){s=!0,gm("goodnight, gateway.",r.clientX,r.clientY),D.gateway.traverse(c=>{if(c.material&&"emissiveIntensity"in c.material){let u=c.material.emissiveIntensity;c.material.emissiveIntensity=u+2.5,setTimeout(()=>{c.material.emissiveIntensity=u+.8},300),setTimeout(()=>{c.material.emissiveIntensity=u},900)}}),setTimeout(()=>{s=!1},3e3);return}}if(!n&&D.moonOrb){let a=[D.moonOrb];if(D._moonHitSphere&&a.push(D._moonHitSphere),ll.intersectObjects(a,!0).length>0){n=!0;let c=D.moonOrb.material;if(c.uniforms&&c.uniforms.uAmbient){let u=c.uniforms.uAmbient.value;c.uniforms.uAmbient.value=.6,setTimeout(()=>{c.uniforms.uAmbient.value=.35},300),setTimeout(()=>{c.uniforms.uAmbient.value=u},800)}gm("good morning, moon.",r.clientX,r.clientY),setTimeout(()=>{n=!1},3e3)}}})}function gm(i,e,t){let n=document.createElement("div");n.textContent=i,n.style.cssText=`
        position: fixed;
        left: ${e}px;
        top: ${t-20}px;
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: 0.14em;
        color: rgba(236, 231, 219, 0.9);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transform: translateY(0);
        transition: opacity 0.4s ease, transform 2.5s ease;
    `,document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(-30px)"}),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),500)},2e3)}var bs={realHeightmap:!0,audio:!0,reviewerMode:!0,dissertation:!0,dailyPlanet:!0};var Ch="reviewer";function Ro(){try{return localStorage.getItem(Ch)==="1"}catch{return!1}}function xm(i){try{i?localStorage.setItem(Ch,"1"):localStorage.removeItem(Ch)}catch{}location.reload()}var Ob=["zone-default","zone-about","zone-research","zone-publications","zone-connect"];function Fb(){let i=document.querySelectorAll(".section-nav--masthead .section-nav__item");i.forEach(e=>{e.addEventListener("click",t=>{let n=parseInt(e.dataset.zone,10),s=Ob[n],r=s&&document.getElementById(s);r&&(t.preventDefault(),t.stopPropagation(),r.scrollIntoView({behavior:"smooth",block:"start"}),i.forEach(o=>o.classList.remove("active")),e.classList.add("active"))},!0)})}function Ph(){let i=Ro();i&&(document.documentElement.classList.add("reviewer-mode"),Fb()),bs.reviewerMode&&document.addEventListener("keydown",t=>{t.key!=="r"&&t.key!=="R"||t.target instanceof Element&&t.target.matches("input, textarea, [contenteditable]")||t.metaKey||t.ctrlKey||t.altKey||xm(!Ro())});let e=document.createElement("button");e.id="reviewer-toggle",e.type="button",e.textContent=i?"exit reader view":"reader view",e.addEventListener("click",()=>xm(!Ro())),e.style.opacity="0",document.body.appendChild(e),requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.opacity=""}))}var Bb="https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/",Ih=[{title:"The Mice Galaxies",slug:"the-mice-galaxies"},{title:"Arp 140",slug:"arp-140"},{title:"V838 Monocerotis",slug:"v838-monocerotis"},{title:"RS Puppis",slug:"rs-puppis"},{title:"Pismis 24",slug:"pismis-24"},{title:"NGC 1300",slug:"ngc-1300"},{title:"M87 Black Hole",slug:"black-hole-at-the-center-of-galaxy-m87"},{title:"NGC 1569",slug:"ngc-1569"},{title:"Hoag\u2019s Object",slug:"hoags-object"},{title:"Bubble Nebula",slug:"bubble-nebula"},{title:"Butterfly Nebula",slug:"butterfly-nebula"},{title:"NGC 2392",slug:"ngc-2392"},{title:"Westerlund 2",slug:"wusterland-2"},{title:"Hubble Ultra Deep Field",slug:"hubble-ultra-deep-field-2014"},{title:"The Whirlpool Galaxy",slug:"the-whirlpool-galaxy"},{title:"Cat\u2019s Eye Nebula",slug:"cats-eye-nebula"},{title:"Supernova 1987A",slug:"supernova-1987a"},{title:"Bullet Cluster",slug:"bullet-cluster"},{title:"Caldwell 73",slug:"caldwell-73"},{title:"The Crab Nebula",slug:"the-crab-nebula"},{title:"Abell 370",slug:"abell-370"},{title:"Helix Nebula",slug:"helix-nebula"},{title:"Twin Galaxies AM 2026-424",slug:"twin-galaxies-am-2026-424"},{title:"Cosmic Reef",slug:"cosmic-reef"},{title:"Lensing Galaxy Cluster",slug:"lensing-galaxy-cluster"},{title:"Pillars of Creation",slug:"pillars-of-creation"},{title:"Milky Way Center",slug:"milky-way-center"}].map(i=>({...i,url:`${Bb}hubble-sonification-${i.slug}.mp4`}));var ym="NASA &middot; SYSTEM Sounds";function Dh(i=null){let e;do e=Ih[Math.floor(Math.random()*Ih.length)];while(i&&Ih.length>1&&e.url===i);return e}var Kt=null,pt=null,_m=null,Gn=null,Tr=null,ei=null,Ar=null,ti=!0,Mm=!1,cl=[];function zb(){return!0}function ws(){return ti}function hl(){return Mm}function bm(){return Ar}function wm(){return Tr}function Sm(){return ym}function dl(i){return cl.push(i),()=>{cl=cl.filter(e=>e!==i)}}function Em(i){for(let e of cl)try{e(i,Ar)}catch{}}function Tm(){if(!Gn||!pt)return;let i=ti?0:.42,e=pt.currentTime;Gn.gain.cancelScheduledValues(e),Gn.gain.setValueAtTime(Gn.gain.value,e),Gn.gain.linearRampToValueAtTime(i,e+.6)}function kb(){if(!pt||!Gn)return;let i=pt.createBuffer(1,2*pt.sampleRate,pt.sampleRate),e=i.getChannelData(0),t=0;for(let u=0;u<e.length;u++){let h=Math.random()*2-1;t=(t+.02*h)/1.02,e[u]=t*3.5}let n=pt.createBufferSource();n.buffer=i,n.loop=!0;let s=pt.createBiquadFilter();s.type="lowpass",s.frequency.value=220,s.Q.value=.7;let r=pt.createOscillator();r.frequency.value=.11;let o=pt.createGain();o.gain.value=.09;let a=pt.createGain();a.gain.value=.85,r.connect(o).connect(a.gain);let l=pt.createOscillator();l.type="sine",l.frequency.value=52;let c=pt.createGain();c.gain.value=.08,ei=pt.createGain(),ei.gain.value=0,n.connect(s).connect(a).connect(ei),l.connect(c).connect(ei),ei.connect(Gn);try{n.start(),r.start(),l.start()}catch{}}function Am(){if(!ei||!pt)return;let i=ti?0:.16,e=pt.currentTime;ei.gain.cancelScheduledValues(e),ei.gain.setValueAtTime(ei.gain.value,e),ei.gain.linearRampToValueAtTime(i,e+2.2)}function Rm(i){Kt&&(Ar=i,Kt.src=i.url,Kt.load(),Em("trackchange"))}function ul(){let i=Dh(Ar?Ar.url:null);Rm(i),!ti&&pt&&Kt.play().catch(()=>{})}function Cm(i,e={}){let t=ti;if(ti=!!i,e.persist!==!1&&void 0,Tm(),Am(),t&&!ti&&pt){let n=()=>{Ar?Kt.play().catch(()=>{}):ul()};pt.state==="running"?n():pt.resume().then(n).catch(()=>{})}else!t&&ti&&Kt&&Kt.pause();Em("mute")}function Pm(){pt&&ul()}function Im(){let i=window.AudioContext||window.webkitAudioContext;i&&(Kt=document.createElement("audio"),Kt.id="sonification-player",Kt.crossOrigin="anonymous",Kt.preload="auto",Kt.addEventListener("ended",()=>{ul()}),Kt.addEventListener("error",()=>{ul()}),document.body.appendChild(Kt),pt=new i,_m=pt.createMediaElementSource(Kt),Gn=pt.createGain(),Gn.gain.value=0,Tr=pt.createAnalyser(),Tr.fftSize=256,Tr.smoothingTimeConstant=.55,_m.connect(Tr),Tr.connect(Gn),Gn.connect(pt.destination),kb(),ti=zb(),Mm=!0,Tm(),Am(),window.__audioReactive=null,Rm(Dh()))}var Nh=220,Uh=28,fl=28,Wn=null,Rr=null,Ss=null,Dm=null,$i=null,Es=null,pl=null,Hb=!1;function Vb(){Wn||(Wn=document.createElement("div"),Wn.id="audio-viz",Wn.className="audio-viz",Wn.innerHTML=`
        <canvas class="audio-viz__canvas" width="${Nh}" height="${Uh}"></canvas>
        <div class="audio-viz__row">
            <a class="audio-viz__title" target="_blank" rel="noopener" href="#"></a>
            <button class="audio-viz__skip" type="button" title="Next sonification" aria-label="Skip to next sonification">&raquo;</button>
        </div>
        <div class="audio-viz__credit">${Sm()}</div>
    `,Ss=Wn.querySelector(".audio-viz__canvas"),Rr=Wn.querySelector(".audio-viz__title"),Dm=Wn.querySelector(".audio-viz__skip"),$i=Ss.getContext("2d"),Dm.addEventListener("click",i=>{i.stopPropagation(),Pm()}),document.body.appendChild(Wn),Hb=!0)}function Lm(){if(!Rr)return;let i=bm();if(!i){Rr.textContent="\u2014",Rr.removeAttribute("href");return}Rr.textContent=i.title,Rr.href=i.url}function Nm(i){Wn&&(Wn.dataset.visible=i?"1":"0")}function Lh(){if(!$i||!Ss)return;let i=wm(),e=Math.min(window.devicePixelRatio||1,2),t=Nh,n=Uh;if(Ss.width!==t*e&&(Ss.width=t*e,Ss.height=n*e,$i.scale(e,e)),$i.clearRect(0,0,t,n),!i){Es=requestAnimationFrame(Lh);return}(!pl||pl.length!==i.frequencyBinCount)&&(pl=new Uint8Array(i.frequencyBinCount));let s=pl;i.getByteFrequencyData(s);let r=2,o=Math.max(1,(t-r*(fl-1))/fl);for(let a=0;a<fl;a++){let l=Math.floor(Math.pow(a/fl,1.8)*(s.length*.7)),c=s[l]/255,u=Math.max(1,c*n),h=a*(o+r),d=n-u,f=.35+c*.55;$i.fillStyle=`rgba(111, 195, 232, ${f.toFixed(2)})`,$i.fillRect(h,d,o,u)}Es=requestAnimationFrame(Lh)}function Um(){Es||(Es=requestAnimationFrame(Lh))}function Gb(){Es&&cancelAnimationFrame(Es),Es=null,$i&&Ss&&$i.clearRect(0,0,Nh,Uh)}function Om(){hl()&&(Vb(),Lm(),Nm(!ws()),ws()||Um(),dl(i=>{if(i==="trackchange"&&Lm(),i==="mute"){let e=!ws();Nm(e),e?Um():Gb()}}))}function Fm(i){let e=i|0;return function(){e=e+1831565813|0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Bm(i=new Date){let e=new Date(i.getFullYear(),0,0),t=i-e;return Math.floor(t/864e5)+i.getFullYear()*1e3}function ml(i,e){return e[Math.floor(i()*e.length)]}function gl(i,e,t){return i+(e-i)*t}var Wb=[11850478,13162728,11060960,13819368,12440036],Xb=[2772078,2377828,3035766,2048096,2508394],qb=[527376,724756,658446,791064,593170];function zm(){if(!bs.dailyPlanet)return null;let e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?42:Bm(),t=Fm(e),n={seed:e,rimColor:ml(t,Wb),hemiSky:ml(t,Xb),hemiGround:ml(t,qb),sunCoronaMul:gl(.9,1.15,t()),moonCoronaMul:gl(.85,1.2,t()),pulseScale:gl(.8,1.25,t()),label:Yb(e)};return window.__DAILY_PARAMS=n,n}function km(){return"G2026"+String(Math.floor(Math.random()*1e3)).padStart(3,"0")}function Yb(i){return km()}function Hm(){let i=window.__DAILY_PARAMS;if(!i)return;let e=document.getElementById("daily-label-inline");e&&(e.textContent=i.label,e.style.cursor="pointer",e.style.pointerEvents="auto",e.title="regenerate island",e.dataset.regenWired||(e.dataset.regenWired="1",e.addEventListener("click",()=>{try{window.__regenIsland&&window.__regenIsland()}catch{}i.label=km(),e.textContent=i.label})))}function Vm(i){window.open(i,"_blank","noopener")||console.warn(`terminal: popup blocked for ${i}`)}function Zb(i,e){let t=document.createElement("a");t.href=i,t.download=e,t.rel="noopener",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}var jb="https://science.nasa.gov/mission/hubble/multimedia/sonifications/",Gm="https://github.com/HaleighNyberg",Wm="up up down down left right left right b a",D1={help:()=>["commands (slash optional \u2014 /help == help):",'  print("text")   echo a string',"  whoami          short bio","  ls              list site sections","  cat <section>   open a section (about / research / cv / toolkit / connect / dissertation)","  scan            re-run the scanner","  scan all        extended scan sweep","  resources       credits and sources","  email           open mail client (haleigh@purdue.edu)","  cv              download Nyberg_CV.pdf","  github          open github profile","  nasa            open NASA Hubble sonifications page","  gogogo          spin the moon orbit fast for 2 revolutions","  freeze          pause the moon orbit","  reset           restore normal moon orbit","  hello           say hi","  konami          enter the konami code","  sudo <cmd>      permission denied (you are not root)","  clear           clear the terminal","  exit            hide this terminal"],whoami:()=>["haleigh e. nyberg","phd candidate, astrobiology @ purdue","nsf grfp fellow \xB7 olson lab"],ls:()=>["home \xB7 about \xB7 research \xB7 resume/cv \xB7 toolkit \xB7 connect \xB7 dissertation"],scan:()=>["> scanning... volcanic island detected.","> shoreline ponds active. rna precursor cycling in progress."],"scan all":()=>["> extended sweep initiated...","> atmosphere: thin. O2 trace. CH4 elevated.","> hydrosphere: liquid water confirmed. salinity moderate.","> geochem: basalt substrate. hydrothermal vents present.","> biosignature candidates: 3. cross-checking with archive...","> match: prebiotic chemistry consistent with olson et al. framework.","> scan complete."],resources:()=>["ambient audio: nasa hubble sonifications \xB7 system sounds","built with: three.js, vanilla js, node/bash"],email:()=>(window.location.href="mailto:haleigh@purdue.edu",["opening mail client \u2192 haleigh@purdue.edu"]),cv:()=>(Zb("assets/Nyberg_CV.pdf","Nyberg_CV.pdf"),["downloading Nyberg_CV.pdf..."]),github:()=>(Vm(Gm),[`opening ${Gm}`]),nasa:()=>(Vm(jb),["opening nasa hubble sonifications..."]),gogogo:()=>(window.__moonBoost={factor:24,orbitsLeft:2,_swept:0},["> moon orbit boost engaged.","> factor x24 \xB7 2 orbits queued."]),freeze:()=>(window.__moonBoost={factor:0,orbitsLeft:1/0,_swept:0},['> moon orbit frozen. type "reset" to resume.']),reset:()=>(window.__moonBoost=null,["> orbit restored to nominal rate."]),hello:()=>["hi. the ponds are wet today."],konami:()=>[`try typing: ${Wm}`],[Wm]:()=>["> konami code accepted.","> +30 lives. the moon winks at you.","> (try /gogogo)"]};function vl(i,e){i.querySelectorAll('.chrome-tile[data-open="1"]').forEach(t=>{if(t===e)return;t.dataset.open="0";let n=t.querySelector(".chrome-tile__btn");n&&n.setAttribute("aria-expanded","false")})}function Xm(i){let e=ws();i.dataset.playing=e?"0":"1";let t=i.querySelector(".chrome-tile__btn");t&&(t.setAttribute("aria-label",e?"Play ambient audio":"Mute ambient audio"),t.title=e?"Audio (muted)":"Audio (playing)")}function qm(){let i=document.getElementById("chrome-panel");if(!i||!(window.matchMedia&&window.matchMedia("(min-width: 769px) and (pointer: fine)").matches))return;function t(){let r=document.getElementById("audio-viz"),o=document.getElementById("chrome-pop-audio");r&&o&&r.parentElement!==o&&o.appendChild(r)}t(),new MutationObserver(t).observe(document.body,{childList:!0});let n=i.querySelector('[data-tile="audio"]');if(n&&hl()){Xm(n);let r=n.querySelector(".chrome-tile__btn");r.addEventListener("click",o=>{o.stopPropagation();let a=ws();Cm(!a),a?(vl(i,n),n.dataset.open="1",r.setAttribute("aria-expanded","true")):(n.dataset.open="0",r.setAttribute("aria-expanded","false"))}),dl(o=>{o==="mute"&&Xm(n)})}else n&&(n.style.display="none");i.querySelectorAll(".chrome-tile[data-tile]").forEach(r=>{if(r===n)return;let o=r.querySelector(".chrome-tile__btn"),a=r.querySelector(".chrome-pop");!o||!a||o.addEventListener("click",l=>{l.stopPropagation();let c=r.dataset.open==="1";vl(i),c||(r.dataset.open="1",o.setAttribute("aria-expanded","true"))})}),document.addEventListener("click",r=>{i.contains(r.target)||vl(i)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&vl(i)});let s=document.getElementById("zone-dots");if(!s){i.classList.add("revealed");return}s.classList.contains("revealed")?i.classList.add("revealed"):new MutationObserver((r,o)=>{s.classList.contains("revealed")&&(i.classList.add("revealed"),o.disconnect())}).observe(s,{attributes:!0,attributeFilter:["class"]})}var Kb=[{year:"2026",title:"Effects of Planetary Obliquity on Wet-Dry Cycles, Pond Organics, and Urability",venue:"AbSciCon 2026"},{year:"2025",title:"Planetary Obliquity and Origin of Life Potential in Warm Little Ponds: Earth and Beyond",venue:"AGU Fall Meeting 2025 (invited)"},{year:"2025",title:"Planetary Obliquity Impacts Wet-Dry Cycling and the Potential for an Origin of Life in Warm Little Ponds",venue:"Goldschmidt 2025"},{year:"2025",title:"Quantifying Planetary Origin of Life Potential: Connecting Global Climate to Local Wet-Dry Cycling on Volcanic Islands",venue:"Midwestern Geobiology Symposium 2025"},{year:"2024",title:"Elucidating Planetary Scenarios That May Lead to an Origin of Life in Warm Little Ponds",venue:"AGU Fall Meeting 2024 (as Brown)"},{year:"2024",title:"Impacts of Planetary Obliquity on Wet-Dry Cycling: Early Earth and Beyond",venue:"AbSciCon 2024 (as Brown)"}],Jb=[{year:"2025",authors:"Mingsuwan, C. et al.",title:"Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations",venue:"IEEE SMC-IT/SCC, 6th AR/VR Workshop (co-author)"},{year:"2024",authors:"Brown, H. E. et al.",title:"Strengthening Community Across Artists and Scientists in Astrobiology",venue:"NASA DARES report"}],Qb=[{title:"PALLAS (co-founder)",blurb:"A platform connecting artists and scientists for paid collaboration across astrobiology. I co-founded it and designed and built the accessibility-audited front end. We helped secure AAS funding for pilot programming and ran multi-institution events.",tags:["Front-end","Accessibility","Community building"],links:[{label:"Live",href:"https://pallas.gallery"}]},{title:"NASA Artemis Gateway visualization",blurb:"Scrum master for two 16-member, multi-university teams building an Unreal Engine VR visualization and mission-planning tool for NASA's Lunar Gateway, in partnership with Barrios Technology and NASA's Johnson Space Center (two semesters, through Purdue's Data Mine).",tags:["Unreal Engine","VR","Agile / Scrum"],links:[{label:"Backing publication (IEEE SMC-IT/SCC 2025)",href:"https://github.com/HaleighNyberg"}]},{title:"ExoPlaSim origin-of-life pipeline",blurb:"My dissertation engine: 3D general circulation model parameter sweeps (1,500+ simulations) with a custom post-processing pipeline, building toward an Origin of Life Index that ranks worlds by their likelihood of starting life. (Model code is dissertation IP, not in the public repo.)",tags:["Python","Fortran","HPC","NetCDF"],links:[]},{title:"ML forecasting (Purdue / John Deere)",blurb:"Multivariate time-series demand prediction (ARIMA, LSTM) on an industry data-science team through Purdue's Data Mine.",tags:["ARIMA","LSTM","Time series"],links:[]}];function $b(i){return'<div class="pub-entry"><span class="pub-year">'+i.year+'</span><div class="pub-authors"><strong>'+i.title+'</strong></div><div class="pub-venue">'+i.venue+"</div></div>"}function ew(i){return'<div class="pub-entry"><span class="pub-year">'+i.year+'</span><div class="pub-authors">'+i.authors+" <strong>"+i.title+'</strong></div><div class="pub-venue">'+i.venue+"</div></div>"}function tw(i){i&&(i.innerHTML='<p class="pub-section-title">Selected Talks</p>'+Kb.slice(0,3).map($b).join("")+'<p class="pub-section-title">Proceedings &amp; Reports</p>'+Jb.map(ew).join(""))}function nw(i){let e=i.tags.map(function(n){return'<span class="skill-tag">'+n+"</span>"}).join(""),t=i.links.map(function(n){return'<a class="brand-link" href="'+n.href+'" rel="noopener" target="_blank">'+n.label+"</a>"}).join("");return'<article class="project-card"><h4 class="project-card__title">'+i.title+'</h4><p class="project-card__blurb">'+i.blurb+"</p>"+(e?'<div class="project-card__tags">'+e+"</div>":"")+(t?'<div class="project-card__links">'+t+"</div>":"")+"</article>"}function iw(i){i&&(i.innerHTML=Qb.map(nw).join(""))}function Ym(){try{tw(document.getElementById("pub-list")),iw(document.getElementById("project-grid"))}catch(i){console.warn("content render failed",i)}}Ym();if(Ro()){try{Ph()}catch(t){console.warn("reviewer UI init failed",t)}let i=document.getElementById("loading-screen");i&&i.remove();let e=document.getElementById("site-header");e&&e.classList.add("revealed")}else{let i=function(){let o=document.querySelector(".home-hero__statement");if(!o||o.dataset.typed)return;o.dataset.typed="1";let a=o.textContent;if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;o.textContent="";let c=0;(function u(){o.textContent=a.slice(0,c),c++<a.length&&setTimeout(u,26+Math.random()*32)})()},r=function(){s||(s=!0,setTimeout(function(){let o=document.getElementById("loading-screen");o&&o.classList.add("approach-active"),mm(D.camera,D.scene,()=>{function a(){return!!(D.sunOrb&&D.moonOrb&&D.water)}function l(){mh(!1);try{localStorage.setItem("introSeen","1")}catch{}D.camera.far=1600,D.camera.updateProjectionMatrix();let h=document.getElementById("loading-screen");h&&(h.classList.add("fade-out"),h.addEventListener("transitionend",()=>{h.remove()},{once:!0}),setTimeout(()=>{h.parentNode&&h.remove()},1200)),setTimeout(()=>{let d=document.getElementById("site-header");d&&d.classList.add("revealed");let f=document.getElementById("zone-dots");if(f&&f.classList.add("revealed"),bs.dailyPlanet)try{Hm()}catch(g){console.warn("daily label failed",g)}vm(),setTimeout(i,700)},300),setTimeout(()=>{if(bs.audio)try{Im(),Om()}catch(d){console.warn("audio init failed",d)}try{Ph()}catch(d){console.warn("reviewer UI init failed",d)}try{kp()}catch(d){console.warn("weather UI init failed",d)}try{qm()}catch(d){console.warn("chrome panel init failed",d)}},1200)}let c=!1;function u(){c||(c=!0,l())}if(a())u();else{let h=function(){c||(a()?u():requestAnimationFrame(h))};h(),setTimeout(u,3e3)}},n?1:void 0)},n?0:900))};(function(){let a=document.querySelector("#site-header h1.display--hero");if(!a)return;let l=a.textContent;a.innerHTML=[...l].map((c,u)=>c===" "?" ":`<span class="char" style="--char-i:${u}">${c}</span>`).join("")})(),(function(){document.querySelectorAll(".zone").forEach(l=>{l.addEventListener("scroll",()=>{l.style.setProperty("--scroll-y",l.scrollTop+"px")},{passive:!0})})})();try{zm()}catch(o){console.warn("daily planet resolve failed",o)}zf(),qf();try{Sh()}catch(o){console.warn("storm baseline capture failed",o)}Kf(),Qf(),ep(),ap(),Dp(),hp(),Mp(),mh(!0),lm();let e=new URLSearchParams(location.search).get("intro")==="1",t=!1;try{t=localStorage.getItem("introSeen")==="1"}catch{}let n=t&&!e,s=!1;D.waterNormalsReady?r():(D._onWaterReady=r,setTimeout(r,1500))}
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
