script = document.createElement('script');
script.textContent="var __My_buffer,__My_buffer_Texture,__My_buffer_normal,__My_buffer_flag,__My_index;console.log("+'"'+"load content"+'"'+"),Math.random=function(){return"+'"'+"my random"+'"'+"},myfunc=function(){return"+'"'+"call myfunc"+'"'+"},console.log("+'"'+"end load content"+'"'+"),console.log(Math.random()),console.log(myfunc());var __VertexPositionAttributeLocation1,__VertexPositionAttributeLocation2,__VertexSize,__VertexType,__VertexNomalize,__VertexStride,__VertexOffset,Point_Number,Test_Point_number,__Program,__Program_1,__x_add,__y_add,__Error_flag,Active_Number,__tex,__texture_flag,__My_index_flag=0,__VertexPositionAttributeLocation1_flag=1,__PointBuffer=[],__Test_pointBuffer=[],__ColorBuffer=[],__Tem_pointbuffer=[],__Tem_colorbuffer=[],__ActiveBuffer_vertex=[],__ActiveBuffer_vertex_result=[],__ActiveBuffer_vertex_texture=[],__ActiveBuffer_vertex_normal=[],__ActiveBuffer_frag=[],__Tem_Buffer=[],__ColorFlag=0,__Mpro_flag=0,__Matrix0=new Float32Array(16),__Matrix1=new Float32Array(16),__Mworld_flag=0,__Mworld=new Float32Array(16),__Mview_flag=0,__Mview=new Float32Array(16),__Drawnumber=1;function devide_draw(e,_,r,t,f,o){for(var i=[],a=[],n=[],u=[],c=[],v=[],l=r.length/9,x=Math.floor((e+_)/2),A=0,B=0,g=0;g<l;g++){if(!(r[9*g]>=x&&r[9*g+3]>=x&&r[9*g+6]>=x)){A++;for(var m=0;m<9;m++)i=i.concat(r[9*g+m]);for(m=0;m<6;m++)a=a.concat(t[6*g+m]);if(4==__My_buffer_flag)for(m=0;m<9;m++)n=n.concat(f[9*g+m])}if(!(r[9*g]<=x&&r[9*g+3]<=x&&r[9*g+6]<=x)){B++;for(m=0;m<9;m++)u=u.concat(r[9*g+m]);for(m=0;m<6;m++)c=c.concat(t[6*g+m]);if(4==__My_buffer_flag)for(m=0;m<9;m++)v=v.concat(f[9*g+m])}}if(A<=55){var y=[2*e/255-1,-1,2*x/255-1,-1,2*e/255-1,1,2*e/255-1,1,2*x/255-1,-1,2*x/255-1,1],s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.my_glbufferData(o.ARRAY_BUFFER,new Float32Array(y),o.STATIC_DRAW),o.my_vertexAttribPointer(__VertexPositionAttributeLocation1,2,__VertexType,__VertexNomalize,2*Float32Array.BYTES_PER_ELEMENT,0),o.my_useProgram(__Program);var M=o.getUniformLocation(__Program,"+'"'+"tri_point"+'"'+"),b=o.getUniformLocation(__Program,"+'"'+"text_point"+'"'+");if(o.uniform3fv(M,i),o.uniform2fv(b,a),4==__My_buffer_flag){var d=o.getUniformLocation(__Program,"+'"'+"nor_point"+'"'+");o.uniform3fv(d,n)}o.drawArrays(o.TRIANGLES,0,6)}else{if(x==_)return void console.log("+'"'+"left"+'"'+",e,"+'"'+"right"+'"'+",_,"+'"'+"number"+'"'+",A);devide_draw(e,x,i,a,n,o)}if(B<=55){y=[2*x/255-1,-1,2*_/255-1,-1,2*x/255-1,1,2*x/255-1,1,2*_/255-1,-1,2*_/255-1,1],s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.my_glbufferData(o.ARRAY_BUFFER,new Float32Array(y),o.STATIC_DRAW),o.my_vertexAttribPointer(__VertexPositionAttributeLocation1,2,__VertexType,__VertexNomalize,2*Float32Array.BYTES_PER_ELEMENT,0),o.my_useProgram(__Program);M=o.getUniformLocation(__Program,"+'"'+"tri_point"+'"'+"),b=o.getUniformLocation(__Program,"+'"'+"text_point"+'"'+");if(o.uniform3fv(M,u),o.uniform2fv(b,c),4==__My_buffer_flag){d=o.getUniformLocation(__Program,"+'"'+"nor_point"+'"'+");o.uniform3fv(d,v)}o.drawArrays(o.TRIANGLES,0,6)}else{if(x==e)return void console.log("+'"'+"left"+'"'+",e,"+'"'+"right"+'"'+",_,"+'"'+"number"+'"'+",B);devide_draw(x,_,u,c,v,o)}}function tri_3(e){var _=__ActiveBuffer_vertex[e*__VertexSize],r=__ActiveBuffer_vertex[e*__VertexSize+1],t=__ActiveBuffer_vertex[e*__VertexSize+2],f=__ActiveBuffer_vertex[e*__VertexSize+3],o=__ActiveBuffer_vertex[e*__VertexSize+4],i=__ActiveBuffer_vertex[e*__VertexSize+5],a=__ActiveBuffer_vertex[e*__VertexSize+6],n=__ActiveBuffer_vertex[e*__VertexSize+7],u=__ActiveBuffer_vertex[e*__VertexSize+8];if(1==__ColorFlag)var c=__ActiveBuffer_frag[3*e],v=__ActiveBuffer_frag[3*e+1],l=__ActiveBuffer_frag[3*e+2],x=__ActiveBuffer_frag[3*e+3],A=__ActiveBuffer_frag[3*e+4],B=__ActiveBuffer_frag[3*e+5],g=__ActiveBuffer_frag[3*e+6],m=__ActiveBuffer_frag[3*e+7],y=__ActiveBuffer_frag[3*e+8];var s=min(_,f,a),M=max(_,f,a),b=min(r,o,n),d=max(r,o,n);_==s&&_--,_==M&&_++,f==s&&f--,f==M&&f++,a==s&&a--,a==M&&a++,r==b&&r--,r==d&&r++,o==b&&o--,o==d&&o++,n==b&&n--,n==d&&n++;for(e=s;e<=M;e++)for(var P=b;P<=d;P++)if(judgment(e,P,_,r,f,o,a,n)){var R=(n-r)*(u-t)-(i-t)*(n-r),h=(a-_)*(i-t)-(f-_)*(u-t),T=(f-_)*(n-r)-(a-_)*(o-r),p=-1*(R*_+h*r+T*t),w=Math.floor(-1*(R*e+h*P+p)/T);if(__PointBuffer=(__PointBuffer=(__PointBuffer=__PointBuffer.concat(e)).concat(P)).concat(w),1==__ColorFlag){var V=Math.pow(.9,Math.sqrt((_-e)*(_-e)+(r-P)*(r-P))),E=Math.pow(.9,Math.sqrt((f-e)*(f-e)+(o-P)*(o-P))),F=Math.pow(.9,Math.sqrt((a-e)*(a-e)+(n-P)*(n-P))),L=V+E+F,S=V/L,N=E/L,z=F/L,U=Math.floor(S*c+N*x+z*g),D=Math.floor(S*v+N*A+z*m),C=Math.floor(S*l+N*B+z*y);__ColorBuffer=(__ColorBuffer=(__ColorBuffer=__ColorBuffer.concat(U)).concat(D)).concat(C)}}}function max(e,_,r){return e=(e=e>_?e:_)>r?e:r}function min(e,_,r){return e=(e=e<_?e:_)<r?e:r}function PinAB(e,_,r,t,f,o){var i,a;return a=e*o-f*_,0>(i=e*t-r*_)&&0<a||0<i&&0>a?1:0}function judgment(e,_,r,t,f,o,i,a){return!!(PinAB(e-r,_-t,f-r,o-t,i-r,a-t)&&PinAB(e-f,_-o,i-f,a-o,r-f,t-o)&&PinAB(e-i,_-a,f-i,o-a,r-i,t-a))}getCanvas=function(e){var _=$("+'"'+"#"+'"'+"+e);return _[0]||$("+'"'+"#test_canvases"+'"'+").append("+'"'+"<canvas id='"+'"'+"+e+"+'"'+"' width='256' height='256'></canvas>"+'"'+"),$("+'"'+"#"+'"'+"+e)[0]},rewrite=function(e){return __texture_flag=1,__My_index_flag=0,__PointBuffer=[],__ColorBuffer=[],__Tem_pointbuffer=[],__Tem_colorbuffer=[],__ActiveBuffer_vertex=[],__ActiveBuffer_frag=[],__My_buffer_flag=1,e.my_glbufferData=e.__proto__.bufferData,e.bufferData=function(_,r,t){0!=__texture_flag?_==e.ELEMENT_ARRAY_BUFFER?(__My_index=r,__My_index_flag=1,this.my_glbufferData(_,r,t)):(1==__My_buffer_flag?(__My_buffer=r,__My_buffer_flag++):2==__My_buffer_flag?(__My_buffer_Texture=r,__My_buffer_flag++):(__My_buffer_normal=r,__My_buffer_flag++),this.my_glbufferData(_,r,t)):_==e.ELEMENT_ARRAY_BUFFER?(__My_index=r,__My_index_flag=1,this.my_glbufferData(_,r,t)):(__My_buffer=r,this.my_glbufferData(_,r,t))},e.my_vertexAttribPointer=e.__proto__.vertexAttribPointer,e.vertexAttribPointer=function(e,_,r,t,f,o){if(0!=__texture_flag){if(0==o?(1==__VertexPositionAttributeLocation1_flag&&(__VertexPositionAttributeLocation1=e,__VertexPositionAttributeLocation1_flag=2),__VertexSize=_):__VertexPositionAttributeLocation2=e,__VertexType=r,__VertexNomalize=t,__VertexStride=f,__VertexOffset=o,f/=4,o/=4,1==__My_index_flag){for(i=[],a=0;a<__My_index.length;a++)for(n=3*__My_index[a];n<3*(__My_index[a]+1);n++)i=i.concat(__My_buffer[n]);__My_buffer=i,i=[];for(a=0;a<__My_index.length;a++)for(n=2*__My_index[a];n<2*(__My_index[a]+1);n++)i=i.concat(__My_buffer_Texture[n]);if(__My_buffer_Texture=i,4==__My_buffer_flag){i=[];for(a=0;a<__My_index.length;a++)for(n=3*__My_index[a];n<3*(__My_index[a]+1);n++)i=i.concat(__My_buffer_normal[n]);__My_buffer_normal=i}__My_index_flag=0}0==f&&(f=_),__ActiveBuffer_vertex=__My_buffer,__ActiveBuffer_vertex_texture=__My_buffer_Texture,4==__My_buffer_flag&&(__ActiveBuffer_vertex_normal=__My_buffer_normal)}else{if(0==o?(__VertexPositionAttributeLocation1=e,__VertexSize=_):__VertexPositionAttributeLocation2=e,__VertexType=r,__VertexNomalize=t,__VertexStride=f,__VertexOffset=o,f/=4,o/=4,1==__My_index_flag){for(var i=[],a=0;a<__My_index.length;a++)for(var n=__My_index[a]*f;n<(__My_index[a]+1)*f;n++)i=i.concat(__My_buffer[n]);__My_buffer=i,__My_index_flag=0}if(0==f&&(f=_),0==__VertexOffset)for(var a=0;(a+1)*f<=__My_buffer.length;a++)for(var n=a*f+o;n<a*f+o+_;n++)__ActiveBuffer_vertex=__ActiveBuffer_vertex.concat(__My_buffer[n]);else{__ColorFlag=1;for(var a=0;(a+1)*f<=__My_buffer.length;a++)for(var n=a*f+o;n<a*f+o+_;n++)__ActiveBuffer_frag=__ActiveBuffer_frag.concat(Math.round(1e3*__My_buffer[n])/1e3)}}},e.my_useProgram=e.__proto__.useProgram,e.useProgram=function(e){__Program=e,this.my_useProgram(e)},AAA=function(e,_,r,t){BBB(e,0,_)},BBB=function(_,r,t){if(_==e.LINE_STRIP){for(var f=[],o=0;o<__ActiveBuffer_vertex.length;o++)__ActiveBuffer_vertex[o]=o%3!=2?Math.floor(256*(__ActiveBuffer_vertex[o]+1)/2):-1*__ActiveBuffer_vertex[o];for(o=0;o<t-1;o++)f=(f=(f=(f=(f=(f=f.concat(__ActiveBuffer_vertex[3*o])).concat(__ActiveBuffer_vertex[3*o+1])).concat(__ActiveBuffer_vertex[3*o+2])).concat(__ActiveBuffer_vertex[3*o+3])).concat(__ActiveBuffer_vertex[3*o+4])).concat(__ActiveBuffer_vertex[3*o+5]);for(o=3*t;o<__ActiveBuffer_vertex.length;o++)f=f.concat(__ActiveBuffer_vertex[o]);var i=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.my_glbufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.my_vertexAttribPointer(__VertexPositionAttributeLocation1,2,__VertexType,__VertexNomalize,2*Float32Array.BYTES_PER_ELEMENT,0),e.my_useProgram(__Program);var n=e.getUniformLocation(__Program,"+'"'+"line_point"+'"'+");return e.uniform3fv(n,f),void e.drawArrays(e.TRIANGLES,0,6)}if(0==__texture_flag){__ActiveBuffer_vertex=my_m4.vec_max_mul(__ActiveBuffer_vertex,__Mworld);for(o=0;o<__ActiveBuffer_vertex.length;o++)__ActiveBuffer_vertex[o]=o%3!=2?Math.floor(256*(__ActiveBuffer_vertex[o]+1)/2):-1*__ActiveBuffer_vertex[o];i=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.my_glbufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.my_vertexAttribPointer(__VertexPositionAttributeLocation1,2,__VertexType,__VertexNomalize,2*Float32Array.BYTES_PER_ELEMENT,0),e.my_useProgram(__Program);n=e.getUniformLocation(__Program,"+'"'+"tri_point"+'"'+");var u=e.getUniformLocation(__Program,"+'"'+"tri_color"+'"'+");return e.uniform3fv(n,__ActiveBuffer_vertex),e.uniform3fv(u,__ActiveBuffer_frag),void e.drawArrays(e.TRIANGLES,0,6)}__ActiveBuffer_vertex_result=my_m4.vec_max_mul(__ActiveBuffer_vertex,__Mworld);for(o=0;o<__ActiveBuffer_vertex_result.length;o++)__ActiveBuffer_vertex_result[o]=o%3!=2?Math.floor(256*(__ActiveBuffer_vertex_result[o]+1)/2):-1*__ActiveBuffer_vertex_result[o];for(o=0;o<__ActiveBuffer_vertex_texture.length;o++)__ActiveBuffer_vertex_texture[o]=Math.floor(255*__ActiveBuffer_vertex_texture[o]);i=[0,-1,1,-1,0,1,0,1,1,-1,1,1];var c,v,l,x,A,B,g=[],m=[],y=[];for(o=0;o<__My_index.length;o+=3)c=__ActiveBuffer_vertex_result[3*o],v=__ActiveBuffer_vertex_result[3*o+1],__ActiveBuffer_vertex_result[3*o+2],l=__ActiveBuffer_vertex_result[3*o+3],x=__ActiveBuffer_vertex_result[3*o+4],__ActiveBuffer_vertex_result[3*o+5],A=__ActiveBuffer_vertex_result[3*o+6],B=__ActiveBuffer_vertex_result[3*o+7],__ActiveBuffer_vertex_result[3*o+8],(l-c)*(B-v)-(A-c)*(x-v)>0&&(g=(g=(g=(g=(g=(g=(g=(g=(g=g.concat(__ActiveBuffer_vertex_result[3*o])).concat(__ActiveBuffer_vertex_result[3*o+1])).concat(__ActiveBuffer_vertex_result[3*o+2])).concat(__ActiveBuffer_vertex_result[3*o+3])).concat(__ActiveBuffer_vertex_result[3*o+4])).concat(__ActiveBuffer_vertex_result[3*o+5])).concat(__ActiveBuffer_vertex_result[3*o+6])).concat(__ActiveBuffer_vertex_result[3*o+7])).concat(__ActiveBuffer_vertex_result[3*o+8]),m=(m=(m=(m=(m=(m=m.concat(__ActiveBuffer_vertex_texture[2*o])).concat(__ActiveBuffer_vertex_texture[2*o+1])).concat(__ActiveBuffer_vertex_texture[2*o+2])).concat(__ActiveBuffer_vertex_texture[2*o+3])).concat(__ActiveBuffer_vertex_texture[2*o+4])).concat(__ActiveBuffer_vertex_texture[2*o+5]),4==__My_buffer_flag&&(y=(y=(y=(y=(y=(y=(y=(y=(y=y.concat(__ActiveBuffer_vertex_normal[3*o])).concat(__ActiveBuffer_vertex_normal[3*o+1])).concat(__ActiveBuffer_vertex_normal[3*o+2])).concat(__ActiveBuffer_vertex_normal[3*o+3])).concat(__ActiveBuffer_vertex_normal[3*o+4])).concat(__ActiveBuffer_vertex_normal[3*o+5])).concat(__ActiveBuffer_vertex_normal[3*o+6])).concat(__ActiveBuffer_vertex_normal[3*o+7])).concat(__ActiveBuffer_vertex_normal[3*o+8])));console.log("+'"'+"tri_result"+'"'+",g),console.log("+'"'+"tri_texture"+'"'+",m),devide_draw(0,255,g,m,y,e)},e};var my_m4={projection:function(e,_,r){return[2/e,0,0,0,0,-2/_,0,0,0,0,2/r,0,-1,1,0,1]},vec_max_mul:function(e,_){for(var r=[],t=.1*1.5,f=_[0],o=_[1],i=_[2],a=_[3],n=_[4],u=_[5],c=_[6],v=_[7],l=_[8],x=_[9],A=_[10],B=_[11],g=(_[12],_[13],_[14],_[15],0);g<e.length;g+=3)r=(r=(r=r.concat((e[g]*f+e[g+1]*o+e[g+2]*i+a)*t)).concat((e[g]*n+e[g+1]*u+e[g+2]*c+v)*t)).concat((e[g]*l+e[g+1]*x+e[g+2]*A+B)*t);return r},multiply:function(e,_){var r=e[0],t=e[1],f=e[2],o=e[3],i=e[4],a=e[5],n=e[6],u=e[7],c=e[8],v=e[9],l=e[10],x=e[11],A=e[12],B=e[13],g=e[14],m=e[15],y=_[0],s=_[1],M=_[2],b=_[3],d=_[4],P=_[5],R=_[6],h=_[7],T=_[8],p=_[9],w=_[10],V=_[11],E=_[12],F=_[13],L=_[14],S=_[15];return[y*r+s*i+M*c+b*A,y*t+s*a+M*v+b*B,y*f+s*n+M*l+b*g,y*o+s*u+M*x+b*m,d*r+P*i+R*c+h*A,d*t+P*a+R*v+h*B,d*f+P*n+R*l+h*g,d*o+P*u+R*x+h*m,T*r+p*i+w*c+V*A,T*t+p*a+w*v+V*B,T*f+p*n+w*l+V*g,T*o+p*u+w*x+V*m,E*r+F*i+L*c+S*A,E*t+F*a+L*v+S*B,E*f+F*n+L*l+S*g,E*o+F*u+L*x+S*m]}},my_m3={projection:function(e,_){return[2/e,0,0,0,-2/_,0,-1,1,1]}};getGLAA=function(e){for(var _=null,r=0;r<4&&!(_=e.getContext(["+'"'+"webgl"+'"'+","+'"'+"experimental-webgl"+'"'+","+'"'+"moz-webgl"+'"'+","+'"'+"webkit-3d"+'"'+"][r],{antialias:!0,preserveDrawingBuffer:!0,willReadFrequently:!1,depth:!0}));++r);return _||alert("+'"'+"Your browser does not support WebGL"+'"'+"),_=rewrite(_)},getGL=function(e){for(var _=null,r=0;r<4&&!(_=e.getContext(["+'"'+"webgl"+'"'+","+'"'+"experimental-webgl"+'"'+","+'"'+"moz-webgl"+'"'+","+'"'+"webkit-3d"+'"'+"][r],{antialias:!1,preserveDrawingBuffer:!0,willReadFrequently:!1,depth:!0}));++r);return _||alert("+'"'+"Your browser does not support WebGL"+'"'+"),_=rewrite(_)},computeKernelWeight=function(e){var _=e.reduce(function(e,_){return e+_});return _<=0?1:_};var loadTextResource=function(e,_,r){var t=new XMLHttpRequest;t.open("+'"'+"GET"+'"'+",e+"+'"'+"?please-dont-cache="+'"'+"+Math.random(),!0),t.onload=function(){t.status<200||t.status>299?_("+'"'+"Error: HTTP Status "+'"'+"+t.status+"+'"'+" on resource "+'"'+"+e):_(null,t.responseText,r)},t.send()},loadImage=function(e,_,r){var t=new Image;t.onload=function(){_(null,t,r)},t.src=e},loadJSONResource=function(e,_,r){loadTextResource(e,function(e,r,t){if(e)_(e);else try{_(null,JSON.parse(r),t)}catch(e){_(e)}},r)};";
document.documentElement.appendChild(script);
