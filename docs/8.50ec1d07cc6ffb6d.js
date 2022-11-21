"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8],{1008:(H,C,o)=>{o.r(C),o.d(C,{CreateQuantityComponent:()=>q,DeleteQuantityComponent:()=>I,QuantityComponent:()=>E,QuantityModule:()=>B,QuantityService:()=>c,UpdateQuantityComponent:()=>w,ViewQuantityComponent:()=>Z});var a=o(3075),b=o(7489),A=o(9728),e=o(5e3),L=o(1924),O=o(520);let c=(()=>{class n extends A.T{constructor(t,i){super("Quantity",t,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(L.yV),e.LFG(O.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=o(6108),y=o(6793),T=o(9783),u=o(7783),p=o(9808),k=o(9358),h=o(4534),f=o(845),g=o(4119),d=o(2567);function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submit())}),e.qZA()()()()}if(2&n){const t=s.$implicit,i=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",t[1])("submitLabel",!1)}}const Y=function(){return["../"]};let q=(()=>{class n{constructor(t,i,r,l,m,S){this.quantityService=t,this.systemMessageService=i,this.router=r,this.route=l,this.skuService=m,this.storeService=S,this.submitted=!1,this.title="Create Quantity",this.formGroup=new a.cw({quantity:new a.NI(void 0,[a.kI.required,a.kI.min(-200),a.kI.max(999999999999)]),sku:new a.NI(void 0,[a.kI.required]),store:new a.NI(void 0,[a.kI.required])}),this.fields=[{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",group:"Meta",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",group:"Meta",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.skuService.getAsOptions(["id","name"]),this.storeService.getAsOptions(["id","name"])}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.quantityService.add({quantity:this.value("quantity"),sku:this.value("sku"),store:this.value("store")});else{const t=Object.entries(this.formGroup.controls).filter(i=>i[1].errors)[0];this.systemMessageService.add({severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c),e.Y36(T.ez),e.Y36(u.F0),e.Y36(u.gz),e.Y36(v.SkuService),e.Y36(y.StoreService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-create-quantity"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Quantity",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,U,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Y)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(4),e.Q6J("ngForOf",i.groups))},dependencies:[p.sg,k.U,h.o,f.zx,g.u,a.JL,a.sg,d.C0,d.Vq,u.rH,u.Od,p.rS]}),n})();var Q=o(9014),G=o(9114);const M=function(){return["../"]};let I=(()=>{class n{constructor(t,i,r,l){this.prmConfirmationService=t,this.quantityService=i,this.router=r,this.route=l,this.title="Delete Quantity"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.quantityService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Q.fL),e.Y36(c),e.Y36(u.F0),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-delete-quantity"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,M)),e.xp6(2),e.hij(" ",i.title," "))},dependencies:[h.o,f.zx,g.u,G.Q,u.rH,u.Od]}),n})();var V=o(7773);let E=(()=>{class n{constructor(t,i,r,l){this.router=t,this.route=i,this.resourceService=r,this.prmMessageService=l}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","quantity"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(c),e.Y36(Q.sr))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-quantity"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,i){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[V.FN,u.lC]}),n})();var F=o(9671),x=o(6882),D=o(3905);function J(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submit())}),e.qZA()()()()}if(2&n){const t=s.$implicit,i=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",t[1])("submitLabel",!1)}}const N=function(){return["../"]};let w=(()=>{class n{constructor(t,i,r,l,m,S){this.quantityService=t,this.router=i,this.systemMessageService=r,this.route=l,this.skuService=m,this.storeService=S,this.title="Update Quantity",this.formGroup=new a.cw({quantity:new a.NI(void 0,[a.kI.required,a.kI.min(-200),a.kI.max(999999999999)]),sku:new a.NI(void 0,[a.kI.required]),store:new a.NI(void 0,[a.kI.required])}),this.fields=[{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",required:!0,min:-200,max:999999999999},{name:"sku",type:"select",group:"Meta",placeholder:"sku",asyncOptions:this.skuService.entities$,optionValue:"id",optionLabel:"name",required:!0},{name:"store",type:"select",group:"Meta",placeholder:"store",asyncOptions:this.storeService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.skuService.getAsOptions(["id","name"]),this.storeService.getAsOptions(["id","name"])}ngAfterViewInit(){var t=this;return(0,F.Z)(function*(){const i=t.quantityService.getItemToBeUpdated();if(i)return t.itemToBeUpdated=yield(0,D.z)(t.quantityService.getByKey(i.id)),void(0,x.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.quantityService.update({id:this.itemToBeUpdated.id,quantity:this.value("quantity"),sku:this.value("sku"),store:this.value("store")});else{const t=Object.entries(this.formGroup.controls).filter(i=>i[1].errors)[0];this.systemMessageService.add({severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c),e.Y36(u.F0),e.Y36(T.ez),e.Y36(u.gz),e.Y36(v.SkuService),e.Y36(y.StoreService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-update-quantity"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Quantity",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,J,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,N)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(4),e.Q6J("ngForOf",i.groups))},dependencies:[p.sg,k.U,h.o,f.zx,g.u,a.JL,a.sg,d.C0,d.Vq,u.rH,u.Od,p.rS]}),n})();var $=o(2530);const z=["dataTable"];let Z=(()=>{class n{constructor(t,i,r,l,m){this.quantityService=t,this.router=i,this.route=r,this.skuService=l,this.storeService=m,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.quantityService.allCount$,this.items$=this.quantityService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"quantity",field:"quantity"},{header:"sku",field:"sku"},{header:"barcode",field:"barcode"},{header:"store",field:"store"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.quantityService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,i){this.router.navigate([t],{relativeTo:this.route,queryParams:i})}selectItems(t){this.quantityService.updateSelection([...t])}handleEvent(){this.quantityService.query(this.dataTable.table)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c),e.Y36(u.F0),e.Y36(u.gz),e.Y36(v.SkuService),e.Y36(y.StoreService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ae-view-quantity"]],viewQuery:function(t,i){if(1&t&&e.Gf(z,5),2&t){let r;e.iGM(r=e.CRH())&&(i.dataTable=r.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,i){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return i.handleEvent()})("sortEvent",function(){return i.handleEvent()})("pageEvent",function(){return i.handleEvent()})("selectEvent",function(l){return i.selectItems(l)})("newEvent",function(){return i.newItem()})("editEvent",function(){return i.editItems()})("deleteEvent",function(l){return i.deleteItems(l)})("clearEvent",function(){return i.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,i.items$))("columns",i.columns)("totalRecords",e.lcZ(3,5,i.totalRecords$))},dependencies:[$.a,p.Ov]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[c,v.SkuService,y.StoreService],imports:[p.ez,Q.dT,d.T5,u.Bz.forChild([{path:"",component:E,children:[{title:"View Quantity",path:"",component:Z},{title:"Create Quantity",path:"create",component:q},{title:"Update Quantity",path:"update",component:w},{title:"Delete Quantity",path:"delete",component:I}]}])]}),n})()}}]);