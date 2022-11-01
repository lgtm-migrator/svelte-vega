(globalThis.webpackChunksvelte_vega_demo=globalThis.webpackChunksvelte_vega_demo||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./stories/SvelteVegaDemo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingSize:()=>ChangingSize,Demo:()=>Demo,Height300:()=>Height300,Width300:()=>Width300,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SvelteVegaDemo_stories});var internal=__webpack_require__("../../node_modules/svelte/internal/index.mjs"),Vega_svelte=__webpack_require__("./node_modules/svelte-vega/dist/Vega.svelte"),data1=__webpack_require__("./stories/data1.json");const spec1={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{update:{x:{scale:"xscale",field:"category",offset:1},width:{scale:"xscale",band:1,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0},fill:{value:"steelblue"}},hover:{fill:{value:"red"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]},spec2={$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:200,padding:{left:5,right:5,top:5,bottom:5},data:[{name:"table",values:[{category:"A",amount:28},{category:"B",amount:55},{category:"C",amount:43},{category:"D",amount:91},{category:"E",amount:81},{category:"F",amount:53},{category:"G",amount:19},{category:"H",amount:87}]}],signals:[{name:"tooltip",value:{},on:[{events:"rect:mouseover",update:"datum"},{events:"rect:mouseout",update:"{}"}]}],scales:[{name:"xscale",type:"band",domain:{data:"table",field:"category"},range:"width"},{name:"yscale",domain:{data:"table",field:"amount"},nice:!0,range:"height"}],axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}],marks:[{type:"rect",from:{data:"table"},encode:{update:{x:{scale:"xscale",field:"category",offset:10},width:{scale:"xscale",band:.5,offset:-1},y:{scale:"yscale",field:"amount"},y2:{scale:"yscale",value:0},fill:{value:"green"}},hover:{fill:{value:"yellow"}}}},{type:"text",encode:{enter:{align:{value:"center"},baseline:{value:"bottom"},fill:{value:"#333"}},update:{x:{scale:"xscale",signal:"tooltip.category",band:.5},y:{scale:"yscale",signal:"tooltip.amount",offset:-2},text:{signal:"tooltip.amount"},fillOpacity:[{test:"datum === tooltip",value:0},{value:1}]}}}]};var GitHub=__webpack_require__("./stories/GitHub.png");function add_css(target){(0,internal.qOq)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,t6,button2,img,img_src_value,t7,div1,t9,vega,t10,div3,t11,code1,t12,current,mounted,dispose;return vega=new Vega_svelte.Z({props:{data:ctx[2],spec:ctx[3],options:ctx[0],signalListeners:ctx[4]}}),{c(){main=(0,internal.bGB)("main"),div2=(0,internal.bGB)("div"),div0=(0,internal.bGB)("div"),h3=(0,internal.bGB)("h3"),h3.innerHTML="<code>&lt;Vega&gt;</code> Svelte Component",t2=(0,internal.DhX)(),button0=(0,internal.bGB)("button"),button0.textContent="Toggle Spec",t4=(0,internal.DhX)(),button1=(0,internal.bGB)("button"),button1.textContent="Update Data",t6=(0,internal.DhX)(),button2=(0,internal.bGB)("button"),img=(0,internal.bGB)("img"),t7=(0,internal.DhX)(),div1=(0,internal.bGB)("div"),div1.textContent="View on GitHub",t9=(0,internal.fLW)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YCL)(vega.$$.fragment),t10=(0,internal.DhX)(),div3=(0,internal.bGB)("div"),t11=(0,internal.fLW)("Hover info: "),code1=(0,internal.bGB)("code"),t12=(0,internal.fLW)(ctx[1]),(0,internal.Ljt)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Ljt)(button1,"class","common-button svelte-1uhxadl"),(0,internal.Ljt)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn4)(img.src,img_src_value=GitHub)||(0,internal.Ljt)(img,"src",img_src_value),(0,internal.Ljt)(img,"alt","github mark"),(0,internal.Ljt)(img,"class","svelte-1uhxadl"),(0,internal.Ljt)(button2,"class","github-button svelte-1uhxadl"),(0,internal.Ljt)(div2,"class","head svelte-1uhxadl"),(0,internal.Ljt)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$Tr)(target,main,anchor),(0,internal.R3I)(main,div2),(0,internal.R3I)(div2,div0),(0,internal.R3I)(div0,h3),(0,internal.R3I)(div0,t2),(0,internal.R3I)(div0,button0),(0,internal.R3I)(div0,t4),(0,internal.R3I)(div0,button1),(0,internal.R3I)(div2,t6),(0,internal.R3I)(div2,button2),(0,internal.R3I)(button2,img),(0,internal.R3I)(button2,t7),(0,internal.R3I)(button2,div1),(0,internal.R3I)(main,t9),(0,internal.yef)(vega,main,null),(0,internal.R3I)(main,t10),(0,internal.R3I)(main,div3),(0,internal.R3I)(div3,t11),(0,internal.R3I)(div3,code1),(0,internal.R3I)(code1,t12),current=!0,mounted||(dispose=[(0,internal.oLt)(button0,"click",ctx[5]),(0,internal.oLt)(button1,"click",ctx[6]),(0,internal.oLt)(button2,"click",ctx[7])],mounted=!0)},p(ctx,[dirty]){const vega_changes={};4&dirty&&(vega_changes.data=ctx[2]),8&dirty&&(vega_changes.spec=ctx[3]),1&dirty&&(vega_changes.options=ctx[0]),vega.$set(vega_changes),(!current||2&dirty)&&(0,internal.rTO)(t12,ctx[1])},i(local){current||((0,internal.Ui)(vega.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(vega.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.ogt)(main),(0,internal.vpE)(vega),mounted=!1,(0,internal.j7q)(dispose)}}}function instance($$self,$$props,$$invalidate){let{options={}}=$$props,info="",data=data1,spec=spec1;const handlers={tooltip:(...args)=>$$invalidate(1,info=JSON.stringify(args))};return $$self.$$set=$$props=>{"options"in $$props&&$$invalidate(0,options=$$props.options)},[options,info,data,spec,handlers,function handleToggleSpec(){$$invalidate(3,spec=spec===spec1?spec2:spec1)},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(2,data={table})},()=>window.open("https://github.com/vega/svelte-vega")]}class SvelteVegaDemo extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,instance,create_fragment,internal.N8,{options:0},add_css)}}const SvelteVegaDemo_svelte=SvelteVegaDemo;SvelteVegaDemo.__docgen={version:3,name:"SvelteVegaDemo.svelte",data:[{visibility:"public",description:null,keywords:[],name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var svelte=__webpack_require__("../../node_modules/svelte/index.mjs");function ChangingDimensionDemo_svelte_add_css(target){(0,internal.qOq)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function ChangingDimensionDemo_svelte_create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,t6,button2,img,img_src_value,t7,div1,t9,vega,t10,div3,t11,code1,t12,current,mounted,dispose;return vega=new Vega_svelte.Z({props:{data:ctx[1],spec:ctx[2],options:ctx[3],signalListeners:ctx[4]}}),{c(){main=(0,internal.bGB)("main"),div2=(0,internal.bGB)("div"),div0=(0,internal.bGB)("div"),h3=(0,internal.bGB)("h3"),h3.innerHTML="<code>&lt;Vega&gt;</code> Svelte Component",t2=(0,internal.DhX)(),button0=(0,internal.bGB)("button"),button0.textContent="Toggle Spec",t4=(0,internal.DhX)(),button1=(0,internal.bGB)("button"),button1.textContent="Update Data",t6=(0,internal.DhX)(),button2=(0,internal.bGB)("button"),img=(0,internal.bGB)("img"),t7=(0,internal.DhX)(),div1=(0,internal.bGB)("div"),div1.textContent="View on GitHub",t9=(0,internal.fLW)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YCL)(vega.$$.fragment),t10=(0,internal.DhX)(),div3=(0,internal.bGB)("div"),t11=(0,internal.fLW)("Hover info: "),code1=(0,internal.bGB)("code"),t12=(0,internal.fLW)(ctx[0]),(0,internal.Ljt)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Ljt)(button1,"class","common-button svelte-1uhxadl"),(0,internal.Ljt)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn4)(img.src,img_src_value=GitHub)||(0,internal.Ljt)(img,"src",img_src_value),(0,internal.Ljt)(img,"alt","github mark"),(0,internal.Ljt)(img,"class","svelte-1uhxadl"),(0,internal.Ljt)(button2,"class","github-button svelte-1uhxadl"),(0,internal.Ljt)(div2,"class","head svelte-1uhxadl"),(0,internal.Ljt)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$Tr)(target,main,anchor),(0,internal.R3I)(main,div2),(0,internal.R3I)(div2,div0),(0,internal.R3I)(div0,h3),(0,internal.R3I)(div0,t2),(0,internal.R3I)(div0,button0),(0,internal.R3I)(div0,t4),(0,internal.R3I)(div0,button1),(0,internal.R3I)(div2,t6),(0,internal.R3I)(div2,button2),(0,internal.R3I)(button2,img),(0,internal.R3I)(button2,t7),(0,internal.R3I)(button2,div1),(0,internal.R3I)(main,t9),(0,internal.yef)(vega,main,null),(0,internal.R3I)(main,t10),(0,internal.R3I)(main,div3),(0,internal.R3I)(div3,t11),(0,internal.R3I)(div3,code1),(0,internal.R3I)(code1,t12),current=!0,mounted||(dispose=[(0,internal.oLt)(button0,"click",ctx[5]),(0,internal.oLt)(button1,"click",ctx[6]),(0,internal.oLt)(button2,"click",ctx[10])],mounted=!0)},p(ctx,[dirty]){const vega_changes={};2&dirty&&(vega_changes.data=ctx[1]),4&dirty&&(vega_changes.spec=ctx[2]),vega.$set(vega_changes),(!current||1&dirty)&&(0,internal.rTO)(t12,ctx[0])},i(local){current||((0,internal.Ui)(vega.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(vega.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.ogt)(main),(0,internal.vpE)(vega),mounted=!1,(0,internal.j7q)(dispose)}}}function ChangingDimensionDemo_svelte_instance($$self,$$props,$$invalidate){let spec,interval,grow=!0,info="",data=data1,width=100,height=100,selectedSpec=spec1;const handlers={tooltip:(...args)=>$$invalidate(0,info=JSON.stringify(args))};(0,svelte.H3)((()=>{interval=setInterval((()=>{$$invalidate(7,width=(spec.width?spec.width:0)+(grow?1:-1)),$$invalidate(8,height=(spec.height?spec.height:0)+(grow?1:-1)),grow=grow&&(spec.width?spec.width:0)<400||!grow&&100===(spec.width?spec.width:0)}),10)})),(0,svelte.ev)((()=>{clearInterval(interval)}));return $$self.$$.update=()=>{896&$$self.$$.dirty&&$$invalidate(2,spec=Object.assign(Object.assign({},selectedSpec),{width,height}))},[info,data,spec,{padding:20},handlers,function handleToggleSpec(){$$invalidate(9,selectedSpec=selectedSpec===spec1?spec2:spec1)},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(1,data={table})},width,height,selectedSpec,()=>window.open("https://github.com/vega/svelte-vega")]}class ChangingDimensionDemo extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,ChangingDimensionDemo_svelte_instance,ChangingDimensionDemo_svelte_create_fragment,internal.N8,{},ChangingDimensionDemo_svelte_add_css)}}const ChangingDimensionDemo_svelte=ChangingDimensionDemo;function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}ChangingDimensionDemo.__docgen={version:3,name:"ChangingDimensionDemo.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const SvelteVegaDemo_stories={title:"svelte-vega/Vega",component:SvelteVegaDemo_svelte,argTypes:{}};var Template=function(_ref){var args=_extends({},(_objectDestructuringEmpty(_ref),_ref));return{Component:SvelteVegaDemo_svelte,props:args}},Demo=Template.bind({}),Width300=Template.bind({});Width300.args={options:{width:300}};var Height300=Template.bind({});Height300.args={options:{height:300}};var ChangingSize=function(_ref2){var args=_extends({},(_objectDestructuringEmpty(_ref2),_ref2));return{Component:ChangingDimensionDemo_svelte,props:args}}.bind({}),__namedExportsOrder=["Demo","Width300","Height300","ChangingSize"]},"./stories/SvelteVegaLiteDemo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SvelteVegaLiteDemo_stories});var internal=__webpack_require__("../../node_modules/svelte/internal/index.mjs"),VegaLite_svelte=__webpack_require__("./node_modules/svelte-vega/dist/VegaLite.svelte"),data1=__webpack_require__("./stories/data1.json"),GitHub=__webpack_require__("./stories/GitHub.png");function add_css(target){(0,internal.qOq)(target,"svelte-1uhxadl",'.content.svelte-1uhxadl{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-1uhxadl{display:flex;align-items:center}.head.svelte-1uhxadl{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-1uhxadl:active{background-color:#eee}.common-button.svelte-1uhxadl{display:flex;align-items:center;height:2em;margin-left:0.5em;padding:0.5em;border:1px solid #5382b0;border-radius:5px}.common-button.svelte-1uhxadl:active{background-color:#cce6ff}img.svelte-1uhxadl{height:100%;padding-right:0.5em}button.svelte-1uhxadl{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-1uhxadl:active{color:inherit}')}function create_if_block(ctx){let p,t;return{c(){p=(0,internal.bGB)("p"),t=(0,internal.fLW)(ctx[1])},m(target,anchor){(0,internal.$Tr)(target,p,anchor),(0,internal.R3I)(p,t)},p(ctx,dirty){2&dirty&&(0,internal.rTO)(t,ctx[1])},d(detaching){detaching&&(0,internal.ogt)(p)}}}function create_fragment(ctx){let main,div2,div0,h3,t2,button0,t4,button1,img,img_src_value,t5,div1,t7,vegalite,t8,current,mounted,dispose;vegalite=new VegaLite_svelte.Z({props:{data:ctx[2],spec:ctx[3],options:ctx[0],signalListeners:{select:ctx[5]}}});let if_block=""!==ctx[1]&&create_if_block(ctx);return{c(){main=(0,internal.bGB)("main"),div2=(0,internal.bGB)("div"),div0=(0,internal.bGB)("div"),h3=(0,internal.bGB)("h3"),h3.innerHTML="<code>&lt;VegaLite&gt;</code> Svelte Component",t2=(0,internal.DhX)(),button0=(0,internal.bGB)("button"),button0.textContent="Update Data",t4=(0,internal.DhX)(),button1=(0,internal.bGB)("button"),img=(0,internal.bGB)("img"),t5=(0,internal.DhX)(),div1=(0,internal.bGB)("div"),div1.textContent="View on GitHub",t7=(0,internal.fLW)("\n  Will recompile when spec changes and update when data changes.\n  "),(0,internal.YCL)(vegalite.$$.fragment),t8=(0,internal.DhX)(),if_block&&if_block.c(),(0,internal.Ljt)(button0,"class","common-button svelte-1uhxadl"),(0,internal.Ljt)(div0,"class","row-content svelte-1uhxadl"),(0,internal.Jn4)(img.src,img_src_value=GitHub)||(0,internal.Ljt)(img,"src",img_src_value),(0,internal.Ljt)(img,"alt","github mark"),(0,internal.Ljt)(img,"class","svelte-1uhxadl"),(0,internal.Ljt)(button1,"class","github-button svelte-1uhxadl"),(0,internal.Ljt)(div2,"class","head svelte-1uhxadl"),(0,internal.Ljt)(main,"class","content svelte-1uhxadl")},m(target,anchor){(0,internal.$Tr)(target,main,anchor),(0,internal.R3I)(main,div2),(0,internal.R3I)(div2,div0),(0,internal.R3I)(div0,h3),(0,internal.R3I)(div0,t2),(0,internal.R3I)(div0,button0),(0,internal.R3I)(div2,t4),(0,internal.R3I)(div2,button1),(0,internal.R3I)(button1,img),(0,internal.R3I)(button1,t5),(0,internal.R3I)(button1,div1),(0,internal.R3I)(main,t7),(0,internal.yef)(vegalite,main,null),(0,internal.R3I)(main,t8),if_block&&if_block.m(main,null),current=!0,mounted||(dispose=[(0,internal.oLt)(button0,"click",ctx[4]),(0,internal.oLt)(button1,"click",ctx[6])],mounted=!0)},p(ctx,[dirty]){const vegalite_changes={};4&dirty&&(vegalite_changes.data=ctx[2]),1&dirty&&(vegalite_changes.options=ctx[0]),vegalite.$set(vegalite_changes),""!==ctx[1]?if_block?if_block.p(ctx,dirty):(if_block=create_if_block(ctx),if_block.c(),if_block.m(main,null)):if_block&&(if_block.d(1),if_block=null)},i(local){current||((0,internal.Ui)(vegalite.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(vegalite.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.ogt)(main),(0,internal.vpE)(vegalite),if_block&&if_block.d(),mounted=!1,(0,internal.j7q)(dispose)}}}function instance($$self,$$props,$$invalidate){let{options={}}=$$props,selected="",data=data1;return $$self.$$set=$$props=>{"options"in $$props&&$$invalidate(0,options=$$props.options)},[options,selected,data,{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A simple bar chart with embedded data.",data:{name:"table"},params:[{name:"select",select:{type:"point",encodings:["x"]}}],mark:{type:"bar",cursor:"pointer"},encoding:{x:{field:"category",type:"nominal"},y:{field:"amount",type:"quantitative"},fillOpacity:{condition:{param:"select",value:1},value:.3}}},function handleUpdateData(){const table=[];for(let i=1;i<=20;i++)table.push({amount:Math.round(100*Math.random()),category:String.fromCharCode(65+i)});$$invalidate(2,data={table})},function handleSelection(...args){void 0!==args[1].category?$$invalidate(1,selected=`selected column(s): ${args[1].category}`):$$invalidate(1,selected="")},()=>window.open("https://github.com/vega/svelte-vega")]}class SvelteVegaLiteDemo extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,instance,create_fragment,internal.N8,{options:0},add_css)}}const SvelteVegaLiteDemo_svelte=SvelteVegaLiteDemo;SvelteVegaLiteDemo.__docgen={version:3,name:"SvelteVegaLiteDemo.svelte",data:[{visibility:"public",description:null,keywords:[],name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const SvelteVegaLiteDemo_stories={title:"svelte-vega/VegaLite",component:SvelteVegaLiteDemo_svelte,argTypes:{}};var Demo=function(){return{Component:SvelteVegaLiteDemo_svelte}}.bind({}),__namedExportsOrder=["Demo"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@storybook/svelte/dist/esm/client/index.js")},"./stories sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./SvelteVegaDemo.stories.js":"./stories/SvelteVegaDemo.stories.js","./SvelteVegaLiteDemo.stories.js":"./stories/SvelteVegaLiteDemo.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./stories/GitHub.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/GitHub.d8c6d6c9.png"},"?c95a":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("../../node_modules/@storybook/svelte/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./stories/data1.json":module=>{"use strict";module.exports=JSON.parse('{"table":[{"category":"A","amount":28},{"category":"B","amount":55},{"category":"C","amount":43},{"category":"D","amount":91},{"category":"E","amount":81},{"category":"F","amount":53},{"category":"G","amount":19},{"category":"H","amount":87}]}')}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[299],(()=>(__webpack_exec__("../../node_modules/@storybook/svelte/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("../../node_modules/@storybook/svelte/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("../../node_modules/@storybook/svelte/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("../../node_modules/@storybook/svelte/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);