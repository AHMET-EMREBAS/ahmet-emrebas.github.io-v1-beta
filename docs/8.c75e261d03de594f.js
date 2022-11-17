"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8],{1008:(z,f,o)=>{o.r(f),o.d(f,{CreateQuantityComponent:()=>Q,DeleteQuantityComponent:()=>S,QuantityComponent:()=>T,QuantityModule:()=>O,QuantityService:()=>d,UpdateQuantityComponent:()=>E,ViewQuantityComponent:()=>k});var s=o(2382),e=o(5e3),I=o(441),q=o(1924),w=o(520);let d=(()=>{class n extends I.T{constructor(t,i){super("Quantity",t,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(q.yV),e.LFG(w.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=o(4650),m=o(158),p=o(4332),g=o(9358),v=o(4534),y=o(845),h=o(4119);const U=function(){return["../"]};let Q=(()=>{class n{constructor(t,i,r,l,c){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=c,this.submitted=!1,this.title="Create Quantity",this.formGroup=new s.cw({quantity:new s.NI("",[s.kI.required,s.kI.min(-200),s.kI.max(999999999999)]),sku:new s.NI("",[s.kI.required]),store:new s.NI("",[s.kI.required])}),this.fields=[{name:"quantity",type:"number",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}]}ngOnInit(){this.skuService.getAll(),this.storeService.getAll()}submit(){var t,i;!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.quantityService.add({quantity:this.value("quantity"),sku:null===(t=this.value("sku"))||void 0===t?void 0:t.id,store:null===(i=this.value("store"))||void 0===i?void 0:i.id}))}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.G),e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-create-quantity"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,U)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[g.U,v.o,y.zx,h.u,u.rH,u.Od]}),n})();var C=o(9783),A=o(9114);const Y=function(){return["../"]};let S=(()=>{class n{constructor(t,i,r,l){this.prmConfirmationService=t,this.quantityService=i,this.router=r,this.route=l,this.title="Delete Quantity"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.quantityService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.YP),e.Y36(d),e.Y36(u.F0),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-delete-quantity"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,Y)),e.xp6(2),e.hij(" ",i.title," "))},dependencies:[v.o,y.zx,h.u,A.Q,u.rH,u.Od]}),n})();var G=o(7773);let T=(()=>{class n{constructor(t,i,r,l){this.router=t,this.route=i,this.resourceService=r,this.prmMessageService=l}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","quantity"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(d),e.Y36(C.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-quantity"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,i){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[G.FN,u.lC]}),n})();var b=o(9808),V=o(9671),Z=o(4453),L=o(3905);const D=function(){return["../"]};let E=(()=>{class n{constructor(t,i,r,l,c){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=c,this.title="Update Quantity",this.formGroup=new s.cw({quantity:new s.NI("",[s.kI.required,s.kI.min(-200),s.kI.max(999999999999)]),sku:new s.NI("",[s.kI.required]),store:new s.NI("",[s.kI.required])}),this.fields=[{name:"quantity",type:"number",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.skuService.getAll(),this.storeService.getAll()}ngAfterViewInit(){var t=this;return(0,V.Z)(function*(){const i=t.quantityService.getItemToBeUpdated();i&&(t.itemToBeUpdated=yield(0,L.z)(t.quantityService.getByKey(i.id)),(0,Z.E)(t.formGroup,t.itemToBeUpdated))})()}submit(){var t,i;this.formGroup.valid&&this.quantityService.update({id:this.itemToBeUpdated.id,quantity:this.value("quantity"),sku:null===(t=this.value("sku"))||void 0===t?void 0:t.id,store:null===(i=this.value("store"))||void 0===i?void 0:i.id})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.G),e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-update-quantity"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,D)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[g.U,v.o,y.zx,h.u,u.rH,u.Od]}),n})();var F=o(2530);const M=["dataTable"];let k=(()=>{class n{constructor(t,i,r,l,c){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=c,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.quantityService.allCount$,this.items$=this.quantityService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"quantity",field:"quantity"},{header:"sku",field:"sku"},{header:"store",field:"store"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.quantityService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,i){this.router.navigate([t],{relativeTo:this.route,queryParams:i})}selectItems(t){this.quantityService.updateSelection([...t])}handleEvent(){this.quantityService.query(this.dataTable.table)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.G),e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-view-quantity"]],viewQuery:function(t,i){if(1&t&&e.Gf(M,5),2&t){let r;e.iGM(r=e.CRH())&&(i.dataTable=r.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,i){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return i.handleEvent()})("sortEvent",function(){return i.handleEvent()})("pageEvent",function(){return i.handleEvent()})("selectEvent",function(l){return i.selectItems(l)})("newEvent",function(){return i.newItem()})("editEvent",function(){return i.editItems()})("deleteEvent",function(l){return i.deleteItems(l)})("clearEvent",function(){return i.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,i.items$))("columns",i.columns)("totalRecords",e.lcZ(3,5,i.totalRecords$))},dependencies:[F.a,b.Ov]}),n})();var N=o(7834);let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d,m.G,p.d],imports:[b.ez,N.d,u.Bz.forChild([{path:"",component:T,children:[{title:"View Quantity",path:"",component:k},{title:"Create Quantity",path:"create",component:Q},{title:"Update Quantity",path:"update",component:E},{title:"Delete Quantity",path:"delete",component:S}]}])]}),n})()}}]);