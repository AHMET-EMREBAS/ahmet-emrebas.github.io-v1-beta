"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[854],{2854:(F,y,i)=>{i.r(y),i.d(y,{CreateProductComponent:()=>C,DeleteProductComponent:()=>S,ProductComponent:()=>I,ProductModule:()=>O,ProductService:()=>u,UpdateProductComponent:()=>b,ViewProductComponent:()=>w});var n=i(2382),L=i(9728),e=i(5e3),E=i(1924),k=i(520);let u=(()=>{class o extends L.T{constructor(t,r){super("Product",t,r)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(E.yV),e.LFG(k.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=i(951),l=i(53),s=i(4650),P=i(9358),h=i(4534),v=i(845),g=i(4119);const U=function(){return["../"]};let C=(()=>{class o{constructor(t,r,a,d,p){this.productService=t,this.router=r,this.route=a,this.categoryService=d,this.departmentService=p,this.submitted=!1,this.title="Create Product",this.formGroup=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]),price:new n.NI("",[n.kI.min(0),n.kI.max(99999999999999)]),cost:new n.NI("",[n.kI.min(0),n.kI.max(99999999999999)]),quantity:new n.NI("",[n.kI.min(0),n.kI.max(1e18)]),description:new n.NI("",[n.kI.minLength(0),n.kI.maxLength(500)]),category:new n.NI("",[]),department:new n.NI("",[])}),this.fields=[{name:"name",type:"text",group:"Primary",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"price",type:"currency",group:"Price",placeholder:"price",min:0,max:99999999999999},{name:"cost",type:"currency",group:"Price",placeholder:"cost",min:0,max:99999999999999},{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",min:0,max:1e18},{name:"description",type:"textarea",group:"Primary",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",group:"Meta",placeholder:"category",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",group:"Meta",placeholder:"department",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}]}ngOnInit(){this.categoryService.getAsOptions(["id","name"]),this.departmentService.getAsOptions(["id","name"])}submit(){!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.productService.add({name:this.value("name"),price:this.value("price"),cost:this.value("cost"),quantity:this.value("quantity"),description:this.value("description"),category:this.value("category"),department:this.value("department")}))}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.CategoryService),e.Y36(l.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-product"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return r.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,U)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",r.fields))},dependencies:[P.U,h.o,v.zx,g.u,s.rH,s.Od]}),o})();var f=i(9014),x=i(9114);const A=function(){return["../"]};let S=(()=>{class o{constructor(t,r,a,d){this.prmConfirmationService=t,this.productService=r,this.router=a,this.route=d,this.title="Delete Product"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.productService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.fL),e.Y36(u),e.Y36(s.F0),e.Y36(s.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-product"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,A)),e.xp6(2),e.hij(" ",r.title," "))},dependencies:[h.o,v.zx,g.u,x.Q,s.rH,s.Od]}),o})();var Y=i(7773);let I=(()=>{class o{constructor(t,r,a,d){this.router=t,this.route=r,this.resourceService=a,this.prmMessageService=d}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","product"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(u),e.Y36(f.sr))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-product"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,r){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[Y.FN,s.lC]}),o})();var T=i(9808),N=i(9671),V=i(6882),Z=i(3905);const D=function(){return["../"]};let b=(()=>{class o{constructor(t,r,a,d,p){this.productService=t,this.router=r,this.route=a,this.categoryService=d,this.departmentService=p,this.title="Update Product",this.formGroup=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]),price:new n.NI("",[n.kI.min(0),n.kI.max(99999999999999)]),cost:new n.NI("",[n.kI.min(0),n.kI.max(99999999999999)]),quantity:new n.NI("",[n.kI.min(0),n.kI.max(1e18)]),description:new n.NI("",[n.kI.minLength(0),n.kI.maxLength(500)]),category:new n.NI("",[]),department:new n.NI("",[])}),this.fields=[{name:"name",type:"text",group:"Primary",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"price",type:"currency",group:"Price",placeholder:"price",min:0,max:99999999999999},{name:"cost",type:"currency",group:"Price",placeholder:"cost",min:0,max:99999999999999},{name:"quantity",type:"number",group:"Quantity",placeholder:"quantity",min:0,max:1e18},{name:"description",type:"textarea",group:"Primary",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",group:"Meta",placeholder:"category",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",group:"Meta",placeholder:"department",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}]}ngOnInit(){this.categoryService.getAsOptions(["id","name"]),this.departmentService.getAsOptions(["id","name"])}ngAfterViewInit(){var t=this;return(0,N.Z)(function*(){const r=t.productService.getItemToBeUpdated();r&&(t.itemToBeUpdated=yield(0,Z.z)(t.productService.getByKey(r.id)),(0,V.EE)(t.formGroup,t.itemToBeUpdated))})()}submit(){this.formGroup.valid&&this.productService.update({id:this.itemToBeUpdated.id,name:this.value("name"),price:this.value("price"),cost:this.value("cost"),quantity:this.value("quantity"),description:this.value("description"),category:this.value("category"),department:this.value("department")})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.CategoryService),e.Y36(l.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-product"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return r.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,D)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",r.fields))},dependencies:[P.U,h.o,v.zx,g.u,s.rH,s.Od]}),o})();var G=i(2530);const M=["dataTable"];let w=(()=>{class o{constructor(t,r,a,d,p){this.productService=t,this.router=r,this.route=a,this.categoryService=d,this.departmentService=p,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.productService.allCount$,this.items$=this.productService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"price",field:"price"},{header:"cost",field:"cost"},{header:"quantity",field:"quantity"},{header:"description",field:"description"},{header:"category",field:"category"},{header:"department",field:"department"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.productService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,r){this.router.navigate([t],{relativeTo:this.route,queryParams:r})}selectItems(t){this.productService.updateSelection([...t])}handleEvent(){this.productService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.CategoryService),e.Y36(l.DepartmentService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-product"]],viewQuery:function(t,r){if(1&t&&e.Gf(M,5),2&t){let a;e.iGM(a=e.CRH())&&(r.dataTable=a.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,r){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return r.handleEvent()})("sortEvent",function(){return r.handleEvent()})("pageEvent",function(){return r.handleEvent()})("selectEvent",function(d){return r.selectItems(d)})("newEvent",function(){return r.newItem()})("editEvent",function(){return r.editItems()})("deleteEvent",function(d){return r.deleteItems(d)})("clearEvent",function(){return r.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,r.items$))("columns",r.columns)("totalRecords",e.lcZ(3,5,r.totalRecords$))},dependencies:[G.a,T.Ov]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[u,m.CategoryService,l.DepartmentService],imports:[T.ez,f.dT,s.Bz.forChild([{path:"",component:I,children:[{title:"View Product",path:"",component:w},{title:"Create Product",path:"create",component:C},{title:"Update Product",path:"update",component:b},{title:"Delete Product",path:"delete",component:S}]}])]}),o})()}}]);