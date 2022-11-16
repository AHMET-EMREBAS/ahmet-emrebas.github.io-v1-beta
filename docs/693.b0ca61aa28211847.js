"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[693],{6693:(O,C,i)=>{i.r(C),i.d(C,{CreateProductComponent:()=>S,DeleteProductComponent:()=>b,ProductComponent:()=>L,ProductModule:()=>M,ProductService:()=>l.M,UpdateProductComponent:()=>w,ViewProductComponent:()=>A});var a=i(2382),e=i(5e3),l=i(5419),s=i(6026),m=i(5694),v=i(7340),P=i(9358),h=i(4534),f=i(845),g=i(4119);const U=function(){return["../"]};let S=(()=>{class r{constructor(t,o,n,c,p){this.productService=t,this.router=o,this.route=n,this.categoryService=c,this.departmentService=p,this.submitted=!1,this.title="Create Product",this.formGroup=new a.cw({name:new a.NI("",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(50)]),description:new a.NI("",[a.kI.minLength(0),a.kI.maxLength(500)]),category:new a.NI("",[]),department:new a.NI("",[])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"description",type:"textarea",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",placeholder:"category",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",placeholder:"department",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}],this.productService.getAll(),this.categoryService.getAll(),this.departmentService.getAll()}submit(){var t,o;!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.productService.add({name:this.value("name"),description:this.value("description"),category:null===(t=this.value("category"))||void 0===t?void 0:t.id,department:null===(o=this.value("department"))||void 0===o?void 0:o.id}))}value(t){var o;return null===(o=this.formGroup.get(t))||void 0===o?void 0:o.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.M),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.H),e.Y36(v.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-create-product"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return o.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,U)),e.xp6(2),e.hij(" ",o.title," "),e.xp6(2),e.Q6J("formGroup",o.formGroup)("fields",o.fields))},dependencies:[P.U,h.o,f.zx,g.u,s.rH,s.Od]}),r})();var y=i(9783),T=i(9114);const Y=function(){return["../"]};let b=(()=>{class r{constructor(t,o,n,c){this.confirmService=t,this.productService=o,this.router=n,this.route=c,this.title="Delete Product"}ngOnInit(){this.confirmService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.productService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(y.YP),e.Y36(l.M),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-delete-product"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,Y)),e.xp6(2),e.hij(" ",o.title," "))},dependencies:[h.o,f.zx,g.u,T.Q,s.rH,s.Od]}),r})();var E=i(7773);let L=(()=>{class r{constructor(t,o,n,c){this.router=t,this.route=o,this.service=n,this.messageService=c}ngOnInit(){this.sub=this.service.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.messageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.messageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.messageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.messageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.messageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.messageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","product"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(l.M),e.Y36(y.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-product"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,o){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[E.FN,s.lC]}),r})();var I=i(9808),V=i(4933),Z=i(1565),D=i(3724),G=i(4453);const N=function(){return["../"]};let w=(()=>{class r{constructor(t,o,n,c,p){this.productService=t,this.router=o,this.route=n,this.categoryService=c,this.departmentService=p,this.title="Update Product",this.formGroup=new a.cw({name:new a.NI("",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(50)]),description:new a.NI("",[a.kI.minLength(0),a.kI.maxLength(500)]),category:new a.NI("",[]),department:new a.NI("",[])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:3,maxLength:50},{name:"description",type:"textarea",placeholder:"description",minLength:0,maxLength:500},{name:"category",type:"select",placeholder:"category",asyncOptions:this.categoryService.entities$,optionValue:"id",optionLabel:"name"},{name:"department",type:"select",placeholder:"department",asyncOptions:this.departmentService.entities$,optionValue:"id",optionLabel:"name"}],this.productService.getAll(),this.categoryService.getAll(),this.departmentService.getAll()}ngAfterViewInit(){const t=this.productService.getItemToBeUpdated();t&&(this.itemToBeUpdated=t,(0,G.E)(this.formGroup,t))}submit(){var t,o;this.formGroup.valid&&this.productService.update({id:this.itemToBeUpdated.id,name:this.value("name"),description:this.value("description"),category:null===(t=this.value("category"))||void 0===t?void 0:t.id,department:null===(o=this.value("department"))||void 0===o?void 0:o.id})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var o;return null===(o=this.formGroup.get(t))||void 0===o?void 0:o.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.M),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.H),e.Y36(v.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-update-product"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return o.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,N)),e.xp6(2),e.hij(" ",o.title," "),e.xp6(2),e.Q6J("formGroup",o.formGroup)("fields",o.fields))},dependencies:[P.U,h.o,f.zx,g.u,s.rH,s.Od]}),r})();var k=i(2530);const H=["dataTable"];let A=(()=>{class r{constructor(t,o,n,c,p){this.productService=t,this.router=o,this.route=n,this.categoryService=c,this.departmentService=p,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.productService.allCount$,this.items$=this.productService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"description",field:"description"},{header:"category",field:"category",mapper:u=>null==u?void 0:u.name},{header:"department",field:"department",mapper:u=>null==u?void 0:u.name},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.productService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,o){this.router.navigate([t],{relativeTo:this.route,queryParams:o})}selectItems(t){this.productService.updateSelection([...t])}handleEvent(){this.productService.query(this.dataTable.table)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.M),e.Y36(s.F0),e.Y36(s.gz),e.Y36(m.H),e.Y36(v.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-view-product"]],viewQuery:function(t,o){if(1&t&&e.Gf(H,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,o){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return o.handleEvent()})("sortEvent",function(){return o.handleEvent()})("pageEvent",function(){return o.handleEvent()})("selectEvent",function(c){return o.selectItems(c)})("newEvent",function(){return o.newItem()})("editEvent",function(){return o.editItems()})("deleteEvent",function(c){return o.deleteItems(c)})("clearEvent",function(){return o.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,o.items$))("columns",o.columns)("totalRecords",e.lcZ(3,5,o.totalRecords$))},dependencies:[k.a,I.Ov]}),r})(),M=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[l.M,m.H,v.n,y.YP,y.ez],imports:[I.ez,Z.U,V.e,h.V,f.hJ,g.z,T.D,D.O,E.EV,s.Bz.forChild([{path:"",component:L,children:[{title:"View Product",path:"",component:A},{title:"Create Product",path:"create",component:S},{title:"Update Product",path:"update",component:w},{title:"Delete Product",path:"delete",component:b}]}])]}),r})()}}]);