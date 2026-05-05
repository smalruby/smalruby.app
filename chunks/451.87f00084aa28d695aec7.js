"use strict";(self.webpackChunkGUI=self.webpackChunkGUI||[]).push([[451],{85734(Pr,Tn,$){var x=$(83060),X=$(84184),Q=$(13538),Vt=$(73841);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ae={kernelName:x.ljI,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,Vt.P)((0,X.w)(p,"float32"),-1))}}};var mt=$(51148),i=$(30565),dt=$(98399),wt=$(84709),m=$(20763),Z=$(4817);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pe={kernelName:x.Vvy,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>{const f=(0,m.E)((0,X.w)(p,"float32")),v=(0,wt.R)((0,Z.j)((0,dt.d)(1),f));return(0,i.H)((0,mt.y)(h,v))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const en={kernelName:x.PH8,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>{const f=(0,wt.R)((0,Z.j)((0,m.E)((0,X.w)(p,"float32")),1));return(0,mt.y)(h,f)}}}};var lt=$(72667),K=$(84521),st=$(90876);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rt={kernelName:x.OMN,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=lt.assertAndGetBroadcastShape(p.shape,f.shape);return{a:()=>{let A=h;const I=lt.getReductionAxes(p.shape,v);return I.length>0&&(A=(0,st.c)(A,I)),(0,K.t)(A,p.shape)},b:()=>{let A=h;const I=lt.getReductionAxes(f.shape,v);return I.length>0&&(A=(0,st.c)(A,I)),(0,K.t)(A,f.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue={kernelName:x.EkD,saveAllInputs:!0,gradFunc:(h,b)=>{const p={};return b.forEach((f,v)=>{p[v]=()=>h.clone()}),p}};var et=$(41664);/**
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
 */const rt={kernelName:x.Jp_,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,et.P)(p)}}};/**
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
 */const ps={kernelName:x.p_m,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,et.P)(p)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ut={kernelName:x.QKF,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,wt.R)((0,Z.j)((0,dt.d)(1),(0,m.E)((0,X.w)(p,"float32")))))}}};var kt=$(61924);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $t={kernelName:x.epO,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>{const f=(0,wt.R)((0,kt.W)((0,dt.d)(1),(0,m.E)((0,X.w)(p,"float32"))));return(0,mt.y)(h,f)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qe={kernelName:x.lxb,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,lt.assertAndGetBroadcastShape)(p.shape,f.shape);return{a:()=>{const A=(0,kt.W)((0,m.E)(p),(0,m.E)(f));let I=(0,Q.l)(h,(0,mt.y)(f,A));const W=(0,lt.getReductionAxes)(p.shape,v);return W.length>0&&(I=(0,st.c)(I,W)),(0,K.t)(I,p.shape)},b:()=>{const A=(0,kt.W)((0,m.E)(p),(0,m.E)(f));let I=(0,i.H)((0,Q.l)(h,(0,mt.y)(p,A)));const W=(0,lt.getReductionAxes)(f.shape,v);return W.length>0&&(I=(0,st.c)(I,W)),(0,K.t)(I,f.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ze={kernelName:x.TyE,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,kt.W)((0,m.E)((0,X.w)(p,"float32")),1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ye={kernelName:x.zP9,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,Z.j)((0,dt.d)(1),(0,m.E)((0,X.w)(p,"float32"))))}}};var Bt=$(80006),Et=$(65650),ot=$(57012),Xt=$(7064),Dt=$(22014);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ue(h,b,p,f,v,C){const T=(0,Et.YT)(h,"dy","avgPool3dGrad"),A=(0,Et.YT)(b,"input","avgPool3dGrad");let I=T,W=A,H=!1;A.rank===4&&(H=!0,I=(0,K.t)(T,[1,T.shape[0],T.shape[1],T.shape[2],T.shape[3]]),W=(0,K.t)(A,[1,A.shape[0],A.shape[1],A.shape[2],A.shape[3]])),ot.vA(I.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${I.rank}.`),ot.vA(W.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${W.rank}.`),(0,Xt.s_)("avgPool3dGrad",v,C);const V={dy:I,input:W},at={filterSize:p,strides:f,pad:v,dimRoundingMode:C},ct=Bt.T2.runKernel(x.wwC,V,at);return H?(0,K.t)(ct,[ct.shape[1],ct.shape[2],ct.shape[3],ct.shape[4]]):ct}const te=(0,Dt.op)({avgPool3dGrad_:Ue});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ce={kernelName:x.cS,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{filterSize:v,strides:C,pad:T,dimRoundingMode:A}=p;return{x:()=>te(h,f,v,C,T,A)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pt(h,b,p,f,v){const C=(0,Et.YT)(h,"dy","avgPoolGrad"),T=(0,Et.YT)(b,"input","avgPoolGrad");ot.vA(T.rank===C.rank,()=>`Rank of input (${T.rank}) does not match rank of dy (${C.rank})`);let A=T,I=C,W=!1;T.rank===3&&(W=!0,A=(0,K.t)(T,[1,T.shape[0],T.shape[1],T.shape[2]]),I=(0,K.t)(C,[1,C.shape[0],C.shape[1],C.shape[2]])),ot.vA(I.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${I.rank}.`),ot.vA(A.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${A.rank}.`);const H={dy:I,input:A},V={filterSize:p,strides:f,pad:v},at=Bt.T2.runKernel(x.VCH,H,V);return W?(0,K.t)(at,[at.shape[1],at.shape[2],at.shape[3]]):at}const nn=(0,Dt.op)({avgPoolGrad_:pt});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sn={kernelName:x.ho8,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{filterSize:v,strides:C,pad:T}=p;return{x:()=>nn(h,f,v,C,T)}}};var Qt=$(46320);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const be={kernelName:x.jAQ,inputsToSave:["a","b"],gradFunc:(h,b,p)=>{const[f,v]=b,{transposeA:C,transposeB:T}=p;return!C&&!T?{a:()=>(0,Qt.N)(h,v,!1,!0),b:()=>(0,Qt.N)(f,h,!0,!1)}:!C&&T?{a:()=>(0,Qt.N)(h,v,!1,!1),b:()=>(0,Qt.N)(h,f,!0,!1)}:C&&!T?{a:()=>(0,Qt.N)(v,h,!1,!0),b:()=>(0,Qt.N)(f,h,!1,!1)}:{a:()=>(0,Qt.N)(v,h,!0,!0),b:()=>(0,Qt.N)(h,f,!0,!0)}}};var Tt=$(24951);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rn={kernelName:x.Ik2,gradFunc:(h,b,p)=>{const{blockShape:f,crops:v}=p;return{x:()=>(0,Tt.e)(h,f,v)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ke={kernelName:x.LB5,gradFunc:(h,b,p)=>{const f=p,v=f.inputShape,C=f.shape,T=Array.from(C);for(let I=v.length-1;I>=0;I--)if(v[I]===C[I])T[I]=1;else if(v[I]!==1)throw new Error(`broadcastTo(): [${v}] cannot be broadcast to [${C}].`);const A=[];for(let I=0;I<T.length;I++)T[I]>1&&A.push(I);return{x:()=>(0,st.c)(h,A,!0)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ne={kernelName:x.KXH,gradFunc:h=>({x:()=>h.clone()})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const En={kernelName:x.QDP,gradFunc:h=>({x:()=>(0,et.P)(h)})};var Ie=$(3046),ce=$(50061),he=$(74586),jt=$(4156);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ke={kernelName:x.vaV,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{clipValueMin:v,clipValueMax:C}=p;return{x:()=>(0,jt._)((0,he.n)((0,Ie.D)(f,v),(0,ce.I)(f,C)),h,(0,et.P)(h))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jt={kernelName:x.$zE,inputsToSave:["x"],gradFunc:Ae.gradFunc};var gt=$(30235);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on={kernelName:x.$dB,saveAllInputs:!0,gradFunc:(h,b,p)=>{const f=b.map(I=>I.shape),{axis:v}=p,C=(0,ot.Y6)(v,b[0].shape)[0],T=f.map(I=>I[C]);return(0,gt.l)(h,T,C).map(I=>()=>I)}};var Nt=$(59413),ze=$(60715);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const de={kernelName:x.p2J,inputsToSave:["x","filter"],gradFunc:(h,b,p)=>{const[f,v]=b,{dilations:C,strides:T,pad:A,dataFormat:I}=p;return ot.vA(Xt.Dh(C),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${C}'`),{x:()=>(0,ze.v)(f.shape,h,v,T,A,I),filter:()=>(0,Nt.H)(f,h,v.shape,T,A,I)}}};var Ge=$(64147);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ee={kernelName:x.jfg,inputsToSave:["dy","filter"],gradFunc:(h,b,p)=>{const[f,v]=b,{strides:C,pad:T,dataFormat:A,dimRoundingMode:I}=p;return{dy:()=>(0,Ge.X)(h,v,C,T,A,1,I),filter:()=>(0,Nt.H)(h,f,v.shape,C,T,A,I)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ln(h,b,p,f,v){let C=h;h.rank===4&&(C=(0,K.t)(h,[1,h.shape[0],h.shape[1],h.shape[2],h.shape[3]]));let T=b;T.rank===4&&(T=(0,K.t)(b,[1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]])),ot.vA(C.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${C.shape}.`),ot.vA(T.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${T.shape}.`),ot.vA(p.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${p}.`),ot.vA(C.shape[4]===p[3],()=>`Error in conv3dDerFilter: depth of input ${C.shape[4]}) must match input depth in filter (${p[3]}.`),ot.vA(T.shape[4]===p[4],()=>`Error in conv3dDerFilter: depth of dy (${T.shape[4]}) must match output depth for filter (${p[4]}).`);const A={x:C,dy:T},I={strides:f,pad:v,filterShape:p};return Bt.T2.runKernel(x.iGz,A,I)}const an=(0,Dt.op)({conv3DBackpropFilter_:Ln});var ln=$(62864);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fn={kernelName:x.A1h,inputsToSave:["x","filter"],gradFunc:(h,b,p)=>{const{dilations:f,strides:v,pad:C}=p;ot.vA((0,Xt.Dh)(f),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${f}'`);const[T,A]=b;return{x:()=>(0,ln.c)(T.shape,h,A,v,C),filter:()=>an(T,h,A.shape,v,C)}}};var un=$(47001);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cn={kernelName:x.Mn0,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)((0,i.H)((0,un.F)((0,X.w)(p,"float32"))),h)}}};var _t=$(74525);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pe={kernelName:x.MnK,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)((0,_t.L)((0,X.w)(p,"float32")),h)}}};var It=$(89557),hn=$(93461),ne=$(66328);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fs={kernelName:x.nY8,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{axis:v,exclusive:C,reverse:T}=p;return{x:()=>{const A=(0,It.Em)([v],f.rank);let I=(0,hn.r)(h,v,C,!T);return A!=null&&(I=(0,ne.m)(I,A)),I}}}};var ms=$(6929),Wt=$(79207);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const De={kernelName:x.tGH,inputsToSave:["x","filter"],gradFunc:(h,b,p)=>{const{dilations:f,strides:v,pad:C,dimRoundingMode:T}=p,A=f??[1,1];ot.vA(Xt.Dh(A),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${A}'`);const[I,W]=b;return ot.vA(I.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${I.rank}.`),ot.vA(W.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${W.rank}.`),ot.vA(I.shape[3]===W.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${I.shape[3]}) must match the inChannels dimension in filter ${W.shape[2]}.`),ot.vA(Xt.G0(v,A),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${v} and dilations '${A}'.`),Xt.s_("depthwiseConv2d",C,T),{x:()=>(0,Wt.l)(I.shape,h,W,v,C,A,T),filter:()=>(0,ms.x)(I,h,W.shape,v,C,A,T)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xt={kernelName:x.jxD,inputsToSave:["x","filter"],gradFunc:(h,b,p)=>{const[f,v]=b,C={x:f,filter:v,dy:h},T={x:f,filter:v,dy:h};return{x:()=>Bt.T2.runKernel(x.bP9,C,p),filter:()=>Bt.T2.runKernel(x.pk0,T,p)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gs={kernelName:x.Pah,outputsToSave:[!0],gradFunc:(h,b)=>{const[p]=b,f={dy:h,y:p};return{x:()=>Bt.T2.runKernel(x.rsH,f)}}};var w=$(33496);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u={kernelName:x._s9,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b,f=(0,Q.l)((0,w.o)((0,i.H)((0,m.E)(p))),2/Math.sqrt(Math.PI));return{x:()=>(0,Q.l)(h,f)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g={kernelName:x.ox3,outputsToSave:[!0],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,p)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N={kernelName:x.ybN,inputsToSave:["input"],gradFunc:(h,b)=>{const[p]=b;return{input:()=>(0,K.t)(h,p.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O={kernelName:x.ybj,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,w.o)(p))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U={kernelName:x.ZgB,gradFunc:h=>({x:()=>(0,et.P)(h)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tt={kernelName:x.ElG,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,lt.assertAndGetBroadcastShape)(p.shape,f.shape);return{a:()=>{const A=(0,mt.y)(h,(0,X.w)(f,"float32")),I=(0,lt.getReductionAxes)(p.shape,v);return I.length>0?(0,K.t)((0,st.c)(A,I),p.shape):A},b:()=>{let A=(0,Q.l)(h,(0,X.w)(p,"float32"));const I=(0,lt.getReductionAxes)(f.shape,v);I.length>0&&(A=(0,K.t)((0,st.c)(A,I),f.shape));const W=(0,m.E)(f);return(0,i.H)((0,mt.y)(A,(0,X.w)(W,"float32")))}}}};var _=$(33895),vt=$(21767);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ot={kernelName:x.i5R,inputsToSave:["x","mean","variance","scale"],gradFunc:(h,b,p)=>{const{varianceEpsilon:f}=p,[v,C,T,A]=b,I=A??(0,dt.d)(1),W=(0,lt.getReductionAxes)(C.shape,v.shape),H=[];if(C.rank===1){for(let Ct=0;Ct<v.shape.length-1;++Ct)H.push(v.shape[Ct]);H.push(1)}const V=(0,Z.j)(v,C),at=(0,Q.l)(h,I),ct=(0,_.Z)((0,kt.W)(T,(0,dt.d)(f))),se=(0,Q.l)((0,Q.l)((0,Q.l)(ct,ct),ct),(0,dt.d)(-.5));return{x:()=>C.rank===1?(0,K.t)((0,Q.l)((0,Q.l)(h,(0,vt.V)((0,K.t)(ct,[1,1,1,C.shape[0]]),H)),I),v.shape):(0,K.t)((0,Q.l)((0,Q.l)(h,ct),I),v.shape),mean:()=>{let Ct=(0,Q.l)((0,Q.l)(ct,(0,dt.d)(-1)),at);return C.rank===1&&(Ct=(0,st.c)(Ct,W)),(0,K.t)(Ct,C.shape)},variance:()=>{let Ct=(0,Q.l)((0,Q.l)(se,V),at);return C.rank===1&&(Ct=(0,st.c)(Ct,W)),(0,K.t)(Ct,C.shape)},scale:()=>{const Ct=(0,Q.l)(V,ct);let qe=(0,Q.l)(h,Ct);return C.rank===1&&(qe=(0,st.c)(qe,W)),(0,K.t)(qe,C.shape)},offset:()=>{let Ct=h;return C.rank===1&&(Ct=(0,st.c)(Ct,W)),(0,K.t)(Ct,C.shape)}}}};var we=$(64531),Qr=$(78459);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zr={kernelName:x.mxL,inputsToSave:["x","indices"],gradFunc:(h,b,p)=>{const[f,v]=b,{axis:C,batchDims:T}=p,A=(0,ot.Y6)(C,f.shape)[0],I=(W,H,V)=>()=>{const at=W.shape,ct=H.size,se=at.slice(0,A),Se=se.length,Yt=at.slice(C,at.length).slice(1),Is=Yt.length,zs=Zt(0,Se),Ds=Zt(Se+1,Se+1+Is),Ct=Te([se,[ct],Yt]),qe=(0,K.t)(V,Ct),wi=(0,K.t)(H,[ct]),Ts=Te([[Se],zs,Ds]),vi=(0,ne.m)(qe,Ts);let Jn=(0,Qr.z)(vi,wi,W.shape[A]);const Si=(0,It.gx)(Ts);return Jn=(0,ne.m)(Jn,Si),Jn};if(T===1){const W=f.shape[0],H=f.split(W,0);return{x:()=>(0,we.t)(H.map((ct,se)=>I(ct,v.slice(se,1),h.slice(se,1))())).reshape(f.shape),indices:()=>v}}else return{x:I(f,v,h),indices:()=>v}}};function Zt(h,b){const p=[];for(let f=h;f<b;++f)p.push(f);return p}function Te(h){const b=[];for(let p=0;p<h.length;++p)for(let f=0;f<h[p].length;++f)b.push(h[p][f]);return b}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const js={kernelName:x.lLS,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b;return{a:()=>(0,et.P)(p),b:()=>(0,et.P)(f)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Js={kernelName:x.lzr,gradFunc:h=>({x:()=>(0,X.w)(h,"float32")})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _s={kernelName:x.gIW,gradFunc:h=>({x:()=>(0,et.P)(h)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ve={kernelName:x.E3$,gradFunc:h=>({x:()=>(0,et.P)(h)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rn={kernelName:x.iPs,gradFunc:h=>({x:()=>(0,et.P)(h)})};var fe=$(33085);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $n={kernelName:x.X0$,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{alpha:v}=p,C=(0,fe.r)(f,0);return{x:()=>(0,jt._)(C,h,(0,Q.l)(h,v))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys={kernelName:x.Cg$,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,kt.W)(p,1))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const On={kernelName:x.tG8,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,X.w)(p,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dn={kernelName:x.zfU,inputsToSave:[],outputsToSave:[!0],gradFunc:(h,b,p)=>{const[f]=b,{axis:v}=p;return{logits:()=>{const T=(0,w.o)(f);return(0,Z.j)(h,(0,Q.l)((0,st.c)(h,v,!0),T))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ht(h,b,p,f=5,v=1,C=1,T=.5){const A={x:h,y:b,dy:p},I={depthRadius:f,bias:v,alpha:C,beta:T};return Bt.T2.runKernel(x.ToN,A,I)}const Ur=(0,Dt.op)({localResponseNormalizationBackprop_:Ht});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kr={kernelName:x.jM4,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(h,b,p)=>{const[f,v]=b,{depthRadius:C,bias:T,alpha:A,beta:I}=p;return{x:()=>Ur(f,v,h,C,T,A,I)}}};var bs=$(39123);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(h,b,p,f){return b.rank<p.rank&&(b=(0,K.t)(b,It.SM(b.shape,f))),h.rank<p.rank&&(h=(0,K.t)(h,It.SM(h.shape,f))),{x:()=>(0,Q.l)(h,(0,X.w)((0,bs.L)(p,b),h.dtype))}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hs={kernelName:x.VAI,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(h,b,p)=>{const f=p,{reductionIndices:v}=f,C=b[0],T=b[1],A=ot.Y6(v,C.shape),I=Ee(h,T,C,A);return{x:()=>I.x()}}};var Mn=$(13870);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut={kernelName:x.LDN,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b;return{a:()=>(0,Q.l)(h,(0,X.w)((0,Ie.D)(p,f),"float32")),b:()=>(0,Q.l)(h,(0,X.w)((0,Mn.M)(p,f),"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(h,b,p,f,v,C,T){const A=(0,Et.YT)(h,"dy","maxPool3dGrad"),I=(0,Et.YT)(b,"input","maxPool3dGrad"),W=(0,Et.YT)(p,"output","maxPool3dGrad");let H=A,V=I,at=W,ct=!1;I.rank===4&&(ct=!0,H=(0,K.t)(A,[1,A.shape[0],A.shape[1],A.shape[2],A.shape[3]]),V=(0,K.t)(I,[1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]]),at=(0,K.t)(W,[1,W.shape[0],W.shape[1],W.shape[2],W.shape[3]])),ot.vA(H.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${H.rank}.`),ot.vA(V.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${V.rank}.`),ot.vA(at.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${at.rank}.`),(0,Xt.s_)("maxPool3dGrad",C,T);const se={dy:H,input:V,output:at},Se={filterSize:f,strides:v,pad:C,dimRoundingMode:T},Yt=Bt.T2.runKernel(x.cHb,se,Se);return ct?(0,K.t)(Yt,[Yt.shape[1],Yt.shape[2],Yt.shape[3],Yt.shape[4]]):Yt}const Ys=(0,Dt.op)({maxPool3dGrad_:qs});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws={kernelName:x.ySp,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(h,b,p)=>{const[f,v]=b,{filterSize:C,strides:T,pad:A,dimRoundingMode:I}=p;return{x:()=>Ys(h,f,v,C,T,A,I)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xs(h,b,p,f,v,C,T){const A=(0,Et.YT)(h,"dy","maxPoolGrad"),I=(0,Et.YT)(b,"input","maxPoolGrad"),W=(0,Et.YT)(p,"output","maxPoolGrad");ot.vA(I.rank===A.rank,()=>`Rank of input (${I.rank}) does not match rank of dy (${A.rank})`),ot.vA(A.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${A.rank}.`),ot.vA(I.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${I.rank}.`),Xt.s_("maxPoolGrad",C,T);const H={dy:A,input:I,output:W},V={filterSize:f,strides:v,pad:C,dimRoundingMode:T};return Bt.T2.runKernel(x.RXX,H,V)}const Ve=(0,Dt.op)({maxPoolGrad_:Xs});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ti={kernelName:x.t3d,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(h,b,p)=>{const[f,v]=b,{filterSize:C,strides:T,pad:A}=p;return{x:()=>Ve(h,f,v,C,T,A)}}};var Bn=$(4034);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gr={kernelName:x.g5A,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{axis:v}=p,C=ot.Y6(v,f.shape),A=(0,It.lb)(f.shape,C)[1],I=ot.Ze(A);return{x:()=>{const H=f.shape.slice();C.forEach(ct=>{H[ct]=1});const V=(0,K.t)(h,H);return(0,mt.y)((0,Q.l)(V,(0,Bn.S)(f.shape,"float32")),I)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ei={kernelName:x.lNG,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(h,b,p)=>{const f=p,{axis:v}=f,[C,T]=b,A=ot.Y6(v,C.shape),I=Ee(h,T,C,A);return{x:()=>I.x()}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ni={kernelName:x.LG0,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b;return{a:()=>(0,Q.l)(h,(0,X.w)((0,ce.I)(p,f),"float32")),b:()=>(0,Q.l)(h,(0,X.w)((0,fe.r)(p,f),"float32"))}}};var zt=$(31793);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wn={kernelName:x.x7F,inputsToSave:["x"],gradFunc:(h,b,p)=>{const f=b[0],{paddings:v}=p,C=v.map(T=>T[0]);return{x:()=>(0,zt.d)(h,C,f.shape)}}};var pn=$(31821);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn={kernelName:x.BLA,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,lt.assertAndGetBroadcastShape)(p.shape,f.shape);return{a:()=>{const A=(0,lt.getReductionAxes)(p.shape,v);return A.length>0?(0,K.t)((0,st.c)(h,A),p.shape):h},b:()=>{const A=(0,Q.l)(h,(0,i.H)((0,pn.R)((0,mt.y)(p,f)))),I=(0,lt.getReductionAxes)(f.shape,v);return I.length>0?(0,K.t)((0,st.c)(A,I),f.shape):A}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qn={kernelName:x.xu7,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,lt.assertAndGetBroadcastShape)(p.shape,f.shape);return{a:()=>{const A=(0,Q.l)(h,(0,X.w)(f,"float32")),I=(0,lt.getReductionAxes)(p.shape,v);return I.length>0?(0,K.t)((0,st.c)(A,I),p.shape):A},b:()=>{const A=(0,Q.l)(h,(0,X.w)(p,"float32")),I=(0,lt.getReductionAxes)(f.shape,v);return I.length>0?(0,K.t)((0,st.c)(A,I),f.shape):A}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zn={kernelName:x.l0G,gradFunc:h=>({x:()=>(0,i.H)(h)})};var Un=$(49252);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kn={kernelName:x.urI,inputsToSave:["indices"],gradFunc:(h,b)=>{const p=b[0];return{indices:()=>(0,Un.U)(p.shape,"float32")}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const si={kernelName:x.LWX,gradFunc:h=>({x:()=>(0,et.P)(h)})};var Lt=$(44658);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fn={kernelName:x.mM$,saveAllInputs:!0,gradFunc:(h,b,p)=>{const{axis:f}=p;return(0,Lt.K)(h,f).map(C=>()=>C)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const je={kernelName:x.ODT,inputsToSave:["x"],gradFunc:(h,b,p)=>{const f=b[0],{paddings:v}=p,C=v.map(T=>T[0]);return{x:()=>(0,zt.d)(h,C,f.shape)}}};var mn=$(48177),Je=$(58949);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gn={kernelName:x.pyJ,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(h,b)=>{const[p,f,v]=b,C=p,T=f,A=lt.assertAndGetBroadcastShape(C.shape,T.shape);return{a:()=>{const H=(0,X.w)(T,"float32");let V=(0,Q.l)(h,(0,Q.l)(H,(0,Je.n)(C,(0,Z.j)(H,(0,dt.d)(1)))));const at=lt.getReductionAxes(C.shape,A);return at.length>0&&(V=(0,st.c)(V,at)),(0,K.t)(V,C.shape)},b:()=>{const H=(0,fe.r)(C,0),V=(0,jt._)(H,(0,mn.R)(C),(0,et.P)(C));let at=(0,Q.l)(h,(0,Q.l)(v,V));const ct=lt.getReductionAxes(T.shape,A);return ct.length>0&&(at=(0,st.c)(at,ct)),(0,K.t)(at,T.shape)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yn={kernelName:x.Ncv,inputsToSave:["x","alpha"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,fe.r)(p,0);return{x:()=>(0,jt._)(v,h,(0,Q.l)(h,f)),alpha:()=>{let C=(0,jt._)(v,(0,et.P)(h),(0,Q.l)(h,p));const T=(0,lt.getReductionAxes)(f.shape,h.shape);return T.length>0&&(C=(0,st.c)(C,T)),(0,K.t)(C,f.shape)}}}};var bn=$(4145);/**
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
 */function vs(h,b,p){const f=h.shape.slice();f[p]=1;const v=(0,K.t)(b,f),C=(0,bn.L)(h,p,!0,!1),T=(0,bn.L)(h,p,!0,!0),A=(0,Q.l)(C,T);return(0,Q.l)(v,A)}function Ss(h,b,p){const f=h.shape.length,v=f-p.length,C=It.Em(p,f);let T=h;C!=null&&(T=(0,ne.m)(h,C));const A=T.shape.slice(),W=A.splice(f-p.length,p.length).reduce((at,ct)=>at*ct,1);A.push(W);const H=T.reshape(A);let V=vs(H,b,v);if(V=V.reshape(T.shape),C!=null){const at=It.gx(C);V=(0,ne.m)(V,at)}return V}const bt={kernelName:x.kdj,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{axis:v}=p;let C=[];return v==null?C=f.shape.map((T,A)=>A):typeof v=="number"?C=[v]:C=v,{x:()=>Ss(f,h,C)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yt={kernelName:x.sDr,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=lt.assertAndGetBroadcastShape(p.shape,f.shape);return{a:()=>{const A=(0,mt.y)(h,(0,X.w)(f,"float32")),I=lt.getReductionAxes(p.shape,v);return I.length>0?(0,K.t)((0,st.c)(A,I),p.shape):A},b:()=>{let A=(0,Q.l)(h,(0,X.w)(p,"float32"));const I=lt.getReductionAxes(f.shape,v);I.length>0&&(A=(0,K.t)((0,st.c)(A,I),f.shape));const W=(0,m.E)(f);return(0,i.H)((0,mt.y)(A,(0,X.w)(W,"float32")))}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gn={kernelName:x.huO,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,i.H)((0,m.E)(p)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn={kernelName:x.P_L,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b,f=(0,Q.l)((0,ce.I)(p,6),(0,Vt.P)(p));return{x:()=>(0,Q.l)(h,(0,X.w)(f,"float32"))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G={kernelName:x.fUj,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,X.w)((0,Vt.P)(p),"float32"))}}};/**
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
 */const nt={kernelName:x.R23,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,K.t)(h,p.shape)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vn={kernelName:x.hgw,inputsToSave:["images"],gradFunc:(h,b,p)=>{const[f]=b,v={dy:h,images:f};return{images:()=>Bt.T2.runKernel(x.FCQ,v,p)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt={kernelName:x.jOE,inputsToSave:["images"],gradFunc:(h,b,p)=>{const[f]=b,v={dy:h,images:f};return{images:()=>Bt.T2.runKernel(x.XQy,v,p)}}};var ii=$(61837);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xs={kernelName:x.D7i,gradFunc:(h,b,p)=>{const{dims:f}=p,v=(0,ot.Y6)(f,h.shape);return{x:()=>(0,ii.B)(h,v)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const As={kernelName:x.hVg,gradFunc:h=>({x:()=>(0,et.P)(h)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kt={kernelName:x.TOR,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,i.H)((0,mt.y)(h,(0,Q.l)((0,Je.n)(p,1.5),2)))}}};var ri=$(9050);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vr={kernelName:x.l6P,inputsToSave:["condition"],gradFunc:(h,b)=>{const[p]=b;return{condition:()=>(0,X.w)((0,et.P)(p),"float32"),t:()=>(0,Q.l)(h,(0,X.w)(p,h.dtype)),e:()=>(0,Q.l)(h,(0,X.w)((0,ri.N)(p),h.dtype))}}};var oi=$(39623);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jr={kernelName:x.u$b,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>{const f=(0,fe.r)(p,(0,dt.d)(0)),v=(0,dt.d)(oi.j),C=(0,dt.d)(oi.X),T=(0,Q.l)(h,C),A=(0,Q.l)((0,Q.l)(h,v),(0,w.o)((0,X.w)(p,"float32")));return(0,jt._)(f,T,A)}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jr={kernelName:x.vI1,outputsToSave:[!0],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,Q.l)(p,(0,Z.j)((0,dt.d)(1),p)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _r={kernelName:x.YVe,gradFunc:h=>({x:()=>(0,et.P)(h)})};var ai=$(95364);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hr={kernelName:x.hql,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)((0,ai.g)((0,X.w)(p,"float32")),h)}}};var qr=$(28054);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yr={kernelName:x.J3C,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)((0,qr.y)((0,X.w)(p,"float32")),h)}}};var Xr=$(31058),to=$(3492);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eo={kernelName:x.JiE,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{begin:v,size:C}=p,T=f.shape,[A,I]=(0,to.parseSliceParams)(f,v,C),W=[];for(let H=0;H<h.rank;H++)W.push([A[H],T[H]-A[H]-I[H]]);return{x:()=>(0,Xr.e)(h,W)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vn={kernelName:x.rFG,outputsToSave:[!0],gradFunc:(h,b,p)=>{const[f]=b,{dim:v}=p,C=!0,T=(0,Q.l)(h,f);return{logits:()=>(0,Z.j)(T,(0,Q.l)((0,st.c)(T,[v],C),f))}}};var jn=$(32331);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const no={kernelName:x.Fin,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,jn.r)(p))}}};var At=$(53763);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pt={kernelName:x.A8B,gradFunc:(h,b,p)=>{const{blockShape:f,paddings:v}=p;return{x:()=>(0,At.G)(h,f,v)}}};var li=$(72515);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _e={kernelName:x.Blb,gradFunc:(h,b,p)=>{const{axis:f}=p;return{x:()=>(0,li.x)(h,f)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ui={kernelName:x.dFH,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,Q.l)((0,wt.R)((0,X.w)(p,"float32")),2))}}};/**
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
 */const Y={kernelName:x.M6A,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)(h,(0,Q.l)((0,X.w)(p,"float32"),2))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ci={kernelName:x.Ddj,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=(0,dt.d)(2);return{a:()=>(0,Q.l)(h,(0,Q.l)(v,(0,Z.j)(p,f))),b:()=>(0,Q.l)(h,(0,Q.l)(v,(0,Z.j)(f,p)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hi={kernelName:x.pnw,gradFunc:h=>({x:()=>(0,et.P)(h)})};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cs={kernelName:x.PbM,inputsToSave:["a","b"],gradFunc:(h,b)=>{const[p,f]=b,v=lt.assertAndGetBroadcastShape(p.shape,f.shape);return{a:()=>{let A=h;const I=lt.getReductionAxes(p.shape,v);return I.length>0&&(A=(0,st.c)(A,I)),(0,K.t)(A,p.shape)},b:()=>{let A=h;const I=lt.getReductionAxes(f.shape,v);return I.length>0&&(A=(0,st.c)(A,I)),(0,K.t)((0,i.H)(A),f.shape)}}}};/**
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
 */const di={kernelName:x.WuN,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,v=f.shape.slice(),{axis:C}=p;(0,ot.Y6)(C,f.shape).forEach(W=>{v[W]=1});const A=(0,K.t)(h,v),I=(0,Q.l)(A,(0,Bn.S)(f.shape,"float32"));return{x:()=>I}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pi={kernelName:x.oFs,inputsToSave:["x"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,mt.y)(h,(0,m.E)((0,ai.g)(p)))}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Le={kernelName:x.iuW,outputsToSave:[!0],gradFunc:(h,b)=>{const[p]=b;return{x:()=>(0,Q.l)((0,Z.j)((0,dt.d)(1),(0,m.E)(p)),h)}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ks={kernelName:x.FAs,inputsToSave:["x"],gradFunc:(h,b,p)=>{const[f]=b,{reps:v}=p;return{x:()=>{let T=(0,et.P)(f);if(f.rank===1)for(let A=0;A<v[0];++A)T=(0,kt.W)(T,(0,zt.d)(h,[A*f.shape[0]],[f.shape[0]]));else if(f.rank===2)for(let A=0;A<v[0];++A)for(let I=0;I<v[1];++I)T=(0,kt.W)(T,(0,zt.d)(h,[A*f.shape[0],I*f.shape[1]],[f.shape[0],f.shape[1]]));else if(f.rank===3)for(let A=0;A<v[0];++A)for(let I=0;I<v[1];++I)for(let W=0;W<v[2];++W)T=(0,kt.W)(T,(0,zt.d)(h,[A*f.shape[0],I*f.shape[1],W*f.shape[2]],[f.shape[0],f.shape[1],f.shape[2]]));else if(f.rank===4)for(let A=0;A<v[0];++A)for(let I=0;I<v[1];++I)for(let W=0;W<v[2];++W)for(let H=0;H<v[3];++H)T=(0,kt.W)(T,(0,zt.d)(h,[A*f.shape[0],I*f.shape[1],W*f.shape[2],H*f.shape[3]],[f.shape[0],f.shape[1],f.shape[2],f.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${f.rank} tensors yet.`);return T}}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi={kernelName:x.wx0,gradFunc:(h,b,p)=>{const f=p,{perm:v}=f,C=It.gx(v);return{x:()=>(0,ne.m)(h,C)}}};/**
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
 */const me={kernelName:x.dXR,gradFunc:(h,b,p)=>{const f=p,{axis:v}=f;return{value:()=>(0,we.t)(h,v)}}};var Sn=$(90901),xn=$(36256),mi=$(86117);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const He={kernelName:x.pPe,inputsToSave:["segmentIds"],gradFunc:(h,b)=>{const[p]=b;return{x:()=>gi(h,p)}}};function gi(h,b){const p=(0,mi.P)(b,(0,et.P)(b)),f=(0,xn.k)(h,p);let v=(0,Ie.D)(b,(0,dt.d)(0,"int32"));const C=f.rank-v.rank;for(let A=0;A<C;++A)v=(0,Sn.U)(v,A+1);v=(0,he.n)(v,(0,Bn.S)(f.shape,"bool"));const T=(0,et.P)(f);return(0,jt._)(v,f,T)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yi={kernelName:x.xJ3,gradFunc:h=>({x:()=>(0,et.P)(h)})};var Ns=$(33753);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bi=[Ae,Pe,en,Rt,ue,rt,ps,ut,$t,Qe,Ze,ye,Ce,sn,be,rn,ke,Ne,En,Ke,Jt,on,ee,de,Fn,cn,pe,fs,De,xt,yt,gs,u,g,N,O,tt,U,Ot,Zr,js,Js,_s,ve,Rn,$n,ys,On,dn,Kr,Hs,Hs,Ut,ws,ti,Gr,ei,ni,Wn,Pn,Qn,Zn,Kn,si,fn,je,je,gn,yn,bt,Gn,wn,G,nt,vn,qt,xs,As,Kt,Vr,jr,Jr,_r,Hr,Yr,eo,Vn,no,Pt,Pt,_e,_e,ui,ci,Y,hi,Cs,di,pi,Le,ks,fi,me,He,yi];for(const h of bi)(0,Ns.kr)(h)},27131(Pr,Tn,$){$.r(Tn),$.d(Tn,{CSVDataset:()=>on,Dataset:()=>be,FileDataSource:()=>hn,TextLineDataset:()=>Ie,URLDataSource:()=>ne,array:()=>rn,csv:()=>fs,func:()=>ms,generator:()=>Wt,microphone:()=>xt,version_data:()=>gs,webcam:()=>De,zip:()=>ke});var x=$(35467),X=$(92464);/**
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
 */function Q(w,u){return Vt(w,u)}function Vt(w,u,g=new Map,N=new Set){if(w==null)return null;if(typeof Blob=="function"&&w instanceof Blob)return w.slice();if(N.has(w))throw new Error("Circular references are not supported.");if(g.has(w))return g.get(w);const O=u(w);if(O.recurse&&O.value!==null)throw new Error("A deep map function may not return both a value and recurse=true.");if(O.recurse)if(wt(w)){const U=Array.isArray(w)?[]:{};N.add(w);for(const tt in w){const _=w[tt],vt=Vt(_,u,g,N);U[tt]=vt}return N.delete(w),w.__proto__&&(U.__proto__=w.__proto__),U}else throw new Error(`Can't recurse into non-iterable type: ${w}`);else return g.set(w,O.value),O.value}function Ae(w,u=i){return mt(w,u)}function mt(w,u,g=new Set){const N=w[0];if(g.has(N))throw new Error("Circular references are not supported.");const O=u(w);if(O.recurse&&O.value!==null)throw new Error("A deep zip function may not return both a value and recurse=true.");if(O.recurse)if(wt(N)){const U=Array.isArray(N)?[]:{};g.add(N);for(const tt in N){const _=w.map(Ot=>Ot[tt]),vt=mt(_,u,g);U[tt]=vt}return g.delete(N),U}else throw new Error(`Can't recurse into non-iterable type: ${N}`);else return O.value}function i(w){return w===null?null:wt(w[0])?{value:null,recurse:!0}:{value:w,recurse:!1}}async function dt(w,u){const g=new Map;Vt(w,u,g);for(const O of Array.from(g.keys())){const U=g.get(O);if(x.ZSL.isPromise(U)){const tt=await U;g.set(O,tt)}}return Vt(w,u,g)}function wt(w){let u=!1;if(x._K2().get("IS_BROWSER"))u=w instanceof TextDecoder;else{const{StringDecoder:g}=$(79234);u=w instanceof g}return w!=null&&!ArrayBuffer.isView(w)&&(Array.isArray(w)||typeof w=="object"&&!(w instanceof x.qYS)&&!(w instanceof Promise)&&!u)}function m(w){return w==null||Z(w)||Array.isArray(w)||typeof w=="object"&&w instanceof x.qYS||x.ZSL.isTypedArray(w)}function Z(w){return w===null||typeof w!="object"&&typeof w!="function"}/**
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
 */function Pe(w){return Q(w,en)}function en(w){return w instanceof x.qYS?{value:w.clone(),recurse:!1}:wt(w)?{value:null,recurse:!0}:{value:w,recurse:!1}}/**
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
 */class lt{constructor(u){if(this.capacity=u,this.begin=0,this.end=0,u==null)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(u<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(u),this.doubledCapacity=2*u}wrap(u){for(;u<0;)u+=this.doubledCapacity;return u%this.doubledCapacity}get(u){if(u<0)throw new RangeError("Can't get item at a negative index.");return this.data[u%this.capacity]}set(u,g){if(u<0)throw new RangeError("Can't set item at a negative index.");this.data[u%this.capacity]=g}length(){let u=this.end-this.begin;return u<0&&(u=this.doubledCapacity+u),u}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(u){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,u),this.end=this.wrap(this.end+1)}pushAll(u){for(const g of u)this.push(g)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const u=this.get(this.end);return this.set(this.end,void 0),u}unshift(u){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,u)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const u=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),u}shuffleExcise(u){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const g=this.wrap(this.begin+u),N=this.get(g);return this.set(g,this.pop()),N}}/**
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
 */class K extends lt{constructor(){super(K.INITIAL_CAPACITY)}isFull(){return!1}push(u){super.isFull()&&this.expand(),super.push(u)}unshift(u){super.isFull()&&this.expand(),super.unshift(u)}expand(){const u=this.capacity*2,g=new Array(u),N=this.length();for(let O=0;O<N;O++)g[O]=this.get(this.wrap(this.begin+O));this.data=g,this.capacity=u,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=N}}K.INITIAL_CAPACITY=32;/**
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
 */function st(w){return new kt(w)}function Rt(w){let u=w;return ue(()=>({value:u++,done:!1}))}function ue(w){return new $t(w)}function et(w,u){return new Ce(w,u)}function rt(w,u,g){return et(ue(w).take(u),g)}function ps(w,u=pt.FAIL){return new nn(w,u)}class ut{async toArray(){const u=[];let g=await this.next();for(;!g.done;)u.push(g.value),g=await this.next();return u}async toArrayForTest(){const u=this.prefetch(100),g=[];let N=await u.next();for(;!N.done;)g.push(N.value),N=await u.next();return g}async resolveFully(){let u=await this.next();for(;!u.done;)u=await this.next()}async resolveWhile(u){let g=await this.next(),N=u(g.value);for(;!g.done&&N;)g=await this.next(),N=u(g.value)}handleErrors(u){return new Xt(this,u)}filter(u){return new Et(this,u)}map(u){return new ot(this,u)}mapAsync(u){return new Dt(this,u)}serialMapAsync(u){return new Dt(this,u).serial()}flatmap(u){return new te(this,u)}async forEachAsync(u){return this.map(u).resolveFully()}async serialForEach(u){return this.serialMapAsync(u).resolveWhile(g=>g===!0)}rowMajorBatch(u,g=!0){return new Bt(this,u,g)}columnMajorBatch(u,g=!0,N=i){return this.rowMajorBatch(u,g).map(U=>Ae(U,N))}concatenate(u,g){return new Ce(st([this,u]),g)}take(u){return u<0||u==null?this:new ye(this,u)}skip(u){return u<0||u==null?this:new Ze(this,u)}prefetch(u){return new sn(this,u)}shuffle(u,g){return new Qt(this,u,g)}serial(){return new Qe(this)}}class kt extends ut{constructor(u){super(),this.items=u,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const u=this.items[this.trav];return this.trav++,{value:Pe(u),done:!1}}}class $t extends ut{constructor(u){super(),this.nextFn=u}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(u){throw u.message=`Error thrown while iterating through a dataset: ${u.message}`,u}}}class Qe extends ut{constructor(u){super(),this.upstream=u,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class Ze extends ut{constructor(u,g){super(),this.upstream=u,this.maxCount=g,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const u=await this.upstream.next();if(u.done)return u;x.ASo(u.value)}return this.upstream.next()}}class ye extends ut{constructor(u,g){super(),this.upstream=u,this.maxCount=g,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class Bt extends ut{constructor(u,g,N=!0){super(),this.upstream=u,this.batchSize=g,this.enableSmallLastBatch=N,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const u=[];for(;u.length<this.batchSize;){const g=await this.upstream.next();if(g.done)return this.enableSmallLastBatch&&u.length>0?{value:u,done:!1}:{value:null,done:!0};u.push(g.value)}return{value:u,done:!1}}}class Et extends ut{constructor(u,g){super(),this.upstream=u,this.predicate=g,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const u=await this.upstream.next();if(u.done||this.predicate(u.value))return u;x.ASo(u.value)}}}class ot extends ut{constructor(u,g){super(),this.upstream=u,this.transform=g}summary(){return`${this.upstream.summary()} -> Map`}async next(){const u=await this.upstream.next();if(u.done)return{value:null,done:!0};const g=x.d_S.getTensorsInContainer(u.value),N=this.transform(u.value),O=x.d_S.getTensorsInContainer(N);for(const U of g)x.d_S.isTensorInList(U,O)||U.dispose();return{value:N,done:!1}}}class Xt extends ut{constructor(u,g){super(),this.upstream=u,this.handler=g,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(u){if(!this.handler(u))return{value:null,done:!0}}}}class Dt extends ut{constructor(u,g){super(),this.upstream=u,this.transform=g}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const u=await this.upstream.next();if(u.done)return{value:null,done:!0};const g=x.d_S.getTensorsInContainer(u.value),N=await this.transform(u.value),O=x.d_S.getTensorsInContainer(N);for(const U of g)x.d_S.isTensorInList(U,O)||U.dispose();return{value:N,done:!1}}}class Ue extends ut{constructor(){super(),this.outputQueue=new K,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class te extends Ue{constructor(u,g){super(),this.upstream=u,this.transform=g}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const u=await this.upstream.next();if(u.done)return!1;const g=x.d_S.getTensorsInContainer(u.value),N=this.transform(u.value),O=x.d_S.getTensorsInContainer(N);this.outputQueue.pushAll(N);for(const U of g)x.d_S.isTensorInList(U,O)||U.dispose();return!0}}class Ce extends ut{constructor(u,g){super(),this.baseErrorHandler=g,this.lastRead=null,this.iterator=null,this.moreIterators=u}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(u){if(await u,this.iterator==null){const N=await this.moreIterators.next();if(N.done)return{value:null,done:!0};this.iterator=N.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const g=await this.iterator.next();return g.done?(this.iterator=null,this.readFromChain(u)):g}}var pt;(function(w){w[w.FAIL=0]="FAIL",w[w.SHORTEST=1]="SHORTEST",w[w.LONGEST=2]="LONGEST"})(pt||(pt={}));class nn extends ut{constructor(u,g=pt.FAIL){super(),this.iterators=u,this.mismatchMode=g,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(u){await u;let g=0,N=0;function O(tt){return tt instanceof ut?{value:tt.next().then(vt=>(g++,vt.done&&N++,vt.value)),recurse:!1}:{value:null,recurse:!0}}const U=await dt(this.iterators,O);if(g===N)return{value:null,done:!0};if(N>0)switch(this.mismatchMode){case pt.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case pt.SHORTEST:return{value:null,done:!0};case pt.LONGEST:default:}return this.count++,{value:U,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class sn extends ut{constructor(u,g){super(),this.upstream=u,this.bufferSize=g,this.buffer=new lt(g)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){const u=this.upstream.next();this.buffer.push(u)}}next(){return this.refill(),this.buffer.shift()}}class Qt extends sn{constructor(u,g,N){super(u,g),this.upstream=u,this.windowSize=g,this.upstreamExhausted=!1,this.random=X.alea(N||x.ZSL.now().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(u){return Math.floor(this.random()*u)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const u=this.chooseIndex(),g=await this.buffer.shuffleExcise(u);if(g.done)this.upstreamExhausted=!0;else return this.refill(),g}return{value:null,done:!0}}}/**
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
 */class be{constructor(){this.size=null}batch(u,g=!0){const N=this;x.ZSL.assert(u>0,()=>`batchSize needs to be positive, but it is
      ${u}`);let O;return this.size===1/0||this.size==null?O=this.size:g?O=Math.ceil(this.size/u):O=Math.floor(this.size/u),Tt(async()=>(await N.iterator()).columnMajorBatch(u,g,Ne),O)}concatenate(u){const g=this;let N;return this.size===1/0||u.size===1/0?N=1/0:this.size!=null&&u.size!=null?N=this.size+u.size:N=null,Tt(async()=>(await g.iterator()).concatenate(await u.iterator()),N)}filter(u){const g=this;let N;return this.size===1/0?N=1/0:N=null,Tt(async()=>(await g.iterator()).filter(O=>x.DZQ(()=>u(O))),N)}async forEachAsync(u){return(await this.iterator()).forEachAsync(u)}map(u){const g=this;return Tt(async()=>(await g.iterator()).map(N=>x.DZQ(()=>u(N))),this.size)}mapAsync(u){const g=this;return Tt(async()=>(await g.iterator()).mapAsync(u),this.size)}prefetch(u){if(u==null)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const g=this;return Tt(async()=>(await g.iterator()).prefetch(u),this.size)}repeat(u){const g=this;let N;return this.size!=null&&u>0?N=this.size*u:u===0?N=0:this.size!=null&&(u===void 0||u<0)?N=1/0:N=null,Tt(async()=>{const O=ue(async()=>({value:await g.iterator(),done:!1}));return et(O.take(u))},N)}skip(u){const g=this;let N;return this.size!=null&&u>=0&&this.size>=u?N=this.size-u:this.size!=null&&(this.size<u||u===void 0||u<0)?N=0:N=null,Tt(async()=>(await g.iterator()).skip(u),N)}shuffle(u,g,N=!0){if(u==null||u<0)throw this.size==null?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const O=this,U=X.alea(g||x.ZSL.now().toString());return Tt(async()=>{let tt=U.int32();return N&&(tt+=U.int32()),(await O.iterator()).shuffle(u,tt.toString())},this.size)}take(u){const g=this;let N;return this.size!=null&&this.size>u?N=u:this.size!=null&&this.size<=u?N=this.size:N=null,Tt(async()=>(await g.iterator()).take(u),N)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}be.MAX_BUFFER_SIZE=1e4;function Tt(w,u=null){return new class extends be{constructor(){super(...arguments),this.size=u}async iterator(){return w()}}}function rn(w){return Tt(async()=>st(w),w.length)}function ke(w){if(!wt(w))throw new Error("The argument to zip() must be an object or array.");let u;if(Array.isArray(w))for(let g=0;g<w.length;g++)u=u==null?w[g].size:Math.min(u,w[g].size);else if(w instanceof Object)for(const g in w)u=u==null?w[g].size:Math.min(u,w[g].size);return Tt(async()=>{const g=await dt(w,N=>{if(N instanceof be)return{value:N.iterator(),recurse:!1};if(wt(N))return{value:null,recurse:!0};throw new Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")});return ps(g,pt.SHORTEST)},u)}function Ne(w){if(w===null)return null;const u=w[0];return m(u)?{value:En(w),recurse:!1}:{value:null,recurse:!0}}function En(w){if(w.length===0)throw new Error("Can't make a batch of zero elements.");return w[0]instanceof x.qYS?x.t$z(w):x.OEK(w)}/**
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
 */class Ie extends be{constructor(u){super(),this.input=u}async iterator(){return(await this.input.iterator()).decodeUTF8().split(`
`).map(O=>(O.endsWith("\r")&&(O=O.slice(0,-1)),O))}}/**
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
 */const ce='"',he=Symbol("out"),jt=Symbol("field"),Ke=Symbol("quote"),Jt=Symbol("quoteafterquote"),gt=Symbol("quoteinquote");class on extends be{async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const u=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!u)throw new Error("Column names must be provided if there is no header line.");this.fullColumnNames&&u&&x.ZSL.assert(u.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+u.length.toString()+")."),this.fullColumnNames||(this.fullColumnNames=u);const g=this.fullColumnNames.reduce((O,U)=>(O[U]=O[U]+1||1,O),{}),N=Object.keys(g).filter(O=>g[O]>1);if(x.ZSL.assert(N.length===0,()=>"Duplicate column names found: "+N.toString()),this.columnConfigs){for(const O of Object.keys(this.columnConfigs))if(this.fullColumnNames.indexOf(O)===-1)throw new Error('The key "'+O+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const g=await(await this.base.iterator()).next();if(g.done)throw new Error("No data was found for CSV parsing.");const N=g.value;return this.parseRow(N,!1)}else return null}constructor(u,g){super(),this.input=u,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new Ie(u),g||(g={}),this.hasHeader=g.hasHeader!==!1,this.fullColumnNames=g.columnNames,this.columnConfigs=g.columnConfigs,this.configuredColumnsOnly=g.configuredColumnsOnly,g.delimWhitespace?(x.ZSL.assert(g.delimiter==null,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=g.delimiter?g.delimiter:","}async iterator(){this.columnNamesValidated||await this.setColumnNames();let u=await this.base.iterator();return this.hasHeader&&(u=u.skip(1)),u.map(g=>this.makeDataElement(g))}makeDataElement(u){const g=this.parseRow(u),N={},O={};for(let U=0;U<this.fullColumnNames.length;U++){const tt=this.fullColumnNames[U],_=this.columnConfigs?this.columnConfigs[tt]:null;if(!(this.configuredColumnsOnly&&!_)){const vt=g[U];let Ot=null;if(vt==="")if(_&&_.default!==void 0)Ot=_.default;else{if(_&&(_.required||_.isLabel))throw new Error(`Required column ${tt} is empty in this line: ${u}`);Ot=void 0}else{const we=Number(vt);if(isNaN(we))_&&_.dtype==="bool"?Ot=this.getBoolean(vt):Ot=vt;else if(!_||!_.dtype)Ot=we;else switch(_.dtype){case"float32":Ot=we;break;case"int32":Ot=Math.floor(we);break;case"bool":Ot=this.getBoolean(vt);break;default:Ot=we}}_&&_.isLabel?O[tt]=Ot:N[tt]=Ot}}return Object.keys(O).length===0?N:{xs:N,ys:O}}getBoolean(u){return u==="1"||u.toLowerCase()==="true"?1:0}parseRow(u,g=!0){const N=[];let O=0;const U=u.length;let tt=he;for(let _=0;_<U;_++)switch(tt){case he:switch(u.charAt(_)){case ce:O=_+1,tt=Ke;break;case this.delimiter:if(O=_+1,this.delimiter===" "&&this.delimWhitespace)break;N.push(""),tt=he;break;default:tt=jt,O=_;break}break;case jt:u.charAt(_)===this.delimiter&&(N.push(u.substring(O,_)),tt=he,O=_+1);break;case Ke:u.charAt(_)===ce&&(tt=Jt);break;case Jt:switch(u.charAt(_)){case this.delimiter:N.push(u.substring(O,_-1)),tt=he,O=_+1;break;case ce:tt=Ke;break;default:tt=gt;break}break;case gt:u.charAt(_)===ce&&(tt=Ke);break;default:}if(tt===Jt?N.push(u.substring(O,U-1)):N.push(u.substring(O)),g&&N.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${N}`);return N}}/**
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
 */class Nt extends ut{constructor(u){super(),this.microphoneConfig=u,this.isClosed=!1,this.fftSize=u.fftSize||1024;const g=Math.log2(this.fftSize);if(this.fftSize<0||g<4||g>14||!Number.isInteger(g))throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=u.numFramesPerSpectrogram||43,this.sampleRateHz=u.sampleRateHz,this.columnTruncateLength=u.columnTruncateLength||this.fftSize,this.audioTrackConstraints=u.audioTrackConstraints,this.smoothingTimeConstant=u.smoothingTimeConstant||0,this.includeSpectrogram=u.includeSpectrogram!==!1,this.includeWaveform=u.includeWaveform===!0,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(u={}){if(!(0,x._K2)().get("IS_BROWSER"))throw new Error("microphone API is only supported in browser environment.");const g=new Nt(u);return await g.start(),g}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:this.audioTrackConstraints==null?!0:this.audioTrackConstraints,video:!1})}catch(N){throw new Error(`Error thrown while initializing video stream: ${N.message}`)}if(!this.stream)throw new Error("Could not obtain audio from microphone.");const u=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new u,!this.sampleRateHz)this.sampleRateHz=this.audioContext.sampleRate;else if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);const g=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize*2,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,g.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let u,g;const N=await this.getAudioData();if(this.includeSpectrogram){const O=this.flattenQueue(N.freqDataQueue);u=this.getTensorFromAudioDataArray(O,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const O=this.flattenQueue(N.timeDataQueue);g=this.getTensorFromAudioDataArray(O,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:u,waveform:g},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const u=[],g=[];let N=0;return new Promise(O=>{const U=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&O({freqDataQueue:u,timeDataQueue:g}),u.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),g.push(this.timeData.slice())),++N===this.numFrames&&(clearInterval(U),O({freqDataQueue:u,timeDataQueue:g}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),this.stream!=null&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(u){const g=u[0].length,N=new Float32Array(u.length*g);return u.forEach((O,U)=>N.set(O,U*g)),N}getTensorFromAudioDataArray(u,g){const N=new Float32Array(x.ZSL.sizeFromShape(g));return N.set(u,N.length-u.length),(0,x.OEK)(N,g)}}/**
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
 */class ze extends ut{constructor(u,g){if(super(),this.webcamVideoElement=u,this.webcamConfig=g,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=(0,x.tGX)([0],"int32"),this.webcamConfig.centerCrop){const N=this.webcamConfig.resizeWidth*1/this.webcamVideoElement.width,O=this.webcamConfig.resizeHeight*1/this.webcamVideoElement.height,U=(1-N)/2,tt=(1-O)/2,_=U+N,vt=O+tt;this.cropBox=(0,x.KtR)([tt,U,vt,_],[1,4])}else this.cropBox=(0,x.KtR)([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(u,g={}){if(!(0,x._K2)().get("IS_BROWSER"))throw new Error("tf.data.webcam is only supported in browser environment.");if(!u){if(u=document.createElement("video"),!g.resizeWidth||!g.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");u.width=g.resizeWidth,u.height=g.resizeHeight}const N=new ze(u,g);return await N.start(),N}async start(){this.webcamConfig.facingMode&&x.ZSL.assert(this.webcamConfig.facingMode==="user"||this.webcamConfig.facingMode==="environment",()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(u){throw u.message=`Error thrown while initializing video stream: ${u.message}`,u}if(!this.stream)throw new Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(u){console.log(u),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(u=>{this.webcamVideoElement.onloadedmetadata=()=>{u()}})}async next(){if(this.isClosed)return{value:null,done:!0};let u;try{u=x.TaL.fromPixels(this.webcamVideoElement)}catch(g){throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(g)}`)}if(this.resize)try{return{value:this.cropAndResizeFrame(u),done:!1}}catch(g){throw new Error(`Error thrown cropping the video: ${g.message}`)}finally{u.dispose()}else return{value:u,done:!1}}needToResize(){return!!(this.webcamConfig.resizeWidth&&this.webcamConfig.resizeHeight&&(this.webcamVideoElement.width!==this.webcamConfig.resizeWidth||this.webcamVideoElement.height!==this.webcamConfig.resizeHeight))}cropAndResizeFrame(u){return(0,x.DZQ)(()=>{const g=(0,x.UG6)((0,x.wgE)(u,"float32"),0);let N;N=x.Slp.cropAndResize(g,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear");const O=N.shape;return(0,x.tQQ)(N,O.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(g=>g.stop());try{this.webcamVideoElement.srcObject=null}catch(g){console.log(g),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error("Can not convert infinite video stream to array.")}}/**
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
 */class de{}/**
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
 */class Ge extends ut{split(u){return new ee(this,u)}}class ee extends Ge{constructor(u,g){super(),this.upstream=u,this.impl=new Ln(u,g)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class Ln extends Ue{constructor(u,g){super(),this.upstream=u,this.separator=g,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const u=await this.upstream.next();if(u.done)return this.carryover===""?!1:(this.outputQueue.push(this.carryover),this.carryover="",!0);const g=u.value.split(this.separator);g[0]=this.carryover+g[0];for(const N of g.slice(0,-1))this.outputQueue.push(N);return this.carryover=g[g.length-1],!0}}var an=$(1048).Buffer;/**
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
 */class ln extends ut{decodeUTF8(){return new Fn(this)}}class Fn extends Ge{constructor(u){super(),this.upstream=u,this.impl=new un(u)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class un extends Ue{constructor(u){if(super(),this.upstream=u,(0,x._K2)().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{const{StringDecoder:g}=$(55217);this.decoder=new g("utf8")}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){const u=await this.upstream.next();let g;if(u.done)return!1;g=u.value;let N;return(0,x._K2)().get("IS_BROWSER")?N=this.decoder.decode(g,{stream:!0}):N=this.decoder.write(an.from(g.buffer)),this.outputQueue.push(N),!0}}/**
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
 */class cn extends ln{constructor(u,g={}){super(),this.file=u,this.options=g,x.ZSL.assert(u instanceof Uint8Array||((0,x._K2)().get("IS_BROWSER")?u instanceof File||u instanceof Blob:!1),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=g.offset||0,this.chunkSize=g.chunkSize||1024*1024}summary(){return`FileChunks ${this.file}`}async next(){return this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size)?{value:null,done:!0}:{value:await new Promise((g,N)=>{const O=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)g(new Uint8Array(this.file.slice(this.offset,O)));else{const U=new FileReader;U.onload=_=>{let vt=U.result;if(vt instanceof ArrayBuffer&&(vt=new Uint8Array(vt)),!(vt instanceof Uint8Array))return N(new TypeError("FileReader returned unknown type."));g(vt)},U.onabort=_=>N(new Error("Aborted")),U.onerror=_=>N(new Error(_.type));const tt=this.file.slice(this.offset,O);U.readAsArrayBuffer(tt)}this.offset=O}),done:!1}}}/**
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
 */async function _t(w,u={},g){let N,O;typeof w=="string"?N=w:(N=w.url,O=pe(w));const U=await(g||x.ZSL.fetch)(N,O);if(U.ok){const tt=new Uint8Array(await U.arrayBuffer());return new cn(tt,u)}else throw new Error(U.statusText)}const pe=w=>({method:w.method,headers:w.headers,body:w.body,mode:w.mode,credentials:w.credentials,cache:w.cache,redirect:w.redirect,referrer:w.referrer,integrity:w.integrity});/**
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
 */function It(w){return typeof w=="string"&&w.slice(0,7)==="file://"}/**
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
 */class hn extends de{constructor(u,g={}){super(),this.input=u,this.options=g}async iterator(){if(It(this.input)&&(0,x._K2)().get("IS_NODE")){const u=$(12099);this.input=u.readFileSync(this.input.slice(7))}return new cn(this.input,this.options)}}/**
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
 */class ne extends de{constructor(u,g={}){super(),this.url=u,this.fileOptions=g}async iterator(){return It(this.url)?new hn(this.url,this.fileOptions).iterator():_t(this.url,this.fileOptions)}}/**
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
 */function fs(w,u={}){return new on(new ne(w),u)}function ms(w){const u=ue(w);return Tt(async()=>u)}function Wt(w){return Tt(async()=>{const u=await w();return ue(()=>u.next())})}async function De(w,u){return ze.create(w,u)}async function xt(w){return Nt.create(w)}/** @license See the LICENSE file. */const gs="4.22.0";/**
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
 */},75349(Pr,Tn,$){$.d(Tn,{YO:()=>wa,g:()=>ro,H7:()=>ao,k$:()=>Sa,BZ:()=>oo,eO:()=>At,eR:()=>Kt,Gw:()=>xe,VS:()=>le,Gx:()=>Xe,Ar:()=>Pt,lZ:()=>xc,Pu:()=>x,Wm:()=>X,hF:()=>Eo,ZF:()=>Q,O0:()=>yl,qd:()=>Vt,ge:()=>vl,Jn:()=>Ae,ZS:()=>xl,kF:()=>mt,il:()=>Sl,u$:()=>Di});var x={};$.r(x),$.d(x,{maxNorm:()=>at,minMaxNorm:()=>Se,nonNeg:()=>se,unitNorm:()=>ct});var X={};$.r(X),$.d(X,{constant:()=>zs,glorotNormal:()=>Jn,glorotUniform:()=>vi,heNormal:()=>Si,heUniform:()=>ka,identity:()=>wi,leCunNormal:()=>Na,leCunUniform:()=>Ia,ones:()=>Is,orthogonal:()=>za,randomNormal:()=>Ct,randomUniform:()=>Ds,truncatedNormal:()=>qe,varianceScaling:()=>Ts,zeros:()=>Yt});var Q={};$.r(Q),$.d(Q,{Layer:()=>Y,RNN:()=>le,RNNCell:()=>ts,activation:()=>su,add:()=>du,alphaDropout:()=>_u,average:()=>pu,averagePooling1d:()=>Or,averagePooling2d:()=>Mr,averagePooling3d:()=>Br,avgPool1d:()=>xu,avgPool2d:()=>Cu,avgPool3d:()=>Nu,avgPooling1d:()=>Au,avgPooling2d:()=>ku,avgPooling3d:()=>Iu,batchNormalization:()=>wu,bidirectional:()=>Qu,categoryEncoding:()=>tc,centerCrop:()=>Yu,concatenate:()=>fu,conv1d:()=>Jl,conv2d:()=>_l,conv2dTranspose:()=>Hl,conv3d:()=>ql,conv3dTranspose:()=>Yl,convLstm2d:()=>Mu,convLstm2dCell:()=>Bu,cropping2D:()=>tu,dense:()=>iu,depthwiseConv2d:()=>nu,dot:()=>bu,dropout:()=>ru,elu:()=>Zl,embedding:()=>hu,flatten:()=>au,gaussianDropout:()=>Ju,gaussianNoise:()=>ju,globalAveragePooling1d:()=>zu,globalAveragePooling2d:()=>Du,globalMaxPool1d:()=>Uu,globalMaxPool2d:()=>Ku,globalMaxPooling1d:()=>ma,globalMaxPooling2d:()=>ga,gru:()=>Eu,gruCell:()=>Lu,input:()=>Eo,inputLayer:()=>Ql,layerNormalization:()=>vu,leakyReLU:()=>Kl,lstm:()=>Fu,lstmCell:()=>Ru,masking:()=>Hu,maxPool1d:()=>Gu,maxPool2d:()=>Vu,maxPooling1d:()=>ya,maxPooling2d:()=>ba,maxPooling3d:()=>Tu,maximum:()=>mu,minimum:()=>gu,multiply:()=>yu,permute:()=>cu,prelu:()=>Gl,randomWidth:()=>ec,reLU:()=>Ul,repeatVector:()=>lu,rescaling:()=>qu,reshape:()=>uu,resizing:()=>Xu,rnn:()=>Wu,separableConv2d:()=>Xl,simpleRNN:()=>$u,simpleRNNCell:()=>Ou,softmax:()=>Vl,spatialDropout1d:()=>ou,stackedRNNCells:()=>Pu,thresholdedReLU:()=>jl,timeDistributed:()=>Zu,upSampling2d:()=>eu,zeroPadding2d:()=>Su});var Vt={};$.r(Vt),$.d(Vt,{MAPE:()=>dc,MSE:()=>mc,binaryAccuracy:()=>nc,binaryCrossentropy:()=>sc,categoricalAccuracy:()=>rc,categoricalCrossentropy:()=>oc,cosineProximity:()=>uc,mape:()=>pc,meanAbsoluteError:()=>cc,meanAbsolutePercentageError:()=>hc,meanSquaredError:()=>fc,mse:()=>gc,precision:()=>ac,r2Score:()=>yc,recall:()=>lc,sparseCategoricalAccuracy:()=>ic});var Ae={};$.r(Ae),$.d(Ae,{modelFromJSON:()=>gl});var mt={};$.r(mt),$.d(mt,{l1:()=>wc,l1l2:()=>bc,l2:()=>vc});var i=$(35467);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class dt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,dt.prototype)}}class wt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,wt.prototype)}}class m extends Error{constructor(t){super(t),Object.setPrototypeOf(this,m.prototype)}}class Z extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Z.prototype)}}class Pe extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Pe.prototype)}}class en extends Error{constructor(t){super(t),Object.setPrototypeOf(this,en.prototype)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class lt{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}var K;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function st(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Rt(n,t){if(!n)throw new Pe(t)}function ue(n,t){let e=0;for(const s of n)s===t&&e++;return e}function et(n){return n.length===1?n[0]:n}function rt(n){return Array.isArray(n)?n:[n]}function ps(n){const t=rt(n);let e="";for(const s of t){if(s.id==null)throw new K(`Object ${s} passed to objectListUid without an id`);e!==""&&(e=e+", "),e=`${e}${Math.abs(s.id)}`}return e}function ut(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function kt(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let $t={};function Qe(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function Ze(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>Ze(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:Ze(s))}}}function ye(n,t={},e={},s="object",r=!1){if(typeof n=="string"){const o=n;let a;if(o in e)a=e[o];else if(o in $t)a=$t[o];else if(a=t[o],a==null)throw new m(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}else{const o=n;if(o.className==null||o.config==null)throw new m(`${s}: Improper config format: ${JSON.stringify(o)}.
'className' and 'config' must set.`);const a=o.className;let l,c;if(a in e?[l,c]=e[a]:a in $t?[l,c]=$t.className:a in t&&([l,c]=t[a]),l==null)throw new m(`Unknown ${s}: ${a}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){const d={};for(const F of Object.keys($t))d[F]=$t[F];for(const F of Object.keys(e))d[F]=e[F];const y=o.config;y.customObjects=d;const S=Object.assign({},$t);for(const F of Object.keys(e))$t[F]=e[F];Ze(o.config);const k=c(l,o.config,e,r);return $t=Object.assign({},S),k}else{const d=Object.assign({},$t);for(const S of Object.keys(e))$t[S]=e[S];const y=new l(o.config);return $t=Object.assign({},d),y}}}function Bt(n,t){return n<t?-1:n>t?1:0}function Et(n,t){return-1*Bt(n,t)}function ot(n){if(n==="float32")return"float32";throw new K(`Invalid dtype: ${n}`)}function Xt(n,t){if(n==null||t==null)return n===t;if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function Dt(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function Ue(n){if(n==null)throw new m(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function te(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new m(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function Ce(n,t,e=0,s=1/0){return Rt(e>=0),Rt(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(r=>typeof r===t)}function pt(n,t){Array.isArray(n)?(i.ZSL.assert(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>pt(e,`element ${s+1} of ${t}`))):i.ZSL.assert(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${nn(n)}.`)}function nn(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>nn(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function sn(n,t,e){let s=e!=null?e():i.ZSL.now(),r;return(...a)=>{const l=e!=null?e():i.ZSL.now();return l-s<t||(s=l,r=n(...a)),r}}function Qt(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}function be(...n){Rt(n.length>0,"arrayOfValues is empty");for(const t of n)Rt(Array.isArray(t),"one of the values is not an array"),Rt(t.length>0,"one of the values is empty");return n.reduce((t,e)=>t.length===0?e.map(s=>[s]):e.map(s=>t.map(r=>[...r,s])).reduce((s,r)=>s.concat(r),[]),[])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let Tt=0;function rn(){return Tt++}const ke={};function Ne(n=""){return n in ke||(ke[n]=0),ke[n]+=1,n+ke[n].toString()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const En=["channelsFirst","channelsLast"],Ie=["nearest","bilinear"],ce=["valid","same","causal"],he=["max","avg"],jt=["sum","mul","concat","ave"],Ke=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Jt=new Map;function gt(n){te(En,"DataFormat",n)}function on(n){te(Ie,"InterpolationFormat",n)}function Nt(n){te(ce,"PaddingMode",n)}function ze(n){te(he,"PoolMode",n)}const de=[],Ge="/";function ee(n,t){de.push(n);try{const e=t();return de.pop(),e}catch(e){throw de.pop(),e}}function Ln(){return de.length===0?"":de.join(Ge)+Ge}function an(n){if(!un(n))throw new Error("Not a valid tensor name: '"+n+"'");return Ln()+n}function ln(n){if(!un(n))throw new Error("Not a valid tensor name: '"+n+"'");Jt.has(n)||Jt.set(n,0);const t=Jt.get(n);if(Jt.set(n,Jt.get(n)+1),t>0){const e=`${n}_${t}`;return Jt.set(e,1),e}else return n}const Fn=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function un(n){return!!n.match(Fn)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function cn(n){return n===parseInt(n.toString(),10)}function _t(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let r=t;r<e;++r)s*=n[r];return s}function pe(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function It(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function hn(n){let t=0;for(let e=0;e<n.length;e++){const s=n[e];t+=s}return t}function ne(n){return hn(n)/n.length}function fs(n){const t=ne(n),e=n.map(r=>r-t);let s=0;for(let r=0;r<e.length;r++){const o=e[r];s+=o*o}return s/n.length}function ms(n){const t=n.slice().sort((r,o)=>r-o),e=Math.floor((t.length-1)/2),s=Math.ceil((t.length-1)/2);return e===s?t[e]:(t[e]+t[s])/2}function Wt(n,t){if(t<n)throw new m(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let De;function xt(){return De==null&&(De=(0,i.Hs)().epsilon()),De}function gs(n){De=n}function w(){return"channelsLast"}var u,g,N,O,U,tt,_;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */let vt="webgl";function Ot(n){u.setBackend(n),vt=n}function we(){return vt}function Qr(){return!1}function Zr(n){const t=n.shape;return t.length>0?t.reduce((e,s)=>e*s):1}function Zt(n,t){return i.wgE(n,t)}function Te(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),i.tQQ(n,e)}function js(n,t){return(0,i.DZQ)(()=>{if(n.shape.length!==2)throw new m(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Te(n,1);return On(e,[1,t,1])})}function Js(n){const t=[_t(n.shape)];return i.tQQ(n,t)}function _s(n){if(n.rank<=1)throw new m(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],_t(n.shape,1)];return i.tQQ(n,t)}function ve(n,t,e){return(0,i.DZQ)(()=>{switch(n.rank){case 1:return i.Q$M(n,t,e);case 2:return i.zAd(n,[t,0],[e,n.shape[1]]);case 3:return i.wck(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return i.R0O(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return i.dik(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return i.dik(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new m(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Rn(n,t,e){return(0,i.DZQ)(()=>{switch(n.rank){case 1:return i.Q$M(n,t,e);case 2:return i.zAd(n,[0,t],[n.shape[0],e]);case 3:return i.wck(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return i.R0O(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new m(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function fe(n,t,e,s){return(0,i.DZQ)(()=>{switch(n.rank){case 1:return i.Q$M(n,t,e);case 2:switch(s){case 1:return ve(n,t,e);case 2:return Rn(n,t,e);default:throw new m(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return ve(n,t,e);case 2:return i.wck(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Rn(n,t,e);default:throw new m(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return ve(n,t,e);case 2:return i.R0O(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return i.R0O(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Rn(n,t,e);default:throw new m(`The axis is not within the rank of the tensor ${s}`)}default:throw new m(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function $n(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),i.xWs(n,t)}function ys(n,t){switch(n.rank){case 1:return i.I1m([n,t]);case 2:return i.RPU([n,t],0);case 3:return i.O5O([n,t],0);case 4:return i.P1l([n,t],0);default:throw new m(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function On(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new m(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return i.Vsq(n,t)}function dn(n,t=0,e=1,s,r){return i.FE$(n,t,e,s,r)}function Ht(n,t,e,s){if(n.rank<2||t.rank<2)throw new Z(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const r=n.shape.slice(-1)[0],o=t.shape.slice(-2)[0];if(r!==o)throw new Z(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return i.cZk.matMul({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Mn(n.rank,s,w()):null,activation:e});{const r=n.shape.slice(),o=r.pop();n=i.tQQ(n,[-1,o]);const a=t.shape.slice(),l=a.pop(),c=a.pop(),d=[...a,l],y=Array.from({length:t.rank},(L,D)=>D===0?t.rank-2:D<=t.rank-2?D-1:D);t=i.tQQ(i.mgz(t,y),[c,-1]);const S=[...r,...d];return i.tQQ(i.cZk.matMul({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Mn(n.rank,s,w()):null,activation:e}),S)}}function Ur(n){return g(()=>{const t=N(n),e=O(n);return U(u.equal(n,t),t,U(u.greater(n,N(n)),e,u.mul(-1,e)))})}function Kr(n,t){return g(()=>{if(n.rank!==1)throw new Error("Only 1D one-hot tensors are supported in the deeplearn backend, at present.");return n=u.cast(n,"int32"),u.cast(u.oneHot(n,t),"float32")})}function bs(n,t,e){return(0,i.DZQ)(()=>(Array.isArray(t)?t=(0,i.tGX)(t,"int32"):t=i.wgE(t,"int32"),i.kgh(n,t,e)))}function Ee(n){return i.lKK(n,n)}function Hs(n,t){return g(()=>{if(typeof t=="number"&&(t=tt(Math.round(t),"int32")),t.dtype!=="int32")throw new _(`Non-int32 dtype (${t.dtype}) is not supported by pow() yet`);return u.pow(n,t)})}function Mn(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new m(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?i.tQQ(t,[1,s[0],1,1,1]):i.tQQ(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?i.tQQ(t,[1,1,1,1,s[0]]):i.tQQ(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?i.tQQ(t,[1,s[0],1,1]):i.tQQ(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?i.tQQ(t,[1,1,1,s[0]]):i.tQQ(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?i.tQQ(t,[1,s[0],1]):i.tQQ(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?i.tQQ(t,[1,1,s[0]]):i.tQQ(t,[1].concat(s))}else if(n<3)return t;throw new m(`Unsupported input rank by biasAdd: ${t.rank}`)}function Ut(n,t,e){return(0,i.DZQ)(()=>(e==null&&(e=w()),gt(e),i.WQq(n,Mn(n.rank,t,e))))}function qs(n,t=1){if(t!==1)throw new Z(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return i.Pqc(n)}function Ys(n){return(0,i.DZQ)(()=>i.y4m(n,i.WQq(i.tnl(n),1)))}function ws(n,t,e,s){return(0,i.DZQ)(()=>i.EZY(n,t,e,s))}function Xs(n){return(0,i.DZQ)(()=>{const t=i.WQq(.5,i.lKK(.2,n));return i.zQh(t,0,1)})}function Ve(n,t,e=!1){return e?n():t()}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const ti=["fanIn","fanOut","fanAvg"],Bn=["normal","uniform","truncatedNormal"],Gr=null;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ei(n){te(ti,"FanMode",n)}function ni(n){te(Bn,"Distribution",n)}class zt extends i.JFn.Serializable{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class Wn extends zt{apply(t,e){return(0,i.Ul9)(t,e)}}Wn.className="Zeros",i.JFn.registerClass(Wn);class pn extends zt{apply(t,e){return(0,i.SaS)(t,e)}}pn.className="Ones",i.JFn.registerClass(pn);class Pn extends zt{constructor(t){if(super(),typeof t!="object")throw new m(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new m(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return(0,i.DZQ)(()=>(0,i.lKK)((0,i.d_2)(this.value),(0,i.SaS)(t,e)))}getConfig(){return{value:this.value}}}Pn.className="Constant",i.JFn.registerClass(Pn);class Qn extends zt{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return(0,i.YeY)(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Qn.className="RandomUniform",i.JFn.registerClass(Qn);class Zn extends zt{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Z(`randomNormal does not support dType ${e}.`);return dn(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Zn.className="RandomNormal",i.JFn.registerClass(Zn);class Un extends zt{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Z(`truncatedNormal does not support dType ${e}.`);return(0,i.efE)(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Un.className="TruncatedNormal",i.JFn.registerClass(Un);class Kn extends zt{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return(0,i.DZQ)(()=>{if(t.length!==2||t[0]!==t[1])throw new m("Identity matrix initializer can only be used for 2D square matrices.");return(0,i.lKK)(this.gain,(0,i.y5U)(t[0]))})}getConfig(){return{gain:this.gain}}}Kn.className="Identity",i.JFn.registerClass(Kn);function si(n,t="channelsLast"){let e,s;if(gt(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const r=_t(n,2);e=n[1]*r,s=n[0]*r}else if(t==="channelsLast"){const r=_t(n,0,n.length-2);e=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=_t(n);e=Math.sqrt(r),s=Math.sqrt(r)}return[e,s]}class Lt extends zt{constructor(t){if(super(),t.scale<0)throw new m(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,ei(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,ni(this.distribution),this.seed=t.seed}apply(t,e){const s=si(t),r=s[0],o=s[1];let a=this.scale;if(this.mode==="fanIn"?a/=Math.max(1,r):this.mode==="fanOut"?a/=Math.max(1,o):a/=Math.max(1,(r+o)/2),this.distribution==="normal"){const l=Math.sqrt(a);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new Z(`${this.getClassName()} does not support dType ${e}.`);return(0,i.efE)(t,0,l,e,this.seed)}else{const l=Math.sqrt(3*a);return(0,i.YeY)(t,-l,l,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}Lt.className="VarianceScaling",i.JFn.registerClass(Lt);class fn extends Lt{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}fn.className="GlorotUniform",i.JFn.registerClass(fn);class je extends Lt{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}je.className="GlorotNormal",i.JFn.registerClass(je);class mn extends Lt{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}mn.className="HeNormal",i.JFn.registerClass(mn);class Je extends Lt{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}Je.className="HeUniform",i.JFn.registerClass(Je);class gn extends Lt{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}gn.className="LeCunNormal",i.JFn.registerClass(gn);class yn extends Lt{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return Lt.className}}yn.className="LeCunUniform",i.JFn.registerClass(yn);class bn extends zt{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return(0,i.DZQ)(()=>{if(t.length<2)throw new Z("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=i.ZSL.sizeFromShape(t.slice(0,-1)),r=t[t.length-1],o=s*r;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);const a=[Math.max(r,s),Math.min(r,s)],l=dn(a,0,1,e,this.seed),c=i.mPL.qr(l,!1);let d=c[0];const S=c[1].flatten().stridedSlice([0],[Math.min(r,s)*Math.min(r,s)],[Math.min(r,s)+1]);return d=(0,i.lKK)(d,S.sign()),s<r&&(d=d.transpose()),(0,i.lKK)((0,i.d_2)(this.gain),d.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}bn.className="Orthogonal",i.JFn.registerClass(bn);const vs={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Ss(n,t={}){return ye(n,i.JFn.SerializationMap.getMap().classNameMap,t,"initializer")}function bt(n){return Qe(n)}function yt(n){if(typeof n=="string"){const t=n in vs?vs[n]:n;if(t==="GlorotNormal")return new je;if(t==="GlorotUniform")return new fn;if(t==="HeNormal")return new mn;if(t==="HeUniform")return new Je;if(t==="LeCunNormal")return new gn;if(t==="LeCunUniform")return new yn;{const e={};return e.className=t,e.config={},Ss(e)}}else return n instanceof zt?n:Ss(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Gn(n){return Array.isArray(n)&&Array.isArray(n[0])}function wn(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function G(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new m(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function nt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new m(`Expected exactly 1 Shape; got ${n.length}`)}else return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function vn(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,r)=>s*r);return t}var qt,ii,xs;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const As="Variable";class Kt{constructor(t,e="float32",s=As,r=!0,o=null){this.dtype=e??"float32",this.shape=t.shape,this.id=rn(),s=s??As,this.originalName=an(s),this.name=ln(this.originalName),this.trainable_=r,this.constraint=o,this.val=i.bvq(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),ri(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function ri(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Vr(n,t,e,s){return new Kt(n,t,e,!0,s)}function oi(n,t,e){return new Kt(qt.zeros(n),t,e)}function jr(n,t,e){return new Kt(qt.zerosLike(n),t,e)}function Jr(n,t,e){const s=qt.ones(n);return new Kt(s,t,e)}function _r(n,t,e){const s=qt.onesLike(n);return new Kt(s,t,e)}function ai(n,t,e){return new Kt(qt.eye(n),t,e)}function Hr(n,t,e,s,r,o="randomUniform"){return new Kt(qt.randomUniform(n,t,e,s),s,o)}function qr(n,t=0,e=1,s,r,o="truncatedNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new xs(`randomNormal does not support dType ${s}.`);return new Kt(qt.truncatedNormal(n,t,e,s,r),s,o)}function Yr(n,t=0,e=1,s,r,o="randomNormal"){if(s=s||"float32",s!=="float32"&&s!=="int32")throw new xs(`randomNormalVariable does not support dType ${s}.`);return new Kt(qt.randomNormal(n,t,e,s,r),s,o)}function Xr(n,t){return n.write(t)}function to(n,t){return n.write(qt.add(n.read(),t))}function eo(n,t){return n.write(qt.sub(n.read(),t))}function Vn(n){return n.map(t=>t.read())}function jn(n){n.forEach(t=>{t[0].write(t[1])})}function no(n,t){const e=t.map(r=>r.read()),s=ii(n,e);return t.map(r=>s.grads[r.name])}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class At{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class Pt{constructor(t,e,s,r,o,a,l){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=r,this.callArgs=o,this.outputTensorIndex=l,this.id=rn(),a!=null&&(this.originalName=an(a),this.name=ln(this.originalName)),this.rank=e.length}}let li=0;class _e{constructor(t,e){this.callArgs=e,this.id=li++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s?.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let ui=0;class Y extends i.JFn.Serializable{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=ui++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=ut(s)+"_"+Ne(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),s=[o].concat(t.inputShape)}this.batchInputShape=s;let r=t.dtype;r==null&&(r=t.inputDType),r==null&&(r="float32"),this.dtype=r}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new wt(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new m(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return et(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return et(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new dt(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new dt(`Layer ${this.name} is not connected, no input to return.`);return et(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new dt(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new dt(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return et(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=rt(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=rt(this.inputSpec);if(e.length!==s.length)throw new m(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let r=0;r<e.length;r++){const o=e[r],a=s[r];if(a==null)continue;const l=o.rank;if(a.ndim!=null&&l!==a.ndim)throw new m(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${a.ndim}, found ndim=${l}`);if(a.maxNDim!=null&&l>a.maxNDim)throw new m(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${a.maxNDim}, found ndim=${l}`);if(a.minNDim!=null&&l<a.minNDim)throw new m(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${a.minNDim}, found ndim=${l}.`);if(a.dtype!=null&&o.dtype!==a.dtype)throw new m(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${a.dtype}, found dtype=${o.dtype}.`);if(a.axes){const c=o.shape;for(const d in a.axes){const y=Number(d),S=a.axes[d],k=y>=0?c[y]:c[c.length+y];if(S!=null&&[S,null].indexOf(k)===-1)throw new m(`Input ${r} is incompatible with layer ${this.name}: expected axis ${y} of input shape to have value ${S} but got shape ${c}.`)}}if(a.shape!=null)for(let c=0;c<a.shape.length;++c){const d=a.shape[c],y=o.shape[c];if(d!=null&&y!=null&&d!==y)throw new m(`Input ${r} is incompatible with layer ${this.name}: expected shape=${a.shape}, found shape=${o.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=rt(t),r=di(t),o=pi(t);if(r===o)throw new m("Arguments to apply() must be all SymbolicTensors or all Tensors");return ee(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const a=[];for(const l of rt(t))a.push(l.shape);this.build(et(a)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&o&&(this._refCount=1)}if(this.assertInputCompatibility(t),o){let a=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,a);const l=rt(a),c=[];for(let d of l)s.indexOf(d)!==-1&&(d=d.clone()),c.push(d);if(a=et(c),this.activityRegularizer!=null)throw new Z("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return a}else{const a=ci(t),l=this.computeOutputShape(a);let c;const d=hi(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?a[0]:a),l!=null&&l.length>0&&Array.isArray(l[0])?c=l.map((y,S)=>new Pt(d,y,this,rt(t),e,this.name,S)):c=new Pt(d,l,this,rt(t),e,this.name),this.addInboundNode(t,c,null,null,a,l,e),this._refCount++,this.activityRegularizer!=null)throw new Z("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return c}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&t[r]!=null&&t[r]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new dt(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new dt(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new wt(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return vn(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Vn(t?this.trainableWeights:this.weights)}setWeights(t){(0,i.DZQ)(()=>{const e=this.weights;if(e.length!==t.length)throw new m(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],r=Vn(e);for(let o=0;o<r.length;++o){const a=r[o],l=e[o],c=t[o];if(!i.ZSL.arraysEqual(a.shape,c.shape))throw new m(`Layer weight shape ${a.shape} not compatible with provided weight shape ${c.shape}`);s.push([l,c])}jn(s)})}addWeight(t,e,s,r,o,a,l,c){if(this._addedWeightNames.indexOf(t)!==-1)throw new m(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=c!=null?c():yt("zeros"));const d=r.apply(e,s),y=new Kt(d,s,t,a,l);return d.dispose(),o!=null&&this.addLoss(()=>o.apply(y.read())),a==null&&(a=!0),a?this._trainableWeights.push(y):this._nonTrainableWeights.push(y),y}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=rt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const r=this.computeMask(t,s),o=rt(e),a=rt(r);if(o.length!==a.length)throw new Error(`${this.name} outputs ${o.length} tensors but ${o.length} masks for those tensors`);for(let l=0;l<o.length;l++)o[l].kerasMask=a[l]}addInboundNode(t,e,s,r,o,a,l=null){const c=rt(t);e=rt(e),s=rt(s),r=rt(r),o=wn(o),a=wn(a);const d=[],y=[],S=[];for(const k of c)d.push(k.sourceLayer),y.push(k.nodeIndex),S.push(k.tensorIndex);new _e({outboundLayer:this,inboundLayers:d,nodeIndices:y,tensorIndices:S,inputTensors:c,outputTensors:e,inputMasks:s,outputMasks:r,inputShapes:o,outputShapes:a},l);for(let k=0;k<e.length;k++)e[k].sourceLayer=this,e[k].nodeIndex=this.inboundNodes.length-1,e[k].tensorIndex=k}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function ci(n){n=rt(n);const t=[];for(const e of n)t.push(e.shape);return et(t)}function hi(n){return"float32"}function Cs(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let o=0;o<s.inboundLayers.length;o++){const a=s.inputTensors[o],l=s.inboundLayers[o],c=s.nodeIndices[o],d=Cs(a,l,c);for(const y of d)r.indexOf(y)===-1&&r.push(y)}return r}}}function di(n){let t=!0;for(const e of rt(n))if(!(e instanceof Pt)){t=!1;break}return t}function pi(n){let t=!0;for(const e of rt(n))if(e instanceof Pt){t=!1;break}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Le extends Y{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Ne("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new m("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new m("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new m("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const r=new Pt(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new _e({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new m(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Le.className="InputLayer",i.JFn.registerClass(Le);function ks(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new m("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Le({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function fi(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return(0,i.wgE)(t,n.dtype)}catch{throw new m(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class me{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof me)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=fi(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new m(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof Pt){if(this.id2Value[t.id]==null)throw new m(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new m(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof Pt){if(this.id2Value[t.id]==null)throw new m(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new m(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&(0,i.ASo)(this.id2Mask)}}const Sn=new lt,xn=new lt;function mi(n){Sn?.setMaxEntries(n),xn?.setMaxEntries(n)}function He(n,t,e,s){const r=e==null?!1:e.training,o=Array.isArray(n),a=o?n:[n],l=a.map(L=>L.name),c=[],d=t.names();for(const L of l)d.indexOf(L)!==-1?c.push(t.getValue(L)):c.push(null);s!=null&&(s.maxNumTensors=-1/0,s.minNumTensors=1/0);const y=l.join(",")+"|"+t.names().sort().join(",");let S=Sn.get(y),k;if(S==null){const L=gi(a,t);S=L.sorted,k=L.recipientCounts,Sn.put(y,S),xn.put(y,k)}k={},r||Object.assign(k,xn.get(y));const F=new me(t);for(let L=0;L<S.length;++L){if(s!=null){const J=(0,i.m1Z)().numTensors;J>s.maxNumTensors&&(s.maxNumTensors=J),J<s.minNumTensors&&(s.minNumTensors=J)}const D=S[L],E=D.sourceLayer;if(E instanceof Le)continue;const R=[],z=[],B=[];let M=!1;for(const J of D.inputs){const it=F.getValue(J),Mt=F.getMask(J);R.push(it),z.push(Mt),Mt!=null&&(M=!0),r||(k[J.name]--,k[J.name]===0&&!t.hasKey(J)&&l.indexOf(J.name)===-1&&!it.isDisposed&&J.sourceLayer.stateful!==!0&&B.push(it))}M&&(e=e||{},e.mask=z[0]);const P=rt(E.apply(R,e));let j=null;E.supportsMasking&&(j=E.computeMask(R,z));const ht=bi(D),q=Array.isArray(ht)?ht:[ht];for(let J=0;J<q.length;++J){F.hasKey(q[J])||F.add(q[J],P[J],Array.isArray(j)?j[0]:j);const it=l.indexOf(q[J].name);it!==-1&&(c[it]=P[J])}r||(0,i.ASo)(B)}return F.disposeMasks(),o?c:c[0]}function gi(n,t){i.ZSL.assert(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const r=Ns(n[0],t);e=r.sorted,s=r.recipientMap}else{const r=new Set;for(const o of n){const{sorted:a,recipientMap:l}=Ns(o,t);for(const c of a)r.has(c.name)||(e.push(c),r.add(c.name));for(const c in l)s[c]==null&&(s[c]=new Set),l[c].forEach(d=>s[c].add(d))}}return{sorted:e,recipientCounts:yi(s)}}function yi(n){const t={};for(const e in n)t[e]=n[e].size;return t}function Ns(n,t){const e=new Set,s=[],r={};for(const l of t.names())e.add(l);const o=[],a=[];for(o.push(n);o.length>0;){const l=o[o.length-1];if(e.has(l.name)){o.pop();continue}const c=a[a.length-1]===o.length-1;if(l.inputs.length===0||c)o.pop(),s.push(l),e.add(l.name),c&&a.pop();else{a.push(o.length-1);for(const d of l.inputs)r[d.name]==null&&(r[d.name]=new Set),r[d.name].add(l.name),!e.has(d.name)&&o.push(d)}}return{sorted:s,recipientMap:r}}function bi(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}/**
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
 */(0,i._K2)().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,mi);var b=$(85734);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function p(n,t){return(0,i.DZQ)(()=>i.RZD(i.czq(i.lKK(n,n),t,!0)))}class f extends i.JFn.Serializable{getConfig(){return{}}}class v extends f{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return(0,i.DZQ)(()=>{const e=p(t,this.axis),s=i.zQh(e,0,this.maxValue);return i.lKK(t,i.y4m(s,i.WQq(xt(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}v.className="MaxNorm",i.JFn.registerClass(v);class C extends f{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return(0,i.DZQ)(()=>i.y4m(t,i.WQq(xt(),p(t,this.axis))))}getConfig(){return{axis:this.axis}}}C.className="UnitNorm",i.JFn.registerClass(C);class T extends f{apply(t){return i.VVh(t)}}T.className="NonNeg",i.JFn.registerClass(T);class A extends f{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return(0,i.DZQ)(()=>{const e=p(t,this.axis),s=i.WQq(i.lKK(this.rate,i.zQh(e,this.minValue,this.maxValue)),i.lKK(1-this.rate,e));return i.lKK(t,i.y4m(s,i.WQq(xt(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}A.className="MinMaxNorm",i.JFn.registerClass(A);const I={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function W(n){return Qe(n)}function H(n,t={}){return ye(n,i.JFn.SerializationMap.getMap().classNameMap,t,"constraint")}function V(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in I?I[n]:n,config:{}};return H(e)}else return n instanceof f?n:H(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function at(n){return new v(n)}function ct(n){return new C(n)}function se(){return new T}function Se(n){return new A(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Yt(){return new Wn}function Is(){return new pn}function zs(n){return new Pn(n)}function Ds(n){return new Qn(n)}function Ct(n){return new Zn(n)}function qe(n){return new Un(n)}function wi(n){return new Kn(n)}function Ts(n){return new Lt(n)}function vi(n){return new fn(n)}function Jn(n){return new je(n)}function Si(n){return new mn(n)}function ka(n){return new Je(n)}function Na(n){return new gn(n)}function Ia(n){return new yn(n)}function za(n){return new bn(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function Fe(n){if(n==null)return;const t=[],e=[],s=[];for(const r in n){const o=n[r];if(typeof o!="number"){const a=o;t.push(a.data()),e.push(r),s.push(a)}}if(t.length>0){const r=await Promise.all(t);for(let o=0;o<r.length;++o)n[e[o]]=r[o][0];(0,i.ASo)(s)}}function so(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var io;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(io||(io={}));const Da=125;class An{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class ro{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class Ta extends An{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const r in e){const o=e[r];if(typeof o=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+o*s;else{let a;r in this.totals?a=this.totals[r]:this.totals[r]=0;const l=(0,i.DZQ)(()=>(0,i.WQq)(this.totals[r],(0,i.lKK)(o,s)));this.totals[r]=l,a?.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:(0,i.DZQ)(()=>{const r=(0,i.lKK)((0,i.y4m)(1,this.seen),this.totals[s]);e[s]=r,this.totals[s].dispose(),(0,i.aCs)(e[s])}))}}class oo extends An{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const o in this.history){const a=this.history[o];for(let l=0;l<a.length;++l)if(typeof a[l]!="number"){const c=a[l];t.push(c.data()),e.push(o),s.push(l)}}const r=await Promise.all(t);for(let o=0;o<r.length;++o)this.history[e[o]][s[o]].dispose(),this.history[e[o]][s[o]]=r[o][0]}}class ao extends An{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||i.dA1,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=Da),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");i.ZSL.isNumber(this.yieldEvery)&&(this.maybeWait=sn(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const r=[];this.yield!=null&&(await Fe(s),r.push(this.yield(t,e,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await Fe(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await Fe(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await Fe(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await Fe(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):i.ZSL.isNumber(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await Fe(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await Fe(t),await this.trainEnd(t))}}function lo(n,t){return n==null&&(n={}),n instanceof An?[n]:Array.isArray(n)&&n[0]instanceof An?n:rt(n).map(s=>new ao(s,t))}class Gt{constructor(){}static registerCallbackConstructor(t,e){i.ZSL.assert(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),Gt.checkForDuplicate(e),Gt.constructors[t]==null&&(Gt.constructors[t]=[]),Gt.constructors[t].push(e)}static checkForDuplicate(t){for(const e in Gt.constructors)Gt.constructors[+e].forEach(r=>{if(r===t)throw new m("Duplicate callback constructor.")})}static clear(){Gt.constructors={}}static createCallbacks(t){const e=[];for(const s in Gt.constructors){const r=+s;t>=r&&e.push(...Gt.constructors[r])}return e.map(s=>new s)}}Gt.constructors={};function uo(n,t,e,s,r,o,a,l,c){const d=new oo,y=[new Ta,...Gt.createCallbacks(t)];n!=null&&y.push(...n),y.push(d);const S=new ro(y);return S.setParams({epochs:e,initialEpoch:s,samples:r,steps:o,batchSize:a,verbose:t,doValidation:l,metrics:c}),{callbackList:S,history:d}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ie(n,t={},e=!1){return ye(n,i.JFn.SerializationMap.getMap().classNameMap,t,"layer",e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Es(n,t){return(0,i.DZQ)(()=>{n.dtype!=="float32"&&(n=i.wgE(n,"float32"));const e=i.czq(Ee(n),t,!0),s=i.GSj(e.shape,xt()),r=i.RZD(i.PhQ(e,s));return i.y4m(n,r)})}function Ye(n,t){return(0,i.DZQ)(()=>i.i2o(Ee(i.jbE(t,n)),-1))}function Ls(n,t){return(0,i.DZQ)(()=>i.i2o(i.tnl(i.jbE(t,n)),-1))}function Cn(n,t){return(0,i.DZQ)(()=>{const e=i.jbE(n,t),s=i.zQh(i.tnl(n),xt(),Number.MAX_VALUE),r=i.tnl(i.y4m(e,s));return i.lKK(100,i.i2o(r,-1))})}function Ea(n,t){return(0,i.DZQ)(()=>{const e=i.zQh(t,xt(),Number.MAX_VALUE),s=i.Rm2(i.WQq(1,e)),r=i.zQh(n,xt(),Number.MAX_VALUE),o=i.Rm2(i.WQq(1,r));return i.i2o(Ee(i.jbE(s,o)),-1)})}function La(n,t){return(0,i.DZQ)(()=>{const e=i.PhQ(0,i.jbE(1,i.lKK(n,t)));return i.i2o(Ee(e),-1)})}function Fa(n,t){return(0,i.DZQ)(()=>{const e=i.PhQ(0,i.jbE(1,i.lKK(n,t)));return i.i2o(e,-1)})}function Ra(n,t){return(0,i.DZQ)(()=>{const e=i.czq(i.lKK(n,t),-1),s=i.T9B(i.lKK(i.jbE(1,n),t),-1);return i.PhQ(0,i.WQq(1,i.jbE(s,e)))})}function $a(n,t){return(0,i.DZQ)(()=>{const e=Math.log(2),s=i.jbE(t,n),r=i.jbE(i.WQq(s,i.lw0(i.lKK(-2,s))),e);return i.i2o(r,-1)})}function _n(n,t,e=!1){return(0,i.DZQ)(()=>{if(e)t=i.Vs9(t);else{const s=i.czq(t,t.shape.length-1,!0);t=i.y4m(t,s)}return t=i.zQh(t,xt(),1-xt()),i.HZy(i.czq(i.lKK(i.wgE(n,"float32"),i.Rm2(t)),t.shape.length-1))})}function Fs(n,t,e=!1){return(0,i.DZQ)(()=>{const s=i.wgE(i.RIf(Js(n)),"int32");t=i.zQh(t,xt(),1-xt());const r=t.shape,o=i.tQQ(i.Mw0(s,r[r.length-1]),r);return _n(o,t,e)})}function Oa(n,t){if(!i.ZSL.arraysEqual(n.shape,t.shape))throw new m(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return(0,i.DZQ)(()=>{const e=i.VVh(t),s=i.HZy(i.tnl(t));return i.WQq(i.jbE(e,i.lKK(t,n)),i.Kko(i.oNF(s)))})}function Rs(n,t){return(0,i.DZQ)(()=>{let e;return e=i.zQh(t,xt(),1-xt()),e=i.Rm2(i.y4m(e,i.jbE(1,e))),i.i2o(Oa(n,e),-1)})}function Ma(n,t){return(0,i.DZQ)(()=>{const e=i.zQh(n,xt(),1),s=i.zQh(t,xt(),1);return i.czq(i.lKK(n,i.Rm2(i.y4m(e,s))),-1)})}function Ba(n,t){return(0,i.DZQ)(()=>{const e=i.Rm2(i.WQq(xt(),t));return i.i2o(i.jbE(t,i.lKK(n,e)),-1)})}function xi(n,t){return(0,i.DZQ)(()=>{const e=Es(n,-1),s=Es(t,-1),r=i.lKK(e,s);return i.HZy(i.czq(r,-1))})}const Ac=null,Cc=null,kc=null,Nc=null,Ic=null,zc=null,Dc=null,Tc=null,Ec=null,Lc=null,Fc=null,$s={meanSquaredError:Ye,meanAbsoluteError:Ls,meanAbsolutePercentageError:Cn,meanSquaredLogarithmicError:Ea,squaredHinge:La,hinge:Fa,categoricalHinge:Ra,logcosh:$a,categoricalCrossentropy:_n,sparseCategoricalCrossentropy:Fs,binaryCrossentropy:Rs,kullbackLeiblerDivergence:Ma,poisson:Ba,cosineProximity:xi};function Ai(n){if(typeof n=="string"){if(n in $s)return $s[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new m(t)}else return n}var co;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ci(n,t){return(0,i.DZQ)(()=>{const e=i.lKK(.5,i.P61(t)),s=Zt(i.rhj(t,e),n.dtype);return i.i2o(i.LCg(n,s),-1)})}function ki(n,t){return(0,i.DZQ)(()=>Zt(i.LCg(i.FLi(n,-1),i.FLi(t,-1)),"float32"))}function ho(n,t){return(0,i.DZQ)(()=>i.wgE(i.czq(i.n76(i.LCg(n,1),i.LCg(t,1))),"float32"))}function Wa(n,t){return(0,i.DZQ)(()=>i.wgE(i.czq(i.n76(i.LCg(n,1),i.LCg(t,0))),"float32"))}function Pa(n,t){return(0,i.DZQ)(()=>i.wgE(i.czq(i.n76(i.LCg(n,0),i.LCg(t,1))),"float32"))}function po(n,t){return(0,i.DZQ)(()=>{const e=ho(n,t),s=Pa(n,t),r=i.WQq(e,s);return i.wgE(i._M9(i.rhj(r,0),i.y4m(e,r),0),"float32")})}function Qa(n,t){return(0,i.DZQ)(()=>{const e=ho(n,t),s=Wa(n,t),r=i.WQq(e,s);return i.wgE(i._M9(i.rhj(r,0),i.y4m(e,r),0),"float32")})}function fo(n,t){return Rs(n,t)}function mo(n,t){return n.rank===t.rank&&(n=i.r2V(n,[n.rank-1])),t=i.FLi(t,-1),t.dtype!==n.dtype&&(t=i.wgE(t,n.dtype)),i.wgE(i.LCg(n,t),"float32")}function Rc(n,t){throw new co}function $c(n,t){throw new co}function Za(n,t){return(0,i.DZQ)(()=>{const e=n.sub(t).square().sum(),s=n.sub(n.mean()).square().sum();return i.d_2(1).sub(e.div(s))})}const Ua=Ye,Ka=Ye,Ga=Ls,Va=Ls,ja=Cn,Ja=Cn,Ni=_n,_a=xi,go=Fs,Os={binaryAccuracy:Ci,categoricalAccuracy:ki,precision:po,categoricalCrossentropy:Ni,sparseCategoricalCrossentropy:go,mse:Ua,MSE:Ka,mae:Ga,MAE:Va,mape:ja,MAPE:Ja,cosine:_a};function Ha(n){if(typeof n=="string"&&n in Os)return Os[n];if(typeof n!="string"&&n!=null)return n;throw new m(`Unknown metric ${n}`)}function Ms(n){if(Rt(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys($s))if($s[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Os))if(Os[e]===n){t=e;break}return t!==void 0?t:n.name}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function qa(n){const t={Adagrad:()=>i.BaG.adagrad(.01),Adadelta:()=>i.BaG.adadelta(1,.95,xt()),Adam:()=>i.BaG.adam(.001,.9,.999,xt()),Adamax:()=>i.BaG.adamax(.002,.9,.999,xt(),0),RMSProp:()=>i.BaG.rmsprop(.001,.9,0,xt()),SGD:()=>i.BaG.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new m(`Unknown Optimizer ${n}`)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const yo=1*1024*1024;function bo(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!Ii(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>yo&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${yo}.`)}}function Ii(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!Ii(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!Ii(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ya(n,t,e,s=console.log){const r=tl(n),o=["Layer (type)","Input Shape","Output shape","Param #"];r?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(y=>Math.floor(t*y)));let a;if(!r){o.push("Receives inputs"),a=[];for(const y in n.nodesByDepth)a.push(...n.nodesByDepth[y])}s("_".repeat(t)),Bs(o,e,s),s("=".repeat(t));const l=n.layers;for(let y=0;y<l.length;++y)r?el(l[y],e,s):nl(l[y],e,a,s),s((y===l.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const c=Xa(n),d=vn(n.nonTrainableWeights);s(`Total params: ${c+d}`),s(`Trainable params: ${c}`),s(`Non-trainable params: ${d}`),s("_".repeat(t))}function Xa(n){let t;return n.collectedTrainableWeights!=null?t=vn(n.collectedTrainableWeights):t=vn(n.trainableWeights),t}function tl(n){let t=!0;const e=[],s=[];for(const r in n.nodesByDepth)e.push(n.nodesByDepth[r]);for(const r of e){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){t=!1;break}s.push(...r)}if(t)for(const r of n.layers){let o=!1;for(const a of r.inboundNodes)if(s.indexOf(a)!==-1)if(o){t=!1;break}else o=!0;if(!t)break}return t}function Bs(n,t,e=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,t[r]),s+=" ".repeat(t[r]-s.length);e(s)}function el(n,t,e){let s,r;try{r=n.inboundNodes.map(c=>JSON.stringify(c.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const o=n.name,a=n.getClassName(),l=[`${o} (${a})`,r,s,n.countParams().toString()];Bs(l,t,e)}function nl(n,t,e,s){let r,o;try{o=n.inboundNodes.map(S=>JSON.stringify(S.inputShapes)).join(",")}catch{o="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const a=[];for(const S of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(S)===-1))for(let k=0;k<S.inboundLayers.length;++k){const F=S.inboundLayers[k].name,L=S.nodeIndices[k],D=S.tensorIndices[k];a.push(`${F}[${L}][${D}]`)}const l=n.name,c=n.getClassName(),d=a.length===0?"":a[0],y=[`${l} (${c})`,o,r,n.countParams().toString(),d];Bs(y,t,s);for(let S=1;S<a.length;++S)Bs(["","","","",a[S]],t,s)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function wo(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function Hn(n,t){if(n===null)return null;if(typeof n=="string")return kt(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];wo(t,r,o)?e.push(o):e.push(Hn(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")e[s]=r;else{const o=kt(s);e[o]=Hn(r,o)}}return e}}function zi(n,t){if(n==null)return null;if(typeof n=="string")return ut(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];wo(t,r,o)?e.push(o):e.push(zi(o,t))}return e}else{const e={};for(const s of Object.keys(n)){const r=n[s],o=ut(s);(s==="name"||s==="className")&&typeof r=="string"?e[o]=r:e[o]=zi(r,s)}return e}}/** @license See the LICENSE file. */const Di="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const sl=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class re extends Y{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const z=this.getClassName().toLowerCase();this.name=Ne(z)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Dt(this.inputs).length!==this.inputs.length)throw new m(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(z=>z.name)}`);Dt(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(z=>z.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const z of this.outputs){const B=z.sourceLayer,M=z.nodeIndex,P=z.tensorIndex;this.outputLayers.push(B),this.outputLayersNodeIndices.push(M),this.outputLayersTensorIndices.push(P)}for(const z of this.inputs){const B=z.sourceLayer,M=z.nodeIndex,P=z.tensorIndex;Rt(M===0,"input layer has >1 nodes"),Rt(P===0,"input layer has >1 tensors"),this.inputLayers.push(B),this.inputLayersNodeIndices.push(M),this.inputLayersTensorIndices.push(P)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let z=0;z<this.inputLayers.length;z++){const B=this.inputLayers[z];if(!(B instanceof Le))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${z} (0-based) originates from layer type ${B.getClassName()}.`);this.inputNames.push(B.name),this.feedInputShapes.push(B.batchInputShape),this.feedInputNames.push(B.name)}for(const z of this.outputLayers)this.outputNames.push(z.name);this.internalInputShapes=this.inputs.map(z=>z.shape),this.internalOutputShapes=this.outputs.map(z=>z.shape);const e={},s={},r={},o={},a={},l=[],c=(z,B,M,P,j,ht)=>{(P==null||j==null||ht==null)&&(P=z.sourceLayer,j=z.nodeIndex,ht=z.tensorIndex);const q=P.inboundNodes[j];if(M.indexOf(q)!==-1)throw new wt(`The tensor ${z.name} at layer "${P.name}" is part of a cycle.`);if(B.indexOf(q)!==-1)return;this.containerNodes.add(re.nodeKey(P,j)),P.id in a||(a[P.id]=Object.keys(a).length),M.indexOf(q)===-1&&M.push(q);const J=q.inboundLayers.length;for(let it=0;it<J;it++){const Mt=q.inputTensors[it],Me=q.inboundLayers[it],cs=q.nodeIndices[it],hs=q.tensorIndices[it];c(Mt,B,M,Me,cs,hs)}for(B.push(q);M.indexOf(q)>=0;)M.splice(M.indexOf(q),1);l.push(q)},d=[],y=[];for(const z of this.outputs)c(z,d,y);const S=l.slice().reverse();for(const z of S){s[z.id]=z,z.id in e||(e[z.id]=0);let B=e[z.id];const M=r[z.outboundLayer.id]==null?0:r[z.outboundLayer.id];B=Math.max(B,M),r[z.outboundLayer.id]=B,o[z.outboundLayer.id]=z.outboundLayer,e[z.id]=B;for(let P=0;P<z.inboundLayers.length;P++){const j=z.inboundLayers[P],ht=z.nodeIndices[P],q=j.inboundNodes[ht],J=e[q.id]==null?0:e[q.id];e[q.id]=Math.max(B+1,J),s[q.id]=q}}const k={};for(const z in e){const B=e[z];B in k||(k[B]=[]),k[B].push(s[z])}const F={};for(const z in r){const B=r[z];B in F||(F[B]=[]),F[B].push(o[z])}let L=Object.keys(F).map(z=>parseInt(z,10)).sort(Et);this.layers=[];for(const z of L){const B=F[z];B.sort((M,P)=>{const j=a[M.id],ht=a[P.id];return j<ht?-1:j>ht?1:0});for(const M of B)M instanceof re&&this.internalContainerRefs.push(M),this.layers.push(M)}this.layersByDepth=F,L=Object.keys(k).map(z=>parseInt(z,10)).sort(Et);const D=this.inputs.slice(),E=[];for(const z of L)for(const B of k[z]){const M=B.outboundLayer;if(M!=null){for(const P of B.inputTensors)if(D.indexOf(P)===-1)throw new wt(`Graph disconnected: cannot obtain value for tensor ${P} at layer "${M.name}". The following previous layers were accessed without issue: ${E}`);for(const P of B.outputTensors)D.push(P);E.push(M.name)}}this.nodesByDepth=k;const R=this.layers.map(z=>z.name);for(const z of R){const B=R.filter(M=>M===z).length;if(B!==1)throw new wt(`The name "${z}" is used ${B} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(R))}this.outboundNodes=[],this.inboundNodes=[],new _e({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(z=>null),outputMasks:this.outputs.map(z=>null),inputShapes:this.inputs.map(z=>z.shape),outputShapes:this.outputs.map(z=>z.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new m("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let r=0;const o=sl(t);o&&this.parseWeights(t);for(const l of this.layers)for(const[c,d]of l.weights.entries()){const y=o?`${d.name.split("/").slice(0,-1).join("/")+"/"}${c}`:d.originalName;if(s[y]!=null)throw new m(`Duplicate weight name: ${y}`);s[y]=d,r++}const a=[];for(const l in t){let c=l;if(s[l]==null){const d=l.split("/");c=d.slice(0,-2).concat([d[d.length-1]]).join("/")}if(s[c]!=null)a.push([s[c],t[l]]);else if(e)throw new m(`Provided weight data has no target variable: ${l}`);delete s[c]}if(e){const l=[];for(const c in s)l.push(c);if(l.length>0)throw new m(`${l.length} of ${r} weights are not set: ${l}`)}jn(a)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),r=["vars","layer_checkpoint_dependencies"],o=s.map(a=>a.startsWith("_")?a.slice(1):a).filter(a=>!r.includes(a)).join("/");o!==e&&(t[o]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${Di}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=zi(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return(0,i.DZQ)(()=>{t=rt(t);const s=new me;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],t[r]);return He(this.outputs,s,e)})}computeMask(t,e){return(0,i.DZQ)(()=>{t=rt(t);let s;return e==null?s=st(null,t.length):s=rt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=wn(t);if(e.length!==this.inputLayers.length)throw new m(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let l=0;l<e.length;l++){const c=this.inputLayers[l],d=e[l],y=c.name+"_0_0";s[y]=d}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Et);if(r.length>1)for(const l of r){const c=this.nodesByDepth[l];for(const d of c){const y=d.outboundLayer;if(this.inputLayers.map(D=>D.id).indexOf(y.id)!==-1)continue;const S=[];for(let D=0;D<d.inboundLayers.length;D++){const E=d.inboundLayers[D],R=d.nodeIndices[D],z=d.tensorIndices[D],B=`${E.name}_${R}_${z}`,M=s[B];S.push(M)}const k=y.computeOutputShape(et(S)),F=wn(k),L=y.inboundNodes.indexOf(d);for(let D=0;D<F.length;D++){const E=`${y.name}_${L}_${D}`;s[E]=F[D]}}}const o=[],a=[];for(let l=0;l<this.outputLayers.length;l++){const c=this.outputLayers[l],d=this.outputLayersNodeIndices[l],y=this.outputLayersTensorIndices[l],S=`${c.name}_${d}_${y}`;a.push(S)}for(let l=0;l<a.length;l++){const c=a[l];Rt(c in s),o.push(s[c])}return et(o)}runInternalGraph(t,e){e==null&&(e=st(null,t.length));const s={};for(let c=0;c<this.inputs.length;++c){const d=this.inputs[c],y=t[c],S=e[c];s[d.id]=[y,S]}const r=Object.keys(this.nodesByDepth).map(c=>parseInt(c,10)).sort(Et);for(const c of r){const d=this.nodesByDepth[c];for(const y of d){const S=y.outboundLayer,k=y.inputTensors,F=y.outputTensors,L=new Array;for(const D of k)D.id in s&&L.push(s[D.id]);if(L.length===k.length){let D={},E,R,z,B;if(y.callArgs!=null&&(D=y.callArgs),L.length===1){const[M,P]=L[0];D.mask==null&&(D.mask=P),z=rt(S.call(M,D)),B=rt(S.computeMask(M,P)),E=[M],R=[P]}else E=L.map(M=>M[0]),R=L.map(M=>M[1]),D.mask==null&&(D.mask=R),z=rt(S.call(E,D)),B=rt(S.computeMask(E,R));if(S.activityRegularizer)throw new Z("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let M=0;M<F.length;++M){const P=F[M],j=z[M],ht=B[M];s[P.id]=[j,ht]}}}}const o=[],a=[],l=[];for(const c of this.outputs){Rt(c.id in s,`Could not compute output ${c.name} : ${c.id}`);const[d,y]=s[c.id];l.push(d.shape),o.push(d),a.push(y)}return[o,a,l]}buildNodeConversionMap(t){const e={};let s;for(const r of this.layers){s=r instanceof re?1:0;for(let o=0;o<r.inboundNodes.length;o++){const a=re.nodeKey(r,o);this.containerNodes.has(a)&&(e[a]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new m("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new m(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new m(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return(0,i.DZQ)(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const r=re.nodeKey(e,s);this.containerNodes.has(r)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const a of this.layers){const l=a.getClassName(),c=a.getConfig(),d=[];for(let S=0;S<a.inboundNodes.length;S++){const k=a.inboundNodes[S],F=re.nodeKey(a,S);let L={};if(this.containerNodes.has(F)){if(k.callArgs)try{JSON.stringify(k.callArgs),L=k.callArgs}catch{console.warn(`Layer ${a.name} was passed non-serializable keyword arguments: ${k.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),L={}}if(k.inboundLayers.length>0){const D=[];for(let E=0;E<k.inboundLayers.length;E++){const R=k.inboundLayers[E],z=k.nodeIndices[E],B=k.tensorIndices[E],M=re.nodeKey(R,z);let P=e[M];P==null&&(P=0),D.push([R.name,P,B,L])}d.push(D)}}}const y={};y.name=a.name,y.className=l,y.config=c,y.inboundNodes=d,s.push(y)}t.layers=s;const r=[];for(let a=0;a<this.inputLayers.length;a++){const l=this.inputLayers[a],c=this.inputLayersNodeIndices[a],d=re.nodeKey(l,c);if(!this.containerNodes.has(d))continue;let y=e[d];y==null&&(y=0);const S=this.inputLayersTensorIndices[a];r.push([l.name,y,S])}t.inputLayers=r;const o=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],d=re.nodeKey(l,c);if(!this.containerNodes.has(d))continue;let y=e[d];y==null&&(y=0);const S=this.outputLayersTensorIndices[a];o.push([l.name,y,S])}return t.outputLayers=o,t}static fromConfig(t,e,s={},r=!1){const o={},a={};function l(E,R){E.name in a?a[E.name].push(R):a[E.name]=[R]}function c(E,R){const z=[];let B;for(const M of R){const P=M[0],j=M[1],ht=M[2];if(B=M[3]==null?{}:M[3],!(P in o)){l(E,R);return}const q=o[P];if(q.inboundNodes.length<=j){l(E,R);return}const J=q.inboundNodes[j];z.push(J.outputTensors[ht])}z.length>0&&E.apply(et(z),B)}function d(E){const R=E.name,z=ie(E,e.customObjects!=null?e.customObjects:{});z.setFastWeightInitDuringBuild(r),o[R]=z,E.inboundNodes.forEach(M=>{if(!(M instanceof Array))throw new m(`Corrupted configuration, expected array for nodeData: ${M}`);l(z,M)})}const y=e.name,S=e.layers;for(const E of S)d(E);for(;!Ue(a);)for(const E of S){const R=o[E.name];if(R.name in a){const z=a[R.name];delete a[R.name];for(const B of z)c(R,B)}}const k=[],F=[],L=e.inputLayers;for(const E of L){const R=E[0],z=E[1],B=E[2];Rt(R in o);const P=o[R].inboundNodes[z].outputTensors;k.push(P[B])}const D=e.outputLayers;for(const E of D){const R=E[0],z=E[1],B=E[2];Rt(R in o);const P=o[R].inboundNodes[z].outputTensors;F.push(P[B])}return new t({inputs:k,outputs:F,name:y})}get stateful(){if(this._stateful)throw new m("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){(0,i.DZQ)(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function vo(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return t.forEach(o=>{o in n?r.push(n[o]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function So(n,t){return vo(n,t,"classWeight")}function Oc(n,t){return vo(n,t,"sampleWeight")}async function xo(n,t,e,s){if(t!=null||s!=null)throw new Error("Support sampleWeight is not implemented yet");if(e!=null){const r=(0,i.DZQ)(()=>{if(n.shape.length===1)return(0,i.o8B)(n);if(n.shape.length===2){if(n.shape[1]>1)return(0,i.FLi)(n,1);if(n.shape[1]===1)return(0,i.tQQ)(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),o=Array.from(await r.data());(0,i.ASo)(r);const a=[];return o.forEach(l=>{if(e[l]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${l} exists in the data but not in classWeight`);a.push(e[l])}),(0,i.tGX)(a,"float32")}else return null}function il(n,t){return(0,i.lKK)(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const rl=32;function Ao(n,t){let e,s;const r=t;e=r.xs,s=r.ys,i.ZSL.assert(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const o=Co("input",n.inputNames,e),a=Co("output",n.outputNames,s),l=o[0].shape[0];i.ZSL.assert(o.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${o.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),i.ZSL.assert(a.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${a.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let c=0;c<o.length;c++)i.ZSL.assert(o[c].shape[0]===l,()=>`Batch size mismatch: input ${n.inputNames[c]} has ${o[c].shape[0]}; expected  ${l} based on input ${n.inputNames[0]}.`);for(let c=0;c<a.length;c++)i.ZSL.assert(a[c].shape[0]===l,()=>`Batch size mismatch: output ${n.outputNames[c]} has ${a[c].shape[0]}; expected  ${l} based on input ${n.inputNames[0]}.`);return{xs:o,ys:a}}function Co(n,t,e){if(e instanceof i.qYS)return[e];if(Array.isArray(e))return i.ZSL.assert(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const r of t){if(e[r]==null)throw new m(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(e[r])}return s}}function ol(n){if(n.length===3)throw new Z("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function al(n,t,e){const s=e.batchesPerEpoch!=null;if(i.ZSL.assert(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),i.ZSL.assert(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),i.ZSL.assert(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),i.ZSL.assert(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),i.ZSL.assert(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=e.validationData!=null;let o,a;if(r)if(ko(e.validationData))i.ZSL.assert(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const E=ol(e.validationData);o=E.xs,a=E.ys}const l=n.makeTrainFunction(),c=n.getDedupedMetricsNames();let d;r?d=c.slice().concat(c.map(E=>"val_"+E)):d=c.slice();const y=lo(e.callbacks,e.yieldEvery),S=e.verbose==null?1:e.verbose,{callbackList:k,history:F}=uo(y,S,e.epochs,null,null,ll(t,e),null,r,d);k.setModel(n),n.history=F,await k.onTrainBegin(),n.stopTraining_=!1;let L=e.initialEpoch==null?0:e.initialEpoch,D=await t.iterator();for(;L<e.epochs;){const E={};await k.onEpochBegin(L);let R=0,z=0;for(s||(D=await t.iterator());!s||R<e.batchesPerEpoch;){const B=await D.next();if(s&&B.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${R} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(B.value!=null){const{xs:M,ys:P}=Ao(n,B.value),j={};j.batch=z,j.size=M[0].shape[0],await k.onBatchBegin(z,j);const ht=[];if(e.classWeight!=null){const it=So(e.classWeight,n.outputNames);for(let Mt=0;Mt<it.length;++Mt)ht.push(await xo(P[Mt],null,it[Mt]))}const q=M.concat(P).concat(ht),J=l(q);i.ASo(q);for(let it=0;it<c.length;++it){const Mt=c[it],Me=J[it];j[Mt]=Me,i.aCs(Me)}await k.onBatchEnd(z,j),so(j),z++,R++}if(s?R>=e.batchesPerEpoch:B.done){if(r){let M;ko(e.validationData)?M=rt(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):M=rt(n.evaluate(o,a,{batchSize:e.validationBatchSize==null?rl:e.validationBatchSize,verbose:0}));for(let P=0;P<n.metricsNames.length;++P)E[`val_${n.metricsNames[P]}`]=M[P]}break}if(n.stopTraining_)break}if(await k.onEpochEnd(L,E),L++,n.stopTraining_)break}return await k.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function ll(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function ko(n){return typeof n.iterator=="function"}function ul(n){return typeof n.next=="function"}async function cl(n,t,e){e=e||{};const s=e.batches!=null,r=n.testFunction;let o=[];if(e.verbose>0)throw new Z("Verbose mode is not implemented yet.");i.ZSL.assert(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const a=ul(t)?t:await t.iterator();let l=0,c=0;for(;!s||c<e.batches;){const d=await a.next();if(o=i.DZQ(()=>{if(d.value){const{xs:y,ys:S}=Ao(n,d.value),k=y.concat(S),F=i.DZQ(()=>r(k));if(i.ASo(k),c===0)for(let D=0;D<F.length;++D)o.push((0,i.d_2)(0));const L=k[0].shape[0];for(let D=0;D<F.length;++D){const E=F[D],R=o[D];o[D]=i.DZQ(()=>i.WQq(o[D],i.lKK(L,E))),c>0&&i.ASo(R)}i.ASo(F),l+=L,++c}return o}),d.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let d=0;d<o.length;++d){const y=o[d];o[d]=i.y4m(o[d],l),i.ASo(y)}return et(o)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ti(n){i.ZSL.assert(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function qn(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>ve(s,t,e-t)):ve(n,t,e-t)}function Ei(n,t){return i.DZQ(()=>n==null?null:Array.isArray(n)?n.map(e=>Ei(e,t)):bs(n,t.dtype==="int32"?t:i.wgE(t,"int32")))}function Li(n,t){const e=[];let s=0,r=null;for(;s<n;)r=s+t,r>=n&&(r=n),e.push([s,r]),s=r;return e}function No(n){const t=[];n instanceof i.qYS&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Te(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function oe(n,t){if(n==null)return;const e=[];if(t instanceof i.qYS)e.push(t.id);else if(Array.isArray(t))t.forEach(r=>e.push(r.id));else if(t!=null)for(const r in t){const o=t[r];e.push(o.id)}const s=[];if(n instanceof i.qYS)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{e.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const o=n[r];e.indexOf(o.id)===-1&&s.push(o)}s.forEach(r=>{r.isDisposed||r.dispose()})}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function hl(n){return n instanceof i.qYS}function Fi(n){return Array.isArray(n)}function Io(n){return!hl(n)&&!Fi(n)}function zo(n,t,e,s=!0,r=""){if(t==null||t.length===0){if(n!=null){let a=!1;if(Fi(n)&&n.length>0)a=!0;else if(Io(n)){for(const l in n)if(n.hasOwnProperty(l)){a=!0;break}}else a=!0;if(a)throw new m(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(a=>null);let o;if(Io(n)){n=n,o=[];for(const a of t){if(n[a]==null)throw new m(`No data provided for "${a}". Need data for each key in: ${t}`);o.push(n[a])}}else if(Fi(n)){if(n=n,n.length!==t.length)throw new m(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);o=n}else{if(n=n,t.length>1)throw new m(`The model ${r} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);o=[n]}if(o=No(o),e!=null)for(let a=0;a<t.length;++a){if(e[a]==null)continue;const l=o[a];if(l.shape.length!==e[a].length)throw new m(`Error when checking ${r}: expected ${t[a]} to have ${e[a].length} dimension(s). but got array with shape ${l.shape}`);for(let c=0;c<e[a].length;++c){if(c===0&&!s)continue;const d=l.shape[c],y=e[a][c];if(y!=null&&y>=0&&d!==y)throw new m(`${r} expected a batch of elements where each example has shape [${e[a].slice(1,e[a].length)}] (i.e.,tensor shape [*,${e[a].slice(1,e[a].length)}]) but the ${r} received an input with ${l.shape[0]} examples, each with shape [${l.shape.slice(1,l.shape.length)}] (tensor shape [${l.shape}])`)}}return o}function dl(n,t,e){const s=Dt(n.map(o=>o.shape[0]));s.sort();const r=Dt(t.map(o=>o.shape[0]));if(r.sort(),s.length>1)throw new m(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(o=>o.shape))}`);if(r.length>1)throw new m(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(o=>o.shape))}`);if(s.length>0&&r.length>0&&!i.ZSL.arraysEqual(s,r))throw new m(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function pl(n,t,e){const s=[Ye,Rs,_n];for(let r=0;r<n.length;++r){const o=n[r],a=t[r],l=e[r];if(a!=null){if(a===_n&&o.shape[o.shape.length-1]===1)throw new m(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(a)!==-1){const c=o.shape.slice(1),d=l.slice(1);for(let y=0;y<c.length;++y){const S=c[y],k=d[y];if(k!=null&&S!==k)throw new m(`A target Tensor with shape ${o.shape} was passed for an output of shape ${l}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Do(n,t,e,s=!0,r=""){let o;if(Array.isArray(n)){if(n.length!==t.length)throw new m(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);o=n}else{if(t.length>1)throw new m(`The model expects ${t.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);o=[n]}if(e!=null)for(let a=0;a<t.length;++a){if(e[a]==null)continue;const l=o[a];if(l.shape.length!==e[a].length)throw new m(`Error when checking ${r}: expected ${t[a]} to have ${e[a].length} dimension(s), but got array with shape ${JSON.stringify(l.shape)}`);for(let c=0;c<e[a].length;++c){if(c===0&&!s)continue;const d=l.shape[c],y=e[a][c];if(y!=null&&y!==d)throw new m(`Error when checking ${r}: expected ${t[a]} to have shape ${JSON.stringify(e[a])} but got array with shape ${JSON.stringify(l.shape)}.`)}}}function fl(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const r of t){let o=e.hasOwnProperty(r)?e[r]:[];Array.isArray(o)||(o=[o]),s.push(o)}return s}}const ml="layers-model";class xe extends re{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new m("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");Ya(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=qa(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof i.ELo))throw new m("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const a in t.loss)if(this.outputNames.indexOf(a)===-1)throw new m(`Unknown entry in loss dictionary: "${a}". Only expected the following keys: ${this.outputNames}`);for(const a of this.outputNames)t.loss[a]==null&&console.warn(`Output "${a}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${a} during training`),e.push(Ai(t.loss[a]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new m(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(l=>Ai(l))}else{const a=Ai(t.loss);this.outputs.forEach(l=>{e.push(a)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let a=0;a<this.outputs.length;++a){const l=this.internalOutputShapes[a],c=this.outputNames[a];this.feedOutputNames.push(c),this.feedOutputShapes.push(l),this.feedLossFns.push(this.lossFunctions[a])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],ee("loss",()=>{for(let a=0;a<this.outputs.length;++a){if(s.indexOf(a)!==-1)continue;const l=this.lossFunctions[a];this.outputs.length>1&&(this.metricsTensors.push([l,a]),this.metricsNames.push(this.outputNames[a]+"_loss"))}});const r=fl(t.metrics,this.outputNames),o=(a,l,c)=>{this.outputNames.length>1&&(l=this.outputNames[a]+"_"+l),this.metricsNames.push(l),this.metricsTensors.push([c,a])};ee("metric",()=>{for(let a=0;a<this.outputs.length;++a){if(s.indexOf(a)!==-1)continue;const l=r[a];(d=>{let S,k,F;for(const L of d){if(typeof L=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(L)!==-1){const E=this.internalOutputShapes[a];E[E.length-1]===1||this.lossFunctions[a]===Rs?["accuracy","acc"].indexOf(L)!==-1?k=Ci:["crossentropy","ce"].indexOf(L)!==-1&&(k=fo):this.lossFunctions[a]===Fs?["accuracy","acc"].indexOf(L)!==-1?k=mo:["crossentropy","ce"].indexOf(L)!==-1&&(k=go):["accuracy","acc"].indexOf(L)!==-1?k=ki:["crossentropy","ce"].indexOf(L)!==-1&&(k=Ni);let R;["accuracy","acc"].indexOf(L)!==-1?R="acc":["crossentropy","ce"].indexOf(L)!==-1&&(R="ce"),F=k,S=""+R}else F=Ha(L),S=""+Ms(L);let D;ee(S,()=>{D=F}),o(a,S,D)}})(l)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const r=s.batchSize==null?32:s.batchSize;Ti(r);const a=this.standardizeUserDataXY(t,e,!0,r);try{const l=a[0].concat(a[1]);this.makeTestFunction();const c=this.testFunction,d=this.testLoop(c,l,r,s.verbose,s.steps);return et(d)}finally{oe(a[0],t),oe(a[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),cl(this,t,e)}checkNumSamples(t,e,s,r="steps"){let o;if(s!=null){if(o=null,e!=null)throw new m(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?o=t[0].shape[0]:o=t.shape[0];else throw new m(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return o}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new m("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),r=s?e:[e],o=this.retrieveSymbolicTensors(r),a=new me;if(t instanceof i.qYS&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new m(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let c=0;c<this.inputs.length;++c)a.add(this.inputs[c],t[c])}else for(const c of this.inputs){const d=t[c.name];if(d==null)throw new m(`No value is provided for the model's input ${c.name}`);a.add(c,d)}const l=He(o,a);return s?l:l[0]}retrieveSymbolicTensors(t){const e=st(null,t.length);let s=t.length;for(const r of this.layers){const o=Array.isArray(r.output)?r.output:[r.output],a=o.map(l=>l.name);for(let l=0;l<t.length;++l){const c=a.indexOf(t[l]);if(c!==-1&&(e[l]=o[c],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw e.forEach((o,a)=>{o==null&&r.push(t[a])}),new m(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return e}predictLoop(t,e=32,s=!1){return i.DZQ(()=>{const r=this.checkNumSamples(t);if(s)throw new Z("Verbose predictLoop() is not implemented yet.");const o=Li(r,e),a=this.outputs.map(l=>[]);for(let l=0;l<o.length;++l)i.DZQ(()=>{const d=o[l][0],y=o[l][1],S=qn(t,d,y),k=[];if(Array.isArray(S))for(let L=0;L<S.length;++L)k.push({key:this.inputs[L],value:S[L]});else k.push({key:this.inputs[0],value:S});const F=new me(k);return He(this.outputs,F)}).forEach((d,y)=>a[y].push(d));return et(a.map(l=>i.xWs(l,0)))})}predict(t,e={}){const s=No(t);Do(s,this.inputNames,this.feedInputShapes,!1);try{const r=e.batchSize==null?32:e.batchSize;return Ti(r),this.predictLoop(s,r)}finally{oe(s,t)}}predictOnBatch(t){Do(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,r){if(this.optimizer_==null)throw new wt("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let a=0;a<this.feedOutputShapes.length;++a){const l=this.feedOutputShapes[a];this.feedLossFns[a]===Fs?o.push(l.slice(0,l.length-1).concat([1])):o.push(l)}if(t=zo(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=zo(e,this.feedOutputNames,o,!1,"target"),dl(t,e,null),pl(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&t[0].shape[0]%r!==0)throw new m(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,r,o=!0,a){const[l,c]=this.standardizeUserDataXY(t,e,o,a);if(s!=null)throw new Error("sample weight is not supported yet.");let d=null;if(r!=null){const y=So(r,this.outputNames);d=[];for(let S=0;S<y.length;++S)d.push(await xo(c[S],null,y[S]))}return[l,c,d]}testLoop(t,e,s,r=0,o){return i.DZQ(()=>{const a=this.checkNumSamples(e,s,o,"steps"),l=[];if(r>0)throw new Z("Verbose mode is not implemented yet.");if(o!=null)throw new Z("steps mode in testLoop() is not implemented yet");{const c=Li(a,s),d=(0,i.tGX)(Wt(0,a));for(let y=0;y<c.length;++y){const S=c[y][0],k=c[y][1],F=ve(d,S,k-S),L=Ei(e,F),D=t(L);if(y===0)for(let E=0;E<D.length;++E)l.push((0,i.d_2)(0));for(let E=0;E<D.length;++E){const R=D[E];l[E]=i.WQq(l[E],i.lKK(k-S,R))}}for(let y=0;y<l.length;++y)l[y]=i.y4m(l[y],a)}return l})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const r=t[s];let o=r;if(ue(t,r)>1){const a=ue(t.slice(0,s),r);o+=`_${a}`}e.push(o)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],l=()=>{const S=[];for(let D=0;D<this.inputs.length;++D)S.push({key:this.inputs[D],value:s[D]});const k=new me(S),F=He(this.outputs,k,{training:!0});let L;for(let D=0;D<this.lossFunctions.length;++D){const E=this.lossFunctions[D];let R=E(r[D],F[D]);o[D]!=null&&(R=il(R,o[D]));const z=i.i2o(R);e.push(z),D===0?L=R:L=i.WQq(L,R)}for(let D=0;D<this.metricsTensors.length;++D){let E;if(this.outputs.length>1&&D<this.outputs.length)E=e[D];else{const R=this.metricsTensors[D][0],z=this.metricsTensors[D][1];E=i.i2o(R(r[z],F[z]))}i.aCs(E),a.push(E)}return L=i.i2o(L),this.calculateLosses().forEach(D=>{L=i.WQq(L,D)}),L},c=this.collectedTrainableWeights.map(S=>S.read());return[this.optimizer_.minimize(l,!0,c)].concat(a)}}makeTestFunction(){this.testFunction=t=>i.DZQ(()=>{const e=[];let s;const r=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let d=0;d<this.inputs.length;++d)a.push({key:this.inputs[d],value:r[d]});const l=new me(a),c=He(this.outputs,l);for(let d=0;d<this.lossFunctions.length;++d){const y=this.lossFunctions[d],S=i.i2o(y(o[d],c[d]));d===0?s=S:s=i.WQq(s,S),e.push(s)}for(let d=0;d<this.metricsTensors.length;++d){const y=this.metricsTensors[d][0],S=this.metricsTensors[d][1],k=i.i2o(y(o[S],c[S]));e.push(k)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let r,o,a,l,c,d,y,S,k;try{const F=s.batchSize==null?32:s.batchSize;Ti(F);const D=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,F);r=D[0],o=D[1],k=D[2];let E=!1,R;if(s.validationData!=null&&s.validationData.length>0){if(E=!0,s.validationData.length===2)c=s.validationData[0],d=s.validationData[1];else throw s.validationData.length===3?new Z("validationData including sample weights is not supported yet."):new m(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const it=await this.standardizeUserData(c,d,null,null,!0,F);y=it[0],S=it[1],R=y.concat(S)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){E=!0;const J=Math.floor(r[0].shape[0]*(1-s.validationSplit)),it=r[0].shape[0];y=qn(r,J,it),a=r,r=qn(r,0,J),S=qn(o,J,it),l=o,o=qn(o,0,J),R=y.concat(S)}else s.validationSteps!=null&&(E=!0);const z=r.concat(o).concat(k);this.checkTrainableWeightsConsistency();const B=this.makeTrainFunction(),M=this.getDedupedMetricsNames();let P,j;E?(this.makeTestFunction(),P=this.testFunction,j=M.slice().concat(M.map(J=>"val_"+J))):(P=null,R=[],j=M.slice());const ht=lo(s.callbacks,s.yieldEvery);return await this.fitLoop(B,z,M,F,s.epochs,s.verbose,ht,P,R,s.shuffle,j,s.initialEpoch,null,null)}finally{this.isTraining=!1,oe(r,t),oe(o,e),oe(a,t),oe(l,e),oe(y,c),oe(S,d),k!=null&&i.ASo(k)}}async fitLoop(t,e,s,r,o,a,l,c,d,y,S,k,F,L){r==null&&(r=32),o==null&&(o=1),y==null&&(y=!0),k==null&&(k=0);let D=!1;if(c!=null&&d!=null&&(D=!0),L!=null&&(D=!0,F==null))throw new m("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const E=this.checkNumSamples(e,r,F,"steps_per_epoch");let R;E!=null&&(R=Wt(0,E)),a==null&&(a=1);const{callbackList:z,history:B}=uo(l,a,o,k,E,F,r,D,S);z.setModel(this),this.history=B,await z.onTrainBegin(),this.stopTraining_=!1;for(let M=k;M<o;++M){await z.onEpochBegin(M);const P={};if(F!=null)throw new Z("stepsPerEpoch mode is not implemented yet.");{if(y==="batch")throw new Z("batch shuffling is not implemneted yet");y&&i.ZSL.shuffle(R);const j=(0,i.tGX)(R),ht=Li(E,r);for(let q=0;q<ht.length;++q){const J={};if(await z.onBatchBegin(q,J),i.DZQ(()=>{const it=ht[q][0],Mt=ht[q][1],Me=ve(j,it,Mt-it);J.batch=q,J.size=Mt-it;const cs=Ei(e,Me),hs=t(cs);for(let Be=0;Be<s.length;++Be){const We=s[Be],Dn=hs[Be];J[We]=Dn,i.aCs(Dn)}if(q===ht.length-1&&D){const Be=this.testLoop(c,d,r);for(let We=0;We<s.length;++We){const Dn=s[We],ds=Be[We];i.aCs(ds),P["val_"+Dn]=ds}}}),await z.onBatchEnd(q,J),so(J),this.stopTraining_)break}j.dispose()}if(await z.onEpochEnd(M,P),this.stopTraining_)break}return await z.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return al(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),r=s[0],o=s[1],l=this.makeTrainFunction()(r.concat(o)),c=[];for(const d of l){const y=await d.data();c.push(y[0])}return i.ASo(l),oe(s[0],t),oe(s[1],e),et(c)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,r=s?this.trainableWeights:this.weights,o=this.getWeights(s);for(let a=0;a<r.length;++a)s&&!r[a].trainable||e.push({name:r[a].originalName,tensor:o[a]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=i.m1Z().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-i.m1Z().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=ut(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>ut(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const r of e)if(typeof s[r]=="string")t[r]=ut(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[ut(Ms(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>ut(Ms(t)));{const t={};for(const e in this.metrics)t[e]=ut(Ms(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=Hn(t.optimizer_config),s=ie(e);let r;if(typeof t.loss=="string")r=kt(t.loss);else if(Array.isArray(t.loss))r=t.loss.map(a=>kt(a));else if(t.loss!=null){r={};for(const a in t.loss)r[a]=kt(t.loss[a])}let o;if(Array.isArray(t.metrics))o=t.metrics.map(a=>kt(a));else if(t.metrics!=null){o={};for(const a in t.metrics)o[a]=kt(t.metrics[a])}this.compile({loss:r,metrics:o,optimizer:s})}async save(t,e){if(typeof t=="string"){const d=i.io.getSaveHandlers(t);if(d.length===0)throw new m(`Cannot find any save handlers for URL '${t}'`);if(d.length>1)throw new m(`Found more than one (${d.length}) save handlers for URL '${t}'`);t=d[0]}if(t.save==null)throw new m("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await i.io.encodeWeights(this.getNamedWeights(e)),l={modelTopology:this.toJSON(null,!1),format:ml,generatedBy:`TensorFlow.js tfjs-layers v${Di}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){l.trainingConfig=this.getTrainingConfig();const d="optimizer",{data:y,specs:S}=await i.io.encodeWeights(await this.optimizer.getWeights(),d);s.specs.push(...S),s.data=i.io.concatenateArrayBuffers([s.data,y])}return this.userDefinedMetadata!=null&&(bo(this.userDefinedMetadata,this.name,!0),l.userDefinedMetadata=this.userDefinedMetadata),l.weightData=s.data,l.weightSpecs=s.specs,t.save(l)}setUserDefinedMetadata(t){bo(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}xe.className="Model",i.JFn.registerClass(xe);class To extends xe{}To.className="Functional",i.JFn.registerClass(To);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */async function gl(n,t){"modelTopology"in n||(n={modelTopology:n}),n=n;let e=n.modelTopology;e.model_config!=null&&(e=e.model_config);const s=Hn(e),r=ie(s,t);if(n.weightsManifest!=null){const o=await i.io.loadWeights(n.weightsManifest,n.pathPrefix,r.weights.map(l=>l.originalName)),a={};for(const l of r.weights)a[l.originalName]=o[l.originalName];r.loadWeights(a),(0,i.ASo)(o)}return r}async function yl(n,t){if(t==null&&(t={}),typeof n=="string"){const e=i.io.getLoadHandlers(n,t);if(e.length===0)e.push(i.io.browserHTTPRequest(n,t));else if(e.length>1)throw new m(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return bl(n,void 0,t)}async function bl(n,t,e){if(e==null&&(e={}),n.load==null)throw new m("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let r=s.modelTopology;r.model_config!=null&&(r=r.model_config);const o=e.strict==null?!0:e.strict,a=s.weightData!=null&&s.weightSpecs!=null&&o,l=ie(Hn(r),t,a),c=s.trainingConfig;if(c!=null&&l.loadTrainingConfig(c),s.userDefinedMetadata!=null&&l.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new m("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:d,optimizerWeights:y}=wl(s.weightData,s.weightSpecs);l.loadWeights(d,o),l.optimizer!=null&&y.length>0&&await l.optimizer.setWeights(y),(0,i.ASo)(d),(0,i.ASo)(y.map(S=>S.tensor))}return l}function wl(n,t){const e=i.io.decodeWeights(n,t),s={},r=[];return t.forEach(o=>{o.group==="optimizer"?r.push({name:o.name,tensor:e[o.name]}):s[o.name]=e[o.name]}),{modelWeights:s,optimizerWeights:r}}class Xe extends xe{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Ne("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new m(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Xe||t instanceof xe;let s;if(e){if(s=t,s.outputs.length!==1)throw new m("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new m("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new m("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=ks({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(r)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new m(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new m("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=Cs(this.outputs[0])}this.inboundNodes=[],new _e({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:st(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=t.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(nt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new xe({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new wt("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new wt("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new wt("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new wt("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},r=!1){let o,a={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new m("Legacy serialization format not supported yet.");o=e}else i.ZSL.assert(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),o=e.layers,delete e.layers,a=e;const l=new t(a);if(!(l instanceof Xe))throw new Z(`Sequential.fromConfig called on non-Sequential input: ${l}`);for(const c of o){const y=ie(c,void 0,r);r&&y.setFastWeightInitDuringBuild(!0),l.add(y)}return l}set stopTraining(t){if(this.model==null)throw new m("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new m("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Xe.className="Sequential",i.JFn.registerClass(Xe);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function vl(n){return new xe(n)}function Sl(n){return new Xe(n)}function Eo(n){return ks(n)}function xl(n,t){Gt.registerCallbackConstructor(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ft extends i.JFn.Serializable{getConfig(){return{}}}class Lo extends Ft{apply(t,e=1){return qs(t,e)}}Lo.className="elu",i.JFn.registerClass(Lo);class Fo extends Ft{apply(t){return i.WfX(t)}}Fo.className="selu",i.JFn.registerClass(Fo);class Ro extends Ft{apply(t){return i.VVh(t)}}Ro.className="relu",i.JFn.registerClass(Ro);class $o extends Ft{apply(t){return(0,i.DZQ)(()=>i.BpO(6,i.VVh(t)))}}$o.className="relu6",i.JFn.registerClass($o);class Oo extends Ft{apply(t){return t}}Oo.className="linear",i.JFn.registerClass(Oo);class Mo extends Ft{apply(t){return i.ry7(t)}}Mo.className="sigmoid",i.JFn.registerClass(Mo);class Bo extends Ft{apply(t){return Xs(t)}}Bo.className="hardSigmoid",i.JFn.registerClass(Bo);class Wo extends Ft{apply(t){return i.lw0(t)}}Wo.className="softplus",i.JFn.registerClass(Wo);class Po extends Ft{apply(t){return Ys(t)}}Po.className="softsign",i.JFn.registerClass(Po);class Qo extends Ft{apply(t){return i.ymU(t)}}Qo.className="tanh",i.JFn.registerClass(Qo);class Ri extends Ft{apply(t,e=-1){return i.Vs9(t,e)}}Ri.className="softmax",i.JFn.registerClass(Ri);class Zo extends Ft{apply(t,e=-1){return i.HPB(t,e)}}Zo.className="logSoftmax",i.JFn.registerClass(Zo);class Uo extends Ft{apply(t){return(0,i.DZQ)(()=>i.DZQ(()=>{const e=Math.sqrt(2),s=i.lKK(.5,i.WQq(1,i.Y12(i.y4m(t,e))));return i.lKK(t,s)}))}}Uo.className="gelu",i.JFn.registerClass(Uo);class Ko extends Ft{apply(t){return(0,i.DZQ)(()=>i.lKK(.5,i.lKK(t,i.WQq(1,i.ymU(i.lKK(i.RZD(i.y4m(2,Math.PI)),i.WQq(t,i.lKK(.044715,i.n7C(t,3)))))))))}}Ko.className="gelu_new",i.JFn.registerClass(Ko);class Go extends Ft{apply(t){return(0,i.DZQ)(()=>i.lKK(t,i.ymU(i.lw0(t))))}}Go.className="mish",i.JFn.registerClass(Go);class Vo extends Ft{apply(t,e=1){return(0,i.DZQ)(()=>i.lKK(i.ry7(i.lKK(t,e)),t))}}Vo.className="swish",i.JFn.registerClass(Vo);function Re(n){return n.getClassName()}function $i(n,t={}){return ye(n,i.JFn.SerializationMap.getMap().classNameMap,t,"activation")}function $e(n){if(n==null){const t={};return t.className="linear",t.config={},$i(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},$i(t)}else return n instanceof Ft?n:$i(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Oi(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class jo extends i.JFn.Serializable{}class Yn extends jo{constructor(t){super(),Oi(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return(0,i.DZQ)(()=>{let e=(0,i.Ul9)([1]);return this.hasL1&&(e=(0,i.WQq)(e,(0,i.czq)(i.lKK(this.l1,(0,i.tnl)(t))))),this.hasL2&&(e=(0,i.WQq)(e,(0,i.czq)(i.lKK(this.l2,Ee(t))))),i.tQQ(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}Yn.className="L1L2",i.JFn.registerClass(Yn);function Al(n){return Oi(n),new Yn({l1:n!=null?n.l1:null,l2:0})}function Cl(n){return Oi(n),new Yn({l2:n!=null?n.l2:null,l1:0})}const Jo={l1l2:"L1L2"};function ft(n){return Qe(n)}function _o(n,t={}){return ye(n,i.JFn.SerializationMap.getMap().classNameMap,t,"regularizer")}function St(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Jo?Jo[n]:n,config:{}};return _o(e)}else return n instanceof jo?n:_o(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Mi extends Y{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=G(t);let s=(0,i.VVh)(t);return this.maxValue!=null&&(s=(0,i.zQh)(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Mi.className="ReLU",i.JFn.registerClass(Mi);class Bi extends Y{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=G(t);return(0,i.H8d)(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Bi.className="LeakyReLU",i.JFn.registerClass(Bi);class Wi extends Y{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=yt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=St(t.alphaRegularizer),this.alphaConstraint=V(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new m(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=nt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)e[r-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<t.length;++r)s[r]=t[r];this.inputSpec=[new At({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=G(t),(0,i.NsG)(t,this.alpha.read())}getConfig(){const t={alphaInitializer:bt(this.alphaInitializer),alphaRegularizer:ft(this.alphaRegularizer),alphaConstraint:W(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}Wi.className="PReLU",i.JFn.registerClass(Wi);class Pi extends Y{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new Z(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=G(t);return(0,i.Pqc)(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}Pi.className="ELU",i.JFn.registerClass(Pi);class Qi extends Y{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=G(t);return(0,i.lKK)(s,(0,i.wgE)((0,i.rhj)(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Qi.className="ThresholdedReLU",i.JFn.registerClass(Qi);class Zi extends Y{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Ri().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return(0,i.DZQ)(()=>{let s=G(t);const r=e.mask;if(r!=null){const o=(0,i.lKK)((0,i.jbE)((0,i.SaS)(s.shape),(0,i.wgE)(r,s.dtype)),(0,i.d_2)(-1e9));s=(0,i.WQq)(s,o)}return this.axis instanceof Array?this.axis.length>1?(0,i.oNF)((0,i.jbE)(s,(0,i.VZ)(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Zi.className="Softmax",i.JFn.registerClass(Zi);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function kn(n,t,e){if(typeof n=="number")return st(n,t);if(n.length!==t)throw new m(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const r=n[s];if(!cn(r))throw new m(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function ae(n,t,e,s,r=1){if(n==null)return n;const o=t+(t-1)*(r-1);let a;return e==="same"?a=n:a=n-o+1,Math.floor((a+s-1)/s)}function ge(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+It([e-t,0]);else if(s==="same")n=n*t;else throw new m(`Unsupport padding mode: ${s}.`);return n}var Ui,Ki;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Gi(n,t){return(0,i.DZQ)(()=>(gt(t),t==="channelsFirst"?i.mgz(n,[0,2,3,1]):n))}function Ho(n,t){return(0,i.DZQ)(()=>(gt(t),t==="channelsFirst"?i.mgz(n,[0,2,3,4,1]):n))}function qo(n,t,e,s=1,r="valid",o,a=1){return(0,i.DZQ)(()=>{if(o==null&&(o=w()),gt(o),n.shape.length!==3)throw new m(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new m(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new m(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(o==="channelsFirst"&&(n=i.mgz(n,[0,2,1])),r==="causal")throw new Z("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let l=i.kA9(n,t,s,r==="same"?"same":"valid","NWC",a);return e!=null&&(l=Ut(l,e)),l})}function Mc(n,t,e=1,s="valid",r,o=1){return Ui(()=>(Ki(r),qo(n,t,null,e,s,r,o)))}function Bc(n,t,e=[1,1],s="valid",r,o){return Ui(()=>(Ki(r),Vi(n,t,null,e,s,r,o)))}function Vi(n,t,e,s=[1,1],r="valid",o,a,l=null){return(0,i.DZQ)(()=>{if(o==null&&(o=w()),gt(o),n.rank!==3&&n.rank!==4)throw new m(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new m(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let c=Gi(n,o);if(r==="causal")throw new Z("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return c=i.cZk.conv2d({x:c,filter:t,strides:s,pad:r==="same"?"same":"valid",dilations:a,dataFormat:"NHWC",bias:e,activation:l}),o==="channelsFirst"&&(c=i.mgz(c,[0,3,1,2])),c})}function Wc(n,t,e=[1,1,1],s="valid",r,o){return Ui(()=>(Ki(r),Yo(n,t,null,e,s,r,o)))}function Yo(n,t,e,s=[1,1,1],r="valid",o,a){return(0,i.DZQ)(()=>{if(o==null&&(o=w()),gt(o),n.rank!==4&&n.rank!==5)throw new m(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new m(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let l=Ho(n,o);if(r==="causal")throw new Z("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return l=i.IPL(l,t,s,r==="same"?"same":"valid","NDHWC",a),e!=null&&(l=Ut(l,e)),o==="channelsFirst"&&(l=i.mgz(l,[0,4,1,2,3])),l})}class Ws extends Y{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Ws.verifyArgs(e),this.rank=t,pt(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new Z(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=kn(e.kernelSize,t,"kernelSize"),this.strides=kn(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,Nt(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,gt(this.dataFormat),this.activation=$e(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=yt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=V(e.biasConstraint),this.biasRegularizer=St(e.biasRegularizer),this.activityRegularizer=St(e.activityRegularizer),this.dilationRate=kn(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new m(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new m(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new m(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Rt("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!Ce(t.kernelSize,"number",1,3))throw new m(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Re(this.activation),useBias:this.useBias,biasInitializer:bt(this.biasInitializer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),biasConstraint:W(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class Nn extends Ws{constructor(t,e){super(t,e),this.kernel=null,Nn.verifyArgs(e),this.filters=e.filters,pt(this.filters,"filters"),this.kernelInitializer=yt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=V(e.kernelConstraint),this.kernelRegularizer=St(e.kernelRegularizer)}build(t){t=nt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new m(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return(0,i.DZQ)(()=>{t=G(t);let s;const r=this.bias==null?null:this.bias.read(),o=Qt(this.activation.getClassName());if(o!=null&&this.rank===2)s=Vi(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,o);else{if(this.rank===1)s=qo(t,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Vi(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=Yo(t,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new Z("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=nt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let o=0;o<s.length;++o){const a=ae(s[o],this.kernelSize[o],this.padding,this.strides[o],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[o]);e.push(a)}let r=[t[0]];return this.dataFormat==="channelsLast"?(r=r.concat(e),r.push(this.filters)):(r.push(this.filters),r=r.concat(e)),r}getConfig(){const t={filters:this.filters,kernelInitializer:bt(this.kernelInitializer),kernelRegularizer:ft(this.kernelRegularizer),kernelConstraint:W(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new m(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class In extends Nn{constructor(t){super(2,t),In.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Ce(t.kernelSize,"number",1,2))throw new m(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}In.className="Conv2D",i.JFn.registerClass(In);class zn extends Nn{constructor(t){super(3,t),zn.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new m(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}zn.className="Conv3D",i.JFn.registerClass(zn);class ji extends In{constructor(t){if(super(t),this.inputSpec=[new At({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new m(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=nt(t),t.length!==4)throw new m("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new m("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new At({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return i.DZQ(()=>{let s=G(t);if(s.shape.length!==4)throw new m(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let a,l;this.dataFormat==="channelsFirst"?(a=2,l=3):(a=1,l=2);const c=r[a],d=r[l],y=this.kernelSize[0],S=this.kernelSize[1],k=this.strides[0],F=this.strides[1],L=ge(c,k,y,this.padding),D=ge(d,F,S,this.padding),E=[o,L,D,this.filters];this.dataFormat!=="channelsLast"&&(s=i.mgz(s,[0,2,3,1]));let R=i.wX9(s,this.kernel.read(),E,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(R=i.mgz(R,[0,3,1,2])),this.bias!=null&&(R=Ut(R,this.bias.read(),this.dataFormat)),this.activation!=null&&(R=this.activation.apply(R)),R})}computeOutputShape(t){t=nt(t);const e=t.slice();let s,r,o;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3):(s=3,r=1,o=2);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.strides[0],d=this.strides[1];return e[s]=this.filters,e[r]=ge(e[r],c,a,this.padding),e[o]=ge(e[o],d,l,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}ji.className="Conv2DTranspose",i.JFn.registerClass(ji);class Ji extends zn{constructor(t){if(super(t),this.inputSpec=[new At({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new m(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=nt(t),t.length!==5)throw new m("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new m("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new At({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return i.DZQ(()=>{let s=G(t);if(s.shape.length!==5)throw new m(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let a,l,c;this.dataFormat==="channelsFirst"?(c=2,a=3,l=4):(c=1,a=2,l=3);const d=r[c],y=r[a],S=r[l],k=this.kernelSize[0],F=this.kernelSize[1],L=this.kernelSize[2],D=this.strides[0],E=this.strides[1],R=this.strides[2],z=ge(d,D,k,this.padding),B=ge(y,E,F,this.padding),M=ge(S,R,L,this.padding),P=[o,z,B,M,this.filters];this.dataFormat!=="channelsLast"&&(s=i.mgz(s,[0,2,3,4,1]));let j=i.jIJ(s,this.kernel.read(),P,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(j=i.mgz(j,[0,4,1,2,3])),this.bias!==null&&(j=Ut(j,this.bias.read(),this.dataFormat)),this.activation!==null&&(j=this.activation.apply(j)),j})}computeOutputShape(t){t=nt(t);const e=t.slice();let s,r,o,a;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3,a=4):(s=4,r=1,o=2,a=3);const l=this.kernelSize[0],c=this.kernelSize[1],d=this.kernelSize[2],y=this.strides[0],S=this.strides[1],k=this.strides[2];return e[s]=this.filters,e[r]=ge(e[r],y,l,this.padding),e[o]=ge(e[o],S,c,this.padding),e[a]=ge(e[a],k,d,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Ji.className="Conv3DTranspose",i.JFn.registerClass(Ji);class Xo extends Nn{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new m("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new m("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new m(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=yt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=St(e.depthwiseRegularizer),this.depthwiseConstraint=V(e.depthwiseConstraint),this.pointwiseInitializer=yt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=St(e.pointwiseRegularizer),this.pointwiseConstraint=V(e.pointwiseConstraint)}build(t){if(t=nt(t),t.length<this.rank+2)throw new m(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new m(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],r=this.kernelSize.concat([s,this.depthMultiplier]),o=[];for(let l=0;l<this.rank;++l)o.push(1);o.push(s*this.depthMultiplier,this.filters);const a=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,a,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",o,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,a,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,a,this.biasConstraint):this.bias=null,this.inputSpec=[new At({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return(0,i.DZQ)(()=>{t=G(t);let s;if(this.rank===1)throw new Z("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=i.mgz(t,[0,2,3,1])),s=i.wdz(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Ut(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=i.mgz(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=bt(this.depthwiseInitializer),t.pointwiseInitializer=bt(this.pointwiseInitializer),t.depthwiseRegularizer=ft(this.depthwiseRegularizer),t.pointwiseRegularizer=ft(this.pointwiseRegularizer),t.depthwiseConstraint=W(this.depthwiseConstraint),t.pointwiseConstraint=W(this.pointwiseConstraint),t}}Xo.className="SeparableConv";class _i extends Xo{constructor(t){super(2,t)}}_i.className="SeparableConv2D",i.JFn.registerClass(_i);class Xn extends Nn{constructor(t){super(1,t),Xn.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!Ce(t.kernelSize,"number",1,1))throw new m(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}Xn.className="Conv1D",i.JFn.registerClass(Xn);class Hi extends Y{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return(0,i.DZQ)(()=>{if(t=G(t),this.dataFormat==="channelsLast"){const s=fe(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return fe(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=fe(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return fe(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Hi.className="Cropping2D",i.JFn.registerClass(Hi);class qi extends Y{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,gt(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,on(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return i.DZQ(()=>{let s=G(t);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=i.mgz(s,[0,2,3,1]);const o=this.size[0]*r[2],a=this.size[1]*r[3],l=this.interpolation==="nearest"?i.Slp.resizeNearestNeighbor(s,[o,a]):i.Slp.resizeBilinear(s,[o,a]);return i.mgz(l,[0,3,1,2])}else{const o=this.size[0]*r[1],a=this.size[1]*r[2];return this.interpolation==="nearest"?i.Slp.resizeNearestNeighbor(s,[o,a]):i.Slp.resizeBilinear(s,[o,a])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}qi.className="UpSampling2D",i.JFn.registerClass(qi);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function kl(n,t,e=[1,1],s="valid",r,o){return(0,i.DZQ)(()=>{r==null&&(r=w()),gt(r);let a=Gi(n,r);if(n.rank!==4)throw new m(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new m(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return a=i.Gl3(a,t,e,s==="same"?"same":"valid","NHWC",o),r==="channelsFirst"&&(a=i.mgz(a,[0,3,1,2])),a})}class Yi extends Ws{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=yt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=V(t.depthwiseConstraint),this.depthwiseRegularizer=St(t.depthwiseRegularizer)}build(t){if(t=nt(t),t.length<4)throw new m(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new m(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,i.DZQ)(()=>{t=G(t);let s=kl(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Ut(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=nt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,o=ae(e,this.kernelSize[0],this.padding,this.strides[0]),a=ae(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],r,o,a]:[t[0],o,a,r]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=bt(this.depthwiseInitializer),t.depthwiseRegularizer=ft(this.depthwiseRegularizer),t.depthwiseConstraint=W(this.depthwiseRegularizer),t}}Yi.className="DepthwiseConv2D",i.JFn.registerClass(Yi);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function ta(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new m("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function r(o){return o==null||Array.isArray(o)?o:[o]}return t=r(t),e=r(e),{inputs:n,initialState:t,constants:e}}function ea(n,t,e,s=!1,r,o,a=!1,l=!1){return i.DZQ(()=>{const c=t.shape.length;if(c<3)throw new m(`Input should be at least 3D, but is ${c}D.`);const d=[1,0].concat(Wt(2,c));if(t=i.mgz(t,d),o!=null)throw new Z("The rnn() functoin of the deeplearn.js backend does not support constants yet.");a&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=i.wgE(i.wgE(r,"bool"),"float32"),r.rank===c-1&&(r=i.UG6(r,-1)),r=i.mgz(r,d)),s&&(t=i.BEg(t,0),r!=null&&(r=i.BEg(r,0)));const y=[];let S,k=e;const F=t.shape[0],L=i.K$i(t);let D;r!=null&&(D=i.K$i(r));for(let R=0;R<F;++R){const z=L[R],B=i.DZQ(()=>n(z,k));if(r==null)S=B[0],k=B[1];else{const M=i.DZQ(()=>{const P=D[R],j=i.jbE(i.P61(P),P),ht=i.WQq(i.lKK(B[0],P),i.lKK(k[0],j)),q=k.map((J,it)=>i.WQq(i.lKK(B[1][it],P),i.lKK(J,j)));return{output:ht,newStates:q}});S=M.output,k=M.newStates}l&&y.push(S)}let E;return l&&(E=i.t$z(y,1)),[S,E,k]})}class le extends Y{constructor(t){super(t);let e;if(t.cell==null)throw new m("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new Zs({cells:t.cell}):e=t.cell,e.stateSize==null)throw new m("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new At({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Wt(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Gn(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let r;if(this.returnSequences?r=[t[0],t[1],s]:r=[t[0],s],this.returnState){const o=[];for(const a of e)o.push([t[0],a]);return[r].concat(o)}else return r}computeMask(t,e){return i.DZQ(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const r=this.states.map(o=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new Z("Constants support is not implemented in RNN yet.");Gn(t)&&(t=t[0]),t=t;const s=this.stateful?t[0]:null,r=t.slice(2);this.inputSpec[0]=new At({shape:[s,null,...r]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let a;if(Array.isArray(this.cell.stateSize)?a=this.cell.stateSize:a=[this.cell.stateSize],this.stateSpec!=null){if(!i.ZSL.arraysEqual(this.stateSpec.map(l=>l.shape[l.shape.length-1]),a))throw new m(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=a.map(l=>new At({shape:[null,l]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){(0,i.DZQ)(()=>{if(!this.stateful)throw new dt("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new m("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>i.Ul9([s,r])):this.states_=[i.Ul9([s,this.cell.stateSize])];else if(t==null)i.ASo(this.states_),this.keptStates!=null&&(i.ASo(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>i.Ul9([s,r])):this.states_[0]=i.Ul9([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new m(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):i.ASo(this.states_);for(let r=0;r<this.states_.length;++r){const o=t[r],a=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,l=[s,a];if(!i.ZSL.arraysEqual(o.shape,l))throw new m(`State ${r} is incompatible with layer ${this.name}: expected shape=${l}, received shape=${o.shape}`);this.states_[r]=o}}this.states_=this.states_.map(r=>i.aCs(r.clone()))})}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=ta(t,s,r,this.numConstants);t=o.inputs,s=o.initialState,r=o.constants;let a=[],l=[];if(s!=null){e.initialState=s,a=a.concat(s),this.stateSpec=[];for(const d of s)this.stateSpec.push(new At({shape:d.shape}));l=l.concat(this.stateSpec)}if(r!=null&&(e.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof Pt){const d=[t].concat(a),y=this.inputSpec.concat(l),S=this.inputSpec;this.inputSpec=y;const k=super.apply(d,e);return this.inputSpec=S,k}else return super.apply(t,e)}call(t,e){return(0,i.DZQ)(()=>{const s=e==null?null:e.mask,r=e==null?null:e.training;let o=e==null?null:e.initialState;t=G(t),o==null&&(this.stateful?o=this.states_:o=this.getInitialState(t));const a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(o.length!==a)throw new m(`RNN Layer has ${a} state(s) but was passed ${o.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const l={training:r},d=ea((L,D)=>{const E=this.cell.call([L].concat(D),l);return[E[0],E.slice(1)]},t,o,this.goBackwards,s,null,this.unroll,this.returnSequences),y=d[0],S=d[1],k=d[2];this.stateful&&this.resetStates(k,r);const F=this.returnSequences?S:y;return this.returnState?[F].concat(k):F})}getInitialState(t){return(0,i.DZQ)(()=>{let e=i.Ul9(t.shape);return e=i.czq(e,[1,2]),e=Te(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?On(e,[1,s]):e):this.cell.stateSize>1?[On(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===le.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const r=e.cell,o=ie(r,s);return new t(Object.assign(e,{cell:o}))}}le.className="RNN",i.JFn.registerClass(le);class ts extends Y{}class Ps extends ts{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pt(this.units,"units"),this.activation=$e(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=St(t.kernelRegularizer),this.recurrentRegularizer=St(t.recurrentRegularizer),this.biasRegularizer=St(t.biasRegularizer),this.kernelConstraint=V(t.kernelConstraint),this.recurrentConstraint=V(t.recurrentConstraint),this.biasConstraint=V(t.biasConstraint),this.dropout=pe([1,It([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=pe([1,It([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=nt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,i.DZQ)(()=>{if(t=t,t.length!==2)throw new m(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const r=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Oe({ones:()=>i.P61(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Oe({ones:()=>i.P61(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let o;const a=this.dropoutMask,l=this.recurrentDropoutMask;a!=null?o=Ht(i.lKK(t,a),this.kernel.read()):o=Ht(t,this.kernel.read()),this.bias!=null&&(o=Ut(o,this.bias.read())),l!=null&&(s=i.lKK(s,l));let c=i.WQq(o,Ht(s,this.recurrentKernel.read()));return this.activation!=null&&(c=this.activation.apply(c)),[c,c]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Re(this.activation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:W(this.kernelConstraint),recurrentConstraint:W(this.recurrentConstraint),biasConstraint:W(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}Ps.className="SimpleRNNCell",i.JFn.registerClass(Ps);class Xi extends le{constructor(t){t.cell=new Ps(t),super(t)}call(t,e){return(0,i.DZQ)(()=>{this.cell.dropoutMask!=null&&(i.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(i.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return new t(e)}}Xi.className="SimpleRNN",i.JFn.registerClass(Xi);class Qs extends ts{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new m("GRUCell does not support reset_after parameter set to true.");this.units=t.units,pt(this.units,"units"),this.activation=$e(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=$e(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=St(t.kernelRegularizer),this.recurrentRegularizer=St(t.recurrentRegularizer),this.biasRegularizer=St(t.biasRegularizer),this.kernelConstraint=V(t.kernelConstraint),this.recurrentConstraint=V(t.recurrentConstraint),this.biasConstraint=V(t.biasConstraint),this.dropout=pe([1,It([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=pe([1,It([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=nt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,i.DZQ)(()=>{if(t=t,t.length!==2)throw new m(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Oe({ones:()=>i.P61(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Oe({ones:()=>i.P61(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,d;0<this.dropout&&this.dropout<1&&(t=i.lKK(t,o[0]));let y=Ht(t,this.kernel.read());this.useBias&&(y=Ut(y,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=i.lKK(r,a[0]));const S=this.recurrentKernel.read(),[k,F]=i.lDo(S,[2*this.units,this.units],S.rank-1),L=Ht(r,k),[D,E,R]=i.lDo(y,3,y.rank-1),[z,B]=i.lDo(L,2,L.rank-1);l=this.recurrentActivation.apply(i.WQq(D,z)),c=this.recurrentActivation.apply(i.WQq(E,B));const M=Ht(i.lKK(c,r),F);d=this.activation.apply(i.WQq(R,M));const P=i.WQq(i.lKK(l,r),i.lKK(i.WQq(1,i.HZy(l)),d));return[P,P]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Re(this.activation),recurrentActivation:Re(this.recurrentActivation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:W(this.kernelConstraint),recurrentConstraint:W(this.recurrentConstraint),biasConstraint:W(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}Qs.className="GRUCell",i.JFn.registerClass(Qs);class tr extends le{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Qs(t),super(t)}call(t,e){return(0,i.DZQ)(()=>{this.cell.dropoutMask!=null&&(i.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(i.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}tr.className="GRU",i.JFn.registerClass(tr);class es extends ts{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,pt(this.units,"units"),this.activation=$e(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=$e(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=St(t.kernelRegularizer),this.recurrentRegularizer=St(t.recurrentRegularizer),this.biasRegularizer=St(t.biasRegularizer),this.kernelConstraint=V(t.kernelConstraint),this.recurrentConstraint=V(t.recurrentConstraint),this.biasConstraint=V(t.biasConstraint),this.dropout=pe([1,It([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=pe([1,It([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=nt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const o=this.biasInitializer,a=this.units;r=new(e=class extends zt{apply(c,d){const y=o.apply([a]),S=new pn().apply([a]),k=o.apply([a*2]);return ys(ys(y,S),k)}},e.className="CustomInit",e)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return(0,i.DZQ)(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new m(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const o=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Oe({ones:()=>i.P61(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Oe({ones:()=>i.P61(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const a=this.dropoutMask,l=this.recurrentDropoutMask;let c,d,y,S;0<this.dropout&&this.dropout<1&&(t=i.lKK(t,a[0]));let k=Ht(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=i.lKK(r,l[0])),k=i.WQq(k,Ht(r,this.recurrentKernel.read())),this.useBias&&(k=Ut(k,this.bias.read()));const[F,L,D,E]=i.lDo(k,4,k.rank-1);c=this.recurrentActivation.apply(F),d=this.recurrentActivation.apply(L),y=i.WQq(i.lKK(d,o),i.lKK(c,this.activation.apply(D))),S=this.recurrentActivation.apply(E);const R=i.lKK(S,this.activation.apply(y));return[R,R,y]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Re(this.activation),recurrentActivation:Re(this.recurrentActivation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),recurrentInitializer:bt(this.recurrentInitializer),biasInitializer:bt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:ft(this.kernelRegularizer),recurrentRegularizer:ft(this.recurrentRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:W(this.kernelConstraint),recurrentConstraint:W(this.recurrentConstraint),biasConstraint:W(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}es.className="LSTMCell",i.JFn.registerClass(es);class er extends le{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new es(t),super(t)}call(t,e){return(0,i.DZQ)(()=>{this.cell.dropoutMask!=null&&(i.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(i.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}er.className="LSTM",i.JFn.registerClass(er);class Zs extends ts{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return(0,i.DZQ)(()=>{t=t;let s=t.slice(1);const r=[];for(const l of this.cells.slice().reverse())Array.isArray(l.stateSize)?r.push(s.splice(0,l.stateSize.length)):r.push(s.splice(0,1));r.reverse();const o=[];let a;for(let l=0;l<this.cells.length;++l){const c=this.cells[l];s=r[l],l===0?a=[t[0]].concat(s):a=[a[0]].concat(s),a=c.call(a,e),o.push(a.slice(1))}s=[];for(const l of o.slice().reverse())s.push(...l);return[a[0]].concat(s)})}build(t){Gn(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,r)=>{ee(`RNNCell_${r}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=o=>({className:o.getClassName(),config:o.getConfig()}),r={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),r)}static fromConfig(t,e,s={}){const r=[];for(const o of e.cells)r.push(ie(o,s));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Vn(t)}setWeights(t){const e=[];for(const s of this.cells){const r=s.weights.length,o=t.splice(r);for(let a=0;a<s.weights.length;++a)e.push([s.weights[a],o[a]])}jn(e)}}Zs.className="StackedRNNCells",i.JFn.registerClass(Zs);function Oe(n){const{ones:t,rate:e,training:s=!1,count:r=1,dropoutFunc:o}=n,a=()=>o!=null?o(t(),e):ws(t(),e),l=()=>Ve(a,t,s);return!r||r<=1?i.aCs(l().clone()):Array(r).fill(void 0).map(l).map(d=>i.aCs(d.clone()))}var Pc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */var Nl=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e};class Qc extends null{}class na extends le{constructor(t){if(t.unroll)throw new Z("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new Z("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new At({ndim:5})]}call(t,e){return i.DZQ(()=>{if(this.cell.dropoutMask!=null&&(i.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(i.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new m("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,r=e==null?null:e.training,o=e==null?null:e.initialState;return super.call(t,{mask:s,training:r,initialState:o})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return i.DZQ(()=>{const{stateSize:e}=this.cell,s=t.shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)],a=i.Ul9(o);return Array.isArray(e)?Array(e.length).fill(a):[a]})}resetStates(t,e=!1){i.DZQ(()=>{if(!this.stateful)throw new dt("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)];if(s[0]==null)throw new m("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>i.Ul9(o)):this.states_=[i.Ul9(o)];else if(t==null)i.ASo(this.states_),this.keptStates!=null&&(i.ASo(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>i.Ul9(o)):this.states_[0]=i.Ul9(o);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new m(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):i.ASo(this.states_);for(let l=0;l<this.states_.length;++l){const c=t[l],d=o;if(!i.ZSL.arraysEqual(c.shape,d))throw new m(`State ${l} is incompatible with layer ${this.name}: expected shape=${d}, received shape=${c.shape}`);this.states_[l]=c}}this.states_=this.states_.map(l=>i.aCs(l.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:r,padding:o,strides:a,dilationRate:l}=this.cell,c=e==="channelsFirst",d=t[c?3:2],y=t[c?4:3],S=ae(d,r[0],o,a[0],l[0]),k=ae(y,r[1],o,a[1],l[1]);return[...t.slice(0,2),...c?[s,S,k]:[S,k,s]]}}na.className="ConvRNN2D";class Us extends es{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:o,dataFormat:a,dilationRate:l}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,pt(this.filters,"filters"),this.kernelSize=kn(s,2,"kernelSize"),this.kernelSize.forEach(c=>pt(c,"kernelSize")),this.strides=kn(r||1,2,"strides"),this.strides.forEach(c=>pt(c,"strides")),this.padding=o||"valid",Nt(this.padding),this.dataFormat=a||"channelsLast",gt(this.dataFormat),this.dilationRate=kn(l||1,2,"dilationRate"),this.dilationRate.forEach(c=>pt(c,"dilationRate"))}build(t){var e;t=nt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new m(`The channel dimension of the input should be defined. Found ${t[s]}`);const r=t[s],o=4,a=this.kernelSize.concat([r,this.filters*o]);this.kernel=this.addWeight("kernel",a,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const l=this.kernelSize.concat([this.filters,this.filters*o]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",l,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let c;if(this.unitForgetBias){const d=this.biasInitializer,y=this.filters;c=new(e=class extends zt{apply(k,F){const L=d.apply([y]),D=i.SaS([y]),E=d.apply([y*2]);return $n([L,D,E])}},e.className="CustomInit",e)}else c=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*o],null,c,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return i.DZQ(()=>{if(t.length!==3)throw new m(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,r=t[0],o=t[1],a=t[2],l=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Oe({ones:()=>i.P61(r),rate:this.dropout,training:s,count:l,dropoutFunc:this.dropoutFunc}));const c=this.dropoutMask,d=(Aa,Wr,Ca)=>!Wr||!Wr[Ca]?Aa:i.lKK(Wr[Ca],Aa);let y=d(r,c,0),S=d(r,c,1),k=d(r,c,2),F=d(r,c,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Oe({ones:()=>i.P61(o),rate:this.recurrentDropout,training:s,count:l,dropoutFunc:this.dropoutFunc}));const L=this.recurrentDropoutMask;let D=d(o,L,0),E=d(o,L,1),R=d(o,L,2),z=d(o,L,3);const B=3,[M,P,j,ht]=i.lDo(this.kernel.read(),l,B),[q,J,it,Mt]=this.useBias?i.lDo(this.bias.read(),l):[null,null,null,null];y=this.inputConv(y,M,q,this.padding),S=this.inputConv(S,P,J,this.padding),k=this.inputConv(k,j,it,this.padding),F=this.inputConv(F,ht,Mt,this.padding);const[Me,cs,hs,Be]=i.lDo(this.recurrentKernel.read(),l,B);D=this.recurrentConv(D,Me),E=this.recurrentConv(E,cs),R=this.recurrentConv(R,hs),z=this.recurrentConv(z,Be);const We=this.recurrentActivation.apply(i.WQq(y,D)),Dn=this.recurrentActivation.apply(i.WQq(S,E)),ds=i.WQq(i.lKK(Dn,a),i.lKK(We,this.activation.apply(i.WQq(k,R)))),xa=i.lKK(this.recurrentActivation.apply(i.WQq(F,z)),this.activation.apply(ds));return[xa,xa,ds]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=Nl(t,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),r)}inputConv(t,e,s,r){const o=i.Xtf(t,e,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Ut(o,s,this.dataFormat):o}recurrentConv(t,e){return i.Xtf(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Us.className="ConvLSTM2DCell",i.JFn.registerClass(Us);class nr extends na{constructor(t){const e=new Us(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}nr.className="ConvLSTM2D",i.JFn.registerClass(nr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Ks extends Y{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?e[r]:this.noiseShape[r]);return s}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t);if(0<this.rate&&this.rate<1){const r=e.training==null?!1:e.training,o=this.getNoiseShape(s);return Ve(()=>ws(s,this.rate,o,this.seed),()=>s,r)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}Ks.className="Dropout",i.JFn.registerClass(Ks);class sr extends Ks{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}sr.className="SpatialDropout1D",i.JFn.registerClass(sr);class ir extends Y{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,pt(this.units,"units"),this.activation=$e(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=V(t.kernelConstraint),this.biasConstraint=V(t.biasConstraint),this.kernelRegularizer=St(t.kernelRegularizer),this.biasRegularizer=St(t.biasRegularizer),this.activityRegularizer=St(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=nt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=nt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t),r=Qt(this.activation.getClassName());let o;return r!=null?o=Ht(s,this.kernel.read(),r,this.bias?this.bias.read():null):(o=Ht(s,this.kernel.read()),this.bias!=null&&(o=Ut(o,this.bias.read())),this.activation!=null&&(o=this.activation.apply(o))),o})}getConfig(){const t={units:this.units,activation:Re(this.activation),useBias:this.useBias,kernelInitializer:bt(this.kernelInitializer),biasInitializer:bt(this.biasInitializer),kernelRegularizer:ft(this.kernelRegularizer),biasRegularizer:ft(this.biasRegularizer),activityRegularizer:ft(this.activityRegularizer),kernelConstraint:W(this.kernelConstraint),biasConstraint:W(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}ir.className="Dense",i.JFn.registerClass(ir);class rr extends Y{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=nt(t);for(const e of t.slice(1))if(e==null)throw new m(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],_t(t,1)]}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);let s=G(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let o=2;o<s.rank;++o)r.push(o);r.push(1),s=(0,i.mgz)(s,r)}return _s(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}rr.className="Flatten",i.JFn.registerClass(rr);class or extends Y{constructor(t){super(t),this.supportsMasking=!0,this.activation=$e(t.activation)}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t);return this.activation.apply(s)})}getConfig(){const t={activation:Re(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}or.className="Activation",i.JFn.registerClass(or);class ar extends Y{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return(0,i.DZQ)(()=>(t=G(t),js(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}ar.className="RepeatVector",i.JFn.registerClass(ar);class lr extends Y{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",r=e.slice();let o=1,a=null;for(let c=0;c<r.length;++c){const d=r[c];if(this.isUnknown(d))if(a===null)a=c;else throw new m("Can only specifiy one unknown dimension.");else o*=d}const l=_t(t);if(a!==null){if(o===0||l%o!==0)throw new m(s);r[a]=l/o}else if(l!==o)throw new m(s);return r}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t),r=s.shape,o=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return(0,i.tQQ)(s,o)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}lr.className="Reshape",i.JFn.registerClass(lr);class ur extends Y{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Wt(1,t.dims.length+1);if(!i.ZSL.arraysEqual(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new At({ndim:this.dims.length+1})]}computeOutputShape(t){t=nt(t);const e=t.slice();return this.dims.forEach((s,r)=>{e[r+1]=t[s]}),e}call(t,e){return(0,i.mgz)(G(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}ur.className="Permute",i.JFn.registerClass(ur);class cr extends Y{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=G(t);return(0,i.bzn)((0,i.Ec)(s,this.maskValue),-1)}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t),a=(0,i.bzn)((0,i.Ec)(s,this.maskValue),-1,!0);return(0,i.lKK)(s,(0,i.wgE)(a,s.dtype))})}}cr.className="Masking",i.JFn.registerClass(cr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class hr extends Y{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(rt(t.inputLength))}this.inputDim=t.inputDim,pt(this.inputDim,"inputDim"),this.outputDim=t.outputDim,pt(this.outputDim,"outputDim"),this.embeddingsInitializer=yt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=St(t.embeddingsRegularizer),this.activityRegularizer=St(t.activityRegularizer),this.embeddingsConstraint=V(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return(0,i.DZQ)(()=>this.maskZero?(t=G(t),(0,i.Ec)(t,(0,i.POl)(t))):null)}computeOutputShape(t){if(t=nt(t),this.inputLength==null)return[...t,this.outputDim];const e=rt(this.inputLength);if(e.length!==t.length-1)throw new m(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let r=0;r<e.length;++r){const o=e[r],a=t[r+1];if(o!=null&&a!=null&&o!==a)throw new m(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);o==null&&(e[s]=a),s++}}return[t[0],...e,this.outputDim]}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);let s=G(t);s.dtype!=="int32"&&(s=Zt(s,"int32"));const r=bs(this.embeddings.read(),(0,i.tQQ)(s,[s.size]));return(0,i.tQQ)(r,nt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:bt(this.embeddingsInitializer),embeddingsRegularizer:ft(this.embeddingsRegularizer),activityRegularizer:ft(this.activityRegularizer),embeddingsConstraint:W(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}hr.className="Embedding",i.JFn.registerClass(hr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class tn extends Y{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new Z}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let r=0;r<e.length;++r){const o=t[t.length-e.length+r],a=e[r];if(o==null||a==null||o<0||a<0)s.push(null);else if(o===1)s.push(a);else if(a===1)s.push(o);else{if(o!==a)throw new m("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(o)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[nt(t)]),t=t,t.length<2)throw new m(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const o of t)o!=null&&o[0]!==null&&e.push(o[0]);if(e=Dt(e),e.length>1)throw new m(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let o=1;o<t.length;++o){const a=t[o]==null?null:t[o].slice(1);s=this.computeElementwiseOpOutputShape(s,a)}const r=t.map(o=>o.length);t.indexOf(null)===-1&&Dt(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return(0,i.DZQ)(()=>{if(t=t,this.reshapeRequired){const s=[],r=t.map(o=>o.rank);if(r.indexOf(null)===-1){const o=It(r);for(let a of t){const l=a.rank;for(let c=0;c<o-l;++c)a=Te(a,1);s.push(a)}return this.mergeFunction(s)}else{let o=!1;for(const c of t){const d=c.rank;if(d==null){const y=c.shape,S=y[0],k=y.slice(1).concat([S]);let F=i.tQQ(c,[S].concat(_t(y.slice(1))));F=i.mgz(F,[1,0]),F=i.tQQ(F,k),s.push(F),o=!0}else if(d>1){const y=Wt(1,d).concat([0]);s.push(i.mgz(c,y)),o=!0}else s.push(c)}let a=this.mergeFunction(s);const l=a.rank;if(o){if(l==null){const c=a.shape,d=c.length,y=c[d-1],S=[y].concat(c.slice(0,c.length-1));a=i.tQQ(i.mgz(i.tQQ(a,[-1,y]),[1,0]),S)}else if(l>1){const c=[l-1].concat(Wt(0,l-1));a=i.mgz(a,c)}}return a}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let r=1;r<t.length;++r){const o=t[r]==null?null:t[r].slice(1);e=this.computeElementwiseOpOutputShape(e,o)}let s=[];for(const r of t)r!=null&&r[0]!==null&&s.push(r[0]);return s=Dt(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return i.DZQ(()=>{if(e==null)return null;if(!Array.isArray(e))throw new m("`mask` should be an Array");if(!Array.isArray(t))throw new m("`inputs` should be an Array");if(e.length!==t.length)throw new m(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(r=>r==null))return null;e=e.map(r=>r==null?r:i.UG6(r,0));let s=e[0];for(let r=1;r<e.length-1;++r)s=i.n76(s,e[r]);return s})}}class ns extends tn{constructor(t){super(t)}mergeFunction(t){return(0,i.DZQ)(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=i.WQq(e,t[s]);return e})}}ns.className="Add",i.JFn.registerClass(ns);function Zc(n){return Array.isArray(n)?new ns({}).apply(n):new ns(n)}class ss extends tn{constructor(t){super(t)}mergeFunction(t){return(0,i.DZQ)(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=i.lKK(e,t[s]);return e})}}ss.className="Multiply",i.JFn.registerClass(ss);function Uc(n){return Array.isArray(n)?new ss({}).apply(n):new ss(n)}class is extends tn{constructor(t){super(t)}mergeFunction(t){return(0,i.DZQ)(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=i.WQq(e,t[s]);return i.lKK(1/t.length,e)})}}is.className="Average",i.JFn.registerClass(is);function Kc(n){return Array.isArray(n)?new is({}).apply(n):new is(n)}class rs extends tn{constructor(t){super(t)}mergeFunction(t){return(0,i.DZQ)(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=i.PhQ(e,t[s]);return e})}}rs.className="Maximum",i.JFn.registerClass(rs);function Gc(n){return Array.isArray(n)?new rs({}).apply(n):new rs(n)}class os extends tn{constructor(t){super(t)}mergeFunction(t){return(0,i.DZQ)(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=i.BpO(e,t[s]);return e})}}os.className="Minimum",i.JFn.registerClass(os);function Vc(n){return Array.isArray(n)?new os({}).apply(n):new os(n)}class as extends tn{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new m("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const r of t)if(r!=null){e=!1;break}if(e)return;const s=[];for(let r=0;r<t.length;++r){const o=t[r].slice();o.splice(this.axis,1);let a=!1;for(const l of s)if(i.ZSL.arraysEqual(l,o)){a=!0;break}a||s.push(o)}if(s.length>1)throw new m("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return(0,i.DZQ)(()=>$n(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new m("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const o of e.slice(1)){if(s[r]==null||o[r]==null){s[r]=null;break}s[r]+=o[r]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new m("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new m("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new m(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return i.DZQ(()=>{let s=!0;if(e.forEach(a=>{if(a!=null){s=!1;return}}),s)return null;const r=[];for(let a=0;a<t.length;++a)e[a]==null?r.push(i.wgE(i.P61(t[a]),"bool")):e[a].rank<t[a].rank?r.push(i.UG6(e[a],-1)):r.push(e[a]);const o=i.xWs(r,this.axis);return i.Q7R(o,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}as.className="Concatenate",i.JFn.registerClass(as);function jc(n){return Array.isArray(n)?new as({}).apply(n):new as(n)}function ls(n,t){for(;n<0;)n+=t;return n}function Il(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new Z("batchDot is not implemented for tensors of 4D or higher rank yet");if(i.ZSL.assert(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),i.ZSL.assert(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new Z("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=t.shape.length;e==null&&(e=[s-1,r-2]);const o=e;return i.DZQ(()=>{let a;if(s>r){a=s-r;const c=[];for(let d=0;d<a;++d)c.push(1);t=i.tQQ(t,t.shape.concat(c))}else if(r>s){a=r-s;const c=[];for(let d=0;d<a;++d)c.push(1);n=i.tQQ(n,n.shape.concat(c))}else a=0;let l;if(n.shape.length===2&&t.shape.length===2)o[0]===o[1]?l=i.czq(i.lKK(n,t),o[0]):l=i.czq(i.lKK(i.mgz(n,[1,0]),t),o[1]);else{const c=o[0]!==n.shape.length-1,d=o[1]===t.shape.length-1;l=i.NoW(n,t,c,d)}if(a>0){let c;s>r?c=s+r-3:c=s-1;const d=[];for(let y=c;y<c+a;++y)d.push(y);l=i.r2V(l,d)}return l.shape.length===1&&(l=i.UG6(l,1)),l})}class dr extends tn{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){i.ZSL.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new Z("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);if(e[r[0]]!==s[r[1]])throw new m(`Dimension incompatibility: ${e[r[0]]} !== ${s[r[1]]}`)}mergeFunction(t){if(t.length!==2)throw new m(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],r;return Array.isArray(this.axes)?r=this.axes.map((o,a)=>ls(o,t[a].shape.length)):r=[ls(this.axes,e.shape.length),ls(this.axes,s.shape.length)],this.normalize&&(e=Es(e,r[0]),s=Es(s,r[1])),Il(e,s,r)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[ls(this.axes,t.length),ls(this.axes,e.length)],s}computeOutputShape(t){i.ZSL.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new Z("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(e,s);e.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const o=e.concat(s);return o.length===1&&o.push(1),o}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}dr.className="Dot",i.JFn.registerClass(dr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class pr extends Y{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t);return Ve(()=>(0,i.WQq)(dn(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}pr.className="GaussianNoise",i.JFn.registerClass(pr);class fr extends Y{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e);const s=G(t);return this.rate>0&&this.rate<1?Ve(()=>{const o=Math.sqrt(this.rate/(1-this.rate));return(0,i.lKK)(s,dn(s.shape,1,o))},()=>s,e.training||!1):s})}}fr.className="GaussianDropout",i.JFn.registerClass(fr);class mr extends Y{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||G(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return(0,i.DZQ)(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Ve(()=>{const o=G(t),c=-1.6732632423543772*1.0507009873554805;let d=(0,i.DQN)((0,i.YeY)(s),this.rate);d=Zt(d,"float32");const y=((1-this.rate)*(1+this.rate*c**2))**-.5,S=-y*c*this.rate,k=(0,i.WQq)((0,i.lKK)(o,d),(0,i.lKK)((0,i.WQq)(d,-1),c));return(0,i.WQq)((0,i.lKK)(k,y),S)},()=>G(t),e.training||!1)}return t})}}mr.className="AlphaDropout",i.JFn.registerClass(mr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function us(n,t,e,s,r,o=.001){let a;if(n.rank===2)a=i.BFc(n,t,e,s,r,o);else if(n.rank===3)a=i.kSi(n,t,e,s,r,o);else if(n.rank===4)a=i.T5N(n,t,e,s,r,o);else throw new Z(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return a}function zl(n,t,e,s,r=.001){return(0,i.DZQ)(()=>{const o=i.Clk(n,s),a=o.mean,l=o.variance;return[us(n,a,l,e,t,r),a,l]})}function Dl(n,t,e,s,r=.001){return(0,i.DZQ)(()=>{const o=i.Clk(n,s),a=o.mean,l=o.variance,c=[];for(const L of Wt(0,n.rank))s.indexOf(L)!==-1?c.push(1):c.push(n.shape[L]);const d=(0,i.tQQ)(a,c),y=(0,i.tQQ)(l,c),S=t==null?null:(0,i.tQQ)(t,c),k=e==null?null:(0,i.tQQ)(e,c);return[us(n,d,y,k,S,r),a,l]})}function Tl(n,t,e,s,r=.001){return i.ZSL.arraysEqual(s.slice().sort(),Wt(0,n.rank-1))?zl(n,t,e,s,r):Dl(n,t,e,s,r)}class gr extends Y{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=yt(t.betaInitializer||"zeros"),this.gammaInitializer=yt(t.gammaInitializer||"ones"),this.movingMeanInitializer=yt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=yt(t.movingVarianceInitializer||"ones"),this.betaConstraint=V(t.betaConstraint),this.gammaConstraint=V(t.gammaConstraint),this.betaRegularizer=St(t.betaRegularizer),this.gammaRegularizer=St(t.gammaRegularizer)}build(t){t=nt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new m(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new At({ndim:t.length,axes:{[e]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return(0,i.DZQ)(()=>{const s=e.training==null?!1:e.training,r=G(t),o=r.shape,a=o.length,l=Wt(0,a),c=this.axis>=0?this.axis:this.axis+a;l.splice(c,1);const d=st(1,a);d[c]=o[c];const y=l.slice();y.sort();const S=!i.ZSL.arraysEqual(y,Wt(0,a).slice(0,a-1)),k=()=>{if(S){const z=(0,i.tQQ)(this.movingMean.read(),d),B=(0,i.tQQ)(this.movingVariance.read(),d),M=this.center?(0,i.tQQ)(this.beta.read(),d):null,P=this.scale?(0,i.tQQ)(this.gamma.read(),d):null;return us(r,z,B,M,P,this.epsilon)}else return us(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return k();const[F,L,D]=Tl(r,this.gamma.read(),this.beta.read(),l,this.epsilon),E=(z,B,M)=>{i.DZQ(()=>{const P=1-M,j=z.read(),ht=i.lKK(i.jbE(j,B),P);z.write(i.jbE(j,ht))})};return E(this.movingMean,L,this.momentum),E(this.movingVariance,D,this.momentum),F})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:bt(this.betaInitializer),gammaInitializer:bt(this.gammaInitializer),movingMeanInitializer:bt(this.movingMeanInitializer),movingVarianceInitializer:bt(this.movingVarianceInitializer),betaRegularizer:ft(this.betaRegularizer),gammaRegularizer:ft(this.gammaRegularizer),betaConstraint:W(this.betaConstraint),gammaConstraint:W(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}gr.className="BatchNormalization",i.JFn.registerClass(gr);class yr extends Y{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=yt(t.betaInitializer||"zeros"),this.gammaInitializer=yt(t.gammaInitializer||"ones"),this.betaRegularizer=St(t.betaRegularizer),this.gammaRegularizer=St(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=nt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let o=0;o<this.axis.length;++o)this.axis[o]<0&&(this.axis[o]+=e);for(const o of this.axis)if(o<0||o>=e)throw new Error(`Invalid axis: ${o}`);if(this.axis.length!==Dt(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(o=>t[o]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(t,e){const s=G(t),r=s.shape,o=r.length;return(0,i.DZQ)(()=>{let{mean:l,variance:c}=(0,i.Clk)(s,this.axis,!0);const d=st(1,o);for(const D of this.axis)d[D]=r[D];const y=D=>D!=null&&D.shape.length!==o?i.tQQ(D,d):D;let S=this.scale?y(this.gamma.read()):null,k=this.center?y(this.beta.read()):null;const F=[],L=[];for(let D=0;D<o;++D)this.axis.indexOf(D)!==-1?(F.push(r[D]),L.push(1)):(F.push(1),L.push(r[D]));return l=i.Vsq(l,F),c=i.Vsq(c,F),S!=null&&(S=i.Vsq(S,L)),k!=null&&(k=i.Vsq(k,L)),us(s,l,c,k,S,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:bt(this.betaInitializer),gammaInitializer:bt(this.gammaInitializer),betaRegularizer:ft(this.betaRegularizer),gammaRegularizer:ft(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}yr.className="LayerNormalization",i.JFn.registerClass(yr);var El,Ll,sa;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Jc(n,t){return Ll(()=>{if(n.rank!==3)throw new sa(`temporalPadding expects input tensor to be 3-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[1,1]),t.length!==2)throw new sa(`temporalPadding expects input padding pattern to be a length-2 array, but received a length-${t.length} array.`);const e=[[0,0],t,[0,0]];return El.pad(n,e)})}function Fl(n,t,e){return(0,i.DZQ)(()=>{if(n.rank!==4)throw new m(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new m("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=w()),e!=="channelsLast"&&e!=="channelsFirst")throw new m(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],i.eVF(n,s)})}class br extends Y{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?w():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new m(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new m(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new m(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new At({ndim:4})]}computeOutputShape(t){t=nt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return(0,i.DZQ)(()=>Fl(G(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}br.className="ZeroPadding2D",i.JFn.registerClass(br);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Gs(n,t,e,s,r,o){return(0,i.DZQ)(()=>{gt(r),ze(o),Nt(s),e==null&&(e=[1,1]),s==null&&(s="valid"),r==null&&(r=w()),o==null&&(o="max"),n=Gi(n,r);let a;const l=s==="same"?"same":"valid";return o==="max"?a=i.jgi(n,t,e,l):a=i.$jT(n,t,e,l),r==="channelsFirst"&&(a=i.mgz(a,[0,3,1,2])),a})}function ia(n,t,e,s,r,o){return(0,i.DZQ)(()=>{gt(r),ze(o),Nt(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),r==null&&(r=w()),o==null&&(o="max"),n=Ho(n,r);let a;const l=s==="same"?"same":"valid";return o==="max"?a=i.NYV(n,t,e,l):a=i.sub(n,t,e,l),r==="channelsFirst"&&(a=i.mgz(a,[0,4,1,2,3])),a})}class ra extends Y{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new m(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(pt(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new m(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);pt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,Nt(this.padding),this.inputSpec=[new At({ndim:3})]}computeOutputShape(t){t=nt(t);const e=ae(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return(0,i.DZQ)(()=>{this.invokeCallHook(t,e),t=Te(G(t),2);const s=this.poolingFunction(G(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return i.r2V(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class wr extends ra{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),Gs(t,e,s,r,o,"max")}}wr.className="MaxPooling1D",i.JFn.registerClass(wr);class vr extends ra{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),Gs(t,e,s,r,o,"avg")}}vr.className="AveragePooling1D",i.JFn.registerClass(vr);class oa extends Y{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new m(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];pt(this.poolSize,"poolSize"),pt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,gt(this.dataFormat),Nt(this.padding),this.inputSpec=[new At({ndim:4})]}computeOutputShape(t){t=nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=ae(e,this.poolSize[0],this.padding,this.strides[0]),s=ae(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return(0,i.DZQ)(()=>(this.invokeCallHook(t,e),this.poolingFunction(G(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Sr extends oa{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),Gs(t,e,s,r,o,"max")}}Sr.className="MaxPooling2D",i.JFn.registerClass(Sr);class xr extends oa{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),Gs(t,e,s,r,o,"avg")}}xr.className="AveragePooling2D",i.JFn.registerClass(xr);class aa extends Y{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new m(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];pt(this.poolSize,"poolSize"),pt(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,gt(this.dataFormat),Nt(this.padding),this.inputSpec=[new At({ndim:5})]}computeOutputShape(t){t=nt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],r=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=ae(e,this.poolSize[0],this.padding,this.strides[0]),s=ae(s,this.poolSize[1],this.padding,this.strides[1]),r=ae(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,r]:[t[0],e,s,r,t[4]]}call(t,e){return(0,i.DZQ)(()=>(this.invokeCallHook(t,e),this.poolingFunction(G(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Ar extends aa{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),ia(t,e,s,r,o,"max")}}Ar.className="MaxPooling3D",i.JFn.registerClass(Ar);class Cr extends aa{constructor(t){super(t)}poolingFunction(t,e,s,r,o){return gt(o),Nt(r),ia(t,e,s,r,o,"avg")}}Cr.className="AveragePooling3D",i.JFn.registerClass(Cr);class la extends Y{constructor(t){super(t),this.inputSpec=[new At({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new Z}}class kr extends la{constructor(t){super(t||{})}call(t,e){return(0,i.DZQ)(()=>{const s=G(t);return i.i2o(s,1)})}}kr.className="GlobalAveragePooling1D",i.JFn.registerClass(kr);class Nr extends la{constructor(t){super(t||{})}call(t,e){return(0,i.DZQ)(()=>{const s=G(t);return i.T9B(s,1)})}}Nr.className="GlobalMaxPooling1D",i.JFn.registerClass(Nr);class ua extends Y{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,gt(this.dataFormat),this.inputSpec=[new At({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new Z}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class Ir extends ua{call(t,e){return(0,i.DZQ)(()=>{const s=G(t);return this.dataFormat==="channelsLast"?i.i2o(s,[1,2]):i.i2o(s,[2,3])})}}Ir.className="GlobalAveragePooling2D",i.JFn.registerClass(Ir);class zr extends ua{call(t,e){return(0,i.DZQ)(()=>{const s=G(t);return this.dataFormat==="channelsLast"?i.T9B(s,[1,2]):i.T9B(s,[2,3])})}}zr.className="GlobalMaxPooling2D",i.JFn.registerClass(zr);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class ca extends Y{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const r=e.layer,o=ie(r,s);delete e.layer;const a={layer:o};return Object.assign(a,e),new t(a)}}class Dr extends ca{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=nt(t),t.length<3)throw new m(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=nt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),r=t[1];return[s[0],r].concat(s.slice(1))}call(t,e){return(0,i.DZQ)(()=>(t=G(t),ea((a,l)=>[G(this.layer.call(a,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}Dr.className="TimeDistributed",i.JFn.registerClass(Dr);function Rl(n){te(jt,"BidirectionalMergeMode",n)}const $l="concat";class Tr extends ca{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=ie(s),e.goBackwards=e.goBackwards!==!0;const r={};if(r.className=t.layer.getClassName(),r.config=e,this.backwardLayer=ie(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?$l:t.mergeMode,Rl(this.mergeMode),t.weights)throw new Z("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,r,o;return this.returnState&&(o=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(o).concat(o.slice()):[s].concat(o).concat(o.slice()):et(r)}apply(t,e){let s=e==null?null:e.initialState,r=e==null?null:e.constants;e==null&&(e={});const o=ta(t,s,r,this.numConstants);if(t=o.inputs,s=o.initialState,r=o.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&r==null)return super.apply(t,e);const a=[],l=[];if(s!=null){const d=s.length;if(d%2>0)throw new m("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,a.push(...s);const y=s.map(S=>new At({shape:S.shape}));this.forwardLayer.stateSpec=y.slice(0,d/2),this.backwardLayer.stateSpec=y.slice(d/2),l.push(...y)}if(r!=null)throw new Z("Support for constants in Bidirectional layers is not implemented yet.");const c=a[0]instanceof Pt;for(const d of a)if(d instanceof Pt!==c)throw new m("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(c){const d=[t].concat(a),y=this.inputSpec.concat(l),S=this.inputSpec;this.inputSpec=y;const k=super.apply(d,e);return this.inputSpec=S,k}else return super.apply(t,e)}call(t,e){return(0,i.DZQ)(()=>{const s=e.initialState;let r,o;if(s==null)r=this.forwardLayer.call(t,e),o=this.backwardLayer.call(t,e);else{const c=s.slice(0,s.length/2),d=s.slice(s.length/2);r=this.forwardLayer.call(t,Object.assign(e,{initialState:c})),o=this.backwardLayer.call(t,Object.assign(e,{initialState:d}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(o.slice(1))),r=r[0],o=o[0]),this.returnSequences&&(o=i.BEg(o,1));let l;return this.mergeMode==="concat"?l=$n([r,o]):this.mergeMode==="sum"?l=i.WQq(r,o):this.mergeMode==="ave"?l=i.lKK(.5,i.WQq(r,o)):this.mergeMode==="mul"?l=i.lKK(r,o):this.mergeMode==null&&(l=[r,o]),this.returnState?this.mergeMode==null?l.concat(a):[l].concat(a):l})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){ee(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),ee(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const o=this.forwardLayer.states.map(a=>null);return Array.isArray(s)?s.concat(o).concat(o):[s].concat(o).concat(o)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=ie(e.layer);if(delete e.layer,e.numConstants!=null)throw new Z("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=e;return r.layer=s,new t(r)}}Tr.className="Bidirectional",i.JFn.registerClass(Tr);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Er extends Y{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return(0,i.DZQ)(()=>(t=G(t),t.dtype!=="float32"&&(t=Zt(t,"float32")),(0,i.WQq)((0,i.lKK)(t,this.scale),this.offset)))}}Er.className="Rescaling",i.JFn.registerClass(Er);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const{resizeBilinear:Ol,cropAndResize:Ml}=i.Slp;class Lr extends Y{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,r,o,a,l,c){return(0,i.DZQ)(()=>{let d,y=!1;const S=e/a,k=s/l,F=(r+e)/a,L=(o+s)/l,D=[S,k,F,L],E=[];t.rank===3?(y=!0,d=(0,i.t$z)([t])):d=t;for(let P=0;P<d.shape[0];P++)E.push(D);const R=(0,i.OEK)(E,[E.length,4]),z=(0,i.y17)(0,E.length,1,"int32"),M=Ml(d,R,z,[r,o],"nearest");return Zt(y?G((0,i.K$i)(M)):M,c)})}upsize(t,e,s,r){return(0,i.DZQ)(()=>{const o=Ol(t,[e,s]);return Zt(o,r)})}call(t,e){return(0,i.DZQ)(()=>{const s=G(t),r=s.dtype,o=s.shape,a=o[o.length-3],l=o[o.length-2];let c=0;a!==this.height&&(c=Math.floor((a-this.height)/2));let d=0;return l!==this.width&&(d=Math.floor((l-this.width)/2),d===0&&(d=1)),c>=0&&d>=0?this.centerCrop(s,c,d,this.height,this.width,a,l,r):this.upsize(t,this.height,this.width,r)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=nt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}Lr.className="CenterCrop",i.JFn.registerClass(Lr);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Bl(n,t,e,s){let r=G(n);if(r.dtype!=="int32"&&(r=Zt(r,"int32")),t==="int")return r;const o=r.shape;if(r.rank===0&&(r=(0,i.UG6)(r,-1)),t==="oneHot"&&r.shape[r.shape.length-1]!==1&&(r=(0,i.UG6)(r,-1)),r.rank>2)throw new m(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${o} which would result in output rank ${r.rank}.`);const a=["multiHot","oneHot"].includes(t),l=r;let c;if(typeof s<"u"&&t==="count"?c=(0,i.aOp)(l,s,e,a):c=(0,i.aOp)(l,[],e,a),t!=="tfIdf")return c;if(s)return(0,i.lKK)(c,s);throw new m("When outputMode is 'tfIdf', weights must be provided.")}/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class Fr extends Y{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=nt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return(0,i.DZQ)(()=>{t=G(t),t.dtype!=="int32"&&(t=Zt(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new m(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=G(e.countWeights)}const r=(0,i.T9B)(t),o=(0,i.jkA)(t),a=(0,i.rhj)(this.numTokens,r).bufferSync().get(0),l=(0,i.DQN)(o,0).bufferSync().get(0);if(!(a&&l))throw new m(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return Bl(t,this.outputMode,this.numTokens,s)})}}Fr.className="CategoryEncoding",i.JFn.registerClass(Fr);/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Wl=["bilinear","nearest"],ha=new Set(Wl);class Rr extends Y{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(ha.has(t.interpolation))this.interpolation=t.interpolation;else throw new m(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=nt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return(0,i.DZQ)(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return i.Slp.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return i.Slp.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...ha]} are supported`)})}}Rr.className="Resizing",i.JFn.registerClass(Rr);/**
 * @license
 * Copyright 2023 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class da{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}da.className="RandomSeed";/**
 * @license
 * Copyright 2023 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class pa extends Y{constructor(t){super(t),this.randomGenerator=new da(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}pa.className="BaseRandomLayer";/**
 * @license
 * Copyright 2023 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */const Pl=["bilinear","nearest"],fa=new Set(Pl);class $r extends pa{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new m(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new m(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new m(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(fa.has(s))this.interpolation=s;else throw new m(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=nt(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return(0,i.DZQ)(()=>{const s=G(t);this.imgHeight=s.shape[s.shape.length-3];const r=s.shape[s.shape.length-2];this.widthFactor=(0,i.YeY)([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let o=this.widthFactor.dataSync()[0]*r;o=Math.round(o);const a=[this.imgHeight,o];switch(this.interpolation){case"bilinear":return i.Slp.resizeBilinear(t,a);case"nearest":return i.Slp.resizeNearestNeighbor(t,a);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...fa]} are supported`)}})}}$r.className="RandomWidth",i.JFn.registerClass($r);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function Ql(n){return new Le(n)}function Zl(n){return new Pi(n)}function Ul(n){return new Mi(n)}function Kl(n){return new Bi(n)}function Gl(n){return new Wi(n)}function Vl(n){return new Zi(n)}function jl(n){return new Qi(n)}function Jl(n){return new Xn(n)}function _l(n){return new In(n)}function Hl(n){return new ji(n)}function ql(n){return new zn(n)}function Yl(n){return new Ji(n)}function Xl(n){return new _i(n)}function tu(n){return new Hi(n)}function eu(n){return new qi(n)}function nu(n){return new Yi(n)}function su(n){return new or(n)}function iu(n){return new ir(n)}function ru(n){return new Ks(n)}function ou(n){return new sr(n)}function au(n){return new rr(n)}function lu(n){return new ar(n)}function uu(n){return new lr(n)}function cu(n){return new ur(n)}function hu(n){return new hr(n)}function du(n){return new ns(n)}function pu(n){return new is(n)}function fu(n){return new as(n)}function mu(n){return new rs(n)}function gu(n){return new os(n)}function yu(n){return new ss(n)}function bu(n){return new dr(n)}function wu(n){return new gr(n)}function vu(n){return new yr(n)}function Su(n){return new br(n)}function Or(n){return new vr(n)}function xu(n){return Or(n)}function Au(n){return Or(n)}function Mr(n){return new xr(n)}function Cu(n){return Mr(n)}function ku(n){return Mr(n)}function Br(n){return new Cr(n)}function Nu(n){return Br(n)}function Iu(n){return Br(n)}function zu(n){return new kr(n)}function Du(n){return new Ir(n)}function ma(n){return new Nr(n)}function ga(n){return new zr(n)}function ya(n){return new wr(n)}function ba(n){return new Sr(n)}function Tu(n){return new Ar(n)}function Eu(n){return new tr(n)}function Lu(n){return new Qs(n)}function Fu(n){return new er(n)}function Ru(n){return new es(n)}function $u(n){return new Xi(n)}function Ou(n){return new Ps(n)}function Mu(n){return new nr(n)}function Bu(n){return new Us(n)}function Wu(n){return new le(n)}function Pu(n){return new Zs(n)}function Qu(n){return new Tr(n)}function Zu(n){return new Dr(n)}const Uu=ma,Ku=ga,Gu=ya,Vu=ba;function ju(n){return new pr(n)}function Ju(n){return new fr(n)}function _u(n){return new mr(n)}function Hu(n){return new cr(n)}function qu(n){return new Er(n)}function Yu(n){return new Lr(n)}function Xu(n){return new Rr(n)}function tc(n){return new Fr(n)}function ec(n){return new $r(n)}function nc(n,t){return Ci(n,t)}function sc(n,t){return fo(n,t)}function ic(n,t){return mo(n,t)}function rc(n,t){return ki(n,t)}function oc(n,t){return Ni(n,t)}function ac(n,t){return po(n,t)}function lc(n,t){return Qa(n,t)}function uc(n,t){return xi(n,t)}function cc(n,t){return Ls(n,t)}function hc(n,t){return Cn(n,t)}function dc(n,t){return Cn(n,t)}function pc(n,t){return Cn(n,t)}function fc(n,t){return Ye(n,t)}function mc(n,t){return Ye(n,t)}function gc(n,t){return Ye(n,t)}function yc(n,t){return Za(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */function bc(n){return new Yn(n)}function wc(n){return Al(n)}function vc(n){return Cl(n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */class wa extends An{constructor(){super(...arguments),this.model=null}setModel(t){if(!(t instanceof xe))throw new Error("model must be a LayersModel, not some other Container");this.model=t}}function Vs(n,t){return n<t}function va(n,t){return n>t}class Sa extends wa{constructor(t){if(super(),t==null&&(t={}),t.restoreBestWeights)throw new Z("restoreBestWeights = True is not implemented in EarlyStopping yet.");this.monitor=t.monitor||"val_loss",this.minDelta=Math.abs(t.minDelta||0),this.patience=t.patience||0,this.verbose=t.verbose||0,this.mode=t.mode||"auto",this.baseline=t.baseline,["auto","min","max"].indexOf(this.mode)===-1&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode="auto"),this.mode==="min"?this.monitorFunc=Vs:this.mode==="max"?this.monitorFunc=va:this.monitor.indexOf("acc")!==-1?this.monitorFunc=va:this.monitorFunc=Vs,this.monitorFunc===Vs&&(this.minDelta*=-1)}async onTrainBegin(t){this.wait=0,this.stoppedEpoch=0,this.baseline!=null?this.best=this.baseline:this.best=this.monitorFunc===Vs?1/0:-1/0}async onEpochEnd(t,e){await Fe(e);const s=this.getMonitorValue(e);s!=null&&(this.monitorFunc(s-this.minDelta,this.best)?(this.best=s,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=t,this.model.stopTraining=!0)))}async onTrainEnd(t){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(t){t==null&&(t={});const e=t[this.monitor];return e==null&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(t)}`),e}}function Sc(n){return new Sa(n)}const xc={earlyStopping:Sc};/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */}}]);
