"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[491],{3491:(z,y,o)=>{o.r(y),o.d(y,{CreatePriceComponent:()=>S,DeletePriceComponent:()=>C,PriceComponent:()=>T,PriceModule:()=>M,PriceService:()=>p,UpdatePriceComponent:()=>k,ViewPriceComponent:()=>E});var c=o(2382),I=o(9728),e=o(5e3),w=o(1924),U=o(520);let p=(()=>{class r extends I.T{constructor(t,i){super("Price",t,i)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(w.yV),e.LFG(U.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var u=o(6108),d=o(7213),a=o(4650),P=o(9358),v=o(4534),h=o(845),f=o(4119);const A=function(){return["../"]};let S=(()=>{class r{constructor(t,i,n,l,m){this.priceService=t,this.router=i,this.route=n,this.skuService=l,this.pricelevelService=m,this.submitted=!1,this.title="Create Price",this.formGroup=new c.cw({price:new c.NI("",[c.kI.min(0),c.kI.max(999999999999)]),cost:new c.NI("",[c.kI.min(0),c.kI.max(999999999999)]),sku:new c.NI("",[]),pricelevel:new c.NI("",[])}),this.fields=[{name:"price",type:"number",group:"Primary",placeholder:"price",min:0,max:999999999999},{name:"cost",type:"number",group:"Primary",placeholder:"cost",min:0,max:999999999999},{name:"sku",type:"select",group:"Primary",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name"},{name:"pricelevel",type:"select",group:"Primary",placeholder:"pricelevel",asyncOptions:this.pricelevelService.entities$,optionValue:"id",optionLabel:"name"}]}ngOnInit(){this.skuService.getAsOptions(["id","name"]),this.pricelevelService.getAsOptions(["id","name"])}submit(){!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.priceService.add({price:this.value("price"),cost:this.value("cost"),sku:this.value("sku"),pricelevel:this.value("pricelevel")}))}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(a.F0),e.Y36(a.gz),e.Y36(u.SkuService),e.Y36(d.PricelevelService))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-create-price"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,A)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[P.U,v.o,h.zx,f.u,a.rH,a.Od]}),r})();var g=o(9014),Y=o(9114);const V=function(){return["../"]};let C=(()=>{class r{constructor(t,i,n,l){this.prmConfirmationService=t,this.priceService=i,this.router=n,this.route=l,this.title="Delete Price"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.priceService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.fL),e.Y36(p),e.Y36(a.F0),e.Y36(a.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-delete-price"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,V)),e.xp6(2),e.hij(" ",i.title," "))},dependencies:[v.o,h.zx,f.u,Y.Q,a.rH,a.Od]}),r})();var Z=o(7773);let T=(()=>{class r{constructor(t,i,n,l){this.router=t,this.route=i,this.resourceService=n,this.prmMessageService=l}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","price"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(p),e.Y36(g.sr))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-price"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,i){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[Z.FN,a.lC]}),r})();var b=o(9808),L=o(9671),G=o(6882),O=o(3905);const D=function(){return["../"]};let k=(()=>{class r{constructor(t,i,n,l,m){this.priceService=t,this.router=i,this.route=n,this.skuService=l,this.pricelevelService=m,this.title="Update Price",this.formGroup=new c.cw({price:new c.NI("",[c.kI.min(0),c.kI.max(999999999999)]),cost:new c.NI("",[c.kI.min(0),c.kI.max(999999999999)]),sku:new c.NI("",[]),pricelevel:new c.NI("",[])}),this.fields=[{name:"price",type:"number",group:"Primary",placeholder:"price",min:0,max:999999999999},{name:"cost",type:"number",group:"Primary",placeholder:"cost",min:0,max:999999999999},{name:"sku",type:"select",group:"Primary",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name"},{name:"pricelevel",type:"select",group:"Primary",placeholder:"pricelevel",asyncOptions:this.pricelevelService.entities$,optionValue:"id",optionLabel:"name"}]}ngOnInit(){this.skuService.getAsOptions(["id","name"]),this.pricelevelService.getAsOptions(["id","name"])}ngAfterViewInit(){var t=this;return(0,L.Z)(function*(){const i=t.priceService.getItemToBeUpdated();i&&(t.itemToBeUpdated=yield(0,O.z)(t.priceService.getByKey(i.id)),(0,G.EE)(t.formGroup,t.itemToBeUpdated))})()}submit(){this.formGroup.valid&&this.priceService.update({id:this.itemToBeUpdated.id,price:this.value("price"),cost:this.value("cost"),sku:this.value("sku"),pricelevel:this.value("pricelevel")})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(a.F0),e.Y36(a.gz),e.Y36(u.SkuService),e.Y36(d.PricelevelService))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-update-price"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,D)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[P.U,v.o,h.zx,f.u,a.rH,a.Od]}),r})();var N=o(2530);const F=["dataTable"];let E=(()=>{class r{constructor(t,i,n,l,m){this.priceService=t,this.router=i,this.route=n,this.skuService=l,this.pricelevelService=m,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.priceService.allCount$,this.items$=this.priceService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"price",field:"price"},{header:"cost",field:"cost"},{header:"sku",field:"sku"},{header:"barcode",field:"barcode"},{header:"pricelevel",field:"pricelevel"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.priceService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,i){this.router.navigate([t],{relativeTo:this.route,queryParams:i})}selectItems(t){this.priceService.updateSelection([...t])}handleEvent(){this.priceService.query(this.dataTable.table)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(a.F0),e.Y36(a.gz),e.Y36(u.SkuService),e.Y36(d.PricelevelService))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-view-price"]],viewQuery:function(t,i){if(1&t&&e.Gf(F,5),2&t){let n;e.iGM(n=e.CRH())&&(i.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,i){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return i.handleEvent()})("sortEvent",function(){return i.handleEvent()})("pageEvent",function(){return i.handleEvent()})("selectEvent",function(l){return i.selectItems(l)})("newEvent",function(){return i.newItem()})("editEvent",function(){return i.editItems()})("deleteEvent",function(l){return i.deleteItems(l)})("clearEvent",function(){return i.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,i.items$))("columns",i.columns)("totalRecords",e.lcZ(3,5,i.totalRecords$))},dependencies:[N.a,b.Ov]}),r})(),M=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[p,u.SkuService,d.PricelevelService],imports:[b.ez,g.dT,a.Bz.forChild([{path:"",component:T,children:[{title:"View Price",path:"",component:E},{title:"Create Price",path:"create",component:S},{title:"Update Price",path:"update",component:k},{title:"Delete Price",path:"delete",component:C}]}])]}),r})()}}]);