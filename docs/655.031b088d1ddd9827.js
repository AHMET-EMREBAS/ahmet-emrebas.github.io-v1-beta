"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[655],{1655:(_,k,s)=>{s.r(k),s.d(k,{CreateSkuComponent:()=>S,DeleteSkuComponent:()=>y,SkuComponent:()=>T,SkuModule:()=>N,SkuService:()=>d.G,UpdateSkuComponent:()=>L,ViewSkuComponent:()=>E});var i=s(2382),e=s(5e3),d=s(158),a=s(6026),c=s(5419),g=s(9358),m=s(4534),p=s(845),h=s(4119);const w=function(){return["../"]};let S=(()=>{class o{constructor(t,n,r,l){this.skuService=t,this.router=n,this.route=r,this.productService=l,this.submitted=!1,this.title="Create Sku",this.formGroup=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(0),i.kI.maxLength(30)]),barcode:new i.NI("",[i.kI.required,i.kI.minLength(10),i.kI.maxLength(13)]),description:new i.NI("",[i.kI.minLength(0),i.kI.maxLength(500)]),product:new i.NI("",[i.kI.required])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:0,maxLength:30},{name:"barcode",type:"text",placeholder:"barcode",required:!0,minLength:10,maxLength:13},{name:"description",type:"textarea",placeholder:"description",minLength:0,maxLength:500},{name:"product",type:"select",placeholder:"product",asyncOptions:this.productService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.skuService.getAll(),this.productService.getAll()}submit(){var t;!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.skuService.add({name:this.value("name"),barcode:this.value("barcode"),description:this.value("description"),product:null===(t=this.value("product"))||void 0===t?void 0:t.id}))}value(t){var n;return null===(n=this.formGroup.get(t))||void 0===n?void 0:n.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.G),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-sku"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return n.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,w)),e.xp6(2),e.hij(" ",n.title," "),e.xp6(2),e.Q6J("formGroup",n.formGroup)("fields",n.fields))},dependencies:[g.U,m.o,p.zx,h.u,a.rH,a.Od]}),o})();var v=s(9783),C=s(9114);const U=function(){return["../"]};let y=(()=>{class o{constructor(t,n,r,l){this.confirmService=t,this.skuService=n,this.router=r,this.route=l,this.title="Delete Sku"}ngOnInit(){this.confirmService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.skuService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.YP),e.Y36(d.G),e.Y36(a.F0),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-sku"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,U)),e.xp6(2),e.hij(" ",n.title," "))},dependencies:[m.o,p.zx,h.u,C.Q,a.rH,a.Od]}),o})();var b=s(7773);let T=(()=>{class o{constructor(t,n,r,l){this.router=t,this.route=n,this.service=r,this.messageService=l}ngOnInit(){this.sub=this.service.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.messageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.messageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.messageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.messageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.messageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.messageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","sku"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(d.G),e.Y36(v.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-sku"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,n){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[b.FN,a.lC]}),o})();var I=s(9808),A=s(4933),G=s(1565),Y=s(3724),Z=s(4453);const V=function(){return["../"]};let L=(()=>{class o{constructor(t,n,r,l){this.skuService=t,this.router=n,this.route=r,this.productService=l,this.title="Update Sku",this.formGroup=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(0),i.kI.maxLength(30)]),barcode:new i.NI("",[i.kI.required,i.kI.minLength(10),i.kI.maxLength(13)]),description:new i.NI("",[i.kI.minLength(0),i.kI.maxLength(500)]),product:new i.NI("",[i.kI.required])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:0,maxLength:30},{name:"barcode",type:"text",placeholder:"barcode",required:!0,minLength:10,maxLength:13},{name:"description",type:"textarea",placeholder:"description",minLength:0,maxLength:500},{name:"product",type:"select",placeholder:"product",asyncOptions:this.productService.entities$,optionValue:"id",optionLabel:"name",required:!0}],this.skuService.getAll(),this.productService.getAll()}ngAfterViewInit(){const t=this.skuService.getItemToBeUpdated();t&&(this.itemToBeUpdated=t,(0,Z.E)(this.formGroup,t))}submit(){var t;this.formGroup.valid&&this.skuService.update({id:this.itemToBeUpdated.id,name:this.value("name"),barcode:this.value("barcode"),description:this.value("description"),product:null===(t=this.value("product"))||void 0===t?void 0:t.id})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var n;return null===(n=this.formGroup.get(t))||void 0===n?void 0:n.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.G),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-sku"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return n.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,V)),e.xp6(2),e.hij(" ",n.title," "),e.xp6(2),e.Q6J("formGroup",n.formGroup)("fields",n.fields))},dependencies:[g.U,m.o,p.zx,h.u,a.rH,a.Od]}),o})();var D=s(2530);const x=["dataTable"];let E=(()=>{class o{constructor(t,n,r,l){this.skuService=t,this.router=n,this.route=r,this.productService=l,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.skuService.allCount$,this.items$=this.skuService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"barcode",field:"barcode"},{header:"description",field:"description"},{header:"product",field:"product",mapper:f=>null==f?void 0:f.name},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.skuService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,n){this.router.navigate([t],{relativeTo:this.route,queryParams:n})}selectItems(t){this.skuService.updateSelection([...t])}handleEvent(){this.skuService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.G),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-sku"]],viewQuery:function(t,n){if(1&t&&e.Gf(x,5),2&t){let r;e.iGM(r=e.CRH())&&(n.dataTable=r.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,n){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return n.handleEvent()})("sortEvent",function(){return n.handleEvent()})("pageEvent",function(){return n.handleEvent()})("selectEvent",function(l){return n.selectItems(l)})("newEvent",function(){return n.newItem()})("editEvent",function(){return n.editItems()})("deleteEvent",function(l){return n.deleteItems(l)})("clearEvent",function(){return n.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,n.items$))("columns",n.columns)("totalRecords",e.lcZ(3,5,n.totalRecords$))},dependencies:[D.a,I.Ov]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[d.G,c.M,v.YP,v.ez],imports:[I.ez,G.U,A.e,m.V,p.hJ,h.z,C.D,Y.O,b.EV,a.Bz.forChild([{path:"",component:T,children:[{title:"View Sku",path:"",component:E},{title:"Create Sku",path:"create",component:S},{title:"Update Sku",path:"update",component:L},{title:"Delete Sku",path:"delete",component:y}]}])]}),o})()}}]);