"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[108],{6108:(Q,y,i)=>{i.r(y),i.d(y,{CreateSkuComponent:()=>L,DeleteSkuComponent:()=>I,SkuComponent:()=>E,SkuModule:()=>H,SkuService:()=>l,UpdateSkuComponent:()=>x,ViewSkuComponent:()=>w});var n=i(3075),b=i(7489),A=i(9728),e=i(5e3),U=i(1924),Z=i(520);let l=(()=>{class o extends A.T{constructor(t,r){super("Sku",t,r)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.yV),e.LFG(Z.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=i(2854),C=i(9783),u=i(7783),d=i(9808),T=i(9358),v=i(4534),f=i(845),g=i(4119),p=i(2567);function G(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.submit())}),e.qZA()()()()}if(2&o){const t=a.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const Y=function(){return["../"]};let L=(()=>{class o{constructor(t,r,s,c,S){this.skuService=t,this.systemMessageService=r,this.router=s,this.route=c,this.productService=S,this.submitted=!1,this.title="Create Sku",this.formGroup=new n.cw({name:new n.NI(void 0,[n.kI.required,n.kI.minLength(0),n.kI.maxLength(30)]),barcode:new n.NI(void 0,[n.kI.required,n.kI.minLength(10),n.kI.maxLength(13)]),description:new n.NI(void 0,[n.kI.minLength(0),n.kI.maxLength(500)]),product:new n.NI(void 0,[n.kI.required])}),this.fields=[{name:"name",type:"text",group:"Sku",placeholder:"name",required:!0,minLength:0,maxLength:30},{name:"barcode",type:"text",group:"Sku",placeholder:"barcode",required:!0,minLength:10,maxLength:13},{name:"description",type:"textarea",group:"Sku",placeholder:"description",minLength:0,maxLength:500},{name:"product",type:"select",group:"Product",placeholder:"name",asyncOptions:this.productService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.productService.getAsOptions(["id","name"])}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.skuService.add({name:this.value("name"),barcode:this.value("barcode"),description:this.value("description"),product:this.value("product")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(C.ez),e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.ProductService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-sku"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Sku",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,G,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Y)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[d.sg,T.U,v.o,f.zx,g.u,n.JL,n.sg,p.C0,p.Vq,u.rH,u.Od,d.rS]}),o})();var k=i(9014),O=i(9114);const F=function(){return["../"]};let I=(()=>{class o{constructor(t,r,s,c){this.prmConfirmationService=t,this.skuService=r,this.router=s,this.route=c,this.title="Delete Sku"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.skuService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(k.fL),e.Y36(l),e.Y36(u.F0),e.Y36(u.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-sku"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,F)),e.xp6(2),e.hij(" ",r.title," "))},dependencies:[v.o,f.zx,g.u,O.Q,u.rH,u.Od]}),o})(),E=(()=>{class o{constructor(t,r,s,c){this.router=t,this.route=r,this.resourceService=s,this.prmMessageService=c}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","sku"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(l),e.Y36(k.sr))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-sku"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},dependencies:[u.lC]}),o})();var h=i(7919),V=i(9671),M=i(6882),D=i(3905);function N(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.submit())}),e.qZA()()()()}if(2&o){const t=a.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const J=function(){return["../"]};let x=(()=>{class o{constructor(t,r,s,c,S){this.skuService=t,this.router=r,this.systemMessageService=s,this.route=c,this.productService=S,this.title="Update Sku",this.formGroup=new n.cw({name:new n.NI(void 0,[n.kI.required,n.kI.minLength(0),n.kI.maxLength(30)]),barcode:new n.NI(void 0,[n.kI.required,n.kI.minLength(10),n.kI.maxLength(13)]),description:new n.NI(void 0,[n.kI.minLength(0),n.kI.maxLength(500)]),product:new n.NI(void 0,[n.kI.required])}),this.fields=[{name:"name",type:"text",group:"Sku",placeholder:"name",required:!0,minLength:0,maxLength:30},{name:"barcode",type:"text",group:"Sku",placeholder:"barcode",required:!0,minLength:10,maxLength:13},{name:"description",type:"textarea",group:"Sku",placeholder:"description",minLength:0,maxLength:500},{name:"product",type:"select",group:"Product",placeholder:"name",asyncOptions:this.productService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.productService.getAsOptions(["id","name"])}ngAfterViewInit(){var t=this;return(0,V.Z)(function*(){const r=t.skuService.getItemToBeUpdated();if(r)return t.itemToBeUpdated=yield(0,D.z)(t.skuService.getByKey(r.id)),void(0,M.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.skuService.update({id:this.itemToBeUpdated.id,name:this.value("name"),barcode:this.value("barcode"),description:this.value("description"),product:this.value("product")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(u.F0),e.Y36(C.ez),e.Y36(u.gz),e.Y36(m.ProductService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-sku"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Sku",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,N,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,J)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[d.sg,T.U,v.o,f.zx,g.u,n.JL,n.sg,p.C0,p.Vq,u.rH,u.Od,d.rS]}),o})();var z=i(2530);const B=["dataTable"];let w=(()=>{class o{constructor(t,r,s,c){this.skuService=t,this.router=r,this.route=s,this.productService=c,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.skuService.allCount$,this.items$=this.skuService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"barcode",field:"barcode"},{header:"description",field:"description"},{header:"product",field:"product"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.skuService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,r){this.router.navigate([t],{relativeTo:this.route,queryParams:r})}selectItems(t){this.skuService.updateSelection([...t])}handleEvent(){this.skuService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.ProductService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-sku"]],viewQuery:function(t,r){if(1&t&&e.Gf(B,5),2&t){let s;e.iGM(s=e.CRH())&&(r.dataTable=s.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,r){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return r.handleEvent()})("sortEvent",function(){return r.handleEvent()})("pageEvent",function(){return r.handleEvent()})("selectEvent",function(c){return r.selectItems(c)})("newEvent",function(){return r.newItem()})("editEvent",function(){return r.editItems()})("deleteEvent",function(c){return r.deleteItems(c)})("clearEvent",function(){return r.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,r.items$))("columns",r.columns)("totalRecords",e.lcZ(3,5,r.totalRecords$))},dependencies:[z.a,d.Ov]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[l,m.ProductService],imports:[d.ez,k.dT,p.T5,u.Bz.forChild([{path:"",component:E,children:[{title:"View Sku",path:"",component:w,data:{permission:"READ:SKU"},canActivate:[h.nG]},{title:"Create Sku",path:"create",component:L,data:{permission:"WRITE:SKU"},canActivate:[h.nG]},{title:"Update Sku",path:"update",component:x,data:{permission:"WRITE:SKU"},canActivate:[h.nG]},{title:"Delete Sku",path:"delete",component:I,data:{permission:"WRITE:SKU"},canActivate:[h.nG]}]}])]}),o})()}}]);