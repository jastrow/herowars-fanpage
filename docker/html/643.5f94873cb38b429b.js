"use strict";(self.webpackChunkhw=self.webpackChunkhw||[]).push([[643],{643:(Ve,S,a)=>{a.r(S),a.d(S,{HeroModule:()=>Xe});var X=a(8751),c=a(177),r=a(9417),g=a(1635),e=a(4438),p=a(5601),C=a(8359),V=a(1413),d=a(8141),B=a(6354),T=a(9437),j=a(7673),U=a(11),P=a(1626),f=a(4412),W=a(4744),A=a(8953),x=function(i){return i.KLASSE="klasse",i.TIER="tier",i}(x||{});let _=(()=>{class i{constructor(){this.http=(0,e.WQX)(P.Qq),this.env=(0,e.WQX)(A.M),this.loginService=(0,e.WQX)(W.H),this.tierlist=["-","S+","S","A+","A","B","C","D"],this.classes=["-","Heiler","Kontrolle","Magier","Sch\xfctze","Unterst\xfctzer","Panzer","Krieger"],this.pets=["Vex","Albus","Axel","Biscuit","Cain","Fenris","Khorus","Mara","Merlin","Oliver"],this.herolistFilter=new f.t({filtertier:null,filterklasse:null})}getPrimeTierlist(){return this.tierlist.map(t=>({name:t,code:t}))}getPrimeClasses(){return this.classes.map(t=>({name:t,code:t}))}setHeroFilter(t,o){if(t===x.KLASSE&&this.classes.includes(o)){let s=this.herolistFilter.value;s.filterklasse=o,this.herolistFilter.next(s)}if(t===x.TIER&&this.tierlist.includes(o)){let s=this.herolistFilter.value;s.filtertier=o,this.herolistFilter.next(s)}}setHeroFilters(t){this.herolistFilter.next(t)}getHeroFilter(){return this.herolistFilter}getHeroNames(){return this.http.get(this.env.apiUrl+"/heroes.php?heronames=1")}getHeroByName(t,o){return this.http.get(this.env.apiUrl+"/heroes.php?heroByName="+t+(o?"&edit=1":""))}sendHero(t){return this.http.post(this.env.apiUrl+"/heroes.php?hero_id="+t.hero_id,t)}deleteHero(t){return this.http.get(this.env.apiUrl+"/heroes.php?deletehero="+encodeURI(t))}getHeroNamesFiltered(t,o){t="-"===t?"":t,o="-"===o?"":o;let s=this.env.apiUrl+"/heroes.php?filtertier="+encodeURIComponent(t)+"&filterklasse="+encodeURIComponent(o);return this.http.get(s)}getHeroTeams(){return this.http.get(this.env.apiUrl+"/heroes.php?teams=1")}getHeroTeam(t){return this.http.get(this.env.apiUrl+"/heroes.php?team="+t)}saveHeroTeam(t){return this.http.post(this.env.apiUrl+"/heroes.php?saveteam=1",t)}deleteTeam(t){return this.http.get(this.env.apiUrl+"/heroes.php?deleteteam="+t)}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var u=a(5882),R=a(5779),v=a(1141),G=a(4799),H=a(7722);const Q=i=>[i];function z(i,n){if(1&i){const t=e.RV6();e.j41(0,"div",10)(1,"p-button",11),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.prevSkin())}),e.k0s(),e.j41(2,"span"),e.EFF(3),e.k0s(),e.j41(4,"p-button",12),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.nextSkin())}),e.k0s()()}if(2&i){const t=e.XpG(2);e.R7$(),e.Y8G("rounded",!0)("text",!0),e.R7$(2),e.JRh(t.getSkinName()),e.R7$(),e.Y8G("rounded",!0)("text",!0)}}function K(i,n){if(1&i&&(e.j41(0,"div",13),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t)}}function Z(i,n){if(1&i){const t=e.RV6();e.j41(0,"div",14),e.bIt("click",function(){const s=e.eBV(t).$implicit,h=e.XpG(2);return e.Njj(h.selectSkin(s))}),e.EFF(1),e.k0s()}if(2&i){const t=n.$implicit;e.R7$(),e.JRh(t)}}function q(i,n){if(1&i&&(e.j41(0,"div",13),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t)}}function ee(i,n){if(1&i){const t=e.RV6();e.j41(0,"p",15),e.nrm(1,"p-button",16),e.j41(2,"p-button",17),e.bIt("onClick",function(s){e.eBV(t);const h=e.XpG(2);return e.Njj(h.confirm1(s))}),e.k0s(),e.nrm(3,"p-toast")(4,"p-confirmDialog"),e.k0s()}if(2&i){const t=e.XpG().ngIf;e.R7$(),e.Y8G("routerLink",e.eq3(1,Q,"/hero/hero/edithero/"+t.name))}}function te(i,n){if(1&i&&(e.qex(0),e.j41(1,"div",2),e.nrm(2,"img",3),e.DNE(3,z,5,5,"div",4),e.k0s(),e.j41(4,"h1"),e.EFF(5),e.k0s(),e.j41(6,"p")(7,"strong"),e.EFF(8,"Position:"),e.k0s(),e.EFF(9),e.nrm(10,"br"),e.j41(11,"strong"),e.EFF(12,"Tier-List:"),e.k0s(),e.EFF(13),e.nrm(14,"br"),e.j41(15,"strong"),e.EFF(16,"Funktion:"),e.k0s(),e.EFF(17),e.k0s(),e.nrm(18,"p",5),e.j41(19,"h2",6),e.EFF(20,"Artefakte Priorit\xe4t"),e.k0s(),e.DNE(21,K,2,1,"div",7),e.j41(22,"h2",6),e.EFF(23,"Skin Priorit\xe4t"),e.k0s(),e.DNE(24,Z,2,1,"div",8),e.j41(25,"h2",6),e.EFF(26,"Glyphen Priorit\xe4t"),e.k0s(),e.DNE(27,q,2,1,"div",7)(28,ee,5,3,"p",9),e.nI1(29,"async"),e.bVm()),2&i){const t=n.ngIf,o=e.XpG();e.R7$(2),e.FS9("src",o.getSkinUrl(),e.B4B),e.R7$(),e.Y8G("ngIf",t.skins.length),e.R7$(2),e.JRh(t.name),e.R7$(4),e.SpI(" ",t.position,""),e.R7$(4),e.SpI(" ",t.tierlist,""),e.R7$(4),e.SpI(" ",t.funktion," "),e.R7$(),e.Y8G("innerHTML",t.description,e.npT),e.R7$(3),e.Y8G("ngForOf",t.artifacts),e.R7$(3),e.Y8G("ngForOf",t.skins),e.R7$(3),e.Y8G("ngForOf",t.glyphs),e.R7$(),e.Y8G("ngIf",e.bMT(29,11,o.auth$))}}function ne(i,n){1&i&&(e.j41(0,"p"),e.EFF(1,"Wirklich l\xf6schen?"),e.k0s(),e.j41(2,"button",18),e.EFF(3,"L\xf6schen"),e.k0s(),e.j41(4,"button",18),e.EFF(5,"Abbrechen"),e.k0s())}class k{constructor(n){this.confirmationService=n,this.route=(0,e.WQX)(p.nX),this.subscription=new C.yU,this.service=(0,e.WQX)(U.O),this.heroService=(0,e.WQX)(_),this.selectedSkin=0,this.skins=[],this.heroName="",this.close$=new V.B,this.store=(0,e.WQX)(u.il),this.router=(0,e.WQX)(p.Ix)}ngOnInit(){this.subscription.add(this.route.params.pipe((0,d.M)(n=>{this.hero$=this.heroService.getHeroByName(n.id,!1).pipe((0,d.M)(t=>{this.skins=[...this.skins,...t.skins.split(",")],this.heroName=t.name}),(0,B.T)(t=>({...t,skins:t.skins.split(","),glyphs:t.glyphs.split(","),artifacts:t.artefacts.split(",")})))})).subscribe(n=>{this.service.backgroundImage="/assets/poster/"+n.id+".png"}))}ngOnDestroy(){this.subscription.unsubscribe()}nextSkin(){let n=this.selectedSkin+1;this.selectedSkin=n>=this.skins.length?0:n}prevSkin(){let n=this.selectedSkin-1;this.selectedSkin=n<0?this.skins.length-1:n}getSkinName(){return this.skins[this.selectedSkin]}getSkinUrl(){let n=this.skins[this.selectedSkin];return"/assets/hero/"+this.heroName+("Standard"===n?"":"_"+n)+".png"}selectSkin(n){this.selectedSkin=this.skins.indexOf(n)}deleteHero(){this.heroService.deleteHero(this.heroName).pipe((0,T.W)(n=>(0,j.of)(n))).subscribe(n=>{this.router.navigate(["/hero/heroes"])})}confirm1(n){this.confirmationService.confirm({target:n.target,message:"Soll der Held wirklich gel\xf6scht werden?",header:"Best\xe4tigung",icon:"pi pi-exclamation-triangle",acceptLabel:"Ja",rejectLabel:"Nein",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.deleteHero()},reject:()=>{}})}static#e=this.\u0275fac=function(t){return new(t||k)(e.rXU(R.td))};static#t=this.\u0275cmp=e.VBU({type:k,selectors:[["app-hero"]],decls:4,vars:3,consts:[[1,"content"],[4,"ngIf"],[1,"heroimage"],[1,"heroimg",3,"src"],["class","scrollhero",4,"ngIf"],[3,"innerHTML"],[2,"margin-top","1em"],["class","chip",4,"ngFor","ngForOf"],["class","chip skinchip",3,"click",4,"ngFor","ngForOf"],["class","flex","style","margin-top:2em; gap:1em;",4,"ngIf"],[1,"scrollhero"],["icon","pi pi-arrow-circle-left",3,"click","rounded","text"],["icon","pi pi-arrow-circle-right",3,"click","rounded","text"],[1,"chip"],[1,"chip","skinchip",3,"click"],[1,"flex",2,"margin-top","2em","gap","1em"],["label","Bearbeiten","type","button",3,"routerLink"],["label","L\xf6schen","type","button",3,"onClick"],["type","button"]],template:function(t,o){1&t&&(e.j41(0,"div",0),e.DNE(1,te,30,13,"ng-container",1),e.nI1(2,"async"),e.k0s(),e.DNE(3,ne,6,0,"ng-template")),2&t&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,o.hero$)))},dependencies:[c.Sq,c.bT,p.Wk,v.$n,G.T,H.y8,c.Jj],styles:["[_nghost-%COMP%]{display:block}.heroimage[_ngcontent-%COMP%]{padding:.5em;float:right;max-width:50%}.heroimg[_ngcontent-%COMP%]{max-height:300px;max-width:100%;border-radius:.8em .8em 0 0;border:2px solid black}h2[_ngcontent-%COMP%]{font-family:Protest Strike,sans-serif;font-weight:400;font-style:normal;color:#d6ab08}.chip[_ngcontent-%COMP%]{display:inline-block;padding:.3em .5em;border:1px solid #D6AB08;border-radius:.4em;background-color:#000;margin-right:.5em;margin-bottom:.5em}.scrollhero[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.3em;background-color:#000;border-radius:0 0 .8em .8em;margin-top:-8px}.skinchip[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 575.98px){.heroimage[_ngcontent-%COMP%]{float:none;padding:.5em;width:auto;max-width:100%;display:block}.heroimg[_ngcontent-%COMP%]{max-height:100%}}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],k.prototype,"auth$",void 0);var I=a(9124);const ie=()=>["/hero/hero/edithero/"],oe=i=>["/hero/hero/",i];function re(i,n){1&i&&(e.j41(0,"div",3),e.nrm(1,"p-button",8),e.k0s()),2&i&&(e.R7$(),e.Y8G("routerLink",e.lJ4(1,ie)))}function se(i,n){if(1&i&&(e.j41(0,"div",10)(1,"div",11),e.EFF(2),e.k0s()()),2&i){const t=n.$implicit;e.muq("background-image: url(/assets/hero/",t,".png);"),e.Y8G("routerLink",e.eq3(5,oe,t)),e.R7$(2),e.JRh(t)}}function ae(i,n){if(1&i&&(e.j41(0,"div"),e.DNE(1,se,3,7,"div",9),e.k0s()),2&i){const t=n.ngIf;e.R7$(),e.Y8G("ngForOf",t)}}class b{constructor(){this.service=(0,e.WQX)(_),this.filtered$=new f.t([]),this.filter$=new f.t({filtertier:null,filterklasse:null}),this.form=new r.gE({filterTier:new r.MJ({name:null,code:null}),filterKlasse:new r.MJ({name:null,code:null})}),this.subscriptions=new C.yU}ngOnInit(){this.subscriptions.add(this.form.valueChanges.subscribe(n=>this.service.getHeroNamesFiltered(n.filterTier?.name??"-",n.filterKlasse?.name??"-").subscribe(t=>{this.filtered$.next(t)}))),this.form.updateValueAndValidity()}ngOnDestroy(){this.subscriptions.unsubscribe()}static#e=this.\u0275fac=function(t){return new(t||b)};static#t=this.\u0275cmp=e.VBU({type:b,selectors:[["app-heroes"]],decls:14,vars:9,consts:[[1,"content"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],["formControlName","filterTier","optionLabel","name","placeholder","Filter Tier",3,"options"],["formControlName","filterKlasse","optionLabel","name","placeholder","Filter Klasse",3,"options"],["class","col",4,"ngIf"],[4,"ngIf"],["label","Held hinzuf\xfcgen",3,"routerLink"],["class","hero",3,"routerLink","style",4,"ngFor","ngForOf"],[1,"hero",3,"routerLink"],[1,"hname"]],template:function(t,o){1&t&&(e.j41(0,"div")(1,"div",0)(2,"h1"),e.EFF(3,"Helden Liste"),e.k0s(),e.j41(4,"form",1)(5,"div",2)(6,"div",3),e.nrm(7,"p-dropdown",4),e.k0s(),e.j41(8,"div",3),e.nrm(9,"p-dropdown",5),e.k0s(),e.DNE(10,re,2,2,"div",6),e.nI1(11,"async"),e.k0s()(),e.DNE(12,ae,2,1,"div",7),e.nI1(13,"async"),e.k0s()()),2&t&&(e.R7$(4),e.Y8G("formGroup",o.form),e.R7$(3),e.Y8G("options",o.service.getPrimeTierlist()),e.R7$(2),e.Y8G("options",o.service.getPrimeClasses()),e.R7$(),e.Y8G("ngIf",e.bMT(11,5,o.auth$)),e.R7$(2),e.Y8G("ngIf",e.bMT(13,7,o.filtered$)))},dependencies:[c.Sq,c.bT,r.qT,r.BC,r.cb,p.Wk,r.j4,r.JD,I.ms,v.$n,c.Jj],styles:["[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{display:inline-flex;border:3px solid black;color:gray;width:100px;height:100px;background-position:center;background-repeat:no-repeat;background-size:contain;margin:.5em;justify-content:center;align-items:flex-end;align-content:flex-end;cursor:pointer}.hname[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;width:100%;text-align:center;padding:.2em 0 0}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],b.prototype,"auth$",void 0);var w=a(2242),M=a(1305);function le(i,n){if(1&i&&(e.j41(0,"h1"),e.EFF(1),e.k0s()),2&i){const t=n.ngIf;e.R7$(),e.JRh(t)}}function ce(i,n){if(1&i){const t=e.RV6();e.j41(0,"div",1),e.DNE(1,le,2,1,"h1",2),e.nI1(2,"async"),e.j41(3,"form",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"label",7),e.EFF(8,"Name des Helden"),e.k0s(),e.nrm(9,"input",8),e.k0s()()(),e.j41(10,"div",4)(11,"div",5)(12,"div",6),e.EFF(13," Kampfposition "),e.nrm(14,"p-dropdown",9),e.k0s()(),e.j41(15,"div",5)(16,"div",6),e.EFF(17," Tier List "),e.nrm(18,"p-dropdown",10),e.k0s()()(),e.j41(19,"div",4)(20,"div",5)(21,"div",6),e.EFF(22," Klasse "),e.nrm(23,"p-dropdown",11),e.k0s()(),e.j41(24,"div",5)(25,"div",6),e.EFF(26," Sekund\xe4re Klasse "),e.nrm(27,"p-dropdown",12),e.k0s()()(),e.j41(28,"div",4)(29,"div",5),e.EFF(30," Hinweise & Tips"),e.nrm(31,"br")(32,"textarea",13),e.k0s()(),e.j41(33,"h3",14),e.EFF(34,"Skin & Priorit\xe4t"),e.k0s(),e.j41(35,"div",4)(36,"div",15)(37,"div",6),e.EFF(38," Skin Priorit\xe4t 1 "),e.nrm(39,"p-dropdown",16),e.k0s()(),e.j41(40,"div",15)(41,"div",6),e.EFF(42," Skin Priorit\xe4t 2 "),e.nrm(43,"p-dropdown",17),e.k0s()(),e.j41(44,"div",15)(45,"div",6),e.EFF(46," Skin Priorit\xe4t 3 "),e.nrm(47,"p-dropdown",18),e.k0s()()(),e.j41(48,"div",4)(49,"div",15)(50,"div",6),e.EFF(51," Skin Priorit\xe4t 4 "),e.nrm(52,"p-dropdown",19),e.k0s()(),e.j41(53,"div",15)(54,"div",6),e.EFF(55," Skin Priorit\xe4t 5 "),e.nrm(56,"p-dropdown",20),e.k0s()(),e.j41(57,"div",15)(58,"div",6),e.EFF(59," Skin Priorit\xe4t 6 "),e.nrm(60,"p-dropdown",21),e.k0s()()(),e.j41(61,"p"),e.EFF(62,"Glyphen & Priorit\xe4t"),e.k0s(),e.j41(63,"div",4)(64,"div",15)(65,"div",6),e.EFF(66," Glyphe Priorit\xe4t 1 "),e.nrm(67,"p-dropdown",22),e.k0s()(),e.j41(68,"div",15)(69,"div",6),e.EFF(70," Glyphe Priorit\xe4t 2 "),e.nrm(71,"p-dropdown",23),e.k0s()(),e.j41(72,"div",15)(73,"div",6),e.EFF(74," Glyphe Priorit\xe4t 3 "),e.nrm(75,"p-dropdown",24),e.k0s()()(),e.j41(76,"div",4)(77,"div",15)(78,"div",6),e.EFF(79," Glyphe Priorit\xe4t 4 "),e.nrm(80,"p-dropdown",25),e.k0s()(),e.j41(81,"div",15)(82,"div",6),e.EFF(83," Glyphe Priorit\xe4t 5 "),e.nrm(84,"p-dropdown",26),e.k0s()()(),e.j41(85,"p"),e.EFF(86,"Artefakt Priorit\xe4t"),e.k0s(),e.j41(87,"div",4)(88,"div",15)(89,"div",6),e.EFF(90," Artefact Priorit\xe4t 1 "),e.nrm(91,"p-dropdown",27),e.k0s()(),e.j41(92,"div",15)(93,"div",6),e.EFF(94," Artefact Priorit\xe4t 2 "),e.nrm(95,"p-dropdown",28),e.k0s()(),e.j41(96,"div",15)(97,"div",6),e.EFF(98," Artefact Priorit\xe4t 3 "),e.nrm(99,"p-dropdown",29),e.k0s()()(),e.j41(100,"p")(101,"p-button",30),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.sendData())}),e.k0s(),e.j41(102,"p-button",31),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.abbrechen())}),e.k0s()()()()}if(2&i){const t=e.XpG();e.R7$(),e.Y8G("ngIf",e.bMT(2,20,t.title)),e.R7$(2),e.Y8G("formGroup",t.form),e.R7$(11),e.Y8G("options",t.positions),e.R7$(4),e.Y8G("options",t.tierlist),e.R7$(5),e.Y8G("options",t.classes),e.R7$(4),e.Y8G("options",t.classes),e.R7$(12),e.Y8G("options",t.skinlist),e.R7$(4),e.Y8G("options",t.skinlist),e.R7$(4),e.Y8G("options",t.skinlist),e.R7$(5),e.Y8G("options",t.skinlist),e.R7$(4),e.Y8G("options",t.skinlist),e.R7$(4),e.Y8G("options",t.skinlist),e.R7$(7),e.Y8G("options",t.glyphlist),e.R7$(4),e.Y8G("options",t.glyphlist),e.R7$(4),e.Y8G("options",t.glyphlist),e.R7$(5),e.Y8G("options",t.glyphlist),e.R7$(4),e.Y8G("options",t.glyphlist),e.R7$(7),e.Y8G("options",t.glyphlist),e.R7$(4),e.Y8G("options",t.glyphlist),e.R7$(4),e.Y8G("options",t.glyphlist)}}class F{constructor(){this.service=(0,e.WQX)(_),this.activeRoute=(0,e.WQX)(p.nX),this.router=(0,e.WQX)(p.Ix),this.subscription=new C.yU,this.heroId=null,this.heroName=null,this.skinNames=["","Standard","Angelic","Barbarian","Beach","Blooming","Celestial","Champion","Champion","Cybernetic","Dark_Depths","Demonic","Illusionist","Lunar","Masquerade","Mechanical","Nordic","Phoenix","Predator","Romantic","Rowdy","Solar","Spring","Stellar","Sweettooth","Thundering","Winter"],this.glyphNames=["Physischer Angriff","R\xfcstung","Ausweichen","R\xfcstungspenetration","Agilit\xe4t","Magischer Angriff","Gesundheit","Magische Verteidigung","Intelligenz","St\xe4rke","Krit. Treffer","Magiest\xe4rke"],this.artefactNames=["Waffe","Buch","Ring"],this.positions=[{name:"Vorne",code:"Vorne"},{name:"Hinten",code:"Hinten"},{name:"Mitte",code:"Mitte"}],this.tierlist=[],this.classes=[],this.skinlist=[],this.glyphlist=[],this.artlist=[],this.skins=[],this.glyphs=[],this.form=new r.gE({hero_id:new r.MJ(""),name:new r.MJ(""),position:new r.MJ(null),tierlist:new r.MJ(null),funktion:new r.MJ(null),funktion2:new r.MJ(null),description:new r.MJ(""),skin1:new r.MJ(""),skin2:new r.MJ(""),skin3:new r.MJ(""),skin4:new r.MJ(""),skin5:new r.MJ(""),skin6:new r.MJ(""),glyph1:new r.MJ(""),glyph2:new r.MJ(""),glyph3:new r.MJ(""),glyph4:new r.MJ(""),glyph5:new r.MJ(""),artefact1:new r.MJ(""),artefact2:new r.MJ(""),artefact3:new r.MJ("")}),this.title=new f.t("Held bearbeiten")}ngOnInit(){this.tierlist=this.service.tierlist.map(n=>({name:n,code:n})),this.classes=this.service.classes.map(n=>({name:n,code:n})),this.skinlist=this.skinNames.map(n=>({name:n,code:n})),this.glyphlist=this.glyphNames.map(n=>({name:n,code:n})),this.artlist=this.artefactNames.map(n=>({name:n,code:n})),this.activeRoute.data.pipe((0,d.M)(n=>{this.title.next(n.title)})).subscribe(),this.subscription.add(this.activeRoute.params.pipe((0,d.M)(n=>{this.heroName=n.id,this.heroName&&this.service.getHeroByName(n.id,!0).subscribe(t=>{this.heroId=t.hero_id?t.hero_id:null,this.form.get("name")?.setValue(t.name),this.form.get("position")?.setValue({name:t.position,code:t.position}),this.form.get("tierlist")?.setValue({name:t.tierlist,code:t.tierlist}),this.form.get("description")?.setValue(t.description);const o=t.funktion.split(",");o[0]&&this.form.get("funktion")?.setValue({name:o[0],code:o[0]}),o[1]&&this.form.get("funktion2")?.setValue({name:o[1],code:o[1]});const s=t.skins.split(",");for(let l=0;l<6;l++)s[l]&&this.form.get("skin"+(l+1))?.setValue({name:s[l],code:s[l]});const h=t.glyphs.split(",");for(let l=0;l<5;l++)h[l]&&this.form.get("glyph"+(l+1))?.setValue({name:h[l],code:h[l]});const m=t.artefacts.split(",");for(let l=0;l<3;l++)m[l]&&this.form.get("artefact"+(l+1))?.setValue({name:m[l],code:m[l]})})})).subscribe())}sendData(){let n=this.form.value,t=[],o=[],s=[];for(let m=1;m<=6;m++){let l=this.form.get("skin"+m)?.value.code,D=this.form.get("glyph"+m)?.value.code,L=this.form.get("artefact"+m)?.value.code;l&&t.push(l),D&&o.push(D),L&&s.push(L)}let h={hero_id:this.heroId,name:n.name,position:n.position?.code,tierlist:n.tierlist?.code,funktion:n.funktion?.code+(n.funktion2?.code?","+n.funktion2?.code:""),description:n.description,skins:t.join(","),glyphs:o.join(","),artefacts:s.join(",")};this.service.sendHero(h).pipe((0,T.W)(m=>(0,j.of)(m))).subscribe(m=>{this.router.navigate(["hero/hero/"+h.name])})}abbrechen(){this.router.navigate(["/hero/hero/"+this.heroName])}static#e=this.\u0275fac=function(t){return new(t||F)};static#t=this.\u0275cmp=e.VBU({type:F,selectors:[["app-hero-edit"]],decls:2,vars:3,consts:[["class","content",4,"ngIf"],[1,"content"],[4,"ngIf"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],[1,"flex","flex-column","gap-2"],["for","name"],["pInputText","","id","name","formControlName","name"],["formControlName","position","optionLabel","name","placeholder","W\xe4hle die Position",3,"options"],["formControlName","tierlist","optionLabel","name","placeholder","Rang in der Tierlist",3,"options"],["formControlName","funktion","optionLabel","name","placeholder","Klasse des Helden",3,"options"],["formControlName","funktion2","optionLabel","name","placeholder","Sekund\xe4re Klasse des Helden",3,"options"],["formControlName","description","pInputTextarea","",2,"width","100%"],[1,"yellow-protest"],[1,"col","mb10"],["formControlName","skin1","optionLabel","name","placeholder","Skin Priorit\xe4t 1",3,"options"],["formControlName","skin2","optionLabel","name","placeholder","Skin Priorit\xe4t 2",3,"options"],["formControlName","skin3","optionLabel","name","placeholder","Skin Priorit\xe4t 3",3,"options"],["formControlName","skin4","optionLabel","name","placeholder","Skin Priorit\xe4t 4",3,"options"],["formControlName","skin5","optionLabel","name","placeholder","Skin Priorit\xe4t 5",3,"options"],["formControlName","skin6","optionLabel","name","placeholder","Skin Priorit\xe4t 6",3,"options"],["formControlName","glyph1","optionLabel","name","placeholder","Glyphe Priorit\xe4t 1",3,"options"],["formControlName","glyph2","optionLabel","name","placeholder","Glyphe Priorit\xe4t 2",3,"options"],["formControlName","glyph3","optionLabel","name","placeholder","Glyphe Priorit\xe4t 3",3,"options"],["formControlName","glyph4","optionLabel","name","placeholder","Glyphe Priorit\xe4t 4",3,"options"],["formControlName","glyph5","optionLabel","name","placeholder","Glyphe Priorit\xe4t 5",3,"options"],["formControlName","artefact1","optionLabel","name","placeholder","Artefact Priorit\xe4t 1",3,"options"],["formControlName","artefact2","optionLabel","name","placeholder","Artefact Priorit\xe4t 2",3,"options"],["formControlName","artefact3","optionLabel","name","placeholder","Artefact Priorit\xe4t 3",3,"options"],["label","Speichern","type","button",1,"mr10",3,"click"],["label","Abbrechen","type","button",3,"click"]],template:function(t,o){1&t&&(e.DNE(0,ce,103,22,"div",0),e.nI1(1,"async")),2&t&&e.Y8G("ngIf",e.bMT(1,1,o.auth$))},dependencies:[c.bT,r.qT,r.me,r.BC,r.cb,r.j4,r.JD,I.ms,v.$n,w.S,M.Z,c.Jj],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],F.prototype,"auth$",void 0);let Y=(()=>{class i{transform(t){return t&&t.replace(/\n/g,"<br>")}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275pipe=e.EJ8({name:"appNewlineToBr",type:i,pure:!0,standalone:!0})}return i})();const N=i=>({"background-image":i}),pe=i=>["/hero/hero/",i],he=()=>["/hero/heroteamsedit"];function me(i,n){if(1&i&&(e.j41(0,"div",9),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.R7$(),e.JRh(t)}}function de(i,n){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td",7),e.DNE(2,me,2,1,"div",8),e.j41(3,"div",9),e.EFF(4),e.k0s(),e.j41(5,"div",10),e.bIt("click",function(){e.eBV(t);const s=e.XpG().$implicit,h=e.XpG(2);return e.Njj(h.showTeam(s.id))}),e.nrm(6,"span",11),e.k0s()()()}if(2&i){const t=e.XpG().$implicit;e.R7$(2),e.Y8G("ngForOf",t.heroes),e.R7$(2),e.JRh(t.pet)}}function ue(i,n){if(1&i&&(e.j41(0,"div",19)(1,"div",14),e.EFF(2),e.k0s()()),2&i){const t=n.$implicit,o=e.XpG(4);e.Y8G("routerLink",e.eq3(3,pe,t))("ngStyle",e.eq3(5,N,o.getHeroUrl(t))),e.R7$(2),e.JRh(t)}}function fe(i,n){if(1&i){const t=e.RV6();e.j41(0,"div",16),e.bIt("click",function(){e.eBV(t);const s=e.XpG(2).$implicit,h=e.XpG(2);return e.Njj(h.editTeam(s))}),e.nrm(1,"span",20),e.k0s()}}function ge(i,n){if(1&i){const t=e.RV6();e.j41(0,"div",16),e.bIt("click",function(s){e.eBV(t);const h=e.XpG(2).$implicit,m=e.XpG(2);return e.Njj(m.deleteTeam(s,h))}),e.nrm(1,"span",21),e.k0s()}}function _e(i,n){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td",7),e.DNE(2,ue,3,7,"div",12),e.j41(3,"div",13)(4,"div",14),e.EFF(5),e.k0s()(),e.j41(6,"div",15)(7,"div",16),e.bIt("click",function(){e.eBV(t);const s=e.XpG(3);return e.Njj(s.closeTeam())}),e.nrm(8,"span",17),e.k0s(),e.DNE(9,fe,2,0,"div",18),e.nI1(10,"async"),e.DNE(11,ge,2,0,"div",18),e.nI1(12,"async"),e.k0s()()()}if(2&i){const t=e.XpG().$implicit,o=e.XpG(2);e.R7$(2),e.Y8G("ngForOf",t.heroes),e.R7$(),e.Y8G("ngStyle",e.eq3(9,N,o.getPetUrl(t.pet))),e.R7$(2),e.JRh(t.pet),e.R7$(4),e.Y8G("ngIf",e.bMT(10,5,o.auth$)),e.R7$(2),e.Y8G("ngIf",e.bMT(12,7,o.auth$))}}function ve(i,n){if(1&i&&(e.j41(0,"div",13)(1,"div",14),e.EFF(2),e.k0s()()),2&i){const t=n.$implicit,o=e.XpG(4);e.Y8G("ngStyle",e.eq3(2,N,o.getPetUrl(t))),e.R7$(2),e.JRh(t)}}function ke(i,n){if(1&i&&(e.j41(0,"tr")(1,"td",7),e.DNE(2,ve,3,4,"div",22),e.k0s()()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.Y8G("ngForOf",t.pets)}}function be(i,n){if(1&i&&(e.j41(0,"tr"),e.nrm(1,"td",23),e.nI1(2,"appNewlineToBr"),e.k0s()),2&i){const t=e.XpG().$implicit;e.R7$(),e.Y8G("innerHTML",e.bMT(2,1,t.description),e.npT)}}function Fe(i,n){if(1&i&&(e.qex(0),e.j41(1,"tr")(2,"td",5),e.EFF(3),e.k0s()(),e.DNE(4,de,7,2,"tr",6)(5,_e,13,11,"tr",6)(6,ke,3,1,"tr",6)(7,be,3,3,"tr",6),e.bVm()),2&i){const t=n.$implicit,o=e.XpG(2);e.R7$(3),e.JRh(t.name),e.R7$(),e.Y8G("ngIf",t.id!==o.showId),e.R7$(),e.Y8G("ngIf",t.id===o.showId),e.R7$(),e.Y8G("ngIf",t.id===o.showId&&o.petsExist(t.pets)),e.R7$(),e.Y8G("ngIf",t.id===o.showId)}}function ye(i,n){if(1&i&&(e.j41(0,"div")(1,"table")(2,"tbody"),e.DNE(3,Fe,8,5,"ng-container",4),e.k0s()()()),2&i){const t=n.ngIf;e.R7$(3),e.Y8G("ngForOf",t)}}function Ee(i,n){1&i&&(e.j41(0,"p"),e.EFF(1,"Teams werden geladen."),e.k0s())}function $e(i,n){1&i&&(e.j41(0,"div",24)(1,"p-button",25),e.EFF(2,"Team hinzuf\xfcgen"),e.k0s()()),2&i&&(e.R7$(),e.Y8G("routerLink",e.lJ4(1,he)))}class E{constructor(){this.confirmationService=(0,e.WQX)(R.td),this.router=(0,e.WQX)(p.Ix),this.service=(0,e.WQX)(_),this.teams$=new f.t([]),this.showId=0}ngOnInit(){this.fetchData()}fetchData(){this.service.getHeroTeams().subscribe(n=>{this.teams$?.next(n)})}viewTeam(n){this.router.navigate(["/hero/heroteamviewer/"+n.id])}editTeam(n){this.router.navigate(["/hero/heroteamsedit/"+n.id])}deleteTeam(n,t){this.confirmationService.confirm({target:n.target,message:"Sind Sie sicher, dass sie das Team l\xf6schen m\xf6chten?",header:"Team l\xf6schen",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",acceptLabel:"Ja",rejectLabel:"Abbrechen",rejectButtonStyleClass:"p-button-text",accept:()=>{this.deleteTeamAccepted(t)}})}deleteTeamAccepted(n){this.service.deleteTeam(n.id).pipe((0,T.W)(t=>(console.log(t),(0,j.of)([])))).subscribe(t=>{this.fetchData()})}showTeam(n){this.showId=n}closeTeam(){this.showId=0}getPetUrl(n){return n?"url(/assets/begleiter/"+n+".png)":"none"}getHeroUrl(n){return n?"url(/assets/hero/"+n+".png)":"none"}petsExist(n){return n.some(t=>!!t)}static#e=this.\u0275fac=function(t){return new(t||E)};static#t=this.\u0275cmp=e.VBU({type:E,selectors:[["app-heroteams"]],decls:13,vars:7,consts:[["loading",""],[1,"content"],[4,"ngIf","ngIfElse"],["class","mt10",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"yellow-protest","size15"],[4,"ngIf"],[1,"flex"],["class","heroname",4,"ngFor","ngForOf"],[1,"heroname"],[1,"heroname","openteam",3,"click"],[1,"pi","pi-chevron-down"],["class","hero",3,"routerLink","ngStyle",4,"ngFor","ngForOf"],[1,"hero",3,"ngStyle"],[1,"hname"],[1,"hero",2,"flex-direction","column","justify-content","space-between"],[1,"hname","closeteam",3,"click"],[1,"pi","pi-chevron-up"],["class","hname closeteam",3,"click",4,"ngIf"],[1,"hero",3,"routerLink","ngStyle"],[1,"pi","pi-wrench"],[1,"pi","pi-trash"],["class","hero",3,"ngStyle",4,"ngFor","ngForOf"],[1,"description",3,"innerHTML"],[1,"mt10"],["type","button",3,"routerLink"]],template:function(t,o){if(1&t&&(e.j41(0,"div",1)(1,"h1"),e.EFF(2,"Helden Teams"),e.k0s(),e.j41(3,"p"),e.EFF(4," Hier einige Kompositionen von Helden von unserer Gilde empfohlen. F\xfcr Neueinsteiger als Tipp: Sich hier ein Team raussuchen, und nur diese Helden leveln. "),e.k0s(),e.DNE(5,ye,4,1,"div",2),e.nI1(6,"async"),e.DNE(7,Ee,2,0,"ng-template",null,0,e.C5r)(9,$e,3,2,"div",3),e.nI1(10,"async"),e.k0s(),e.nrm(11,"p-toast")(12,"p-confirmDialog")),2&t){const s=e.sdS(8);e.R7$(5),e.Y8G("ngIf",e.bMT(6,3,o.teams$))("ngIfElse",s),e.R7$(4),e.Y8G("ngIf",e.bMT(10,5,o.auth$))}},dependencies:[c.Sq,c.bT,c.B3,p.Wk,v.$n,G.T,H.y8,c.Jj,Y],styles:["[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{display:flex;gap:.3em;justify-content:center;align-items:flex-end;align-content:flex-end;border:0px solid black;color:gray;width:80px;height:80px;background-position:center;background-repeat:no-repeat;background-size:contain;cursor:pointer}.heroname[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;text-align:center;padding:.2em 0 0;width:80px}.hname[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;width:100%;text-align:center;padding:.2em 0 0}.description[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;padding:1em}.openteam[_ngcontent-%COMP%], .closeteam[_ngcontent-%COMP%]{cursor:pointer}.openteam[_ngcontent-%COMP%]:hover, .closeteam[_ngcontent-%COMP%]:hover{background-color:#8b0000}.size15[_ngcontent-%COMP%]{font-size:1.5em;padding-top:.5em}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],E.prototype,"auth$",void 0);var Ce=a(1985);const Re=()=>["/hero/heroteams"],Te=()=>[1,2,3,4,5],je=()=>["pet"],O=i=>[i];function xe(i,n){if(1&i&&(e.j41(0,"option",17),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.FS9("value",t),e.R7$(),e.JRh(t)}}function Ge(i,n){if(1&i&&(e.j41(0,"option",17),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.FS9("value",t),e.R7$(),e.JRh(t)}}function He(i,n){if(1&i&&(e.j41(0,"div",13)(1,"div")(2,"select",14),e.DNE(3,xe,2,2,"option",15),e.k0s()(),e.j41(4,"div")(5,"select",14)(6,"option",16),e.EFF(7,"-"),e.k0s(),e.DNE(8,Ge,2,2,"option",15),e.k0s()()()),2&i){const t=n.$implicit,o=e.XpG().ngIf,s=e.XpG(2);e.R7$(),e.HbH(e.eq3(12,O,"hero"+t)),e.xc7("background-image",s.getUrlHero(t)),e.R7$(),e.Y8G("formControlName","hero"+t),e.R7$(),e.Y8G("ngForOf",o),e.R7$(),e.HbH(e.eq3(14,O,"pet"+t)),e.xc7("background-image",s.getUrlPet(t)),e.R7$(),e.Y8G("formControlName","pet"+t),e.R7$(3),e.Y8G("ngForOf",s.pets)}}function Ie(i,n){if(1&i&&(e.j41(0,"option",17),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.FS9("value",t),e.R7$(),e.JRh(t)}}function we(i,n){if(1&i&&(e.j41(0,"div",11),e.DNE(1,He,9,16,"div",12),e.j41(2,"div",13)(3,"div")(4,"select",14),e.DNE(5,Ie,2,2,"option",15),e.k0s()()()()),2&i){const t=e.XpG(2);e.R7$(),e.Y8G("ngForOf",e.lJ4(7,Te)),e.R7$(2),e.HbH(e.lJ4(8,je)),e.xc7("background-image",t.getUrlPet(6)),e.R7$(),e.Y8G("formControlName","pet6"),e.R7$(),e.Y8G("ngForOf",t.pets)}}function Me(i,n){if(1&i){const t=e.RV6();e.j41(0,"form",2)(1,"div",3),e.nrm(2,"input",4),e.k0s(),e.DNE(3,we,6,9,"div",5),e.nI1(4,"async"),e.j41(5,"div",6)(6,"textarea",7),e.EFF(7,"            "),e.k0s()(),e.j41(8,"div",8)(9,"p-button",9),e.nI1(10,"async"),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.save())}),e.k0s(),e.nrm(11,"p-button",10),e.k0s()()}if(2&i){const t=e.XpG();e.Y8G("formGroup",t.form),e.R7$(3),e.Y8G("ngIf",e.bMT(4,4,t.heroes$)),e.R7$(6),e.Y8G("disabled",!e.bMT(10,6,t.auth$)),e.R7$(2),e.Y8G("routerLink",e.lJ4(8,Re))}}class y{constructor(){this.service=(0,e.WQX)(_),this.router=(0,e.WQX)(p.Ix),this.activeRoute=(0,e.WQX)(p.nX),this.teamId=null,this.selected$=new f.t([]),this.heroes$=new Ce.c,this.pets=[]}ngOnInit(){this.pets=this.service.pets,this.heroes$=this.service.getHeroNames(),this.form=new r.gE({name:new r.MJ(""),description:new r.MJ(""),pet6:new r.MJ("")});for(let n=1;n<=5;n++)this.form.addControl("hero"+n,new r.MJ("")),this.form.addControl("pet"+n,new r.MJ(""));this.activeRoute.params.pipe((0,d.M)(n=>{n.id&&(this.teamId=n.id,this.service.getHeroTeam(n.id).pipe((0,d.M)(t=>{this.selected$.next(t.heroes),this.form.get("name")?.setValue(t.name),this.form.get("description")?.setValue(t.description),this.form.get("pet6").setValue(t.pet);for(let o=0;o<5;o++)this.form.get("hero"+(o+1)).setValue(t.heroes[o]),this.form.get("pet"+(o+1)).setValue(t.pets[o])})).subscribe())})).subscribe()}getUrlHero(n){let t=this.form.get("hero"+n).value,o="/assets/hero/"+this.form.get("hero"+n).value+".png";return t?"url("+o+")":"none"}getUrlPet(n){let t=this.form.get("pet"+n).value,o="/assets/begleiter/"+this.form.get("pet"+n).value+".png";return t?"url("+o+")":"none"}heroClick(n){let t=this.selected$.value;if(t.includes(n))t=t.filter(o=>o!==n);else{if(t.length>=5)return;t.push(n)}this.selected$.next(t)}getHeroClass(n){return"heroSelector "+(this.selected$.value.includes(n)?"heroSelectorSelected":"")}save(){const n={id:this.teamId,name:this.form.get("name")?.value??"",description:this.form.get("description")?.value??"",pet:this.form.controls.pet6.value,heroes:[this.form.controls.hero1.value?this.form.controls.hero1.value:null,this.form.controls.hero2.value?this.form.controls.hero2.value:null,this.form.controls.hero3.value?this.form.controls.hero3.value:null,this.form.controls.hero4.value?this.form.controls.hero4.value:null,this.form.controls.hero5.value?this.form.controls.hero5.value:null],pets:[this.form.controls.pet1.value?this.form.controls.pet1.value:null,this.form.controls.pet2.value?this.form.controls.pet2.value:null,this.form.controls.pet3.value?this.form.controls.pet3.value:null,this.form.controls.pet4.value?this.form.controls.pet4.value:null,this.form.controls.pet5.value?this.form.controls.pet5.value:null]};this.service.saveHeroTeam(n).subscribe(t=>{this.router.navigate(["/hero/heroteams"])})}static#e=this.\u0275fac=function(t){return new(t||y)};static#t=this.\u0275cmp=e.VBU({type:y,selectors:[["app-heroteams-edit"]],decls:5,vars:3,consts:[[1,"content"],["class","b-form",3,"formGroup",4,"ngIf"],[1,"b-form",3,"formGroup"],[1,"mb20"],["pInputText","","formControlName","name","type","text","placeholder","Teamname",2,"width","100%"],["class","herorow",4,"ngIf"],[1,"mt20"],["rows","5","cols","30","pInputTextarea","","formControlName","description","placeholder","Beschreibung",2,"width","100%"],[1,"flex","gap10","mt20"],["label","Speichern",3,"click","disabled"],["label","Abbrechen",3,"routerLink"],[1,"herorow"],["class","hero",4,"ngFor","ngForOf"],[1,"hero"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["value",""],[3,"value"]],template:function(t,o){1&t&&(e.j41(0,"div",0)(1,"h1"),e.EFF(2,"Team bearbeiten"),e.k0s(),e.DNE(3,Me,12,9,"form",1),e.nI1(4,"async"),e.k0s()),2&t&&(e.R7$(3),e.Y8G("ngIf",e.bMT(4,1,o.heroes$)))},dependencies:[c.Sq,c.bT,r.qT,r.xH,r.y7,r.me,r.wz,r.BC,r.cb,p.Wk,r.j4,r.JD,v.$n,w.S,M.Z,c.Jj],styles:["[_nghost-%COMP%]{display:block}.herorow[_ngcontent-%COMP%]{display:inline-flex;gap:.5em}.hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100px;height:100px;display:inline-flex;justify-content:end;flex-direction:column;border:3px solid black;background-size:contain;background-position:center;background-repeat:no-repeat}.hero[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:100%;color:#fff;background-color:#000000b3;border:0px solid black}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],y.prototype,"auth$",void 0);var J=a(4558);const Ne=()=>["/hero/heroteams"],Se=i=>[i];function Pe(i,n){if(1&i&&(e.j41(0,"div",8)(1,"div"),e.EFF(2),e.k0s()()),2&i){const t=n.$implicit;e.muq("background-image: url(/assets/hero/",t,".png);"),e.Y8G("routerLink",e.eq3(5,Se,"/hero/hero/"+t)),e.R7$(2),e.JRh(t)}}function Ye(i,n){if(1&i&&(e.j41(0,"div")(1,"h3"),e.EFF(2),e.k0s(),e.nrm(3,"p",5),e.nI1(4,"appNewlineToBr"),e.j41(5,"div",6),e.DNE(6,Pe,3,7,"div",7),e.k0s()()),2&i){const t=n.ngIf;e.R7$(2),e.JRh(t.name),e.R7$(),e.Y8G("innerHTML",e.bMT(4,3,t.description),e.npT),e.R7$(3),e.Y8G("ngForOf",t.heroes)}}function Oe(i,n){if(1&i){const t=e.RV6();e.j41(0,"button",9),e.bIt("click",function(){e.eBV(t);const s=e.XpG();return e.Njj(s.edit())}),e.EFF(1,"Bearbeiten"),e.k0s()}}class ${constructor(){this.router=(0,e.WQX)(p.Ix),this.activeRoute=(0,e.WQX)(p.nX),this.service=(0,e.WQX)(_),this.subscriptions=new C.yU,this.team$=new f.t({id:0,name:"",description:"",heroes:[],pet:"",pets:[]}),this.teamId=0}ngOnInit(){this.subscriptions.add(this.activeRoute.params.pipe((0,d.M)(n=>{this.teamId=n.id,this.subscriptions.add(this.service.getHeroTeam(n.id).pipe((0,d.M)(t=>{this.team$.next(t)})).subscribe())})).subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}edit(){this.router.navigate(["/hero/heroteamsedit/"+this.teamId])}static#e=this.\u0275fac=function(t){return new(t||$)};static#t=this.\u0275cmp=e.VBU({type:$,selectors:[["app-heroteam-viewer"]],decls:10,vars:9,consts:[[1,"content"],[3,"definedRoute"],[4,"ngIf"],["type","button",3,"click",4,"ngIf"],["type","button",3,"routerLink"],[3,"innerHTML"],[1,"heroes"],[3,"routerLink","style",4,"ngFor","ngForOf"],[3,"routerLink"],["type","button",3,"click"]],template:function(t,o){1&t&&(e.j41(0,"div",0),e.nrm(1,"app-subnav",1),e.j41(2,"h1"),e.EFF(3,"Helden Team Details"),e.k0s(),e.DNE(4,Ye,7,5,"div",2),e.nI1(5,"async"),e.DNE(6,Oe,2,0,"button",3),e.nI1(7,"async"),e.j41(8,"button",4),e.EFF(9,"Zur\xfcck"),e.k0s()()),2&t&&(e.R7$(),e.Y8G("definedRoute","hero"),e.R7$(3),e.Y8G("ngIf",e.bMT(5,4,o.team$)),e.R7$(2),e.Y8G("ngIf",e.bMT(7,6,o.auth$)),e.R7$(2),e.Y8G("routerLink",e.lJ4(8,Ne)))},dependencies:[c.Sq,c.bT,p.Wk,J.z,c.Jj,Y],styles:["[_nghost-%COMP%]{display:block}.heroes[_ngcontent-%COMP%]{display:flex;gap:1em}.heroes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:center;width:100px;height:100px;display:flex;justify-content:center;align-items:flex-end;flex-direction:row;border:3px solid rgba(0,0,0,.8);cursor:pointer}.heroes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#000c;width:100%;text-align:center}"],changeDetection:0})}(0,g.Cg)([(0,u.l6)(i=>i.auth.sessionId)],$.prototype,"auth$",void 0);const Je=[{path:"heroes",component:b,data:{title:"Helden Liste"}},{path:"hero/edithero/:id",component:F,data:{title:"Held bearbeiten"}},{path:"hero/edithero",component:F,data:{title:"Held erstellen"}},{path:"hero/:id",component:k,data:{title:"Held"}},{path:"heroteams",component:E,data:{title:"Helden Teams"}},{path:"heroteamviewer/:id",component:$,data:{title:"Helden Team"}},{path:"heroteamsedit/:id",component:y,data:{title:"Helden Team bearbeiten"}},{path:"heroteamsedit",component:y,data:{title:"Helden Team erstellen"}},{path:"**",component:b}];let De=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({providers:[{provide:c.hb,useClass:c.fw}],imports:[p.iI.forChild(Je),p.iI]})}return i})();var Le=a(1146);let Xe=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i,bootstrap:[k]});static#n=this.\u0275inj=e.G2t({providers:[R.td,R.bg],imports:[c.MD,r.YN,De,P.q1,u.rK.forRoot([X.k]),Le.z0.forRoot(),r.X1,p.iI,J.z,I.kr,v.tm,w.u,M.f,G.F,H.MB]})}return i})()}}]);