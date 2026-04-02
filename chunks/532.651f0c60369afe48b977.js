"use strict";(self.webpackChunkGUI=self.webpackChunkGUI||[]).push([[532],{42532(ZI,wl,Tt){Tt.r(wl),Tt.d(wl,{BACKGROUND_NOISE_TAG:()=>Rn,Dataset:()=>ml,UNKNOWN_TAG:()=>Hf,create:()=>qI,deleteSavedTransferModel:()=>jI,getMaxIntensityFrameIndex:()=>Vf,listSavedTransferModels:()=>HI,spectrogram2IntensityCurve:()=>Gf,utils:()=>KI,version:()=>gl});/**
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
 */const Qf=1e-7,tp=1e-4;class XI{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class ep{refCount(t){return Yt("refCount")}incRef(t){return Yt("incRef")}timerAvailable(){return!0}time(t){return Yt("time")}read(t){return Yt("read")}readSync(t){return Yt("readSync")}readToGPU(t,e){return Yt("readToGPU")}numDataIds(){return Yt("numDataIds")}disposeData(t,e){return Yt("disposeData")}write(t,e,s){return Yt("write")}move(t,e,s,r,i){return Yt("move")}memory(){return Yt("memory")}floatPrecision(){return Yt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Qf:tp}dispose(){return Yt("dispose")}}function Yt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function On(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Ai(n,t,e)}function QI(n,t){if(n.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);let e=n.length,s=0;for(;e>0;)s=Math.random()*e|0,e--,Ai(n,e,s),Ai(t,e,s)}function tA(n,t,e){return Math.max(n,Math.min(t,e))}function eA(n){return n%2===0?n:n+1}function Ai(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function nA(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function sA(n,t){const e=Math.random();return t*e+(1-e)*n}function rA(n,t){let e=0;for(let s=0;s<n.length;s++){const r=Number(n[s])-Number(t[s]);e+=r*r}return e}function g(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Ae(n,t,e=""){g(Wt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function or(n){g(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ar(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||de(n)&&!e)for(let s=0;s<n.length;++s)ar(n[s],t,e);else t.push(n);return t}function Lt(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function iA(n){return n.length===0}function Wt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function lr(n){return n%1===0}function oA(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{const t=Math.exp(2*n);return(t-1)/(t+1)}}function aA(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function lA(n){const t=new Uint32Array(n);for(let e=0;e<n;++e)t[e]=e;return On(t),t}function ur(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function uA(n,t=r=>0,e,s=setTimeout){return new Promise((r,i)=>{let o=0;const a=()=>{if(n()){r();return}o++;const l=t(o);if(e!=null&&o>=e){i();return}s(a,l)};a()})}function cA(n,t){let e=1,s=-1;for(let i=0;i<n.length;++i)if(n[i]>=0)e*=n[i];else if(n[i]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${i}`);s=i}else if(n[i]<0)throw Error(`Shapes can not be < 0. Found ${n[i]} at dim ${i}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const r=n.slice();return r[s]=t/e,r}function he(n,t){const e=t.length;return n=n==null?t.map((s,r)=>r):[].concat(n),g(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),g(n.every(s=>lr(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function np(n,t){const e=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||r?null:he(t,n).sort();let o=0;for(let a=0;a<n.length;++a){if(i!=null){if(i[o]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(i[o]==null||i[o]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),i[o]<=a&&o++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function hA(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function sp(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function rp(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function ip(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function dA(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function de(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function vl(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function op(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Ni(n){return typeof n=="string"||n instanceof String}function ap(n){return typeof n=="boolean"}function Ti(n){return typeof n=="number"}function Di(n){return Array.isArray(n)?Di(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Ti(n)?"float32":Ni(n)?"string":ap(n)?"bool":"float32"}function Ci(n){return!!(n&&n.constructor&&n.call&&n.apply)}function fA(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function $i(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function kl(n,t,e,s=!1){const r=new Array;if(t.length===1){const i=t[0]*(s?2:1);for(let o=0;o<i;o++)r[o]=e[n+o]}else{const i=t[0],o=t.slice(1),a=o.reduce((l,u)=>l*u)*(s?2:1);for(let l=0;l<i;l++)r[l]=kl(n+l*a,o,e,s)}return r}function ws(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((r,i)=>r*i)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return kl(0,n,t,e)}function xl(n,t){const e=_i(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function _i(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function pA(n,t){const e=n.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return ws(n,new Float32Array(e));if(t==="int32")return ws(n,new Int32Array(e));if(t==="bool")return ws(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function Sl(n){n.forEach(t=>{g(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function mA(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=e[r]*n[r];return s}function gA(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/e[r]),n-=s[r]*e[r];return s[s.length-1]=n,s}function Mi(n){return n&&n.then&&typeof n.then=="function"}/**
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
 */const El="tfjsflags";class lp{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=up,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Mi(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);El in t&&t[El].split(",").forEach(s=>{const[r,i]=s.split(":");this.urlFlags[r]=hp(r,i)})}}function up(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(cp(t,s[0],s[1]),s.join("="))),t}function cp(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function hp(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function q(){return Il}let Il=null;function dp(n){Il=n}var Al=Tt(39907);/**
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
 */let zi;function Nl(){if(zi==null){let n;if(typeof window<"u")n=window;else if(typeof Tt.g<"u")n=Tt.g;else if(typeof Al<"u")n=Al;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");zi=n}return zi}function fp(){const n=Nl();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Fi(n,t){const e=fp();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const Tl="Abs",pp="Acos",mp="Acosh",Li="Add",gp="AddN",bp="All",yp="Any",Dl="ArgMax",wp="ArgMin",vp="Asin",kp="Asinh",xp="Atan",Sp="Atanh",Ep="Atan2",Cl="AvgPool",Ip="AvgPoolGrad",$l="AvgPool3D",Ap="AvgPool3DGrad",_l="BatchMatMul",Ml="BatchToSpaceND",Np="Bincount",Tp="BroadcastTo",bA="BroadcastArgs",Ri="Cast",Dp="Ceil",zl="ClipByValue",Cp="Complex",Fl="ComplexAbs",Ll="Concat",Rl="Conv2D",$p="Conv2DBackpropFilter",Ol="Conv2DBackpropInput",Bl="Conv3D",_p="Conv3DBackpropFilterV2",Mp="Conv3DBackpropInputV2",Pl="Cos",Ul="Cosh",zp="Cumprod",Wl="Cumsum",Fp="CropAndResize",yA="DenseBincount",wA="DepthToSpace",Gl="DepthwiseConv2dNative",Lp="DepthwiseConv2dNativeBackpropFilter",Rp="DepthwiseConv2dNativeBackpropInput",vA="Diag",Op="Dilation2D",Bp="Dilation2DBackpropInput",Pp="Dilation2DBackpropFilter",Vl="RealDiv",kA="Einsum",Hl="Elu",Up="EluGrad",Wp="Erf",Gp="Equal",jl="Exp",ql="ExpandDims",Vp="Expm1",Hp="FFT",jp="Fill",qp="FlipLeftRight",Kl="Floor",Jl="FloorDiv",Yl="FusedBatchNorm",Zl="GatherV2",xA="GatherNd",Kp="Greater",Xl="GreaterEqual",Oi="Identity",Jp="IFFT",Yp="Imag",Zp="IsFinite",Xp="IsInf",Qp="IsNan",Ql="LeakyRelu",tm="Less",em="LessEqual",SA="LinSpace",tu="Log",eu="Log1p",nm="LogicalAnd",sm="LogicalNot",EA="LogicalOr",IA="LogicalXor",rm="LogSoftmax",AA="LowerBound",im="LRN",om="LRNGrad",nu="Max",su="Maximum",ru="MaxPool",am="MaxPoolGrad",iu="MaxPool3D",lm="MaxPool3DGrad",NA="MaxPoolWithArgmax",ou="Mean",au="Min",lu="Minimum",um="MirrorPad",cm="Mod",TA="Multinomial",uu="Multiply",cu="Neg",hm="NotEqual",dm="NonMaxSuppressionV3",fm="NonMaxSuppressionV4",pm="NonMaxSuppressionV5",hu="OnesLike",du="OneHot",fu="Pack",pu="PadV2",DA="Pool",mu="Pow",gu="Prelu",mm="Prod",CA="RaggedGather",$A="RaggedTensorToTensor",gm="Range",bm="Real",ym="Reciprocal",bu="Relu",yu="Reshape",wu="ResizeNearestNeighbor",wm="ResizeNearestNeighborGrad",vu="ResizeBilinear",vm="ResizeBilinearGrad",ku="Relu6",xu="Reverse",Su="Round",Eu="Rsqrt",_A="ScatterNd",MA="SearchSorted",Iu="Select",Au="Selu",Nu="Slice",Tu="Sin",Du="Sinh",km="Sign",Cu="Sigmoid",$u="Softplus",_u="Sqrt",Mu="Sum",zu="SpaceToBatchND",Fu="SplitV",Lu="Softmax",xm="SparseFillEmptyRows",Sm="SparseReshape",Em="SparseSegmentMean",Im="SparseSegmentSum",zA="SparseToDense",Ru="SquaredDifference",Am="Square",FA="StridedSlice",Nm="StringNGrams",Tm="StringSplit",Dm="StringToHashBucketFast",Ou="Sub",Cm="Tan",Bu="Tanh",Bi="Tile",LA="TopK",$m="Transform",cr="Transpose",RA="Unique",Pu="Unpack",Uu="UnsortedSegmentSum",OA="UpperBound",Wu="ZerosLike",Gu="Step",Vu="FromPixels",_m="RotateWithOffset",Hu="_FusedMatMul",ju="FusedConv2D",qu="FusedDepthwiseConv2D";var Ku;/**
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
 */function Bn(...n){q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(...n)}function BA(...n){Ku().getBool("IS_TEST")||Ku().getBool("PROD")||console.log(...n)}var Mm;/**
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
 */const Pn=Fi("kernelRegistry",()=>new Map),vs=Fi("gradRegistry",()=>new Map);function Pi(n,t){const e=Wi(n,t);return Pn.get(e)}function Ju(n){return vs.get(n)}function Ui(n){const t=Pn.entries(),e=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[i,o]=r,[a]=i.split("_");a===n&&e.push(o)}return e}function zm(n){const{kernelName:t,backendName:e}=n,s=Wi(t,e);Pn.has(s)&&Mm.warn(`The kernel '${t}' for backend '${e}' is already registered`),Pn.set(s,n)}function Fm(n){const{kernelName:t}=n;vs.has(t)&&q().getBool("DEBUG")&&Bn(`Overriding the gradient for '${t}'`),vs.set(t,n)}function PA(n,t){const e=Wi(n,t);if(!Pn.has(e))throw new Error(`The kernel '${n}' for backend '${t}' is not registered`);Pn.delete(e)}function UA(n){if(!vs.has(n))throw new Error(`The gradient '${n}' for backend is not registered`);vs.delete(n)}function WA(n,t){Ui(n).forEach(s=>{const r=Object.assign({},s,{backendName:t});zm(r)})}function Wi(n,t){return`${t}_${n}`}var Yu=Tt(11219),Lm=Tt.n(Yu);/**
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
 */const fn=Lm()||Yu;function hr(n){return fn.fromString(n,!0,16)}const Zu=hr("c3a5c85c97cb3127"),pn=hr("b492b66fbe98f273"),Rt=hr("9ae16a3b2f90404f");function Gi(n){return n.xor(n.shru(47))}function Xu(n,t,e){const s=n.slice(t,t+e);return fn.fromBytes(Array.from(s),!0,!0)}function it(n,t){return Xu(n,t,8)}function Qu(n,t){return Xu(n,t,4)}function Dt(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function Ge(n,t,e=hr("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let r=t.xor(s).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function Rm(n,t,e,s,r,i){r=r.add(n),i=Dt(i.add(r).add(s),21);const o=r;return r=r.add(t),r=r.add(e),i=i.add(Dt(r,44)),[r.add(s),i.add(o)]}function dr(n,t,e,s){return Rm(it(n,t),it(n,t+8),it(n,t+16),it(n,t+24),e,s)}function Om(n,t=n.length){if(t>=8){const e=Rt.add(t*2),s=it(n,0).add(Rt),r=it(n,t-8),i=Dt(r,37).mul(e).add(s),o=Dt(s,25).add(r).mul(e);return Ge(i,o,e)}if(t>=4){const e=Rt.add(t*2),s=Qu(n,0);return Ge(s.shl(3).add(t),Qu(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],r=n[t-1],i=e+(s<<8),o=t+(r<<2);return Gi(Rt.mul(i).xor(Zu.mul(o))).mul(Rt)}return Rt}function Bm(n,t=n.length){const e=Rt.add(t*2),s=it(n,0).mul(pn),r=it(n,8),i=it(n,t-8).mul(e),o=it(n,t-16).mul(Rt);return Ge(Dt(s.add(r),43).add(Dt(i,30)).add(o),s.add(Dt(r.add(Rt),18)).add(i),e)}function Pm(n,t=n.length){const e=Rt.add(t*2),s=it(n,0).mul(Rt),r=it(n,8),i=it(n,t-8).mul(e),o=it(n,t-16).mul(Rt),a=Dt(s.add(r),43).add(Dt(i,30)).add(o),l=Ge(a,s.add(Dt(r.add(Rt),18)).add(i),e),u=it(n,16).mul(e),c=it(n,24),h=a.add(it(n,t-32)).mul(e),d=l.add(it(n,t-24)).mul(e);return Ge(Dt(u.add(c),43).add(Dt(h,30)).add(d),u.add(Dt(c.add(s),18)).add(h),e)}function GA(n,t=n.length){const e=fn.fromNumber(81,!0);if(t<=32)return t<=16?Om(n,t):Bm(n,t);if(t<=64)return Pm(n,t);let s=e,r=e.mul(pn).add(113),i=Gi(r.mul(Rt).add(113)).mul(Rt),o=[fn.UZERO,fn.UZERO],a=[fn.UZERO,fn.UZERO];s=s.mul(Rt).add(it(n,0));let l=0;const u=(t-1>>6)*64,c=u+(t-1&63)-63;do s=Dt(s.add(r).add(o[0]).add(it(n,l+8)),37).mul(pn),r=Dt(r.add(o[1]).add(it(n,l+48)),42).mul(pn),s=s.xor(a[1]),r=r.add(o[0]).add(it(n,l+40)),i=Dt(i.add(a[0]),33).mul(pn),o=dr(n,l,o[1].mul(pn),s.add(a[0])),a=dr(n,l+32,i.add(a[1]),r.add(it(n,l+16))),[i,s]=[s,i],l+=64;while(l!==u);const h=pn.add(i.and(255).shl(1));return l=c,a[0]=a[0].add(t-1&63),o[0]=o[0].add(a[0]),a[0]=a[0].add(o[0]),s=Dt(s.add(r).add(o[0]).add(it(n,l+8)),37).mul(h),r=Dt(r.add(o[1]).add(it(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(o[0].mul(9).add(it(n,l+40))),i=Dt(i.add(a[0]),33).mul(h),o=dr(n,l,o[1].mul(h),s.add(a[0])),a=dr(n,l+32,i.add(a[1]),r.add(it(n,l+16))),[i,s]=[s,i],Ge(Ge(o[0],a[0],h).add(Gi(r).mul(Zu)).add(i),Ge(o[1],a[1],h).add(s),h)}/**
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
 */function VA(n,t){return t==="string"?tc(n):Vi([n],t)}function Um(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Vi(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ar(n)),q().getBool("DEBUG")&&rp(n,t),Um(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Qt(){return q().platform.now()}function Wm(n,t){return q().platform.fetch(n,t)}function tc(n,t="utf-8"){return t=t||"utf-8",q().platform.encode(n,t)}function ec(n,t="utf-8"){return t=t||"utf-8",q().platform.decode(n,t)}/**
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
 */class Gm{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Hm)}profileKernel(t,e,s){let r;const i=()=>{r=s()};let o;const a=Qt();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{i();for(const u of r)u.dataSync();o=Promise.resolve({kernelMs:Qt()-a})}if(q().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<r.length;u++){const c=r[u];c.data().then(h=>{Vm(h,c.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:r,inputs:i,extraInfo:o}=t;s.forEach(a=>{Promise.all([a.data(),r,o]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],i,l[2])})})}}function Vm(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class Hm{logKernelProfile(t,e,s,r,i,o){const a=typeof r=="number"?ur(`${r}ms`,9):r.error,l=ur(t,25),u=e.rank,c=e.size,h=ur(e.shape.toString(),14);let d="";for(const f in i){const p=i[f];if(p!=null){const m=p.shape||e.shape,b=m.length;d+=`${f}: ${b}D ${b>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${h}	%c${c}	%c${d}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function jm(n,t,e){const s={},r={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const u=n[l],c=u.inputs;for(const h in c){const d=c[h];let f=!1;for(let p=0;p<t.length;p++)if(s[d.id]){u.outputs.forEach(m=>s[m.id]=!0),f=!0,r[u.id]=!0;break}if(f)break}}const i={};i[e.id]=!0;const o={};for(let l=n.length-1;l>=0;l--){const u=n[l],c=u.inputs;for(let h=0;h<u.outputs.length;h++)if(i[u.outputs[h].id]){for(const d in c)i[c[d].id]=!0,o[u.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const u=n[l];if(r[u.id]&&o[u.id]){const c={};for(const d in u.inputs){const f=u.inputs[d];s[f.id]&&(c[d]=f)}const h=Object.assign({},u);h.inputs=c,h.outputs=u.outputs,a.push(h)}}return a}function qm(n,t,e,s){for(let r=t.length-1;r>=0;r--){const i=t[r],o=[];if(i.outputs.forEach(l=>{const u=n[l.id];u!=null?o.push(u):o.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(o);for(const l in i.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const u=e(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=i.inputs[l];if(!Wt(u.shape,c.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(n[c.id]==null)n[c.id]=u;else{const h=n[c.id];n[c.id]=s(h,u),h.dispose()}}}}/**
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
 */const nc=20,ks=3,Hi=7;function Km(n,t,e,s){const r=$i(t),i=Jm(n,t,e,r),o=t.length,a=fr(n,t,e,r,i),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${o}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function Jm(n,t,e,s){const r=Lt(t),i=s[s.length-1],o=new Array(i).fill(0),a=t.length,l=e==="complex64"?Ss(n):n;if(a>1)for(let u=0;u<r/i;u++){const c=u*i;for(let h=0;h<i;h++)o[h]=Math.max(o[h],xs(l[c+h],0,e).length)}return o}function xs(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Hi))} + ${parseFloat(n[1].toFixed(Hi))}j`:Ni(n)?s=`'${n}'`:e==="bool"?s=sc(n):s=parseFloat(n.toFixed(Hi)).toString(),ur(s,t)}function sc(n){return n===0?"false":"true"}function fr(n,t,e,s,r,i=!0){const o=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Ss(n);return[xs(m[0],0,e)]}return e==="bool"?[sc(n[0])]:[n[0].toString()]}if(l===1){if(a>nc){const b=ks*o;let w=Array.from(n.slice(0,b)),S=Array.from(n.slice((a-ks)*o,a*o));return e==="complex64"&&(w=Ss(w),S=Ss(S)),["["+w.map((k,E)=>xs(k,r[E],e)).join(", ")+", ..., "+S.map((k,E)=>xs(k,r[a-ks+E],e)).join(", ")+"]"]}return["["+(e==="complex64"?Ss(n):Array.from(n)).map((b,w)=>xs(b,r[w],e)).join(", ")+"]"]}const u=t.slice(1),c=s.slice(1),h=s[0]*o,d=[];if(a>nc){for(let m=0;m<ks;m++){const b=m*h,w=b+h;d.push(...fr(n.slice(b,w),u,e,c,r,!1))}d.push("...");for(let m=a-ks;m<a;m++){const b=m*h,w=b+h;d.push(...fr(n.slice(b,w),u,e,c,r,m===a-1))}}else for(let m=0;m<a;m++){const b=m*h,w=b+h;d.push(...fr(n.slice(b,w),u,e,c,r,m===a-1))}const f=l===2?",":"";d[0]="["+d[0]+f;for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+f;let p=`,
`;for(let m=2;m<l;m++)p+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(i?"":p),d}function Ss(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
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
 */class Ym{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=Lt(t),s!=null){const r=s.length;g(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||sp(e,this.size),this.strides=$i(t)}set(t,...e){e.length===0&&(e=[0]),g(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const r of t){if(r<0||r>=this.shape[e]){const i=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(i)}e++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return fe().makeTensor(this.values,this.shape,this.dtype)}}let fe=null,Un=null,rc=null;function Zm(n){fe=n}function Xm(n){Un=n}function Qm(n){rc=n}class lt{constructor(t,e,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Lt(t),this.strides=$i(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Un.buffer(this.shape,this.dtype,t)}bufferSync(){return Un.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return ws(this.shape,t,this.dtype==="complex64")}arraySync(){return ws(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=fe().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>ec(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),fe().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=fe().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>ec(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await fe().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(fe().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Un.print(this,t)}clone(){return this.throwIfDisposed(),Un.clone(this)}toString(t=!1){const e=this.dataSync();return Km(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Un.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),fe().makeVariable(this,t,e,s)}}Object.defineProperty(lt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function tg(){return Fi("Tensor",()=>lt)}tg();class pr extends lt{constructor(t,e,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Wt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);fe().disposeTensor(this),this.dataId=t.dataId,fe().incRef(this,null)}dispose(){fe().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(pr,Symbol.hasInstance,{value:n=>n instanceof lt&&n.assign!=null&&n.assign instanceof Function});/**
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
 */var ic;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(ic||(ic={}));var ji;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(ji||(ji={}));var qi;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(qi||(qi={}));var Ki;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Ki||(Ki={}));var Ji;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Ji||(Ji={}));const eg={float32:Ki,int32:ji,bool:qi,complex64:Ji};function oc(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return eg[n][t]}function HA(n){return oc(n,"int32")}/**
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
 */function xt(n,t){if(n.dtype===t.dtype)return[n,t];const e=oc(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function jA(n,t){g(n.dtype===t.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`)}function Yi(n,t){return t.some(e=>e.id===n.id)}function Ve(n){const t=[];return ac(n,t,new Set),t}function ac(n,t,e){if(n==null)return;if(n instanceof lt){t.push(n);return}if(!ng(n))return;const s=n;for(const r in s){const i=s[r];e.has(i)||(e.add(i),ac(i,t,e))}}function ng(n){return Array.isArray(n)||typeof n=="object"}/**
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
 */function Zi(n){return n.kernelName!=null}class lc{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Wn{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new lc}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(Bn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Gm(this.backendInstance),!0}setupRegisteredKernels(){Ui(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Ui(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof ep)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,i=s.then(o=>r<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Bn(`Initialization of backend ${t} failed`),Bn(o.stack||o.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Bn(`Initialization of backend ${t} failed`),Bn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:r,asyncInit:i}=this.initializeBackend(s);if(i||r)return{name:s,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),r=s.backend,i=this.readSync(e),o=r.refCount(e);r.disposeData(e,!0),s.backend=t,t.move(e,i,s.shape,s.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,s){t();try{const r=s();return e(),r}catch(r){throw e(),r}}nextTensorId(){return Wn.nextTensorId++}nextVariableId(){return Wn.nextVariableId++}clone(t){const e=I.runKernel(Oi,{x:t}),s={x:t},r=o=>({x:()=>{const a="float32",l={x:o},u={dtype:a};return I.runKernel(Ri,l,u)}}),i=[];return this.addTapeNode(this.state.activeScope.name,s,[e],r,i,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(Pi(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const r=this.backend.numDataIds();let i=0;s.forEach(l=>{i+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-i-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const r=this.isTapeOn(),i=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const u=Zi(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Zi(t)){const{kernelName:p,inputs:m,attrs:b}=t;this.backendName==null&&this.backend;const w=Pi(p,this.backendName);g(w!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const S=this.backend.numDataIds();l=w.kernelFunc({inputs:m,attrs:b,backend:this.backend});const k=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,S,k);const E=k.map(D=>D.rank!=null?D:this.makeTensorFromTensorInfo(D));if(r){const D=this.getTensorsForGradient(p,m,E);s=this.saveTensorsForBackwardMode(D)}return E}}else{const{forwardFunc:p}=t,m=b=>{r&&(s=b.map(w=>this.keep(this.clone(w))))};a=()=>{const b=this.backend.numDataIds();l=this.tidy(()=>p(this.backend,m));const w=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,b,w),w}}const{inputs:c,attrs:h}=t,d=Zi(t)?null:t.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(f=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),e=f.outputs)}),r&&this.addTapeNode(u,c,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(p=>c[p]!=null?c[p].shape:null),outputShapes:e.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const r=Ju(t);if(r!=null){const i=r.inputsToSave||[],o=r.outputsToSave||[];let a;r.saveAllInputs?(g(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(u=>e[u])):a=i.map(u=>e[u]);const l=s.filter((u,c)=>o[c]);return a.concat(l)}return[]}makeTensor(t,e,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let i=t;s==="string"&&Ni(t[0])&&(i=t.map(l=>tc(l)));const o=r.write(i,e,s),a=new lt(e,s,o,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(o),u=op(i);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,e,s,r){s=s||"float32";const i={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:r,dtype:i}=t,o=new lt(r,i,s,this.nextTensorId());return this.trackTensor(o,e),o}makeVariable(t,e=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const i=new pr(t,e,s,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*vl(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof pr||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*vl(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,r,i,o){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:i},l=Ju(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=u=>(u=u.map((c,h)=>{if(c==null){const d=s[h],f=_i(d.size,d.dtype);return this.makeTensor(f,d.shape,d.dtype)}return c}),r(u.length>1?u:u[0],i,o))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Ve(t),s=new Set(e.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const o=this.state.activeScope.track[i];!o.kept&&!s.has(o.id)&&o.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(i=>{!i.kept&&i.scopeId===r.id&&this.track(i)})}gradients(t,e,s,r=!1){if(g(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));g(i instanceof lt,()=>"The result y returned by f() must be a tensor.");const o=jm(this.state.activeTape,e,i);if(!r&&o.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[i.id]=s??sg(i.shape),qm(a,o,u=>this.tidy(u),rg);const l=e.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:i,grads:l}})}customGrad(t){return g(Ci(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{g(e.every(a=>a instanceof lt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};e.forEach((a,l)=>{r[l]=a});const i=(a,l)=>(s=t(...e,l),g(s.value instanceof lt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),g(Ci(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),o=(a,l)=>{const u=s.gradFunc(a,l),c=Array.isArray(u)?u:[u];g(c.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),g(c.every(d=>d instanceof lt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return c.forEach((d,f)=>{h[f]=()=>d}),h};return this.runKernelFunc({forwardFunc:i,backwardsFunc:o,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Qt(),s=await this.backend.time(t);return s.wallMs=Qt()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new lc;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Wn.nextTensorId=0,Wn.nextVariableId=0;function sg(n){const t=xl(Lt(n),"float32");return I.makeTensor(t,n,"float32")}function uc(){const n=Nl();if(n._tfengine==null){const t=new lp(n);n._tfengine=new Wn(t)}return dp(n._tfengine.ENV),Zm(()=>n._tfengine),n._tfengine}const I=uc();function rg(n,t){const e={a:n,b:t};return I.runKernel(Li,e)}/**
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
 */function ig(){return typeof navigator<"u"&&navigator!=null}let Xi;function qA(n){Xi=n}function KA(n){if(Xi!==void 0)return Xi;if(n||ig()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function og(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Qi=Tt(39907);/**
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
 */const Kt=q();Kt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Kt.registerFlag("IS_BROWSER",()=>og()),Kt.registerFlag("IS_NODE",()=>typeof Qi<"u"&&typeof Qi.versions<"u"&&typeof Qi.versions.node<"u"),Kt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Kt.registerFlag("PROD",()=>!1),Kt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Kt.getBool("DEBUG")),Kt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),Kt.registerFlag("IS_TEST",()=>!1),Kt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),Kt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),Kt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),Kt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),Kt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function Gn(n,t){let e=n;if(de(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||de(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&cc(n,s,[]),s}function cc(n,t,e){if(e=e||[],!Array.isArray(n)&&!de(n)){g(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}g(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),g(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let r=0;r<n.length;++r)cc(n[r],s,e.concat(r))}function hc(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function y(n,t,e,s="numeric"){if(n instanceof lt)return hc(s,n.dtype,t,e),n;let r=Di(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),hc(s,r,t,e),n==null||!de(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const i=Gn(n,r);!de(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?Vi(n,r):ar(n,[],!0);return I.makeTensor(a,i,r)}function dc(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((i,o)=>y(i,`${t}[${o}]`,e,s))}/**
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
 */const ag="__op";function A(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+ag;const r=(...i)=>{I.startScope(e);try{const o=s(...i);return Mi(o)&&console.error("Cannot return a Promise inside of tidy."),I.endScope(o),o}catch(o){throw I.endScope(null),o}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}/**
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
 */function lg(n,t){const e=y(n,"real","complex"),s=y(t,"imag","complex");Ae(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:e,imag:s};return I.runKernel(Cp,r)}const mn=A({complex_:lg});/**
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
 */function Vn(n,t,e,s){if(s==null&&(s=Di(n)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!de(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Sl(t);const r=Lt(t),i=Lt(e);g(r===i,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${i}`);for(let o=0;o<e.length;++o){const a=e[o],l=o===e.length-1?a!==Lt(t.slice(o)):!0;g(e[o]===t[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!de(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?Vi(n,s):ar(n,[],!0),I.makeTensor(n,t,s)}/**
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
 */function gn(n,t,e){const s=Gn(n,e);return Vn(n,t,s,e)}/**
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
 */const to={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var mr=Tt(1048).Buffer;/**
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
 */const gr=4;async function fc(n,t){const e=[],s=[],r=Array.isArray(n)?n.map(o=>o.name):Object.keys(n);for(let o=0;o<r.length;++o){const a=r[o],l=Array.isArray(n)?n[o].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const c=new Promise(async h=>{const d=await l.bytes(),f=d.reduce((b,w)=>b+w.length,0)+gr*d.length,p=new Uint8Array(f);let m=0;for(let b=0;b<d.length;b++){const w=d[b],S=new Uint8Array(new Uint32Array([w.length]).buffer);p.set(S,m),m+=gr,p.set(w,m),m+=w.length}h(p)});s.push(c)}else s.push(l.data());t!=null&&(u.group=t),e.push(u)}const i=await Promise.all(s);return{data:ug(i),specs:e}}function pc(n,t){const e={};let s,r=0;for(const i of t){const o=i.name,a=i.dtype,l=i.shape,u=Lt(l);let c;if("quantization"in i){const h=i.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${i.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${i.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${i.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=to[h.dtype],f=n.slice(r,r+u*d),p=h.dtype==="uint8"?new Uint8Array(f):new Uint16Array(f);if(a==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){c=new Float32Array(p.length);for(let m=0;m<p.length;m++){const b=p[m];c[m]=b*h.scale+h.min}}else if(h.dtype==="float16")s===void 0&&(s=bg()),c=s(p);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(a==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);c=new Int32Array(p.length);for(let m=0;m<p.length;m++){const b=p[m];c[m]=Math.round(b*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);r+=u*d}else if(a==="string"){const h=Lt(i.shape);c=[];for(let d=0;d<h;d++){const f=new Uint32Array(n.slice(r,r+gr))[0];r+=gr;const p=new Uint8Array(n.slice(r,r+f));c.push(p),r+=f}}else{const h=to[a],d=n.slice(r,r+u*h);if(a==="float32")c=new Float32Array(d);else if(a==="int32")c=new Int32Array(d);else if(a==="bool")c=new Uint8Array(d);else if(a==="complex64"){c=new Float32Array(d);const f=new Float32Array(c.length/2),p=new Float32Array(c.length/2);for(let w=0;w<f.length;w++)f[w]=c[w*2],p[w]=c[w*2+1];const m=gn(f,l,"float32"),b=gn(p,l,"float32");e[o]=mn(m,b),m.dispose(),b.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${a}`);r+=u*h}a!=="complex64"&&(e[o]=gn(c,l,a))}return e}function ug(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(i=>{if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const s=new Uint8Array(t);let r=0;return e.forEach(i=>{s.set(new Uint8Array(i.buffer),r),r+=i.byteLength}),s.buffer}const eo=typeof mr<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function mc(n){return eo?mr.byteLength(n):new Blob([n]).size}function cg(n){if(eo)return mr.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,r=t.length;s<r;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function hg(n){if(eo){const s=mr.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function no(n){if(n.length===1)return n[0];let t=0;n.forEach(r=>{t+=r.byteLength});const e=new Uint8Array(t);let s=0;return n.forEach(r=>{e.set(new Uint8Array(r),s),s+=r.byteLength}),e.buffer}function gc(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);const e=n.split("/");return e[e.length-1]}function bc(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function dg(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),s}async function yc(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),dg(n,e,s)}function br(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:mc(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:mc(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function fg(n){const t=[];for(const e of n)t.push(...e.weights);return t}function pg(){const n=e=>{let s=e<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function mg(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function gg(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function bg(){const n=pg(),t=mg(),e=gg();return s=>{const r=new ArrayBuffer(4*s.length),i=new Uint32Array(r);for(let o=0;o<s.length;o++){const a=s[o],l=n[e[a>>10]+(a&1023)]+t[a>>10];i[o]=l}return new Float32Array(r)}}/**
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
 */class gt{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return gt.instance==null&&(gt.instance=new gt),gt.instance}static registerSaveRouter(t){gt.getInstance().saveRouters.push(t)}static registerLoadRouter(t){gt.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return gt.getHandlers(t,"save")}static getLoadHandlers(t,e){return gt.getHandlers(t,"load",e)}static getHandlers(t,e,s){const r=[];return(e==="load"?gt.getInstance().loadRouters:gt.getInstance().saveRouters).forEach(o=>{const a=o(t,s);a!==null&&r.push(a)}),r}}const JA=n=>gt.registerSaveRouter(n),YA=n=>gt.registerLoadRouter(n),yg=n=>gt.getSaveHandlers(n),wg=(n,t)=>gt.getLoadHandlers(n,t);/**
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
 */const yr="tensorflowjs",so=1,bn="models_store",He="model_info_store";async function ZA(){const n=ro();return new Promise((t,e)=>{const s=n.deleteDatabase(yr);s.onsuccess=()=>t(),s.onerror=r=>e(r)})}function ro(){if(!q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function io(n){const t=n.result;t.createObjectStore(bn,{keyPath:"modelPath"}),t.createObjectStore(He,{keyPath:"modelPath"})}class yn{constructor(t){if(this.indexedDB=ro(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,r)=>{const i=this.indexedDB.open(yr,so);i.onupgradeneeded=()=>io(i),i.onsuccess=()=>{const o=i.result;if(e==null){const a=o.transaction(bn,"readonly"),u=a.objectStore(bn).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(u.result.modelArtifacts)},u.onerror=c=>(o.close(),r(u.error)),a.oncomplete=()=>o.close()}else{const a=br(e),l=o.transaction(He,"readwrite");let u=l.objectStore(He);const c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a});let h;c.onsuccess=()=>{h=o.transaction(bn,"readwrite");const f=h.objectStore(bn).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a});f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{u=l.objectStore(He);const m=u.delete(this.modelPath);m.onsuccess=()=>(o.close(),r(f.error)),m.onerror=b=>(o.close(),r(f.error))}},c.onerror=d=>(o.close(),r(c.error)),l.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},i.onerror=o=>r(i.error)})}}yn.URL_SCHEME="indexeddb://";const wc=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(yn.URL_SCHEME)?vg(n.slice(yn.URL_SCHEME.length)):null;gt.registerSaveRouter(wc),gt.registerLoadRouter(wc);function vg(n){return new yn(n)}function kg(n){return n.startsWith(yn.URL_SCHEME)?n.slice(yn.URL_SCHEME.length):n}class xg{constructor(){this.indexedDB=ro()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(yr,so);s.onupgradeneeded=()=>io(s),s.onsuccess=()=>{const r=s.result,i=r.transaction(He,"readonly"),a=i.objectStore(He).getAll();a.onsuccess=()=>{const l={};for(const u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),i.oncomplete=()=>r.close()},s.onerror=r=>e(s.error)})}async removeModel(t){return t=kg(t),new Promise((e,s)=>{const r=this.indexedDB.open(yr,so);r.onupgradeneeded=()=>io(r),r.onsuccess=()=>{const i=r.result,o=i.transaction(He,"readwrite"),a=o.objectStore(He),l=a.get(t);let u;l.onsuccess=()=>{if(l.result==null)return i.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const c=a.delete(t),h=()=>{u=i.transaction(bn,"readwrite");const f=u.objectStore(bn).delete(t);f.onsuccess=()=>e(l.result.modelArtifactsInfo),f.onerror=p=>s(l.error)};c.onsuccess=h,c.onerror=d=>(h(),i.close(),s(l.error))}},l.onerror=c=>(i.close(),s(l.error)),o.oncomplete=()=>{u==null?i.close():u.oncomplete=()=>i.close()}},r.onerror=i=>s(r.error)})}}var Sg;/**
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
 */const Ne="/",wn="tensorflowjs_models",vc="info",Eg="model_topology",Ig="weight_specs",Ag="weight_data",Ng="model_metadata";function XA(){if(!Sg().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");const n=window.localStorage,t=[];for(let e=0;e<n.length;++e){const s=n.key(e),r=wn+Ne;if(s.startsWith(r)&&s.length>r.length){n.removeItem(s);const i=Sc(s);t.indexOf(i)===-1&&t.push(i)}}return t}function kc(n){return{info:[wn,n,vc].join(Ne),topology:[wn,n,Eg].join(Ne),weightSpecs:[wn,n,Ig].join(Ne),weightData:[wn,n,Ag].join(Ne),modelMetadata:[wn,n,Ng].join(Ne)}}function xc(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function Sc(n){const t=n.split(Ne);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Ne)}function Tg(n){return n.startsWith(vn.URL_SCHEME)?n.slice(vn.URL_SCHEME.length):n}class vn{constructor(t){if(!q().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=kc(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=br(t);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,cg(t.weightData));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw xc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const a=JSON.parse(i);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=hg(o),e}}vn.URL_SCHEME="localstorage://";const Ec=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(vn.URL_SCHEME)?Dg(n.slice(vn.URL_SCHEME.length)):null;gt.registerSaveRouter(Ec),gt.registerLoadRouter(Ec);function Dg(n){return new vn(n)}class Cg{constructor(){g(q().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),g(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=wn+Ne,s=Ne+vc;for(let r=0;r<this.LS.length;++r){const i=this.LS.key(r);if(i.startsWith(e)&&i.endsWith(s)){const o=Sc(i);t[o]=JSON.parse(this.LS.getItem(i))}}return t}async removeModel(t){t=Tg(t);const e=kc(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return xc(e),s}}/**
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
 */const Hn="://";class Ot{constructor(){this.managers={}}static getInstance(){return Ot.instance==null&&(Ot.instance=new Ot),Ot.instance}static registerManager(t,e){g(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Hn)&&(t=t.slice(0,t.indexOf(Hn))),g(t.length>0,()=>"scheme must not be an empty string.");const s=Ot.getInstance();g(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Ot.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Ot.getInstance().managers)}}function wr(n){if(n.indexOf(Hn)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Ot.getSchemes().join(",")}`);return{scheme:n.split(Hn)[0],path:n.split(Hn)[1]}}async function Ic(n,t,e=!1){g(n!==t,()=>`Old path and new path are the same: '${n}'`);const s=gt.getLoadHandlers(n);g(s.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),g(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${n}.`);const r=s[0],i=gt.getSaveHandlers(t);g(i.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),g(i.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const o=i[0],a=wr(n).scheme,l=wr(n).path,u=a===wr(n).scheme,c=await r.load();e&&u&&await Ot.getManager(a).removeModel(l);const h=await o.save(c);return e&&!u&&await Ot.getManager(a).removeModel(l),h.modelArtifactsInfo}async function $g(){const n=Ot.getSchemes(),t={};for(const e of n){const s=await Ot.getManager(e).listModels();for(const r in s){const i=e+Hn+r;t[i]=s[r]}}return t}async function _g(n){const t=wr(n);return Ot.getManager(t.scheme).removeModel(t.path)}async function QA(n,t){return Ic(n,t,!1)}async function tN(n,t){return Ic(n,t,!0)}/**
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
 */class Mg{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(!window||!q().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(q().get("IS_BROWSER")){q().setPlatform("browser",new Mg);try{Ot.registerManager(vn.URL_SCHEME,new Cg)}catch{}try{Ot.registerManager(yn.URL_SCHEME,new xg)}catch{}}var zg=Tt(39907);/**
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
 */const Fg={importFetch:()=>Tt(78330)};let jn;function eN(){jn=null}function nN(n){jn=n}function sN(){return jn}class Lg{constructor(){this.util=Tt(38277),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return q().global.fetch!=null?q().global.fetch(t,e):(jn==null&&(jn=Fg.importFetch()),jn(t,e))}now(){const t=zg.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}q().get("IS_NODE")&&!q().get("IS_BROWSER")&&q().setPlatform("node",new Lg);/**
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
 */function Es(n,t="float32",e){return t=t||"float32",Sl(n),new Ym(n,t,e)}/**
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
 */function Rg(n,t){const e=y(n,"x","cast");if(!ip(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},r={dtype:t};return I.runKernel(Ri,s,r)}const R=A({cast_:Rg});/**
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
 */function Og(n){const e={x:y(n,"x","clone","string_or_numeric")};return I.runKernel(Oi,e)}const kn=A({clone_:Og});/**
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
 */function Bg(n,t=!1){console.log(n.toString(t))}/**
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
 */uc(),Xm({buffer:Es,cast:R,clone:kn,print:Bg});/**
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
 */const Pg="model",Ug=".json",Wg=".weights.bin";function Ac(n){return new Promise(t=>setTimeout(t)).then(n)}class xn{constructor(t){if(!q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(xn.URL_SCHEME)&&(t=t.slice(xn.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Pg),this.modelJsonFileName=t+Ug,this.weightDataFileName=t+Wg}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=bc(t,s),i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=i,await Ac(()=>o.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=e,await Ac(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:br(t)}}}}xn.URL_SCHEME="downloads://";class Gg{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{const s=new FileReader;s.onload=r=>{const i=JSON.parse(r.target.result),o=i.modelTopology;if(o==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(i.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const l=yc(i,u=>this.loadWeights(u));t(l)},s.onerror=r=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const e=[],s=[];for(const o of t)e.push(...o.weights),s.push(...o.paths);const r=this.checkManifestAndWeightFiles(t),i=s.map(o=>this.loadWeightsFile(o,r[o]));return Promise.all(i).then(o=>[e,no(o)])}loadWeightsFile(t,e){return new Promise((s,r)=>{const i=new FileReader;i.onload=o=>{const a=o.target.result;s(a)},i.onerror=o=>r(`Failed to weights data from file of path '${t}'.`),i.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){const e=[],s=this.weightsFiles.map(i=>gc(i.name)),r={};for(const i of t)i.paths.forEach(o=>{const a=gc(o);if(e.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(e.push(a),s.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);r[o]=this.weightsFiles[s.indexOf(a)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Vg=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(xn.URL_SCHEME)?Hg(n.slice(xn.URL_SCHEME.length)):null;gt.registerSaveRouter(Vg);function Hg(n="model"){return new xn(n)}function iN(n){return new Gg(n)}/**
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
 */function Nc(n,t,e,s){o(n),e=e??0,s=s??1,a(e,s);let r=0;const i=l=>(l.then(u=>{const c=e+ ++r/n.length*(s-e);return t(c),u}),l);function o(l){g(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){g(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),g(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),g(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(n.map(i))}/**
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
 */async function Tc(n,t){t==null&&(t={});const e=t.fetchFunc==null?q().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(s):await Nc(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await Nc(a,t.onProgress,.5,1)}async function oN(n,t="",e,s){return jg(o=>Tc(o,{requestInit:s}))(n,t,e)}function jg(n){return async(t,e="",s)=>{const r=t.map(()=>!1),i={},o=s!=null?s.map(()=>!1):[],a=[];if(t.forEach((f,p)=>{let m=0;f.weights.forEach(b=>{const w="quantization"in b?b.quantization.dtype:b.dtype,S=to[w]*Lt(b.shape),k=()=>{r[p]=!0,i[p]==null&&(i[p]=[]),i[p].push({manifestEntry:b,groupOffset:m,sizeBytes:S})};s!=null?s.forEach((E,D)=>{E===b.name&&(k(),o[D]=!0)}):k(),a.push(b.name),m+=S})}),!o.every(f=>f)){const f=s.filter((p,m)=>!o[m]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const l=r.reduce((f,p,m)=>(p&&f.push(m),f),[]),u=[];l.forEach(f=>{t[f].paths.forEach(p=>{const m=e+(e.endsWith("/")?"":"/")+p;u.push(m)})});const c=await n(u),h={};let d=0;return l.forEach(f=>{const p=t[f].paths.length;let m=0;for(let E=0;E<p;E++)m+=c[d+E].byteLength;const b=new ArrayBuffer(m),w=new Uint8Array(b);let S=0;for(let E=0;E<p;E++){const D=new Uint8Array(c[d+E]);w.set(D,S),S+=D.byteLength}i[f].forEach(E=>{const D=b.slice(E.groupOffset,E.groupOffset+E.sizeBytes),C=pc(D,[E.manifestEntry]);for(const z in C)h[z]=C[z]}),d+=p}),h}}/**
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
 */const qg="application/octet-stream",Kg="application/json";class oo{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(g(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=q().platform.fetch,g(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&g(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=bc(t,s);e.body.append("model.json",new Blob([JSON.stringify(r)],{type:Kg}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:qg}),"model.weights.bin");const i=await this.fetch(this.path,e);if(i.ok)return{modelArtifactsInfo:br(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const s=e.modelTopology,r=e.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return yc(e,i=>this.loadWeights(i))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=Jg(e),i=this.weightPathPrefix||s,o=fg(t),a=[],l=[];for(const c of t)for(const h of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(h)):a.push(i+h+r);this.weightUrlConverter&&a.push(...await Promise.all(l));const u=await Tc(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,no(u)]}}oo.URL_SCHEME_REGEX=/^https?:\/\//;function Jg(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),r=e>t?n.substring(e):"";return[s+"/",r]}function Dc(n){return n.match(oo.URL_SCHEME_REGEX)!=null}const Cc=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>Dc(s)):e=Dc(n),e)return $c(n,t)}return null};gt.registerSaveRouter(Cc),gt.registerLoadRouter(Cc);function $c(n,t){return new oo(n,t)}function Yg(n,t){return $c(n,t)}/**
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
 */class ao{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class _c{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Zg{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function Xg(n,t,e,s){const r=arguments;return new Zg(Qg(...r))}function Qg(n,t,e,s){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new ao(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ao({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ao({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:s}))}function aN(n){return new _c(n)}function lN(n){return new _c(n)}/**
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
 */function vr(n,t,e){if(or(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=Gn(n,e);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Vn(n,t,s,e)}/**
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
 */let Sn;function Mc(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,s=!1,r=!1,i=!1,o=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else if(n.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(Pi(Vu,I.backendName)!=null){const p={pixels:n},m={numChannels:t};return I.runKernel(Vu,p,m)}const[u,c]=r?[n.videoWidth,n.videoHeight]:[n.width,n.height];let h;if(o)h=n.getContext("2d").getImageData(0,0,u,c).data;else if(s||e)h=n.data;else if(i||r||a){if(Sn==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Sn=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Sn=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Sn.canvas.width=u,Sn.canvas.height=c,Sn.drawImage(n,0,0,u,c),h=Sn.getImageData(0,0,u,c).data}let d;if(t===4)d=new Int32Array(h);else{const p=u*c;d=new Int32Array(p*t);for(let m=0;m<p;m++)for(let b=0;b<t;++b)d[m*t+b]=h[m*4+b]}return vr(d,[c,u,t],"int32")}function tb(n){return n!=null&&n.data instanceof Uint8Array}function eb(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function nb(n){return n!=null&&n.width!==0&&n.height!==0}function sb(n){return eb()&&!(n instanceof ImageBitmap)&&nb(n)&&!tb(n)}async function uN(n,t=3){let e=null;if(q().getBool("WRAP_TO_IMAGEBITMAP")&&sb(n)){let s;try{s=await createImageBitmap(n,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===n.width&&s.height===n.height?e=s:e=n}else e=n;return Mc(e,t)}async function cN(n,t){let e=y(n,"img","toPixels");if(!(n instanceof lt)){const u=e;e=R(u,"int32"),u.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[s,r]=e.shape.slice(0,2),i=e.rank===2?1:e.shape[2];if(i>4||i===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${i}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const o=await e.data(),a=e.dtype==="float32"?255:1,l=new Uint8ClampedArray(r*s*4);for(let u=0;u<s*r;++u){const c=[0,0,0,255];for(let d=0;d<i;d++){const f=o[u*i+d];if(e.dtype==="float32"){if(f<0||f>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${f}.`)}else if(e.dtype==="int32"&&(f<0||f>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${f}.`);i===1?(c[0]=f*a,c[1]=f*a,c[2]=f*a):c[d]=f*a}const h=u*4;l[h+0]=Math.round(c[0]),l[h+1]=Math.round(c[1]),l[h+2]=Math.round(c[2]),l[h+3]=Math.round(c[3])}if(t!=null){t.width=r,t.height=s;const u=t.getContext("2d"),c=new ImageData(l,r,s);u.putImageData(c,0,0)}return e!==n&&e.dispose(),l}const rb=A({fromPixels_:Mc});/**
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
 */class qn{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class te{constructor(){this.classNameMap={}}static getMap(){return te.instance==null&&(te.instance=new te),te.instance}static register(t){te.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function $(n){g(n.className!=null,()=>"Class being registered does not have the static className property defined."),g(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),g(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),te.register(n)}var pe,kr;/**
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
 */function hN(){kr().set("PROD",!0)}function dN(){kr().set("DEBUG",!0)}function fN(){kr().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function ib(n){q().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}Qm(ib);function pN(){pe.disposeVariables()}function mN(){return pe}function lo(){return I.memory()}function gN(n){return pe.profile(n)}function N(n,t){return I.tidy(n,t)}function G(n){Ve(n).forEach(e=>e.dispose())}function Te(n){return I.keep(n)}function bN(n){return pe.time(n)}function yN(n){return pe.setBackend(n)}function wN(){return pe.ready()}function vN(){return pe.backendName}function kN(n){pe.removeBackend(n)}function xN(n){return pe.findBackend(n)}function SN(n){return pe.findBackendFactory(n)}function EN(n,t,e=1){return pe.registerBackend(n,t,e)}function uo(){return I.backend}function IN(n,t){kr().setPlatform(n,t)}var Kn,xr,co,ob,Bt;/**
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
 */function AN(n){return Bt.assert(Bt.isFunction(n),()=>"The f passed in grad(f) must be a function"),(t,e)=>{const s=co(t,"x","tf.grad","string_or_numeric"),r=e!=null?co(e,"dy","tf.grad"):null;return Kn.tidy(()=>{const{value:i,grads:o}=Kn.gradients(()=>n(s),[s],r);return r!=null&&Bt.assertShapesMatch(i.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Sr(o),o[0]})}}function NN(n){return Bt.assert(Bt.isFunction(n),()=>"The f passed in grads(f) must be a function"),(t,e)=>{Bt.assert(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=ob(t,"args","tf.grads","string_or_numeric"),r=e!=null?co(e,"dy","tf.grads"):null;return Kn.tidy(()=>{const{value:i,grads:o}=Kn.gradients(()=>n(...s),s,r);return r!=null&&Bt.assertShapesMatch(i.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sr(o),o})}}function TN(n){return Bt.assert(Bt.isFunction(n),()=>"The f passed in valueAndGrad(f) must be a function"),(t,e)=>{Bt.assert(t instanceof xr,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),Bt.assert(e==null||e instanceof xr,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=Kn.gradients(()=>n(t),[t],e);return Sr(s),{grad:s[0],value:r}}}function DN(n){return Bt.assert(Bt.isFunction(n),()=>"The f passed in valueAndGrads(f) must be a function"),(t,e)=>{Bt.assert(Array.isArray(t)&&t.every(r=>r instanceof xr),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),Bt.assert(e==null||e instanceof xr,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=Kn.gradients(()=>n(...t),t,e);return e!=null&&Bt.assertShapesMatch(s.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sr(s.grads),s}}function ab(n,t){g(Ci(n),()=>"The f passed in variableGrads(f) must be a function"),g(t==null||Array.isArray(t)&&t.every(u=>u instanceof pr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const u in I.registeredVariables)t.push(I.registeredVariables[u])}const s=e?t.filter(u=>!u.trainable):null,r=t.length;t=t.filter(u=>u.trainable),g(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const i=!0,{value:o,grads:a}=I.gradients(n,t,null,i);g(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),g(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return t.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),s?.forEach(u=>l[u.name]=null),{value:o,grads:l}}function je(n){return I.customGrad(n)}function Sr(n){if(n.filter(e=>e==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
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
 */function V(n,t){if((de(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&de(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Vn(n,[],[],t)}/**
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
 */class qe extends qn{minimize(t,e=!1,s){const{value:r,grads:i}=this.computeGradients(t,s);if(s!=null){const o=s.map(a=>({name:a.name,tensor:i[a.name]}));this.applyGradients(o)}else this.applyGradients(i);return G(i),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return ab(t,e)}dispose(){this.iterations_!=null&&G(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:V(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(qe,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
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
 */function lb(n){const t=y(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return I.runKernel(Fl,e)}else{const e={x:t};return I.runKernel(Tl,e)}}const Ft=A({abs_:lb});/**
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
 */function ub(n,t){let e=y(n,"a","add"),s=y(t,"b","add");[e,s]=xt(e,s);const r={a:e,b:s};return I.runKernel(Li,r)}const M=A({add_:ub});/**
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
 */function cb(n,t=null,e=!1){const r={x:y(n,"x","all","bool")},i={axis:t,keepDims:e};return I.runKernel(bp,r,i)}const hb=A({all_:cb});/**
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
 */function db(n,t=null,e=!1){const r={x:y(n,"x","any","bool")},i={axis:t,keepDims:e};return I.runKernel(yp,r,i)}const zc=A({any_:db});/**
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
 */function fb(n,t=0){const s={x:y(n,"x","argMax")},r={axis:t};return I.runKernel(Dl,s,r)}const Jn=A({argMax_:fb});/**
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
 */function CN(n,t,e,s,r="NHWC",i){const o=n[3],a=[...t,o],l=wb(r);return Er(n,a,e,i,s,null,null,l)}function $N(n,t,e,s,r,i,o="channelsLast"){const[a,l]=Ir(t);let u;if(o==="channelsLast")u=[a,l,n[3],n[3]];else if(o==="channelsFirst")u=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return Er(n,u,e,s,r,i,!1,o)}function _N(n,t,e,s,r,i,o="NDHWC"){const[a,l,u]=ho(t);let c,h;if(o==="NDHWC")h="channelsLast",c=[a,l,u,n[4],n[4]];else if(o==="NCDHW")h="channelsFirst",c=[a,l,u,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return pb(n,c,e,s,r,!1,h,i)}function Er(n,t,e,s,r,i,o=!1,a="channelsLast"){let[l,u,c,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,h]=n;else if(a==="channelsFirst")[l,h,u,c]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,f,,p]=t,[m,b]=Ir(e),[w,S]=Ir(s),k=Yn(d,w),E=Yn(f,S),{padInfo:D,outHeight:C,outWidth:z}=bb(r,u,c,m,b,k,E,i,a),F=o?p*h:p;let _;return a==="channelsFirst"?_=[l,F,C,z]:a==="channelsLast"&&(_=[l,C,z,F]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:h,outHeight:C,outWidth:z,outChannels:F,padInfo:D,strideHeight:m,strideWidth:b,filterHeight:d,filterWidth:f,effectiveFilterHeight:k,effectiveFilterWidth:E,dilationHeight:w,dilationWidth:S,inShape:n,outShape:_,filterShape:t}}function pb(n,t,e,s,r,i=!1,o="channelsLast",a){let[l,u,c,h,d]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[l,u,c,h,d]=n;else if(o==="channelsFirst")[l,d,u,c,h]=n;else throw new Error(`Unknown dataFormat ${o}`);const[f,p,m,,b]=t,[w,S,k]=ho(e),[E,D,C]=ho(s),z=Yn(f,E),F=Yn(p,D),_=Yn(m,C),{padInfo:L,outDepth:P,outHeight:W,outWidth:K}=yb(r,u,c,h,w,S,k,z,F,_,a),tt=i?b*d:b;let X;return o==="channelsFirst"?X=[l,tt,P,W,K]:o==="channelsLast"&&(X=[l,P,W,K,tt]),{batchSize:l,dataFormat:o,inDepth:u,inHeight:c,inWidth:h,inChannels:d,outDepth:P,outHeight:W,outWidth:K,outChannels:tt,padInfo:L,strideDepth:w,strideHeight:S,strideWidth:k,filterDepth:f,filterHeight:p,filterWidth:m,effectiveFilterDepth:z,effectiveFilterHeight:F,effectiveFilterWidth:_,dilationDepth:E,dilationHeight:D,dilationWidth:C,inShape:n,outShape:X,filterShape:t}}function mb(n,t,e,s,r){s==null&&(s=Fc(n,t,e));const i=n[0],o=n[1],a=En((i-t+2*s)/e+1,r),l=En((o-t+2*s)/e+1,r);return[a,l]}function gb(n,t,e,s,r,i){r==null&&(r=Fc(n,t,s));const o=n[0],a=n[1],l=n[2],u=En((o-t+2*r)/s+1,i),c=En((a-t+2*r)/s+1,i),h=En((l-t+2*r)/s+1,i);return[u,c,h,e]}function Fc(n,t,e,s=1){const r=Yn(t,s);return Math.floor((n[0]*(e-1)-e+r)/2)}function Ir(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function ho(n){return typeof n=="number"?[n,n,n]:n}function Yn(n,t){return t<=1?n:n+(n-1)*(t-1)}function bb(n,t,e,s,r,i,o,a,l){let u,c,h;if(typeof n=="number"){u={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=mb([t,e],i,s,n,a);c=f[0],h=f[1]}else if(n==="same"){c=Math.ceil(t/s),h=Math.ceil(e/r);const d=Math.max(0,(c-1)*s+i-t),f=Math.max(0,(h-1)*r+o-e),p=Math.floor(d/2),m=d-p,b=Math.floor(f/2),w=f-b;u={top:p,bottom:m,left:b,right:w,type:"SAME"}}else if(n==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-i+1)/s),h=Math.ceil((e-o+1)/r);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],f=l==="channelsLast"?n[1][1]:n[2][1],p=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];u={top:d,bottom:f,left:p,right:m,type:d===0&&f===0&&p===0&&m===0?"VALID":"EXPLICIT"},c=En((t-i+d+f)/s+1,a),h=En((e-o+p+m)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:u,outHeight:c,outWidth:h}}function yb(n,t,e,s,r,i,o,a,l,u,c){let h,d,f,p;if(typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const b=gb([t,e,s,1],a,1,r,n,c);d=b[0],f=b[1],p=b[2]}else if(n==="same"){d=Math.ceil(t/r),f=Math.ceil(e/i),p=Math.ceil(s/o);const m=(d-1)*r+a-t,b=(f-1)*i+l-e,w=(p-1)*o+u-s,S=Math.floor(m/2),k=m-S,E=Math.floor(b/2),D=b-E,C=Math.floor(w/2),z=w-C;h={top:E,bottom:D,left:C,right:z,front:S,back:k,type:"SAME"}}else if(n==="valid")h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((t-a+1)/r),f=Math.ceil((e-l+1)/i),p=Math.ceil((s-u+1)/o);else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:f,outWidth:p}}function En(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function In(n){const[t,e,s]=Ir(n);return t===1&&e===1&&s===1}function Ke(n,t){return In(n)||In(t)}function wb(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Gt(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")g(lr(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{g(lr(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
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
 */function vb(n,t){const s={x:y(n,"x","reshape","string_or_numeric")},r={shape:t};return I.runKernel(yu,s,r)}const T=A({reshape_:vb});/**
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
 */function kb(n,t,e,s,r){const i=y(n,"x","avgPool","float32"),o=1;g(Ke(e,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`);let a=i,l=!1;i.rank===3&&(l=!0,a=T(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Gt("avgPool",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r};let h=I.runKernel(Cl,u,c);return h=R(h,i.dtype),l?T(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const xb=A({avgPool_:kb});/**
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
 */function Sb(n,t,e,s,r,i="NDHWC"){const o=y(n,"x","avgPool3d","float32");let a=o,l=!1;o.rank===4&&(l=!0,a=T(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),g(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Gt("avgPool3d",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:i};let h=I.runKernel($l,u,c);return h=R(h,a.dtype),l?T(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Eb=A({avgPool3d_:Sb});function Ib(n){let t;return n.rank===0||n.rank===1?t=T(n,[1,1,1,n.size]):n.rank===2?t=T(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=T(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
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
 */function Ab(n,t,e,s,r,i){i==null&&(i=.001);const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;s!=null&&(c=y(s,"offset","batchNorm")),g(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Ib(o),scale:u,offset:c,mean:a,variance:l},f={varianceEpsilon:i},p=I.runKernel(Yl,d,f);return T(p,o.shape)}const fo=A({batchNorm_:Ab});function Nb(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),g(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),g(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),fo(o,a,l,c,u,i)}const Tb=A({batchNorm2d_:Nb});function Db(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),g(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),g(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),fo(o,a,l,c,u,i)}const Cb=A({batchNorm3d_:Db});function $b(n,t,e,s,r,i){const o=y(n,"x","batchNorm"),a=y(t,"mean","batchNorm"),l=y(e,"variance","batchNorm");let u;r!=null&&(u=y(r,"scale","batchNorm"));let c;return s!=null&&(c=y(s,"offset","batchNorm")),g(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),g(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),g(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&g(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),fo(o,a,l,c,u,i)}const _b=A({batchNorm4d_:$b});/**
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
 */function Is(n,t,e){const s={shape:n,value:t,dtype:e};return I.runKernel(jp,{},s)}/**
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
 */function Mb(n,t,e){const s=y(n,"x","clipByValue");if(g(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Is(s.shape,t,s.dtype);const r={x:s},i={clipValueMin:t,clipValueMax:e};return I.runKernel(zl,r,i)}const ee=A({clipByValue_:Mb});/**
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
 */function zb(n,t=0){g(n.length>=1,()=>"Pass at least one tensor to concat");const e=dc(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),e.length===1)return kn(e[0]);const s=e,r={axis:t};return I.runKernel(Ll,s,r)}const Pt=A({concat_:zb});function Fb(n){return Pt(n,0)}const Lb=A({concat1d_:Fb});function Rb(n,t){return Pt(n,t)}const Ob=A({concat2d_:Rb});function Bb(n,t){return Pt(n,t)}const Pb=A({concat3d_:Bb});function Ub(n,t){return Pt(n,t)}const Wb=A({concat4d_:Ub});/**
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
 */function Gb(n,t,e,s,r="NHWC",i=[1,1],o){const a=y(n,"x","conv2d","float32"),l=y(t,"filter","conv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=T(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),g(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Gt("conv2d",s,o);const h=r==="NHWC"?u.shape[3]:u.shape[1];g(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),g(Ke(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const d={x:u,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o},p=I.runKernel(Rl,d,f);return c?T(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Zn=A({conv2d_:Gb});function Vb(n,t,e,s,r="NWC",i=1,o){const a=y(n,"x","conv1d"),l=y(t,"filter","conv1d");let u=a,c=!1;a.rank===2&&(c=!0,u=T(a,[1,a.shape[0],a.shape[1]])),g(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),g(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Gt("conv1d",s,o),g(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),g(Ke(e,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${i}'`),g(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=T(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=T(u,[u.shape[0],1,u.shape[1],u.shape[2]]),b=Zn(d,h,[1,e],s,"NHWC",[1,i],o);return c?T(b,[b.shape[2],b.shape[3]]):T(b,[b.shape[0],b.shape[2],b.shape[3]])}const Hb=A({conv1d_:Vb});/**
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
 */function jb(n,t,e,s,r,i="NHWC",o){g(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,u=!1;t.rank===3&&(u=!0,l=T(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),g(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),g(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),g(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const c=i==="NHWC"?a[3]:a[1],h=i==="NHWC"?l.shape[3]:l.shape[1];g(c===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[2]}.`),g(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),Gt("conv2dDerInput",r,o);const d={dy:l,filter:e},f={strides:s,pad:r,dataFormat:i,dimRoundingMode:o,inputShape:a},p=I.runKernel(Ol,d,f);return u?T(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const po=A({conv2DBackpropInput_:jb});function qb(n,t,e,s,r,i){const o=y(n,"x","conv2dTranspose"),a=y(t,"filter","conv2dTranspose");return po(e,o,a,s,r,"NHWC",i)}const Kb=A({conv2dTranspose_:qb});/**
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
 */function Jb(n,t,e,s,r="NDHWC",i=[1,1,1]){const o=y(n,"x","conv3d"),a=y(t,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=T(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),g(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),g(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),g(Ke(e,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),g(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`);const c={x:l,filter:a},h={strides:e,pad:s,dataFormat:r,dilations:i},d=I.runKernel(Bl,c,h);return u?T(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Yb=A({conv3d_:Jb});/**
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
 */function Zb(n,t,e,s,r){g(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let i=n,o=t,a=!1;t.rank===4&&(a=!0,o=T(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,n[0],n[1],n[2],n[3]]);const l=i[4],u=o.shape[4];g(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),g(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),g(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),g(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),g(u===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${e.shape[4]}.`);const c={dy:o,filter:e},h={pad:r,strides:s,inputShape:i},d=I.runKernel(Mp,c,h);return a?T(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Lc=A({conv3DBackpropInput_:Zb});function Xb(n,t,e,s,r){const i=y(n,"x","conv3dTranspose"),o=y(t,"filter","conv3dTranspose");return Lc(e,i,o,s,r)}const Qb=A({conv3dTranspose_:Xb});/**
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
 */function ty(n,t,e,s,r="NHWC",i=[1,1],o){const a=y(n,"x","depthwiseConv2d","float32"),l=y(t,"filter","depthwiseConv2d","float32");let u=a,c=!1;a.rank===3&&(c=!0,u=T(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),g(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?u.shape[3]:u.shape[1];g(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),Gt("depthwiseConv2d",s,o);const d={x:u,filter:l},f={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o},p=I.runKernel(Gl,d,f);return c?T(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const mo=A({depthwiseConv2d_:ty});/**
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
 */function ey(n,t){let e=y(n,"a","floorDiv"),s=y(t,"b","floorDiv");[e,s]=xt(e,s);const r={a:e,b:s};return I.runKernel(Jl,r)}const ny=A({floorDiv_:ey});/**
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
 */function sy(n,t){let e=y(n,"a","div"),s=y(t,"b","div");if([e,s]=xt(e,s),e.dtype==="int32"&&s.dtype==="int32")return ny(e,s);const r={a:e,b:s},i={};return I.runKernel(Vl,r,i)}const U=A({div_:sy});/**
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
 */function ry(n){const e={x:y(n,"x","elu","float32")};return I.runKernel(Hl,e)}const go=A({elu_:ry});/**
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
 */function MN(n,t){const e=n.length,s=[];for(let r=0;r<e;r++){const i=e-1-r,o=n[i]||1;(t[t.length-1-r]||1)>1&&o===1&&s.unshift(i)}return s}function Ct(n,t){const e=[];for(let s=0;s<t.length;s++){const r=n[n.length-s-1],i=t.length-s-1,o=t[i];(r==null||r===1&&o>1)&&e.unshift(i)}return e}function ft(n,t){const e=[],s=Math.max(n.length,t.length);for(let r=0;r<s;r++){let i=n[n.length-r-1];i==null&&(i=1);let o=t[t.length-r-1];if(o==null&&(o=1),i===1)e.unshift(o);else if(o===1)e.unshift(i);else if(i!==o){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else e.unshift(i)}return e}/**
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
 */function iy(n,t){let e=y(n,"a","equal","string_or_numeric"),s=y(t,"b","equal","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(Gp,r)}const Je=A({equal_:iy});/**
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
 */function oy(n){const e={x:y(n,"x","exp")};return I.runKernel(jl,e)}const me=A({exp_:oy});/**
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
 */function ay(n,t=0){const e=y(n,"x","expandDims","string_or_numeric");g(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},r={dim:t};return I.runKernel(ql,s,r)}const ne=A({expandDims_:ay});/**
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
 */function ly(n,t){const e=y(n,"x","tile","string_or_numeric");g(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},r={reps:t};return I.runKernel(Bi,s,r)}const De=A({tile_:ly});/**
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
 */function uy(n,t,e,s="float32"){t==null&&(t=n);const r=Es([n,t],s),i=n<=t?n:t;for(let a=0;a<i;++a)r.set(1,a,a);const o=T(r.toTensor(),[n,t]);if(e==null)return o;if(e.length===1)return De(ne(o,0),[e[0],1,1]);if(e.length===2)return De(ne(ne(o,0),0),[e[0],e[1],1,1]);if(e.length===3)return De(ne(ne(ne(o,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Rc=A({eye_:uy});/**
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
 */function cy(n){const e={x:y(n,"x","floor","float32")};return I.runKernel(Kl,e)}const bo=A({floor_:cy});/**
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
 */function hy(n,t,e=0,s=0){const r=y(n,"x","gather"),i=y(t,"indices","gather","int32"),o={x:r,indices:i},a={axis:e,batchDims:s};return I.runKernel(Zl,o,a)}const Xn=A({gather_:hy});/**
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
 */function dy(n,t){let e=y(n,"a","greater","string_or_numeric"),s=y(t,"b","greater","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(Kp,r)}const ge=A({greater_:dy});/**
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
 */function fy(n,t){let e=y(n,"a","greaterEqual","string_or_numeric"),s=y(t,"b","greaterEqual","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(Xl,r)}const As=A({greaterEqual_:fy});/**
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
 */function py(n,t=.2){const s={x:y(n,"x","leakyRelu")},r={alpha:t};return I.runKernel(Ql,s,r)}const Oc=A({leakyRelu_:py});/**
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
 */function my(n){const e={x:y(n,"x","log","float32")};return I.runKernel(tu,e)}const be=A({log_:my});/**
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
 */function gy(n){const e={x:y(n,"x","log1p")};return I.runKernel(eu,e)}const Bc=A({log1p_:gy});/**
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
 */function by(n,t=null,e=!1){const r={x:y(n,"x","max")},i={reductionIndices:t,keepDims:e};return I.runKernel(nu,r,i)}const Ce=A({max_:by});/**
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
 */function yy(n,t){let e=y(n,"a","mul"),s=y(t,"b","mul");[e,s]=xt(e,s);const r={a:e,b:s};return I.runKernel(uu,r)}const v=A({mul_:yy});/**
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
 */function wy(n,t){let e=y(n,"a","sub"),s=y(t,"b","sub");[e,s]=xt(e,s);const r={a:e,b:s};return I.runKernel(Ou,r)}const O=A({sub_:wy});/**
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
 */function vy(n,t=null,e=!1){let s=y(n,"x","sum");s.dtype==="bool"&&(s=R(s,"int32"));const r={x:s},i={axis:t,keepDims:e};return I.runKernel(Mu,r,i)}const B=A({sum_:vy});/**
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
 */function ky(n,t=-1){const e=y(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return je((r,i)=>{const a=Ce(r,t,!0),l=O(r,a),u=O(R(l,"float32"),be(B(me(l),t,!0)));return i([u]),{value:u,gradFunc:(h,d)=>{const[f]=d,p=!0,m=me(f);return O(h,v(B(h,t,p),m))}}})(e)}const xy=A({logSoftmax_:ky});/**
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
 */function Sy(n,t){const e=y(n,"a","logicalAnd","bool"),s=y(t,"b","logicalAnd","bool");ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(nm,r)}const Qn=A({logicalAnd_:Sy});/**
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
 */function Ey(n,t,e=!1,s=!1){let r=y(n,"a","matMul"),i=y(t,"b","matMul");[r,i]=xt(r,i);const o={a:r,b:i},a={transposeA:e,transposeB:s};return I.runKernel(_l,o,a)}const ot=A({matMul_:Ey});/**
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
 */function Iy(n,t,e,s,r){const i=y(n,"x","maxPool"),o=1;let a=i,l=!1;i.rank===3&&(l=!0,a=T(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),g(Ke(e,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),Gt("maxPool",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r},h=I.runKernel(ru,u,c);return l?T(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Ay=A({maxPool_:Iy});/**
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
 */function Ny(n,t=[1,1,1],e,s,r,i="NDHWC"){const o=y(n,"x","maxPool3d");let a=o,l=!1;o.rank===4&&(l=!0,a=T(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),g(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Gt("maxPool3d",s,r);const u={x:a},c={filterSize:t,strides:e,pad:s,dimRoundingMode:r,dataFormat:i},h=I.runKernel(iu,u,c);return l?T(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Ty=A({maxPool3d_:Ny});/**
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
 */function Dy(n,t){let e=y(n,"a","maximum"),s=y(t,"b","maximum");[e,s]=xt(e,s),e.dtype==="bool"&&(e=R(e,"int32"),s=R(s,"int32")),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(su,r)}const An=A({maximum_:Dy});/**
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
 */function Cy(n,t=null,e=!1){const r={x:y(n,"x","mean")},i={axis:t,keepDims:e};return I.runKernel(ou,r,i)}const vt=A({mean_:Cy});/**
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
 */function $y(n,t){let e=y(n,"a","minimum"),s=y(t,"b","minimum");[e,s]=xt(e,s),e.dtype==="bool"&&(e=R(e,"int32"),s=R(s,"int32")),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(lu,r)}const yo=A({minimum_:$y});var _y;/**
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
 */function Pc(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function My(n,t,e){const s=n.length+t.length,r=[];let i=0,o=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?r.push(n[i++]):r.push(t[o++]);return r}function zy(n,t){const e=[],s=n.length;for(let i=0;i<s;i++)t.indexOf(i)===-1&&e.push(n[i]);const r=t.map(i=>n[i]);return[e,r]}function ts(n,t){const e=t.map(s=>1);return My(n,e,t)}function zN(n,t,e){_y.assert(Pc(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Uc(n,t){if(Pc(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function wo(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function FN(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}/**
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
 */function Fy(n){const t=y(n,"x","square"),e={};return I.runKernel("Square",{x:t},e)}const ut=A({square_:Fy});/**
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
 */function Ly(n,t=null,e=!1){n=y(n,"x","moments");const s=he(t,n.shape),r=vt(n,s,e);let i=r.shape;e||(i=ts(r.shape,s));const o=ut(O(R(n,"float32"),T(r,i))),a=vt(o,s,e);return{mean:r,variance:a}}const Ns=A({moments_:Ly});/**
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
 */function Ry(n){const e={x:y(n,"x","neg")};return I.runKernel(cu,e)}const St=A({neg_:Ry});/**
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
 */function Oy(n,t){let e=y(n,"a","notEqual","string_or_numeric"),s=y(t,"b","notEqual","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(hm,r)}const Ar=A({notEqual_:Oy});/**
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
 */function By(n,t,e=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:y(n,"indices","oneHot","int32")},a={dtype:r,depth:t,onValue:e,offValue:s};return I.runKernel(du,o,a)}const Nr=A({oneHot_:By});/**
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
 */function $t(n,t="float32"){if(t==="complex64"){const s=$t(n,"float32"),r=$t(n,"float32");return mn(s,r)}const e=_i(Lt(n),t);return I.makeTensor(e,n,t)}/**
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
 */function Ye(n,t="float32"){if(t==="complex64"){const s=Ye(n,"float32"),r=$t(n,"float32");return mn(s,r)}const e=xl(Lt(n),t);return I.makeTensor(e,n,t)}/**
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
 */function Py(n){const e={x:y(n,"x","onesLike")};return I.runKernel(hu,e)}const ye=A({onesLike_:Py});/**
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
 */function Uy(n,t,e=0){const s=y(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:e},i={x:s};return I.runKernel(pu,i,r)}const Wc=A({pad_:Uy});/**
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
 */function Wy(n,t){const e=y(n,"x","prelu"),s=y(t,"alpha","prelu"),r={x:e,alpha:s};return I.runKernel(gu,r)}const Gc=A({prelu_:Wy});var Tr=Tt(92464),Gy,Vy,Vc;/**
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
 */class vo{constructor(t,e,s,r,i){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=i||Math.random();this.random=Tr.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,e,s=!1;for(;!s;){let r,i,o;do r=2*this.random()-1,i=2*this.random()-1,o=r*r+i*i;while(o>=1||o===0);const a=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*r*a,e=this.mean+this.stdDev*i*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class LN{constructor(t,e,s,r){this.alpha=t,this.beta=1/e,this.dtype=s;const i=r||Math.random();this.randu=Gy.alea(i.toString()),this.randn=new vo(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,s,r,i,o;for(;;){do r=this.randn.nextValue(),o=1+this.c*r;while(o<=0);if(o*=o*o,t=r*r,e=1-.331*t*t,s=.5*t+this.d*(1-o+Math.log(o)),i=this.randu(),i<e||Math.log(i)<s)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Hy{constructor(t=0,e=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Tr.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function RN(n){const t=n.length,e=Ky(n),s=qy(n),r=t/6*(Math.pow(e,2)+.25*Math.pow(s-3,2));if(r>5.991)throw new Error(`Invalid p-value for JB: ${r}`)}function ON(n,t,e,s){s==null&&(s=Vy());const r=ko(n);Vc(r,t,s),Vc(jy(n,r),e,s)}function ko(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t/n.length}function jy(n,t){let e=0;for(let s=0;s<n.length;s++){const r=n[s]-t;e+=r*r}return Math.sqrt(e/n.length)}function qy(n){const t=ko(n),e=n.length;let s=0,r=0;for(let i=0;i<e;i++){const o=n[i]-t;s+=Math.pow(o,2),r+=Math.pow(o,4)}return 1/e*r/Math.pow(1/e*s,2)}function Ky(n){const t=ko(n),e=n.length;let s=0,r=0;for(let i=0;i<e;i++){const o=n[i]-t;s+=Math.pow(o,2),r+=Math.pow(o,3)}return 1/e*r/Math.pow(1/(e-1)*s,3/2)}/**
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
 */function Jy(n,t=0,e=1,s,r){if(s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const i=new vo(t,e,s,!1,r),o=Es(n,s);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Yy=A({randomNormal_:Jy});/**
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
 */function Zy(n,t=0,e=1,s="float32",r){const i=Es(n,s),o=new Hy(t,e,null,r);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Dr=A({randomUniform_:Zy});/**
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
 */function Xy(n){const e={x:y(n,"x","relu")};return I.runKernel(bu,e)}const Ze=A({relu_:Xy});/**
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
 */function Qy(n,t){const s={x:y(n,"x","reverse")},r={dims:t};return I.runKernel(xu,s,r)}const es=A({reverse_:Qy});/**
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
 */function tw(n){const e={x:y(n,"x","selu")};return I.runKernel(Au,e)}const ew=A({selu_:tw});function nw(n,t,e,s,r,i=[1,1],o="NHWC"){const a=y(n,"x","separableConv2d"),l=y(t,"depthwiseFilter","separableConv2d"),u=y(e,"pointwiseFilter","separableConv2d");let c=a,h=!1;if(a.rank===3&&(h=!0,c=T(a,[1,a.shape[0],a.shape[1],a.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),g(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),g(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),g(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),g(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const d=l.shape[2],f=l.shape[3];g(u.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${u.shape[2]}.`);const p=mo(c,l,s,r,o,i),b=Zn(p,u,1,"valid",o);return h?T(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const sw=A({separableConv2d_:nw});/**
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
 */function rw(n){const e={x:y(n,"x","sigmoid","float32")};return I.runKernel(Cu,e)}const Cr=A({sigmoid_:rw});/**
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
 */function iw(n,t,e){const s=y(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},i={begin:t,size:e};return I.runKernel(Nu,r,i)}const nt=A({slice_:iw});/**
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
 */function ow(n,t,e){const s=y(n,"x","slice1d");return g(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),nt(s,[t],[e])}const xo=A({slice1d_:ow});/**
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
 */function aw(n,t,e){const s=y(n,"x","slice2d");return g(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),nt(s,t,e)}const Hc=A({slice2d_:aw});/**
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
 */function lw(n,t,e){const s=y(n,"x","slice3d");return g(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),nt(s,t,e)}const So=A({slice3d_:lw});/**
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
 */function uw(n,t,e){const s=y(n,"x","slice4d");return g(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),nt(s,t,e)}const $r=A({slice4d_:uw});/**
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
 */function cw(n,t=-1){const e=y(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},r={dim:t};return I.runKernel(Lu,s,r)}const jc=A({softmax_:cw});/**
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
 */function hw(n){const e={x:y(n,"x","softplus")};return I.runKernel($u,e)}const Eo=A({softplus_:hw});/**
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
 */function dw(n,t,e=0){const r={x:y(n,"x","split")},i={numOrSizeSplits:t,axis:e};return I.runKernel(Fu,r,i)}const se=A({split_:dw});/**
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
 */function fw(n){const e={x:y(n,"x","sqrt","float32")};return I.runKernel(_u,e)}const Ut=A({sqrt_:fw});/**
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
 */function pw(n,t){const e=y(n,"x","squeeze","string_or_numeric");return T(e,np(e.shape,t).newShape)}const ns=A({squeeze_:pw});/**
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
 */function mw(n,t=0){const e=dc(n,"tensors","stack","string_or_numeric");g(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&g(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,r={axis:t};return I.runKernel(fu,s,r)}const Xe=A({stack_:mw});/**
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
 */function gw(n){const e={x:y(n,"x","tanh","float32")};return I.runKernel(Bu,e)}const qc=A({tanh_:gw});/**
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
 */function _t(n,t){or(n);const e=Gn(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Vn(n,null,e,t)}/**
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
 */function Nn(n,t,e){if(or(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Gn(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Vn(n,t,s,e)}/**
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
 */function bw(n,t,e){if(or(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=Gn(n,e);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Vn(n,t,s,e)}/**
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
 */function yw(n,t=0,e=1,s,r){if(s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new vo(t,e,s,!0,r),o=Es(n,s);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const Kc=A({truncatedNormal_:yw});/**
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
 */function ww(n,t=0){const e=y(n,"x","unstack","string_or_numeric");g(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},r={axis:t};return I.runKernel(Pu,s,r)}const ss=A({unstack_:ww});/**
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
 */function vw(n,t=!0,e,s){return I.makeVariable(n,t,e,s)}/**
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
 */function kw(n,t){let e=y(n,"broadcastTo","x");const s=e.shape;if(t.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const u=e.shape.slice();for(;u.length<t.length;)u.unshift(1);e=T(e,u)}const r=e.shape,i=Array.from(t);for(let u=t.length-1;u>=0;u--)if(r[u]===t[u])i[u]=1;else if(e.shape[u]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(i.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return kn(e);const a={x:e},l={reps:i};return I.runKernel(Bi,a,l)}const Io=A({broadcastTo_:kw});/**
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
 */function xw(n,t,e){const s=y(t,"a","where"),r=y(e,"b","where"),i=y(n,"condition","where","bool"),o=ft(ft(i.shape,s.shape),r.shape),a=Io(i,o),l=Io(s,o),u=Io(r,o),c={condition:a,t:l,e:u};return I.runKernel(Iu,c)}const re=A({where_:xw});/**
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
 */function Sw(n){const e={x:y(n,"x","zerosLike")};return I.runKernel(Wu,e)}const Q=A({zerosLike_:Sw});/**
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
 */function Ew(n){const e={input:y(n,"input","imag")};return I.runKernel(Yp,e)}const Ao=A({imag_:Ew});/**
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
 */function Iw(n){const e={input:y(n,"input","real")};return I.runKernel(bm,e)}const _r=A({real_:Iw});/**
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
 */function Aw(n,t,e){const s=y(n,"x","transpose");if(t==null&&(t=s.shape.map((o,a)=>a).reverse()),g(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(o=>{g(o>=0&&o<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},i={perm:t};return s.dtype==="complex64"?N(()=>{let o=_r(s),a=Ao(s);return o=I.runKernel(cr,{x:o},i),a=I.runKernel(cr,{x:a},i),e&&(a=St(a)),mn(o,a)}):I.runKernel(cr,r,i)}const Y=A({transpose_:Aw});/**
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
 */function Nw(n,t){if(t==null)return n.shape.slice();if(Wt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}/**
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
 */function Tw(n,t,e,s){const r=y(n,"x","dropout");if(g(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),g(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof lt?r.clone():r;const i=Nw(r,e),o=1-t,a=U(bo(M(Dr(i,0,1,"float32",s),o)),o);return v(r,a)}const Dw=A({dropout_:Tw});/**
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
 */function Cw(n){g(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(Hp,t)}const Jc=A({fft_:Cw});/**
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
 */function $w(n,t){g(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let r;if(t!=null&&t<e){const p=n.shape.map(b=>0),m=n.shape.map(b=>b);m[n.shape.length-1]=t,r=nt(n,p,m),e=t}else if(t!=null&&t>e){const p=n.shape.map(m=>m);p[n.shape.length-1]=t-e,r=Pt([n,$t(p)],n.shape.length-1),e=t}else r=n;const i=Q(r),o=T(mn(r,i),[s,e]),a=Jc(o),l=Math.floor(e/2)+1,u=_r(a),c=Ao(a),h=se(u,[l,e-l],u.shape.length-1),d=se(c,[l,e-l],c.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=l,T(mn(h[0],d[0]),f)}const Yc=A({rfft_:$w});/**
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
 */function _w(n){g(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(Jp,t)}const No=A({ifft_:_w});/**
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
 */function Mw(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const r=T(n,[e,t]);s=No(r)}else{const r=[e,2*(t-1)],i=T(_r(n),[e,t]),o=T(Ao(n),[e,t]),a=es(nt(i,[0,1],[e,t-2]),1),l=v(es(nt(o,[0,1],[e,t-2]),1),V(-1)),u=Pt([i,a],1),c=Pt([o,l],1),h=T(mn(u,c),[r[0],r[1]]);s=No(h)}if(s=_r(s),n.rank===3&&n.shape[0]!==0){const r=s,i=n.shape[0];s=T(s,[i,s.shape[0]/i,s.shape[1]]),r.dispose()}return s}const zw=A({irfft_:Mw});/**
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
 */function Fw(n,t,e,s,r,i="NHWC",o){let a=n;n.rank===3&&(a=T(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=T(t,[1,t.shape[0],t.shape[1],t.shape[2]])),g(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),g(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),g(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const u=i==="NHWC"?a.shape[3]:a.shape[1],c=i==="NHWC"?l.shape[3]:l.shape[1];g(u===e[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${e[2]}.`),g(c===e[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${e[3]}).`),Gt("conv2dDerFilter",r,o);const h={x:a,dy:l},d={strides:s,pad:r,dataFormat:i,dimRoundingMode:o,filterShape:e};return I.runKernel($p,h,d)}const To=A({conv2DBackpropFilter_:Fw});/**
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
 */function Lw(n){const e={x:y(n,"x","relu6")};return I.runKernel(ku,e)}const Rw=A({relu6_:Lw});/**
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
 */function Ow(n,t=0){const s={x:y(n,"x","step")},r={alpha:t};return I.runKernel(Gu,s,r)}const Mr=A({step_:Ow});/**
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
 */function Do(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return v(n,Mr(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Co(n,t){let e=t;const s=Ct(n.shape,t.shape);return s.length>0&&(e=B(e,s)),T(e,n.shape)}function $o(n,t,e,s){if(t==="linear")return n;if(t==="relu")return Ze(n);if(t==="elu")return go(n);if(t==="relu6")return Rw(n);if(t==="prelu")return Gc(n,e);if(t==="leakyrelu")return Oc(n,s);if(t==="sigmoid")return Cr(n);throw new Error(`Unknown fused activation ${t}.`)}const _o=(n,t)=>!(n>0)||t==="linear";/**
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
 */function Bw({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",_o(I.state.gradientDepth,l)===!1){g(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let C=Zn(n,t,e,s,r,i,o);return a!=null&&(C=M(C,a)),$o(C,l,u,c)}const h=y(n,"x","conv2d","float32"),d=y(t,"filter","conv2d","float32");let f=h,p=!1;h.rank===3&&(p=!0,f=T(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),g(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),Gt("fused conv2d",s,o);const m=r==="NHWC"?f.shape[3]:f.shape[1];g(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),g(Ke(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const b=Er(f.shape,d.shape,e,i,s,o);let w;a!=null&&(w=y(a,"bias","fused conv2d"),[w]=xt(w,h),r==="NHWC"?ft(b.outShape,w.shape):(g(w.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${w.shape.length}.`),g(w.shape.length===0||w.shape[0]===b.outChannels||w.shape[0]===1,()=>`Error in fused conv2d: bias shape (${w.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let S;if(u!=null){const C=u.shape;if(g(C.length<=1||C.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${C.length}.`),C.length===1)g(C[0]===1||C[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the number of output channels (${b.outChannels}).`);else if(C.length===3)try{ft(C,b.outShape)}catch{const F=`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(F)}S=y(u,"prelu weights","fused conv2d")}const k=(C,z)=>{g(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[F,_,L,P]=z,W=Do(C,L,l);g(In(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const K=po(_.shape,W,F,e,s),tt=To(_,W,F.shape,e,s),X=[K,tt];if(P!=null){const dt=Co(P,W);X.push(dt)}return X},E={x:f,filter:d,bias:w,preluActivationWeights:S},D={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return a==null?je((z,F,_)=>{let L=I.runKernel(ju,E,D);return _([F,z,L]),p&&(L=T(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:k}})(f,d):je((z,F,_,L)=>{let P=I.runKernel(ju,E,D);return L([F,z,P,_]),p&&(P=T(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:k}})(f,d,w)}const Pw=A({fusedConv2d_:Bw});/**
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
 */function Uw(n,t,e,s,r,i=[1,1],o){let a=n;n.rank===3&&(a=T(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=T(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={x:a,dy:l},c={strides:s,pad:r,dimRoundingMode:o,dilations:i,filterShape:e};return I.runKernel(Lp,u,c)}const Zc=A({depthwiseConv2dNativeBackpropFilter_:Uw});/**
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
 */function Ww(n,t,e,s,r,i=[1,1],o){let a=t,l=!1;t.rank===3&&(l=!0,a=T(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={dy:a,filter:e},c={strides:s,pad:r,dimRoundingMode:o,dilations:i,inputShape:n},h=I.runKernel(Rp,u,c);return l?T(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Xc=A({depthwiseConv2dNativeBackpropInput_:Ww});/**
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
 */function Gw({x:n,filter:t,strides:e,pad:s,dataFormat:r="NHWC",dilations:i=[1,1],dimRoundingMode:o,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(_o(I.state.gradientDepth,l)===!1){let D=mo(n,t,e,s,r,i,o);return a!=null&&(D=M(D,a)),$o(D,l,u,c)}const h=y(n,"x","depthwiseConv2d","float32"),d=y(t,"filter","depthwiseConv2d","float32");let f=h,p=!1;h.rank===3&&(p=!0,f=T(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),g(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),g(f.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),i==null&&(i=[1,1]),g(Ke(e,i),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Gt("fused depthwiseConv2d",s,o);const m=Er(f.shape,d.shape,e,i,s,o,!0);let b;a!=null&&(b=y(a,"bias","fused conv2d"),[b]=xt(b,h),ft(m.outShape,b.shape));let w;u!=null&&(w=y(u,"prelu weights","fused depthwiseConv2d"));const S=(D,C)=>{g(In(i),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[z,F,_,L]=C,P=Do(D,_,l),W=Xc(F.shape,P,z,e,s,i,o),K=Zc(F,P,z.shape,e,s,i,o);if(L!=null){const tt=Co(b,P);return[W,K,tt]}return[W,K]},k={x:f,filter:d,bias:b,preluActivationWeights:w},E={strides:e,pad:s,dataFormat:r,dilations:i,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return a==null?je((C,z,F)=>{let _=I.runKernel(qu,k,E);return F([z,C,_]),p&&(_=T(_,[_.shape[1],_.shape[2],_.shape[3]])),{value:_,gradFunc:S}})(f,d):je((C,z,F,_)=>{let L=I.runKernel(qu,k,E);return _([z,C,L,F]),p&&(L=T(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:S}})(f,d,b)}const BN=A({fusedDepthwiseConv2d_:Gw});/**
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
 */function Vw({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:r,activation:i="linear",preluActivationWeights:o,leakyreluAlpha:a=.2}){if(_o(I.state.gradientDepth,i)===!1){let P=ot(n,t,e,s);return r!=null&&(P=M(P,r)),$o(P,i,o,a)}let l=y(n,"a","fused matMul"),u=y(t,"b","fused matMul");[l,u]=xt(l,u);const c=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?u.shape[u.rank-1]:u.shape[u.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],f=s?u.shape[u.rank-2]:u.shape[u.rank-1],p=l.shape.slice(0,-2),m=u.shape.slice(0,-2),b=Lt(p),w=Lt(m);g(c===h,()=>`Error in fused matMul: inner shapes (${c}) and (${h}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${e} and transposeB=${s} must match.`);const k=ft(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([d,f]),E=e?T(l,[b,c,d]):T(l,[b,d,c]),D=s?T(u,[w,f,h]):T(u,[w,h,f]);let C;r!=null&&(C=y(r,"bias","fused matMul"),[C]=xt(C,l),ft(k,C.shape));let z;o!=null&&(z=y(o,"prelu weights","fused matMul"));const F=(P,W)=>{const[K,tt,X,dt]=W,et=Do(T(P,X.shape),X,i);let wt,yt;if(!e&&!s?(wt=ot(et,tt,!1,!0),yt=ot(K,et,!0,!1)):!e&&s?(wt=ot(et,tt,!1,!1),yt=ot(et,K,!0,!1)):e&&!s?(wt=ot(tt,et,!1,!0),yt=ot(K,et,!1,!1)):(wt=ot(tt,et,!0,!0),yt=ot(et,K,!0,!0)),r!=null){const Ie=Co(dt,et);return[wt,yt,Ie]}else return[wt,yt]},_={a:E,b:D,bias:C,preluActivationWeights:z},L={transposeA:e,transposeB:s,activation:i,leakyreluAlpha:a};return r==null?je((W,K,tt)=>{const X=I.runKernel(Hu,_,L);return tt([W,K,X]),{value:T(X,k),gradFunc:F}})(E,D):je((W,K,tt,X)=>{const dt=I.runKernel(Hu,_,L);return X([W,K,dt,tt]),{value:T(dt,k),gradFunc:F}})(E,D,C)}const Qc=A({fusedMatMul_:Vw});/**
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
 */function Hw(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function th(n,t,e){const s=1-n%2,r=new Float32Array(n);for(let i=0;i<n;++i){const o=2*Math.PI*i/(n+s-1);r[i]=t-e*Math.cos(o)}return _t(r,"float32")}/**
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
 */function jw(n){return th(n,.54,.46)}const qw=A({hammingWindow_:jw});/**
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
 */function Kw(n){return th(n,.5,.5)}const eh=A({hannWindow_:Kw});/**
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
 */function Jw(n,t,e,s=!1,r=0){let i=0;const o=[];for(;i+t<=n.size;)o.push(nt(n,i,t)),i+=e;if(s)for(;i<n.size;){const a=i+t-n.size,l=Pt([nt(n,i,t-a),Is([a],r)]);o.push(l),i+=e}return o.length===0?Nn([],[0,t]):T(Pt(o),[o.length,t])}const nh=A({frame_:Jw});/**
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
 */function Yw(n,t,e,s,r=eh){s==null&&(s=Hw(t));const i=nh(n,t,e),o=v(i,r(t));return Yc(o,s)}const Zw=A({stft_:Yw});/**
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
 */function Xw(n,t,e,s,r="bilinear",i=0){const o=y(n,"image","cropAndResize"),a=y(t,"boxes","cropAndResize","float32"),l=y(e,"boxInd","cropAndResize","int32"),u=a.shape[0];g(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),g(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),g(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),g(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),g(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),g(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const c={image:o,boxes:a,boxInd:l},h={method:r,extrapolationValue:i,cropSize:s};return I.runKernel(Fp,c,h)}const Qw=A({cropAndResize_:Xw});/**
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
 */function t0(n){const t=y(n,"image","flipLeftRight","float32");g(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return I.runKernel(qp,e,{})}const e0=A({flipLeftRight_:t0});/**
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
 */function n0(n){const t=y(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];g(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),g(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,e),r[e]=3,De(t,r)}const s0=A({grayscaleToRGB_:n0});/**
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
 */function r0(n,t,e=0,s=.5){const r=y(n,"image","rotateWithOffset","float32");g(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const i={image:r},o={radians:t,fillValue:e,center:s};return I.runKernel(_m,i,o)}const i0=A({rotateWithOffset_:r0});/**
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
 */function rs(n,t,e,s,r,i){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),i==null&&(i=0);const o=n.shape[0];return e=Math.min(e,o),g(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),g(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),g(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),g(t.rank===1,()=>"scores must be a 1D tensor"),g(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),g(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:i}}/**
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
 */function o0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const i=y(n,"boxes","nonMaxSuppression","float32"),o=y(t,"scores","nonMaxSuppression","float32"),a=rs(i,o,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:r};return I.runKernel(dm,{boxes:i,scores:o},l)}const a0=A({nonMaxSuppression_:o0});/**
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
 */function l0(n,t,e){const s=u0(n,t,e),r=s<0?-(s+1):s;n.splice(r,0,t)}function u0(n,t,e){return h0(n,t,e||c0)}function c0(n,t){return n>t?1:n<t?-1:0}function h0(n,t,e){let s=0,r=n.length,i=0,o=!1;for(;s<r;){i=s+(r-s>>>1);const a=e(t,n[i]);a>0?s=i+1:(r=i,o=!a)}return o?s:-s-1}/**
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
 */function d0(n,t,e,s,r){return Mo(n,t,e,s,r,0)}function f0(n,t,e,s,r,i){return Mo(n,t,e,s,r,0,!1,i,!0)}function p0(n,t,e,s,r,i){return Mo(n,t,e,s,r,i,!0)}function Mo(n,t,e,s,r,i,o=!1,a=!1,l=!1){const u=[];for(let b=0;b<t.length;b++)t[b]>r&&u.push({score:t[b],boxIndex:b,suppressBeginIndex:0});u.sort(sh);const c=i>0?-.5/i:0,h=[],d=[];for(;h.length<e&&u.length>0;){const b=u.pop(),{score:w,boxIndex:S,suppressBeginIndex:k}=b;if(w<r)break;let E=!1;for(let D=h.length-1;D>=k;--D){const C=m0(n,S,h[D]);if(C>=s){E=!0;break}if(b.score=b.score*g0(s,c,C),b.score<=r)break}b.suppressBeginIndex=h.length,E||(b.score===w?(h.push(S),d.push(b.score)):b.score>r&&l0(u,b,sh))}const f=h.length,p=e-f;a&&p>0&&(h.push(...new Array(p).fill(0)),d.push(...new Array(p).fill(0)));const m={selectedIndices:h};return o&&(m.selectedScores=d),l&&(m.validOutputs=f),m}function m0(n,t,e){const s=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),i=Math.min(s[0],s[2]),o=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),u=Math.min(r[0],r[2]),c=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),f=(a-i)*(l-o),p=(h-u)*(d-c);if(f<=0||p<=0)return 0;const m=Math.max(i,u),b=Math.max(o,c),w=Math.min(a,h),S=Math.min(l,d),k=Math.max(w-m,0)*Math.max(S-b,0);return k/(f+p-k)}function g0(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function sh(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
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
 */async function b0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY){const i=y(n,"boxes","nonMaxSuppressionAsync"),o=y(t,"scores","nonMaxSuppressionAsync"),a=rs(i,o,e,s,r);e=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([i.data(),o.data()]),u=l[0],c=l[1],{selectedIndices:h}=d0(u,c,e,s,r);return i!==n&&i.dispose(),o!==t&&o.dispose(),_t(h,"int32")}const y0=b0;/**
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
 */function w0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=0){const o=y(n,"boxes","nonMaxSuppression"),a=y(t,"scores","nonMaxSuppression"),l=rs(o,a,e,s,r,i);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,i=l.softNmsSigma;const u={boxes:o,scores:a},c={maxOutputSize:e,iouThreshold:s,scoreThreshold:r,softNmsSigma:i},h=I.runKernel(pm,u,c);return{selectedIndices:h[0],selectedScores:h[1]}}const v0=A({nonMaxSuppressionWithScore_:w0});/**
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
 */async function k0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=0){const o=y(n,"boxes","nonMaxSuppressionAsync"),a=y(t,"scores","nonMaxSuppressionAsync"),l=rs(o,a,e,s,r,i);e=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,i=l.softNmsSigma;const u=await Promise.all([o.data(),a.data()]),c=u[0],h=u[1],{selectedIndices:d,selectedScores:f}=p0(c,h,e,s,r,i);return o!==n&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:_t(d,"int32"),selectedScores:_t(f)}}const x0=k0;/**
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
 */function S0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=!1){const o=y(n,"boxes","nonMaxSuppression"),a=y(t,"scores","nonMaxSuppression"),l=rs(o,a,e,s,r,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,d={boxes:o,scores:a},f={maxOutputSize:u,iouThreshold:c,scoreThreshold:h,padToMaxOutputSize:i},p=I.runKernel(fm,d,f);return{selectedIndices:p[0],validOutputs:p[1]}}const E0=A({nonMaxSuppressionPadded_:S0});/**
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
 */async function I0(n,t,e,s=.5,r=Number.NEGATIVE_INFINITY,i=!1){const o=y(n,"boxes","nonMaxSuppressionAsync"),a=y(t,"scores","nonMaxSuppressionAsync"),l=rs(o,a,e,s,r,null),u=l.maxOutputSize,c=l.iouThreshold,h=l.scoreThreshold,[d,f]=await Promise.all([o.data(),a.data()]),{selectedIndices:p,validOutputs:m}=f0(d,f,u,c,h,i);return o!==n&&o.dispose(),a!==t&&a.dispose(),{selectedIndices:_t(p,"int32"),validOutputs:V(m,"int32")}}const A0=I0;/**
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
 */function N0(n,t,e=!1,s=!1){const r=y(n,"images","resizeBilinear");g(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),g(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=r,o=!1;r.rank===3&&(o=!0,i=T(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=t,a={images:i},l={alignCorners:e,halfPixelCenters:s,size:t},u=I.runKernel(vu,a,l);return o?T(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const T0=A({resizeBilinear_:N0});/**
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
 */function D0(n,t,e=!1,s=!1){const r=y(n,"images","resizeNearestNeighbor");g(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),g(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),g(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=r,o=!1;r.rank===3&&(o=!0,i=T(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=t,a={images:i},l={alignCorners:e,halfPixelCenters:s,size:t},u=I.runKernel(wu,a,l);return o?T(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const C0=A({resizeNearestNeighbor_:D0});/**
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
 */function $0(n,t,e){const s=y(n,"x","bincount"),r=y(t,"weights","bincount");g(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),g(e>=0,()=>`size must be non-negative, but got ${e}.`),g(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const i={x:s,weights:r},o={size:e};return I.runKernel(Np,i,o)}const _0=A({bincount_:$0});/**
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
 */function M0(n,t){let e=y(n,"a","lessEqual","string_or_numeric"),s=y(t,"b","lessEqual","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(em,r)}const Ts=A({lessEqual_:M0});/**
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
 */function z0(n){const e={x:y(n,"x","round")};return I.runKernel(Su,e)}const F0=A({round_:z0});/**
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
 */function zr(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:t,step:e,dtype:s};return I.runKernel(gm,{},r)}/**
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
 */function L0(n,t="binary",e=!1,s=.5){const r=y(n,"image","threshold"),i=.2989,o=.587,a=.114,l=r.shape[0]*r.shape[1];let u=v(_t([s]),255),c,h,d,f;if(g(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),g(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),g(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),g(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[c,h,d]=se(r,[1,1,1],-1);const b=v(c,i),w=v(h,o),S=v(d,a);f=M(M(b,w),S)}else f=n;if(t==="otsu"){const b=_0(R(F0(f),"int32"),gn([]),256);u=R0(b,l)}const p=e?Ts(f,u):ge(f,u);return R(v(p,255),"int32")}function R0(n,t){let e=_t([-1]),s=_t([0]),r=_t([0]),i,o,a,l,u,c;for(let h=0;h<n.size-1;h++){i=nt(n,0,h+1),o=nt(n,h+1),u=U(B(i),t),c=U(B(o),t);const d=B(v(i,zr(0,i.size)));a=U(d,B(i));const f=Is(o.shape,i.size),p=M(zr(0,o.size),f),m=v(o,p);l=U(B(m),B(o));const b=O(a,l),w=O(a,l),S=v(u,c);r=v(v(S,b),w);const k=ge(r,s);s=re(k,r,s),e=re(k,_t([h]),e)}return e}const O0=A({threshold_:L0});/**
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
 */function B0(n,t,e="nearest",s="constant",r=0,i){const o=y(n,"image","transform","float32"),a=y(t,"transforms","transform","float32");g(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),g(a.rank===2&&(a.shape[0]===o.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const l={image:o,transforms:a},u={interpolation:e,fillMode:s,fillValue:r,outputShape:i};return I.runKernel($m,l,u)}const P0=A({transform_:B0});/**
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
 */function U0(n,t,e){g(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),g(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const s=y(n,"a","bandPart");g(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[i,o]=s.shape.slice(-2);if(!(t<=i))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`);if(!(e<=o))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${o}).`);t<0&&(t=i),e<0&&(e=o);const a=T(zr(0,i,1,"int32"),[-1,1]),l=zr(0,o,1,"int32"),u=O(a,l),c=Qn(Ts(u,V(+t,"int32")),As(u,V(-e,"int32"))),h=$t([i,o],s.dtype);return T(Xe(ss(T(s,[-1,i,o])).map(d=>re(c,d,h))),r)}const W0=A({bandPart_:U0});/**
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
 */function G0(n,t=null,e=!1){const r={x:y(n,"x","min")},i={axis:t,keepDims:e};return I.runKernel(au,r,i)}const rh=A({min_:G0});/**
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
 */function V0(n,t){let e=y(n,"base","pow"),s=y(t,"exp","pow");[e,s]=xt(e,s);const r={a:e,b:s};return I.runKernel(mu,r)}const Ds=A({pow_:V0});/**
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
 */function H0(n,t="euclidean",e=null,s=!1){n=y(n,"x","norm");const r=ih(n,t,e);let i=r.shape;if(s){const o=he(e,n.shape);i=ts(r.shape,o)}return T(r,i)}function ih(n,t,e=null){if(n.rank===0)return Ft(n);if(n.rank!==1&&e===null)return ih(T(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return B(Ft(n),e);if(t===1/0)return Ce(Ft(n),e);if(t===-1/0)return rh(Ft(n),e);if(t==="euclidean"||t===2)return Ut(B(Ds(Ft(n),V(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Ce(B(Ft(n),e[0]),e[1]-1);if(t===1/0)return Ce(B(Ft(n),e[1]),e[0]);if(t===-1/0)return rh(B(Ft(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ut(B(ut(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const oh=A({norm_:H0});/**
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
 */function j0(n){let t;if(Array.isArray(n)){t=!1,g(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let i=1;i<n.length;++i)g(n[i].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[i].shape[0]} vs. ${r})`)}else t=!0,n=se(n,n.shape[0],0).map(r=>ns(r,[0]));g(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let r=0;r<n.length;++r)e.push(I.tidy(()=>{let i=s[r];if(r>0)for(let o=0;o<r;++o){const a=v(B(v(e[o],i)),e[o]);i=O(i,a)}return U(i,oh(i,"euclidean"))}));return t?Xe(e,0):e}const q0=A({gramSchmidt_:j0});/**
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
 */function K0(n,t=!1){if(g(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return ah(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,u)=>l*u),s=ss(T(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],i=[];s.forEach(l=>{const[u,c]=ah(l,t);r.push(u),i.push(c)});const o=T(Xe(r,0),n.shape),a=T(Xe(i,0),n.shape);return[o,a]}}function ah(n,t=!1){return I.tidy(()=>{g(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let r=Rc(e),i=kn(n);const o=Nn([[1]],[1,1]);let a=kn(o);const l=e>=s?s:e;for(let u=0;u<l;++u){const c=i,h=a,d=r;[a,i,r]=I.tidy(()=>{const f=nt(i,[u,u],[e-u,1]),p=oh(f),m=nt(i,[u,u],[1,1]),b=re(ge(m,0),Nn([[-1]]),Nn([[1]])),w=O(m,v(b,p)),S=U(f,w);S.shape[0]===1?a=kn(o):a=Pt([o,nt(S,[1,0],[S.shape[0]-1,S.shape[1]])],0);const k=St(U(ot(b,w),p)),E=nt(i,[u,0],[e-u,s]),D=v(k,a),C=Y(a);if(u===0)i=O(E,ot(D,ot(C,E)));else{const _=O(E,ot(D,ot(C,E)));i=Pt([nt(i,[0,0],[u,s]),_],0)}const z=Y(D),F=nt(r,[0,u],[e,r.shape[1]-u]);if(u===0)r=O(F,ot(ot(F,a),z));else{const _=O(F,ot(ot(F,a),z));r=Pt([nt(r,[0,0],[e,u]),_],1)}return[a,i,r]}),G([c,h,d])}return!t&&e>s&&(r=nt(r,[0,0],[e,s]),i=nt(i,[0,0],[s,s])),[r,i]})}const J0=A({qr_:K0});/**
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
 */var Vt;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Vt||(Vt={}));function Y0(n,t,e=Vt.SUM_BY_NONZERO_WEIGHTS){const s=y(n,"losses","computeWeightedLoss");let r=null;t!=null&&(r=y(t,"weights","computeWeightedLoss"));const i=r==null?s:v(s,r);if(e===Vt.NONE)return i;if(e===Vt.SUM)return B(i);if(e===Vt.MEAN){if(r==null)return vt(i);{const o=s.size/r.size,a=U(B(i),B(r));return o>1?U(a,V(o)):a}}if(e===Vt.SUM_BY_NONZERO_WEIGHTS){if(r==null)return U(B(i),V(s.size));{const o=v(r,Ye(s.shape)),a=R(B(Ar(o,V(0))),"float32");return U(B(i),a)}}throw Error(`Unknown reduction: ${e}`)}const Be=A({computeWeightedLoss_:Y0});/**
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
 */function Z0(n,t,e,s=Vt.SUM_BY_NONZERO_WEIGHTS){const r=y(n,"labels","absoluteDifference"),i=y(t,"predictions","absoluteDifference");let o=null;e!=null&&(o=y(e,"weights","absoluteDifference")),Ae(r.shape,i.shape,"Error in absoluteDifference: ");const a=Ft(O(r,i));return Be(a,o,s)}const X0=A({absoluteDifference_:Z0});function Q0(n,t,e,s,r=Vt.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","cosineDistance"),o=y(t,"predictions","cosineDistance");let a=null;s!=null&&(a=y(s,"weights","cosineDistance")),Ae(i.shape,o.shape,"Error in cosineDistance: ");const l=V(1),u=O(l,B(v(i,o),e,!0));return Be(u,a,r)}const tv=A({cosineDistance_:Q0});function ev(n,t,e,s=Vt.SUM_BY_NONZERO_WEIGHTS){let r=y(n,"labels","hingeLoss");const i=y(t,"predictions","hingeLoss");let o=null;e!=null&&(o=y(e,"weights","hingeLoss")),Ae(r.shape,i.shape,"Error in hingeLoss: ");const a=V(1);r=O(v(V(2),r),a);const l=Ze(O(a,v(r,i)));return Be(l,o,s)}const nv=A({hingeLoss_:ev});/**
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
 */function sv(n,t,e,s=1,r=Vt.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","huberLoss"),o=y(t,"predictions","huberLoss");let a=null;e!=null&&(a=y(e,"weights","huberLoss")),Ae(i.shape,o.shape,"Error in huberLoss: ");const l=V(s),u=Ft(O(o,i)),c=yo(u,l),h=O(u,c),d=M(v(V(.5),ut(c)),v(l,h));return Be(d,a,r)}const rv=A({huberLoss_:sv});/**
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
 */function iv(n,t,e,s=1e-7,r=Vt.SUM_BY_NONZERO_WEIGHTS){const i=y(n,"labels","logLoss"),o=y(t,"predictions","logLoss");let a=null;e!=null&&(a=y(e,"weights","logLoss")),Ae(i.shape,o.shape,"Error in logLoss: ");const l=V(1),u=V(s),c=St(v(i,be(M(o,u)))),h=v(O(l,i),be(M(O(l,o),u))),d=O(c,h);return Be(d,a,r)}const ov=A({logLoss_:iv});/**
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
 */function av(n,t){let e=y(n,"a","squaredDifference"),s=y(t,"b","squaredDifference");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s},i={};return I.runKernel(Ru,r,i)}const lv=A({squaredDifference_:av});/**
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
 */function uv(n,t,e,s=Vt.SUM_BY_NONZERO_WEIGHTS){const r=y(n,"labels","meanSquaredError"),i=y(t,"predictions","meanSquaredError");let o=null;e!=null&&(o=y(e,"weights","meanSquaredError")),Ae(r.shape,i.shape,"Error in meanSquaredError: ");const a=lv(r,i);return Be(a,o,s)}const cv=A({meanSquaredError_:uv});/**
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
 */function hv(n,t){const e=y(n,"labels","sigmoidCrossEntropyWithLogits"),s=y(t,"logits","sigmoidCrossEntropyWithLogits");Ae(e.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=Ze(s),i=v(s,e),o=Bc(me(St(Ft(s))));return M(O(r,i),o)}function dv(n,t,e,s=0,r=Vt.SUM_BY_NONZERO_WEIGHTS){let i=y(n,"multiClassLabels","sigmoidCrossEntropy");const o=y(t,"logits","sigmoidCrossEntropy");let a=null;if(e!=null&&(a=y(e,"weights","sigmoidCrossEntropy")),Ae(i.shape,o.shape,"Error in sigmoidCrossEntropy: "),s>0){const u=V(s),c=V(1),h=V(.5);i=M(v(i,O(c,u)),v(h,u))}const l=hv(i,o);return Be(l,a,r)}const fv=A({sigmoidCrossEntropy_:dv});/**
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
 */function pv(n,t=null,e=!1){const s=y(n,"x","logSumExp"),r=he(t,s.shape),i=Ce(s,r,!0),o=O(s,i),a=me(o),l=B(a,r),u=be(l),c=M(T(i,u.shape),u);if(e){const h=ts(c.shape,r);return T(c,h)}return c}const mv=A({logSumExp_:pv});/**
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
 */function gv(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return je((r,i,o)=>{const l=mv(i,[e],!0),u=O(R(i,"float32"),l);o([r,u]);const c=St(v(u,r));return{value:B(c,[e]),gradFunc:(f,p)=>{const[m,b]=p,w=ts(f.shape,[e]);return[v(T(f,w),O(R(m,"float32"),me(b))),v(T(f,w),O(me(b),R(m,"float32")))]}}})(n,t)}function bv(n,t,e,s=0,r=Vt.SUM_BY_NONZERO_WEIGHTS){let i=y(n,"onehotLabels","softmaxCrossEntropy");const o=y(t,"logits","softmaxCrossEntropy");let a=null;if(e!=null&&(a=y(e,"weights","softmaxCrossEntropy")),Ae(i.shape,o.shape,"Error in softmaxCrossEntropy: "),s>0){const u=V(s),c=V(1),h=V(i.shape[1]);i=M(v(i,O(c,u)),U(u,h))}const l=gv(i,o);return Be(l,a,r)}const yv=A({softmaxCrossEntropy_:bv});/**
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
 */function wv(n,t,e,s){const r=y(n,"indices","sparseFillEmptyRows","int32"),i=y(t,"values","sparseFillEmptyRows"),o=y(e,"denseShape","sparseFillEmptyRows","int32"),a=y(s,"defaultValue","sparseFillEmptyRows",i.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(i.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${i.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const l={indices:r,values:i,denseShape:o,defaultValue:a},u=I.runKernel(xm,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const vv=A({sparseFillEmptyRows_:wv});/**
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
 */function kv(n,t,e){const s=y(n,"inputIndices","sparseReshape","int32"),r=y(t,"inputShape","sparseReshape","int32"),i=y(e,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(i.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${i.shape}`);const o={inputIndices:s,inputShape:r,newShape:i},a=I.runKernel(Sm,o);return{outputIndices:a[0],outputShape:a[1]}}const xv=A({sparseReshape_:kv});/**
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
 */function Sv(n,t,e){const s=y(n,"data","sparseSegmentMean"),r=y(t,"indices","sparseSegmentMean","int32"),i=y(e,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${i.shape}`);const o={data:s,indices:r,segmentIds:i};return I.runKernel(Em,o)}const Ev=A({sparseSegmentMean_:Sv});/**
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
 */function Iv(n,t,e){const s=y(n,"data","sparseSegmentSum"),r=y(t,"indices","sparseSegmentSum","int32"),i=y(e,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${i.shape}`);const o={data:s,indices:r,segmentIds:i};return I.runKernel(Im,o)}const Av=A({sparseSegmentSum_:Iv});/**
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
 */function Nv(n,t,e,s,r,i,o,a){const l=y(n,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=y(t,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:e,nGramWidths:s,leftPad:r,rightPad:i,padWidth:o,preserveShortSequences:a},h={data:l,dataSplits:u},d=I.runKernel(Nm,h,c);return{nGrams:d[0],nGramsSplits:d[1]}}const Tv=A({stringNGrams_:Nv});/**
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
 */function Dv(n,t,e=!0){const s=y(n,"input","stringSplit","string"),r=y(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const i={skipEmpty:e},o={input:s,delimiter:r},a=I.runKernel(Tm,o,i);return{indices:a[0],values:a[1],shape:a[2]}}const Cv=A({stringSplit_:Dv});/**
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
 */function $v(n,t){const e=y(n,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:e};return I.runKernel(Dm,r,s)}const _v=A({stringToHashBucketFast_:$v});/**
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
 */const PN={fft:Jc,ifft:No,rfft:Yc,irfft:zw},UN={hammingWindow:qw,hannWindow:eh,frame:nh,stft:Zw},Cs={flipLeftRight:e0,grayscaleToRGB:s0,resizeNearestNeighbor:C0,resizeBilinear:T0,rotateWithOffset:i0,cropAndResize:Qw,nonMaxSuppression:a0,nonMaxSuppressionAsync:y0,nonMaxSuppressionWithScore:v0,nonMaxSuppressionWithScoreAsync:x0,nonMaxSuppressionPadded:E0,nonMaxSuppressionPaddedAsync:A0,threshold:O0,transform:P0},Mv={bandPart:W0,gramSchmidt:q0,qr:J0},WN={absoluteDifference:X0,computeWeightedLoss:Be,cosineDistance:tv,hingeLoss:nv,huberLoss:rv,logLoss:ov,meanSquaredError:cv,sigmoidCrossEntropy:fv,softmaxCrossEntropy:yv},GN={sparseFillEmptyRows:vv,sparseReshape:xv,sparseSegmentMean:Ev,sparseSegmentSum:Av},VN={stringNGrams:Tv,stringSplit:Cv,stringToHashBucketFast:_v};/**
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
 */class Fr extends qe{constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=I.registeredVariables[s],o=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:N(()=>Q(i).variable(o))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:N(()=>Q(i).variable(o))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,u=this.accumulatedUpdates[r].variable;N(()=>{const c=M(v(l,this.rho),v(ut(a),1-this.rho)),h=v(U(Ut(M(u,this.epsilon)),Ut(M(l,this.epsilon))),a),d=M(v(u,this.rho),v(ut(h),1-this.rho));l.assign(c),u.assign(d);const f=M(v(h,-this.learningRate),i);i.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(G(this.accumulatedGrads.map(t=>t.variable)),G(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}Fr.className="Adadelta",$(Fr);/**
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
 */class Lr extends qe{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=I.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:N(()=>Is(i.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const a=this.accumulatedGrads[r].variable;N(()=>{const l=M(a,ut(o));a.assign(l);const u=M(v(U(o,Ut(M(l,I.backend.epsilon()))),-this.learningRate),i);i.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&G(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}Lr.className="Adagrad",$(Lr);/**
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
 */class Rr extends qe{constructor(t,e,s,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],N(()=>{this.accBeta1=V(e).variable(),this.accBeta2=V(s).variable()}),r==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);N(()=>{const s=O(1,this.accBeta1),r=O(1,this.accBeta2);e.forEach((i,o)=>{const a=I.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:N(()=>Q(a).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${i}/v`,variable:N(()=>Q(a).variable(l))});const u=Array.isArray(t)?t[o].tensor:t[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,d=M(v(c,this.beta1),v(u,1-this.beta1)),f=M(v(h,this.beta2),v(ut(u),1-this.beta2)),p=U(d,s),m=U(f,r);c.assign(d),h.assign(f);const b=M(v(U(p,M(Ut(m),this.epsilon)),-this.learningRate),a);a.assign(b)}),this.accBeta1.assign(v(this.accBeta1,this.beta1)),this.accBeta2.assign(v(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&G(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&G(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),N(()=>{this.accBeta1.assign(Ds(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ds(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}Rr.className="Adam",$(Rr);/**
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
 */class Or extends qe{constructor(t,e,s,r=null,i=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],N(()=>{this.iteration=V(0).variable(),this.accBeta1=V(e).variable()}),r==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);N(()=>{const s=O(1,this.accBeta1),r=U(-this.learningRate,M(v(this.iteration,this.decay),1));e.forEach((i,o)=>{const a=I.registeredVariables[i],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${i}/m`,variable:Q(a).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${i}/v`,variable:Q(a).variable(l)});const u=Array.isArray(t)?t[o].tensor:t[i];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,d=M(v(c,this.beta1),v(u,1-this.beta1)),f=v(h,this.beta2),p=Ft(u),m=An(f,p);c.assign(d),h.assign(m);const b=M(v(U(r,s),U(d,M(m,this.epsilon))),a);a.assign(b)}),this.iteration.assign(M(this.iteration,1)),this.accBeta1.assign(v(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&G(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&G(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}Or.className="Adamax",$(Or);/**
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
 */class $s extends qe{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const o=I.registeredVariables[s];N(()=>{const a=M(v(this.c,i),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Te(V(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}$s.className="SGD",$($s);/**
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
 */class Br extends $s{constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=V(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=I.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:N(()=>Q(i).variable(!1))});const o=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[s];a!=null&&N(()=>{let l;const u=M(v(this.m,o),a);this.useNesterov?l=M(v(this.c,M(a,v(u,this.m))),i):l=M(v(this.c,u),i),o.assign(u),i.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&G(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}Br.className="Momentum",$(Br);/**
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
 */class Pr extends qe{constructor(t,e=.9,s=0,r=null,i=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r==null&&(this.epsilon=I.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const i=I.registeredVariables[s],o=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:N(()=>Q(i).variable(o))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:N(()=>Q(i).variable(o))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:N(()=>Q(i).variable(o))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,u=this.accumulatedMoments[r].variable;N(()=>{const c=M(v(l,this.decay),v(ut(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,d=M(v(h,this.decay),v(a,1-this.decay)),f=U(v(a,this.learningRate),Ut(O(c,M(ut(d),this.epsilon)))),p=M(v(u,this.momentum),f);l.assign(c),h.assign(d),u.assign(p);const m=O(i,p);i.assign(m)}else{const h=M(v(l,this.decay),v(ut(a),1-this.decay)),d=M(v(u,this.momentum),U(v(a,this.learningRate),Ut(M(h,this.epsilon))));l.assign(h),u.assign(d);const f=O(i,d);i.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&G(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&G(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&G(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}Pr.className="RMSProp",$(Pr);/**
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
 */class Tn{static sgd(t){return new $s(t)}static momentum(t,e,s=!1){return new Br(t,e,s)}static rmsprop(t,e=.9,s=0,r=null,i=!1){return new Pr(t,e,s,r,i)}static adam(t=.001,e=.9,s=.999,r=null){return new Rr(t,e,s,r)}static adadelta(t=.001,e=.95,s=null){return new Fr(t,e,s)}static adamax(t=.002,e=.9,s=.999,r=null,i=0){return new Or(t,e,s,r,i)}static adagrad(t,e=.1){return new Lr(t,e)}}/**
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
 */const is={sgd:Tn.sgd,momentum:Tn.momentum,adadelta:Tn.adadelta,adagrad:Tn.adagrad,rmsprop:Tn.rmsprop,adamax:Tn.adamax,adam:Tn.adam};/**
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
 */const zv=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function Fv(){return new Promise(n=>zv(()=>n()))}/**
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
 */var Lv=Tt(86663);/**
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
 */function Rv(n,t){return Ur(n,t)}function Ur(n,t,e=new Map,s=new Set){if(n==null)return null;if(typeof Blob=="function"&&n instanceof Blob)return n.slice();if(s.has(n))throw new Error("Circular references are not supported.");if(e.has(n))return e.get(n);const r=t(n);if(r.recurse&&r.value!==null)throw new Error("A deep map function may not return both a value and recurse=true.");if(r.recurse)if(os(n)){const i=Array.isArray(n)?[]:{};s.add(n);for(const o in n){const a=n[o],l=Ur(a,t,e,s);i[o]=l}return s.delete(n),n.__proto__&&(i.__proto__=n.__proto__),i}else throw new Error(`Can't recurse into non-iterable type: ${n}`);else return e.set(n,r.value),r.value}function Ov(n,t=uh){return lh(n,t)}function lh(n,t,e=new Set){const s=n[0];if(e.has(s))throw new Error("Circular references are not supported.");const r=t(n);if(r.recurse&&r.value!==null)throw new Error("A deep zip function may not return both a value and recurse=true.");if(r.recurse)if(os(s)){const i=Array.isArray(s)?[]:{};e.add(s);for(const o in s){const a=n.map(u=>u[o]),l=lh(a,t,e);i[o]=l}return e.delete(s),i}else throw new Error(`Can't recurse into non-iterable type: ${s}`);else return r.value}function uh(n){return n===null?null:os(n[0])?{value:null,recurse:!0}:{value:n,recurse:!1}}async function ch(n,t){const e=new Map;Ur(n,t,e);for(const r of Array.from(e.keys())){const i=e.get(r);if(Mi(i)){const o=await i;e.set(r,o)}}return Ur(n,t,e)}function os(n){let t=!1;if(q().get("IS_BROWSER"))t=n instanceof TextDecoder;else{const{StringDecoder:e}=Tt(71410);t=n instanceof e}return n!=null&&!ArrayBuffer.isView(n)&&(Array.isArray(n)||typeof n=="object"&&!(n instanceof lt)&&!(n instanceof Promise)&&!t)}function Bv(n){return n==null||Pv(n)||Array.isArray(n)||typeof n=="object"&&n instanceof lt||de(n)}function Pv(n){return n===null||typeof n!="object"&&typeof n!="function"}/**
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
 */function Uv(n){return Rv(n,Wv)}function Wv(n){return n instanceof lt?{value:n.clone(),recurse:!1}:os(n)?{value:null,recurse:!0}:{value:n,recurse:!1}}/**
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
 */class hh{constructor(t){if(this.capacity=t,this.begin=0,this.end=0,t==null)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(t<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(t),this.doubledCapacity=2*t}wrap(t){for(;t<0;)t+=this.doubledCapacity;return t%this.doubledCapacity}get(t){if(t<0)throw new RangeError("Can't get item at a negative index.");return this.data[t%this.capacity]}set(t,e){if(t<0)throw new RangeError("Can't set item at a negative index.");this.data[t%this.capacity]=e}length(){let t=this.end-this.begin;return t<0&&(t=this.doubledCapacity+t),t}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,t),this.end=this.wrap(this.end+1)}pushAll(t){for(const e of t)this.push(e)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const t=this.get(this.end);return this.set(this.end,void 0),t}unshift(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,t)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const t=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),t}shuffleExcise(t){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const e=this.wrap(this.begin+t),s=this.get(e);return this.set(e,this.pop()),s}}/**
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
 */class Wr extends hh{constructor(){super(Wr.INITIAL_CAPACITY)}isFull(){return!1}push(t){super.isFull()&&this.expand(),super.push(t)}unshift(t){super.isFull()&&this.expand(),super.unshift(t)}expand(){const t=this.capacity*2,e=new Array(t),s=this.length();for(let r=0;r<s;r++)e[r]=this.get(this.wrap(this.begin+r));this.data=e,this.capacity=t,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=s}}Wr.INITIAL_CAPACITY=32;/**
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
 */function dh(n){return new Vv(n)}function HN(n){let t=n;return zo(()=>({value:t++,done:!1}))}function zo(n){return new Hv(n)}function fh(n,t){return new mh(n,t)}function jN(n,t,e){return fh(zo(n).take(t),e)}function Gv(n,t=Qe.FAIL){return new t1(n,t)}class Mt{async toArray(){const t=[];let e=await this.next();for(;!e.done;)t.push(e.value),e=await this.next();return t}async toArrayForTest(){const t=this.prefetch(100),e=[];let s=await t.next();for(;!s.done;)e.push(s.value),s=await t.next();return e}async resolveFully(){let t=await this.next();for(;!t.done;)t=await this.next()}async resolveWhile(t){let e=await this.next(),s=t(e.value);for(;!e.done&&s;)e=await this.next(),s=t(e.value)}handleErrors(t){return new Xv(this,t)}filter(t){return new Yv(this,t)}map(t){return new Zv(this,t)}mapAsync(t){return new ph(this,t)}serialMapAsync(t){return new ph(this,t).serial()}flatmap(t){return new Qv(this,t)}async forEachAsync(t){return this.map(t).resolveFully()}async serialForEach(t){return this.serialMapAsync(t).resolveWhile(e=>e===!0)}rowMajorBatch(t,e=!0){return new Jv(this,t,e)}columnMajorBatch(t,e=!0,s=uh){return this.rowMajorBatch(t,e).map(i=>Ov(i,s))}concatenate(t,e){return new mh(dh([this,t]),e)}take(t){return t<0||t==null?this:new Kv(this,t)}skip(t){return t<0||t==null?this:new qv(this,t)}prefetch(t){return new gh(this,t)}shuffle(t,e){return new e1(this,t,e)}serial(){return new jv(this)}}class Vv extends Mt{constructor(t){super(),this.items=t,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const t=this.items[this.trav];return this.trav++,{value:Uv(t),done:!1}}}class Hv extends Mt{constructor(t){super(),this.nextFn=t}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(t){throw t.message=`Error thrown while iterating through a dataset: ${t.message}`,t}}}class jv extends Mt{constructor(t){super(),this.upstream=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class qv extends Mt{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const t=await this.upstream.next();if(t.done)return t;G(t.value)}return this.upstream.next()}}class Kv extends Mt{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class Jv extends Mt{constructor(t,e,s=!0){super(),this.upstream=t,this.batchSize=e,this.enableSmallLastBatch=s,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const t=[];for(;t.length<this.batchSize;){const e=await this.upstream.next();if(e.done)return this.enableSmallLastBatch&&t.length>0?{value:t,done:!1}:{value:null,done:!0};t.push(e.value)}return{value:t,done:!1}}}class Yv extends Mt{constructor(t,e){super(),this.upstream=t,this.predicate=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const t=await this.upstream.next();if(t.done||this.predicate(t.value))return t;G(t.value)}}}class Zv extends Mt{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Map`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=Ve(t.value),s=this.transform(t.value),r=Ve(s);for(const i of e)Yi(i,r)||i.dispose();return{value:s,done:!1}}}class Xv extends Mt{constructor(t,e){super(),this.upstream=t,this.handler=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(t){if(!this.handler(t))return{value:null,done:!0}}}}class ph extends Mt{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const e=Ve(t.value),s=await this.transform(t.value),r=Ve(s);for(const i of e)Yi(i,r)||i.dispose();return{value:s,done:!1}}}class Fo extends Mt{constructor(){super(),this.outputQueue=new Wr,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class Qv extends Fo{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const t=await this.upstream.next();if(t.done)return!1;const e=Ve(t.value),s=this.transform(t.value),r=Ve(s);this.outputQueue.pushAll(s);for(const i of e)Yi(i,r)||i.dispose();return!0}}class mh extends Mt{constructor(t,e){super(),this.baseErrorHandler=e,this.lastRead=null,this.iterator=null,this.moreIterators=t}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(t){if(await t,this.iterator==null){const s=await this.moreIterators.next();if(s.done)return{value:null,done:!0};this.iterator=s.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const e=await this.iterator.next();return e.done?(this.iterator=null,this.readFromChain(t)):e}}var Qe;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(Qe||(Qe={}));class t1 extends Mt{constructor(t,e=Qe.FAIL){super(),this.iterators=t,this.mismatchMode=e,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(t){await t;let e=0,s=0;function r(o){return o instanceof Mt?{value:o.next().then(l=>(e++,l.done&&s++,l.value)),recurse:!1}:{value:null,recurse:!0}}const i=await ch(this.iterators,r);if(e===s)return{value:null,done:!0};if(s>0)switch(this.mismatchMode){case Qe.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case Qe.SHORTEST:return{value:null,done:!0};case Qe.LONGEST:default:}return this.count++,{value:i,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class gh extends Mt{constructor(t,e){super(),this.upstream=t,this.bufferSize=e,this.buffer=new hh(e)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){const t=this.upstream.next();this.buffer.push(t)}}next(){return this.refill(),this.buffer.shift()}}class e1 extends gh{constructor(t,e,s){super(t,e),this.upstream=t,this.windowSize=e,this.upstreamExhausted=!1,this.random=Tr.alea(s||Qt().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(t){return Math.floor(this.random()*t)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const t=this.chooseIndex(),e=await this.buffer.shuffleExcise(t);if(e.done)this.upstreamExhausted=!0;else return this.refill(),e}return{value:null,done:!0}}}/**
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
 */class _s{constructor(){this.size=null}batch(t,e=!0){const s=this;g(t>0,()=>`batchSize needs to be positive, but it is
      ${t}`);let r;return this.size===1/0||this.size==null?r=this.size:e?r=Math.ceil(this.size/t):r=Math.floor(this.size/t),ie(async()=>(await s.iterator()).columnMajorBatch(t,e,n1),r)}concatenate(t){const e=this;let s;return this.size===1/0||t.size===1/0?s=1/0:this.size!=null&&t.size!=null?s=this.size+t.size:s=null,ie(async()=>(await e.iterator()).concatenate(await t.iterator()),s)}filter(t){const e=this;let s;return this.size===1/0?s=1/0:s=null,ie(async()=>(await e.iterator()).filter(r=>N(()=>t(r))),s)}async forEachAsync(t){return(await this.iterator()).forEachAsync(t)}map(t){const e=this;return ie(async()=>(await e.iterator()).map(s=>N(()=>t(s))),this.size)}mapAsync(t){const e=this;return ie(async()=>(await e.iterator()).mapAsync(t),this.size)}prefetch(t){if(t==null)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const e=this;return ie(async()=>(await e.iterator()).prefetch(t),this.size)}repeat(t){const e=this;let s;return this.size!=null&&t>0?s=this.size*t:t===0?s=0:this.size!=null&&(t===void 0||t<0)?s=1/0:s=null,ie(async()=>{const r=zo(async()=>({value:await e.iterator(),done:!1}));return fh(r.take(t))},s)}skip(t){const e=this;let s;return this.size!=null&&t>=0&&this.size>=t?s=this.size-t:this.size!=null&&(this.size<t||t===void 0||t<0)?s=0:s=null,ie(async()=>(await e.iterator()).skip(t),s)}shuffle(t,e,s=!0){if(t==null||t<0)throw this.size==null?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const r=this,i=Tr.alea(e||Qt().toString());return ie(async()=>{let o=i.int32();return s&&(o+=i.int32()),(await r.iterator()).shuffle(t,o.toString())},this.size)}take(t){const e=this;let s;return this.size!=null&&this.size>t?s=t:this.size!=null&&this.size<=t?s=this.size:s=null,ie(async()=>(await e.iterator()).take(t),s)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}_s.MAX_BUFFER_SIZE=1e4;function ie(n,t=null){return new class extends _s{constructor(){super(...arguments),this.size=t}async iterator(){return n()}}}function Gr(n){return ie(async()=>dh(n),n.length)}function bh(n){if(!os(n))throw new Error("The argument to zip() must be an object or array.");let t;if(Array.isArray(n))for(let e=0;e<n.length;e++)t=t==null?n[e].size:Math.min(t,n[e].size);else if(n instanceof Object)for(const e in n)t=t==null?n[e].size:Math.min(t,n[e].size);return ie(async()=>{const e=await ch(n,s=>{if(s instanceof _s)return{value:s.iterator(),recurse:!1};if(os(s))return{value:null,recurse:!0};throw new Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")});return Gv(e,Qe.SHORTEST)},t)}function n1(n){if(n===null)return null;const t=n[0];return Bv(t)?{value:s1(n),recurse:!1}:{value:null,recurse:!0}}function s1(n){if(n.length===0)throw new Error("Can't make a batch of zero elements.");return n[0]instanceof lt?Xe(n):gn(n)}/**
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
 */class r1 extends _s{constructor(t){super(),this.input=t}async iterator(){return(await this.input.iterator()).decodeUTF8().split(`
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
 */const Vr='"',Ms=Symbol("out"),yh=Symbol("field"),Hr=Symbol("quote"),Lo=Symbol("quoteafterquote"),wh=Symbol("quoteinquote");class qN extends _s{constructor(t,e){super(),this.input=t,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new r1(t),e||(e={}),this.hasHeader=e.hasHeader!==!1,this.fullColumnNames=e.columnNames,this.columnConfigs=e.columnConfigs,this.configuredColumnsOnly=e.configuredColumnsOnly,e.delimWhitespace?(g(e.delimiter==null,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=e.delimiter?e.delimiter:","}async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const t=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!t)throw new Error("Column names must be provided if there is no header line.");this.fullColumnNames&&t&&g(t.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+t.length.toString()+")."),this.fullColumnNames||(this.fullColumnNames=t);const e=this.fullColumnNames.reduce((r,i)=>(r[i]=r[i]+1||1,r),{}),s=Object.keys(e).filter(r=>e[r]>1);if(g(s.length===0,()=>"Duplicate column names found: "+s.toString()),this.columnConfigs){for(const r of Object.keys(this.columnConfigs))if(this.fullColumnNames.indexOf(r)===-1)throw new Error('The key "'+r+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const e=await(await this.base.iterator()).next();if(e.done)throw new Error("No data was found for CSV parsing.");const s=e.value;return this.parseRow(s,!1)}else return null}async iterator(){this.columnNamesValidated||await this.setColumnNames();let t=await this.base.iterator();return this.hasHeader&&(t=t.skip(1)),t.map(e=>this.makeDataElement(e))}makeDataElement(t){const e=this.parseRow(t),s={},r={};for(let i=0;i<this.fullColumnNames.length;i++){const o=this.fullColumnNames[i],a=this.columnConfigs?this.columnConfigs[o]:null;if(!(this.configuredColumnsOnly&&!a)){const l=e[i];let u=null;if(l==="")if(a&&a.default!==void 0)u=a.default;else{if(a&&(a.required||a.isLabel))throw new Error(`Required column ${o} is empty in this line: ${t}`);u=void 0}else{const c=Number(l);if(isNaN(c))a&&a.dtype==="bool"?u=this.getBoolean(l):u=l;else if(!a||!a.dtype)u=c;else switch(a.dtype){case"float32":u=c;break;case"int32":u=Math.floor(c);break;case"bool":u=this.getBoolean(l);break;default:u=c}}a&&a.isLabel?r[o]=u:s[o]=u}}return Object.keys(r).length===0?s:{xs:s,ys:r}}getBoolean(t){return t==="1"||t.toLowerCase()==="true"?1:0}parseRow(t,e=!0){const s=[];let r=0;const i=t.length;let o=Ms;for(let a=0;a<i;a++)switch(o){case Ms:switch(t.charAt(a)){case Vr:r=a+1,o=Hr;break;case this.delimiter:if(r=a+1,this.delimiter===" "&&this.delimWhitespace)break;s.push(""),o=Ms;break;default:o=yh,r=a;break}break;case yh:t.charAt(a)===this.delimiter&&(s.push(t.substring(r,a)),o=Ms,r=a+1);break;case Hr:t.charAt(a)===Vr&&(o=Lo);break;case Lo:switch(t.charAt(a)){case this.delimiter:s.push(t.substring(r,a-1)),o=Ms,r=a+1;break;case Vr:o=Hr;break;default:o=wh;break}break;case wh:t.charAt(a)===Vr&&(o=Hr);break;default:}if(o===Lo?s.push(t.substring(r,i-1)):s.push(t.substring(r)),e&&s.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${s}`);return s}}/**
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
 */class vh extends Mt{constructor(t){super(),this.microphoneConfig=t,this.isClosed=!1,this.fftSize=t.fftSize||1024;const e=Math.log2(this.fftSize);if(this.fftSize<0||e<4||e>14||!Number.isInteger(e))throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=t.numFramesPerSpectrogram||43,this.sampleRateHz=t.sampleRateHz,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.audioTrackConstraints=t.audioTrackConstraints,this.smoothingTimeConstant=t.smoothingTimeConstant||0,this.includeSpectrogram=t.includeSpectrogram!==!1,this.includeWaveform=t.includeWaveform===!0,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(t={}){if(!q().get("IS_BROWSER"))throw new Error("microphone API is only supported in browser environment.");const e=new vh(t);return await e.start(),e}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:this.audioTrackConstraints==null?!0:this.audioTrackConstraints,video:!1})}catch(s){throw new Error(`Error thrown while initializing video stream: ${s.message}`)}if(!this.stream)throw new Error("Could not obtain audio from microphone.");const t=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new t,!this.sampleRateHz)this.sampleRateHz=this.audioContext.sampleRate;else if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);const e=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize*2,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,e.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let t,e;const s=await this.getAudioData();if(this.includeSpectrogram){const r=this.flattenQueue(s.freqDataQueue);t=this.getTensorFromAudioDataArray(r,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const r=this.flattenQueue(s.timeDataQueue);e=this.getTensorFromAudioDataArray(r,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:t,waveform:e},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const t=[],e=[];let s=0;return new Promise(r=>{const i=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&r({freqDataQueue:t,timeDataQueue:e}),t.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),e.push(this.timeData.slice())),++s===this.numFrames&&(clearInterval(i),r({freqDataQueue:t,timeDataQueue:e}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(t){const e=t[0].length,s=new Float32Array(t.length*e);return t.forEach((r,i)=>s.set(r,i*e)),s}getTensorFromAudioDataArray(t,e){const s=new Float32Array(Lt(e));return s.set(t,s.length-t.length),gn(s,e)}}/**
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
 */class kh extends Mt{constructor(t,e){if(super(),this.webcamVideoElement=t,this.webcamConfig=e,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=_t([0],"int32"),this.webcamConfig.centerCrop){const s=this.webcamConfig.resizeWidth*1/this.webcamVideoElement.width,r=this.webcamConfig.resizeHeight*1/this.webcamVideoElement.height,i=(1-s)/2,o=(1-r)/2,a=i+s,l=r+o;this.cropBox=Nn([o,i,l,a],[1,4])}else this.cropBox=Nn([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(t,e={}){if(!q().get("IS_BROWSER"))throw new Error("tf.data.webcam is only supported in browser environment.");if(!t){if(t=document.createElement("video"),!e.resizeWidth||!e.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");t.width=e.resizeWidth,t.height=e.resizeHeight}const s=new kh(t,e);return await s.start(),s}async start(){this.webcamConfig.facingMode&&g(this.webcamConfig.facingMode==="user"||this.webcamConfig.facingMode==="environment",()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(t){throw t.message=`Error thrown while initializing video stream: ${t.message}`,t}if(!this.stream)throw new Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(t){console.log(t),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(t=>{this.webcamVideoElement.onloadedmetadata=()=>{t()}})}async next(){if(this.isClosed)return{value:null,done:!0};let t;try{t=rb(this.webcamVideoElement)}catch(e){throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(e)}`)}if(this.resize)try{return{value:this.cropAndResizeFrame(t),done:!1}}catch(e){throw new Error(`Error thrown cropping the video: ${e.message}`)}finally{t.dispose()}else return{value:t,done:!1}}needToResize(){return!!(this.webcamConfig.resizeWidth&&this.webcamConfig.resizeHeight&&(this.webcamVideoElement.width!==this.webcamConfig.resizeWidth||this.webcamVideoElement.height!==this.webcamConfig.resizeHeight))}cropAndResizeFrame(t){return N(()=>{const e=ne(R(t,"float32"),0);let s;s=Cs.cropAndResize(e,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear");const r=s.shape;return T(s,r.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(e=>e.stop());try{this.webcamVideoElement.srcObject=null}catch(e){console.log(e),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error("Can not convert infinite video stream to array.")}}/**
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
 */class xh{}/**
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
 */class Sh extends Mt{split(t){return new i1(this,t)}}class i1 extends Sh{constructor(t,e){super(),this.upstream=t,this.impl=new o1(t,e)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class o1 extends Fo{constructor(t,e){super(),this.upstream=t,this.separator=e,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const t=await this.upstream.next();if(t.done)return this.carryover===""?!1:(this.outputQueue.push(this.carryover),this.carryover="",!0);const e=t.value.split(this.separator);e[0]=this.carryover+e[0];for(const s of e.slice(0,-1))this.outputQueue.push(s);return this.carryover=e[e.length-1],!0}}var a1=Tt(1048).Buffer;/**
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
 */class l1 extends Mt{decodeUTF8(){return new u1(this)}}class u1 extends Sh{constructor(t){super(),this.upstream=t,this.impl=new c1(t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class c1 extends Fo{constructor(t){if(super(),this.upstream=t,q().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{const{StringDecoder:e}=Tt(99201);this.decoder=new e("utf8")}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){const t=await this.upstream.next();let e;if(t.done)return!1;e=t.value;let s;return q().get("IS_BROWSER")?s=this.decoder.decode(e,{stream:!0}):s=this.decoder.write(a1.from(e.buffer)),this.outputQueue.push(s),!0}}/**
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
 */class Eh extends l1{constructor(t,e={}){super(),this.file=t,this.options=e,g(t instanceof Uint8Array||(q().get("IS_BROWSER")?t instanceof File||t instanceof Blob:!1),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=e.offset||0,this.chunkSize=e.chunkSize||1024*1024}summary(){return`FileChunks ${this.file}`}async next(){return this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size)?{value:null,done:!0}:{value:await new Promise((e,s)=>{const r=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)e(new Uint8Array(this.file.slice(this.offset,r)));else{const i=new FileReader;i.onload=a=>{let l=i.result;if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),!(l instanceof Uint8Array))return s(new TypeError("FileReader returned unknown type."));e(l)},i.onabort=a=>s(new Error("Aborted")),i.onerror=a=>s(new Error(a.type));const o=this.file.slice(this.offset,r);i.readAsArrayBuffer(o)}this.offset=r}),done:!1}}}/**
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
 */async function h1(n,t={},e){let s,r;typeof n=="string"?s=n:(s=n.url,r=d1(n));const i=await(e||Wm)(s,r);if(i.ok){const o=new Uint8Array(await i.arrayBuffer());return new Eh(o,t)}else throw new Error(i.statusText)}const d1=n=>({method:n.method,headers:n.headers,body:n.body,mode:n.mode,credentials:n.credentials,cache:n.cache,redirect:n.redirect,referrer:n.referrer,integrity:n.integrity});/**
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
 */function Ih(n){return typeof n=="string"&&n.slice(0,7)==="file://"}/**
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
 */class f1 extends xh{constructor(t,e={}){super(),this.input=t,this.options=e}async iterator(){if(Ih(this.input)&&q().get("IS_NODE")){const t=Tt(86579);this.input=t.readFileSync(this.input.slice(7))}return new Eh(this.input,this.options)}}/**
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
 */class KN extends xh{constructor(t,e={}){super(),this.url=t,this.fileOptions=e}async iterator(){return Ih(this.url)?new f1(this.url,this.fileOptions).iterator():h1(this.url,this.fileOptions)}}var Ah,p1,Nh,m1,g1,b1;/**
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
 */function JN(n,t={}){return new p1(new b1(n),t)}function YN(n){const t=Nh(n);return Ah(async()=>t)}function ZN(n){return Ah(async()=>{const t=await n();return Nh(()=>t.next())})}async function XN(n,t){return g1.create(n,t)}async function QN(n){return m1.create(n)}/**
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
 */class $e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,$e.prototype)}}class oe extends Error{constructor(t){super(t),Object.setPrototypeOf(this,oe.prototype)}}class x extends Error{constructor(t){super(t),Object.setPrototypeOf(this,x.prototype)}}class H extends Error{constructor(t){super(t),Object.setPrototypeOf(this,H.prototype)}}class Ro extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Ro.prototype)}}class Th extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Th.prototype)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Dh{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}var Ch;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Dn(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Zt(n,t){if(!n)throw new Ro(t)}function $h(n,t){let e=0;for(const s of n)s===t&&e++;return e}function Ht(n){return n.length===1?n[0]:n}function at(n){return Array.isArray(n)?n:[n]}function tT(n){const t=at(n);let e="";for(const s of t){if(s.id==null)throw new Ch(`Object ${s} passed to objectListUid without an id`);e!==""&&(e=e+", "),e=`${e}${Math.abs(s.id)}`}return e}function Pe(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function Cn(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let ae={};function Oo(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function Bo(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>Bo(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:Bo(s))}}}function zs(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const i=n;let o;if(i in e)o=e[i];else if(i in ae)o=ae[i];else if(o=t[i],o==null)throw new x(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return o}else{const i=n;if(i.className==null||i.config==null)throw new x(`${s}: Improper config format: ${JSON.stringify(i)}.
'className' and 'config' must set.`);const o=i.className;let a,l;if(o in e?[a,l]=e[o]:o in ae?[a,l]=ae.className:o in t&&([a,l]=t[o]),a==null)throw new x(`Unknown ${s}: ${o}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const u={};for(const f of Object.keys(ae))u[f]=ae[f];for(const f of Object.keys(e))u[f]=e[f];const c=i.config;c.customObjects=u;const h=Object.assign({},ae);for(const f of Object.keys(e))ae[f]=e[f];Bo(i.config);const d=l(a,i.config,e,r);return ae=Object.assign({},h),d}else{const u=Object.assign({},ae);for(const h of Object.keys(e))ae[h]=e[h];const c=new a(i.config);return ae=Object.assign({},u),c}}}function y1(n,t){return n<t?-1:n>t?1:0}function jr(n,t){return-1*y1(n,t)}function eT(n){if(n==="float32")return"float32";throw new Ch(`Invalid dtype: ${n}`)}function nT(n,t){if(n==null||t==null)return n===t;if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function tn(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function w1(n){if(n==null)throw new x(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function $n(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new x(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function Po(n,t,e=0,s=1/0){return Zt(e>=0),Zt(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function zt(n,t){Array.isArray(n)?(g(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>zt(e,`element ${s+1} of ${t}`))):g(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${_h(n)}.`)}function _h(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>_h(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function v1(n,t,e){let s=e!=null?e():Qt(),r;return(...o)=>{const a=e!=null?e():Qt();return a-s<t||(s=a,r=n(...o)),r}}function Mh(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}function sT(...n){Zt(n.length>0,"arrayOfValues is empty");for(const t of n)Zt(Array.isArray(t),"one of the values is not an array"),Zt(t.length>0,"one of the values is empty");return n.reduce((t,e)=>t.length===0?e.map(s=>[s]):e.map(s=>t.map(r=>[...r,s])).reduce((s,r)=>s.concat(r),[]),[])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let k1=0;function zh(){return k1++}const qr={};function Kr(n=""){return n in qr||(qr[n]=0),qr[n]+=1,n+qr[n].toString()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const x1=["channelsFirst","channelsLast"],S1=["nearest","bilinear"],E1=["valid","same","causal"],I1=["max","avg"],A1=["sum","mul","concat","ave"],rT=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const as=new Map;function kt(n){$n(x1,"DataFormat",n)}function N1(n){$n(S1,"InterpolationFormat",n)}function Xt(n){$n(E1,"PaddingMode",n)}function Fh(n){$n(I1,"PoolMode",n)}const Fs=[],Lh="/";function _n(n,t){Fs.push(n);try{const e=t();return Fs.pop(),e}catch(e){throw Fs.pop(),e}}function T1(){return Fs.length===0?"":Fs.join(Lh)+Lh}function Rh(n){if(!Bh(n))throw new Error("Not a valid tensor name: '"+n+"'");return T1()+n}function Oh(n){if(!Bh(n))throw new Error("Not a valid tensor name: '"+n+"'");as.has(n)||as.set(n,0);const t=as.get(n);if(as.set(n,as.get(n)+1),t>0){const e=`${n}_${t}`;return as.set(e,1),e}else return n}const D1=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Bh(n){return!!n.match(D1)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function C1(n){return n===parseInt(n.toString(),10)}function en(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function ls(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function nn(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function $1(n){let t=0;for(let e=0;e<n.length;e++){const s=n[e];t+=s}return t}function _1(n){return $1(n)/n.length}function iT(n){const t=_1(n),e=n.map(r=>r-t);let s=0;for(let r=0;r<e.length;r++){const i=e[r];s+=i*i}return s/n.length}function oT(n){const t=n.slice().sort((r,i)=>r-i),e=Math.floor((t.length-1)/2),s=Math.ceil((t.length-1)/2);return e===s?t[e]:(t[e]+t[s])/2}function we(n,t){if(t<n)throw new x(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let Jr;function Et(){return Jr==null&&(Jr=uo().epsilon()),Jr}function aT(n){Jr=n}function ve(){return"channelsLast"}var sn,Uo,Ph,M1,Uh,z1,F1;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let Wh="webgl";function lT(n){sn.setBackend(n),Wh=n}function uT(){return Wh}function cT(){return!1}function hT(n){const t=n.shape;return t.length>0?t.reduce((e,s)=>e*s):1}function Ls(n,t){return R(n,t)}function Rs(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),T(n,e)}function L1(n,t){return N(()=>{if(n.shape.length!==2)throw new x(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Rs(n,1);return Vo(e,[1,t,1])})}function R1(n){const t=[en(n.shape)];return T(n,t)}function O1(n){if(n.rank<=1)throw new x(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],en(n.shape,1)];return T(n,t)}function Mn(n,t,e){return N(()=>{switch(n.rank){case 1:return xo(n,t,e);case 2:return Hc(n,[t,0],[e,n.shape[1]]);case 3:return So(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return $r(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return nt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return nt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new x(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Wo(n,t,e){return N(()=>{switch(n.rank){case 1:return xo(n,t,e);case 2:return Hc(n,[0,t],[n.shape[0],e]);case 3:return So(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return $r(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new x(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Yr(n,t,e,s){return N(()=>{switch(n.rank){case 1:return xo(n,t,e);case 2:switch(s){case 1:return Mn(n,t,e);case 2:return Wo(n,t,e);default:throw new x(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return Mn(n,t,e);case 2:return So(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Wo(n,t,e);default:throw new x(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return Mn(n,t,e);case 2:return $r(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return $r(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Wo(n,t,e);default:throw new x(`The axis is not within the rank of the tensor ${s}`)}default:throw new x(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Go(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Pt(n,t)}function Gh(n,t){switch(n.rank){case 1:return Lb([n,t]);case 2:return Ob([n,t],0);case 3:return Pb([n,t],0);case 4:return Wb([n,t],0);default:throw new x(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Vo(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new x(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return De(n,t)}function Zr(n,t=0,e=1,s,r){return Yy(n,t,e,s,r)}function _e(n,t,e,s){if(n.rank<2||t.rank<2)throw new H(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],i=t.shape.slice(-2)[0];if(r!==i)throw new H(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Qc({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Ho(n.rank,s,ve()):null,activation:e});{const r=n.shape.slice(),i=r.pop();n=T(n,[-1,i]);const o=t.shape.slice(),a=o.pop(),l=o.pop(),u=[...o,a],c=Array.from({length:t.rank},(p,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=T(Y(t,c),[l,-1]);const h=[...r,...u];return T(Qc({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Ho(n.rank,s,ve()):null,activation:e}),h)}}function dT(n){return Uo(()=>{const t=Ph(n),e=M1(n);return Uh(sn.equal(n,t),t,Uh(sn.greater(n,Ph(n)),e,sn.mul(-1,e)))})}function fT(n,t){return Uo(()=>{if(n.rank!==1)throw new Error("Only 1D one-hot tensors are supported in the deeplearn backend, at present.");return n=sn.cast(n,"int32"),sn.cast(sn.oneHot(n,t),"float32")})}function Vh(n,t,e){return N(()=>(Array.isArray(t)?t=_t(t,"int32"):t=R(t,"int32"),Xn(n,t,e)))}function Os(n){return v(n,n)}function pT(n,t){return Uo(()=>{if(typeof t=="number"&&(t=z1(Math.round(t),"int32")),t.dtype!=="int32")throw new F1(`Non-int32 dtype (${t.dtype}) is not supported by pow() yet`);return sn.pow(n,t)})}function Ho(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new x(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?T(t,[1,s[0],1,1,1]):T(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?T(t,[1,1,1,1,s[0]]):T(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?T(t,[1,s[0],1,1]):T(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?T(t,[1,1,1,s[0]]):T(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?T(t,[1,s[0],1]):T(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?T(t,[1,1,s[0]]):T(t,[1].concat(s))}else if(n<3)return t;throw new x(`Unsupported input rank by biasAdd: ${t.rank}`)}function ke(n,t,e){return N(()=>(e==null&&(e=ve()),kt(e),M(n,Ho(n.rank,t,e))))}function B1(n,t=1){if(t!==1)throw new H(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return go(n)}function P1(n){return N(()=>U(n,M(Ft(n),1)))}function Hh(n,t,e,s){return N(()=>Dw(n,t,e,s))}function U1(n){return N(()=>{const t=M(.5,v(.2,n));return ee(t,0,1)})}function Bs(n,t,e=!1){return e?n():t()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const W1=["fanIn","fanOut","fanAvg"],G1=["normal","uniform","truncatedNormal"],mT=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function V1(n){$n(W1,"FanMode",n)}function H1(n){$n(G1,"Distribution",n)}class le extends qn{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class jh extends le{apply(t,e){return $t(t,e)}}jh.className="Zeros",$(jh);class jo extends le{apply(t,e){return Ye(t,e)}}jo.className="Ones",$(jo);class qh extends le{constructor(t){if(super(),typeof t!="object")throw new x(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new x(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return N(()=>v(V(this.value),Ye(t,e)))}getConfig(){return{value:this.value}}}qh.className="Constant",$(qh);class Kh extends le{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Dr(t,this.minval,this.maxval,e)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Kh.className="RandomUniform",$(Kh);class Jh extends le{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new H(`randomNormal does not support dType ${e}.`);return Zr(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Jh.className="RandomNormal",$(Jh);class Yh extends le{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new H(`truncatedNormal does not support dType ${e}.`);return Kc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Yh.className="TruncatedNormal",$(Yh);class Zh extends le{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return N(()=>{if(t.length!==2||t[0]!==t[1])throw new x("Identity matrix initializer can only be used for 2D square matrices.");return v(this.gain,Rc(t[0]))})}getConfig(){return{gain:this.gain}}}Zh.className="Identity",$(Zh);function j1(n,t="channelsLast"){let e,s;if(kt(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=en(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=en(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=en(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class Jt extends le{constructor(t){if(super(),t.scale<0)throw new x(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,V1(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,H1(this.distribution),this.seed=t.seed}apply(t,e){const s=j1(t),r=s[0],i=s[1];let o=this.scale;if(this.mode==="fanIn"?o/=Math.max(1,r):this.mode==="fanOut"?o/=Math.max(1,i):o/=Math.max(1,(r+i)/2),this.distribution==="normal"){const a=Math.sqrt(o);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new H(`${this.getClassName()} does not support dType ${e}.`);return Kc(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*o);return Dr(t,-a,a,e)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}Jt.className="VarianceScaling",$(Jt);class qo extends Jt{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}qo.className="GlorotUniform",$(qo);class Ko extends Jt{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}Ko.className="GlorotNormal",$(Ko);class Jo extends Jt{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}Jo.className="HeNormal",$(Jo);class Yo extends Jt{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}Yo.className="HeUniform",$(Yo);class Zo extends Jt{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}Zo.className="LeCunNormal",$(Zo);class Xo extends Jt{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Jt.className}}Xo.className="LeCunNormal",$(Xo);class Xh extends le{constructor(t){if(super(),this.DEFAULT_GAIN=1,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed,this.seed!=null)throw new H("Random seed is not implemented for Orthogonal Initializer yet.")}apply(t,e){return N(()=>{if(t.length<2)throw new H("Shape must be at least 2D.");t[0]*t[1]>2e3&&console.warn(`Orthogonal initializer is being called on a matrix with more than 2000 (${t[0]*t[1]}) elements: Slowness may result.`);const s=t[0]>t[1]?[t[1],t[0]]:t,r=Zr(s,0,1,"float32");let i=Mv.gramSchmidt(r);return t[0]>t[1]&&(i=Y(i)),v(this.gain,i)})}getConfig(){return{gain:this.gain,seed:this.seed}}}Xh.className="Orthogonal",$(Xh);const Qh={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function td(n,t={}){return zs(n,te.getMap().classNameMap,t,"initializer")}function bt(n){return Oo(n)}function pt(n){if(typeof n=="string"){const t=n in Qh?Qh[n]:n;if(t==="GlorotNormal")return new Ko;if(t==="GlorotUniform")return new qo;if(t==="HeNormal")return new Jo;if(t==="HeUniform")return new Yo;if(t==="LeCunNormal")return new Zo;if(t==="LeCunUniform")return new Xo;{const e={};return e.className=t,e.config={},td(e)}}else return n instanceof le?n:td(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Qo(n){return Array.isArray(n)&&Array.isArray(n[0])}function Xr(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function j(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new x(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function st(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new x(`Expected exactly 1 Shape; got ${n.length}`)}else return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Qr(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}var Me,q1,ed;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const nd="Variable";class ze{constructor(t,e="float32",s=nd,r=!0,i=null){this.dtype=e??"float32",this.shape=t.shape,this.id=zh(),s=s??nd,this.originalName=Rh(s),this.name=Oh(this.originalName),this.trainable_=r,this.constraint=i,this.val=vw(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),K1(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function K1(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function gT(n,t,e,s){return new ze(n,t,e,!0,s)}function bT(n,t,e){return new ze(Me.zeros(n),t,e)}function yT(n,t,e){return new ze(Me.zerosLike(n),t,e)}function wT(n,t,e){const s=Me.ones(n);return new ze(s,t,e)}function vT(n,t,e){const s=Me.onesLike(n);return new ze(s,t,e)}function kT(n,t,e){return new ze(Me.eye(n),t,e)}function xT(n,t,e,s,r,i="randomUniform"){return new ze(Me.randomUniform(n,t,e,s),s,i)}function ST(n,t=0,e=1,s,r,i="truncatedNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new ed(`randomNormal does not support dType ${s}.`);return new ze(Me.truncatedNormal(n,t,e,s,r),s,i)}function ET(n,t=0,e=1,s,r,i="randomNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new ed(`randomNormalVariable does not support dType ${s}.`);return new ze(Me.randomNormal(n,t,e,s,r),s,i)}function IT(n,t){return n.write(t)}function AT(n,t){return n.write(Me.add(n.read(),t))}function NT(n,t){return n.write(Me.sub(n.read(),t))}function ta(n){return n.map(t=>t.read())}function ea(n){n.forEach(t=>{t[0].write(t[1])})}function TT(n,t){const e=t.map(r=>r.read()),s=q1(n,e);return t.map(r=>s.grads[r.name])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class It{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class Fe{constructor(t,e,s,r,i,o,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=i,this.outputTensorIndex=a,this.id=zh(),o!=null&&(this.originalName=Rh(o),this.name=Oh(this.originalName)),this.rank=e.length}}let J1=0;class ti{constructor(t,e){this.callArgs=e,this.id=J1++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let Y1=0;class J extends qn{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=Y1++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=Pe(s)+"_"+Kr(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let i=null;t.batchSize!=null&&(i=t.batchSize),s=[i].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new oe(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new x(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return Ht(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return Ht(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new $e(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new $e(`Layer ${this.name} is not connected, no input to return.`);return Ht(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new $e(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new $e(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Ht(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){if(t=at(t),this.inputSpec==null||this.inputSpec.length===0)return;const e=at(this.inputSpec);if(t.length!==e.length)throw new x(`Layer ${this.name} expects ${e.length} inputs, but it received ${t.length} input tensors. Input received: ${t}`);for(let s=0;s<t.length;s++){const r=t[s],i=e[s];if(i==null)continue;const o=r.rank;if(i.ndim!=null&&o!==i.ndim)throw new x(`Input ${s} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${o}`);if(i.maxNDim!=null&&o>i.maxNDim)throw new x(`Input ${s} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${o}`);if(i.minNDim!=null&&o<i.minNDim)throw new x(`Input ${s} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${o}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new x(`Input ${s} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const a=r.shape;for(const l in i.axes){const u=Number(l),c=i.axes[l],h=u>=0?a[u]:a[a.length+u];if(c!=null&&[c,null].indexOf(h)===-1)throw new x(`Input ${s} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${c} but got shape ${a}.`)}}if(i.shape!=null)for(let a=0;a<i.shape.length;++a){const l=i.shape[a],u=r.shape[a];if(l!=null&&u!=null&&l!==u)throw new x(`Input ${s} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=at(t);let r=!0;for(const o of s)if(!(o instanceof Fe)){r=!1;break}let i=!0;for(const o of s)if(o instanceof Fe){i=!1;break}if(r===i)throw new x("Arguments to apply() must be all SymbolicTensors or all Tensors");return _n(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const o=[];for(const a of at(t))o.push(a.shape);this.build(Ht(o)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(t),i){let o=this.call(t,e);const a=at(o),l=[];for(let u of a)s.indexOf(u)!==-1&&(u=u.clone()),l.push(u);if(o=Ht(l),this.activityRegularizer!=null)throw new H("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return o}else{const o=Z1(t),a=this.computeOutputShape(o);let l;const u=X1(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?o[0]:o),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((c,h)=>new Fe(u,c,this,at(t),e,this.name,h)):l=new Fe(u,a,this,at(t),e,this.name),this.addInboundNode(t,l,null,null,o,a,e),this._refCount++,this.activityRegularizer!=null)throw new H("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new $e(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new $e(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new oe(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Qr(this.weights)}build(t){this.built=!0}getWeights(t=!1){return ta(t?this.trainableWeights:this.weights)}setWeights(t){N(()=>{const e=this.weights;if(e.length!==t.length)throw new x(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=ta(e);for(let i=0;i<r.length;++i){const o=r[i],a=e[i],l=t[i];if(!Wt(o.shape,l.shape))throw new x(`Layer weight shape ${o.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}ea(s)})}addWeight(t,e,s,r,i,o,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new x(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():pt("zeros"));const u=r.apply(e,s),c=new ze(u,s,t,o,a);return u.dispose(),i!=null&&this.addLoss(()=>i.apply(c.read())),o==null&&(o=!0),o?this._trainableWeights.push(c):this._nonTrainableWeights.push(c),c}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=at(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}addInboundNode(t,e,s,r,i,o,a=null){const l=at(t);e=at(e),s=at(s),r=at(r),i=Xr(i),o=Xr(o);const u=[],c=[],h=[];for(const d of l)u.push(d.sourceLayer),c.push(d.nodeIndex),h.push(d.tensorIndex);new ti({outboundLayer:this,inboundLayers:u,nodeIndices:c,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:i,outputShapes:o},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function Z1(n){n=at(n);const t=[];for(const e of n)t.push(e.shape);return Ht(t)}function X1(n){return"float32"}function sd(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let i=0;i<s.inboundLayers.length;i++){const o=s.inputTensors[i],a=s.inboundLayers[i],l=s.nodeIndices[i],u=sd(o,a,l);for(const c of u)r.indexOf(c)===-1&&r.push(c)}return r}}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class us extends J{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Kr("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new x("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new x("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new x("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new Fe(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new ti({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new x(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}us.className="InputLayer",$(us);function rd(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new x("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new us({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Q1(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return R(t,n.dtype)}catch{throw new x(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class rn{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof rn)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=Q1(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new x(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof Fe){if(this.id2Value[t.id]==null)throw new x(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new x(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof Fe){if(this.id2Value[t.id]==null)throw new x(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new x(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&G(this.id2Mask)}}const ei=new Dh,ni=new Dh;function tk(n){ei?.setMaxEntries(n),ni?.setMaxEntries(n)}function Ps(n,t,e,s){const r=e==null?!1:e.training,i=Array.isArray(n),o=i?n:[n],a=o.map(p=>p.name),l=[],u=t.names();for(const p of a)u.indexOf(p)!==-1?l.push(t.getValue(p)):l.push(null);s!=null&&(s.maxNumTensors=-1/0,s.minNumTensors=1/0);const c=a.join(",")+"|"+t.names().sort().join(",");let h=ei.get(c),d;if(h==null){const p=ek(o,t);h=p.sorted,d=p.recipientCounts,ei.put(c,h),ni.put(c,d)}d={},r||Object.assign(d,ni.get(c));const f=new rn(t);for(let p=0;p<h.length;++p){if(s!=null){const _=lo().numTensors;_>s.maxNumTensors&&(s.maxNumTensors=_),_<s.minNumTensors&&(s.minNumTensors=_)}const m=h[p],b=m.sourceLayer;if(b instanceof us)continue;const w=[],S=[],k=[];let E=!1;for(const _ of m.inputs){const L=f.getValue(_),P=f.getMask(_);w.push(L),S.push(P),P!=null&&(E=!0),r||(d[_.name]--,d[_.name]===0&&!t.hasKey(_)&&a.indexOf(_.name)===-1&&!L.isDisposed&&_.sourceLayer.stateful!==!0&&k.push(L))}E&&(e=e||{},e.mask=S[0]);const D=at(b.apply(w,e));let C=null;b.supportsMasking&&(C=b.computeMask(w,S));const z=sk(m),F=Array.isArray(z)?z:[z];for(let _=0;_<F.length;++_){f.hasKey(F[_])||f.add(F[_],D[_],Array.isArray(C)?C[0]:C);const L=a.indexOf(F[_].name);L!==-1&&(l[L]=D[_])}r||G(k)}return f.disposeMasks(),i?l:l[0]}function ek(n,t){g(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=id(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const i of n){const{sorted:o,recipientMap:a}=id(i,t);for(const l of o)r.has(l.name)||(e.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(u=>s[l].add(u))}}return{sorted:e,recipientCounts:nk(s)}}function nk(n){const t={};for(const e in n)t[e]=n[e].size;return t}function id(n,t){const e=new Set,s=[],r={};for(const a of t.names())e.add(a);const i=[],o=[];for(i.push(n);i.length>0;){const a=i[i.length-1];if(e.has(a.name)){i.pop();continue}const l=o[o.length-1]===i.length-1;if(a.inputs.length===0||l)i.pop(),s.push(a),e.add(a.name),l&&o.pop();else{o.push(i.length-1);for(const u of a.inputs)r[u.name]==null&&(r[u.name]=new Set),r[u.name].add(a.name),!e.has(u.name)&&i.push(u)}}return{sorted:s,recipientMap:r}}function sk(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}/**
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
 */q().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,tk);/**
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
 */const od={kernelName:Tl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,Mr(R(e,"float32"),-1))}}};/**
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
 */const rk={kernelName:pp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ut(R(e,"float32")),r=Ut(O(V(1),s));return St(U(n,r))}}}};/**
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
 */const ik={kernelName:mp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ut(O(ut(R(e,"float32")),1));return U(n,s)}}}};/**
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
 */const ok={kernelName:Li,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{let a=n;const l=Ct(e.shape,r);return l.length>0&&(a=B(a,l)),T(a,e.shape)},b:()=>{let a=n;const l=Ct(s.shape,r);return l.length>0&&(a=B(a,l)),T(a,s.shape)}}}};/**
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
 */const ak={kernelName:gp,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,r)=>{e[r]=()=>n.clone()}),e}};/**
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
 */const lk={kernelName:Dl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Q(e)}}};/**
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
 */const uk={kernelName:wp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Q(e)}}};/**
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
 */const ck={kernelName:vp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,Ut(O(V(1),ut(R(e,"float32")))))}}};/**
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
 */const hk={kernelName:kp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ut(M(V(1),ut(R(e,"float32"))));return U(n,s)}}}};/**
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
 */const dk={kernelName:Ep,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{const a=M(ut(e),ut(s));let l=v(n,U(s,a));const u=Ct(e.shape,r);return u.length>0&&(l=B(l,u)),T(l,e.shape)},b:()=>{const a=M(ut(e),ut(s));let l=St(v(n,U(e,a)));const u=Ct(s.shape,r);return u.length>0&&(l=B(l,u)),T(l,s.shape)}}}};/**
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
 */const fk={kernelName:xp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,M(ut(R(e,"float32")),1))}}};/**
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
 */const pk={kernelName:Sp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,O(V(1),ut(R(e,"float32"))))}}};/**
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
 */function mk(n,t,e,s,r,i){const o=y(n,"dy","avgPool3dGrad"),a=y(t,"input","avgPool3dGrad");let l=o,u=a,c=!1;a.rank===4&&(c=!0,l=T(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),u=T(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),g(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),g(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),Gt("avgPool3dGrad",r,i);const h={dy:l,input:u},d={filterSize:e,strides:s,pad:r,dimRoundingMode:i},f=I.runKernel(Ap,h,d);return c?T(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const gk=A({avgPool3dGrad_:mk});/**
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
 */const bk={kernelName:$l,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:i,pad:o,dimRoundingMode:a}=e;return{x:()=>gk(n,s,r,i,o,a)}}};/**
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
 */function yk(n,t,e,s,r){const i=y(n,"dy","avgPoolGrad"),o=y(t,"input","avgPoolGrad");g(o.rank===i.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${i.rank})`);let a=o,l=i,u=!1;o.rank===3&&(u=!0,a=T(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=T(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),g(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const c={dy:l,input:a},h={filterSize:e,strides:s,pad:r},d=I.runKernel(Ip,c,h);return u?T(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const wk=A({avgPoolGrad_:yk});/**
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
 */const vk={kernelName:Cl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:r,strides:i,pad:o}=e;return{x:()=>wk(n,s,r,i,o)}}};/**
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
 */const kk={kernelName:_l,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,r]=t,{transposeA:i,transposeB:o}=e;return!i&&!o?{a:()=>ot(n,r,!1,!0),b:()=>ot(s,n,!0,!1)}:!i&&o?{a:()=>ot(n,r,!1,!1),b:()=>ot(n,s,!0,!1)}:i&&!o?{a:()=>ot(r,n,!1,!0),b:()=>ot(s,n,!1,!1)}:{a:()=>ot(r,n,!0,!0),b:()=>ot(n,s,!0,!0)}}};/**
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
 */function xk(n,t,e){const s=y(n,"x","spaceToBatchND");g(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),g(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),g(s.shape.reduce((o,a,l)=>l>0&&l<=t.length?o&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:o,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},i={blockShape:t,paddings:e};return I.runKernel(zu,r,i)}const Sk=A({spaceToBatchND_:xk});/**
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
 */const Ek={kernelName:Ml,gradFunc:(n,t,e)=>{const{blockShape:s,crops:r}=e;return{x:()=>Sk(n,s,r)}}};/**
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
 */const Ik={kernelName:Tp,gradFunc:(n,t,e)=>{const s=e,r=s.inputShape,i=s.shape,o=Array.from(i);for(let l=r.length-1;l>=0;l--)if(r[l]===i[l])o[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${i}].`);const a=[];for(let l=0;l<o.length;l++)o[l]>1&&a.push(l);return{x:()=>B(n,a,!0)}}};/**
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
 */const Ak={kernelName:Ri,gradFunc:n=>({x:()=>n.clone()})};/**
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
 */const Nk={kernelName:Dp,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const Tk={kernelName:zl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:r,clipValueMax:i}=e;return{x:()=>re(Qn(As(s,r),Ts(s,i)),n,Q(n))}}};/**
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
 */const Dk={kernelName:Fl,inputsToSave:["x"],gradFunc:od.gradFunc};/**
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
 */const Ck={kernelName:Ll,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:r}=e,i=he(r,t[0].shape)[0],o=s.map(l=>l[i]);return se(n,o,i).map(l=>()=>l)}};/**
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
 */const $k={kernelName:Rl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{dilations:i,strides:o,pad:a,dataFormat:l}=e;return g(In(i),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`),{x:()=>po(s.shape,n,r,o,a,l),filter:()=>To(s,n,r.shape,o,a,l)}}};/**
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
 */const _k={kernelName:Ol,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,{strides:i,pad:o,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>Zn(n,r,i,o,a,1,l),filter:()=>To(n,s,r.shape,i,o,a,l)}}};/**
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
 */function Mk(n,t,e,s,r){let i=n;n.rank===4&&(i=T(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let o=t;o.rank===4&&(o=T(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),g(i.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${i.shape}.`),g(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),g(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),g(i.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${i.shape[4]}) must match input depth in filter (${e[3]}.`),g(o.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:i,dy:o},l={strides:s,pad:r,filterShape:e};return I.runKernel(_p,a,l)}const zk=A({conv3DBackpropFilter_:Mk});/**
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
 */const Fk={kernelName:Bl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:i}=e;g(In(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[o,a]=t;return{x:()=>Lc(o.shape,n,a,r,i),filter:()=>zk(o,n,a.shape,r,i)}}};/**
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
 */function Lk(n){const e={x:y(n,"x","sin","float32")};return I.runKernel(Tu,e)}const Rk=A({sin_:Lk});/**
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
 */const Ok={kernelName:Pl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(St(Rk(R(e,"float32"))),n)}}};/**
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
 */function Bk(n){const e={x:y(n,"x","sinh")};return I.runKernel(Du,e)}const Pk=A({sinh_:Bk});/**
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
 */const Uk={kernelName:Ul,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(Pk(R(e,"float32")),n)}}};/**
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
 */function Wk(n,t=0,e=!1,s=!1){const i={x:y(n,"x","cumsum")},o={axis:t,exclusive:e,reverse:s};return I.runKernel(Wl,i,o)}const Gk=A({cumsum_:Wk});/**
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
 */const Vk={kernelName:Wl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r,exclusive:i,reverse:o}=e;return{x:()=>{const a=Uc([r],s.rank);let l=Gk(n,r,i,!o);return a!=null&&(l=Y(l,a)),l}}}};/**
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
 */const Hk={kernelName:Gl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:r,pad:i,dimRoundingMode:o}=e,a=s??[1,1];g(In(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,u]=t;return g(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),g(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),g(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),g(Ke(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),Gt("depthwiseConv2d",i,o),{x:()=>Xc(l.shape,n,u,r,i,a,o),filter:()=>Zc(l,n,u.shape,r,i,a,o)}}};/**
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
 */const jk={kernelName:Op,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,r]=t,i={x:s,filter:r,dy:n},o={x:s,filter:r,dy:n};return{x:()=>I.runKernel(Bp,i,e),filter:()=>I.runKernel(Pp,o,e)}}};/**
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
 */const qk={kernelName:Hl,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>I.runKernel(Up,s)}}};/**
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
 */const Kk={kernelName:Wp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=v(me(St(ut(e))),2/Math.sqrt(Math.PI));return{x:()=>v(n,s)}}};/**
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
 */const Jk={kernelName:jl,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,e)}}};/**
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
 */const Yk={kernelName:ql,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>T(n,e.shape)}}};/**
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
 */const Zk={kernelName:Vp,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,me(e))}}};/**
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
 */const Xk={kernelName:Kl,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const Qk={kernelName:Jl,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{const a=U(n,R(s,"float32")),l=Ct(e.shape,r);return l.length>0?T(B(a,l),e.shape):a},b:()=>{let a=v(n,R(e,"float32"));const l=Ct(s.shape,r);l.length>0&&(a=T(B(a,l),s.shape));const u=ut(s);return St(U(a,R(u,"float32")))}}}};/**
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
 */function tx(n){const e={x:y(n,"x","rsqrt","float32")};return I.runKernel(Eu,e)}const ex=A({rsqrt_:tx});/**
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
 */const nx={kernelName:Yl,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[r,i,o,a]=t,l=a??V(1),u=Ct(i.shape,r.shape),c=[];if(i.rank===1){for(let E=0;E<r.shape.length-1;++E)c.push(r.shape[E]);c.push(1)}const h=O(r,i),d=v(n,l),f=ex(M(o,V(s))),p=v(v(v(f,f),f),V(-.5));return{x:()=>i.rank===1?T(v(v(n,De(T(f,[1,1,1,i.shape[0]]),c)),l),r.shape):T(v(v(n,f),l),r.shape),mean:()=>{let E=v(v(f,V(-1)),d);return i.rank===1&&(E=B(E,u)),T(E,i.shape)},variance:()=>{let E=v(v(p,h),d);return i.rank===1&&(E=B(E,u)),T(E,i.shape)},scale:()=>{const E=v(h,f);let D=v(n,E);return i.rank===1&&(D=B(D,u)),T(D,i.shape)},offset:()=>{let E=n;return i.rank===1&&(E=B(E,u)),T(E,i.shape)}}}};/**
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
 */function sx(n,t,e){const s=y(n,"x","unsortedSegmentSum"),r=y(t,"segmentIds","unsortedSegmentSum","int32");g(lr(e),()=>"numSegments must be of dtype int");const i={x:s,segmentIds:r},o={numSegments:e};return I.runKernel(Uu,i,o)}const rx=A({unsortedSegmentSum_:sx});/**
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
 */const ix={kernelName:Zl,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,r]=t,{axis:i}=e,o=he(i,s.shape)[0];return{x:()=>{const l=s.shape,u=r.size,c=l.slice(0,o),h=c.length,d=l.slice(i,l.length).slice(1),f=d.length,p=ad(0,h),m=ad(h+1,h+1+f),b=ld([c,[u],d]),w=T(n,b),S=T(r,[u]),k=ld([[h],p,m]),E=Y(w,k);let D=rx(E,S,s.shape[o]);const C=wo(k);return D=Y(D,C),D},indices:()=>r}}};function ad(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function ld(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}/**
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
 */const ox={kernelName:Xl,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>Q(e),b:()=>Q(s)}}};/**
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
 */const ax={kernelName:Oi,gradFunc:n=>({x:()=>R(n,"float32")})};/**
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
 */const lx={kernelName:Zp,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const ux={kernelName:Xp,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const cx={kernelName:Qp,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const hx={kernelName:Ql,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:r}=e,i=ge(s,0);return{x:()=>re(i,n,v(n,r))}}};/**
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
 */const dx={kernelName:eu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,M(e,1))}}};/**
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
 */const fx={kernelName:tu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,R(e,"float32"))}}};/**
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
 */const px={kernelName:rm,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;return{logits:()=>{const o=me(s);return O(n,v(B(n,r,!0),o))}}}};/**
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
 */function mx(n,t,e,s=5,r=1,i=1,o=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:r,alpha:i,beta:o};return I.runKernel(om,a,l)}const gx=A({localResponseNormalizationBackprop_:mx});/**
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
 */const bx={kernelName:im,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{depthRadius:i,bias:o,alpha:a,beta:l}=e;return{x:()=>gx(s,r,n,i,o,a,l)}}};/**
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
 */function ud(n,t,e,s){return t.rank<e.rank&&(t=T(t,ts(t.shape,s))),n.rank<e.rank&&(n=T(n,ts(n.shape,s))),{x:()=>v(n,R(Je(e,t),n.dtype))}}/**
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
 */const cd={kernelName:nu,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:r}=s,i=t[0],o=t[1],a=he(r,i.shape),l=ud(n,o,i,a);return{x:()=>l.x()}}};/**
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
 */function yx(n,t){let e=y(n,"a","less","string_or_numeric"),s=y(t,"b","less","string_or_numeric");[e,s]=xt(e,s),ft(e.shape,s.shape);const r={a:e,b:s};return I.runKernel(tm,r)}const wx=A({less_:yx});/**
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
 */const vx={kernelName:su,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>v(n,R(As(e,s),"float32")),b:()=>v(n,R(wx(e,s),"float32"))}}};/**
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
 */function kx(n,t,e,s,r,i,o){const a=y(n,"dy","maxPool3dGrad"),l=y(t,"input","maxPool3dGrad"),u=y(e,"output","maxPool3dGrad");let c=a,h=l,d=u,f=!1;l.rank===4&&(f=!0,c=T(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=T(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=T(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),g(c.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),g(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),g(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),Gt("maxPool3dGrad",i,o);const p={dy:c,input:h,output:d},m={filterSize:s,strides:r,pad:i,dimRoundingMode:o},b=I.runKernel(lm,p,m);return f?T(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const xx=A({maxPool3dGrad_:kx});/**
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
 */const Sx={kernelName:iu,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:i,strides:o,pad:a,dimRoundingMode:l}=e;return{x:()=>xx(n,s,r,i,o,a,l)}}};/**
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
 */function Ex(n,t,e,s,r,i,o){const a=y(n,"dy","maxPoolGrad"),l=y(t,"input","maxPoolGrad"),u=y(e,"output","maxPoolGrad");g(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),g(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),g(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Gt("maxPoolGrad",i,o);const c={dy:a,input:l,output:u},h={filterSize:s,strides:r,pad:i,dimRoundingMode:o};return I.runKernel(am,c,h)}const Ix=A({maxPoolGrad_:Ex});/**
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
 */const Ax={kernelName:ru,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,r]=t,{filterSize:i,strides:o,pad:a}=e;return{x:()=>Ix(n,s,r,i,o,a)}}};/**
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
 */const Nx={kernelName:ou,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e,i=he(r,s.shape),a=zy(s.shape,i)[1],l=Lt(a);return{x:()=>{const c=s.shape.slice();i.forEach(f=>{c[f]=1});const h=T(n,c);return U(v(h,Ye(s.shape,"float32")),l)}}}};/**
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
 */const Tx={kernelName:au,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:r}=s,[i,o]=t,a=he(r,i.shape),l=ud(n,o,i,a);return{x:()=>l.x()}}};/**
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
 */const Dx={kernelName:lu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>v(n,R(Ts(e,s),"float32")),b:()=>v(n,R(ge(e,s),"float32"))}}};/**
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
 */const Cx={kernelName:um,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,i=r.map(o=>o[0]);return{x:()=>nt(n,i,s.shape)}}};/**
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
 */const $x={kernelName:cm,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{const a=Ct(e.shape,r);return a.length>0?T(B(n,a),e.shape):n},b:()=>{const a=v(n,St(bo(U(e,s)))),l=Ct(s.shape,r);return l.length>0?T(B(a,l),s.shape):a}}}};/**
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
 */const _x={kernelName:uu,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{const a=v(n,R(s,"float32")),l=Ct(e.shape,r);return l.length>0?T(B(a,l),e.shape):a},b:()=>{const a=v(n,R(e,"float32")),l=Ct(s.shape,r);return l.length>0?T(B(a,l),s.shape):a}}}};/**
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
 */const Mx={kernelName:cu,gradFunc:n=>({x:()=>St(n)})};/**
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
 */const zx={kernelName:du,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>$t(e.shape,"float32")}}};/**
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
 */const Fx={kernelName:hu,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const Lx={kernelName:fu,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return ss(n,s).map(i=>()=>i)}};/**
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
 */const hd={kernelName:pu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:r}=e,i=r.map(o=>o[0]);return{x:()=>nt(n,i,s.shape)}}};/**
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
 */const Rx={kernelName:mu,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,r]=t,i=e,o=s,a=ft(i.shape,o.shape);return{a:()=>{const c=R(o,"float32");let h=v(n,v(c,Ds(i,O(c,V(1)))));const d=Ct(i.shape,a);return d.length>0&&(h=B(h,d)),T(h,i.shape)},b:()=>{const c=ge(i,0),h=re(c,be(i),Q(i));let d=v(n,v(r,h));const f=Ct(o.shape,a);return f.length>0&&(d=B(d,f)),T(d,o.shape)}}}};/**
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
 */const Ox={kernelName:gu,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,r=ge(e,0);return{x:()=>re(r,n,v(n,s)),alpha:()=>{let i=re(r,Q(n),v(n,e));const o=Ct(s.shape,n.shape);return o.length>0&&(i=B(i,o)),T(i,s.shape)}}}};/**
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
 */function Bx(n,t=0,e=!1,s=!1){const i={x:y(n,"x","cumprod")},o={axis:t,exclusive:e,reverse:s};return I.runKernel(zp,i,o)}const dd=A({cumprod_:Bx});/**
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
 */function Px(n,t,e){const s=n.shape.slice();s[e]=1;const r=T(t,s),i=dd(n,e,!0,!1),o=dd(n,e,!0,!0),a=v(i,o);return v(r,a)}function Ux(n,t,e){const s=n.shape.length,r=s-e.length,i=Uc(e,s);let o=n;i!=null&&(o=Y(n,i));const a=o.shape.slice(),u=a.splice(s-e.length,e.length).reduce((d,f)=>d*f,1);a.push(u);const c=o.reshape(a);let h=Px(c,t,r);if(h=h.reshape(o.shape),i!=null){const d=wo(i);h=Y(h,d)}return h}const Wx={kernelName:mm,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:r}=e;let i=[];return r==null?i=s.shape.map((o,a)=>a):typeof r=="number"?i=[r]:i=r,{x:()=>Ux(s,n,i)}}};/**
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
 */const Gx={kernelName:Vl,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{const a=U(n,R(s,"float32")),l=Ct(e.shape,r);return l.length>0?T(B(a,l),e.shape):a},b:()=>{let a=v(n,R(e,"float32"));const l=Ct(s.shape,r);l.length>0&&(a=T(B(a,l),s.shape));const u=ut(s);return St(U(a,R(u,"float32")))}}}};/**
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
 */const Vx={kernelName:ym,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,St(ut(e)))}}};/**
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
 */const Hx={kernelName:ku,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=v(Ts(e,6),Mr(e));return{x:()=>v(n,R(s,"float32"))}}};/**
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
 */const jx={kernelName:bu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,R(Mr(e),"float32"))}}};/**
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
 */const qx={kernelName:yu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>T(n,e.shape)}}};/**
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
 */const Kx={kernelName:vu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>I.runKernel(vm,r,e)}}};/**
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
 */const Jx={kernelName:wu,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,r={dy:n,images:s};return{images:()=>I.runKernel(wm,r,e)}}};/**
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
 */const Yx={kernelName:xu,gradFunc:(n,t,e)=>{const{dims:s}=e,r=he(s,n.shape);return{x:()=>es(n,r)}}};/**
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
 */const Zx={kernelName:Su,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const Xx={kernelName:Eu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>St(U(n,v(Ds(e,1.5),2)))}}};/**
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
 */function Qx(n){const e={x:y(n,"x","logicalNot","bool")};return I.runKernel(sm,e)}const tS=A({logicalNot_:Qx});/**
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
 */const eS={kernelName:Iu,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>R(Q(e),"float32"),t:()=>v(n,R(e,n.dtype)),e:()=>v(n,R(tS(e),n.dtype))}}};/**
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
 */const nS=1.7580993408473768,sS=1.0507009873554805;/**
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
 */const rS={kernelName:Au,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=ge(e,V(0)),r=V(nS),i=V(sS),o=v(n,i),a=v(v(n,r),me(R(e,"float32")));return re(s,o,a)}}}};/**
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
 */const iS={kernelName:Cu,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,v(e,O(V(1),e)))}}};/**
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
 */const oS={kernelName:km,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */function aS(n){const e={x:y(n,"x","cos","float32")};return I.runKernel(Pl,e)}const fd=A({cos_:aS});/**
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
 */const lS={kernelName:Tu,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(fd(R(e,"float32")),n)}}};/**
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
 */function uS(n){const e={x:y(n,"x","cosh","float32")};return I.runKernel(Ul,e)}const cS=A({cosh_:uS});/**
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
 */const hS={kernelName:Du,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(cS(R(e,"float32")),n)}}};var zn;/**
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
 */const na=null,dS=null;function CT(n,t,e){const s=n.shape.length;zn.assert(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),zn.assert(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)zn.assert(t[r]+e[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function $T(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function _T(n,t,e){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((t[r]-n[r])/e[r]);return s}function fS(n,t,e,s){const r=[...n];for(let i=r.length;i<s.length;i++)r.push(1);for(let i=0;i<e;i++)i===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function pd(n,t,e){return e<=n?e:e-(t-1)}function md(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function MT(n,t,e,s,r,i,o,a,l){const u=n.length;let c=new Array(u),h=new Array(u),d=new Array(u);if(t.length&&e>0){const f=t[0],p=e+1;c=pS(o,f,p,s,n),h=mS(a,f,p,r,n),d=fS(i,f,p,n)}else for(let f=0;f<u;f++)c[f]=bS(o,s,i,n,f,l),h[f]=yS(a,r,i,n,f,l),d[f]=gS(i,f,l);return{begin:c,end:h,strides:d}}function pS(n,t,e,s,r){const i=[...r],o=md(e,t);for(let a=0;a<i.length;a++)if(o.indexOf(a)>-1)i[a]=0;else{const l=pd(t,e,a);let u=s[l];n&1<<l&&(u=0),i[a]=u}return i}function mS(n,t,e,s,r){const i=[...r],o=md(e,t);for(let a=0;a<i.length;a++)if(o.indexOf(a)>-1)i[a]=Number.MAX_SAFE_INTEGER;else{const l=pd(t,e,a);let u=s[l];n&1<<l&&(u=Number.MAX_SAFE_INTEGER),i[a]=u}for(let a=0;a<i.length;a++){const l=r[a];i[a]<0&&(i[a]+=l),i[a]=zn.clamp(0,i[a],r[a])}return i}function gS(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function bS(n,t,e,s,r,i){let o=t[r];const a=e[r]||1;(n&1<<r||i&1<<r||o==null)&&(a>0?o=Number.MIN_SAFE_INTEGER:o=Number.MAX_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),o=zn.clamp(0,o,l-1),o}function yS(n,t,e,s,r,i){let o=t[r];const a=e[r]||1;(n&1<<r||i&1<<r||o==null)&&(a>0?o=Number.MAX_SAFE_INTEGER:o=Number.MIN_SAFE_INTEGER);const l=s[r];return o<0&&(o+=l),a>0?o=zn.clamp(0,o,l):o=zn.clamp(-1,o,l-1),o}function zT(n,t,e){let s=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){s=r;break}for(let r=s+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function FT(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function wS(n,t,e){let s;const r=n.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(o=>{g(o!==-1,()=>"slice() does not support negative begin indexing.")});let i;return e==null?i=new Array(r).fill(-1):typeof e=="number"?i=[e,...new Array(r-1).fill(-1)]:e.length<r?i=e.concat(new Array(r-e.length).fill(-1)):i=e,i=i.map((o,a)=>o>=0?o:(g(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,i]}function LT(n,t,e,s,r,i,o,a,l){let u;if(s==null?(u=new Array(t.length),u.fill(1)):u=s,o!=null&&(o&o-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const h={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:u.slice(),beginMask:r,endMask:i,ellipsisMask:o,newAxisMask:a,shrinkAxisMask:l};for(let k=0;k<h.dims;k++)c&&(1<<k&a)!==0&&h.numAddAxisAfterEllipsis++,1<<k&o&&(c=!0);c||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};vS(h,d);let f=!0,p=!0,m=!0;const b=[],w=[];for(let k=0;k<n.length;++k){if(d.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);const E=!!(d.shrinkAxisMask&1<<k),D=n[k];if(D===-1){b.push(E?1:-1);continue}const C=[d.beginMask&1<<k,d.endMask&1<<k],z=[d.strides[k]>0?0:-1,d.strides[k]>0?D:D-1];if(E&&d.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[k]===1;const F=!!(d.beginMask&1<<k&&d.endMask&1<<k);if(d.beginValid&&d.endValid){if(E){const W=d.begin[k]<0?D+d.begin[k]:d.begin[k];if(d.begin[k]=W,d.end[k]=d.begin[k]+1,W<0||W>=D)throw Error(`slice index ${d.begin[k]} of dimension ${k} out of bounds.`)}else d.begin[k]=gd(d.begin[k],0,d.strides[k],D,C,z),d.end[k]=gd(d.end[k],1,d.strides[k],D,C,z);const P=d.strides[k]===1&&d.begin[k]===0&&d.end[k]===D;f=f&&P,p=p&&(k===0&&d.strides[k]===1||P)}else f=f&&d.strides[k]===1&&F,p=p&&(k===0&&d.strides[k]===1||F);let _,L=!1;if(d.beginValid&&d.endValid?(_=d.end[k]-d.begin[k],L=!0):E?(_=1,L=!0):F&&D>=0&&(d.strides[k]<0?_=-D:_=D,L=!0),L){let P;_===0||_<0!=d.strides[k]<0?P=0:P=Math.trunc(_/d.strides[k])+(_%d.strides[k]!==0?1:0),b.push(P)}else b.push(-1)}for(let k=0;k<d.finalShapeGatherIndices.length;++k){const E=d.finalShapeGatherIndices[k];E>=0?w.push(b[E]):E===na&&w.push(1)}return{finalShapeSparse:w.filter((k,E)=>d.finalShapeGatherIndices[E]!==na),finalShape:w,isIdentity:f,sliceDim0:p,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function vS(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(na),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(dS),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function gd(n,t,e,s,r,i){if(r[t])return e>0?i[t]:i[t+1&1];{const o=n<0?s+n:n;return o<i[0]?i[0]:o>i[1]?i[1]:o}}/**
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
 */const kS={kernelName:Nu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:r,size:i}=e,o=s.shape,[a,l]=wS(s,r,i),u=[];for(let c=0;c<n.rank;c++)u.push([a[c],o[c]-a[c]-l[c]]);return{x:()=>Wc(n,u)}}};/**
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
 */const xS={kernelName:Lu,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:r}=e,i=!0,o=v(n,s);return{logits:()=>O(o,v(B(o,[r],i),s))}}};/**
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
 */const SS={kernelName:$u,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,Cr(e))}}};/**
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
 */function ES(n,t,e){const s=y(n,"x","batchToSpaceND"),r=t.reduce((a,l)=>a*l);g(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),g(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),g(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const i={x:s},o={blockShape:t,crops:e};return I.runKernel(Ml,i,o)}const IS=A({batchToSpaceND_:ES});/**
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
 */const bd={kernelName:zu,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:r}=e;return{x:()=>IS(n,s,r)}}};/**
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
 */const yd={kernelName:Fu,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Pt(n,s)}}};/**
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
 */const AS={kernelName:_u,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,v(Ut(R(e,"float32")),2))}}};/**
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
 */const NS={kernelName:Am,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(n,v(R(e,"float32"),2))}}};/**
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
 */const TS={kernelName:Ru,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=V(2);return{a:()=>v(n,v(r,O(e,s))),b:()=>v(n,v(r,O(s,e)))}}};/**
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
 */const DS={kernelName:Gu,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const CS={kernelName:Ou,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,r=ft(e.shape,s.shape);return{a:()=>{let a=n;const l=Ct(e.shape,r);return l.length>0&&(a=B(a,l)),T(a,e.shape)},b:()=>{let a=n;const l=Ct(s.shape,r);return l.length>0&&(a=B(a,l)),T(St(a),s.shape)}}}};/**
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
 */const $S={kernelName:Mu,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,r=s.shape.slice(),{axis:i}=e;he(i,s.shape).forEach(u=>{r[u]=1});const a=T(n,r),l=v(a,Ye(s.shape,"float32"));return{x:()=>l}}};/**
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
 */const _S={kernelName:Cm,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>U(n,ut(fd(e)))}}};/**
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
 */const MS={kernelName:Bu,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>v(O(V(1),ut(e)),n)}}};/**
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
 */const zS={kernelName:Bi,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:r}=e;return{x:()=>{let o=Q(s);if(s.rank===1)for(let a=0;a<r[0];++a)o=M(o,nt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)o=M(o,nt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let u=0;u<r[2];++u)o=M(o,nt(n,[a*s.shape[0],l*s.shape[1],u*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let u=0;u<r[2];++u)for(let c=0;c<r[3];++c)o=M(o,nt(n,[a*s.shape[0],l*s.shape[1],u*s.shape[2],c*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return o}}}};/**
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
 */const FS={kernelName:cr,gradFunc:(n,t,e)=>{const s=e,{perm:r}=s,i=wo(r);return{x:()=>Y(n,i)}}};/**
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
 */const LS={kernelName:Pu,gradFunc:(n,t,e)=>{const s=e,{axis:r}=s;return{value:()=>Xe(n,r)}}};/**
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
 */const RS={kernelName:Uu,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>OS(n,e)}}};function OS(n,t){const e=An(t,Q(t)),s=Xn(n,e);let r=As(t,V(0,"int32"));const i=s.rank-r.rank;for(let a=0;a<i;++a)r=ne(r,a+1);r=Qn(r,Ye(s.shape,"bool"));const o=Q(s);return re(r,s,o)}/**
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
 */const BS={kernelName:Wu,gradFunc:n=>({x:()=>Q(n)})};/**
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
 */const PS=[od,rk,ik,ok,ak,lk,uk,ck,hk,dk,fk,pk,bk,vk,kk,Ek,Ik,Ak,Nk,Tk,Dk,Ck,_k,$k,Fk,Ok,Uk,Vk,Hk,jk,Gx,qk,Kk,Jk,Yk,Zk,Qk,Xk,nx,ix,ox,ax,lx,ux,cx,hx,dx,fx,px,bx,cd,cd,vx,Sx,Ax,Nx,Tx,Dx,Cx,$x,_x,Mx,zx,Fx,Lx,hd,hd,Rx,Ox,Wx,Vx,Hx,jx,qx,Kx,Jx,Yx,Zx,Xx,eS,rS,iS,oS,lS,hS,kS,xS,SS,bd,bd,yd,yd,AS,TS,NS,DS,CS,$S,_S,MS,zS,FS,LS,RS,BS];for(const n of PS)Fm(n);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function sa(n,t){return N(()=>Ut(B(v(n,n),t,!0)))}class Us extends qn{getConfig(){return{}}}class wd extends Us{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return N(()=>{const e=sa(t,this.axis),s=ee(e,0,this.maxValue);return v(t,U(s,M(Et(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}wd.className="MaxNorm",$(wd);class vd extends Us{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return N(()=>U(t,M(Et(),sa(t,this.axis))))}getConfig(){return{axis:this.axis}}}vd.className="UnitNorm",$(vd);class kd extends Us{apply(t){return Ze(t)}}kd.className="NonNeg",$(kd);class xd extends Us{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return N(()=>{const e=sa(t,this.axis),s=M(v(this.rate,ee(e,this.minValue,this.maxValue)),v(1-this.rate,e));return v(t,U(s,M(Et(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}xd.className="MinMaxNorm",$(xd);const Sd={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function At(n){return Oo(n)}function Ed(n,t={}){return zs(n,te.getMap().classNameMap,t,"constraint")}function Nt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Sd?Sd[n]:n,config:{}};return Ed(e)}else return n instanceof Us?n:Ed(n)}var US,WS,GS,VS;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function RT(n){return new US(n)}function OT(n){return new WS(n)}function BT(){return new GS}function PT(n){return new VS(n)}var HS,jS,qS,KS,JS,YS,ZS,XS,QS,tE,eE,nE,sE,rE,iE;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function UT(){return new HS}function WT(){return new jS}function GT(n){return new qS(n)}function VT(n){return new KS(n)}function HT(n){return new JS(n)}function jT(n){return new YS(n)}function qT(n){return new ZS(n)}function KT(n){return new XS(n)}function JT(n){return new QS(n)}function YT(n){return new tE(n)}function ZT(n){return new eE(n)}function XT(n){return new nE(n)}function QT(n){return new sE(n)}function t2(n){return new rE(n)}function e2(n){return new iE(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function on(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const i=n[r];if(typeof i!="number"){const o=i;t.push(o.data()),e.push(r),s.push(o)}}if(t.length>0){const r=await Promise.all(t);for(let i=0;i<r.length;++i)n[e[i]]=r[i][0];G(s)}}function Id(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var Ad;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(Ad||(Ad={}));const oE=125;class cs{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class aE{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class lE extends cs{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const i=e[r];if(typeof i=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+i*s;else{let o;r in this.totals?o=this.totals[r]:this.totals[r]=0;const a=N(()=>M(this.totals[r],v(i,s)));this.totals[r]=a,o?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:N(()=>{const r=v(U(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),Te(e[s])}))}}class uE extends cs{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const i in this.history){const o=this.history[i];for(let a=0;a<o.length;++a)if(typeof o[a]!="number"){const l=o[a];t.push(l.data()),e.push(i),s.push(a)}}const r=await Promise.all(t);for(let i=0;i<r.length;++i)this.history[e[i]][s[i]].dispose(),this.history[e[i]][s[i]]=r[i][0]}}class cE extends cs{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||Fv,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=oE),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");Ti(this.yieldEvery)&&(this.maybeWait=v1(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await on(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await on(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await on(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await on(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await on(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):Ti(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await on(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await on(t),await this.trainEnd(t))}}function Nd(n,t){return n==null&&(n={}),n instanceof cs?[n]:Array.isArray(n)&&n[0]instanceof cs?n:at(n).map(s=>new cE(s,t))}class ue{constructor(){}static registerCallbackConstructor(t,e){g(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),ue.checkForDuplicate(e),ue.constructors[t]==null&&(ue.constructors[t]=[]),ue.constructors[t].push(e)}static checkForDuplicate(t){for(const e in ue.constructors)ue.constructors[+e].forEach(r=>{if(r===t)throw new x("Duplicate callback constructor.")})}static clear(){ue.constructors={}}static createCallbacks(t){const e=[];for(const s in ue.constructors){const r=+s;t>=r&&e.push(...ue.constructors[r])}return e.map(s=>new s)}}ue.constructors={};function Td(n,t,e,s,r,i,o,a,l){const u=new uE,c=[new lE,...ue.createCallbacks(t)];n!=null&&c.push(...n),c.push(u);const h=new aE(c);return h.setParams({epochs:e,initialEpoch:s,samples:r,steps:i,batchSize:o,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:u}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Le(n,t={},e=!1){return zs(n,te.getMap().classNameMap,t,"layer",e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function si(n,t){return N(()=>{n.dtype!=="float32"&&(n=R(n,"float32"));const e=B(Os(n),t,!0),s=Is(e.shape,Et()),r=Ut(An(e,s));return U(n,r)})}function ri(n,t){return N(()=>vt(Os(O(t,n)),-1))}function ra(n,t){return N(()=>vt(Ft(O(t,n)),-1))}function ia(n,t){return N(()=>{const e=O(n,t),s=ee(Ft(n),Et(),Number.MAX_VALUE),r=Ft(U(e,s));return v(100,vt(r,-1))})}function hE(n,t){return N(()=>{const e=ee(t,Et(),Number.MAX_VALUE),s=be(M(1,e)),r=ee(n,Et(),Number.MAX_VALUE),i=be(M(1,r));return vt(Os(O(s,i)),-1)})}function dE(n,t){return N(()=>{const e=An(0,O(1,v(n,t)));return vt(Os(e),-1)})}function fE(n,t){return N(()=>{const e=An(0,O(1,v(n,t)));return vt(e,-1)})}function pE(n,t){return N(()=>{const e=B(v(n,t),-1),s=Ce(v(O(1,n),t),-1);return An(0,M(1,O(s,e)))})}function mE(n,t){return N(()=>{const e=Math.log(2),s=O(t,n),r=O(M(s,Eo(v(-2,s))),e);return vt(r,-1)})}function Ws(n,t,e=!1){return N(()=>{if(e)t=jc(t);else{const s=B(t,t.shape.length-1,!0);t=U(t,s)}return t=ee(t,Et(),1-Et()),St(B(v(R(n,"float32"),be(t)),t.shape.length-1))})}function ii(n,t,e=!1){return N(()=>{const s=R(bo(R1(n)),"int32");t=ee(t,Et(),1-Et());const r=t.shape,i=T(Nr(s,r[r.length-1]),r);return Ws(i,t,e)})}function gE(n,t){if(!Wt(n.shape,t.shape))throw new x(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return N(()=>{const e=Ze(t),s=St(Ft(t));return M(O(e,v(t,n)),Bc(me(s)))})}function oi(n,t){return N(()=>{let e;return e=ee(t,Et(),1-Et()),e=be(U(e,O(1,e))),vt(gE(n,e),-1)})}function bE(n,t){return N(()=>{const e=ee(n,Et(),1),s=ee(t,Et(),1);return B(v(n,be(U(e,s))),-1)})}function yE(n,t){return N(()=>{const e=be(M(Et(),t));return vt(O(t,v(n,e)),-1)})}function Dd(n,t){return N(()=>{const e=si(n,-1),s=si(t,-1),r=v(e,s);return St(B(r,-1))})}const n2=null,s2=null,r2=null,i2=null,o2=null,a2=null,l2=null,u2=null,c2=null,h2=null,d2=null,ai={meanSquaredError:ri,meanAbsoluteError:ra,meanAbsolutePercentageError:ia,meanSquaredLogarithmicError:hE,squaredHinge:dE,hinge:fE,categoricalHinge:pE,logcosh:mE,categoricalCrossentropy:Ws,sparseCategoricalCrossentropy:ii,binaryCrossentropy:oi,kullbackLeiblerDivergence:bE,poisson:yE,cosineProximity:Dd};function oa(n){if(typeof n=="string"){if(n in ai)return ai[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new x(t)}else return n}var Re,Cd,$d;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function _d(n,t){return N(()=>{const e=v(.5,ye(t)),s=Ls(ge(t,e),n.dtype);return vt(Je(n,s),-1)})}function Md(n,t){return N(()=>Ls(Je(Jn(n,-1),Jn(t,-1)),"float32"))}function zd(n,t){return N(()=>R(B(Qn(Je(n,1),Je(t,1))),"float32"))}function wE(n,t){return Cd(()=>Re.cast(Re.sum(Re.logicalAnd(Re.equal(n,1),Re.equal(t,0))),"float32"))}function vE(n,t){return N(()=>R(B(Qn(Je(n,0),Je(t,1))),"float32"))}function kE(n,t){return N(()=>{const e=zd(n,t),s=vE(n,t),r=M(e,s);return R(re(ge(r,0),U(e,r),0),"float32")})}function f2(n,t){return Cd(()=>{const e=zd(n,t),s=wE(n,t),r=Re.add(e,s);return Re.cast(Re.where(Re.greater(r,0),Re.div(e,r),0),"float32")})}function xE(n,t){return oi(n,t)}function SE(n,t){return n.rank===t.rank&&(n=ns(n,[n.rank-1])),t=Jn(t,-1),t.dtype!==n.dtype&&(t=R(t,n.dtype)),R(Je(n,t),"float32")}function p2(n,t){throw new $d}function m2(n,t){throw new $d}const EE=ri,IE=ri,AE=ra,NE=ra,TE=ia,DE=ia,Fd=Ws,CE=Dd,Ld=ii,li={binaryAccuracy:_d,categoricalAccuracy:Md,precision:kE,categoricalCrossentropy:Fd,sparseCategoricalCrossentropy:Ld,mse:EE,MSE:IE,mae:AE,MAE:NE,mape:TE,MAPE:DE,cosine:CE};function $E(n){if(typeof n=="string"&&n in li)return li[n];if(typeof n!="string"&&n!=null)return n;throw new x(`Unknown metric ${n}`)}function ui(n){if(Zt(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(ai))if(ai[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(li))if(li[e]===n){t=e;break}return t!==void 0?t:n.name}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function _E(n){const t={Adagrad:()=>is.adagrad(.01),Adadelta:()=>is.adadelta(1,.95,Et()),Adam:()=>is.adam(.001,.9,.999,Et()),Adamax:()=>is.adamax(.002,.9,.999,Et(),0),RMSProp:()=>is.rmsprop(.001,.9,0,Et()),SGD:()=>is.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new x(`Unknown Optimizer ${n}`)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Rd=1*1024*1024;function Od(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!aa(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Rd&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Rd}.`)}}function aa(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!aa(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!aa(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ME(n,t,e,s=console.log){const r=FE(n),i=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(c=>Math.floor(t*c)));let o;if(!r){i.push("Receives inputs"),o=[];for(const c in n.nodesByDepth)o.push(...n.nodesByDepth[c])}s("_".repeat(t)),ci(i,e,s),s("=".repeat(t));const a=n.layers;for(let c=0;c<a.length;++c)r?LE(a[c],e,s):RE(a[c],e,o,s),s((c===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=zE(n),u=Qr(n.nonTrainableWeights);s(`Total params: ${l+u}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${u}`),s("_".repeat(t))}function zE(n){let t;return n.collectedTrainableWeights!=null?t=Qr(n.collectedTrainableWeights):t=Qr(n.trainableWeights),t}function FE(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let i=!1;for(const o of r.inboundNodes)if(s.indexOf(o)!==-1)if(i){t=!1;break}else i=!0;if(!t)break}return t}function ci(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function LE(n,t,e){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const i=n.name,o=n.getClassName(),a=[`${i} (${o})`,r,s,n.countParams().toString()];ci(a,t,e)}function RE(n,t,e,s){let r,i;try{i=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{i="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const o=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const f=h.inboundLayers[d].name,p=h.nodeIndices[d],m=h.tensorIndices[d];o.push(`${f}[${p}][${m}]`)}const a=n.name,l=n.getClassName(),u=o.length===0?"":o[0],c=[`${a} (${l})`,i,r,n.countParams().toString(),u];ci(c,t,s);for(let h=1;h<o.length;++h)ci(["","","","",o[h]],t,s)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Bd(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function hi(n,t){if(n===null)return null;if(typeof n=="string")return Cn(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const i=n[r];Bd(t,r,i)?e.push(i):e.push(hi(i,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const i=Cn(s);e[i]=hi(r,i)}}return e}}function la(n,t){if(n==null)return null;if(typeof n=="string")return Pe(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const i=n[r];Bd(t,r,i)?e.push(i):e.push(la(i,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],i=Pe(s);(s==="name"||s==="className")&&typeof r=="string"?e[i]=r:e[i]=la(r,s)}return e}}/** @license See the LICENSE file. */const Pd="3.21.0";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class xe extends J{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const S=this.getClassName().toLowerCase();this.name=Kr(S)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],tn(this.inputs).length!==this.inputs.length)throw new x(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(S=>S.name)}`);tn(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(S=>S.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const S of this.outputs){const k=S.sourceLayer,E=S.nodeIndex,D=S.tensorIndex;this.outputLayers.push(k),this.outputLayersNodeIndices.push(E),this.outputLayersTensorIndices.push(D)}for(const S of this.inputs){const k=S.sourceLayer,E=S.nodeIndex,D=S.tensorIndex;Zt(E===0,"input layer has >1 nodes"),Zt(D===0,"input layer has >1 tensors"),this.inputLayers.push(k),this.inputLayersNodeIndices.push(E),this.inputLayersTensorIndices.push(D)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let S=0;S<this.inputLayers.length;S++){const k=this.inputLayers[S];if(!(k instanceof us))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${S} (0-based) originates from layer type ${k.getClassName()}.`);this.inputNames.push(k.name),this.feedInputShapes.push(k.batchInputShape),this.feedInputNames.push(k.name)}for(const S of this.outputLayers)this.outputNames.push(S.name);this.internalInputShapes=this.inputs.map(S=>S.shape),this.internalOutputShapes=this.outputs.map(S=>S.shape);const e={},s={},r={},i={},o={},a=[],l=(S,k,E,D,C,z)=>{(D==null||C==null||z==null)&&(D=S.sourceLayer,C=S.nodeIndex,z=S.tensorIndex);const F=D.inboundNodes[C];if(E.indexOf(F)!==-1)throw new oe(`The tensor ${S.name} at layer "${D.name}" is part of a cycle.`);if(k.indexOf(F)!==-1)return;this.containerNodes.add(xe.nodeKey(D,C)),D.id in o||(o[D.id]=Object.keys(o).length),E.indexOf(F)===-1&&E.push(F);const _=F.inboundLayers.length;for(let L=0;L<_;L++){const P=F.inputTensors[L],W=F.inboundLayers[L],K=F.nodeIndices[L],tt=F.tensorIndices[L];l(P,k,E,W,K,tt)}for(k.push(F);E.indexOf(F)>=0;)E.splice(E.indexOf(F),1);a.push(F)},u=[],c=[];for(const S of this.outputs)l(S,u,c);const h=a.slice().reverse();for(const S of h){s[S.id]=S,S.id in e||(e[S.id]=0);let k=e[S.id];const E=r[S.outboundLayer.id]==null?0:r[S.outboundLayer.id];k=Math.max(k,E),r[S.outboundLayer.id]=k,i[S.outboundLayer.id]=S.outboundLayer,e[S.id]=k;for(let D=0;D<S.inboundLayers.length;D++){const C=S.inboundLayers[D],z=S.nodeIndices[D],F=C.inboundNodes[z],_=e[F.id]==null?0:e[F.id];e[F.id]=Math.max(k+1,_),s[F.id]=F}}const d={};for(const S in e){const k=e[S];k in d||(d[k]=[]),d[k].push(s[S])}const f={};for(const S in r){const k=r[S];k in f||(f[k]=[]),f[k].push(i[S])}let p=Object.keys(f).map(S=>parseInt(S,10)).sort(jr);this.layers=[];for(const S of p){const k=f[S];k.sort((E,D)=>{const C=o[E.id],z=o[D.id];return C<z?-1:C>z?1:0});for(const E of k)E instanceof xe&&this.internalContainerRefs.push(E),this.layers.push(E)}this.layersByDepth=f,p=Object.keys(d).map(S=>parseInt(S,10)).sort(jr);const m=this.inputs.slice(),b=[];for(const S of p)for(const k of d[S]){const E=k.outboundLayer;if(E!=null){for(const D of k.inputTensors)if(m.indexOf(D)===-1)throw new oe(`Graph disconnected: cannot obtain value for tensor ${D} at layer "${E.name}". The following previous layers were accessed without issue: ${b}`);for(const D of k.outputTensors)m.push(D);b.push(E.name)}}this.nodesByDepth=d;const w=this.layers.map(S=>S.name);for(const S of w){const k=w.filter(E=>E===S).length;if(k!==1)throw new oe(`The name "${S}" is used ${k} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(w))}this.outboundNodes=[],this.inboundNodes=[],new ti({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(S=>null),outputMasks:this.outputs.map(S=>null),inputShapes:this.inputs.map(S=>S.shape),outputShapes:this.outputs.map(S=>S.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new x("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;for(const o of this.layers)for(const a of o.weights){if(s[a.originalName]!=null)throw new x(`Duplicate weight name: ${a.originalName}`);s[a.originalName]=a,r++}const i=[];for(const o in t){let a=o;if(s[o]==null){const l=o.split("/");a=l.slice(0,-2).concat([l[l.length-1]]).join("/")}if(s[a]!=null)i.push([s[a],t[o]]);else if(e)throw new x(`Provided weight data has no target variable: ${o}`);delete s[a]}if(e){const o=[];for(const a in s)o.push(a);if(o.length>0)throw new x(`${o.length} of ${r} weights are not set: ${o}`)}ea(i)}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${Pd}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=la(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return N(()=>{t=at(t);const s=new rn;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return Ps(this.outputs,s,e)})}computeMask(t,e){return N(()=>{t=at(t);let s;return e==null?s=Dn(null,t.length):s=at(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=Xr(t);if(e.length!==this.inputLayers.length)throw new x(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],u=e[a],c=l.name+"_0_0";s[c]=u}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(jr);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const u of l){const c=u.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(c.id)!==-1)continue;const h=[];for(let m=0;m<u.inboundLayers.length;m++){const b=u.inboundLayers[m],w=u.nodeIndices[m],S=u.tensorIndices[m],k=`${b.name}_${w}_${S}`,E=s[k];h.push(E)}const d=c.computeOutputShape(Ht(h)),f=Xr(d),p=c.inboundNodes.indexOf(u);for(let m=0;m<f.length;m++){const b=`${c.name}_${p}_${m}`;s[b]=f[m]}}}const i=[],o=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],u=this.outputLayersNodeIndices[a],c=this.outputLayersTensorIndices[a],h=`${l.name}_${u}_${c}`;o.push(h)}for(let a=0;a<o.length;a++){const l=o[a];Zt(l in s),i.push(s[l])}return Ht(i)}runInternalGraph(t,e){e==null&&(e=Dn(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const u=this.inputs[l],c=t[l],h=e[l];s[u.id]=[c,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(jr);for(const l of r){const u=this.nodesByDepth[l];for(const c of u){const h=c.outboundLayer,d=c.inputTensors,f=c.outputTensors,p=new Array;for(const m of d)m.id in s&&p.push(s[m.id]);if(p.length===d.length){let m={},b,w,S,k;if(c.callArgs!=null&&(m=c.callArgs),p.length===1){const[E,D]=p[0];m.mask==null&&(m.mask=D),S=at(h.call(E,m)),k=at(h.computeMask(E,D)),b=[E],w=[D]}else b=p.map(E=>E[0]),w=p.map(E=>E[1]),m.mask==null&&(m.mask=w),S=at(h.call(b,m)),k=at(h.computeMask(b,w));if(h.activityRegularizer)throw new H("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let E=0;E<f.length;++E){const D=f[E],C=S[E],z=k[E];s[D.id]=[C,z]}}}}const i=[],o=[],a=[];for(const l of this.outputs){Zt(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[u,c]=s[l.id];a.push(u.shape),i.push(u),o.push(c)}return[i,o,a]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof xe?1:0;for(let i=0;i<r.inboundNodes.length;i++){const o=xe.nodeKey(r,i);this.containerNodes.has(o)&&(e[o]=s,s+=1)}}return e}getLayer(t,e){if(e!=null){if(this.layers.length<=e)throw new x(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}else if(t==null)throw new x("Provide either a layer name or layer index");for(const s of this.layers)if(s.name===t)return s;throw new x(`No such layer: ${t}`)}calculateLosses(){return N(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=xe.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const o of this.layers){const a=o.getClassName(),l=o.getConfig(),u=[];for(let h=0;h<o.inboundNodes.length;h++){const d=o.inboundNodes[h],f=xe.nodeKey(o,h);let p={};if(this.containerNodes.has(f)){if(d.callArgs)try{JSON.stringify(d.callArgs),p=d.callArgs}catch{console.warn(`Layer ${o.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),p={}}if(d.inboundLayers.length>0){const m=[];for(let b=0;b<d.inboundLayers.length;b++){const w=d.inboundLayers[b],S=d.nodeIndices[b],k=d.tensorIndices[b],E=xe.nodeKey(w,S);let D=e[E];D==null&&(D=0),m.push([w.name,D,k,p])}u.push(m)}}}const c={};c.name=o.name,c.className=a,c.config=l,c.inboundNodes=u,s.push(c)}t.layers=s;const r=[];for(let o=0;o<this.inputLayers.length;o++){const a=this.inputLayers[o],l=this.inputLayersNodeIndices[o],u=xe.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=e[u];c==null&&(c=0);const h=this.inputLayersTensorIndices[o];r.push([a.name,c,h])}t.inputLayers=r;const i=[];for(let o=0;o<this.outputLayers.length;o++){const a=this.outputLayers[o],l=this.outputLayersNodeIndices[o],u=xe.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=e[u];c==null&&(c=0);const h=this.outputLayersTensorIndices[o];i.push([a.name,c,h])}return t.outputLayers=i,t}static fromConfig(t,e,s={},r=!1){const i={},o={};function a(b,w){b.name in o?o[b.name].push(w):o[b.name]=[w]}function l(b,w){const S=[];let k;for(const E of w){const D=E[0],C=E[1],z=E[2];if(k=E[3]==null?{}:E[3],!(D in i)){a(b,w);return}const F=i[D];if(F.inboundNodes.length<=C){a(b,w);return}const _=F.inboundNodes[C];S.push(_.outputTensors[z])}S.length>0&&b.apply(Ht(S),k)}function u(b){const w=b.name,S=Le(b,e.customObjects!=null?e.customObjects:{});S.setFastWeightInitDuringBuild(r),i[w]=S,b.inboundNodes.forEach(E=>{if(!(E instanceof Array))throw new x(`Corrupted configuration, expected array for nodeData: ${E}`);a(S,E)})}const c=e.name,h=e.layers;for(const b of h)u(b);for(;!w1(o);)for(const b of h){const w=i[b.name];if(w.name in o){const S=o[w.name];delete o[w.name];for(const k of S)l(w,k)}}const d=[],f=[],p=e.inputLayers;for(const b of p){const w=b[0],S=b[1],k=b[2];Zt(w in i);const D=i[w].inboundNodes[S].outputTensors;d.push(D[k])}const m=e.outputLayers;for(const b of m){const w=b[0],S=b[1],k=b[2];Zt(w in i);const D=i[w].inboundNodes[S].outputTensors;f.push(D[k])}return new t({inputs:d,outputs:f,name:c})}get stateful(){if(this._stateful)throw new x("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){N(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ud(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(i=>{i in n?r.push(n[i]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function Wd(n,t){return Ud(n,t,"classWeight")}function g2(n,t){return Ud(n,t,"sampleWeight")}async function Gd(n,t,e,s){if(t!=null||s!=null)throw new Error("Support sampleWeight is not implemented yet");if(e!=null){const r=N(()=>{if(n.shape.length===1)return kn(n);if(n.shape.length===2){if(n.shape[1]>1)return Jn(n,1);if(n.shape[1]===1)return T(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),i=Array.from(await r.data());G(r);const o=[];return i.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);o.push(e[a])}),_t(o,"float32")}else return null}function OE(n,t){return v(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const BE=32;function Vd(n,t){let e,s;const r=t;e=r.xs,s=r.ys,g(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const i=Hd("input",n.inputNames,e),o=Hd("output",n.outputNames,s),a=i[0].shape[0];g(i.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${i.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),g(o.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<i.length;l++)g(i[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<o.length;l++)g(o[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:i,ys:o}}function Hd(n,t,e){if(e instanceof lt)return[e];if(Array.isArray(e))return g(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new x(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function PE(n){if(n.length===3)throw new H("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function UE(n,t,e){const s=e.batchesPerEpoch!=null;if(g(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),g(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),g(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),g(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),g(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let i,o;if(r)if(jd(e.validationData))g(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const b=PE(e.validationData);i=b.xs,o=b.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let u;r?u=l.slice().concat(l.map(b=>"val_"+b)):u=l.slice();const c=Nd(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:f}=Td(c,h,e.epochs,null,null,WE(t,e),null,r,u);d.setModel(n),n.history=f,await d.onTrainBegin(),n.stopTraining_=!1;let p=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;p<e.epochs;){const b={};await d.onEpochBegin(p);let w=0,S=0;for(s||(m=await t.iterator());!s||w<e.batchesPerEpoch;){const k=await m.next();if(s&&k.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${w} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(k.value!=null){const{xs:E,ys:D}=Vd(n,k.value),C={};C.batch=S,C.size=E[0].shape[0],await d.onBatchBegin(S,C);const z=[];if(e.classWeight!=null){const L=Wd(e.classWeight,n.outputNames);for(let P=0;P<L.length;++P)z.push(await Gd(D[P],null,L[P]))}const F=E.concat(D).concat(z),_=a(F);G(F);for(let L=0;L<l.length;++L){const P=l[L],W=_[L];C[P]=W,Te(W)}await d.onBatchEnd(S,C),Id(C),S++,w++}if(s?w>=e.batchesPerEpoch:k.done){if(r){let E;jd(e.validationData)?E=at(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):E=at(n.evaluate(i,o,{batchSize:e.validationBatchSize==null?BE:e.validationBatchSize,verbose:0}));for(let D=0;D<n.metricsNames.length;++D)b[`val_${n.metricsNames[D]}`]=E[D]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(p,b),p++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function WE(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function jd(n){return typeof n.iterator=="function"}function GE(n){return typeof n.next=="function"}async function VE(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let i=[];if(e.verbose>0)throw new H("Verbose mode is not implemented yet.");g(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const o=GE(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const u=await o.next();if(i=N(()=>{if(u.value){const{xs:c,ys:h}=Vd(n,u.value),d=c.concat(h),f=N(()=>r(d));if(G(d),l===0)for(let m=0;m<f.length;++m)i.push(V(0));const p=d[0].shape[0];for(let m=0;m<f.length;++m){const b=f[m],w=i[m];i[m]=N(()=>M(i[m],v(p,b))),l>0&&G(w)}G(f),a+=p,++l}return i}),u.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let u=0;u<i.length;++u){const c=i[u];i[u]=U(i[u],a),G(c)}return Ht(i)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ua(n){g(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function Gs(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>Mn(s,t,e-t)):Mn(n,t,e-t)}function ca(n,t){return N(()=>n==null?null:Array.isArray(n)?n.map(e=>ca(e,t)):Vh(n,t.dtype==="int32"?t:R(t,"int32")))}function ha(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}async function HE(n,t,e,s,r,i,o,a,l,u,c,h,d,f,p){r==null&&(r=32),i==null&&(i=1),c==null&&(c=!0),d==null&&(d=0);let m=!1;if(l!=null&&u!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new x("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const b=n.checkNumSamples(e,r,f,"steps_per_epoch");let w;b!=null&&(w=we(0,b)),o==null&&(o=1);const{callbackList:S,history:k}=Td(a,o,i,d,b,f,r,m,h);S.setModel(n),n.history=k,await S.onTrainBegin(),n.stopTraining_=!1;for(let E=d;E<i;++E){await S.onEpochBegin(E);const D={};if(f!=null)throw new H("stepsPerEpoch mode is not implemented yet.");{if(c==="batch")throw new H("batch shuffling is not implemneted yet");c&&On(w);const C=_t(w),z=ha(b,r);for(let F=0;F<z.length;++F){const _={};if(await S.onBatchBegin(F,_),N(()=>{const L=z[F][0],P=z[F][1],W=Mn(C,L,P-L);_.batch=F,_.size=P-L;const K=ca(e,W),tt=t(K);for(let X=0;X<s.length;++X){const dt=s[X],et=tt[X];_[dt]=et,Te(et)}if(F===z.length-1&&m){const X=n.testLoop(l,u,r);for(let dt=0;dt<s.length;++dt){const et=s[dt],wt=X[dt];Te(wt),D["val_"+et]=wt}}}),await S.onBatchEnd(F,_),Id(_),n.stopTraining_)break}C.dispose()}if(await S.onEpochEnd(E,D),n.stopTraining_)break}return await S.onTrainEnd(),await n.history.syncData(),n.history}async function jE(n,t,e,s={}){if(n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;let r,i,o,a,l,u,c,h,d;try{const f=s.batchSize==null?32:s.batchSize;ua(f);const m=await n.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,f);r=m[0],i=m[1],d=m[2];let b=!1,w;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)l=s.validationData[0],u=s.validationData[1];else throw s.validationData.length===3?new H("validationData including sample weights is not supported yet."):new x(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const L=await n.standardizeUserData(l,u,null,null,!0,f);c=L[0],h=L[1],w=c.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const _=Math.floor(r[0].shape[0]*(1-s.validationSplit)),L=r[0].shape[0];c=Gs(r,_,L),o=r,r=Gs(r,0,_),h=Gs(i,_,L),a=i,i=Gs(i,0,_),w=c.concat(h)}else s.validationSteps!=null&&(b=!0);const S=r.concat(i).concat(d);n.checkTrainableWeightsConsistency();const k=n.makeTrainFunction(),E=n.getDedupedMetricsNames();let D,C;b?(n.makeTestFunction(),D=n.testFunction,C=E.slice().concat(E.map(_=>"val_"+_))):(D=null,w=[],C=E.slice());const z=Nd(s.callbacks,s.yieldEvery);return await HE(n,k,S,E,f,s.epochs,s.verbose,z,D,w,s.shuffle,C,s.initialEpoch,null,null)}finally{n.isTraining=!1,Se(r,t),Se(i,e),Se(o,t),Se(a,e),Se(c,l),Se(h,u),d!=null&&G(d)}}function qd(n){const t=[];n instanceof lt&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Rs(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Se(n,t){if(n==null)return;const e=[];if(t instanceof lt)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const i=t[r];e.push(i.id)}const s=[];if(n instanceof lt)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const i=n[r];e.indexOf(i.id)===-1&&s.push(i)}s.forEach(r=>{r.isDisposed||r.dispose()})}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function qE(n){return n instanceof lt}function da(n){return Array.isArray(n)}function Kd(n){return!qE(n)&&!da(n)}function Jd(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let o=!1;if(da(n)&&n.length>0)o=!0;else if(Kd(n)){for(const a in n)if(n.hasOwnProperty(a)){o=!0;break}}else o=!0;if(o)throw new x(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(o=>null);let i;if(Kd(n)){n=n,i=[];for(const o of t){if(n[o]==null)throw new x(`No data provided for "${o}". Need data for each key in: ${t}`);i.push(n[o])}}else if(da(n)){if(n=n,n.length!==t.length)throw new x(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);i=n}else{if(n=n,t.length>1)throw new x(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);i=[n]}if(i=qd(i),e!=null)for(let o=0;o<t.length;++o){if(e[o]==null)continue;const a=i[o];if(a.shape.length!==e[o].length)throw new x(`Error when checking ${r}: expected ${t[o]} to have ${e[o].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[o].length;++l){if(l===0&&!s)continue;const u=a.shape[l],c=e[o][l];if(c!=null&&c>=0&&u!==c)throw new x(`${r} expected a batch of elements where each example has shape [${e[o].slice(1,e[o].length)}] (i.e.,tensor shape [*,${e[o].slice(1,e[o].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return i}function KE(n,t,e){const s=tn(n.map(i=>i.shape[0]));s.sort();const r=tn(t.map(i=>i.shape[0]));if(r.sort(),s.length>1)throw new x(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(i=>i.shape))}`);if(r.length>1)throw new x(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(i=>i.shape))}`);if(s.length>0&&r.length>0&&!Wt(s,r))throw new x(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function JE(n,t,e){const s=[ri,oi,Ws];for(let r=0;r<n.length;++r){const i=n[r],o=t[r],a=e[r];if(o!=null){if(o===Ws&&i.shape[i.shape.length-1]===1)throw new x(`You are passing a target array of shape ${i.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(o)!==-1){const l=i.shape.slice(1),u=a.slice(1);for(let c=0;c<l.length;++c){const h=l[c],d=u[c];if(d!=null&&h!==d)throw new x(`A target Tensor with shape ${i.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Yd(n,t,e,s=!0,r=""){let i;if(Array.isArray(n)){if(n.length!==t.length)throw new x(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);i=n}else{if(t.length>1)throw new x(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);i=[n]}if(e!=null)for(let o=0;o<t.length;++o){if(e[o]==null)continue;const a=i[o];if(a.shape.length!==e[o].length)throw new x(`Error when checking ${r}: expected ${t[o]} to have ${e[o].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[o].length;++l){if(l===0&&!s)continue;const u=a.shape[l],c=e[o][l];if(c!=null&&c!==u)throw new x(`Error when checking ${r}: expected ${t[o]} to have shape ${JSON.stringify(e[o])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function YE(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let i=e.hasOwnProperty(r)?e[r]:[];Array.isArray(i)||(i=[i]),s.push(i)}return s}}const ZE="layers-model";class an extends xe{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new x("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");ME(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=_E(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof qe))throw new x("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const o in t.loss)if(this.outputNames.indexOf(o)===-1)throw new x(`Unknown entry in loss dictionary: "${o}". Only expected the following keys: ${this.outputNames}`);for(const o of this.outputNames)t.loss[o]==null&&console.warn(`Output "${o}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${o} during training`),e.push(oa(t.loss[o]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new x(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>oa(a))}else{const o=oa(t.loss);this.outputs.forEach(a=>{e.push(o)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let o=0;o<this.outputs.length;++o){const a=this.internalOutputShapes[o],l=this.outputNames[o];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[o])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],_n("loss",()=>{for(let o=0;o<this.outputs.length;++o){if(s.indexOf(o)!==-1)continue;const a=this.lossFunctions[o];this.outputs.length>1&&(this.metricsTensors.push([a,o]),this.metricsNames.push(this.outputNames[o]+"_loss"))}});const r=YE(t.metrics,this.outputNames),i=(o,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[o]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,o])};_n("metric",()=>{for(let o=0;o<this.outputs.length;++o){if(s.indexOf(o)!==-1)continue;const a=r[o];(u=>{let h,d,f;for(const p of u){if(typeof p=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(p)!==-1){const b=this.internalOutputShapes[o];b[b.length-1]===1||this.lossFunctions[o]===oi?["accuracy","acc"].indexOf(p)!==-1?d=_d:["crossentropy","ce"].indexOf(p)!==-1&&(d=xE):this.lossFunctions[o]===ii?["accuracy","acc"].indexOf(p)!==-1?d=SE:["crossentropy","ce"].indexOf(p)!==-1&&(d=Ld):["accuracy","acc"].indexOf(p)!==-1?d=Md:["crossentropy","ce"].indexOf(p)!==-1&&(d=Fd);let w;["accuracy","acc"].indexOf(p)!==-1?w="acc":["crossentropy","ce"].indexOf(p)!==-1&&(w="ce"),f=d,h=""+w}else f=$E(p),h=""+ui(p);let m;_n(h,()=>{m=f}),i(o,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;ua(r);const o=this.standardizeUserDataXY(t,e,!0,r);try{const a=o[0].concat(o[1]);this.makeTestFunction();const l=this.testFunction,u=this.testLoop(l,a,r,s.verbose,s.steps);return Ht(u)}finally{Se(o[0],t),Se(o[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),VE(this,t,e)}checkNumSamples(t,e,s,r="steps"){let i;if(s!=null){if(i=null,e!=null)throw new x(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?i=t[0].shape[0]:i=t.shape[0];else throw new x(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new x("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],i=this.retrieveSymbolicTensors(r),o=new rn;if(t instanceof lt&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new x(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)o.add(this.inputs[l],t[l])}else for(const l of this.inputs){const u=t[l.name];if(u==null)throw new x(`No value is provided for the model's input ${l.name}`);o.add(l,u)}const a=Ps(i,o);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Dn(null,t.length);let s=t.length;for(const r of this.layers){const i=Array.isArray(r.output)?r.output:[r.output],o=i.map(a=>a.name);for(let a=0;a<t.length;++a){const l=o.indexOf(t[a]);if(l!==-1&&(e[a]=i[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((i,o)=>{i==null&&r.push(t[o])}),new x(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return N(()=>{const r=this.checkNumSamples(t);if(s)throw new H("Verbose predictLoop() is not implemented yet.");const i=ha(r,e),o=this.outputs.map(a=>[]);for(let a=0;a<i.length;++a)N(()=>{const u=i[a][0],c=i[a][1],h=Gs(t,u,c),d=[];if(Array.isArray(h))for(let p=0;p<h.length;++p)d.push({key:this.inputs[p],value:h[p]});else d.push({key:this.inputs[0],value:h});const f=new rn(d);return Ps(this.outputs,f)}).forEach((u,c)=>o[c].push(u));return Ht(o.map(a=>Pt(a,0)))})}predict(t,e={}){const s=qd(t);Yd(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return ua(r),this.predictLoop(s,r)}finally{Se(s,t)}}predictOnBatch(t){Yd(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new oe("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const i=[];for(let o=0;o<this.feedOutputShapes.length;++o){const a=this.feedOutputShapes[o];this.feedLossFns[o]===ii?i.push(a.slice(0,a.length-1).concat([1])):i.push(a)}if(t=Jd(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Jd(e,this.feedOutputNames,i,!1,"target"),KE(t,e,null),JE(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new x(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,i=!0,o){const[a,l]=this.standardizeUserDataXY(t,e,i,o);if(s!=null)throw new Error("sample weight is not supported yet.");let u=null;if(r!=null){const c=Wd(r,this.outputNames);u=[];for(let h=0;h<c.length;++h)u.push(await Gd(l[h],null,c[h]))}return[a,l,u]}testLoop(t,e,s,r=0,i){return N(()=>{const o=this.checkNumSamples(e,s,i,"steps"),a=[];if(r>0)throw new H("Verbose mode is not implemented yet.");if(i!=null)throw new H("steps mode in testLoop() is not implemented yet");{const l=ha(o,s),u=_t(we(0,o));for(let c=0;c<l.length;++c){const h=l[c][0],d=l[c][1],f=Mn(u,h,d-h),p=ca(e,f),m=t(p);if(c===0)for(let b=0;b<m.length;++b)a.push(V(0));for(let b=0;b<m.length;++b){const w=m[b];a[b]=M(a[b],v(d-h,w))}}for(let c=0;c<a.length;++c)a[c]=U(a[c],o)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let i=r;if($h(t,r)>1){const o=$h(t.slice(0,s),r);i+=`_${o}`}e.push(i)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),o=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new rn(h),f=Ps(this.outputs,d,{training:!0});let p;for(let m=0;m<this.lossFunctions.length;++m){const b=this.lossFunctions[m];let w=b(r[m],f[m]);i[m]!=null&&(w=OE(w,i[m]));const S=vt(w);e.push(S),m===0?p=w:p=M(p,w)}for(let m=0;m<this.metricsTensors.length;++m){let b;if(this.outputs.length>1&&m<this.outputs.length)b=e[m];else{const w=this.metricsTensors[m][0],S=this.metricsTensors[m][1];b=vt(w(r[S],f[S]))}Te(b),o.push(b)}return p=vt(p),this.calculateLosses().forEach(m=>{p=M(p,m)}),p},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(o)}}makeTestFunction(){this.testFunction=t=>N(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),i=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=[];for(let u=0;u<this.inputs.length;++u)o.push({key:this.inputs[u],value:r[u]});const a=new rn(o),l=Ps(this.outputs,a);for(let u=0;u<this.lossFunctions.length;++u){const c=this.lossFunctions[u],h=vt(c(i[u],l[u]));u===0?s=h:s=M(s,h),e.push(s)}for(let u=0;u<this.metricsTensors.length;++u){const c=this.metricsTensors[u][0],h=this.metricsTensors[u][1],d=vt(c(i[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){return jE(this,t,e,s)}async fitDataset(t,e){return UE(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],i=s[1],a=this.makeTrainFunction()(r.concat(i)),l=[];for(const u of a){const c=await u.data();l.push(c[0])}return G(a),Se(s[0],t),Se(s[1],e),Ht(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,i=this.getWeights(s);for(let o=0;o<r.length;++o)s&&!r[o].trainable||e.push({name:r[o].originalName,tensor:i[o]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=lo().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-lo().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Pe(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>Pe(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=Pe(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Pe(ui(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Pe(ui(t)));{const t={};for(const e in this.metrics)t[e]=Pe(ui(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=hi(t.optimizer_config),s=Le(e);let r;if(typeof t.loss=="string")r=Cn(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(o=>Cn(o));else if(t.loss!=null){r={};for(const o in t.loss)r[o]=Cn(t.loss[o])}let i;if(Array.isArray(t.metrics))i=t.metrics.map(o=>Cn(o));else if(t.metrics!=null){i={};for(const o in t.metrics)i[o]=Cn(t.metrics[o])}this.compile({loss:r,metrics:i,optimizer:s})}async save(t,e){if(typeof t=="string"){const u=yg(t);if(u.length===0)throw new x(`Cannot find any save handlers for URL '${t}'`);if(u.length>1)throw new x(`Found more than one (${u.length}) save handlers for URL '${t}'`);t=u[0]}if(t.save==null)throw new x("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await fc(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:ZE,generatedBy:`TensorFlow.js tfjs-layers v${Pd}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const u="optimizer",{data:c,specs:h}=await fc(await this.optimizer.getWeights(),u);s.specs.push(...h),s.data=no([s.data,c])}return this.userDefinedMetadata!=null&&(Od(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){Od(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}an.className="Model",$(an);class Zd extends an{}Zd.className="Functional",$(Zd);var XE,QE,tI,eI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function b2(n,t){"modelTopology"in n||(n={modelTopology:n}),n=n;let e=n.modelTopology;e.model_config!=null&&(e=e.model_config);const s=eI(e),r=tI(s,t);if(n.weightsManifest!=null){const i=await XE.loadWeights(n.weightsManifest,n.pathPrefix,r.weights.map(a=>a.originalName)),o={};for(const a of r.weights)o[a.originalName]=i[a.originalName];r.loadWeights(o),QE(i)}return r}async function nI(n,t){if(t==null&&(t={}),typeof n=="string"){const e=wg(n,t);if(e.length===0)e.push(Yg(n,t));else if(e.length>1)throw new x(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return sI(n,void 0,t)}async function sI(n,t,e){if(e==null&&(e={}),n.load==null)throw new x("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let r=s.modelTopology;r.model_config!=null&&(r=r.model_config);const i=e.strict==null?!0:e.strict,o=s.weightData!=null&&s.weightSpecs!=null&&i,a=Le(hi(r),t,o),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new x("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:u,optimizerWeights:c}=rI(s.weightData,s.weightSpecs);a.loadWeights(u,i),a.optimizer!=null&&c.length>0&&await a.optimizer.setWeights(c),G(u),G(c.map(h=>h.tensor))}return a}function rI(n,t){const e=pc(n,t),s={},r=[];return t.forEach(i=>{i.group==="optimizer"?r.push({name:i.name,tensor:e[i.name]}):s[i.name]=e[i.name]}),{modelWeights:s,optimizerWeights:r}}class hs extends an{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Kr("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new x(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof hs||t instanceof an;let s;if(e){if(s=t,s.outputs.length!==1)throw new x("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new x("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new x("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=rd({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new x(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new x("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=sd(this.outputs[0])}this.inboundNodes=[],new ti({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Dn(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(st(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new an({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new oe("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new oe("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new oe("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new oe("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let i,o={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new x("Legacy serialization format not supported yet.");i=e}else g(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=e.layers,delete e.layers,o=e;const a=new t(o);if(!(a instanceof hs))throw new H(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of i){const c=Le(l,void 0,r);r&&c.setFastWeightInitDuringBuild(!0),a.add(c)}return a}set stopTraining(t){if(this.model==null)throw new x("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new x("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}hs.className="Sequential",$(hs);var iI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Xd(n){return new an(n)}function oI(n){return new hs(n)}function fa(n,t){return t==null&&(t={}),nI(n,t)}function y2(n){return rd(n)}function w2(n,t){iI.registerCallbackConstructor(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class jt extends qn{getConfig(){return{}}}class Qd extends jt{apply(t,e=1){return B1(t,e)}}Qd.className="elu",$(Qd);class tf extends jt{apply(t){return ew(t)}}tf.className="selu",$(tf);class ef extends jt{apply(t){return Ze(t)}}ef.className="relu",$(ef);class nf extends jt{apply(t){return N(()=>yo(6,Ze(t)))}}nf.className="relu6",$(nf);class sf extends jt{apply(t){return t}}sf.className="linear",$(sf);class rf extends jt{apply(t){return Cr(t)}}rf.className="sigmoid",$(rf);class of extends jt{apply(t){return U1(t)}}of.className="hardSigmoid",$(of);class af extends jt{apply(t){return Eo(t)}}af.className="softplus",$(af);class lf extends jt{apply(t){return P1(t)}}lf.className="softsign",$(lf);class uf extends jt{apply(t){return qc(t)}}uf.className="tanh",$(uf);class pa extends jt{apply(t,e=-1){return jc(t,e)}}pa.className="softmax",$(pa);class cf extends jt{apply(t,e=-1){return xy(t,e)}}cf.className="logSoftmax",$(cf);class hf extends jt{apply(t,e=1){return N(()=>v(Cr(v(t,e)),t))}}hf.className="swish",$(hf);class df extends jt{apply(t){return N(()=>v(t,qc(Eo(t))))}}df.className="mish",$(df);function ln(n){return n.getClassName()}function ma(n,t={}){return zs(n,te.getMap().classNameMap,t,"activation")}function un(n){if(n==null){const t={};return t.className="linear",t.config={},ma(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},ma(t)}else return n instanceof jt?n:ma(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ga(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class ff extends qn{}class di extends ff{constructor(t){super(),ga(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return N(()=>{let e=$t([1]);return this.hasL1&&(e=M(e,B(v(this.l1,Ft(t))))),this.hasL2&&(e=M(e,B(v(this.l2,Os(t))))),T(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}di.className="L1L2",$(di);function v2(n){return ga(n),new di({l1:n!=null?n.l1:null,l2:0})}function k2(n){return ga(n),new di({l2:n!=null?n.l2:null,l1:0})}const pf={l1l2:"L1L2"};function rt(n){return Oo(n)}function mf(n,t={}){return zs(n,te.getMap().classNameMap,t,"regularizer")}function mt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in pf?pf[n]:n,config:{}};return mf(e)}else return n instanceof ff?n:mf(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class ba extends J{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=j(t);let s=Ze(t);return this.maxValue!=null&&(s=ee(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}ba.className="ReLU",$(ba);class ya extends J{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=j(t);return Oc(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}ya.className="LeakyReLU",$(ya);class wa extends J{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=pt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=mt(t.alphaRegularizer),this.alphaConstraint=Nt(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new x(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=st(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new It({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=j(t),Gc(t,this.alpha.read())}getConfig(){const t={alphaInitializer:bt(this.alphaInitializer),alphaRegularizer:rt(this.alphaRegularizer),alphaConstraint:At(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}wa.className="PReLU",$(wa);class va extends J{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new H(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=j(t);return go(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}va.className="ELU",$(va);class ka extends J{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=j(t);return v(s,R(ge(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}ka.className="ThresholdedReLU",$(ka);class xa extends J{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new pa().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){const s=j(t);return this.softmax(s,this.axis)}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}xa.className="Softmax",$(xa);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ds(n,t,e){if(typeof n=="number")return Dn(n,t);if(n.length!==t)throw new x(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!C1(r))throw new x(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function Ee(n,t,e,s,r=1){if(n==null)return n;const i=t+(t-1)*(r-1);let o;return e==="same"?o=n:o=n-i+1,Math.floor((o+s-1)/s)}function Oe(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+nn([e-t,0]);else if(s==="same")n=n*t;else throw new x(`Unsupport padding mode: ${s}.`);return n}var Sa,Ea;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ia(n,t){return N(()=>(kt(t),t==="channelsFirst"?Y(n,[0,2,3,1]):n))}function gf(n,t){return N(()=>(kt(t),t==="channelsFirst"?Y(n,[0,2,3,4,1]):n))}function bf(n,t,e,s=1,r="valid",i,o=1){return N(()=>{if(i==null&&(i=ve()),kt(i),n.shape.length!==3)throw new x(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new x(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new x(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(i==="channelsFirst"&&(n=Y(n,[0,2,1])),r==="causal")throw new H("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Hb(n,t,s,r==="same"?"same":"valid","NWC",o);return e!=null&&(a=ke(a,e)),a})}function x2(n,t,e=1,s="valid",r,i=1){return Sa(()=>(Ea(r),bf(n,t,null,e,s,r,i)))}function S2(n,t,e=[1,1],s="valid",r,i){return Sa(()=>(Ea(r),Aa(n,t,null,e,s,r,i)))}function Aa(n,t,e,s=[1,1],r="valid",i,o,a=null){return N(()=>{if(i==null&&(i=ve()),kt(i),n.rank!==3&&n.rank!==4)throw new x(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new x(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Ia(n,i);if(r==="causal")throw new H("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=Pw({x:l,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:o,dataFormat:"NHWC",bias:e,activation:a}),i==="channelsFirst"&&(l=Y(l,[0,3,1,2])),l})}function E2(n,t,e=[1,1,1],s="valid",r,i){return Sa(()=>(Ea(r),yf(n,t,null,e,s,r,i)))}function yf(n,t,e,s=[1,1,1],r="valid",i,o){return N(()=>{if(i==null&&(i=ve()),kt(i),n.rank!==4&&n.rank!==5)throw new x(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new x(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=gf(n,i);if(r==="causal")throw new H("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=Yb(a,t,s,r==="same"?"same":"valid","NDHWC",o),e!=null&&(a=ke(a,e)),i==="channelsFirst"&&(a=Y(a,[0,4,1,2,3])),a})}class fi extends J{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",fi.verifyArgs(e),this.rank=t,zt(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new H(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=ds(e.kernelSize,t,"kernelSize"),this.strides=ds(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,Xt(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,kt(this.dataFormat),this.activation=un(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=pt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Nt(e.biasConstraint),this.biasRegularizer=mt(e.biasRegularizer),this.activityRegularizer=mt(e.activityRegularizer),this.dilationRate=ds(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new x(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new x(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new x(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Zt("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!Po(t.kernelSize,"number",1,3))throw new x(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:ln(this.activation),useBias:this.useBias,biasInitializer:bt(this.biasInitializer),biasRegularizer:rt(this.biasRegularizer),activityRegularizer:rt(this.activityRegularizer),biasConstraint:At(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class fs extends fi{constructor(t,e){super(t,e),this.kernel=null,fs.verifyArgs(e),this.filters=e.filters,zt(this.filters,"filters"),this.kernelInitializer=pt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Nt(e.kernelConstraint),this.kernelRegularizer=mt(e.kernelRegularizer)}build(t){t=st(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new x(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return N(()=>{t=j(t);let s;const r=this.bias==null?null:this.bias.read(),i=Mh(this.activation.getClassName());if(i!=null&&this.rank===2)s=Aa(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,i);else{if(this.rank===1)s=bf(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Aa(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=yf(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new H("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=st(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let i=0;i<s.length;++i){const o=Ee(s[i],this.kernelSize[i],this.padding,this.strides[i],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[i]);e.push(o)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:bt(this.kernelInitializer),kernelRegularizer:rt(this.kernelRegularizer),kernelConstraint:At(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new x(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class ps extends fs{constructor(t){super(2,t),ps.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Po(t.kernelSize,"number",1,2))throw new x(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}ps.className="Conv2D",$(ps);class ms extends fs{constructor(t){super(3,t),ms.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new x(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}ms.className="Conv3D",$(ms);class Na extends ps{constructor(t){if(super(t),this.inputSpec=[new It({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new x(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=st(t),t.length!==4)throw new x("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new x("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new It({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return N(()=>{let s=j(t);if(s.shape.length!==4)throw new x(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,i=r[0];let o,a;this.dataFormat==="channelsFirst"?(o=2,a=3):(o=1,a=2);const l=r[o],u=r[a],c=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],f=this.strides[1],p=Oe(l,d,c,this.padding),m=Oe(u,f,h,this.padding),b=[i,p,m,this.filters];this.dataFormat!=="channelsLast"&&(s=Y(s,[0,2,3,1]));let w=Kb(s,this.kernel.read(),b,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(w=Y(w,[0,3,1,2])),this.bias!=null&&(w=ke(w,this.bias.read(),this.dataFormat)),this.activation!=null&&(w=this.activation.apply(w)),w})}computeOutputShape(t){t=st(t);const e=t.slice();let s,r,i;this.dataFormat==="channelsFirst"?(s=1,r=2,i=3):(s=3,r=1,i=2);const o=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],u=this.strides[1];return e[s]=this.filters,e[r]=Oe(e[r],l,o,this.padding),e[i]=Oe(e[i],u,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Na.className="Conv2DTranspose",$(Na);class Ta extends ms{constructor(t){if(super(t),this.inputSpec=[new It({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new x(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=st(t),t.length!==5)throw new x("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new x("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new It({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return N(()=>{let s=j(t);if(s.shape.length!==5)throw new x(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,i=r[0];let o,a,l;this.dataFormat==="channelsFirst"?(l=2,o=3,a=4):(l=1,o=2,a=3);const u=r[l],c=r[o],h=r[a],d=this.kernelSize[0],f=this.kernelSize[1],p=this.kernelSize[2],m=this.strides[0],b=this.strides[1],w=this.strides[2],S=Oe(u,m,d,this.padding),k=Oe(c,b,f,this.padding),E=Oe(h,w,p,this.padding),D=[i,S,k,E,this.filters];this.dataFormat!=="channelsLast"&&(s=Y(s,[0,2,3,4,1]));let C=Qb(s,this.kernel.read(),D,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(C=Y(C,[0,4,1,2,3])),this.bias!==null&&(C=ke(C,this.bias.read(),this.dataFormat)),this.activation!==null&&(C=this.activation.apply(C)),C})}computeOutputShape(t){t=st(t);const e=t.slice();let s,r,i,o;this.dataFormat==="channelsFirst"?(s=1,r=2,i=3,o=4):(s=4,r=1,i=2,o=3);const a=this.kernelSize[0],l=this.kernelSize[1],u=this.kernelSize[2],c=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[r]=Oe(e[r],c,a,this.padding),e[i]=Oe(e[i],h,l,this.padding),e[o]=Oe(e[o],d,u,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Ta.className="Conv3DTranspose",$(Ta);class wf extends fs{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new x("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new x("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new x(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=pt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=mt(e.depthwiseRegularizer),this.depthwiseConstraint=Nt(e.depthwiseConstraint),this.pointwiseInitializer=pt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=mt(e.pointwiseRegularizer),this.pointwiseConstraint=Nt(e.pointwiseConstraint)}build(t){if(t=st(t),t.length<this.rank+2)throw new x(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new x(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),i=[];for(let a=0;a<this.rank;++a)i.push(1);i.push(s*this.depthMultiplier,this.filters);const o=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,o,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",i,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,o,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,o,this.biasConstraint):this.bias=null,this.inputSpec=[new It({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return N(()=>{t=j(t);let s;if(this.rank===1)throw new H("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Y(t,[0,2,3,1])),s=sw(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=ke(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Y(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=bt(this.depthwiseInitializer),t.pointwiseInitializer=bt(this.pointwiseInitializer),t.depthwiseRegularizer=rt(this.depthwiseRegularizer),t.pointwiseRegularizer=rt(this.pointwiseRegularizer),t.depthwiseConstraint=At(this.depthwiseConstraint),t.pointwiseConstraint=At(this.pointwiseConstraint),t}}wf.className="SeparableConv";class Da extends wf{constructor(t){super(2,t)}}Da.className="SeparableConv2D",$(Da);class Vs extends fs{constructor(t){super(1,t),Vs.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Po(t.kernelSize,"number",1,1))throw new x(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}Vs.className="Conv1D",$(Vs);class Ca extends J{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return N(()=>{if(t=j(t),this.dataFormat==="channelsLast"){const s=Yr(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return Yr(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=Yr(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return Yr(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Ca.className="Cropping2D",$(Ca);class $a extends J{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,kt(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,N1(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return N(()=>{let s=j(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=Y(s,[0,2,3,1]);const i=this.size[0]*r[2],o=this.size[1]*r[3],a=this.interpolation==="nearest"?Cs.resizeNearestNeighbor(s,[i,o]):Cs.resizeBilinear(s,[i,o]);return Y(a,[0,3,1,2])}else{const i=this.size[0]*r[1],o=this.size[1]*r[2];return this.interpolation==="nearest"?Cs.resizeNearestNeighbor(s,[i,o]):Cs.resizeBilinear(s,[i,o])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}$a.className="UpSampling2D",$($a);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function aI(n,t,e=[1,1],s="valid",r,i){return N(()=>{r==null&&(r=ve()),kt(r);let o=Ia(n,r);if(n.rank!==4)throw new x(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new x(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=mo(o,t,e,s==="same"?"same":"valid","NHWC",i),r==="channelsFirst"&&(o=Y(o,[0,3,1,2])),o})}class _a extends fi{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=pt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Nt(t.depthwiseConstraint),this.depthwiseRegularizer=mt(t.depthwiseRegularizer)}build(t){if(t=st(t),t.length<4)throw new x(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new x(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return N(()=>{t=j(t);let s=aI(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=ke(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=st(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,i=Ee(e,this.kernelSize[0],this.padding,this.strides[0]),o=Ee(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,i,o]:[t[0],i,o,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=bt(this.depthwiseInitializer),t.depthwiseRegularizer=rt(this.depthwiseRegularizer),t.depthwiseConstraint=At(this.depthwiseRegularizer),t}}_a.className="DepthwiseConv2D",$(_a);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function vf(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new x("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(i){return i==null||Array.isArray(i)?i:[i]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function kf(n,t,e,s=!1,r,i,o=!1,a=!1){return N(()=>{const l=t.shape.length;if(l<3)throw new x(`Input should be at least 3D, but is ${l}D.`);const u=[1,0].concat(we(2,l));if(t=Y(t,u),i!=null)throw new H("The rnn() functoin of the deeplearn.js backend does not support constants yet.");o&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=R(R(r,"bool"),"float32"),r.rank===l-1&&(r=ne(r,-1)),r=Y(r,u)),s&&(t=es(t,0),r!=null&&(r=es(r,0)));const c=[];let h,d=e;const f=t.shape[0],p=ss(t);let m;r!=null&&(m=ss(r));for(let w=0;w<f;++w){const S=p[w],k=N(()=>n(S,d));if(r==null)h=k[0],d=k[1];else{const E=N(()=>{const D=m[w],C=O(ye(D),D),z=M(v(k[0],D),v(d[0],C)),F=d.map((_,L)=>M(v(k[1][L],D),v(_,C)));return{output:z,newStates:F}});h=E.output,d=E.newStates}a&&c.push(h)}let b;return a&&(b=Xe(c,1)),[h,b,d]})}class Ue extends J{constructor(t){super(t);let e;if(t.cell==null)throw new x("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new bi({cells:t.cell}):e=t.cell,e.stateSize==null)throw new x("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new It({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return we(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Qo(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const i=[];for(const o of e)i.push([t[0],o]);return[r].concat(i)}else return r}computeMask(t,e){return N(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(i=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new H("Constants support is not implemented in RNN yet.");Qo(t)&&(t=t[0]),t=t;const s=this.stateful?t[0]:null,r=t.slice(2);this.inputSpec[0]=new It({shape:[s,null,...r]});const i=[t[0]].concat(t.slice(2));this.cell.build(i);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Wt(this.stateSpec.map(a=>a.shape[a.shape.length-1]),o))throw new x(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(a=>new It({shape:[null,a]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){N(()=>{if(!this.stateful)throw new $e("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new x("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>$t([s,r])):this.states_=[$t([s,this.cell.stateSize])];else if(t==null)G(this.states_),this.keptStates!=null&&(G(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>$t([s,r])):this.states_[0]=$t([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new x(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):G(this.states_);for(let r=0;r<this.states_.length;++r){const i=t[r],o=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,o];if(!Wt(i.shape,a))throw new x(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${i.shape}`);this.states_[r]=i}}this.states_=this.states_.map(r=>Te(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const i=vf(t,s,r,this.numConstants);t=i.inputs,s=i.initialState,r=i.constants;let o=[],a=[];if(s!=null){e.initialState=s,o=o.concat(s),this.stateSpec=[];for(const u of s)this.stateSpec.push(new It({shape:u.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(e.constants=r,o=o.concat(r),this.numConstants=r.length),o[0]instanceof Fe){const u=[t].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const d=super.apply(u,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return N(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let i=e==null?null:e.initialState;t=j(t),i==null&&(this.stateful?i=this.states_:i=this.getInitialState(t));const o=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==o)throw new x(`RNN Layer has ${o} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},u=kf((p,m)=>{const b=this.cell.call([p].concat(m),a);return[b[0],b.slice(1)]},t,i,this.goBackwards,s,null,this.unroll,this.returnSequences),c=u[0],h=u[1],d=u[2];this.stateful&&this.resetStates(d,r);const f=this.returnSequences?h:c;return this.returnState?[f].concat(d):f})}getInitialState(t){return N(()=>{let e=$t(t.shape);return e=B(e,[1,2]),e=Rs(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Vo(e,[1,s]):e):this.cell.stateSize>1?[Vo(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Ue.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign({},s,t,e)}static fromConfig(t,e,s={}){const r=e.cell,i=Le(r,s);return new t(Object.assign(e,{cell:i}))}}Ue.className="RNN",$(Ue);class pi extends J{}class mi extends pi{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,zt(this.units,"units"),this.activation=un(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=pt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=pt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=pt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=mt(t.kernelRegularizer),this.recurrentRegularizer=mt(t.recurrentRegularizer),this.biasRegularizer=mt(t.biasRegularizer),this.kernelConstraint=Nt(t.kernelConstraint),this.recurrentConstraint=Nt(t.recurrentConstraint),this.biasConstraint=Nt(t.biasConstraint),this.dropout=ls([1,nn([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=ls([1,nn([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=st(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return N(()=>{if(t=t,t.length!==2)throw new x(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cn({ones:()=>ye(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cn({ones:()=>ye(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i;const o=this.dropoutMask,a=this.recurrentDropoutMask;o!=null?i=_e(v(t,o),this.kernel.read()):i=_e(t,this.kernel.read()),this.bias!=null&&(i=ke(i,this.bias.read())),a!=null&&(s=v(s,a));let l=M(i,_e(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ln(this.activation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:rt(this.kernelRegularizer),recurrentRegularizer:rt(this.recurrentRegularizer),biasRegularizer:rt(this.biasRegularizer),activityRegularizer:rt(this.activityRegularizer),kernelConstraint:At(this.kernelConstraint),recurrentConstraint:At(this.recurrentConstraint),biasConstraint:At(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign({},t,e)}}mi.className="SimpleRNNCell",$(mi);class Ma extends Ue{constructor(t){t.cell=new mi(t),super(t)}call(t,e){return N(()=>{this.cell.dropoutMask!=null&&(G(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(G(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return new t(e)}}Ma.className="SimpleRNN",$(Ma);class gi extends pi{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new x("GRUCell does not support reset_after parameter set to true.");this.units=t.units,zt(this.units,"units"),this.activation=un(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=un(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=pt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=pt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=pt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=mt(t.kernelRegularizer),this.recurrentRegularizer=mt(t.recurrentRegularizer),this.biasRegularizer=mt(t.biasRegularizer),this.kernelConstraint=Nt(t.kernelConstraint),this.recurrentConstraint=Nt(t.recurrentConstraint),this.biasConstraint=Nt(t.biasConstraint),this.dropout=ls([1,nn([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=ls([1,nn([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=st(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return N(()=>{if(t=t,t.length!==2)throw new x(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cn({ones:()=>ye(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cn({ones:()=>ye(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,o=this.recurrentDropoutMask;let a,l,u;0<this.dropout&&this.dropout<1&&(t=v(t,i[0]));let c=_e(t,this.kernel.read());this.useBias&&(c=ke(c,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=v(r,o[0]));const h=this.recurrentKernel.read(),[d,f]=se(h,[2*this.units,this.units],h.rank-1),p=_e(r,d),[m,b,w]=se(c,3,c.rank-1),[S,k]=se(p,2,p.rank-1);a=this.recurrentActivation.apply(M(m,S)),l=this.recurrentActivation.apply(M(b,k));const E=_e(v(l,r),f);u=this.activation.apply(M(w,E));const D=M(v(a,r),v(M(1,St(a)),u));return[D,D]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ln(this.activation),recurrentActivation:ln(this.recurrentActivation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:rt(this.kernelRegularizer),recurrentRegularizer:rt(this.recurrentRegularizer),biasRegularizer:rt(this.biasRegularizer),activityRegularizer:rt(this.activityRegularizer),kernelConstraint:At(this.kernelConstraint),recurrentConstraint:At(this.recurrentConstraint),biasConstraint:At(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign({},t,e)}}gi.className="GRUCell",$(gi);class za extends Ue{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new gi(t),super(t)}call(t,e){return N(()=>{this.cell.dropoutMask!=null&&(G(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(G(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}za.className="GRU",$(za);class Hs extends pi{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,zt(this.units,"units"),this.activation=un(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=un(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=pt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=pt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=pt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=mt(t.kernelRegularizer),this.recurrentRegularizer=mt(t.recurrentRegularizer),this.biasRegularizer=mt(t.biasRegularizer),this.kernelConstraint=Nt(t.kernelConstraint),this.recurrentConstraint=Nt(t.recurrentConstraint),this.biasConstraint=Nt(t.biasConstraint),this.dropout=ls([1,nn([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=ls([1,nn([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=st(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const i=this.biasInitializer,o=this.units;r=new(e=class extends le{apply(l,u){const c=i.apply([o]),h=new jo().apply([o]),d=i.apply([o*2]);return Gh(Gh(c,h),d)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return N(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new x(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const i=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cn({ones:()=>ye(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cn({ones:()=>ye(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,a=this.recurrentDropoutMask;let l,u,c,h;0<this.dropout&&this.dropout<1&&(t=v(t,o[0]));let d=_e(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=v(r,a[0])),d=M(d,_e(r,this.recurrentKernel.read())),this.useBias&&(d=ke(d,this.bias.read()));const[f,p,m,b]=se(d,4,d.rank-1);l=this.recurrentActivation.apply(f),u=this.recurrentActivation.apply(p),c=M(v(u,i),v(l,this.activation.apply(m))),h=this.recurrentActivation.apply(b);const w=v(h,this.activation.apply(c));return[w,w,c]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:ln(this.activation),recurrentActivation:ln(this.recurrentActivation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:rt(this.kernelRegularizer),recurrentRegularizer:rt(this.recurrentRegularizer),biasRegularizer:rt(this.biasRegularizer),activityRegularizer:rt(this.activityRegularizer),kernelConstraint:At(this.kernelConstraint),recurrentConstraint:At(this.recurrentConstraint),biasConstraint:At(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign({},t,e)}}Hs.className="LSTMCell",$(Hs);class Fa extends Ue{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Hs(t),super(t)}call(t,e){return N(()=>{this.cell.dropoutMask!=null&&(G(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(G(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Fa.className="LSTM",$(Fa);class bi extends pi{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return N(()=>{t=t;let s=t.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const i=[];let o;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?o=[t[0]].concat(s):o=[o[0]].concat(s),o=l.call(o,e),i.push(o.slice(1))}s=[];for(const a of i.slice().reverse())s.push(...a);return[o[0]].concat(s)})}build(t){Qo(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{_n(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=i=>({className:i.getClassName(),config:i.getConfig()}),r={cells:this.cells.map(e)};return Object.assign({},t,r)}static fromConfig(t,e,s={}){const r=[];for(const i of e.cells)r.push(Le(i,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return ta(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,i=t.splice(r);for(let o=0;o<s.weights.length;++o)e.push([s.weights[o],i[o]])}ea(e)}}bi.className="StackedRNNCells",$(bi);function cn(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:i}=n,o=()=>i!=null?i(t(),e):Hh(t(),e),a=()=>Bs(o,t,s);return!r||r<=1?Te(a().clone()):Array(r).fill(void 0).map(a).map(u=>Te(u.clone()))}var I2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var lI=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class A2 extends null{}class xf extends Ue{constructor(t){if(t.unroll)throw new H("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new H("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new It({ndim:5})]}call(t,e){return N(()=>{if(this.cell.dropoutMask!=null&&(G(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(G(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new x("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,i=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:i})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return N(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),i=[r[0],...r.slice(2)],o=$t(i);return Array.isArray(e)?Array(e.length).fill(o):[o]})}resetStates(t,e=!1){N(()=>{if(!this.stateful)throw new $e("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),i=[r[0],...r.slice(2)];if(s[0]==null)throw new x("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>$t(i)):this.states_=[$t(i)];else if(t==null)G(this.states_),this.keptStates!=null&&(G(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>$t(i)):this.states_[0]=$t(i);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new x(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):G(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],u=i;if(!Wt(l.shape,u))throw new x(`State ${a} is incompatible with layer ${this.name}: expected shape=${u}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Te(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:i,strides:o,dilationRate:a}=this.cell,l=e==="channelsFirst",u=t[l?3:2],c=t[l?4:3],h=Ee(u,r[0],i,o[0],a[0]),d=Ee(c,r[1],i,o[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}xf.className="ConvRNN2D";class yi extends Hs{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:i,dataFormat:o,dilationRate:a}=t;super(Object.assign({},t,{units:e})),this.filters=e,zt(this.filters,"filters"),this.kernelSize=ds(s,2,"kernelSize"),this.kernelSize.forEach(l=>zt(l,"kernelSize")),this.strides=ds(r||1,2,"strides"),this.strides.forEach(l=>zt(l,"strides")),this.padding=i||"valid",Xt(this.padding),this.dataFormat=o||"channelsLast",kt(this.dataFormat),this.dilationRate=ds(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>zt(l,"dilationRate"))}build(t){var e;t=st(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new x(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],i=4,o=this.kernelSize.concat([r,this.filters*i]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*i]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const u=this.biasInitializer,c=this.filters;l=new(e=class extends le{apply(d,f){const p=u.apply([c]),m=Ye([c]),b=u.apply([c*2]);return Go([p,m,b])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*i],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return N(()=>{if(t.length!==3)throw new x(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],i=t[1],o=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=cn({ones:()=>ye(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,u=(Ie,ce,We)=>!ce||!ce[We]?Ie:v(ce[We],Ie);let c=u(r,l,0),h=u(r,l,1),d=u(r,l,2),f=u(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=cn({ones:()=>ye(i),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const p=this.recurrentDropoutMask;let m=u(i,p,0),b=u(i,p,1),w=u(i,p,2),S=u(i,p,3);const k=3,[E,D,C,z]=se(this.kernel.read(),a,k),[F,_,L,P]=this.useBias?se(this.bias.read(),a):[null,null,null,null];c=this.inputConv(c,E,F,this.padding),h=this.inputConv(h,D,_,this.padding),d=this.inputConv(d,C,L,this.padding),f=this.inputConv(f,z,P,this.padding);const[W,K,tt,X]=se(this.recurrentKernel.read(),a,k);m=this.recurrentConv(m,W),b=this.recurrentConv(b,K),w=this.recurrentConv(w,tt),S=this.recurrentConv(S,X);const dt=this.recurrentActivation.apply(M(c,m)),et=this.recurrentActivation.apply(M(h,b)),wt=M(v(et,o),v(dt,this.activation.apply(M(d,w)))),yt=v(this.recurrentActivation.apply(M(f,S)),this.activation.apply(wt));return[yt,yt,wt]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=lI(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign({},s,r)}inputConv(t,e,s,r){const i=Zn(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?ke(i,s,this.dataFormat):i}recurrentConv(t,e){return Zn(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}yi.className="ConvLSTM2DCell",$(yi);class La extends xf{constructor(t){const e=new yi(t);super(Object.assign({},t,{cell:e}))}static fromConfig(t,e){return new t(e)}}La.className="ConvLSTM2D",$(La);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class wi extends J{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,i=this.getNoiseShape(s);return Bs(()=>Hh(s,this.rate,i,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}wi.className="Dropout",$(wi);class Ra extends wi{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}Ra.className="SpatialDropout1D",$(Ra);class Oa extends J{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,zt(this.units,"units"),this.activation=un(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=pt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=pt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Nt(t.kernelConstraint),this.biasConstraint=Nt(t.biasConstraint),this.kernelRegularizer=mt(t.kernelRegularizer),this.biasRegularizer=mt(t.biasRegularizer),this.activityRegularizer=mt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=st(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=st(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t),r=Mh(this.activation.getClassName());let i;return r!=null?i=_e(s,this.kernel.read(),r,this.bias?this.bias.read():null):(i=_e(s,this.kernel.read()),this.bias!=null&&(i=ke(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))),i})}getConfig(){const t={units:this.units,activation:ln(this.activation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:rt(this.kernelRegularizer),biasRegularizer:rt(this.biasRegularizer),activityRegularizer:rt(this.activityRegularizer),kernelConstraint:At(this.kernelConstraint),biasConstraint:At(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Oa.className="Dense",$(Oa);class Ba extends J{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=st(t);for(const e of t.slice(1))if(e==null)throw new x(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],en(t,1)]}call(t,e){return N(()=>{this.invokeCallHook(t,e);let s=j(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let i=2;i<s.rank;++i)r.push(i);r.push(1),s=Y(s,r)}return O1(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}Ba.className="Flatten",$(Ba);class Pa extends J{constructor(t){super(t),this.supportsMasking=!0,this.activation=un(t.activation)}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t);return this.activation.apply(s)})}getConfig(){const t={activation:ln(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}Pa.className="Activation",$(Pa);class Ua extends J{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return N(()=>(t=j(t),L1(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}Ua.className="RepeatVector",$(Ua);class Wa extends J{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let i=1,o=null;for(let l=0;l<r.length;++l){const u=r[l];if(this.isUnknown(u))if(o===null)o=l;else throw new x("Can only specifiy one unknown dimension.");else i*=u}const a=en(t);if(o!==null){if(i===0||a%i!==0)throw new x(s);r[o]=a/i}else if(a!==i)throw new x(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t),r=s.shape,i=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return T(s,i)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}Wa.className="Reshape",$(Wa);class Ga extends J{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=we(1,t.dims.length+1);if(!Wt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new It({ndim:this.dims.length+1})]}computeOutputShape(t){t=st(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return Y(j(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}Ga.className="Permute",$(Ga);class Va extends J{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=j(t);return zc(Ar(s,this.maskValue),-1)}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t),o=zc(Ar(s,this.maskValue),-1,!0);return v(s,R(o,s.dtype))})}}Va.className="Masking",$(Va);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ha extends J{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(at(t.inputLength))}this.inputDim=t.inputDim,zt(this.inputDim,"inputDim"),this.outputDim=t.outputDim,zt(this.outputDim,"outputDim"),this.embeddingsInitializer=pt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=mt(t.embeddingsRegularizer),this.activityRegularizer=mt(t.activityRegularizer),this.embeddingsConstraint=Nt(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return N(()=>this.maskZero?(t=j(t),Ar(t,Q(t))):null)}computeOutputShape(t){if(t=st(t),this.inputLength==null)return[...t,this.outputDim];const e=at(this.inputLength);if(e.length!==t.length-1)throw new x(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const i=e[r],o=t[r+1];if(i!=null&&o!=null&&i!==o)throw new x(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);i==null&&(e[s]=o),s++}}return[t[0],...e,this.outputDim]}call(t,e){return N(()=>{this.invokeCallHook(t,e);let s=j(t);s.dtype!=="int32"&&(s=Ls(s,"int32"));const r=Vh(this.embeddings.read(),T(s,[s.size]));return T(r,st(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:bt(this.embeddingsInitializer),embeddingsRegularizer:rt(this.embeddingsRegularizer),activityRegularizer:rt(this.activityRegularizer),embeddingsConstraint:At(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}Ha.className="Embedding",$(Ha);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Fn extends J{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new H}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const i=t[t.length-e.length+r],o=e[r];if(i==null||o==null||i<0||o<0)s.push(null);else if(i===1)s.push(o);else if(o===1)s.push(i);else{if(i!==o)throw new x("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(i)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[st(t)]),t=t,t.length<2)throw new x(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const i of t)i!=null&&i[0]!==null&&e.push(i[0]);if(e=tn(e),e.length>1)throw new x(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let i=1;i<t.length;++i){const o=t[i]==null?null:t[i].slice(1);s=this.computeElementwiseOpOutputShape(s,o)}const r=t.map(i=>i.length);t.indexOf(null)===-1&&tn(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return N(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(i=>i.rank);if(r.indexOf(null)===-1){const i=nn(r);for(let o of t){const a=o.rank;for(let l=0;l<i-a;++l)o=Rs(o,1);s.push(o)}return this.mergeFunction(s)}else{let i=!1;for(const l of t){const u=l.rank;if(u==null){const c=l.shape,h=c[0],d=c.slice(1).concat([h]);let f=T(l,[h].concat(en(c.slice(1))));f=Y(f,[1,0]),f=T(f,d),s.push(f),i=!0}else if(u>1){const c=we(1,u).concat([0]);s.push(Y(l,c)),i=!0}else s.push(l)}let o=this.mergeFunction(s);const a=o.rank;if(i){if(a==null){const l=o.shape,u=l.length,c=l[u-1],h=[c].concat(l.slice(0,l.length-1));o=T(Y(T(o,[-1,c]),[1,0]),h)}else if(a>1){const l=[a-1].concat(we(0,a-1));o=Y(o,l)}}return o}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,i)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=tn(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return N(()=>{if(e==null)return null;if(!Array.isArray(e))throw new x("`mask` should be an Array");if(!Array.isArray(t))throw new x("`inputs` should be an Array");if(e.length!==t.length)throw new x(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:ne(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=Qn(s,e[r]);return s})}}class js extends Fn{constructor(t){super(t)}mergeFunction(t){return N(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=M(e,t[s]);return e})}}js.className="Add",$(js);function N2(n){return Array.isArray(n)?new js({}).apply(n):new js(n)}class qs extends Fn{constructor(t){super(t)}mergeFunction(t){return N(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=v(e,t[s]);return e})}}qs.className="Multiply",$(qs);function T2(n){return Array.isArray(n)?new qs({}).apply(n):new qs(n)}class Ks extends Fn{constructor(t){super(t)}mergeFunction(t){return N(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=M(e,t[s]);return v(1/t.length,e)})}}Ks.className="Average",$(Ks);function D2(n){return Array.isArray(n)?new Ks({}).apply(n):new Ks(n)}class Js extends Fn{constructor(t){super(t)}mergeFunction(t){return N(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=An(e,t[s]);return e})}}Js.className="Maximum",$(Js);function C2(n){return Array.isArray(n)?new Js({}).apply(n):new Js(n)}class Ys extends Fn{constructor(t){super(t)}mergeFunction(t){return N(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=yo(e,t[s]);return e})}}Ys.className="Minimum",$(Ys);function $2(n){return Array.isArray(n)?new Ys({}).apply(n):new Ys(n)}class Zs extends Fn{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new x("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const i=t[r].slice();i.splice(this.axis,1);let o=!1;for(const a of s)if(Wt(a,i)){o=!0;break}o||s.push(i)}if(s.length>1)throw new x("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return N(()=>Go(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new x("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const i of e.slice(1)){if(s[r]==null||i[r]==null){s[r]=null;break}s[r]+=i[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new x("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new x("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new x(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return N(()=>{let s=!0;if(e.forEach(o=>{if(o!=null){s=!1;return}}),s)return null;const r=[];for(let o=0;o<t.length;++o)e[o]==null?r.push(R(ye(t[o]),"bool")):e[o].rank<t[o].rank?r.push(ne(e[o],-1)):r.push(e[o]);const i=Pt(r,this.axis);return hb(i,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Zs.className="Concatenate",$(Zs);function _2(n){return Array.isArray(n)?new Zs({}).apply(n):new Zs(n)}function Xs(n,t){for(;n<0;)n+=t;return n}function uI(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new H("batchDot is not implemented for tensors of 4D or higher rank yet");if(g(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),g(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new H("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const i=e;return N(()=>{let o;if(s>r){o=s-r;const l=[];for(let u=0;u<o;++u)l.push(1);t=T(t,t.shape.concat(l))}else if(r>s){o=r-s;const l=[];for(let u=0;u<o;++u)l.push(1);n=T(n,n.shape.concat(l))}else o=0;let a;if(n.shape.length===2&&t.shape.length===2)i[0]===i[1]?a=B(v(n,t),i[0]):a=B(v(Y(n,[1,0]),t),i[1]);else{const l=i[0]!==n.shape.length-1,u=i[1]===t.shape.length-1;a=ot(n,t,l,u)}if(o>0){let l;s>r?l=s+r-3:l=s-1;const u=[];for(let c=l;c<l+o;++c)u.push(c);a=ns(a,u)}return a.shape.length===1&&(a=ne(a,1)),a})}class ja extends Fn{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){g(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new H("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new x(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new x(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((i,o)=>Xs(i,t[o].shape.length)):r=[Xs(this.axes,e.shape.length),Xs(this.axes,s.shape.length)],this.normalize&&(e=si(e,r[0]),s=si(s,r[1])),uI(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[Xs(this.axes,t.length),Xs(this.axes,e.length)],s}computeOutputShape(t){g(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new H("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const i=e.concat(s);return i.length===1&&i.push(1),i}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}ja.className="Dot",$(ja);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class qa extends J{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t);return Bs(()=>M(Zr(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}qa.className="GaussianNoise",$(qa);class Ka extends J{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return N(()=>{this.invokeCallHook(t,e);const s=j(t);return this.rate>0&&this.rate<1?Bs(()=>{const i=Math.sqrt(this.rate/(1-this.rate));return v(s,Zr(s.shape,1,i))},()=>s,e.training||!1):s})}}Ka.className="GaussianDropout",$(Ka);class Ja extends J{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||j(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return N(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Bs(()=>{const i=j(t),l=-1.6732632423543772*1.0507009873554805;let u=As(Dr(s),this.rate);u=Ls(u,"float32");const c=((1-this.rate)*(1+this.rate*l**2))**-.5,h=-c*l*this.rate,d=M(v(i,u),v(M(u,-1),l));return M(v(d,c),h)},()=>j(t),e.training||!1)}return t})}}Ja.className="AlphaDropout",$(Ja);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Qs(n,t,e,s,r,i=.001){let o;if(n.rank===2)o=Tb(n,t,e,s,r,i);else if(n.rank===3)o=Cb(n,t,e,s,r,i);else if(n.rank===4)o=_b(n,t,e,s,r,i);else throw new H(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return o}function cI(n,t,e,s,r=.001){return N(()=>{const i=Ns(n,s),o=i.mean,a=i.variance;return[Qs(n,o,a,e,t,r),o,a]})}function hI(n,t,e,s,r=.001){return N(()=>{const i=Ns(n,s),o=i.mean,a=i.variance,l=[];for(const p of we(0,n.rank))s.indexOf(p)!==-1?l.push(1):l.push(n.shape[p]);const u=T(o,l),c=T(a,l),h=t==null?null:T(t,l),d=e==null?null:T(e,l);return[Qs(n,u,c,d,h,r),o,a]})}function dI(n,t,e,s,r=.001){return Wt(s.slice().sort(),we(0,n.rank-1))?cI(n,t,e,s,r):hI(n,t,e,s,r)}class Ya extends J{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=pt(t.betaInitializer||"zeros"),this.gammaInitializer=pt(t.gammaInitializer||"ones"),this.movingMeanInitializer=pt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=pt(t.movingVarianceInitializer||"ones"),this.betaConstraint=Nt(t.betaConstraint),this.gammaConstraint=Nt(t.gammaConstraint),this.betaRegularizer=mt(t.betaRegularizer),this.gammaRegularizer=mt(t.gammaRegularizer)}build(t){t=st(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new x(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new It({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return N(()=>{const s=e.training==null?!1:e.training,r=j(t),i=r.shape,o=i.length,a=we(0,o),l=this.axis>=0?this.axis:this.axis+o;a.splice(l,1);const u=Dn(1,o);u[l]=i[l];const c=a.slice();c.sort();const h=!Wt(c,we(0,o).slice(0,o-1)),d=()=>{if(h){const S=T(this.movingMean.read(),u),k=T(this.movingVariance.read(),u),E=this.center?T(this.beta.read(),u):null,D=this.scale?T(this.gamma.read(),u):null;return Qs(r,S,k,E,D,this.epsilon)}else return Qs(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[f,p,m]=dI(r,this.gamma.read(),this.beta.read(),a,this.epsilon),b=(S,k,E)=>{N(()=>{const D=1-E,C=S.read(),z=v(O(C,k),D);S.write(O(C,z))})};return b(this.movingMean,p,this.momentum),b(this.movingVariance,m,this.momentum),f})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:bt(this.betaInitializer),gammaInitializer:bt(this.gammaInitializer),movingMeanInitializer:bt(this.movingMeanInitializer),movingVarianceInitializer:bt(this.movingVarianceInitializer),betaRegularizer:rt(this.betaRegularizer),gammaRegularizer:rt(this.gammaRegularizer),betaConstraint:At(this.betaConstraint),gammaConstraint:At(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Ya.className="BatchNormalization",$(Ya);class Za extends J{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=pt(t.betaInitializer||"zeros"),this.gammaInitializer=pt(t.gammaInitializer||"ones"),this.betaRegularizer=mt(t.betaRegularizer),this.gammaRegularizer=mt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=st(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=e);for(const i of this.axis)if(i<0||i>=e)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==tn(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(i=>t[i]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=j(t),r=s.shape,i=r.length;return N(()=>{let{mean:a,variance:l}=Ns(s,this.axis,!0);const u=Dn(1,i);for(const m of this.axis)u[m]=r[m];const c=m=>m!=null&&m.shape.length!==i?T(m,u):m;let h=this.scale?c(this.gamma.read()):null,d=this.center?c(this.beta.read()):null;const f=[],p=[];for(let m=0;m<i;++m)this.axis.indexOf(m)!==-1?(f.push(r[m]),p.push(1)):(f.push(1),p.push(r[m]));return a=De(a,f),l=De(l,f),h!=null&&(h=De(h,p)),d!=null&&(d=De(d,p)),Qs(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:bt(this.betaInitializer),gammaInitializer:bt(this.gammaInitializer),betaRegularizer:rt(this.betaRegularizer),gammaRegularizer:rt(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}Za.className="LayerNormalization",$(Za);var fI,pI,Sf;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function M2(n,t){return pI(()=>{if(n.rank!==3)throw new Sf(`temporalPadding expects input tensor to be 3-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[1,1]),t.length!==2)throw new Sf(`temporalPadding expects input padding pattern to be a length-2 array, but received a length-${t.length} array.`);const e=[[0,0],t,[0,0]];return fI.pad(n,e)})}function mI(n,t,e){return N(()=>{if(n.rank!==4)throw new x(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new x("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=ve()),e!=="channelsLast"&&e!=="channelsFirst")throw new x(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Wc(n,s)})}class Xa extends J{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?ve():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new x(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new x(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new x(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new It({ndim:4})]}computeOutputShape(t){t=st(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return N(()=>mI(j(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Xa.className="ZeroPadding2D",$(Xa);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function vi(n,t,e,s,r,i){return N(()=>{kt(r),Fh(i),Xt(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=ve()),i==null&&(i="max"),n=Ia(n,r);let o;const a=s==="same"?"same":"valid";return i==="max"?o=Ay(n,t,e,a):o=xb(n,t,e,a),r==="channelsFirst"&&(o=Y(o,[0,3,1,2])),o})}function Ef(n,t,e,s,r,i){return N(()=>{kt(r),Fh(i),Xt(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=ve()),i==null&&(i="max"),n=gf(n,r);let o;const a=s==="same"?"same":"valid";return i==="max"?o=Ty(n,t,e,a):o=Eb(n,t,e,a),r==="channelsFirst"&&(o=Y(o,[0,4,1,2,3])),o})}class If extends J{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new x(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(zt(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new x(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);zt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,Xt(this.padding),this.inputSpec=[new It({ndim:3})]}computeOutputShape(t){t=st(t);const e=Ee(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return N(()=>{this.invokeCallHook(t,e),t=Rs(j(t),2);const s=this.poolingFunction(j(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return ns(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class Qa extends If{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),vi(t,e,s,r,i,"max")}}Qa.className="MaxPooling1D",$(Qa);class tl extends If{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),vi(t,e,s,r,i,"avg")}}tl.className="AveragePooling1D",$(tl);class Af extends J{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new x(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];zt(this.poolSize,"poolSize"),zt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,kt(this.dataFormat),Xt(this.padding),this.inputSpec=[new It({ndim:4})]}computeOutputShape(t){t=st(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=Ee(e,this.poolSize[0],this.padding,this.strides[0]),s=Ee(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return N(()=>(this.invokeCallHook(t,e),this.poolingFunction(j(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class el extends Af{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),vi(t,e,s,r,i,"max")}}el.className="MaxPooling2D",$(el);class nl extends Af{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),vi(t,e,s,r,i,"avg")}}nl.className="AveragePooling2D",$(nl);class Nf extends J{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new x(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];zt(this.poolSize,"poolSize"),zt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,kt(this.dataFormat),Xt(this.padding),this.inputSpec=[new It({ndim:5})]}computeOutputShape(t){t=st(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=Ee(e,this.poolSize[0],this.padding,this.strides[0]),s=Ee(s,this.poolSize[1],this.padding,this.strides[1]),r=Ee(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return N(()=>(this.invokeCallHook(t,e),this.poolingFunction(j(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class sl extends Nf{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),Ef(t,e,s,r,i,"max")}}sl.className="MaxPooling3D",$(sl);class rl extends Nf{constructor(t){super(t)}poolingFunction(t,e,s,r,i){return kt(i),Xt(r),Ef(t,e,s,r,i,"avg")}}rl.className="AveragePooling3D",$(rl);class Tf extends J{constructor(t){super(t),this.inputSpec=[new It({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new H}}class il extends Tf{constructor(t){super(t||{})}call(t,e){return N(()=>{const s=j(t);return vt(s,1)})}}il.className="GlobalAveragePooling1D",$(il);class ol extends Tf{constructor(t){super(t||{})}call(t,e){return N(()=>{const s=j(t);return Ce(s,1)})}}ol.className="GlobalMaxPooling1D",$(ol);class Df extends J{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,kt(this.dataFormat),this.inputSpec=[new It({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new H}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class al extends Df{call(t,e){return N(()=>{const s=j(t);return this.dataFormat==="channelsLast"?vt(s,[1,2]):vt(s,[2,3])})}}al.className="GlobalAveragePooling2D",$(al);class ll extends Df{call(t,e){return N(()=>{const s=j(t);return this.dataFormat==="channelsLast"?Ce(s,[1,2]):Ce(s,[2,3])})}}ll.className="GlobalMaxPooling2D",$(ll);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Cf extends J{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,i=Le(r,s);delete e.layer;const o={layer:i};return Object.assign(o,e),new t(o)}}class ul extends Cf{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=st(t),t.length<3)throw new x(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=st(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return N(()=>(t=j(t),kf((o,a)=>[j(this.layer.call(o,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}ul.className="TimeDistributed",$(ul);function gI(n){$n(A1,"BidirectionalMergeMode",n)}const bI="concat";class cl extends Cf{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=Le(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=Le(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?bI:t.mergeMode,gI(this.mergeMode),t.weights)throw new H("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,i;return this.returnState&&(i=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[s].concat(i).concat(i.slice()):Ht(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const i=vf(t,s,r,this.numConstants);if(t=i.inputs,s=i.initialState,r=i.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const o=[],a=[];if(s!=null){const u=s.length;if(u%2>0)throw new x("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,o.push(...s);const c=s.map(h=>new It({shape:h.shape}));this.forwardLayer.stateSpec=c.slice(0,u/2),this.backwardLayer.stateSpec=c.slice(u/2),a.push(...c)}if(r!=null)throw new H("Support for constants in Bidirectional layers is not implemented yet.");const l=o[0]instanceof Fe;for(const u of o)if(u instanceof Fe!==l)throw new x("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const u=[t].concat(o),c=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=c;const d=super.apply(u,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return N(()=>{const s=e.initialState;let r,i;if(s==null)r=this.forwardLayer.call(t,e),i=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),u=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),i=this.backwardLayer.call(t,Object.assign(e,{initialState:u}))}let o;this.returnState&&(Array.isArray(r)&&(o=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=es(i,1));let a;return this.mergeMode==="concat"?a=Go([r,i]):this.mergeMode==="sum"?a=M(r,i):this.mergeMode==="ave"?a=v(.5,M(r,i)):this.mergeMode==="mul"?a=v(r,i):this.mergeMode==null&&(a=[r,i]),this.returnState?this.mergeMode==null?a.concat(o):[a].concat(o):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){_n(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),_n(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const i=this.forwardLayer.states.map(o=>null);return Array.isArray(s)?s.concat(i).concat(i):[s].concat(i).concat(i)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=Le(e.layer);if(delete e.layer,e.numConstants!=null)throw new H("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}cl.className="Bidirectional",$(cl);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class hl extends J{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return N(()=>(t=j(t),t.dtype!=="float32"&&(t=Ls(t,"float32")),M(v(t,this.scale),this.offset)))}}hl.className="Rescaling",$(hl);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function z2(n){return new us(n)}function F2(n){return new va(n)}function L2(n){return new ba(n)}function R2(n){return new ya(n)}function O2(n){return new wa(n)}function B2(n){return new xa(n)}function P2(n){return new ka(n)}function U2(n){return new Vs(n)}function W2(n){return new ps(n)}function G2(n){return new Na(n)}function V2(n){return new ms(n)}function H2(n){return new Ta(n)}function j2(n){return new Da(n)}function q2(n){return new Ca(n)}function K2(n){return new $a(n)}function J2(n){return new _a(n)}function Y2(n){return new Pa(n)}function yI(n){return new Oa(n)}function Z2(n){return new wi(n)}function X2(n){return new Ra(n)}function Q2(n){return new Ba(n)}function tD(n){return new Ua(n)}function eD(n){return new Wa(n)}function nD(n){return new Ga(n)}function sD(n){return new Ha(n)}function rD(n){return new js(n)}function iD(n){return new Ks(n)}function oD(n){return new Zs(n)}function aD(n){return new Js(n)}function lD(n){return new Ys(n)}function uD(n){return new qs(n)}function cD(n){return new ja(n)}function hD(n){return new Ya(n)}function dD(n){return new Za(n)}function fD(n){return new Xa(n)}function $f(n){return new tl(n)}function pD(n){return $f(n)}function mD(n){return $f(n)}function _f(n){return new nl(n)}function gD(n){return _f(n)}function bD(n){return _f(n)}function Mf(n){return new rl(n)}function yD(n){return Mf(n)}function wD(n){return Mf(n)}function vD(n){return new il(n)}function kD(n){return new al(n)}function wI(n){return new ol(n)}function vI(n){return new ll(n)}function kI(n){return new Qa(n)}function xI(n){return new el(n)}function xD(n){return new sl(n)}function SD(n){return new za(n)}function ED(n){return new gi(n)}function ID(n){return new Fa(n)}function AD(n){return new Hs(n)}function ND(n){return new Ma(n)}function TD(n){return new mi(n)}function DD(n){return new La(n)}function CD(n){return new yi(n)}function $D(n){return new Ue(n)}function _D(n){return new bi(n)}function MD(n){return new cl(n)}function zD(n){return new ul(n)}const FD=wI,LD=vI,RD=kI,OD=xI;function BD(n){return new qa(n)}function PD(n){return new Ka(n)}function UD(n){return new Ja(n)}function WD(n){return new Va(n)}function GD(n){return new hl(n)}var hn,Ln;function VD(n,t){return Ln.binaryAccuracy(n,t)}function HD(n,t){return Ln.binaryCrossentropy(n,t)}function jD(n,t){return Ln.sparseCategoricalAccuracy(n,t)}function qD(n,t){return Ln.categoricalAccuracy(n,t)}function KD(n,t){return Ln.categoricalCrossentropy(n,t)}function JD(n,t){return Ln.precision(n,t)}function YD(n,t){return Ln.recall(n,t)}function ZD(n,t){return hn.cosineProximity(n,t)}function XD(n,t){return hn.meanAbsoluteError(n,t)}function QD(n,t){return hn.meanAbsolutePercentageError(n,t)}function tC(n,t){return hn.meanAbsolutePercentageError(n,t)}function eC(n,t){return hn.meanAbsolutePercentageError(n,t)}function nC(n,t){return hn.meanSquaredError(n,t)}function sC(n,t){return hn.meanSquaredError(n,t)}function rC(n,t){return hn.meanSquaredError(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var zf,SI;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function iC(n){return new SI(n)}function oC(n){return zf.l1(n)}function aC(n){return zf.l2(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class EI extends cs{constructor(){super(...arguments),this.model=null}setModel(t){if(!(t instanceof an))throw new Error("model must be a LayersModel, not some other Container");this.model=t}}function ki(n,t){return n<t}function Ff(n,t){return n>t}class II extends EI{constructor(t){if(super(),t==null&&(t={}),t.restoreBestWeights)throw new H("restoreBestWeights = True is not implemented in EarlyStopping yet.");this.monitor=t.monitor||"val_loss",this.minDelta=Math.abs(t.minDelta||0),this.patience=t.patience||0,this.verbose=t.verbose||0,this.mode=t.mode||"auto",this.baseline=t.baseline,["auto","min","max"].indexOf(this.mode)===-1&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode="auto"),this.mode==="min"?this.monitorFunc=ki:this.mode==="max"?this.monitorFunc=Ff:this.monitor.indexOf("acc")!==-1?this.monitorFunc=Ff:this.monitorFunc=ki,this.monitorFunc===ki&&(this.minDelta*=-1)}async onTrainBegin(t){this.wait=0,this.stoppedEpoch=0,this.baseline!=null?this.best=this.baseline:this.best=this.monitorFunc===ki?1/0:-1/0}async onEpochEnd(t,e){await on(e);const s=this.getMonitorValue(e);s!=null&&(this.monitorFunc(s-this.minDelta,this.best)?(this.best=s,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=t,this.model.stopTraining=!0)))}async onTrainEnd(t){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(t){t==null&&(t={});const e=t[this.monitor];return e==null&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(t)}`),e}}function AI(n){return new II(n)}const lC={earlyStopping:AI};/**
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
    */var Lf=function(n,t){return(Lf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var r in s)s.hasOwnProperty(r)&&(e[r]=s[r])})(n,t)};function NI(n,t){function e(){this.constructor=n}Lf(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var dl=function(){return(dl=Object.assign||function(n){for(var t,e=1,s=arguments.length;e<s;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function ct(n,t,e,s){return new(e||(e=Promise))(function(r,i){function o(u){try{l(s.next(u))}catch(c){i(c)}}function a(u){try{l(s.throw(u))}catch(c){i(c)}}function l(u){var c;u.done?r(u.value):(c=u.value,c instanceof e?c:new e(function(h){h(c)})).then(o,a)}l((s=s.apply(n,t||[])).next())})}function ht(n,t){var e,s,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(u){return(function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,s&&(r=2&c[0]?s.return:c[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;switch(s=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,s=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(c[0]===6&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(n,o)}catch(h){c=[6,h],s=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}})([l,u])}}}function qt(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],s=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&s>=n.length&&(n=void 0),{value:n&&n[s++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function fl(n,t){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var s,r,i=e.call(n),o=[];try{for(;(t===void 0||t-- >0)&&!(s=i.next()).done;)o.push(s.value)}catch(a){r={error:a}}finally{try{s&&!s.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return o}function tr(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(fl(arguments[t]));return n}function TI(n){return ct(this,void 0,void 0,function(){var t,e,s,r,i,o,a;return ht(this,function(l){switch(l.label){case 0:return t="http://",e="https://",s="file://",n.indexOf(t)!==0&&n.indexOf(e)!==0?[3,3]:[4,fetch(n)];case 1:return[4,l.sent().json()];case 2:return[2,l.sent()];case 3:return n.indexOf(s)!==0?[3,5]:(r=Tt(9830),i=(0,Lv.promisify)(r.readFile),a=(o=JSON).parse,[4,i(n.slice(s.length),{encoding:"utf-8"})]);case 4:return[2,a.apply(o,[l.sent()])];case 5:throw new Error("Unsupported URL scheme in metadata URL: "+n+". Supported schemes are: http://, https://, and (node.js-only) file://")}})})}var gs=null;function bs(n){return gs==null&&(gs=uo().epsilon()),N(function(){var t=Ns(n),e=t.mean,s=t.variance;return U(O(n,e),M(Ut(s),gs))})}function Rf(n){if(n.length<2)throw new Error("Cannot normalize a Float32Array with fewer than 2 elements.");return gs==null&&(gs=uo().epsilon()),N(function(){var t=Ns(_t(n)),e=t.mean,s=t.variance,r=e.arraySync(),i=Math.sqrt(s.arraySync()),o=Array.from(n).map(function(a){return(a-r)/(i+gs)});return new Float32Array(o)})}function DI(){return window.AudioContext||window.webkitAudioContext}function CI(n){return ct(this,void 0,void 0,function(){return ht(this,function(t){return[2,navigator.mediaDevices.getUserMedia({audio:n==null||n,video:!1})]})})}function $I(n,t){var e=new(window.AudioContext||window.webkitAudioContext),s=e.createBuffer(1,n.data.length,n.sampleRateHz);s.getChannelData(0).set(n.data);var r=e.createBufferSource();r.buffer=s,r.connect(e.destination),r.start(),r.onended=function(){t?.()}}var pl=(function(){function n(t){var e=this;if(t==null)throw new Error("Required configuration object is missing for BrowserFftFeatureExtractor constructor");if(t.spectrogramCallback==null)throw new Error("spectrogramCallback cannot be null or undefined");if(!(t.numFramesPerSpectrogram>0))throw new Error("Invalid value in numFramesPerSpectrogram: "+t.numFramesPerSpectrogram);if(t.suppressionTimeMillis<0)throw new Error("Expected suppressionTimeMillis to be >= 0, but got "+t.suppressionTimeMillis);if(this.suppressionTimeMillis=t.suppressionTimeMillis,this.spectrogramCallback=t.spectrogramCallback,this.numFrames=t.numFramesPerSpectrogram,this.sampleRateHz=t.sampleRateHz||44100,this.fftSize=t.fftSize||1024,this.frameDurationMillis=this.fftSize/this.sampleRateHz*1e3,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.overlapFactor=t.overlapFactor,this.includeRawAudio=t.includeRawAudio,g(this.overlapFactor>=0&&this.overlapFactor<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+e.overlapFactor}),this.columnTruncateLength>this.fftSize)throw new Error("columnTruncateLength "+this.columnTruncateLength+" exceeds fftSize ("+this.fftSize+").");this.audioContextConstructor=DI()}return n.prototype.start=function(t){return ct(this,void 0,void 0,function(){var e,s,r;return ht(this,function(i){switch(i.label){case 0:if(this.frameIntervalTask!=null)throw new Error("Cannot start already-started BrowserFftFeatureExtractor");return e=this,[4,CI(t)];case 1:return e.stream=i.sent(),this.audioContext=new this.audioContextConstructor({sampleRate:this.sampleRateHz}),s=this.audioContext.createMediaStreamSource(this.stream),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=0,s.connect(this.analyser),this.freqDataQueue=[],this.freqData=new Float32Array(this.fftSize),this.includeRawAudio&&(this.timeDataQueue=[],this.timeData=new Float32Array(this.fftSize)),r=Math.max(1,Math.round(this.numFrames*(1-this.overlapFactor))),this.tracker=new _I(r,Math.round(this.suppressionTimeMillis/this.frameDurationMillis)),this.frameIntervalTask=setInterval(this.onAudioFrame.bind(this),this.fftSize/this.sampleRateHz*1e3),[2]}})})},n.prototype.onAudioFrame=function(){return ct(this,void 0,void 0,function(){var t,e,s,r;return ht(this,function(i){switch(i.label){case 0:return this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0?[2]:(this.freqDataQueue.push(this.freqData.slice(0,this.columnTruncateLength)),this.includeRawAudio&&(this.analyser.getFloatTimeDomainData(this.timeData),this.timeDataQueue.push(this.timeData.slice())),this.freqDataQueue.length>this.numFrames&&this.freqDataQueue.shift(),this.tracker.tick()?(t=Of(this.freqDataQueue),e=Bf(t,[1,this.numFrames,this.columnTruncateLength,1]),s=void 0,this.includeRawAudio&&(r=Of(this.timeDataQueue),s=Bf(r,[1,this.numFrames*this.fftSize])),[4,this.spectrogramCallback(e,s)]):[3,2]);case 1:i.sent()&&this.tracker.suppress(),G([e,s]),i.label=2;case 2:return[2]}})})},n.prototype.stop=function(){return ct(this,void 0,void 0,function(){return ht(this,function(t){if(this.frameIntervalTask==null)throw new Error("Cannot stop because there is no ongoing streaming activity.");return clearInterval(this.frameIntervalTask),this.frameIntervalTask=null,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop(),[2]})})},n.prototype.setConfig=function(t){throw new Error("setConfig() is not implemented for BrowserFftFeatureExtractor.")},n.prototype.getFeatures=function(){throw new Error("getFeatures() is not implemented for BrowserFftFeatureExtractor. Use the spectrogramCallback field of the constructor config instead.")},n})();function Of(n){var t=n[0].length,e=new Float32Array(n.length*t);return n.forEach(function(s,r){return e.set(s,r*t)}),e}function Bf(n,t){var e=new Float32Array(Lt(t));return e.set(n,e.length-n.length),gn(e,t)}var _I=(function(){function n(t,e){var s=this;this.period=t,this.suppressionTime=e??0,this.counter=0,g(this.period>0,function(){return"Expected period to be positive, but got "+s.period})}return n.prototype.tick=function(){return this.counter++,this.counter%this.period==0&&(this.suppressionOnset==null||this.counter-this.suppressionOnset>this.suppressionTime)},n.prototype.suppress=function(){this.suppressionOnset=this.counter},n})();function xi(n){var t=0;n.forEach(function(r){t+=r.byteLength});var e=new Uint8Array(t),s=0;return n.forEach(function(r){e.set(new Uint8Array(r),s),s+=r.byteLength}),e.buffer}function Pf(n){var t=0;n.forEach(function(r){return t+=r.length});var e=new Float32Array(t),s=0;return n.forEach(function(r){e.set(r,s),s+=r.length}),e}function Uf(n){if(n==null)throw new Error("Received null or undefind string");for(var t=unescape(encodeURIComponent(n)),e=new Uint8Array(t.length),s=0;s<t.length;++s)e[s]=t.charCodeAt(s);return e.buffer}function Wf(n){if(n==null)throw new Error("Received null or undefind buffer");var t=new Uint8Array(n);return decodeURIComponent(escape(String.fromCharCode.apply(String,tr(t))))}function MI(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function zI(n,t){return Math.floor((t-n)*Math.random())+n}function FI(n,t,e){return g(e>0&&e<1,function(){return"validationSplit is expected to be >0 and <1, but got "+e}),N(function(){for(var s=Jn(t,-1).dataSync(),r=[],i=0;i<s.length;++i){var o=s[i];r[o]==null&&(r[o]=[]),r[o].push(i)}var a=r.length,l=[],u=[];for(r.map(function(f){return On(f)}),i=0;i<a;++i)for(var c=r[i],h=Math.round(c.length*(1-e)),d=0;d<c.length;++d)d<h?l.push(c[d]):u.push(c[d]);return{trainXs:Xn(n,l),trainYs:Xn(t,l),valXs:Xn(n,u),valYs:Xn(t,u)}})}function LI(n,t,e){var s,r,i,o,a,l,u,c;g(e>0&&e<1,function(){return"validationSplit is expected to be >0 and <1, but got "+e});for(var h=!Array.isArray(n[0]),d=t,f=[],p=0;p<d.length;++p){var m=d[p];f[m]==null&&(f[m]=[]),f[m].push(p)}var b=f.length,w=[],S=[];for(f.map(function(yt){return On(yt)}),p=0;p<b;++p)for(var k=f[p],E=Math.round(k.length*(1-e)),D=0;D<k.length;++D)D<E?w.push(k[D]):S.push(k[D]);if(h){var C=[],z=[],F=[],_=[];try{for(var L=qt(w),P=L.next();!P.done;P=L.next()){var W=P.value;C.push(n[W]),z.push(t[W])}}catch(yt){s={error:yt}}finally{try{P&&!P.done&&(r=L.return)&&r.call(L)}finally{if(s)throw s.error}}try{for(var K=qt(S),tt=K.next();!tt.done;tt=K.next())W=tt.value,F.push(n[W]),_.push(t[W])}catch(yt){i={error:yt}}finally{try{tt&&!tt.done&&(o=K.return)&&o.call(K)}finally{if(i)throw i.error}}return{trainXs:C,trainYs:z,valXs:F,valYs:_}}C=[],z=[],F=[],_=[];try{for(var X=qt(w),dt=X.next();!dt.done;dt=X.next())W=dt.value,C.push(n[W]),z.push(t[W])}catch(yt){a={error:yt}}finally{try{dt&&!dt.done&&(l=X.return)&&l.call(X)}finally{if(a)throw a.error}}try{for(var et=qt(S),wt=et.next();!wt.done;wt=et.next())W=wt.value,F.push(n[W]),_.push(t[W])}catch(yt){u={error:yt}}finally{try{wt&&!wt.done&&(c=et.return)&&c.call(et)}finally{if(u)throw u.error}}return{trainXs:C,trainYs:z,valXs:F,valYs:_}}var Si="TFJSSCDS",RI=1,Rn="_background_noise_",ml=(function(){function n(t){if(this.examples={},this.label2Ids={},t!=null)for(var e=UI(t),s=0,r=0;r<e.manifest.length;++r){var i=e.manifest[r],o=i.spectrogramNumFrames*i.spectrogramFrameSize;i.rawAudioNumSamples!=null&&(o+=i.rawAudioNumSamples),o*=4,this.addExample(BI({spec:i,data:e.data.slice(s,s+o)})),s+=o}}return n.prototype.addExample=function(t){g(t!=null,function(){return"Got null or undefined example"}),g(t.label!=null&&t.label.length>0,function(){return"Expected label to be a non-empty string, but got "+JSON.stringify(t.label)});var e=MI();return this.examples[e]=t,t.label in this.label2Ids||(this.label2Ids[t.label]=[]),this.label2Ids[t.label].push(e),e},n.prototype.merge=function(t){var e,s,r,i;g(t!==this,function(){return"Cannot merge a dataset into itself"});var o=t.getVocabulary();try{for(var a=qt(o),l=a.next();!l.done;l=a.next()){var u=l.value,c=t.getExamples(u);try{for(var h=(r=void 0,qt(c)),d=h.next();!d.done;d=h.next()){var f=d.value;this.addExample(f.example)}}catch(p){r={error:p}}finally{try{d&&!d.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}}catch(p){e={error:p}}finally{try{l&&!l.done&&(s=a.return)&&s.call(a)}finally{if(e)throw e.error}}},n.prototype.getExampleCounts=function(){var t={};for(var e in this.examples){var s=this.examples[e];s.label in t||(t[s.label]=0),t[s.label]++}return t},n.prototype.getExamples=function(t){var e=this;g(t!=null,function(){return"Expected label to be a string, but got "+JSON.stringify(t)}),g(t in this.label2Ids,function(){return'No example of label "'+t+'" exists in dataset'});var s=[];return this.label2Ids[t].forEach(function(r){s.push({uid:r,example:e.examples[r]})}),s},n.prototype.getData=function(t,e){var s=this;g(this.size()>0,function(){return"Cannot get spectrograms as tensors because the dataset is empty"});var r=this.getVocabulary();t!=null?g(r.indexOf(t)!==-1,function(){return"Label "+t+" is not in the vocabulary ("+JSON.stringify(r)+")"}):g(r.length>1,function(){return"One-hot encoding of labels requires the vocabulary to have at least two words, but it has only "+r.length+" word."}),e==null&&(e={});var i,o,a=this.getSortedUniqueNumFrames();a.length===1?(i=e.numFrames==null?a[0]:e.numFrames,o=e.hopFrames==null?1:e.hopFrames):(i=e.numFrames,g(i!=null&&Number.isInteger(i)&&i>0,function(){return"There are "+a.length+" unique lengths among the "+s.size()+" examples of this Dataset, hence numFrames is required. But it is not provided."}),g(i<=a[0],function(){return"numFrames ("+i+") exceeds the minimum numFrames ("+a[0]+") among the examples of the Dataset."}),o=e.hopFrames,g(o!=null&&Number.isInteger(o)&&o>0,function(){return"There are "+a.length+" unique lengths among the "+s.size()+" examples of this Dataset, hence hopFrames is required. But it is not provided."}));var l=e.normalize==null||e.normalize;return N(function(){for(var u,c,h,d=[],f=[],p=[],m=0;m<r.length;++m){var b=r[m];if(t==null||b===t){var w=s.label2Ids[b],S=function(Z){var dn,qf,ys=s.examples[Z].spectrogram,sr=ys.frameSize;h==null?h=sr:g(sr===h,function(){return"Mismatch in frameSize  ("+sr+" vs "+h+")"});var Kf=ys.data.length/sr,Jf=null;b!==Rn&&(Jf=ys.keyFrameIndex==null?Vf(ys).dataSync()[0]:ys.keyFrameIndex);var Yf=vr(ys.data,[Kf,sr,1]),JI=WI(Kf,Jf,i,o),YI=function(ir){var Zf=N(function(){var Xf=nt(Yf,[ir[0],0,0],[ir[1]-ir[0],-1,-1]);return l?bs(Xf):Xf});e.getDataset?f.push(Zf.dataSync()):d.push(Zf),t==null&&p.push(m)};try{for(var Ii=(dn=void 0,qt(JI)),rr=Ii.next();!rr.done;rr=Ii.next())YI(rr.value)}catch(ir){dn={error:ir}}finally{try{rr&&!rr.done&&(qf=Ii.return)&&qf.call(Ii)}finally{if(dn)throw dn.error}}G(Yf)};try{for(var k=(u=void 0,qt(w)),E=k.next();!E.done;E=k.next())S(E.value)}catch(Z){u={error:Z}}finally{try{E&&!E.done&&(c=k.return)&&c.call(k)}finally{if(u)throw u.error}}}}e.augmentByMixingNoiseRatio!=null&&s.augmentByMixingNoise(e.getDataset?f:d,p,e.augmentByMixingNoiseRatio);var D=e.shuffle==null||e.shuffle;if(e.getDataset){var C=e.datasetBatchSize==null?32:e.datasetBatchSize,z=e.datasetValidationSplit==null?.15:e.datasetValidationSplit;g(z>0&&z<1,function(){return"Invalid dataset validation split: "+z});var F=f.map(function(Z,dn){return[Z,p[dn]]});On(F),f=F.map(function(Z){return Z[0]});var _=F.map(function(Z){return Z[1]}),L=LI(f,_,z),P=L.trainXs,W=L.trainYs,K=L.valXs,tt=L.valYs,X=Gr(P).map(function(Z){return vr(Z,[i,h,1])}),dt=Gr(W).map(function(Z){return ns(Nr([Z],r.length),[0])}),et=bh({xs:X,ys:dt});D&&(et=et.shuffle(f.length)),et=et.batch(C).prefetch(4);var wt=Gr(K).map(function(Z){return vr(Z,[i,h,1])}),yt=Gr(tt).map(function(Z){return ns(Nr([Z],r.length),[0])}),Ie=bh({xs:wt,ys:yt});return[et,Ie=Ie.batch(C).prefetch(4)]}if(D){var ce=[];d.forEach(function(Z,dn){ce.push({x:Z,y:p[dn]})}),On(ce),d=ce.map(function(Z){return Z.x}),p=ce.map(function(Z){return Z.y})}var We=t==null?R(Nr(_t(p,"int32"),r.length),"float32"):void 0;return{xs:Xe(d),ys:We}})},n.prototype.augmentByMixingNoise=function(t,e,s){var r,i;if(t==null||t.length===0)throw new Error("Cannot perform augmentation because data is null or empty");for(var o=t[0]instanceof Float32Array,a=this.getVocabulary(),l=[],u=[],c=0;c<e.length;++c)a[e[c]]===Rn?l.push(c):u.push(c);if(l.length===0)throw new Error("Cannot perform augmentation by mixing with noise when there is no example with label "+Rn);var h=[],d=[],f=function(b){var w=l[zI(0,l.length)],S=o?_t(t[b]):t[b],k=o?_t(t[w]):t[w],E=N(function(){return bs(M(S,v(k,s)))});o?h.push(E.dataSync()):h.push(E),d.push(e[b])};try{for(var p=qt(u),m=p.next();!m.done;m=p.next())f(m.value)}catch(b){r={error:b}}finally{try{m&&!m.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}console.log("Data augmentation: mixing noise: added "+h.length+" examples"),h.forEach(function(b){return t.push(b)}),e.push.apply(e,tr(d))},n.prototype.getSortedUniqueNumFrames=function(){for(var t,e,s=new Set,r=this.getVocabulary(),i=0;i<r.length;++i){var o=r[i],a=this.label2Ids[o];try{for(var l=(t=void 0,qt(a)),u=l.next();!u.done;u=l.next()){var c=u.value,h=this.examples[c].spectrogram,d=h.data.length/h.frameSize;s.add(d)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}}var f=tr(s);return f.sort(),f},n.prototype.removeExample=function(t){if(!(t in this.examples))throw new Error("Nonexistent example UID: "+t);var e=this.examples[t].label;delete this.examples[t];var s=this.label2Ids[e].indexOf(t);this.label2Ids[e].splice(s,1),this.label2Ids[e].length===0&&delete this.label2Ids[e]},n.prototype.setExampleKeyFrameIndex=function(t,e){if(!(t in this.examples))throw new Error("Nonexistent example UID: "+t);var s=this.examples[t].spectrogram,r=s.data.length/s.frameSize;g(e>=0&&e<r&&Number.isInteger(e),function(){return"Invalid keyFrameIndex: "+e+". Must be >= 0, < "+r+", and an integer."}),s.keyFrameIndex=e},n.prototype.size=function(){return Object.keys(this.examples).length},n.prototype.durationMillis=function(){var t=0;for(var e in this.examples){var s=this.examples[e].spectrogram,r=23.22|s.frameDurationMillis;t+=s.data.length/s.frameSize*r}return t},n.prototype.empty=function(){return this.size()===0},n.prototype.clear=function(){this.examples={}},n.prototype.getVocabulary=function(){var t=new Set;for(var e in this.examples){var s=this.examples[e];t.add(s.label)}var r=tr(t);return r.sort(),r},n.prototype.serialize=function(t){var e,s,r,i,o=this.getVocabulary();g(!this.empty(),function(){return"Cannot serialize empty Dataset"}),t!=null&&(Array.isArray(t)||(t=[t]),t.forEach(function(w){if(o.indexOf(w)===-1)throw new Error('Word label "'+w+'" does not exist in the vocabulary of this dataset. The vocabulary is: '+JSON.stringify(o)+".")}));var a=[],l=[];try{for(var u=qt(o),c=u.next();!c.done;c=u.next()){var h=c.value;if(t==null||t.indexOf(h)!==-1){var d=this.label2Ids[h];try{for(var f=(r=void 0,qt(d)),p=f.next();!p.done;p=f.next()){var m=p.value,b=OI(this.examples[m]);a.push(b.spec),l.push(b.data)}}catch(w){r={error:w}}finally{try{p&&!p.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}}}catch(w){e={error:w}}finally{try{c&&!c.done&&(s=u.return)&&s.call(u)}finally{if(e)throw e.error}}return PI({manifest:a,data:xi(l)})},n})();function OI(n){var t=n.rawAudio!=null,e={label:n.label,spectrogramNumFrames:n.spectrogram.data.length/n.spectrogram.frameSize,spectrogramFrameSize:n.spectrogram.frameSize};n.spectrogram.keyFrameIndex!=null&&(e.spectrogramKeyFrameIndex=n.spectrogram.keyFrameIndex);var s=n.spectrogram.data.buffer.slice(0);return t&&(e.rawAudioNumSamples=n.rawAudio.data.length,e.rawAudioSampleRateHz=n.rawAudio.sampleRateHz,s=xi([s,n.rawAudio.data.buffer])),{spec:e,data:s}}function BI(n){var t={frameSize:n.spec.spectrogramFrameSize,data:new Float32Array(n.data.slice(0,4*n.spec.spectrogramFrameSize*n.spec.spectrogramNumFrames))};n.spec.spectrogramKeyFrameIndex!=null&&(t.keyFrameIndex=n.spec.spectrogramKeyFrameIndex);var e={label:n.spec.label,spectrogram:t};return n.spec.rawAudioNumSamples!=null&&(e.rawAudio={sampleRateHz:n.spec.rawAudioSampleRateHz,data:new Float32Array(n.data.slice(4*n.spec.spectrogramFrameSize*n.spec.spectrogramNumFrames))}),e}function PI(n){var t=Uf(JSON.stringify(n.manifest)),e=Uf(Si),s=new Uint32Array([RI]),r=new Uint32Array([t.byteLength]);return xi([xi([e,s.buffer,r.buffer]),t,n.data])}function UI(n){g(n!=null,function(){return"Received null or undefined buffer"});var t=0,e=Wf(n.slice(t,Si.length));g(e===Si,function(){return"Deserialization error: Invalid descriptor"}),t+=Si.length,t+=4;var s=new Uint32Array(n,t,1),r=t+=4;t=r+s[0];var i=Wf(n.slice(r,t));return{manifest:JSON.parse(i),data:n.slice(t)}}function WI(n,t,e,s){if(g(Number.isInteger(n)&&n>0,function(){return"snippetLength must be a positive integer, but got "+n}),t!=null&&g(Number.isInteger(t)&&t>=0,function(){return"focusIndex must be a non-negative integer, but got "+t}),g(Number.isInteger(e)&&e>0,function(){return"windowLength must be a positive integer, but got "+e}),g(Number.isInteger(s)&&s>0,function(){return"windowHop must be a positive integer, but got "+s}),g(e<=n,function(){return"windowLength ("+e+") exceeds snippetLength ("+n+")"}),g(t<n,function(){return"focusIndex ("+t+") equals or exceeds snippetLength ("+n+")"}),e===n)return[[0,n]];var r=[];if(t==null){for(var i=0;i+e<=n;)r.push([i,i+e]),i+=s;return r}var o=Math.floor(e/2),a=t-o;for(a<0?a=0:a+e>n&&(a=n-e);!(a-s<0||t>=a-s+e);)a-=s;for(;a+e<=n&&!(t<a);)r.push([a,a+e]),a+=s;return r}function Gf(n){return N(function(){var t=n.data.length/n.frameSize,e=Nn(n.data,[t,n.frameSize]);return vt(e,-1)})}function Vf(n){return N(function(){return Jn(Gf(n))})}var gl="0.5.4",Hf="_unknown_",er="tfjs-speech-commands-saved-model-metadata",bl="indexeddb://tfjs-speech-commands-model/",nr={localStorage:typeof window>"u"?null:window.localStorage};function GI(n){return n.split(".").slice(0,2).join(".")}var Ei=.25,jf=(function(){function n(t,e,s){this.MODEL_URL_PREFIX="https://storage.googleapis.com/tfjs-models/tfjs/speech-commands/v"+GI(gl)+"/browser_fft",this.SAMPLE_RATE_HZ=44100,this.FFT_SIZE=1024,this.DEFAULT_SUPPRESSION_TIME_MILLIS=0,this.streaming=!1,this.transferRecognizers={},g(e==null&&s==null||e!=null&&s!=null,function(){return"modelURL and metadataURL must be both provided or both not provided."}),e==null?(t==null?t=n.DEFAULT_VOCABULARY_NAME:g(n.VALID_VOCABULARY_NAMES.indexOf(t)!==-1,function(){return"Invalid vocabulary name: '"+t+"'"}),this.vocabulary=t,this.modelArtifactsOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/model.json",this.metadataOrURL=this.MODEL_URL_PREFIX+"/"+this.vocabulary+"/metadata.json"):(g(t==null,function(){return"vocabulary name must be null or undefined when modelURL is provided"}),this.modelArtifactsOrURL=e,this.metadataOrURL=s),this.parameters={sampleRateHz:this.SAMPLE_RATE_HZ,fftSize:this.FFT_SIZE}}return n.prototype.listen=function(t,e){return ct(this,void 0,void 0,function(){var s,r,i,o,a,l=this;return ht(this,function(u){switch(u.label){case 0:if(this.streaming)throw new Error("Cannot start streaming again when streaming is ongoing.");return[4,this.ensureModelLoaded()];case 1:if(u.sent(),e==null&&(e={}),s=e.probabilityThreshold==null?0:e.probabilityThreshold,e.includeEmbedding&&(s=0),g(s>=0&&s<=1,function(){return"Invalid probabilityThreshold value: "+s}),r=e.invokeCallbackOnNoiseAndUnknown!=null&&e.invokeCallbackOnNoiseAndUnknown,e.includeEmbedding&&(r=!0),e.suppressionTimeMillis<0)throw new Error("suppressionTimeMillis is expected to be >= 0, but got "+e.suppressionTimeMillis);return i=e.overlapFactor==null?.5:e.overlapFactor,g(i>=0&&i<1,function(){return"Expected overlapFactor to be >= 0 and < 1, but got "+i}),o=function(c,h){return ct(l,void 0,void 0,function(){var d,f,p,m,b,w,S,k,E,D,C;return ht(this,function(z){switch(z.label){case 0:return d=bs(c),e.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,2];case 1:return z.sent(),C=fl(this.modelWithEmbeddingOutput.predict(d),2),f=C[0],p=C[1],[3,3];case 2:f=this.model.predict(d),z.label=3;case 3:return[4,f.data()];case 4:return m=z.sent(),[4,(b=f.argMax(-1)).data()];case 5:return w=z.sent()[0],S=Math.max.apply(Math,tr(m)),G([f,b,d]),S<s?[2,!1]:[3,6];case 6:return k=void 0,e.includeSpectrogram?(E={},[4,c.data()]):[3,8];case 7:E.data=z.sent(),E.frameSize=this.nonBatchInputShape[1],k=E,z.label=8;case 8:return D=!0,r||this.words[w]!==Rn&&this.words[w]!==Hf||(D=!1),D&&t({scores:m,spectrogram:k,embedding:p}),[2,D]}})})},a=e.suppressionTimeMillis==null?this.DEFAULT_SUPPRESSION_TIME_MILLIS:e.suppressionTimeMillis,this.audioDataExtractor=new pl({sampleRateHz:this.parameters.sampleRateHz,numFramesPerSpectrogram:this.nonBatchInputShape[0],columnTruncateLength:this.nonBatchInputShape[1],suppressionTimeMillis:a,spectrogramCallback:o,overlapFactor:i}),[4,this.audioDataExtractor.start(e.audioTrackConstraints)];case 2:return u.sent(),this.streaming=!0,[2]}})})},n.prototype.ensureModelLoaded=function(){return ct(this,void 0,void 0,function(){var t,e,s,r,i=this;return ht(this,function(o){switch(o.label){case 0:return this.model!=null?[2]:[4,this.ensureMetadataLoaded()];case 1:return o.sent(),typeof this.modelArtifactsOrURL!="string"?[3,3]:[4,fa(this.modelArtifactsOrURL)];case 2:return t=o.sent(),[3,5];case 3:return[4,fa(Xg(this.modelArtifactsOrURL.modelTopology,this.modelArtifactsOrURL.weightSpecs,this.modelArtifactsOrURL.weightData))];case 4:t=o.sent(),o.label=5;case 5:if(t.inputs.length!==1)throw new Error("Expected model to have 1 input, but got a model with "+t.inputs.length+" inputs");if(t.inputs[0].shape.length!==4)throw new Error("Expected model to have an input shape of rank 4, but got an input shape of rank "+t.inputs[0].shape.length);if(t.inputs[0].shape[3]!==1)throw new Error("Expected model to have an input shape with 1 as the last dimension, but got input shape"+JSON.stringify(t.inputs[0].shape[3])+"}");if((e=t.outputShape).length!==2)throw new Error("Expected loaded model to have an output shape of rank 2,but received shape "+JSON.stringify(e));if(e[1]!==this.words.length)throw new Error("Mismatch between the last dimension of model's output shape ("+e[1]+") and number of words ("+this.words.length+").");return this.model=t,this.freezeModel(),this.nonBatchInputShape=t.inputs[0].shape.slice(1),this.elementsPerExample=1,t.inputs[0].shape.slice(1).forEach(function(a){return i.elementsPerExample*=a}),this.warmUpModel(),s=this.parameters.fftSize/this.parameters.sampleRateHz*1e3,r=t.inputs[0].shape[1],this.parameters.spectrogramDurationMillis=r*s,[2]}})})},n.prototype.ensureModelWithEmbeddingOutputCreated=function(){return ct(this,void 0,void 0,function(){var t,e;return ht(this,function(s){switch(s.label){case 0:return this.modelWithEmbeddingOutput!=null?[2]:[4,this.ensureModelLoaded()];case 1:for(s.sent(),e=this.model.layers.length-2;e>=0;--e)if(this.model.layers[e].getClassName()==="Dense"){t=this.model.layers[e];break}if(t==null)throw new Error("Failed to find second last dense layer in the original model.");return this.modelWithEmbeddingOutput=Xd({inputs:this.model.inputs,outputs:[this.model.outputs[0],t.output]}),[2]}})})},n.prototype.warmUpModel=function(){var t=this;N(function(){for(var e=$t([1].concat(t.nonBatchInputShape)),s=0;s<3;++s)t.model.predict(e)})},n.prototype.ensureMetadataLoaded=function(){return ct(this,void 0,void 0,function(){var t,e,s;return ht(this,function(r){switch(r.label){case 0:return this.words!=null?[2]:typeof this.metadataOrURL!="string"?[3,2]:[4,TI(this.metadataOrURL)];case 1:return e=r.sent(),[3,3];case 2:e=this.metadataOrURL,r.label=3;case 3:if((t=e).wordLabels==null){if((s=t.words)==null)throw new Error('Cannot find field "words" or "wordLabels" in metadata JSON file');this.words=s}else this.words=t.wordLabels;return[2]}})})},n.prototype.stopListening=function(){return ct(this,void 0,void 0,function(){return ht(this,function(t){switch(t.label){case 0:if(!this.streaming)throw new Error("Cannot stop streaming when streaming is not ongoing.");return[4,this.audioDataExtractor.stop()];case 1:return t.sent(),this.streaming=!1,[2]}})})},n.prototype.isListening=function(){return this.streaming},n.prototype.wordLabels=function(){return this.words},n.prototype.params=function(){return this.parameters},n.prototype.modelInputShape=function(){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognize(), or listen().");return this.model.inputs[0].shape},n.prototype.recognize=function(t,e){return ct(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h,d,f,p,m;return ht(this,function(b){switch(b.label){case 0:return e==null&&(e={}),[4,this.ensureModelLoaded()];case 1:return b.sent(),t!=null?[3,3]:[4,this.recognizeOnline()];case 2:s=b.sent(),t=s.data,b.label=3;case 3:if(t instanceof lt)this.checkInputTensorShape(t),i=t,r=t.shape[0];else{if(t.length%this.elementsPerExample)throw new Error("The length of the input Float32Array "+t.length+" is not divisible by the number of tensor elements per per example expected by the model "+this.elementsPerExample+".");r=t.length/this.elementsPerExample,i=bw(t,[r].concat(this.nonBatchInputShape))}return a={scores:null},e.includeEmbedding?[4,this.ensureModelWithEmbeddingOutputCreated()]:[3,5];case 4:return b.sent(),l=this.modelWithEmbeddingOutput.predict(i),o=l[0],a.embedding=l[1],[3,6];case 5:o=this.model.predict(i),b.label=6;case 6:return r!==1?[3,8]:(u=a,[4,o.data()]);case 7:return u.scores=b.sent(),[3,10];case 8:return c=ss(o),h=c.map(function(w){return w.data()}),d=a,[4,Promise.all(h)];case 9:d.scores=b.sent(),G(c),b.label=10;case 10:return e.includeSpectrogram?(f=a,p={},t instanceof lt?[4,t.data()]:[3,12]):[3,14];case 11:return m=b.sent(),[3,13];case 12:m=t,b.label=13;case 13:f.spectrogram=(p.data=m,p.frameSize=this.nonBatchInputShape[1],p),b.label=14;case 14:return G(o),[2,a]}})})},n.prototype.recognizeOnline=function(){return ct(this,void 0,void 0,function(){var t=this;return ht(this,function(e){return[2,new Promise(function(s,r){t.audioDataExtractor=new pl({sampleRateHz:t.parameters.sampleRateHz,numFramesPerSpectrogram:t.nonBatchInputShape[0],columnTruncateLength:t.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(i){return ct(t,void 0,void 0,function(){var o,a,l;return ht(this,function(u){switch(u.label){case 0:return o=bs(i),[4,this.audioDataExtractor.stop()];case 1:return u.sent(),a=s,l={},[4,o.data()];case 2:return a.apply(void 0,[(l.data=u.sent(),l.frameSize=this.nonBatchInputShape[1],l)]),o.dispose(),[2,!1]}})})},overlapFactor:0}),t.audioDataExtractor.start()})]})})},n.prototype.createTransfer=function(t){if(this.model==null)throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognizer(), or listen().");g(t!=null&&typeof t=="string"&&t.length>1,function(){return"Expected the name for a transfer-learning recognized to be a non-empty string, but got "+JSON.stringify(t)}),g(this.transferRecognizers[t]==null,function(){return"There is already a transfer-learning model named '"+t+"'"});var e=new VI(t,this.parameters,this.model);return this.transferRecognizers[t]=e,e},n.prototype.freezeModel=function(){var t,e;try{for(var s=qt(this.model.layers),r=s.next();!r.done;r=s.next())r.value.trainable=!1}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}},n.prototype.checkInputTensorShape=function(t){var e=this.model.inputs[0].shape.length;if(t.shape.length!==e)throw new Error("Expected input Tensor to have rank "+e+", but got rank "+t.shape.length+" that differs ");var s=t.shape.slice(1),r=this.model.inputs[0].shape.slice(1);if(!Wt(s,r))throw new Error("Expected input to have shape [null,"+r+"], but got shape [null,"+s+"]")},n.VALID_VOCABULARY_NAMES=["18w","directional4w"],n.DEFAULT_VOCABULARY_NAME="18w",n})(),VI=(function(n){function t(e,s,r){var i=n.call(this)||this;return i.name=e,i.parameters=s,i.baseModel=r,g(e!=null&&typeof e=="string"&&e.length>0,function(){return"The name of a transfer model must be a non-empty string, but got "+JSON.stringify(e)}),i.nonBatchInputShape=i.baseModel.inputs[0].shape.slice(1),i.words=null,i.dataset=new ml,i}return NI(t,n),t.prototype.collectExample=function(e,s){return ct(this,void 0,void 0,function(){var r,i,o,a,l=this;return ht(this,function(u){if(g(!this.streaming,function(){return"Cannot start collection of transfer-learning example because a streaming recognition or transfer-learning example collection is ongoing"}),g(e!=null&&typeof e=="string"&&e.length>0,function(){return"Must provide a non-empty string when collecting transfer-learning example"}),s==null&&(s={}),s.durationMultiplier!=null&&s.durationSec!=null)throw new Error("durationMultiplier and durationSec are mutually exclusive, but are both specified.");return s.durationSec!=null?(g(s.durationSec>0,function(){return"Expected durationSec to be > 0, but got "+s.durationSec}),i=this.parameters.fftSize/this.parameters.sampleRateHz,r=Math.ceil(s.durationSec/i)):s.durationMultiplier!=null?(g(s.durationMultiplier>=1,function(){return"Expected duration multiplier to be >= 1, but got "+s.durationMultiplier}),r=Math.round(this.nonBatchInputShape[0]*s.durationMultiplier)):r=this.nonBatchInputShape[0],s.snippetDurationSec!=null&&(g(s.snippetDurationSec>0,function(){return"snippetDurationSec is expected to be > 0, but got "+s.snippetDurationSec}),g(s.onSnippet!=null,function(){return"onSnippet must be provided if snippetDurationSec is provided."})),s.onSnippet!=null&&g(s.snippetDurationSec!=null,function(){return"snippetDurationSec must be provided if onSnippet is provided."}),o=this.parameters.fftSize/this.parameters.sampleRateHz,a=o*r,this.streaming=!0,[2,new Promise(function(c){var h=s.snippetDurationSec==null?1:s.snippetDurationSec/a,d=1-h,f=Math.round(1/h),p=0,m=-1,b=[];l.audioDataExtractor=new pl({sampleRateHz:l.parameters.sampleRateHz,numFramesPerSpectrogram:r,columnTruncateLength:l.nonBatchInputShape[1],suppressionTimeMillis:0,spectrogramCallback:function(w,S){return ct(l,void 0,void 0,function(){var k,E,D,C,z,F,_,L,P,W,K,tt,X,dt,et,wt,yt,Ie,ce,We;return ht(this,function(Z){switch(Z.label){case 0:return s.onSnippet!=null?[3,7]:(k=bs(w),D=(E=this.dataset).addExample,C={label:e},z={},[4,k.data()]);case 1:return C.spectrogram=(z.data=Z.sent(),z.frameSize=this.nonBatchInputShape[1],z),s.includeRawAudio?(_={},[4,S.data()]):[3,3];case 2:return _.data=Z.sent(),_.sampleRateHz=this.audioDataExtractor.sampleRateHz,F=_,[3,4];case 3:F=void 0,Z.label=4;case 4:return D.apply(E,[(C.rawAudio=F,C)]),k.dispose(),[4,this.audioDataExtractor.stop()];case 5:return Z.sent(),this.streaming=!1,this.collateTransferWords(),L=c,P={},[4,w.data()];case 6:return L.apply(void 0,[(P.data=Z.sent(),P.frameSize=this.nonBatchInputShape[1],P)]),[3,13];case 7:return[4,w.data()];case 8:for(W=Z.sent(),m===-1&&(m=W.length),K=m-1;W[K]!==0&&K>=0;)K--;return tt=m-K-1,m=K+1,X=W.slice(W.length-tt,W.length),b.push(X),s.onSnippet!=null&&s.onSnippet({data:X,frameSize:this.nonBatchInputShape[1]}),p++!==f?[3,13]:[4,this.audioDataExtractor.stop()];case 9:return Z.sent(),this.streaming=!1,this.collateTransferWords(),dt=Rf(Pf(b)),et={data:dt,frameSize:this.nonBatchInputShape[1]},yt=(wt=this.dataset).addExample,Ie={label:e,spectrogram:et},s.includeRawAudio?(We={},[4,S.data()]):[3,11];case 10:return We.data=Z.sent(),We.sampleRateHz=this.audioDataExtractor.sampleRateHz,ce=We,[3,12];case 11:ce=void 0,Z.label=12;case 12:yt.apply(wt,[(Ie.rawAudio=ce,Ie)]),c(et),Z.label=13;case 13:return[2,!1]}})})},overlapFactor:d,includeRawAudio:s.includeRawAudio}),l.audioDataExtractor.start(s.audioTrackConstraints)})]})})},t.prototype.clearExamples=function(){var e=this;g(this.words!=null&&this.words.length>0&&!this.dataset.empty(),function(){return"No transfer learning examples exist for model name "+e.name}),this.dataset.clear(),this.words=null},t.prototype.countExamples=function(){if(this.dataset.empty())throw new Error("No examples have been collected for transfer-learning model named '"+this.name+"' yet.");return this.dataset.getExampleCounts()},t.prototype.getExamples=function(e){return this.dataset.getExamples(e)},t.prototype.setExampleKeyFrameIndex=function(e,s){this.dataset.setExampleKeyFrameIndex(e,s)},t.prototype.removeExample=function(e){this.dataset.removeExample(e),this.collateTransferWords()},t.prototype.isDatasetEmpty=function(){return this.dataset.empty()},t.prototype.loadExamples=function(e,s){var r,i,o,a;s===void 0&&(s=!1);var l=new ml(e);s&&this.clearExamples();var u=l.getVocabulary();try{for(var c=qt(u),h=c.next();!h.done;h=c.next()){var d=h.value,f=l.getExamples(d);try{for(var p=(o=void 0,qt(f)),m=p.next();!m.done;m=p.next()){var b=m.value;this.dataset.addExample(b.example)}}catch(w){o={error:w}}finally{try{m&&!m.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}}}catch(w){r={error:w}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}this.collateTransferWords()},t.prototype.serializeExamples=function(e){return this.dataset.serialize(e)},t.prototype.collateTransferWords=function(){this.words=this.dataset.getVocabulary()},t.prototype.collectTransferDataAsTensors=function(e,s){var r=this.nonBatchInputShape[0];e=e||Ei;var i=Math.round(e*r),o=this.dataset.getData(null,dl({numFrames:r,hopFrames:i},s));return{xs:o.xs,ys:o.ys}},t.prototype.collectTransferDataAsTfDataset=function(e,s,r,i){s===void 0&&(s=.15),r===void 0&&(r=32);var o=this.nonBatchInputShape[0];e=e||Ei;var a=Math.round(e*o);return this.dataset.getData(null,dl({numFrames:o,hopFrames:a,getDataset:!0,datasetBatchSize:r,datasetValidationSplit:s},i))},t.prototype.train=function(e){return ct(this,void 0,void 0,function(){var s,r=this;return ht(this,function(i){return g(this.words!=null&&this.words.length>0,function(){return"Cannot train transfer-learning model '"+r.name+"' because no transfer learning example has been collected."}),g(this.words.length>1,function(){return"Cannot train transfer-learning model '"+r.name+"' because only 1 word label ('"+JSON.stringify(r.words)+"') has been collected for transfer learning. Requires at least 2."}),e.fineTuningEpochs!=null&&g(e.fineTuningEpochs>=0&&Number.isInteger(e.fineTuningEpochs),function(){return"If specified, fineTuningEpochs must be a non-negative integer, but received "+e.fineTuningEpochs}),e==null&&(e={}),this.model==null&&this.createTransferModelFromBaseModel(),this.secondLastBaseDenseLayer.trainable=!1,this.model.compile({loss:"categoricalCrossentropy",optimizer:e.optimizer||"sgd",metrics:["acc"]}),s=e.fitDatasetDurationMillisThreshold==null?6e4:e.fitDatasetDurationMillisThreshold,this.dataset.durationMillis()>s?(console.log("Detected large dataset: total duration = "+this.dataset.durationMillis()+" ms > "+s+" ms. Training transfer model using fitDataset() instead of fit()"),[2,this.trainOnDataset(e)]):[2,this.trainOnTensors(e)]})})},t.prototype.trainOnDataset=function(e){return ct(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h;return ht(this,function(d){switch(d.label){case 0:return g(e.epochs>0,function(){return"Invalid config.epochs"}),s=e.batchSize==null?32:e.batchSize,r=e.windowHopRatio||Ei,i=fl(this.collectTransferDataAsTfDataset(r,e.validationSplit,s,{augmentByMixingNoiseRatio:e.augmentByMixingNoiseRatio}),2),o=i[0],a=i[1],l=Qt(),[4,this.model.fitDataset(o,{epochs:e.epochs,validationData:e.validationSplit>0?a:null,callbacks:e.callback==null?null:[e.callback]})];case 1:return u=d.sent(),console.log("fitDataset() took "+(Qt()-l).toFixed(2)+" ms"),e.fineTuningEpochs!=null&&e.fineTuningEpochs>0?(c=Qt(),[4,this.fineTuningUsingTfDatasets(e,o,a)]):[3,3];case 2:return h=d.sent(),console.log("fitDataset() (fine-tuning) took "+(Qt()-c).toFixed(2)+" ms"),[2,[u,h]];case 3:return[2,u]}})})},t.prototype.trainOnTensors=function(e){return ct(this,void 0,void 0,function(){var s,r,i,o,a,l,u,c,h,d;return ht(this,function(f){switch(f.label){case 0:s=e.windowHopRatio||Ei,r=this.collectTransferDataAsTensors(s,{augmentByMixingNoiseRatio:e.augmentByMixingNoiseRatio}),i=r.xs,o=r.ys,console.log("Training data: xs.shape = "+i.shape+", ys.shape = "+o.shape),f.label=1;case 1:return f.trys.push([1,,6,7]),e.validationSplit!=null?(c=FI(i,o,e.validationSplit),a=c.trainXs,l=c.trainYs,u=[c.valXs,c.valYs]):(a=i,l=o),[4,this.model.fit(a,l,{epochs:e.epochs==null?20:e.epochs,validationData:u,batchSize:e.batchSize,callbacks:e.callback==null?null:[e.callback]})];case 2:return h=f.sent(),e.fineTuningEpochs!=null&&e.fineTuningEpochs>0?[4,this.fineTuningUsingTensors(e,a,l,u)]:[3,4];case 3:return d=f.sent(),[2,[h,d]];case 4:return[2,h];case 5:return[3,7];case 6:return G([i,o,a,l,u]),[7];case 7:return[2]}})})},t.prototype.fineTuningUsingTfDatasets=function(e,s,r){return ct(this,void 0,void 0,function(){var i,o,a;return ht(this,function(l){switch(l.label){case 0:return i=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,o=e.fineTuningOptimizer==null?"sgd":e.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:o,metrics:["acc"]}),[4,this.model.fitDataset(s,{epochs:e.fineTuningEpochs,validationData:r,callbacks:e.callback==null?null:[e.callback]})];case 1:return a=l.sent(),this.secondLastBaseDenseLayer.trainable=i,[2,a]}})})},t.prototype.fineTuningUsingTensors=function(e,s,r,i){return ct(this,void 0,void 0,function(){var o,a,l;return ht(this,function(u){switch(u.label){case 0:return o=this.secondLastBaseDenseLayer.trainable,this.secondLastBaseDenseLayer.trainable=!0,a=e.fineTuningOptimizer==null?"sgd":e.fineTuningOptimizer,this.model.compile({loss:"categoricalCrossentropy",optimizer:a,metrics:["acc"]}),[4,this.model.fit(s,r,{epochs:e.fineTuningEpochs,validationData:i,batchSize:e.batchSize,callbacks:e.fineTuningCallback==null?null:[e.fineTuningCallback]})];case 1:return l=u.sent(),this.secondLastBaseDenseLayer.trainable=o,[2,l]}})})},t.prototype.evaluate=function(e){return ct(this,void 0,void 0,function(){var s,r=this;return ht(this,function(i){return g(e.wordProbThresholds!=null&&e.wordProbThresholds.length>0,function(){return"Received null or empty wordProbThresholds"}),s=0,g(this.words[s]===Rn,function(){return"Cannot perform evaluation when the first tag is not "+Rn}),[2,N(function(){for(var o=[],a=0,l=r.collectTransferDataAsTensors(e.windowHopRatio),u=l.xs,c=l.ys.argMax(-1).dataSync(),h=r.model.predict(u),d=Ce(nt(h,[0,1],[h.shape[0],h.shape[1]-1]),-1),f=h.shape[0],p=0;p<e.wordProbThresholds.length;++p){for(var m=e.wordProbThresholds[p],b=d.greater(V(m)).dataSync(),w=0,S=0,k=0,E=0,D=0;D<f;++D)c[D]===s?(w++,b[D]&&k++):(S++,b[D]&&E++);var C=k/w,z=E/S;o.push({probThreshold:m,fpr:C,tpr:z}),console.log("ROC thresh="+m+": fpr="+C.toFixed(4)+", tpr="+z.toFixed(4)),p>0&&(a+=Math.abs(o[p-1].fpr-o[p].fpr)*(o[p-1].tpr+o[p].tpr)/2)}return{rocCurve:o,auc:a}})]})})},t.prototype.createTransferModelFromBaseModel=function(){var e=this;g(this.words!=null,function(){return"No word example is available for tranfer-learning model of name "+e.name});for(var s=this.baseModel.layers,r=s.length-2;r>=0&&s[r].getClassName().toLowerCase()!=="dense";)r--;if(r<0)throw new Error("Cannot find a hidden dense layer in the base model.");this.secondLastBaseDenseLayer=s[r];var i=this.secondLastBaseDenseLayer.output;this.transferHead=oI(),this.transferHead.add(yI({units:this.words.length,activation:"softmax",inputShape:i.shape.slice(1),name:"NewHeadDense"}));var o=this.transferHead.apply(i);this.model=Xd({inputs:this.baseModel.inputs,outputs:o})},t.prototype.modelInputShape=function(){return this.baseModel.inputs[0].shape},t.prototype.getMetadata=function(){return{tfjsSpeechCommandsVersion:gl,modelName:this.name,timeStamp:new Date().toISOString(),wordLabels:this.wordLabels()}},t.prototype.save=function(e){return ct(this,void 0,void 0,function(){var s,r,i;return ht(this,function(o){return s=e!=null,e=e||yl(this.name),s||(r=nr.localStorage.getItem(er),(i=r==null?{}:JSON.parse(r))[this.name]=this.getMetadata(),nr.localStorage.setItem(er,JSON.stringify(i))),console.log("Saving model to "+e),[2,this.model.save(e)]})})},t.prototype.load=function(e){return ct(this,void 0,void 0,function(){var s,r,i;return ht(this,function(o){switch(o.label){case 0:if(s=e!=null,e=e||yl(this.name),!s){if((r=JSON.parse(nr.localStorage.getItem(er)))==null||r[this.name]==null)throw new Error("Cannot find metadata for transfer model named "+this.name+'"');this.words=r[this.name].wordLabels,console.log("Loaded word list for model named "+this.name+": "+this.words)}return i=this,[4,fa(e)];case 1:return i.model=o.sent(),console.log("Loaded model from "+e+":"),this.model.summary(),[2]}})})},t.prototype.createTransfer=function(e){throw new Error("Creating transfer-learned recognizer from a transfer-learned recognizer is not supported.")},t})(jf);function yl(n){return""+bl+n}function HI(){return ct(this,void 0,void 0,function(){var n,t,e;return ht(this,function(s){switch(s.label){case 0:return[4,$g()];case 1:for(e in n=s.sent(),t=[],n)e.startsWith(bl)&&t.push(e.slice(bl.length));return[2,t]}})})}function jI(n){return ct(this,void 0,void 0,function(){var t;return ht(this,function(e){switch(e.label){case 0:return(t=JSON.parse(nr.localStorage.getItem(er)))==null&&(t={}),t[n]!=null&&delete t[n],nr.localStorage.setItem(er,JSON.stringify(t)),[4,_g(yl(n))];case 1:return e.sent(),[2]}})})}function qI(n,t,e,s){if(g(e==null&&s==null||e!=null&&s!=null,function(){return"customModelURL and customMetadataURL must be both provided or both not provided."}),e!=null&&g(t==null,function(){return"vocabulary name must be null or undefined when modelURL is provided."}),n==="BROWSER_FFT")return new jf(t,e,s);throw n==="SOFT_FFT"?new Error("SOFT_FFT SpeechCommandRecognizer has not been implemented yet."):new Error("Invalid fftType: '"+n+"'")}var KI={concatenateFloat32Arrays:Pf,normalizeFloat32Array:Rf,normalize:bs,playRawAudio:$I}}}]);
