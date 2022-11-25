"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[335],{2335:(H,A,i)=>{i.r(A),i.d(A,{CategoryComponent:()=>d,CategoryModule:()=>y,CategoryService:()=>c,CreateCategoryComponent:()=>p,DeleteCategoryComponent:()=>u,UpdateCategoryComponent:()=>g,ViewCategoryComponent:()=>h});var a=i(4006),L=i(8203),I=i(5964),e=i(4650),Y=i(8802),w=i(529);class c extends I.T{constructor(o,t){super("Category",o,t)}static#e=this.\u0275fac=function(t){return new(t||c)(e.LFG(Y.yV),e.LFG(w.eN))};static#t=this.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}var G=i(805),s=i(9595),l=i(6895),Z=i(4895),C=i(1383),T=i(5593),b=i(3608),m=i(2997);function U(f,o){if(1&f){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e.qZA()()()()}if(2&f){const t=o.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const O=function(){return["../"]};class p{constructor(o,t,r,n){this.categoryService=o,this.systemMessageService=t,this.router=r,this.route=n,this.submitted=!1,this.title="Create Category",this.formGroup=new a.cw({name:new a.NI(void 0,[a.kI.required,a.kI.minLength(0),a.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Category",placeholder:"name",required:!0,minLength:0,maxLength:20}],this.groups=Object.entries((0,L.v)(this.fields,"group"))}ngOnInit(){}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.categoryService.add({name:this.value("name")});else{const o=Object.entries(this.formGroup.controls).filter(t=>t[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${o[0]} field is not valid!`})}}value(o){return this.formGroup.get(o)?.value}static#e=this.\u0275fac=function(t){return new(t||p)(e.Y36(c),e.Y36(G.ez),e.Y36(s.F0),e.Y36(s.gz))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["ae-create-category"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Category",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,U,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,O)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[l.sg,Z.U,C.o,T.zx,b.u,a.JL,a.sg,m.C0,m.Vq,s.rH,s.Od,l.rS]})}var E=i(5296),x=i(2137);const k=function(){return["../"]};class u{constructor(o,t,r,n){this.prmConfirmationService=o,this.categoryService=t,this.router=r,this.route=n,this.title="Delete Category"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.categoryService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}static#e=this.\u0275fac=function(t){return new(t||u)(e.Y36(E.fL),e.Y36(c),e.Y36(s.F0),e.Y36(s.gz))};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["ae-delete-category"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,k)),e.xp6(2),e.hij(" ",r.title," "))},dependencies:[C.o,T.zx,b.u,x.Q,s.rH,s.Od]})}class d{constructor(o,t,r,n){this.router=o,this.route=t,this.resourceService=r,this.prmMessageService=n}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(o=>{o.type.endsWith("add-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Created"}),this.goHome()),o.type.endsWith("delete-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Deleted"}),this.goHome()),o.type.endsWith("update-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Updated"}),this.goHome()),o.type.endsWith("add-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Created"}),this.goHome()),o.type.endsWith("delete-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Deleted"}),this.goHome()),o.type.endsWith("update-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","category"])}static#e=this.\u0275fac=function(t){return new(t||d)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(c),e.Y36(E.sr))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["ae-category"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},dependencies:[s.lC]})}var v=i(3676),F=i(5861),M=i(9815),V=i(3905);function J(f,o){if(1&f){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e.qZA()()()()}if(2&f){const t=o.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const D=function(){return["../"]};class g{constructor(o,t,r,n){this.categoryService=o,this.router=t,this.systemMessageService=r,this.route=n,this.title="Update Category",this.formGroup=new a.cw({name:new a.NI(void 0,[a.kI.required,a.kI.minLength(0),a.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Category",placeholder:"name",required:!0,minLength:0,maxLength:20}],this.groups=Object.entries((0,L.v)(this.fields,"group"))}ngOnInit(){}ngAfterViewInit(){var o=this;return(0,F.Z)(function*(){const t=o.categoryService.getItemToBeUpdated();if(t)return o.itemToBeUpdated=yield(0,V.z)(o.categoryService.getByKey(t.id)),void(0,M.EE)(o.formGroup,o.itemToBeUpdated);o.router.navigate(["../"],{relativeTo:o.route})})()}submit(){if(this.formGroup.valid)this.categoryService.update({id:this.itemToBeUpdated.id,name:this.value("name")});else{const o=Object.entries(this.formGroup.controls).filter(t=>t[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${o[0]} field is not valid!`})}}getOptions(o){return JSON.parse(localStorage.getItem(o)||"[]")}value(o){return this.formGroup.get(o)?.value}static#e=this.\u0275fac=function(t){return new(t||g)(e.Y36(c),e.Y36(s.F0),e.Y36(G.ez),e.Y36(s.gz))};static#t=this.\u0275cmp=e.Xpm({type:g,selectors:[["ae-update-category"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Category",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,J,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,D)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[l.sg,Z.U,C.o,T.zx,b.u,a.JL,a.sg,m.C0,m.Vq,s.rH,s.Od,l.rS]})}i(289);var z=i(5045);const _=["dataTable"];class h{constructor(o,t,r){this.categoryService=o,this.router=t,this.route=r,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.categoryService.allCount$,this.items$=this.categoryService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.categoryService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(o){this.goTo("delete")}goTo(o,t){this.router.navigate([o],{relativeTo:this.route,queryParams:t})}selectItems(o){this.categoryService.updateSelection([...o])}handleEvent(){this.categoryService.query(this.dataTable.table)}static#e=this.\u0275fac=function(t){return new(t||h)(e.Y36(c),e.Y36(s.F0),e.Y36(s.gz))};static#t=this.\u0275cmp=e.Xpm({type:h,selectors:[["ae-view-category"]],viewQuery:function(t,r){if(1&t&&e.Gf(_,5),2&t){let n;e.iGM(n=e.CRH())&&(r.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,r){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return r.handleEvent()})("sortEvent",function(){return r.handleEvent()})("pageEvent",function(){return r.handleEvent()})("selectEvent",function(S){return r.selectItems(S)})("newEvent",function(){return r.newItem()})("editEvent",function(){return r.editItems()})("deleteEvent",function(S){return r.deleteItems(S)})("clearEvent",function(){return r.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,r.items$))("columns",r.columns)("totalRecords",e.lcZ(3,5,r.totalRecords$))},dependencies:[z.a,l.Ov]})}class y{static#e=this.\u0275fac=function(t){return new(t||y)};static#t=this.\u0275mod=e.oAB({type:y});static#o=this.\u0275inj=e.cJS({providers:[c],imports:[l.ez,E.dT,m.T5,s.Bz.forChild([{path:"",component:d,children:[{title:"View Category",path:"",component:h,data:{permission:"READ:CATEGORY"},canActivate:[v.nG]},{title:"Create Category",path:"create",component:p,data:{permission:"WRITE:CATEGORY"},canActivate:[v.nG]},{title:"Update Category",path:"update",component:g,data:{permission:"WRITE:CATEGORY"},canActivate:[v.nG]},{title:"Delete Category",path:"delete",component:u,data:{permission:"WRITE:CATEGORY"},canActivate:[v.nG]}]}])]})}}}]);