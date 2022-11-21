"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[854],{2854:(H,T,i)=>{i.r(T),i.d(T,{CreateProductComponent:()=>x,DeleteProductComponent:()=>w,ProductComponent:()=>k,ProductModule:()=>B,ProductService:()=>u,UpdateProductComponent:()=>E,ViewProductComponent:()=>A});var n=i(3075),b=i(7489),h=i(951),v=i(53),O=i(9728),e=i(5e3),U=i(1924),Z=i(520);let u=(()=>{class o extends O.T{constructor(t,r){super("Product",t,r)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.yV),e.LFG(Z.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var I=i(9783),c=i(7783),p=i(9808),L=i(9358),g=i(4534),y=i(845),P=i(4119),l=i(2567);function G(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()()()()}if(2&o){const t=s.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const Y=function(){return["../"]};let x=(()=>{class o{constructor(t,r,a,d,m,S){this.productService=t,this.systemMessageService=r,this.router=a,this.route=d,this.categoryService=m,this.departmentService=S,this.submitted=!1,this.title="Create Product",this.formGroup=new n.cw({name:new n.NI(void 0,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]),price:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),cost:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),quantity:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),description:new n.NI(void 0,[n.kI.minLength(0),n.kI.maxLength(500)]),category:new n.NI(void 0,[]),department:new n.NI(void 0,[])}),this.fields=[{name:"name",type:"text",group:"Product",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"price",type:"currency",group:"Price",placeholder:"price",min:0,max:999999999999},{name:"cost",type:"currency",group:"Price",placeholder:"cost",min:0,max:999999999999},{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",min:0,max:999999999999},{name:"description",type:"textarea",group:"Product",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",group:"Meta",placeholder:"name",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",group:"Meta",placeholder:"name",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.categoryService.clearCache(),this.categoryService.getAsOptions(["id","name"]),this.departmentService.getAsOptions(["id","name"])}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.productService.add({name:this.value("name"),price:this.value("price"),cost:this.value("cost"),quantity:this.value("quantity"),description:this.value("description"),category:this.value("category"),department:this.value("department")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(I.ez),e.Y36(c.F0),e.Y36(c.gz),e.Y36(h.CategoryService),e.Y36(v.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-product"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Product",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,G,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Y)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[p.sg,L.U,g.o,y.zx,P.u,n.JL,n.sg,l.C0,l.Vq,c.rH,c.Od,p.rS]}),o})();var C=i(9014),D=i(9114);const M=function(){return["../"]};let w=(()=>{class o{constructor(t,r,a,d){this.prmConfirmationService=t,this.productService=r,this.router=a,this.route=d,this.title="Delete Product"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.productService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.fL),e.Y36(u),e.Y36(c.F0),e.Y36(c.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-product"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,M)),e.xp6(2),e.hij(" ",r.title," "))},dependencies:[g.o,y.zx,P.u,D.Q,c.rH,c.Od]}),o})(),k=(()=>{class o{constructor(t,r,a,d){this.router=t,this.route=r,this.resourceService=a,this.prmMessageService=d}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","product"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.F0),e.Y36(c.gz),e.Y36(u),e.Y36(C.sr))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-product"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},dependencies:[c.lC]}),o})();var f=i(5418),V=i(9671),N=i(6882),F=i(3905);function J(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()()()()}if(2&o){const t=s.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const Q=function(){return["../"]};let E=(()=>{class o{constructor(t,r,a,d,m,S){this.productService=t,this.router=r,this.systemMessageService=a,this.route=d,this.categoryService=m,this.departmentService=S,this.title="Update Product",this.formGroup=new n.cw({name:new n.NI(void 0,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]),price:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),cost:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),quantity:new n.NI(void 0,[n.kI.min(0),n.kI.max(999999999999)]),description:new n.NI(void 0,[n.kI.minLength(0),n.kI.maxLength(500)]),category:new n.NI(void 0,[]),department:new n.NI(void 0,[])}),this.fields=[{name:"name",type:"text",group:"Product",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"price",type:"currency",group:"Price",placeholder:"price",min:0,max:999999999999},{name:"cost",type:"currency",group:"Price",placeholder:"cost",min:0,max:999999999999},{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",min:0,max:999999999999},{name:"description",type:"textarea",group:"Product",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",group:"Meta",placeholder:"name",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",group:"Meta",placeholder:"name",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}],this.groups=Object.entries((0,b.groupBy)(this.fields,"group"))}ngOnInit(){this.categoryService.getAsOptions(["id","name"]),this.departmentService.getAsOptions(["id","name"])}ngAfterViewInit(){var t=this;return(0,V.Z)(function*(){const r=t.productService.getItemToBeUpdated();if(r)return t.itemToBeUpdated=yield(0,F.z)(t.productService.getByKey(r.id)),void(0,N.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.productService.update({id:this.itemToBeUpdated.id,name:this.value("name"),price:this.value("price"),cost:this.value("cost"),quantity:this.value("quantity"),description:this.value("description"),category:this.value("category"),department:this.value("department")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(c.F0),e.Y36(I.ez),e.Y36(c.gz),e.Y36(h.CategoryService),e.Y36(v.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-product"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Product",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,J,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Q)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[p.sg,L.U,g.o,y.zx,P.u,n.JL,n.sg,l.C0,l.Vq,c.rH,c.Od,p.rS]}),o})();var $=i(2530);const z=["dataTable"];let A=(()=>{class o{constructor(t,r,a,d,m){this.productService=t,this.router=r,this.route=a,this.categoryService=d,this.departmentService=m,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.productService.allCount$,this.items$=this.productService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"price",field:"price"},{header:"cost",field:"cost"},{header:"quantity",field:"quantity"},{header:"description",field:"description"},{header:"category",field:"category"},{header:"department",field:"department"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.productService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,r){this.router.navigate([t],{relativeTo:this.route,queryParams:r})}selectItems(t){this.productService.updateSelection([...t])}handleEvent(){this.productService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(c.F0),e.Y36(c.gz),e.Y36(h.CategoryService),e.Y36(v.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-product"]],viewQuery:function(t,r){if(1&t&&e.Gf(z,5),2&t){let a;e.iGM(a=e.CRH())&&(r.dataTable=a.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,r){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return r.handleEvent()})("sortEvent",function(){return r.handleEvent()})("pageEvent",function(){return r.handleEvent()})("selectEvent",function(d){return r.selectItems(d)})("newEvent",function(){return r.newItem()})("editEvent",function(){return r.editItems()})("deleteEvent",function(d){return r.deleteItems(d)})("clearEvent",function(){return r.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,r.items$))("columns",r.columns)("totalRecords",e.lcZ(3,5,r.totalRecords$))},dependencies:[$.a,p.Ov]}),o})(),B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[u,h.CategoryService,v.DepartmentService],imports:[p.ez,C.dT,l.T5,c.Bz.forChild([{path:"",component:k,children:[{title:"View Product",path:"",component:A,data:{permission:"READ:PRODUCT"},canActivate:[f.nG]},{title:"Create Product",path:"create",component:x,data:{permission:"WRITE:PRODUCT"},canActivate:[f.nG]},{title:"Update Product",path:"update",component:E,data:{permission:"WRITE:PRODUCT"},canActivate:[f.nG]},{title:"Delete Product",path:"delete",component:w,data:{permission:"WRITE:PRODUCT"},canActivate:[f.nG]}]}])]}),o})()}}]);