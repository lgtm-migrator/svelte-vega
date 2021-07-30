(globalThis.webpackChunksvelte_vega_demo=globalThis.webpackChunksvelte_vega_demo||[]).push([[179],{57685:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(66809).configure)([__webpack_require__(68870)],module,!1)},16374:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});var client_api=__webpack_require__(14419),esm=__webpack_require__(87537),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,client_api.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},46113:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(66809)},83049:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingSize:()=>ChangingSize,Demo:()=>Demo,Height300:()=>Height300,Width300:()=>Width300,default:()=>SvelteVegaDemo_stories});var internal=__webpack_require__(85799),VegaEmbed_svelte=__webpack_require__(70684);function create_fragment(ctx){let vegaembed,updating_view,current;function vegaembed_view_binding(value){ctx[6](value)}let vegaembed_props={spec:ctx[1],data:ctx[2],signalListeners:ctx[3],options:ctx[4]};return void 0!==ctx[0]&&(vegaembed_props.view=ctx[0]),vegaembed=new VegaEmbed_svelte.Z({props:vegaembed_props}),internal.Vn.push((()=>(0,internal.ak)(vegaembed,"view",vegaembed_view_binding))),vegaembed.$on("onNewView",ctx[7]),vegaembed.$on("onError",ctx[8]),{c(){(0,internal.YC)(vegaembed.$$.fragment)},m(target,anchor){(0,internal.ye)(vegaembed,target,anchor),current=!0},p(ctx,[dirty]){const vegaembed_changes={};2&dirty&&(vegaembed_changes.spec=ctx[1]),4&dirty&&(vegaembed_changes.data=ctx[2]),8&dirty&&(vegaembed_changes.signalListeners=ctx[3]),16&dirty&&(vegaembed_changes.options=ctx[4]),!updating_view&&1&dirty&&(updating_view=!0,vegaembed_changes.view=ctx[0],(0,internal.hj)((()=>updating_view=!1))),vegaembed.$set(vegaembed_changes)},i(local){current||((0,internal.Ui)(vegaembed.$$.fragment,local),current=!0)},o(local){(0,internal.et)(vegaembed.$$.fragment,local),current=!1},d(detaching){(0,internal.vp)(vegaembed,detaching)}}}function instance($$self,$$props,$$invalidate){let vegaOptions,{spec}=$$props,{options={}}=$$props,{data={}}=$$props,{signalListeners={}}=$$props,{view}=$$props;return $$self.$$set=$$props=>{"spec"in $$props&&$$invalidate(1,spec=$$props.spec),"options"in $$props&&$$invalidate(5,options=$$props.options),"data"in $$props&&$$invalidate(2,data=$$props.data),"signalListeners"in $$props&&$$invalidate(3,signalListeners=$$props.signalListeners),"view"in $$props&&$$invalidate(0,view=$$props.view)},$$self.$$.update=()=>{32&$$self.$$.dirty&&$$invalidate(4,vegaOptions=Object.assign(Object.assign({},options),{mode:"vega"}))},[view,spec,data,signalListeners,vegaOptions,options,function vegaembed_view_binding(value){view=value,$$invalidate(0,view)},function onNewView_handler(event){internal.cK.call(this,$$self,event)},function onError_handler(event){internal.cK.call(this,$$self,event)}]}class Vega extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,instance,create_fragment,internal.N8,{spec:1,options:5,data:2,signalListeners:3,view:0})}}const Vega_svelte=Vega;var data1=__webpack_require__(3787);const spec1={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{update:{x:{scale:"xscale",field:"category",offset:1},width:{scale:"xscale",band:1,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0},fill:{value:"steelblue"}},hover:{fill:{value:"red"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]},spec2={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{update:{x:{scale:"xscale",field:"category",offset:10},width:{scale:"xscale",band:.5,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0},fill:{value:"green"}},hover:{fill:{value:"yellow"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]};var GitHub=__webpack_require__(10748);function add_css(target){(0,internal.qO)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function SvelteVegaDemo_svelte_create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,t6,button2,img,img_src_value,t7,div1,t9,vega,t10,div3,t11,code1,t12,current,mounted,dispose;return vega=new Vega_svelte({props:{data:ctx[2],spec:ctx[3],options:ctx[0],signalListeners:ctx[4]}}),{c(){main=(0,internal.bG)("main"),div2=(0,internal.bG)("div"),div0=(0,internal.bG)("div"),h3=(0,internal.bG)("h3"),h3.innerHTML="<code>&lt;Vega&gt;</code> Svelte Component",t2=(0,internal.Dh)(),button0=(0,internal.bG)("button"),button0.textContent="Toggle Spec",t4=(0,internal.Dh)(),button1=(0,internal.bG)("button"),button1.textContent="Update Data",t6=(0,internal.Dh)(),button2=(0,internal.bG)("button"),img=(0,internal.bG)("img"),t7=(0,internal.Dh)(),div1=(0,internal.bG)("div"),div1.textContent="View on GitHub",t9=(0,internal.fL)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YC)(vega.$$.fragment),t10=(0,internal.Dh)(),div3=(0,internal.bG)("div"),t11=(0,internal.fL)("Hover info: "),code1=(0,internal.bG)("code"),t12=(0,internal.fL)(ctx[1]),(0,internal.Lj)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Lj)(button1,"class","common-button svelte-1uhxadl"),(0,internal.Lj)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn)(img.src,img_src_value=GitHub)||(0,internal.Lj)(img,"src",img_src_value),(0,internal.Lj)(img,"alt","github mark"),(0,internal.Lj)(img,"class","svelte-1uhxadl"),(0,internal.Lj)(button2,"class","github-button svelte-1uhxadl"),(0,internal.Lj)(div2,"class","head svelte-1uhxadl"),(0,internal.Lj)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$T)(target,main,anchor),(0,internal.R3)(main,div2),(0,internal.R3)(div2,div0),(0,internal.R3)(div0,h3),(0,internal.R3)(div0,t2),(0,internal.R3)(div0,button0),(0,internal.R3)(div0,t4),(0,internal.R3)(div0,button1),(0,internal.R3)(div2,t6),(0,internal.R3)(div2,button2),(0,internal.R3)(button2,img),(0,internal.R3)(button2,t7),(0,internal.R3)(button2,div1),(0,internal.R3)(main,t9),(0,internal.ye)(vega,main,null),(0,internal.R3)(main,t10),(0,internal.R3)(main,div3),(0,internal.R3)(div3,t11),(0,internal.R3)(div3,code1),(0,internal.R3)(code1,t12),current=!0,mounted||(dispose=[(0,internal.oL)(button0,"click",ctx[5]),(0,internal.oL)(button1,"click",ctx[6]),(0,internal.oL)(button2,"click",ctx[7])],mounted=!0)},p(ctx,[dirty]){const vega_changes={};4&dirty&&(vega_changes.data=ctx[2]),8&dirty&&(vega_changes.spec=ctx[3]),1&dirty&&(vega_changes.options=ctx[0]),vega.$set(vega_changes),(!current||2&dirty)&&(0,internal.rT)(t12,ctx[1])},i(local){current||((0,internal.Ui)(vega.$$.fragment,local),current=!0)},o(local){(0,internal.et)(vega.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.og)(main),(0,internal.vp)(vega),mounted=!1,(0,internal.j7)(dispose)}}}function SvelteVegaDemo_svelte_instance($$self,$$props,$$invalidate){let{options={}}=$$props,info="",data=data1,spec=spec1;const handlers={tooltip:(...args)=>$$invalidate(1,info=JSON.stringify(args))};return $$self.$$set=$$props=>{"options"in $$props&&$$invalidate(0,options=$$props.options)},[options,info,data,spec,handlers,function handleToggleSpec(){$$invalidate(3,spec=spec===spec1?spec2:spec1)},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(2,data={table})},()=>window.open("https://github.com/vega/svelte-vega")]}class SvelteVegaDemo extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,SvelteVegaDemo_svelte_instance,SvelteVegaDemo_svelte_create_fragment,internal.N8,{options:0},add_css)}}const SvelteVegaDemo_svelte=SvelteVegaDemo;var svelte=__webpack_require__(98515);function ChangingDimensionDemo_svelte_add_css(target){(0,internal.qO)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function ChangingDimensionDemo_svelte_create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,t6,button2,img,img_src_value,t7,div1,t9,vega,t10,div3,t11,code1,t12,current,mounted,dispose;return vega=new Vega_svelte({props:{data:ctx[1],spec:ctx[2],options:ctx[3],signalListeners:ctx[4]}}),{c(){main=(0,internal.bG)("main"),div2=(0,internal.bG)("div"),div0=(0,internal.bG)("div"),h3=(0,internal.bG)("h3"),h3.innerHTML="<code>&lt;Vega&gt;</code> Svelte Component",t2=(0,internal.Dh)(),button0=(0,internal.bG)("button"),button0.textContent="Toggle Spec",t4=(0,internal.Dh)(),button1=(0,internal.bG)("button"),button1.textContent="Update Data",t6=(0,internal.Dh)(),button2=(0,internal.bG)("button"),img=(0,internal.bG)("img"),t7=(0,internal.Dh)(),div1=(0,internal.bG)("div"),div1.textContent="View on GitHub",t9=(0,internal.fL)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YC)(vega.$$.fragment),t10=(0,internal.Dh)(),div3=(0,internal.bG)("div"),t11=(0,internal.fL)("Hover info: "),code1=(0,internal.bG)("code"),t12=(0,internal.fL)(ctx[0]),(0,internal.Lj)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Lj)(button1,"class","common-button svelte-1uhxadl"),(0,internal.Lj)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn)(img.src,img_src_value=GitHub)||(0,internal.Lj)(img,"src",img_src_value),(0,internal.Lj)(img,"alt","github mark"),(0,internal.Lj)(img,"class","svelte-1uhxadl"),(0,internal.Lj)(button2,"class","github-button svelte-1uhxadl"),(0,internal.Lj)(div2,"class","head svelte-1uhxadl"),(0,internal.Lj)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$T)(target,main,anchor),(0,internal.R3)(main,div2),(0,internal.R3)(div2,div0),(0,internal.R3)(div0,h3),(0,internal.R3)(div0,t2),(0,internal.R3)(div0,button0),(0,internal.R3)(div0,t4),(0,internal.R3)(div0,button1),(0,internal.R3)(div2,t6),(0,internal.R3)(div2,button2),(0,internal.R3)(button2,img),(0,internal.R3)(button2,t7),(0,internal.R3)(button2,div1),(0,internal.R3)(main,t9),(0,internal.ye)(vega,main,null),(0,internal.R3)(main,t10),(0,internal.R3)(main,div3),(0,internal.R3)(div3,t11),(0,internal.R3)(div3,code1),(0,internal.R3)(code1,t12),current=!0,mounted||(dispose=[(0,internal.oL)(button0,"click",ctx[5]),(0,internal.oL)(button1,"click",ctx[6]),(0,internal.oL)(button2,"click",ctx[10])],mounted=!0)},p(ctx,[dirty]){const vega_changes={};2&dirty&&(vega_changes.data=ctx[1]),4&dirty&&(vega_changes.spec=ctx[2]),vega.$set(vega_changes),(!current||1&dirty)&&(0,internal.rT)(t12,ctx[0])},i(local){current||((0,internal.Ui)(vega.$$.fragment,local),current=!0)},o(local){(0,internal.et)(vega.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.og)(main),(0,internal.vp)(vega),mounted=!1,(0,internal.j7)(dispose)}}}function ChangingDimensionDemo_svelte_instance($$self,$$props,$$invalidate){let spec,interval,grow=!0,info="",data=data1,width=100,height=100,selectedSpec=spec1;const handlers={tooltip:(...args)=>$$invalidate(0,info=JSON.stringify(args))};(0,svelte.H3)((()=>{interval=setInterval((()=>{$$invalidate(7,width=(spec.width?spec.width:0)+(grow?1:-1)),$$invalidate(8,height=(spec.height?spec.height:0)+(grow?1:-1)),grow=grow&&(spec.width?spec.width:0)<400||!grow&&100===(spec.width?spec.width:0)}),10)})),(0,svelte.ev)((()=>{clearInterval(interval)}));return $$self.$$.update=()=>{896&$$self.$$.dirty&&$$invalidate(2,spec=Object.assign(Object.assign({},selectedSpec),{width,height}))},[info,data,spec,{padding:20},handlers,function handleToggleSpec(){$$invalidate(9,selectedSpec=selectedSpec===spec1?spec2:spec1)},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(1,data={table})},width,height,selectedSpec,()=>window.open("https://github.com/vega/svelte-vega")]}class ChangingDimensionDemo extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,ChangingDimensionDemo_svelte_instance,ChangingDimensionDemo_svelte_create_fragment,internal.N8,{},ChangingDimensionDemo_svelte_add_css)}}const ChangingDimensionDemo_svelte=ChangingDimensionDemo;function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const SvelteVegaDemo_stories={title:"svelte-vega/Vega",component:SvelteVegaDemo_svelte,argTypes:{}};var Template=function(_ref){var args=_extends({},_ref);return{Component:SvelteVegaDemo_svelte,props:args}},Demo=Template.bind({}),Width300=Template.bind({});Width300.args={options:{width:300}};var Height300=Template.bind({});Height300.args={options:{height:300}};var ChangingSize=function(_ref2){var args=_extends({},_ref2);return{Component:ChangingDimensionDemo_svelte,props:args}}.bind({})},65411:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,default:()=>SvelteVegaLiteDemo_stories});var internal=__webpack_require__(85799),VegaEmbed_svelte=__webpack_require__(70684);function create_fragment(ctx){let vegaembed,updating_view,current;function vegaembed_view_binding(value){ctx[6](value)}let vegaembed_props={spec:ctx[1],data:ctx[2],signalListeners:ctx[3],options:ctx[4]};return void 0!==ctx[0]&&(vegaembed_props.view=ctx[0]),vegaembed=new VegaEmbed_svelte.Z({props:vegaembed_props}),internal.Vn.push((()=>(0,internal.ak)(vegaembed,"view",vegaembed_view_binding))),vegaembed.$on("onNewView",ctx[7]),vegaembed.$on("onError",ctx[8]),{c(){(0,internal.YC)(vegaembed.$$.fragment)},m(target,anchor){(0,internal.ye)(vegaembed,target,anchor),current=!0},p(ctx,[dirty]){const vegaembed_changes={};2&dirty&&(vegaembed_changes.spec=ctx[1]),4&dirty&&(vegaembed_changes.data=ctx[2]),8&dirty&&(vegaembed_changes.signalListeners=ctx[3]),16&dirty&&(vegaembed_changes.options=ctx[4]),!updating_view&&1&dirty&&(updating_view=!0,vegaembed_changes.view=ctx[0],(0,internal.hj)((()=>updating_view=!1))),vegaembed.$set(vegaembed_changes)},i(local){current||((0,internal.Ui)(vegaembed.$$.fragment,local),current=!0)},o(local){(0,internal.et)(vegaembed.$$.fragment,local),current=!1},d(detaching){(0,internal.vp)(vegaembed,detaching)}}}function instance($$self,$$props,$$invalidate){let vegaLiteOptions,{view}=$$props,{spec}=$$props,{options={}}=$$props,{data={}}=$$props,{signalListeners={}}=$$props;return $$self.$$set=$$props=>{"view"in $$props&&$$invalidate(0,view=$$props.view),"spec"in $$props&&$$invalidate(1,spec=$$props.spec),"options"in $$props&&$$invalidate(5,options=$$props.options),"data"in $$props&&$$invalidate(2,data=$$props.data),"signalListeners"in $$props&&$$invalidate(3,signalListeners=$$props.signalListeners)},$$self.$$.update=()=>{32&$$self.$$.dirty&&$$invalidate(4,vegaLiteOptions=Object.assign(Object.assign({},options),{mode:"vega-lite"}))},[view,spec,data,signalListeners,vegaLiteOptions,options,function vegaembed_view_binding(value){view=value,$$invalidate(0,view)},function onNewView_handler(event){internal.cK.call(this,$$self,event)},function onError_handler(event){internal.cK.call(this,$$self,event)}]}class VegaLite extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,instance,create_fragment,internal.N8,{view:0,spec:1,options:5,data:2,signalListeners:3})}}const VegaLite_svelte=VegaLite;var data1=__webpack_require__(3787),GitHub=__webpack_require__(10748);function add_css(target){(0,internal.qO)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function create_if_block(ctx){let p,t;return{c(){p=(0,internal.bG)("p"),t=(0,internal.fL)(ctx[1])},m(target,anchor){(0,internal.$T)(target,p,anchor),(0,internal.R3)(p,t)},p(ctx,dirty){2&dirty&&(0,internal.rT)(t,ctx[1])},d(detaching){detaching&&(0,internal.og)(p)}}}function SvelteVegaLiteDemo_svelte_create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,img,img_src_value,t5,div1,t7,vegalite,t8,current,mounted,dispose;vegalite=new VegaLite_svelte({props:{data:ctx[2],spec:ctx[3],options:ctx[0],signalListeners:{select:ctx[5]}}});let if_block=""!==ctx[1]&&create_if_block(ctx);return{c(){main=(0,internal.bG)("main"),div2=(0,internal.bG)("div"),div0=(0,internal.bG)("div"),h3=(0,internal.bG)("h3"),h3.innerHTML="<code>&lt;VegaLite&gt;</code> Svelte Component",t2=(0,internal.Dh)(),button0=(0,internal.bG)("button"),button0.textContent="Update Data",t4=(0,internal.Dh)(),button1=(0,internal.bG)("button"),img=(0,internal.bG)("img"),t5=(0,internal.Dh)(),div1=(0,internal.bG)("div"),div1.textContent="View on GitHub",t7=(0,internal.fL)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YC)(vegalite.$$.fragment),t8=(0,internal.Dh)(),if_block&&if_block.c(),(0,internal.Lj)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Lj)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn)(img.src,img_src_value=GitHub)||(0,internal.Lj)(img,"src",img_src_value),(0,internal.Lj)(img,"alt","github mark"),(0,internal.Lj)(img,"class","svelte-1uhxadl"),(0,internal.Lj)(button1,"class","github-button svelte-1uhxadl"),(0,internal.Lj)(div2,"class","head svelte-1uhxadl"),(0,internal.Lj)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$T)(target,main,anchor),(0,internal.R3)(main,div2),(0,internal.R3)(div2,div0),(0,internal.R3)(div0,h3),(0,internal.R3)(div0,t2),(0,internal.R3)(div0,button0),(0,internal.R3)(div2,t4),(0,internal.R3)(div2,button1),(0,internal.R3)(button1,img),(0,internal.R3)(button1,t5),(0,internal.R3)(button1,div1),(0,internal.R3)(main,t7),(0,internal.ye)(vegalite,main,null),(0,internal.R3)(main,t8),if_block&&if_block.m(main,null),current=!0,mounted||(dispose=[(0,internal.oL)(button0,"click",ctx[4]),(0,internal.oL)(button1,"click",ctx[6])],mounted=!0)},p(ctx,[dirty]){const vegalite_changes={};4&dirty&&(vegalite_changes.data=ctx[2]),1&dirty&&(vegalite_changes.options=ctx[0]),vegalite.$set(vegalite_changes),""!==ctx[1]?if_block?if_block.p(ctx,dirty):(if_block=create_if_block(ctx),if_block.c(),if_block.m(main,null)):if_block&&(if_block.d(1),if_block=null)},i(local){current||((0,internal.Ui)(vegalite.$$.fragment,local),current=!0)},o(local){(0,internal.et)(vegalite.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.og)(main),(0,internal.vp)(vegalite),if_block&&if_block.d(),mounted=!1,(0,internal.j7)(dispose)}}}function SvelteVegaLiteDemo_svelte_instance($$self,$$props,$$invalidate){let{options={}}=$$props,selected="",data=data1;return $$self.$$set=$$props=>{"options"in $$props&&$$invalidate(0,options=$$props.options)},[options,selected,data,{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A simple bar chart with embedded data.",data:{name:"table"},params:[{name:"select",select:{type:"point",encodings:["x"]}}],mark:{type:"bar",cursor:"pointer"},encoding:{x:{field:"category",type:"nominal"},y:{field:"amount",type:"quantitative"},fillOpacity:{condition:{param:"select",value:1},value:.3}}},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(2,data={table})},function handleSelection(...args){void 0!==args[1].category?$$invalidate(1,selected=`selected column(s): ${args[1].category}`):$$invalidate(1,selected="")},()=>window.open("https://github.com/vega/svelte-vega")]}class SvelteVegaLiteDemo extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,SvelteVegaLiteDemo_svelte_instance,SvelteVegaLiteDemo_svelte_create_fragment,internal.N8,{options:0},add_css)}}const SvelteVegaLiteDemo_svelte=SvelteVegaLiteDemo,SvelteVegaLiteDemo_stories={title:"svelte-vega/VegaLite",component:SvelteVegaLiteDemo_svelte,argTypes:{}};var Demo=function(){return{Component:SvelteVegaLiteDemo_svelte}}.bind({})},70684:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>VegaEmbed_svelte});var internal=__webpack_require__(85799),svelte=__webpack_require__(98515),vega_embed_module=__webpack_require__(72583),WIDTH_HEIGHT=new Set(["width","height"]),fast_deep_equal=__webpack_require__(69378),fast_deep_equal_default=__webpack_require__.n(fast_deep_equal);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function shallowEqual(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},ignore=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Set,aKeys=Object.keys(a),bKeys=Object.keys(b);return a===b||aKeys.length===bKeys.length&&aKeys.filter((function(k){return!ignore.has(k)})).every((function(key){return a[key]===b[key]}))}function removeSignalListenersFromView(view,signalListeners){var signalNames=Object.keys(signalListeners);return signalNames.forEach((function(signalName){try{view.removeSignalListener(signalName,signalListeners[signalName])}catch(error){console.warn("Cannot remove invalid signal listener.",error)}})),signalNames.length>0}function addSignalListenersToView(view,signalListeners){var signalNames=Object.keys(signalListeners);return signalNames.forEach((function(signalName){try{view.addSignalListener(signalName,signalListeners[signalName])}catch(error){console.warn("Cannot add invalid signal listener.",error)}})),signalNames.length>0}function computeSpecChanges(newSpec,oldSpec){if(newSpec===oldSpec)return!1;var changes={width:!1,height:!1,isExpensive:!1},hasHeight="height"in newSpec||"height"in oldSpec;return!("width"in newSpec||"width"in oldSpec)||"width"in newSpec&&"width"in oldSpec&&newSpec.width===oldSpec.width||("width"in newSpec&&"number"==typeof newSpec.width?changes.width=newSpec.width:changes.isExpensive=!0),!hasHeight||"height"in newSpec&&"height"in oldSpec&&newSpec.height===oldSpec.height||("height"in newSpec&&"number"==typeof newSpec.height?changes.height=newSpec.height:changes.isExpensive=!0),_toConsumableArray(function getUniqueFieldNames(objects){var fields=new Set;return objects.forEach((function(o){Object.keys(o).forEach((function(field){fields.add(field)}))})),fields}([newSpec,oldSpec])).filter((function(f){return"width"!==f&&"height"!==f})).some((function(field){return!(field in newSpec)||!(field in oldSpec)||!fast_deep_equal_default()(newSpec[field],oldSpec[field])}))&&(changes.isExpensive=!0),!(!1===changes.width&&!1===changes.height&&!changes.isExpensive)&&changes}function combineSpecWithDimension(spec,options){var width=options.width,height=options.height;return void 0!==width&&void 0!==height?Object.assign(Object.assign({},spec),{width,height}):void 0!==width?Object.assign(Object.assign({},spec),{width}):void 0!==height?Object.assign(Object.assign({},spec),{height}):spec}function create_fragment(ctx){let div;return{c(){div=(0,internal.bG)("div")},m(target,anchor){(0,internal.$T)(target,div,anchor),ctx[11](div)},p:internal.ZT,i:internal.ZT,o:internal.ZT,d(detaching){detaching&&(0,internal.og)(div),ctx[11](null)}}}function instance($$self,$$props,$$invalidate){var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};let{options}=$$props,{spec}=$$props,{view}=$$props,{signalListeners={}}=$$props,{data={}}=$$props;const dispatch=(0,svelte.x)();let result,chartContainer,prevOptions={},prevSignalListeners={},prevSpec={},prevData={};function createView(){return __awaiter(this,void 0,void 0,(function*(){clearView();try{$$invalidate(6,result=yield(0,vega_embed_module.ZP)(chartContainer,spec,options)),$$invalidate(1,view=result.view),addSignalListenersToView(view,signalListeners)&&view.runAsync(),function onNewView(view){update(),dispatch("onNewView",{view})}(view)}catch(e){!function handleError(error){dispatch("onError",{error}),console.warn(error)}(e)}}))}function clearView(){result&&(result.finalize(),$$invalidate(6,result=void 0),$$invalidate(1,view=void 0))}function update(){return __awaiter(this,void 0,void 0,(function*(){data&&Object.keys(data).length>0&&void 0!==result&&($$invalidate(1,view=result.view),function updateMultipleDatasetsInView(view,data){Object.keys(data).forEach((function(name){var value=data[name];value&&(value&&"[object Function]"==={}.toString.call(value)?value(view.data(name)):view.change(name,vega_embed_module.OU.changeset().remove((function(){return!0})).insert(value)))}))}(view,data),yield view.resize().runAsync())}))}return(0,svelte.ev)((()=>{clearView()})),$$self.$$set=$$props=>{"options"in $$props&&$$invalidate(2,options=$$props.options),"spec"in $$props&&$$invalidate(3,spec=$$props.spec),"view"in $$props&&$$invalidate(1,view=$$props.view),"signalListeners"in $$props&&$$invalidate(4,signalListeners=$$props.signalListeners),"data"in $$props&&$$invalidate(5,data=$$props.data)},$$self.$$.update=()=>{if(1056&$$self.$$.dirty&&(shallowEqual(data,prevData)||update(),$$invalidate(10,prevData=data)),991&$$self.$$.dirty&&void 0!==chartContainer){if(shallowEqual(options,prevOptions,WIDTH_HEIGHT)){const specChanges=computeSpecChanges(combineSpecWithDimension(spec,options),combineSpecWithDimension(prevSpec,prevOptions)),newSignalListeners=signalListeners,oldSignalListeners=prevSignalListeners;if(specChanges){if(specChanges.isExpensive)createView();else if(void 0!==result){const areSignalListenersChanged=!shallowEqual(newSignalListeners,oldSignalListeners);$$invalidate(1,view=result.view),!1!==specChanges.width&&view.width(specChanges.width),!1!==specChanges.height&&view.height(specChanges.height),areSignalListenersChanged&&(oldSignalListeners&&removeSignalListenersFromView(view,oldSignalListeners),newSignalListeners&&addSignalListenersToView(view,newSignalListeners)),view.runAsync()}}else shallowEqual(newSignalListeners,oldSignalListeners)||void 0===result||($$invalidate(1,view=result.view),oldSignalListeners&&removeSignalListenersFromView(view,oldSignalListeners),newSignalListeners&&addSignalListenersToView(view,newSignalListeners),view.runAsync())}else createView();$$invalidate(7,prevOptions=options),$$invalidate(8,prevSignalListeners=signalListeners),$$invalidate(9,prevSpec=spec)}},[chartContainer,view,options,spec,signalListeners,data,result,prevOptions,prevSignalListeners,prevSpec,prevData,function div_binding($$value){internal.Vn[$$value?"unshift":"push"]((()=>{chartContainer=$$value,$$invalidate(0,chartContainer)}))}]}class VegaEmbed extends internal.f_{constructor(options){super(),(0,internal.S1)(this,options,instance,create_fragment,internal.N8,{options:2,spec:3,view:1,signalListeners:4,data:5})}}const VegaEmbed_svelte=VegaEmbed},10748:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/GitHub.d8c6d6c9..png"},3787:module=>{"use strict";module.exports=JSON.parse('{"table":[{"category":"A","amount":28},{"category":"B","amount":55},{"category":"C","amount":43},{"category":"D","amount":91},{"category":"E","amount":81},{"category":"F","amount":53},{"category":"G","amount":19},{"category":"H","amount":87}]}')},68870:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./SvelteVegaDemo.stories.js":83049,"./SvelteVegaLiteDemo.stories.js":65411};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=68870},53260:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[534],(()=>(__webpack_exec__(47513),__webpack_exec__(68260),__webpack_exec__(46113),__webpack_exec__(16374),__webpack_exec__(57685))));__webpack_require__.O()}]);