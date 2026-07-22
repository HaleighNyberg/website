var U0=0,fd=1,O0=2;var Uf=1,Lu=2,di=3,Et=0,Tt=1,Pt=2,Nt=0,Bn=1,wt=2,pd=3,Aa=4,Du=5,_n=100,F0=101,B0=102,z0=103,k0=104,yr=200,H0=201,V0=202,G0=203,wc=204,bc=205,Ja=206,W0=207,Qa=208,X0=209,q0=210,Y0=211,Z0=212,j0=213,K0=214,Sc=0,Ec=1,Tc=2,rr=3,Ac=4,Rc=5,Cc=6,Pc=7,Of=0,J0=1,Q0=2,zi=0,Nu=1,Uu=2,Ou=3,xo=4,$0=5,Fu=6,Bu=7,md="attached",eg="detached",Ff=300,or=301,ar=302,Ic=303,Lc=304,$a=306,bt=1e3,fi=1001,no=1002,At=1003,zu=1004;var er=1005;var xt=1006,Qr=1007;var Mn=1008,ku=1008,hn=1009,Bf=1010,zf=1011,io=1012,Hu=1013,fs=1014,Fn=1015,yt=1016,Vu=1017,Gu=1018,ki=1020,kf=35902,Hf=1021,Vf=1022,sn=1023,Gf=1024,Wf=1025,nr=1026,Hi=1027,Wu=1028,Xu=1029,el=1030,qu=1031;var Yu=1033,wa=33776,ba=33777,Sa=33778,Ea=33779,Dc=35840,Nc=35841,Uc=35842,Oc=35843,Fc=36196,Bc=37492,zc=37496,kc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,jc=37817,Kc=37818,Jc=37819,Qc=37820,$c=37821,Ta=36492,eu=36494,tu=36495,Xf=36283,nu=36284,iu=36285,su=36286;var lr=2300,cr=2301,Gl=2302,gd=2400,vd=2401,xd=2402,tg=2500;var qf=0,tl=1,yo=2,ng=3200,ig=3201;var Zu=0,sg=1,Oi="",Mt="srgb",qt="srgb-linear",nl="linear",ut="srgb";var Us=7680;var yd=519,rg=512,og=513,ag=514,Yf=515,lg=516,cg=517,ug=518,hg=519,ru=35044,Zf=35048;var Ra="300 es",pi=2e3,Ca=2001,Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=1234567,$r=Math.PI/180,ur=180/Math.PI;function zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function dg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fg(i,e,t){return i!==e?(t-i)/(e-i):0}function eo(i,e,t){return(1-t)*i+t*e}function pg(i,e,t,n){return eo(i,e,1-Math.exp(-t*n))}function mg(i,e=1){return e-Math.abs(ju(i,e*2)-e)}function gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yg(i,e){return i+Math.random()*(e-i)}function _g(i){return i*(.5-Math.random())}function Mg(i){i!==void 0&&(_d=i);let e=_d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wg(i){return i*$r}function bg(i){return i*ur}function Sg(i){return(i&i-1)===0&&i!==0}function Eg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ag(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mi={DEG2RAD:$r,RAD2DEG:ur,generateUUID:zn,clamp:Ht,euclideanModulo:ju,mapLinear:dg,inverseLerp:fg,lerp:eo,damp:pg,pingpong:mg,smoothstep:gg,smootherstep:vg,randInt:xg,randFloat:yg,randFloatSpread:_g,seededRandom:Mg,degToRad:wg,radToDeg:bg,isPowerOfTwo:Sg,ceilPowerOfTwo:Eg,floorPowerOfTwo:Tg,setQuaternionFromProperEuler:Ag,normalize:ht,denormalize:On},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],x=s[7],I=s[2],T=s[5],w=s[8];return r[0]=o*v+a*y+l*I,r[3]=o*m+a*b+l*T,r[6]=o*p+a*x+l*w,r[1]=c*v+u*y+h*I,r[4]=c*m+u*b+h*T,r[7]=c*p+u*x+h*w,r[2]=d*v+f*y+g*I,r[5]=d*m+f*b+g*T,r[8]=d*p+f*x+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new Je;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){let i=so("canvas");return i.style.display="block",i}var Md={};function Kr(i){i in Md||(Md[i]=!0,console.warn(i))}function Cg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ig(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Oi?nl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wd=[.64,.33,.3,.6,.15,.06],bd=[.2126,.7152,.0722],Sd=[.3127,.329],Ed=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[qt]:{primaries:wd,whitePoint:Sd,transfer:nl,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:bd,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:wd,whitePoint:Sd,transfer:ut,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:bd,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});var Os,ou=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=so("canvas")),Os.width=e.width,Os.height=e.height;let n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lg=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dg=0,It=class i extends Vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=xt,o=Mn,a=sn,l=hn,c=i.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=zn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bt:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bt:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Ff;It.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,I=(p+1)/2,T=(u+d)/4,w=(h+v)/4,A=(g+m)/4;return b>x&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=w/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=A/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ot=class extends au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*v,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let I=Math.sqrt(b),T=Math.atan2(I,p*y);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let x=a*y;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new C,Ad=new Kt,wn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Yo.subVectors(this.max,zr),Fs.subVectors(e.a,zr),Bs.subVectors(e.b,zr),zs.subVectors(e.c,zr),Pi.subVectors(Bs,Fs),Ii.subVectors(zs,Bs),rs.subVectors(Fs,zs);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-rs.z,rs.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,rs.z,0,-rs.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-rs.y,rs.x,0];return!Yl(t,Fs,Bs,zs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,Fs,Bs,zs,Yo))?!1:(Zo.crossVectors(Pi,Ii),t=[Zo.x,Zo.y,Zo.z],Yl(t,Fs,Bs,zs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new C,new C,new C,new C,new C,new C,new C,new C],Dn=new C,qo=new wn,Fs=new C,Bs=new C,zs=new C,Pi=new C,Ii=new C,rs=new C,zr=new C,Yo=new C,Zo=new C,os=new C;function Yl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ng=new wn,kr=new C,Zl=new C,dn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Zl)),this.expandByPoint(kr.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new C,jl=new C,jo=new C,Li=new C,Kl=new C,Ko=new C,Jl=new C,ps=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jl.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(jl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=Li.dot(this.direction),l=-Li.dot(jo),c=Li.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jl).addScaledVector(jo,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Kl.subVectors(t,e),Ko.subVectors(n,e),Jl.crossVectors(Kl,Ko);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Ko.crossVectors(Li,Ko));if(l<0)return null;let c=a*this.direction.dot(Kl.cross(Li));if(c<0||l+c>o)return null;let u=-a*Li.dot(Jl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ug,e,Og)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Di.crossVectors(n,cn),Di.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Di.crossVectors(n,cn)),Di.normalize(),Jo.crossVectors(cn,Di),s[0]=Di.x,s[4]=Jo.x,s[8]=cn.x,s[1]=Di.y,s[5]=Jo.y,s[9]=cn.y,s[2]=Di.z,s[6]=Jo.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],b=n[7],x=n[11],I=n[15],T=s[0],w=s[4],A=s[8],M=s[12],_=s[1],L=s[5],D=s[9],F=s[13],z=s[2],V=s[6],k=s[10],j=s[14],H=s[3],G=s[7],re=s[11],ue=s[15];return r[0]=o*T+a*_+l*z+c*H,r[4]=o*w+a*L+l*V+c*G,r[8]=o*A+a*D+l*k+c*re,r[12]=o*M+a*F+l*j+c*ue,r[1]=u*T+h*_+d*z+f*H,r[5]=u*w+h*L+d*V+f*G,r[9]=u*A+h*D+d*k+f*re,r[13]=u*M+h*F+d*j+f*ue,r[2]=g*T+v*_+m*z+p*H,r[6]=g*w+v*L+m*V+p*G,r[10]=g*A+v*D+m*k+p*re,r[14]=g*M+v*F+m*j+p*ue,r[3]=y*T+b*_+x*z+I*H,r[7]=y*w+b*L+x*V+I*G,r[11]=y*A+b*D+x*k+I*re,r[15]=y*M+b*F+x*j+I*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,b=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,x=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,I=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,T=t*y+n*b+s*x+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=y*w,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=b*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=x*w,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*w,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=I*w,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,y=l*c,b=l*u,x=l*h,I=n.x,T=n.y,w=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+x)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+b)*w,s[9]=(m-y)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ca)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,v;if(a===pi)g=(o+r)*h,v=-2*h;else if(a===Ca)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new C,Nn=new Ve,Ug=new C(0,0,0),Og=new C(1,1,1),Di=new C,Jo=new C,cn=new C,Rd=new Ve,Cd=new Kt,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fg=0,Pd=new C,Hs=new Kt,li=new Ve,Qo=new C,Hr=new C,Bg=new C,zg=new Kt,Id=new C(1,0,0),Ld=new C(0,1,0),Dd=new C(0,0,1),Nd={type:"added"},kg={type:"removed"},Vs={type:"childadded",child:null},Ql={type:"childremoved",child:null},St=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new bn,n=new Kt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Je}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Hr,Qo,this.up):li.lookAt(Qo,Hr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(li),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kg),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new C(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new C,ci=new C,$l=new C,ui=new C,Gs=new C,Ws=new C,Ud=new C,ec=new C,tc=new C,nc=new C,ic=new it,sc=new it,rc=new it,Fi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ci.subVectors(n,t),$l.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(ci),l=Un.dot($l),c=ci.dot(ci),u=ci.dot($l),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(e,t),sc.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ic,r.x),o.addScaledVector(sc,r.y),o.addScaledVector(rc,r.z),o}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ci.subVectors(e,t),Un.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Ws.subVectors(r,n),ec.subVectors(e,n);let l=Gs.dot(ec),c=Ws.dot(ec);if(l<=0&&c<=0)return t.copy(n);tc.subVectors(e,s);let u=Gs.dot(tc),h=Ws.dot(tc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gs,o);nc.subVectors(e,r);let f=Gs.dot(nc),g=Ws.dot(nc);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ws,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ud.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Ud,a);let p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},$o={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=ju(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oc(o,r,e+1/3),this.g=oc(o,r,e),this.b=oc(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return et.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ht(Wt.r*255,0,255))*65536+Math.round(Ht(Wt.g*255,0,255))*256+Math.round(Ht(Wt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Mt){et.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL($o);let n=eo(Ni.h,$o.h,t),s=eo(Ni.s,$o.s,t),r=eo(Ni.l,$o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new se;se.NAMES=Kf;var Hg=0,Jt=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=zn(),this.name="",this.blending=Bn,this.side=Et,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=bc,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==Et&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==_n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Vt=class extends Jt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new C,ea=new he,Xe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}};var La=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vg=0,yn=new Ve,ac=new St,Xs=new C,un=new wn,Vr=new wn,zt=new C,Qe=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Da:La)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,Vr.min),un.expandByPoint(zt),zt.addVectors(un.max,Vr.max),un.expandByPoint(zt)):(un.expandByPoint(Vr.min),un.expandByPoint(Vr.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),zt.add(Xs)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new C,l[A]=new C;let c=new C,u=new C,h=new C,d=new he,f=new he,g=new he,v=new C,m=new C;function p(A,M,_){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[A].add(v),a[M].add(v),a[_].add(v),l[A].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,M=y.length;A<M;++A){let _=y[A],L=_.start,D=_.count;for(let F=L,z=L+D;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new C,x=new C,I=new C,T=new C;function w(A){I.fromBufferAttribute(s,A),T.copy(I);let M=a[A];b.copy(M),b.sub(I.multiplyScalar(I.dot(M))).normalize(),x.crossVectors(T,M);let L=x.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,L)}for(let A=0,M=y.length;A<M;++A){let _=y[A],L=_.start,D=_.count;for(let F=L,z=L+D;F<z;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Xe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Od=new Ve,as=new ps,ta=new dn,Fd=new C,na=new C,ia=new C,sa=new C,lc=new C,ra=new C,Bd=new C,oa=new C,We=class extends St{constructor(e=new Qe,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(lc.fromBufferAttribute(h,e),o?ra.addScaledVector(lc,u):ra.addScaledVector(lc.sub(t),u))}t.add(ra)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ta.containsPoint(as.origin)===!1&&(as.intersectSphere(ta,Fd)===null||as.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Od.copy(r).invert(),as.copy(e.ray).applyMatrix4(Od),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,I=b;x<I;x+=3){let T=a.getX(x),w=a.getX(x+1),A=a.getX(x+2);s=aa(this,p,e,n,c,u,h,T,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=aa(this,o,e,n,c,u,h,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,I=b;x<I;x+=3){let T=x,w=x+1,A=x+2;s=aa(this,p,e,n,c,u,h,T,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,b=m+1,x=m+2;s=aa(this,o,e,n,c,u,h,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gg(i,e,t,n,s,r,o,a){let l;if(e.side===Tt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Et,a),l===null)return null;oa.copy(a),oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:i}}function aa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,na),i.getVertexPosition(l,ia),i.getVertexPosition(c,sa);let u=Gg(i,e,t,n,na,ia,sa,Bd);if(u){let h=new C;Fi.getBarycoord(Bd,na,ia,sa,h),s&&(u.uv=Fi.getInterpolatedAttribute(s,a,l,c,h,new he)),r&&(u.uv1=Fi.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=Fi.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};Fi.getNormal(na,ia,sa,d.normal),u.face=d,u.barycoord=h}return u}var ms=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(v,m,p,y,b,x,I,T,w,A,M){let _=x/w,L=I/A,D=x/2,F=I/2,z=T/2,V=w+1,k=A+1,j=0,H=0,G=new C;for(let re=0;re<k;re++){let ue=re*L-F;for(let fe=0;fe<V;fe++){let le=fe*_-D;G[v]=le*y,G[m]=ue*b,G[p]=z,c.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[p]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(fe/w),h.push(1-re/A),j+=1}}for(let re=0;re<A;re++)for(let ue=0;ue<w;ue++){let fe=d+ue+V*re,le=d+ue+V*(re+1),N=d+(ue+1)+V*(re+1),Y=d+(ue+1)+V*re;l.push(fe,le,Y),l.push(le,N,Y),H+=6}a.addGroup(f,H,M),f+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let s in n)e[s]=n[s]}return e}function Wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Lt={clone:hr,merge:jt},Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Jt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new C,zd=new he,kd=new he,Ct=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,zd,kd),t.subVectors(kd,zd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,ao=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new Ct(qs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new Ct(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Ct(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new Ct(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Ct(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends It{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lo=class extends ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Nt});r.uniforms.tEquirect.value=t;let o=new We(s,r),a=t.minFilter;return t.minFilter===Mn&&(t.minFilter=xt),new ao(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},cc=new C,Yg=new C,Zg=new Je,nn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cc.subVectors(n,t).cross(Yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zg.getNormalMatrix(e),s=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new dn,la=new C,co=class{constructor(e=new nn,t=new nn,n=new nn,s=new nn,r=new nn,o=new nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+u,m+g,x+y).normalize(),n[3].setComponents(l-o,d-u,m-g,x-y).normalize(),n[4].setComponents(l-a,d-h,m-v,x-b).normalize(),t===pi)n[5].setComponents(l+a,d+h,m+v,x+b).normalize();else if(t===Ca)n[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fn=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let y=p*d-o;for(let b=0;b<c;b++){let x=b*h-r;g.push(x,-y,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let b=y+c*p,x=y+c*(p+1),I=y+1+c*(p+1),T=y+1+c*p;f.push(b,x,T),f.push(x,I,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
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
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cv=`#ifdef USE_IRIDESCENCE
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
#endif`,uv=`#ifdef USE_BUMPMAP
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
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yv=`#define PI 3.141592653589793
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
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mv=`vec3 transformedNormal = objectNormal;
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
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
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
}`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
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
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
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
#endif`,Zv=`struct PhysicalMaterial {
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
}`,jv=`
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$v=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rx=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,iy=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#define LAMBERT
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,vy=`#define PHONG
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
}`,xy=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,My=`#define TOON
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
}`,wy=`#define TOON
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
}`,by=`uniform float size;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 color;
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
}`,Ay=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Kg,alphahash_pars_fragment:Jg,alphamap_fragment:Qg,alphamap_pars_fragment:$g,alphatest_fragment:ev,alphatest_pars_fragment:tv,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:sv,batching_vertex:rv,begin_vertex:ov,beginnormal_vertex:av,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:uv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:vv,color_vertex:xv,common:yv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:Mv,displacementmap_pars_vertex:wv,displacementmap_vertex:bv,emissivemap_fragment:Sv,emissivemap_pars_fragment:Ev,colorspace_fragment:Tv,colorspace_pars_fragment:Av,envmap_fragment:Rv,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Pv,envmap_pars_vertex:Iv,envmap_physical_pars_fragment:Vv,envmap_vertex:Lv,fog_vertex:Dv,fog_pars_vertex:Nv,fog_fragment:Uv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Bv,lights_lambert_fragment:zv,lights_lambert_pars_fragment:kv,lights_pars_begin:Hv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:qv,lights_physical_fragment:Yv,lights_physical_pars_fragment:Zv,lights_fragment_begin:jv,lights_fragment_maps:Kv,lights_fragment_end:Jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:$v,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:ux,morphtarget_pars_vertex:hx,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:wx,opaque_fragment:bx,packing:Sx,premultiplied_alpha_fragment:Ex,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Nx,skinbase_vertex:Ux,skinning_pars_vertex:Ox,skinning_vertex:Fx,skinnormal_vertex:Bx,specularmap_fragment:zx,specularmap_pars_fragment:kx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Vx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:qx,uv_vertex:Yx,worldpos_vertex:Zx,background_vert:jx,background_frag:Kx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:$x,cube_frag:ey,depth_vert:ty,depth_frag:ny,distanceRGBA_vert:iy,distanceRGBA_frag:sy,equirect_vert:ry,equirect_frag:oy,linedashed_vert:ay,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:uy,meshlambert_vert:hy,meshlambert_frag:dy,meshmatcap_vert:fy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:vy,meshphong_frag:xy,meshphysical_vert:yy,meshphysical_frag:_y,meshtoon_vert:My,meshtoon_frag:wy,points_vert:by,points_frag:Sy,shadow_vert:Ey,shadow_frag:Ty,sprite_vert:Ay,sprite_frag:Ry},Re={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Yn={basic:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new se(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new se(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([Re.points,Re.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([Re.common,Re.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([Re.sprite,Re.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([Re.common,Re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([Re.lights,Re.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Yn.physical={uniforms:jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ca={r:0,b:0,g:0},cs=new bn,Cy=new Ve;function Py(i,e,t,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1,x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===$a)?(u===void 0&&(u=new We(new ms(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:hr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cs.copy(b.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(cs)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==ut,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new fn(2,2),new Oe({name:"BackgroundMaterial",uniforms:hr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(ca,Jf(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m}}function Iy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,L,D,F,z){let V=!1,k=h(F,D,L);r!==k&&(r=k,c(r.object)),V=f(_,F,D,z),V&&g(_,F,D,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(_,L,D,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,L,D){let F=D.wireframe===!0,z=n[_.id];z===void 0&&(z={},n[_.id]=z);let V=z[L.id];V===void 0&&(V={},z[L.id]=V);let k=V[F];return k===void 0&&(k=d(l()),V[F]=k),k}function d(_){let L=[],D=[],F=[];for(let z=0;z<t;z++)L[z]=0,D[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,L,D,F){let z=r.attributes,V=L.attributes,k=0,j=D.getAttributes();for(let H in j)if(j[H].location>=0){let re=z[H],ue=V[H];if(ue===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(_,L,D,F){let z={},V=L.attributes,k=0,j=D.getAttributes();for(let H in j)if(j[H].location>=0){let re=V[H];re===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));let ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),z[H]=ue,k++}r.attributes=z,r.attributesNum=k,r.index=F}function v(){let _=r.newAttributes;for(let L=0,D=_.length;L<D;L++)_[L]=0}function m(_){p(_,0)}function p(_,L){let D=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;D[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),z[_]!==L&&(i.vertexAttribDivisor(_,L),z[_]=L)}function y(){let _=r.newAttributes,L=r.enabledAttributes;for(let D=0,F=L.length;D<F;D++)L[D]!==_[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function b(_,L,D,F,z,V,k){k===!0?i.vertexAttribIPointer(_,L,D,z,V):i.vertexAttribPointer(_,L,D,F,z,V)}function x(_,L,D,F){v();let z=F.attributes,V=D.getAttributes(),k=L.defaultAttributeValues;for(let j in V){let H=V[j];if(H.location>=0){let G=z[j];if(G===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),G!==void 0){let re=G.normalized,ue=G.itemSize,fe=e.get(G);if(fe===void 0)continue;let le=fe.buffer,N=fe.type,Y=fe.bytesPerElement,te=N===i.INT||N===i.UNSIGNED_INT||G.gpuType===Hu;if(G.isInterleavedBufferAttribute){let q=G.data,K=q.stride,oe=G.offset;if(q.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe,q.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);i.bindBuffer(i.ARRAY_BUFFER,le);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ue/H.locationSize,N,re,K*Y,(oe+ue/H.locationSize*pe)*Y,te)}else{if(G.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)p(H.location+q,G.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let q=0;q<H.locationSize;q++)m(H.location+q);i.bindBuffer(i.ARRAY_BUFFER,le);for(let q=0;q<H.locationSize;q++)b(H.location+q,ue/H.locationSize,N,re,ue*Y,ue/H.locationSize*q*Y,te)}}else if(k!==void 0){let re=k[j];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}y()}function I(){A();for(let _ in n){let L=n[_];for(let D in L){let F=L[D];for(let z in F)u(F[z].object),delete F[z];delete L[D]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let L=n[_.id];for(let D in L){let F=L[D];for(let z in F)u(F[z].object),delete F[z];delete L[D]}delete n[_.id]}function w(_){for(let L in n){let D=n[L];if(D[_.id]===void 0)continue;let F=D[_.id];for(let z in F)u(F[z].object),delete F[z];delete D[_.id]}}function A(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Ly(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:I,maxSamples:T}}function Ny(i){let e=this,t=null,n=0,s=!1,r=!1,o=new nn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,b=y*4,x=p.clippingState||null;l.value=x,x=u(g,d,b,f);for(let I=0;I!==b;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==v;++b,x+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Uy(i){let e=new WeakMap;function t(o,a){return a===Ic?o.mapping=or:a===Lc&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ic||a===Lc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new lo(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Gi=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tr=4,Hd=[.125,.215,.35,.446,.526,.582],ds=20,uc=new Gi,Vd=new se,hc=null,dc=0,fc=0,pc=!1,hs=(1+Math.sqrt(5))/2,Zs=1/hs,Gd=[new C(-hs,Zs,0),new C(hs,Zs,0),new C(-Zs,0,hs),new C(Zs,0,hs),new C(0,hs,-Zs),new C(0,hs,Zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,dc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:yt,format:sn,colorSpace:qt,depthBuffer:!1},s=Wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Oy(r)),this._blurMaterial=Fy(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,s){let a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Vd),u.toneMapping=zi,u.autoClear=!1;let f=new Vt({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new We(new ms,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Vd),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;ua(s,y*b,p>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gd[(s-r-1)%Gd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new We(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let p=[],y=0;for(let w=0;w<ds;++w){let A=w/v,M=Math.exp(-A*A/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let x=this._sizeLods[s],I=3*x*(s>b-tr?s-b+tr:0),T=4*(this._cubeSize-x);ua(t,I,T,3*x,2*x),l.setRenderTarget(t),l.render(h,uc)}};function Oy(i){let e=[],t=[],n=[],s=i,r=i-tr+1+Hd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-tr?l=Hd[o-i+tr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,A=T>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(M,v*g*T),b.set(d,m*g*T);let _=[T,T,T,T,T,T];x.set(_,p*g*T)}let I=new Qe;I.setAttribute("position",new Xe(y,v)),I.setAttribute("uv",new Xe(b,m)),I.setAttribute("faceIndex",new Xe(x,p)),e.push(I),s>tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wd(i,e,t){let n=new ot(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fy(i,e,t){let n=new Float32Array(ds),s=new C(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Xd(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function qd(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}function By(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ic||l===Lc,u=l===or||l===ar;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new dr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ky(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let b=0,x=y.length;b<x;b+=3){let I=y[b+0],T=y[b+1],w=y[b+2];d.push(I,T,T,w,w,I)}}else if(g!==void 0){let y=g.array;v=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){let I=b+0,T=b+1,w=b+2;d.push(I,T,T,w,w,I)}}else return;let m=new(jf(d)?Da:La)(d,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gy(i,e,t){let n=new WeakMap,s=new it;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=a.attributes.position.count*b,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*I*4*h),w=new Ia(T,x,I,h);w.type=Fn,w.needsUpdate=!0;let A=b*4;for(let _=0;_<h;_++){let L=m[_],D=p[_],F=y[_],z=x*I*4*_;for(let V=0;V<L.count;V++){let k=V*A;f===!0&&(s.fromBufferAttribute(L,V),T[z+k+0]=s.x,T[z+k+1]=s.y,T[z+k+2]=s.z,T[z+k+3]=0),g===!0&&(s.fromBufferAttribute(D,V),T[z+k+4]=s.x,T[z+k+5]=s.y,T[z+k+6]=s.z,T[z+k+7]=0),v===!0&&(s.fromBufferAttribute(F,V),T[z+k+8]=s.x,T[z+k+9]=s.y,T[z+k+10]=s.z,T[z+k+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new he(x,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var fr=class extends It{constructor(e,t,n,s,r,o,a,l,c,u=nr){if(u!==nr&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===nr&&(n=fs),n===void 0&&u===Hi&&(n=ki),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$f=new It,Yd=new fr(1,1),ep=new Ia,tp=new ro,np=new Ua,Zd=[],jd=[],Kd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function il(i,e){let t=jd[e];t===void 0&&(t=new Int32Array(e),jd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function jy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),Ot(t,n)}}function Ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Jd.set(n),i.uniformMatrix3fv(this.addr,!1,Jd),Ot(t,n)}}function Jy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Kd.set(n),i.uniformMatrix4fv(this.addr,!1,Kd),Ot(t,n)}}function Qy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yd.compareFunction=Yf,r=Yd):r=$f,t.setTexture2D(e||r,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tp,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||np,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ep,s)}function u_(i){switch(i){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return Zy;case 35674:return jy;case 35675:return Ky;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return $y;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function h_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function f_(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function p_(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function m_(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g_(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function M_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function b_(i,e){i.uniform2uiv(this.addr,e)}function S_(i,e){i.uniform3uiv(this.addr,e)}function E_(i,e){i.uniform4uiv(this.addr,e)}function T_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$f,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function R_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function C_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function P_(i){switch(i){case 5126:return h_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return __;case 35669:case 35673:return M_;case 5125:return w_;case 36294:return b_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}var lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function $d(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),o=mc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$d(t,c===void 0?new lu(a,i,e):new cu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new uu(a),$d(t,h)),t=h}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);I_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L_=37297,D_=0;function N_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var tf=new Je;function U_(i){et._getMatrix(tf,et.workingColorSpace,i);let e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case nl:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N_(i.getShaderSource(e),o)}else return s}function O_(i,e){let t=U_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function F_(i,e){let t;switch(e){case Nu:t="Linear";break;case Uu:t="Reinhard";break;case Ou:t="Cineon";break;case xo:t="ACESFilmic";break;case Fu:t="AgX";break;case Bu:t="Neutral";break;case $0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ha=new C;function B_(){et.getLuminanceCoefficients(ha);let i=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function k_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jr(i){return i!==""}function sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(V_,W_)}var G_=new Map;function W_(i,e){let t=$e[e];if(t===void 0){let n=G_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}var X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(X_,q_)}function q_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Y_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ar&&(e="ENVMAP_MODE_REFRACTION"),e}function K_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Of:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function J_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Y_(t),c=Z_(t),u=j_(t),h=K_(t),d=J_(t),f=z_(t),g=k_(r),v=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?$e.tonemapping_pars_fragment:"",t.toneMapping!==zi?F_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),B_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=hu(o),o=sf(o,t),o=rf(o,t),a=hu(a),a=sf(a,t),a=rf(a,t),o=of(o),a=of(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,x=y+p+a,I=ef(s,s.VERTEX_SHADER,b),T=ef(s,s.FRAGMENT_SHADER,x);s.attachShader(v,I),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(T).trim(),V=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,T);else{let j=nf(s,I,"vertex"),H=nf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+j+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||z==="")&&(k=!1);k&&(L.diagnostics={runnable:V,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(T),A=new sr(s,v),M=H_(s,v)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,L_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=T,this}var $_=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fu(e),t.set(e,n)),n}},fu=class{constructor(e){this.id=$_++,this.code=e,this.usedTimes=0}};function eM(i,e,t,n,s,r,o){let a=new oo,l=new du,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,L,D,F){let z=D.fog,V=F.geometry,k=M.isMeshStandardMaterial?D.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),H=j&&j.mapping===$a?j.image.height:null,G=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=re!==void 0?re.length:0,fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let le,N,Y,te;if(G){let at=Yn[G];le=at.vertexShader,N=at.fragmentShader}else le=M.vertexShader,N=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);let q=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,Ae=!!M.map,we=!!M.matcap,ve=!!j,O=!!M.aoMap,Ie=!!M.lightMap,_e=!!M.bumpMap,Se=!!M.normalMap,ne=!!M.displacementMap,De=!!M.emissiveMap,me=!!M.metalnessMap,P=!!M.roughnessMap,S=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,ie=M.iridescence>0,J=M.sheen>0,Ee=M.transmission>0,ge=S&&!!M.anisotropyMap,xe=B&&!!M.clearcoatMap,Ne=B&&!!M.clearcoatNormalMap,ae=B&&!!M.clearcoatRoughnessMap,ye=ie&&!!M.iridescenceMap,Ue=ie&&!!M.iridescenceThicknessMap,Be=J&&!!M.sheenColorMap,Te=J&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Fe=!!M.specularColorMap,Me=!!M.specularIntensityMap,U=Ee&&!!M.transmissionMap,de=Ee&&!!M.thicknessMap,Q=!!M.gradientMap,ce=!!M.alphaMap,Ce=M.alphaTest>0,Pe=!!M.alphaHash,Ze=!!M.extensions,dt=zi;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(dt=i.toneMapping);let Bt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:N,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:qt,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:we,envMap:ve,envMapMode:ve&&j.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Ie,bumpMap:_e,normalMap:Se,displacementMap:d&&ne,emissiveMap:De,normalMapObjectSpace:Se&&M.normalMapType===sg,normalMapTangentSpace:Se&&M.normalMapType===Zu,metalnessMap:me,roughnessMap:P,anisotropy:S,anisotropyMap:ge,clearcoat:B,clearcoatMap:xe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ae,dispersion:Z,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:Ue,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Te,specularMap:qe,specularColorMap:Fe,specularIntensityMap:Me,transmission:Ee,transmissionMap:U,thicknessMap:de,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Bn&&M.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ce,alphaHash:Pe,combine:M.combine,mapUv:Ae&&v(M.map.channel),aoMapUv:O&&v(M.aoMap.channel),lightMapUv:Ie&&v(M.lightMap.channel),bumpMapUv:_e&&v(M.bumpMap.channel),normalMapUv:Se&&v(M.normalMap.channel),displacementMapUv:ne&&v(M.displacementMap.channel),emissiveMapUv:De&&v(M.emissiveMap.channel),metalnessMapUv:me&&v(M.metalnessMap.channel),roughnessMapUv:P&&v(M.roughnessMap.channel),anisotropyMapUv:ge&&v(M.anisotropyMap.channel),clearcoatMapUv:xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(M.sheenRoughnessMap.channel),specularMapUv:qe&&v(M.specularMap.channel),specularColorMapUv:Fe&&v(M.specularColorMap.channel),specularIntensityMapUv:Me&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:de&&v(M.thicknessMap.channel),alphaMapUv:ce&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Se||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Ae||ce),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:K,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)_.push(L),_.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(_,M),b(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function b(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let _=g[M.type],L;if(_){let D=Yn[_];L=Lt.clone(D.uniforms)}else L=M.uniforms;return L}function I(M,_){let L;for(let D=0,F=u.length;D<F;D++){let z=u[D];if(z.cacheKey===_){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Q_(i,_,M,r),u.push(L)),L}function T(M){if(--M.usedTimes===0){let _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:A}}function tM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||nM),n.length>1&&n.sort(d||lf),s.length>1&&s.sort(d||lf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function iM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new se};break;case"SpotLight":t={position:new C,direction:new C,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function rM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var oM=0;function aM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lM(i){let e=new sM,t=rM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,b=0,x=0,I=0,T=0,w=0;c.sort(aM);for(let M=0,_=c.length;M<_;M++){let L=c[M],D=L.color,F=L.intensity,z=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*F,h+=D.g*F,d+=D.b*F;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],F);w++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=k,f++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(D).multiplyScalar(F),k.distance=z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[v]=k;let j=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=V,x++}v++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(D).multiplyScalar(F),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let j=L.shadow,H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=k,g++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(F),k.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==I||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=I,A.numLightProbes=w,n.version=oM++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function uf(i){let e=new lM(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new uf(i),e.set(s,[a])):r>=o.length?(a=new uf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var pu=class extends Jt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mu=class extends Jt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`;function dM(i,e,t){let n=new co,s=new he,r=new he,o=new it,a=new pu({depthPacking:ig}),l=new mu,c={},u=t.maxTextureSize,h={[Et]:Tt,[Tt]:Et,[Pt]:Pt},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(T,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Nt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==di&&this.type===di,z=p===di&&this.type!==di;for(let V=0,k=T.length;V<k;V++){let j=T[V],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let G=H.getFrameExtents();if(s.multiply(G),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,H.mapSize.y=r.y)),H.map===null||F===!0||z===!0){let ue=this.type!==di?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new ot(s.x,s.y,ue),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let re=H.getViewportCount();for(let ue=0;ue<re;ue++){let fe=H.getViewport(ue);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),D.viewport(o),H.updateMatrices(j,ue),n=H.getFrustum(),x(w,A,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===di&&y(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,L)};function y(T,w){let A=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ot(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,A,f,v,null)}function b(T,w,A,M){let _=null,L=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)_=L;else if(_=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=_.uuid,F=w.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let V=z[F];V===void 0&&(V=_.clone(),z[F]=V,w.addEventListener("dispose",I)),_=V}if(_.visible=w.visible,_.wireframe=w.wireframe,M===di?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let D=i.properties.get(_);D.light=A}return _}function x(T,w,A,M,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===di)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let F=e.update(T),z=T.material;if(Array.isArray(z)){let V=F.groups;for(let k=0,j=V.length;k<j;k++){let H=V[k],G=z[H.materialIndex];if(G&&G.visible){let re=b(T,G,M,_);T.onBeforeShadow(i,T,w,A,F,re,H),i.renderBufferDirect(A,null,F,re,T,H),T.onAfterShadow(i,T,w,A,F,re,H)}}}else if(z.visible){let V=b(T,z,M,_);T.onBeforeShadow(i,T,w,A,F,V,null),i.renderBufferDirect(A,null,F,V,T,null),T.onAfterShadow(i,T,w,A,F,V,null)}}let D=T.children;for(let F=0,z=D.length;F<z;F++)x(D[F],w,A,M,_)}function I(T){T.target.removeEventListener("dispose",I);for(let A in c){let M=c[A],_=T.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var fM={[Sc]:Ec,[Tc]:Cc,[Ac]:Pc,[rr]:Rc,[Ec]:Sc,[Cc]:Tc,[Pc]:Ac,[Rc]:rr};function pM(i,e){function t(){let U=!1,de=new it,Q=null,ce=new it(0,0,0,0);return{setMask:function(Ce){Q!==Ce&&!U&&(i.colorMask(Ce,Ce,Ce,Ce),Q=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,Pe,Ze,dt,Bt){Bt===!0&&(Ce*=dt,Pe*=dt,Ze*=dt),de.set(Ce,Pe,Ze,dt),ce.equals(de)===!1&&(i.clearColor(Ce,Pe,Ze,dt),ce.copy(de))},reset:function(){U=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,Q=null,ce=null,Ce=null;return{setReversed:function(Pe){if(de!==Pe){let Ze=e.get("EXT_clip_control");de?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);let dt=Ce;Ce=null,this.setClear(dt)}de=Pe},getReversed:function(){return de},setTest:function(Pe){Pe?q(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!U&&(i.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(de&&(Pe=fM[Pe]),ce!==Pe){switch(Pe){case Sc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Ce!==Pe&&(de&&(Pe=1-Pe),i.clearDepth(Pe),Ce=Pe)},reset:function(){U=!1,Q=null,ce=null,Ce=null,de=!1}}}function s(){let U=!1,de=null,Q=null,ce=null,Ce=null,Pe=null,Ze=null,dt=null,Bt=null;return{setTest:function(at){U||(at?q(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(at){de!==at&&!U&&(i.stencilMask(at),de=at)},setFunc:function(at,en,In){(Q!==at||ce!==en||Ce!==In)&&(i.stencilFunc(at,en,In),Q=at,ce=en,Ce=In)},setOp:function(at,en,In){(Pe!==at||Ze!==en||dt!==In)&&(i.stencilOp(at,en,In),Pe=at,Ze=en,dt=In)},setLocked:function(at){U=at},setClear:function(at){Bt!==at&&(i.clearStencil(at),Bt=at)},reset:function(){U=!1,de=null,Q=null,ce=null,Ce=null,Pe=null,Ze=null,dt=null,Bt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,I=null,T=null,w=new se(0,0,0),A=0,M=!1,_=null,L=null,D=null,F=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=j>=2);let G=null,re={},ue=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),le=new it().fromArray(ue),N=new it().fromArray(fe);function Y(U,de,Q,ce){let Ce=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(U,Pe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Q;Ze++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(de+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Pe}let te={};te[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(rr),_e(!1),Se(fd),q(i.CULL_FACE),O(Nt);function q(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function K(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function oe(U,de){return h[U]!==de?(i.bindFramebuffer(U,de),h[U]=de,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function pe(U,de){let Q=f,ce=!1;if(U){Q=d.get(de),Q===void 0&&(Q=[],d.set(de,Q));let Ce=U.textures;if(Q.length!==Ce.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Ze=Ce.length;Pe<Ze;Pe++)Q[Pe]=i.COLOR_ATTACHMENT0+Pe;Q.length=Ce.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function Ae(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let we={[_n]:i.FUNC_ADD,[F0]:i.FUNC_SUBTRACT,[B0]:i.FUNC_REVERSE_SUBTRACT};we[z0]=i.MIN,we[k0]=i.MAX;let ve={[yr]:i.ZERO,[H0]:i.ONE,[V0]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[q0]:i.SRC_ALPHA_SATURATE,[Qa]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[G0]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[X0]:i.ONE_MINUS_DST_COLOR,[W0]:i.ONE_MINUS_DST_ALPHA,[Y0]:i.CONSTANT_COLOR,[Z0]:i.ONE_MINUS_CONSTANT_COLOR,[j0]:i.CONSTANT_ALPHA,[K0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(U,de,Q,ce,Ce,Pe,Ze,dt,Bt,at){if(U===Nt){v===!0&&(K(i.BLEND),v=!1);return}if(v===!1&&(q(i.BLEND),v=!0),U!==Du){if(U!==m||at!==M){if((p!==_n||x!==_n)&&(i.blendEquation(i.FUNC_ADD),p=_n,x=_n),at)switch(U){case Bn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,b=null,I=null,T=null,w.set(0,0,0),A=0,m=U,M=at}return}Ce=Ce||de,Pe=Pe||Q,Ze=Ze||ce,(de!==p||Ce!==x)&&(i.blendEquationSeparate(we[de],we[Ce]),p=de,x=Ce),(Q!==y||ce!==b||Pe!==I||Ze!==T)&&(i.blendFuncSeparate(ve[Q],ve[ce],ve[Pe],ve[Ze]),y=Q,b=ce,I=Pe,T=Ze),(dt.equals(w)===!1||Bt!==A)&&(i.blendColor(dt.r,dt.g,dt.b,Bt),w.copy(dt),A=Bt),m=U,M=!1}function Ie(U,de){U.side===Pt?K(i.CULL_FACE):q(i.CULL_FACE);let Q=U.side===Tt;de&&(Q=!Q),_e(Q),U.blending===Bn&&U.transparent===!1?O(Nt):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ce=U.stencilWrite;a.setTest(ce),ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function Se(U){U!==U0?(q(i.CULL_FACE),U!==L&&(U===fd?i.cullFace(i.BACK):U===O0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),L=U}function ne(U){U!==D&&(k&&i.lineWidth(U),D=U)}function De(U,de,Q){U?(q(i.POLYGON_OFFSET_FILL),(F!==de||z!==Q)&&(i.polygonOffset(de,Q),F=de,z=Q)):K(i.POLYGON_OFFSET_FILL)}function me(U){U?q(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+V-1),G!==U&&(i.activeTexture(U),G=U)}function S(U,de,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+V-1:Q=G);let ce=re[Q];ce===void 0&&(ce={type:void 0,texture:void 0},re[Q]=ce),(ce.type!==U||ce.texture!==de)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(U,de||te[U]),ce.type=U,ce.texture=de)}function B(){let U=re[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){le.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function Te(U){N.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),N.copy(U))}function qe(U,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let ce=Q.get(U);ce===void 0&&(ce=i.getUniformBlockIndex(de,U.name),Q.set(U,ce))}function Fe(U,de){let ce=c.get(de).get(U);l.get(de)!==ce&&(i.uniformBlockBinding(de,ce,U.__bindingPointIndex),l.set(de,ce))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},G=null,re={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,I=null,T=null,w=new se(0,0,0),A=0,M=!1,_=null,L=null,D=null,F=null,z=null,le.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:K,bindFramebuffer:oe,drawBuffers:pe,useProgram:Ae,setBlending:O,setMaterial:Ie,setFlipSided:_e,setCullFace:Se,setLineWidth:ne,setPolygonOffset:De,setScissorTest:me,activeTexture:P,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:Ne,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Be,viewport:Te,reset:Me}}function hf(i,e,t,n){let s=mM(n);switch(t){case Hf:return i*e;case Gf:return i*e;case Wf:return i*e*2;case Wu:return i*e/s.components*s.byteLength;case Xu:return i*e/s.components*s.byteLength;case el:return i*e*2/s.components*s.byteLength;case qu:return i*e*2/s.components*s.byteLength;case Vf:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case Yu:return i*e*4/s.components*s.byteLength;case wa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(i,16)*Math.max(e,8)/4;case Dc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xf:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case iu:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mM(i){switch(i){case hn:case Bf:return{byteLength:1,components:1};case io:case zf:case yt:return{byteLength:2,components:1};case Vu:case Gu:return{byteLength:2,components:4};case fs:case Hu:case Fn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):so("canvas")}function v(P,S,B){let Z=1,ie=me(P);if((ie.width>B||ie.height>B)&&(Z=B/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(Z*ie.width),Ee=Math.floor(Z*ie.height);h===void 0&&(h=g(J,Ee));let ge=S?g(J,Ee):h;return ge.width=J,ge.height=Ee,ge.getContext("2d").drawImage(P,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ee+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,S,B,Z,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=S;if(S===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),S===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let Ee=ie?nl:et.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ee===ut?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,S){let B;return P?S===null||S===fs||S===ki?B=i.DEPTH24_STENCIL8:S===Fn?B=i.DEPTH32F_STENCIL8:S===io&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fs||S===ki?B=i.DEPTH_COMPONENT24:S===Fn?B=i.DEPTH_COMPONENT32F:S===io&&(B=i.DEPTH_COMPONENT16),B}function I(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==At&&P.minFilter!==xt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){let S=P.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&u.delete(S)}function w(P){let S=P.target;S.removeEventListener("dispose",w),_(S)}function A(P){let S=n.get(P);if(S.__webglInit===void 0)return;let B=P.source,Z=d.get(B);if(Z){let ie=Z[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(P),Object.keys(Z).length===0&&d.delete(B)}n.remove(P)}function M(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let B=P.source,Z=d.get(B);delete Z[S.__cacheKey],o.memory.textures--}function _(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ie=0;ie<S.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=P.textures;for(let Z=0,ie=B.length;Z<ie;Z++){let J=n.get(B[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(P)}let L=0;function D(){L=0}function F(){let P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function z(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function V(P,S){let B=n.get(P);if(P.isVideoTexture&&ne(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(B,P,S);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function k(P,S){let B=n.get(P);if(P.version>0&&B.__version!==P.version){N(B,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function j(P,S){let B=n.get(P);if(P.version>0&&B.__version!==P.version){N(B,P,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function H(P,S){let B=n.get(P);if(P.version>0&&B.__version!==P.version){Y(B,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let G={[bt]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},re={[At]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[xt]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},ue={[rg]:i.NEVER,[hg]:i.ALWAYS,[og]:i.LESS,[Yf]:i.LEQUAL,[ag]:i.EQUAL,[ug]:i.GEQUAL,[lg]:i.GREATER,[cg]:i.NOTEQUAL};function fe(P,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===xt||S.magFilter===Qr||S.magFilter===er||S.magFilter===Mn||S.minFilter===xt||S.minFilter===Qr||S.minFilter===er||S.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,G[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,re[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===At||S.minFilter!==er&&S.minFilter!==Mn||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(P,S){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));let Z=S.source,ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));let J=z(S);if(J!==P.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[J].usedTimes++;let Ee=ie[P.__cacheKey];Ee!==void 0&&(ie[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(S)),P.__cacheKey=J,P.__webglTexture=ie[J].texture}return B}function N(P,S,B){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);let ie=le(P,S),J=S.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+B);let Ee=n.get(J);if(J.version!==Ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let ge=et.getPrimaries(et.workingColorSpace),xe=S.colorSpace===Oi?null:et.getPrimaries(S.colorSpace),Ne=S.colorSpace===Oi||ge===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=v(S.image,!1,s.maxTextureSize);ae=De(S,ae);let ye=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type),Be=b(S.internalFormat,ye,Ue,S.colorSpace,S.isVideoTexture);fe(Z,S);let Te,qe=S.mipmaps,Fe=S.isVideoTexture!==!0,Me=Ee.__version===void 0||ie===!0,U=J.dataReady,de=I(S,ae);if(S.isDepthTexture)Be=x(S.format===Hi,S.type),Me&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Be,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Be,ae.width,ae.height,0,ye,Ue,null));else if(S.isDataTexture)if(qe.length>0){Fe&&Me&&t.texStorage2D(i.TEXTURE_2D,de,Be,qe[0].width,qe[0].height);for(let Q=0,ce=qe.length;Q<ce;Q++)Te=qe[Q],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,ye,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,Q,Be,Te.width,Te.height,0,ye,Ue,Te.data);S.generateMipmaps=!1}else Fe?(Me&&t.texStorage2D(i.TEXTURE_2D,de,Be,ae.width,ae.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,ye,Ue,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ae.width,ae.height,0,ye,Ue,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Be,qe[0].width,qe[0].height,ae.depth);for(let Q=0,ce=qe.length;Q<ce;Q++)if(Te=qe[Q],S.format!==sn)if(ye!==null)if(Fe){if(U)if(S.layerUpdates.size>0){let Ce=hf(Te.width,Te.height,S.format,S.type);for(let Pe of S.layerUpdates){let Ze=Te.data.subarray(Pe*Ce/Te.data.BYTES_PER_ELEMENT,(Pe+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Pe,Te.width,Te.height,1,ye,Ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ae.depth,ye,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Be,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ae.depth,ye,Ue,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Be,Te.width,Te.height,ae.depth,0,ye,Ue,Te.data)}else{Fe&&Me&&t.texStorage2D(i.TEXTURE_2D,de,Be,qe[0].width,qe[0].height);for(let Q=0,ce=qe.length;Q<ce;Q++)Te=qe[Q],S.format!==sn?ye!==null?Fe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,ye,Ue,Te.data):t.texImage2D(i.TEXTURE_2D,Q,Be,Te.width,Te.height,0,ye,Ue,Te.data)}else if(S.isDataArrayTexture)if(Fe){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Be,ae.width,ae.height,ae.depth),U)if(S.layerUpdates.size>0){let Q=hf(ae.width,ae.height,S.format,S.type);for(let ce of S.layerUpdates){let Ce=ae.data.subarray(ce*Q/ae.data.BYTES_PER_ELEMENT,(ce+1)*Q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ae.width,ae.height,1,ye,Ue,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,Ue,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ae.width,ae.height,ae.depth,0,ye,Ue,ae.data);else if(S.isData3DTexture)Fe?(Me&&t.texStorage3D(i.TEXTURE_3D,de,Be,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,Ue,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ae.width,ae.height,ae.depth,0,ye,Ue,ae.data);else if(S.isFramebufferTexture){if(Me)if(Fe)t.texStorage2D(i.TEXTURE_2D,de,Be,ae.width,ae.height);else{let Q=ae.width,ce=ae.height;for(let Ce=0;Ce<de;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Be,Q,ce,0,ye,Ue,null),Q>>=1,ce>>=1}}else if(qe.length>0){if(Fe&&Me){let Q=me(qe[0]);t.texStorage2D(i.TEXTURE_2D,de,Be,Q.width,Q.height)}for(let Q=0,ce=qe.length;Q<ce;Q++)Te=qe[Q],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ye,Ue,Te):t.texImage2D(i.TEXTURE_2D,Q,Be,ye,Ue,Te);S.generateMipmaps=!1}else if(Fe){if(Me){let Q=me(ae);t.texStorage2D(i.TEXTURE_2D,de,Be,Q.width,Q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ue,ae)}else t.texImage2D(i.TEXTURE_2D,0,Be,ye,Ue,ae);m(S)&&p(Z),Ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Y(P,S,B){if(S.image.length!==6)return;let Z=le(P,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);let J=n.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);let Ee=et.getPrimaries(et.workingColorSpace),ge=S.colorSpace===Oi?null:et.getPrimaries(S.colorSpace),xe=S.colorSpace===Oi||Ee===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ce=0;ce<6;ce++)!Ne&&!ae?ye[ce]=v(S.image[ce],!0,s.maxCubemapSize):ye[ce]=ae?S.image[ce].image:S.image[ce],ye[ce]=De(S,ye[ce]);let Ue=ye[0],Be=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),qe=b(S.internalFormat,Be,Te,S.colorSpace),Fe=S.isVideoTexture!==!0,Me=J.__version===void 0||Z===!0,U=ie.dataReady,de=I(S,Ue);fe(i.TEXTURE_CUBE_MAP,S);let Q;if(Ne){Fe&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){Q=ye[ce].mipmaps;for(let Ce=0;Ce<Q.length;Ce++){let Pe=Q[Ce];S.format!==sn?Be!==null?Fe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,qe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,Pe.width,Pe.height,Be,Te,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,qe,Pe.width,Pe.height,0,Be,Te,Pe.data)}}}else{if(Q=S.mipmaps,Fe&&Me){Q.length>0&&de++;let ce=me(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ae){Fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye[ce].width,ye[ce].height,Be,Te,ye[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,ye[ce].width,ye[ce].height,0,Be,Te,ye[ce].data);for(let Ce=0;Ce<Q.length;Ce++){let Ze=Q[Ce].image[ce].image;Fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Ze.width,Ze.height,Be,Te,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,qe,Ze.width,Ze.height,0,Be,Te,Ze.data)}}else{Fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Be,Te,ye[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Be,Te,ye[ce]);for(let Ce=0;Ce<Q.length;Ce++){let Pe=Q[Ce];Fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Be,Te,Pe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,qe,Be,Te,Pe.image[ce])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),J.__version=ie.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function te(P,S,B,Z,ie,J){let Ee=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),xe=b(B.internalFormat,Ee,ge,B.colorSpace),Ne=n.get(S),ae=n.get(B);if(ae.__renderTarget=S,!Ne.__hasExternalTextures){let ye=Math.max(1,S.width>>J),Ue=Math.max(1,S.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,xe,ye,Ue,S.depth,0,Ee,ge,null):t.texImage2D(ie,J,xe,ye,Ue,0,Ee,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,0,_e(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let Z=S.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=x(S.stencilBuffer,ie),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=_e(S);Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,J,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,P)}else{let Z=S.textures;for(let ie=0;ie<Z.length;ie++){let J=Z[ie],Ee=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),xe=b(J.internalFormat,Ee,ge,J.colorSpace),Ne=_e(S);B&&Se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,xe,S.width,S.height):Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let ie=Z.__webglTexture,J=_e(S);if(S.depthTexture.format===nr)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Hi)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function oe(P){let S=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");K(S.__webglFramebuffer,P)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),q(S.__webglDepthbuffer[Z],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),q(S.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(P,S,B){let Z=n.get(P);S!==void 0&&te(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&oe(P)}function Ae(P){let S=P.texture,B=n.get(P),Z=n.get(S);P.addEventListener("dispose",w);let ie=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let xe=0;xe<S.mipmaps.length;xe++)B.__webglFramebuffer[ge][xe]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ge=0,xe=ie.length;ge<xe;ge++){let Ne=n.get(ie[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Se(P)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){let xe=ie[ge];B.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);let Ne=r.convert(xe.format,xe.colorSpace),ae=r.convert(xe.type),ye=b(xe.internalFormat,Ne,ae,xe.colorSpace,P.isXRRenderTarget===!0),Ue=_e(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),q(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)te(B.__webglFramebuffer[ge][xe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else te(B.__webglFramebuffer[ge],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ge=0,xe=ie.length;ge<xe;ge++){let Ne=ie[ge],ae=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),fe(i.TEXTURE_2D,Ne),te(B.__webglFramebuffer,P,Ne,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Ne)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),fe(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)te(B.__webglFramebuffer[xe],P,S,i.COLOR_ATTACHMENT0,ge,xe);else te(B.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ge,0);m(S)&&p(ge),t.unbindTexture()}P.depthBuffer&&oe(P)}function we(P){let S=P.textures;for(let B=0,Z=S.length;B<Z;B++){let ie=S[B];if(m(ie)){let J=y(P),Ee=n.get(ie).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}let ve=[],O=[];function Ie(P){if(P.samples>0){if(Se(P)===!1){let S=P.textures,B=P.width,Z=P.height,ie=i.COLOR_BUFFER_BIT,J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),ge=S.length>1;if(ge)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);let Ne=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ie,i.NEAREST),l===!0&&(ve.length=0,O.length=0,ve.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ve.push(J),O.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);let Ne=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function _e(P){return Math.min(s.maxSamples,P.samples)}function Se(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ne(P){let S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function De(P,S){let B=P.colorSpace,Z=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==qt&&B!==Oi&&(et.getTransfer(B)===ut?(Z!==sn||ie!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Se}function vM(i,e){function t(n,s=Oi){let r,o=et.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Vu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bf)return i.BYTE;if(n===zf)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Hu)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===yt)return i.HALF_FLOAT;if(n===Hf)return i.ALPHA;if(n===Vf)return i.RGB;if(n===sn)return i.RGBA;if(n===Gf)return i.LUMINANCE;if(n===Wf)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Wu)return i.RED;if(n===Xu)return i.RED_INTEGER;if(n===el)return i.RG;if(n===qu)return i.RG_INTEGER;if(n===Yu)return i.RGBA_INTEGER;if(n===wa||n===ba||n===Sa||n===Ea)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Bc||n===zc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fc||n===Bc)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===jc||n===Kc||n===Jc||n===Qc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===eu||n===tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===nu||n===iu||n===su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gu=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},xM={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Oe({vertexShader:yM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,v=new vu,m=t.getContextAttributes(),p=null,y=null,b=[],x=[],I=new he,T=null,w=new Ct;w.viewport=new it;let A=new Ct;A.viewport=new it;let M=[w,A],_=new gu,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=b[N];return Y===void 0&&(Y=new to,b[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=b[N];return Y===void 0&&(Y=new to,b[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=b[N];return Y===void 0&&(Y=new to,b[N]=Y),Y.getHandSpace()};function F(N){let Y=x.indexOf(N.inputSource);if(Y===-1)return;let te=b[Y];te!==void 0&&(te.update(N.inputSource,N.frame,c||o),te.dispatchEvent({type:N.type,data:N.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let N=0;N<b.length;N++){let Y=x[N];Y!==null&&(x[N]=null,b[N].disconnect(Y))}L=null,D=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ot(f.framebufferWidth,f.framebufferHeight,{format:sn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,te=null,q=null;m.depth&&(q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Hi:nr,te=m.stencil?ki:fs);let K={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(K),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ot(d.textureWidth,d.textureHeight,{format:sn,type:hn,depthTexture:new fr(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(N){for(let Y=0;Y<N.removed.length;Y++){let te=N.removed[Y],q=x.indexOf(te);q>=0&&(x[q]=null,b[q].disconnect(te))}for(let Y=0;Y<N.added.length;Y++){let te=N.added[Y],q=x.indexOf(te);if(q===-1){for(let oe=0;oe<b.length;oe++)if(oe>=x.length){x.push(te),q=oe;break}else if(x[oe]===null){x[oe]=te,q=oe;break}if(q===-1)break}let K=b[q];K&&K.connect(te)}}let k=new C,j=new C;function H(N,Y,te){k.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);let q=k.distanceTo(j),K=Y.projectionMatrix.elements,oe=te.projectionMatrix.elements,pe=K[14]/(K[10]-1),Ae=K[14]/(K[10]+1),we=(K[9]+1)/K[5],ve=(K[9]-1)/K[5],O=(K[8]-1)/K[0],Ie=(oe[8]+1)/oe[0],_e=pe*O,Se=pe*Ie,ne=q/(-O+Ie),De=ne*-O;if(Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(De),N.translateZ(ne),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),K[10]===-1)N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let me=pe+ne,P=Ae+ne,S=_e-De,B=Se+(q-De),Z=we*Ae/P*me,ie=ve*Ae/P*me;N.projectionMatrix.makePerspective(S,B,Z,ie,me,P),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function G(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let Y=N.near,te=N.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(te=v.depthFar)),_.near=A.near=w.near=Y,_.far=A.far=w.far=te,(L!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,D=_.far),w.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,_.layers.mask=w.layers.mask|A.layers.mask;let q=N.parent,K=_.cameras;G(_,q);for(let oe=0;oe<K.length;oe++)G(K[oe],q);K.length===2?H(_,w,A):_.projectionMatrix.copy(w.projectionMatrix),re(N,_,q)};function re(N,Y,te){te===null?N.matrix.copy(Y.matrixWorld):(N.matrix.copy(te.matrixWorld),N.matrix.invert(),N.matrix.multiply(Y.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ur*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ue=null;function fe(N,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){let te=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let q=!1;te.length!==_.cameras.length&&(_.cameras.length=0,q=!0);for(let oe=0;oe<te.length;oe++){let pe=te[oe],Ae=null;if(f!==null)Ae=f.getViewport(pe);else{let ve=h.getViewSubImage(d,pe);Ae=ve.viewport,oe===0&&(e.setRenderTargetTextures(y,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(y))}let we=M[oe];we===void 0&&(we=new Ct,we.layers.enable(oe),we.viewport=new it,M[oe]=we),we.matrix.fromArray(pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),oe===0&&(_.matrix.copy(we.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),q===!0&&_.cameras.push(we)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let oe=h.getDepthInformation(te[0]);oe&&oe.isValid&&oe.texture&&v.init(e,oe,s.renderState)}}for(let te=0;te<b.length;te++){let q=x[te],K=b[te];q!==null&&K!==void 0&&K.update(q,Y,c||o)}ue&&ue(N,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let le=new Qf;le.setAnimationLoop(fe),this.setAnimationLoop=function(N){ue=N},this.dispose=function(){}}},us=new bn,MM=new Ve;function wM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,us.copy(x),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(us)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(y,I);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){let b=h();y.__bindingPointIndex=b;let x=i.createBuffer(),I=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=s[y.id],x=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,w=x.length;T<w;T++){let A=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,_=A.length;M<_;M++){let L=A[M];if(f(L,T,M,I)===!0){let D=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],z=0;for(let V=0;V<F.length;V++){let k=F[V],j=v(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+z,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,x,I){let T=y.value,w=b+"_"+x;if(I[w]===void 0)return typeof T=="number"||typeof T=="boolean"?I[w]=T:I[w]=T.clone(),!0;{let A=I[w];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return I[w]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(y){let b=y.uniforms,x=0,I=16;for(let w=0,A=b.length;w<A;w++){let M=Array.isArray(b[w])?b[w]:[b[w]];for(let _=0,L=M.length;_<L;_++){let D=M[_],F=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=F.length;z<V;z++){let k=F[z],j=v(k),H=x%I,G=H%j.boundary,re=H+G;x+=G,re!==0&&I-re<j.storage&&(x+=I-re),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=j.storage}}}let T=x%I;return T>0&&(x+=I-T),y.__size=x,y.__cache={},this}function v(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Oa=class{constructor(e={}){let{canvas:t=Rg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=zi,this.toneMappingExposure=1;let x=this,I=!1,T=0,w=0,A=null,M=-1,_=null,L=new it,D=new it,F=null,z=new se(0),V=0,k=t.width,j=t.height,H=1,G=null,re=null,ue=new it(0,0,k,j),fe=new it(0,0,k,j),le=!1,N=new co,Y=!1,te=!1,q=new Ve,K=new Ve,oe=new C,pe=new it,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function ve(){return A===null?H:1}let O=n;function Ie(R,W){return t.getContext(R,W)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){let W="webgl2";if(O=Ie(W,R),O===null)throw Ie(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _e,Se,ne,De,me,P,S,B,Z,ie,J,Ee,ge,xe,Ne,ae,ye,Ue,Be,Te,qe,Fe,Me,U;function de(){_e=new zy(O),_e.init(),Fe=new vM(O,_e),Se=new Dy(O,_e,e,Fe),ne=new pM(O,_e),Se.reverseDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),De=new Vy(O),me=new tM,P=new gM(O,_e,ne,me,Se,Fe,De),S=new Uy(x),B=new By(x),Z=new jg(O),Me=new Iy(O,Z),ie=new ky(O,Z,De,Me),J=new Wy(O,ie,Z,De),Be=new Gy(O,Se,P),ae=new Ny(me),Ee=new eM(x,S,B,_e,Se,Me,ae),ge=new wM(x,me),xe=new iM,Ne=new cM(_e),Ue=new Py(x,S,B,ne,J,f,l),ye=new dM(x,J,Se),U=new bM(O,De,Se,ne),Te=new Ly(O,_e,De),qe=new Hy(O,_e,De),De.programs=Ee.programs,x.capabilities=Se,x.extensions=_e,x.properties=me,x.renderLists=xe,x.shadowMap=ye,x.state=ne,x.info=De}de();let Q=new xu(x,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(k,j,!1))},this.getSize=function(R){return R.set(k,j)},this.setSize=function(R,W,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,j=W,t.width=Math.floor(R*H),t.height=Math.floor(W*H),$===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*H,j*H).floor()},this.setDrawingBufferSize=function(R,W,$){k=R,j=W,H=$,t.width=Math.floor(R*$),t.height=Math.floor(W*$),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,W,$,ee){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,W,$,ee),ne.viewport(L.copy(ue).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,W,$,ee){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,W,$,ee),ne.scissor(D.copy(fe).multiplyScalar(H).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){ne.setScissorTest(le=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(R=!0,W=!0,$=!0){let ee=0;if(R){let X=!1;if(A!==null){let be=A.texture.format;X=be===Yu||be===qu||be===Xu}if(X){let be=A.texture.type,Le=be===hn||be===fs||be===io||be===ki||be===Vu||be===Gu,ze=Ue.getClearColor(),ke=Ue.getClearAlpha(),je=ze.r,Ke=ze.g,He=ze.b;Le?(g[0]=je,g[1]=Ke,g[2]=He,g[3]=ke,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=je,v[1]=Ke,v[2]=He,v[3]=ke,O.clearBufferiv(O.COLOR,0,v))}else ee|=O.COLOR_BUFFER_BIT}W&&(ee|=O.DEPTH_BUFFER_BIT),$&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),xe.dispose(),Ne.dispose(),me.dispose(),S.dispose(),B.dispose(),J.dispose(),Me.dispose(),U.dispose(),Ee.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ur),Q.removeEventListener("sessionend",Ls),si.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=De.autoReset,W=ye.enabled,$=ye.autoUpdate,ee=ye.needsUpdate,X=ye.type;de(),De.autoReset=R,ye.enabled=W,ye.autoUpdate=$,ye.needsUpdate=ee,ye.type=X}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ze(R){let W=R.target;W.removeEventListener("dispose",Ze),dt(W)}function dt(R){Bt(R),me.remove(R)}function Bt(R){let W=me.get(R).programs;W!==void 0&&(W.forEach(function($){Ee.releaseProgram($)}),R.isShaderMaterial&&Ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,$,ee,X,be){W===null&&(W=Ae);let Le=X.isMesh&&X.matrixWorld.determinant()<0,ze=L0(R,W,$,ee,X);ne.setMaterial(ee,Le);let ke=$.index,je=1;if(ee.wireframe===!0){if(ke=ie.getWireframeAttribute($),ke===void 0)return;je=2}let Ke=$.drawRange,He=$.attributes.position,rt=Ke.start*je,ft=(Ke.start+Ke.count)*je;be!==null&&(rt=Math.max(rt,be.start*je),ft=Math.min(ft,(be.start+be.count)*je)),ke!==null?(rt=Math.max(rt,0),ft=Math.min(ft,ke.count)):He!=null&&(rt=Math.max(rt,0),ft=Math.min(ft,He.count));let gt=ft-rt;if(gt<0||gt===1/0)return;Me.setup(X,ee,ze,$,ke);let tn,lt=Te;if(ke!==null&&(tn=Z.get(ke),lt=qe,lt.setIndex(tn)),X.isMesh)ee.wireframe===!0?(ne.setLineWidth(ee.wireframeLinewidth*ve()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(X.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*ve()),X.isLineSegments?lt.setMode(O.LINES):X.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else X.isPoints?lt.setMode(O.POINTS):X.isSprite&&lt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ge=X._multiDrawStarts,ri=X._multiDrawCounts,ct=X._multiDrawCount,Ln=ke?Z.get(ke).bytesPerElement:1,Ns=me.get(ee).currentProgram.getUniforms();for(let ln=0;ln<ct;ln++)Ns.setValue(O,"_gl_DrawID",ln),lt.render(Ge[ln]/Ln,ri[ln])}else if(X.isInstancedMesh)lt.renderInstances(rt,gt,X.count);else if($.isInstancedBufferGeometry){let Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ri=Math.min($.instanceCount,Ge);lt.renderInstances(rt,gt,ri)}else lt.render(rt,gt)};function at(R,W,$){R.transparent===!0&&R.side===Pt&&R.forceSinglePass===!1?(R.side=Tt,R.needsUpdate=!0,Xo(R,W,$),R.side=Et,R.needsUpdate=!0,Xo(R,W,$),R.side=Pt):Xo(R,W,$)}this.compile=function(R,W,$=null){$===null&&($=R),p=Ne.get($),p.init(W),b.push(p),$.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==$&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let ee=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let be=X.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let ze=be[Le];at(ze,$,X),ee.add(ze)}else at(be,$,X),ee.add(be)}),b.pop(),p=null,ee},this.compileAsync=function(R,W,$=null){let ee=this.compile(R,W,$);return new Promise(X=>{function be(){if(ee.forEach(function(Le){me.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){X(R);return}setTimeout(be,10)}_e.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let en=null;function In(R){en&&en(R)}function Ur(){si.stop()}function Ls(){si.start()}let si=new Qf;si.setAnimationLoop(In),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(R){en=R,Q.setAnimationLoop(R),R===null?si.stop():si.start()},Q.addEventListener("sessionstart",Ur),Q.addEventListener("sessionend",Ls),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,W,A),p=Ne.get(R,b.length),p.init(W),b.push(p),K.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),N.setFromProjectionMatrix(K),te=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,te),m=xe.get(R,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){let be=x.xr.getDepthSensingMesh();be!==null&&Vo(be,W,-1/0,x.sortObjects)}Vo(R,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(G,re),we=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,we&&Ue.addToRenderList(m,R),this.info.render.frame++,Y===!0&&ae.beginShadows();let $=p.state.shadowsArray;ye.render($,R,W),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){let be=W.cameras;if(X.length>0)for(let Le=0,ze=be.length;Le<ze;Le++){let ke=be[Le];Wo(ee,X,R,ke)}we&&Ue.render(R);for(let Le=0,ze=be.length;Le<ze;Le++){let ke=be[Le];Go(m,R,ke,ke.viewport)}}else X.length>0&&Wo(ee,X,R,W),we&&Ue.render(R),Go(m,R,W);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,W),Me.resetDefaultState(),M=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],Y===!0&&ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Vo(R,W,$,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){ee&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(K);let Le=J.update(R),ze=R.material;ze.visible&&m.push(R,Le,ze,$,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){let Le=J.update(R),ze=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),pe.copy(Le.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(K)),Array.isArray(ze)){let ke=Le.groups;for(let je=0,Ke=ke.length;je<Ke;je++){let He=ke[je],rt=ze[He.materialIndex];rt&&rt.visible&&m.push(R,Le,rt,$,pe.z,He)}}else ze.visible&&m.push(R,Le,ze,$,pe.z,null)}}let be=R.children;for(let Le=0,ze=be.length;Le<ze;Le++)Vo(be[Le],W,$,ee)}function Go(R,W,$,ee){let X=R.opaque,be=R.transmissive,Le=R.transparent;p.setupLightsView($),Y===!0&&ae.setGlobalState(x.clippingPlanes,$),ee&&ne.viewport(L.copy(ee)),X.length>0&&Ds(X,W,$),be.length>0&&Ds(be,W,$),Le.length>0&&Ds(Le,W,$),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Wo(R,W,$,ee){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new ot(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?yt:hn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let be=p.state.transmissionRenderTarget[ee.id],Le=ee.viewport||L;be.setSize(Le.z,Le.w);let ze=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(z),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),we&&Ue.render($);let ke=x.toneMapping;x.toneMapping=zi;let je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),Y===!0&&ae.setGlobalState(x.clippingPlanes,ee),Ds(R,$,ee),P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let He=0,rt=W.length;He<rt;He++){let ft=W[He],gt=ft.object,tn=ft.geometry,lt=ft.material,Ge=ft.group;if(lt.side===Pt&&gt.layers.test(ee.layers)){let ri=lt.side;lt.side=Tt,lt.needsUpdate=!0,Or(gt,$,ee,tn,lt,Ge),lt.side=ri,lt.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be))}x.setRenderTarget(ze),x.setClearColor(z,V),je!==void 0&&(ee.viewport=je),x.toneMapping=ke}function Ds(R,W,$){let ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,be=R.length;X<be;X++){let Le=R[X],ze=Le.object,ke=Le.geometry,je=ee===null?Le.material:ee,Ke=Le.group;ze.layers.test($.layers)&&Or(ze,W,$,ke,je,Ke)}}function Or(R,W,$,ee,X,be){R.onBeforeRender(x,W,$,ee,X,be),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,W,$,ee,R,be),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=Tt,X.needsUpdate=!0,x.renderBufferDirect($,W,ee,X,R,be),X.side=Et,X.needsUpdate=!0,x.renderBufferDirect($,W,ee,X,R,be),X.side=Pt):x.renderBufferDirect($,W,ee,X,R,be),R.onAfterRender(x,W,$,ee,X,be)}function Xo(R,W,$){W.isScene!==!0&&(W=Ae);let ee=me.get(R),X=p.state.lights,be=p.state.shadowsArray,Le=X.state.version,ze=Ee.getParameters(R,X.state,be,W,$),ke=Ee.getProgramCacheKey(ze),je=ee.programs;ee.environment=R.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(R.isMeshStandardMaterial?B:S).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Ze),je=new Map,ee.programs=je);let Ke=je.get(ke);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===Le)return hd(R,ze),Ke}else ze.uniforms=Ee.getUniforms(R),R.onBeforeCompile(ze,x),Ke=Ee.acquireProgram(ze,ke),je.set(ke,Ke),ee.uniforms=ze.uniforms;let He=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=ae.uniform),hd(R,ze),ee.needsLights=N0(R),ee.lightsStateVersion=Le,ee.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function ud(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=sr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function hd(R,W){let $=me.get(R);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function L0(R,W,$,ee,X){W.isScene!==!0&&(W=Ae),P.resetTextureUnits();let be=W.fog,Le=ee.isMeshStandardMaterial?W.environment:null,ze=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt,ke=(ee.isMeshStandardMaterial?B:S).get(ee.envMap||Le),je=ee.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!$.morphAttributes.position,rt=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color,gt=zi;ee.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=x.toneMapping);let tn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,lt=tn!==void 0?tn.length:0,Ge=me.get(ee),ri=p.state.lights;if(Y===!0&&(te===!0||R!==_)){let xn=R===_&&ee.id===M;ae.setState(ee,R,xn)}let ct=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ri.state.version||Ge.outputColorSpace!==ze||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isBatchedMesh&&Ge.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ge.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ge.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ge.instancingMorph===!1&&X.morphTexture!==null||Ge.envMap!==ke||ee.fog===!0&&Ge.fog!==be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ae.numPlanes||Ge.numIntersection!==ae.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Ke||Ge.morphTargets!==He||Ge.morphNormals!==rt||Ge.morphColors!==ft||Ge.toneMapping!==gt||Ge.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Ge.__version=ee.version);let Ln=Ge.currentProgram;ct===!0&&(Ln=Xo(ee,W,X));let Ns=!1,ln=!1,Fr=!1,vt=Ln.getUniforms(),qn=Ge.uniforms;if(ne.useProgram(Ln.program)&&(Ns=!0,ln=!0,Fr=!0),ee.id!==M&&(M=ee.id,ln=!0),Ns||_!==R){ne.buffers.depth.getReversed()?(q.copy(R.projectionMatrix),Pg(q),Ig(q),vt.setValue(O,"projectionMatrix",q)):vt.setValue(O,"projectionMatrix",R.projectionMatrix),vt.setValue(O,"viewMatrix",R.matrixWorldInverse);let Ri=vt.map.cameraPosition;Ri!==void 0&&Ri.setValue(O,oe.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&vt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,ln=!0,Fr=!0)}if(X.isSkinnedMesh){vt.setOptional(O,X,"bindMatrix"),vt.setOptional(O,X,"bindMatrixInverse");let xn=X.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),vt.setValue(O,"boneTexture",xn.boneTexture,P))}X.isBatchedMesh&&(vt.setOptional(O,X,"batchingTexture"),vt.setValue(O,"batchingTexture",X._matricesTexture,P),vt.setOptional(O,X,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",X._indirectTexture,P),vt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",X._colorsTexture,P));let Br=$.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Be.update(X,$,Ln),(ln||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,vt.setValue(O,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(qn.envMap.value=ke,qn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(qn.envMapIntensity.value=W.environmentIntensity),ln&&(vt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&D0(qn,Fr),be&&ee.fog===!0&&ge.refreshFogUniforms(qn,be),ge.refreshMaterialUniforms(qn,ee,H,j,p.state.transmissionRenderTarget[R.id]),sr.upload(O,ud(Ge),qn,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(sr.upload(O,ud(Ge),qn,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&vt.setValue(O,"center",X.center),vt.setValue(O,"modelViewMatrix",X.modelViewMatrix),vt.setValue(O,"normalMatrix",X.normalMatrix),vt.setValue(O,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let xn=ee.uniformsGroups;for(let Ri=0,Ci=xn.length;Ri<Ci;Ri++){let dd=xn[Ri];U.update(dd,Ln),U.bind(dd,Ln)}}return Ln}function D0(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function N0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,W,$){me.get(R.texture).__webglTexture=W,me.get(R.depthTexture).__webglTexture=$;let ee=me.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=$===void 0,ee.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){let $=me.get(R);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,$=0){A=R,T=W,w=$;let ee=!0,X=null,be=!1,Le=!1;if(R){let ke=me.get(R);if(ke.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(ke.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ke.__hasExternalTextures)P.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let He=R.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&me.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Le=!0);let Ke=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?X=Ke[W][$]:X=Ke[W],be=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?X=me.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[$]:X=Ke,L.copy(R.viewport),D.copy(R.scissor),F=R.scissorTest}else L.copy(ue).multiplyScalar(H).floor(),D.copy(fe).multiplyScalar(H).floor(),F=le;if(ne.bindFramebuffer(O.FRAMEBUFFER,X)&&ee&&ne.drawBuffers(R,X),ne.viewport(L),ne.scissor(D),ne.setScissorTest(F),be){let ke=me.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,$)}else if(Le){let ke=me.get(R.texture),je=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,$||0,je)}M=-1},this.readRenderTargetPixels=function(R,W,$,ee,X,be,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){ne.bindFramebuffer(O.FRAMEBUFFER,ze);try{let ke=R.texture,je=ke.format,Ke=ke.type;if(!Se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&$>=0&&$<=R.height-X&&O.readPixels(W,$,ee,X,Fe.convert(je),Fe.convert(Ke),be)}finally{let ke=A!==null?me.get(A).__webglFramebuffer:null;ne.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,W,$,ee,X,be,Le){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){let ke=R.texture,je=ke.format,Ke=ke.type;if(!Se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-ee&&$>=0&&$<=R.height-X){ne.bindFramebuffer(O.FRAMEBUFFER,ze);let He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(W,$,ee,X,Fe.convert(je),Fe.convert(Ke),0);let rt=A!==null?me.get(A).__webglFramebuffer:null;ne.bindFramebuffer(O.FRAMEBUFFER,rt);let ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cg(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.deleteBuffer(He),O.deleteSync(ft),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,$=0){R.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);let ee=Math.pow(2,-$),X=Math.floor(R.image.width*ee),be=Math.floor(R.image.height*ee),Le=W!==null?W.x:0,ze=W!==null?W.y:0;P.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Le,ze,X,be),ne.unbindTexture()},this.copyTextureToTexture=function(R,W,$=null,ee=null,X=0){R.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1],W=arguments[2],X=arguments[3]||0,$=null);let be,Le,ze,ke,je,Ke,He,rt,ft,gt=R.isCompressedTexture?R.mipmaps[X]:R.image;$!==null?(be=$.max.x-$.min.x,Le=$.max.y-$.min.y,ze=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,je=$.min.y,Ke=$.isBox3?$.min.z:0):(be=gt.width,Le=gt.height,ze=gt.depth||1,ke=0,je=0,Ke=0),ee!==null?(He=ee.x,rt=ee.y,ft=ee.z):(He=0,rt=0,ft=0);let tn=Fe.convert(W.format),lt=Fe.convert(W.type),Ge;W.isData3DTexture?(P.setTexture3D(W,0),Ge=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ge=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ge=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);let ri=O.getParameter(O.UNPACK_ROW_LENGTH),ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ln=O.getParameter(O.UNPACK_SKIP_PIXELS),Ns=O.getParameter(O.UNPACK_SKIP_ROWS),ln=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ke),O.pixelStorei(O.UNPACK_SKIP_ROWS,je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let Fr=R.isDataArrayTexture||R.isData3DTexture,vt=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let qn=me.get(R),Br=me.get(W),xn=me.get(qn.__renderTarget),Ri=me.get(Br.__renderTarget);ne.bindFramebuffer(O.READ_FRAMEBUFFER,xn.__webglFramebuffer),ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<ze;Ci++)Fr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,me.get(R).__webglTexture,X,Ke+Ci),R.isDepthTexture?(vt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,me.get(W).__webglTexture,X,ft+Ci),O.blitFramebuffer(ke,je,be,Le,He,rt,be,Le,O.DEPTH_BUFFER_BIT,O.NEAREST)):vt?O.copyTexSubImage3D(Ge,X,He,rt,ft+Ci,ke,je,be,Le):O.copyTexSubImage2D(Ge,X,He,rt,ft+Ci,ke,je,be,Le);ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ge,X,He,rt,ft,be,Le,ze,tn,lt,gt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,X,He,rt,ft,be,Le,ze,tn,gt.data):O.texSubImage3D(Ge,X,He,rt,ft,be,Le,ze,tn,lt,gt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,He,rt,be,Le,tn,lt,gt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,He,rt,gt.width,gt.height,tn,gt.data):O.texSubImage2D(O.TEXTURE_2D,X,He,rt,be,Le,tn,lt,gt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ri),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ln),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ns),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ln),X===0&&W.generateMipmaps&&O.generateMipmap(Ge),ne.unbindTexture()},this.copyTextureToTexture3D=function(R,W,$=null,ee=null,X=0){return R.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,ee=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,$,ee,X)},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ne.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var uo=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new C,gs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mr=class extends Jt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Gr=new C,Ks=new C,Js=new C,Qs=new he,Wr=new he,ip=new Ve,da=new C,Xr=new C,fa=new C,df=new he,gc=new he,ff=new he,ho=class extends St{constructor(e=new mr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new gs(n,3,0,!1)),js.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;pa(da.set(-.5,-.5,0),Js,o,Ks,s,r),pa(Xr.set(.5,-.5,0),Js,o,Ks,s,r),pa(fa.set(.5,.5,0),Js,o,Ks,s,r),df.set(0,0),gc.set(1,0),ff.set(1,1);let a=e.ray.intersectTriangle(da,Xr,fa,!1,Gr);if(a===null&&(pa(Xr.set(-.5,.5,0),Js,o,Ks,s,r),gc.set(0,1),a=e.ray.intersectTriangle(da,fa,Xr,!1,Gr),a===null))return;let l=e.ray.origin.distanceTo(Gr);l<e.near||l>e.far||t.push({distance:l,point:Gr.clone(),uv:Fi.getInterpolation(Gr,da,Xr,fa,df,gc,ff,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function pa(i,e,t,n,s,r){Qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*Qs.x-s*Qs.y,Wr.y=s*Qs.x+r*Qs.y):Wr.copy(Qs),i.copy(e),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(ip)}var pf=new C,mf=new it,gf=new it,SM=new C,vf=new Ve,ma=new C,vc=new dn,xf=new Ve,xc=new ps,Fa=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=md,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingBox.expandByPoint(ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingSphere.expandByPoint(ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)!==!1&&(xf.copy(s).invert(),xc.copy(e.ray).applyMatrix4(xf),!(this.boundingBox!==null&&xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===md?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;mf.fromBufferAttribute(s.attributes.skinIndex,e),gf.fromBufferAttribute(s.attributes.skinWeight,e),pf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=gf.getComponent(r);if(o!==0){let a=mf.getComponent(r);vf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(SM.copy(pf).applyMatrix4(vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},fo=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wi=class extends It{constructor(e=null,t=1,n=1,s,r,o,a,l,c=At,u=At,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yf=new Ve,EM=new Ve,Ba=class i{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:EM;yf.multiplyMatrices(a,t[r]),yf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wi(t,e,e,sn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},gi=class extends Xe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new Ve,_f=new Ve,ga=[],Mf=new wn,TM=new Ve,qr=new We,Yr=new dn,vs=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,TM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Mf.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Yr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),_f.multiplyMatrices(n,$s),qr.matrixWorld=_f,qr.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){let l=ga[o];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,Wu,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var pn=class extends Jt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new C,ka=new C,wf=new Ve,Zr=new ps,va=new dn,yc=new C,bf=new C,gr=class extends St{constructor(e=new Qe,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(ka);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;wf.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),y=u.getX(v+1),b=xa(this,e,Zr,l,p,y);b&&t.push(b)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=xa(this,e,Zr,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=xa(this,e,Zr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=xa(this,e,Zr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),ka.fromBufferAttribute(o,r),t.distanceSqToSegment(za,ka,yc,bf)>n)return;yc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(yc);if(!(l<e.near||l>e.far))return{distance:l,point:bf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Sf=new C,Ef=new C,Zn=class extends gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sf.fromBufferAttribute(t,s),Ef.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sf.distanceTo(Ef);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},vr=class extends gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rn=class extends Jt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Ve,yu=new ps,ya=new dn,_a=new C,kt=class extends St{constructor(e=new Qe,t=new rn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Tf.copy(s).invert(),yu.copy(e.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);_a.fromBufferAttribute(h,m),Af(_a,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)_a.fromBufferAttribute(h,g),Af(_a,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Af(i,e,t,n,s,r,o){let a=yu.distanceSqToPoint(i);if(a<t){let l=new C;yu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var mn=class extends It{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ha=class i extends Qe{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,d=new he,f=new C,g=new C,v=new C,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){let b=n+y*u*s,x=Math.sin(b),I=Math.cos(b);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*x,h.y=e[T].y,h.z=e[T].x*I,o.push(h.x,h.y,h.z),d.x=y/t,d.y=T/(e.length-1),a.push(d.x,d.y);let w=l[3*T+0]*x,A=l[3*T+1],M=l[3*T+0]*I;c.push(w,A,M)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let x=b+y*e.length,I=x,T=x+e.length,w=x+e.length+1,A=x+1;r.push(I,T,A),r.push(w,A,T)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Sn=class i extends Qe{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xs=class i extends Qe{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],m=n/2,p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function y(){let x=new C,I=new C,T=0,w=(t-e)/n;for(let A=0;A<=r;A++){let M=[],_=A/r,L=_*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,z=F*l+a,V=Math.sin(z),k=Math.cos(z);I.x=L*V,I.y=-_*n+m,I.z=L*k,h.push(I.x,I.y,I.z),x.set(V,w,k).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-_),M.push(g++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){let _=v[M][A],L=v[M+1][A],D=v[M+1][A+1],F=v[M][A+1];(e>0||M!==0)&&(u.push(_,L,F),T+=3),(t>0||M!==r-1)&&(u.push(L,D,F),T+=3)}c.addGroup(p,T,0),p+=T}function b(x){let I=g,T=new he,w=new C,A=0,M=x===!0?e:t,_=x===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let z=D/s*l+a,V=Math.cos(z),k=Math.sin(z);w.x=M*k,w.y=m*_,w.z=M*V,h.push(w.x,w.y,w.z),d.push(0,_,0),T.x=V*.5+.5,T.y=k*.5*_+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){let F=I+D,z=L+D;x===!0?u.push(z,z+1,F):u.push(z+1,z,F),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _u=class i extends Qe{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new C,x=new C,I=new C;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],x),f(t[T+2],I),l(b,x,I,y)}function l(y,b,x,I){let T=I+1,w=[];for(let A=0;A<=T;A++){w[A]=[];let M=y.clone().lerp(x,A/T),_=b.clone().lerp(x,A/T),L=T-A;for(let D=0;D<=L;D++)D===0&&A===T?w[A][D]=M:w[A][D]=M.clone().lerp(_,D/L)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){let _=Math.floor(M/2);M%2===0?(d(w[A][_+1]),d(w[A+1][_]),d(w[A][_])):(d(w[A][_+1]),d(w[A+1][_+1]),d(w[A+1][_]))}}function c(y){let b=new C;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(y),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){let y=new C;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let x=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;o.push(x,1-I)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){let b=o[y+0],x=o[y+2],I=o[y+4],T=Math.max(b,x,I),w=Math.min(b,x,I);T>.9&&w<.1&&(b<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let x=y*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){let y=new C,b=new C,x=new C,I=new C,T=new he,w=new he,A=new he;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),I.copy(y).add(b).add(x).divideScalar(3);let L=m(I);v(T,_+0,y,L),v(w,_+2,b,L),v(A,_+4,x,L)}}function v(y,b,x,I){I<0&&y.x===1&&(o[b]=y.x-1),x.x===0&&x.z===0&&(o[b]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var po=class i extends _u{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Va=class i extends Qe{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new C,g=new he;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,x=y+n+1,I=y+n+2,T=y+1;a.push(b,x,T),a.push(x,I,T)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var on=class i extends Qe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,d=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let T=I/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(T+x,1-b),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=u[p][y+1],x=u[p][y],I=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&f.push(b,x,T),(p!==n-1||l<Math.PI)&&f.push(x,I,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xr=class extends Oe{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},jn=class extends Jt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qt=class extends jn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends Jt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Ma(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function AM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function RM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function sp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mu=class extends Xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gd,endingEnd:gd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vd:r=e,a=2*t-n;break;case xd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vd:o=e,l=2*n-t;break;case xd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+y*o[c+I]+b*o[l+I]+x*o[h+I];return r}},wu=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},bu=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&AM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=cr;var qi=class extends En{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=lr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends En{};Wa.prototype.ValueTypeName="color";var vi=class extends En{};vi.prototype.ValueTypeName="number";var Su=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},xi=class extends En{InterpolantFactoryMethodLinear(e){return new Su(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends En{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=lr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends En{};yi.prototype.ValueTypeName="vector";var Xa=class{constructor(e="",t=-1,n=[],s=tg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(PM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=RM(l);l=Rf(l,1,u),c=Rf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,v){if(f.length!==0){let m=[],p=[];sp(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(let v in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let b=d[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new vi(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(yi,f+".position",d,"pos",s),n(xi,f+".quaternion",d,"rot",s),n(yi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function CM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return yi;case"color":return Wa;case"quaternion":return xi;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function PM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=CM(i.type);if(i.times===void 0){let t=[],n=[];sp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},mo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Ki=new mo,_i=class{constructor(e){this.manager=e!==void 0?e:Ki,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},go=class extends _i{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:b,value:x})=>{if(b)p.close();else{v+=x.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,w=u.length;T<w;T++){let A=u[T];A.onProgress&&A.onProgress(I)}p.enqueue(x),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bi.add(e,c);let u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Tu=class extends _i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=so("img");function l(){u(),Bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Tn=class extends _i{constructor(e){super(e)}load(e,t,n,s){let r=new It,o=new Tu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ys=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qa=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_c=new Ve,Cf=new C,Pf=new C,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Au=class extends vo{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ya=class extends ys{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},If=new Ve,jr=new C,Mc=new C,Ru=class extends vo{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Mc.copy(n.position),Mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mc),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}},Kn=class extends ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cu=class extends vo{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Cu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Za=class extends ys{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ji=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ja=class extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(e,l),r.manager.itemStart(e)}};var Jn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Lf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Lf(){return performance.now()}var Ju="\\[\\]\\.:\\/",IM=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",LM="[^"+Ju.replace("\\.","")+"]",DM=/((?:WC+[\/:])*)/.source.replace("WC",Qu),NM=/(WCOD+)?/.source.replace("WCOD",LM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),OM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),FM=new RegExp("^"+DM+NM+UM+OM+"$"),BM=["material","materials","bones","map"],Pu=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IM,"")}static parseTrackName(e){let t=FM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);BM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Pu;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mS=new Float32Array(1);var Df=new Ve,Ka=class{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Df.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(Nf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Iu(e[s],this,n,t);return n.sort(Nf),n}};function Nf(i,e){return i.distance-e.distance}function Iu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Iu(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ye=.6,st=31.5,Qn=6,$u=20,sl=512,kn=3,An=Ye-kn,Mr=Qn*.95;var wi=new C(-620,0,-250),rl=90,rp=420,op=-1.107,ap=40,eh=.002;var E={scene:null,camera:null,renderer:null,composer:null,islandGroup:null,SUN_DIR:new C(1,.4,0).normalize(),sunFixedPos:null,water:null,mtnGeo:null,_starbox:null,sunLight:null,moonLight:null,hemiLight:null,ambLight:null,rimLight:null,grainPass:null,dofPass:null,euler:new bn(0,0,0,"YXZ"),isPointerLocked:!1,keys:{},glassMat:null,envMode:"A",floorA:null,floorB:null,sunOrb:null,moonOrb:null,gateway:null,_dragOverride:{}};function lp(i,e){let t=[{t:0,r:.08,g:.07,b:.06},{t:.1,r:.12,g:.1,b:.08},{t:.25,r:.2,g:.14,b:.09},{t:.4,r:.3,g:.18,b:.1},{t:.55,r:.35,g:.22,b:.13},{t:.7,r:.28,g:.2,b:.14},{t:.85,r:.22,g:.18,b:.15},{t:1,r:.18,g:.15,b:.13}],n=t[0],s=t[t.length-1];for(let c=0;c<t.length-1;c++)if(i>=t[c].t&&i<=t[c+1].t){n=t[c],s=t[c+1];break}let r=(i-n.t)/(s.t-n.t||1),o=n.r+(s.r-n.r)*r,a=n.g+(s.g-n.g)*r,l=n.b+(s.b-n.b)*r;if(e>0){let c=e*e;o+=(.21-o)*c,a+=(.175-a)*c,l+=(.13-l)*c}return{r:o,g:a,b:l}}function th(i,e){e=e||0;let t=[{t:0,r:.1,g:.11,b:.13},{t:.15,r:.13,g:.12,b:.12},{t:.3,r:.16,g:.11,b:.08},{t:.5,r:.22,g:.16,b:.1},{t:.7,r:.28,g:.2,b:.13},{t:.85,r:.32,g:.24,b:.16},{t:1,r:.38,g:.28,b:.18}],n=t[0],s=t[t.length-1];for(let c=0;c<t.length-1;c++)if(i>=t[c].t&&i<=t[c+1].t){n=t[c],s=t[c+1];break}let r=(i-n.t)/(s.t-n.t||1),o=n.r+(s.r-n.r)*r,a=n.g+(s.g-n.g)*r,l=n.b+(s.b-n.b)*r;return e>0&&(o+=e*.6,a+=e*.12,l+=e*.02),{r:o,g:a,b:l}}function nh(i,e){Ki.itemStart(i);let t=new Image;t.crossOrigin="anonymous",t.onload=()=>{let n=()=>{let s=document.createElement("canvas");s.width=t.width,s.height=t.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(t,0,0);let o=r.getImageData(0,0,s.width,s.height);requestAnimationFrame(()=>{e(o,s.width,s.height),Ki.itemEnd(i)})};typeof t.decode=="function"?t.decode().then(n,n):n()},t.onerror=()=>{Ki.itemEnd(i)},t.src=i}function ih(i,e,t,n,s){let r=Math.floor(n*(e-1)),o=Math.floor((1-s)*(t-1));return i.data[(o*e+r)*4]/255}var Ji={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ft=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zM=new Gi(-1,1,1,-1,0,1),sh=class extends Qe{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},kM=new sh,an=class{constructor(e){this._mesh=new We(kM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var $n=class extends Ft{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Oe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lt.clone(e.uniforms),this.material=new Oe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new an(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _o=class extends Ft{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ol=class extends Ft{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $n(Ji),this.copyPass.material.blending=Nt,this.clock=new Jn}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(o instanceof _o?n=!0:o instanceof ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ll=class extends Ft{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var cp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var wr=class i extends Ft{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ot(r,o,{type:yt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ot(r,o,{type:yt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ot(r,o,{type:yt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=cp;this.highPassUniforms=Lt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ji;this.copyUniforms=Lt.clone(u.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Vt,this.fsQuad=new an(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Oe({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Oe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};wr.BlurDirectionX=new he(1,0);wr.BlurDirectionY=new he(0,1);var up={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var cl=class extends Ft{constructor(){super();let e=up;this.uniforms=Lt.clone(e.uniforms),this.material=new xr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new an(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mo={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

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

		}`},wo={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

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

		}`},ul={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

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

		}`};var hl=class extends Ft{constructor(e,t){super(),this.edgesRT=new ot(e,t,{depthBuffer:!1,type:yt}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ot(e,t,{depthBuffer:!1,type:yt}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new It,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=xt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new It,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=At,this.searchTexture.minFilter=At,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Lt.clone(Mo.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new Oe({defines:Object.assign({},Mo.defines),uniforms:this.uniformsEdges,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this.uniformsWeights=Lt.clone(wo.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Oe({defines:Object.assign({},wo.defines),uniforms:this.uniformsWeights,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this.uniformsBlend=Lt.clone(ul.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Oe({uniforms:this.uniformsBlend,vertexShader:ul.vertexShader,fragmentShader:ul.fragmentShader}),this.fsQuad=new an(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var bo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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
		}`},So={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},dl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function hp(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=HM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Wi(s,e,e);return r.wrapS=bt,r.wrapT=bt,r.needsUpdate=!0,r}function HM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Eo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:rh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function rh(i,e,t){let n=VM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function VM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new C(Math.cos(r),Math.sin(r),o))}return n}var fl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let y=g-m+u,b=v-p+u,x=g-1+2*u,I=v-1+2*u,T=l&255,w=c&255,A=this.perm[T+this.perm[w]]%12,M=this.perm[T+m+this.perm[w+p]]%12,_=this.perm[T+1+this.perm[w+1]]%12,L=.5-g*g-v*v;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[A],g,v));let D=.5-y*y-b*b;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[M],y,b));let F=.5-x*x-I*I;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[_],x,I)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,v=u-g,m=h-g,p=d-g,y=e-v,b=t-m,x=n-p,I,T,w,A,M,_;y>=b?b>=x?(I=1,T=0,w=0,A=1,M=1,_=0):y>=x?(I=1,T=0,w=0,A=1,M=0,_=1):(I=0,T=0,w=1,A=1,M=0,_=1):b<x?(I=0,T=0,w=1,A=0,M=1,_=1):y<x?(I=0,T=1,w=0,A=0,M=1,_=1):(I=0,T=1,w=0,A=1,M=1,_=0);let L=y-I+f,D=b-T+f,F=x-w+f,z=y-A+2*f,V=b-M+2*f,k=x-_+2*f,j=y-1+3*f,H=b-1+3*f,G=x-1+3*f,re=u&255,ue=h&255,fe=d&255,le=this.perm[re+this.perm[ue+this.perm[fe]]]%12,N=this.perm[re+I+this.perm[ue+T+this.perm[fe+w]]]%12,Y=this.perm[re+A+this.perm[ue+M+this.perm[fe+_]]]%12,te=this.perm[re+1+this.perm[ue+1+this.perm[fe+1]]]%12,q=.6-y*y-b*b-x*x;q<0?s=0:(q*=q,s=q*q*this.dot3(this.grad3[le],y,b,x));let K=.6-L*L-D*D-F*F;K<0?r=0:(K*=K,r=K*K*this.dot3(this.grad3[N],L,D,F));let oe=.6-z*z-V*V-k*k;oe<0?o=0:(oe*=oe,o=oe*oe*this.dot3(this.grad3[Y],z,V,k));let pe=.6-j*j-H*H-G*G;return pe<0?a=0:(pe*=pe,a=pe*pe*this.dot3(this.grad3[te],j,H,G)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),y=Math.floor(n+v),b=Math.floor(s+v),x=(m+p+y+b)*c,I=m-x,T=p-x,w=y-x,A=b-x,M=e-I,_=t-T,L=n-w,D=s-A,F=M>_?32:0,z=M>L?16:0,V=_>L?8:0,k=M>D?4:0,j=_>D?2:0,H=L>D?1:0,G=F+z+V+k+j+H,re=o[G][0]>=3?1:0,ue=o[G][1]>=3?1:0,fe=o[G][2]>=3?1:0,le=o[G][3]>=3?1:0,N=o[G][0]>=2?1:0,Y=o[G][1]>=2?1:0,te=o[G][2]>=2?1:0,q=o[G][3]>=2?1:0,K=o[G][0]>=1?1:0,oe=o[G][1]>=1?1:0,pe=o[G][2]>=1?1:0,Ae=o[G][3]>=1?1:0,we=M-re+c,ve=_-ue+c,O=L-fe+c,Ie=D-le+c,_e=M-N+2*c,Se=_-Y+2*c,ne=L-te+2*c,De=D-q+2*c,me=M-K+3*c,P=_-oe+3*c,S=L-pe+3*c,B=D-Ae+3*c,Z=M-1+4*c,ie=_-1+4*c,J=L-1+4*c,Ee=D-1+4*c,ge=m&255,xe=p&255,Ne=y&255,ae=b&255,ye=a[ge+a[xe+a[Ne+a[ae]]]]%32,Ue=a[ge+re+a[xe+ue+a[Ne+fe+a[ae+le]]]]%32,Be=a[ge+N+a[xe+Y+a[Ne+te+a[ae+q]]]]%32,Te=a[ge+K+a[xe+oe+a[Ne+pe+a[ae+Ae]]]]%32,qe=a[ge+1+a[xe+1+a[Ne+1+a[ae+1]]]]%32,Fe=.6-M*M-_*_-L*L-D*D;Fe<0?u=0:(Fe*=Fe,u=Fe*Fe*this.dot4(r[ye],M,_,L,D));let Me=.6-we*we-ve*ve-O*O-Ie*Ie;Me<0?h=0:(Me*=Me,h=Me*Me*this.dot4(r[Ue],we,ve,O,Ie));let U=.6-_e*_e-Se*Se-ne*ne-De*De;U<0?d=0:(U*=U,d=U*U*this.dot4(r[Be],_e,Se,ne,De));let de=.6-me*me-P*P-S*S-B*B;de<0?f=0:(de*=de,f=de*de*this.dot4(r[Te],me,P,S,B));let Q=.6-Z*Z-ie*ie-J*J-Ee*Ee;return Q<0?g=0:(Q*=Q,g=Q*Q*this.dot4(r[qe],Z,ie,J,Ee)),27*(u+h+d+f+g)}};var To=class i extends Ft{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=hp(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ot(this.width,this.height,{type:yt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Oe({defines:Object.assign({},bo.defines),uniforms:Lt.clone(bo.uniforms),vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,blending:Nt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ga,this.normalMaterial.blending=Nt,this.pdMaterial=new Oe({defines:Object.assign({},Eo.defines),uniforms:Lt.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Oe({defines:Object.assign({},So.defines),uniforms:Lt.clone(So.uniforms),vertexShader:So.vertexShader,fragmentShader:So.fragmentShader,blending:Nt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Oe({uniforms:Lt.clone(Ji.uniforms),vertexShader:Ji.vertexShader,fragmentShader:Ji.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qa,blendDst:yr,blendEquation:_n,blendSrcAlpha:Ja,blendDstAlpha:yr,blendEquationAlpha:_n}),this.blendMaterial=new Oe({uniforms:Lt.clone(dl.uniforms),vertexShader:dl.vertexShader,fragmentShader:dl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Du,blendSrc:Qa,blendDst:yr,blendEquation:_n,blendSrcAlpha:Ja,blendDstAlpha:yr,blendEquationAlpha:_n}),this.fsQuad=new an(null),this.originalClearColor=new se,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new fr,this.depthTexture.format=Hi,this.depthTexture.type=ki,this.normalRenderTarget=new ot(this.width,this.height,{minFilter:At,magFilter:At,type:yt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=rh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new fl,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Wi(s,e,e,sn,hn);return r.wrapS=bt,r.wrapT=bt,r.needsUpdate=!0,r}};To.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var dp=.88,GM=1e-6,pl=class extends Ft{constructor(e,t,n){super(),this.camera=n,this._prevCam=new Ve,this._first=!0;let s={minFilter:xt,magFilter:xt,type:yt,depthBuffer:!1,stencilBuffer:!1};this.historyRead=new ot(e,t,s),this.historyWrite=new ot(e,t,s),this.blendMaterial=new Oe({uniforms:{tDiffuse:{value:null},tHistory:{value:null},uBlend:{value:dp},uTexel:{value:new he(1/e,1/t)}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D tDiffuse;
                uniform sampler2D tHistory;
                uniform float uBlend;
                uniform vec2 uTexel;
                varying vec2 vUv;

                void main() {
                    vec3 cur = texture2D(tDiffuse, vUv).rgb;

                    // 3x3 neighbourhood of THIS frame: the colour range that is
                    // legitimate at this pixel right now.
                    vec3 lo = cur;
                    vec3 hi = cur;
                    for (int y = -1; y <= 1; y++) {
                        for (int x = -1; x <= 1; x++) {
                            if (x == 0 && y == 0) continue;
                            vec3 s = texture2D(tDiffuse, vUv + vec2(float(x), float(y)) * uTexel).rgb;
                            lo = min(lo, s);
                            hi = max(hi, s);
                        }
                    }

                    // STRICT box - do not widen it. Widening lets the
                    // un-reprojected history (the dish is always turning) bleed
                    // in and the whole scene goes soft. See the BLEND note.
                    vec3 hist = texture2D(tHistory, vUv).rgb;
                    // Clip history into that box - kills ghosting/smearing at
                    // any real edge while leaving a flickering pixel (whose
                    // two states both live inside its own neighbourhood) free
                    // to average with its past.
                    hist = clamp(hist, lo, hi);

                    gl_FragColor = vec4(mix(cur, hist, uBlend), 1.0);
                }
            `,depthTest:!1,depthWrite:!1}),this.copyMaterial=new Oe({uniforms:{tDiffuse:{value:null}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D tDiffuse;
                varying vec2 vUv;
                void main() { gl_FragColor = texture2D(tDiffuse, vUv); }
            `,depthTest:!1,depthWrite:!1}),this.quad=new an(this.blendMaterial)}setSize(e,t){this.historyRead.setSize(e,t),this.historyWrite.setSize(e,t),this.blendMaterial.uniforms.uTexel.value.set(1/e,1/t),this._first=!0}_cameraMoved(){let e=this.camera.matrixWorldInverse.elements,t=this._prevCam.elements,n=0;for(let s=0;s<16;s++)n+=Math.abs(e[s]-t[s]);return this._prevCam.copy(this.camera.matrixWorldInverse),n>GM}render(e,t,n){let s=this._cameraMoved(),r=this._first||s?0:dp;this._first=!1,this.blendMaterial.uniforms.tDiffuse.value=n.texture,this.blendMaterial.uniforms.tHistory.value=this.historyRead.texture,this.blendMaterial.uniforms.uBlend.value=r,this.quad.material=this.blendMaterial,e.setRenderTarget(this.historyWrite),e.clear(),this.quad.render(e),this.copyMaterial.uniforms.tDiffuse.value=this.historyWrite.texture,this.quad.material=this.copyMaterial,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.quad.render(e);let o=this.historyRead;this.historyRead=this.historyWrite,this.historyWrite=o}dispose(){this.historyRead.dispose(),this.historyWrite.dispose(),this.blendMaterial.dispose(),this.copyMaterial.dispose(),this.quad.dispose()}};var fp=`
    vec3 voidSky(vec3 dir) {
        vec3 voidCol = vec3(0.038, 0.080, 0.170);
        vec3 midCol  = vec3(0.085, 0.160, 0.300);
        float vert = dir.y * 0.5 + 0.5;
        return mix(voidCol, midCol, smoothstep(-0.25, 0.95, vert) * 0.85);
    }
`,_s=`
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
`;var WM=`
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
`,XM=`
    precision highp float;
    varying vec3 vDir;
    uniform float uSkyPulse;

    ${fp}
    ${_s}

    void main() {
        vec3 col = voidSky(normalize(vDir)) * (1.0 + uSkyPulse * 0.10);
        gl_FragColor = vec4(displayToSceneLinear(col), 1.0);
    }
`;function pp(i){let e=new on(1,32,16),t=new Oe({uniforms:{uSkyPulse:{value:0}},vertexShader:WM,fragmentShader:XM,side:Tt,depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1}),n=new We(e,t);return n.frustumCulled=!1,n.renderOrder=-1e3,n.name="spaceEnvironment",i.add(n),n}function vp(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var qM=481207,mp=[{count:900,rMin:6200,rMax:8300,size:2,bMin:.1,bMax:.3},{count:380,rMin:4800,rMax:6200,size:2.6,bMin:.22,bMax:.55},{count:90,rMin:3600,rMax:4800,size:3.4,bMin:.45,bMax:.8}],YM=`
    attribute float aSize;
    attribute float aBright;
    varying float vBright;
    varying float vFade;
    uniform float uPxr;
    void main() {
        vBright = aBright;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = length(mv.xyz);
        // Emergence with approach: invisible until the camera is near
        // enough (fully out before the 9000 far plane, so no star can
        // ever pop at the clip boundary), full inside the neighborhood.
        // The window sits just inside the pushed-out shell (rMax 8300):
        // the outermost stars carry a touch of distance dimming at rest.
        vFade = 1.0 - smoothstep(8100.0, 8850.0, dist);
        // Perspective point size: authored pixels at the reference
        // distance, growing as the camera closes.
        gl_PointSize = aSize * uPxr * (6000.0 / max(dist, 1.0));
        gl_Position = projectionMatrix * mv;
    }
`,ZM=`
    precision highp float;
    varying float vBright;
    varying float vFade;
    uniform float uPulse;

    ${_s}

    void main() {
        // Gaussian core, same footprint philosophy as the old shader's
        // exp(-r2*150) stars: a 2-3px gradient that antialiases naturally.
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d) * 4.0;
        float core = exp(-r2 * 3.2) * (1.0 - smoothstep(0.7, 1.0, r2));
        float a = core * vBright * vFade * (1.0 + uPulse * 1.6);
        if (a < 0.004) discard;
        // Authored star color (display sRGB) through the shared inverse.
        vec3 col = displayToSceneLinear(vec3(0.78, 0.86, 1.00) * min(a, 0.85));
        gl_FragColor = vec4(col, 1.0);
    }
`;function xp(i,e){let t=vp(qM),n=mp.reduce((h,d)=>h+d.count,0),s=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n),a=0;for(let h of mp)for(let d=0;d<h.count;d++,a++){let f,g,v;do f=t()*2-1,g=t()*2-1,v=f*f+g*g;while(v>=1||v===0);let m=2*Math.sqrt(1-v),p=h.rMin+t()*(h.rMax-h.rMin);s[a*3+0]=f*m*p,s[a*3+1]=(1-2*v)*p,s[a*3+2]=g*m*p,r[a]=h.size*(.8+t()*.45),o[a]=h.bMin+t()*(h.bMax-h.bMin)}let l=new Qe;l.setAttribute("position",new Xe(s,3)),l.setAttribute("aSize",new Xe(r,1)),l.setAttribute("aBright",new Xe(o,1));let c=new Oe({uniforms:{uPulse:{value:0},uPxr:{value:e||1}},vertexShader:YM,fragmentShader:ZM,transparent:!0,blending:wt,depthWrite:!1,depthTest:!0,toneMapped:!1,fog:!1}),u=new kt(l,c);return u.frustumCulled=!1,u.renderOrder=-999,u.name="starShell",u.layers.enable(9),i.add(u),u}var gp=[{seed:902411,k:.025,radius:8500,order:-999.5,pops:[{count:1700,sMin:1.2,sMax:1.8,bMin:.1,bMax:.3},{count:400,sMin:1.7,sMax:2.4,bMin:.2,bMax:.5},{count:110,sMin:2.3,sMax:3.2,bMin:.42,bMax:.75}]},{seed:611203,k:.07,radius:8200,order:-999.45,pops:[{count:420,sMin:1.5,sMax:2.4,bMin:.15,bMax:.45},{count:120,sMin:2,sMax:3,bMin:.35,bMax:.65}]},{seed:337719,k:.15,radius:7900,order:-999.4,pops:[{count:170,sMin:2,sMax:3,bMin:.25,bMax:.6},{count:55,sMin:2.6,sMax:3.6,bMin:.4,bMax:.72}]},{seed:118831,k:.1,radius:8500,order:-999.5,cruise:!0,pops:[{count:700,sMin:1.2,sMax:2,bMin:.1,bMax:.35}]},{seed:745529,k:.22,radius:8200,order:-999.45,cruise:!0,pops:[{count:450,sMin:1.6,sMax:2.6,bMin:.15,bMax:.45}]},{seed:264018,k:.4,radius:7900,order:-999.4,cruise:!0,pops:[{count:250,sMin:2,sMax:3.2,bMin:.2,bMax:.55}]}],jM=`
    attribute float aSize;
    attribute float aBright;
    attribute float aTint;
    varying float vBright;
    varying float vTint;
    uniform float uPxr;
    uniform vec3 uEyeDrift;
    void main() {
        vBright = aBright;
        vTint = aTint;
        // The field is VERY far, not infinite: it carries a small
        // fraction of the real (splice-corrected) camera translation -
        // animate.js feeds uEyeDrift = corrected eye \xD7 K. Over the whole
        // cruise the background drifts a couple of degrees, so every
        // star in the sky moves when we move (owner: nothing may sit
        // dead-still at warp); at rest the zone moves are far too small
        // to read, and the seeded pattern stays the same sky.
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * vec4(position - uEyeDrift, 1.0);
        gl_Position = projectionMatrix * mv;
        // Fixed on-screen size - crispness is the whole point.
        gl_PointSize = aSize * uPxr;
    }
`,KM=`
    precision highp float;
    varying float vBright;
    varying float vTint;
    uniform float uLayerFade;

    ${_s}

    void main() {
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d) * 4.0;
        float core = exp(-r2 * 3.2) * (1.0 - smoothstep(0.7, 1.0, r2));
        float a = core * vBright * uLayerFade;
        if (a < 0.004) discard;
        // Cool-white to warm-white spread, authored display sRGB, capped
        // under the bloom knee (same 0.85 budget as the shell stars) -
        // background stars never bloom.
        vec3 tint = mix(vec3(0.72, 0.82, 1.00), vec3(1.00, 0.90, 0.74), vTint);
        vec3 col = displayToSceneLinear(tint * min(a, 0.80));
        gl_FragColor = vec4(col, 1.0);
    }
`;function yp(i,e){let t=[];for(let n=0;n<gp.length;n++){let s=gp[n],r=vp(s.seed),o=s.pops.reduce((v,m)=>v+m.count,0),a=new Float32Array(o*3),l=new Float32Array(o),c=new Float32Array(o),u=new Float32Array(o),h=0;for(let v of s.pops)for(let m=0;m<v.count;m++,h++){let p,y,b;do p=r()*2-1,y=r()*2-1,b=p*p+y*y;while(b>=1||b===0);let x=2*Math.sqrt(1-b);a[h*3+0]=p*x*s.radius,a[h*3+1]=(1-2*b)*s.radius,a[h*3+2]=y*x*s.radius,l[h]=v.sMin+r()*(v.sMax-v.sMin);let I=r();c[h]=v.bMin+(v.bMax-v.bMin)*I*I,u[h]=r()}let d=new Qe;d.setAttribute("position",new Xe(a,3)),d.setAttribute("aSize",new Xe(l,1)),d.setAttribute("aBright",new Xe(c,1)),d.setAttribute("aTint",new Xe(u,1));let f=new Oe({uniforms:{uPxr:{value:e||1},uEyeDrift:{value:new C},uLayerFade:{value:s.cruise?0:1}},vertexShader:jM,fragmentShader:KM,transparent:!0,blending:wt,depthWrite:!1,depthTest:!0,toneMapped:!1,fog:!1}),g=new kt(d,f);g.frustumCulled=!1,g.renderOrder=s.order,g.name="deepField"+n,g.layers.enable(9),i.add(g),t.push({points:g,k:s.k,cruise:!!s.cruise})}return t}var br=10;function JM(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.55)"),n.addColorStop(.65,"rgba(255,255,255,0.10)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new mn(e)}var _p=[[.62,.68,.78],[.55,.64,.78],[.68,.72,.8],[.5,.58,.72],[.72,.74,.8]],ei=320,oh=-2850,QM=600,Mp=40,$M=640,ew=1.6,tw=230,nw=1.4,iw=.42,sw=9;function wp(i,e,t={}){let n=new Xt;n.frustumCulled=!1,t.axis?n.quaternion.setFromUnitVectors(new C(0,0,-1),t.axis):n.quaternion.copy(e.quaternion),i.add(n);let s=n.quaternion.clone().invert(),r=new Float32Array(ei),o=new Float32Array(ei),a=new Float32Array(ei),l=new Float32Array(ei*3),c=new Float32Array(ei*6),u=new Float32Array(ei*6),h=new C;function d(){h.copy(e.position).sub(n.position).applyQuaternion(s)}function f(G,re){let ue=Math.random()*Math.PI*2,fe=(.12+.88*Math.sqrt(Math.random()))*$M;r[G]=h.x+Math.cos(ue)*fe,o[G]=h.y+Math.sin(ue)*fe,a[G]=h.z+(re?oh+Math.random()*(Mp-oh):oh-Math.random()*QM);let le=_p[Math.random()*_p.length|0];l[G*3+0]=le[0],l[G*3+1]=le[1],l[G*3+2]=le[2],u[G*6+3]=0,u[G*6+4]=0,u[G*6+5]=0}d();for(let G=0;G<ei;G++)f(G,!0);let g=new Qe;g.setAttribute("position",new Xe(c,3)),g.setAttribute("color",new Xe(u,3));let v=new pn({vertexColors:!0,transparent:!0,opacity:0,blending:wt,depthWrite:!1,depthTest:!0}),m=new Zn(g,v);m.frustumCulled=!1,m.renderOrder=998,m.layers.set(br),n.add(m);let p=new Float32Array(ei*3),y=new Float32Array(ei*3),b=new Qe;b.setAttribute("position",new Xe(p,3)),b.setAttribute("color",new Xe(y,3));let x=JM(),I=new rn({map:x,size:sw,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:0,blending:wt,depthWrite:!1,depthTest:!0}),T=new kt(b,I);T.frustumCulled=!1,T.renderOrder=997,T.layers.set(br),n.add(T);let w=0,A=1,M=1,_=!0,L=null;function D(G){d(),L===null&&(L=h.z);let re=L-h.z;L=h.z;let ue=G>0?re/G:0,fe=Math.min(1,ue/2400),le=Math.min(tw,re*ew);for(let N=0;N<ei;N++){_&&a[N]-h.z>Mp&&f(N,!1);let Y=r[N],te=o[N],q=a[N];c[N*6+0]=Y,c[N*6+1]=te,c[N*6+2]=q,c[N*6+3]=Y,c[N*6+4]=te,c[N*6+5]=q-le;let K=Y-h.x,oe=te-h.y,pe=Math.sqrt(K*K+oe*oe),Ae=Math.max(60,h.z-q),we=Math.min(1,ue*pe/(Ae*Ae)/nw),ve=we*we*(3-2*we);u[N*6+0]=l[N*3+0]*ve,u[N*6+1]=l[N*3+1]*ve,u[N*6+2]=l[N*3+2]*ve;let O=1-Math.min(1,Math.max(0,(Ae-1900)/900)),Ie=iw*(1-ve)*(.35+.65*O)*(.22+.78*we);p[N*3+0]=Y,p[N*3+1]=te,p[N*3+2]=q,y[N*3+0]=l[N*3+0]*Ie,y[N*3+1]=l[N*3+1]*Ie,y[N*3+2]=l[N*3+2]*Ie}g.attributes.position.needsUpdate=!0,g.attributes.color.needsUpdate=!0,v.opacity=fe*fe*.4*w*A,m.visible=v.opacity>.003&&le>.01,b.attributes.position.needsUpdate=!0,b.attributes.color.needsUpdate=!0,I.opacity=w*M,T.visible=I.opacity>.003}function F(G){n.position.add(G)}function z(G){w=G}function V(G){A=G}function k(G){M=G}function j(G){_=G}function H(){i.remove(n),g.dispose(),v.dispose(),b.dispose(),I.dispose(),x.dispose()}return{update:D,rebase:F,setOpacity:z,setStreakLevel:V,setPointLevel:k,setRespawn:j,dispose:H}}var rw=`
    varying vec3 vDir;
    void main() {
        // Camera-locked sphere at the far plane - same trick as spaceEnv.
        vDir = normalize(position);
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_Position.z = gl_Position.w;
    }
`;function ow(i){return`
    precision highp float;
    varying vec3 vDir;
    // Rebase-corrected camera position: continuous across the load-ready
    // origin jump, so the sampled volume never skips.
    uniform vec3  uCamPos;
    // Global density envelope (a safety knob; 1 in normal operation).
    uniform float uAmount;
    // The system's cleared cavity, in the same rebase-corrected coords.
    // uCavityOn is continuous 0..1: held at 0 during cruise (the clearing
    // hasn't been reached), eased to 1 across the early brake, 1 at rest.
    uniform vec3  uCavityC;
    uniform float uCavityOn;
    // Audio: bass swells the nebula emission, like the old sky did.
    uniform float uPulse;
    // Temporal jitter phase (golden-ratio cycled per frame).
    uniform float uFrame;

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

    // 4 octaves - the fine structure the 3-octave version lacked.
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

    // Interleaved gradient noise (Jimenez) - screen-space blue-noise-like
    // dither for the march offset.
    float ign(vec2 px) {
        return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715))));
    }

    // Palette - the authored filament families (teal / purple / pink).
    const vec3 tealCol = vec3(0.150, 0.360, 0.520);
    const vec3 purpCol = vec3(0.330, 0.150, 0.540);
    const vec3 pinkCol = vec3(0.540, 0.190, 0.400);
    const vec3 deepCol = vec3(0.070, 0.180, 0.340);

    ${_s}

    const int   STEPS     = ${i};
    const float T_NEAR    = 120.0;   // march start (world units from camera)
    const float T_FAR     = 7000.0;  // march end - the resting sky's depth
    const float INV_SCALE = 1.0 / 1400.0; // world units -> noise units
    // Extinction coefficient per world unit at density 1. Opacity per
    // segment is 1 - exp(-SIGMA * density * segmentLength): a real optical
    // depth integral, so the accumulated look is INDEPENDENT of the step
    // count.
    const float SIGMA = 0.00042;
    // Broad ambient nebula body under the filaments.
    const float AMBIENT = 0.22;
    // The system's wind-blown cavity: density zero inside R0, full beyond
    // R1. The star shell (2600-7000) is embedded in the cloud deck.
    const float CAVITY_R0 = 1900.0;
    const float CAVITY_R1 = 2700.0;

    void main() {
        vec3 dir = normalize(vDir);
        // Temporally-cycled IGN jitter: the grain pattern changes every
        // frame and averages away at display rates.
        float j = fract(ign(gl_FragCoord.xy) + uFrame);
        vec3 acc = vec3(0.0);
        float A = 0.0;
        for (int i = 0; i < STEPS; i++) {
            // ft^2 biases samples toward the camera - the near medium
            // carries the fastest parallax, so it gets the resolution.
            float ft0 = (float(i) + j) / float(STEPS);
            float ft1 = (float(i) + 1.0 + j) / float(STEPS);
            float t   = mix(T_NEAR, T_FAR, ft0 * ft0);
            float seg = mix(T_NEAR, T_FAR, min(ft1, 1.0) * min(ft1, 1.0)) - t;
            vec3 wp = uCamPos + dir * t;
            vec3 p = wp * INV_SCALE;
            // Filaments with real dark gaps, over a broad ambient body,
            // gathered into passing banks.
            float fil  = smoothstep(0.44, 0.80, fbm(p));
            float base = AMBIENT * smoothstep(0.30, 0.75, vnoise(p * 0.19 + vec3(4.0, 17.0, 8.0)));
            float bank = smoothstep(0.26, 0.62, vnoise(p * 0.33 + vec3(9.1, 3.7, 27.0)));
            float dens = (base + fil) * bank;
            // Thin right at the camera so nothing hard-clips the near
            // plane as it sweeps past.
            dens *= smoothstep(T_NEAR, 620.0, t);
            // The cleared cavity around the destination system.
            dens *= mix(1.0, smoothstep(CAVITY_R0, CAVITY_R1, length(wp - uCavityC)), uCavityOn);
            if (dens > 0.002) {
                // Hue continents, teal <-> purple with a pink lift on the
                // densest warm cores; the ambient body stays deep blue.
                float h = vnoise(p * 0.21 + vec3(31.0, 7.0, 19.0));
                vec3 c = mix(tealCol, purpCol, smoothstep(0.30, 0.75, h));
                c = mix(c, pinkCol, 0.35 * smoothstep(0.62, 0.95, h));
                c = mix(deepCol, c, clamp(fil / max(base + fil, 1e-3), 0.0, 1.0));
                float a = (1.0 - exp(-SIGMA * dens * seg)) * uAmount;
                acc += (1.0 - A) * a * c;
                A += (1.0 - A) * a;
            }
        }
        if (A < 0.004) discard;
        vec3 col = acc / max(A, 1e-4);
        col *= 1.0 + uPulse * 0.45;
        col = displayToSceneLinear(col);
        gl_FragColor = vec4(col, A);
    }
`}function bp(i,e={}){let t=new on(1,32,16),n=new Oe({uniforms:{uCamPos:{value:new C},uAmount:{value:1},uCavityC:{value:new C(0,0,0)},uCavityOn:{value:1},uPulse:{value:0},uFrame:{value:0}},vertexShader:rw,fragmentShader:ow(e.steps||12),side:Tt,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,fog:!1}),s=new We(t,n);s.frustumCulled=!1,s.renderOrder=-998,s.name="nebulaVolume",s.layers.enable(9),i.add(s);let r=0;return{update(o,a){let l=n.uniforms.uCamPos.value;l.copy(o),a&&l.sub(a),r=r+1&1023,n.uniforms.uFrame.value=r*.6180339887%1},setAmount(o){n.uniforms.uAmount.value=o,s.visible=o>.002},setCavity(o){n.uniforms.uCavityC.value.copy(o)},setCavityOn(o){n.uniforms.uCavityOn.value=o},setPulse(o){n.uniforms.uPulse.value=o},dispose(){i.remove(s),t.dispose(),n.dispose()}}}function Sp(){let i=new uo,e=new Ct(45,window.innerWidth/window.innerHeight,.5,1e3);e.layers.enable(2),e.layers.enable(4),window.camera=e,e.position.set(0,200,5e3),e.far=9e3,e.updateProjectionMatrix(),e.lookAt(0,0,0);let t;try{t=new Oa({antialias:!0})}catch(_){try{localStorage.setItem("reviewer","1")}catch{}throw location.reload(),_}t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=xo,t.toneMappingExposure=1.1,t.localClippingEnabled=!0,document.body.appendChild(t.domElement),t.domElement.setAttribute("aria-label","3D volcanic island world - interactive research visualization"),t.domElement.setAttribute("role","img"),E._spaceEnv=pp(i,void 0),E._starShell=xp(i,t.getPixelRatio()),E._starShellMat=E._starShell.material,E._skyLayers=yp(i,t.getPixelRatio()),E._nebulaOffset=new C,E._nebulaVol=bp(i,{steps:E.lowPower?8:12}),E._nebulaVol.setCavity(new C(0,0,0)),E._nebulaVol.setCavityOn(1);let n=new Xt;i.add(n),window._island=n;let s=new Oe({transparent:!1,depthWrite:!0,side:Et,uniforms:{},vertexShader:`
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
        `}),r=new fn(800,800),o=new We(r,s);o.rotation.x=-Math.PI/2,o.position.y=-5,o.renderOrder=-2,o.userData.aoInclude=!0,i.add(o),E.floorA=o;let a=new Oe({transparent:!1,depthWrite:!0,side:Et,uniforms:{},vertexShader:`
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
        `}),l=new fn(800,800),c=new We(l,a);c.rotation.x=-Math.PI/2,c.position.y=-5,c.renderOrder=-2,i.add(c),E.floorB=c,o.visible=!1,c.visible=!1,E.scene=i,E.camera=e,E.renderer=t,E.islandGroup=n,E.lowPower=(function(){let _=new URLSearchParams(location.search).get("lowpower");if(_==="1")return!0;if(_==="0")return!1;let L=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches),D=navigator.hardwareConcurrency||8,F=navigator.deviceMemory||8;return L&&(D<=4||F<=4)})();let u=E.lowPower?0:4,h=t.getPixelRatio(),d=new ot(window.innerWidth*h,window.innerHeight*h,{type:yt,samples:u}),f=new al(t,d);f.setSize(window.innerWidth,window.innerHeight),f.addPass(new ll(i,e));class g extends To{render(L,D,F,z,V){let k=[];this.scene.traverse(G=>{(G.isMesh||G.isSprite||G.isPoints||G.isLine)&&G.visible&&!G.userData.aoInclude&&(k.push(G),G.visible=!1)});let j=E.water,H=j?j.onBeforeRender:null;j&&(j.onBeforeRender=()=>{}),super.render(L,D,F,z,V),j&&(j.onBeforeRender=H);for(let G of k)G.visible=!0}}let v=new g(i,e,window.innerWidth,window.innerHeight);v.updateGtaoMaterial({radius:.8,distanceExponent:1.5,thickness:1,scale:1.2,samples:16}),v.updatePdMaterial({lumaPhi:10,depthPhi:4,normalPhi:8,radius:5,radiusExponent:1,rings:3,samples:12}),v.blendIntensity=.62,v.setSize(window.innerWidth*Math.min(window.devicePixelRatio,2)*.5,window.innerHeight*Math.min(window.devicePixelRatio,2)*.5),f.addPass(v),E.gtaoPass=v,E.lowPower&&(v.enabled=!1);let m=new wr(new he(window.innerWidth,window.innerHeight),.6,.5,.8);f.addPass(m),E.bloomPass=m,f.addPass(new cl);let p=new Tn().load("lensDirtTexture.webp"),y=new $n({uniforms:{tDiffuse:{value:null},iTime:{value:0},lensPosition:{value:new he(0,0)},iResolution:{value:new he(window.innerWidth,window.innerHeight)},colorGain:{value:new C(56,22,11)},starPoints:{value:6},glareSize:{value:.3},flareSize:{value:.004},flareSpeed:{value:.4},flareShape:{value:.1},haloScale:{value:.5},opacity:{value:1},animated:{value:!0},anamorphic:{value:!1},enabled:{value:!1},secondaryGhosts:{value:1},starBurst:{value:!1},ghostScale:{value:.1},aditionalStreaks:{value:1},lensDirtTexture:{value:p}},vertexShader:`
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
        `});f.addPass(y),E.lensFlarePass=y;let b=new $n({uniforms:{tDiffuse:{value:null},darkness:{value:.2},offset:{value:1.2}},vertexShader:`
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
        `});f.addPass(b),E.vignettePass=b;let x=new $n({uniforms:{tDiffuse:{value:null},resolution:{value:new he(window.innerWidth,window.innerHeight)},strength:{value:0}},vertexShader:`
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
        `});f.addPass(x),E.dofPass=x;let I=new $n({uniforms:{tDiffuse:{value:null},strength:{value:7e-4}},vertexShader:`
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
        `});f.addPass(I),E.chromaticPass=I;let T=new $n({uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.015}},vertexShader:`
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
        `});E.grainPass=null;let w=Math.min(window.devicePixelRatio,2),A=new hl(window.innerWidth*w,window.innerHeight*w);f.addPass(A),E.fxaaPass=A;let M=new pl(window.innerWidth*w,window.innerHeight*w,e);f.addPass(M),E.taaPass=M,E.composer=f;{let _=new dr(t);_.compileEquirectangularShader();let L=new uo,D=new on(10,32,16);D.scale(-1,1,1);let F=new Oe({side:Tt,uniforms:{},vertexShader:`
                varying vec3 vDir;
                void main() {
                    vDir = normalize(position);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec3 vDir;
                void main() {
                    float y = vDir.y;
                    // Brighter museum environment - glass needs contrast to refract.
                    // The glass dish samples this PMREM env through transmission,
                    // so the env brightness directly controls dish clarity.
                    // Zero cost per frame - PMREM is baked once.
                    vec3 top = vec3(0.55, 0.52, 0.50);
                    vec3 mid = vec3(0.22, 0.25, 0.32);
                    vec3 bot = vec3(0.08, 0.08, 0.10);
                    // Broad key light area for glass caustics
                    float keyDot = max(0.0, dot(vDir, normalize(vec3(0.6, 0.5, 0.6))));
                    float keyHighlight = pow(keyDot, 16.0) * 3.2 + pow(keyDot, 4.0) * 0.55;
                    // Rim light - wider, brighter
                    float rimDot = max(0.0, dot(vDir, normalize(vec3(-0.6, 0.4, -0.8))));
                    float rimHighlight = pow(rimDot, 12.0) * 1.4 + pow(rimDot, 3.0) * 0.30;
                    vec3 col = y > 0.0 ? mix(mid, top, y) : mix(mid, bot, -y);
                    col += vec3(1.0, 0.95, 0.88) * keyHighlight;
                    col += vec3(0.5, 0.7, 1.0) * rimHighlight;
                    gl_FragColor = vec4(col, 1.0);
                }
            `});L.add(new We(D,F));let z=_.fromScene(L,.04);i.environment=z.texture,E.glassMat&&(E.glassMat.envMap=z.texture,E.glassMat.needsUpdate=!0),E._envTexture=z.texture,_.dispose()}window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(window.innerWidth,window.innerHeight),x.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),E.lensFlarePass&&E.lensFlarePass.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)}),E.euler.setFromQuaternion(e.quaternion)}function Ep(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,b=a.length;y<b;y++){let x=a[y],I=i.attributes[x];l[x]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((w,A)=>{let M=new w.array.constructor(w.count*w.itemSize);c[x][A]=new w.constructor(M,w.itemSize,w.normalized)}))}let f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=f*v;for(let y=0;y<r;y++){let b=n?n.getX(y):y,x="";for(let I=0,T=a.length;I<T;I++){let w=a[I],A=i.getAttribute(w),M=A.itemSize;for(let _=0;_<M;_++)x+=`${~~(A[h[_]](b)*v+m)},`}if(x in t)u.push(t[x]);else{for(let I=0,T=a.length;I<T;I++){let w=a[I],A=i.getAttribute(w),M=i.morphAttributes[w],_=A.itemSize,L=l[w],D=c[w];for(let F=0;F<_;F++){let z=h[F],V=d[F];if(L[V](o,A[z](b)),M)for(let k=0,j=M.length;k<j;k++)D[k][V](o,M[k][z](b))}}t[x]=o,u.push(o),o++}}let p=i.clone();for(let y in i.attributes){let b=l[y];if(p.setAttribute(y,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),y in c)for(let x=0;x<c[y].length;x++){let I=c[y][x];p.morphAttributes[y][x]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return p.setIndex(u),p}function ah(i,e){if(e===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===yo||e===tl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===yo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ml=class extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ji.extractUrlBase(e);o=ji.resolveURL(c,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new go(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pp){try{o[tt.KHR_BINARY_GLTF]=new Ch(e)}catch(h){s&&s(h);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Oh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new dh;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ph(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new Ih;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new Lh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function aw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hh=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Kn(u),c.distance=h;break;case"spot":c=new Ya(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},dh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,n){let s=[];e.color=new se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},fh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Mt)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Eh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Th=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ah=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Rh=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let v=new Ve,m=new C,p=new Kt,y=new C(1,1,1),b=new vs(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,v.compose(m,p,y));for(let x in l)if(x==="_COLOR_0"){let I=l[x];b.instanceColor=new gi(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);St.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Pp="glTF",Ao=12,Tp={JSON:1313821514,BIN:5130562},Ch=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ao,r=new DataView(e,Ao),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Tp.JSON){let c=new Uint8Array(e,Ao+o,a);this.content=n.decode(c)}else if(l===Tp.BIN){let c=Ao+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Nh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Nh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Sr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},a,c,qt,d)})})}},Ih=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lh=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},gl=class extends Xi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+h;for(let x=0;x!==a;x++){let I=o[v+x+a],T=o[v+x+l]*u,w=o[g+x+a],A=o[g+x]*u;r[x]=y*I+b*T+m*w+p*A}return r}},lw=new Kt,Dh=class extends gl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return lw.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ap={9728:At,9729:xt,9984:zu,9985:Qr,9986:er,9987:Mn},Rp={33071:fi,33648:no,10497:bt},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cw={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Et})),i.DefaultMaterial}function Ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hw(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function dw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fw(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=i.indices+":"+uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uh(i.targets[n]);return e}function uh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Uh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var mw=new Ve,Oh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Tn(this.options.manager):this.textureLoader=new ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ms(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lh[s.type],a=Sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Xe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lh[s.type],c=Sr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==h){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(y);b||(v=new c(a,p*f,s.count*f/u),b=new pr(v,f/u),t.cache.add(y,b)),m=new gs(b,l,d%f/u,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),m=new Xe(v,l,g);if(s.sparse!==void 0){let p=lh.SCALAR,y=Sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new y(o[1],b,s.sparse.count*p),T=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new Xe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=I.length;w<A;w++){let M=I[w];if(m.setX(M,T[w*l]),l>=2&&m.setY(M,T[w*l+1]),l>=3&&m.setZ(M,T[w*l+2]),l>=4&&m.setW(M,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ap[d.magFilter]||xt,u.minFilter=Ap[d.minFilter]||Mn,u.wrapS=Rp[d.wrapS]||bt,u.wrapT=Rp[d.wrapT]||bt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==At&&u.minFilter!==xt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new It(v);m.needsUpdate=!0,d(m)}),t.load(ji.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),bi(h,o),h.userData.mimeType=o.mimeType||pw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new rn,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new pn,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let h=s[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||ch.OPAQUE;if(u===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ch.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vt){let h=r.emissiveFactor;a.emissive=new se().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&o!==Vt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),bi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ms(s,h,r),h})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=fw(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Cp(new Qe,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let v=u[f],m=o[f],p,y=c[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Fa(v,y):new We(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=ah(p.geometry,tl):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,yo));else if(m.mode===Rn.LINES)p=new Zn(v,y);else if(m.mode===Rn.LINE_STRIP)p=new gr(v,y);else if(m.mode===Rn.LINE_LOOP)p=new vr(v,y);else if(m.mode===Rn.POINTS)p=new kt(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),m.extensions&&Ms(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ms(s,h[0],r),h[0];let d=new Xt;r.extensions&&Ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Mi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ba(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let y=0,b=d.length;y<b;y++){let x=d[y],I=f[y],T=g[y],w=v[y],A=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=n._createAnimationTracks(x,I,T,w,A);if(M)for(let _=0;_<M.length;_++)p.push(M[_])}return new Xa(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,mw)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new fo:c.length>1?u=new Xt:c.length===1?u=c[0]:u=new St,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),bi(u,r),r.extensions&&Ms(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&Ms(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Jt||d instanceof It)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Qi[r.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qi[r.path]){case Qi.weights:c=vi;break;case Qi.rotation:c=xi;break;case Qi.position:case Qi.scale:c=yi;break;default:n.itemSize===1?c=vi:c=yi;break}let u=s.interpolation!==void 0?cw[s.interpolation]:cr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Qi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof xi?Dh:gl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function gw(i,e,t){let n=e.attributes,s=new wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=Uh(Sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=Uh(Sr[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new dn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Cp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Nh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),bi(i,e),gw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hw(i,e.targets,t):i})}var Ip=new C,vw=new C,xw=new C;function Lp(){let{scene:i,renderer:e}=E;E.sunFixedPos=null,E.SUN_DIR.copy(wi).normalize(),i.fog=null;let t=new Zi(new se(1,.97,.92),6.5);e.shadowMap.enabled=!0,e.shadowMap.type=Lu,t.castShadow=!0,t.shadow.mapSize.set(4096,4096),t.shadow.camera.near=400,t.shadow.camera.far=900,t.shadow.camera.left=-36,t.shadow.camera.right=36,t.shadow.camera.top=36,t.shadow.camera.bottom=-36,t.shadow.bias=-2e-4,t.shadow.normalBias=.05,t.shadow.radius=1,t.layers.enable(2),i.add(t);let n=new Zi(6719675,0);i.add(n);let s=new qa(new se(.42,.54,.75),new se(.12,.1,.08),.65);window.__DAILY_PARAMS&&(s.color.set(window.__DAILY_PARAMS.hemiSky),s.groundColor.set(window.__DAILY_PARAMS.hemiGround)),i.add(s);let r=new Za(4479354,.85);i.add(r);let o=new Zi(window.__DAILY_PARAMS?.rimColor??11850478,1.2);o.position.set(80,45,130),i.add(o),e.toneMappingExposure=1.1;let a=new Tn().load("moon.webp");a.colorSpace=Mt;let l=new on(1.2,64,64),c=new Oe({uniforms:{uMap:{value:a},uSunWorldPos:{value:wi.clone()},uTint:{value:new se(13421789)},uAmbient:{value:.1},uGlow:{value:.4},uBumpScale:{value:2.2}},vertexShader:`
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
                // so the lit limb carries most of it) - the limb still
                // reads during an eclipse, it just no longer looks lit
                // by a neon tube.
                vec3 V = normalize(cameraPosition - vWorldPos);
                float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0);
                float sunSide = 0.35 + 0.65 * smoothstep(-0.2, 0.5, dot(N, L));
                col += vec3(0.72, 0.68, 0.60) * rim * uGlow * sunSide;
                gl_FragColor = vec4(col, 1.0);
            }`}),u=new We(l,c);u.frustumCulled=!1,u.layers.set(4),i.add(u),E.moonOrb=u;let h=()=>new ml(new mo).load("gateway.min.glb",le=>{let N=le.scene;N.scale.set(.03,.03,.03),N.frustumCulled=!1;let Y=[];N.traverse(ve=>{ve.isMesh&&(ve.userData.aoInclude=!0,ve.material&&ve.material.emissive&&Y.push(ve),ve.material&&ve.material.color&&(ve.material.color.multiplyScalar(.5),ve.material.roughness!==void 0&&(ve.material.roughness=Math.max(ve.material.roughness,.55))))}),E._gatewayEmissiveMeshes=Y;let te=new on(120,8,8),q=new Vt({visible:!1}),K=new We(te,q);K.name="_gatewayHitSphere",N.add(K),E._gatewayHitSphere=K;let oe=[],pe=[];N.traverse(ve=>{ve.isMesh&&ve.material&&(oe.push({m:ve.material,t:ve.material.transparent,o:ve.material.opacity??1}),ve.material.transparent=!0,ve.material.opacity=0,pe.push(ve),ve.visible=!1)});let Ae=()=>{let ve=performance.now();(function O(){let Ie=Math.min(1,(performance.now()-ve)/900);for(let _e of oe)_e.m.opacity=Ie*_e.o;if(Ie<1){requestAnimationFrame(O);return}for(let _e of oe)_e.m.transparent=_e.t,_e.m.opacity=_e.o;requestAnimationFrame(()=>{E._gatewayWarm=!0})})()},we=ve=>{if(i.add(N),E.gateway=N,!ve)for(let Ie of oe)Ie.m.transparent=Ie.t,Ie.m.opacity=Ie.o;let O=ve?1:16;(function Ie(){for(let _e=0;_e<O;_e++){let Se=pe.shift();Se&&(Se.visible=!0)}if(pe.length){requestAnimationFrame(Ie);return}if(ve){Ae();return}requestAnimationFrame(()=>{requestAnimationFrame(()=>{E._gatewayWarm=!0})})})()};if(E._introReleased&&!E._introDone){let ve=setInterval(()=>{E._introDone&&(clearInterval(ve),we(!0))},200)}else E._introDone?we(!0):we(!1)}),d=!1,f=()=>{d||(d=!0,h())};if(E._firstViewLoaded)f();else{let le=setInterval(()=>{E._firstViewLoaded&&(clearInterval(le),f())},100);setTimeout(()=>{clearInterval(le),f()},8e3)}let g=new on(10,64,64),v=new Oe({uniforms:{uTime:{value:0},uLimbCenter:{value:new se(1,.97,.88)},uLimbMid:{value:new se(1,.78,.42)},uLimbEdge:{value:new se(.95,.45,.15)},uDiscScale:{value:1},uSunFade:{value:1}},vertexShader:`
            uniform float uDiscScale;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewNormal;
            varying vec3 vPosition;
            void main() {
                vUv = uv;
                vNormal = normal;
                // View-space normal for proper limb darkening from any camera angle
                vViewNormal = normalize(normalMatrix * normal);
                // Object-space position stays unscaled so the granulation
                // pattern is glued to the surface while the disc grows.
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position * uDiscScale, 1.0);
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform float uSunFade;
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
                // 3D position-based noise - no UV seams, no pole pinching
                vec3 p = normalize(vPosition) * 6.0;

                // 4-octave fBm for solar granulation / supergranulation
                float n = noise3D(p + uTime * 0.08) * 0.35
                        + noise3D(p * 2.1 - uTime * 0.12) * 0.25
                        + noise3D(p * 4.3 + uTime * 0.18) * 0.15
                        + noise3D(p * 8.7 - uTime * 0.25) * 0.08;

                // Slow large-scale convection cells (supergranulation)
                float cells = noise3D(p * 1.2 + vec3(uTime * 0.03, 0.0, uTime * 0.02));
                cells = smoothstep(0.35, 0.65, cells);

                // View-dependent limb darkening - works from any camera angle
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
                // real glare core around it - at 1.35 it barely cleared
                // the knee and read as a flat orange sticker. Limb stays
                // relatively darker so the disc keeps its sphere read
                // inside the glow.
                col *= 2.2;

                // Approach extinction (rest: 1). The disc is an OPAQUE
                // body: multiplying toward black made it a growing BLACK
                // occluder over the glowing nebula ("black sun", owner-
                // caught). Instead it dims toward the ambient sky color -
                // far out it is a nebula-lit body indistinguishable from
                // the sky behind it, and it warms continuously inward.
                col = mix(vec3(0.016, 0.036, 0.082), col, uSunFade);

                gl_FragColor = vec4(col, 1.0);
            }
        `,depthWrite:!0}),m=new We(g,v);m.frustumCulled=!1,m.visible=!0,i.add(m);function p(le,N,Y){let q=document.createElement("canvas");q.width=q.height=256;let K=q.getContext("2d"),oe=K.createImageData(256,256),pe=256/2;for(let we=0;we<256;we++)for(let ve=0;ve<256;ve++){let O=(ve-pe)/pe,Ie=(we-pe)/pe,_e=Math.min(1,Math.sqrt(O*O+Ie*Ie)),Se=Math.pow(1-_e,Y),ne=(we*256+ve)*4;oe.data[ne]=le[0]*Se+N[0]*(1-Se),oe.data[ne+1]=le[1]*Se+N[1]*(1-Se),oe.data[ne+2]=le[2]*Se+N[2]*(1-Se),oe.data[ne+3]=Se*255}K.putImageData(oe,0,0);let Ae=new mn(q);return Ae.anisotropy=4,Ae}let y=p([255,240,200],[255,200,130],2.4),b=new mr({map:y,color:16777215,transparent:!0,opacity:.17,blending:wt,depthWrite:!1,depthTest:!0}),x=new ho(b);x.scale.setScalar(32),m.add(x);let I=p([255,180,100],[255,120,40],1.6),T=new mr({map:I,color:16777215,transparent:!0,opacity:.11,blending:wt,depthWrite:!1,depthTest:!0}),w=new ho(T);w.scale.setScalar(70),m.add(w),E.sunOrb=m,E._sunHaloMat=T,E._sunHaloInnerMat=b;let A=new on(10,16,16),M=new Vt({visible:!1}),_=new We(A,M);_.name="_sunHitSphere",m.add(_),E._sunHitSphere=_;let L=new on(2,16,16),D=new We(L,M.clone());D.material.visible=!1,D.name="_moonHitSphere",D.layers.set(4),u.add(D),E._moonHitSphere=D;let F=new Xt;F.name="orbitalDiagramGroup",i.add(F);let z=Math.cos(vl),V=Math.sin(vl),k=new C(wi.x*z-wi.z*V,wi.y,wi.x*V+wi.z*z),j=Math.hypot(k.x,k.z);E._sunWorldPos=k.clone();function H(le,N,Y,te){let q=[],K=[];for(let Ae=0;Ae<=te;Ae++){let we=Ae/te*Math.PI*2;q.push(new C(Math.cos(we)*le,0,Math.sin(we)*le)),K.push(Ae/te)}let oe=new Qe().setFromPoints(q);oe.setAttribute("aProgress",new nt(K,1));let pe=new vr(oe,N);return pe.position.copy(Y),pe.renderOrder=-5,pe.frustumCulled=!1,pe}let G=new Oe({transparent:!0,depthWrite:!1,uniforms:{baseColor:{value:new se(6264248)},baseOpacity:{value:.15},nearFalloff:{value:40},farFalloff:{value:340},innerStart:{value:33},innerEnd:{value:50}},vertexShader:`
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
        `}),re=H(j,G,k,1024);F.add(re),E._islandOrbitRing=re;let ue=new pn({color:7316936,transparent:!0,opacity:.16,depthWrite:!1}),fe=H(rl,ue,new C(0,0,0),512);fe.layers.set(4),F.add(fe),E._moonOrbitRing=fe,E._diagramGroup=F,requestAnimationFrame(()=>{E.islandGroup&&E.islandGroup.traverse(le=>{le.isMesh&&le.geometry===E.mtnGeo&&(le.castShadow=!0,le.receiveShadow=!0)})}),E.sunLight=t,E.moonLight=n,E.hemiLight=s,E.ambLight=r,E.rimLight=o}var vl=-.35,Er=new C;function Dp(i){let{scene:e,camera:t,sunLight:n,moonLight:s,SUN_DIR:r,water:o}=E,a=E._dragOverride||{};if(Er.copy(a.sun||wi),!a.sun){let y=Math.cos(vl),b=Math.sin(vl),x=Er.x,I=Er.z;Er.x=x*y-I*b,Er.z=x*b+I*y}let l=Er;n.position.copy(l),r.copy(l).normalize(),E.sunOrb&&(a.sun||E.sunOrb.position.copy(l),E.sunOrb.material.uniforms&&(E.sunOrb.material.uniforms.uTime.value=i%600));let c=window.__moonBoost;E._moonPhase||(E._moonPhase=op),E._moonPrevElapsed===void 0&&(E._moonPrevElapsed=i);let u=Math.max(0,i-E._moonPrevElapsed);E._moonPrevElapsed=i;let h=Math.PI*2/rp,d=c&&c.orbitsLeft>0?c.factor:1,f=h*d*u;if(E._moonPhase+=f,c&&c.orbitsLeft>0&&d!==1){c._swept=(c._swept||0)+Math.abs(f);let y=Math.PI*2;for(;c._swept>=y&&c.orbitsLeft>0;)c._swept-=y,c.orbitsLeft-=1;c.orbitsLeft<=0&&(window.__moonBoost=null)}let g=E._moonPhase;a.moon||Ip.set(Math.cos(g)*rl,0,Math.sin(g)*rl);let v=a.moon||Ip;if(E.moonOrb&&(E.moonOrb.position.copy(v),E.moonOrb.visible=!0,E.moonOrb.material.uniforms&&E.sunOrb&&E.moonOrb.material.uniforms.uSunWorldPos.value.copy(E.sunOrb.position),s.position.copy(v),E.gateway)){if(a.gateway){let T=E.gateway.position,w=E.sunOrb?T.distanceTo(E.sunOrb.position):1/0,A=E.moonOrb?T.distanceTo(E.moonOrb.position):1/0;w<15?E._gwCaptureTarget="sun":A<15?E._gwCaptureTarget="moon":E._gwCaptureTarget=null}else{let T=E._gwCaptureTarget||E._gwOrbitTarget||"moon";E._gwOrbitTarget=T,E._gwCaptureTarget=null;let w=T==="sun"&&E.sunOrb?E.sunOrb.position:E.moonOrb?E.moonOrb.position:null;if(w){let A=i/50*Math.PI*2;E.gateway.position.set(w.x+Math.sin(A)*6*.5,w.y+Math.cos(A)*6,w.z+Math.cos(A)*6*.5),E.gateway.rotation.y=A*.5}a.gateway&&delete a.gateway}E.gateway.visible=!0;let I=E._gatewayEmissiveMeshes;if(I&&I.length){let T=vw.subVectors(n.position,E.gateway.position).normalize(),w=xw.subVectors(t.position,E.gateway.position).normalize(),A=Math.pow(Math.max(0,T.dot(w)),64),M=A*1,_=A*1,L=A*1.2,D=A*1.3;for(let F=0;F<I.length;F++){let z=I[F].material;z.emissive.setRGB(M,_,L),z.emissiveIntensity=D}}}let m=window._weather&&window._weather.smoothed||0,p=.7*(1-m*m*.75);window._lightRays&&(window._lightRays.uniforms.uDayBlend.value=p),window._caustics&&(window._caustics.uniforms.uDayBlend.value=p),window._foam&&window._foam.mesh&&window._foam.mesh.visible&&(window._foam.mat.opacity=.09+Math.sin(i*.8)*.035),E.terrainPulseUniform&&(E.terrainPulseUniform.value=.6*(.8+Math.sin(i*1.5)*.2)*(window._volcanoGlow||1))}var Np="mountain_height_8bit.webp";function Up(i,e,t){let s=e/t;Math.abs(s-1)>.1&&console.warn(`heightmap aspect ${s.toFixed(2)} differs from expected 1; island shape may distort`);let r=0,o=0,a=0,l=Math.max(1,Math.floor(i.length/4/256)),c=0;for(let v=0;v<i.length;v+=4*l)r+=i[v],o+=i[v+1],a+=i[v+2],c++;let u=r/c,h=o/c,d=a/c,f=Math.abs(u-h)/255,g=Math.abs(u-d)/255;(f>.1||g>.1)&&console.warn("heightmap red channel differs strongly from green/blue; this may be a colormap, not grayscale elevation")}function Op(){let{islandGroup:i,SUN_DIR:e}=E,t=new fn($u,$u,sl,sl);t.rotateX(-Math.PI/2);let n={value:.6*.8},s=new Tn,r=E.renderer?Math.min(8,E.renderer.capabilities.getMaxAnisotropy()):4;function o(w,A){let M=s.load(w);return M.wrapS=M.wrapT=bt,M.repeat.set(3,3),M.anisotropy=r,A&&(M.colorSpace=Mt),M}let a=o("rockface_color.jpg",!0),l=o("rockface_normal.jpg",!1),c=o("rockface_rough.jpg",!1),u=o("sand_color.jpg",!0),h=o("sand_normal.jpg",!1),d={uSandMap:{value:u},uSandNrm:{value:h}},f=new jn({map:a,color:new se(3.4,3.4,3.4),vertexColors:!0,roughness:.9,metalness:.05,emissive:new se(1715524),emissiveIntensity:.75,normalMap:l,normalScale:new he(.82,.82),roughnessMap:c,envMapIntensity:.05}),g={value:new C(1,.4,0).normalize()};window._terrain={sunUniform:g},f.onBeforeCompile=w=>{w.uniforms.uPulse=n,w.uniforms.uSunLocal=g,w.uniforms.uSandMap=d.uSandMap,w.uniforms.uSandNrm=d.uSandNrm,w.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},w.uniforms.uCloudBase=window.__cloudBaseU=window.__cloudBaseU||{value:999},w.uniforms.uMist=window.__mistU=window.__mistU||{value:0},w.uniforms.uMistCol=window.__mistColU=window.__mistColU||{value:new se(.3,.35,.41)},w.vertexShader=w.vertexShader.replace("#include <common>",["#include <common>","attribute vec3 aEmissive;","attribute float aSand;","uniform float uPulse;","uniform vec3 uSunLocal;","varying float vSunFacing;","varying float vSand;","varying float vSlopeY;","varying vec2 vLocXZ;","// uTime removed - lava trickle was stripped"].join(`
`)).replace("#include <beginnormal_vertex>",["#include <beginnormal_vertex>","// Sun-facing in object space, for the day/night fill split.","vSunFacing = dot(normalize(objectNormal), normalize(uSunLocal));","vSand = aSand;","// Terrain slope (1 = level bench, 0 = vertical cliff) for","// the slope-zoned material below.","vSlopeY = clamp(normalize(objectNormal).y, 0.0, 1.0);"].join(`
`)).replace("#include <color_vertex>",["#include <color_vertex>","#ifdef USE_COLOR","  // --- Rock grain speckle: breaks up smooth vertex-color gradient.","  // Half the old +-12% swing: per-vertex noise this dense is","  // sub-pixel from every camera pose, and at full strength it","  // shimmered like static as the island rotated. ---","  float grain = fract(sin(dot(floor(position.xz * 40.0), vec2(127.1, 311.7))) * 43758.5453);","  vColor.rgb *= 0.94 + grain * 0.12;","","  // --- Geological strata: very subtle horizontal variation ---","  float strata = sin(position.y * 12.0 + grain * 2.0) * 0.5 + 0.5;","  strata = smoothstep(0.35, 0.65, strata);","  vColor.rgb *= 0.97 + strata * 0.03;","","  vColor.rgb += aEmissive * uPulse;","","  // Volcano peak red glow - always-on, concentrated at the summit","  float peakHeight = clamp((position.y - 4.5) / 1.5, 0.0, 1.0);","  float peakGlow = peakHeight * peakHeight * 0.35;","  vColor.rgb += vec3(peakGlow * 0.8, peakGlow * 0.25, peakGlow * 0.04);","","  // --- Crevice veins: hash-grid crack pattern on upper slopes ---","  float veinHeightNorm = clamp((position.y - 0.6) / 5.1, 0.0, 1.0);","  float veinMask = smoothstep(0.45, 0.6, veinHeightNorm) * 0.35;","  if (veinMask > 0.01) {","    vec2 cellA = position.xz * 2.5;","    vec2 cellB = position.xz * 6.0;","    vec2 fracA = fract(cellA);","    vec2 fracB = fract(cellB);","    float edgeA = min(min(fracA.x, 1.0 - fracA.x), min(fracA.y, 1.0 - fracA.y));","    float edgeB = min(min(fracB.x, 1.0 - fracB.x), min(fracB.y, 1.0 - fracB.y));","    float crackA = 1.0 - smoothstep(0.0, 0.08, edgeA);","    float crackB = 1.0 - smoothstep(0.0, 0.05, edgeB);","    float veinGlow = max(crackA * 0.7, crackB * 0.5);","    vColor.rgb += vec3(0.8, 0.25, 0.04) * veinGlow * veinMask;","  }","#endif"].join(`
`)),w.vertexShader=w.vertexShader.replace("#include <common>",["#include <common>","varying float vWorldHeight;","varying float vWorldDist;"].join(`
`)).replace("#include <worldpos_vertex>",["#include <worldpos_vertex>","vWorldHeight = position.y;","vWorldDist = length(position.xz);","vLocXZ = position.xz;"].join(`
`)),w.fragmentShader=w.fragmentShader.replace("#include <common>",["#include <common>","varying float vWorldHeight;","varying float vWorldDist;","varying float vSunFacing;","varying float vSand;","varying float vSlopeY;","varying vec2 vLocXZ;","uniform sampler2D uSandMap;","uniform sampler2D uSandNrm;","uniform float uDeepLight;","uniform vec3 uSunLocal;","uniform float uCloudBase;","uniform float uMist;","uniform vec3 uMistCol;"].join(`
`)).replace("#include <color_fragment>",["#include <color_fragment>","// Beach sand albedo: where the baked aSand mask says beach,","// swap the rock-photo x vertex-tint product for real sand","// grain (tiled fine so footprint pocks read at close range).","// The 1.6 lift compensates the material color multiplier the","// sand sample bypasses.","if (vSand > 0.003) {","  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 9.0).rgb;","  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.6, vSand);","}","// --- Slope-zoned volcanic material (ALU only, no taps) ---","// A single tiled rock hue read as procedural. Real volcanic","// terrain is zoned: near-black basalt on steep faces, rusty","// oxidized scoria patches on the upper flanks, pale ash on","// level benches near the summit, faint strata banding, and","// a dark wet tide ring where rock meets sea.","{","  float dryLand = smoothstep(0.62, 0.95, vWorldHeight) * (1.0 - vSand);","  if (dryLand > 0.001) {","    float steep = 1.0 - vSlopeY;","    float h01 = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);","    float m1 = sin(vLocXZ.x * 0.55 + 1.3) * cos(vLocXZ.y * 0.48 + 4.2);","    float m2 = sin(vLocXZ.x * 1.7 + 0.4) * cos(vLocXZ.y * 1.5 + 2.1);","    float macro = m1 * 0.65 + m2 * 0.35;","    // Steep faces: dark cool basalt. Gentle ground: warm tuff.","    vec3 zone = mix(vec3(1.06, 1.01, 0.90), vec3(0.48, 0.47, 0.50), smoothstep(0.2, 0.75, steep));","    // Rust scoria lobes on the upper flanks.","    float rust = smoothstep(0.1, 0.7, macro) * smoothstep(0.2, 0.55, h01);","    zone = mix(zone, vec3(1.22, 0.74, 0.52), rust * 0.55);","    // Pale ash benches near the summit on flat ground.","    float ash = smoothstep(0.6, 0.95, h01) * vSlopeY;","    zone = mix(zone, vec3(1.14, 1.10, 1.02), ash * 0.5);","    // Faint strata banding tied to elevation.","    float strataB = 0.95 + 0.05 * sin(vWorldHeight * 9.0 + macro * 2.0);","    diffuseColor.rgb *= mix(vec3(1.0), zone * strataB, dryLand);","  }","  // Wet tide ring: dark saturated band just above the water,","  // anchoring the island INTO the sea (skipped on sand).","  float tide = smoothstep(1.05, 0.72, vWorldHeight) * smoothstep(0.5, 0.66, vWorldHeight);","  diffuseColor.rgb *= 1.0 - tide * 0.45 * (1.0 - vSand);","}"].join(`
`)).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","// The cool-blue night-readability emissive floor is a DRY-LAND","// term. Underwater it glowed through the semi-transparent ocean","// as a centered pale halo that erased the land/water boundary in","// the top-down framing. Fade it out just below the waterline.","totalEmissiveRadiance *= smoothstep(0.10, 0.55, vWorldHeight);","// And keep most of it on the day side: at full strength it","// filled the shadow hemisphere and flattened the island into","// an evenly-lit blob. A low floor keeps a whisper of night","// relief while matching the storm-mode night darkness.","totalEmissiveRadiance *= mix(0.12, 1.0, smoothstep(-0.30, 0.40, vSunFacing));"].join(`
`)).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","// Day/night split: the ambient + hemi fill is what washed the","// island into a uniformly-lit mass with no terminator. Pull","// the indirect fill down on slopes facing away from the sun","// so the island reads half lit / half shadow like the moon.","// Floors sit low (0.12) so the clear-weather night side is as","// dark as the storm one - the split must not change with weather.","float dayside = smoothstep(-0.30, 0.40, vSunFacing);","// Grabbed here for the summit mist further down: chunks are","// inlined into one main(), so this local is still in scope at","// <opaque_fragment>. The mist has to know where the sun","// actually lands, or it paints lit cloud over shadowed rock.","// The RECEIVED direct diffuse is the honest signal - it is","// already zero in cast shadow and on the night side, and it","// costs nothing (the same trick as litAmt below).","float mistShadow = smoothstep(0.02, 0.18, dot(reflectedLight.directDiffuse, vec3(0.3333)));","reflectedLight.indirectDiffuse *= mix(0.12, 1.0, dayside);","reflectedLight.indirectSpecular *= mix(0.0, 1.0, dayside);","// Direct specular too: the camera-facing rim fill was making","// the wet low-roughness shore band sparkle on the NIGHT side,","// which read as light leaking through the terrain. Capped at","// 0.30 even on the day side - grazing-angle GGX spikes at the","// terminator were blooming into blinding white flickers that","// made the island glimmer in a way rock never would.","reflectedLight.directSpecular *= mix(0.0, 0.30, dayside);","// Specular only where light actually LANDS: gate by the","// received direct diffuse (which already includes the","// shadow map). Kills the single-pixel glints inside","// day-side crevices - dark hollows whose detail normals","// still caught the sun through the position-only gate.","float litAmt = smoothstep(0.02, 0.18, dot(reflectedLight.directDiffuse, vec3(0.3333)));","reflectedLight.directSpecular *= litAmt;","// Silhouette de-twinkle: grazing-angle pixels are the last","// shimmer source (sub-pixel silhouette facets catch the key","// for one frame at a time as the island turns). Fade all","// specular where the surface goes edge-on to the camera -","// matte rock loses nothing visually there.","float rimNV = abs(dot(normal, normalize(vViewPosition)));","float rimFade = smoothstep(0.04, 0.28, rimNV);","reflectedLight.directSpecular *= rimFade;","reflectedLight.indirectSpecular *= mix(0.4, 1.0, rimFade);","// Absolute ceiling: every gate above SCALES the specular,","// but a single GGX spike is HDR - scale 3.0 by 0.3 and the","// pixel still flashes white. Matte volcanic rock never","// flashes; clamp the term itself, and fade it out with","// distance (past ~50u a one-pixel highlight is pure noise","// while the diffuse sheen carries the material).","float specDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);","reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * specDist;","reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));"].join(`
`)).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Detail normal: second tap of the SAME rock normal map at","// a finer scale, blended in. One extra texture fetch buys","// small-rock surface detail everywhere (apparent resolution","// roughly doubles at close range). tbn is threes own","// cotangent frame (built by getTangentFrame even without a","// tangent attribute) so this needs no extra geometry data.","#ifdef USE_NORMALMAP","// Distance fade: past ~mid-range these micro-normals are","// SUB-PIXEL, and sub-pixel normal variance under the sun","// key re-rolls per frame as the island turns - the","// twinkling/deep-fried shimmer. Full detail up close,","// gone by 130u where it could only alias.","float dtlFade = clamp(1.0 - (length(vViewPosition) - 35.0) / 60.0, 0.0, 1.0);","vec3 dtlN = texture2D( normalMap, vNormalMapUv * 4.3 ).xyz * 2.0 - 1.0;","normal = normalize( normal + tbn * vec3( dtlN.xy * 0.35 * dtlFade, 0.0 ) );","#endif","// NOTE (twinkle hunt, 2026-07-12): the resting-view pixel","// twinkle on lit flanks is VERTEX-facet temporal aliasing","// gated purely on dish rotation (36 hot flips/frame at","// spin on, 2 at spin off; shadows/clouds/specular ruled","// out empirically). Distance-fading these map normals was","// tried and made it WORSE (49 flips) - map noise dithers","// the facet flips; do not re-try. Real fixes: slower spin","// or TAA.","// Specular AA: widen roughness by per-pixel normal","// variance (screen derivatives) so sub-pixel normal","// detail can never flash single-pixel highlights - the","// fried speckle killed at the source instead of by blur.","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption (Beer-Lambert): submerged","// slopes darken and blue-shift with true water depth, so","// looking inward through the glass the floor visibly","// deepens toward the island base. max() floor: pure","// exponential drove the basin to PITCH black - real deep","// water keeps a dim blue ambient from downwelled scatter.","float wDepth = clamp(0.62 - vWorldHeight, 0.0, 4.0);","// Downwelling light is DIRECTIONAL: the water column on","// the night side receives no sun, so submerged ground","// there dims (including the shallow shore ring) - but the","// dimming applies BEFORE the ambient floor, so the night","// basin bottoms out at the same never-darker-than-space","// level instead of going pitch black.","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vLocXZ), normalize(uSunLocal.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Bloom-proof the rock: the bloom pass thresholds at 0.8","// scene-linear, and single sunlit-speckle pixels crossing it","// bloom into flashing buds as the island turns - the fried","// look. Rock never legitimately glows; ceiling it just under","// the threshold starves bloom of terrain input entirely.","// (The lava pool + crater glow are separate meshes and keep","// their bloom.) Soft knee, not a hard min: linear below 0.62,","// asymptotic cap. History: 0.78 read OVERCAST (full sun never","// landed), 0.92 restored brilliant faces but left 0.12 of bloom","// headroom over the 0.80 threshold - enough for a lone bright","// DIFFUSE pixel to bloom-flicker as the island turns, the last","// twinkle path once specular is ceilinged. 0.84 keeps the sun","// on the lit faces while cutting bloom overshoot to 0.04.","vec3 kneeExcess = max(outgoingLight - vec3(0.62), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.62)) + 0.22 * (vec3(1.0) - exp(-kneeExcess / 0.22));","// Summit mist: the cloud volume cannot draw in FRONT of","// opaque terrain (no depth-aware march in this pipeline),","// so a peak poking into the deck showed crisp rock inside","// cloud. Fade rock above the deck base into the cloud","// ambient instead - a shrouded summit reads shrouded. The","// noise breaks the band edge so it looks like drift, not a","// waterline.","// Band starts AT the cloud base - never below it. It used to","// open 0.7 BELOW a base that was itself the volume box floor","// rather than the visible cloud, so the summit went grey while","// it was plainly under the deck (owner-caught from the side).","float mistBand = smoothstep(uCloudBase, uCloudBase + 1.1, vWorldHeight);","float mistN = 0.78 + 0.22 * sin(vNormalMapUv.x * 41.0 + vNormalMapUv.y * 37.0);","// Mist is LIT MATTER, not paint: it takes the same sun the rock","// takes. Without this it lerped every pixel toward a flat lit","// grey - brightening the night side (which read as sun leaking","// through the mountain) and erasing cast shadows inside the band.","float mistDay = smoothstep(-0.30, 0.40, vSunFacing);","float mistLit = mix(0.12, 1.0, mistDay) * mix(0.45, 1.0, mistShadow);","float mistT = min(0.92, mistBand * uMist * mistN) * mix(0.40, 1.0, mistDay);","outgoingLight = mix(outgoingLight, uMistCol * mistLit, mistT);","#include <opaque_fragment>"].join(`
`)).replace("#include <roughnessmap_fragment>",["#include <roughnessmap_fragment>","// Photo roughness (sampled by the include above, normalized","// by the 0.9 material constant) modulates a height-based","// base: wet near shore, matte mid-slope, dusty at peak.","// Floors stay high - glossy pixels on detailed normals fire","// the white specular flicker (the old fried look).","float texRough = clamp(roughnessFactor / 0.9, 0.0, 1.0);","float heightNorm = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);","roughnessFactor = mix(0.5, 0.85, smoothstep(0.0, 0.3, heightNorm));","roughnessFactor = mix(roughnessFactor, 0.55, smoothstep(0.8, 1.0, heightNorm));","// Lava crevices: cooled-lava sheen where emissive is strong","float creviceWet = smoothstep(0.3, 0.0, vWorldHeight - 0.6) * 0.35;","// Floors raised 0.42 -> 0.52: glossy pixels on the dense","// detail normals fire the white specular twinkle.","roughnessFactor = max(0.52, roughnessFactor - creviceWet);","roughnessFactor = clamp(roughnessFactor * mix(0.85, 1.15, texRough), 0.52, 1.0);","// Dry sand is matte, wet swash sand is glossier.","if (vSand > 0.003) {","  float wetSand = smoothstep(0.35, 0.0, vWorldHeight - 0.62);","  roughnessFactor = mix(roughnessFactor, mix(0.85, 0.5, wetSand), vSand);","}"].join(`
`))};let v=new We(t,f);v.renderOrder=1,v.userData.aoInclude=!0,i.add(v);{let _=function(L){for(let D of M)i.remove(D),D.geometry.dispose();M.length=0;for(let D=0;D<A.length;D++){let F=A[D],z=F,V=0;if(L){if(D!==0&&D!==2&&L()<.22)continue;z={a:F.a+(L()-.5)*.9,r:Math.min(11.9,Math.max(8.2,F.r+(L()-.5)*1.6)),s:F.s*(.72+L()*.6),squash:F.squash*(.85+L()*.3)},V=L()*19}let k=new po(1,3),j=k.attributes.position;for(let re=0;re<j.count;re++){let ue=j.getX(re),fe=j.getY(re),le=j.getZ(re),Y=1+(Math.sin(ue*5.1+D*7.7+V)*Math.cos(le*4.3+D*3.1+V)+Math.sin(fe*6.7+D*11.3+V*1.7)*.6)*.16;j.setXYZ(re,ue*Y,fe*Y,le*Y)}k.computeVertexNormals();let H=new We(k,w);H.scale.set(z.s,z.s*z.squash,z.s*(.8+D%3*.15)),H.position.set(Math.cos(z.a)*z.r,Ye-z.s*z.squash*.45,Math.sin(z.a)*z.r);{let re=z.s*z.squash,ue=new Float32Array(j.count*3);for(let fe=0;fe<j.count;fe++){let le=j.getY(fe)*re+H.position.y,N=1-Math.min(1,Math.abs((le-Ye-.06)/.14)),Y=Math.max(0,Math.sin(j.getX(fe)*9+D*5+V)),te=Math.max(0,N)*Y*.85;ue[fe*3]=1+te*.45,ue[fe*3+1]=1+te*.32,ue[fe*3+2]=1+te*.1}k.setAttribute("color",new Xe(ue,3))}H.rotation.y=z.a*2.3,H.userData.aoInclude=!0,H.castShadow=!0,H.receiveShadow=!0,i.add(H),M.push(H);let G=D<5?2:0;for(let re=0;re<G;re++){let ue=D*3.7+re*2.3+V,fe=new po(1,2),le=fe.attributes.position;for(let oe=0;oe<le.count;oe++){let pe=le.getX(oe),Ae=le.getY(oe),we=le.getZ(oe),O=1+(Math.sin(pe*6.3+ue)*Math.cos(we*5.1+ue*1.7)+Math.sin(Ae*7.9+ue*.9)*.5)*.22;le.setXYZ(oe,pe*O,Ae*O,we*O)}fe.computeVertexNormals();let N=new Float32Array(le.count*3).fill(1);fe.setAttribute("color",new Xe(N,3));let Y=new We(fe,w),te=z.s*(.1+.09*Math.abs(Math.sin(ue*3.1)));Y.scale.set(te,te*.8,te*(.85+.3*Math.abs(Math.cos(ue))));let q=z.a+Math.sin(ue)*.9,K=z.r+Math.cos(ue*1.3)*z.s*.9;Y.position.set(Math.cos(q)*K,Ye+.02+Math.sin(ue*2.1)*.05-te*.35,Math.sin(q)*K),Y.rotation.set(ue,ue*1.7,ue*.6),Y.castShadow=!1,Y.receiveShadow=!0,i.add(Y),M.push(Y)}}},w=new jn({map:a,normalMap:l,roughnessMap:c,normalScale:new he(.8,.8),color:new se(1.35,1.28,1.18),roughness:.9,metalness:.02,envMapIntensity:.05});w.onBeforeCompile=L=>{L.uniforms.uSandMap=d.uSandMap,L.uniforms.uSandNrm=d.uSandNrm,L.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},L.uniforms.uSunW=window.__sunDirW=window.__sunDirW||{value:new C(1,.2,0)},L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIsWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vIsWP = (modelMatrix * vec4(position, 1.0)).xyz;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",["#include <common>","varying vec3 vIsWP;","uniform sampler2D uSandMap;","uniform sampler2D uSandNrm;","uniform float uDeepLight;","uniform vec3 uSunW;","// Static per-position hash (no time input, cannot flicker):","// patchy sand pockets around each skerry waterline.","float isletSand() {","  float band = 1.0 - smoothstep(0.0, 0.22, abs(vIsWP.y - 0.70));","  float pk = max(0.0, sin(vIsWP.x * 6.5 + 1.3) * cos(vIsWP.z * 5.7 + 4.1));","  return clamp(band * (0.35 + pk), 0.0, 1.0);","}"].join(`
`)).replace("#include <color_fragment>",["#include <color_fragment>","float sMask = isletSand();","if (sMask > 0.003) {","  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 7.0).rgb;","  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.5, sMask);","}"].join(`
`)).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Specular AA (see mountain material).","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","// Anti-twinkle ceiling (see mountain material) - the","// skerries had NO specular gate and pipped freely.","float isSpecDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);","reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * isSpecDist;","reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption (see seabed material).","float wDepth = clamp(0.62 - vIsWP.y, 0.0, 4.0);","// Directional downwelling, floor applied last (world","// sun here since vIsWP is a world position).","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vIsWP.xz), normalize(uSunW.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Bloom-proof soft knee (see mountain material).","vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));","#include <opaque_fragment>"].join(`
`))},w.vertexColors=!0;let A=[{a:.55,r:9.2,s:1.05,squash:.5},{a:1.15,r:10.6,s:.55,squash:.6},{a:2.95,r:8.6,s:1.35,squash:.42},{a:3.35,r:11.3,s:.5,squash:.55},{a:5.05,r:9.8,s:.8,squash:.48},{a:.85,r:11.8,s:.28,squash:.5},{a:3.05,r:10.2,s:.24,squash:.5},{a:5.45,r:11,s:.32,squash:.45}],M=[];_(null),window.__rebuildSkerries=()=>_(Math.random)}{let w=function(Y){let te=document.createElement("canvas");te.width=te.height=128;let q=te.getContext("2d"),K=q.createImageData(128,128);for(let pe=0;pe<16384*4;pe+=4){let Ae=Math.floor((Math.sin((pe+Y)*127.1)*43758.5453%1+1)%1*255);K.data[pe]=K.data[pe+1]=K.data[pe+2]=Ae,K.data[pe+3]=255}q.putImageData(K,0,0);let oe=new mn(te);return oe.wrapS=oe.wrapT=bt,oe},A=w(0),M=w(7919),_={value:0},L=new Oe({uniforms:{uTime:_,uNoise1:{value:A},uNoise2:{value:M}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,side:Pt}),D=.35,F=.7,z=.45,V=new Sn(D,32),k=new We(V,L);k.rotation.x=-Math.PI/2,k.position.set(0,Mr-z-.05,0),k.renderOrder=2,i.add(k);let j=new Sn(D*.85,32),H=new Oe({uniforms:{uTime:_,uNoise1:{value:A}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,side:Pt}),G=new We(j,H);G.rotation.x=-Math.PI/2,G.position.set(0,Mr-z-.15,0),G.renderOrder=1,i.add(G);let re=new Va(D,D+.25,32),ue=new Oe({vertexShader:`
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
            `,transparent:!0,depthWrite:!1,side:Pt}),fe=new We(re,ue);fe.rotation.x=-Math.PI/2,fe.position.set(0,Mr-z-.03,0),fe.renderOrder=2,i.add(fe);let le=new Kn(16732192,.5,3);le.position.set(0,Mr-z+.2,0),i.add(le);let N=new Jn;k.onBeforeRender=()=>{_.value=N.getElapsedTime()%600},E.lavaPool={mesh:k,deepMesh:G,ringMesh:fe,light:le,timeUniform:_}}E.mtnGeo=t,E.terrainPulseUniform=n,nh(Np,(w,A,M)=>{Up(w,A,M);let _=null,L={a:0,b:0,c:0,d:0},D=()=>{let q=L,K=t.attributes.position,oe=t.attributes.uv,pe=new Float32Array(K.count*3),Ae=new Float32Array(K.count),we={},ve=9.8,O=7;for(let ne=0;ne<K.count;ne++){let De=ih(w,A,M,oe.getX(ne),oe.getY(ne)),me=K.getX(ne),P=K.getZ(ne),S=Math.sqrt(me*me+P*P),B=De*Qn*(q.hMul||1),Z=.7,ie=.45;if(S<Z*1.5){let Me=Math.max(0,1-S/Z),U=Me*Me*(3-2*Me);if(B-=U*ie*(q.crMul||1),S>Z*.8&&S<Z*1.4){let de=1-Math.abs(S-Z)/(Z*.4);B+=Math.max(0,de)*.08}}let J=0;if(S>O){let Me=Math.min(1,(S-O)/(ve-O));J=Me*Me*(3-2*Me);let U=Ye-1.2;B=B+(U-B)*J}if(S>ve){let Me=ve/S;K.setX(ne,me*Me),K.setZ(ne,P*Me),B=Ye-1.2}let Ee=0;{let Me=B-Ye,U=1.6;if(Math.abs(Me)<U&&S<ve){let de=Math.abs(Me)/U;Ee=1-de*de*de*(de*(de*6-15)+10);let Q=Ye-.08+Me*.16,ce=Math.sin(S*5.5-Math.atan2(P,me)*3)*.03+Math.sin(me*3.1+P*2.7)*.02;B=B+(Q+ce*Ee-B)*Ee}}{let Me=Math.max(0,Math.min(1,(B-Ye)/(Mr-Ye))),U=(1-Ee)*Math.min(1,B-Ye>.2?1:(B-Ye-.2)/.2+1);if(Me>.02&&U>0){let de=Math.sin(me*3.1+Math.cos(P*2.4)+q.a)*Math.cos(P*3.4+Math.sin(me*1.9)+q.b),Q=Math.sin(me*6.7+1.1+q.c)*Math.cos(P*5.9+2.3+q.d),ce=Math.sin(me*12.9+4.2+q.a)*Math.cos(P*11.3+.7+q.c),Ce=(1-Math.abs(de))*.55+(1-Math.abs(Q))*.28+(1-Math.abs(ce))*.14,Pe=.5+.5*Math.sin(me*.9+2+q.b)*Math.cos(P*.8+.5+q.d),Ze=(.26+.65*Me*Me)*U*(.45+.8*Pe);B+=(Ce-.55)*Ze,B+=Math.pow(Me,3)*.35*U*(.6+.4*(1-Math.abs(de)));let dt=Math.atan2(P,me),Bt=Math.sin(S*1.6+dt*2+q.a)*.4,at=Math.sin(dt*7+Bt+Math.sin(dt*3+1.7+q.b)*.8+q.c),en=1-Math.abs(at),In=Math.sin(Math.PI*Math.min(1,Math.max(0,(Me-.04)/.9)));B-=en*en*.45*In*U;let Ur=.9,Ls=B/Ur,si=Ls-Math.floor(Ls),Go=(Math.floor(Ls)+Math.min(1,Math.max(0,(si-.35)/.3)))*Ur,Wo=Math.max(0,Math.sin(me*.55+4+q.d)*Math.cos(P*.6+1.2+q.a)),Ds=Math.sin(Math.PI*Math.min(1,Math.max(0,(Me-.05)/.75))),Or=Math.min(.7,Wo*1.15)*Ds*U;B=B*(1-Or)+Go*Or}}K.setY(ne,B);let ge=(Math.random()-.5)*.04,xe=Math.max(0,1-Math.min(1,Math.abs(B-Ye)/.5)),Ne,ae,ye;if(B>Ye-.3){let Me=lp(Math.max(0,Math.min(1,De+ge)),xe);Ne=Me.r,ae=Me.g,ye=Me.b}else{let Me=th(Math.max(0,Math.min(1,(B-An)/kn)));Ne=Me.r,ae=Me.g,ye=Me.b}if(B>Ye+.04&&B<Ye+.5){let Me=1-Math.abs((B-Ye-.22)/.28),U=Math.max(0,Math.sin(me*1.9+4.7)*Math.cos(P*2.3+1.3)),de=Math.min(1,Math.max(0,Me)*U*1.15);Ne+=(.375-Ne)*de,ae+=(.32-ae)*de,ye+=(.235-ye)*de,Ae[ne]=Math.max(Ae[ne],de)}if(B>Ye-.55&&B<=Ye+.04){let Me=1-Math.abs((B-Ye+.22)/.35),U=Math.max(0,Math.sin(me*1.9+4.7)*Math.cos(P*2.3+1.3)),de=Math.min(1,Math.max(0,Me)*U*1.05);Ne+=(.31-Ne)*de,ae+=(.28-ae)*de,ye+=(.215-ye)*de,Ae[ne]=Math.max(Ae[ne],de*.8)}if(Ee>.05){let Me=.55+.45*Math.max(0,Math.sin(me*2.4+3.1)*Math.cos(P*2.8+.9));Ae[ne]=Math.max(Ae[ne],Math.min(1,Ee*1.2*Me))}let Ue=B>Ye-.3,Be=Ue?3.4:1.4,Te=Ue?1.05:.4;if(Ne=Math.min(Te,Ne*Be),ae=Math.min(Te,ae*Be),ye=Math.min(Te,ye*Be),!Ue&&J>0){let Me=1-J*.5;Ne*=Me,ae*=Me,ye*=Me}if(S<1.5){let Me=Math.max(0,1-S/1.5),U=Me*Me*.35;Ne*=1-U,ae*=1-U*1.2,ye*=1-U*.8}pe[ne*3]=Ne,pe[ne*3+1]=ae,pe[ne*3+2]=ye;let qe=K.getX(ne),Fe=K.getZ(ne);if(B>Ye&&B<Ye+.5){let Me=Math.atan2(Fe,qe),U=Math.round((Me+Math.PI)/(Math.PI*2)*360),de=Math.sqrt(qe*qe+Fe*Fe);(!we[U]||de>we[U].dist)&&(we[U]={x:qe,z:Fe,dist:de})}}K.needsUpdate=!0,t.setAttribute("color",new Xe(pe,3)),t.setAttribute("aSand",new Xe(Ae,1)),t.computeVertexNormals();let Ie=sl+1,_e=new Float32Array(K.count);for(let ne=0;ne<K.count;ne++)_e[ne]=K.getY(ne);let Se=new Float32Array(K.count*3);for(let ne=0;ne<K.count;ne++){let De=_e[ne];if(De<Ye+.2)continue;let me=Math.floor(ne/Ie),P=ne%Ie,S=De,B=De,Z=0,ie=0;for(let Te=-2;Te<=2;Te++)for(let qe=-2;qe<=2;qe++){if(Te===0&&qe===0)continue;let Fe=me+Te,Me=P+qe;if(Fe>=0&&Fe<Ie&&Me>=0&&Me<Ie){let U=_e[Fe*Ie+Me];S=Math.max(S,U),B=Math.min(B,U),Z+=U,ie++}}let J=ie>0?Z/ie:De,Ee=Math.max(0,De-S+.05)*20,ge=Math.max(0,(De-Qn*.85)/(Qn*.15)),xe=Math.max(0,J-De),Ne=xe*5*(1-xe*.5),ae=Math.min(1,Ee+ge*1.6+Ne),ye=K.getX(ne),Ue=K.getZ(ne),Be=Math.sqrt(ye*ye+Ue*Ue);ae*=1-Math.min(1,Be/8),Se[ne*3]=ae,Se[ne*3+1]=ae*.25,Se[ne*3+2]=ae*.03}t.setAttribute("aEmissive",new Xe(Se,3));{let ne=1/0;for(let De=0;De<K.count;De++){let me=K.getX(De),P=K.getZ(De);Math.sqrt(me*me+P*P)<.3&&(ne=Math.min(ne,K.getY(De)))}if(ne<1/0&&E.lavaPool){let De=ne+.02;E.lavaPool.mesh.position.y=De,E.lavaPool.deepMesh.position.y=De-.1,E.lavaPool.ringMesh.position.y=De+.02,E.lavaPool.light.position.y=De+.3}}_=we};D(),window.__regenIsland=()=>{let q=Math.PI*2;L={a:Math.random()*q,b:Math.random()*q,c:Math.random()*q,d:Math.random()*q,hMul:.86+Math.random()*.19,crMul:.7+Math.random()*.7};try{D(),t.attributes.position.needsUpdate=!0,t.computeVertexNormals(),window.__rebuildSkerries&&window.__rebuildSkerries(),window._cloud&&window._cloud.mat.uniforms.uSeedOff&&window._cloud.mat.uniforms.uSeedOff.value.set(Math.random()*7,Math.random()*7,Math.random()*7)}catch(K){console.warn("island regen failed",K)}};let F=t.attributes.position,z=Object.values(_),V=4,k=z.length*V,j=400,H=k+j,G=new Float32Array(H*3),re=new Float32Array(H),ue=new Float32Array(H),fe=new Uint8Array(H),le=0;for(let q=0;q<z.length;q++){let K=z[q].x,oe=z[q].z;for(let pe=0;pe<V;pe++)G[le*3]=K+(Math.random()-.5)*.1,G[le*3+1]=Ye+.12,G[le*3+2]=oe+(Math.random()-.5)*.1,re[le]=.5+Math.random()*.5,ue[le]=Math.random()*Math.PI*2,fe[le]=0,le++}for(let q=0;q<j;q++){let K=Math.random()*Math.PI*2,oe=st-.15+Math.random()*.1;G[le*3]=Math.cos(K)*oe+(Math.random()-.5)*.1,G[le*3+1]=Ye+.12,G[le*3+2]=Math.sin(K)*oe+(Math.random()-.5)*.1,re[le]=.5+Math.random()*.5,ue[le]=Math.random()*Math.PI*2,fe[le]=1,le++}let N=new Qe;N.setAttribute("position",new Xe(G,3));let Y=new rn({color:16777215,size:.006,transparent:!0,opacity:.07,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}),te=new kt(N,Y);te.layers.set(1),te.renderOrder=12,te.visible=!1,i.add(te),window._foam={geo:N,speeds:re,phases:ue,types:fe,count:H,mat:Y,mesh:te}});let m=512,p=new fn(st*2,st*2,m,m);p.rotateX(-Math.PI/2);let y=o("rockface_color.jpg",!0),b=o("rockface_normal.jpg",!1),x=o("rockface_rough.jpg",!1);y.repeat.set(6,6),b.repeat.set(6,6),x.repeat.set(6,6);let I=new jn({map:y,color:new se(1.7,1.7,1.7),vertexColors:!0,roughness:.85,metalness:0,normalMap:b,normalScale:new he(.6,.6),roughnessMap:x,envMapIntensity:.05});I.onBeforeCompile=w=>{w.uniforms.uDeepLight=window.__deepLightU=window.__deepLightU||{value:0},w.uniforms.uSunLocal=g,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying float vSbWY;
varying vec2 vSbXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vSbWY = position.y;
vSbXZ = position.xz;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying float vSbWY;
varying vec2 vSbXZ;
uniform float uDeepLight;
uniform vec3 uSunLocal;`).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","// Specular AA (see mountain material) - derivative math","// only, no texture cost.","vec3 saaDx = dFdx(normal);","vec3 saaDy = dFdy(normal);","float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));","roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));"].join(`
`)).replace("#include <opaque_fragment>",["// Underwater light absorption: the floor darkens and","// blue-shifts with true depth - the shallow rim shelf","// stays readable while the basin toward the island base","// falls into deep-water dark. THE inward-depth cue.","// max() floor keeps the basin a dim blue instead of the","// pitch black the raw exponential produced.","float wDepth = clamp(0.62 - vSbWY, 0.0, 4.0);","// Directional downwelling with the ambient floor applied","// LAST: night side dims but never below the space level","// (see mountain material).","vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);","float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vSbXZ), normalize(uSunLocal.xz)));","uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));","outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);","// Same bloom-proof soft knee as the mountain: the sun","// hotspot on the SHALLOW SHELF (seen through clear water)","// was blooming into a white patch that tracked the sun","// azimuth around the island.","vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));","outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));","#include <opaque_fragment>"].join(`
`))};let T=new We(p,I);T.renderOrder=2,T.userData.aoInclude=!0,i.add(T),nh("ocean_floor.webp",(w,A,M)=>{let _=p.attributes.position,L=p.attributes.uv,D=new Float32Array(_.count*3);for(let V=0;V<_.count;V++){let k=L.getX(V),j=L.getY(V),H=_.getX(V),G=_.getZ(V),re=Math.sqrt(H*H+G*G),ue=ih(w,A,M,k,j),fe=An+.2+ue*(kn-.5);fe=Math.min(fe,Ye-.5);let le=An+kn*.15,N=st-2;if(re>N){let Ie=Math.min(1,(re-N)/2),_e=Ie*Ie*(3-2*Ie);fe=fe+(le-fe)*_e}if(re>st-.05){let Ie=(st-.05)/re;_.setX(V,H*Ie),_.setZ(V,G*Ie),fe=le}if(re>st-.9){let Ie=Math.min(1,(re-(st-.9))/.9);fe-=Ie*Ie*.38}_.setY(V,fe);let Y=(Math.random()-.5)*.03,te=Math.max(0,Math.min(1,(fe-An)/kn+Y)),q=0;if(te<.3){let Ie=_.getX(V),_e=_.getZ(V),Se=Math.sin(Ie*1.5+_e*.7)*Math.sin(Ie*.3-_e*1.8),ne=Math.sin(Ie*2.8-_e*1.2)*Math.cos(Ie*.9+_e*2.1),De=Math.max(0,Se*.5+.5)*Math.max(0,ne*.5+.5),me=1-te/.3;q=De*me*.4}let K=th(te,q),oe=1-Math.min(1,1-re/st)*.6,pe=.6+te*.3,Ae=Math.max(oe*pe,.55),we=K.r*Ae,ve=K.g*Ae,O=K.b*Ae;if(re>st-2.2){let Ie=Math.min(1,(re-(st-2.2))/2),_e=Ie*Ie*.85;we+=(.012-we)*_e,ve+=(.02-ve)*_e,O+=(.026-O)*_e}D[V*3]=we,D[V*3+1]=ve,D[V*3+2]=O}_.needsUpdate=!0,p.setAttribute("color",new Xe(D,3)),p.computeVertexNormals();let F=[];for(let V=0;V<_.count;V++){let k=_.getY(V),j=_.getX(V),H=_.getZ(V),G=Math.sqrt(j*j+H*H);G>st*.75&&G<st-1&&k>An+kn*.45&&Math.random()<.05&&F.push({x:j,y:k,z:H,d:G})}F.sort((V,k)=>k.y-V.y);let z=F.slice(0,Math.min(30,F.length));if(z.length>0){let k=z.length*15,j=new Float32Array(k*3),H=new Float32Array(k),G=new Float32Array(k);for(let Y=0;Y<z.length;Y++){let te=z[Y],q=.95;for(let K=0;K<15;K++){let oe=Y*15+K;j[oe*3]=te.x*q+(Math.random()-.5)*.3,j[oe*3+1]=te.y+Math.random()*(Ye-te.y),j[oe*3+2]=te.z*q+(Math.random()-.5)*.3,H[oe]=.2+Math.random()*.4,G[oe]=Math.random()*Math.PI*2}}let re=new Qe;re.setAttribute("position",new Xe(j,3));let ue=new nn(new C(0,-1,0),Ye-.05),fe=new nn(new C(0,1,0),-An+.1),le=new rn({color:11197951,size:.02,transparent:!0,opacity:.25,depthWrite:!1,sizeAttenuation:!0,blending:wt,clippingPlanes:[ue,fe]}),N=new kt(re,le);N.renderOrder=5,N.visible=!1,i.add(N),window._rimBubbles={geo:re,positions:j,speeds:H,phases:G,sources:z,perVent:15,count:k,mat:le,mesh:N}}})}var xl=class extends We{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new C(.70707,.70707,0),h=new se(t.sunColor!==void 0?t.sunColor:16777215),d=new se(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new C(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Et,m=t.fog!==void 0?t.fog:!1,p=new nn,y=new C,b=new C,x=new C,I=new Ve,T=new C(0,0,-1),w=new it,A=new C,M=new C,_=new it,L=new Ve,D=new Ct,F=new ot(s,r),z={name:"MirrorShader",uniforms:Lt.merge([Re.fog,Re.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new se(8355711)},sunDirection:{value:new C(.70707,.70707,0)},eye:{value:new C},waterColor:{value:new se(5592405)},dishRotation:{value:0},oceanRadius:{value:31.5},uGlintShiny:{value:110},uGlintSpec:{value:1.9},uStormDim:{value:0}}]),vertexShader:`
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
				uniform float dishRotation; // angle of dish rotation - syncs wave scroll
				uniform float oceanRadius;  // for radial depth color variation
				uniform float uGlintShiny;
				uniform float uGlintSpec;
				uniform float uStormDim;

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
					// Large-scale wave layer - visible from orbital distance
					vec2 uv2 = uv / vec2( 17.0, 19.0 ) + vec2( time / 101.0, time / 97.0 ) + vec2( 0.51, 0.13 );
					vec2 uv3 = uv / vec2( 23.0, 21.0 ) - vec2( time / 109.0, time / -113.0 ) + vec2( 0.88, 0.37 );
					// (A 5th micro-ripple tap lived here briefly - cut: the
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
					// their moving speculars strobe - the persistent
					// shimmer along the dish rim. Flattening toward the
					// up-vector with distance keeps full chop up close
					// (water-level views) and a calm, stable sheen at
					// range. This attenuates specular ALIASING, which no
					// post-AA can fix on moving sub-pixel detail.
					// Fade starts at 150u (was 60): the flicker floor is
					// structurally fixed elsewhere, so mid-range water
					// keeps its living chop - only the far rim (where
					// wavelets are genuinely sub-pixel) flattens.
					float camDist = length( eye - worldPosition.xyz );
					// Cap dropped again 0.65 -> 0.35 -> 0.10: the flattening
					// zone is exactly where the sun's mirror trail lives (the
					// far half of the disc), and flat normals collapse what
					// should be a long shimmering COLUMN into a small pool.
					// At 0.35 the top-down framing also lost its wave field
					// entirely and the disc read as an airbrushed wash. MSAA
					// 8x + the specular caps carry the strobe protection now
					// (frame-difference shimmer measured LOWER at 0.10 with
					// the dimmer scatter below than the old 0.35 shipped).
					float lodFade = clamp( ( camDist - 150.0 ) / 300.0, 0.0, 0.10 );
					vec3 rawWaveN = surfaceNormal;
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
					// Storm deck occludes the sky the mirror reflects; the
					// reflection render itself never sees the cloud volume,
					// so the occlusion has to be applied here. Without it,
					// per-facet fresnel on storm chop keeps bouncing the
					// clear-sky glare and the sun-side pool glows storm-proof.
					vec3 reflectionSample = reflRaw / ( vec3( 1.0 ) + reflRaw ) * 1.7 * ( 1.0 - uStormDim * 0.60 );

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
					// The shallow teal is DIRECT SUNLIGHT scattered out of
					// clear shallow water - under a storm deck it dies with
					// the sun. This constant is what made the sun-side pool
					// glow storm-proof in top-down views (scatter runs it
					// through a 1.6x gain, so dim it at the source).
					vec3 shallowCol = vec3(0.05, 0.13, 0.18) * sunFacing * ( 1.0 - uStormDim * 0.70 );
					vec3 deepCol    = waterColor;
					vec3 localWaterColor = mix(shallowCol, deepCol, depthT);

					// Subsurface scatter - weaker on the night side. Raised
					// 1.2 -> 1.6 to hand back the brightness the diffuse cut
					// removed, but as WATER-COLORED light instead of grey.
					float sss = pow( max( 0.0, dot( surfaceNormal, eyeDirection ) ), 1.5 );
					vec3 scatter = sss * localWaterColor * 1.4 * sunFacing;
					// Slope-keyed texture: from straight above the scatter wash
					// is near-uniform (sss ~ 1 everywhere), which was the milky
					// airbrushed read in the top-down framing. Keying its gain
					// on the PRE-flattened wave slope lets the wave field print
					// through - troughs dip, faces lift - without touching the
					// edge-on views (their shading is fresnel/glint dominated).
					float slopeTex = smoothstep( 0.005, 0.09, 1.0 - rawWaveN.y );
					scatter *= mix( 1.0, mix( 0.72, 1.30, slopeTex ), 0.7 );
					// Depth-tinted ambient - darker water absorbs more red
					vec3 depthTint = localWaterColor * 0.15;
					// Shore proximity brightening - subtle lightening near island.
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
					// Foam is a top-down phenomenon - kill it as the view
					// flattens toward the surface plane.
					float grazeView = pow(1.0 - abs(eyeDirection.y), 3.0);
					// Rim kill: at the glass boundary the flecks trace the
					// dish edge as a chain of discrete bright dashes from
					// low/under views (the grazing fade alone misses camera
					// poses below the surface plane). Crests are a mid-ocean
					// read - fade them out entirely over the last ~1.6u
					// before the wall.
					float crestRim = smoothstep(oceanRadius - 0.4, oceanRadius - 2.0, radialDist);
					vec3 crestCol = vec3(0.55, 0.62, 0.66) * crest * sunSide * 0.5 * (1.0 - grazeView * 0.9) * crestRim;
					// The reflected branch is capped as a WHOLE, and the cap
					// must sit BELOW the 0.8 bloom threshold - at 0.82 the
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
					// mean-surface fresnel (~0.05 at steep angles) - a
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
				}`},V=new Oe({name:z.name,uniforms:Lt.clone(z.uniforms),vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,lights:!0,side:v,fog:m});V.uniforms.mirrorSampler.value=F.texture,V.uniforms.textureMatrix.value=L,V.uniforms.alpha.value=a,V.uniforms.time.value=l,V.uniforms.normalSampler.value=c,V.uniforms.sunColor.value=h,V.uniforms.waterColor.value=d,V.uniforms.sunDirection.value=u,V.uniforms.distortionScale.value=g,V.uniforms.eye.value=f,n.material=V,n.onBeforeRender=function(k,j,H){if(b.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(H.matrixWorld),I.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(I),A.subVectors(b,x),A.dot(y)>0)return;A.reflect(y).negate(),A.add(b),I.extractRotation(H.matrixWorld),T.set(0,0,-1),T.applyMatrix4(I),T.add(x),M.subVectors(b,T),M.reflect(y).negate(),M.add(b),D.position.copy(A),D.up.set(0,1,0),D.up.applyMatrix4(I),D.up.reflect(y),D.lookAt(M),D.far=H.far,D.updateMatrixWorld(),D.projectionMatrix.copy(H.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(D.projectionMatrix),L.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,b),p.applyMatrix4(D.matrixWorldInverse),w.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let G=D.projectionMatrix;_.x=(Math.sign(w.x)+G.elements[8])/G.elements[0],_.y=(Math.sign(w.y)+G.elements[9])/G.elements[5],_.z=-1,_.w=(1+G.elements[10])/G.elements[14],w.multiplyScalar(2/w.dot(_)),G.elements[2]=w.x,G.elements[6]=w.y,G.elements[10]=w.z+1-o,G.elements[14]=w.w,f.setFromMatrixPosition(H.matrixWorld);let re=k.getRenderTarget(),ue=k.xr.enabled,fe=k.shadowMap.autoUpdate;n.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(F),k.state.buffers.depth.setMask(!0),D.layers.enable(1),k.autoClear===!1&&k.clear(),k.render(j,D),n.visible=!0,k.xr.enabled=ue,k.shadowMap.autoUpdate=fe,k.setRenderTarget(re);let le=H.viewport;le!==void 0&&k.state.viewport(le)}}};function yw(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=64,s=new Float32Array((n+1)*(n+1));for(let l=0;l<s.length;l++)s[l]=Math.random();let r=t.createImageData(256,256),o=r.data;for(let l=0;l<256;l++)for(let c=0;c<256;c++){let u=c/256*n,h=l/256*n,d=Math.floor(u),f=Math.floor(h),g=u-d,v=h-f,m=g*g*(3-2*g),p=v*v*(3-2*v),y=n+1,b=s[f*y+d],x=s[f*y+d+1],I=s[(f+1)*y+d],T=s[(f+1)*y+d+1],A=(b+(x-b)*m+(I-b)*p+(b-x-I+T)*m*p)*255|0,M=(l*256+c)*4;o[M]=A,o[M+1]=A,o[M+2]=A,o[M+3]=A}t.putImageData(r,0,0);let a=new mn(e);return a.wrapS=a.wrapT=bt,a.magFilter=xt,a.minFilter=ku,a}function _w(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=28,s=new Float32Array(n),r=new Float32Array(n);for(let c=0;c<n;c++)s[c]=Math.random()*256,r[c]=Math.random()*256;let o=t.createImageData(256,256),a=o.data;for(let c=0;c<256;c++)for(let u=0;u<256;u++){let h=1e9,d=1e9;for(let y=0;y<n;y++){let b=Math.abs(u-s[y]);b>256/2&&(b=256-b);let x=Math.abs(c-r[y]);x>256/2&&(x=256-x);let I=Math.sqrt(b*b+x*x);I<h?(d=h,h=I):I<d&&(d=I)}let f=Math.min(1,(d-h)/18),g=1-Math.min(1,h/40),m=Math.min(1,g*.6+f*.6)*255|0,p=(c*256+u)*4;a[p]=m,a[p+1]=m*.7|0,a[p+2]=m*.3|0,a[p+3]=255}t.putImageData(o,0,0);let l=new mn(e);return l.wrapS=l.wrapT=bt,l.magFilter=xt,l.minFilter=ku,l}function Bp(){let{islandGroup:i,SUN_DIR:e}=E,t=new Tn().load("waternormals.webp",F=>{F.wrapS=F.wrapT=bt,E.renderer&&(F.anisotropy=Math.min(4,E.renderer.capabilities.getMaxAnisotropy())),E.waterNormalsReady=!0,typeof E._onWaterReady=="function"&&E._onWaterReady()}),n=new Sn(st,512),s=e.clone();s.y=.6,s.normalize();let r=new xl(n,{textureWidth:1024,textureHeight:1024,waterNormals:t,sunDirection:s,sunColor:16314851,waterColor:400942,distortionScale:3.7,size:2.5,fog:!1,alpha:.82});r.rotation.x=-Math.PI/2,r.position.y=Ye+.05,r.renderOrder=3,r.material.depthWrite=!0,r.material.uniforms.oceanRadius.value=st,i.add(r);let o=new Sn(st,512);o.rotateX(Math.PI/2);let a=new Oe({uniforms:{uRadius:{value:st},uTime:{value:0}},vertexShader:`
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
        `,side:Et,depthWrite:!0}),l=new We(o,a);l.position.y=Ye-.05,l.renderOrder=3,i.add(l),window._undersideMat=a,E.water=r,r.userData.aoInclude=!0;let c=yw(),u=_w(),h=new Sn(st,512);h.rotateX(Math.PI/2);let d=new Oe({depthWrite:!0,uniforms:{uTime:{value:0},uRadius:{value:st-.1},uPulse:{value:.48},uErupt:{value:0},uNoiseTex:{value:c},uLavaTex:{value:u}},vertexShader:`
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
                // volcano instead of washing the whole underside - the
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

                // First distorted UV - slow drift
                vec2 T1 = vUv * 2.0 + vec2(1.5, -1.5) * uTime * 0.015;
                T1 += noiseA.xy * 0.8;
                float p = texture2D(uNoiseTex, T1).r;

                // Second distorted UV - counter-drift for turbulence
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
                // clear the bloom threshold - the old value floodlit the
                // entire underside into an unrealistic lava lamp.
                col *= 1.6;

                // Alpha: fully opaque at hot spots, transparent at cold edges
                float alpha = smoothstep(0.0, 0.08, heat);

                gl_FragColor = vec4(col, max(alpha, 0.85));
            }
        `,side:Et,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),f=new We(h,d);f.position.y=An+.35,f.renderOrder=2,i.add(f),window._lavaBottom=d;let g=.27,v=new xs(st-.1,st-.1,g,64,1,!0),m=new Vt({color:1709328,side:Pt,depthWrite:!0}),p=new We(v,m);p.position.y=An+.35+g/2,p.renderOrder=1,p.visible=!1,i.add(p);let y=2.8,b=new xs(st,st,y,512,8,!0);window.__deepLightU=window.__deepLightU||{value:0};let x=new Oe({uniforms:{uSunXZ:{value:new he(1,0)},uSurfY:{value:Ye+.05},uDeepLight:window.__deepLightU},vertexShader:`
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
                // lightless floor - the "real depth" read.
                float light = exp(-d * 1.05);

                // Spectral absorption - palette matched to the SURFACE
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
                // - squared so it dies completely on the night half.
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
                // alpha) - deep inward views lose red then green until
                // only blue-black remains.
                bodyCol *= exp(-vec3(1.4, 0.62, 0.30) * max(path - 0.4, 0.0) * 0.55);

                // Below the shelf line (~y -0.6) the seabed face sits
                // DIRECTLY behind the glass, so the water path to solid
                // ground is short - the wall must go CLEAR there and let
                // the rock detail show (the payoff of a cutaway aquarium
                // view). The old version instead slammed this zone to a
                // near-opaque black band, which read as a pitch-black
                // void at the bottom of the edge view.
                float belowBed = smoothstep(-0.35, -1.1, vWorld.y);
                alpha *= mix(1.0, 0.30, belowBed);
                // Thin sediment contact seam at the very floor junction
                // only - a grounded line, not a band.
                float seam = smoothstep(-1.80, -2.0, vWorld.y);
                bodyCol = mix(bodyCol, vec3(0.010, 0.016, 0.020), seam * 0.8);
                alpha = max(alpha, seam * 0.55);

                // FEATHER THE ENDS. This column is an open cylinder, so its top
                // ring and its bottom ring are HARD alpha boundaries - and a
                // hard boundary one pixel wide rasterizes as a dashed line,
                // which is exactly the discrete seam seen where the water meets
                // the glass (top) and where it meets the seabed (bottom). No AA
                // can rescue an edge the geometry itself cuts dead; it has to
                // not be an edge. Both ends now fade to nothing before they
                // reach the geometry's rim, so there is no boundary left to
                // alias - and the fade costs nothing visually, because these
                // ends sit inside the glass and the seabed anyway.
                alpha *= 1.0 - smoothstep(uSurfY + 0.02, uSurfY + 0.15, vWorld.y);
                alpha *= smoothstep(-2.0, -1.72, vWorld.y);

                gl_FragColor = vec4(bodyCol * (0.45 + 0.55 * light), alpha);
            }
        `,transparent:!0,depthWrite:!1,side:Pt});window._edgeColumn=x;let I=new We(b,x);I.position.y=-2+y/2,I.renderOrder=4,i.add(I);let T=3e3,w=new Float32Array(T*3),A=new Float32Array(T),M=new Float32Array(T);for(let F=0;F<T;F++){let z,V,k,j=Math.random();if(j<.4){let H=Math.random()*Math.PI*2,G=7.5+Math.random()*3;z=Math.cos(H)*G,V=Math.sin(H)*G}else if(j<.6){let H=Math.random()*Math.PI*2,G=st-.5-Math.random()*2;z=Math.cos(H)*G,V=Math.sin(H)*G}else{let H=Math.random()*Math.PI*2,G=Math.random()*(st-2);z=Math.cos(H)*G,V=Math.sin(H)*G,k=Math.sqrt(z*z+V*V),k<6&&(z*=6/k,V*=6/k)}w[F*3]=z,w[F*3+1]=Ye-.02-Math.random()*.08,w[F*3+2]=V,A[F]=Math.random()*Math.PI*2,M[F]=.2+Math.random()*.4}let _=new Qe;_.setAttribute("position",new Xe(w,3));let L=new rn({color:9480376,size:.015,transparent:!0,opacity:.12,depthWrite:!1,sizeAttenuation:!0}),D=new kt(_,L);D.renderOrder=2,D.visible=!1,i.add(D),window._oceanParticles={geo:_,positions:w,phases:A,speeds:M,count:T,mat:L,mesh:D}}var Mw=new Jn,Fp=0;function zp(){let{water:i,SUN_DIR:e}=E,t=Mw.getElapsedTime(),n=t%600,s=window._weather&&window._weather.smoothed||0,r=.085+s*s*.13;i.material.uniforms.time.value+=r/60,E.islandGroup&&(i.material.uniforms.dishRotation.value=E.islandGroup.rotation.y);let o=i.material.uniforms.sunDirection.value,a=typeof window.__glintElev=="number"?window.__glintElev:.6;if(o.set(e.x,a,e.z).normalize(),window._lightRays&&(window._lightRays.uniforms.uTime.value=n,window._lightRays.uniforms.uSunDir.value.set(e.x,a,e.z)),window._caustics&&window._causticsMesh&&window._causticsMesh.visible){let l=window._caustics.uniforms,c=Math.min(Math.max(t-(Fp||t),0),.1);Fp=t,l.uTime.value=n,window._terrain&&window._terrain.sunUniform&&l.uSunDir.value.copy(window._terrain.sunUniform.value);let u=l.uSunDir.value,h=Math.hypot(u.x,u.z)||1,d=u.x/h,f=u.z/h;l.uDrift1.value.x+=d*.034*c,l.uDrift1.value.y+=f*.034*c,l.uDrift2.value.x-=f*.023*c,l.uDrift2.value.y-=d*.023*c}if(window._edgeColumn&&window._terrain&&window._terrain.sunUniform){let l=window._terrain.sunUniform.value;window._edgeColumn.uniforms.uSunXZ.value.set(l.x,l.z)}if(window._oceanParticles&&window._oceanParticles.mesh&&window._oceanParticles.mesh.visible){let l=window._oceanParticles,c=l.positions;for(let u=0;u<l.count;u++)c[u*3]+=Math.sin(t*l.speeds[u]+l.phases[u])*.002,c[u*3+2]+=Math.cos(t*l.speeds[u]*.7+l.phases[u])*.002,c[u*3+1]=Ye-.02+Math.sin(t*l.speeds[u]*1.5+l.phases[u])*.01;l.geo.attributes.position.needsUpdate=!0}if(window._foam&&window._foam.types&&window._foam.mesh&&window._foam.mesh.visible){let l=window._foam,c=l.geo.attributes.position.array;for(let u=0;u<l.count;u++){let h=l.types[u],d=l.speeds[u],f=l.phases[u];h===0?(c[u*3]+=Math.sin(t*d*3+f)*.002,c[u*3+2]+=Math.cos(t*d*2.5+f)*.002,c[u*3+1]=Ye+.12+Math.sin(t*d+f)*.02):h===1&&(c[u*3]+=Math.sin(t*d*3+f)*.002,c[u*3+2]+=Math.cos(t*d*2.5+f)*.002,c[u*3+1]=Ye+.12+Math.sin(t*d+f)*.02)}l.geo.attributes.position.needsUpdate=!0}if(window._peakFoam){let l=window._peakFoam,c=l.positions;for(let u=0;u<l.count;u++)c[u*3+1]+=Math.sin(t*1.5+l.phases[u])*.001;l.geo.attributes.position.needsUpdate=!0}if(window._rimFoam){let l=window._rimFoam,c=l.positions;for(let u=0;u<l.count;u++){let h=l.angles[u],d=l.phases[u],f=l.speeds[u],g=Math.sin(t*f+d)*.08,v=st-.2+g;c[u*3]=Math.cos(h)*v,c[u*3+2]=Math.sin(h)*v,c[u*3+1]=Ye+.01+Math.sin(t*f*1.2+d)*.03}l.geo.attributes.position.needsUpdate=!0}if(window._rimBubbles&&window._rimBubbles.mesh&&window._rimBubbles.mesh.visible){let l=window._rimBubbles,c=l.positions;for(let u=0;u<l.count;u++)if(c[u*3+1]+=l.speeds[u]*.016,c[u*3]+=Math.sin(t*1.5+l.phases[u])*.002,c[u*3+2]+=Math.cos(t*1.2+l.phases[u])*.002,c[u*3+1]>Ye-.15){let h=Math.floor(u/l.perVent),d=l.sources[h];c[u*3]=d.x*.95+(Math.random()-.5)*.3,c[u*3+1]=d.y,c[u*3+2]=d.z*.95+(Math.random()-.5)*.3}l.geo.attributes.position.needsUpdate=!0}window._lavaBottom&&(window._lavaBottom.uniforms.uTime.value=n,E.terrainPulseUniform&&(window._lavaBottom.uniforms.uPulse.value=E.terrainPulseUniform.value),window._lavaBottom.uniforms.uErupt.value=Math.max(0,Math.min(1,((window._volcanoGlow||1)-1)/1.6))),window._undersideMat&&(window._undersideMat.uniforms.uTime.value=n)}function kp(){let{islandGroup:i}=E,e=new Qt({color:16777215,roughness:.025,metalness:0,transparent:!0,opacity:1,transmission:1,thickness:0,ior:1.5,clearcoat:.45,clearcoatRoughness:.11,specularIntensity:0,specularColor:new se(16777215),attenuationColor:new se(.62,.86,.8),attenuationDistance:1.5,depthWrite:!1,side:Et,envMapIntensity:1,fog:!1});e.onBeforeCompile=y=>{y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
varying float vGlassWY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vGlassWY = (modelMatrix * vec4(transformed, 1.0)).y;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlassWY;`).replace("#include <lights_fragment_end>",["#include <lights_fragment_end>","reflectedLight.directSpecular = vec3(0.0);","float glassAbove = smoothstep(0.05, 0.72, vGlassWY);","reflectedLight.indirectSpecular *= mix(0.05, 1.0, glassAbove);","#ifdef USE_CLEARCOAT","clearcoatSpecularIndirect *= mix(0.05, 1.0, glassAbove);","clearcoatSpecularDirect = vec3(0.0);","#endif","float glassGraze = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.0);","vec3 glassTint = mix(vec3(1.0), vec3(0.50, 0.82, 0.74) * 0.88, min(1.0, glassGraze));"].join(`
`)).replace("#include <transmission_fragment>",`#include <transmission_fragment>
totalDiffuse *= glassTint;`)},"dispersion"in e&&(e.dispersion=.18),"iridescence"in e&&(e.iridescence=.12,e.iridescenceIOR=1.3,e.iridescenceThicknessRange=[120,400]),E._envTexture&&(e.envMap=E._envTexture,e.needsUpdate=!0),E.glassMat=e;let t=new lo(1024,{type:yt,generateMipmaps:!0,minFilter:Mn}),n=new ao(.5,2e3,t);n.layers.enable(4),n.position.set(0,4,0),E.scene.add(n),E._glassCubeCam=n,E._glassCubeRT=t;let s=32.1,r=.55,o=s-r,a=1.2,l=-2.8,c=l-r,u=[];u.push(new he(.001,c)),u.push(new he(14,c+.02)),u.push(new he(24,c+.1)),u.push(new he(29.5,c+.32));{let x=c+1.35,I=s-29.5,T=1.35-.32;for(let w=1;w<=12;w++){let A=w/12*Math.PI/2;u.push(new he(29.5+Math.sin(A)*I,x-Math.cos(A)*T))}}let h=.38,d=s-r/2,f=a-h,g=d-o;u.push(new he(d+h,f-.3));let v=48;for(let y=0;y<=v;y++){let b=y/v*Math.PI,x=b<=Math.PI/2?h:g;u.push(new he(d+Math.cos(b)*x,f+Math.sin(b)*h))}u.push(new he(o,a-.55)),u.push(new he(o,l+.75)),u.push(new he(o-1.3,l+.18)),u.push(new he(28.5,l+.06)),u.push(new he(14,l)),u.push(new he(.001,l));let m=new Ha(u,1536);m.deleteAttribute("uv"),m=Ep(m),m.computeVertexNormals();let p=new We(m,e);p.renderOrder=10,p.layers.set(2),p.userData.aoInclude=!0,i.add(p)}var Ro=0;function Hp(){let i=E._glassCubeCam;if(!i||!E.renderer||!E.scene)return;let{islandGroup:e,glassMat:t,renderer:n,scene:s}=E,r=E._glassCubeRT,o=e.visible;e.visible=!1;let a=i.children[Ro],l=n.getRenderTarget(),c=n.xr.enabled;n.xr.enabled=!1;let u=r.texture.generateMipmaps;r.texture.generateMipmaps=Ro===5?u:!1,n.setRenderTarget(r,Ro),n.render(s,a),r.texture.generateMipmaps=u,n.setRenderTarget(l),n.xr.enabled=c,Ro=(Ro+1)%6,e.visible=o,t&&t.envMap!==r.texture&&(t.envMap=r.texture,t.needsUpdate=!0)}function Yp(){let{islandGroup:i,scene:e,camera:t,SUN_DIR:n}=E,s=new Sn(st,64);s.rotateX(-Math.PI/2);let r=new Oe({uniforms:{uTime:{value:0},uSunDir:{value:n},uDayBlend:{value:.5},uRadius:{value:st},uDrift1:{value:new he(0,0)},uDrift2:{value:new he(0,0)}},vertexShader:`
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

            // Returns (F1, F2) - closest and second-closest Voronoi distances
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

                // F2 - F1 gives the bright edges between cells - the caustic lines
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

                // Slightly blue-green tint - underwater light
                vec3 col = vec3(0.55, 0.72, 0.82) * light;
                gl_FragColor = vec4(col, light);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:wt,side:Et}),o=new We(s,r);o.position.y=-1.88,o.renderOrder=3,o.visible=!1,i.add(o),window._caustics=r,window._causticsMesh=o;let a=kn+.1,l=new xs(st-.2,st-.2,a,64,16,!0),c=new Oe({uniforms:{uTime:{value:0},uSunDir:{value:n},uDayBlend:{value:.5},uRadius:{value:st},uBeamMul:{value:1.5}},vertexShader:`
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
                float normY = (vPos.y + ${(kn+.1).toFixed(1)} * 0.5) / ${(kn+.1).toFixed(1)};

                // Sun position drives everything
                vec2 sunXZ = normalize(uSunDir.xz + vec2(0.001));
                float sunAngle = atan(sunXZ.y, sunXZ.x);
                float sunElev = uSunDir.y; // raw, not clamped - negative = below horizon

                // Beam intensity scales smoothly with sun elevation
                float sunStrength = smoothstep(-0.3, 0.8, sunElev); // gradual 0->1
                float beamWidth = 0.3 + sunStrength * 0.5; // narrow at dusk, wide at noon

                // Tilt follows sun XZ angle directly
                float tilt = dot(normalize(vPos.xz), sunXZ) * (0.1 + sunStrength * 0.2) * (1.0 - normY);

                // Wobble - livelier, faster
                float wobble = noise(vec2(cylAngle * 6.0 + uTime * 0.25, normY * 3.0 + uTime * 0.1)) * 0.15;

                // Many fine beams - 40+ shafts, very thin
                float b1 = sin(cylAngle * 40.0 + tilt + wobble + sunAngle);
                b1 = smoothstep(1.0 - beamWidth * 0.3, 1.0, b1);

                float b2 = sin(cylAngle * 65.0 + tilt * 1.2 + wobble * 2.0 + sunAngle * 0.7 + 2.1);
                b2 = smoothstep(1.0 - beamWidth * 0.2, 1.0, b2) * 0.5;

                float b3 = sin(cylAngle * 90.0 + tilt * 0.6 - uTime * 0.05 + sunAngle * 1.3);
                b3 = smoothstep(1.0 - beamWidth * 0.15, 1.0, b3) * 0.25;

                float beam = b1 + b2 + b3;

                // Lively flicker - faster, more variation
                float flicker = noise(vec2(cylAngle * 15.0 + uTime * 0.5, normY * 4.0 - uTime * 0.3));
                float flicker2 = noise(vec2(cylAngle * 25.0 - uTime * 0.3, normY * 2.0 + uTime * 0.2));
                beam *= 0.4 + flicker * 0.35 + flicker2 * 0.25;

                // Depth fade. pow base clamped: normY interpolates a
                // hair NEGATIVE at the bottom edge and pow(negative, x)
                // NaNs on ANGLE/D3D - the NaN quads rendered as the big
                // BLACK SQUARES when the beams were enabled (same bug
                // class as the historical bloom black-rectangle frames).
                float depthFade = pow(max(normY, 1e-4), 1.5);

                // Edge-focused
                float radialFade = smoothstep(uRadius * 0.65, uRadius, dist);

                // Sun-facing: DAY EDGES ONLY. The old window opened at
                // dot -0.2 (past the terminator) and a 0.03 uncondition-
                // al floor kept a ghost of the beams on the night glass.
                // Window now starts clearly inside the lit half and the
                // floor is gone - the cathedral light lives and dies
                // with the day side.
                // Gate in WORLD space so the lit beams never rotate onto the
                // night side with the island. Hard window on the lit half so
                // they die before the terminator.
                float sunFacing = dot(normalize(vWorld.xz), sunXZ);
                sunFacing = smoothstep(0.30, 0.74, sunFacing);

                float light = beam * depthFade * radialFade * sunFacing;

                // Scale with sun - smooth swell/shrink, NOT binary
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
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:wt,side:Et}),u=new We(l,c);u.position.y=An+a/2+.05,u.renderOrder=5,u.visible=!0,i.add(u),window._lightRays=c,window._lightRaysMesh=u;let h=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=h?70:140,f=11.5,g=Qn+2.2,v=Ye+.2,m=.2,p=.022,y=new Float32Array(d*3),b=new Float32Array(d),x=new Float32Array(d),I=48,T=new Float32Array(I*I);(function(){function N(te,q,K){let oe=Math.sin(te*127.1+q*311.7+K*74.7)*43758.5453;return oe-Math.floor(oe)}function Y(te,q,K){let oe=Math.floor(te),pe=Math.floor(q),Ae=Math.floor(K),we=te-oe,ve=q-pe,O=K-Ae,Ie=we*we*(3-2*we),_e=ve*ve*(3-2*ve),Se=O*O*(3-2*O),ne=N(oe,pe,Ae),De=N(oe+1,pe,Ae),me=N(oe,pe+1,Ae),P=N(oe+1,pe+1,Ae),S=N(oe,pe,Ae+1),B=N(oe+1,pe,Ae+1),Z=N(oe,pe+1,Ae+1),ie=N(oe+1,pe+1,Ae+1);return(ne+(De-ne)*Ie)*(1-_e)*(1-Se)+(me+(P-me)*Ie)*_e*(1-Se)+(S+(B-S)*Ie)*(1-_e)*Se+(Z+(ie-Z)*Ie)*_e*Se}for(let te=0;te<I;te++)for(let q=0;q<I;q++){let K=q/I,oe=te/I,pe=0,Ae=1,we=0,ve=3;for(let O=0;O<4;O++)pe+=Ae*Y(K*ve,1.5,oe*ve),we+=Ae,Ae*=.5,ve*=2;T[te*I+q]=pe/we}})();for(let le=0;le<d;le++){let N=Math.random()*Math.PI*2,Y=Math.sqrt(Math.random())*f;y[le*3]=Math.cos(N)*Y,y[le*3+1]=v+Math.random()*(g-v),y[le*3+2]=Math.sin(N)*Y,b[le]=.85+Math.random()*.4,x[le]=.82+Math.random()*.38}let w=new fn(p,m);w.translate(0,m*.5,0);let A=new Oe({uniforms:{uIntensity:{value:.42},uColor:{value:new se(10467028)},uColumnR:{value:f}},vertexShader:`
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

                // Column edge fade - drops near the rim taper out so the
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
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Bn,side:Pt}),M=new vs(w,A,d);M.instanceMatrix.setUsage(Zf),M.frustumCulled=!1,M.visible=!0,M.renderOrder=12,M.layers.set(2),i.add(M);let _=h?0:55,L=null,D=null;if(_>0){let le=new fn(.08,.08);le.rotateX(-Math.PI/2);let N=new Oe({uniforms:{uIntensity:{value:.42},uColor:{value:new se(12899560)}},vertexShader:`
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
                    // Two rings - primary expanding crown + inner secondary.
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
            `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Bn,side:Pt});L=new vs(le,N,_),L.frustumCulled=!1;let Y=new Float32Array(_),te=new Float32Array(_),q=new Float32Array(_),K=new Float32Array(_*2);for(let oe=0;oe<_;oe++){let pe=Math.random()*Math.PI*2,Ae=Math.sqrt(Math.random())*f;K[oe*2]=Math.cos(pe)*Ae,K[oe*2+1]=Math.sin(pe)*Ae,te[oe]=Math.random(),q[oe]=.6+Math.random()*.5,Y[oe]=te[oe]}le.setAttribute("aProgress",new gi(Y,1)),L.renderOrder=11,L.layers.set(2),i.add(L),D={mesh:L,mat:N,progress:te,life:q,pos:K,aProgress:Y,count:_}}window._rain={enabled:!0,mesh:M,mat:A,heads:y,velocities:b,scales:x,count:d,radius:f,top:g,bottom:v,speed:13,streak:m,width:p,intensity:.42,densGrid:T,densRes:I,driftX:.0085*14,driftZ:.0055*14,splash:D,reducedMotion:h};let F=3,z=8,V=F*z,k=new Float32Array(V*3),j=new Float32Array(V*3),H=new Float32Array(V),G=[];for(let le=0;le<F;le++){let N=le/F*Math.PI*2+.5;G.push(N);let Y=Math.cos(N)*5.5,te=Math.sin(N)*5.5;for(let q=0;q<z;q++){let K=le*z+q;k[K*3]=Y+(Math.random()-.5)*.3,k[K*3+1]=Ye+.05,k[K*3+2]=te+(Math.random()-.5)*.3,j[K*3]=(Math.random()-.5)*.06,j[K*3+1]=.12+Math.random()*.06,j[K*3+2]=(Math.random()-.5)*.06,H[K]=Math.random()*2}}let re=new Qe;re.setAttribute("position",new Xe(k,3));let ue=new rn({color:16777215,size:.03,transparent:!0,opacity:.1,depthWrite:!1,sizeAttenuation:!0}),fe=new kt(re,ue);fe.visible=!1,i.add(fe),window._shoreVent={pos:k,vel:j,life:H,geo:re,count:V,angles:G,pp:z,mesh:fe};{let K=function(P,S,B){let Z=Math.sin(P*127.1+S*311.7+B*74.7)*43758.5453;return Z-Math.floor(Z)},oe=function(P,S,B){let Z=Math.floor(P),ie=Math.floor(S),J=Math.floor(B),Ee=P-Z,ge=S-ie,xe=B-J,Ne=Ee*Ee*(3-2*Ee),ae=ge*ge*(3-2*ge),ye=xe*xe*(3-2*xe),Ue=K(Z,ie,J),Be=K(Z+1,ie,J),Te=K(Z,ie+1,J),qe=K(Z+1,ie+1,J),Fe=K(Z,ie,J+1),Me=K(Z+1,ie,J+1),U=K(Z,ie+1,J+1),de=K(Z+1,ie+1,J+1),Q=Ue+(Be-Ue)*Ne,ce=Te+(qe-Te)*Ne,Ce=Fe+(Me-Fe)*Ne,Pe=U+(de-U)*Ne,Ze=Q+(ce-Q)*ae,dt=Ce+(Pe-Ce)*ae;return Ze+(dt-Ze)*ye},pe=function(P,S,B,Z,ie){let J=0,Ee=1,ge=0,xe=1;for(let Ne=0;Ne<Z;Ne++){let ae=ie*xe,ye=(P*xe%ae+ae)%ae,Ue=(S*xe%ae+ae)%ae,Be=(B*xe%ae+ae)%ae;J+=Ee*oe(ye,Ue,Be),ge+=Ee,Ee*=.5,xe*=2}return J/ge},Ae=function(P,S,B,Z){let ie=Math.floor(P),J=Math.floor(S),Ee=Math.floor(B),ge=1e9;for(let xe=-1;xe<=1;xe++)for(let Ne=-1;Ne<=1;Ne++)for(let ae=-1;ae<=1;ae++){let ye=ie+ae,Ue=J+Ne,Be=Ee+xe,Te=(ye%Z+Z)%Z,qe=(Ue%Z+Z)%Z,Fe=(Be%Z+Z)%Z,Me=ye+K(Te,qe,Fe),U=Ue+K(Te+57.3,qe+21.7,Fe),de=Be+K(Te,qe+113.1,Fe+45.9),Q=(Me-P)*(Me-P)+(U-S)*(U-S)+(de-B)*(de-B);Q<ge&&(ge=Q)}return Math.max(0,1-Math.sqrt(ge))},we=function(P,S,B,Z){return Ae(P,S,B,Z)*.625+Ae(P*2,S*2,B*2,Z*2)*.25+Ae(P*4,S*4,B*4,Z*4)*.125},Y=Qn+3.5,te=64,q=new Uint8Array(te*te*te*2),ve=0;for(let P=0;P<te;P++)for(let S=0;S<te;S++)for(let B=0;B<te;B++){let Z=B/te,ie=S/te,J=P/te,Ee=pe(Z*3,ie*3,J*3,4,3),ge=we(Z*3,ie*3,J*3,3),xe=ge+Ee*(1-ge),Ne=we(Z*8,ie*8,J*8,8);q[ve++]=Math.max(0,Math.min(255,xe*255)),q[ve++]=Math.max(0,Math.min(255,Ne*255))}let O=new ro(q,te,te,te);O.format=el,O.type=hn,O.minFilter=xt,O.magFilter=xt,O.wrapS=bt,O.wrapT=bt,O.wrapR=bt,O.unpackAlignment=1,O.needsUpdate=!0;let Ie=new xr({glslVersion:Ra,uniforms:{map:{value:O},cameraPos:{value:new C},sunDirLocal:{value:new C(-.93,0,-.37).normalize()},sunColor:{value:new se(.99,.95,.84)},skyColor:{value:new se(.3,.44,.66)},groundColor:{value:new se(.06,.1,.16)},coverage:{value:.72},densityScale:{value:3.2},absorption:{value:new C(.72,.78,1.05)},sunIntensity:{value:10.5},uStormDark:{value:0},anisoForward:{value:.82},anisoBack:{value:-.3},lobeMix:{value:.38},msAtten:{value:.4},msContrib:{value:.3},msPhase:{value:.7},frame:{value:0},uTime:{value:0},uDensityMul:{value:1},uWindMul:{value:1},uWindT:{value:0},uStrikeCube:{value:new C(0,0,0)},uStrikeI:{value:0},uStrikeColor:{value:new se(.8,.9,1)},uSeedOff:{value:new C(0,0,0)},uVolScale:{value:new C(28,5.4,28)}},vertexShader:`
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
                uniform vec3  uStrikeCube;
                uniform float uStrikeI;
                uniform vec3  uStrikeColor;
                uniform vec3  uSeedOff;

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
                // moves slower - reads as turbulent convection.
                float sampleDensity(vec3 p) {
                    // Noise-domain seed (island re-roll). Applied ONLY to
                    // the texture taps - the geometric disc/height masks
                    // must stay centred on the dish.
                    vec3 ps = p + uSeedOff;
                    // Drift: body moves slow, detail moves faster but
                    // scaled down so the small-scale shimmer doesn't
                    // outrun the macro motion. Divergent direction per
                    // octave to avoid a marching conveyor look.
                    // uWindT is an INTEGRATED wind phase (accumulated per
                    // frame in animate.js), not absolute time times a
                    // multiplier: with uTime * uWindMul, dragging the
                    // weather slider changed the multiplier and the whole
                    // deck TELEPORTED to a new phase - clouds raced,
                    // formed, and tore during the drag. Integrate, never
                    // multiply absolute time (the caustics lesson).
                    vec3 qBase = ps + vec3(uWindT * 0.0085, 0.0, uWindT * 0.0055);
                    vec3 qDet  = ps + vec3(uWindT * 0.022, uWindT * 0.006, uWindT * 0.018);
                    // Domain warp: bend the sample coordinates by a very
                    // low-frequency tap before the tiled lookups. From
                    // TOP-DOWN the raw tiling read as a square repeating
                    // grid - the warp shears every repeat differently so
                    // the pattern never lines up with itself.
                    vec3 warp = vec3(
                        texture(map, ps * 0.31 + vec3(0.13, 0.71, 0.37)).r - 0.5,
                        0.0,
                        texture(map, ps * 0.29 + vec3(0.83, 0.29, 0.61)).r - 0.5
                    ) * 0.55;
                    qBase += warp;
                    qDet += warp * 1.4;
                    float base = texture(map, qBase + 0.5).r;
                    float det  = texture(map, qDet  * 2.3 + 0.5).g;
                    // Second tap at a different phase breaks the uniform
                    // puck into distinct cumulus cells. Must vary FASTER
                    // than once per volume (the old 0.6x sampling gave a
                    // near-constant field across the disc, so the deck
                    // stayed one merged blob no matter the coverage) -
                    // 2.2x gives roughly 4-6 lobes across the footprint.
                    float cell = texture(map, qBase * 2.2 + vec3(0.37, 0.19, 0.73)).r;

                    // Radial disc falloff - warped by noise so the cloud
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
                    // Hard guard at the volume wall: the warped outline can
                    // push density past r=1 where the march box clips it -
                    // that flat cut is the one silhouette a cloud never has.
                    discMask *= 1.0 - smoothstep(0.86, 0.99, r);

                    // Cumulus vertical profile: hard floor at the LCL
                    // (lifting condensation level) so the base reads
                    // FLAT rather than tapered - real cumulus looks
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
                    // density below the LCL - reads as trailing rain-shaft
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
                    // varies spatially - some regions clear sky, some
                    // thick cumulus. The Perlin-Worley base sits higher
                    // than the old value-noise field, so the cell swing
                    // must be wide (0.30..1.15 through a steepened cell
                    // response) or the whole disc saturates into one
                    // merged cottonball with no gaps between cells.
                    // Coverage-dependent cell window: at low coverage only
                    // the strongest cells condense (scattered fair-weather
                    // cumulus with real gaps - clouds ARRIVE as patches);
                    // as coverage climbs the window opens and cells merge
                    // into a deck. A fixed window faded every cell in
                    // simultaneously, which read as one global dimmer.
                    float cLo = mix(0.58, 0.36, coverage);
                    float cHi = mix(1.00, 0.88, coverage);
                    float cellW = smoothstep(cLo, cHi, cell);
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
                            // deck goes properly DARK - and shift it cool,
                            // the bruised blue-gray of a real cell, not a
                            // sunlit cream puff.
                            lit *= mix(vec3(1.0), vec3(0.20, 0.23, 0.28), uStormDark);

                            // Lightning: the bolt channel lights the cell
                            // from WITHIN - inverse-square glow around the
                            // strike, added after the storm-darkening term
                            // so the flash is never swallowed by it. The
                            // offset maps to island-local units so the
                            // falloff radius is physical, not cube-warped.
                            if (uStrikeI > 0.001) {
                                vec3 toS = (uStrikeCube - p) * uVolScale;
                                float sd2 = dot(toS, toS);
                                lit += uStrikeColor * (uStrikeI * 12.0 / (1.0 + sd2 * 0.35));
                            }

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

                    // Aerial perspective - distant (near-horizon) rays
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
            `,side:Tt,transparent:!0,depthWrite:!1}),_e=new ms(1,1,1),Se=new We(_e,Ie);Se.scale.set(28,5.4,28),Se.position.y=Y,Se.userData.baseY=Y,Se.userData.baseSY=5.4,Se.renderOrder=16,Se.visible=!0,Se.layers.set(2),i.add(Se),window._cloud={mesh:Se,mat:Ie};let ne=new Sn(28/2,96);ne.rotateX(-Math.PI/2);let De=new Oe({uniforms:{map:{value:O},uTime:{value:0},uStrength:{value:.42},uRadius:{value:28/2},uDensityMul:{value:1},uWindMul:{value:1},uWindT:{value:0},uCoverage:{value:.72},uSunOffset:{value:new he(0,0)}},vertexShader:`
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
                    // terminate in a hard line - clouds don't have edges.
                    float rim = smoothstep(0.98, 0.55, r);
                    float shadow = d * uStrength * rim;

                    // Output color for MultiplyBlending: white = no change,
                    // dark = shadow. Cool blue tint matches the cool ocean
                    // palette rather than the previous warm-grey cast.
                    vec3 col = mix(vec3(1.0), vec3(0.32, 0.38, 0.52), shadow);
                    gl_FragColor = vec4(col, 1.0);
                }
            `,blending:Aa,transparent:!0,depthWrite:!1,depthTest:!0}),me=new We(ne,De);me.position.y=Ye+.18,me.renderOrder=9,me.layers.set(2),i.add(me),window._cloudShadow={mesh:me,mat:De}}}var Vp=new Ve,Fh=new C,Gp=new C,Wp=new C,Tr=new C,$i=new C,Ar=new C,ww=new C,Xp=new Ve,qp=new Kt;function Zp(i,e){let t=window._rain;if(!t||!t.enabled){t&&(t.mesh.visible=!1);return}t.mesh.visible=!0,t.mat.uniforms.uIntensity.value=t.intensity;let n=t.stormT!=null?t.stormT:0,s=1+n*.35,r=1+n*.3,o=1+n*.45,a=1+n*3,c=-.35*a,u=t.heads,h=t.top-t.bottom,d=(e||0)*t.driftX*a,f=(e||0)*t.driftZ*a,g=t.densRes,v=t.densGrid,m=t.radius,p=E.camera;E.islandGroup.worldToLocal(Wp.copy(p.position));for(let y=0;y<t.count;y++){let b=t.speed*t.velocities[y]*o,x=c*t.driftX,I=c*t.driftZ;if(u[y*3]+=x*i,u[y*3+1]-=b*i,u[y*3+2]+=I*i,u[y*3+1]<t.bottom){let F=0,z=0,V=!1;for(let k=0;k<6;k++){let j=Math.random()*Math.PI*2,H=Math.sqrt(Math.random())*m,G=Math.cos(j)*H,re=Math.sin(j)*H,ue=(G-d)/(m*2)+.5,fe=(re-f)/(m*2)+.5;ue=(ue%1+1)%1,fe=(fe%1+1)%1;let le=Math.min(g-1,Math.max(0,Math.floor(ue*g))),N=Math.min(g-1,Math.max(0,Math.floor(fe*g))),Y=v[N*g+le];if(Math.random()<Y*Y*2.2){F=G,z=re,V=!0;break}}if(!V){let k=Math.random()*Math.PI*2,j=Math.sqrt(Math.random())*m*.6;F=Math.cos(k)*j,z=Math.sin(k)*j}u[y*3]=F,u[y*3+1]=t.top-Math.random()*h*.25,u[y*3+2]=z}let T=u[y*3],w=u[y*3+1],A=u[y*3+2];Fh.set(T,w,A),Gp.set(x,-b,I).normalize(),Tr.copy(Gp).multiplyScalar(-1),Ar.copy(Wp).sub(Fh).normalize(),$i.crossVectors(Tr,Ar);let M=$i.length();M<1e-4?$i.set(1,0,0):$i.multiplyScalar(1/M),Ar.crossVectors($i,Tr).normalize();let _=t.scales[y],L=_*s,D=_*r;Vp.set($i.x*L,Tr.x*D,Ar.x*_,T,$i.y*L,Tr.y*D,Ar.y*_,w,$i.z*L,Tr.z*D,Ar.z*_,A,0,0,0,1),t.mesh.setMatrixAt(y,Vp)}if(t.mesh.instanceMatrix.needsUpdate=!0,t.splash&&!t.reducedMotion){let y=t.splash;y.mat.uniforms.uIntensity.value=t.intensity;for(let x=0;x<y.count;x++){if(y.progress[x]+=i/y.life[x],y.progress[x]>=1){let I=0,T=0,w=!1;for(let A=0;A<4;A++){let M=Math.random()*Math.PI*2,_=Math.sqrt(Math.random())*m,L=Math.cos(M)*_,D=Math.sin(M)*_,F=(L-d)/(m*2)+.5,z=(D-f)/(m*2)+.5;F=(F%1+1)%1,z=(z%1+1)%1;let V=Math.min(g-1,Math.max(0,Math.floor(F*g))),k=Math.min(g-1,Math.max(0,Math.floor(z*g))),j=v[k*g+V];if(Math.random()<j*j*2.2){I=L,T=D,w=!0;break}}if(!w){let A=Math.random()*Math.PI*2,M=Math.sqrt(Math.random())*m*.6;I=Math.cos(A)*M,T=Math.sin(A)*M}y.pos[x*2]=I,y.pos[x*2+1]=T,y.progress[x]=0,y.life[x]=.55+Math.random()*.55}y.aProgress[x]=y.progress[x],qp.identity(),Xp.compose(Fh.set(y.pos[x*2],Ye+.07,y.pos[x*2+1]),qp,ww.set(1,1,1)),y.mesh.setMatrixAt(x,Xp)}y.mesh.instanceMatrix.needsUpdate=!0;let b=y.mesh.geometry.getAttribute("aProgress");b&&(b.needsUpdate=!0)}}function jp(i){let e=window._shoreVent;if(e&&e.mesh&&e.mesh.visible){for(let t=0;t<e.count;t++){if(e.life[t]+=i,e.life[t]>2){let n=Math.floor(t/e.pp),s=e.angles[n];e.pos[t*3]=Math.cos(s)*5.5+(Math.random()-.5)*.3,e.pos[t*3+1]=Ye+.05,e.pos[t*3+2]=Math.sin(s)*5.5+(Math.random()-.5)*.3,e.vel[t*3]=(Math.random()-.5)*.06,e.vel[t*3+1]=.12+Math.random()*.06,e.vel[t*3+2]=(Math.random()-.5)*.06,e.life[t]=0}e.pos[t*3]+=e.vel[t*3]*i,e.pos[t*3+1]+=e.vel[t*3+1]*i,e.pos[t*3+2]+=e.vel[t*3+2]*i}e.geo.attributes.position.needsUpdate=!0}}var ws="orbit";function Jp(){let{camera:i,renderer:e,euler:t,keys:n}=E;document.addEventListener("keydown",u=>n[u.code]=!0),document.addEventListener("keyup",u=>n[u.code]=!1),e.domElement.addEventListener("mousedown",()=>{E.isPointerLocked||ws==="fly"&&e.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{E.isPointerLocked=document.pointerLockElement===e.domElement}),document.addEventListener("mousemove",u=>{ws!=="fly"||!E.isPointerLocked||(t.setFromQuaternion(i.quaternion),t.y-=u.movementX*eh,t.x-=u.movementY*eh,t.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,t.x)),i.quaternion.setFromEuler(t))});let s=document.getElementById("coords"),r=document.getElementById("copyBtn"),o=document.getElementById("viewBtn"),a=document.getElementById("edgeBtn");r&&r.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new C;i.getWorldDirection(d);let f=`pos: ${h.x.toFixed(2)}, ${h.y.toFixed(2)}, ${h.z.toFixed(2)}
dir: ${d.x.toFixed(3)}, ${d.y.toFixed(3)}, ${d.z.toFixed(3)}
rot: ${Mi.radToDeg(t.x).toFixed(1)}, ${Mi.radToDeg(t.y).toFixed(1)}, 0.0`;navigator.clipboard.writeText(f),r.textContent="copied",r.classList.add("copied"),setTimeout(()=>{r.textContent="copy",r.classList.remove("copied")},1200)});let l=document.getElementById("zoneBtn");l&&l.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new C;i.getWorldDirection(d);let f=h.clone().addScaledVector(d,50),g=`camera: { x: ${h.x.toFixed(0)}, y: ${h.y.toFixed(0)}, z: ${h.z.toFixed(0)} },
lookAt: { x: ${f.x.toFixed(0)}, y: ${f.y.toFixed(0)}, z: ${f.z.toFixed(0)} },`;navigator.clipboard.writeText(g),l.textContent="copied!",setTimeout(()=>{l.textContent="copy zone"},1200)}),a&&a.addEventListener("click",u=>{u.stopPropagation(),ws==="fly"?(i.position.set(50,3,35),t.set(Mi.degToRad(-3),Mi.degToRad(55),0),i.quaternion.setFromEuler(t)):Qp(new C(50,3,35))});let c=document.getElementById("noonBtn");c&&(c.style.display="none"),o&&o.addEventListener("click",u=>{u.stopPropagation();let h=i.position,d=new C;i.getWorldDirection(d);let f=`Camera view:
pos: (${h.x.toFixed(1)}, ${h.y.toFixed(1)}, ${h.z.toFixed(1)})
dir: (${d.x.toFixed(2)}, ${d.y.toFixed(2)}, ${d.z.toFixed(2)})
rot: (${Mi.radToDeg(t.x).toFixed(1)}\xB0, ${Mi.radToDeg(t.y).toFixed(1)}\xB0)
Paste this into the chat so I can see your exact view.`;navigator.clipboard.writeText(f),o.textContent="copied!",setTimeout(()=>{o.textContent="send view"},1200)}),E._coordsEl=s,document.addEventListener("keydown",u=>{!u.ctrlKey||!u.shiftKey||u.code!=="KeyF"||u.target instanceof Element&&u.target.matches("input, textarea, [contenteditable]")||(u.preventDefault(),Sw())}),bw()}var Kp={default:new C(40,25,50),research:new C(5,70,5),publications:new C(45,3,25),about:new C(8,5,10),skills:new C(10,-15,10),connect:new C(60,30,70)};function bw(){let i=document.getElementById("preset-nav");i&&i.addEventListener("click",e=>{let t=e.target.closest(".preset-dot");if(!t)return;let n=t.dataset.zone;n&&Kp[n]&&(Qp(Kp[n]),i.querySelectorAll(".preset-dot").forEach(s=>s.classList.remove("preset-dot--active")),t.classList.add("preset-dot--active"))})}function Qp(i,e=800){let t=E.camera.position.clone(),n=performance.now();function s(r){let o=Math.min(1,(r-n)/e),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;E.camera.position.lerpVectors(t,i,a),o<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function Sw(){let i=document.getElementById("hud");if(!i)return;i.style.display==="none"?(i.style.display="flex",ws="fly",E.euler.setFromQuaternion(E.camera.quaternion)):(i.style.display="none",ws="orbit",document.pointerLockElement&&document.exitPointerLock())}function $p(i){let{camera:e,euler:t,keys:n,_coordsEl:s}=E;if(ws==="fly"){let r=new C;n.KeyW&&(r.z-=1),n.KeyS&&(r.z+=1),n.KeyA&&(r.x-=1),n.KeyD&&(r.x+=1),n.Space&&(r.y+=1),(n.ShiftLeft||n.ShiftRight)&&(r.y-=1),r.lengthSq()>0&&(r.normalize().multiplyScalar(ap*i),r.applyQuaternion(e.quaternion),e.position.add(r))}if(s&&ws==="fly"){let r=e.position,o=new C;e.getWorldDirection(o),s.textContent=`pos  ${r.x.toFixed(1)}  ${r.y.toFixed(1)}  ${r.z.toFixed(1)}
dir  ${o.x.toFixed(2)} ${o.y.toFixed(2)} ${o.z.toFixed(2)}`}}var gn=[{name:"default",camera:{x:84,y:33,z:78},lookAt:{x:2,y:5,z:-4},orbit:{minDist:40,maxDist:320,minPolar:.3,maxPolar:1.6}},{name:"about",camera:{x:19,y:159,z:-22},lookAt:{x:10,y:0,z:-25},orbit:{minDist:40,maxDist:200,minPolar:.05,maxPolar:.6}},{name:"research",camera:{x:17,y:6,z:15},lookAt:{x:-18,y:3,z:-20},orbit:{minDist:10,maxDist:120,minPolar:.3,maxPolar:1.6}},{name:"publications",camera:{x:64,y:6,z:-9},lookAt:{x:-35,y:0,z:-18},orbit:{minDist:20,maxDist:130,minPolar:.5,maxPolar:2}},{name:"connect",camera:{x:81,y:-28,z:-40},lookAt:{x:-11,y:6,z:-20},orbit:{minDist:30,maxDist:130,minPolar:.5,maxPolar:2.2}}],Pn=0,Hn=null,ti={},Io=!1;var nm=!1;function kh(i){nm=i}var es=!1,im=0,sm=900,Ew=700,Tw=2200,Aw=5.5,Po=new C,Rr=new C,rm=new C,Bh=new C,Si=new C(2,5,-4);function Rw(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function zh(i){if(Hn===i)return;Hn&&ti[Hn]&&(ti[Hn].classList.remove("zone--active"),ti[Hn].style.removeProperty("--scroll-y")),Hn=i;let e=document.getElementById("home-typed-msg");e&&(e.style.opacity=i==="default"?"":"0"),i&&ti[i]?setTimeout(()=>{if(Hn===i&&ti[i]){ti[i].classList.add("zone--active");let t=ti[i].querySelector(".zone__body");t&&Array.from(t.children).forEach((n,s)=>{n.style.setProperty("--stagger-index",s)})}Io=!1},80):Io=!1}function bs(i){if(nm||i<0||i>=gn.length||Io||es)return;Io=!0,Pn=i;let e=gn[i];Po.copy(E.camera.position),Rr.set(e.camera.x,e.camera.y,e.camera.z),rm.copy(Si),Bh.set(e.lookAt.x,e.lookAt.y,e.lookAt.z);let t=Po.distanceTo(Rr);sm=Math.round(Math.max(Ew,Math.min(Tw,t*Aw))),im=performance.now(),es=!0,Hn&&ti[Hn]&&ti[Hn].classList.remove("zone--active")}function Cw(){if(E.SUN_DIR){let i=E.SUN_DIR.y;if(i<-.3)return 1;if(i<-.05)return(-.05-i)/.25}return 0}function om(){let i=document.getElementById("zone-progress-fill"),e=document.getElementById("zone-progress-label");if(i&&e){let t=(Pn+1)/gn.length*100;i.style.height=t+"%",e.textContent=Pn+1+"/"+gn.length}}function am(){let i=["default","research","publications","about","connect","night"];for(let c of i)ti[c]=document.getElementById(`zone-${c}`);let e=document.querySelectorAll(".cv-tab");e.forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();let h=c.dataset.tab;e.forEach(f=>{f.classList.remove("active"),f.setAttribute("aria-selected","false")}),c.classList.add("active"),c.setAttribute("aria-selected","true"),document.querySelectorAll(".cv-content").forEach(f=>f.classList.remove("cv-content--active"));let d=document.getElementById("tab-"+h);d&&d.classList.add("cv-content--active")})});let t=0,n=80;window.addEventListener("wheel",c=>{if(es||Io){t=0;return}if(c.target instanceof Element&&c.target.closest(".zone, .home-terminal, .audio-viz, .cv-viewer, .reviewer-footer, .reviewer-hero, .editor-panel, .cv-details, #site-header, #reviewer-toggle, .audio-toggle, #cv-btn-fixed, #audio-viz")){t=0;return}if(t+=c.deltaY,Math.abs(t)<n)return;let u=t>0?1:-1;t=0,u>0?bs((Pn+1)%gn.length):bs((Pn-1+gn.length)%gn.length)},{passive:!0});let s=0,r=0,o=50,a=400;window.addEventListener("touchstart",c=>{s=c.touches[0].clientY,r=performance.now()},{passive:!0}),window.addEventListener("touchend",c=>{if(es)return;let u=s-c.changedTouches[0].clientY;performance.now()-r>a||Math.abs(u)<o||(u>0?bs((Pn+1)%gn.length):bs((Pn-1+gn.length)%gn.length))},{passive:!0}),document.querySelectorAll(".section-nav__item").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation(),u.preventDefault();let h=parseInt(c.dataset.zone,10);!isNaN(h)&&h<gn.length&&bs(h)})}),window.addEventListener("keydown",c=>{c.target instanceof Element&&c.target.matches("input, textarea, [contenteditable]")||(c.key==="ArrowDown"||c.key==="PageDown"?(c.preventDefault(),es||bs(Math.min(Pn+1,gn.length-1))):(c.key==="ArrowUp"||c.key==="PageUp")&&(c.preventDefault(),es||bs(Math.max(Pn-1,0))))}),Pn=0,setTimeout(()=>{zh("default"),om()},600)}var em=330,Pw=110,Iw=.85,Co=new C(0,8,0),Cn=0,Ss=new C,Es=new C,tm=0,Lw=1.6;function lm(i){if(es){let e=performance.now()-im,t=Math.min(1,e/sm),n=Rw(t);i.position.lerpVectors(Po,Rr,n);let s=Math.sqrt(Math.pow(Rr.x-Po.x,2)+Math.pow(Rr.z-Po.z,2)),o=Math.min(s*.08,10)*4*n*(1-n);if(i.position.y+=o,Si.lerpVectors(rm,Bh,n),i.lookAt(Si),t>=1){es=!1,i.position.copy(Rr),Si.copy(Bh),i.lookAt(Si);let a=gn[Pn];Cw()>.7&&a.name!=="default"?zh("night"):zh(a.name),document.querySelectorAll(".section-nav__item").forEach(c=>{parseInt(c.dataset.zone,10)===Pn?(c.classList.remove("leaving"),c.classList.add("active"),c.setAttribute("aria-current","true")):c.classList.contains("active")?(c.classList.add("leaving"),c.classList.remove("active"),c.removeAttribute("aria-current"),setTimeout(()=>c.classList.remove("leaving"),300)):c.removeAttribute("aria-current")}),om()}return}if(Hn==="connect"&&E.moonOrb){let e=typeof window<"u"&&window._elapsed||0,t=E.moonOrb.position,s=Math.atan2(t.z,t.x)-Iw,r=em*Math.cos(s),o=em*Math.sin(s),a=Pw+Math.sin(e*.2)*4;if(Cn<1){Cn===0&&(Ss.copy(i.position),Es.copy(Si),tm=e);let l=Math.min(1,(e-tm)/Lw);Cn=l*l*(3-2*l),i.position.x=Ss.x+(r-Ss.x)*Cn,i.position.y=Ss.y+(a-Ss.y)*Cn,i.position.z=Ss.z+(o-Ss.z)*Cn;let c=Es.x+(Co.x-Es.x)*Cn,u=Es.y+(Co.y-Es.y)*Cn,h=Es.z+(Co.z-Es.z)*Cn;Si.set(c,u,h),i.lookAt(Si),l>=1&&(Cn=1)}else i.position.set(r,a,o),i.lookAt(Co),Si.copy(Co)}else Cn!==0&&(Cn=0)}var Dw=90,Nw=45,Uw=[null,{reflectEvery:2,shadowEvery:6,msaa:0,shadowMap:2048,gtao:!0,pixelRatio:null},{reflectEvery:3,shadowEvery:12,msaa:0,shadowMap:1024,gtao:!1,pixelRatio:1}],Vh=0;function Ow(i){let e=E.water;if(!e||e.__throttled)return;let t=e.onBeforeRender,n=0;e.onBeforeRender=function(...s){n++%e.__reflectEvery===0&&t.apply(this,s)},e.__throttled=!0,e.__reflectEvery=i}function Fw(i){let e=E.renderer;e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,E._shadowEvery=i}function Bw(){let i=E.composer,e=E.renderer;if(!i||i.renderTarget1.samples===0)return;let t=new he;e.getDrawingBufferSize(t);let n=new ot(t.x,t.y,{type:yt,samples:0}),s=i.renderTarget1,r=i.renderTarget2;i.renderTarget1=n,i.renderTarget2=n.clone(),i.writeBuffer=i.renderTarget1,i.readBuffer=i.renderTarget2,s.dispose(),r.dispose(),i.setSize(window.innerWidth,window.innerHeight)}function zw(i){let e=E.sunLight;!e||!e.castShadow||(e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null),e.shadow.mapSize.set(i,i))}function Hh(i){let e=Uw[i];if(!(!e||i<=Vh)){if(Vh=i,Bw(),Ow(e.reflectEvery),E.water&&(E.water.__reflectEvery=e.reflectEvery),Fw(e.shadowEvery),zw(e.shadowMap),!e.gtao&&E.gtaoPass&&(E.gtaoPass.enabled=!1),e.pixelRatio){let t=Math.min(window.devicePixelRatio,e.pixelRatio);E.renderer.setPixelRatio(t),E.renderer.setSize(window.innerWidth,window.innerHeight),E.composer.setPixelRatio(t),E.composer.setSize(window.innerWidth,window.innerHeight)}E._qualityTier=i}}function cm(){if(E.lowPower){Hh(2);return}let i=0,e=[],t=performance.now();(function n(){let s=performance.now(),r=s-t;if(t=s,i++,document.hidden||r>250){i=0,e.length=0,requestAnimationFrame(n);return}if(i>Nw&&e.push(r),e.length<Dw){requestAnimationFrame(n);return}e.sort((a,l)=>a-l);let o=1e3/e[Math.floor(e.length/2)];o<32?Hh(2):o<50&&Hh(1),Vh<2&&setTimeout(()=>{i=0,e.length=0,t=performance.now(),requestAnimationFrame(n)},6e3)})()}function um(i){E._shadowEvery&&i%E._shadowEvery===0&&(E.renderer.shadowMap.needsUpdate=!0)}var kw=220,Hw=90,hm=3.5,dm=6.5,fm=7,Cr=0,ym=1,pm=2,mm=3,Vw=new se(1,.86,.55),gm=new se(1,.32,.1),Gw=new se(.24,.04,.01),Ww=new se(.16,.11,.09),Xw=new se(.05,.035,.03),Ts=null,Lo=null,ts=null,Vn=Cr,vn=0,Gh=200+Math.random()*200,yl=!1,Do=4.8,Wh=0,Xh=0,Ei=new se,qw=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function vm(i){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(i,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);let r=new mn(t);return r.colorSpace=Mt,r}function xm(i,e,t){let n=new Qe,s=new Float32Array(i*3),r=new Float32Array(i*3),o=new Float32Array(i),a=new Float32Array(i);n.setAttribute("position",new Xe(s,3)),n.setAttribute("aColor",new Xe(r,3)),n.setAttribute("aSize",new Xe(o,1)),n.setAttribute("aAlpha",new Xe(a,1));let l=new Oe({uniforms:{map:{value:e},uFarFade:{value:0}},vertexShader:`
            attribute vec3 aColor;
            attribute float aSize;
            attribute float aAlpha;
            uniform float uFarFade;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                float far = clamp((100.0 - (-mv.z)) / 40.0, 0.0, 1.0);
                vAlpha = aAlpha * mix(1.0, far, uFarFade);
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
            }`,blending:t,transparent:!0,depthWrite:!1}),c=new kt(n,l);return c.frustumCulled=!1,c.renderOrder=8,{mesh:c,geo:n,pos:s,col:r,size:o,alpha:a,vel:new Float32Array(i*3),life:new Float32Array(i),maxLife:new Float32Array(i),count:i}}function _m(){let{islandGroup:i}=E;i&&(Ts=xm(kw,vm(.25),wt),Lo=xm(Hw,vm(.55),Bn),Ts.mesh.material.uniforms.uFarFade.value=1,Ts.geo.getAttribute("aAlpha").array.fill(0),Lo.geo.getAttribute("aAlpha").array.fill(0),i.add(Ts.mesh),i.add(Lo.mesh),ts=new Kn(16737320,0,26,2),ts.position.set(0,Do+.6,0),ts.visible=!1,i.add(ts),window._volcanoGlow=1,window.eruptVolcano=Mm)}function Mm(){return Vn!==Cr?!1:(E.lavaPool&&E.lavaPool.mesh&&(Do=E.lavaPool.mesh.position.y),ts.position.y=Do+.6,Vn=ym,vn=0,!0)}function Yw(i){let e=wm(i);if(e<0)return;let t=Math.random()*Math.PI*2,n=Math.random()*.22;i.pos[e*3]=Math.cos(t)*n,i.pos[e*3+1]=Do+.15,i.pos[e*3+2]=Math.sin(t)*n;let s=Math.random()*Math.PI*2,r=.35+Math.random()*1.15;i.vel[e*3]=Math.cos(s)*r,i.vel[e*3+1]=2.2+Math.random()*2.2,i.vel[e*3+2]=Math.sin(s)*r,i.maxLife[e]=1.8+Math.random()*1.7,i.life[e]=i.maxLife[e],i.size[e]=2.2+Math.random()*2.4}function Zw(i){let e=wm(i);if(e<0)return;let t=Math.random()*Math.PI*2,n=Math.random()*.3;i.pos[e*3]=Math.cos(t)*n,i.pos[e*3+1]=Do+.3,i.pos[e*3+2]=Math.sin(t)*n,i.vel[e*3]=(Math.random()-.5)*.35,i.vel[e*3+1]=.85+Math.random()*.6,i.vel[e*3+2]=(Math.random()-.5)*.35,i.maxLife[e]=5.5+Math.random()*3,i.life[e]=i.maxLife[e],i.size[e]=4.5+Math.random()*3.5}function wm(i){for(let e=0;e<i.count;e++)if(i.life[e]<=0)return e;return-1}function bm(i){if(!Ts)return;i=Math.min(i,.05),Vn===Cr&&!qw&&window._volcanoAuto&&(Gh-=i,Gh<=0&&(Gh=240+Math.random()*240,Mm()));let e=1,t=0,n=0,s=0;if(Vn!==Cr&&(vn+=i),Vn===ym){let l=Math.min(1,vn/hm);e=1+l*l*1.6,t=l*l*1.2,n=l*6,vn>=hm&&(Vn=pm,vn=0)}else if(Vn===pm){let c=1-Math.min(1,vn/dm)*.45;e=2.6*c+.4,t=(7+Math.sin(vn*23)*1.3+Math.sin(vn*7.3)*.9)*c,n=52*c,s=11*c,vn>=dm&&(Vn=mm,vn=0)}else if(Vn===mm){let l=Math.min(1,vn/fm),c=(1-l)*(1-l);e=1+c*1.4,t=c*1.6,n=c*4,vn>=fm&&(Vn=Cr,vn=0)}for(window._volcanoGlow=e,ts&&(ts.intensity=t,ts.visible=t>.01),E.lavaPool&&E.lavaPool.light&&(E.lavaPool.light.intensity=.5*e),Wh+=n*i;Wh>=1;)Yw(Ts),Wh-=1,yl=!0;for(Xh+=s*i;Xh>=1;)Zw(Lo),Xh-=1,yl=!0;if(Vn===Cr&&!yl)return;let r=!1,o=Ts;for(let l=0;l<o.count;l++){if(o.life[l]<=0){o.alpha[l]=0;continue}r=!0,o.life[l]-=i,o.vel[l*3+1]-=2.6*i,o.pos[l*3]+=o.vel[l*3]*i,o.pos[l*3+1]+=o.vel[l*3+1]*i,o.pos[l*3+2]+=o.vel[l*3+2]*i,o.pos[l*3+1]<.7&&(o.life[l]=0);let c=Math.max(0,o.life[l]/o.maxLife[l]);c>.6?Ei.lerpColors(gm,Vw,(c-.6)/.4):Ei.lerpColors(Gw,gm,c/.6),o.col[l*3]=Ei.r,o.col[l*3+1]=Ei.g,o.col[l*3+2]=Ei.b,o.alpha[l]=Math.min(1,c*2.5)}let a=Lo;for(let l=0;l<a.count;l++){if(a.life[l]<=0){a.alpha[l]=0;continue}r=!0,a.life[l]-=i,a.vel[l*3+1]=Math.max(.25,a.vel[l*3+1]-.06*i),a.pos[l*3]+=a.vel[l*3]*i,a.pos[l*3+1]+=a.vel[l*3+1]*i,a.pos[l*3+2]+=a.vel[l*3+2]*i;let c=1-a.life[l]/a.maxLife[l];a.size[l]+=i*1.5;let u=Math.min(c/.18,1)*(1-Math.pow(c,2.2));a.alpha[l]=u*.34,Ei.lerpColors(Ww,Xw,c),a.col[l*3]=Ei.r,a.col[l*3+1]=Ei.g,a.col[l*3+2]=Ei.b}yl=r;for(let l of[o,a])l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.aColor.needsUpdate=!0,l.geo.attributes.aSize.needsUpdate=!0,l.geo.attributes.aAlpha.needsUpdate=!0}var _l=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;window._weather={t:0,smoothed:0,suppressLightning:!!_l};var Ml={clear:{base:.04,spread:.03,dwell:[70,160]},hazy:{base:.28,spread:.06,dwell:[45,100]},overcast:{base:.55,spread:.06,dwell:[40,90]},storm:{base:.9,spread:.07,dwell:[50,110]}},jw={clear:[["hazy",1]],hazy:[["clear",.6],["overcast",.4]],overcast:[["hazy",.55],["storm",.45]],storm:[["overcast",1]]},Kw=.02,Jw=.011,No=1,Uo={epoch:"clear",dwellLeft:90+Math.random()*70,target:Ml.clear.base,phase1:Math.random()*Math.PI*2,phase2:Math.random()*Math.PI*2,elapsed:0};function Qw(i){let e=jw[i],t=Math.random();for(let[n,s]of e){if(t<s)return n;t-=s}return e[e.length-1][0]}function qh(i){let e=Ml[i];Uo.epoch=i,Uo.dwellLeft=e.dwell[0]+Math.random()*(e.dwell[1]-e.dwell[0]),Uo.target=Math.max(0,Math.min(1,e.base+(Math.random()*2-1)*e.spread))}function $w(){if(_l)return"clear";let i=Math.random(),e=i<.35?"clear":i<.65?"hazy":i<.85?"overcast":"storm";return qh(e),No=3.2,e}function eb(i){Ml[i]&&(qh(i),No=3.2)}window.__forceEpoch=eb;window.__weatherEpoch=()=>Uo.epoch;window.__rerollWeather=$w;function Sm(i){let e=window._weather;if(e.manual){let n=1-Math.exp(-i*1.25);e.smoothed+=(e.t-e.smoothed)*n;return}if(i*=e.speed||1,!_l&&i>0){let n=Uo;n.elapsed+=i,n.dwellLeft-=i,n.dwellLeft<=0&&qh(Qw(n.epoch));let r=Ml[n.epoch].spread*(Math.sin(n.elapsed*.48+n.phase1)*.6+Math.sin(n.elapsed*.211+n.phase2)*.4),o=Math.max(0,Math.min(1,n.target+r)),l=(o>e.t?Kw:Jw)*No*i;e.t+=Math.max(-l,Math.min(l,o-e.t)),No>1&&Math.abs(o-e.t)<.02&&(No=1)}let t=1-Math.exp(-i*1.25);e.smoothed+=(e.t-e.smoothed)*t}function Em(){_l&&(window._weather.t=0,window._weather.smoothed=0)}var tb=new se(.58,.62,.72),nb=new se(.18,.21,.27),ib=new se(.016,.022,.034),sb=new se(.1,.13,.2),rb=new se(.28,.34,.44),ob=.8,ab=.9,lb=.9,cb=.72,Lm=Qn+3.5,ub=5.4;var hb=new se(.75,.85,1),Tm=new se(.95,.96,1),db=new se(1,.9,.72),Am=new se(.8,.9,1.05),fb=1200,pb=150,mb=1.5,Oo=null,Dm=!1,$t=null,Nm=220,Um=128,Gn=null,Ti=null,Sl=null,El=null,Kh=null,ns=null,As=null,is=null,wl=new C,Rm=new C,Yh=new C,_t={nextStrikeIn:3+Math.random()*5,flashQueue:[],decayUntil:0,peak:0,elapsed:0,strikeColor:new se(.8,.9,1),plasmaOnPeak:!1},Cm=new se,Zh=new se,Pm=new se,jh=new se,Im=new se,bl=new se;function Jh(){if(Oo)return;let{sunLight:i,hemiLight:e,ambLight:t,rimLight:n,scene:s}=E;if(!(!i||!e||!t)){if(Oo={sun:{color:i.color.clone(),intensity:i.intensity},hemiS:e.color.clone(),hemiG:e.groundColor.clone(),hemiI:e.intensity,amb:{color:t.color.clone(),intensity:t.intensity},rim:n?{color:n.color.clone(),intensity:n.intensity}:null},s&&!$t&&($t=new Kn(12638463,0,pb,mb),$t.position.set(0,Lm,0),$t.shadow.mapSize.set(512,512),$t.shadow.bias=-.005,$t.castShadow=!1,s.add($t)),s&&!ns){let r=new Float32Array(Nm*3);Gn=new Qe,Gn.setAttribute("position",new Xe(r,3)),Gn.setDrawRange(0,0),El=new pn({color:7254271,transparent:!0,opacity:0,blending:wt,depthWrite:!1}),As=new Zn(Gn,El),As.renderOrder=14,As.frustumCulled=!1,Sl=new pn({transparent:!0,opacity:0,blending:wt,depthWrite:!1}),Sl.color.setRGB(1.15,1.2,1.35),ns=new Zn(Gn,Sl),ns.renderOrder=15,ns.frustumCulled=!1;let o=new Float32Array(Um*3);Ti=new Qe,Ti.setAttribute("position",new Xe(o,3)),Ti.setDrawRange(0,0),Kh=new pn({color:6067944,transparent:!0,opacity:0,blending:wt,depthWrite:!1}),is=new Zn(Ti,Kh),is.renderOrder=13,is.frustumCulled=!1,s.add(As),s.add(ns),s.add(is)}window.matchMedia&&(Dm=window.matchMedia("(prefers-reduced-motion: reduce)").matches),window.__forceStrike=()=>{_t.nextStrikeIn=0}}}function gb(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}function vb(i,e){if(!Gn)return;let t=Gn.attributes.position.array,n=new C().subVectors(e,i),s=n.length();n.divideScalar(s||1);let r=new C(1,0,0);r.addScaledVector(n,-n.dot(r)),r.lengthSq()<1e-4&&r.set(0,1,0),r.normalize();let o=new C().crossVectors(n,r).normalize(),a=[i.clone()];(function d(f,g,v,m){if(v===0){a.push(g.clone());return}let p=f.clone().add(g).multiplyScalar(.5);p.addScaledVector(r,(Math.random()*2-1)*m),p.addScaledVector(o,(Math.random()*2-1)*m*.6),d(f,p,v-1,m*.52),d(p,g,v-1,m*.52)})(i,e,5,s*.11);let l=[],c=2+(Math.random()*2|0);for(let d=0;d<c;d++){let f=6+(Math.random()*(a.length*.45)|0),g=a[Math.min(f,a.length-2)],v=s*(.14+Math.random()*.16),m=Math.random()<.5?-1:1,p=g.clone().addScaledVector(n,v*.6).addScaledVector(r,m*v*(.5+Math.random()*.5)).addScaledVector(o,(Math.random()*2-1)*v*.3),y=[g.clone()];(function b(x,I,T,w){if(T===0){y.push(I.clone());return}let A=x.clone().add(I).multiplyScalar(.5);A.addScaledVector(r,(Math.random()*2-1)*w),A.addScaledVector(o,(Math.random()*2-1)*w*.6),b(x,A,T-1,w*.52),b(A,I,T-1,w*.52)})(g,p,3,v*.18),l.push(y)}function u(d,f,g,v){let m=g;for(let p=0;p<v.length-1&&m+2<=f;p++)d[m*3]=v[p].x,d[m*3+1]=v[p].y,d[m*3+2]=v[p].z,m++,d[m*3]=v[p+1].x,d[m*3+1]=v[p+1].y,d[m*3+2]=v[p+1].z,m++;return m}let h=u(t,Nm,0,a);if(Gn.setDrawRange(0,h),Gn.attributes.position.needsUpdate=!0,Gn.computeBoundingSphere(),Ti){let d=Ti.attributes.position.array,f=0;for(let g of l)f=u(d,Um,f,g);Ti.setDrawRange(0,f),Ti.attributes.position.needsUpdate=!0,Ti.computeBoundingSphere()}}function xb(i){if(Math.random()<.25)i.copy(Tm);else{let t=Math.random()*.35;i.copy(hb).lerp(Tm,t)}}function yb(i){let e=3+(Math.random()*3|0),t=90+Math.random()*130;for(let o=0;o<e;o++)_t.flashQueue.push({at:_t.elapsed+Math.random()*t/1e3,peak:.7+Math.random()*.55});_t.decayUntil=_t.elapsed+.7+Math.random()*.7;let r=3.5+(1-Math.max(.7,Math.min(1,i)))/.3*10.5;if(_t.nextStrikeIn=-Math.log(1-Math.random())*r,xb(_t.strikeColor),_t.plasmaOnPeak=Math.random()<.25,Gn&&$t){let o=Math.random()<.7,a=o?Math.sqrt(Math.random())*5.5:8+Math.random()*4,l=Math.random()*Math.PI*2,c=Math.cos(l)*a,u=Math.sin(l)*a,h=o?a<2.5?2.6:1.1:Ye;Rm.set(c,h,u);let d=window._cloud&&window._cloud.mesh,f=d?d.position.y:Lm,g=d?d.scale.y:ub;wl.set(c+(Math.random()*2-1)*2.2,f+g*(.28+Math.random()*.14),u+(Math.random()*2-1)*2.2),$t.position.copy(wl),vb(wl,Rm),window._cloud&&window._cloud.mesh&&window._cloud.mat.uniforms.uStrikeCube&&(Yh.copy(wl),window._cloud.mesh.worldToLocal(Yh),window._cloud.mat.uniforms.uStrikeCube.value.copy(Yh))}}function _b(i,e){if(i<=.7)return _t.peak=0,0;if(Dm||window._weather?.suppressLightning)return 0;_t.elapsed+=e,_t.nextStrikeIn-=e,_t.nextStrikeIn<=0&&yb(i);let t=0,n=_t.flashQueue;for(let s=n.length-1;s>=0;s--)_t.elapsed>=n[s].at&&(n[s].peak>t&&(t=n[s].peak),n.splice(s,1));if(t>_t.peak)_t.peak=t;else{let s=Math.max(0,_t.decayUntil-_t.elapsed),r=s>0?Math.min(1,e/s):1;_t.peak*=1-r,_t.peak<.002&&(_t.peak=0)}return _t.peak}function Om(i,e){if(Oo||Jh(),!Oo)return;let{sunLight:t,hemiLight:n,ambLight:s,rimLight:r}=E,o=gb(i),a=Oo;Cm.lerpColors(a.sun.color,tb,o),Zh.lerpColors(a.hemiS,nb,o),Pm.lerpColors(a.hemiG,ib,o),jh.lerpColors(a.amb.color,sb,o);let l=a.sun.intensity*(1-o*(1-ob)),c=a.hemiI*(1-o*(1-ab)),u=a.amb.intensity*(1-o*(1-lb)),h=_b(i,e||0);E._strikePump=h,t.color.copy(Cm),t.intensity=l;let d=Math.min(1,h*.55);if(Zh.lerp(Am,d*.3),n.color.copy(Zh),n.groundColor.copy(Pm),n.intensity=c+a.hemiI*h*.15,jh.lerp(Am,d*.2),s.color.copy(jh),s.intensity=u+a.amb.intensity*h*.1,r&&a.rim&&(Im.lerpColors(a.rim.color,rb,o),r.color.copy(Im),r.intensity=a.rim.intensity*(1-o*(1-cb))),$t)if(h>.001){if(bl.copy(_t.strikeColor),_t.plasmaOnPeak){let f=Math.min(1,h*h*.9);bl.lerp(db,f*.35)}$t.color.copy(bl),$t.intensity=h*fb,$t.castShadow=!0}else $t.intensity=0,$t.castShadow=!1;if(ns&&As&&(h>.01?(ns.visible=!0,As.visible=!0,Sl.opacity=Math.min(1,.65+h*.55),El.opacity=Math.min(.95,.35+h*.6),El.color.copy(_t.strikeColor),is&&(is.visible=!0,Kh.opacity=Math.min(.6,h*h*.55))):(ns.visible=!1,As.visible=!1,is&&(is.visible=!1))),window._cloud&&window._cloud.mat&&window._cloud.mat.uniforms.uStrikeI){let f=window._cloud.mat.uniforms;f.uStrikeI.value=h,h>.001&&f.uStrikeColor.value.copy(bl)}}var Qh=new se,Fm=new se,Bm=new C,zm=new se,km=new se,Hm=new se,Mb=new se(.3,.44,.66),wb=new se(.3,.35,.41),bb=new se(.06,.1,.16),Sb=new se(.055,.08,.125),Eb=new C(.72,.78,1.05),Tb=new C(1.25,1.4,1.7),Ab=new se(10467028),Rb=new se(7375526),Cb=new se(.612,.557,.459),Pb=new se(.34,.4,.5),Ib=new se(400942),Lb=new se(266264);function Vm(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)}var $h=null;function Db(i,e){if(window._cloud&&window._cloud.mat&&window._cloud.mat.uniforms){let t=window._cloud.mat.uniforms;$h||($h={coverage:t.coverage?t.coverage.value:.72,densityScale:t.densityScale?t.densityScale.value:3.5,sunIntensity:t.sunIntensity?t.sunIntensity.value:9.2});let n=$h;t.coverage.value=.88*Math.pow(Math.min(1,e/.85),.65),t.densityScale.value=n.densityScale+e*(5.2-n.densityScale),t.sunIntensity.value=n.sunIntensity+e*(3.8-n.sunIntensity),Qh.lerpColors(Mb,wb,e),Fm.lerpColors(bb,Sb,e),t.skyColor.value.copy(Qh),t.groundColor.value.copy(Fm),t.absorption&&(Bm.copy(Eb).lerp(Tb,e),t.absorption.value.copy(Bm)),t.uWindT&&(t.uWindT.value=(E._windT||0)%36e3),t.uStormDark&&(t.uStormDark.value=e*.85);let s=window._cloud.mesh;if(s&&s.userData.baseY&&(s.position.y=s.userData.baseY-e*.9,s.scale.y=s.userData.baseSY*(1+e*.22)),window.__cloudBaseU&&s){let r=s.position.y-s.scale.y*.5;window.__cloudBaseU.value=r+s.scale.y*.06+.1,window.__mistU.value=Math.min(1,Math.max(0,(t.coverage.value-.3)/.45)),window.__mistColU.value.copy(Qh).multiplyScalar(1-e*.66)}}if(window._cloudShadow&&window._cloudShadow.mat){let t=window._cloudShadow.mat.uniforms;t.uWindT&&(t.uWindT.value=(E._windT||0)%36e3),t.uStrength&&(t.uStrength.value=.38+e*.07),t.uCoverage&&window._cloud&&(t.uCoverage.value=window._cloud.mat.uniforms.coverage.value)}if(E.sunLight&&E.sunLight.shadow&&(E.sunLight.shadow.radius=1+e*5),window._rain&&window._rain.mat&&window._rain.mat.uniforms.uColor&&(zm.lerpColors(Ab,Rb,e),window._rain.mat.uniforms.uColor.value.copy(zm),window._rain.stormT=e),E.water&&E.water.material&&E.water.material.uniforms){let t=E.water.material.uniforms,n=e*e;t.sunColor&&(km.lerpColors(Cb,Pb,n),t.sunColor.value.copy(km)),t.waterColor&&(Hm.lerpColors(Ib,Lb,n),t.waterColor.value.copy(Hm)),t.distortionScale&&(t.distortionScale.value=3.2+n*2.8),t.uStormDim&&(t.uStormDim.value=n)}E.scene&&E.scene.fog&&(E.scene.fog=null)}var Gm=new Jn,Nb=new C,Ub=new C,Pr=new C,Ob=new C,Fb=new C,Wm=new Kt,Ai=0,Xm=0,qm=0,VE=new Uint8Array(128);function Bb(){Ai=0,Xm=0,qm=0}function Ym(){let i=0;function e(){requestAnimationFrame(e);let t=Gm.getDelta(),n=Gm.elapsedTime;window._elapsed=n,Dp(n),Bb();let s=E._sunGlowGate??1;if(E._sunHaloMat&&(E._sunHaloMat.opacity=(.06+Ai*.55)*s),E._sunHaloInnerMat&&(E._sunHaloInnerMat.opacity=(.14+Ai*.7)*s),E.sunOrb){let l=1+Ai*.22;E.sunOrb.scale.setScalar(l)}if(E._spaceEnv&&E._spaceEnv.material&&E._spaceEnv.material.uniforms){let l=E._spaceEnv.material.uniforms;l.uNebulaPulse&&(l.uNebulaPulse.value=Ai),l.uSkyPulse&&(l.uSkyPulse.value=Xm)}if(E._starShellMat&&E._starShellMat.uniforms.uPulse&&(E._starShellMat.uniforms.uPulse.value=qm),E._nebulaVol&&(E._nebulaVol.update(E.camera.position,E._nebulaOffset),E._nebulaVol.setPulse(Ai)),E._skyLayers&&E._nebulaOffset)for(let l of E._skyLayers)l.points.material.uniforms.uEyeDrift.value.copy(E.camera.position).sub(E._nebulaOffset).multiplyScalar(l.k);let r=Math.min(t,.05);E.islandGroup.rotation.y+=.008*r*(window.__dishSpin??1),window.__sunDirW&&E.SUN_DIR&&window.__sunDirW.value.copy(E.SUN_DIR),$p(t),zp(),Hp(n),Sm(t);let o=window._weather&&window._weather.smoothed||0,a=Vm(o);if(E._windT=(E._windT||0)+Math.min(t,.05)*(1+a*3),Om(o,t),Db(o,a),window._rain){let l=Math.max(0,(o-.08)/.92),c=1+a*.85;window._rain.enabled=l>.01,window._rain.intensity=(.55+Ai*.35)*l*c}if(Zp(t,n),jp(t),bm(t),lm(E.camera),E.bloomPass){let c=.24*(1-Vm(window._weather&&window._weather.smoothed||0)*.55);E.bloomPass.strength=E.camera.position.y<Ye?.072:c}if(E.lensFlarePass){let l=E.lensFlarePass.uniforms;if(l.iTime.value=41.7,E.sunOrb){let c=E.sunOrb.position,u=E.camera.position,h=Ob.subVectors(c,u).normalize(),d=E.camera.getWorldDirection(Fb);if(h.dot(d)<=0)l.enabled.value=!1;else{let g=Nb.copy(c).project(E.camera),v=Math.max(Math.abs(g.x),Math.abs(g.y)),m=Math.max(0,Math.min(1,(1.2-v)/.2)),p=Ub.subVectors(c,u),y=p.length();p.divideScalar(y);let b=-u.dot(p),x=1;if(b>0&&b<y){let T=u.x+p.x*b,w=u.y+p.y*b,A=u.z+p.z*b,M=Math.sqrt(T*T+w*w+A*A),_=2,L=8;M<_?x=0:M<L&&(x=(M-_)/(L-_))}l.enabled.value=!0,l.lensPosition.value.set(g.x,g.y),l.opacity.value=1-x*.25*(E._flareGate??1),l.colorGain.value.set(35,15,6),l.glareSize.value=.06*x*m,l.flareSize.value=.002*x*m;let I=1-Math.min(1,(E._strikePump||0)*2);l.secondaryGhosts.value=m*I,l.aditionalStreaks.value=m*I,x<=0&&(l.enabled.value=!1)}}else l.enabled.value=!1}if(window._cloud){let l=window._cloud.mat.uniforms;l.cameraPos.value.copy(E.camera.position),l.uTime.value=n,l.frame.value=(l.frame.value+1)%1024,E.SUN_DIR&&E.islandGroup&&(Wm.copy(E.islandGroup.quaternion).invert(),Pr.copy(E.SUN_DIR).applyQuaternion(Wm).normalize(),l.sunDirLocal.value.copy(Pr),window._terrain&&window._terrain.sunUniform&&window._terrain.sunUniform.value.copy(Pr)),l.uDensityMul.value=1+Ai*.45}if(window._cloudShadow){let l=window._cloudShadow.mat.uniforms;if(l.uTime.value=n,l.uDensityMul.value=1+Ai*.45,l.uSunOffset&&window._cloud&&E.SUN_DIR&&E.islandGroup){let u=(window._cloud.mesh.position.y-window._cloudShadow.mesh.position.y)/Math.max(Pr.y,.2),h=Pr.x*u,d=Pr.z*u,f=Math.hypot(h,d),g=l.uRadius.value*.35;f>g&&(h*=g/f,d*=g/f),l.uSunOffset.value.set(h,d)}}E.grainPass&&(E.grainPass.uniforms.time.value=n),um(i++),E.composer.render()}e()}var zo=new C(150,128,1120),Cl=new C(2,6,-2),Tl=new C(84,33,78),Al=new C(2,5,-4),Fo=new C().subVectors(Cl,zo).normalize(),Bo=45,Zm=58,zb=2800,nd=24e3,Il=2350,ed=900,Jm=5800,jm=3100,Qm=170,Pl=Il*(Jm/1e3)/2,kb=2*Qm/Il,Km=Pl+Il*(nd/1e3),Hb=5200,Vb=2200,Gb=3200,Wb=1900;function td(i){return i*i*i*(6*i*i-15*i+10)}function Xb(i){return i*i*i*i*(35-84*i+70*i*i-20*i*i*i)}function Rl(i,e,t){let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function qb(i){let e=i*i,t=e*e;return 2*i-5*t+6*t*i-2*t*e+kb*(e*i-e)}function $m(i,e,t,n={}){let s=n.isReady||(()=>!0);if(n.skip)return i.position.copy(Tl),i.lookAt(Al),t&&t(),{requestSkip(){}};i.position.copy(zo).addScaledVector(Fo,-Km),i.lookAt(Cl);let r=wp(e,i,{axis:Fo}),o=E._nebulaVol;if(o&&o.setCavityOn(0),E.renderer)try{let N=new ot(256,256),Y=i.clone();Y.position.copy(Tl),Y.lookAt(Al),E.renderer.setRenderTarget(N),E.renderer.render(e,Y),E.renderer.setRenderTarget(null),N.dispose()}catch{}let a={compiled:!1};if(E.renderer&&E.renderer.compileAsync)try{Promise.race([E.renderer.compileAsync(e,i),new Promise(N=>{setTimeout(N,8e3)})]).then(()=>{a.compiled=!0},()=>{a.compiled=!0})}catch{a.compiled=!0}else a.compiled=!0;let l=i.layers.mask;if(E._spaceEnv&&E._spaceEnv.layers.enable(9),i.layers.disableAll(),i.layers.enable(9),i.layers.enable(br),E._sunGlowGate=0,E._flareGate=0,E.sunOrb&&(E.sunOrb.visible=!0,E.sunOrb.material)){E.sunOrb.material.visible=!0;let N=E.sunOrb.material.uniforms;N&&N.uSunFade&&(N.uSunFade.value=0),N&&N.uDiscScale&&(N.uDiscScale.value=1)}let c=E._sunWorldPos?zo.distanceTo(E._sunWorldPos):1577,u=E._islandOrbitRing&&E._islandOrbitRing.material.uniforms.baseOpacity,h=E._moonOrbitRing&&E._moonOrbitRing.material,d=u?u.value:0,f=h?h.opacity:0;function g(N){u&&(u.value=d*N),h&&(h.opacity=f*N)}g(0);function v(N){if(E._skyLayers)for(let Y of E._skyLayers)Y.points.material.uniforms.uLayerFade.value=Y.cruise?1-N:N}v(0);let m=new C,p=new C,y=new C,b=new C,x=new C,I=0,T="cruise",w=0,A=performance.now(),M=0,_=50,L=!1,D=!1,F=!1,z=!1,V=[],k=[],j=0,H=0;function G(N){Math.abs(i.fov-N)>.01&&(i.fov=N,i.updateProjectionMatrix())}function re(N,Y,te){m.copy(zo).addScaledVector(Fo,-N),m.x+=Math.sin(te*28e-5)*16*Y,m.y+=Math.sin(te*22e-5+1.1)*9*Y,i.position.copy(m),i.lookAt(Cl)}function ue(N){r.update(N)}function fe(){D||(D=!0,i.layers.mask=l,i.layers.enable(br),i.layers.enable(9),E.lensFlarePass&&(E.lensFlarePass.enabled=!0),E.dofPass&&(E.dofPass.enabled=!0))}function le(){let N=performance.now();w+=Math.min(N-A,_),A=N;let Y=w,te=Math.min(.05,(Y-I)/1e3);I=Y;let q=Y,K=Y-M;if(T==="cruise"){z||(z=!0,E.lensFlarePass&&(E.lensFlarePass.enabled=!1),E.dofPass&&(E.dofPass.enabled=!1));let we=Il*td(Math.min(1,q/ed));H+=we*te;let ve=Km-H;re(ve,1,q),r.setOpacity(Math.min(1,q/500)),ue(te),G(Bo+(Zm-Bo)*td(Math.min(1,q/ed)));let O=s()&&q>zb||s()&&L&&q>ed||q>nd;if(O&&!F){F=!0;let _e=new Set,Se=ne=>{!ne||!ne.isTexture||ne.isRenderTargetTexture||_e.has(ne)||(_e.add(ne),ne.image?V.push(ne):k.push(ne))};e.traverse(ne=>{let De=Array.isArray(ne.material)?ne.material:ne.material?[ne.material]:[];for(let me of De){for(let P in me)Se(me[P]);if(me.uniforms)for(let P in me.uniforms)Se(me.uniforms[P]&&me.uniforms[P].value)}}),(function ne(){let De=V[V.length-1];if(!De)return;let me=()=>{V.pop();try{E.renderer.initTexture(De)}catch{}requestAnimationFrame(ne)};De.image&&typeof De.image.decode=="function"?De.image.decode().then(me,me):me()})()}if(F&&k.length)for(let _e=k.length-1;_e>=0;_e--){let Se=k[_e];if(!Se.image)continue;k.splice(_e,1),j++;let ne=()=>{try{E.renderer.initTexture(Se)}catch{}j--};typeof Se.image.decode=="function"?Se.image.decode().then(ne,ne):ne()}let Ie=a.compiled&&F&&V.length===0&&k.length===0&&j===0;if(O&&(Ie||q>nd+12e3)){let _e=ve-Pl;b.copy(Fo).multiplyScalar(_e),r.rebase(b),x.add(b),E._nebulaOffset&&E._nebulaOffset.copy(x),o&&o.setCavity(y.copy(x).negate()),r.setRespawn(!1),re(Pl,1,q),T="decel",M=w,n.onDropout&&n.onDropout()}requestAnimationFrame(le);return}if(T==="decel"){let we=Math.min(1,K/Jm),ve=1-td(we),O=qb(we),Ie=Pl*(1-O);fe(),re(Ie,ve,q),o&&o.setCavityOn(Math.min(1,we/.25));let _e=Ie+c,Se=Rl(Hb,Vb,_e);if(E._sunGlowGate=Se,E._flareGate=Rl(Gb,Wb,_e),E.sunOrb&&E.sunOrb.material){let ne=E.sunOrb.material.uniforms;ne&&ne.uSunFade&&(ne.uSunFade.value=Se)}if(g(Rl(.55,.95,we)),v(Rl(.25,.85,we)),ue(te),G(Bo+(Zm-Bo)*ve),we>=1){if(G(Bo),re(0,0,q),o&&o.setCavityOn(1),i.layers.disable(br),r.dispose(),E._sunGlowGate=1,E._flareGate=1,E.sunOrb&&E.sunOrb.material){let ne=E.sunOrb.material.uniforms;ne&&ne.uSunFade&&(ne.uSunFade.value=1)}g(1),v(1),T="zoom",M=Y}requestAnimationFrame(le);return}let oe=Math.min(1,K/jm),pe=Xb(oe),Ae=oe*(1-oe)*(1-oe)*Qm*(jm/1e3);m.lerpVectors(zo,Tl,pe).addScaledVector(Fo,Ae),p.lerpVectors(Cl,Al,pe),i.position.copy(m),i.lookAt(p),oe<1?requestAnimationFrame(le):(i.position.copy(Tl),i.lookAt(Al),t&&t())}return requestAnimationFrame(le),{requestSkip(){L=!0}}}var Ll=new Ka,id=new he;function t0(){let{renderer:i,camera:e}=E;if(!i||!e)return;let t=i.domElement;Ll.layers.enableAll();let n=!1,s=!1;t.addEventListener("click",r=>{let o=t.getBoundingClientRect();if(id.x=(r.clientX-o.left)/o.width*2-1,id.y=-((r.clientY-o.top)/o.height)*2+1,Ll.setFromCamera(id,e),!s&&E.gateway){let a=[];if(E._gatewayHitSphere&&a.push(E._gatewayHitSphere),a.push(E.gateway),Ll.intersectObjects(a,!0).length>0){s=!0,e0("goodnight, gateway.",r.clientX,r.clientY),E.gateway.traverse(c=>{if(c.material&&"emissiveIntensity"in c.material){let u=c.material.emissiveIntensity;c.material.emissiveIntensity=u+2.5,setTimeout(()=>{c.material.emissiveIntensity=u+.8},300),setTimeout(()=>{c.material.emissiveIntensity=u},900)}}),setTimeout(()=>{s=!1},3e3);return}}if(!n&&E.moonOrb){let a=[E.moonOrb];if(E._moonHitSphere&&a.push(E._moonHitSphere),Ll.intersectObjects(a,!0).length>0){n=!0;let c=E.moonOrb.material;if(c.uniforms&&c.uniforms.uAmbient){let u=c.uniforms.uAmbient.value;c.uniforms.uAmbient.value=.6,setTimeout(()=>{c.uniforms.uAmbient.value=.35},300),setTimeout(()=>{c.uniforms.uAmbient.value=u},800)}e0("good morning, moon.",r.clientX,r.clientY),setTimeout(()=>{n=!1},3e3)}}})}function e0(i,e,t){let n=document.createElement("div");n.textContent=i,n.style.cssText=`
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
    `,document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(-30px)"}),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),500)},2e3)}var Rs={realHeightmap:!0,audio:!0,reviewerMode:!0,dissertation:!0,dailyPlanet:!0};var sd="reviewer";function ko(){try{return localStorage.getItem(sd)==="1"}catch{return!1}}function Dl(i){try{i?localStorage.setItem(sd,"1"):localStorage.removeItem(sd)}catch{}location.reload()}var Yb=["zone-default","zone-about","zone-research","zone-publications","zone-connect"];function Zb(){let i=document.querySelectorAll(".section-nav--masthead .section-nav__item");i.forEach(e=>{e.addEventListener("click",t=>{let n=parseInt(e.dataset.zone,10),s=Yb[n],r=s&&document.getElementById(s);r&&(t.preventDefault(),t.stopPropagation(),r.scrollIntoView({behavior:"smooth",block:"start"}),i.forEach(o=>o.classList.remove("active")),e.classList.add("active"))},!0)})}function rd(){let i=ko();i&&(document.documentElement.classList.add("reviewer-mode"),Zb()),Rs.reviewerMode&&document.addEventListener("keydown",t=>{t.key!=="r"&&t.key!=="R"||t.target instanceof Element&&t.target.matches("input, textarea, [contenteditable]")||t.metaKey||t.ctrlKey||t.altKey||Dl(!ko())});let e=document.createElement("button");e.id="reviewer-toggle",e.type="button",e.textContent=i?"exit text view":"text view",e.addEventListener("click",()=>Dl(!ko())),e.style.opacity="0",document.body.appendChild(e),requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.opacity=""}))}var jb="https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/",Ho=[{title:"The Mice Galaxies",slug:"the-mice-galaxies"},{title:"Arp 140",slug:"arp-140"},{title:"V838 Monocerotis",slug:"v838-monocerotis"},{title:"RS Puppis",slug:"rs-puppis"},{title:"Pismis 24",slug:"pismis-24"},{title:"NGC 1300",slug:"ngc-1300"},{title:"M87 Black Hole",slug:"black-hole-at-the-center-of-galaxy-m87"},{title:"NGC 1569",slug:"ngc-1569"},{title:"Hoag\u2019s Object",slug:"hoags-object"},{title:"Bubble Nebula",slug:"bubble-nebula"},{title:"Butterfly Nebula",slug:"butterfly-nebula"},{title:"NGC 2392",slug:"ngc-2392"},{title:"Westerlund 2",slug:"wusterland-2"},{title:"Hubble Ultra Deep Field",slug:"hubble-ultra-deep-field-2014"},{title:"The Whirlpool Galaxy",slug:"the-whirlpool-galaxy"},{title:"Cat\u2019s Eye Nebula",slug:"cats-eye-nebula"},{title:"Supernova 1987A",slug:"supernova-1987a"},{title:"Bullet Cluster",slug:"bullet-cluster"},{title:"Caldwell 73",slug:"caldwell-73"},{title:"The Crab Nebula",slug:"the-crab-nebula"},{title:"Abell 370",slug:"abell-370"},{title:"Helix Nebula",slug:"helix-nebula"},{title:"Twin Galaxies AM 2026-424",slug:"twin-galaxies-am-2026-424"},{title:"Cosmic Reef",slug:"cosmic-reef"},{title:"Lensing Galaxy Cluster",slug:"lensing-galaxy-cluster"},{title:"Pillars of Creation",slug:"pillars-of-creation"},{title:"Milky Way Center",slug:"milky-way-center"}].map(i=>({...i,url:`${jb}hubble-sonification-${i.slug}.mp4`}));var n0="NASA &middot; SYSTEM Sounds";function od(i=null){let e;do e=Ho[Math.floor(Math.random()*Ho.length)];while(i&&Ho.length>1&&e.url===i);return e}var Yt=null,mt=null,i0=null,Wn=null,Ir=null,ni=null,Dr=null,ii=!0,s0=!1,Nl=[],Lr=0,r0=0;function Kb(){return!0}function Cs(){return ii}function Ol(){return s0}function o0(){return Dr}function a0(){return Ir}function l0(){return n0}function Fl(i){return Nl.push(i),()=>{Nl=Nl.filter(e=>e!==i)}}function c0(i){for(let e of Nl)try{e(i,Dr)}catch{}}function u0(){if(!Wn||!mt)return;let i=ii?0:.42,e=mt.currentTime;Wn.gain.cancelScheduledValues(e),Wn.gain.setValueAtTime(Wn.gain.value,e),Wn.gain.linearRampToValueAtTime(i,e+.6)}function Jb(){if(!mt||!Wn)return;let i=mt.createBuffer(1,2*mt.sampleRate,mt.sampleRate),e=i.getChannelData(0),t=0;for(let u=0;u<e.length;u++){let h=Math.random()*2-1;t=(t+.02*h)/1.02,e[u]=t*3.5}let n=mt.createBufferSource();n.buffer=i,n.loop=!0;let s=mt.createBiquadFilter();s.type="lowpass",s.frequency.value=220,s.Q.value=.7;let r=mt.createOscillator();r.frequency.value=.11;let o=mt.createGain();o.gain.value=.09;let a=mt.createGain();a.gain.value=.85,r.connect(o).connect(a.gain);let l=mt.createOscillator();l.type="sine",l.frequency.value=52;let c=mt.createGain();c.gain.value=.08,ni=mt.createGain(),ni.gain.value=0,n.connect(s).connect(a).connect(ni),l.connect(c).connect(ni),ni.connect(Wn);try{n.start(),r.start(),l.start()}catch{}}function h0(){if(!ni||!mt)return;let i=ii?0:.16,e=mt.currentTime;ni.gain.cancelScheduledValues(e),ni.gain.setValueAtTime(ni.gain.value,e),ni.gain.linearRampToValueAtTime(i,e+2.2)}function d0(i){Yt&&(Dr=i,Yt.src=i.url,Yt.load(),c0("trackchange"))}function Ul(){clearTimeout(r0);let i=od(Dr?Dr.url:null);d0(i),!ii&&mt&&Yt.play().catch(()=>{})}function f0(i,e={}){let t=ii;if(ii=!!i,e.persist!==!1&&void 0,u0(),h0(),t&&!ii&&mt){Lr=0;let n=()=>{Dr?Yt.play().catch(()=>{}):Ul()};mt.state==="running"?n():mt.resume().then(n).catch(()=>{})}else!t&&ii&&Yt&&Yt.pause();c0("mute")}function p0(){mt&&(Lr=0,Ul())}function m0(){let i=window.AudioContext||window.webkitAudioContext;i&&(Yt=document.createElement("audio"),Yt.id="sonification-player",Yt.crossOrigin="anonymous",Yt.preload="auto",Yt.addEventListener("ended",()=>{Ul()}),Yt.addEventListener("error",()=>{Lr++,!(Lr>=Ho.length)&&(r0=setTimeout(Ul,1e3*Math.min(Lr,8)))}),Yt.addEventListener("loadeddata",()=>{Lr=0}),document.body.appendChild(Yt),mt=new i,i0=mt.createMediaElementSource(Yt),Wn=mt.createGain(),Wn.gain.value=0,Ir=mt.createAnalyser(),Ir.fftSize=256,Ir.smoothingTimeConstant=.55,i0.connect(Ir),Ir.connect(Wn),Wn.connect(mt.destination),Jb(),ii=Kb(),s0=!0,u0(),h0(),window.__audioReactive=null,d0(od()))}var ld=220,cd=28,Bl=28,Xn=null,Nr=null,Ps=null,g0=null,ss=null,Is=null,zl=null,Qb=!1;function $b(){Xn||(Xn=document.createElement("div"),Xn.id="audio-viz",Xn.className="audio-viz",Xn.innerHTML=`
        <canvas class="audio-viz__canvas" width="${ld}" height="${cd}"></canvas>
        <div class="audio-viz__row">
            <a class="audio-viz__title" target="_blank" rel="noopener" href="#"></a>
            <button class="audio-viz__skip" type="button" title="Next sonification" aria-label="Skip to next sonification">&raquo;</button>
        </div>
        <div class="audio-viz__credit">${l0()}</div>
    `,Ps=Xn.querySelector(".audio-viz__canvas"),Nr=Xn.querySelector(".audio-viz__title"),g0=Xn.querySelector(".audio-viz__skip"),ss=Ps.getContext("2d"),g0.addEventListener("click",i=>{i.stopPropagation(),p0()}),document.body.appendChild(Xn),Qb=!0)}function v0(){if(!Nr)return;let i=o0();if(!i){Nr.textContent="-",Nr.removeAttribute("href");return}Nr.textContent=i.title,Nr.href=i.url}function x0(i){Xn&&(Xn.dataset.visible=i?"1":"0")}function ad(){if(!ss||!Ps)return;let i=a0(),e=Math.min(window.devicePixelRatio||1,2),t=ld,n=cd;if(Ps.width!==t*e&&(Ps.width=t*e,Ps.height=n*e,ss.scale(e,e)),ss.clearRect(0,0,t,n),!i){Is=requestAnimationFrame(ad);return}(!zl||zl.length!==i.frequencyBinCount)&&(zl=new Uint8Array(i.frequencyBinCount));let s=zl;i.getByteFrequencyData(s);let r=2,o=Math.max(1,(t-r*(Bl-1))/Bl);for(let a=0;a<Bl;a++){let l=Math.floor(Math.pow(a/Bl,1.8)*(s.length*.7)),c=s[l]/255,u=Math.max(1,c*n),h=a*(o+r),d=n-u,f=.35+c*.55;ss.fillStyle=`rgba(111, 195, 232, ${f.toFixed(2)})`,ss.fillRect(h,d,o,u)}Is=requestAnimationFrame(ad)}function y0(){Is||(Is=requestAnimationFrame(ad))}function eS(){Is&&cancelAnimationFrame(Is),Is=null,ss&&Ps&&ss.clearRect(0,0,ld,cd)}function _0(){Ol()&&($b(),v0(),x0(!Cs()),Cs()||y0(),Fl(i=>{if(i==="trackchange"&&v0(),i==="mute"){let e=!Cs();x0(e),e?y0():eS()}}))}function M0(i){let e=i|0;return function(){e=e+1831565813|0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function w0(i=new Date){let e=new Date(i.getFullYear(),0,0),t=i-e;return Math.floor(t/864e5)+i.getFullYear()*1e3}function kl(i,e){return e[Math.floor(i()*e.length)]}function Hl(i,e,t){return i+(e-i)*t}var tS=[11850478,13162728,11060960,13819368,12440036],nS=[2772078,2377828,3035766,2048096,2508394],iS=[527376,724756,658446,791064,593170];function b0(){if(!Rs.dailyPlanet)return null;let e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?42:w0(),t=M0(e),n={seed:e,rimColor:kl(t,tS),hemiSky:kl(t,nS),hemiGround:kl(t,iS),sunCoronaMul:Hl(.9,1.15,t()),moonCoronaMul:Hl(.85,1.2,t()),pulseScale:Hl(.8,1.25,t()),label:sS(e)};return window.__DAILY_PARAMS=n,n}function S0(){return"G2026"+String(Math.floor(Math.random()*1e3)).padStart(3,"0")}function sS(i){return S0()}function E0(){let i=window.__DAILY_PARAMS;if(!i)return;let e=document.getElementById("daily-label-inline");if(e&&(e.textContent=i.label,e.style.cursor="pointer",e.style.pointerEvents="auto",e.title="regenerate island",!e.dataset.regenWired)){e.dataset.regenWired="1";let t=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=!1,s=()=>{if(n)return;try{window.__regenIsland&&window.__regenIsland()}catch{}try{window.__rerollWeather&&window.__rerollWeather()}catch{}if(i.label=S0(),t){e.textContent=i.label;return}n=!0;let o=0,a=setInterval(()=>{if(o+=1,o>=9){clearInterval(a),e.textContent=i.label,n=!1;return}e.textContent="G2026"+String(Math.floor(Math.random()*1e3)).padStart(3,"0")},42)};e.addEventListener("click",s);let r=document.createElement("button");r.type="button",r.tabIndex=-1,r.title="regenerate island",r.textContent="[ generate new island ]",r.style.cssText=["background:none","border:none","padding:0","margin-left:10px","font:inherit","letter-spacing:inherit","text-transform:inherit","color:inherit","opacity:0.4","cursor:pointer","pointer-events:auto","transition:opacity 0.25s ease"].join(";"),r.addEventListener("mouseenter",()=>{r.style.opacity="0.9"}),r.addEventListener("mouseleave",()=>{r.style.opacity="0.4"}),r.addEventListener("click",o=>{o.stopPropagation(),s()}),e.parentElement.appendChild(r)}}function T0(i){window.open(i,"_blank","noopener")||console.warn(`terminal: popup blocked for ${i}`)}function rS(i,e){let t=document.createElement("a");t.href=i,t.download=e,t.rel="noopener",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}var oS="https://science.nasa.gov/mission/hubble/multimedia/sonifications/",A0="https://github.com/HaleighNyberg",R0="up up down down left right left right b a",lT={help:()=>["commands (slash optional - /help == help):",'  print("text")   echo a string',"  whoami          short bio","  ls              list site sections","  cat <section>   open a section (about / research / cv / toolkit / connect / dissertation)","  scan            re-run the scanner","  scan all        extended scan sweep","  resources       credits and sources","  email           open mail client (haleigh@purdue.edu)","  cv              download Nyberg_CV.pdf","  github          open github profile","  nasa            open NASA Hubble sonifications page","  gogogo          spin the moon orbit fast for 2 revolutions","  freeze          pause the moon orbit","  reset           restore normal moon orbit","  hello           say hi","  konami          enter the konami code","  sudo <cmd>      permission denied (you are not root)","  clear           clear the terminal","  exit            hide this terminal"],whoami:()=>["haleigh e. nyberg","phd candidate, astrobiology @ purdue","nsf grfp fellow \xB7 olson lab"],ls:()=>["home \xB7 about \xB7 research \xB7 resume/cv \xB7 toolkit \xB7 connect \xB7 dissertation"],scan:()=>["> scanning... volcanic island detected.","> shoreline ponds active. rna precursor cycling in progress."],"scan all":()=>["> extended sweep initiated...","> atmosphere: thin. O2 trace. CH4 elevated.","> hydrosphere: liquid water confirmed. salinity moderate.","> geochem: basalt substrate. hydrothermal vents present.","> biosignature candidates: 3. cross-checking with archive...","> match: prebiotic chemistry consistent with olson et al. framework.","> scan complete."],resources:()=>["ambient audio: nasa hubble sonifications \xB7 system sounds","built with: three.js, vanilla js, node/bash"],email:()=>(window.location.href="mailto:haleigh@purdue.edu",["opening mail client \u2192 haleigh@purdue.edu"]),cv:()=>(rS("assets/Nyberg_CV.pdf","Nyberg_CV.pdf"),["downloading Nyberg_CV.pdf..."]),github:()=>(T0(A0),[`opening ${A0}`]),nasa:()=>(T0(oS),["opening nasa hubble sonifications..."]),gogogo:()=>(window.__moonBoost={factor:24,orbitsLeft:2,_swept:0},["> moon orbit boost engaged.","> factor x24 \xB7 2 orbits queued."]),freeze:()=>(window.__moonBoost={factor:0,orbitsLeft:1/0,_swept:0},['> moon orbit frozen. type "reset" to resume.']),reset:()=>(window.__moonBoost=null,["> orbit restored to nominal rate."]),hello:()=>["hi. the ponds are wet today."],konami:()=>[`try typing: ${R0}`],[R0]:()=>["> konami code accepted.","> +30 lives. the moon winks at you.","> (try /gogogo)"]};function Vl(i,e){i.querySelectorAll('.chrome-tile[data-open="1"]').forEach(t=>{if(t===e)return;t.dataset.open="0";let n=t.querySelector(".chrome-tile__btn");n&&n.setAttribute("aria-expanded","false")})}function C0(i){let e=Cs();i.dataset.playing=e?"0":"1";let t=i.querySelector(".chrome-tile__btn");t&&(t.setAttribute("aria-label",e?"Play ambient audio":"Mute ambient audio"),t.title=e?"Audio (muted)":"Audio (playing)")}function P0(){let i=document.getElementById("chrome-panel");if(!i||!(window.matchMedia&&window.matchMedia("(min-width: 769px) and (pointer: fine)").matches))return;function t(){let r=document.getElementById("audio-viz"),o=document.getElementById("chrome-pop-audio");r&&o&&r.parentElement!==o&&o.appendChild(r)}t(),new MutationObserver(t).observe(document.body,{childList:!0});let n=i.querySelector('[data-tile="audio"]');if(n&&Ol()){C0(n);let r=n.querySelector(".chrome-tile__btn");r.addEventListener("click",o=>{o.stopPropagation();let a=Cs();f0(!a),a?(Vl(i,n),n.dataset.open="1",r.setAttribute("aria-expanded","true")):(n.dataset.open="0",r.setAttribute("aria-expanded","false"))}),Fl(o=>{o==="mute"&&C0(n)})}else n&&(n.style.display="none");i.querySelectorAll(".chrome-tile[data-tile]").forEach(r=>{if(r===n)return;let o=r.querySelector(".chrome-tile__btn"),a=r.querySelector(".chrome-pop");!o||!a||o.addEventListener("click",l=>{l.stopPropagation();let c=r.dataset.open==="1";Vl(i),c||(r.dataset.open="1",o.setAttribute("aria-expanded","true"))})}),document.addEventListener("click",r=>{i.contains(r.target)||Vl(i)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Vl(i)});let s=document.getElementById("zone-dots");if(!s){i.classList.add("revealed");return}s.classList.contains("revealed")?i.classList.add("revealed"):new MutationObserver((r,o)=>{s.classList.contains("revealed")&&(i.classList.add("revealed"),o.disconnect())}).observe(s,{attributes:!0,attributeFilter:["class"]})}var aS=[{year:"2026",title:"Effects of Planetary Obliquity on Wet-Dry Cycles, Pond Organics, and Urability",venue:"AbSciCon 2026"},{year:"2025",title:"Planetary Obliquity and Origin of Life Potential in Warm Little Ponds: Earth and Beyond",venue:"AGU Fall Meeting 2025 (invited)"},{year:"2025",title:"Planetary Obliquity Impacts Wet-Dry Cycling and the Potential for an Origin of Life in Warm Little Ponds",venue:"Goldschmidt 2025"},{year:"2025",title:"Quantifying Planetary Origin of Life Potential: Connecting Global Climate to Local Wet-Dry Cycling on Volcanic Islands",venue:"Midwestern Geobiology Symposium 2025"},{year:"2024",title:"Elucidating Planetary Scenarios That May Lead to an Origin of Life in Warm Little Ponds",venue:"AGU Fall Meeting 2024 (as Brown)"},{year:"2024",title:"Impacts of Planetary Obliquity on Wet-Dry Cycling: Early Earth and Beyond",venue:"AbSciCon 2024 (as Brown)"}],lS=[{year:"2025",authors:"Mingsuwan, C. et al.",title:"Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations",venue:"IEEE SMC-IT/SCC, 6th AR/VR Workshop (co-author; presented 2025, to appear in the 2026 proceedings)"},{year:"2025",authors:"Brown, H. E. et al.",title:"Strengthening Community Across Artists and Scientists in Astrobiology",venue:"NASA DARES report"}],cS=[{title:"PALLAS (co-founder)",blurb:"A platform connecting artists and scientists for paid collaboration across astrobiology. I co-founded it and designed and built the accessibility-audited front end. We helped secure AAS funding for pilot programming and ran multi-institution events.",tags:["Front-end","Accessibility","Community building"],links:[{label:"Live",href:"https://pallas.gallery"}]},{title:"NASA Artemis Gateway visualization",blurb:"Scrum master for two 16-member, multi-university teams building an Unreal Engine VR visualization and mission-planning tool for NASA's Lunar Gateway, in partnership with Barrios Technology and NASA's Johnson Space Center (two semesters, through Purdue's Data Mine).",tags:["Unreal Engine","VR","Agile / Scrum"],links:[]},{title:"ExoPlaSim origin-of-life pipeline",blurb:"My dissertation engine: 3D general circulation model parameter sweeps with a custom post-processing pipeline, building toward an Origin of Life Index that ranks worlds by their potential for wet-dry cycling, one of the leading proposed routes to an origin of life. (Model code is dissertation IP, not in the public repo.)",tags:["Python","Fortran","HPC","NetCDF"],links:[]},{title:"ML forecasting (Purdue / John Deere)",blurb:"Multivariate time-series demand prediction (ARIMA, LSTM) on an industry data-science team through Purdue's Data Mine.",tags:["ARIMA","LSTM","Time series"],links:[]}];function uS(i){return'<div class="pub-entry"><span class="pub-year">'+i.year+'</span><div class="pub-authors"><strong>'+i.title+'</strong></div><div class="pub-venue">'+i.venue+"</div></div>"}function hS(i){return'<div class="pub-entry"><span class="pub-year">'+i.year+'</span><div class="pub-authors">'+i.authors+" <strong>"+i.title+'</strong></div><div class="pub-venue">'+i.venue+"</div></div>"}function dS(i){i&&(i.innerHTML='<p class="pub-section-title">Selected Talks</p>'+aS.slice(0,3).map(uS).join("")+'<p class="pub-section-title">Proceedings &amp; Reports</p>'+lS.map(hS).join(""))}function fS(i){let e=i.tags.map(function(n){return'<span class="skill-tag">'+n+"</span>"}).join(""),t=i.links.map(function(n){return'<a class="brand-link" href="'+n.href+'" rel="noopener" target="_blank">'+n.label+"</a>"}).join("");return'<article class="project-card"><h3 class="project-card__title">'+i.title+'</h3><p class="project-card__blurb">'+i.blurb+"</p>"+(e?'<div class="project-card__tags">'+e+"</div>":"")+(t?'<div class="project-card__links">'+t+"</div>":"")+"</article>"}function pS(i){i&&(i.innerHTML=cS.map(fS).join(""))}function I0(){try{dS(document.getElementById("pub-list")),pS(document.getElementById("project-grid"))}catch(i){console.warn("content render failed",i)}}I0();if(ko()){try{rd()}catch(t){console.warn("reviewer UI init failed",t)}let i=document.getElementById("loading-screen");i&&i.remove();let e=document.getElementById("site-header");e&&e.classList.add("revealed")}else{let i=function(){let w=document.querySelector(".home-hero__statement");if(!w||w.dataset.typed)return;w.dataset.typed="1";let A=w.textContent;if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;w.textContent="";let _=0;(function L(){w.textContent=A.slice(0,_),_++<A.length&&setTimeout(L,12+Math.random()*16)})()},r=function(){if(s)return;s=!0;let w=()=>{n=!0};try{let A=E.renderer,M=E.composer?E.composer.renderTarget1:null;M&&A.setRenderTarget(M);let _=A.compileAsync?A.compileAsync(E.scene,E.camera):Promise.resolve(A.compile(E.scene,E.camera));M&&A.setRenderTarget(null),_.then(w,w)}catch(A){console.warn("shader warm failed",A),w()}},d=function(){E._introDone=!0,kh(!1),document.documentElement.classList.remove("intro-active");try{localStorage.setItem("introSeen","1")}catch{}E.camera.far=9e3,E.camera.updateProjectionMatrix(),setTimeout(()=>{let w=document.getElementById("site-header");w&&w.classList.add("revealed");let A=document.getElementById("zone-dots");if(A&&A.classList.add("revealed"),Rs.dailyPlanet)try{E0()}catch(M){console.warn("daily label failed",M)}t0(),setTimeout(i,700)},300),setTimeout(()=>{if(Rs.audio)try{m0(),_0()}catch(w){console.warn("audio init failed",w)}try{rd()}catch(w){console.warn("reviewer UI init failed",w)}try{Em()}catch(w){console.warn("weather init failed",w)}try{P0()}catch(w){console.warn("chrome panel init failed",w)}try{cm()}catch(w){console.warn("adaptive quality failed",w)}},1200)},p=function(){let w=Math.round(Math.min(100,t)*.75);return e&&(w=Math.max(w,75)),n&&(w=Math.max(w,90)),E._gatewayWarm&&(w=100),Math.min(w,100)},y=function(){return!(e&&n&&E._gatewayWarm)},b=function(){setTimeout(()=>{m||y()&&(f&&(f.classList.add("on"),g=setInterval(()=>{f&&(f.textContent="\u25E6 loading "+p()+"%")},90)),v=document.createElement("button"),v.id="skip-to-lite",v.type="button",v.textContent="skip to text view \u2192",v.addEventListener("click",w=>{w.stopPropagation(),Dl(!0)}),document.body.appendChild(v),requestAnimationFrame(()=>{v&&v.classList.add("on")}))},700)},x=function(){if(m=!0,g&&(clearInterval(g),g=null),f&&(f.classList.remove("on"),setTimeout(()=>{f.parentNode&&f.remove()},600)),v){let w=v;v=null,w.classList.remove("on"),setTimeout(()=>{w.parentNode&&w.remove()},600)}};(function(){let A=document.querySelector("#site-header h1.display--hero");if(!A)return;let M=A.textContent;A.innerHTML=[...M].map((_,L)=>_===" "?" ":`<span class="char" style="--char-i:${L}">${_}</span>`).join("")})(),(function(){document.querySelectorAll(".zone").forEach(M=>{M.addEventListener("scroll",()=>{M.style.setProperty("--scroll-y",M.scrollTop+"px")},{passive:!0})})})();try{b0()}catch(w){console.warn("daily planet resolve failed",w)}Sp(),Lp();try{Jh()}catch(w){console.warn("storm baseline capture failed",w)}Op(),Bp(),kp(),Yp(),_m(),Jp(),am(),kh(!0),document.documentElement.classList.add("intro-active"),Ym();let e=!1,t=0;Ki.onProgress=(w,A,M)=>{M&&(t=Math.max(t,Math.min(99,Math.round(A/M*100))))},Ki.onLoad=()=>{e=!0,t=100,E._firstViewLoaded=!0,r()},setTimeout(()=>{e||(e=!0,E._firstViewLoaded=!0,r())},24e3);let n=!1,s=!1;setTimeout(()=>{n=!0},3e4);let o=()=>setTimeout(()=>{E._gatewayWarm=!0},5e3);if(E._firstViewLoaded)o();else{let w=setInterval(()=>{E._firstViewLoaded&&(clearInterval(w),o())},100)}let a=new URLSearchParams(location.search).get("intro")==="1",l=!1;try{l=localStorage.getItem("introSeen")==="1"}catch{}let c=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),u=!!(navigator.connection&&navigator.connection.saveData),h=a?!1:l||c||u,f=document.getElementById("approach-telemetry"),g=null,v=null,m=!1;b();let I=$m(E.camera,E.scene,d,{isReady:()=>{let w=e&&n&&!!E._gatewayWarm;return w&&(E._introReleased=!0),w},skip:h,onDropout:x});if(!h&&I){let w=()=>{I.requestSkip(),window.removeEventListener("pointerdown",w),window.removeEventListener("wheel",w),window.removeEventListener("keydown",w)};window.addEventListener("pointerdown",w,{passive:!0}),window.addEventListener("wheel",w,{passive:!0}),window.addEventListener("keydown",w)}let T=document.getElementById("loading-screen");if(T){let w=()=>{requestAnimationFrame(()=>requestAnimationFrame(()=>{T.classList.add("fade-out"),setTimeout(()=>{T.parentNode&&T.remove()},1e3)}))};if(h){let A=()=>{x(),w()},M=setTimeout(A,3e3);(function _(){if(e){clearTimeout(M),A();return}setTimeout(_,50)})()}else{let A=0,M=performance.now();(function _(){requestAnimationFrame(()=>{let L=performance.now();A=L-M<60?A+1:0,M=L,A>=3?w():_()})})()}}}
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
