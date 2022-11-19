"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53],{53:(z,h,i)=>{i.r(h),i.d(h,{CreateDepartmentComponent:()=>g,DeleteDepartmentComponent:()=>D,DepartmentComponent:()=>C,DepartmentModule:()=>k,DepartmentService:()=>p,UpdateDepartmentComponent:()=>T,ViewDepartmentComponent:()=>E});var m=i(2382),b=i(9728),e=i(5e3),S=i(1924),w=i(520);let p=(()=>{class r extends b.T{constructor(t,n){super("Department",t,n)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(S.yV),e.LFG(w.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var s=i(4650),f=i(9358),d=i(4534),u=i(845),c=i(4119);const I=function(){return["../"]};let g=(()=>{class r{constructor(t,n,o){this.departmentService=t,this.router=n,this.route=o,this.submitted=!1,this.title="Create Department",this.formGroup=new m.cw({name:new m.NI("",[m.kI.required,m.kI.minLength(3),m.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Primary",placeholder:"name",required:!0,minLength:3,maxLength:20}]}ngOnInit(){}submit(){!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.departmentService.add({name:this.value("name")}))}value(t){var n;return null===(n=this.formGroup.get(t))||void 0===n?void 0:n.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-create-department"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return n.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,I)),e.xp6(2),e.hij(" ",n.title," "),e.xp6(2),e.Q6J("formGroup",n.formGroup)("fields",n.fields))},dependencies:[f.U,d.o,u.zx,c.u,s.rH,s.Od]}),r})();var v=i(9014),U=i(9114);const L=function(){return["../"]};let D=(()=>{class r{constructor(t,n,o,l){this.prmConfirmationService=t,this.departmentService=n,this.router=o,this.route=l,this.title="Delete Department"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.departmentService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.fL),e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-delete-department"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,L)),e.xp6(2),e.hij(" ",n.title," "))},dependencies:[d.o,u.zx,c.u,U.Q,s.rH,s.Od]}),r})();var Z=i(7773);let C=(()=>{class r{constructor(t,n,o,l){this.router=t,this.route=n,this.resourceService=o,this.prmMessageService=l}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","department"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(p),e.Y36(v.sr))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-department"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,n){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[Z.FN,s.lC]}),r})();var y=i(9808),A=i(9671),G=i(6882),V=i(3905);const Y=function(){return["../"]};let T=(()=>{class r{constructor(t,n,o){this.departmentService=t,this.router=n,this.route=o,this.title="Update Department",this.formGroup=new m.cw({name:new m.NI("",[m.kI.required,m.kI.minLength(3),m.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Primary",placeholder:"name",required:!0,minLength:3,maxLength:20}]}ngOnInit(){}ngAfterViewInit(){var t=this;return(0,A.Z)(function*(){const n=t.departmentService.getItemToBeUpdated();n&&(t.itemToBeUpdated=yield(0,V.z)(t.departmentService.getByKey(n.id)),(0,G.EE)(t.formGroup,t.itemToBeUpdated))})()}submit(){this.formGroup.valid&&this.departmentService.update({id:this.itemToBeUpdated.id,name:this.value("name")})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var n;return null===(n=this.formGroup.get(t))||void 0===n?void 0:n.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-update-department"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return n.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,Y)),e.xp6(2),e.hij(" ",n.title," "),e.xp6(2),e.Q6J("formGroup",n.formGroup)("fields",n.fields))},dependencies:[f.U,d.o,u.zx,c.u,s.rH,s.Od]}),r})();var F=i(2530);const M=["dataTable"];let E=(()=>{class r{constructor(t,n,o){this.departmentService=t,this.router=n,this.route=o,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.departmentService.allCount$,this.items$=this.departmentService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.departmentService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,n){this.router.navigate([t],{relativeTo:this.route,queryParams:n})}selectItems(t){this.departmentService.updateSelection([...t])}handleEvent(){this.departmentService.query(this.dataTable.table)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-view-department"]],viewQuery:function(t,n){if(1&t&&e.Gf(M,5),2&t){let o;e.iGM(o=e.CRH())&&(n.dataTable=o.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,n){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return n.handleEvent()})("sortEvent",function(){return n.handleEvent()})("pageEvent",function(){return n.handleEvent()})("selectEvent",function(l){return n.selectItems(l)})("newEvent",function(){return n.newItem()})("editEvent",function(){return n.editItems()})("deleteEvent",function(l){return n.deleteItems(l)})("clearEvent",function(){return n.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,n.items$))("columns",n.columns)("totalRecords",e.lcZ(3,5,n.totalRecords$))},dependencies:[F.a,y.Ov]}),r})(),k=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[p],imports:[y.ez,v.dT,s.Bz.forChild([{path:"",component:C,children:[{title:"View Department",path:"",component:E},{title:"Create Department",path:"create",component:g},{title:"Update Department",path:"update",component:T},{title:"Delete Department",path:"delete",component:D}]}])]}),r})()}}]);