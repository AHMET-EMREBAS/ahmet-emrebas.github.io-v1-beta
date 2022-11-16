"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8],{1008:(H,Q,o)=>{o.r(Q),o.d(Q,{CreateQuantityComponent:()=>S,DeleteQuantityComponent:()=>b,QuantityComponent:()=>k,QuantityModule:()=>J,QuantityService:()=>d,UpdateQuantityComponent:()=>I,ViewQuantityComponent:()=>w});var s=o(2382),e=o(5e3),A=o(441),U=o(1924),Y=o(520);let d=(()=>{class n extends A.T{constructor(t,i){super("Quantity",t,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(U.yV),e.LFG(Y.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=o(6026),p=o(158),v=o(4332),C=o(9358),y=o(4534),h=o(845),f=o(4119);const G=function(){return["../"]};let S=(()=>{class n{constructor(t,i,r,l,m){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=m,this.submitted=!1,this.title="Create Quantity",this.formGroup=new s.cw({quantity:new s.NI("",[s.kI.required,s.kI.min(-200),s.kI.max(999999999999)]),sku:new s.NI("",[s.kI.required]),store:new s.NI("",[s.kI.required])}),this.fields=[{name:"quantity",type:"number",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.quantityService.getAll(),this.skuService.getAll(),this.storeService.getAll()}submit(){var t,i;!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.quantityService.add({quantity:this.value("quantity"),sku:null===(t=this.value("sku"))||void 0===t?void 0:t.id,store:null===(i=this.value("store"))||void 0===i?void 0:i.id}))}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p.G),e.Y36(v.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-create-quantity"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,G)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[C.U,y.o,h.zx,f.u,u.rH,u.Od]}),n})();var g=o(9783),T=o(9114);const V=function(){return["../"]};let b=(()=>{class n{constructor(t,i,r,l){this.confirmService=t,this.quantityService=i,this.router=r,this.route=l,this.title="Delete Quantity"}ngOnInit(){this.confirmService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.quantityService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.YP),e.Y36(d),e.Y36(u.F0),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-delete-quantity"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,V)),e.xp6(2),e.hij(" ",i.title," "))},dependencies:[y.o,h.zx,f.u,T.Q,u.rH,u.Od]}),n})();var E=o(7773);let k=(()=>{class n{constructor(t,i,r,l){this.router=t,this.route=i,this.service=r,this.messageService=l}ngOnInit(){this.sub=this.service.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.messageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.messageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.messageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.messageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.messageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.messageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","quantity"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(d),e.Y36(g.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-quantity"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,i){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[E.FN,u.lC]}),n})();var q=o(9808),Z=o(4933),L=o(1565),D=o(3724),F=o(4453);const N=function(){return["../"]};let I=(()=>{class n{constructor(t,i,r,l,m){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=m,this.title="Update Quantity",this.formGroup=new s.cw({quantity:new s.NI("",[s.kI.required,s.kI.min(-200),s.kI.max(999999999999)]),sku:new s.NI("",[s.kI.required]),store:new s.NI("",[s.kI.required])}),this.fields=[{name:"quantity",type:"number",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.quantityService.getAll(),this.skuService.getAll(),this.storeService.getAll()}ngAfterViewInit(){const t=this.quantityService.getItemToBeUpdated();t&&(this.itemToBeUpdated=t,(0,F.E)(this.formGroup,t))}submit(){var t,i;this.formGroup.valid&&this.quantityService.update({id:this.itemToBeUpdated.id,quantity:this.value("quantity"),sku:null===(t=this.value("sku"))||void 0===t?void 0:t.id,store:null===(i=this.value("store"))||void 0===i?void 0:i.id})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p.G),e.Y36(v.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-update-quantity"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,N)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[C.U,y.o,h.zx,f.u,u.rH,u.Od]}),n})();var z=o(2530);const O=["dataTable"];let w=(()=>{class n{constructor(t,i,r,l,m){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=m,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.quantityService.allCount$,this.items$=this.quantityService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"quantity",field:"quantity"},{header:"sku",field:"sku",mapper:c=>null==c?void 0:c.name},{header:"store",field:"store",mapper:c=>null==c?void 0:c.name},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.quantityService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,i){this.router.navigate([t],{relativeTo:this.route,queryParams:i})}selectItems(t){this.quantityService.updateSelection([...t])}handleEvent(){this.quantityService.query(this.dataTable.table)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p.G),e.Y36(v.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-view-quantity"]],viewQuery:function(t,i){if(1&t&&e.Gf(O,5),2&t){let r;e.iGM(r=e.CRH())&&(i.dataTable=r.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,i){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return i.handleEvent()})("sortEvent",function(){return i.handleEvent()})("pageEvent",function(){return i.handleEvent()})("selectEvent",function(l){return i.selectItems(l)})("newEvent",function(){return i.newItem()})("editEvent",function(){return i.editItems()})("deleteEvent",function(l){return i.deleteItems(l)})("clearEvent",function(){return i.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,i.items$))("columns",i.columns)("totalRecords",e.lcZ(3,5,i.totalRecords$))},dependencies:[z.a,q.Ov]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d,p.G,v.d,g.YP,g.ez],imports:[q.ez,L.U,Z.e,y.V,h.hJ,f.z,T.D,D.O,E.EV,u.Bz.forChild([{path:"",component:k,children:[{title:"View Quantity",path:"",component:w},{title:"Create Quantity",path:"create",component:S},{title:"Update Quantity",path:"update",component:I},{title:"Delete Quantity",path:"delete",component:b}]}])]}),n})()}}]);