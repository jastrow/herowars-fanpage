"use strict";(self.webpackChunkhw=self.webpackChunkhw||[]).push([[643],{643:(ge,Y,a)=>{a.r(Y),a.d(Y,{HeroModule:()=>fe});var V=a(8751),c=a(177),r=a(9417),F=a(1635),t=a(4438),d=a(2791),G=a(8359),R=a(1413),h=a(8141),z=a(6354),D=a(6977),N=a(9437),w=a(7673),B=a(980),W=a(11),P=a(1626),T=a(4412),L=a(3491),U=a(8953),I=function(i){return i.KLASSE="klasse",i.TIER="tier",i}(I||{});let g=(()=>{class i{constructor(){this.http=(0,t.WQX)(P.Qq),this.env=(0,t.WQX)(U.M),this.loginService=(0,t.WQX)(L.H),this.tierlist=["-","S+","S","A+","A","B","C","D"],this.classes=["-","Heiler","Kontrolle","Magier","Sch\xfctze","Unterst\xfctzer","Panzer","Krieger"],this.herolistFilter=new T.t({filtertier:null,filterklasse:null})}setHeroFilter(e,o){if(e===I.KLASSE&&this.classes.includes(o)){let s=this.herolistFilter.value;s.filterklasse=o,this.herolistFilter.next(s)}if(e===I.TIER&&this.tierlist.includes(o)){let s=this.herolistFilter.value;s.filtertier=o,this.herolistFilter.next(s)}}setHeroFilters(e){this.herolistFilter.next(e)}getHeroFilter(){return this.herolistFilter}getHeroNames(){return this.http.get(this.env.apiUrl+"/heroes.php?heronames=1")}getHeroByName(e,o){return this.http.get(this.env.apiUrl+"/heroes.php?heroByName="+e+(o?"&edit=1":""))}sendHero(e){return this.http.post(this.env.apiUrl+"/heroes.php?hero_id="+e.hero_id,e)}deleteHero(e){return this.http.get(this.env.apiUrl+"/heroes.php?deletehero="+encodeURI(e))}getHeroNamesFiltered(e,o){e="-"===e?"":e,o="-"===o?"":o;let s=this.env.apiUrl+"/heroes.php?filtertier="+encodeURI(e)+"&filterklasse="+encodeURI(o);return console.log(s),this.http.get(s)}getHeroTeams(){return this.http.get(this.env.apiUrl+"/heroes.php?teams=1")}getHeroTeam(e){return this.http.get(this.env.apiUrl+"/heroes.php?team="+e)}saveHeroTeam(e){return this.http.post(this.env.apiUrl+"/heroes.php?saveteam=1",e)}deleteTeam(e){return this.http.get(this.env.apiUrl+"/heroes.php?deleteteam="+e)}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _=a(3487),$=a(4602),E=a(4558),f=a(2782);const Q=i=>[i];function K(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",12)(1,"button",13),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.prevSkin())}),t.k0s(),t.j41(2,"span"),t.EFF(3),t.k0s(),t.j41(4,"button",14),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.nextSkin())}),t.k0s()()}if(2&i){const e=t.XpG(2);t.R7$(3),t.JRh(e.getSkinName())}}function A(i,n){if(1&i&&(t.j41(0,"div",15),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(),t.JRh(e)}}function Z(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",16),t.bIt("click",function(){const s=t.eBV(e).$implicit,p=t.XpG(2);return t.Njj(p.selectSkin(s))}),t.EFF(1),t.k0s()}if(2&i){const e=n.$implicit;t.R7$(),t.JRh(e)}}function q(i,n){if(1&i&&(t.j41(0,"div",15),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(),t.JRh(e)}}function tt(i,n){if(1&i){const e=t.RV6();t.j41(0,"p",17)(1,"button",18),t.EFF(2,"Bearbeiten"),t.k0s(),t.j41(3,"button",19),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2),p=t.sdS(5);return t.Njj(s.deleteHero(p))}),t.EFF(4,"L\xf6schen"),t.k0s()()}if(2&i){const e=t.XpG().ngIf;t.R7$(),t.Y8G("routerLink",t.eq3(1,Q,"/hero/hero/edithero/"+e.name))}}function et(i,n){if(1&i&&(t.qex(0),t.j41(1,"div",4),t.nrm(2,"img",5),t.DNE(3,K,5,1,"div",6),t.k0s(),t.j41(4,"h1"),t.EFF(5),t.k0s(),t.j41(6,"p")(7,"strong"),t.EFF(8,"Position:"),t.k0s(),t.EFF(9),t.nrm(10,"br"),t.j41(11,"strong"),t.EFF(12,"Tier-List:"),t.k0s(),t.EFF(13),t.nrm(14,"br"),t.j41(15,"strong"),t.EFF(16,"Funktion:"),t.k0s(),t.EFF(17),t.k0s(),t.nrm(18,"p",7),t.j41(19,"h2",8),t.EFF(20,"Artefakte Priorit\xe4t"),t.k0s(),t.DNE(21,A,2,1,"div",9),t.j41(22,"h2",8),t.EFF(23,"Skin Priorit\xe4t"),t.k0s(),t.DNE(24,Z,2,1,"div",10),t.j41(25,"h2",8),t.EFF(26,"Glyphen Priorit\xe4t"),t.k0s(),t.DNE(27,q,2,1,"div",9)(28,tt,5,3,"p",11),t.nI1(29,"async"),t.bVm()),2&i){const e=n.ngIf,o=t.XpG();t.R7$(2),t.FS9("src",o.getSkinUrl(),t.B4B),t.R7$(),t.Y8G("ngIf",e.skins.length),t.R7$(2),t.JRh(e.name),t.R7$(4),t.SpI(" ",e.position,""),t.R7$(4),t.SpI(" ",e.tierlist,""),t.R7$(4),t.SpI(" ",e.funktion," "),t.R7$(),t.Y8G("innerHTML",e.description,t.npT),t.R7$(3),t.Y8G("ngForOf",e.artifacts),t.R7$(3),t.Y8G("ngForOf",e.skins),t.R7$(3),t.Y8G("ngForOf",e.glyphs),t.R7$(),t.Y8G("ngIf",t.bMT(29,11,o.auth$))}}function it(i,n){if(1&i){const e=t.RV6();t.j41(0,"p"),t.EFF(1,"Wirklich l\xf6schen?"),t.k0s(),t.j41(2,"button",20),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.withdraw())}),t.EFF(3,"L\xf6schen"),t.k0s(),t.j41(4,"button",21),t.bIt("click",function(){const s=t.eBV(e).$implicit;return t.Njj(s.complete())}),t.EFF(5,"Abbrechen"),t.k0s()}}class v{constructor(n){this.dialogs=n,this.route=(0,t.WQX)(d.nX),this.subscription=new G.yU,this.service=(0,t.WQX)(W.O),this.heroService=(0,t.WQX)(g),this.selectedSkin=0,this.skins=[],this.heroName="",this.close$=new R.B,this.store=(0,t.WQX)(_.il),this.router=(0,t.WQX)(d.Ix)}ngOnInit(){this.subscription.add(this.route.params.pipe((0,h.M)(n=>{this.hero$=this.heroService.getHeroByName(n.id,!1).pipe((0,h.M)(e=>{this.skins=[...this.skins,...e.skins.split(",")],this.heroName=e.name}),(0,z.T)(e=>({...e,skins:e.skins.split(","),glyphs:e.glyphs.split(","),artifacts:e.artefacts.split(",")})))})).subscribe(n=>{this.service.backgroundImage="/assets/poster/"+n.id+".png"}))}ngOnDestroy(){this.subscription.unsubscribe()}deleteHero(n){this.dialogs.open(n).pipe((0,D.Q)(this.close$)).subscribe()}withdraw(){this.subscription.add(this.heroService.deleteHero(this.heroName).pipe((0,N.W)(n=>(0,w.of)(n)),(0,B.j)(()=>this.close$.next(!1))).subscribe(n=>{this.router.navigate(["/hero/heroes"])}))}nextSkin(){let n=this.selectedSkin+1;this.selectedSkin=n>=this.skins.length?0:n}prevSkin(){let n=this.selectedSkin-1;this.selectedSkin=n<0?this.skins.length-1:n}getSkinName(){return this.skins[this.selectedSkin]}getSkinUrl(){let n=this.skins[this.selectedSkin];return"/assets/hero/"+this.heroName+("Standard"===n?"":"_"+n)+".png"}selectSkin(n){this.selectedSkin=this.skins.indexOf(n)}deleteHero2(){this.heroService.deleteHero(this.heroName).pipe((0,N.W)(n=>(0,w.of)(n))).subscribe(n=>{this.router.navigate(["/hero/heroes"])})}static#t=this.\u0275fac=function(e){return new(e||v)(t.rXU($.wX))};static#e=this.\u0275cmp=t.VBU({type:v,selectors:[["app-hero"]],decls:6,vars:4,consts:[["deleteModal",""],[1,"content"],[3,"definedRoute"],[4,"ngIf"],[1,"heroimage"],[1,"heroimg",3,"src"],["class","scrollhero",4,"ngIf"],[3,"innerHTML"],[2,"margin-top","1em"],["class","chip",4,"ngFor","ngForOf"],["class","chip skinchip",3,"click",4,"ngFor","ngForOf"],["style","margin-top:2em",4,"ngIf"],[1,"scrollhero"],["tuiIconButton","","type","button","icon","tuiIconChevronsLeft","size","s",3,"click"],["tuiIconButton","","type","button","icon","tuiIconChevronsRight","size","s",3,"click"],[1,"chip"],[1,"chip","skinchip",3,"click"],[2,"margin-top","2em"],["appearance","primary","tuiButton","","type","button","size","m",2,"margin-right","1em",3,"routerLink"],["appearance","primary","tuiButton","","type","button","size","m",3,"click"],["size","m","tuiButton","","type","button",1,"tui-space_right-3",3,"click"],["size","m","tuiButton","","type","button",3,"click"]],template:function(e,o){1&e&&(t.j41(0,"div",1),t.nrm(1,"app-subnav",2),t.DNE(2,et,30,13,"ng-container",3),t.nI1(3,"async"),t.k0s(),t.DNE(4,it,6,0,"ng-template",null,0,t.C5r)),2&e&&(t.R7$(),t.Y8G("definedRoute","hero"),t.R7$(),t.Y8G("ngIf",t.bMT(3,2,o.hero$)))},dependencies:[c.Sq,c.bT,d.Wk,E.z,f.SM,c.Jj],styles:["[_nghost-%COMP%]{display:block}.heroimage[_ngcontent-%COMP%]{padding:.5em;float:right;max-width:50%}.heroimg[_ngcontent-%COMP%]{max-height:300px;max-width:100%;border-radius:.8em .8em 0 0;border:2px solid black}h2[_ngcontent-%COMP%]{font-family:Protest Strike,sans-serif;font-weight:400;font-style:normal;color:#d6ab08}.chip[_ngcontent-%COMP%]{display:inline-block;padding:.3em .5em;border:1px solid #D6AB08;border-radius:.4em;background-color:#000;margin-right:.5em;margin-bottom:.5em}.scrollhero[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.3em;background-color:#000;border-radius:0 0 .8em .8em}.skinchip[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 575.98px){.heroimage[_ngcontent-%COMP%]{float:none;padding:.5em;width:auto;max-width:100%;display:block}.heroimg[_ngcontent-%COMP%]{max-height:100%}}"],changeDetection:0})}(0,F.Cg)([(0,_.l6)(i=>i.auth.sessionId)],v.prototype,"auth$",void 0);var S=a(3584),M=a(2630),X=a(620),C=a(573);const nt=i=>["/hero/hero/",i],ot=()=>["/hero/hero/edithero/"];function st(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",10),2&i){const e=t.XpG();t.Y8G("items",e.service.tierlist)}}function rt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",10),2&i){const e=t.XpG();t.Y8G("items",e.service.classes)}}function at(i,n){if(1&i&&(t.j41(0,"div",12)(1,"div",13),t.EFF(2),t.k0s()()),2&i){const e=n.$implicit;t.muq("background-image: url(/assets/hero/",e,".png);"),t.Y8G("routerLink",t.eq3(5,nt,e)),t.R7$(2),t.JRh(e)}}function lt(i,n){if(1&i&&(t.j41(0,"div"),t.DNE(1,at,3,7,"div",11),t.k0s()),2&i){const e=n.ngIf;t.R7$(),t.Y8G("ngForOf",e)}}function ct(i,n){1&i&&(t.j41(0,"div")(1,"button",14),t.EFF(2,"Held hinzuf\xfcgen"),t.k0s()()),2&i&&(t.R7$(),t.Y8G("routerLink",t.lJ4(1,ot)))}class k{constructor(){this.service=(0,t.WQX)(g),this.filtered$=new T.t([]),this.filter$=new T.t({filtertier:null,filterklasse:null}),this.form=new r.gE({filterTier:new r.MJ("-"),filterKlasse:new r.MJ("-")}),this.subscriptions=new G.yU}ngOnInit(){this.filter$=this.service.getHeroFilter();const n=this.filter$.value;this.form.get("filterTier")?.setValue(n.filtertier),this.form.get("filterKlasse")?.setValue(n.filterklasse),this.subscriptions.add(this.form.valueChanges.subscribe(e=>{this.service.setHeroFilters({filtertier:e.filterTier?e.filterTier:"-",filterklasse:e.filterKlasse?e.filterKlasse:"-"})})),this.subscriptions.add(this.filter$.subscribe(e=>{this.service.getHeroNamesFiltered(e.filtertier?e.filtertier:"-",e.filterklasse?e.filterklasse:"-").subscribe(p=>{this.filtered$.next(p)})}))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||k)};static#e=this.\u0275cmp=t.VBU({type:k,selectors:[["app-heroes"]],decls:21,vars:8,consts:[[1,"content"],[3,"definedRoute"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],["tuiTextfieldSize","m","formControlName","filterTier"],["tuiTextfield",""],[3,"items",4,"tuiDataList"],["tuiTextfieldSize","m","formControlName","filterKlasse"],[4,"ngIf"],[3,"items"],["class","hero",3,"routerLink","style",4,"ngFor","ngForOf"],[1,"hero",3,"routerLink"],[1,"hname"],["tuiButton","","type","button",3,"routerLink"]],template:function(e,o){1&e&&(t.j41(0,"div")(1,"div",0),t.nrm(2,"app-subnav",1),t.j41(3,"h1"),t.EFF(4,"Helden Liste"),t.k0s(),t.j41(5,"form",2)(6,"div",3)(7,"div",4)(8,"tui-select",5),t.EFF(9," Filter Tier "),t.nrm(10,"input",6),t.DNE(11,st,1,1,"tui-data-list-wrapper",7),t.k0s()(),t.j41(12,"div",4)(13,"tui-select",8),t.EFF(14," Filter Klasse "),t.nrm(15,"input",6),t.DNE(16,rt,1,1,"tui-data-list-wrapper",7),t.k0s()()()(),t.DNE(17,lt,2,1,"div",9),t.nI1(18,"async"),t.DNE(19,ct,3,2,"div",9),t.nI1(20,"async"),t.k0s()()),2&e&&(t.R7$(2),t.Y8G("definedRoute","hero"),t.R7$(3),t.Y8G("formGroup",o.form),t.R7$(12),t.Y8G("ngIf",t.bMT(18,4,o.filtered$)),t.R7$(2),t.Y8G("ngIf",t.bMT(20,6,o.auth$)))},dependencies:[c.Sq,c.bT,r.qT,r.BC,r.cb,d.Wk,r.j4,r.JD,E.z,f.SM,S.WX,X.df,M.Bw,C.ET,C.ww,c.Jj],styles:["[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{display:inline-flex;border:3px solid black;color:gray;width:100px;height:100px;background-position:center;background-repeat:no-repeat;background-size:contain;margin:.5em;justify-content:center;align-items:flex-end;align-content:flex-end;cursor:pointer}.hname[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;width:100%;text-align:center;padding:.2em 0 0}"],changeDetection:0})}(0,F.Cg)([(0,_.l6)(i=>i.auth.sessionId)],k.prototype,"auth$",void 0);var x=a(2180),H=a(180);function pt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.positions)}}function ut(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.service.tierlist)}}function dt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.service.classes)}}function mt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.service.classes)}}function ht(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function _t(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function ft(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function gt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function vt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function kt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.skinNames)}}function bt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.glyphNames)}}function Ft(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.glyphNames)}}function Tt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.glyphNames)}}function Et(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.glyphNames)}}function Ct(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.glyphNames)}}function xt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.artefactNames)}}function Ht(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.artefactNames)}}function yt(i,n){if(1&i&&t.nrm(0,"tui-data-list-wrapper",35),2&i){const e=t.XpG(2);t.Y8G("items",e.artefactNames)}}function jt(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",1)(1,"h1"),t.EFF(2,"Neuen Held anlegen"),t.k0s(),t.j41(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",4)(7,"tui-input",5),t.EFF(8," Name des Helden "),t.nrm(9,"input",6),t.k0s()()()(),t.j41(10,"div",3)(11,"div",4)(12,"tui-select",7),t.EFF(13," Kampfposition "),t.nrm(14,"input",8),t.DNE(15,pt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(16,"div",4)(17,"tui-select",10),t.EFF(18," Tier List "),t.nrm(19,"input",11),t.DNE(20,ut,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(21,"div",3)(22,"div",4)(23,"tui-select",12),t.EFF(24," Klasse "),t.nrm(25,"input",13),t.DNE(26,dt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(27,"div",4)(28,"tui-select",14),t.EFF(29," Sekund\xe4re Klasse "),t.nrm(30,"input",15),t.DNE(31,mt,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(32,"p")(33,"tui-textarea",16),t.EFF(34," Hinweise & Tips "),t.k0s()(),t.j41(35,"p"),t.EFF(36,"Skin & Priorit\xe4t"),t.k0s(),t.j41(37,"div",3)(38,"div",17)(39,"tui-select",18),t.EFF(40," Skin Priorit\xe4t 1 "),t.nrm(41,"input",19),t.DNE(42,ht,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(43,"div",17)(44,"tui-select",20),t.EFF(45," Skin Priorit\xe4t 2 "),t.nrm(46,"input",19),t.DNE(47,_t,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(48,"div",17)(49,"tui-select",21),t.EFF(50," Skin Priorit\xe4t 3 "),t.nrm(51,"input",19),t.DNE(52,ft,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(53,"div",3)(54,"div",17)(55,"tui-select",22),t.EFF(56," Skin Priorit\xe4t 4 "),t.nrm(57,"input",19),t.DNE(58,gt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(59,"div",17)(60,"tui-select",23),t.EFF(61," Skin Priorit\xe4t 5 "),t.nrm(62,"input",19),t.DNE(63,vt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(64,"div",17)(65,"tui-select",24),t.EFF(66," Skin Priorit\xe4t 6 "),t.nrm(67,"input",19),t.DNE(68,kt,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(69,"p"),t.EFF(70,"Glyphen & Priorit\xe4t"),t.k0s(),t.j41(71,"div",3)(72,"div",17)(73,"tui-select",25),t.EFF(74," Glyphe Priorit\xe4t 1 "),t.nrm(75,"input",19),t.DNE(76,bt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(77,"div",17)(78,"tui-select",26),t.EFF(79," Glyphe Priorit\xe4t 2 "),t.nrm(80,"input",19),t.DNE(81,Ft,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(82,"div",17)(83,"tui-select",27),t.EFF(84," Glyphe Priorit\xe4t 3 "),t.nrm(85,"input",19),t.DNE(86,Tt,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(87,"div",3)(88,"div",17)(89,"tui-select",28),t.EFF(90," Glyphe Priorit\xe4t 4 "),t.nrm(91,"input",19),t.DNE(92,Et,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(93,"div",17)(94,"tui-select",29),t.EFF(95," Glyphe Priorit\xe4t 5 "),t.nrm(96,"input",19),t.DNE(97,Ct,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(98,"p"),t.EFF(99,"Artefakt Priorit\xe4t"),t.k0s(),t.j41(100,"div",3)(101,"div",17)(102,"tui-select",30),t.EFF(103," Artefakt Priorit\xe4t 1 "),t.nrm(104,"input",19),t.DNE(105,xt,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(106,"div",17)(107,"tui-select",31),t.EFF(108," Artefakt Priorit\xe4t 2 "),t.nrm(109,"input",19),t.DNE(110,Ht,1,1,"tui-data-list-wrapper",9),t.k0s()(),t.j41(111,"div",17)(112,"tui-select",32),t.EFF(113," Artefakt Priorit\xe4t 3 "),t.nrm(114,"input",19),t.DNE(115,yt,1,1,"tui-data-list-wrapper",9),t.k0s()()(),t.j41(116,"p")(117,"button",33),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.sendData())}),t.EFF(118,"Abschicken"),t.k0s(),t.j41(119,"button",34),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.abbrechen())}),t.EFF(120,"Abbrechen"),t.k0s()()()()}if(2&i){const e=t.XpG();t.R7$(3),t.Y8G("formGroup",e.form)}}class b{constructor(n){this.dialogs=n,this.service=(0,t.WQX)(g),this.activeRoute=(0,t.WQX)(d.nX),this.router=(0,t.WQX)(d.Ix),this.subscription=new G.yU,this.heroId=null,this.heroName=null,this.skinNames=["","Standard","Angelic","Barbarian","Beach","Blooming","Celestial","Champion","Champion","Cybernetic","Dark_Depths","Demonic","Illusionist","Lunar","Masquerade","Mechanical","Nordic","Phoenix","Predator","Romantic","Rowdy","Solar","Spring","Stellar","Sweettooth","Thundering","Winter"],this.glyphNames=["Physischer Angriff","R\xfcstung","Ausweichen","R\xfcstungspenetration","Agilit\xe4t","Magischer Angriff","Gesundheit","Magische Verteidigung","Intelligenz","St\xe4rke","Krit. Treffer","Magiest\xe4rke"],this.artefactNames=["Waffe","Buch","Ring"],this.positions=["Vorne","Hinten","Mitte"],this.skins=[],this.glyphs=[],this.form=new r.gE({hero_id:new r.MJ(""),name:new r.MJ(""),position:new r.MJ(""),tierlist:new r.MJ(""),funktion:new r.MJ(""),funktion2:new r.MJ(""),description:new r.MJ(""),skin1:new r.MJ(""),skin2:new r.MJ(""),skin3:new r.MJ(""),skin4:new r.MJ(""),skin5:new r.MJ(""),skin6:new r.MJ(""),glyph1:new r.MJ(""),glyph2:new r.MJ(""),glyph3:new r.MJ(""),glyph4:new r.MJ(""),glyph5:new r.MJ(""),artefact1:new r.MJ(""),artefact2:new r.MJ(""),artefact3:new r.MJ("")})}ngOnInit(){this.subscription.add(this.activeRoute.params.pipe((0,h.M)(n=>{this.heroName=n.id,this.heroName&&this.service.getHeroByName(n.id,!0).subscribe(e=>{this.heroId=e.hero_id?e.hero_id:null,this.form.get("name")?.setValue(e.name),this.form.get("position")?.setValue(e.position),this.form.get("tierlist")?.setValue(e.tierlist),this.form.get("description")?.setValue(e.description);const o=e.funktion.split(",");o[0]&&this.form.get("funktion")?.setValue(o[0]),o[1]&&this.form.get("funktion2")?.setValue(o[1]);const s=e.skins.split(",");for(let l=0;l<6;l++)s[l]&&this.form.get("skin"+(l+1))?.setValue(s[l]);const p=e.glyphs.split(",");for(let l=0;l<5;l++)p[l]&&this.form.get("glyph"+(l+1))?.setValue(p[l]);const u=e.artefacts.split(",");for(let l=0;l<3;l++)u[l]&&this.form.get("artefact"+(l+1))?.setValue(u[l])})})).subscribe())}sendData(){let n=this.form.value,e=[];for(let u=1;u<=6;u++){let l=this.form.get("skin"+u)?.value;l&&e.push(l)}let o=[];for(let u=1;u<=5;u++){let l=this.form.get("glyph"+u)?.value;l&&o.push(l)}let s=[];for(let u=1;u<=3;u++){let l=this.form.get("artefact"+u)?.value;l&&s.push(l)}let p={hero_id:this.heroId,name:n.name,position:n.position,tierlist:n.tierlist,funktion:n.funktion+(n.funktion2?", "+n.funktion2:""),description:n.description,skins:e.join(","),glyphs:o.join(","),artefacts:s.join(",")};this.service.sendHero(p).pipe((0,N.W)(u=>(0,w.of)(u))).subscribe(u=>{this.router.navigate(["hero/hero/"+p.name])})}abbrechen(){this.router.navigate(["/hero/hero/"+this.heroName])}static#t=this.\u0275fac=function(e){return new(e||b)(t.rXU($.wX))};static#e=this.\u0275cmp=t.VBU({type:b,selectors:[["app-hero-edit"]],decls:2,vars:3,consts:[["class","content",4,"ngIf"],[1,"content"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],["formControlName","name","tuiTextfieldSize","s"],["tuiTextfield","","type","text"],["tuiTextfieldSize","s","formControlName","position"],["placeholder","W\xe4hle die Position","tuiTextfield",""],[3,"items",4,"tuiDataList"],["tuiTextfieldSize","s","formControlName","tierlist"],["placeholder","Rang in der Tierlist","tuiTextfield",""],["tuiTextfieldSize","s","formControlName","funktion"],["placeholder","Klasse des Helden","tuiTextfield",""],["tuiTextfieldSize","s","formControlName","funktion2"],["placeholder","Sekund\xe4re Klasse des Helden","tuiTextfield",""],["formControlName","description"],[1,"col","mb10"],["tuiTextfieldSize","s","formControlName","skin1"],["placeholder","Standard","tuiTextfield",""],["tuiTextfieldSize","s","formControlName","skin2"],["tuiTextfieldSize","s","formControlName","skin3"],["tuiTextfieldSize","s","formControlName","skin4"],["tuiTextfieldSize","s","formControlName","skin5"],["tuiTextfieldSize","s","formControlName","skin6"],["tuiTextfieldSize","s","formControlName","glyph1"],["tuiTextfieldSize","s","formControlName","glyph2"],["tuiTextfieldSize","s","formControlName","glyph3"],["tuiTextfieldSize","s","formControlName","glyph4"],["tuiTextfieldSize","s","formControlName","glyph5"],["tuiTextfieldSize","s","formControlName","artefact1"],["tuiTextfieldSize","s","formControlName","artefact2"],["tuiTextfieldSize","s","formControlName","artefact3"],["tuiButton","","type","button",1,"mr10",3,"click"],["tuiButton","","type","button",3,"click"],[3,"items"]],template:function(e,o){1&e&&(t.DNE(0,jt,121,1,"div",0),t.nI1(1,"async")),2&e&&t.Y8G("ngIf",t.bMT(1,1,o.auth$))},dependencies:[c.bT,r.qT,r.BC,r.cb,r.j4,r.JD,f.SM,S.WX,X.df,x.mp,x.Ws,M.Bw,C.ET,C.ww,H.IU,H.Ih,c.Jj],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}(0,F.Cg)([(0,_.l6)(i=>i.auth.sessionId)],b.prototype,"auth$",void 0);var Gt=a(9172),Nt=a(5558),wt=a(6697),J=a(4191),m=a(198);const $t=()=>["/hero/heroteamsedit"];function Rt(i,n){1&i&&(t.j41(0,"th",11),t.EFF(1,"Name"),t.k0s())}function It(i,n){1&i&&(t.j41(0,"th",12),t.EFF(1,"Held 1"),t.k0s()),2&i&&t.Y8G("sorter",null)}function St(i,n){1&i&&(t.j41(0,"th",12),t.EFF(1,"Held 2"),t.k0s()),2&i&&t.Y8G("sorter",null)}function Mt(i,n){1&i&&(t.j41(0,"th",12),t.EFF(1,"Held 3"),t.k0s()),2&i&&t.Y8G("sorter",null)}function Xt(i,n){1&i&&(t.j41(0,"th",12),t.EFF(1,"Held 4"),t.k0s()),2&i&&t.Y8G("sorter",null)}function Yt(i,n){1&i&&(t.j41(0,"th",12),t.EFF(1,"Held 5"),t.k0s()),2&i&&t.Y8G("sorter",null)}function Dt(i,n){1&i&&t.nrm(0,"th",12),2&i&&t.Y8G("sorter",null)}function Bt(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.name)}}function Pt(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.heroes[0])}}function Jt(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.heroes[1])}}function Ot(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.heroes[2])}}function Vt(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.heroes[3])}}function zt(i,n){if(1&i&&(t.j41(0,"td",17),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.heroes[4])}}function Wt(i,n){if(1&i){const e=t.RV6();t.j41(0,"td",17)(1,"button",18),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,p=t.XpG(3),u=t.sdS(15);return t.Njj(p.deleteTeam(s.id,u))}),t.k0s(),t.j41(2,"button",19),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,p=t.XpG(3);return t.Njj(p.viewTeam(s))}),t.k0s(),t.j41(3,"button",20),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,p=t.XpG(3);return t.Njj(p.editTeam(s))}),t.k0s()()}}function Lt(i,n){1&i&&(t.j41(0,"tr",15),t.DNE(1,Bt,2,1,"td",16)(2,Pt,2,1,"td",16)(3,Jt,2,1,"td",16)(4,Ot,2,1,"td",16)(5,Vt,2,1,"td",16)(6,zt,2,1,"td",16)(7,Wt,4,0,"td",16),t.k0s()),2&i&&(t.R7$(),t.Y8G("tuiCell","name"),t.R7$(),t.Y8G("tuiCell","held0"),t.R7$(),t.Y8G("tuiCell","held1"),t.R7$(),t.Y8G("tuiCell","held2"),t.R7$(),t.Y8G("tuiCell","held3"),t.R7$(),t.Y8G("tuiCell","held4"),t.R7$(),t.Y8G("tuiCell","actions"))}function Ut(i,n){if(1&i&&(t.j41(0,"tbody",13),t.DNE(1,Lt,8,7,"tr",14),t.k0s()),2&i){const e=n.tuiLet;t.Y8G("data",e),t.R7$(),t.Y8G("ngForOf",e)}}function Qt(i,n){if(1&i&&(t.j41(0,"div")(1,"table",6)(2,"thead")(3,"tr",7),t.DNE(4,Rt,2,0,"th",8)(5,It,2,1,"th",9)(6,St,2,1,"th",9)(7,Mt,2,1,"th",9)(8,Xt,2,1,"th",9)(9,Yt,2,1,"th",9)(10,Dt,1,1,"th",9),t.k0s()(),t.DNE(11,Ut,2,2,"tbody",10),t.nI1(12,"tuiTableSort"),t.k0s()()),2&i){const e=n.ngIf,o=t.XpG();t.R7$(),t.Y8G("columns",o.columns),t.R7$(3),t.Y8G("tuiHead","name"),t.R7$(),t.Y8G("tuiHead","held0"),t.R7$(),t.Y8G("tuiHead","held1"),t.R7$(),t.Y8G("tuiHead","held2"),t.R7$(),t.Y8G("tuiHead","held3"),t.R7$(),t.Y8G("tuiHead","held4"),t.R7$(),t.Y8G("tuiHead","actions"),t.R7$(),t.Y8G("tuiLet",t.bMT(12,9,e))}}function Kt(i,n){1&i&&(t.j41(0,"p"),t.EFF(1,"Teams werden geladen."),t.k0s())}function At(i,n){1&i&&(t.j41(0,"div",21)(1,"button",22),t.EFF(2,"Team hinzuf\xfcgen"),t.k0s()()),2&i&&(t.R7$(),t.Y8G("routerLink",t.lJ4(1,$t)))}function Zt(i,n){if(1&i){const e=t.RV6();t.j41(0,"p"),t.EFF(1,"Wirklich l\xf6schen?"),t.k0s(),t.j41(2,"button",23),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.withdraw())}),t.EFF(3,"L\xf6schen"),t.k0s(),t.j41(4,"button",24),t.bIt("click",function(){const s=t.eBV(e).$implicit;return t.Njj(s.complete())}),t.EFF(5,"Abbrechen"),t.k0s()}}class y{constructor(n){this.dialogs=n,this.router=(0,t.WQX)(d.Ix),this.service=(0,t.WQX)(g),this.reloadSubject=new R.B,this.close$=new R.B,this.deleteId=null,this.columns=["name","held0","held1","held2","held3","held4","actions"]}ngOnInit(){this.teams$=this.reloadSubject.pipe((0,Gt.Z)(null),(0,Nt.n)(()=>this.fetchData()))}fetchData(){return this.service.getHeroTeams().pipe((0,wt.s)(1))}viewTeam(n){this.router.navigate(["/hero/heroteamviewer/"+n.id])}editTeam(n){this.router.navigate(["/hero/heroteamsedit/"+n.id])}deleteTeam(n,e){this.deleteId=n,this.dialogs.open(e).pipe((0,D.Q)(this.close$)).subscribe()}withdraw(){this.service.deleteTeam(this.deleteId).pipe((0,N.W)(n=>(0,w.of)(n)),(0,B.j)(()=>this.close$.next(!1))).subscribe(n=>{this.reloadSubject.next()})}static#t=this.\u0275fac=function(e){return new(e||y)(t.rXU($.wX))};static#e=this.\u0275cmp=t.VBU({type:y,selectors:[["app-heroteams"]],decls:16,vars:8,consts:[["loading",""],["deleteModal",""],[1,"content"],[3,"definedRoute"],[4,"ngIf","ngIfElse"],["class","mt10",4,"ngIf"],["tuiTable","",3,"columns"],["tuiThGroup",""],["tuiTh","",4,"tuiHead"],["tuiTh","",3,"sorter",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],["tuiTh",""],["tuiTh","",3,"sorter"],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["appearance","flat","icon","tuiIconTrash","shape","rounded","size","s","title","L\xf6schen","tuiIconButton","","type","button",3,"click"],["appearance","flat","icon","tuiIconEye","shape","rounded","size","s","title","Details","tuiIconButton","","type","button",3,"click"],["appearance","flat","icon","tuiIconEdit","shape","rounded","size","s","title","Bearbeiten","tuiIconButton","","type","button",3,"click"],[1,"mt10"],["tuiButton","","type","button",3,"routerLink"],["size","m","tuiButton","","type","button",1,"tui-space_right-3",3,"click"],["size","m","tuiButton","","type","button",3,"click"]],template:function(e,o){if(1&e&&(t.j41(0,"div",2),t.nrm(1,"app-subnav",3),t.j41(2,"h1"),t.EFF(3,"Helden Teams"),t.k0s(),t.j41(4,"p"),t.EFF(5,"Hier einige Kompositionen von Helden von unserer Gilde empfohlen."),t.k0s(),t.j41(6,"p"),t.EFF(7,"F\xfcr Neueinsteiger als Tipp: Sich hier ein Team raussuchen, und nur diese Helden leveln."),t.k0s(),t.DNE(8,Qt,13,11,"div",4),t.nI1(9,"async"),t.DNE(10,Kt,2,0,"ng-template",null,0,t.C5r)(12,At,3,2,"div",5),t.nI1(13,"async"),t.k0s(),t.DNE(14,Zt,6,0,"ng-template",null,1,t.C5r)),2&e){const s=t.sdS(11);t.R7$(),t.Y8G("definedRoute","hero"),t.R7$(7),t.Y8G("ngIf",t.bMT(9,4,o.teams$))("ngIfElse",s),t.R7$(4),t.Y8G("ngIf",t.bMT(13,6,o.auth$))}},dependencies:[c.Sq,c.bT,d.Wk,E.z,f.SM,J.Nx,m.gJ,m.OT,m.H4,m.Qb,m.E5,m.AY,m.cK,m.y6,c.Jj,m.Jx],styles:["[_nghost-%COMP%]{display:block}td[_ngcontent-%COMP%]{color:#000}"],changeDetection:0})}(0,F.Cg)([(0,_.l6)(i=>i.auth.sessionId)],y.prototype,"auth$",void 0);var qt=a(1985);function te(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",8),t.bIt("click",function(){const s=t.eBV(e).$implicit,p=t.XpG(2);return t.Njj(p.heroClick(s))}),t.EFF(1),t.k0s()}if(2&i){const e=n.$implicit,o=t.XpG(2);t.Y8G("ngClass",o.getHeroClass(e)),t.R7$(),t.SpI(" ",e," ")}}function ee(i,n){if(1&i&&(t.j41(0,"div"),t.DNE(1,te,2,2,"div",7),t.k0s()),2&i){const e=n.ngIf;t.R7$(),t.Y8G("ngForOf",e)}}let O=(()=>{class i{constructor(){this.service=(0,t.WQX)(g),this.router=(0,t.WQX)(d.Ix),this.activeRoute=(0,t.WQX)(d.nX),this.teamId=null,this.heroes$=new qt.c,this.selected$=new T.t([]),this.form=new r.gE({name:new r.MJ(""),description:new r.MJ("")})}ngOnInit(){this.activeRoute.params.pipe((0,h.M)(e=>{e.id?(this.teamId=e.id,this.service.getHeroTeam(e.id).pipe((0,h.M)(o=>{this.selected$.next(o.heroes),this.form.get("name")?.setValue(o.name),this.form.get("description")?.setValue(o.description)}),(0,h.M)(o=>{this.heroes$=this.service.getHeroNames().pipe()})).subscribe()):this.heroes$=this.service.getHeroNames().pipe()})).subscribe()}heroClick(e){let o=this.selected$.value;if(o.includes(e))o=o.filter(s=>s!==e);else{if(o.length>=5)return;o.push(e)}this.selected$.next(o)}getHeroClass(e){return"heroSelector "+(this.selected$.value.includes(e)?"heroSelectorSelected":"")}save(){const e={name:this.form.get("name")?.value??"",description:this.form.get("description")?.value??"",heroes:this.selected$.value,id:this.teamId};this.service.saveHeroTeam(e).subscribe(o=>{this.router.navigate(["/hero/heroteams"])})}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["app-heroteams-edit"]],decls:13,vars:5,consts:[[1,"content"],[1,"b-form",3,"formGroup"],["formControlName","name"],["tuiTextfield","","type","text"],["formControlName","description",1,"tui-space_top-4",3,"expandable"],[4,"ngIf"],["tuiButton","","type","button",1,"tui-space_right-3","tui-space_top-3",3,"click"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"click","ngClass"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2,"Team bearbeiten"),t.k0s(),t.j41(3,"form",1)(4,"tui-input",2),t.EFF(5," Name des Teams "),t.nrm(6,"input",3),t.k0s(),t.j41(7,"tui-textarea",4),t.EFF(8," Beschreibung "),t.k0s(),t.DNE(9,ee,2,1,"div",5),t.nI1(10,"async"),t.j41(11,"button",6),t.bIt("click",function(){return s.save()}),t.EFF(12,"Speichern"),t.k0s()()()),2&o&&(t.R7$(3),t.Y8G("formGroup",s.form),t.R7$(4),t.Y8G("expandable",!0),t.R7$(2),t.Y8G("ngIf",t.bMT(10,3,s.heroes$)))},dependencies:[c.YU,c.Sq,c.bT,r.qT,r.BC,r.cb,r.j4,r.JD,f.SM,x.mp,x.Ws,M.Bw,H.IU,H.Ih,c.Jj],styles:["[_nghost-%COMP%]{display:block}.heroSelector[_ngcontent-%COMP%]{margin-top:1em;margin-right:1em;border-radius:.5em;background-color:#fff;padding:.3em .5em;display:inline-block;color:#000;cursor:pointer}.heroSelectorSelected[_ngcontent-%COMP%]{background-color:#adff2f;border-color:red}"],changeDetection:0})}return i})(),ie=(()=>{class i{transform(e){return e&&e.replace(/\n/g,"<br>")}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275pipe=t.EJ8({name:"appNewlineToBr",type:i,pure:!0,standalone:!0})}return i})();const ne=()=>["/hero/heroteams"],oe=i=>[i];function se(i,n){if(1&i&&(t.j41(0,"div",8)(1,"div"),t.EFF(2),t.k0s()()),2&i){const e=n.$implicit;t.muq("background-image: url(/assets/hero/",e,".png);"),t.Y8G("routerLink",t.eq3(5,oe,"/hero/hero/"+e)),t.R7$(2),t.JRh(e)}}function re(i,n){if(1&i&&(t.j41(0,"div")(1,"h3"),t.EFF(2),t.k0s(),t.nrm(3,"p",5),t.nI1(4,"appNewlineToBr"),t.j41(5,"div",6),t.DNE(6,se,3,7,"div",7),t.k0s()()),2&i){const e=n.ngIf;t.R7$(2),t.JRh(e.name),t.R7$(),t.Y8G("innerHTML",t.bMT(4,3,e.description),t.npT),t.R7$(3),t.Y8G("ngForOf",e.heroes)}}function ae(i,n){if(1&i){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.edit())}),t.EFF(1,"Bearbeiten"),t.k0s()}}class j{constructor(){this.router=(0,t.WQX)(d.Ix),this.activeRoute=(0,t.WQX)(d.nX),this.service=(0,t.WQX)(g),this.subscriptions=new G.yU,this.team$=new T.t({id:0,name:"",description:"",heroes:[]}),this.teamId=0}ngOnInit(){this.subscriptions.add(this.activeRoute.params.pipe((0,h.M)(n=>{this.teamId=n.id,this.subscriptions.add(this.service.getHeroTeam(n.id).pipe((0,h.M)(e=>{this.team$.next(e)})).subscribe())})).subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}edit(){this.router.navigate(["/hero/heroteamsedit/"+this.teamId])}static#t=this.\u0275fac=function(e){return new(e||j)};static#e=this.\u0275cmp=t.VBU({type:j,selectors:[["app-heroteam-viewer"]],decls:10,vars:9,consts:[[1,"content"],[3,"definedRoute"],[4,"ngIf"],["tuiButton","","type","button","class","tui-space_right-3 tui-space_top-3 mr10",3,"click",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_right-3","tui-space_top-3",3,"routerLink"],[3,"innerHTML"],[1,"heroes"],[3,"routerLink","style",4,"ngFor","ngForOf"],[3,"routerLink"],["tuiButton","","type","button",1,"tui-space_right-3","tui-space_top-3","mr10",3,"click"]],template:function(e,o){1&e&&(t.j41(0,"div",0),t.nrm(1,"app-subnav",1),t.j41(2,"h1"),t.EFF(3,"Helden Team Details"),t.k0s(),t.DNE(4,re,7,5,"div",2),t.nI1(5,"async"),t.DNE(6,ae,2,0,"button",3),t.nI1(7,"async"),t.j41(8,"button",4),t.EFF(9,"Zur\xfcck"),t.k0s()()),2&e&&(t.R7$(),t.Y8G("definedRoute","hero"),t.R7$(3),t.Y8G("ngIf",t.bMT(5,4,o.team$)),t.R7$(2),t.Y8G("ngIf",t.bMT(7,6,o.auth$)),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,ne)))},dependencies:[c.Sq,c.bT,d.Wk,E.z,f.SM,c.Jj,ie],styles:["[_nghost-%COMP%]{display:block}.heroes[_ngcontent-%COMP%]{display:flex;gap:1em}.heroes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:center;width:100px;height:100px;display:flex;justify-content:center;align-items:flex-end;flex-direction:row;border:3px solid rgba(0,0,0,.8);cursor:pointer}.heroes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{border-color:var(--tui-primary-hover)}.heroes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#000c;width:100%;text-align:center}"],changeDetection:0})}(0,F.Cg)([(0,_.l6)(i=>i.auth.sessionId)],j.prototype,"auth$",void 0);const le=[{path:"heroes",component:k,data:{title:"Helden Liste"}},{path:"hero/edithero/:id",component:b,data:{title:"Held bearbeiten"}},{path:"hero/edithero",component:b,data:{title:"Held bearbeiten"}},{path:"hero/:id",component:v,data:{title:"Held"}},{path:"heroteams",component:y,data:{title:"Helden Teams"}},{path:"heroteamviewer/:id",component:j,data:{title:"Helden Team"}},{path:"heroteamsedit/:id",component:O,data:{title:"Helden Team bearbeiten"}},{path:"heroteamsedit",component:O,data:{title:"Helden Team erstellen"}},{path:"**",component:k}];let ce=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.$C({type:i});static#i=this.\u0275inj=t.G2t({providers:[{provide:c.hb,useClass:c.fw}],imports:[d.iI.forChild(le),d.iI]})}return i})();var pe=a(1146),ue=a(5514),de=a(8821),me=a(5142),he=a(7827),_e=a(4350);let fe=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.$C({type:i,bootstrap:[v]});static#i=this.\u0275inj=t.G2t({imports:[c.MD,r.YN,ce,P.q1,_.rK.forRoot([V.k]),pe.z0.forRoot(),r.X1,d.iI,E.z,me.nN,f.Pv,ue.P,S.Jk,X.Km,$.JM,x.zi,J.ks,de.O,he.N,C.pg,_e.vl,m.fi,H.bC]})}return i})()}}]);