(self.webpackChunkGUI=self.webpackChunkGUI||[]).push([[532],{42532(Vl,oe,J){"use strict";J.r(oe),J.d(oe,{BACKGROUND_NOISE_TAG:()=>os,Dataset:()=>Pl,UNKNOWN_TAG:()=>gp,create:()=>uA,deleteSavedTransferModel:()=>lA,getMaxIntensityFrameIndex:()=>mp,listSavedTransferModels:()=>aA,spectrogram2IntensityCurve:()=>pp,utils:()=>cA,version:()=>Ul});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=1e-7,$r=1e-4;class Ji{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class on{refCount(t){return gt("refCount")}incRef(t){return gt("incRef")}timerAvailable(){return!0}time(t){return gt("time")}read(t){return gt("read")}readSync(t){return gt("readSync")}readToGPU(t,e){return gt("readToGPU")}numDataIds(){return gt("numDataIds")}disposeData(t,e){return gt("disposeData")}write(t,e,s){return gt("write")}move(t,e,s,r,i){return gt("move")}memory(){return gt("memory")}floatPrecision(){return gt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Qt:$r}dispose(){return gt("dispose")}}function gt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,as(n,t,e)}function Gs(n,t){if(n.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);let e=n.length,s=0;for(;e>0;)s=Math.random()*e|0,e--,as(n,e,s),as(t,e,s)}function _r(n,t,e){return Math.max(n,Math.min(t,e))}function ve(n){return n%2===0?n:n+1}function as(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function ql(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function Mn(n,t){const e=Math.random();return t*e+(1-e)*n}function Zi(n,t){let e=0;for(let s=0;s<n.length;s++){const r=Number(n[s])-Number(t[s]);e+=r*r}return e}function g(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function be(n,t,e=""){g(Wt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Zt(n){g(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ke(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||lt(n)&&!e)for(let s=0;s<n.length;++s)ke(n[s],t,e);else t.push(n);return t}function At(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Yi(n){return n.length===0}function Wt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function zn(n){return n%1===0}function Xi(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{const t=Math.exp(2*n);return(t-1)/(t+1)}}function ae(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function O(n){const t=new Uint32Array(n);for(let e=0;e<n;++e)t[e]=e;return it(t),t}function z(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function w(n,t=r=>0,e,s=setTimeout){return new Promise((r,i)=>{let o=0;const a=()=>{if(n()){r();return}o++;const l=t(o);if(e!=null&&o>=e){i();return}s(a,l)};a()})}function W(n,t){let e=1,s=-1;for(let i=0;i<n.length;++i)if(n[i]>=0)e*=n[i];else if(n[i]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${i}`);s=i}else if(n[i]<0)throw Error(`Shapes can not be < 0. Found ${n[i]} at dim ${i}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const r=n.slice();return r[s]=t/e,r}function Z(n,t){const e=t.length;return n=n==null?t.map((s,r)=>r):[].concat(n),g(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),g(n.every(s=>zn(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Nt(n,t){const e=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||r?null:Z(t,n).sort();let o=0;for(let a=0;a<n.length;++a){if(i!=null){if(i[o]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(i[o]==null||i[o]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),i[o]<=a&&o++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function bt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Mt(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function te(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function pe(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Yt(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function lt(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function le(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function zt(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Xt(n){return typeof n=="string"||n instanceof String}function ls(n){return typeof n=="boolean"}function Qi(n){return typeof n=="number"}function to(n){return Array.isArray(n)?to(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Qi(n)?"float32":Xt(n)?"string":ls(n)?"bool":"float32"}function eo(n){return!!(n&&n.constructor&&n.call&&n.apply)}function dA(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function no(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function Hl(n,t,e,s=!1){const r=new Array;if(t.length===1){const i=t[0]*(s?2:1);for(let o=0;o<i;o++)r[o]=e[n+o]}else{const i=t[0],o=t.slice(1),a=o.reduce((l,u)=>l*u)*(s?2:1);for(let l=0;l<i;l++)r[l]=Hl(n+l*a,o,e,s)}return r}function Vs(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((r,i)=>r*i)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Hl(0,n,t,e)}function jl(n,t){const e=so(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function so(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function pA(n,t){const e=n.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return Vs(n,new Float32Array(e));if(t==="int32")return Vs(n,new Int32Array(e));if(t==="bool")return Vs(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function Kl(n){n.forEach(t=>{g(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function mA(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=e[r]*n[r];return s}function gA(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/e[r]),n-=s[r]*e[r];return s[s.length-1]=n,s}function ro(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jl="tfjsflags";class Ep{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Ip,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(ro(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Jl in t&&t[Jl].split(",").forEach(s=>{const[r,i]=s.split(":");this.urlFlags[r]=Np(r,i)})}}function Ip(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(Ap(t,s[0],s[1]),s.join("="))),t}function Ap(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Np(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function Q(){return Zl}let Zl=null;function Tp(n){Zl=n}var Yl=J(39907);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let io;function Xl(){if(io==null){let n;if(typeof window<"u")n=window;else if(typeof J.g<"u")n=J.g;else if(typeof Yl<"u")n=Yl;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");io=n}return io}function Dp(){const n=Xl();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function oo(n,t){const e=Dp();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const Ql="Abs",Cp="Acos",$p="Acosh",ao="Add",_p="AddN",Fp="All",Mp="Any",tu="ArgMax",zp="ArgMin",Lp="Asin",Rp="Asinh",Op="Atan",Bp="Atanh",Pp="Atan2",eu="AvgPool",Up="AvgPoolGrad",nu="AvgPool3D",Wp="AvgPool3DGrad",su="BatchMatMul",ru="BatchToSpaceND",Gp="Bincount",Vp="BroadcastTo",bA="BroadcastArgs",lo="Cast",qp="Ceil",iu="ClipByValue",Hp="Complex",ou="ComplexAbs",au="Concat",lu="Conv2D",jp="Conv2DBackpropFilter",uu="Conv2DBackpropInput",cu="Conv3D",Kp="Conv3DBackpropFilterV2",Jp="Conv3DBackpropInputV2",hu="Cos",fu="Cosh",Zp="Cumprod",du="Cumsum",Yp="CropAndResize",yA="DenseBincount",wA="DepthToSpace",pu="DepthwiseConv2dNative",Xp="DepthwiseConv2dNativeBackpropFilter",Qp="DepthwiseConv2dNativeBackpropInput",vA="Diag",tm="Dilation2D",em="Dilation2DBackpropInput",nm="Dilation2DBackpropFilter",mu="RealDiv",kA="Einsum",gu="Elu",sm="EluGrad",rm="Erf",im="Equal",bu="Exp",yu="ExpandDims",om="Expm1",am="FFT",lm="Fill",um="FlipLeftRight",wu="Floor",vu="FloorDiv",ku="FusedBatchNorm",xu="GatherV2",xA="GatherNd",cm="Greater",Su="GreaterEqual",uo="Identity",hm="IFFT",fm="Imag",dm="IsFinite",pm="IsInf",mm="IsNan",Eu="LeakyRelu",gm="Less",bm="LessEqual",SA="LinSpace",Iu="Log",Au="Log1p",ym="LogicalAnd",wm="LogicalNot",EA="LogicalOr",IA="LogicalXor",vm="LogSoftmax",AA="LowerBound",km="LRN",xm="LRNGrad",Nu="Max",Tu="Maximum",Du="MaxPool",Sm="MaxPoolGrad",Cu="MaxPool3D",Em="MaxPool3DGrad",NA="MaxPoolWithArgmax",$u="Mean",_u="Min",Fu="Minimum",Im="MirrorPad",Am="Mod",TA="Multinomial",Mu="Multiply",zu="Neg",Nm="NotEqual",Tm="NonMaxSuppressionV3",Dm="NonMaxSuppressionV4",Cm="NonMaxSuppressionV5",Lu="OnesLike",Ru="OneHot",Ou="Pack",Bu="PadV2",DA="Pool",Pu="Pow",Uu="Prelu",$m="Prod",CA="RaggedGather",$A="RaggedTensorToTensor",_m="Range",Fm="Real",Mm="Reciprocal",Wu="Relu",Gu="Reshape",Vu="ResizeNearestNeighbor",zm="ResizeNearestNeighborGrad",qu="ResizeBilinear",Lm="ResizeBilinearGrad",Hu="Relu6",ju="Reverse",Ku="Round",Ju="Rsqrt",_A="ScatterNd",FA="SearchSorted",Zu="Select",Yu="Selu",Xu="Slice",Qu="Sin",tc="Sinh",Rm="Sign",ec="Sigmoid",nc="Softplus",sc="Sqrt",rc="Sum",ic="SpaceToBatchND",oc="SplitV",ac="Softmax",Om="SparseFillEmptyRows",Bm="SparseReshape",Pm="SparseSegmentMean",Um="SparseSegmentSum",MA="SparseToDense",lc="SquaredDifference",Wm="Square",zA="StridedSlice",Gm="StringNGrams",Vm="StringSplit",qm="StringToHashBucketFast",uc="Sub",Hm="Tan",cc="Tanh",co="Tile",LA="TopK",jm="Transform",Fr="Transpose",RA="Unique",hc="Unpack",fc="UnsortedSegmentSum",OA="UpperBound",dc="ZerosLike",pc="Step",mc="FromPixels",Km="RotateWithOffset",gc="_FusedMatMul",bc="FusedConv2D",yc="FusedDepthwiseConv2D";var wc;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function us(...n){Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(...n)}function BA(...n){wc().getBool("IS_TEST")||wc().getBool("PROD")||console.log(...n)}var Jm;/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cs=oo("kernelRegistry",()=>new Map),qs=oo("gradRegistry",()=>new Map);function ho(n,t){const e=po(n,t);return cs.get(e)}function vc(n){return qs.get(n)}function fo(n){const t=cs.entries(),e=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[i,o]=r,[a]=i.split("_");a===n&&e.push(o)}return e}function Zm(n){const{kernelName:t,backendName:e}=n,s=po(t,e);cs.has(s)&&Jm.warn(`The kernel '${t}' for backend '${e}' is already registered`),cs.set(s,n)}function Ym(n){const{kernelName:t}=n;qs.has(t)&&Q().getBool("DEBUG")&&us(`Overriding the gradient for '${t}'`),qs.set(t,n)}function PA(n,t){const e=po(n,t);if(!cs.has(e))throw new Error(`The kernel '${n}' for backend '${t}' is not registered`);cs.delete(e)}function UA(n){if(!qs.has(n))throw new Error(`The gradient '${n}' for backend is not registered`);qs.delete(n)}function WA(n,t){fo(n).forEach(s=>{const r=Object.assign({},s,{backendName:t});Zm(r)})}function po(n,t){return`${t}_${n}`}var kc=J(90808),Xm=J.n(kc);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ln=Xm()||kc;function Mr(n){return Ln.fromString(n,!0,16)}const xc=Mr("c3a5c85c97cb3127"),Rn=Mr("b492b66fbe98f273"),ee=Mr("9ae16a3b2f90404f");function mo(n){return n.xor(n.shru(47))}function Sc(n,t,e){const s=n.slice(t,t+e);return Ln.fromBytes(Array.from(s),!0,!0)}function dt(n,t){return Sc(n,t,8)}function Ec(n,t){return Sc(n,t,4)}function Gt(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function hn(n,t,e=Mr("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let r=t.xor(s).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function Qm(n,t,e,s,r,i){r=r.add(n),i=Gt(i.add(r).add(s),21);const o=r;return r=r.add(t),r=r.add(e),i=i.add(Gt(r,44)),[r.add(s),i.add(o)]}function zr(n,t,e,s){return Qm(dt(n,t),dt(n,t+8),dt(n,t+16),dt(n,t+24),e,s)}function tg(n,t=n.length){if(t>=8){const e=ee.add(t*2),s=dt(n,0).add(ee),r=dt(n,t-8),i=Gt(r,37).mul(e).add(s),o=Gt(s,25).add(r).mul(e);return hn(i,o,e)}if(t>=4){const e=ee.add(t*2),s=Ec(n,0);return hn(s.shl(3).add(t),Ec(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],r=n[t-1],i=e+(s<<8),o=t+(r<<2);return mo(ee.mul(i).xor(xc.mul(o))).mul(ee)}return ee}function eg(n,t=n.length){const e=ee.add(t*2),s=dt(n,0).mul(Rn),r=dt(n,8),i=dt(n,t-8).mul(e),o=dt(n,t-16).mul(ee);return hn(Gt(s.add(r),43).add(Gt(i,30)).add(o),s.add(Gt(r.add(ee),18)).add(i),e)}function ng(n,t=n.length){const e=ee.add(t*2),s=dt(n,0).mul(ee),r=dt(n,8),i=dt(n,t-8).mul(e),o=dt(n,t-16).mul(ee),a=Gt(s.add(r),43).add(Gt(i,30)).add(o),l=hn(a,s.add(Gt(r.add(ee),18)).add(i),e),u=dt(n,16).mul(e),c=dt(n,24),h=a.add(dt(n,t-32)).mul(e),f=l.add(dt(n,t-24)).mul(e);return hn(Gt(u.add(c),43).add(Gt(h,30)).add(f),u.add(Gt(c.add(s),18)).add(h),e)}function GA(n,t=n.length){const e=Ln.fromNumber(81,!0);if(t<=32)return t<=16?tg(n,t):eg(n,t);if(t<=64)return ng(n,t);let s=e,r=e.mul(Rn).add(113),i=mo(r.mul(ee).add(113)).mul(ee),o=[Ln.UZERO,Ln.UZERO],a=[Ln.UZERO,Ln.UZERO];s=s.mul(ee).add(dt(n,0));let l=0;const u=(t-1>>6)*64,c=u+(t-1&63)-63;do s=Gt(s.add(r).add(o[0]).add(dt(n,l+8)),37).mul(Rn),r=Gt(r.add(o[1]).add(dt(n,l+48)),42).mul(Rn),s=s.xor(a[1]),r=r.add(o[0]).add(dt(n,l+40)),i=Gt(i.add(a[0]),33).mul(Rn),o=zr(n,l,o[1].mul(Rn),s.add(a[0])),a=zr(n,l+32,i.add(a[1]),r.add(dt(n,l+16))),[i,s]=[s,i],l+=64;while(l!==u);const h=Rn.add(i.and(255).shl(1));return l=c,a[0]=a[0].add(t-1&63),o[0]=o[0].add(a[0]),a[0]=a[0].add(o[0]),s=Gt(s.add(r).add(o[0]).add(dt(n,l+8)),37).mul(h),r=Gt(r.add(o[1]).add(dt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(o[0].mul(9).add(dt(n,l+40))),i=Gt(i.add(a[0]),33).mul(h),o=zr(n,l,o[1].mul(h),s.add(a[0])),a=zr(n,l+32,i.add(a[1]),r.add(dt(n,l+16))),[i,s]=[s,i],hn(hn(o[0],a[0],h).add(mo(r).mul(xc)).add(i),hn(o[1],a[1],h).add(s),h)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VA(n,t){return t==="string"?Ic(n):go([n],t)}function sg(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function go(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ke(n)),Q().getBool("DEBUG")&&te(n,t),sg(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function xe(){return Q().platform.now()}function rg(n,t){return Q().platform.fetch(n,t)}function Ic(n,t="utf-8"){return t=t||"utf-8",Q().platform.encode(n,t)}function Ac(n,t="utf-8"){return t=t||"utf-8",Q().platform.decode(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ig{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new ag)}profileKernel(t,e,s){let r;const i=()=>{r=s()};let o;const a=xe();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{i();for(const u of r)u.dataSync();o=Promise.resolve({kernelMs:xe()-a})}if(Q().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<r.length;u++){const c=r[u];c.data().then(h=>{og(h,c.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:r,inputs:i,extraInfo:o}=t;s.forEach(a=>{Promise.all([a.data(),r,o]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],i,l[2])})})}}function og(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class ag{logKernelProfile(t,e,s,r,i,o){const a=typeof r=="number"?z(`${r}ms`,9):r.error,l=z(t,25),u=e.rank,c=e.size,h=z(e.shape.toString(),14);let f="";for(const d in i){const p=i[d];if(p!=null){const m=p.shape||e.shape,b=m.length;f+=`${d}: ${b}D ${b>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${h}	%c${c}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(n,t,e){const s={},r={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const u=n[l],c=u.inputs;for(const h in c){const f=c[h];let d=!1;for(let p=0;p<t.length;p++)if(s[f.id]){u.outputs.forEach(m=>s[m.id]=!0),d=!0,r[u.id]=!0;break}if(d)break}}const i={};i[e.id]=!0;const o={};for(let l=n.length-1;l>=0;l--){const u=n[l],c=u.inputs;for(let h=0;h<u.outputs.length;h++)if(i[u.outputs[h].id]){for(const f in c)i[c[f].id]=!0,o[u.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const u=n[l];if(r[u.id]&&o[u.id]){const c={};for(const f in u.inputs){const d=u.inputs[f];s[d.id]&&(c[f]=d)}const h=Object.assign({},u);h.inputs=c,h.outputs=u.outputs,a.push(h)}}return a}function ug(n,t,e,s){for(let r=t.length-1;r>=0;r--){const i=t[r],o=[];if(i.outputs.forEach(l=>{const u=n[l.id];u!=null?o.push(u):o.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(o);for(const l in i.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const u=e(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=i.inputs[l];if(!Wt(u.shape,c.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(n[c.id]==null)n[c.id]=u;else{const h=n[c.id];n[c.id]=s(h,u),h.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nc=20,Hs=3,bo=7;function cg(n,t,e,s){const r=no(t),i=hg(n,t,e,r),o=t.length,a=Lr(n,t,e,r,i),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${o}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function hg(n,t,e,s){const r=At(t),i=s[s.length-1],o=new Array(i).fill(0),a=t.length,l=e==="complex64"?Ks(n):n;if(a>1)for(let u=0;u<r/i;u++){const c=u*i;for(let h=0;h<i;h++)o[h]=Math.max(o[h],js(l[c+h],0,e).length)}return o}function js(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(bo))} + ${parseFloat(n[1].toFixed(bo))}j`:Xt(n)?s=`'${n}'`:e==="bool"?s=Tc(n):s=parseFloat(n.toFixed(bo)).toString(),z(s,t)}function Tc(n){return n===0?"false":"true"}function Lr(n,t,e,s,r,i=!0){const o=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Ks(n);return[js(m[0],0,e)]}return e==="bool"?[Tc(n[0])]:[n[0].toString()]}if(l===1){if(a>Nc){const b=Hs*o;let v=Array.from(n.slice(0,b)),E=Array.from(n.slice((a-Hs)*o,a*o));return e==="complex64"&&(v=Ks(v),E=Ks(E)),["["+v.map((x,I)=>js(x,r[I],e)).join(", ")+", ..., "+E.map((x,I)=>js(x,r[a-Hs+I],e)).join(", ")+"]"]}return["["+(e==="complex64"?Ks(n):Array.from(n)).map((b,v)=>js(b,r[v],e)).join(", ")+"]"]}const u=t.slice(1),c=s.slice(1),h=s[0]*o,f=[];if(a>Nc){for(let m=0;m<Hs;m++){const b=m*h,v=b+h;f.push(...Lr(n.slice(b,v),u,e,c,r,!1))}f.push("...");for(let m=a-Hs;m<a;m++){const b=m*h,v=b+h;f.push(...Lr(n.slice(b,v),u,e,c,r,m===a-1))}}else for(let m=0;m<a;m++){const b=m*h,v=b+h;f.push(...Lr(n.slice(b,v),u,e,c,r,m===a-1))}const d=l===2?",":"";f[0]="["+f[0]+d;for(let m=1;m<f.length-1;m++)f[m]=" "+f[m]+d;let p=`,
`;for(let m=2;m<l;m++)p+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(i?"":p),f}function Ks(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fg{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=At(t),s!=null){const r=s.length;g(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Mt(e,this.size),this.strides=no(t)}set(t,...e){e.length===0&&(e=[0]),g(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const r of t){if(r<0||r>=this.shape[e]){const i=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(i)}e++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Me().makeTensor(this.values,this.shape,this.dtype)}}let Me=null,hs=null,Dc=null;function dg(n){Me=n}function pg(n){hs=n}function mg(n){Dc=n}class yt{constructor(t,e,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=At(t),this.strides=no(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return hs.buffer(this.shape,this.dtype,t)}bufferSync(){return hs.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Vs(this.shape,t,this.dtype==="complex64")}arraySync(){return Vs(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Me().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>Ac(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Me().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Me().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Ac(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Me().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Me().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return hs.print(this,t)}clone(){return this.throwIfDisposed(),hs.clone(this)}toString(t=!1){const e=this.dataSync();return cg(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),hs.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Me().makeVariable(this,t,e,s)}}Object.defineProperty(yt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function gg(){return oo("Tensor",()=>yt)}gg();class Rr extends yt{constructor(t,e,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Wt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Me().disposeTensor(this),this.dataId=t.dataId,Me().incRef(this,null)}dispose(){Me().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Rr,Symbol.hasInstance,{value:n=>n instanceof yt&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Cc;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Cc||(Cc={}));var yo;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(yo||(yo={}));var wo;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(wo||(wo={}));var vo;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(vo||(vo={}));var ko;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(ko||(ko={}));const bg={float32:vo,int32:yo,bool:wo,complex64:ko};function $c(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return bg[n][t]}function qA(n){return $c(n,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lt(n,t){if(n.dtype===t.dtype)return[n,t];const e=$c(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function HA(n,t){g(n.dtype===t.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`)}function xo(n,t){return t.some(e=>e.id===n.id)}function fn(n){const t=[];return _c(n,t,new Set),t}function _c(n,t,e){if(n==null)return;if(n instanceof yt){t.push(n);return}if(!yg(n))return;const s=n;for(const r in s){const i=s[r];e.has(i)||(e.add(i),_c(i,t,e))}}function yg(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function So(n){return n.kernelName!=null}class Fc{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class fs{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Fc}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(us(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ig(this.backendInstance),!0}setupRegisteredKernels(){fo(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){fo(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof on)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,i=s.then(o=>r<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,us(`Initialization of backend ${t} failed`),us(o.stack||o.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return us(`Initialization of backend ${t} failed`),us(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:r,asyncInit:i}=this.initializeBackend(s);if(i||r)return{name:s,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),r=s.backend,i=this.readSync(e),o=r.refCount(e);r.disposeData(e,!0),s.backend=t,t.move(e,i,s.shape,s.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,s){t();try{const r=s();return e(),r}catch(r){throw e(),r}}nextTensorId(){return fs.nextTensorId++}nextVariableId(){return fs.nextVariableId++}clone(t){const e=A.runKernel(uo,{x:t}),s={x:t},r=o=>({x:()=>{const a="float32",l={x:o},u={dtype:a};return A.runKernel(lo,l,u)}}),i=[];return this.addTapeNode(this.state.activeScope.name,s,[e],r,i,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(ho(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const r=this.backend.numDataIds();let i=0;s.forEach(l=>{i+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-i-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const r=this.isTapeOn(),i=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const u=So(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(So(t)){const{kernelName:p,inputs:m,attrs:b}=t;this.backendName==null&&this.backend;const v=ho(p,this.backendName);g(v!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const E=this.backend.numDataIds();l=v.kernelFunc({inputs:m,attrs:b,backend:this.backend});const x=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,E,x);const I=x.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(r){const C=this.getTensorsForGradient(p,m,I);s=this.saveTensorsForBackwardMode(C)}return I}}else{const{forwardFunc:p}=t,m=b=>{r&&(s=b.map(v=>this.keep(this.clone(v))))};a=()=>{const b=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,m));const v=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,b,v),v}}const{inputs:c,attrs:h}=t,f=So(t)?null:t.backwardsFunc;let d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(d=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),e=d.outputs)}),r&&this.addTapeNode(u,c,e,f,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(p=>c[p]!=null?c[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const r=vc(t);if(r!=null){const i=r.inputsToSave||[],o=r.outputsToSave||[];let a;r.saveAllInputs?(g(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(u=>e[u])):a=i.map(u=>e[u]);const l=s.filter((u,c)=>o[c]);return a.concat(l)}return[]}makeTensor(t,e,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let i=t;s==="string"&&Xt(t[0])&&(i=t.map(l=>Ic(l)));const o=r.write(i,e,s),a=new yt(e,s,o,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(o),u=zt(i);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,e,s,r){s=s||"float32";const i={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:r,dtype:i}=t,o=new yt(r,i,s,this.nextTensorId());return this.trackTensor(o,e),o}makeVariable(t,e=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const i=new Rr(t,e,s,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*le(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Rr||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*le(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,r,i,o){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:i},l=vc(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=u=>(u=u.map((c,h)=>{if(c==null){const f=s[h],d=so(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return c}),r(u.length>1?u:u[0],i,o))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=fn(t),s=new Set(e.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const o=this.state.activeScope.track[i];!o.kept&&!s.has(o.id)&&o.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(i=>{!i.kept&&i.scopeId===r.id&&this.track(i)})}gradients(t,e,s,r=!1){if(g(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));g(i instanceof yt,()=>"The result y returned by f() must be a tensor.");const o=lg(this.state.activeTape,e,i);if(!r&&o.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[i.id]=s??wg(i.shape),ug(a,o,u=>this.tidy(u),vg);const l=e.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:i,grads:l}})}customGrad(t){return g(eo(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{g(e.every(a=>a instanceof yt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};e.forEach((a,l)=>{r[l]=a});const i=(a,l)=>(s=t(...e,l),g(s.value instanceof yt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),g(eo(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),o=(a,l)=>{const u=s.gradFunc(a,l),c=Array.isArray(u)?u:[u];g(c.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),g(c.every(f=>f instanceof yt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return c.forEach((f,d)=>{h[d]=()=>f}),h};return this.runKernelFunc({forwardFunc:i,backwardsFunc:o,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=xe(),s=await this.backend.time(t);return s.wallMs=xe()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Fc;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}fs.nextTensorId=0,fs.nextVariableId=0;function wg(n){const t=jl(At(n),"float32");return A.makeTensor(t,n,"float32")}function Mc(){const n=Xl();if(n._tfengine==null){const t=new Ep(n);n._tfengine=new fs(t)}return Tp(n._tfengine.ENV),dg(()=>n._tfengine),n._tfengine}const A=Mc();function vg(n,t){const e={a:n,b:t};return A.runKernel(ao,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(){return typeof navigator<"u"&&navigator!=null}let Eo;function jA(n){Eo=n}function KA(n){if(Eo!==void 0)return Eo;if(n||kg()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function xg(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Io=J(39907);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const me=Q();me.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),me.registerFlag("IS_BROWSER",()=>xg()),me.registerFlag("IS_NODE",()=>typeof Io<"u"&&typeof Io.versions<"u"&&typeof Io.versions.node<"u"),me.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),me.registerFlag("PROD",()=>!1),me.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>me.getBool("DEBUG")),me.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),me.registerFlag("IS_TEST",()=>!1),me.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),me.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),me.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),me.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),me.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ds(n,t){let e=n;if(lt(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||lt(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&Q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&zc(n,s,[]),s}function zc(n,t,e){if(e=e||[],!Array.isArray(n)&&!lt(n)){g(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}g(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),g(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let r=0;r<n.length;++r)zc(n[r],s,e.concat(r))}function Lc(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function y(n,t,e,s="numeric"){if(n instanceof yt)return Lc(s,n.dtype,t,e),n;let r=to(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Lc(s,r,t,e),n==null||!lt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const i=ds(n,r);!lt(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?go(n,r):ke(n,[],!0);return A.makeTensor(a,i,r)}function Rc(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((i,o)=>y(i,`${t}[${o}]`,e,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sg="__op";function N(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+Sg;const r=(...i)=>{A.startScope(e);try{const o=s(...i);return ro(o)&&console.error("Cannot return a Promise inside of tidy."),A.endScope(o),o}catch(o){throw A.endScope(null),o}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(n,t){const e=y(n,"real","complex"),s=y(t,"imag","complex");be(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:e,imag:s};return A.runKernel(Hp,r)}const On=N({complex_:Eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ps(n,t,e,s){if(s==null&&(s=to(n)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!lt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Kl(t);const r=At(t),i=At(e);g(r===i,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${i}`);for(let o=0;o<e.length;++o){const a=e[o],l=o===e.length-1?a!==At(t.slice(o)):!0;g(e[o]===t[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!lt(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?go(n,s):ke(n,[],!0),A.makeTensor(n,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bn(n,t,e){const s=ds(n,e);return ps(n,t,s,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ao={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var Or=J(1048).Buffer;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Br=4;async function Oc(n,t){const e=[],s=[],r=Array.isArray(n)?n.map(o=>o.name):Object.keys(n);for(let o=0;o<r.length;++o){const a=r[o],l=Array.isArray(n)?n[o].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const c=new Promise(async h=>{const f=await l.bytes(),d=f.reduce((b,v)=>b+v.length,0)+Br*f.length,p=new Uint8Array(d);let m=0;for(let b=0;b<f.length;b++){const v=f[b],E=new Uint8Array(new Uint32Array([v.length]).buffer);p.set(E,m),m+=Br,p.set(v,m),m+=v.length}h(p)});s.push(c)}else s.push(l.data());t!=null&&(u.group=t),e.push(u)}const i=await Promise.all(s);return{data:Ig(i),specs:e}}function Bc(n,t){const e={};let s,r=0;for(const i of t){const o=i.name,a=i.dtype,l=i.shape,u=At(l);let c;if("quantization"in i){const h=i.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${i.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${i.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${i.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const f=Ao[h.dtype],d=n.slice(r,r+u*f),p=h.dtype==="uint8"?new Uint8Array(d):new Uint16Array(d);if(a==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){c=new Float32Array(p.length);for(let m=0;m<p.length;m++){const b=p[m];c[m]=b*h.scale+h.min}}else if(h.dtype==="float16")s===void 0&&(s=Fg()),c=s(p);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(a==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);c=new Int32Array(p.length);for(let m=0;m<p.length;m++){const b=p[m];c[m]=Math.round(b*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);r+=u*f}else if(a==="string"){const h=At(i.shape);c=[];for(let f=0;f<h;f++){const d=new Uint32Array(n.slice(r,r+Br))[0];r+=Br;const p=new Uint8Array(n.slice(r,r+d));c.push(p),r+=d}}else{const h=Ao[a],f=n.slice(r,r+u*h);if(a==="float32")c=new Float32Array(f);else if(a==="int32")c=new Int32Array(f);else if(a==="bool")c=new Uint8Array(f);else if(a==="complex64"){c=new Float32Array(f);const d=new Float32Array(c.length/2),p=new Float32Array(c.length/2);for(let v=0;v<d.length;v++)d[v]=c[v*2],p[v]=c[v*2+1];const m=Bn(d,l,"float32"),b=Bn(p,l,"float32");e[o]=On(m,b),m.dispose(),b.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);r+=u*h}a!=="complex64"&&(e[o]=Bn(c,l,a))}return e}function Ig(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(i=>{if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const s=new Uint8Array(t);let r=0;return e.forEach(i=>{s.set(new Uint8Array(i.buffer),r),r+=i.byteLength}),s.buffer}const No=typeof Or<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Pc(n){return No?Or.byteLength(n):new Blob([n]).size}function Ag(n){if(No)return Or.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,r=t.length;s<r;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function Ng(n){if(No){const s=Or.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function To(n){if(n.length===1)return n[0];let t=0;n.forEach(r=>{t+=r.byteLength});const e=new Uint8Array(t);let s=0;return n.forEach(r=>{e.set(new Uint8Array(r),s),s+=r.byteLength}),e.buffer}function Uc(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);const e=n.split("/");return e[e.length-1]}function Wc(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function Tg(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),s}async function Gc(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),Tg(n,e,s)}function Pr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Pc(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Pc(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function Dg(n){const t=[];for(const e of n)t.push(...e.weights);return t}function Cg(){const n=e=>{let s=e<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function $g(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function _g(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function Fg(){const n=Cg(),t=$g(),e=_g();return s=>{const r=new ArrayBuffer(4*s.length),i=new Uint32Array(r);for(let o=0;o<s.length;o++){const a=s[o],l=n[e[a>>10]+(a&1023)]+t[a>>10];i[o]=l}return new Float32Array(r)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tt{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Tt.instance==null&&(Tt.instance=new Tt),Tt.instance}static registerSaveRouter(t){Tt.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Tt.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Tt.getHandlers(t,"save")}static getLoadHandlers(t,e){return Tt.getHandlers(t,"load",e)}static getHandlers(t,e,s){const r=[];return(e==="load"?Tt.getInstance().loadRouters:Tt.getInstance().saveRouters).forEach(o=>{const a=o(t,s);a!==null&&r.push(a)}),r}}const JA=n=>Tt.registerSaveRouter(n),ZA=n=>Tt.registerLoadRouter(n),Mg=n=>Tt.getSaveHandlers(n),zg=(n,t)=>Tt.getLoadHandlers(n,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ur="tensorflowjs",Do=1,Pn="models_store",dn="model_info_store";async function YA(){const n=Co();return new Promise((t,e)=>{const s=n.deleteDatabase(Ur);s.onsuccess=()=>t(),s.onerror=r=>e(r)})}function Co(){if(!Q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function $o(n){const t=n.result;t.createObjectStore(Pn,{keyPath:"modelPath"}),t.createObjectStore(dn,{keyPath:"modelPath"})}class Un{constructor(t){if(this.indexedDB=Co(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,r)=>{const i=this.indexedDB.open(Ur,Do);i.onupgradeneeded=()=>$o(i),i.onsuccess=()=>{const o=i.result;if(e==null){const a=o.transaction(Pn,"readonly"),u=a.objectStore(Pn).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(u.result.modelArtifacts)},u.onerror=c=>(o.close(),r(u.error)),a.oncomplete=()=>o.close()}else{const a=Pr(e),l=o.transaction(dn,"readwrite");let u=l.objectStore(dn);const c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a});let h;c.onsuccess=()=>{h=o.transaction(Pn,"readwrite");const d=h.objectStore(Pn).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a});d.onsuccess=()=>s({modelArtifactsInfo:a}),d.onerror=p=>{u=l.objectStore(dn);const m=u.delete(this.modelPath);m.onsuccess=()=>(o.close(),r(d.error)),m.onerror=b=>(o.close(),r(d.error))}},c.onerror=f=>(o.close(),r(c.error)),l.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},i.onerror=o=>r(i.error)})}}Un.URL_SCHEME="indexeddb://";const Vc=n=>Q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Un.URL_SCHEME)?Lg(n.slice(Un.URL_SCHEME.length)):null;Tt.registerSaveRouter(Vc),Tt.registerLoadRouter(Vc);function Lg(n){return new Un(n)}function Rg(n){return n.startsWith(Un.URL_SCHEME)?n.slice(Un.URL_SCHEME.length):n}class Og{constructor(){this.indexedDB=Co()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(Ur,Do);s.onupgradeneeded=()=>$o(s),s.onsuccess=()=>{const r=s.result,i=r.transaction(dn,"readonly"),a=i.objectStore(dn).getAll();a.onsuccess=()=>{const l={};for(const u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),i.oncomplete=()=>r.close()},s.onerror=r=>e(s.error)})}async removeModel(t){return t=Rg(t),new Promise((e,s)=>{const r=this.indexedDB.open(Ur,Do);r.onupgradeneeded=()=>$o(r),r.onsuccess=()=>{const i=r.result,o=i.transaction(dn,"readwrite"),a=o.objectStore(dn),l=a.get(t);let u;l.onsuccess=()=>{if(l.result==null)return i.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const c=a.delete(t),h=()=>{u=i.transaction(Pn,"readwrite");const d=u.objectStore(Pn).delete(t);d.onsuccess=()=>e(l.result.modelArtifactsInfo),d.onerror=p=>s(l.error)};c.onsuccess=h,c.onerror=f=>(h(),i.close(),s(l.error))}},l.onerror=c=>(i.close(),s(l.error)),o.oncomplete=()=>{u==null?i.close():u.oncomplete=()=>i.close()}},r.onerror=i=>s(r.error)})}}var Bg;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const je="/",Wn="tensorflowjs_models",qc="info",Pg="model_topology",Ug="weight_specs",Wg="weight_data",Gg="model_metadata";function XA(){if(!Bg().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");const n=window.localStorage,t=[];for(let e=0;e<n.length;++e){const s=n.key(e),r=Wn+je;if(s.startsWith(r)&&s.length>r.length){n.removeItem(s);const i=Kc(s);t.indexOf(i)===-1&&t.push(i)}}return t}function Hc(n){return{info:[Wn,n,qc].join(je),topology:[Wn,n,Pg].join(je),weightSpecs:[Wn,n,Ug].join(je),weightData:[Wn,n,Wg].join(je),modelMetadata:[Wn,n,Gg].join(je)}}function jc(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function Kc(n){const t=n.split(je);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(je)}function Vg(n){return n.startsWith(Gn.URL_SCHEME)?n.slice(Gn.URL_SCHEME.length):n}class Gn{constructor(t){if(!Q().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Hc(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=Pr(t);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Ag(t.weightData));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw jc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const a=JSON.parse(i);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=Ng(o),e}}Gn.URL_SCHEME="localstorage://";const Jc=n=>Q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Gn.URL_SCHEME)?qg(n.slice(Gn.URL_SCHEME.length)):null;Tt.registerSaveRouter(Jc),Tt.registerLoadRouter(Jc);function qg(n){return new Gn(n)}class Hg{constructor(){g(Q().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),g(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Wn+je,s=je+qc;for(let r=0;r<this.LS.length;++r){const i=this.LS.key(r);if(i.startsWith(e)&&i.endsWith(s)){const o=Kc(i);t[o]=JSON.parse(this.LS.getItem(i))}}return t}async removeModel(t){t=Vg(t);const e=Hc(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return jc(e),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ms="://";class ne{constructor(){this.managers={}}static getInstance(){return ne.instance==null&&(ne.instance=new ne),ne.instance}static registerManager(t,e){g(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ms)&&(t=t.slice(0,t.indexOf(ms))),g(t.length>0,()=>"scheme must not be an empty string.");const s=ne.getInstance();g(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=ne.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(ne.getInstance().managers)}}function Wr(n){if(n.indexOf(ms)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ne.getSchemes().join(",")}`);return{scheme:n.split(ms)[0],path:n.split(ms)[1]}}async function Zc(n,t,e=!1){g(n!==t,()=>`Old path and new path are the same: '${n}'`);const s=Tt.getLoadHandlers(n);g(s.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),g(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${n}.`);const r=s[0],i=Tt.getSaveHandlers(t);g(i.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),g(i.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const o=i[0],a=Wr(n).scheme,l=Wr(n).path,u=a===Wr(n).scheme,c=await r.load();e&&u&&await ne.getManager(a).removeModel(l);const h=await o.save(c);return e&&!u&&await ne.getManager(a).removeModel(l),h.modelArtifactsInfo}async function jg(){const n=ne.getSchemes(),t={};for(const e of n){const s=await ne.getManager(e).listModels();for(const r in s){const i=e+ms+r;t[i]=s[r]}}return t}async function Kg(n){const t=Wr(n);return ne.getManager(t.scheme).removeModel(t.path)}async function QA(n,t){return Zc(n,t,!1)}async function tN(n,t){return Zc(n,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jg{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(!window||!Q().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(Q().get("IS_BROWSER")){Q().setPlatform("browser",new Jg);try{ne.registerManager(Gn.URL_SCHEME,new Hg)}catch{}try{ne.registerManager(Un.URL_SCHEME,new Og)}catch{}}var Zg=J(39907);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yg={importFetch:()=>J(78330)};let gs;function eN(){gs=null}function nN(n){gs=n}function sN(){return gs}class Xg{constructor(){this.util=J(38277),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return Q().global.fetch!=null?Q().global.fetch(t,e):(gs==null&&(gs=Yg.importFetch()),gs(t,e))}now(){const t=Zg.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}Q().get("IS_NODE")&&!Q().get("IS_BROWSER")&&Q().setPlatform("node",new Xg);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Js(n,t="float32",e){return t=t||"float32",Kl(n),new fg(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(n,t){const e=y(n,"x","cast");if(!pe(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},r={dtype:t};return A.runKernel(lo,s,r)}const P=N({cast_:Qg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tb(n){const e={x:y(n,"x","clone","string_or_numeric")};return A.runKernel(uo,e)}const Vn=N({clone_:tb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Mc(),pg({buffer:Js,cast:P,clone:Vn,print:eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nb="model",sb=".json",rb=".weights.bin";function Yc(n){return new Promise(t=>setTimeout(t)).then(n)}class qn{constructor(t){if(!Q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(qn.URL_SCHEME)&&(t=t.slice(qn.URL_SCHEME.length)),(t==null||t.length===0)&&(t=nb),this.modelJsonFileName=t+sb,this.weightDataFileName=t+rb}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=Wc(t,s),i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=i,await Yc(()=>o.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=e,await Yc(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Pr(t)}}}}qn.URL_SCHEME="downloads://";class ib{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{const s=new FileReader;s.onload=r=>{const i=JSON.parse(r.target.result),o=i.modelTopology;if(o==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(i.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const l=Gc(i,u=>this.loadWeights(u));t(l)},s.onerror=r=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const e=[],s=[];for(const o of t)e.push(...o.weights),s.push(...o.paths);const r=this.checkManifestAndWeightFiles(t),i=s.map(o=>this.loadWeightsFile(o,r[o]));return Promise.all(i).then(o=>[e,To(o)])}loadWeightsFile(t,e){return new Promise((s,r)=>{const i=new FileReader;i.onload=o=>{const a=o.target.result;s(a)},i.onerror=o=>r(`Failed to weights data from file of path '${t}'.`),i.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){const e=[],s=this.weightsFiles.map(i=>Uc(i.name)),r={};for(const i of t)i.paths.forEach(o=>{const a=Uc(o);if(e.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(e.push(a),s.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);r[o]=this.weightsFiles[s.indexOf(a)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const ob=n=>Q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(qn.URL_SCHEME)?ab(n.slice(qn.URL_SCHEME.length)):null;Tt.registerSaveRouter(ob);function ab(n="model"){return new qn(n)}function iN(n){return new ib(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xc(n,t,e,s){o(n),e=e??0,s=s??1,a(e,s);let r=0;const i=l=>(l.then(u=>{const c=e+ ++r/n.length*(s-e);return t(c),u}),l);function o(l){g(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){g(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),g(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),g(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(n.map(i))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Qc(n,t){t==null&&(t={});const e=t.fetchFunc==null?Q().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(s):await Xc(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await Xc(a,t.onProgress,.5,1)}async function oN(n,t="",e,s){return lb(o=>Qc(o,{requestInit:s}))(n,t,e)}function lb(n){return async(t,e="",s)=>{const r=t.map(()=>!1),i={},o=s!=null?s.map(()=>!1):[],a=[];if(t.forEach((d,p)=>{let m=0;d.weights.forEach(b=>{const v="quantization"in b?b.quantization.dtype:b.dtype,E=Ao[v]*At(b.shape),x=()=>{r[p]=!0,i[p]==null&&(i[p]=[]),i[p].push({manifestEntry:b,groupOffset:m,sizeBytes:E})};s!=null?s.forEach((I,C)=>{I===b.name&&(x(),o[C]=!0)}):x(),a.push(b.name),m+=E})}),!o.every(d=>d)){const d=s.filter((p,m)=>!o[m]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const l=r.reduce((d,p,m)=>(p&&d.push(m),d),[]),u=[];l.forEach(d=>{t[d].paths.forEach(p=>{const m=e+(e.endsWith("/")?"":"/")+p;u.push(m)})});const c=await n(u),h={};let f=0;return l.forEach(d=>{const p=t[d].paths.length;let m=0;for(let I=0;I<p;I++)m+=c[f+I].byteLength;const b=new ArrayBuffer(m),v=new Uint8Array(b);let E=0;for(let I=0;I<p;I++){const C=new Uint8Array(c[f+I]);v.set(C,E),E+=C.byteLength}i[d].forEach(I=>{const C=b.slice(I.groupOffset,I.groupOffset+I.sizeBytes),$=Bc(C,[I.manifestEntry]);for(const L in $)h[L]=$[L]}),f+=p}),h}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ub="application/octet-stream",cb="application/json";class _o{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(g(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=Q().platform.fetch,g(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&g(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=Wc(t,s);e.body.append("model.json",new Blob([JSON.stringify(r)],{type:cb}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:ub}),"model.weights.bin");const i=await this.fetch(this.path,e);if(i.ok)return{modelArtifactsInfo:Pr(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const s=e.modelTopology,r=e.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Gc(e,i=>this.loadWeights(i))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=hb(e),i=this.weightPathPrefix||s,o=Dg(t),a=[],l=[];for(const c of t)for(const h of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(h)):a.push(i+h+r);this.weightUrlConverter&&a.push(...await Promise.all(l));const u=await Qc(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,To(u)]}}_o.URL_SCHEME_REGEX=/^https?:\/\//;function hb(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),r=e>t?n.substring(e):"";return[s+"/",r]}function th(n){return n.match(_o.URL_SCHEME_REGEX)!=null}const eh=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>th(s)):e=th(n),e)return nh(n,t)}return null};Tt.registerSaveRouter(eh),Tt.registerLoadRouter(eh);function nh(n,t){return new _o(n,t)}function fb(n,t){return nh(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fo{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class sh{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class db{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function pb(n,t,e,s){const r=arguments;return new db(mb(...r))}function mb(n,t,e,s){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new Fo(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fo({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fo({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:s}))}function aN(n){return new sh(n)}function lN(n){return new sh(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gr(n,t,e){if(Zt(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=ds(n,e);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ps(n,t,s,e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Hn;function rh(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,s=!1,r=!1,i=!1,o=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else if(n.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(ho(mc,A.backendName)!=null){const p={pixels:n},m={numChannels:t};return A.runKernel(mc,p,m)}const[u,c]=r?[n.videoWidth,n.videoHeight]:[n.width,n.height];let h;if(o)h=n.getContext("2d").getImageData(0,0,u,c).data;else if(s||e)h=n.data;else if(i||r||a){if(Hn==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Hn=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Hn=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Hn.canvas.width=u,Hn.canvas.height=c,Hn.drawImage(n,0,0,u,c),h=Hn.getImageData(0,0,u,c).data}let f;if(t===4)f=new Int32Array(h);else{const p=u*c;f=new Int32Array(p*t);for(let m=0;m<p;m++)for(let b=0;b<t;++b)f[m*t+b]=h[m*4+b]}return Gr(f,[c,u,t],"int32")}function gb(n){return n!=null&&n.data instanceof Uint8Array}function bb(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function yb(n){return n!=null&&n.width!==0&&n.height!==0}function wb(n){return bb()&&!(n instanceof ImageBitmap)&&yb(n)&&!gb(n)}async function uN(n,t=3){let e=null;if(Q().getBool("WRAP_TO_IMAGEBITMAP")&&wb(n)){let s;try{s=await createImageBitmap(n,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===n.width&&s.height===n.height?e=s:e=n}else e=n;return rh(e,t)}async function cN(n,t){let e=y(n,"img","toPixels");if(!(n instanceof yt)){const u=e;e=P(u,"int32"),u.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[s,r]=e.shape.slice(0,2),i=e.rank===2?1:e.shape[2];if(i>4||i===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${i}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const o=await e.data(),a=e.dtype==="float32"?255:1,l=new Uint8ClampedArray(r*s*4);for(let u=0;u<s*r;++u){const c=[0,0,0,255];for(let f=0;f<i;f++){const d=o[u*i+f];if(e.dtype==="float32"){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if(e.dtype==="int32"&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);i===1?(c[0]=d*a,c[1]=d*a,c[2]=d*a):c[f]=d*a}const h=u*4;l[h+0]=Math.round(c[0]),l[h+1]=Math.round(c[1]),l[h+2]=Math.round(c[2]),l[h+3]=Math.round(c[3])}if(t!=null){t.width=r,t.height=s;const u=t.getContext("2d"),c=new ImageData(l,r,s);u.putImageData(c,0,0)}return e!==n&&e.dispose(),l}const vb=N({fromPixels_:rh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bs{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class Se{constructor(){this.classNameMap={}}static getMap(){return Se.instance==null&&(Se.instance=new Se),Se.instance}static register(t){Se.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function _(n){g(n.className!=null,()=>"Class being registered does not have the static className property defined."),g(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),g(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Se.register(n)}var ze,Vr;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(){Vr().set("PROD",!0)}function fN(){Vr().set("DEBUG",!0)}function dN(){Vr().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function kb(n){Q().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}mg(kb);function pN(){ze.disposeVariables()}function mN(){return ze}function Mo(){return A.memory()}function gN(n){return ze.profile(n)}function T(n,t){return A.tidy(n,t)}function j(n){fn(n).forEach(e=>e.dispose())}function Ke(n){return A.keep(n)}function bN(n){return ze.time(n)}function yN(n){return ze.setBackend(n)}function wN(){return ze.ready()}function vN(){return ze.backendName}function kN(n){ze.removeBackend(n)}function xN(n){return ze.findBackend(n)}function SN(n){return ze.findBackendFactory(n)}function EN(n,t,e=1){return ze.registerBackend(n,t,e)}function zo(){return A.backend}function IN(n,t){Vr().setPlatform(n,t)}var ys,qr,Lo,xb,se;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AN(n){return se.assert(se.isFunction(n),()=>"The f passed in grad(f) must be a function"),(t,e)=>{const s=Lo(t,"x","tf.grad","string_or_numeric"),r=e!=null?Lo(e,"dy","tf.grad"):null;return ys.tidy(()=>{const{value:i,grads:o}=ys.gradients(()=>n(s),[s],r);return r!=null&&se.assertShapesMatch(i.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Hr(o),o[0]})}}function NN(n){return se.assert(se.isFunction(n),()=>"The f passed in grads(f) must be a function"),(t,e)=>{se.assert(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=xb(t,"args","tf.grads","string_or_numeric"),r=e!=null?Lo(e,"dy","tf.grads"):null;return ys.tidy(()=>{const{value:i,grads:o}=ys.gradients(()=>n(...s),s,r);return r!=null&&se.assertShapesMatch(i.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Hr(o),o})}}function TN(n){return se.assert(se.isFunction(n),()=>"The f passed in valueAndGrad(f) must be a function"),(t,e)=>{se.assert(t instanceof qr,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),se.assert(e==null||e instanceof qr,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=ys.gradients(()=>n(t),[t],e);return Hr(s),{grad:s[0],value:r}}}function DN(n){return se.assert(se.isFunction(n),()=>"The f passed in valueAndGrads(f) must be a function"),(t,e)=>{se.assert(Array.isArray(t)&&t.every(r=>r instanceof qr),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),se.assert(e==null||e instanceof qr,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=ys.gradients(()=>n(...t),t,e);return e!=null&&se.assertShapesMatch(s.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Hr(s.grads),s}}function Sb(n,t){g(eo(n),()=>"The f passed in variableGrads(f) must be a function"),g(t==null||Array.isArray(t)&&t.every(u=>u instanceof Rr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const u in A.registeredVariables)t.push(A.registeredVariables[u])}const s=e?t.filter(u=>!u.trainable):null,r=t.length;t=t.filter(u=>u.trainable),g(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const i=!0,{value:o,grads:a}=A.gradients(n,t,null,i);g(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),g(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return t.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),s?.forEach(u=>l[u.name]=null),{value:o,grads:l}}function pn(n){return A.customGrad(n)}function Hr(n){if(n.filter(e=>e==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K(n,t){if((lt(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&lt(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ps(n,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mn extends bs{minimize(t,e=!1,s){const{value:r,grads:i}=this.computeGradients(t,s);if(s!=null){const o=s.map(a=>({name:a.name,tensor:i[a.name]}));this.applyGradients(o)}else this.applyGradients(i);return j(i),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return Sb(t,e)}dispose(){this.iterations_!=null&&j(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:K(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(mn,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(n){const t=y(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return A.runKernel(ou,e)}else{const e={x:t};return A.runKernel(Ql,e)}}const Jt=N({abs_:Eb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(n,t){let e=y(n,"a","add"),s=y(t,"b","add");[e,s]=Lt(e,s);const r={a:e,b:s};return A.runKernel(ao,r)}const M=N({add_:Ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(n,t=null,e=!1){const r={x:y(n,"x","all","bool")},i={axis:t,keepDims:e};return A.runKernel(Fp,r,i)}const Nb=N({all_:Ab});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(n,t=null,e=!1){const r={x:y(n,"x","any","bool")},i={axis:t,keepDims:e};return A.runKernel(Mp,r,i)}const ih=N({any_:Tb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(n,t=0){const s={x:y(n,"x","argMax")},r={axis:t};return A.runKernel(tu,s,r)}const ws=N({argMax_:Db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(n,t,e,s,r="NHWC",i){const o=n[3],a=[...t,o],l=zb(r);return jr(n,a,e,i,s,null,null,l)}function $N(n,t,e,s,r,i,o="channelsLast"){const[a,l]=Kr(t);let u;if(o==="channelsLast")u=[a,l,n[3],n[3]];else if(o==="channelsFirst")u=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return jr(n,u,e,s,r,i,!1,o)}function _N(n,t,e,s,r,i,o="NDHWC"){const[a,l,u]=Ro(t);let c,h;if(o==="NDHWC")h="channelsLast",c=[a,l,u,n[4],n[4]];else if(o==="NCDHW")h="channelsFirst",c=[a,l,u,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return Cb(n,c,e,s,r,!1,h,i)}function jr(n,t,e,s,r,i,o=!1,a="channelsLast"){let[l,u,c,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,h]=n;else if(a==="channelsFirst")[l,h,u,c]=n;else throw new Error(`Unknown dataFormat ${a}`);const[f,d,,p]=t,[m,b]=Kr(e),[v,E]=Kr(s),x=vs(f,v),I=vs(d,E),{padInfo:C,outHeight:$,outWidth:L}=Fb(r,u,c,m,b,x,I,i,a),R=o?p*h:p;let F;return a==="channelsFirst"?F=[l,R,$,L]:a==="channelsLast"&&(F=[l,$,L,R]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:h,outHeight:$,outWidth:L,outChannels:R,padInfo:C,strideHeight:m,strideWidth:b,filterHeight:f,filterWidth:d,effectiveFilterHeight:x,effectiveFilterWidth:I,dilationHeight:v,dilationWidth:E,inShape:n,outShape:F,filterShape:t}}function Cb(n,t,e,s,r,i=!1,o="channelsLast",a){let[l,u,c,h,f]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[l,u,c,h,f]=n;else if(o==="channelsFirst")[l,f,u,c,h]=n;else throw new Error(`Unknown dataFormat ${o}`);const[d,p,m,,b]=t,[v,E,x]=Ro(e),[I,C,$]=Ro(s),L=vs(d,I),R=vs(p,C),F=vs(m,$),{padInfo:B,outDepth:V,outHeight:H,outWidth:tt}=Mb(r,u,c,h,v,E,x,L,R,F,a),at=i?b*f:b;let rt;return o==="channelsFirst"?rt=[l,at,V,H,tt]:o==="channelsLast"&&(rt=[l,V,H,tt,at]),{batchSize:l,dataFormat:o,inDepth:u,inHeight:c,inWidth:h,inChannels:f,outDepth:V,outHeight:H,outWidth:tt,outChannels:at,padInfo:B,strideDepth:v,strideHeight:E,strideWidth:x,filterDepth:d,filterHeight:p,filterWidth:m,effectiveFilterDepth:L,effectiveFilterHeight:R,effectiveFilterWidth:F,dilationDepth:I,dilationHeight:C,dilationWidth:$,inShape:n,outShape:rt,filterShape:t}}function $b(n,t,e,s,r){s==null&&(s=oh(n,t,e));const i=n[0],o=n[1],a=jn((i-t+2*s)/e+1,r),l=jn((o-t+2*s)/e+1,r);return[a,l]}function _b(n,t,e,s,r,i){r==null&&(r=oh(n,t,s));const o=n[0],a=n[1],l=n[2],u=jn((o-t+2*r)/s+1,i),c=jn((a-t+2*r)/s+1,i),h=jn((l-t+2*r)/s+1,i);return[u,c,h,e]}function oh(n,t,e,s=1){const r=vs(t,s);return Math.floor((n[0]*(e-1)-e+r)/2)}function Kr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Ro(n){return typeof n=="number"?[n,n,n]:n}function vs(n,t){return t<=1?n:n+(n-1)*(t-1)}function Fb(n,t,e,s,r,i,o,a,l){let u,c,h;if(typeof n=="number"){u={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const d=$b([t,e],i,s,n,a);c=d[0],h=d[1]}else if(n==="same"){c=Math.ceil(t/s),h=Math.ceil(e/r);const f=Math.max(0,(c-1)*s+i-t),d=Math.max(0,(h-1)*r+o-e),p=Math.floor(f/2),m=f-p,b=Math.floor(d/2),v=d-b;u={top:p,bottom:m,left:b,right:v,type:"SAME"}}else if(n==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-i+1)/s),h=Math.ceil((e-o+1)/r);else if(typeof n=="object"){const f=l==="channelsLast"?n[1][0]:n[2][0],d=l==="channelsLast"?n[1][1]:n[2][1],p=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];u={top:f,bottom:d,left:p,right:m,type:f===0&&d===0&&p===0&&m===0?"VALID":"EXPLICIT"},c=jn((t-i+f+d)/s+1,a),h=jn((e-o+p+m)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:u,outHeight:c,outWidth:h}}function Mb(n,t,e,s,r,i,o,a,l,u,c){let h,f,d,p;if(typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const b=_b([t,e,s,1],a,1,r,n,c);f=b[0],d=b[1],p=b[2]}else if(n==="same"){f=Math.ceil(t/r),d=Math.ceil(e/i),p=Math.ceil(s/o);const m=(f-1)*r+a-t,b=(d-1)*i+l-e,v=(p-1)*o+u-s,E=Math.floor(m/2),x=m-E,I=Math.floor(b/2),C=b-I,$=Math.floor(v/2),L=v-$;h={top:I,bottom:C,left:$,right:L,front:E,back:x,type:"SAME"}}else if(n==="valid")h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((t-a+1)/r),d=Math.ceil((e-l+1)/i),p=Math.ceil((s-u+1)/o);else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:f,outHeight:d,outWidth:p}}function jn(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Kn(n){const[t,e,s]=Kr(n);return t===1&&e===1&&s===1}function gn(n,t){return Kn(n)||Kn(t)}function zb(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function ue(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")g(zn(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{g(zn(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lb(n,t){const s={x:y(n,"x","reshape","string_or_numeric")},r={shape:t};return A.runKernel(Gu,s,r)}const D=N({reshape_:Lb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(n,t,e,s,r){const i=y(n,"x","avgPool","float32"),o=1;g(gn(e,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);let a=i,l=!1;i.rank===3&&(l=!0,a=D(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),ue("avgPool",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r};let h=A.runKernel(eu,u,c);return h=P(h,i.dtype),l?D(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Ob=N({avgPool_:Rb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(n,t,e,s,r,i="NDHWC"){const o=y(n,"x","avgPool3d","float32");let a=o,l=!1;o.rank===4&&(l=!0,a=D(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),g(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),ue("avgPool3d",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:i};let h=A.runKernel(nu,u,c);return h=P(h,a.dtype),l?D(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Pb=N({avgPool3d_:Bb});function Ub(n){let t;return n.rank===0||n.rank===1?t=D(n,[1,1,1,n.size]):n.rank===2?t=D(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(n,t,e,s,r,i){i==null&&(i=.001);const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;s!=null&&(c=y(s,"offset","batchNorm")),g(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:Ub(o),scale:u,offset:c,mean:a,variance:l},d={varianceEpsilon:i},p=A.runKernel(ku,f,d);return D(p,o.shape)}const Oo=N({batchNorm_:Wb});function Gb(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),g(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),g(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),Oo(o,a,l,c,u,i)}const Vb=N({batchNorm2d_:Gb});function qb(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),g(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),g(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),Oo(o,a,l,c,u,i)}const Hb=N({batchNorm3d_:qb});function jb(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),g(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),g(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),Oo(o,a,l,c,u,i)}const Kb=N({batchNorm4d_:jb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zs(n,t,e){const s={shape:n,value:t,dtype:e};return A.runKernel(lm,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jb(n,t,e){const s=y(n,"x","clipByValue");if(g(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Zs(s.shape,t,s.dtype);const r={x:s},i={clipValueMin:t,clipValueMax:e};return A.runKernel(iu,r,i)}const Ee=N({clipByValue_:Jb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(n,t=0){g(n.length>=1,()=>"Pass at least one tensor to concat");const e=Rc(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),e.length===1)return Vn(e[0]);const s=e,r={axis:t};return A.runKernel(au,s,r)}const re=N({concat_:Zb});function Yb(n){return re(n,0)}const Xb=N({concat1d_:Yb});function Qb(n,t){return re(n,t)}const ty=N({concat2d_:Qb});function ey(n,t){return re(n,t)}const ny=N({concat3d_:ey});function sy(n,t){return re(n,t)}const ry=N({concat4d_:sy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(n,t,e,s,r="NHWC",i=[1,1],o){const a=y(n,"x","conv2d","float32"),l=y(t,"filter","conv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),g(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),ue("conv2d",s,o);const h=r==="NHWC"?u.shape[3]:u.shape[1];g(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),g(gn(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const f={x:u,filter:l},d={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o},p=A.runKernel(lu,f,d);return c?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const ks=N({conv2d_:iy});function oy(n,t,e,s,r="NWC",i=1,o){const a=y(n,"x","conv1d"),l=y(t,"filter","conv1d");let u=a,c=!1;a.rank===2&&(c=!0,u=D(a,[1,a.shape[0],a.shape[1]])),g(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),g(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),ue("conv1d",s,o),g(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),g(gn(e,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${i}'`),g(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=D(l,[1,l.shape[0],l.shape[1],l.shape[2]]),f=D(u,[u.shape[0],1,u.shape[1],u.shape[2]]),b=ks(f,h,[1,e],s,"NHWC",[1,i],o);return c?D(b,[b.shape[2],b.shape[3]]):D(b,[b.shape[0],b.shape[2],b.shape[3]])}const ay=N({conv1d_:oy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(n,t,e,s,r,i="NHWC",o){g(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,u=!1;t.rank===3&&(u=!0,l=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),g(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),g(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),g(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const c=i==="NHWC"?a[3]:a[1],h=i==="NHWC"?l.shape[3]:l.shape[1];g(c===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[2]}.`),g(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),ue("conv2dDerInput",r,o);const f={dy:l,filter:e},d={strides:s,pad:r,dataFormat:i,dimRoundingMode:o,inputShape:a},p=A.runKernel(uu,f,d);return u?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Bo=N({conv2DBackpropInput_:ly});function uy(n,t,e,s,r,i){const o=y(n,"x","conv2dTranspose"),a=y(t,"filter","conv2dTranspose");return Bo(e,o,a,s,r,"NHWC",i)}const cy=N({conv2dTranspose_:uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(n,t,e,s,r="NDHWC",i=[1,1,1]){const o=y(n,"x","conv3d"),a=y(t,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=D(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),g(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),g(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),g(gn(e,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),g(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`);const c={x:l,filter:a},h={strides:e,pad:s,dataFormat:r,dilations:i},f=A.runKernel(cu,c,h);return u?D(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const fy=N({conv3d_:hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(n,t,e,s,r){g(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let i=n,o=t,a=!1;t.rank===4&&(a=!0,o=D(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,n[0],n[1],n[2],n[3]]);const l=i[4],u=o.shape[4];g(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),g(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),g(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),g(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),g(u===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${e.shape[4]}.`);const c={dy:o,filter:e},h={pad:r,strides:s,inputShape:i},f=A.runKernel(Jp,c,h);return a?D(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const ah=N({conv3DBackpropInput_:dy});function py(n,t,e,s,r){const i=y(n,"x","conv3dTranspose"),o=y(t,"filter","conv3dTranspose");return ah(e,i,o,s,r)}const my=N({conv3dTranspose_:py});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(n,t,e,s,r="NHWC",i=[1,1],o){const a=y(n,"x","depthwiseConv2d","float32"),l=y(t,"filter","depthwiseConv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),g(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?u.shape[3]:u.shape[1];g(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),ue("depthwiseConv2d",s,o);const f={x:u,filter:l},d={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o},p=A.runKernel(pu,f,d);return c?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Po=N({depthwiseConv2d_:gy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(n,t){let e=y(n,"a","floorDiv"),s=y(t,"b","floorDiv");[e,s]=Lt(e,s);const r={a:e,b:s};return A.runKernel(vu,r)}const yy=N({floorDiv_:by});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(n,t){let e=y(n,"a","div"),s=y(t,"b","div");if([e,s]=Lt(e,s),e.dtype==="int32"&&s.dtype==="int32")return yy(e,s);const r={a:e,b:s},i={};return A.runKernel(mu,r,i)}const q=N({div_:wy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(n){const e={x:y(n,"x","elu","float32")};return A.runKernel(gu,e)}const Uo=N({elu_:vy});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FN(n,t){const e=n.length,s=[];for(let r=0;r<e;r++){const i=e-1-r,o=n[i]||1;(t[t.length-1-r]||1)>1&&o===1&&s.unshift(i)}return s}function Vt(n,t){const e=[];for(let s=0;s<t.length;s++){const r=n[n.length-s-1],i=t.length-s-1,o=t[i];(r==null||r===1&&o>1)&&e.unshift(i)}return e}function St(n,t){const e=[],s=Math.max(n.length,t.length);for(let r=0;r<s;r++){let i=n[n.length-r-1];i==null&&(i=1);let o=t[t.length-r-1];if(o==null&&(o=1),i===1)e.unshift(o);else if(o===1)e.unshift(i);else if(i!==o){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else e.unshift(i)}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ky(n,t){let e=y(n,"a","equal","string_or_numeric"),s=y(t,"b","equal","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(im,r)}const bn=N({equal_:ky});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(n){const e={x:y(n,"x","exp")};return A.runKernel(bu,e)}const Le=N({exp_:xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sy(n,t=0){const e=y(n,"x","expandDims","string_or_numeric");g(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},r={dim:t};return A.runKernel(yu,s,r)}const Ie=N({expandDims_:Sy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(n,t){const e=y(n,"x","tile","string_or_numeric");g(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},r={reps:t};return A.runKernel(co,s,r)}const Je=N({tile_:Ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(n,t,e,s="float32"){t==null&&(t=n);const r=Js([n,t],s),i=n<=t?n:t;for(let a=0;a<i;++a)r.set(1,a,a);const o=D(r.toTensor(),[n,t]);if(e==null)return o;if(e.length===1)return Je(Ie(o,0),[e[0],1,1]);if(e.length===2)return Je(Ie(Ie(o,0),0),[e[0],e[1],1,1]);if(e.length===3)return Je(Ie(Ie(Ie(o,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const lh=N({eye_:Iy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(n){const e={x:y(n,"x","floor","float32")};return A.runKernel(wu,e)}const Wo=N({floor_:Ay});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(n,t,e=0,s=0){const r=y(n,"x","gather"),i=y(t,"indices","gather","int32"),o={x:r,indices:i},a={axis:e,batchDims:s};return A.runKernel(xu,o,a)}const xs=N({gather_:Ny});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ty(n,t){let e=y(n,"a","greater","string_or_numeric"),s=y(t,"b","greater","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(cm,r)}const Re=N({greater_:Ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(n,t){let e=y(n,"a","greaterEqual","string_or_numeric"),s=y(t,"b","greaterEqual","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(Su,r)}const Ys=N({greaterEqual_:Dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cy(n,t=.2){const s={x:y(n,"x","leakyRelu")},r={alpha:t};return A.runKernel(Eu,s,r)}const uh=N({leakyRelu_:Cy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $y(n){const e={x:y(n,"x","log","float32")};return A.runKernel(Iu,e)}const Oe=N({log_:$y});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(n){const e={x:y(n,"x","log1p")};return A.runKernel(Au,e)}const ch=N({log1p_:_y});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(n,t=null,e=!1){const r={x:y(n,"x","max")},i={reductionIndices:t,keepDims:e};return A.runKernel(Nu,r,i)}const Ze=N({max_:Fy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function My(n,t){let e=y(n,"a","mul"),s=y(t,"b","mul");[e,s]=Lt(e,s);const r={a:e,b:s};return A.runKernel(Mu,r)}const k=N({mul_:My});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(n,t){let e=y(n,"a","sub"),s=y(t,"b","sub");[e,s]=Lt(e,s);const r={a:e,b:s};return A.runKernel(uc,r)}const U=N({sub_:zy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ly(n,t=null,e=!1){let s=y(n,"x","sum");s.dtype==="bool"&&(s=P(s,"int32"));const r={x:s},i={axis:t,keepDims:e};return A.runKernel(rc,r,i)}const G=N({sum_:Ly});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(n,t=-1){const e=y(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return pn((r,i)=>{const a=Ze(r,t,!0),l=U(r,a),u=U(P(l,"float32"),Oe(G(Le(l),t,!0)));return i([u]),{value:u,gradFunc:(h,f)=>{const[d]=f,p=!0,m=Le(d);return U(h,k(G(h,t,p),m))}}})(e)}const Oy=N({logSoftmax_:Ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function By(n,t){const e=y(n,"a","logicalAnd","bool"),s=y(t,"b","logicalAnd","bool");St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(ym,r)}const Ss=N({logicalAnd_:By});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Py(n,t,e=!1,s=!1){let r=y(n,"a","matMul"),i=y(t,"b","matMul");[r,i]=Lt(r,i);const o={a:r,b:i},a={transposeA:e,transposeB:s};return A.runKernel(su,o,a)}const pt=N({matMul_:Py});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(n,t,e,s,r){const i=y(n,"x","maxPool"),o=1;let a=i,l=!1;i.rank===3&&(l=!0,a=D(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),g(gn(e,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),ue("maxPool",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r},h=A.runKernel(Du,u,c);return l?D(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Wy=N({maxPool_:Uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gy(n,t=[1,1,1],e,s,r,i="NDHWC"){const o=y(n,"x","maxPool3d");let a=o,l=!1;o.rank===4&&(l=!0,a=D(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),g(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),ue("maxPool3d",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:i},h=A.runKernel(Cu,u,c);return l?D(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Vy=N({maxPool3d_:Gy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(n,t){let e=y(n,"a","maximum"),s=y(t,"b","maximum");[e,s]=Lt(e,s),e.dtype==="bool"&&(e=P(e,"int32"),s=P(s,"int32")),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(Tu,r)}const Jn=N({maximum_:qy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hy(n,t=null,e=!1){const r={x:y(n,"x","mean")},i={axis:t,keepDims:e};return A.runKernel($u,r,i)}const _t=N({mean_:Hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(n,t){let e=y(n,"a","minimum"),s=y(t,"b","minimum");[e,s]=Lt(e,s),e.dtype==="bool"&&(e=P(e,"int32"),s=P(s,"int32")),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(Fu,r)}const Go=N({minimum_:jy});var Ky;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Jy(n,t,e){const s=n.length+t.length,r=[];let i=0,o=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?r.push(n[i++]):r.push(t[o++]);return r}function Zy(n,t){const e=[],s=n.length;for(let i=0;i<s;i++)t.indexOf(i)===-1&&e.push(n[i]);const r=t.map(i=>n[i]);return[e,r]}function Es(n,t){const e=t.map(s=>1);return Jy(n,e,t)}function MN(n,t,e){Ky.assert(hh(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function fh(n,t){if(hh(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Vo(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function zN(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(n){const t=y(n,"x","square"),e={};return A.runKernel("Square",{x:t},e)}const wt=N({square_:Yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(n,t=null,e=!1){n=y(n,"x","moments");const s=Z(t,n.shape),r=_t(n,s,e);let i=r.shape;e||(i=Es(r.shape,s));const o=wt(U(P(n,"float32"),D(r,i))),a=_t(o,s,e);return{mean:r,variance:a}}const Xs=N({moments_:Xy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qy(n){const e={x:y(n,"x","neg")};return A.runKernel(zu,e)}const Rt=N({neg_:Qy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(n,t){let e=y(n,"a","notEqual","string_or_numeric"),s=y(t,"b","notEqual","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(Nm,r)}const Jr=N({notEqual_:tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(n,t,e=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:y(n,"indices","oneHot","int32")},a={dtype:r,depth:t,onValue:e,offValue:s};return A.runKernel(Ru,o,a)}const Zr=N({oneHot_:ew});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(n,t="float32"){if(t==="complex64"){const s=qt(n,"float32"),r=qt(n,"float32");return On(s,r)}const e=so(At(n),t);return A.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(n,t="float32"){if(t==="complex64"){const s=yn(n,"float32"),r=qt(n,"float32");return On(s,r)}const e=jl(At(n),t);return A.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(n){const e={x:y(n,"x","onesLike")};return A.runKernel(Lu,e)}const Be=N({onesLike_:nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(n,t,e=0){const s=y(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:e},i={x:s};return A.runKernel(Bu,i,r)}const dh=N({pad_:sw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(n,t){const e=y(n,"x","prelu"),s=y(t,"alpha","prelu"),r={x:e,alpha:s};return A.runKernel(Uu,r)}const ph=N({prelu_:rw});var Yr=J(92464),iw,ow,mh;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qo{constructor(t,e,s,r,i){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=i||Math.random();this.random=Yr.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,e,s=!1;for(;!s;){let r,i,o;do r=2*this.random()-1,i=2*this.random()-1,o=r*r+i*i;while(o>=1||o===0);const a=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*r*a,e=this.mean+this.stdDev*i*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class LN{constructor(t,e,s,r){this.alpha=t,this.beta=1/e,this.dtype=s;const i=r||Math.random();this.randu=iw.alea(i.toString()),this.randn=new qo(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,s,r,i,o;for(;;){do r=this.randn.nextValue(),o=1+this.c*r;while(o<=0);if(o*=o*o,t=r*r,e=1-.331*t*t,s=.5*t+this.d*(1-o+Math.log(o)),i=this.randu(),i<e||Math.log(i)<s)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class aw{constructor(t=0,e=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Yr.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function RN(n){const t=n.length,e=cw(n),s=uw(n),r=t/6*(Math.pow(e,2)+.25*Math.pow(s-3,2));if(r>5.991)throw new Error(`Invalid p-value for JB: ${r}`)}function ON(n,t,e,s){s==null&&(s=ow());const r=Ho(n);mh(r,t,s),mh(lw(n,r),e,s)}function Ho(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t/n.length}function lw(n,t){let e=0;for(let s=0;s<n.length;s++){const r=n[s]-t;e+=r*r}return Math.sqrt(e/n.length)}function uw(n){const t=Ho(n),e=n.length;let s=0,r=0;for(let i=0;i<e;i++){const o=n[i]-t;s+=Math.pow(o,2),r+=Math.pow(o,4)}return 1/e*r/Math.pow(1/e*s,2)}function cw(n){const t=Ho(n),e=n.length;let s=0,r=0;for(let i=0;i<e;i++){const o=n[i]-t;s+=Math.pow(o,2),r+=Math.pow(o,3)}return 1/e*r/Math.pow(1/(e-1)*s,3/2)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(n,t=0,e=1,s,r){if(s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const i=new qo(t,e,s,!1,r),o=Js(n,s);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const fw=N({randomNormal_:hw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(n,t=0,e=1,s="float32",r){const i=Js(n,s),o=new aw(t,e,null,r);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Xr=N({randomUniform_:dw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(n){const e={x:y(n,"x","relu")};return A.runKernel(Wu,e)}const wn=N({relu_:pw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(n,t){const s={x:y(n,"x","reverse")},r={dims:t};return A.runKernel(ju,s,r)}const Is=N({reverse_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(n){const e={x:y(n,"x","selu")};return A.runKernel(Yu,e)}const bw=N({selu_:gw});function yw(n,t,e,s,r,i=[1,1],o="NHWC"){const a=y(n,"x","separableConv2d"),l=y(t,"depthwiseFilter","separableConv2d"),u=y(e,"pointwiseFilter","separableConv2d");let c=a,h=!1;if(a.rank===3&&(h=!0,c=D(a,[1,a.shape[0],a.shape[1],a.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),g(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),g(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),g(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),g(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const f=l.shape[2],d=l.shape[3];g(u.shape[2]===f*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*d}, but got ${u.shape[2]}.`);const p=Po(c,l,s,r,o,i),b=ks(p,u,1,"valid",o);return h?D(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const ww=N({separableConv2d_:yw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(n){const e={x:y(n,"x","sigmoid","float32")};return A.runKernel(ec,e)}const Qr=N({sigmoid_:vw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kw(n,t,e){const s=y(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},i={begin:t,size:e};return A.runKernel(Xu,r,i)}const ct=N({slice_:kw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(n,t,e){const s=y(n,"x","slice1d");return g(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),ct(s,[t],[e])}const jo=N({slice1d_:xw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(n,t,e){const s=y(n,"x","slice2d");return g(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),ct(s,t,e)}const gh=N({slice2d_:Sw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew(n,t,e){const s=y(n,"x","slice3d");return g(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),ct(s,t,e)}const Ko=N({slice3d_:Ew});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(n,t,e){const s=y(n,"x","slice4d");return g(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),ct(s,t,e)}const ti=N({slice4d_:Iw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(n,t=-1){const e=y(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},r={dim:t};return A.runKernel(ac,s,r)}const bh=N({softmax_:Aw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(n){const e={x:y(n,"x","softplus")};return A.runKernel(nc,e)}const Jo=N({softplus_:Nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw(n,t,e=0){const r={x:y(n,"x","split")},i={numOrSizeSplits:t,axis:e};return A.runKernel(oc,r,i)}const Ae=N({split_:Tw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(n){const e={x:y(n,"x","sqrt","float32")};return A.runKernel(sc,e)}const ie=N({sqrt_:Dw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(n,t){const e=y(n,"x","squeeze","string_or_numeric");return D(e,Nt(e.shape,t).newShape)}const As=N({squeeze_:Cw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $w(n,t=0){const e=Rc(n,"tensors","stack","string_or_numeric");g(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&g(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,r={axis:t};return A.runKernel(Ou,s,r)}const vn=N({stack_:$w});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(n){const e={x:y(n,"x","tanh","float32")};return A.runKernel(cc,e)}const yh=N({tanh_:_w});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ht(n,t){Zt(n);const e=ds(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ps(n,null,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zn(n,t,e){if(Zt(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=ds(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ps(n,t,s,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fw(n,t,e){if(Zt(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=ds(n,e);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ps(n,t,s,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(n,t=0,e=1,s,r){if(s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new qo(t,e,s,!0,r),o=Js(n,s);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const wh=N({truncatedNormal_:Mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zw(n,t=0){const e=y(n,"x","unstack","string_or_numeric");g(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},r={axis:t};return A.runKernel(hc,s,r)}const Ns=N({unstack_:zw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lw(n,t=!0,e,s){return A.makeVariable(n,t,e,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rw(n,t){let e=y(n,"broadcastTo","x");const s=e.shape;if(t.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const u=e.shape.slice();for(;u.length<t.length;)u.unshift(1);e=D(e,u)}const r=e.shape,i=Array.from(t);for(let u=t.length-1;u>=0;u--)if(r[u]===t[u])i[u]=1;else if(e.shape[u]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(i.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return Vn(e);const a={x:e},l={reps:i};return A.runKernel(co,a,l)}const Zo=N({broadcastTo_:Rw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(n,t,e){const s=y(t,"a","where"),r=y(e,"b","where"),i=y(n,"condition","where","bool"),o=St(St(i.shape,s.shape),r.shape),a=Zo(i,o),l=Zo(s,o),u=Zo(r,o),c={condition:a,t:l,e:u};return A.runKernel(Zu,c)}const Ne=N({where_:Ow});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bw(n){const e={x:y(n,"x","zerosLike")};return A.runKernel(dc,e)}const ot=N({zerosLike_:Bw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pw(n){const e={input:y(n,"input","imag")};return A.runKernel(fm,e)}const Yo=N({imag_:Pw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uw(n){const e={input:y(n,"input","real")};return A.runKernel(Fm,e)}const ei=N({real_:Uw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(n,t,e){const s=y(n,"x","transpose");if(t==null&&(t=s.shape.map((o,a)=>a).reverse()),g(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(o=>{g(o>=0&&o<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},i={perm:t};return s.dtype==="complex64"?T(()=>{let o=ei(s),a=Yo(s);return o=A.runKernel(Fr,{x:o},i),a=A.runKernel(Fr,{x:a},i),e&&(a=Rt(a)),On(o,a)}):A.runKernel(Fr,r,i)}const nt=N({transpose_:Ww});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gw(n,t){if(t==null)return n.shape.slice();if(Wt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(n,t,e,s){const r=y(n,"x","dropout");if(g(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),g(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof yt?r.clone():r;const i=Gw(r,e),o=1-t,a=q(Wo(M(Xr(i,0,1,"float32",s),o)),o);return k(r,a)}const qw=N({dropout_:Vw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hw(n){g(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return A.runKernel(am,t)}const vh=N({fft_:Hw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jw(n,t){g(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let r;if(t!=null&&t<e){const p=n.shape.map(b=>0),m=n.shape.map(b=>b);m[n.shape.length-1]=t,r=ct(n,p,m),e=t}else if(t!=null&&t>e){const p=n.shape.map(m=>m);p[n.shape.length-1]=t-e,r=re([n,qt(p)],n.shape.length-1),e=t}else r=n;const i=ot(r),o=D(On(r,i),[s,e]),a=vh(o),l=Math.floor(e/2)+1,u=ei(a),c=Yo(a),h=Ae(u,[l,e-l],u.shape.length-1),f=Ae(c,[l,e-l],c.shape.length-1),d=r.shape.slice();return d[r.shape.length-1]=l,D(On(h[0],f[0]),d)}const kh=N({rfft_:jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kw(n){g(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return A.runKernel(hm,t)}const Xo=N({ifft_:Kw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const r=D(n,[e,t]);s=Xo(r)}else{const r=[e,2*(t-1)],i=D(ei(n),[e,t]),o=D(Yo(n),[e,t]),a=Is(ct(i,[0,1],[e,t-2]),1),l=k(Is(ct(o,[0,1],[e,t-2]),1),K(-1)),u=re([i,a],1),c=re([o,l],1),h=D(On(u,c),[r[0],r[1]]);s=Xo(h)}if(s=ei(s),n.rank===3&&n.shape[0]!==0){const r=s,i=n.shape[0];s=D(s,[i,s.shape[0]/i,s.shape[1]]),r.dispose()}return s}const Zw=N({irfft_:Jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yw(n,t,e,s,r,i="NHWC",o){let a=n;n.rank===3&&(a=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=D(t,[1,t.shape[0],t.shape[1],t.shape[2]])),g(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),g(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),g(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const u=i==="NHWC"?a.shape[3]:a.shape[1],c=i==="NHWC"?l.shape[3]:l.shape[1];g(u===e[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${e[2]}.`),g(c===e[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${e[3]}).`),ue("conv2dDerFilter",r,o);const h={x:a,dy:l},f={strides:s,pad:r,dataFormat:i,dimRoundingMode:o,filterShape:e};return A.runKernel(jp,h,f)}const Qo=N({conv2DBackpropFilter_:Yw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(n){const e={x:y(n,"x","relu6")};return A.runKernel(Hu,e)}const Qw=N({relu6_:Xw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t0(n,t=0){const s={x:y(n,"x","step")},r={alpha:t};return A.runKernel(pc,s,r)}const ni=N({step_:t0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ta(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return k(n,ni(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function ea(n,t){let e=t;const s=Vt(n.shape,t.shape);return s.length>0&&(e=G(e,s)),D(e,n.shape)}function na(n,t,e,s){if(t==="linear")return n;if(t==="relu")return wn(n);if(t==="elu")return Uo(n);if(t==="relu6")return Qw(n);if(t==="prelu")return ph(n,e);if(t==="leakyrelu")return uh(n,s);if(t==="sigmoid")return Qr(n);throw new Error(`Unknown fused activation ${t}.`)}const sa=(n,t)=>!(n>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",sa(A.state.gradientDepth,l)===!1){g(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=ks(n,t,e,s,r,i,o);return a!=null&&($=M($,a)),na($,l,u,c)}const h=y(n,"x","conv2d","float32"),f=y(t,"filter","conv2d","float32");let d=h,p=!1;h.rank===3&&(p=!0,d=D(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),ue("fused conv2d",s,o);const m=r==="NHWC"?d.shape[3]:d.shape[1];g(f.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${f.shape[2]}.`),g(gn(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const b=jr(d.shape,f.shape,e,i,s,o);let v;a!=null&&(v=y(a,"bias","fused conv2d"),[v]=Lt(v,h),r==="NHWC"?St(b.outShape,v.shape):(g(v.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${v.shape.length}.`),g(v.shape.length===0||v.shape[0]===b.outChannels||v.shape[0]===1,()=>`Error in fused conv2d: bias shape (${v.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let E;if(u!=null){const $=u.shape;if(g($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)g($[0]===1||$[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${b.outChannels}).`);else if($.length===3)try{St($,b.outShape)}catch{const R=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(R)}E=y(u,"prelu weights","fused conv2d")}const x=($,L)=>{g(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[R,F,B,V]=L,H=ta($,B,l);g(Kn(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const tt=Bo(F.shape,H,R,e,s),at=Qo(F,H,R.shape,e,s),rt=[tt,at];if(V!=null){const xt=ea(V,H);rt.push(xt)}return rt},I={x:d,filter:f,bias:v,preluActivationWeights:E},C={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return a==null?pn((L,R,F)=>{let B=A.runKernel(bc,I,C);return F([R,L,B]),p&&(B=D(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:x}})(d,f):pn((L,R,F,B)=>{let V=A.runKernel(bc,I,C);return B([R,L,V,F]),p&&(V=D(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:x}})(d,f,v)}const n0=N({fusedConv2d_:e0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(n,t,e,s,r,i=[1,1],o){let a=n;n.rank===3&&(a=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={x:a,dy:l},c={strides:s,pad:r,dimRoundingMode:o,dilations:i,filterShape:e};return A.runKernel(Xp,u,c)}const xh=N({depthwiseConv2dNativeBackpropFilter_:s0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r0(n,t,e,s,r,i=[1,1],o){let a=t,l=!1;t.rank===3&&(l=!0,a=D(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={dy:a,filter:e},c={strides:s,pad:r,dimRoundingMode:o,dilations:i,inputShape:n},h=A.runKernel(Qp,u,c);return l?D(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Sh=N({depthwiseConv2dNativeBackpropInput_:r0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(sa(A.state.gradientDepth,l)===!1){let C=Po(n,t,e,s,r,i,o);return a!=null&&(C=M(C,a)),na(C,l,u,c)}const h=y(n,"x","depthwiseConv2d","float32"),f=y(t,"filter","depthwiseConv2d","float32");let d=h,p=!1;h.rank===3&&(p=!0,d=D(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),g(d.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),i==null&&(i=[1,1]),g(gn(e,i),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),ue("fused depthwiseConv2d",s,o);const m=jr(d.shape,f.shape,e,i,s,o,!0);let b;a!=null&&(b=y(a,"bias","fused conv2d"),[b]=Lt(b,h),St(m.outShape,b.shape));let v;u!=null&&(v=y(u,"prelu weights","fused depthwiseConv2d"));const E=(C,$)=>{g(Kn(i),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[L,R,F,B]=$,V=ta(C,F,l),H=Sh(R.shape,V,L,e,s,i,o),tt=xh(R,V,L.shape,e,s,i,o);if(B!=null){const at=ea(b,V);return[H,tt,at]}return[H,tt]},x={x:d,filter:f,bias:b,preluActivationWeights:v},I={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return a==null?pn(($,L,R)=>{let F=A.runKernel(yc,x,I);return R([L,$,F]),p&&(F=D(F,[F.shape[1],F.shape[2],F.shape[3]])),{value:F,gradFunc:E}})(d,f):pn(($,L,R,F)=>{let B=A.runKernel(yc,x,I);return F([L,$,B,R]),p&&(B=D(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:E}})(d,f,b)}const BN=N({fusedDepthwiseConv2d_:i0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:r,activation:i="linear",preluActivationWeights:o,leakyreluAlpha:a=.2}){if(sa(A.state.gradientDepth,i)===!1){let V=pt(n,t,e,s);return r!=null&&(V=M(V,r)),na(V,i,o,a)}let l=y(n,"a","fused matMul"),u=y(t,"b","fused matMul");[l,u]=Lt(l,u);const c=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?u.shape[u.rank-1]:u.shape[u.rank-2],f=e?l.shape[l.rank-1]:l.shape[l.rank-2],d=s?u.shape[u.rank-2]:u.shape[u.rank-1],p=l.shape.slice(0,-2),m=u.shape.slice(0,-2),b=At(p),v=At(m);g(c===h,()=>`Error in fused matMul: inner shapes (${c}) and (${h}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${e} and transposeB=${s} must match.`);const x=St(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([f,d]),I=e?D(l,[b,c,f]):D(l,[b,f,c]),C=s?D(u,[v,d,h]):D(u,[v,h,d]);let $;r!=null&&($=y(r,"bias","fused matMul"),[$]=Lt($,l),St(x,$.shape));let L;o!=null&&(L=y(o,"prelu weights","fused matMul"));const R=(V,H)=>{const[tt,at,rt,xt]=H,ut=ta(D(V,rt.shape),rt,i);let $t,Ct;if(!e&&!s?($t=pt(ut,at,!1,!0),Ct=pt(tt,ut,!0,!1)):!e&&s?($t=pt(ut,at,!1,!1),Ct=pt(ut,tt,!0,!1)):e&&!s?($t=pt(at,ut,!1,!0),Ct=pt(tt,ut,!1,!1)):($t=pt(at,ut,!0,!0),Ct=pt(ut,tt,!0,!0)),r!=null){const He=ea(xt,ut);return[$t,Ct,He]}else return[$t,Ct]},F={a:I,b:C,bias:$,preluActivationWeights:L},B={transposeA:e,transposeB:s,activation:i,leakyreluAlpha:a};return r==null?pn((H,tt,at)=>{const rt=A.runKernel(gc,F,B);return at([H,tt,rt]),{value:D(rt,x),gradFunc:R}})(I,C):pn((H,tt,at,rt)=>{const xt=A.runKernel(gc,F,B);return rt([H,tt,xt,at]),{value:D(xt,x),gradFunc:R}})(I,C,$)}const Eh=N({fusedMatMul_:o0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a0(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Ih(n,t,e){const s=1-n%2,r=new Float32Array(n);for(let i=0;i<n;++i){const o=2*Math.PI*i/(n+s-1);r[i]=t-e*Math.cos(o)}return Ht(r,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l0(n){return Ih(n,.54,.46)}const u0=N({hammingWindow_:l0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(n){return Ih(n,.5,.5)}const Ah=N({hannWindow_:c0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h0(n,t,e,s=!1,r=0){let i=0;const o=[];for(;i+t<=n.size;)o.push(ct(n,i,t)),i+=e;if(s)for(;i<n.size;){const a=i+t-n.size,l=re([ct(n,i,t-a),Zs([a],r)]);o.push(l),i+=e}return o.length===0?Zn([],[0,t]):D(re(o),[o.length,t])}const Nh=N({frame_:h0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n,t,e,s,r=Ah){s==null&&(s=a0(t));const i=Nh(n,t,e),o=k(i,r(t));return kh(o,s)}const d0=N({stft_:f0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p0(n,t,e,s,r="bilinear",i=0){const o=y(n,"image","cropAndResize"),a=y(t,"boxes","cropAndResize","float32"),l=y(e,"boxInd","cropAndResize","int32"),u=a.shape[0];g(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),g(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),g(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),g(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),g(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),g(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const c={image:o,boxes:a,boxInd:l},h={method:r,extrapolationValue:i,cropSize:s};return A.runKernel(Yp,c,h)}const m0=N({cropAndResize_:p0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g0(n){const t=y(n,"image","flipLeftRight","float32");g(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return A.runKernel(um,e,{})}const b0=N({flipLeftRight_:g0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y0(n){const t=y(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];g(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),g(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,e),r[e]=3,Je(t,r)}const w0=N({grayscaleToRGB_:y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(n,t,e=0,s=.5){const r=y(n,"image","rotateWithOffset","float32");g(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const i={image:r},o={radians:t,fillValue:e,center:s};return A.runKernel(Km,i,o)}const k0=N({rotateWithOffset_:v0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ts(n,t,e,s,r,i){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),i==null&&(i=0);const o=n.shape[0];return e=Math.min(e,o),g(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),g(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),g(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),g(t.rank===1,()=>"scores must be a 1D tensor"),g(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),g(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const i=y(n,"boxes","nonMaxSuppression","float32"),o=y(t,"scores","nonMaxSuppression","float32"),a=Ts(i,o,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:r};return A.runKernel(Tm,{boxes:i,scores:o},l)}const S0=N({nonMaxSuppression_:x0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E0(n,t,e){const s=I0(n,t,e),r=s<0?-(s+1):s;n.splice(r,0,t)}function I0(n,t,e){return N0(n,t,e||A0)}function A0(n,t){return n>t?1:n<t?-1:0}function N0(n,t,e){let s=0,r=n.length,i=0,o=!1;for(;s<r;){i=s+(r-s>>>1);const a=e(t,n[i]);a>0?s=i+1:(r=i,o=!a)}return o?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T0(n,t,e,s,r){return ra(n,t,e,s,r,0)}function D0(n,t,e,s,r,i){return ra(n,t,e,s,r,0,!1,i,!0)}function C0(n,t,e,s,r,i){return ra(n,t,e,s,r,i,!0)}function ra(n,t,e,s,r,i,o=!1,a=!1,l=!1){const u=[];for(let b=0;b<t.length;b++)t[b]>r&&u.push({score:t[b],boxIndex:b,suppressBeginIndex:0});u.sort(Th);const c=i>0?-.5/i:0,h=[],f=[];for(;h.length<e&&u.length>0;){const b=u.pop(),{score:v,boxIndex:E,suppressBeginIndex:x}=b;if(v<r)break;let I=!1;for(let C=h.length-1;C>=x;--C){const $=$0(n,E,h[C]);if($>=s){I=!0;break}if(b.score=b.score*_0(s,c,$),b.score<=r)break}b.suppressBeginIndex=h.length,I||(b.score===v?(h.push(E),f.push(b.score)):b.score>r&&E0(u,b,Th))}const d=h.length,p=e-d;a&&p>0&&(h.push(...new Array(p).fill(0)),f.push(...new Array(p).fill(0)));const m={selectedIndices:h};return o&&(m.selectedScores=f),l&&(m.validOutputs=d),m}function $0(n,t,e){const s=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),i=Math.min(s[0],s[2]),o=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),u=Math.min(r[0],r[2]),c=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),f=Math.max(r[1],r[3]),d=(a-i)*(l-o),p=(h-u)*(f-c);if(d<=0||p<=0)return 0;const m=Math.max(i,u),b=Math.max(o,c),v=Math.min(a,h),E=Math.min(l,f),x=Math.max(v-m,0)*Math.max(E-b,0);return x/(d+p-x)}function _0(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Th(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function F0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const i=y(n,"boxes","nonMaxSuppressionAsync"),o=y(t,"scores","nonMaxSuppressionAsync"),a=Ts(i,o,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([i.data(),o.data()]),u=l[0],c=l[1],{selectedIndices:h}=T0(u,c,e,s,r);return i!==n&&i.dispose(),o!==t&&o.dispose(),Ht(h,"int32")}const M0=F0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=0){const o=y(n,"boxes","nonMaxSuppression"),a=y(t,"scores","nonMaxSuppression"),l=Ts(o,a,e,s,r,i);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,i=l.softNmsSigma;const u={boxes:o,scores:a},c={maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:i},h=A.runKernel(Cm,u,c);return{selectedIndices:h[0],selectedScores:h[1]}}const L0=N({nonMaxSuppressionWithScore_:z0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function R0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=0){const o=y(n,"boxes","nonMaxSuppressionAsync"),a=y(t,"scores","nonMaxSuppressionAsync"),l=Ts(o,a,e,s,r,i);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,i=l.softNmsSigma;const u=await Promise.all([o.data(),a.data()]),c=u[0],h=u[1],{selectedIndices:f,selectedScores:d}=C0(c,h,e,s,r,i);return o!==n&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:Ht(f,"int32"),selectedScores:Ht(d)}}const O0=R0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=!1){const o=y(n,"boxes","nonMaxSuppression"),a=y(t,"scores","nonMaxSuppression"),l=Ts(o,a,e,s,r,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,f={boxes:o,scores:a},d={maxOutputSize:u,iouThreshold:c,scoreThreshold:h,padToMaxOutputSize:i},p=A.runKernel(Dm,f,d);return{selectedIndices:p[0],validOutputs:p[1]}}const P0=N({nonMaxSuppressionPadded_:B0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function U0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=!1){const o=y(n,"boxes","nonMaxSuppressionAsync"),a=y(t,"scores","nonMaxSuppressionAsync"),l=Ts(o,a,e,s,r,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,[f,d]=await Promise.all([o.data(),a.data()]),{selectedIndices:p,validOutputs:m}=D0(f,d,u,c,h,i);return o!==n&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:Ht(p,"int32"),validOutputs:K(m,"int32")}}const W0=U0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G0(n,t,e=!1,s=!1){const r=y(n,"images","resizeBilinear");g(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),g(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=r,o=!1;r.rank===3&&(o=!0,i=D(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=t,a={images:i},l={alignCorners:e,halfPixelCenters:s,size:t},u=A.runKernel(qu,a,l);return o?D(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const V0=N({resizeBilinear_:G0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n,t,e=!1,s=!1){const r=y(n,"images","resizeNearestNeighbor");g(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),g(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),g(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=r,o=!1;r.rank===3&&(o=!0,i=D(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=t,a={images:i},l={alignCorners:e,halfPixelCenters:s,size:t},u=A.runKernel(Vu,a,l);return o?D(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const H0=N({resizeNearestNeighbor_:q0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j0(n,t,e){const s=y(n,"x","bincount"),r=y(t,"weights","bincount");g(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),g(e>=0,()=>`size must be non-negative, but got ${e}.`),g(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const i={x:s,weights:r},o={size:e};return A.runKernel(Gp,i,o)}const K0=N({bincount_:j0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(n,t){let e=y(n,"a","lessEqual","string_or_numeric"),s=y(t,"b","lessEqual","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(bm,r)}const Qs=N({lessEqual_:J0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z0(n){const e={x:y(n,"x","round")};return A.runKernel(Ku,e)}const Y0=N({round_:Z0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function si(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:t,step:e,dtype:s};return A.runKernel(_m,{},r)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X0(n,t="binary",e=!1,s=.5){const r=y(n,"image","threshold"),i=.2989,o=.587,a=.114,l=r.shape[0]*r.shape[1];let u=k(Ht([s]),255),c,h,f,d;if(g(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),g(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),g(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),g(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[c,h,f]=Ae(r,[1,1,1],-1);const b=k(c,i),v=k(h,o),E=k(f,a);d=M(M(b,v),E)}else d=n;if(t==="otsu"){const b=K0(P(Y0(d),"int32"),Bn([]),256);u=Q0(b,l)}const p=e?Qs(d,u):Re(d,u);return P(k(p,255),"int32")}function Q0(n,t){let e=Ht([-1]),s=Ht([0]),r=Ht([0]),i,o,a,l,u,c;for(let h=0;h<n.size-1;h++){i=ct(n,0,h+1),o=ct(n,h+1),u=q(G(i),t),c=q(G(o),t);const f=G(k(i,si(0,i.size)));a=q(f,G(i));const d=Zs(o.shape,i.size),p=M(si(0,o.size),d),m=k(o,p);l=q(G(m),G(o));const b=U(a,l),v=U(a,l),E=k(u,c);r=k(k(E,b),v);const x=Re(r,s);s=Ne(x,r,s),e=Ne(x,Ht([h]),e)}return e}const t1=N({threshold_:X0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e1(n,t,e="nearest",s="constant",r=0,i){const o=y(n,"image","transform","float32"),a=y(t,"transforms","transform","float32");g(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),g(a.rank===2&&(a.shape[0]===o.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const l={image:o,transforms:a},u={interpolation:e,fillMode:s,fillValue:r,outputShape:i};return A.runKernel(jm,l,u)}const n1=N({transform_:e1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s1(n,t,e){g(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),g(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const s=y(n,"a","bandPart");g(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[i,o]=s.shape.slice(-2);if(!(t<=i))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`);if(!(e<=o))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${o}).`);t<0&&(t=i),e<0&&(e=o);const a=D(si(0,i,1,"int32"),[-1,1]),l=si(0,o,1,"int32"),u=U(a,l),c=Ss(Qs(u,K(+t,"int32")),Ys(u,K(-e,"int32"))),h=qt([i,o],s.dtype);return D(vn(Ns(D(s,[-1,i,o])).map(f=>Ne(c,f,h))),r)}const r1=N({bandPart_:s1});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i1(n,t=null,e=!1){const r={x:y(n,"x","min")},i={axis:t,keepDims:e};return A.runKernel(_u,r,i)}const Dh=N({min_:i1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o1(n,t){let e=y(n,"base","pow"),s=y(t,"exp","pow");[e,s]=Lt(e,s);const r={a:e,b:s};return A.runKernel(Pu,r)}const tr=N({pow_:o1});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a1(n,t="euclidean",e=null,s=!1){n=y(n,"x","norm");const r=Ch(n,t,e);let i=r.shape;if(s){const o=Z(e,n.shape);i=Es(r.shape,o)}return D(r,i)}function Ch(n,t,e=null){if(n.rank===0)return Jt(n);if(n.rank!==1&&e===null)return Ch(D(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return G(Jt(n),e);if(t===1/0)return Ze(Jt(n),e);if(t===-1/0)return Dh(Jt(n),e);if(t==="euclidean"||t===2)return ie(G(tr(Jt(n),K(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Ze(G(Jt(n),e[0]),e[1]-1);if(t===1/0)return Ze(G(Jt(n),e[1]),e[0]);if(t===-1/0)return Dh(G(Jt(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return ie(G(wt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const $h=N({norm_:a1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l1(n){let t;if(Array.isArray(n)){t=!1,g(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let i=1;i<n.length;++i)g(n[i].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[i].shape[0]} vs. ${r})`)}else t=!0,n=Ae(n,n.shape[0],0).map(r=>As(r,[0]));g(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let r=0;r<n.length;++r)e.push(A.tidy(()=>{let i=s[r];if(r>0)for(let o=0;o<r;++o){const a=k(G(k(e[o],i)),e[o]);i=U(i,a)}return q(i,$h(i,"euclidean"))}));return t?vn(e,0):e}const u1=N({gramSchmidt_:l1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c1(n,t=!1){if(g(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return _h(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,u)=>l*u),s=Ns(D(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],i=[];s.forEach(l=>{const[u,c]=_h(l,t);r.push(u),i.push(c)});const o=D(vn(r,0),n.shape),a=D(vn(i,0),n.shape);return[o,a]}}function _h(n,t=!1){return A.tidy(()=>{g(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let r=lh(e),i=Vn(n);const o=Zn([[1]],[1,1]);let a=Vn(o);const l=e>=s?s:e;for(let u=0;u<l;++u){const c=i,h=a,f=r;[a,i,r]=A.tidy(()=>{const d=ct(i,[u,u],[e-u,1]),p=$h(d),m=ct(i,[u,u],[1,1]),b=Ne(Re(m,0),Zn([[-1]]),Zn([[1]])),v=U(m,k(b,p)),E=q(d,v);E.shape[0]===1?a=Vn(o):a=re([o,ct(E,[1,0],[E.shape[0]-1,E.shape[1]])],0);const x=Rt(q(pt(b,v),p)),I=ct(i,[u,0],[e-u,s]),C=k(x,a),$=nt(a);if(u===0)i=U(I,pt(C,pt($,I)));else{const F=U(I,pt(C,pt($,I)));i=re([ct(i,[0,0],[u,s]),F],0)}const L=nt(C),R=ct(r,[0,u],[e,r.shape[1]-u]);if(u===0)r=U(R,pt(pt(R,a),L));else{const F=U(R,pt(pt(R,a),L));r=re([ct(r,[0,0],[e,u]),F],1)}return[a,i,r]}),j([c,h,f])}return!t&&e>s&&(r=ct(r,[0,0],[e,s]),i=ct(i,[0,0],[s,s])),[r,i]})}const h1=N({qr_:c1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ce;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(ce||(ce={}));function f1(n,t,e=ce.SUM_BY_NONZERO_WEIGHTS){const s=y(n,"losses","computeWeightedLoss");let r=null;t!=null&&(r=y(t,"weights","computeWeightedLoss"));const i=r==null?s:k(s,r);if(e===ce.NONE)return i;if(e===ce.SUM)return G(i);if(e===ce.MEAN){if(r==null)return _t(i);{const o=s.size/r.size,a=q(G(i),G(r));return o>1?q(a,K(o)):a}}if(e===ce.SUM_BY_NONZERO_WEIGHTS){if(r==null)return q(G(i),K(s.size));{const o=k(r,yn(s.shape)),a=P(G(Jr(o,K(0))),"float32");return q(G(i),a)}}throw Error(`Unknown reduction: ${e}`)}const an=N({computeWeightedLoss_:f1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d1(n,t,e,s=ce.SUM_BY_NONZERO_WEIGHTS){const r=y(n,"labels","absoluteDifference"),i=y(t,"predictions","absoluteDifference");let o=null;e!=null&&(o=y(e,"weights","absoluteDifference")),be(r.shape,i.shape,"Error in absoluteDifference: ");const a=Jt(U(r,i));return an(a,o,s)}const p1=N({absoluteDifference_:d1});function m1(n,t,e,s,r=ce.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","cosineDistance"),o=y(t,"predictions","cosineDistance");let a=null;s!=null&&(a=y(s,"weights","cosineDistance")),be(i.shape,o.shape,"Error in cosineDistance: ");const l=K(1),u=U(l,G(k(i,o),e,!0));return an(u,a,r)}const g1=N({cosineDistance_:m1});function b1(n,t,e,s=ce.SUM_BY_NONZERO_WEIGHTS){let r=y(n,"labels","hingeLoss");const i=y(t,"predictions","hingeLoss");let o=null;e!=null&&(o=y(e,"weights","hingeLoss")),be(r.shape,i.shape,"Error in hingeLoss: ");const a=K(1);r=U(k(K(2),r),a);const l=wn(U(a,k(r,i)));return an(l,o,s)}const y1=N({hingeLoss_:b1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w1(n,t,e,s=1,r=ce.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","huberLoss"),o=y(t,"predictions","huberLoss");let a=null;e!=null&&(a=y(e,"weights","huberLoss")),be(i.shape,o.shape,"Error in huberLoss: ");const l=K(s),u=Jt(U(o,i)),c=Go(u,l),h=U(u,c),f=M(k(K(.5),wt(c)),k(l,h));return an(f,a,r)}const v1=N({huberLoss_:w1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k1(n,t,e,s=1e-7,r=ce.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","logLoss"),o=y(t,"predictions","logLoss");let a=null;e!=null&&(a=y(e,"weights","logLoss")),be(i.shape,o.shape,"Error in logLoss: ");const l=K(1),u=K(s),c=Rt(k(i,Oe(M(o,u)))),h=k(U(l,i),Oe(M(U(l,o),u))),f=U(c,h);return an(f,a,r)}const x1=N({logLoss_:k1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S1(n,t){let e=y(n,"a","squaredDifference"),s=y(t,"b","squaredDifference");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s},i={};return A.runKernel(lc,r,i)}const E1=N({squaredDifference_:S1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I1(n,t,e,s=ce.SUM_BY_NONZERO_WEIGHTS){const r=y(n,"labels","meanSquaredError"),i=y(t,"predictions","meanSquaredError");let o=null;e!=null&&(o=y(e,"weights","meanSquaredError")),be(r.shape,i.shape,"Error in meanSquaredError: ");const a=E1(r,i);return an(a,o,s)}const A1=N({meanSquaredError_:I1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N1(n,t){const e=y(n,"labels","sigmoidCrossEntropyWithLogits"),s=y(t,"logits","sigmoidCrossEntropyWithLogits");be(e.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=wn(s),i=k(s,e),o=ch(Le(Rt(Jt(s))));return M(U(r,i),o)}function T1(n,t,e,s=0,r=ce.SUM_BY_NONZERO_WEIGHTS){let i=y(n,"multiClassLabels","sigmoidCrossEntropy");const o=y(t,"logits","sigmoidCrossEntropy");let a=null;if(e!=null&&(a=y(e,"weights","sigmoidCrossEntropy")),be(i.shape,o.shape,"Error in sigmoidCrossEntropy: "),s>0){const u=K(s),c=K(1),h=K(.5);i=M(k(i,U(c,u)),k(h,u))}const l=N1(i,o);return an(l,a,r)}const D1=N({sigmoidCrossEntropy_:T1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C1(n,t=null,e=!1){const s=y(n,"x","logSumExp"),r=Z(t,s.shape),i=Ze(s,r,!0),o=U(s,i),a=Le(o),l=G(a,r),u=Oe(l),c=M(D(i,u.shape),u);if(e){const h=Es(c.shape,r);return D(c,h)}return c}const $1=N({logSumExp_:C1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _1(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return pn((r,i,o)=>{const l=$1(i,[e],!0),u=U(P(i,"float32"),l);o([r,u]);const c=Rt(k(u,r));return{value:G(c,[e]),gradFunc:(d,p)=>{const[m,b]=p,v=Es(d.shape,[e]);return[k(D(d,v),U(P(m,"float32"),Le(b))),k(D(d,v),U(Le(b),P(m,"float32")))]}}})(n,t)}function F1(n,t,e,s=0,r=ce.SUM_BY_NONZERO_WEIGHTS){let i=y(n,"onehotLabels","softmaxCrossEntropy");const o=y(t,"logits","softmaxCrossEntropy");let a=null;if(e!=null&&(a=y(e,"weights","softmaxCrossEntropy")),be(i.shape,o.shape,"Error in softmaxCrossEntropy: "),s>0){const u=K(s),c=K(1),h=K(i.shape[1]);i=M(k(i,U(c,u)),q(u,h))}const l=_1(i,o);return an(l,a,r)}const M1=N({softmaxCrossEntropy_:F1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z1(n,t,e,s){const r=y(n,"indices","sparseFillEmptyRows","int32"),i=y(t,"values","sparseFillEmptyRows"),o=y(e,"denseShape","sparseFillEmptyRows","int32"),a=y(s,"defaultValue","sparseFillEmptyRows",i.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(i.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${i.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const l={indices:r,values:i,denseShape:o,defaultValue:a},u=A.runKernel(Om,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const L1=N({sparseFillEmptyRows_:z1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R1(n,t,e){const s=y(n,"inputIndices","sparseReshape","int32"),r=y(t,"inputShape","sparseReshape","int32"),i=y(e,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(i.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${i.shape}`);const o={inputIndices:s,inputShape:r,newShape:i},a=A.runKernel(Bm,o);return{outputIndices:a[0],outputShape:a[1]}}const O1=N({sparseReshape_:R1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B1(n,t,e){const s=y(n,"data","sparseSegmentMean"),r=y(t,"indices","sparseSegmentMean","int32"),i=y(e,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${i.shape}`);const o={data:s,indices:r,segmentIds:i};return A.runKernel(Pm,o)}const P1=N({sparseSegmentMean_:B1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U1(n,t,e){const s=y(n,"data","sparseSegmentSum"),r=y(t,"indices","sparseSegmentSum","int32"),i=y(e,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${i.shape}`);const o={data:s,indices:r,segmentIds:i};return A.runKernel(Um,o)}const W1=N({sparseSegmentSum_:U1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G1(n,t,e,s,r,i,o,a){const l=y(n,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=y(t,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:e,nGramWidths:s,leftPad:r,rightPad:i,padWidth:o,preserveShortSequences:a},h={data:l,dataSplits:u},f=A.runKernel(Gm,h,c);return{nGrams:f[0],nGramsSplits:f[1]}}const V1=N({stringNGrams_:G1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q1(n,t,e=!0){const s=y(n,"input","stringSplit","string"),r=y(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const i={skipEmpty:e},o={input:s,delimiter:r},a=A.runKernel(Vm,o,i);return{indices:a[0],values:a[1],shape:a[2]}}const H1=N({stringSplit_:q1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j1(n,t){const e=y(n,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:e};return A.runKernel(qm,r,s)}const K1=N({stringToHashBucketFast_:j1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PN={fft:vh,ifft:Xo,rfft:kh,irfft:Zw},UN={hammingWindow:u0,hannWindow:Ah,frame:Nh,stft:d0},er={flipLeftRight:b0,grayscaleToRGB:w0,resizeNearestNeighbor:H0,resizeBilinear:V0,rotateWithOffset:k0,cropAndResize:m0,nonMaxSuppression:S0,nonMaxSuppressionAsync:M0,nonMaxSuppressionWithScore:L0,nonMaxSuppressionWithScoreAsync:O0,nonMaxSuppressionPadded:P0,nonMaxSuppressionPaddedAsync:W0,threshold:t1,transform:n1},J1={bandPart:r1,gramSchmidt:u1,qr:h1},WN={absoluteDifference:p1,computeWeightedLoss:an,cosineDistance:g1,hingeLoss:y1,huberLoss:v1,logLoss:x1,meanSquaredError:A1,sigmoidCrossEntropy:D1,softmaxCrossEntropy:M1},GN={sparseFillEmptyRows:L1,sparseReshape:O1,sparseSegmentMean:P1,sparseSegmentSum:W1},VN={stringNGrams:V1,stringSplit:H1,stringToHashBucketFast:K1};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ri extends mn{constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=A.registeredVariables[s],o=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:T(()=>ot(i).variable(o))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:T(()=>ot(i).variable(o))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,u=this.accumulatedUpdates[r].variable;T(()=>{const c=M(k(l,this.rho),k(wt(a),1-this.rho)),h=k(q(ie(M(u,this.epsilon)),ie(M(l,this.epsilon))),a),f=M(k(u,this.rho),k(wt(h),1-this.rho));l.assign(c),u.assign(f);const d=M(k(h,-this.learningRate),i);i.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(j(this.accumulatedGrads.map(t=>t.variable)),j(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}ri.className="Adadelta",_(ri);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ii extends mn{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=A.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:T(()=>Zs(i.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const a=this.accumulatedGrads[r].variable;T(()=>{const l=M(a,wt(o));a.assign(l);const u=M(k(q(o,ie(M(l,A.backend.epsilon()))),-this.learningRate),i);i.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&j(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}ii.className="Adagrad",_(ii);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oi extends mn{constructor(t,e,s,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],T(()=>{this.accBeta1=K(e).variable(),this.accBeta2=K(s).variable()}),r==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);T(()=>{const s=U(1,this.accBeta1),r=U(1,this.accBeta2);e.forEach((i,o)=>{const a=A.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:T(()=>ot(a).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${i}/v`,variable:T(()=>ot(a).variable(l))});const u=Array.isArray(t)?t[o].tensor:t[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,f=M(k(c,this.beta1),k(u,1-this.beta1)),d=M(k(h,this.beta2),k(wt(u),1-this.beta2)),p=q(f,s),m=q(d,r);c.assign(f),h.assign(d);const b=M(k(q(p,M(ie(m),this.epsilon)),-this.learningRate),a);a.assign(b)}),this.accBeta1.assign(k(this.accBeta1,this.beta1)),this.accBeta2.assign(k(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&j(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&j(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),T(()=>{this.accBeta1.assign(tr(this.beta1,this.iterations_+1)),this.accBeta2.assign(tr(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}oi.className="Adam",_(oi);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ai extends mn{constructor(t,e,s,r=null,i=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],T(()=>{this.iteration=K(0).variable(),this.accBeta1=K(e).variable()}),r==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);T(()=>{const s=U(1,this.accBeta1),r=q(-this.learningRate,M(k(this.iteration,this.decay),1));e.forEach((i,o)=>{const a=A.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:ot(a).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${i}/v`,variable:ot(a).variable(l)});const u=Array.isArray(t)?t[o].tensor:t[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,f=M(k(c,this.beta1),k(u,1-this.beta1)),d=k(h,this.beta2),p=Jt(u),m=Jn(d,p);c.assign(f),h.assign(m);const b=M(k(q(r,s),q(f,M(m,this.epsilon))),a);a.assign(b)}),this.iteration.assign(M(this.iteration,1)),this.accBeta1.assign(k(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&j(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&j(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}ai.className="Adamax",_(ai);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nr extends mn{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const o=A.registeredVariables[s];T(()=>{const a=M(k(this.c,i),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Ke(K(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}nr.className="SGD",_(nr);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class li extends nr{constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=K(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=A.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:T(()=>ot(i).variable(!1))});const o=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[s];a!=null&&T(()=>{let l;const u=M(k(this.m,o),a);this.useNesterov?l=M(k(this.c,M(a,k(u,this.m))),i):l=M(k(this.c,u),i),o.assign(u),i.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&j(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}li.className="Momentum",_(li);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ui extends mn{constructor(t,e=.9,s=0,r=null,i=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r==null&&(this.epsilon=A.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=A.registeredVariables[s],o=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:T(()=>ot(i).variable(o))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:T(()=>ot(i).variable(o))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:T(()=>ot(i).variable(o))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,u=this.accumulatedMoments[r].variable;T(()=>{const c=M(k(l,this.decay),k(wt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,f=M(k(h,this.decay),k(a,1-this.decay)),d=q(k(a,this.learningRate),ie(U(c,M(wt(f),this.epsilon)))),p=M(k(u,this.momentum),d);l.assign(c),h.assign(f),u.assign(p);const m=U(i,p);i.assign(m)}else{const h=M(k(l,this.decay),k(wt(a),1-this.decay)),f=M(k(u,this.momentum),q(k(a,this.learningRate),ie(M(h,this.epsilon))));l.assign(h),u.assign(f);const d=U(i,f);i.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&j(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&j(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&j(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}ui.className="RMSProp",_(ui);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yn{static sgd(t){return new nr(t)}static momentum(t,e,s=!1){return new li(t,e,s)}static rmsprop(t,e=.9,s=0,r=null,i=!1){return new ui(t,e,s,r,i)}static adam(t=.001,e=.9,s=.999,r=null){return new oi(t,e,s,r)}static adadelta(t=.001,e=.95,s=null){return new ri(t,e,s)}static adamax(t=.002,e=.9,s=.999,r=null,i=0){return new ai(t,e,s,r,i)}static adagrad(t,e=.1){return new ii(t,e)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ds={sgd:Yn.sgd,momentum:Yn.momentum,adadelta:Yn.adadelta,adagrad:Yn.adagrad,rmsprop:Yn.rmsprop,adamax:Yn.adamax,adam:Yn.adam};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z1=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function Y1(){return new Promise(n=>Z1(()=>n()))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var X1=J(49208);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function Q1(n,t){return ci(n,t)}function ci(n,t,e=new Map,s=new Set){if(n==null)return null;if(typeof Blob=="function"&&n instanceof Blob)return n.slice();if(s.has(n))throw new Error("Circular references are not supported.");if(e.has(n))return e.get(n);const r=t(n);if(r.recurse&&r.value!==null)throw new Error("A deep map function may not return both a value and recurse=true.");if(r.recurse)if(Cs(n)){const i=Array.isArray(n)?[]:{};s.add(n);for(const o in n){const a=n[o],l=ci(a,t,e,s);i[o]=l}return s.delete(n),n.__proto__&&(i.__proto__=n.__proto__),i}else throw new Error(`Can't recurse into non-iterable type: ${n}`);else return e.set(n,r.value),r.value}function tv(n,t=Mh){return Fh(n,t)}function Fh(n,t,e=new Set){const s=n[0];if(e.has(s))throw new Error("Circular references are not supported.");const r=t(n);if(r.recurse&&r.value!==null)throw new Error("A deep zip function may not return both a value and recurse=true.");if(r.recurse)if(Cs(s)){const i=Array.isArray(s)?[]:{};e.add(s);for(const o in s){const a=n.map(u=>u[o]),l=Fh(a,t,e);i[o]=l}return e.delete(s),i}else throw new Error(`Can't recurse into non-iterable type: ${s}`);else return r.value}function Mh(n){return n===null?null:Cs(n[0])?{value:null,recurse:!0}:{value:n,recurse:!1}}async function zh(n,t){const e=new Map;ci(n,t,e);for(const r of Array.from(e.keys())){const i=e.get(r);if(ro(i)){const o=await i;e.set(r,o)}}return ci(n,t,e)}function Cs(n){let t=!1;if(Q().get("IS_BROWSER"))t=n instanceof TextDecoder;else{const{StringDecoder:e}=J(71410);t=n instanceof e}return n!=null&&!ArrayBuffer.isView(n)&&(Array.isArray(n)||typeof n=="object"&&!(n instanceof yt)&&!(n instanceof Promise)&&!t)}function ev(n){return n==null||nv(n)||Array.isArray(n)||typeof n=="object"&&n instanceof yt||lt(n)}function nv(n){return n===null||typeof n!="object"&&typeof n!="function"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function sv(n){return Q1(n,rv)}function rv(n){return n instanceof yt?{value:n.clone(),recurse:!1}:Cs(n)?{value:null,recurse:!0}:{value:n,recurse:!1}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Lh{constructor(t){if(this.capacity=t,this.begin=0,this.end=0,t==null)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(t<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(t),this.doubledCapacity=2*t}wrap(t){for(;t<0;)t+=this.doubledCapacity;return t%this.doubledCapacity}get(t){if(t<0)throw new RangeError("Can't get item at a negative index.");return this.data[t%this.capacity]}set(t,e){if(t<0)throw new RangeError("Can't set item at a negative index.");this.data[t%this.capacity]=e}length(){let t=this.end-this.begin;return t<0&&(t=this.doubledCapacity+t),t}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,t),this.end=this.wrap(this.end+1)}pushAll(t){for(const e of t)this.push(e)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const t=this.get(this.end);return this.set(this.end,void 0),t}unshift(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,t)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const t=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),t}shuffleExcise(t){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const e=this.wrap(this.begin+t),s=this.get(e);return this.set(e,this.pop()),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class hi extends Lh{constructor(){super(hi.INITIAL_CAPACITY)}isFull(){return!1}push(t){super.isFull()&&this.expand(),super.push(t)}unshift(t){super.isFull()&&this.expand(),super.unshift(t)}expand(){const t=this.capacity*2,e=new Array(t),s=this.length();for(let r=0;r<s;r++)e[r]=this.get(this.wrap(this.begin+r));this.data=e,this.capacity=t,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=s}}hi.INITIAL_CAPACITY=32;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function Rh(n){return new ov(n)}function qN(n){let t=n;return ia(()=>({value:t++,done:!1}))}function ia(n){return new av(n)}function Oh(n,t){return new Ph(n,t)}function HN(n,t,e){return Oh(ia(n).take(t),e)}function iv(n,t=kn.FAIL){return new gv(n,t)}class jt{async toArray(){const t=[];let e=await this.next();for(;!e.done;)t.push(e.value),e=await this.next();return t}async toArrayForTest(){const t=this.prefetch(100),e=[];let s=await t.next();for(;!s.done;)e.push(s.value),s=await t.next();return e}async resolveFully(){let t=await this.next();for(;!t.done;)t=await this.next()}async resolveWhile(t){let e=await this.next(),s=t(e.value);for(;!e.done&&s;)e=await this.next(),s=t(e.value)}handleErrors(t){return new pv(this,t)}filter(t){return new fv(this,t)}map(t){return new dv(this,t)}mapAsync(t){return new Bh(this,t)}serialMapAsync(t){return new Bh(this,t).serial()}flatmap(t){return new mv(this,t)}async forEachAsync(t){return this.map(t).resolveFully()}async serialForEach(t){return this.serialMapAsync(t).resolveWhile(e=>e===!0)}rowMajorBatch(t,e=!0){return new hv(this,t,e)}columnMajorBatch(t,e=!0,s=Mh){return this.rowMajorBatch(t,e).map(i=>tv(i,s))}concatenate(t,e){return new Ph(Rh([this,t]),e)}take(t){return t<0||t==null?this:new cv(this,t)}skip(t){return t<0||t==null?this:new uv(this,t)}prefetch(t){return new Uh(this,t)}shuffle(t,e){return new bv(this,t,e)}serial(){return new lv(this)}}class ov extends jt{constructor(t){super(),this.items=t,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const t=this.items[this.trav];return this.trav++,{value:sv(t),done:!1}}}class av extends jt{constructor(t){super(),this.nextFn=t}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(t){throw t.message=`Error thrown while iterating through a dataset: ${t.message}`,t}}}class lv extends jt{constructor(t){super(),this.upstream=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class uv extends jt{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const t=await this.upstream.next();if(t.done)return t;j(t.value)}return this.upstream.next()}}class cv extends jt{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class hv extends jt{constructor(t,e,s=!0){super(),this.upstream=t,this.batchSize=e,this.enableSmallLastBatch=s,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const t=[];for(;t.length<this.batchSize;){const e=await this.upstream.next();if(e.done)return this.enableSmallLastBatch&&t.length>0?{value:t,done:!1}:{value:null,done:!0};t.push(e.value)}return{value:t,done:!1}}}class fv extends jt{constructor(t,e){super(),this.upstream=t,this.predicate=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const t=await this.upstream.next();if(t.done||this.predicate(t.value))return t;j(t.value)}}}class dv extends jt{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Map`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=fn(t.value),s=this.transform(t.value),r=fn(s);for(const i of e)xo(i,r)||i.dispose();return{value:s,done:!1}}}class pv extends jt{constructor(t,e){super(),this.upstream=t,this.handler=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(t){if(!this.handler(t))return{value:null,done:!0}}}}class Bh extends jt{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=fn(t.value),s=await this.transform(t.value),r=fn(s);for(const i of e)xo(i,r)||i.dispose();return{value:s,done:!1}}}class oa extends jt{constructor(){super(),this.outputQueue=new hi,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class mv extends oa{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const t=await this.upstream.next();if(t.done)return!1;const e=fn(t.value),s=this.transform(t.value),r=fn(s);this.outputQueue.pushAll(s);for(const i of e)xo(i,r)||i.dispose();return!0}}class Ph extends jt{constructor(t,e){super(),this.baseErrorHandler=e,this.lastRead=null,this.iterator=null,this.moreIterators=t}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(t){if(await t,this.iterator==null){const s=await this.moreIterators.next();if(s.done)return{value:null,done:!0};this.iterator=s.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const e=await this.iterator.next();return e.done?(this.iterator=null,this.readFromChain(t)):e}}var kn;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(kn||(kn={}));class gv extends jt{constructor(t,e=kn.FAIL){super(),this.iterators=t,this.mismatchMode=e,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(t){await t;let e=0,s=0;function r(o){return o instanceof jt?{value:o.next().then(l=>(e++,l.done&&s++,l.value)),recurse:!1}:{value:null,recurse:!0}}const i=await zh(this.iterators,r);if(e===s)return{value:null,done:!0};if(s>0)switch(this.mismatchMode){case kn.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case kn.SHORTEST:return{value:null,done:!0};case kn.LONGEST:default:}return this.count++,{value:i,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class Uh extends jt{constructor(t,e){super(),this.upstream=t,this.bufferSize=e,this.buffer=new Lh(e)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){const t=this.upstream.next();this.buffer.push(t)}}next(){return this.refill(),this.buffer.shift()}}class bv extends Uh{constructor(t,e,s){super(t,e),this.upstream=t,this.windowSize=e,this.upstreamExhausted=!1,this.random=Yr.alea(s||xe().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(t){return Math.floor(this.random()*t)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const t=this.chooseIndex(),e=await this.buffer.shuffleExcise(t);if(e.done)this.upstreamExhausted=!0;else return this.refill(),e}return{value:null,done:!0}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class sr{constructor(){this.size=null}batch(t,e=!0){const s=this;g(t>0,()=>`batchSize needs to be positive, but it is
      ${t}`);let r;return this.size===1/0||this.size==null?r=this.size:e?r=Math.ceil(this.size/t):r=Math.floor(this.size/t),Te(async()=>(await s.iterator()).columnMajorBatch(t,e,yv),r)}concatenate(t){const e=this;let s;return this.size===1/0||t.size===1/0?s=1/0:this.size!=null&&t.size!=null?s=this.size+t.size:s=null,Te(async()=>(await e.iterator()).concatenate(await t.iterator()),s)}filter(t){const e=this;let s;return this.size===1/0?s=1/0:s=null,Te(async()=>(await e.iterator()).filter(r=>T(()=>t(r))),s)}async forEachAsync(t){return(await this.iterator()).forEachAsync(t)}map(t){const e=this;return Te(async()=>(await e.iterator()).map(s=>T(()=>t(s))),this.size)}mapAsync(t){const e=this;return Te(async()=>(await e.iterator()).mapAsync(t),this.size)}prefetch(t){if(t==null)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const e=this;return Te(async()=>(await e.iterator()).prefetch(t),this.size)}repeat(t){const e=this;let s;return this.size!=null&&t>0?s=this.size*t:t===0?s=0:this.size!=null&&(t===void 0||t<0)?s=1/0:s=null,Te(async()=>{const r=ia(async()=>({value:await e.iterator(),done:!1}));return Oh(r.take(t))},s)}skip(t){const e=this;let s;return this.size!=null&&t>=0&&this.size>=t?s=this.size-t:this.size!=null&&(this.size<t||t===void 0||t<0)?s=0:s=null,Te(async()=>(await e.iterator()).skip(t),s)}shuffle(t,e,s=!0){if(t==null||t<0)throw this.size==null?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const r=this,i=Yr.alea(e||xe().toString());return Te(async()=>{let o=i.int32();return s&&(o+=i.int32()),(await r.iterator()).shuffle(t,o.toString())},this.size)}take(t){const e=this;let s;return this.size!=null&&this.size>t?s=t:this.size!=null&&this.size<=t?s=this.size:s=null,Te(async()=>(await e.iterator()).take(t),s)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}sr.MAX_BUFFER_SIZE=1e4;function Te(n,t=null){return new class extends sr{constructor(){super(...arguments),this.size=t}async iterator(){return n()}}}function fi(n){return Te(async()=>Rh(n),n.length)}function Wh(n){if(!Cs(n))throw new Error("The argument to zip() must be an object or array.");let t;if(Array.isArray(n))for(let e=0;e<n.length;e++)t=t==null?n[e].size:Math.min(t,n[e].size);else if(n instanceof Object)for(const e in n)t=t==null?n[e].size:Math.min(t,n[e].size);return Te(async()=>{const e=await zh(n,s=>{if(s instanceof sr)return{value:s.iterator(),recurse:!1};if(Cs(s))return{value:null,recurse:!0};throw new Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")});return iv(e,kn.SHORTEST)},t)}function yv(n){if(n===null)return null;const t=n[0];return ev(t)?{value:wv(n),recurse:!1}:{value:null,recurse:!0}}function wv(n){if(n.length===0)throw new Error("Can't make a batch of zero elements.");return n[0]instanceof yt?vn(n):Bn(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class vv extends sr{constructor(t){super(),this.input=t}async iterator(){return(await this.input.iterator()).decodeUTF8().split(`
`).map(r=>(r.endsWith("\r")&&(r=r.slice(0,-1)),r))}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */const di='"',rr=Symbol("out"),Gh=Symbol("field"),pi=Symbol("quote"),aa=Symbol("quoteafterquote"),Vh=Symbol("quoteinquote");class jN extends sr{constructor(t,e){super(),this.input=t,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new vv(t),e||(e={}),this.hasHeader=e.hasHeader!==!1,this.fullColumnNames=e.columnNames,this.columnConfigs=e.columnConfigs,this.configuredColumnsOnly=e.configuredColumnsOnly,e.delimWhitespace?(g(e.delimiter==null,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=e.delimiter?e.delimiter:","}async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const t=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!t)throw new Error("Column names must be provided if there is no header line.");this.fullColumnNames&&t&&g(t.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+t.length.toString()+")."),this.fullColumnNames||(this.fullColumnNames=t);const e=this.fullColumnNames.reduce((r,i)=>(r[i]=r[i]+1||1,r),{}),s=Object.keys(e).filter(r=>e[r]>1);if(g(s.length===0,()=>"Duplicate column names found: "+s.toString()),this.columnConfigs){for(const r of Object.keys(this.columnConfigs))if(this.fullColumnNames.indexOf(r)===-1)throw new Error('The key "'+r+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const e=await(await this.base.iterator()).next();if(e.done)throw new Error("No data was found for CSV parsing.");const s=e.value;return this.parseRow(s,!1)}else return null}async iterator(){this.columnNamesValidated||await this.setColumnNames();let t=await this.base.iterator();return this.hasHeader&&(t=t.skip(1)),t.map(e=>this.makeDataElement(e))}makeDataElement(t){const e=this.parseRow(t),s={},r={};for(let i=0;i<this.fullColumnNames.length;i++){const o=this.fullColumnNames[i],a=this.columnConfigs?this.columnConfigs[o]:null;if(!(this.configuredColumnsOnly&&!a)){const l=e[i];let u=null;if(l==="")if(a&&a.default!==void 0)u=a.default;else{if(a&&(a.required||a.isLabel))throw new Error(`Required column ${o} is empty in this line: ${t}`);u=void 0}else{const c=Number(l);if(isNaN(c))a&&a.dtype==="bool"?u=this.getBoolean(l):u=l;else if(!a||!a.dtype)u=c;else switch(a.dtype){case"float32":u=c;break;case"int32":u=Math.floor(c);break;case"bool":u=this.getBoolean(l);break;default:u=c}}a&&a.isLabel?r[o]=u:s[o]=u}}return Object.keys(r).length===0?s:{xs:s,ys:r}}getBoolean(t){return t==="1"||t.toLowerCase()==="true"?1:0}parseRow(t,e=!0){const s=[];let r=0;const i=t.length;let o=rr;for(let a=0;a<i;a++)switch(o){case rr:switch(t.charAt(a)){case di:r=a+1,o=pi;break;case this.delimiter:if(r=a+1,this.delimiter===" "&&this.delimWhitespace)break;s.push(""),o=rr;break;default:o=Gh,r=a;break}break;case Gh:t.charAt(a)===this.delimiter&&(s.push(t.substring(r,a)),o=rr,r=a+1);break;case pi:t.charAt(a)===di&&(o=aa);break;case aa:switch(t.charAt(a)){case this.delimiter:s.push(t.substring(r,a-1)),o=rr,r=a+1;break;case di:o=pi;break;default:o=Vh;break}break;case Vh:t.charAt(a)===di&&(o=pi);break;default:}if(o===aa?s.push(t.substring(r,i-1)):s.push(t.substring(r)),e&&s.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${s}`);return s}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class qh extends jt{constructor(t){super(),this.microphoneConfig=t,this.isClosed=!1,this.fftSize=t.fftSize||1024;const e=Math.log2(this.fftSize);if(this.fftSize<0||e<4||e>14||!Number.isInteger(e))throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=t.numFramesPerSpectrogram||43,this.sampleRateHz=t.sampleRateHz,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.audioTrackConstraints=t.audioTrackConstraints,this.smoothingTimeConstant=t.smoothingTimeConstant||0,this.includeSpectrogram=t.includeSpectrogram!==!1,this.includeWaveform=t.includeWaveform===!0,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(t={}){if(!Q().get("IS_BROWSER"))throw new Error("microphone API is only supported in browser environment.");const e=new qh(t);return await e.start(),e}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:this.audioTrackConstraints==null?!0:this.audioTrackConstraints,video:!1})}catch(s){throw new Error(`Error thrown while initializing video stream: ${s.message}`)}if(!this.stream)throw new Error("Could not obtain audio from microphone.");const t=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new t,!this.sampleRateHz)this.sampleRateHz=this.audioContext.sampleRate;else if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);const e=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize*2,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,e.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let t,e;const s=await this.getAudioData();if(this.includeSpectrogram){const r=this.flattenQueue(s.freqDataQueue);t=this.getTensorFromAudioDataArray(r,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const r=this.flattenQueue(s.timeDataQueue);e=this.getTensorFromAudioDataArray(r,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:t,waveform:e},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const t=[],e=[];let s=0;return new Promise(r=>{const i=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&r({freqDataQueue:t,timeDataQueue:e}),t.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),e.push(this.timeData.slice())),++s===this.numFrames&&(clearInterval(i),r({freqDataQueue:t,timeDataQueue:e}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(t){const e=t[0].length,s=new Float32Array(t.length*e);return t.forEach((r,i)=>s.set(r,i*e)),s}getTensorFromAudioDataArray(t,e){const s=new Float32Array(At(e));return s.set(t,s.length-t.length),Bn(s,e)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Hh extends jt{constructor(t,e){if(super(),this.webcamVideoElement=t,this.webcamConfig=e,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=Ht([0],"int32"),this.webcamConfig.centerCrop){const s=this.webcamConfig.resizeWidth*1/this.webcamVideoElement.width,r=this.webcamConfig.resizeHeight*1/this.webcamVideoElement.height,i=(1-s)/2,o=(1-r)/2,a=i+s,l=r+o;this.cropBox=Zn([o,i,l,a],[1,4])}else this.cropBox=Zn([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(t,e={}){if(!Q().get("IS_BROWSER"))throw new Error("tf.data.webcam is only supported in browser environment.");if(!t){if(t=document.createElement("video"),!e.resizeWidth||!e.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");t.width=e.resizeWidth,t.height=e.resizeHeight}const s=new Hh(t,e);return await s.start(),s}async start(){this.webcamConfig.facingMode&&g(this.webcamConfig.facingMode==="user"||this.webcamConfig.facingMode==="environment",()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(t){throw t.message=`Error thrown while initializing video stream: ${t.message}`,t}if(!this.stream)throw new Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(t){console.log(t),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(t=>{this.webcamVideoElement.onloadedmetadata=()=>{t()}})}async next(){if(this.isClosed)return{value:null,done:!0};let t;try{t=vb(this.webcamVideoElement)}catch(e){throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(e)}`)}if(this.resize)try{return{value:this.cropAndResizeFrame(t),done:!1}}catch(e){throw new Error(`Error thrown cropping the video: ${e.message}`)}finally{t.dispose()}else return{value:t,done:!1}}needToResize(){return!!(this.webcamConfig.resizeWidth&&this.webcamConfig.resizeHeight&&(this.webcamVideoElement.width!==this.webcamConfig.resizeWidth||this.webcamVideoElement.height!==this.webcamConfig.resizeHeight))}cropAndResizeFrame(t){return T(()=>{const e=Ie(P(t,"float32"),0);let s;s=er.cropAndResize(e,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear");const r=s.shape;return D(s,r.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(e=>e.stop());try{this.webcamVideoElement.srcObject=null}catch(e){console.log(e),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error("Can not convert infinite video stream to array.")}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class jh{}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Kh extends jt{split(t){return new kv(this,t)}}class kv extends Kh{constructor(t,e){super(),this.upstream=t,this.impl=new xv(t,e)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class xv extends oa{constructor(t,e){super(),this.upstream=t,this.separator=e,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const t=await this.upstream.next();if(t.done)return this.carryover===""?!1:(this.outputQueue.push(this.carryover),this.carryover="",!0);const e=t.value.split(this.separator);e[0]=this.carryover+e[0];for(const s of e.slice(0,-1))this.outputQueue.push(s);return this.carryover=e[e.length-1],!0}}var Sv=J(1048).Buffer;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Ev extends jt{decodeUTF8(){return new Iv(this)}}class Iv extends Kh{constructor(t){super(),this.upstream=t,this.impl=new Av(t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class Av extends oa{constructor(t){if(super(),this.upstream=t,Q().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{const{StringDecoder:e}=J(99201);this.decoder=new e("utf8")}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){const t=await this.upstream.next();let e;if(t.done)return!1;e=t.value;let s;return Q().get("IS_BROWSER")?s=this.decoder.decode(e,{stream:!0}):s=this.decoder.write(Sv.from(e.buffer)),this.outputQueue.push(s),!0}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Jh extends Ev{constructor(t,e={}){super(),this.file=t,this.options=e,g(t instanceof Uint8Array||(Q().get("IS_BROWSER")?t instanceof File||t instanceof Blob:!1),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=e.offset||0,this.chunkSize=e.chunkSize||1024*1024}summary(){return`FileChunks ${this.file}`}async next(){return this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size)?{value:null,done:!0}:{value:await new Promise((e,s)=>{const r=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)e(new Uint8Array(this.file.slice(this.offset,r)));else{const i=new FileReader;i.onload=a=>{let l=i.result;if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),!(l instanceof Uint8Array))return s(new TypeError("FileReader returned unknown type."));e(l)},i.onabort=a=>s(new Error("Aborted")),i.onerror=a=>s(new Error(a.type));const o=this.file.slice(this.offset,r);i.readAsArrayBuffer(o)}this.offset=r}),done:!1}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */async function Nv(n,t={},e){let s,r;typeof n=="string"?s=n:(s=n.url,r=Tv(n));const i=await(e||rg)(s,r);if(i.ok){const o=new Uint8Array(await i.arrayBuffer());return new Jh(o,t)}else throw new Error(i.statusText)}const Tv=n=>({method:n.method,headers:n.headers,body:n.body,mode:n.mode,credentials:n.credentials,cache:n.cache,redirect:n.redirect,referrer:n.referrer,integrity:n.integrity});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function Zh(n){return typeof n=="string"&&n.slice(0,7)==="file://"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class Dv extends jh{constructor(t,e={}){super(),this.input=t,this.options=e}async iterator(){if(Zh(this.input)&&Q().get("IS_NODE")){const t=J(86579);this.input=t.readFileSync(this.input.slice(7))}return new Jh(this.input,this.options)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */class KN extends jh{constructor(t,e={}){super(),this.url=t,this.fileOptions=e}async iterator(){return Zh(this.url)?new Dv(this.url,this.fileOptions).iterator():Nv(this.url,this.fileOptions)}}var Yh,Cv,Xh,$v,_v,Fv;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */function JN(n,t={}){return new Cv(new Fv(n),t)}function ZN(n){const t=Xh(n);return Yh(async()=>t)}function YN(n){return Yh(async()=>{const t=await n();return Xh(()=>t.next())})}async function XN(n,t){return _v.create(n,t)}async function QN(n){return $v.create(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ye extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Ye.prototype)}}class De extends Error{constructor(t){super(t),Object.setPrototypeOf(this,De.prototype)}}class S extends Error{constructor(t){super(t),Object.setPrototypeOf(this,S.prototype)}}class Y extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Y.prototype)}}class la extends Error{constructor(t){super(t),Object.setPrototypeOf(this,la.prototype)}}class Qh extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Qh.prototype)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class tf{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}var ef;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Xn(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function ye(n,t){if(!n)throw new la(t)}function nf(n,t){let e=0;for(const s of n)s===t&&e++;return e}function he(n){return n.length===1?n[0]:n}function mt(n){return Array.isArray(n)?n:[n]}function tT(n){const t=mt(n);let e="";for(const s of t){if(s.id==null)throw new ef(`Object ${s} passed to objectListUid without an id`);e!==""&&(e=e+", "),e=`${e}${Math.abs(s.id)}`}return e}function ln(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function Qn(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let Ce={};function ua(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function ca(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>ca(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:ca(s))}}}function ir(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const i=n;let o;if(i in e)o=e[i];else if(i in Ce)o=Ce[i];else if(o=t[i],o==null)throw new S(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return o}else{const i=n;if(i.className==null||i.config==null)throw new S(`${s}: Improper config format: ${JSON.stringify(i)}.
'className' and 'config' must set.`);const o=i.className;let a,l;if(o in e?[a,l]=e[o]:o in Ce?[a,l]=Ce.className:o in t&&([a,l]=t[o]),a==null)throw new S(`Unknown ${s}: ${o}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const u={};for(const d of Object.keys(Ce))u[d]=Ce[d];for(const d of Object.keys(e))u[d]=e[d];const c=i.config;c.customObjects=u;const h=Object.assign({},Ce);for(const d of Object.keys(e))Ce[d]=e[d];ca(i.config);const f=l(a,i.config,e,r);return Ce=Object.assign({},h),f}else{const u=Object.assign({},Ce);for(const h of Object.keys(e))Ce[h]=e[h];const c=new a(i.config);return Ce=Object.assign({},u),c}}}function Mv(n,t){return n<t?-1:n>t?1:0}function mi(n,t){return-1*Mv(n,t)}function eT(n){if(n==="float32")return"float32";throw new ef(`Invalid dtype: ${n}`)}function nT(n,t){if(n==null||t==null)return n===t;if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function xn(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function zv(n){if(n==null)throw new S(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function ts(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new S(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function ha(n,t,e=0,s=1/0){return ye(e>=0),ye(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function Kt(n,t){Array.isArray(n)?(g(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>Kt(e,`element ${s+1} of ${t}`))):g(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${sf(n)}.`)}function sf(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>sf(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function Lv(n,t,e){let s=e!=null?e():xe(),r;return(...o)=>{const a=e!=null?e():xe();return a-s<t||(s=a,r=n(...o)),r}}function rf(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}function sT(...n){ye(n.length>0,"arrayOfValues is empty");for(const t of n)ye(Array.isArray(t),"one of the values is not an array"),ye(t.length>0,"one of the values is empty");return n.reduce((t,e)=>t.length===0?e.map(s=>[s]):e.map(s=>t.map(r=>[...r,s])).reduce((s,r)=>s.concat(r),[]),[])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let Rv=0;function of(){return Rv++}const gi={};function bi(n=""){return n in gi||(gi[n]=0),gi[n]+=1,n+gi[n].toString()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Ov=["channelsFirst","channelsLast"],Bv=["nearest","bilinear"],Pv=["valid","same","causal"],Uv=["max","avg"],Wv=["sum","mul","concat","ave"],rT=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const $s=new Map;function Ft(n){ts(Ov,"DataFormat",n)}function Gv(n){ts(Bv,"InterpolationFormat",n)}function we(n){ts(Pv,"PaddingMode",n)}function af(n){ts(Uv,"PoolMode",n)}const or=[],lf="/";function es(n,t){or.push(n);try{const e=t();return or.pop(),e}catch(e){throw or.pop(),e}}function Vv(){return or.length===0?"":or.join(lf)+lf}function uf(n){if(!hf(n))throw new Error("Not a valid tensor name: '"+n+"'");return Vv()+n}function cf(n){if(!hf(n))throw new Error("Not a valid tensor name: '"+n+"'");$s.has(n)||$s.set(n,0);const t=$s.get(n);if($s.set(n,$s.get(n)+1),t>0){const e=`${n}_${t}`;return $s.set(e,1),e}else return n}const qv=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function hf(n){return!!n.match(qv)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Hv(n){return n===parseInt(n.toString(),10)}function Sn(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function _s(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function En(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function jv(n){let t=0;for(let e=0;e<n.length;e++){const s=n[e];t+=s}return t}function Kv(n){return jv(n)/n.length}function iT(n){const t=Kv(n),e=n.map(r=>r-t);let s=0;for(let r=0;r<e.length;r++){const i=e[r];s+=i*i}return s/n.length}function oT(n){const t=n.slice().sort((r,i)=>r-i),e=Math.floor((t.length-1)/2),s=Math.ceil((t.length-1)/2);return e===s?t[e]:(t[e]+t[s])/2}function Pe(n,t){if(t<n)throw new S(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let yi;function Ot(){return yi==null&&(yi=zo().epsilon()),yi}function aT(n){yi=n}function Ue(){return"channelsLast"}var In,fa,ff,Jv,df,Zv,Yv;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let pf="webgl";function lT(n){In.setBackend(n),pf=n}function uT(){return pf}function cT(){return!1}function hT(n){const t=n.shape;return t.length>0?t.reduce((e,s)=>e*s):1}function ar(n,t){return P(n,t)}function lr(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),D(n,e)}function Xv(n,t){return T(()=>{if(n.shape.length!==2)throw new S(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=lr(n,1);return ma(e,[1,t,1])})}function Qv(n){const t=[Sn(n.shape)];return D(n,t)}function tk(n){if(n.rank<=1)throw new S(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Sn(n.shape,1)];return D(n,t)}function ns(n,t,e){return T(()=>{switch(n.rank){case 1:return jo(n,t,e);case 2:return gh(n,[t,0],[e,n.shape[1]]);case 3:return Ko(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return ti(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return ct(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return ct(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new S(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function da(n,t,e){return T(()=>{switch(n.rank){case 1:return jo(n,t,e);case 2:return gh(n,[0,t],[n.shape[0],e]);case 3:return Ko(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return ti(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new S(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function wi(n,t,e,s){return T(()=>{switch(n.rank){case 1:return jo(n,t,e);case 2:switch(s){case 1:return ns(n,t,e);case 2:return da(n,t,e);default:throw new S(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return ns(n,t,e);case 2:return Ko(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return da(n,t,e);default:throw new S(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return ns(n,t,e);case 2:return ti(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return ti(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return da(n,t,e);default:throw new S(`The axis is not within the rank of the tensor ${s}`)}default:throw new S(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function pa(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),re(n,t)}function mf(n,t){switch(n.rank){case 1:return Xb([n,t]);case 2:return ty([n,t],0);case 3:return ny([n,t],0);case 4:return ry([n,t],0);default:throw new S(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function ma(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new S(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Je(n,t)}function vi(n,t=0,e=1,s,r){return fw(n,t,e,s,r)}function Xe(n,t,e,s){if(n.rank<2||t.rank<2)throw new Y(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],i=t.shape.slice(-2)[0];if(r!==i)throw new Y(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Eh({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?ga(n.rank,s,Ue()):null,activation:e});{const r=n.shape.slice(),i=r.pop();n=D(n,[-1,i]);const o=t.shape.slice(),a=o.pop(),l=o.pop(),u=[...o,a],c=Array.from({length:t.rank},(p,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=D(nt(t,c),[l,-1]);const h=[...r,...u];return D(Eh({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?ga(n.rank,s,Ue()):null,activation:e}),h)}}function fT(n){return fa(()=>{const t=ff(n),e=Jv(n);return df(In.equal(n,t),t,df(In.greater(n,ff(n)),e,In.mul(-1,e)))})}function dT(n,t){return fa(()=>{if(n.rank!==1)throw new Error("Only 1D one-hot tensors are supported in the deeplearn backend, at present.");return n=In.cast(n,"int32"),In.cast(In.oneHot(n,t),"float32")})}function gf(n,t,e){return T(()=>(Array.isArray(t)?t=Ht(t,"int32"):t=P(t,"int32"),xs(n,t,e)))}function ur(n){return k(n,n)}function pT(n,t){return fa(()=>{if(typeof t=="number"&&(t=Zv(Math.round(t),"int32")),t.dtype!=="int32")throw new Yv(`Non-int32 dtype (${t.dtype}) is not supported by pow() yet`);return In.pow(n,t)})}function ga(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new S(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?D(t,[1,s[0],1,1,1]):D(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?D(t,[1,1,1,1,s[0]]):D(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?D(t,[1,s[0],1,1]):D(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?D(t,[1,1,1,s[0]]):D(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?D(t,[1,s[0],1]):D(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?D(t,[1,1,s[0]]):D(t,[1].concat(s))}else if(n<3)return t;throw new S(`Unsupported input rank by biasAdd: ${t.rank}`)}function We(n,t,e){return T(()=>(e==null&&(e=Ue()),Ft(e),M(n,ga(n.rank,t,e))))}function ek(n,t=1){if(t!==1)throw new Y(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Uo(n)}function nk(n){return T(()=>q(n,M(Jt(n),1)))}function bf(n,t,e,s){return T(()=>qw(n,t,e,s))}function sk(n){return T(()=>{const t=M(.5,k(.2,n));return Ee(t,0,1)})}function cr(n,t,e=!1){return e?n():t()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const rk=["fanIn","fanOut","fanAvg"],ik=["normal","uniform","truncatedNormal"],mT=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ok(n){ts(rk,"FanMode",n)}function ak(n){ts(ik,"Distribution",n)}class $e extends bs{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class yf extends $e{apply(t,e){return qt(t,e)}}yf.className="Zeros",_(yf);class ba extends $e{apply(t,e){return yn(t,e)}}ba.className="Ones",_(ba);class wf extends $e{constructor(t){if(super(),typeof t!="object")throw new S(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new S(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return T(()=>k(K(this.value),yn(t,e)))}getConfig(){return{value:this.value}}}wf.className="Constant",_(wf);class vf extends $e{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Xr(t,this.minval,this.maxval,e)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}vf.className="RandomUniform",_(vf);class kf extends $e{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Y(`randomNormal does not support dType ${e}.`);return vi(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}kf.className="RandomNormal",_(kf);class xf extends $e{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Y(`truncatedNormal does not support dType ${e}.`);return wh(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}xf.className="TruncatedNormal",_(xf);class Sf extends $e{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return T(()=>{if(t.length!==2||t[0]!==t[1])throw new S("Identity matrix initializer can only be used for 2D square matrices.");return k(this.gain,lh(t[0]))})}getConfig(){return{gain:this.gain}}}Sf.className="Identity",_(Sf);function lk(n,t="channelsLast"){let e,s;if(Ft(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=Sn(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=Sn(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=Sn(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class ge extends $e{constructor(t){if(super(),t.scale<0)throw new S(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,ok(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,ak(this.distribution),this.seed=t.seed}apply(t,e){const s=lk(t),r=s[0],i=s[1];let o=this.scale;if(this.mode==="fanIn"?o/=Math.max(1,r):this.mode==="fanOut"?o/=Math.max(1,i):o/=Math.max(1,(r+i)/2),this.distribution==="normal"){const a=Math.sqrt(o);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Y(`${this.getClassName()} does not support dType ${e}.`);return wh(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*o);return Xr(t,-a,a,e)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}ge.className="VarianceScaling",_(ge);class ya extends ge{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ge.className}}ya.className="GlorotUniform",_(ya);class wa extends ge{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ge.className}}wa.className="GlorotNormal",_(wa);class va extends ge{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ge.className}}va.className="HeNormal",_(va);class ka extends ge{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ge.className}}ka.className="HeUniform",_(ka);class xa extends ge{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ge.className}}xa.className="LeCunNormal",_(xa);class Sa extends ge{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ge.className}}Sa.className="LeCunNormal",_(Sa);class Ef extends $e{constructor(t){if(super(),this.DEFAULT_GAIN=1,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed,this.seed!=null)throw new Y("Random seed is not implemented for Orthogonal Initializer yet.")}apply(t,e){return T(()=>{if(t.length<2)throw new Y("Shape must be at least 2D.");t[0]*t[1]>2e3&&console.warn(`Orthogonal initializer is being called on a matrix with more than 2000 (${t[0]*t[1]}) elements: Slowness may result.`);const s=t[0]>t[1]?[t[1],t[0]]:t,r=vi(s,0,1,"float32");let i=J1.gramSchmidt(r);return t[0]>t[1]&&(i=nt(i)),k(this.gain,i)})}getConfig(){return{gain:this.gain,seed:this.seed}}}Ef.className="Orthogonal",_(Ef);const If={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Af(n,t={}){return ir(n,Se.getMap().classNameMap,t,"initializer")}function Dt(n){return ua(n)}function Et(n){if(typeof n=="string"){const t=n in If?If[n]:n;if(t==="GlorotNormal")return new wa;if(t==="GlorotUniform")return new ya;if(t==="HeNormal")return new va;if(t==="HeUniform")return new ka;if(t==="LeCunNormal")return new xa;if(t==="LeCunUniform")return new Sa;{const e={};return e.className=t,e.config={},Af(e)}}else return n instanceof $e?n:Af(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ea(n){return Array.isArray(n)&&Array.isArray(n[0])}function ki(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function X(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new S(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function ht(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new S(`Expected exactly 1 Shape; got ${n.length}`)}else return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function xi(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}var Qe,uk,Nf;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Tf="Variable";class tn{constructor(t,e="float32",s=Tf,r=!0,i=null){this.dtype=e??"float32",this.shape=t.shape,this.id=of(),s=s??Tf,this.originalName=uf(s),this.name=cf(this.originalName),this.trainable_=r,this.constraint=i,this.val=Lw(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),ck(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function ck(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function gT(n,t,e,s){return new tn(n,t,e,!0,s)}function bT(n,t,e){return new tn(Qe.zeros(n),t,e)}function yT(n,t,e){return new tn(Qe.zerosLike(n),t,e)}function wT(n,t,e){const s=Qe.ones(n);return new tn(s,t,e)}function vT(n,t,e){const s=Qe.onesLike(n);return new tn(s,t,e)}function kT(n,t,e){return new tn(Qe.eye(n),t,e)}function xT(n,t,e,s,r,i="randomUniform"){return new tn(Qe.randomUniform(n,t,e,s),s,i)}function ST(n,t=0,e=1,s,r,i="truncatedNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new Nf(`randomNormal does not support dType ${s}.`);return new tn(Qe.truncatedNormal(n,t,e,s,r),s,i)}function ET(n,t=0,e=1,s,r,i="randomNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new Nf(`randomNormalVariable does not support dType ${s}.`);return new tn(Qe.randomNormal(n,t,e,s,r),s,i)}function IT(n,t){return n.write(t)}function AT(n,t){return n.write(Qe.add(n.read(),t))}function NT(n,t){return n.write(Qe.sub(n.read(),t))}function Ia(n){return n.map(t=>t.read())}function Aa(n){n.forEach(t=>{t[0].write(t[1])})}function TT(n,t){const e=t.map(r=>r.read()),s=uk(n,e);return t.map(r=>s.grads[r.name])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Bt{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class en{constructor(t,e,s,r,i,o,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=i,this.outputTensorIndex=a,this.id=of(),o!=null&&(this.originalName=uf(o),this.name=cf(this.originalName)),this.rank=e.length}}let hk=0;class Si{constructor(t,e){this.callArgs=e,this.id=hk++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let fk=0;class et extends bs{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=fk++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=ln(s)+"_"+bi(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let i=null;t.batchSize!=null&&(i=t.batchSize),s=[i].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new De(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new S(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return he(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return he(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Ye(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Ye(`Layer ${this.name} is not connected, no input to return.`);return he(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Ye(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Ye(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return he(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){if(t=mt(t),this.inputSpec==null||this.inputSpec.length===0)return;const e=mt(this.inputSpec);if(t.length!==e.length)throw new S(`Layer ${this.name} expects ${e.length} inputs, but it received ${t.length} input tensors. Input received: ${t}`);for(let s=0;s<t.length;s++){const r=t[s],i=e[s];if(i==null)continue;const o=r.rank;if(i.ndim!=null&&o!==i.ndim)throw new S(`Input ${s} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${o}`);if(i.maxNDim!=null&&o>i.maxNDim)throw new S(`Input ${s} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${o}`);if(i.minNDim!=null&&o<i.minNDim)throw new S(`Input ${s} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${o}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new S(`Input ${s} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const a=r.shape;for(const l in i.axes){const u=Number(l),c=i.axes[l],h=u>=0?a[u]:a[a.length+u];if(c!=null&&[c,null].indexOf(h)===-1)throw new S(`Input ${s} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${c} but got shape ${a}.`)}}if(i.shape!=null)for(let a=0;a<i.shape.length;++a){const l=i.shape[a],u=r.shape[a];if(l!=null&&u!=null&&l!==u)throw new S(`Input ${s} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=mt(t);let r=!0;for(const o of s)if(!(o instanceof en)){r=!1;break}let i=!0;for(const o of s)if(o instanceof en){i=!1;break}if(r===i)throw new S("Arguments to apply() must be all SymbolicTensors or all Tensors");return es(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const o=[];for(const a of mt(t))o.push(a.shape);this.build(he(o)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(t),i){let o=this.call(t,e);const a=mt(o),l=[];for(let u of a)s.indexOf(u)!==-1&&(u=u.clone()),l.push(u);if(o=he(l),this.activityRegularizer!=null)throw new Y("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return o}else{const o=dk(t),a=this.computeOutputShape(o);let l;const u=pk(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?o[0]:o),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((c,h)=>new en(u,c,this,mt(t),e,this.name,h)):l=new en(u,a,this,mt(t),e,this.name),this.addInboundNode(t,l,null,null,o,a,e),this._refCount++,this.activityRegularizer!=null)throw new Y("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Ye(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Ye(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new De(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return xi(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Ia(t?this.trainableWeights:this.weights)}setWeights(t){T(()=>{const e=this.weights;if(e.length!==t.length)throw new S(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=Ia(e);for(let i=0;i<r.length;++i){const o=r[i],a=e[i],l=t[i];if(!Wt(o.shape,l.shape))throw new S(`Layer weight shape ${o.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}Aa(s)})}addWeight(t,e,s,r,i,o,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new S(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():Et("zeros"));const u=r.apply(e,s),c=new tn(u,s,t,o,a);return u.dispose(),i!=null&&this.addLoss(()=>i.apply(c.read())),o==null&&(o=!0),o?this._trainableWeights.push(c):this._nonTrainableWeights.push(c),c}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=mt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}addInboundNode(t,e,s,r,i,o,a=null){const l=mt(t);e=mt(e),s=mt(s),r=mt(r),i=ki(i),o=ki(o);const u=[],c=[],h=[];for(const f of l)u.push(f.sourceLayer),c.push(f.nodeIndex),h.push(f.tensorIndex);new Si({outboundLayer:this,inboundLayers:u,nodeIndices:c,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:i,outputShapes:o},a);for(let f=0;f<e.length;f++)e[f].sourceLayer=this,e[f].nodeIndex=this.inboundNodes.length-1,e[f].tensorIndex=f}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function dk(n){n=mt(n);const t=[];for(const e of n)t.push(e.shape);return he(t)}function pk(n){return"float32"}function Df(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let i=0;i<s.inboundLayers.length;i++){const o=s.inputTensors[i],a=s.inboundLayers[i],l=s.nodeIndices[i],u=Df(o,a,l);for(const c of u)r.indexOf(c)===-1&&r.push(c)}return r}}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Fs extends et{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:bi("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new S("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new S("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new S("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new en(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new Si({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new S(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Fs.className="InputLayer",_(Fs);function Cf(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new S("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Fs({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function mk(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return P(t,n.dtype)}catch{throw new S(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class An{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof An)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=mk(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new S(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof en){if(this.id2Value[t.id]==null)throw new S(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new S(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof en){if(this.id2Value[t.id]==null)throw new S(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new S(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&j(this.id2Mask)}}const Ei=new tf,Ii=new tf;function gk(n){Ei?.setMaxEntries(n),Ii?.setMaxEntries(n)}function hr(n,t,e,s){const r=e==null?!1:e.training,i=Array.isArray(n),o=i?n:[n],a=o.map(p=>p.name),l=[],u=t.names();for(const p of a)u.indexOf(p)!==-1?l.push(t.getValue(p)):l.push(null);s!=null&&(s.maxNumTensors=-1/0,s.minNumTensors=1/0);const c=a.join(",")+"|"+t.names().sort().join(",");let h=Ei.get(c),f;if(h==null){const p=bk(o,t);h=p.sorted,f=p.recipientCounts,Ei.put(c,h),Ii.put(c,f)}f={},r||Object.assign(f,Ii.get(c));const d=new An(t);for(let p=0;p<h.length;++p){if(s!=null){const F=Mo().numTensors;F>s.maxNumTensors&&(s.maxNumTensors=F),F<s.minNumTensors&&(s.minNumTensors=F)}const m=h[p],b=m.sourceLayer;if(b instanceof Fs)continue;const v=[],E=[],x=[];let I=!1;for(const F of m.inputs){const B=d.getValue(F),V=d.getMask(F);v.push(B),E.push(V),V!=null&&(I=!0),r||(f[F.name]--,f[F.name]===0&&!t.hasKey(F)&&a.indexOf(F.name)===-1&&!B.isDisposed&&F.sourceLayer.stateful!==!0&&x.push(B))}I&&(e=e||{},e.mask=E[0]);const C=mt(b.apply(v,e));let $=null;b.supportsMasking&&($=b.computeMask(v,E));const L=wk(m),R=Array.isArray(L)?L:[L];for(let F=0;F<R.length;++F){d.hasKey(R[F])||d.add(R[F],C[F],Array.isArray($)?$[0]:$);const B=a.indexOf(R[F].name);B!==-1&&(l[B]=C[F])}r||j(x)}return d.disposeMasks(),i?l:l[0]}function bk(n,t){g(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=$f(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const i of n){const{sorted:o,recipientMap:a}=$f(i,t);for(const l of o)r.has(l.name)||(e.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(u=>s[l].add(u))}}return{sorted:e,recipientCounts:yk(s)}}function yk(n){const t={};for(const e in n)t[e]=n[e].size;return t}function $f(n,t){const e=new Set,s=[],r={};for(const a of t.names())e.add(a);const i=[],o=[];for(i.push(n);i.length>0;){const a=i[i.length-1];if(e.has(a.name)){i.pop();continue}const l=o[o.length-1]===i.length-1;if(a.inputs.length===0||l)i.pop(),s.push(a),e.add(a.name),l&&o.pop();else{o.push(i.length-1);for(const u of a.inputs)r[u.name]==null&&(r[u.name]=new Set),r[u.name].add(a.name),!e.has(u.name)&&i.push(u)}}return{sorted:s,recipientMap:r}}function wk(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Q().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,gk);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _f={kernelName:Ql,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,ni(P(e,"float32"),-1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vk={kernelName:Cp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=wt(P(e,"float32")),r=ie(U(K(1),s));return Rt(q(n,r))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kk={kernelName:$p,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ie(U(wt(P(e,"float32")),1));return q(n,s)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xk={kernelName:ao,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{let a=n;const l=Vt(e.shape,r);return l.length>0&&(a=G(a,l)),D(a,e.shape)},b:()=>{let a=n;const l=Vt(s.shape,r);return l.length>0&&(a=G(a,l)),D(a,s.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sk={kernelName:_p,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,r)=>{e[r]=()=>n.clone()}),e}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ek={kernelName:tu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ot(e)}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ik={kernelName:zp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ot(e)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ak={kernelName:Lp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,ie(U(K(1),wt(P(e,"float32")))))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nk={kernelName:Rp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ie(M(K(1),wt(P(e,"float32"))));return q(n,s)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tk={kernelName:Pp,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{const a=M(wt(e),wt(s));let l=k(n,q(s,a));const u=Vt(e.shape,r);return u.length>0&&(l=G(l,u)),D(l,e.shape)},b:()=>{const a=M(wt(e),wt(s));let l=Rt(k(n,q(e,a)));const u=Vt(s.shape,r);return u.length>0&&(l=G(l,u)),D(l,s.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dk={kernelName:Op,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,M(wt(P(e,"float32")),1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ck={kernelName:Bp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,U(K(1),wt(P(e,"float32"))))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $k(n,t,e,s,r,i){const o=y(n,"dy","avgPool3dGrad"),a=y(t,"input","avgPool3dGrad");let l=o,u=a,c=!1;a.rank===4&&(c=!0,l=D(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),u=D(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),g(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),g(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),ue("avgPool3dGrad",r,i);const h={dy:l,input:u},f={filterSize:e,strides:s,pad:r,dimRoundingMode:i},d=A.runKernel(Wp,h,f);return c?D(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const _k=N({avgPool3dGrad_:$k});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fk={kernelName:nu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:i,pad:o,dimRoundingMode:a}=e;return{x:()=>_k(n,s,r,i,o,a)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mk(n,t,e,s,r){const i=y(n,"dy","avgPoolGrad"),o=y(t,"input","avgPoolGrad");g(o.rank===i.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${i.rank})`);let a=o,l=i,u=!1;o.rank===3&&(u=!0,a=D(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=D(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),g(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const c={dy:l,input:a},h={filterSize:e,strides:s,pad:r},f=A.runKernel(Up,c,h);return u?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const zk=N({avgPoolGrad_:Mk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lk={kernelName:eu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:i,pad:o}=e;return{x:()=>zk(n,s,r,i,o)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rk={kernelName:su,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,r]=t,{transposeA:i,transposeB:o}=e;return!i&&!o?{a:()=>pt(n,r,!1,!0),b:()=>pt(s,n,!0,!1)}:!i&&o?{a:()=>pt(n,r,!1,!1),b:()=>pt(n,s,!0,!1)}:i&&!o?{a:()=>pt(r,n,!1,!0),b:()=>pt(s,n,!1,!1)}:{a:()=>pt(r,n,!0,!0),b:()=>pt(n,s,!0,!0)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ok(n,t,e){const s=y(n,"x","spaceToBatchND");g(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),g(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),g(s.shape.reduce((o,a,l)=>l>0&&l<=t.length?o&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:o,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},i={blockShape:t,paddings:e};return A.runKernel(ic,r,i)}const Bk=N({spaceToBatchND_:Ok});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pk={kernelName:ru,gradFunc:(n,t,e)=>{const{blockShape:s,crops:r}=e;return{x:()=>Bk(n,s,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uk={kernelName:Vp,gradFunc:(n,t,e)=>{const s=e,r=s.inputShape,i=s.shape,o=Array.from(i);for(let l=r.length-1;l>=0;l--)if(r[l]===i[l])o[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${i}].`);const a=[];for(let l=0;l<o.length;l++)o[l]>1&&a.push(l);return{x:()=>G(n,a,!0)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wk={kernelName:lo,gradFunc:n=>({x:()=>n.clone()})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gk={kernelName:qp,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vk={kernelName:iu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:r,clipValueMax:i}=e;return{x:()=>Ne(Ss(Ys(s,r),Qs(s,i)),n,ot(n))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qk={kernelName:ou,inputsToSave:["x"],gradFunc:_f.gradFunc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hk={kernelName:au,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:r}=e,i=Z(r,t[0].shape)[0],o=s.map(l=>l[i]);return Ae(n,o,i).map(l=>()=>l)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jk={kernelName:lu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{dilations:i,strides:o,pad:a,dataFormat:l}=e;return g(Kn(i),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`),{x:()=>Bo(s.shape,n,r,o,a,l),filter:()=>Qo(s,n,r.shape,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kk={kernelName:uu,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{strides:i,pad:o,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>ks(n,r,i,o,a,1,l),filter:()=>Qo(n,s,r.shape,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jk(n,t,e,s,r){let i=n;n.rank===4&&(i=D(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let o=t;o.rank===4&&(o=D(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),g(i.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${i.shape}.`),g(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),g(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),g(i.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${i.shape[4]}) must match input depth in filter (${e[3]}.`),g(o.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:i,dy:o},l={strides:s,pad:r,filterShape:e};return A.runKernel(Kp,a,l)}const Zk=N({conv3DBackpropFilter_:Jk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yk={kernelName:cu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:i}=e;g(Kn(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[o,a]=t;return{x:()=>ah(o.shape,n,a,r,i),filter:()=>Zk(o,n,a.shape,r,i)}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xk(n){const e={x:y(n,"x","sin","float32")};return A.runKernel(Qu,e)}const Qk=N({sin_:Xk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tx={kernelName:hu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(Rt(Qk(P(e,"float32"))),n)}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ex(n){const e={x:y(n,"x","sinh")};return A.runKernel(tc,e)}const nx=N({sinh_:ex});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sx={kernelName:fu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(nx(P(e,"float32")),n)}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rx(n,t=0,e=!1,s=!1){const i={x:y(n,"x","cumsum")},o={axis:t,exclusive:e,reverse:s};return A.runKernel(du,i,o)}const ix=N({cumsum_:rx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ox={kernelName:du,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r,exclusive:i,reverse:o}=e;return{x:()=>{const a=fh([r],s.rank);let l=ix(n,r,i,!o);return a!=null&&(l=nt(l,a)),l}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ax={kernelName:pu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:i,dimRoundingMode:o}=e,a=s??[1,1];g(Kn(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,u]=t;return g(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),g(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),g(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),g(gn(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),ue("depthwiseConv2d",i,o),{x:()=>Sh(l.shape,n,u,r,i,a,o),filter:()=>xh(l,n,u.shape,r,i,a,o)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lx={kernelName:tm,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,i={x:s,filter:r,dy:n},o={x:s,filter:r,dy:n};return{x:()=>A.runKernel(em,i,e),filter:()=>A.runKernel(nm,o,e)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ux={kernelName:gu,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>A.runKernel(sm,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cx={kernelName:rm,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=k(Le(Rt(wt(e))),2/Math.sqrt(Math.PI));return{x:()=>k(n,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hx={kernelName:bu,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,e)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fx={kernelName:yu,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>D(n,e.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dx={kernelName:om,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,Le(e))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const px={kernelName:wu,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mx={kernelName:vu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{const a=q(n,P(s,"float32")),l=Vt(e.shape,r);return l.length>0?D(G(a,l),e.shape):a},b:()=>{let a=k(n,P(e,"float32"));const l=Vt(s.shape,r);l.length>0&&(a=D(G(a,l),s.shape));const u=wt(s);return Rt(q(a,P(u,"float32")))}}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gx(n){const e={x:y(n,"x","rsqrt","float32")};return A.runKernel(Ju,e)}const bx=N({rsqrt_:gx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yx={kernelName:ku,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[r,i,o,a]=t,l=a??K(1),u=Vt(i.shape,r.shape),c=[];if(i.rank===1){for(let I=0;I<r.shape.length-1;++I)c.push(r.shape[I]);c.push(1)}const h=U(r,i),f=k(n,l),d=bx(M(o,K(s))),p=k(k(k(d,d),d),K(-.5));return{x:()=>i.rank===1?D(k(k(n,Je(D(d,[1,1,1,i.shape[0]]),c)),l),r.shape):D(k(k(n,d),l),r.shape),mean:()=>{let I=k(k(d,K(-1)),f);return i.rank===1&&(I=G(I,u)),D(I,i.shape)},variance:()=>{let I=k(k(p,h),f);return i.rank===1&&(I=G(I,u)),D(I,i.shape)},scale:()=>{const I=k(h,d);let C=k(n,I);return i.rank===1&&(C=G(C,u)),D(C,i.shape)},offset:()=>{let I=n;return i.rank===1&&(I=G(I,u)),D(I,i.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wx(n,t,e){const s=y(n,"x","unsortedSegmentSum"),r=y(t,"segmentIds","unsortedSegmentSum","int32");g(zn(e),()=>"numSegments must be of dtype int");const i={x:s,segmentIds:r},o={numSegments:e};return A.runKernel(fc,i,o)}const vx=N({unsortedSegmentSum_:wx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kx={kernelName:xu,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,r]=t,{axis:i}=e,o=Z(i,s.shape)[0];return{x:()=>{const l=s.shape,u=r.size,c=l.slice(0,o),h=c.length,f=l.slice(i,l.length).slice(1),d=f.length,p=Ff(0,h),m=Ff(h+1,h+1+d),b=Mf([c,[u],f]),v=D(n,b),E=D(r,[u]),x=Mf([[h],p,m]),I=nt(v,x);let C=vx(I,E,s.shape[o]);const $=Vo(x);return C=nt(C,$),C},indices:()=>r}}};function Ff(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function Mf(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xx={kernelName:Su,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>ot(e),b:()=>ot(s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sx={kernelName:uo,gradFunc:n=>({x:()=>P(n,"float32")})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ex={kernelName:dm,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ix={kernelName:pm,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ax={kernelName:mm,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nx={kernelName:Eu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:r}=e,i=Re(s,0);return{x:()=>Ne(i,n,k(n,r))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tx={kernelName:Au,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,M(e,1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dx={kernelName:Iu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,P(e,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cx={kernelName:vm,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;return{logits:()=>{const o=Le(s);return U(n,k(G(n,r,!0),o))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(n,t,e,s=5,r=1,i=1,o=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:r,alpha:i,beta:o};return A.runKernel(xm,a,l)}const _x=N({localResponseNormalizationBackprop_:$x});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fx={kernelName:km,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{depthRadius:i,bias:o,alpha:a,beta:l}=e;return{x:()=>_x(s,r,n,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(n,t,e,s){return t.rank<e.rank&&(t=D(t,Es(t.shape,s))),n.rank<e.rank&&(n=D(n,Es(n.shape,s))),{x:()=>k(n,P(bn(e,t),n.dtype))}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lf={kernelName:Nu,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:r}=s,i=t[0],o=t[1],a=Z(r,i.shape),l=zf(n,o,i,a);return{x:()=>l.x()}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mx(n,t){let e=y(n,"a","less","string_or_numeric"),s=y(t,"b","less","string_or_numeric");[e,s]=Lt(e,s),St(e.shape,s.shape);const r={a:e,b:s};return A.runKernel(gm,r)}const zx=N({less_:Mx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lx={kernelName:Tu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>k(n,P(Ys(e,s),"float32")),b:()=>k(n,P(zx(e,s),"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rx(n,t,e,s,r,i,o){const a=y(n,"dy","maxPool3dGrad"),l=y(t,"input","maxPool3dGrad"),u=y(e,"output","maxPool3dGrad");let c=a,h=l,f=u,d=!1;l.rank===4&&(d=!0,c=D(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=D(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),f=D(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),g(c.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),g(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),g(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),ue("maxPool3dGrad",i,o);const p={dy:c,input:h,output:f},m={filterSize:s,strides:r,pad:i,dimRoundingMode:o},b=A.runKernel(Em,p,m);return d?D(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const Ox=N({maxPool3dGrad_:Rx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bx={kernelName:Cu,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:i,strides:o,pad:a,dimRoundingMode:l}=e;return{x:()=>Ox(n,s,r,i,o,a,l)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Px(n,t,e,s,r,i,o){const a=y(n,"dy","maxPoolGrad"),l=y(t,"input","maxPoolGrad"),u=y(e,"output","maxPoolGrad");g(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),g(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),g(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),ue("maxPoolGrad",i,o);const c={dy:a,input:l,output:u},h={filterSize:s,strides:r,pad:i,dimRoundingMode:o};return A.runKernel(Sm,c,h)}const Ux=N({maxPoolGrad_:Px});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wx={kernelName:Du,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:i,strides:o,pad:a}=e;return{x:()=>Ux(n,s,r,i,o,a)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gx={kernelName:$u,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e,i=Z(r,s.shape),a=Zy(s.shape,i)[1],l=At(a);return{x:()=>{const c=s.shape.slice();i.forEach(d=>{c[d]=1});const h=D(n,c);return q(k(h,yn(s.shape,"float32")),l)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vx={kernelName:_u,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:r}=s,[i,o]=t,a=Z(r,i.shape),l=zf(n,o,i,a);return{x:()=>l.x()}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qx={kernelName:Fu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>k(n,P(Qs(e,s),"float32")),b:()=>k(n,P(Re(e,s),"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hx={kernelName:Im,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,i=r.map(o=>o[0]);return{x:()=>ct(n,i,s.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jx={kernelName:Am,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{const a=Vt(e.shape,r);return a.length>0?D(G(n,a),e.shape):n},b:()=>{const a=k(n,Rt(Wo(q(e,s)))),l=Vt(s.shape,r);return l.length>0?D(G(a,l),s.shape):a}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kx={kernelName:Mu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{const a=k(n,P(s,"float32")),l=Vt(e.shape,r);return l.length>0?D(G(a,l),e.shape):a},b:()=>{const a=k(n,P(e,"float32")),l=Vt(s.shape,r);return l.length>0?D(G(a,l),s.shape):a}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jx={kernelName:zu,gradFunc:n=>({x:()=>Rt(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zx={kernelName:Ru,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>qt(e.shape,"float32")}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yx={kernelName:Lu,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xx={kernelName:Ou,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return Ns(n,s).map(i=>()=>i)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rf={kernelName:Bu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,i=r.map(o=>o[0]);return{x:()=>ct(n,i,s.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qx={kernelName:Pu,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,r]=t,i=e,o=s,a=St(i.shape,o.shape);return{a:()=>{const c=P(o,"float32");let h=k(n,k(c,tr(i,U(c,K(1)))));const f=Vt(i.shape,a);return f.length>0&&(h=G(h,f)),D(h,i.shape)},b:()=>{const c=Re(i,0),h=Ne(c,Oe(i),ot(i));let f=k(n,k(r,h));const d=Vt(o.shape,a);return d.length>0&&(f=G(f,d)),D(f,o.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tS={kernelName:Uu,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,r=Re(e,0);return{x:()=>Ne(r,n,k(n,s)),alpha:()=>{let i=Ne(r,ot(n),k(n,e));const o=Vt(s.shape,n.shape);return o.length>0&&(i=G(i,o)),D(i,s.shape)}}}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eS(n,t=0,e=!1,s=!1){const i={x:y(n,"x","cumprod")},o={axis:t,exclusive:e,reverse:s};return A.runKernel(Zp,i,o)}const Of=N({cumprod_:eS});/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nS(n,t,e){const s=n.shape.slice();s[e]=1;const r=D(t,s),i=Of(n,e,!0,!1),o=Of(n,e,!0,!0),a=k(i,o);return k(r,a)}function sS(n,t,e){const s=n.shape.length,r=s-e.length,i=fh(e,s);let o=n;i!=null&&(o=nt(n,i));const a=o.shape.slice(),u=a.splice(s-e.length,e.length).reduce((f,d)=>f*d,1);a.push(u);const c=o.reshape(a);let h=nS(c,t,r);if(h=h.reshape(o.shape),i!=null){const f=Vo(i);h=nt(h,f)}return h}const rS={kernelName:$m,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;let i=[];return r==null?i=s.shape.map((o,a)=>a):typeof r=="number"?i=[r]:i=r,{x:()=>sS(s,n,i)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iS={kernelName:mu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{const a=q(n,P(s,"float32")),l=Vt(e.shape,r);return l.length>0?D(G(a,l),e.shape):a},b:()=>{let a=k(n,P(e,"float32"));const l=Vt(s.shape,r);l.length>0&&(a=D(G(a,l),s.shape));const u=wt(s);return Rt(q(a,P(u,"float32")))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oS={kernelName:Mm,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,Rt(wt(e)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aS={kernelName:Hu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=k(Qs(e,6),ni(e));return{x:()=>k(n,P(s,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lS={kernelName:Wu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,P(ni(e),"float32"))}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uS={kernelName:Gu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>D(n,e.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cS={kernelName:qu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>A.runKernel(Lm,r,e)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hS={kernelName:Vu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>A.runKernel(zm,r,e)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fS={kernelName:ju,gradFunc:(n,t,e)=>{const{dims:s}=e,r=Z(s,n.shape);return{x:()=>Is(n,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dS={kernelName:Ku,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pS={kernelName:Ju,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Rt(q(n,k(tr(e,1.5),2)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mS(n){const e={x:y(n,"x","logicalNot","bool")};return A.runKernel(wm,e)}const gS=N({logicalNot_:mS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bS={kernelName:Zu,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>P(ot(e),"float32"),t:()=>k(n,P(e,n.dtype)),e:()=>k(n,P(gS(e),n.dtype))}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yS=1.7580993408473768,wS=1.0507009873554805;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vS={kernelName:Yu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Re(e,K(0)),r=K(yS),i=K(wS),o=k(n,i),a=k(k(n,r),Le(P(e,"float32")));return Ne(s,o,a)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kS={kernelName:ec,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,k(e,U(K(1),e)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xS={kernelName:Rm,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SS(n){const e={x:y(n,"x","cos","float32")};return A.runKernel(hu,e)}const Bf=N({cos_:SS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ES={kernelName:Qu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(Bf(P(e,"float32")),n)}}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IS(n){const e={x:y(n,"x","cosh","float32")};return A.runKernel(fu,e)}const AS=N({cosh_:IS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const NS={kernelName:tc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(AS(P(e,"float32")),n)}}};var ss;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Na=null,TS=null;function CT(n,t,e){const s=n.shape.length;ss.assert(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),ss.assert(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)ss.assert(t[r]+e[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function $T(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function _T(n,t,e){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((t[r]-n[r])/e[r]);return s}function DS(n,t,e,s){const r=[...n];for(let i=r.length;i<s.length;i++)r.push(1);for(let i=0;i<e;i++)i===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function Pf(n,t,e){return e<=n?e:e-(t-1)}function Uf(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function FT(n,t,e,s,r,i,o,a,l){const u=n.length;let c=new Array(u),h=new Array(u),f=new Array(u);if(t.length&&e>0){const d=t[0],p=e+1;c=CS(o,d,p,s,n),h=$S(a,d,p,r,n),f=DS(i,d,p,n)}else for(let d=0;d<u;d++)c[d]=FS(o,s,i,n,d,l),h[d]=MS(a,r,i,n,d,l),f[d]=_S(i,d,l);return{begin:c,end:h,strides:f}}function CS(n,t,e,s,r){const i=[...r],o=Uf(e,t);for(let a=0;a<i.length;a++)if(o.indexOf(a)>-1)i[a]=0;else{const l=Pf(t,e,a);let u=s[l];n&1<<l&&(u=0),i[a]=u}return i}function $S(n,t,e,s,r){const i=[...r],o=Uf(e,t);for(let a=0;a<i.length;a++)if(o.indexOf(a)>-1)i[a]=Number.MAX_SAFE_INTEGER;else{const l=Pf(t,e,a);let u=s[l];n&1<<l&&(u=Number.MAX_SAFE_INTEGER),i[a]=u}for(let a=0;a<i.length;a++){const l=r[a];i[a]<0&&(i[a]+=l),i[a]=ss.clamp(0,i[a],r[a])}return i}function _S(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function FS(n,t,e,s,r,i){let o=t[r];const a=e[r]||1;(n&1<<r||i&1<<r||o==null)&&(a>0?o=Number.MIN_SAFE_INTEGER:o=Number.MAX_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),o=ss.clamp(0,o,l-1),o}function MS(n,t,e,s,r,i){let o=t[r];const a=e[r]||1;(n&1<<r||i&1<<r||o==null)&&(a>0?o=Number.MAX_SAFE_INTEGER:o=Number.MIN_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),a>0?o=ss.clamp(0,o,l):o=ss.clamp(-1,o,l-1),o}function MT(n,t,e){let s=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){s=r;break}for(let r=s+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function zT(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function zS(n,t,e){let s;const r=n.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(o=>{g(o!==-1,()=>"slice() does not support negative begin indexing.")});let i;return e==null?i=new Array(r).fill(-1):typeof e=="number"?i=[e,...new Array(r-1).fill(-1)]:e.length<r?i=e.concat(new Array(r-e.length).fill(-1)):i=e,i=i.map((o,a)=>o>=0?o:(g(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,i]}function LT(n,t,e,s,r,i,o,a,l){let u;if(s==null?(u=new Array(t.length),u.fill(1)):u=s,o!=null&&(o&o-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const h={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:u.slice(),beginMask:r,endMask:i,ellipsisMask:o,newAxisMask:a,shrinkAxisMask:l};for(let x=0;x<h.dims;x++)c&&(1<<x&a)!==0&&h.numAddAxisAfterEllipsis++,1<<x&o&&(c=!0);c||(h.ellipsisMask|=1<<h.dims,h.dims++);const f={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};LS(h,f);let d=!0,p=!0,m=!0;const b=[],v=[];for(let x=0;x<n.length;++x){if(f.strides[x]===0)throw Error(`strides[${x}] must be non-zero`);const I=!!(f.shrinkAxisMask&1<<x),C=n[x];if(C===-1){b.push(I?1:-1);continue}const $=[f.beginMask&1<<x,f.endMask&1<<x],L=[f.strides[x]>0?0:-1,f.strides[x]>0?C:C-1];if(I&&f.strides[x]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&f.strides[x]===1;const R=!!(f.beginMask&1<<x&&f.endMask&1<<x);if(f.beginValid&&f.endValid){if(I){const H=f.begin[x]<0?C+f.begin[x]:f.begin[x];if(f.begin[x]=H,f.end[x]=f.begin[x]+1,H<0||H>=C)throw Error(`slice index ${f.begin[x]} of dimension ${x} out of bounds.`)}else f.begin[x]=Wf(f.begin[x],0,f.strides[x],C,$,L),f.end[x]=Wf(f.end[x],1,f.strides[x],C,$,L);const V=f.strides[x]===1&&f.begin[x]===0&&f.end[x]===C;d=d&&V,p=p&&(x===0&&f.strides[x]===1||V)}else d=d&&f.strides[x]===1&&R,p=p&&(x===0&&f.strides[x]===1||R);let F,B=!1;if(f.beginValid&&f.endValid?(F=f.end[x]-f.begin[x],B=!0):I?(F=1,B=!0):R&&C>=0&&(f.strides[x]<0?F=-C:F=C,B=!0),B){let V;F===0||F<0!=f.strides[x]<0?V=0:V=Math.trunc(F/f.strides[x])+(F%f.strides[x]!==0?1:0),b.push(V)}else b.push(-1)}for(let x=0;x<f.finalShapeGatherIndices.length;++x){const I=f.finalShapeGatherIndices[x];I>=0?v.push(b[I]):I===Na&&v.push(1)}return{finalShapeSparse:v.filter((x,I)=>f.finalShapeGatherIndices[I]!==Na),finalShape:v,isIdentity:d,sliceDim0:p,isSimpleSlice:m,begin:f.begin,end:f.end,strides:f.strides}}function LS(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(Na),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(TS),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function Wf(n,t,e,s,r,i){if(r[t])return e>0?i[t]:i[t+1&1];{const o=n<0?s+n:n;return o<i[0]?i[0]:o>i[1]?i[1]:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RS={kernelName:Xu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:r,size:i}=e,o=s.shape,[a,l]=zS(s,r,i),u=[];for(let c=0;c<n.rank;c++)u.push([a[c],o[c]-a[c]-l[c]]);return{x:()=>dh(n,u)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OS={kernelName:ac,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:r}=e,i=!0,o=k(n,s);return{logits:()=>U(o,k(G(o,[r],i),s))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BS={kernelName:nc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,Qr(e))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PS(n,t,e){const s=y(n,"x","batchToSpaceND"),r=t.reduce((a,l)=>a*l);g(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),g(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),g(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const i={x:s},o={blockShape:t,crops:e};return A.runKernel(ru,i,o)}const US=N({batchToSpaceND_:PS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gf={kernelName:ic,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:r}=e;return{x:()=>US(n,s,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vf={kernelName:oc,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>re(n,s)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WS={kernelName:sc,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,k(ie(P(e,"float32")),2))}}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GS={kernelName:Wm,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(n,k(P(e,"float32"),2))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VS={kernelName:lc,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=K(2);return{a:()=>k(n,k(r,U(e,s))),b:()=>k(n,k(r,U(s,e)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qS={kernelName:pc,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HS={kernelName:uc,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=St(e.shape,s.shape);return{a:()=>{let a=n;const l=Vt(e.shape,r);return l.length>0&&(a=G(a,l)),D(a,e.shape)},b:()=>{let a=n;const l=Vt(s.shape,r);return l.length>0&&(a=G(a,l)),D(Rt(a),s.shape)}}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jS={kernelName:rc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,r=s.shape.slice(),{axis:i}=e;Z(i,s.shape).forEach(u=>{r[u]=1});const a=D(n,r),l=k(a,yn(s.shape,"float32"));return{x:()=>l}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KS={kernelName:Hm,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>q(n,wt(Bf(e)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JS={kernelName:cc,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>k(U(K(1),wt(e)),n)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZS={kernelName:co,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:r}=e;return{x:()=>{let o=ot(s);if(s.rank===1)for(let a=0;a<r[0];++a)o=M(o,ct(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)o=M(o,ct(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let u=0;u<r[2];++u)o=M(o,ct(n,[a*s.shape[0],l*s.shape[1],u*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let u=0;u<r[2];++u)for(let c=0;c<r[3];++c)o=M(o,ct(n,[a*s.shape[0],l*s.shape[1],u*s.shape[2],c*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return o}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YS={kernelName:Fr,gradFunc:(n,t,e)=>{const s=e,{perm:r}=s,i=Vo(r);return{x:()=>nt(n,i)}}};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XS={kernelName:hc,gradFunc:(n,t,e)=>{const s=e,{axis:r}=s;return{value:()=>vn(n,r)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QS={kernelName:fc,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>tE(n,e)}}};function tE(n,t){const e=Jn(t,ot(t)),s=xs(n,e);let r=Ys(t,K(0,"int32"));const i=s.rank-r.rank;for(let a=0;a<i;++a)r=Ie(r,a+1);r=Ss(r,yn(s.shape,"bool"));const o=ot(s);return Ne(r,s,o)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eE={kernelName:dc,gradFunc:n=>({x:()=>ot(n)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nE=[_f,vk,kk,xk,Sk,Ek,Ik,Ak,Nk,Tk,Dk,Ck,Fk,Lk,Rk,Pk,Uk,Wk,Gk,Vk,qk,Hk,Kk,jk,Yk,tx,sx,ox,ax,lx,iS,ux,cx,hx,fx,dx,mx,px,yx,kx,xx,Sx,Ex,Ix,Ax,Nx,Tx,Dx,Cx,Fx,Lf,Lf,Lx,Bx,Wx,Gx,Vx,qx,Hx,jx,Kx,Jx,Zx,Yx,Xx,Rf,Rf,Qx,tS,rS,oS,aS,lS,uS,cS,hS,fS,dS,pS,bS,vS,kS,xS,ES,NS,RS,OS,BS,Gf,Gf,Vf,Vf,WS,VS,GS,qS,HS,jS,KS,JS,ZS,YS,XS,QS,eE];for(const n of nE)Ym(n);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ta(n,t){return T(()=>ie(G(k(n,n),t,!0)))}class fr extends bs{getConfig(){return{}}}class qf extends fr{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return T(()=>{const e=Ta(t,this.axis),s=Ee(e,0,this.maxValue);return k(t,q(s,M(Ot(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}qf.className="MaxNorm",_(qf);class Hf extends fr{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return T(()=>q(t,M(Ot(),Ta(t,this.axis))))}getConfig(){return{axis:this.axis}}}Hf.className="UnitNorm",_(Hf);class jf extends fr{apply(t){return wn(t)}}jf.className="NonNeg",_(jf);class Kf extends fr{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return T(()=>{const e=Ta(t,this.axis),s=M(k(this.rate,Ee(e,this.minValue,this.maxValue)),k(1-this.rate,e));return k(t,q(s,M(Ot(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}Kf.className="MinMaxNorm",_(Kf);const Jf={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function Pt(n){return ua(n)}function Zf(n,t={}){return ir(n,Se.getMap().classNameMap,t,"constraint")}function Ut(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Jf?Jf[n]:n,config:{}};return Zf(e)}else return n instanceof fr?n:Zf(n)}var sE,rE,iE,oE;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function RT(n){return new sE(n)}function OT(n){return new rE(n)}function BT(){return new iE}function PT(n){return new oE(n)}var aE,lE,uE,cE,hE,fE,dE,pE,mE,gE,bE,yE,wE,vE,kE;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function UT(){return new aE}function WT(){return new lE}function GT(n){return new uE(n)}function VT(n){return new cE(n)}function qT(n){return new hE(n)}function HT(n){return new fE(n)}function jT(n){return new dE(n)}function KT(n){return new pE(n)}function JT(n){return new mE(n)}function ZT(n){return new gE(n)}function YT(n){return new bE(n)}function XT(n){return new yE(n)}function QT(n){return new wE(n)}function t2(n){return new vE(n)}function e2(n){return new kE(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function Nn(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const i=n[r];if(typeof i!="number"){const o=i;t.push(o.data()),e.push(r),s.push(o)}}if(t.length>0){const r=await Promise.all(t);for(let i=0;i<r.length;++i)n[e[i]]=r[i][0];j(s)}}function Yf(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var Xf;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(Xf||(Xf={}));const xE=125;class Ms{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class SE{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class EE extends Ms{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const i=e[r];if(typeof i=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+i*s;else{let o;r in this.totals?o=this.totals[r]:this.totals[r]=0;const a=T(()=>M(this.totals[r],k(i,s)));this.totals[r]=a,o?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:T(()=>{const r=k(q(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),Ke(e[s])}))}}class IE extends Ms{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const i in this.history){const o=this.history[i];for(let a=0;a<o.length;++a)if(typeof o[a]!="number"){const l=o[a];t.push(l.data()),e.push(i),s.push(a)}}const r=await Promise.all(t);for(let i=0;i<r.length;++i)this.history[e[i]][s[i]].dispose(),this.history[e[i]][s[i]]=r[i][0]}}class AE extends Ms{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||Y1,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=xE),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");Qi(this.yieldEvery)&&(this.maybeWait=Lv(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await Nn(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await Nn(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await Nn(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await Nn(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await Nn(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):Qi(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await Nn(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await Nn(t),await this.trainEnd(t))}}function Qf(n,t){return n==null&&(n={}),n instanceof Ms?[n]:Array.isArray(n)&&n[0]instanceof Ms?n:mt(n).map(s=>new AE(s,t))}class _e{constructor(){}static registerCallbackConstructor(t,e){g(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),_e.checkForDuplicate(e),_e.constructors[t]==null&&(_e.constructors[t]=[]),_e.constructors[t].push(e)}static checkForDuplicate(t){for(const e in _e.constructors)_e.constructors[+e].forEach(r=>{if(r===t)throw new S("Duplicate callback constructor.")})}static clear(){_e.constructors={}}static createCallbacks(t){const e=[];for(const s in _e.constructors){const r=+s;t>=r&&e.push(..._e.constructors[r])}return e.map(s=>new s)}}_e.constructors={};function td(n,t,e,s,r,i,o,a,l){const u=new IE,c=[new EE,..._e.createCallbacks(t)];n!=null&&c.push(...n),c.push(u);const h=new SE(c);return h.setParams({epochs:e,initialEpoch:s,samples:r,steps:i,batchSize:o,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:u}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function nn(n,t={},e=!1){return ir(n,Se.getMap().classNameMap,t,"layer",e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ai(n,t){return T(()=>{n.dtype!=="float32"&&(n=P(n,"float32"));const e=G(ur(n),t,!0),s=Zs(e.shape,Ot()),r=ie(Jn(e,s));return q(n,r)})}function Ni(n,t){return T(()=>_t(ur(U(t,n)),-1))}function Da(n,t){return T(()=>_t(Jt(U(t,n)),-1))}function Ca(n,t){return T(()=>{const e=U(n,t),s=Ee(Jt(n),Ot(),Number.MAX_VALUE),r=Jt(q(e,s));return k(100,_t(r,-1))})}function NE(n,t){return T(()=>{const e=Ee(t,Ot(),Number.MAX_VALUE),s=Oe(M(1,e)),r=Ee(n,Ot(),Number.MAX_VALUE),i=Oe(M(1,r));return _t(ur(U(s,i)),-1)})}function TE(n,t){return T(()=>{const e=Jn(0,U(1,k(n,t)));return _t(ur(e),-1)})}function DE(n,t){return T(()=>{const e=Jn(0,U(1,k(n,t)));return _t(e,-1)})}function CE(n,t){return T(()=>{const e=G(k(n,t),-1),s=Ze(k(U(1,n),t),-1);return Jn(0,M(1,U(s,e)))})}function $E(n,t){return T(()=>{const e=Math.log(2),s=U(t,n),r=U(M(s,Jo(k(-2,s))),e);return _t(r,-1)})}function dr(n,t,e=!1){return T(()=>{if(e)t=bh(t);else{const s=G(t,t.shape.length-1,!0);t=q(t,s)}return t=Ee(t,Ot(),1-Ot()),Rt(G(k(P(n,"float32"),Oe(t)),t.shape.length-1))})}function Ti(n,t,e=!1){return T(()=>{const s=P(Wo(Qv(n)),"int32");t=Ee(t,Ot(),1-Ot());const r=t.shape,i=D(Zr(s,r[r.length-1]),r);return dr(i,t,e)})}function _E(n,t){if(!Wt(n.shape,t.shape))throw new S(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return T(()=>{const e=wn(t),s=Rt(Jt(t));return M(U(e,k(t,n)),ch(Le(s)))})}function Di(n,t){return T(()=>{let e;return e=Ee(t,Ot(),1-Ot()),e=Oe(q(e,U(1,e))),_t(_E(n,e),-1)})}function FE(n,t){return T(()=>{const e=Ee(n,Ot(),1),s=Ee(t,Ot(),1);return G(k(n,Oe(q(e,s))),-1)})}function ME(n,t){return T(()=>{const e=Oe(M(Ot(),t));return _t(U(t,k(n,e)),-1)})}function ed(n,t){return T(()=>{const e=Ai(n,-1),s=Ai(t,-1),r=k(e,s);return Rt(G(r,-1))})}const n2=null,s2=null,r2=null,i2=null,o2=null,a2=null,l2=null,u2=null,c2=null,h2=null,f2=null,Ci={meanSquaredError:Ni,meanAbsoluteError:Da,meanAbsolutePercentageError:Ca,meanSquaredLogarithmicError:NE,squaredHinge:TE,hinge:DE,categoricalHinge:CE,logcosh:$E,categoricalCrossentropy:dr,sparseCategoricalCrossentropy:Ti,binaryCrossentropy:Di,kullbackLeiblerDivergence:FE,poisson:ME,cosineProximity:ed};function $a(n){if(typeof n=="string"){if(n in Ci)return Ci[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new S(t)}else return n}var sn,nd,sd;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function rd(n,t){return T(()=>{const e=k(.5,Be(t)),s=ar(Re(t,e),n.dtype);return _t(bn(n,s),-1)})}function id(n,t){return T(()=>ar(bn(ws(n,-1),ws(t,-1)),"float32"))}function od(n,t){return T(()=>P(G(Ss(bn(n,1),bn(t,1))),"float32"))}function zE(n,t){return nd(()=>sn.cast(sn.sum(sn.logicalAnd(sn.equal(n,1),sn.equal(t,0))),"float32"))}function LE(n,t){return T(()=>P(G(Ss(bn(n,0),bn(t,1))),"float32"))}function RE(n,t){return T(()=>{const e=od(n,t),s=LE(n,t),r=M(e,s);return P(Ne(Re(r,0),q(e,r),0),"float32")})}function d2(n,t){return nd(()=>{const e=od(n,t),s=zE(n,t),r=sn.add(e,s);return sn.cast(sn.where(sn.greater(r,0),sn.div(e,r),0),"float32")})}function OE(n,t){return Di(n,t)}function BE(n,t){return n.rank===t.rank&&(n=As(n,[n.rank-1])),t=ws(t,-1),t.dtype!==n.dtype&&(t=P(t,n.dtype)),P(bn(n,t),"float32")}function p2(n,t){throw new sd}function m2(n,t){throw new sd}const PE=Ni,UE=Ni,WE=Da,GE=Da,VE=Ca,qE=Ca,ad=dr,HE=ed,ld=Ti,$i={binaryAccuracy:rd,categoricalAccuracy:id,precision:RE,categoricalCrossentropy:ad,sparseCategoricalCrossentropy:ld,mse:PE,MSE:UE,mae:WE,MAE:GE,mape:VE,MAPE:qE,cosine:HE};function jE(n){if(typeof n=="string"&&n in $i)return $i[n];if(typeof n!="string"&&n!=null)return n;throw new S(`Unknown metric ${n}`)}function _i(n){if(ye(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Ci))if(Ci[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys($i))if($i[e]===n){t=e;break}return t!==void 0?t:n.name}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function KE(n){const t={Adagrad:()=>Ds.adagrad(.01),Adadelta:()=>Ds.adadelta(1,.95,Ot()),Adam:()=>Ds.adam(.001,.9,.999,Ot()),Adamax:()=>Ds.adamax(.002,.9,.999,Ot(),0),RMSProp:()=>Ds.rmsprop(.001,.9,0,Ot()),SGD:()=>Ds.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new S(`Unknown Optimizer ${n}`)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const ud=1*1024*1024;function cd(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!_a(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>ud&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${ud}.`)}}function _a(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!_a(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!_a(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function JE(n,t,e,s=console.log){const r=YE(n),i=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(c=>Math.floor(t*c)));let o;if(!r){i.push("Receives inputs"),o=[];for(const c in n.nodesByDepth)o.push(...n.nodesByDepth[c])}s("_".repeat(t)),Fi(i,e,s),s("=".repeat(t));const a=n.layers;for(let c=0;c<a.length;++c)r?XE(a[c],e,s):QE(a[c],e,o,s),s((c===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=ZE(n),u=xi(n.nonTrainableWeights);s(`Total params: ${l+u}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${u}`),s("_".repeat(t))}function ZE(n){let t;return n.collectedTrainableWeights!=null?t=xi(n.collectedTrainableWeights):t=xi(n.trainableWeights),t}function YE(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let i=!1;for(const o of r.inboundNodes)if(s.indexOf(o)!==-1)if(i){t=!1;break}else i=!0;if(!t)break}return t}function Fi(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function XE(n,t,e){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const i=n.name,o=n.getClassName(),a=[`${i} (${o})`,r,s,n.countParams().toString()];Fi(a,t,e)}function QE(n,t,e,s){let r,i;try{i=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{i="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const o=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let f=0;f<h.inboundLayers.length;++f){const d=h.inboundLayers[f].name,p=h.nodeIndices[f],m=h.tensorIndices[f];o.push(`${d}[${p}][${m}]`)}const a=n.name,l=n.getClassName(),u=o.length===0?"":o[0],c=[`${a} (${l})`,i,r,n.countParams().toString(),u];Fi(c,t,s);for(let h=1;h<o.length;++h)Fi(["","","","",o[h]],t,s)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function hd(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Mi(n,t){if(n===null)return null;if(typeof n=="string")return Qn(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const i=n[r];hd(t,r,i)?e.push(i):e.push(Mi(i,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const i=Qn(s);e[i]=Mi(r,i)}}return e}}function Fa(n,t){if(n==null)return null;if(typeof n=="string")return ln(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const i=n[r];hd(t,r,i)?e.push(i):e.push(Fa(i,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],i=ln(s);(s==="name"||s==="className")&&typeof r=="string"?e[i]=r:e[i]=Fa(r,s)}return e}}/** @license See the LICENSE file. */const fd="3.21.0";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ge extends et{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const E=this.getClassName().toLowerCase();this.name=bi(E)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],xn(this.inputs).length!==this.inputs.length)throw new S(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(E=>E.name)}`);xn(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(E=>E.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const E of this.outputs){const x=E.sourceLayer,I=E.nodeIndex,C=E.tensorIndex;this.outputLayers.push(x),this.outputLayersNodeIndices.push(I),this.outputLayersTensorIndices.push(C)}for(const E of this.inputs){const x=E.sourceLayer,I=E.nodeIndex,C=E.tensorIndex;ye(I===0,"input layer has >1 nodes"),ye(C===0,"input layer has >1 tensors"),this.inputLayers.push(x),this.inputLayersNodeIndices.push(I),this.inputLayersTensorIndices.push(C)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let E=0;E<this.inputLayers.length;E++){const x=this.inputLayers[E];if(!(x instanceof Fs))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${E} (0-based) originates from layer type ${x.getClassName()}.`);this.inputNames.push(x.name),this.feedInputShapes.push(x.batchInputShape),this.feedInputNames.push(x.name)}for(const E of this.outputLayers)this.outputNames.push(E.name);this.internalInputShapes=this.inputs.map(E=>E.shape),this.internalOutputShapes=this.outputs.map(E=>E.shape);const e={},s={},r={},i={},o={},a=[],l=(E,x,I,C,$,L)=>{(C==null||$==null||L==null)&&(C=E.sourceLayer,$=E.nodeIndex,L=E.tensorIndex);const R=C.inboundNodes[$];if(I.indexOf(R)!==-1)throw new De(`The tensor ${E.name} at layer "${C.name}" is part of a cycle.`);if(x.indexOf(R)!==-1)return;this.containerNodes.add(Ge.nodeKey(C,$)),C.id in o||(o[C.id]=Object.keys(o).length),I.indexOf(R)===-1&&I.push(R);const F=R.inboundLayers.length;for(let B=0;B<F;B++){const V=R.inputTensors[B],H=R.inboundLayers[B],tt=R.nodeIndices[B],at=R.tensorIndices[B];l(V,x,I,H,tt,at)}for(x.push(R);I.indexOf(R)>=0;)I.splice(I.indexOf(R),1);a.push(R)},u=[],c=[];for(const E of this.outputs)l(E,u,c);const h=a.slice().reverse();for(const E of h){s[E.id]=E,E.id in e||(e[E.id]=0);let x=e[E.id];const I=r[E.outboundLayer.id]==null?0:r[E.outboundLayer.id];x=Math.max(x,I),r[E.outboundLayer.id]=x,i[E.outboundLayer.id]=E.outboundLayer,e[E.id]=x;for(let C=0;C<E.inboundLayers.length;C++){const $=E.inboundLayers[C],L=E.nodeIndices[C],R=$.inboundNodes[L],F=e[R.id]==null?0:e[R.id];e[R.id]=Math.max(x+1,F),s[R.id]=R}}const f={};for(const E in e){const x=e[E];x in f||(f[x]=[]),f[x].push(s[E])}const d={};for(const E in r){const x=r[E];x in d||(d[x]=[]),d[x].push(i[E])}let p=Object.keys(d).map(E=>parseInt(E,10)).sort(mi);this.layers=[];for(const E of p){const x=d[E];x.sort((I,C)=>{const $=o[I.id],L=o[C.id];return $<L?-1:$>L?1:0});for(const I of x)I instanceof Ge&&this.internalContainerRefs.push(I),this.layers.push(I)}this.layersByDepth=d,p=Object.keys(f).map(E=>parseInt(E,10)).sort(mi);const m=this.inputs.slice(),b=[];for(const E of p)for(const x of f[E]){const I=x.outboundLayer;if(I!=null){for(const C of x.inputTensors)if(m.indexOf(C)===-1)throw new De(`Graph disconnected: cannot obtain value for tensor ${C} at layer "${I.name}". The following previous layers were accessed without issue: ${b}`);for(const C of x.outputTensors)m.push(C);b.push(I.name)}}this.nodesByDepth=f;const v=this.layers.map(E=>E.name);for(const E of v){const x=v.filter(I=>I===E).length;if(x!==1)throw new De(`The name "${E}" is used ${x} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(v))}this.outboundNodes=[],this.inboundNodes=[],new Si({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(E=>null),outputMasks:this.outputs.map(E=>null),inputShapes:this.inputs.map(E=>E.shape),outputShapes:this.outputs.map(E=>E.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new S("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;for(const o of this.layers)for(const a of o.weights){if(s[a.originalName]!=null)throw new S(`Duplicate weight name: ${a.originalName}`);s[a.originalName]=a,r++}const i=[];for(const o in t){let a=o;if(s[o]==null){const l=o.split("/");a=l.slice(0,-2).concat([l[l.length-1]]).join("/")}if(s[a]!=null)i.push([s[a],t[o]]);else if(e)throw new S(`Provided weight data has no target variable: ${o}`);delete s[a]}if(e){const o=[];for(const a in s)o.push(a);if(o.length>0)throw new S(`${o.length} of ${r} weights are not set: ${o}`)}Aa(i)}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${fd}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Fa(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return T(()=>{t=mt(t);const s=new An;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return hr(this.outputs,s,e)})}computeMask(t,e){return T(()=>{t=mt(t);let s;return e==null?s=Xn(null,t.length):s=mt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=ki(t);if(e.length!==this.inputLayers.length)throw new S(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],u=e[a],c=l.name+"_0_0";s[c]=u}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(mi);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const u of l){const c=u.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(c.id)!==-1)continue;const h=[];for(let m=0;m<u.inboundLayers.length;m++){const b=u.inboundLayers[m],v=u.nodeIndices[m],E=u.tensorIndices[m],x=`${b.name}_${v}_${E}`,I=s[x];h.push(I)}const f=c.computeOutputShape(he(h)),d=ki(f),p=c.inboundNodes.indexOf(u);for(let m=0;m<d.length;m++){const b=`${c.name}_${p}_${m}`;s[b]=d[m]}}}const i=[],o=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],u=this.outputLayersNodeIndices[a],c=this.outputLayersTensorIndices[a],h=`${l.name}_${u}_${c}`;o.push(h)}for(let a=0;a<o.length;a++){const l=o[a];ye(l in s),i.push(s[l])}return he(i)}runInternalGraph(t,e){e==null&&(e=Xn(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const u=this.inputs[l],c=t[l],h=e[l];s[u.id]=[c,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(mi);for(const l of r){const u=this.nodesByDepth[l];for(const c of u){const h=c.outboundLayer,f=c.inputTensors,d=c.outputTensors,p=new Array;for(const m of f)m.id in s&&p.push(s[m.id]);if(p.length===f.length){let m={},b,v,E,x;if(c.callArgs!=null&&(m=c.callArgs),p.length===1){const[I,C]=p[0];m.mask==null&&(m.mask=C),E=mt(h.call(I,m)),x=mt(h.computeMask(I,C)),b=[I],v=[C]}else b=p.map(I=>I[0]),v=p.map(I=>I[1]),m.mask==null&&(m.mask=v),E=mt(h.call(b,m)),x=mt(h.computeMask(b,v));if(h.activityRegularizer)throw new Y("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let I=0;I<d.length;++I){const C=d[I],$=E[I],L=x[I];s[C.id]=[$,L]}}}}const i=[],o=[],a=[];for(const l of this.outputs){ye(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[u,c]=s[l.id];a.push(u.shape),i.push(u),o.push(c)}return[i,o,a]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof Ge?1:0;for(let i=0;i<r.inboundNodes.length;i++){const o=Ge.nodeKey(r,i);this.containerNodes.has(o)&&(e[o]=s,s+=1)}}return e}getLayer(t,e){if(e!=null){if(this.layers.length<=e)throw new S(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}else if(t==null)throw new S("Provide either a layer name or layer index");for(const s of this.layers)if(s.name===t)return s;throw new S(`No such layer: ${t}`)}calculateLosses(){return T(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=Ge.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const o of this.layers){const a=o.getClassName(),l=o.getConfig(),u=[];for(let h=0;h<o.inboundNodes.length;h++){const f=o.inboundNodes[h],d=Ge.nodeKey(o,h);let p={};if(this.containerNodes.has(d)){if(f.callArgs)try{JSON.stringify(f.callArgs),p=f.callArgs}catch{console.warn(`Layer ${o.name} was passed non-serializable keyword arguments: ${f.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(f.inboundLayers.length>0){const m=[];for(let b=0;b<f.inboundLayers.length;b++){const v=f.inboundLayers[b],E=f.nodeIndices[b],x=f.tensorIndices[b],I=Ge.nodeKey(v,E);let C=e[I];C==null&&(C=0),m.push([v.name,C,x,p])}u.push(m)}}}const c={};c.name=o.name,c.className=a,c.config=l,c.inboundNodes=u,s.push(c)}t.layers=s;const r=[];for(let o=0;o<this.inputLayers.length;o++){const a=this.inputLayers[o],l=this.inputLayersNodeIndices[o],u=Ge.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=e[u];c==null&&(c=0);const h=this.inputLayersTensorIndices[o];r.push([a.name,c,h])}t.inputLayers=r;const i=[];for(let o=0;o<this.outputLayers.length;o++){const a=this.outputLayers[o],l=this.outputLayersNodeIndices[o],u=Ge.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=e[u];c==null&&(c=0);const h=this.outputLayersTensorIndices[o];i.push([a.name,c,h])}return t.outputLayers=i,t}static fromConfig(t,e,s={},r=!1){const i={},o={};function a(b,v){b.name in o?o[b.name].push(v):o[b.name]=[v]}function l(b,v){const E=[];let x;for(const I of v){const C=I[0],$=I[1],L=I[2];if(x=I[3]==null?{}:I[3],!(C in i)){a(b,v);return}const R=i[C];if(R.inboundNodes.length<=$){a(b,v);return}const F=R.inboundNodes[$];E.push(F.outputTensors[L])}E.length>0&&b.apply(he(E),x)}function u(b){const v=b.name,E=nn(b,e.customObjects!=null?e.customObjects:{});E.setFastWeightInitDuringBuild(r),i[v]=E,b.inboundNodes.forEach(I=>{if(!(I instanceof Array))throw new S(`Corrupted configuration, expected array for nodeData: ${I}`);a(E,I)})}const c=e.name,h=e.layers;for(const b of h)u(b);for(;!zv(o);)for(const b of h){const v=i[b.name];if(v.name in o){const E=o[v.name];delete o[v.name];for(const x of E)l(v,x)}}const f=[],d=[],p=e.inputLayers;for(const b of p){const v=b[0],E=b[1],x=b[2];ye(v in i);const C=i[v].inboundNodes[E].outputTensors;f.push(C[x])}const m=e.outputLayers;for(const b of m){const v=b[0],E=b[1],x=b[2];ye(v in i);const C=i[v].inboundNodes[E].outputTensors;d.push(C[x])}return new t({inputs:f,outputs:d,name:c})}get stateful(){if(this._stateful)throw new S("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){T(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function dd(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(i=>{i in n?r.push(n[i]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function pd(n,t){return dd(n,t,"classWeight")}function g2(n,t){return dd(n,t,"sampleWeight")}async function md(n,t,e,s){if(t!=null||s!=null)throw new Error("Support sampleWeight is not implemented yet");if(e!=null){const r=T(()=>{if(n.shape.length===1)return Vn(n);if(n.shape.length===2){if(n.shape[1]>1)return ws(n,1);if(n.shape[1]===1)return D(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),i=Array.from(await r.data());j(r);const o=[];return i.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);o.push(e[a])}),Ht(o,"float32")}else return null}function tI(n,t){return k(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const eI=32;function gd(n,t){let e,s;const r=t;e=r.xs,s=r.ys,g(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const i=bd("input",n.inputNames,e),o=bd("output",n.outputNames,s),a=i[0].shape[0];g(i.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${i.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),g(o.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<i.length;l++)g(i[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<o.length;l++)g(o[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:i,ys:o}}function bd(n,t,e){if(e instanceof yt)return[e];if(Array.isArray(e))return g(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new S(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function nI(n){if(n.length===3)throw new Y("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function sI(n,t,e){const s=e.batchesPerEpoch!=null;if(g(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),g(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),g(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),g(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),g(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let i,o;if(r)if(yd(e.validationData))g(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const b=nI(e.validationData);i=b.xs,o=b.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let u;r?u=l.slice().concat(l.map(b=>"val_"+b)):u=l.slice();const c=Qf(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:f,history:d}=td(c,h,e.epochs,null,null,rI(t,e),null,r,u);f.setModel(n),n.history=d,await f.onTrainBegin(),n.stopTraining_=!1;let p=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;p<e.epochs;){const b={};await f.onEpochBegin(p);let v=0,E=0;for(s||(m=await t.iterator());!s||v<e.batchesPerEpoch;){const x=await m.next();if(s&&x.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${v} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(x.value!=null){const{xs:I,ys:C}=gd(n,x.value),$={};$.batch=E,$.size=I[0].shape[0],await f.onBatchBegin(E,$);const L=[];if(e.classWeight!=null){const B=pd(e.classWeight,n.outputNames);for(let V=0;V<B.length;++V)L.push(await md(C[V],null,B[V]))}const R=I.concat(C).concat(L),F=a(R);j(R);for(let B=0;B<l.length;++B){const V=l[B],H=F[B];$[V]=H,Ke(H)}await f.onBatchEnd(E,$),Yf($),E++,v++}if(s?v>=e.batchesPerEpoch:x.done){if(r){let I;yd(e.validationData)?I=mt(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):I=mt(n.evaluate(i,o,{batchSize:e.validationBatchSize==null?eI:e.validationBatchSize,verbose:0}));for(let C=0;C<n.metricsNames.length;++C)b[`val_${n.metricsNames[C]}`]=I[C]}break}if(n.stopTraining_)break}if(await f.onEpochEnd(p,b),p++,n.stopTraining_)break}return await f.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function rI(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function yd(n){return typeof n.iterator=="function"}function iI(n){return typeof n.next=="function"}async function oI(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let i=[];if(e.verbose>0)throw new Y("Verbose mode is not implemented yet.");g(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const o=iI(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const u=await o.next();if(i=T(()=>{if(u.value){const{xs:c,ys:h}=gd(n,u.value),f=c.concat(h),d=T(()=>r(f));if(j(f),l===0)for(let m=0;m<d.length;++m)i.push(K(0));const p=f[0].shape[0];for(let m=0;m<d.length;++m){const b=d[m],v=i[m];i[m]=T(()=>M(i[m],k(p,b))),l>0&&j(v)}j(d),a+=p,++l}return i}),u.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let u=0;u<i.length;++u){const c=i[u];i[u]=q(i[u],a),j(c)}return he(i)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ma(n){g(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function pr(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>ns(s,t,e-t)):ns(n,t,e-t)}function za(n,t){return T(()=>n==null?null:Array.isArray(n)?n.map(e=>za(e,t)):gf(n,t.dtype==="int32"?t:P(t,"int32")))}function La(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}async function aI(n,t,e,s,r,i,o,a,l,u,c,h,f,d,p){r==null&&(r=32),i==null&&(i=1),c==null&&(c=!0),f==null&&(f=0);let m=!1;if(l!=null&&u!=null&&(m=!0),p!=null&&(m=!0,d==null))throw new S("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const b=n.checkNumSamples(e,r,d,"steps_per_epoch");let v;b!=null&&(v=Pe(0,b)),o==null&&(o=1);const{callbackList:E,history:x}=td(a,o,i,f,b,d,r,m,h);E.setModel(n),n.history=x,await E.onTrainBegin(),n.stopTraining_=!1;for(let I=f;I<i;++I){await E.onEpochBegin(I);const C={};if(d!=null)throw new Y("stepsPerEpoch mode is not implemented yet.");{if(c==="batch")throw new Y("batch shuffling is not implemneted yet");c&&it(v);const $=Ht(v),L=La(b,r);for(let R=0;R<L.length;++R){const F={};if(await E.onBatchBegin(R,F),T(()=>{const B=L[R][0],V=L[R][1],H=ns($,B,V-B);F.batch=R,F.size=V-B;const tt=za(e,H),at=t(tt);for(let rt=0;rt<s.length;++rt){const xt=s[rt],ut=at[rt];F[xt]=ut,Ke(ut)}if(R===L.length-1&&m){const rt=n.testLoop(l,u,r);for(let xt=0;xt<s.length;++xt){const ut=s[xt],$t=rt[xt];Ke($t),C["val_"+ut]=$t}}}),await E.onBatchEnd(R,F),Yf(F),n.stopTraining_)break}$.dispose()}if(await E.onEpochEnd(I,C),n.stopTraining_)break}return await E.onTrainEnd(),await n.history.syncData(),n.history}async function lI(n,t,e,s={}){if(n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;let r,i,o,a,l,u,c,h,f;try{const d=s.batchSize==null?32:s.batchSize;Ma(d);const m=await n.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,d);r=m[0],i=m[1],f=m[2];let b=!1,v;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)l=s.validationData[0],u=s.validationData[1];else throw s.validationData.length===3?new Y("validationData including sample weights is not supported yet."):new S(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const B=await n.standardizeUserData(l,u,null,null,!0,d);c=B[0],h=B[1],v=c.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const F=Math.floor(r[0].shape[0]*(1-s.validationSplit)),B=r[0].shape[0];c=pr(r,F,B),o=r,r=pr(r,0,F),h=pr(i,F,B),a=i,i=pr(i,0,F),v=c.concat(h)}else s.validationSteps!=null&&(b=!0);const E=r.concat(i).concat(f);n.checkTrainableWeightsConsistency();const x=n.makeTrainFunction(),I=n.getDedupedMetricsNames();let C,$;b?(n.makeTestFunction(),C=n.testFunction,$=I.slice().concat(I.map(F=>"val_"+F))):(C=null,v=[],$=I.slice());const L=Qf(s.callbacks,s.yieldEvery);return await aI(n,x,E,I,d,s.epochs,s.verbose,L,C,v,s.shuffle,$,s.initialEpoch,null,null)}finally{n.isTraining=!1,Ve(r,t),Ve(i,e),Ve(o,t),Ve(a,e),Ve(c,l),Ve(h,u),f!=null&&j(f)}}function wd(n){const t=[];n instanceof yt&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(lr(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Ve(n,t){if(n==null)return;const e=[];if(t instanceof yt)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const i=t[r];e.push(i.id)}const s=[];if(n instanceof yt)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const i=n[r];e.indexOf(i.id)===-1&&s.push(i)}s.forEach(r=>{r.isDisposed||r.dispose()})}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function uI(n){return n instanceof yt}function Ra(n){return Array.isArray(n)}function vd(n){return!uI(n)&&!Ra(n)}function kd(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let o=!1;if(Ra(n)&&n.length>0)o=!0;else if(vd(n)){for(const a in n)if(n.hasOwnProperty(a)){o=!0;break}}else o=!0;if(o)throw new S(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(o=>null);let i;if(vd(n)){n=n,i=[];for(const o of t){if(n[o]==null)throw new S(`No data provided for "${o}". Need data for each key in: ${t}`);i.push(n[o])}}else if(Ra(n)){if(n=n,n.length!==t.length)throw new S(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);i=n}else{if(n=n,t.length>1)throw new S(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);i=[n]}if(i=wd(i),e!=null)for(let o=0;o<t.length;++o){if(e[o]==null)continue;const a=i[o];if(a.shape.length!==e[o].length)throw new S(`Error when checking ${r}: expected ${t[o]} to have ${e[o].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[o].length;++l){if(l===0&&!s)continue;const u=a.shape[l],c=e[o][l];if(c!=null&&c>=0&&u!==c)throw new S(`${r} expected a batch of elements where each example has shape [${e[o].slice(1,e[o].length)}] (i.e.,tensor shape [*,${e[o].slice(1,e[o].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return i}function cI(n,t,e){const s=xn(n.map(i=>i.shape[0]));s.sort();const r=xn(t.map(i=>i.shape[0]));if(r.sort(),s.length>1)throw new S(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(i=>i.shape))}`);if(r.length>1)throw new S(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(i=>i.shape))}`);if(s.length>0&&r.length>0&&!Wt(s,r))throw new S(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function hI(n,t,e){const s=[Ni,Di,dr];for(let r=0;r<n.length;++r){const i=n[r],o=t[r],a=e[r];if(o!=null){if(o===dr&&i.shape[i.shape.length-1]===1)throw new S(`You are passing a target array of shape ${i.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(o)!==-1){const l=i.shape.slice(1),u=a.slice(1);for(let c=0;c<l.length;++c){const h=l[c],f=u[c];if(f!=null&&h!==f)throw new S(`A target Tensor with shape ${i.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function xd(n,t,e,s=!0,r=""){let i;if(Array.isArray(n)){if(n.length!==t.length)throw new S(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);i=n}else{if(t.length>1)throw new S(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);i=[n]}if(e!=null)for(let o=0;o<t.length;++o){if(e[o]==null)continue;const a=i[o];if(a.shape.length!==e[o].length)throw new S(`Error when checking ${r}: expected ${t[o]} to have ${e[o].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[o].length;++l){if(l===0&&!s)continue;const u=a.shape[l],c=e[o][l];if(c!=null&&c!==u)throw new S(`Error when checking ${r}: expected ${t[o]} to have shape ${JSON.stringify(e[o])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function fI(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let i=e.hasOwnProperty(r)?e[r]:[];Array.isArray(i)||(i=[i]),s.push(i)}return s}}const dI="layers-model";class Tn extends Ge{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new S("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");JE(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=KE(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof mn))throw new S("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const o in t.loss)if(this.outputNames.indexOf(o)===-1)throw new S(`Unknown entry in loss dictionary: "${o}". Only expected the following keys: ${this.outputNames}`);for(const o of this.outputNames)t.loss[o]==null&&console.warn(`Output "${o}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${o} during training`),e.push($a(t.loss[o]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new S(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>$a(a))}else{const o=$a(t.loss);this.outputs.forEach(a=>{e.push(o)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let o=0;o<this.outputs.length;++o){const a=this.internalOutputShapes[o],l=this.outputNames[o];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[o])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],es("loss",()=>{for(let o=0;o<this.outputs.length;++o){if(s.indexOf(o)!==-1)continue;const a=this.lossFunctions[o];this.outputs.length>1&&(this.metricsTensors.push([a,o]),this.metricsNames.push(this.outputNames[o]+"_loss"))}});const r=fI(t.metrics,this.outputNames),i=(o,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[o]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,o])};es("metric",()=>{for(let o=0;o<this.outputs.length;++o){if(s.indexOf(o)!==-1)continue;const a=r[o];(u=>{let h,f,d;for(const p of u){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const b=this.internalOutputShapes[o];b[b.length-1]===1||this.lossFunctions[o]===Di?["accuracy","acc"].indexOf(p)!==-1?f=rd:["crossentropy","ce"].indexOf(p)!==-1&&(f=OE):this.lossFunctions[o]===Ti?["accuracy","acc"].indexOf(p)!==-1?f=BE:["crossentropy","ce"].indexOf(p)!==-1&&(f=ld):["accuracy","acc"].indexOf(p)!==-1?f=id:["crossentropy","ce"].indexOf(p)!==-1&&(f=ad);let v;["accuracy","acc"].indexOf(p)!==-1?v="acc":["crossentropy","ce"].indexOf(p)!==-1&&(v="ce"),d=f,h=""+v}else d=jE(p),h=""+_i(p);let m;es(h,()=>{m=d}),i(o,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;Ma(r);const o=this.standardizeUserDataXY(t,e,!0,r);try{const a=o[0].concat(o[1]);this.makeTestFunction();const l=this.testFunction,u=this.testLoop(l,a,r,s.verbose,s.steps);return he(u)}finally{Ve(o[0],t),Ve(o[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),oI(this,t,e)}checkNumSamples(t,e,s,r="steps"){let i;if(s!=null){if(i=null,e!=null)throw new S(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?i=t[0].shape[0]:i=t.shape[0];else throw new S(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new S("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],i=this.retrieveSymbolicTensors(r),o=new An;if(t instanceof yt&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new S(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)o.add(this.inputs[l],t[l])}else for(const l of this.inputs){const u=t[l.name];if(u==null)throw new S(`No value is provided for the model's input ${l.name}`);o.add(l,u)}const a=hr(i,o);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Xn(null,t.length);let s=t.length;for(const r of this.layers){const i=Array.isArray(r.output)?r.output:[r.output],o=i.map(a=>a.name);for(let a=0;a<t.length;++a){const l=o.indexOf(t[a]);if(l!==-1&&(e[a]=i[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((i,o)=>{i==null&&r.push(t[o])}),new S(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return T(()=>{const r=this.checkNumSamples(t);if(s)throw new Y("Verbose predictLoop() is not implemented yet.");const i=La(r,e),o=this.outputs.map(a=>[]);for(let a=0;a<i.length;++a)T(()=>{const u=i[a][0],c=i[a][1],h=pr(t,u,c),f=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)f.push({key:this.inputs[p],value:h[p]});else f.push({key:this.inputs[0],value:h});const d=new An(f);return hr(this.outputs,d)}).forEach((u,c)=>o[c].push(u));return he(o.map(a=>re(a,0)))})}predict(t,e={}){const s=wd(t);xd(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return Ma(r),this.predictLoop(s,r)}finally{Ve(s,t)}}predictOnBatch(t){xd(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new De("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const i=[];for(let o=0;o<this.feedOutputShapes.length;++o){const a=this.feedOutputShapes[o];this.feedLossFns[o]===Ti?i.push(a.slice(0,a.length-1).concat([1])):i.push(a)}if(t=kd(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=kd(e,this.feedOutputNames,i,!1,"target"),cI(t,e,null),hI(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new S(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,i=!0,o){const[a,l]=this.standardizeUserDataXY(t,e,i,o);if(s!=null)throw new Error("sample weight is not supported yet.");let u=null;if(r!=null){const c=pd(r,this.outputNames);u=[];for(let h=0;h<c.length;++h)u.push(await md(l[h],null,c[h]))}return[a,l,u]}testLoop(t,e,s,r=0,i){return T(()=>{const o=this.checkNumSamples(e,s,i,"steps"),a=[];if(r>0)throw new Y("Verbose mode is not implemented yet.");if(i!=null)throw new Y("steps mode in testLoop() is not implemented yet");{const l=La(o,s),u=Ht(Pe(0,o));for(let c=0;c<l.length;++c){const h=l[c][0],f=l[c][1],d=ns(u,h,f-h),p=za(e,d),m=t(p);if(c===0)for(let b=0;b<m.length;++b)a.push(K(0));for(let b=0;b<m.length;++b){const v=m[b];a[b]=M(a[b],k(f-h,v))}}for(let c=0;c<a.length;++c)a[c]=q(a[c],o)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let i=r;if(nf(t,r)>1){const o=nf(t.slice(0,s),r);i+=`_${o}`}e.push(i)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),o=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const f=new An(h),d=hr(this.outputs,f,{training:!0});let p;for(let m=0;m<this.lossFunctions.length;++m){const b=this.lossFunctions[m];let v=b(r[m],d[m]);i[m]!=null&&(v=tI(v,i[m]));const E=_t(v);e.push(E),m===0?p=v:p=M(p,v)}for(let m=0;m<this.metricsTensors.length;++m){let b;if(this.outputs.length>1&&m<this.outputs.length)b=e[m];else{const v=this.metricsTensors[m][0],E=this.metricsTensors[m][1];b=_t(v(r[E],d[E]))}Ke(b),o.push(b)}return p=_t(p),this.calculateLosses().forEach(m=>{p=M(p,m)}),p},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(o)}}makeTestFunction(){this.testFunction=t=>T(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),i=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=[];for(let u=0;u<this.inputs.length;++u)o.push({key:this.inputs[u],value:r[u]});const a=new An(o),l=hr(this.outputs,a);for(let u=0;u<this.lossFunctions.length;++u){const c=this.lossFunctions[u],h=_t(c(i[u],l[u]));u===0?s=h:s=M(s,h),e.push(s)}for(let u=0;u<this.metricsTensors.length;++u){const c=this.metricsTensors[u][0],h=this.metricsTensors[u][1],f=_t(c(i[h],l[h]));e.push(f)}return e})}async fit(t,e,s={}){return lI(this,t,e,s)}async fitDataset(t,e){return sI(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],i=s[1],a=this.makeTrainFunction()(r.concat(i)),l=[];for(const u of a){const c=await u.data();l.push(c[0])}return j(a),Ve(s[0],t),Ve(s[1],e),he(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,i=this.getWeights(s);for(let o=0;o<r.length;++o)s&&!r[o].trainable||e.push({name:r[o].originalName,tensor:i[o]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Mo().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Mo().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=ln(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>ln(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=ln(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[ln(_i(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>ln(_i(t)));{const t={};for(const e in this.metrics)t[e]=ln(_i(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Mi(t.optimizer_config),s=nn(e);let r;if(typeof t.loss=="string")r=Qn(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(o=>Qn(o));else if(t.loss!=null){r={};for(const o in t.loss)r[o]=Qn(t.loss[o])}let i;if(Array.isArray(t.metrics))i=t.metrics.map(o=>Qn(o));else if(t.metrics!=null){i={};for(const o in t.metrics)i[o]=Qn(t.metrics[o])}this.compile({loss:r,metrics:i,optimizer:s})}async save(t,e){if(typeof t=="string"){const u=Mg(t);if(u.length===0)throw new S(`Cannot find any save handlers for URL '${t}'`);if(u.length>1)throw new S(`Found more than one (${u.length}) save handlers for URL '${t}'`);t=u[0]}if(t.save==null)throw new S("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await Oc(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:dI,generatedBy:`TensorFlow.js tfjs-layers v${fd}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const u="optimizer",{data:c,specs:h}=await Oc(await this.optimizer.getWeights(),u);s.specs.push(...h),s.data=To([s.data,c])}return this.userDefinedMetadata!=null&&(cd(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){cd(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}Tn.className="Model",_(Tn);class Sd extends Tn{}Sd.className="Functional",_(Sd);var pI,mI,gI,bI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function b2(n,t){"modelTopology"in n||(n={modelTopology:n}),n=n;let e=n.modelTopology;e.model_config!=null&&(e=e.model_config);const s=bI(e),r=gI(s,t);if(n.weightsManifest!=null){const i=await pI.loadWeights(n.weightsManifest,n.pathPrefix,r.weights.map(a=>a.originalName)),o={};for(const a of r.weights)o[a.originalName]=i[a.originalName];r.loadWeights(o),mI(i)}return r}async function yI(n,t){if(t==null&&(t={}),typeof n=="string"){const e=zg(n,t);if(e.length===0)e.push(fb(n,t));else if(e.length>1)throw new S(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return wI(n,void 0,t)}async function wI(n,t,e){if(e==null&&(e={}),n.load==null)throw new S("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let r=s.modelTopology;r.model_config!=null&&(r=r.model_config);const i=e.strict==null?!0:e.strict,o=s.weightData!=null&&s.weightSpecs!=null&&i,a=nn(Mi(r),t,o),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new S("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:u,optimizerWeights:c}=vI(s.weightData,s.weightSpecs);a.loadWeights(u,i),a.optimizer!=null&&c.length>0&&await a.optimizer.setWeights(c),j(u),j(c.map(h=>h.tensor))}return a}function vI(n,t){const e=Bc(n,t),s={},r=[];return t.forEach(i=>{i.group==="optimizer"?r.push({name:i.name,tensor:e[i.name]}):s[i.name]=e[i.name]}),{modelWeights:s,optimizerWeights:r}}class zs extends Tn{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:bi("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new S(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof zs||t instanceof Tn;let s;if(e){if(s=t,s.outputs.length!==1)throw new S("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new S("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new S("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=Cf({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new S(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new S("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=Df(this.outputs[0])}this.inboundNodes=[],new Si({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Xn(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(ht(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Tn({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new De("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new De("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new De("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new De("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let i,o={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new S("Legacy serialization format not supported yet.");i=e}else g(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=e.layers,delete e.layers,o=e;const a=new t(o);if(!(a instanceof zs))throw new Y(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of i){const c=nn(l,void 0,r);r&&c.setFastWeightInitDuringBuild(!0),a.add(c)}return a}set stopTraining(t){if(this.model==null)throw new S("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new S("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}zs.className="Sequential",_(zs);var kI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ed(n){return new Tn(n)}function xI(n){return new zs(n)}function Oa(n,t){return t==null&&(t={}),yI(n,t)}function y2(n){return Cf(n)}function w2(n,t){kI.registerCallbackConstructor(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class fe extends bs{getConfig(){return{}}}class Id extends fe{apply(t,e=1){return ek(t,e)}}Id.className="elu",_(Id);class Ad extends fe{apply(t){return bw(t)}}Ad.className="selu",_(Ad);class Nd extends fe{apply(t){return wn(t)}}Nd.className="relu",_(Nd);class Td extends fe{apply(t){return T(()=>Go(6,wn(t)))}}Td.className="relu6",_(Td);class Dd extends fe{apply(t){return t}}Dd.className="linear",_(Dd);class Cd extends fe{apply(t){return Qr(t)}}Cd.className="sigmoid",_(Cd);class $d extends fe{apply(t){return sk(t)}}$d.className="hardSigmoid",_($d);class _d extends fe{apply(t){return Jo(t)}}_d.className="softplus",_(_d);class Fd extends fe{apply(t){return nk(t)}}Fd.className="softsign",_(Fd);class Md extends fe{apply(t){return yh(t)}}Md.className="tanh",_(Md);class Ba extends fe{apply(t,e=-1){return bh(t,e)}}Ba.className="softmax",_(Ba);class zd extends fe{apply(t,e=-1){return Oy(t,e)}}zd.className="logSoftmax",_(zd);class Ld extends fe{apply(t,e=1){return T(()=>k(Qr(k(t,e)),t))}}Ld.className="swish",_(Ld);class Rd extends fe{apply(t){return T(()=>k(t,yh(Jo(t))))}}Rd.className="mish",_(Rd);function Dn(n){return n.getClassName()}function Pa(n,t={}){return ir(n,Se.getMap().classNameMap,t,"activation")}function Cn(n){if(n==null){const t={};return t.className="linear",t.config={},Pa(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Pa(t)}else return n instanceof fe?n:Pa(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ua(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Od extends bs{}class zi extends Od{constructor(t){super(),Ua(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return T(()=>{let e=qt([1]);return this.hasL1&&(e=M(e,G(k(this.l1,Jt(t))))),this.hasL2&&(e=M(e,G(k(this.l2,ur(t))))),D(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}zi.className="L1L2",_(zi);function v2(n){return Ua(n),new zi({l1:n!=null?n.l1:null,l2:0})}function k2(n){return Ua(n),new zi({l2:n!=null?n.l2:null,l1:0})}const Bd={l1l2:"L1L2"};function ft(n){return ua(n)}function Pd(n,t={}){return ir(n,Se.getMap().classNameMap,t,"regularizer")}function It(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Bd?Bd[n]:n,config:{}};return Pd(e)}else return n instanceof Od?n:Pd(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Wa extends et{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=X(t);let s=wn(t);return this.maxValue!=null&&(s=Ee(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Wa.className="ReLU",_(Wa);class Ga extends et{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=X(t);return uh(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Ga.className="LeakyReLU",_(Ga);class Va extends et{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Et(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=It(t.alphaRegularizer),this.alphaConstraint=Ut(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new S(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=ht(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new Bt({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=X(t),ph(t,this.alpha.read())}getConfig(){const t={alphaInitializer:Dt(this.alphaInitializer),alphaRegularizer:ft(this.alphaRegularizer),alphaConstraint:Pt(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}Va.className="PReLU",_(Va);class qa extends et{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new Y(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=X(t);return Uo(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}qa.className="ELU",_(qa);class Ha extends et{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=X(t);return k(s,P(Re(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Ha.className="ThresholdedReLU",_(Ha);class ja extends et{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Ba().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){const s=X(t);return this.softmax(s,this.axis)}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}ja.className="Softmax",_(ja);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ls(n,t,e){if(typeof n=="number")return Xn(n,t);if(n.length!==t)throw new S(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!Hv(r))throw new S(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function qe(n,t,e,s,r=1){if(n==null)return n;const i=t+(t-1)*(r-1);let o;return e==="same"?o=n:o=n-i+1,Math.floor((o+s-1)/s)}function rn(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+En([e-t,0]);else if(s==="same")n=n*t;else throw new S(`Unsupport padding mode: ${s}.`);return n}var Ka,Ja;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Za(n,t){return T(()=>(Ft(t),t==="channelsFirst"?nt(n,[0,2,3,1]):n))}function Ud(n,t){return T(()=>(Ft(t),t==="channelsFirst"?nt(n,[0,2,3,4,1]):n))}function Wd(n,t,e,s=1,r="valid",i,o=1){return T(()=>{if(i==null&&(i=Ue()),Ft(i),n.shape.length!==3)throw new S(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new S(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new S(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(i==="channelsFirst"&&(n=nt(n,[0,2,1])),r==="causal")throw new Y("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=ay(n,t,s,r==="same"?"same":"valid","NWC",o);return e!=null&&(a=We(a,e)),a})}function x2(n,t,e=1,s="valid",r,i=1){return Ka(()=>(Ja(r),Wd(n,t,null,e,s,r,i)))}function S2(n,t,e=[1,1],s="valid",r,i){return Ka(()=>(Ja(r),Ya(n,t,null,e,s,r,i)))}function Ya(n,t,e,s=[1,1],r="valid",i,o,a=null){return T(()=>{if(i==null&&(i=Ue()),Ft(i),n.rank!==3&&n.rank!==4)throw new S(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new S(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Za(n,i);if(r==="causal")throw new Y("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=n0({x:l,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:o,dataFormat:"NHWC",bias:e,activation:a}),i==="channelsFirst"&&(l=nt(l,[0,3,1,2])),l})}function E2(n,t,e=[1,1,1],s="valid",r,i){return Ka(()=>(Ja(r),Gd(n,t,null,e,s,r,i)))}function Gd(n,t,e,s=[1,1,1],r="valid",i,o){return T(()=>{if(i==null&&(i=Ue()),Ft(i),n.rank!==4&&n.rank!==5)throw new S(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new S(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=Ud(n,i);if(r==="causal")throw new Y("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=fy(a,t,s,r==="same"?"same":"valid","NDHWC",o),e!=null&&(a=We(a,e)),i==="channelsFirst"&&(a=nt(a,[0,4,1,2,3])),a})}class Li extends et{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Li.verifyArgs(e),this.rank=t,Kt(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new Y(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Ls(e.kernelSize,t,"kernelSize"),this.strides=Ls(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,we(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Ft(this.dataFormat),this.activation=Cn(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Et(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Ut(e.biasConstraint),this.biasRegularizer=It(e.biasRegularizer),this.activityRegularizer=It(e.activityRegularizer),this.dilationRate=Ls(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new S(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new S(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new S(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(ye("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!ha(t.kernelSize,"number",1,3))throw new S(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Dn(this.activation),useBias:this.useBias,biasInitializer:Dt(this.biasInitializer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),biasConstraint:Pt(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Rs extends Li{constructor(t,e){super(t,e),this.kernel=null,Rs.verifyArgs(e),this.filters=e.filters,Kt(this.filters,"filters"),this.kernelInitializer=Et(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Ut(e.kernelConstraint),this.kernelRegularizer=It(e.kernelRegularizer)}build(t){t=ht(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new S(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return T(()=>{t=X(t);let s;const r=this.bias==null?null:this.bias.read(),i=rf(this.activation.getClassName());if(i!=null&&this.rank===2)s=Ya(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,i);else{if(this.rank===1)s=Wd(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Ya(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=Gd(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new Y("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=ht(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let i=0;i<s.length;++i){const o=qe(s[i],this.kernelSize[i],this.padding,this.strides[i],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[i]);e.push(o)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:Dt(this.kernelInitializer),kernelRegularizer:ft(this.kernelRegularizer),kernelConstraint:Pt(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new S(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class Os extends Rs{constructor(t){super(2,t),Os.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!ha(t.kernelSize,"number",1,2))throw new S(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}Os.className="Conv2D",_(Os);class Bs extends Rs{constructor(t){super(3,t),Bs.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new S(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}Bs.className="Conv3D",_(Bs);class Xa extends Os{constructor(t){if(super(t),this.inputSpec=[new Bt({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new S(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=ht(t),t.length!==4)throw new S("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new S("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Bt({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return T(()=>{let s=X(t);if(s.shape.length!==4)throw new S(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,i=r[0];let o,a;this.dataFormat==="channelsFirst"?(o=2,a=3):(o=1,a=2);const l=r[o],u=r[a],c=this.kernelSize[0],h=this.kernelSize[1],f=this.strides[0],d=this.strides[1],p=rn(l,f,c,this.padding),m=rn(u,d,h,this.padding),b=[i,p,m,this.filters];this.dataFormat!=="channelsLast"&&(s=nt(s,[0,2,3,1]));let v=cy(s,this.kernel.read(),b,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(v=nt(v,[0,3,1,2])),this.bias!=null&&(v=We(v,this.bias.read(),this.dataFormat)),this.activation!=null&&(v=this.activation.apply(v)),v})}computeOutputShape(t){t=ht(t);const e=t.slice();let s,r,i;this.dataFormat==="channelsFirst"?(s=1,r=2,i=3):(s=3,r=1,i=2);const o=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],u=this.strides[1];return e[s]=this.filters,e[r]=rn(e[r],l,o,this.padding),e[i]=rn(e[i],u,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Xa.className="Conv2DTranspose",_(Xa);class Qa extends Bs{constructor(t){if(super(t),this.inputSpec=[new Bt({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new S(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=ht(t),t.length!==5)throw new S("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new S("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Bt({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return T(()=>{let s=X(t);if(s.shape.length!==5)throw new S(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,i=r[0];let o,a,l;this.dataFormat==="channelsFirst"?(l=2,o=3,a=4):(l=1,o=2,a=3);const u=r[l],c=r[o],h=r[a],f=this.kernelSize[0],d=this.kernelSize[1],p=this.kernelSize[2],m=this.strides[0],b=this.strides[1],v=this.strides[2],E=rn(u,m,f,this.padding),x=rn(c,b,d,this.padding),I=rn(h,v,p,this.padding),C=[i,E,x,I,this.filters];this.dataFormat!=="channelsLast"&&(s=nt(s,[0,2,3,4,1]));let $=my(s,this.kernel.read(),C,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=nt($,[0,4,1,2,3])),this.bias!==null&&($=We($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=ht(t);const e=t.slice();let s,r,i,o;this.dataFormat==="channelsFirst"?(s=1,r=2,i=3,o=4):(s=4,r=1,i=2,o=3);const a=this.kernelSize[0],l=this.kernelSize[1],u=this.kernelSize[2],c=this.strides[0],h=this.strides[1],f=this.strides[2];return e[s]=this.filters,e[r]=rn(e[r],c,a,this.padding),e[i]=rn(e[i],h,l,this.padding),e[o]=rn(e[o],f,u,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Qa.className="Conv3DTranspose",_(Qa);class Vd extends Rs{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new S("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new S("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new S(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Et(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=It(e.depthwiseRegularizer),this.depthwiseConstraint=Ut(e.depthwiseConstraint),this.pointwiseInitializer=Et(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=It(e.pointwiseRegularizer),this.pointwiseConstraint=Ut(e.pointwiseConstraint)}build(t){if(t=ht(t),t.length<this.rank+2)throw new S(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new S(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),i=[];for(let a=0;a<this.rank;++a)i.push(1);i.push(s*this.depthMultiplier,this.filters);const o=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,o,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",i,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,o,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,o,this.biasConstraint):this.bias=null,this.inputSpec=[new Bt({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return T(()=>{t=X(t);let s;if(this.rank===1)throw new Y("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=nt(t,[0,2,3,1])),s=ww(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=We(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=nt(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=Dt(this.depthwiseInitializer),t.pointwiseInitializer=Dt(this.pointwiseInitializer),t.depthwiseRegularizer=ft(this.depthwiseRegularizer),t.pointwiseRegularizer=ft(this.pointwiseRegularizer),t.depthwiseConstraint=Pt(this.depthwiseConstraint),t.pointwiseConstraint=Pt(this.pointwiseConstraint),t}}Vd.className="SeparableConv";class tl extends Vd{constructor(t){super(2,t)}}tl.className="SeparableConv2D",_(tl);class mr extends Rs{constructor(t){super(1,t),mr.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!ha(t.kernelSize,"number",1,1))throw new S(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}mr.className="Conv1D",_(mr);class el extends et{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return T(()=>{if(t=X(t),this.dataFormat==="channelsLast"){const s=wi(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return wi(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=wi(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return wi(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}el.className="Cropping2D",_(el);class nl extends et{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Ft(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,Gv(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return T(()=>{let s=X(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=nt(s,[0,2,3,1]);const i=this.size[0]*r[2],o=this.size[1]*r[3],a=this.interpolation==="nearest"?er.resizeNearestNeighbor(s,[i,o]):er.resizeBilinear(s,[i,o]);return nt(a,[0,3,1,2])}else{const i=this.size[0]*r[1],o=this.size[1]*r[2];return this.interpolation==="nearest"?er.resizeNearestNeighbor(s,[i,o]):er.resizeBilinear(s,[i,o])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}nl.className="UpSampling2D",_(nl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function SI(n,t,e=[1,1],s="valid",r,i){return T(()=>{r==null&&(r=Ue()),Ft(r);let o=Za(n,r);if(n.rank!==4)throw new S(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new S(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=Po(o,t,e,s==="same"?"same":"valid","NHWC",i),r==="channelsFirst"&&(o=nt(o,[0,3,1,2])),o})}class sl extends Li{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Et(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Ut(t.depthwiseConstraint),this.depthwiseRegularizer=It(t.depthwiseRegularizer)}build(t){if(t=ht(t),t.length<4)throw new S(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new S(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return T(()=>{t=X(t);let s=SI(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=We(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=ht(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,i=qe(e,this.kernelSize[0],this.padding,this.strides[0]),o=qe(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,i,o]:[t[0],i,o,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=Dt(this.depthwiseInitializer),t.depthwiseRegularizer=ft(this.depthwiseRegularizer),t.depthwiseConstraint=Pt(this.depthwiseRegularizer),t}}sl.className="DepthwiseConv2D",_(sl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function qd(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new S("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(i){return i==null||Array.isArray(i)?i:[i]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function Hd(n,t,e,s=!1,r,i,o=!1,a=!1){return T(()=>{const l=t.shape.length;if(l<3)throw new S(`Input should be at least 3D, but is ${l}D.`);const u=[1,0].concat(Pe(2,l));if(t=nt(t,u),i!=null)throw new Y("The rnn() functoin of the deeplearn.js backend does not support constants yet.");o&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=P(P(r,"bool"),"float32"),r.rank===l-1&&(r=Ie(r,-1)),r=nt(r,u)),s&&(t=Is(t,0),r!=null&&(r=Is(r,0)));const c=[];let h,f=e;const d=t.shape[0],p=Ns(t);let m;r!=null&&(m=Ns(r));for(let v=0;v<d;++v){const E=p[v],x=T(()=>n(E,f));if(r==null)h=x[0],f=x[1];else{const I=T(()=>{const C=m[v],$=U(Be(C),C),L=M(k(x[0],C),k(f[0],$)),R=f.map((F,B)=>M(k(x[1][B],C),k(F,$)));return{output:L,newStates:R}});h=I.output,f=I.newStates}a&&c.push(h)}let b;return a&&(b=vn(c,1)),[h,b,f]})}class un extends et{constructor(t){super(t);let e;if(t.cell==null)throw new S("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new Pi({cells:t.cell}):e=t.cell,e.stateSize==null)throw new S("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new Bt({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Pe(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Ea(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const i=[];for(const o of e)i.push([t[0],o]);return[r].concat(i)}else return r}computeMask(t,e){return T(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(i=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new Y("Constants support is not implemented in RNN yet.");Ea(t)&&(t=t[0]),t=t;const s=this.stateful?t[0]:null,r=t.slice(2);this.inputSpec[0]=new Bt({shape:[s,null,...r]});const i=[t[0]].concat(t.slice(2));this.cell.build(i);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Wt(this.stateSpec.map(a=>a.shape[a.shape.length-1]),o))throw new S(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(a=>new Bt({shape:[null,a]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){T(()=>{if(!this.stateful)throw new Ye("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new S("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>qt([s,r])):this.states_=[qt([s,this.cell.stateSize])];else if(t==null)j(this.states_),this.keptStates!=null&&(j(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>qt([s,r])):this.states_[0]=qt([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new S(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):j(this.states_);for(let r=0;r<this.states_.length;++r){const i=t[r],o=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,o];if(!Wt(i.shape,a))throw new S(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${i.shape}`);this.states_[r]=i}}this.states_=this.states_.map(r=>Ke(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const i=qd(t,s,r,this.numConstants);t=i.inputs,s=i.initialState,r=i.constants;let o=[],a=[];if(s!=null){e.initialState=s,o=o.concat(s),this.stateSpec=[];for(const u of s)this.stateSpec.push(new Bt({shape:u.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(e.constants=r,o=o.concat(r),this.numConstants=r.length),o[0]instanceof en){const u=[t].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const f=super.apply(u,e);return this.inputSpec=h,f}else return super.apply(t,e)}call(t,e){return T(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let i=e==null?null:e.initialState;t=X(t),i==null&&(this.stateful?i=this.states_:i=this.getInitialState(t));const o=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==o)throw new S(`RNN Layer has ${o} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},u=Hd((p,m)=>{const b=this.cell.call([p].concat(m),a);return[b[0],b.slice(1)]},t,i,this.goBackwards,s,null,this.unroll,this.returnSequences),c=u[0],h=u[1],f=u[2];this.stateful&&this.resetStates(f,r);const d=this.returnSequences?h:c;return this.returnState?[d].concat(f):d})}getInitialState(t){return T(()=>{let e=qt(t.shape);return e=G(e,[1,2]),e=lr(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?ma(e,[1,s]):e):this.cell.stateSize>1?[ma(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===un.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign({},s,t,e)}static fromConfig(t,e,s={}){const r=e.cell,i=nn(r,s);return new t(Object.assign(e,{cell:i}))}}un.className="RNN",_(un);class Ri extends et{}class Oi extends Ri{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Kt(this.units,"units"),this.activation=Cn(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Et(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Et(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Et(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=It(t.kernelRegularizer),this.recurrentRegularizer=It(t.recurrentRegularizer),this.biasRegularizer=It(t.biasRegularizer),this.kernelConstraint=Ut(t.kernelConstraint),this.recurrentConstraint=Ut(t.recurrentConstraint),this.biasConstraint=Ut(t.biasConstraint),this.dropout=_s([1,En([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=_s([1,En([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=ht(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return T(()=>{if(t=t,t.length!==2)throw new S(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=$n({ones:()=>Be(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=$n({ones:()=>Be(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i;const o=this.dropoutMask,a=this.recurrentDropoutMask;o!=null?i=Xe(k(t,o),this.kernel.read()):i=Xe(t,this.kernel.read()),this.bias!=null&&(i=We(i,this.bias.read())),a!=null&&(s=k(s,a));let l=M(i,Xe(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Dn(this.activation),useBias:this.useBias,kernelInitializer:Dt(this.kernelInitializer),recurrentInitializer:Dt(this.recurrentInitializer),biasInitializer:Dt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:Pt(this.kernelConstraint),recurrentConstraint:Pt(this.recurrentConstraint),biasConstraint:Pt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign({},t,e)}}Oi.className="SimpleRNNCell",_(Oi);class rl extends un{constructor(t){t.cell=new Oi(t),super(t)}call(t,e){return T(()=>{this.cell.dropoutMask!=null&&(j(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(j(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return new t(e)}}rl.className="SimpleRNN",_(rl);class Bi extends Ri{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new S("GRUCell does not support reset_after parameter set to true.");this.units=t.units,Kt(this.units,"units"),this.activation=Cn(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Cn(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Et(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Et(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Et(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=It(t.kernelRegularizer),this.recurrentRegularizer=It(t.recurrentRegularizer),this.biasRegularizer=It(t.biasRegularizer),this.kernelConstraint=Ut(t.kernelConstraint),this.recurrentConstraint=Ut(t.recurrentConstraint),this.biasConstraint=Ut(t.biasConstraint),this.dropout=_s([1,En([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=_s([1,En([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=ht(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return T(()=>{if(t=t,t.length!==2)throw new S(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=$n({ones:()=>Be(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=$n({ones:()=>Be(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,o=this.recurrentDropoutMask;let a,l,u;0<this.dropout&&this.dropout<1&&(t=k(t,i[0]));let c=Xe(t,this.kernel.read());this.useBias&&(c=We(c,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=k(r,o[0]));const h=this.recurrentKernel.read(),[f,d]=Ae(h,[2*this.units,this.units],h.rank-1),p=Xe(r,f),[m,b,v]=Ae(c,3,c.rank-1),[E,x]=Ae(p,2,p.rank-1);a=this.recurrentActivation.apply(M(m,E)),l=this.recurrentActivation.apply(M(b,x));const I=Xe(k(l,r),d);u=this.activation.apply(M(v,I));const C=M(k(a,r),k(M(1,Rt(a)),u));return[C,C]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Dn(this.activation),recurrentActivation:Dn(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Dt(this.kernelInitializer),recurrentInitializer:Dt(this.recurrentInitializer),biasInitializer:Dt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:Pt(this.kernelConstraint),recurrentConstraint:Pt(this.recurrentConstraint),biasConstraint:Pt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign({},t,e)}}Bi.className="GRUCell",_(Bi);class il extends un{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Bi(t),super(t)}call(t,e){return T(()=>{this.cell.dropoutMask!=null&&(j(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(j(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}il.className="GRU",_(il);class gr extends Ri{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Kt(this.units,"units"),this.activation=Cn(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Cn(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Et(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Et(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Et(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=It(t.kernelRegularizer),this.recurrentRegularizer=It(t.recurrentRegularizer),this.biasRegularizer=It(t.biasRegularizer),this.kernelConstraint=Ut(t.kernelConstraint),this.recurrentConstraint=Ut(t.recurrentConstraint),this.biasConstraint=Ut(t.biasConstraint),this.dropout=_s([1,En([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=_s([1,En([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=ht(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const i=this.biasInitializer,o=this.units;r=new(e=class extends $e{apply(l,u){const c=i.apply([o]),h=new ba().apply([o]),f=i.apply([o*2]);return mf(mf(c,h),f)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return T(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new S(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const i=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=$n({ones:()=>Be(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=$n({ones:()=>Be(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,a=this.recurrentDropoutMask;let l,u,c,h;0<this.dropout&&this.dropout<1&&(t=k(t,o[0]));let f=Xe(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=k(r,a[0])),f=M(f,Xe(r,this.recurrentKernel.read())),this.useBias&&(f=We(f,this.bias.read()));const[d,p,m,b]=Ae(f,4,f.rank-1);l=this.recurrentActivation.apply(d),u=this.recurrentActivation.apply(p),c=M(k(u,i),k(l,this.activation.apply(m))),h=this.recurrentActivation.apply(b);const v=k(h,this.activation.apply(c));return[v,v,c]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Dn(this.activation),recurrentActivation:Dn(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Dt(this.kernelInitializer),recurrentInitializer:Dt(this.recurrentInitializer),biasInitializer:Dt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:Pt(this.kernelConstraint),recurrentConstraint:Pt(this.recurrentConstraint),biasConstraint:Pt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign({},t,e)}}gr.className="LSTMCell",_(gr);class ol extends un{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new gr(t),super(t)}call(t,e){return T(()=>{this.cell.dropoutMask!=null&&(j(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(j(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}ol.className="LSTM",_(ol);class Pi extends Ri{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return T(()=>{t=t;let s=t.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const i=[];let o;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?o=[t[0]].concat(s):o=[o[0]].concat(s),o=l.call(o,e),i.push(o.slice(1))}s=[];for(const a of i.slice().reverse())s.push(...a);return[o[0]].concat(s)})}build(t){Ea(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{es(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=i=>({className:i.getClassName(),config:i.getConfig()}),r={cells:this.cells.map(e)};return Object.assign({},t,r)}static fromConfig(t,e,s={}){const r=[];for(const i of e.cells)r.push(nn(i,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Ia(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,i=t.splice(r);for(let o=0;o<s.weights.length;++o)e.push([s.weights[o],i[o]])}Aa(e)}}Pi.className="StackedRNNCells",_(Pi);function $n(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:i}=n,o=()=>i!=null?i(t(),e):bf(t(),e),a=()=>cr(o,t,s);return!r||r<=1?Ke(a().clone()):Array(r).fill(void 0).map(a).map(u=>Ke(u.clone()))}var I2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var EI=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class A2 extends null{}class jd extends un{constructor(t){if(t.unroll)throw new Y("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new Y("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new Bt({ndim:5})]}call(t,e){return T(()=>{if(this.cell.dropoutMask!=null&&(j(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(j(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new S("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return T(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),i=[r[0],...r.slice(2)],o=qt(i);return Array.isArray(e)?Array(e.length).fill(o):[o]})}resetStates(t,e=!1){T(()=>{if(!this.stateful)throw new Ye("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),i=[r[0],...r.slice(2)];if(s[0]==null)throw new S("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>qt(i)):this.states_=[qt(i)];else if(t==null)j(this.states_),this.keptStates!=null&&(j(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>qt(i)):this.states_[0]=qt(i);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new S(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):j(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],u=i;if(!Wt(l.shape,u))throw new S(`State ${a} is incompatible with layer ${this.name}: expected shape=${u}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Ke(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:i,strides:o,dilationRate:a}=this.cell,l=e==="channelsFirst",u=t[l?3:2],c=t[l?4:3],h=qe(u,r[0],i,o[0],a[0]),f=qe(c,r[1],i,o[1],a[1]);return[...t.slice(0,2),...l?[s,h,f]:[h,f,s]]}}jd.className="ConvRNN2D";class Ui extends gr{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:i,dataFormat:o,dilationRate:a}=t;super(Object.assign({},t,{units:e})),this.filters=e,Kt(this.filters,"filters"),this.kernelSize=Ls(s,2,"kernelSize"),this.kernelSize.forEach(l=>Kt(l,"kernelSize")),this.strides=Ls(r||1,2,"strides"),this.strides.forEach(l=>Kt(l,"strides")),this.padding=i||"valid",we(this.padding),this.dataFormat=o||"channelsLast",Ft(this.dataFormat),this.dilationRate=Ls(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>Kt(l,"dilationRate"))}build(t){var e;t=ht(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new S(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],i=4,o=this.kernelSize.concat([r,this.filters*i]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*i]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const u=this.biasInitializer,c=this.filters;l=new(e=class extends $e{apply(f,d){const p=u.apply([c]),m=yn([c]),b=u.apply([c*2]);return pa([p,m,b])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*i],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return T(()=>{if(t.length!==3)throw new S(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],i=t[1],o=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=$n({ones:()=>Be(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,u=(He,Fe,cn)=>!Fe||!Fe[cn]?He:k(Fe[cn],He);let c=u(r,l,0),h=u(r,l,1),f=u(r,l,2),d=u(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=$n({ones:()=>Be(i),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let m=u(i,p,0),b=u(i,p,1),v=u(i,p,2),E=u(i,p,3);const x=3,[I,C,$,L]=Ae(this.kernel.read(),a,x),[R,F,B,V]=this.useBias?Ae(this.bias.read(),a):[null,null,null,null];c=this.inputConv(c,I,R,this.padding),h=this.inputConv(h,C,F,this.padding),f=this.inputConv(f,$,B,this.padding),d=this.inputConv(d,L,V,this.padding);const[H,tt,at,rt]=Ae(this.recurrentKernel.read(),a,x);m=this.recurrentConv(m,H),b=this.recurrentConv(b,tt),v=this.recurrentConv(v,at),E=this.recurrentConv(E,rt);const xt=this.recurrentActivation.apply(M(c,m)),ut=this.recurrentActivation.apply(M(h,b)),$t=M(k(ut,o),k(xt,this.activation.apply(M(f,v)))),Ct=k(this.recurrentActivation.apply(M(d,E)),this.activation.apply($t));return[Ct,Ct,$t]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=EI(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign({},s,r)}inputConv(t,e,s,r){const i=ks(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?We(i,s,this.dataFormat):i}recurrentConv(t,e){return ks(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Ui.className="ConvLSTM2DCell",_(Ui);class al extends jd{constructor(t){const e=new Ui(t);super(Object.assign({},t,{cell:e}))}static fromConfig(t,e){return new t(e)}}al.className="ConvLSTM2D",_(al);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Wi extends et{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,i=this.getNoiseShape(s);return cr(()=>bf(s,this.rate,i,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}Wi.className="Dropout",_(Wi);class ll extends Wi{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}ll.className="SpatialDropout1D",_(ll);class ul extends et{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,Kt(this.units,"units"),this.activation=Cn(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Et(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Et(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Ut(t.kernelConstraint),this.biasConstraint=Ut(t.biasConstraint),this.kernelRegularizer=It(t.kernelRegularizer),this.biasRegularizer=It(t.biasRegularizer),this.activityRegularizer=It(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=ht(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=ht(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t),r=rf(this.activation.getClassName());let i;return r!=null?i=Xe(s,this.kernel.read(),r,this.bias?this.bias.read():null):(i=Xe(s,this.kernel.read()),this.bias!=null&&(i=We(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))),i})}getConfig(){const t={units:this.units,activation:Dn(this.activation),useBias:this.useBias,kernelInitializer:Dt(this.kernelInitializer),biasInitializer:Dt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:Pt(this.kernelConstraint),biasConstraint:Pt(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}ul.className="Dense",_(ul);class cl extends et{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=ht(t);for(const e of t.slice(1))if(e==null)throw new S(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Sn(t,1)]}call(t,e){return T(()=>{this.invokeCallHook(t,e);let s=X(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let i=2;i<s.rank;++i)r.push(i);r.push(1),s=nt(s,r)}return tk(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}cl.className="Flatten",_(cl);class hl extends et{constructor(t){super(t),this.supportsMasking=!0,this.activation=Cn(t.activation)}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t);return this.activation.apply(s)})}getConfig(){const t={activation:Dn(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}hl.className="Activation",_(hl);class fl extends et{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return T(()=>(t=X(t),Xv(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}fl.className="RepeatVector",_(fl);class dl extends et{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let i=1,o=null;for(let l=0;l<r.length;++l){const u=r[l];if(this.isUnknown(u))if(o===null)o=l;else throw new S("Can only specifiy one unknown dimension.");else i*=u}const a=Sn(t);if(o!==null){if(i===0||a%i!==0)throw new S(s);r[o]=a/i}else if(a!==i)throw new S(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t),r=s.shape,i=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return D(s,i)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}dl.className="Reshape",_(dl);class pl extends et{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Pe(1,t.dims.length+1);if(!Wt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new Bt({ndim:this.dims.length+1})]}computeOutputShape(t){t=ht(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return nt(X(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}pl.className="Permute",_(pl);class ml extends et{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=X(t);return ih(Jr(s,this.maskValue),-1)}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t),o=ih(Jr(s,this.maskValue),-1,!0);return k(s,P(o,s.dtype))})}}ml.className="Masking",_(ml);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class gl extends et{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(mt(t.inputLength))}this.inputDim=t.inputDim,Kt(this.inputDim,"inputDim"),this.outputDim=t.outputDim,Kt(this.outputDim,"outputDim"),this.embeddingsInitializer=Et(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=It(t.embeddingsRegularizer),this.activityRegularizer=It(t.activityRegularizer),this.embeddingsConstraint=Ut(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return T(()=>this.maskZero?(t=X(t),Jr(t,ot(t))):null)}computeOutputShape(t){if(t=ht(t),this.inputLength==null)return[...t,this.outputDim];const e=mt(this.inputLength);if(e.length!==t.length-1)throw new S(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const i=e[r],o=t[r+1];if(i!=null&&o!=null&&i!==o)throw new S(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);i==null&&(e[s]=o),s++}}return[t[0],...e,this.outputDim]}call(t,e){return T(()=>{this.invokeCallHook(t,e);let s=X(t);s.dtype!=="int32"&&(s=ar(s,"int32"));const r=gf(this.embeddings.read(),D(s,[s.size]));return D(r,ht(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Dt(this.embeddingsInitializer),embeddingsRegularizer:ft(this.embeddingsRegularizer),activityRegularizer:ft(this.activityRegularizer),embeddingsConstraint:Pt(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}gl.className="Embedding",_(gl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class rs extends et{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new Y}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const i=t[t.length-e.length+r],o=e[r];if(i==null||o==null||i<0||o<0)s.push(null);else if(i===1)s.push(o);else if(o===1)s.push(i);else{if(i!==o)throw new S("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(i)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[ht(t)]),t=t,t.length<2)throw new S(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const i of t)i!=null&&i[0]!==null&&e.push(i[0]);if(e=xn(e),e.length>1)throw new S(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let i=1;i<t.length;++i){const o=t[i]==null?null:t[i].slice(1);s=this.computeElementwiseOpOutputShape(s,o)}const r=t.map(i=>i.length);t.indexOf(null)===-1&&xn(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return T(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(i=>i.rank);if(r.indexOf(null)===-1){const i=En(r);for(let o of t){const a=o.rank;for(let l=0;l<i-a;++l)o=lr(o,1);s.push(o)}return this.mergeFunction(s)}else{let i=!1;for(const l of t){const u=l.rank;if(u==null){const c=l.shape,h=c[0],f=c.slice(1).concat([h]);let d=D(l,[h].concat(Sn(c.slice(1))));d=nt(d,[1,0]),d=D(d,f),s.push(d),i=!0}else if(u>1){const c=Pe(1,u).concat([0]);s.push(nt(l,c)),i=!0}else s.push(l)}let o=this.mergeFunction(s);const a=o.rank;if(i){if(a==null){const l=o.shape,u=l.length,c=l[u-1],h=[c].concat(l.slice(0,l.length-1));o=D(nt(D(o,[-1,c]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Pe(0,a-1));o=nt(o,l)}}return o}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,i)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=xn(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return T(()=>{if(e==null)return null;if(!Array.isArray(e))throw new S("`mask` should be an Array");if(!Array.isArray(t))throw new S("`inputs` should be an Array");if(e.length!==t.length)throw new S(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:Ie(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=Ss(s,e[r]);return s})}}class br extends rs{constructor(t){super(t)}mergeFunction(t){return T(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=M(e,t[s]);return e})}}br.className="Add",_(br);function N2(n){return Array.isArray(n)?new br({}).apply(n):new br(n)}class yr extends rs{constructor(t){super(t)}mergeFunction(t){return T(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=k(e,t[s]);return e})}}yr.className="Multiply",_(yr);function T2(n){return Array.isArray(n)?new yr({}).apply(n):new yr(n)}class wr extends rs{constructor(t){super(t)}mergeFunction(t){return T(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=M(e,t[s]);return k(1/t.length,e)})}}wr.className="Average",_(wr);function D2(n){return Array.isArray(n)?new wr({}).apply(n):new wr(n)}class vr extends rs{constructor(t){super(t)}mergeFunction(t){return T(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Jn(e,t[s]);return e})}}vr.className="Maximum",_(vr);function C2(n){return Array.isArray(n)?new vr({}).apply(n):new vr(n)}class kr extends rs{constructor(t){super(t)}mergeFunction(t){return T(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Go(e,t[s]);return e})}}kr.className="Minimum",_(kr);function $2(n){return Array.isArray(n)?new kr({}).apply(n):new kr(n)}class xr extends rs{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new S("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const i=t[r].slice();i.splice(this.axis,1);let o=!1;for(const a of s)if(Wt(a,i)){o=!0;break}o||s.push(i)}if(s.length>1)throw new S("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return T(()=>pa(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new S("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const i of e.slice(1)){if(s[r]==null||i[r]==null){s[r]=null;break}s[r]+=i[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new S("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new S("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new S(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return T(()=>{let s=!0;if(e.forEach(o=>{if(o!=null){s=!1;return}}),s)return null;const r=[];for(let o=0;o<t.length;++o)e[o]==null?r.push(P(Be(t[o]),"bool")):e[o].rank<t[o].rank?r.push(Ie(e[o],-1)):r.push(e[o]);const i=re(r,this.axis);return Nb(i,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}xr.className="Concatenate",_(xr);function _2(n){return Array.isArray(n)?new xr({}).apply(n):new xr(n)}function Sr(n,t){for(;n<0;)n+=t;return n}function II(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new Y("batchDot is not implemented for tensors of 4D or higher rank yet");if(g(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),g(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new Y("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const i=e;return T(()=>{let o;if(s>r){o=s-r;const l=[];for(let u=0;u<o;++u)l.push(1);t=D(t,t.shape.concat(l))}else if(r>s){o=r-s;const l=[];for(let u=0;u<o;++u)l.push(1);n=D(n,n.shape.concat(l))}else o=0;let a;if(n.shape.length===2&&t.shape.length===2)i[0]===i[1]?a=G(k(n,t),i[0]):a=G(k(nt(n,[1,0]),t),i[1]);else{const l=i[0]!==n.shape.length-1,u=i[1]===t.shape.length-1;a=pt(n,t,l,u)}if(o>0){let l;s>r?l=s+r-3:l=s-1;const u=[];for(let c=l;c<l+o;++c)u.push(c);a=As(a,u)}return a.shape.length===1&&(a=Ie(a,1)),a})}class bl extends rs{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){g(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new Y("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new S(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new S(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((i,o)=>Sr(i,t[o].shape.length)):r=[Sr(this.axes,e.shape.length),Sr(this.axes,s.shape.length)],this.normalize&&(e=Ai(e,r[0]),s=Ai(s,r[1])),II(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[Sr(this.axes,t.length),Sr(this.axes,e.length)],s}computeOutputShape(t){g(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new Y("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const i=e.concat(s);return i.length===1&&i.push(1),i}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}bl.className="Dot",_(bl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class yl extends et{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t);return cr(()=>M(vi(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}yl.className="GaussianNoise",_(yl);class wl extends et{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return T(()=>{this.invokeCallHook(t,e);const s=X(t);return this.rate>0&&this.rate<1?cr(()=>{const i=Math.sqrt(this.rate/(1-this.rate));return k(s,vi(s.shape,1,i))},()=>s,e.training||!1):s})}}wl.className="GaussianDropout",_(wl);class vl extends et{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||X(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return T(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return cr(()=>{const i=X(t),l=-1.6732632423543772*1.0507009873554805;let u=Ys(Xr(s),this.rate);u=ar(u,"float32");const c=((1-this.rate)*(1+this.rate*l**2))**-.5,h=-c*l*this.rate,f=M(k(i,u),k(M(u,-1),l));return M(k(f,c),h)},()=>X(t),e.training||!1)}return t})}}vl.className="AlphaDropout",_(vl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Er(n,t,e,s,r,i=.001){let o;if(n.rank===2)o=Vb(n,t,e,s,r,i);else if(n.rank===3)o=Hb(n,t,e,s,r,i);else if(n.rank===4)o=Kb(n,t,e,s,r,i);else throw new Y(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return o}function AI(n,t,e,s,r=.001){return T(()=>{const i=Xs(n,s),o=i.mean,a=i.variance;return[Er(n,o,a,e,t,r),o,a]})}function NI(n,t,e,s,r=.001){return T(()=>{const i=Xs(n,s),o=i.mean,a=i.variance,l=[];for(const p of Pe(0,n.rank))s.indexOf(p)!==-1?l.push(1):l.push(n.shape[p]);const u=D(o,l),c=D(a,l),h=t==null?null:D(t,l),f=e==null?null:D(e,l);return[Er(n,u,c,f,h,r),o,a]})}function TI(n,t,e,s,r=.001){return Wt(s.slice().sort(),Pe(0,n.rank-1))?AI(n,t,e,s,r):NI(n,t,e,s,r)}class kl extends et{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Et(t.betaInitializer||"zeros"),this.gammaInitializer=Et(t.gammaInitializer||"ones"),this.movingMeanInitializer=Et(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Et(t.movingVarianceInitializer||"ones"),this.betaConstraint=Ut(t.betaConstraint),this.gammaConstraint=Ut(t.gammaConstraint),this.betaRegularizer=It(t.betaRegularizer),this.gammaRegularizer=It(t.gammaRegularizer)}build(t){t=ht(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new S(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new Bt({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return T(()=>{const s=e.training==null?!1:e.training,r=X(t),i=r.shape,o=i.length,a=Pe(0,o),l=this.axis>=0?this.axis:this.axis+o;a.splice(l,1);const u=Xn(1,o);u[l]=i[l];const c=a.slice();c.sort();const h=!Wt(c,Pe(0,o).slice(0,o-1)),f=()=>{if(h){const E=D(this.movingMean.read(),u),x=D(this.movingVariance.read(),u),I=this.center?D(this.beta.read(),u):null,C=this.scale?D(this.gamma.read(),u):null;return Er(r,E,x,I,C,this.epsilon)}else return Er(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return f();const[d,p,m]=TI(r,this.gamma.read(),this.beta.read(),a,this.epsilon),b=(E,x,I)=>{T(()=>{const C=1-I,$=E.read(),L=k(U($,x),C);E.write(U($,L))})};return b(this.movingMean,p,this.momentum),b(this.movingVariance,m,this.momentum),d})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Dt(this.betaInitializer),gammaInitializer:Dt(this.gammaInitializer),movingMeanInitializer:Dt(this.movingMeanInitializer),movingVarianceInitializer:Dt(this.movingVarianceInitializer),betaRegularizer:ft(this.betaRegularizer),gammaRegularizer:ft(this.gammaRegularizer),betaConstraint:Pt(this.betaConstraint),gammaConstraint:Pt(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}kl.className="BatchNormalization",_(kl);class xl extends et{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Et(t.betaInitializer||"zeros"),this.gammaInitializer=Et(t.gammaInitializer||"ones"),this.betaRegularizer=It(t.betaRegularizer),this.gammaRegularizer=It(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=ht(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=e);for(const i of this.axis)if(i<0||i>=e)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==xn(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(i=>t[i]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=X(t),r=s.shape,i=r.length;return T(()=>{let{mean:a,variance:l}=Xs(s,this.axis,!0);const u=Xn(1,i);for(const m of this.axis)u[m]=r[m];const c=m=>m!=null&&m.shape.length!==i?D(m,u):m;let h=this.scale?c(this.gamma.read()):null,f=this.center?c(this.beta.read()):null;const d=[],p=[];for(let m=0;m<i;++m)this.axis.indexOf(m)!==-1?(d.push(r[m]),p.push(1)):(d.push(1),p.push(r[m]));return a=Je(a,d),l=Je(l,d),h!=null&&(h=Je(h,p)),f!=null&&(f=Je(f,p)),Er(s,a,l,f,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Dt(this.betaInitializer),gammaInitializer:Dt(this.gammaInitializer),betaRegularizer:ft(this.betaRegularizer),gammaRegularizer:ft(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}xl.className="LayerNormalization",_(xl);var DI,CI,Kd;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function F2(n,t){return CI(()=>{if(n.rank!==3)throw new Kd(`temporalPadding expects input tensor to be 3-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[1,1]),t.length!==2)throw new Kd(`temporalPadding expects input padding pattern to be a length-2 array, but received a length-${t.length} array.`);const e=[[0,0],t,[0,0]];return DI.pad(n,e)})}function $I(n,t,e){return T(()=>{if(n.rank!==4)throw new S(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new S("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Ue()),e!=="channelsLast"&&e!=="channelsFirst")throw new S(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],dh(n,s)})}class Sl extends et{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Ue():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new S(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new S(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new S(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new Bt({ndim:4})]}computeOutputShape(t){t=ht(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return T(()=>$I(X(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Sl.className="ZeroPadding2D",_(Sl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Gi(n,t,e,s,r,i){return T(()=>{Ft(r),af(i),we(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=Ue()),i==null&&(i="max"),n=Za(n,r);let o;const a=s==="same"?"same":"valid";return i==="max"?o=Wy(n,t,e,a):o=Ob(n,t,e,a),r==="channelsFirst"&&(o=nt(o,[0,3,1,2])),o})}function Jd(n,t,e,s,r,i){return T(()=>{Ft(r),af(i),we(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=Ue()),i==null&&(i="max"),n=Ud(n,r);let o;const a=s==="same"?"same":"valid";return i==="max"?o=Vy(n,t,e,a):o=Pb(n,t,e,a),r==="channelsFirst"&&(o=nt(o,[0,4,1,2,3])),o})}class Zd extends et{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new S(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(Kt(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new S(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);Kt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,we(this.padding),this.inputSpec=[new Bt({ndim:3})]}computeOutputShape(t){t=ht(t);const e=qe(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return T(()=>{this.invokeCallHook(t,e),t=lr(X(t),2);const s=this.poolingFunction(X(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return As(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class El extends Zd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Gi(t,e,s,r,i,"max")}}El.className="MaxPooling1D",_(El);class Il extends Zd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Gi(t,e,s,r,i,"avg")}}Il.className="AveragePooling1D",_(Il);class Yd extends et{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new S(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];Kt(this.poolSize,"poolSize"),Kt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Ft(this.dataFormat),we(this.padding),this.inputSpec=[new Bt({ndim:4})]}computeOutputShape(t){t=ht(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=qe(e,this.poolSize[0],this.padding,this.strides[0]),s=qe(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return T(()=>(this.invokeCallHook(t,e),this.poolingFunction(X(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Al extends Yd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Gi(t,e,s,r,i,"max")}}Al.className="MaxPooling2D",_(Al);class Nl extends Yd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Gi(t,e,s,r,i,"avg")}}Nl.className="AveragePooling2D",_(Nl);class Xd extends et{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new S(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];Kt(this.poolSize,"poolSize"),Kt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Ft(this.dataFormat),we(this.padding),this.inputSpec=[new Bt({ndim:5})]}computeOutputShape(t){t=ht(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=qe(e,this.poolSize[0],this.padding,this.strides[0]),s=qe(s,this.poolSize[1],this.padding,this.strides[1]),r=qe(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return T(()=>(this.invokeCallHook(t,e),this.poolingFunction(X(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Tl extends Xd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Jd(t,e,s,r,i,"max")}}Tl.className="MaxPooling3D",_(Tl);class Dl extends Xd{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return Ft(i),we(r),Jd(t,e,s,r,i,"avg")}}Dl.className="AveragePooling3D",_(Dl);class Qd extends et{constructor(t){super(t),this.inputSpec=[new Bt({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new Y}}class Cl extends Qd{constructor(t){super(t||{})}call(t,e){return T(()=>{const s=X(t);return _t(s,1)})}}Cl.className="GlobalAveragePooling1D",_(Cl);class $l extends Qd{constructor(t){super(t||{})}call(t,e){return T(()=>{const s=X(t);return Ze(s,1)})}}$l.className="GlobalMaxPooling1D",_($l);class tp extends et{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Ft(this.dataFormat),this.inputSpec=[new Bt({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new Y}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class _l extends tp{call(t,e){return T(()=>{const s=X(t);return this.dataFormat==="channelsLast"?_t(s,[1,2]):_t(s,[2,3])})}}_l.className="GlobalAveragePooling2D",_(_l);class Fl extends tp{call(t,e){return T(()=>{const s=X(t);return this.dataFormat==="channelsLast"?Ze(s,[1,2]):Ze(s,[2,3])})}}Fl.className="GlobalMaxPooling2D",_(Fl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class ep extends et{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,i=nn(r,s);delete e.layer;const o={layer:i};return Object.assign(o,e),new t(o)}}class Ml extends ep{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=ht(t),t.length<3)throw new S(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=ht(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return T(()=>(t=X(t),Hd((o,a)=>[X(this.layer.call(o,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}Ml.className="TimeDistributed",_(Ml);function _I(n){ts(Wv,"BidirectionalMergeMode",n)}const FI="concat";class zl extends ep{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=nn(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=nn(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?FI:t.mergeMode,_I(this.mergeMode),t.weights)throw new Y("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,i;return this.returnState&&(i=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[s].concat(i).concat(i.slice()):he(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const i=qd(t,s,r,this.numConstants);if(t=i.inputs,s=i.initialState,r=i.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const o=[],a=[];if(s!=null){const u=s.length;if(u%2>0)throw new S("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,o.push(...s);const c=s.map(h=>new Bt({shape:h.shape}));this.forwardLayer.stateSpec=c.slice(0,u/2),this.backwardLayer.stateSpec=c.slice(u/2),a.push(...c)}if(r!=null)throw new Y("Support for constants in Bidirectional layers is not implemented yet.");const l=o[0]instanceof en;for(const u of o)if(u instanceof en!==l)throw new S("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const u=[t].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const f=super.apply(u,e);return this.inputSpec=h,f}else return super.apply(t,e)}call(t,e){return T(()=>{const s=e.initialState;let r,i;if(s==null)r=this.forwardLayer.call(t,e),i=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),u=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),i=this.backwardLayer.call(t,Object.assign(e,{initialState:u}))}let o;this.returnState&&(Array.isArray(r)&&(o=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=Is(i,1));let a;return this.mergeMode==="concat"?a=pa([r,i]):this.mergeMode==="sum"?a=M(r,i):this.mergeMode==="ave"?a=k(.5,M(r,i)):this.mergeMode==="mul"?a=k(r,i):this.mergeMode==null&&(a=[r,i]),this.returnState?this.mergeMode==null?a.concat(o):[a].concat(o):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){es(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),es(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const i=this.forwardLayer.states.map(o=>null);return Array.isArray(s)?s.concat(i).concat(i):[s].concat(i).concat(i)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=nn(e.layer);if(delete e.layer,e.numConstants!=null)throw new Y("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}zl.className="Bidirectional",_(zl);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ll extends et{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return T(()=>(t=X(t),t.dtype!=="float32"&&(t=ar(t,"float32")),M(k(t,this.scale),this.offset)))}}Ll.className="Rescaling",_(Ll);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function M2(n){return new Fs(n)}function z2(n){return new qa(n)}function L2(n){return new Wa(n)}function R2(n){return new Ga(n)}function O2(n){return new Va(n)}function B2(n){return new ja(n)}function P2(n){return new Ha(n)}function U2(n){return new mr(n)}function W2(n){return new Os(n)}function G2(n){return new Xa(n)}function V2(n){return new Bs(n)}function q2(n){return new Qa(n)}function H2(n){return new tl(n)}function j2(n){return new el(n)}function K2(n){return new nl(n)}function J2(n){return new sl(n)}function Z2(n){return new hl(n)}function MI(n){return new ul(n)}function Y2(n){return new Wi(n)}function X2(n){return new ll(n)}function Q2(n){return new cl(n)}function tD(n){return new fl(n)}function eD(n){return new dl(n)}function nD(n){return new pl(n)}function sD(n){return new gl(n)}function rD(n){return new br(n)}function iD(n){return new wr(n)}function oD(n){return new xr(n)}function aD(n){return new vr(n)}function lD(n){return new kr(n)}function uD(n){return new yr(n)}function cD(n){return new bl(n)}function hD(n){return new kl(n)}function fD(n){return new xl(n)}function dD(n){return new Sl(n)}function np(n){return new Il(n)}function pD(n){return np(n)}function mD(n){return np(n)}function sp(n){return new Nl(n)}function gD(n){return sp(n)}function bD(n){return sp(n)}function rp(n){return new Dl(n)}function yD(n){return rp(n)}function wD(n){return rp(n)}function vD(n){return new Cl(n)}function kD(n){return new _l(n)}function zI(n){return new $l(n)}function LI(n){return new Fl(n)}function RI(n){return new El(n)}function OI(n){return new Al(n)}function xD(n){return new Tl(n)}function SD(n){return new il(n)}function ED(n){return new Bi(n)}function ID(n){return new ol(n)}function AD(n){return new gr(n)}function ND(n){return new rl(n)}function TD(n){return new Oi(n)}function DD(n){return new al(n)}function CD(n){return new Ui(n)}function $D(n){return new un(n)}function _D(n){return new Pi(n)}function FD(n){return new zl(n)}function MD(n){return new Ml(n)}const zD=zI,LD=LI,RD=RI,OD=OI;function BD(n){return new yl(n)}function PD(n){return new wl(n)}function UD(n){return new vl(n)}function WD(n){return new ml(n)}function GD(n){return new Ll(n)}var _n,is;function VD(n,t){return is.binaryAccuracy(n,t)}function qD(n,t){return is.binaryCrossentropy(n,t)}function HD(n,t){return is.sparseCategoricalAccuracy(n,t)}function jD(n,t){return is.categoricalAccuracy(n,t)}function KD(n,t){return is.categoricalCrossentropy(n,t)}function JD(n,t){return is.precision(n,t)}function ZD(n,t){return is.recall(n,t)}function YD(n,t){return _n.cosineProximity(n,t)}function XD(n,t){return _n.meanAbsoluteError(n,t)}function QD(n,t){return _n.meanAbsolutePercentageError(n,t)}function tC(n,t){return _n.meanAbsolutePercentageError(n,t)}function eC(n,t){return _n.meanAbsolutePercentageError(n,t)}function nC(n,t){return _n.meanSquaredError(n,t)}function sC(n,t){return _n.meanSquaredError(n,t)}function rC(n,t){return _n.meanSquaredError(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var ip,BI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function iC(n){return new BI(n)}function oC(n){return ip.l1(n)}function aC(n){return ip.l2(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class PI extends Ms{constructor(){super(...arguments),this.model=null}setModel(t){if(!(t instanceof Tn))throw new Error("model must be a LayersModel, not some other Container");this.model=t}}function Vi(n,t){return n<t}function op(n,t){return n>t}class UI extends PI{constructor(t){if(super(),t==null&&(t={}),t.restoreBestWeights)throw new Y("restoreBestWeights = True is not implemented in EarlyStopping yet.");this.monitor=t.monitor||"val_loss",this.minDelta=Math.abs(t.minDelta||0),this.patience=t.patience||0,this.verbose=t.verbose||0,this.mode=t.mode||"auto",this.baseline=t.baseline,["auto","min","max"].indexOf(this.mode)===-1&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode="auto"),this.mode==="min"?this.monitorFunc=Vi:this.mode==="max"?this.monitorFunc=op:this.monitor.indexOf("acc")!==-1?this.monitorFunc=op:this.monitorFunc=Vi,this.monitorFunc===Vi&&(this.minDelta*=-1)}async onTrainBegin(t){this.wait=0,this.stoppedEpoch=0,this.baseline!=null?this.best=this.baseline:this.best=this.monitorFunc===Vi?1/0:-1/0}async onEpochEnd(t,e){await Nn(e);const s=this.getMonitorValue(e);s!=null&&(this.monitorFunc(s-this.minDelta,this.best)?(this.best=s,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=t,this.model.stopTraining=!0)))}async onTrainEnd(t){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(t){t==null&&(t={});const e=t[this.monitor];return e==null&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(t)}`),e}}function WI(n){return new UI(n)}const lC={earlyStopping:WI};/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 *//**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var ap=function(n,t){return(ap=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var r in s)s.hasOwnProperty(r)&&(e[r]=s[r])})(n,t)};function GI(n,t){function e(){this.constructor=n}ap(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Rl=function(){return(Rl=Object.assign||function(n){for(var t,e=1,s=arguments.length;e<s;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function vt(n,t,e,s){return new(e||(e=Promise))(function(r,i){function o(u){try{l(s.next(u))}catch(c){i(c)}}function a(u){try{l(s.throw(u))}catch(c){i(c)}}function l(u){var c;u.done?r(u.value):(c=u.value,c instanceof e?c:new e(function(h){h(c)})).then(o,a)}l((s=s.apply(n,t||[])).next())})}function kt(n,t){var e,s,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(u){return(function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,s&&(r=2&c[0]?s.return:c[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;switch(s=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,s=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(c[0]===6&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(n,o)}catch(h){c=[6,h],s=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}})([l,u])}}}function de(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],s=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&s>=n.length&&(n=void 0),{value:n&&n[s++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ol(n,t){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var s,r,i=e.call(n),o=[];try{for(;(t===void 0||t-- >0)&&!(s=i.next()).done;)o.push(s.value)}catch(a){r={error:a}}finally{try{s&&!s.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return o}function Ir(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(Ol(arguments[t]));return n}function VI(n){return vt(this,void 0,void 0,function(){var t,e,s,r,i,o,a;return kt(this,function(l){switch(l.label){case 0:return t="http://",e="https://",s="file://",n.indexOf(t)!==0&&n.indexOf(e)!==0?[3,3]:[4,fetch(n)];case 1:return[4,l.sent().json()];case 2:return[2,l.sent()];case 3:return n.indexOf(s)!==0?[3,5]:(r=J(9830),i=(0,X1.promisify)(r.readFile),a=(o=JSON).parse,[4,i(n.slice(s.length),{encoding:"utf-8"})]);case 4:return[2,a.apply(o,[l.sent()])];case 5:throw new Error("Unsupported URL scheme in metadata URL: "+n+". Supported schemes are: http://, https://, and (node.js-only) file://")}})})}var Ps=null;function Us(n){return Ps==null&&(Ps=zo().epsilon()),T(function(){var t=Xs(n),e=t.mean,s=t.variance;return q(U(n,e),M(ie(s),Ps))})}function lp(n){if(n.length<2)throw new Error("Cannot normalize a Float32Array with fewer than 2 elements.");return Ps==null&&(Ps=zo().epsilon()),T(function(){var t=Xs(Ht(n)),e=t.mean,s=t.variance,r=e.arraySync(),i=Math.sqrt(s.arraySync()),o=Array.from(n).map(function(a){return(a-r)/(i+Ps)});return new Float32Array(o)})}function qI(){return window.AudioContext||window.webkitAudioContext}function HI(n){return vt(this,void 0,void 0,function(){return kt(this,function(t){return[2,navigator.mediaDevices.getUserMedia({audio:n==null||n,video:!1})]})})}function jI(n,t){var e=new(window.AudioContext||window.webkitAudioContext),s=e.createBuffer(1,n.data.length,n.sampleRateHz);s.getChannelData(0).set(n.data);var r=e.createBufferSource();r.buffer=s,r.connect(e.destination),r.start(),r.onended=function(){t?.()}}var Bl=(function(){function n(t){var e=this;if(t==null)throw new Error("Required configuration object is missing for BrowserFftFeatureExtractor constructor");if(t.spectrogramCallback==null)throw new Error("spectrogramCallback cannot be null or undefined");if(!(t.numFramesPerSpectrogram>0))throw new Error("Invalid value in numFramesPerSpectrogram: "+t.numFramesPerSpectrogram);if(t.suppressionTimeMillis<0)throw new Error("Expected suppressionTimeMillis to be >= 0, but got "+t.suppressionTimeMillis);if(this.suppressionTimeMillis=t.suppressionTimeMillis,this.spectrogramCallback=t.spectrogramCallback,this.numFrames=t.numFramesPerSpectrogram,this.sampleRateHz=t.sampleRateHz||44100,this.fftSize=t.fftSize||1024,this.frameDurationMillis=this.fftSize/this.sampleRateHz*1e3,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.overlapFactor=t.overlapFactor,this.includeRawAudio=t.includeRawAudio,g(this.overlapFactor>=0&&this.overlapFactor<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+e.overlapFactor}),this.columnTruncateLength>this.fftSize)throw new Error("columnTruncateLength "+this.columnTruncateLength+" exceeds fftSize ("+this.fftSize+").");this.audioContextConstructor=qI()}return n.prototype.start=function(t){return vt(this,void 0,void 0,function(){var e,s,r;return kt(this,function(i){switch(i.label){case 0:if(this.frameIntervalTask!=null)throw new Error("Cannot start already-started BrowserFftFeatureExtractor");return e=this,[4,HI(t)];case 1:return e.stream=i.sent(),this.audioContext=new this.audioContextConstructor({sampleRate:this.sampleRateHz}),s=this.audioContext.createMediaStreamSource(this.stream),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=0,s.connect(this.analyser),this.freqDataQueue=[],this.freqData=new Float32Array(this.fftSize),this.includeRawAudio&&(this.timeDataQueue=[],this.timeData=new Float32Array(this.fftSize)),r=Math.max(1,Math.round(this.numFrames*(1-this.overlapFactor))),this.tracker=new KI(r,Math.round(this.suppressionTimeMillis/this.frameDurationMillis)),this.frameIntervalTask=setInterval(this.onAudioFrame.bind(this),this.fftSize/this.sampleRateHz*1e3),[2]}})})},n.prototype.onAudioFrame=function(){return vt(this,void 0,void 0,function(){var t,e,s,r;return kt(this,function(i){switch(i.label){case 0:return this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0?[2]:(this.freqDataQueue.push(this.freqData.slice(0,this.columnTruncateLength)),this.includeRawAudio&&(this.analyser.getFloatTimeDomainData(this.timeData),this.timeDataQueue.push(this.timeData.slice())),this.freqDataQueue.length>this.numFrames&&this.freqDataQueue.shift(),this.tracker.tick()?(t=up(this.freqDataQueue),e=cp(t,[1,this.numFrames,this.columnTruncateLength,1]),s=void 0,this.includeRawAudio&&(r=up(this.timeDataQueue),s=cp(r,[1,this.numFrames*this.fftSize])),[4,this.spectrogramCallback(e,s)]):[3,2]);case 1:i.sent()&&this.tracker.suppress(),j([e,s]),i.label=2;case 2:return[2]}})})},n.prototype.stop=function(){return vt(this,void 0,void 0,function(){return kt(this,function(t){if(this.frameIntervalTask==null)throw new Error("Cannot stop because there is no ongoing streaming activity.");return clearInterval(this.frameIntervalTask),this.frameIntervalTask=null,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop(),[2]})})},n.prototype.setConfig=function(t){throw new Error("setConfig() is not implemented for BrowserFftFeatureExtractor.")},n.prototype.getFeatures=function(){throw new Error("getFeatures() is not implemented for BrowserFftFeatureExtractor. Use the spectrogramCallback field of the constructor config instead.")},n})();function up(n){var t=n[0].length,e=new Float32Array(n.length*t);return n.forEach(function(s,r){return e.set(s,r*t)}),e}function cp(n,t){var e=new Float32Array(At(t));return e.set(n,e.length-n.length),Bn(e,t)}var KI=(function(){function n(t,e){var s=this;this.period=t,this.suppressionTime=e??0,this.counter=0,g(this.period>0,function(){return"Expected period to be positive, but got "+s.period})}return n.prototype.tick=function(){return this.counter++,this.counter%this.period==0&&(this.suppressionOnset==null||this.counter-this.suppressionOnset>this.suppressionTime)},n.prototype.suppress=function(){this.suppressionOnset=this.counter},n})();function qi(n){var t=0;n.forEach(function(r){t+=r.byteLength});var e=new Uint8Array(t),s=0;return n.forEach(function(r){e.set(new Uint8Array(r),s),s+=r.byteLength}),e.buffer}function hp(n){var t=0;n.forEach(function(r){return t+=r.length});var e=new Float32Array(t),s=0;return n.forEach(function(r){e.set(r,s),s+=r.length}),e}function fp(n){if(n==null)throw new Error("Received null or undefind string");for(var t=unescape(encodeURIComponent(n)),e=new Uint8Array(t.length),s=0;s<t.length;++s)e[s]=t.charCodeAt(s);return e.buffer}function dp(n){if(n==null)throw new Error("Received null or undefind buffer");var t=new Uint8Array(n);return decodeURIComponent(escape(String.fromCharCode.apply(String,Ir(t))))}function JI(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function ZI(n,t){return Math.floor((t-n)*Math.random())+n}function YI(n,t,e){return g(e>0&&e<1,function(){return"validationSplit is expected to be >0 and <1, but got "+e}),T(function(){for(var s=ws(t,-1).dataSync(),r=[],i=0;i<s.length;++i){var o=s[i];r[o]==null&&(r[o]=[]),r[o].push(i)}var a=r.length,l=[],u=[];for(r.map(function(d){return it(d)}),i=0;i<a;++i)for(var c=r[i],h=Math.round(c.length*(1-e)),f=0;f<c.length;++f)f<h?l.push(c[f]):u.push(c[f]);return{trainXs:xs(n,l),trainYs:xs(t,l),valXs:xs(n,u),valYs:xs(t,u)}})}function XI(n,t,e){var s,r,i,o,a,l,u,c;g(e>0&&e<1,function(){return"validationSplit is expected to be >0 and <1, but got "+e});for(var h=!Array.isArray(n[0]),f=t,d=[],p=0;p<f.length;++p){var m=f[p];d[m]==null&&(d[m]=[]),d[m].push(p)}var b=d.length,v=[],E=[];for(d.map(function(Ct){return it(Ct)}),p=0;p<b;++p)for(var x=d[p],I=Math.round(x.length*(1-e)),C=0;C<x.length;++C)C<I?v.push(x[C]):E.push(x[C]);if(h){var $=[],L=[],R=[],F=[];try{for(var B=de(v),V=B.next();!V.done;V=B.next()){var H=V.value;$.push(n[H]),L.push(t[H])}}catch(Ct){s={error:Ct}}finally{try{V&&!V.done&&(r=B.return)&&r.call(B)}finally{if(s)throw s.error}}try{for(var tt=de(E),at=tt.next();!at.done;at=tt.next())H=at.value,R.push(n[H]),F.push(t[H])}catch(Ct){i={error:Ct}}finally{try{at&&!at.done&&(o=tt.return)&&o.call(tt)}finally{if(i)throw i.error}}return{trainXs:$,trainYs:L,valXs:R,valYs:F}}$=[],L=[],R=[],F=[];try{for(var rt=de(v),xt=rt.next();!xt.done;xt=rt.next())H=xt.value,$.push(n[H]),L.push(t[H])}catch(Ct){a={error:Ct}}finally{try{xt&&!xt.done&&(l=rt.return)&&l.call(rt)}finally{if(a)throw a.error}}try{for(var ut=de(E),$t=ut.next();!$t.done;$t=ut.next())H=$t.value,R.push(n[H]),F.push(t[H])}catch(Ct){u={error:Ct}}finally{try{$t&&!$t.done&&(c=ut.return)&&c.call(ut)}finally{if(u)throw u.error}}return{trainXs:$,trainYs:L,valXs:R,valYs:F}}var Hi="TFJSSCDS",QI=1,os="_background_noise_",Pl=(function(){function n(t){if(this.examples={},this.label2Ids={},t!=null)for(var e=sA(t),s=0,r=0;r<e.manifest.length;++r){var i=e.manifest[r],o=i.spectrogramNumFrames*i.spectrogramFrameSize;i.rawAudioNumSamples!=null&&(o+=i.rawAudioNumSamples),o*=4,this.addExample(eA({spec:i,data:e.data.slice(s,s+o)})),s+=o}}return n.prototype.addExample=function(t){g(t!=null,function(){return"Got null or undefined example"}),g(t.label!=null&&t.label.length>0,function(){return"Expected label to be a non-empty string, but got "+JSON.stringify(t.label)});var e=JI();return this.examples[e]=t,t.label in this.label2Ids||(this.label2Ids[t.label]=[]),this.label2Ids[t.label].push(e),e},n.prototype.merge=function(t){var e,s,r,i;g(t!==this,function(){return"Cannot merge a dataset into itself"});var o=t.getVocabulary();try{for(var a=de(o),l=a.next();!l.done;l=a.next()){var u=l.value,c=t.getExamples(u);try{for(var h=(r=void 0,de(c)),f=h.next();!f.done;f=h.next()){var d=f.value;this.addExample(d.example)}}catch(p){r={error:p}}finally{try{f&&!f.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}}catch(p){e={error:p}}finally{try{l&&!l.done&&(s=a.return)&&s.call(a)}finally{if(e)throw e.error}}},n.prototype.getExampleCounts=function(){var t={};for(var e in this.examples){var s=this.examples[e];s.label in t||(t[s.label]=0),t[s.label]++}return t},n.prototype.getExamples=function(t){var e=this;g(t!=null,function(){return"Expected label to be a string, but got "+JSON.stringify(t)}),g(t in this.label2Ids,function(){return'No example of label "'+t+'" exists in dataset'});var s=[];return this.label2Ids[t].forEach(function(r){s.push({uid:r,example:e.examples[r]})}),s},n.prototype.getData=function(t,e){var s=this;g(this.size()>0,function(){return"Cannot get spectrograms as tensors because the dataset is empty"});var r=this.getVocabulary();t!=null?g(r.indexOf(t)!==-1,function(){return"Label "+t+" is not in the vocabulary ("+JSON.stringify(r)+")"}):g(r.length>1,function(){return"One-hot encoding of labels requires the vocabulary to have at least two words, but it has only "+r.length+" word."}),e==null&&(e={});var i,o,a=this.getSortedUniqueNumFrames();a.length===1?(i=e.numFrames==null?a[0]:e.numFrames,o=e.hopFrames==null?1:e.hopFrames):(i=e.numFrames,g(i!=null&&Number.isInteger(i)&&i>0,function(){return"There are "+a.length+" unique lengths among the "+s.size()+" examples of this Dataset, hence numFrames is required. But it is not provided."}),g(i<=a[0],function(){return"numFrames ("+i+") exceeds the minimum numFrames ("+a[0]+") among the examples of the Dataset."}),o=e.hopFrames,g(o!=null&&Number.isInteger(o)&&o>0,function(){return"There are "+a.length+" unique lengths among the "+s.size()+" examples of this Dataset, hence hopFrames is required. But it is not provided."}));var l=e.normalize==null||e.normalize;return T(function(){for(var u,c,h,f=[],d=[],p=[],m=0;m<r.length;++m){var b=r[m];if(t==null||b===t){var v=s.label2Ids[b],E=function(st){var Fn,yp,Ws=s.examples[st].spectrogram,Tr=Ws.frameSize;h==null?h=Tr:g(Tr===h,function(){return"Mismatch in frameSize  ("+Tr+" vs "+h+")"});var wp=Ws.data.length/Tr,vp=null;b!==os&&(vp=Ws.keyFrameIndex==null?mp(Ws).dataSync()[0]:Ws.keyFrameIndex);var kp=Gr(Ws.data,[wp,Tr,1]),hA=rA(wp,vp,i,o),fA=function(Cr){var xp=T(function(){var Sp=ct(kp,[Cr[0],0,0],[Cr[1]-Cr[0],-1,-1]);return l?Us(Sp):Sp});e.getDataset?d.push(xp.dataSync()):f.push(xp),t==null&&p.push(m)};try{for(var Ki=(Fn=void 0,de(hA)),Dr=Ki.next();!Dr.done;Dr=Ki.next())fA(Dr.value)}catch(Cr){Fn={error:Cr}}finally{try{Dr&&!Dr.done&&(yp=Ki.return)&&yp.call(Ki)}finally{if(Fn)throw Fn.error}}j(kp)};try{for(var x=(u=void 0,de(v)),I=x.next();!I.done;I=x.next())E(I.value)}catch(st){u={error:st}}finally{try{I&&!I.done&&(c=x.return)&&c.call(x)}finally{if(u)throw u.error}}}}e.augmentByMixingNoiseRatio!=null&&s.augmentByMixingNoise(e.getDataset?d:f,p,e.augmentByMixingNoiseRatio);var C=e.shuffle==null||e.shuffle;if(e.getDataset){var $=e.datasetBatchSize==null?32:e.datasetBatchSize,L=e.datasetValidationSplit==null?.15:e.datasetValidationSplit;g(L>0&&L<1,function(){return"Invalid dataset validation split: "+L});var R=d.map(function(st,Fn){return[st,p[Fn]]});it(R),d=R.map(function(st){return st[0]});var F=R.map(function(st){return st[1]}),B=XI(d,F,L),V=B.trainXs,H=B.trainYs,tt=B.valXs,at=B.valYs,rt=fi(V).map(function(st){return Gr(st,[i,h,1])}),xt=fi(H).map(function(st){return As(Zr([st],r.length),[0])}),ut=Wh({xs:rt,ys:xt});C&&(ut=ut.shuffle(d.length)),ut=ut.batch($).prefetch(4);var $t=fi(tt).map(function(st){return Gr(st,[i,h,1])}),Ct=fi(at).map(function(st){return As(Zr([st],r.length),[0])}),He=Wh({xs:$t,ys:Ct});return[ut,He=He.batch($).prefetch(4)]}if(C){var Fe=[];f.forEach(function(st,Fn){Fe.push({x:st,y:p[Fn]})}),it(Fe),f=Fe.map(function(st){return st.x}),p=Fe.map(function(st){return st.y})}var cn=t==null?P(Zr(Ht(p,"int32"),r.length),"float32"):void 0;return{xs:vn(f),ys:cn}})},n.prototype.augmentByMixingNoise=function(t,e,s){var r,i;if(t==null||t.length===0)throw new Error("Cannot perform augmentation because data is null or empty");for(var o=t[0]instanceof Float32Array,a=this.getVocabulary(),l=[],u=[],c=0;c<e.length;++c)a[e[c]]===os?l.push(c):u.push(c);if(l.length===0)throw new Error("Cannot perform augmentation by mixing with noise when there is no example with label "+os);var h=[],f=[],d=function(b){var v=l[ZI(0,l.length)],E=o?Ht(t[b]):t[b],x=o?Ht(t[v]):t[v],I=T(function(){return Us(M(E,k(x,s)))});o?h.push(I.dataSync()):h.push(I),f.push(e[b])};try{for(var p=de(u),m=p.next();!m.done;m=p.next())d(m.value)}catch(b){r={error:b}}finally{try{m&&!m.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}console.log("Data augmentation: mixing noise: added "+h.length+" examples"),h.forEach(function(b){return t.push(b)}),e.push.apply(e,Ir(f))},n.prototype.getSortedUniqueNumFrames=function(){for(var t,e,s=new Set,r=this.getVocabulary(),i=0;i<r.length;++i){var o=r[i],a=this.label2Ids[o];try{for(var l=(t=void 0,de(a)),u=l.next();!u.done;u=l.next()){var c=u.value,h=this.examples[c].spectrogram,f=h.data.length/h.frameSize;s.add(f)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}}var d=Ir(s);return d.sort(),d},n.prototype.removeExample=function(t){if(!(t in this.examples))throw new Error("Nonexistent example UID: "+t);var e=this.examples[t].label;delete this.examples[t];var s=this.label2Ids[e].indexOf(t);this.label2Ids[e].splice(s,1),this.label2Ids[e].length===0&&delete this.label2Ids[e]},n.prototype.setExampleKeyFrameIndex=function(t,e){if(!(t in this.examples))throw new Error("Nonexistent example UID: "+t);var s=this.examples[t].spectrogram,r=s.data.length/s.frameSize;g(e>=0&&e<r&&Number.isInteger(e),function(){return"Invalid keyFrameIndex: "+e+". Must be >= 0, < "+r+", and an integer."}),s.keyFrameIndex=e},n.prototype.size=function(){return Object.keys(this.examples).length},n.prototype.durationMillis=function(){var t=0;for(var e in this.examples){var s=this.examples[e].spectrogram,r=23.22|s.frameDurationMillis;t+=s.data.length/s.frameSize*r}return t},n.prototype.empty=function(){return this.size()===0},n.prototype.clear=function(){this.examples={}},n.prototype.getVocabulary=function(){var t=new Set;for(var e in this.examples){var s=this.examples[e];t.add(s.label)}var r=Ir(t);return r.sort(),r},n.prototype.serialize=function(t){var e,s,r,i,o=this.getVocabulary();g(!this.empty(),function(){return"Cannot serialize empty Dataset"}),t!=null&&(Array.isArray(t)||(t=[t]),t.forEach(function(v){if(o.indexOf(v)===-1)throw new Error('Word label "'+v+'" does not exist in the vocabulary of this dataset. The vocabulary is: '+JSON.stringify(o)+".")}));var a=[],l=[];try{for(var u=de(o),c=u.next();!c.done;c=u.next()){var h=c.value;if(t==null||t.indexOf(h)!==-1){var f=this.label2Ids[h];try{for(var d=(r=void 0,de(f)),p=d.next();!p.done;p=d.next()){var m=p.value,b=tA(this.examples[m]);a.push(b.spec),l.push(b.data)}}catch(v){r={error:v}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}}}catch(v){e={error:v}}finally{try{c&&!c.done&&(s=u.return)&&s.call(u)}finally{if(e)throw e.error}}return nA({manifest:a,data:qi(l)})},n})();function tA(n){var t=n.rawAudio!=null,e={label:n.label,spectrogramNumFrames:n.spectrogram.data.length/n.spectrogram.frameSize,spectrogramFrameSize:n.spectrogram.frameSize};n.spectrogram.keyFrameIndex!=null&&(e.spectrogramKeyFrameIndex=n.spectrogram.keyFrameIndex);var s=n.spectrogram.data.buffer.slice(0);return t&&(e.rawAudioNumSamples=n.rawAudio.data.length,e.rawAudioSampleRateHz=n.rawAudio.sampleRateHz,s=qi([s,n.rawAudio.data.buffer])),{spec:e,data:s}}function eA(n){var t={frameSize:n.spec.spectrogramFrameSize,data:new Float32Array(n.data.slice(0,4*n.spec.spectrogramFrameSize*n.spec.spectrogramNumFrames))};n.spec.spectrogramKeyFrameIndex!=null&&(t.keyFrameIndex=n.spec.spectrogramKeyFrameIndex);var e={label:n.spec.label,spectrogram:t};return n.spec.rawAudioNumSamples!=null&&(e.rawAudio={sampleRateHz:n.spec.rawAudioSampleRateHz,data:new Float32Array(n.data.slice(4*n.spec.spectrogramFrameSize*n.spec.spectrogramNumFrames))}),e}function nA(n){var t=fp(JSON.stringify(n.manifest)),e=fp(Hi),s=new Uint32Array([QI]),r=new Uint32Array([t.byteLength]);return qi([qi([e,s.buffer,r.buffer]),t,n.data])}function sA(n){g(n!=null,function(){return"Received null or undefined buffer"});var t=0,e=dp(n.slice(t,Hi.length));g(e===Hi,function(){return"Deserialization error: Invalid descriptor"}),t+=Hi.length,t+=4;var s=new Uint32Array(n,t,1),r=t+=4;t=r+s[0];var i=dp(n.slice(r,t));return{manifest:JSON.parse(i),data:n.slice(t)}}function rA(n,t,e,s){if(g(Number.isInteger(n)&&n>0,function(){return"snippetLength must be a positive integer, but got "+n}),t!=null&&g(Number.isInteger(t)&&t>=0,function(){return"focusIndex must be a non-negative integer, but got "+t}),g(Number.isInteger(e)&&e>0,function(){return"windowLength must be a positive integer, but got "+e}),g(Number.isInteger(s)&&s>0,function(){return"windowHop must be a positive integer, but got "+s}),g(e<=n,function(){return"windowLength ("+e+") exceeds snippetLength ("+n+")"}),g(t<n,function(){return"focusIndex ("+t+") equals or exceeds snippetLength ("+n+")"}),e===n)return[[0,n]];var r=[];if(t==null){for(var i=0;i+e<=n;)r.push([i,i+e]),i+=s;return r}var o=Math.floor(e/2),a=t-o;for(a<0?a=0:a+e>n&&(a=n-e);!(a-s<0||t>=a-s+e);)a-=s;for(;a+e<=n&&!(t<a);)r.push([a,a+e]),a+=s;return r}function pp(n){return T(function(){var t=n.data.length/n.frameSize,e=Zn(n.data,[t,n.frameSize]);return _t(e,-1)})}function mp(n){return T(function(){return ws(pp(n))})}var Ul="0.5.4",gp="_unknown_",Ar="tfjs-speech-commands-saved-model-metadata",Wl="indexeddb://tfjs-speech-commands-model/",Nr={localStorage:typeof window>"u"?null:window.localStorage};function iA(n){return n.split(".").slice(0,2).join(".")}var ji=.25,bp=(function(){function n(t,e,s){this.MODEL_URL_PREFIX="https://storage.googleapis.com/tfjs-models/tfjs/speech-commands/v"+iA(Ul)+"/browser_fft",this.SAMPLE_RATE_HZ=44100,this.FFT_SIZE=1024,this.DEFAULT_SUPPRESSION_TIME_MILLIS=0,this.streaming=!1,this.transferRecognizers={},g(e==null&&s==null||e!=null&&s!=null,function(){return"modelURL and metadataURL must be both provided or both not provided."}),e==null?(t==null?t=n.DEFAULT_VOCABULARY_NAME:g(n.VALID_VOCABULARY_NAMES.indexOf(t)!==-1,function(){return"Invalid vocabulary name: '"+t+"'"}),this.vocabulary=t,this.modelArtifactsOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/model.json",this.metadataOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/metadata.json"):(g(t==null,function(){return"vocabulary name must be null or undefined when modelURL is provided"}),this.modelArtifactsOrURL=e,this.metadataOrURL=s),this.parameters={sampleRateHz:this.SAMPLE_RATE_HZ,fftSize:this.FFT_SIZE}}return n.prototype.listen=function(t,e){return vt(this,void 0,void 0,function(){var s,r,i,o,a,l=this;return kt(this,function(u){switch(u.label){case 0:if(this.streaming)throw new Error("Cannot start streaming again when streaming is ongoing.");return[4,this.ensureModelLoaded()];case 1:if(u.sent(),e==null&&(e={}),s=e.probabilityThreshold==null?0:e.probabilityThreshold,e.includeEmbedding&&(s=0),g(s>=0&&s<=1,function(){return"Invalid probabilityThreshold value: "+s}),r=e.invokeCallbackOnNoiseAndUnknown!=null&&e.invokeCallbackOnNoiseAndUnknown,e.includeEmbedding&&(r=!0),e.suppressionTimeMillis<0)throw new Error("suppressionTimeMillis is expected to be >= 0, but got "+e.suppressionTimeMillis);return i=e.overlapFactor==null?.5:e.overlapFactor,g(i>=0&&i<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+i}),o=function(c,h){return vt(l,void 0,void 0,function(){var f,d,p,m,b,v,E,x,I,C,$;return kt(this,function(L){switch(L.label){case 0:return f=Us(c),e.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,2];case 1:return L.sent(),$=Ol(this.modelWithEmbeddingOutput.predict(f),2),d=$[0],p=$[1],[3,3];case 2:d=this.model.predict(f),L.label=3;case 3:return[4,d.data()];case 4:return m=L.sent(),[4,(b=d.argMax(-1)).data()];case 5:return v=L.sent()[0],E=Math.max.apply(Math,Ir(m)),j([d,b,f]),E<s?[2,!1]:[3,6];case 6:return x=void 0,e.includeSpectrogram?(I={},[4,c.data()]):[3,8];case 7:I.data=L.sent(),I.frameSize=this.nonBatchInputShape[1],x=I,L.label=8;case 8:return C=!0,r||this.words[v]!==os&&this.words[v]!==gp||(C=!1),C&&t({scores:m,spectrogram:x,embedding:p}),[2,C]}})})},a=e.suppressionTimeMillis==null?this.DEFAULT_SUPPRESSION_TIME_MILLIS:e.suppressionTimeMillis,this.audioDataExtractor=new Bl({sampleRateHz:this.parameters.sampleRateHz,numFramesPerSpectrogram:this.nonBatchInputShape[0],columnTruncateLength:this.nonBatchInputShape[1],suppressionTimeMillis:a,spectrogramCallback:o,overlapFactor:i}),[4,this.audioDataExtractor.start(e.audioTrackConstraints)];case 2:return u.sent(),this.streaming=!0,[2]}})})},n.prototype.ensureModelLoaded=function(){return vt(this,void 0,void 0,function(){var t,e,s,r,i=this;return kt(this,function(o){switch(o.label){case 0:return this.model!=null?[2]:[4,this.ensureMetadataLoaded()];case 1:return o.sent(),typeof this.modelArtifactsOrURL!="string"?[3,3]:[4,Oa(this.modelArtifactsOrURL)];case 2:return t=o.sent(),[3,5];case 3:return[4,Oa(pb(this.modelArtifactsOrURL.modelTopology,this.modelArtifactsOrURL.weightSpecs,this.modelArtifactsOrURL.weightData))];case 4:t=o.sent(),o.label=5;case 5:if(t.inputs.length!==1)throw new Error("Expected model to have 1 input, but got a model with "+t.inputs.length+" inputs");if(t.inputs[0].shape.length!==4)throw new Error("Expected model to have an input shape of rank 4, but got an input shape of rank "+t.inputs[0].shape.length);if(t.inputs[0].shape[3]!==1)throw new Error("Expected model to have an input shape with 1 as the last dimension, but got input shape"+JSON.stringify(t.inputs[0].shape[3])+"}");if((e=t.outputShape).length!==2)throw new Error("Expected loaded model to have an output shape of rank 2,but received shape "+JSON.stringify(e));if(e[1]!==this.words.length)throw new Error("Mismatch between the last dimension of model's output shape ("+e[1]+") and number of words ("+this.words.length+").");return this.model=t,this.freezeModel(),this.nonBatchInputShape=t.inputs[0].shape.slice(1),this.elementsPerExample=1,t.inputs[0].shape.slice(1).forEach(function(a){return i.elementsPerExample*=a}),this.warmUpModel(),s=this.parameters.fftSize/this.parameters.sampleRateHz*1e3,r=t.inputs[0].shape[1],this.parameters.spectrogramDurationMillis=r*s,[2]}})})},n.prototype.ensureModelWithEmbeddingOutputCreated=function(){return vt(this,void 0,void 0,function(){var t,e;return kt(this,function(s){switch(s.label){case 0:return this.modelWithEmbeddingOutput!=null?[2]:[4,this.ensureModelLoaded()];case 1:for(s.sent(),e=this.model.layers.length-2;e>=0;--e)if(this.model.layers[e].getClassName()==="Dense"){t=this.model.layers[e];break}if(t==null)throw new Error("Failed to find second last dense layer in the original model.");return this.modelWithEmbeddingOutput=Ed({inputs:this.model.inputs,outputs:[this.model.outputs[0],t.output]}),[2]}})})},n.prototype.warmUpModel=function(){var t=this;T(function(){for(var e=qt([1].concat(t.nonBatchInputShape)),s=0;s<3;++s)t.model.predict(e)})},n.prototype.ensureMetadataLoaded=function(){return vt(this,void 0,void 0,function(){var t,e,s;return kt(this,function(r){switch(r.label){case 0:return this.words!=null?[2]:typeof this.metadataOrURL!="string"?[3,2]:[4,VI(this.metadataOrURL)];case 1:return e=r.sent(),[3,3];case 2:e=this.metadataOrURL,r.label=3;case 3:if((t=e).wordLabels==null){if((s=t.words)==null)throw new Error('Cannot find field "words" or "wordLabels" in metadata JSON file');this.words=s}else this.words=t.wordLabels;return[2]}})})},n.prototype.stopListening=function(){return vt(this,void 0,void 0,function(){return kt(this,function(t){switch(t.label){case 0:if(!this.streaming)throw new Error("Cannot stop streaming when streaming is not ongoing.");return[4,this.audioDataExtractor.stop()];case 1:return t.sent(),this.streaming=!1,[2]}})})},n.prototype.isListening=function(){return this.streaming},n.prototype.wordLabels=function(){return this.words},n.prototype.params=function(){return this.parameters},n.prototype.modelInputShape=function(){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognize(), or listen().");return this.model.inputs[0].shape},n.prototype.recognize=function(t,e){return vt(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h,f,d,p,m;return kt(this,function(b){switch(b.label){case 0:return e==null&&(e={}),[4,this.ensureModelLoaded()];case 1:return b.sent(),t!=null?[3,3]:[4,this.recognizeOnline()];case 2:s=b.sent(),t=s.data,b.label=3;case 3:if(t instanceof yt)this.checkInputTensorShape(t),i=t,r=t.shape[0];else{if(t.length%this.elementsPerExample)throw new Error("The length of the input Float32Array "+t.length+" is not divisible by the number of tensor elements per per example expected by the model "+this.elementsPerExample+".");r=t.length/this.elementsPerExample,i=Fw(t,[r].concat(this.nonBatchInputShape))}return a={scores:null},e.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,5];case 4:return b.sent(),l=this.modelWithEmbeddingOutput.predict(i),o=l[0],a.embedding=l[1],[3,6];case 5:o=this.model.predict(i),b.label=6;case 6:return r!==1?[3,8]:(u=a,[4,o.data()]);case 7:return u.scores=b.sent(),[3,10];case 8:return c=Ns(o),h=c.map(function(v){return v.data()}),f=a,[4,Promise.all(h)];case 9:f.scores=b.sent(),j(c),b.label=10;case 10:return e.includeSpectrogram?(d=a,p={},t instanceof yt?[4,t.data()]:[3,12]):[3,14];case 11:return m=b.sent(),[3,13];case 12:m=t,b.label=13;case 13:d.spectrogram=(p.data=m,p.frameSize=this.nonBatchInputShape[1],p),b.label=14;case 14:return j(o),[2,a]}})})},n.prototype.recognizeOnline=function(){return vt(this,void 0,void 0,function(){var t=this;return kt(this,function(e){return[2,new Promise(function(s,r){t.audioDataExtractor=new Bl({sampleRateHz:t.parameters.sampleRateHz,numFramesPerSpectrogram:t.nonBatchInputShape[0],columnTruncateLength:t.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(i){return vt(t,void 0,void 0,function(){var o,a,l;return kt(this,function(u){switch(u.label){case 0:return o=Us(i),[4,this.audioDataExtractor.stop()];case 1:return u.sent(),a=s,l={},[4,o.data()];case 2:return a.apply(void 0,[(l.data=u.sent(),l.frameSize=this.nonBatchInputShape[1],l)]),o.dispose(),[2,!1]}})})},overlapFactor:0}),t.audioDataExtractor.start()})]})})},n.prototype.createTransfer=function(t){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognizer(), or listen().");g(t!=null&&typeof t=="string"&&t.length>1,function(){return"Expected the name for a transfer-learning recognized to be a non-empty string, but got "+JSON.stringify(t)}),g(this.transferRecognizers[t]==null,function(){return"There is already a transfer-learning model named '"+t+"'"});var e=new oA(t,this.parameters,this.model);return this.transferRecognizers[t]=e,e},n.prototype.freezeModel=function(){var t,e;try{for(var s=de(this.model.layers),r=s.next();!r.done;r=s.next())r.value.trainable=!1}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}},n.prototype.checkInputTensorShape=function(t){var e=this.model.inputs[0].shape.length;if(t.shape.length!==e)throw new Error("Expected input Tensor to have rank "+e+", but got rank "+t.shape.length+" that differs ");var s=t.shape.slice(1),r=this.model.inputs[0].shape.slice(1);if(!Wt(s,r))throw new Error("Expected input to have shape [null,"+r+"], but got shape [null,"+s+"]")},n.VALID_VOCABULARY_NAMES=["18w","directional4w"],n.DEFAULT_VOCABULARY_NAME="18w",n})(),oA=(function(n){function t(e,s,r){var i=n.call(this)||this;return i.name=e,i.parameters=s,i.baseModel=r,g(e!=null&&typeof e=="string"&&e.length>0,function(){return"The name of a transfer model must be a non-empty string, but got "+JSON.stringify(e)}),i.nonBatchInputShape=i.baseModel.inputs[0].shape.slice(1),i.words=null,i.dataset=new Pl,i}return GI(t,n),t.prototype.collectExample=function(e,s){return vt(this,void 0,void 0,function(){var r,i,o,a,l=this;return kt(this,function(u){if(g(!this.streaming,function(){return"Cannot start collection of transfer-learning example because a streaming recognition or transfer-learning example collection is ongoing"}),g(e!=null&&typeof e=="string"&&e.length>0,function(){return"Must provide a non-empty string when collecting transfer-learning example"}),s==null&&(s={}),s.durationMultiplier!=null&&s.durationSec!=null)throw new Error("durationMultiplier and durationSec are mutually exclusive, but are both specified.");return s.durationSec!=null?(g(s.durationSec>0,function(){return"Expected durationSec to be > 0, but got "+s.durationSec}),i=this.parameters.fftSize/this.parameters.sampleRateHz,r=Math.ceil(s.durationSec/i)):s.durationMultiplier!=null?(g(s.durationMultiplier>=1,function(){return"Expected duration multiplier to be >= 1, but got "+s.durationMultiplier}),r=Math.round(this.nonBatchInputShape[0]*s.durationMultiplier)):r=this.nonBatchInputShape[0],s.snippetDurationSec!=null&&(g(s.snippetDurationSec>0,function(){return"snippetDurationSec is expected to be > 0, but got "+s.snippetDurationSec}),g(s.onSnippet!=null,function(){return"onSnippet must be provided if snippetDurationSec is provided."})),s.onSnippet!=null&&g(s.snippetDurationSec!=null,function(){return"snippetDurationSec must be provided if onSnippet is provided."}),o=this.parameters.fftSize/this.parameters.sampleRateHz,a=o*r,this.streaming=!0,[2,new Promise(function(c){var h=s.snippetDurationSec==null?1:s.snippetDurationSec/a,f=1-h,d=Math.round(1/h),p=0,m=-1,b=[];l.audioDataExtractor=new Bl({sampleRateHz:l.parameters.sampleRateHz,numFramesPerSpectrogram:r,columnTruncateLength:l.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(v,E){return vt(l,void 0,void 0,function(){var x,I,C,$,L,R,F,B,V,H,tt,at,rt,xt,ut,$t,Ct,He,Fe,cn;return kt(this,function(st){switch(st.label){case 0:return s.onSnippet!=null?[3,7]:(x=Us(v),C=(I=this.dataset).addExample,$={label:e},L={},[4,x.data()]);case 1:return $.spectrogram=(L.data=st.sent(),L.frameSize=this.nonBatchInputShape[1],L),s.includeRawAudio?(F={},[4,E.data()]):[3,3];case 2:return F.data=st.sent(),F.sampleRateHz=this.audioDataExtractor.sampleRateHz,R=F,[3,4];case 3:R=void 0,st.label=4;case 4:return C.apply(I,[($.rawAudio=R,$)]),x.dispose(),[4,this.audioDataExtractor.stop()];case 5:return st.sent(),this.streaming=!1,this.collateTransferWords(),B=c,V={},[4,v.data()];case 6:return B.apply(void 0,[(V.data=st.sent(),V.frameSize=this.nonBatchInputShape[1],V)]),[3,13];case 7:return[4,v.data()];case 8:for(H=st.sent(),m===-1&&(m=H.length),tt=m-1;H[tt]!==0&&tt>=0;)tt--;return at=m-tt-1,m=tt+1,rt=H.slice(H.length-at,H.length),b.push(rt),s.onSnippet!=null&&s.onSnippet({data:rt,frameSize:this.nonBatchInputShape[1]}),p++!==d?[3,13]:[4,this.audioDataExtractor.stop()];case 9:return st.sent(),this.streaming=!1,this.collateTransferWords(),xt=lp(hp(b)),ut={data:xt,frameSize:this.nonBatchInputShape[1]},Ct=($t=this.dataset).addExample,He={label:e,spectrogram:ut},s.includeRawAudio?(cn={},[4,E.data()]):[3,11];case 10:return cn.data=st.sent(),cn.sampleRateHz=this.audioDataExtractor.sampleRateHz,Fe=cn,[3,12];case 11:Fe=void 0,st.label=12;case 12:Ct.apply($t,[(He.rawAudio=Fe,He)]),c(ut),st.label=13;case 13:return[2,!1]}})})},overlapFactor:f,includeRawAudio:s.includeRawAudio}),l.audioDataExtractor.start(s.audioTrackConstraints)})]})})},t.prototype.clearExamples=function(){var e=this;g(this.words!=null&&this.words.length>0&&!this.dataset.empty(),function(){return"No transfer learning examples exist for model name "+e.name}),this.dataset.clear(),this.words=null},t.prototype.countExamples=function(){if(this.dataset.empty())throw new Error("No examples have been collected for transfer-learning model named '"+this.name+"' yet.");return this.dataset.getExampleCounts()},t.prototype.getExamples=function(e){return this.dataset.getExamples(e)},t.prototype.setExampleKeyFrameIndex=function(e,s){this.dataset.setExampleKeyFrameIndex(e,s)},t.prototype.removeExample=function(e){this.dataset.removeExample(e),this.collateTransferWords()},t.prototype.isDatasetEmpty=function(){return this.dataset.empty()},t.prototype.loadExamples=function(e,s){var r,i,o,a;s===void 0&&(s=!1);var l=new Pl(e);s&&this.clearExamples();var u=l.getVocabulary();try{for(var c=de(u),h=c.next();!h.done;h=c.next()){var f=h.value,d=l.getExamples(f);try{for(var p=(o=void 0,de(d)),m=p.next();!m.done;m=p.next()){var b=m.value;this.dataset.addExample(b.example)}}catch(v){o={error:v}}finally{try{m&&!m.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}}}catch(v){r={error:v}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}this.collateTransferWords()},t.prototype.serializeExamples=function(e){return this.dataset.serialize(e)},t.prototype.collateTransferWords=function(){this.words=this.dataset.getVocabulary()},t.prototype.collectTransferDataAsTensors=function(e,s){var r=this.nonBatchInputShape[0];e=e||ji;var i=Math.round(e*r),o=this.dataset.getData(null,Rl({numFrames:r,hopFrames:i},s));return{xs:o.xs,ys:o.ys}},t.prototype.collectTransferDataAsTfDataset=function(e,s,r,i){s===void 0&&(s=.15),r===void 0&&(r=32);var o=this.nonBatchInputShape[0];e=e||ji;var a=Math.round(e*o);return this.dataset.getData(null,Rl({numFrames:o,hopFrames:a,getDataset:!0,datasetBatchSize:r,datasetValidationSplit:s},i))},t.prototype.train=function(e){return vt(this,void 0,void 0,function(){var s,r=this;return kt(this,function(i){return g(this.words!=null&&this.words.length>0,function(){return"Cannot train transfer-learning model '"+r.name+"' because no transfer learning example has been collected."}),g(this.words.length>1,function(){return"Cannot train transfer-learning model '"+r.name+"' because only 1 word label ('"+JSON.stringify(r.words)+"') has been collected for transfer learning. Requires at least 2."}),e.fineTuningEpochs!=null&&g(e.fineTuningEpochs>=0&&Number.isInteger(e.fineTuningEpochs),function(){return"If specified, fineTuningEpochs must be a non-negative integer, but received "+e.fineTuningEpochs}),e==null&&(e={}),this.model==null&&this.createTransferModelFromBaseModel(),this.secondLastBaseDenseLayer.trainable=!1,this.model.compile({loss:"categoricalCrossentropy",optimizer:e.optimizer||"sgd",metrics:["acc"]}),s=e.fitDatasetDurationMillisThreshold==null?6e4:e.fitDatasetDurationMillisThreshold,this.dataset.durationMillis()>s?(console.log("Detected large dataset: total duration = "+this.dataset.durationMillis()+" ms > "+s+" ms. Training transfer model using fitDataset() instead of fit()"),[2,this.trainOnDataset(e)]):[2,this.trainOnTensors(e)]})})},t.prototype.trainOnDataset=function(e){return vt(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h;return kt(this,function(f){switch(f.label){case 0:return g(e.epochs>0,function(){return"Invalid config.epochs"}),s=e.batchSize==null?32:e.batchSize,r=e.windowHopRatio||ji,i=Ol(this.collectTransferDataAsTfDataset(r,e.validationSplit,s,{augmentByMixingNoiseRatio:e.augmentByMixingNoiseRatio}),2),o=i[0],a=i[1],l=xe(),[4,this.model.fitDataset(o,{epochs:e.epochs,validationData:e.validationSplit>0?a:null,callbacks:e.callback==null?null:[e.callback]})];case 1:return u=f.sent(),console.log("fitDataset() took "+(xe()-l).toFixed(2)+" ms"),e.fineTuningEpochs!=null&&e.fineTuningEpochs>0?(c=xe(),[4,this.fineTuningUsingTfDatasets(e,o,a)]):[3,3];case 2:return h=f.sent(),console.log("fitDataset() (fine-tuning) took "+(xe()-c).toFixed(2)+" ms"),[2,[u,h]];case 3:return[2,u]}})})},t.prototype.trainOnTensors=function(e){return vt(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h,f;return kt(this,function(d){switch(d.label){case 0:s=e.windowHopRatio||ji,r=this.collectTransferDataAsTensors(s,{augmentByMixingNoiseRatio:e.augmentByMixingNoiseRatio}),i=r.xs,o=r.ys,console.log("Training data: xs.shape = "+i.shape+", ys.shape = "+o.shape),d.label=1;case 1:return d.trys.push([1,,6,7]),e.validationSplit!=null?(c=YI(i,o,e.validationSplit),a=c.trainXs,l=c.trainYs,u=[c.valXs,c.valYs]):(a=i,l=o),[4,this.model.fit(a,l,{epochs:e.epochs==null?20:e.epochs,validationData:u,batchSize:e.batchSize,callbacks:e.callback==null?null:[e.callback]})];case 2:return h=d.sent(),e.fineTuningEpochs!=null&&e.fineTuningEpochs>0?[4,this.fineTuningUsingTensors(e,a,l,u)]:[3,4];case 3:return f=d.sent(),[2,[h,f]];case 4:return[2,h];case 5:return[3,7];case 6:return j([i,o,a,l,u]),[7];case 7:return[2]}})})},t.prototype.fineTuningUsingTfDatasets=function(e,s,r){return vt(this,void 0,void 0,function(){var i,o,a;return kt(this,function(l){switch(l.label){case 0:return i=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,o=e.fineTuningOptimizer==null?"sgd":e.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:o,metrics:["acc"]}),[4,this.model.fitDataset(s,{epochs:e.fineTuningEpochs,validationData:r,callbacks:e.callback==null?null:[e.callback]})];case 1:return a=l.sent(),this.secondLastBaseDenseLayer.trainable=i,[2,a]}})})},t.prototype.fineTuningUsingTensors=function(e,s,r,i){return vt(this,void 0,void 0,function(){var o,a,l;return kt(this,function(u){switch(u.label){case 0:return o=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,a=e.fineTuningOptimizer==null?"sgd":e.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:a,metrics:["acc"]}),[4,this.model.fit(s,r,{epochs:e.fineTuningEpochs,validationData:i,batchSize:e.batchSize,callbacks:e.fineTuningCallback==null?null:[e.fineTuningCallback]})];case 1:return l=u.sent(),this.secondLastBaseDenseLayer.trainable=o,[2,l]}})})},t.prototype.evaluate=function(e){return vt(this,void 0,void 0,function(){var s,r=this;return kt(this,function(i){return g(e.wordProbThresholds!=null&&e.wordProbThresholds.length>0,function(){return"Received null or empty wordProbThresholds"}),s=0,g(this.words[s]===os,function(){return"Cannot perform evaluation when the first tag is not "+os}),[2,T(function(){for(var o=[],a=0,l=r.collectTransferDataAsTensors(e.windowHopRatio),u=l.xs,c=l.ys.argMax(-1).dataSync(),h=r.model.predict(u),f=Ze(ct(h,[0,1],[h.shape[0],h.shape[1]-1]),-1),d=h.shape[0],p=0;p<e.wordProbThresholds.length;++p){for(var m=e.wordProbThresholds[p],b=f.greater(K(m)).dataSync(),v=0,E=0,x=0,I=0,C=0;C<d;++C)c[C]===s?(v++,b[C]&&x++):(E++,b[C]&&I++);var $=x/v,L=I/E;o.push({probThreshold:m,fpr:$,tpr:L}),console.log("ROC thresh="+m+": fpr="+$.toFixed(4)+", tpr="+L.toFixed(4)),p>0&&(a+=Math.abs(o[p-1].fpr-o[p].fpr)*(o[p-1].tpr+o[p].tpr)/2)}return{rocCurve:o,auc:a}})]})})},t.prototype.createTransferModelFromBaseModel=function(){var e=this;g(this.words!=null,function(){return"No word example is available for tranfer-learning model of name "+e.name});for(var s=this.baseModel.layers,r=s.length-2;r>=0&&s[r].getClassName().toLowerCase()!=="dense";)r--;if(r<0)throw new Error("Cannot find a hidden dense layer in the base model.");this.secondLastBaseDenseLayer=s[r];var i=this.secondLastBaseDenseLayer.output;this.transferHead=xI(),this.transferHead.add(MI({units:this.words.length,activation:"softmax",inputShape:i.shape.slice(1),name:"NewHeadDense"}));var o=this.transferHead.apply(i);this.model=Ed({inputs:this.baseModel.inputs,outputs:o})},t.prototype.modelInputShape=function(){return this.baseModel.inputs[0].shape},t.prototype.getMetadata=function(){return{tfjsSpeechCommandsVersion:Ul,modelName:this.name,timeStamp:new Date().toISOString(),wordLabels:this.wordLabels()}},t.prototype.save=function(e){return vt(this,void 0,void 0,function(){var s,r,i;return kt(this,function(o){return s=e!=null,e=e||Gl(this.name),s||(r=Nr.localStorage.getItem(Ar),(i=r==null?{}:JSON.parse(r))[this.name]=this.getMetadata(),Nr.localStorage.setItem(Ar,JSON.stringify(i))),console.log("Saving model to "+e),[2,this.model.save(e)]})})},t.prototype.load=function(e){return vt(this,void 0,void 0,function(){var s,r,i;return kt(this,function(o){switch(o.label){case 0:if(s=e!=null,e=e||Gl(this.name),!s){if((r=JSON.parse(Nr.localStorage.getItem(Ar)))==null||r[this.name]==null)throw new Error("Cannot find metadata for transfer model named "+this.name+'"');this.words=r[this.name].wordLabels,console.log("Loaded word list for model named "+this.name+": "+this.words)}return i=this,[4,Oa(e)];case 1:return i.model=o.sent(),console.log("Loaded model from "+e+":"),this.model.summary(),[2]}})})},t.prototype.createTransfer=function(e){throw new Error("Creating transfer-learned recognizer from a transfer-learned recognizer is not supported.")},t})(bp);function Gl(n){return""+Wl+n}function aA(){return vt(this,void 0,void 0,function(){var n,t,e;return kt(this,function(s){switch(s.label){case 0:return[4,jg()];case 1:for(e in n=s.sent(),t=[],n)e.startsWith(Wl)&&t.push(e.slice(Wl.length));return[2,t]}})})}function lA(n){return vt(this,void 0,void 0,function(){var t;return kt(this,function(e){switch(e.label){case 0:return(t=JSON.parse(Nr.localStorage.getItem(Ar)))==null&&(t={}),t[n]!=null&&delete t[n],Nr.localStorage.setItem(Ar,JSON.stringify(t)),[4,Kg(Gl(n))];case 1:return e.sent(),[2]}})})}function uA(n,t,e,s){if(g(e==null&&s==null||e!=null&&s!=null,function(){return"customModelURL and customMetadataURL must be both provided or both not provided."}),e!=null&&g(t==null,function(){return"vocabulary name must be null or undefined when modelURL is provided."}),n==="BROWSER_FFT")return new bp(t,e,s);throw n==="SOFT_FFT"?new Error("SOFT_FFT SpeechCommandRecognizer has not been implemented yet."):new Error("Invalid fftType: '"+n+"'")}var cA={concatenateFloat32Arrays:hp,normalizeFloat32Array:lp,normalize:Us,playRawAudio:jI}},90808(Vl){Vl.exports=J;var oe=null;try{oe=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function J(z,w,W){this.low=z|0,this.high=w|0,this.unsigned=!!W}J.prototype.__isLong__,Object.defineProperty(J.prototype,"__isLong__",{value:!0});function Qt(z){return(z&&z.__isLong__)===!0}J.isLong=Qt;var $r={},Ji={};function on(z,w){var W,Z,Nt;return w?(z>>>=0,(Nt=0<=z&&z<256)&&(Z=Ji[z],Z)?Z:(W=it(z,(z|0)<0?-1:0,!0),Nt&&(Ji[z]=W),W)):(z|=0,(Nt=-128<=z&&z<128)&&(Z=$r[z],Z)?Z:(W=it(z,z<0?-1:0,!1),Nt&&($r[z]=W),W))}J.fromInt=on;function gt(z,w){if(isNaN(z))return w?ke:Zt;if(w){if(z<0)return ke;if(z>=Zi)return Xi}else{if(z<=-g)return ae;if(z+1>=g)return zn}return z<0?gt(-z,w).neg():it(z%Mn|0,z/Mn|0,w)}J.fromNumber=gt;function it(z,w,W){return new J(z,w,W)}J.fromBits=it;var Gs=Math.pow;function _r(z,w,W){if(z.length===0)throw Error("empty string");if(z==="NaN"||z==="Infinity"||z==="+Infinity"||z==="-Infinity")return Zt;if(typeof w=="number"?(W=w,w=!1):w=!!w,W=W||10,W<2||36<W)throw RangeError("radix");var Z;if((Z=z.indexOf("-"))>0)throw Error("interior hyphen");if(Z===0)return _r(z.substring(1),w,W).neg();for(var Nt=gt(Gs(W,8)),bt=Zt,Mt=0;Mt<z.length;Mt+=8){var te=Math.min(8,z.length-Mt),pe=parseInt(z.substring(Mt,Mt+te),W);if(te<8){var Yt=gt(Gs(W,te));bt=bt.mul(Yt).add(gt(pe))}else bt=bt.mul(Nt),bt=bt.add(gt(pe))}return bt.unsigned=w,bt}J.fromString=_r;function ve(z,w){return typeof z=="number"?gt(z,w):typeof z=="string"?_r(z,w):it(z.low,z.high,typeof w=="boolean"?w:z.unsigned)}J.fromValue=ve;var as=65536,ql=1<<24,Mn=as*as,Zi=Mn*Mn,g=Zi/2,be=on(ql),Zt=on(0);J.ZERO=Zt;var ke=on(0,!0);J.UZERO=ke;var At=on(1);J.ONE=At;var Yi=on(1,!0);J.UONE=Yi;var Wt=on(-1);J.NEG_ONE=Wt;var zn=it(-1,2147483647,!1);J.MAX_VALUE=zn;var Xi=it(-1,-1,!0);J.MAX_UNSIGNED_VALUE=Xi;var ae=it(0,-2147483648,!1);J.MIN_VALUE=ae;var O=J.prototype;O.toInt=function(){return this.unsigned?this.low>>>0:this.low},O.toNumber=function(){return this.unsigned?(this.high>>>0)*Mn+(this.low>>>0):this.high*Mn+(this.low>>>0)},O.toString=function(w){if(w=w||10,w<2||36<w)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ae)){var W=gt(w),Z=this.div(W),Nt=Z.mul(W).sub(this);return Z.toString(w)+Nt.toInt().toString(w)}else return"-"+this.neg().toString(w);for(var bt=gt(Gs(w,6),this.unsigned),Mt=this,te="";;){var pe=Mt.div(bt),Yt=Mt.sub(pe.mul(bt)).toInt()>>>0,lt=Yt.toString(w);if(Mt=pe,Mt.isZero())return lt+te;for(;lt.length<6;)lt="0"+lt;te=""+lt+te}},O.getHighBits=function(){return this.high},O.getHighBitsUnsigned=function(){return this.high>>>0},O.getLowBits=function(){return this.low},O.getLowBitsUnsigned=function(){return this.low>>>0},O.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ae)?64:this.neg().getNumBitsAbs();for(var w=this.high!=0?this.high:this.low,W=31;W>0&&(w&1<<W)==0;W--);return this.high!=0?W+33:W+1},O.isZero=function(){return this.high===0&&this.low===0},O.eqz=O.isZero,O.isNegative=function(){return!this.unsigned&&this.high<0},O.isPositive=function(){return this.unsigned||this.high>=0},O.isOdd=function(){return(this.low&1)===1},O.isEven=function(){return(this.low&1)===0},O.equals=function(w){return Qt(w)||(w=ve(w)),this.unsigned!==w.unsigned&&this.high>>>31===1&&w.high>>>31===1?!1:this.high===w.high&&this.low===w.low},O.eq=O.equals,O.notEquals=function(w){return!this.eq(w)},O.neq=O.notEquals,O.ne=O.notEquals,O.lessThan=function(w){return this.comp(w)<0},O.lt=O.lessThan,O.lessThanOrEqual=function(w){return this.comp(w)<=0},O.lte=O.lessThanOrEqual,O.le=O.lessThanOrEqual,O.greaterThan=function(w){return this.comp(w)>0},O.gt=O.greaterThan,O.greaterThanOrEqual=function(w){return this.comp(w)>=0},O.gte=O.greaterThanOrEqual,O.ge=O.greaterThanOrEqual,O.compare=function(w){if(Qt(w)||(w=ve(w)),this.eq(w))return 0;var W=this.isNegative(),Z=w.isNegative();return W&&!Z?-1:!W&&Z?1:this.unsigned?w.high>>>0>this.high>>>0||w.high===this.high&&w.low>>>0>this.low>>>0?-1:1:this.sub(w).isNegative()?-1:1},O.comp=O.compare,O.negate=function(){return!this.unsigned&&this.eq(ae)?ae:this.not().add(At)},O.neg=O.negate,O.add=function(w){Qt(w)||(w=ve(w));var W=this.high>>>16,Z=this.high&65535,Nt=this.low>>>16,bt=this.low&65535,Mt=w.high>>>16,te=w.high&65535,pe=w.low>>>16,Yt=w.low&65535,lt=0,le=0,zt=0,Xt=0;return Xt+=bt+Yt,zt+=Xt>>>16,Xt&=65535,zt+=Nt+pe,le+=zt>>>16,zt&=65535,le+=Z+te,lt+=le>>>16,le&=65535,lt+=W+Mt,lt&=65535,it(zt<<16|Xt,lt<<16|le,this.unsigned)},O.subtract=function(w){return Qt(w)||(w=ve(w)),this.add(w.neg())},O.sub=O.subtract,O.multiply=function(w){if(this.isZero())return Zt;if(Qt(w)||(w=ve(w)),oe){var W=oe.mul(this.low,this.high,w.low,w.high);return it(W,oe.get_high(),this.unsigned)}if(w.isZero())return Zt;if(this.eq(ae))return w.isOdd()?ae:Zt;if(w.eq(ae))return this.isOdd()?ae:Zt;if(this.isNegative())return w.isNegative()?this.neg().mul(w.neg()):this.neg().mul(w).neg();if(w.isNegative())return this.mul(w.neg()).neg();if(this.lt(be)&&w.lt(be))return gt(this.toNumber()*w.toNumber(),this.unsigned);var Z=this.high>>>16,Nt=this.high&65535,bt=this.low>>>16,Mt=this.low&65535,te=w.high>>>16,pe=w.high&65535,Yt=w.low>>>16,lt=w.low&65535,le=0,zt=0,Xt=0,ls=0;return ls+=Mt*lt,Xt+=ls>>>16,ls&=65535,Xt+=bt*lt,zt+=Xt>>>16,Xt&=65535,Xt+=Mt*Yt,zt+=Xt>>>16,Xt&=65535,zt+=Nt*lt,le+=zt>>>16,zt&=65535,zt+=bt*Yt,le+=zt>>>16,zt&=65535,zt+=Mt*pe,le+=zt>>>16,zt&=65535,le+=Z*lt+Nt*Yt+bt*pe+Mt*te,le&=65535,it(Xt<<16|ls,le<<16|zt,this.unsigned)},O.mul=O.multiply,O.divide=function(w){if(Qt(w)||(w=ve(w)),w.isZero())throw Error("division by zero");if(oe){if(!this.unsigned&&this.high===-2147483648&&w.low===-1&&w.high===-1)return this;var W=(this.unsigned?oe.div_u:oe.div_s)(this.low,this.high,w.low,w.high);return it(W,oe.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?ke:Zt;var Z,Nt,bt;if(this.unsigned){if(w.unsigned||(w=w.toUnsigned()),w.gt(this))return ke;if(w.gt(this.shru(1)))return Yi;bt=ke}else{if(this.eq(ae)){if(w.eq(At)||w.eq(Wt))return ae;if(w.eq(ae))return At;var Mt=this.shr(1);return Z=Mt.div(w).shl(1),Z.eq(Zt)?w.isNegative()?At:Wt:(Nt=this.sub(w.mul(Z)),bt=Z.add(Nt.div(w)),bt)}else if(w.eq(ae))return this.unsigned?ke:Zt;if(this.isNegative())return w.isNegative()?this.neg().div(w.neg()):this.neg().div(w).neg();if(w.isNegative())return this.div(w.neg()).neg();bt=Zt}for(Nt=this;Nt.gte(w);){Z=Math.max(1,Math.floor(Nt.toNumber()/w.toNumber()));for(var te=Math.ceil(Math.log(Z)/Math.LN2),pe=te<=48?1:Gs(2,te-48),Yt=gt(Z),lt=Yt.mul(w);lt.isNegative()||lt.gt(Nt);)Z-=pe,Yt=gt(Z,this.unsigned),lt=Yt.mul(w);Yt.isZero()&&(Yt=At),bt=bt.add(Yt),Nt=Nt.sub(lt)}return bt},O.div=O.divide,O.modulo=function(w){if(Qt(w)||(w=ve(w)),oe){var W=(this.unsigned?oe.rem_u:oe.rem_s)(this.low,this.high,w.low,w.high);return it(W,oe.get_high(),this.unsigned)}return this.sub(this.div(w).mul(w))},O.mod=O.modulo,O.rem=O.modulo,O.not=function(){return it(~this.low,~this.high,this.unsigned)},O.and=function(w){return Qt(w)||(w=ve(w)),it(this.low&w.low,this.high&w.high,this.unsigned)},O.or=function(w){return Qt(w)||(w=ve(w)),it(this.low|w.low,this.high|w.high,this.unsigned)},O.xor=function(w){return Qt(w)||(w=ve(w)),it(this.low^w.low,this.high^w.high,this.unsigned)},O.shiftLeft=function(w){return Qt(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?it(this.low<<w,this.high<<w|this.low>>>32-w,this.unsigned):it(0,this.low<<w-32,this.unsigned)},O.shl=O.shiftLeft,O.shiftRight=function(w){return Qt(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?it(this.low>>>w|this.high<<32-w,this.high>>w,this.unsigned):it(this.high>>w-32,this.high>=0?0:-1,this.unsigned)},O.shr=O.shiftRight,O.shiftRightUnsigned=function(w){if(Qt(w)&&(w=w.toInt()),w&=63,w===0)return this;var W=this.high;if(w<32){var Z=this.low;return it(Z>>>w|W<<32-w,W>>>w,this.unsigned)}else return w===32?it(W,0,this.unsigned):it(W>>>w-32,0,this.unsigned)},O.shru=O.shiftRightUnsigned,O.shr_u=O.shiftRightUnsigned,O.toSigned=function(){return this.unsigned?it(this.low,this.high,!1):this},O.toUnsigned=function(){return this.unsigned?this:it(this.low,this.high,!0)},O.toBytes=function(w){return w?this.toBytesLE():this.toBytesBE()},O.toBytesLE=function(){var w=this.high,W=this.low;return[W&255,W>>>8&255,W>>>16&255,W>>>24,w&255,w>>>8&255,w>>>16&255,w>>>24]},O.toBytesBE=function(){var w=this.high,W=this.low;return[w>>>24,w>>>16&255,w>>>8&255,w&255,W>>>24,W>>>16&255,W>>>8&255,W&255]},J.fromBytes=function(w,W,Z){return Z?J.fromBytesLE(w,W):J.fromBytesBE(w,W)},J.fromBytesLE=function(w,W){return new J(w[0]|w[1]<<8|w[2]<<16|w[3]<<24,w[4]|w[5]<<8|w[6]<<16|w[7]<<24,W)},J.fromBytesBE=function(w,W){return new J(w[4]<<24|w[5]<<16|w[6]<<8|w[7],w[0]<<24|w[1]<<16|w[2]<<8|w[3],W)}}}]);
