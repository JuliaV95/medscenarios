"use strict";(self["webpackChunkmedscenarios"]=self["webpackChunkmedscenarios"]||[]).push([[637],{2637:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var o=function(){var t=this,e=t._self._c;return t.showAdditionalInfo?e("DynamicCard",{staticClass:"additional-info-card",attrs:{buttonText:"Закрыть"},on:{"card-button-click":function(e){t.showAdditionalInfo=!t.showAdditionalInfo}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.activeScenario[t.currentStep].substeps[t.currentIndexSubstep].title)+" ")]},proxy:!0},{key:"info",fn:function(){return[e("div",{staticClass:"images-resized",domProps:{innerHTML:t._s(t.activeScenario[t.currentStep].substeps[t.currentIndexSubstep].text)}})]},proxy:!0}],null,!1,676792092)}):e("DynamicCard",{attrs:{buttonText:"Далее"},on:{"card-button-click":t.processButtonClick},scopedSlots:t._u([{key:"info-icons",fn:function(){return[t._l(t.icons,(function(n,o){return[e("DynamicInfoIcon",{key:o,attrs:{icon:n.icon,label:t.activeScenario[t.currentStep].substeps[o].title},nativeOn:{click:function(e){return t.processShowAddInfo(o)}}})]}))]},proxy:!0}])})},i=[],s=n(4966),c={name:"SecondScenarioStep",mixins:[s.Z],components:{DynamicInfoIcon:()=>n.e(469).then(n.bind(n,2469))},data(){return{icons:[{icon:n(882),checked:!1},{icon:n(5342),checked:!1},{icon:n(2163),checked:!1},{icon:n(897),checked:!1}],currentIndexSubstep:null,showAdditionalInfo:!1}},methods:{processButtonClick(){this.shouldDisplayAlert?this.showAlertNotification({notificationText:"Осмотр проведен не полностью",greenStyle:!1,redStyle:!0}):this.proceedToTheNextStep()},processShowAddInfo(t){this.icons[t].checked=!0,this.currentIndexSubstep=t,this.showAdditionalInfo=!this.showAdditionalInfo}},computed:{shouldDisplayAlert(){return this.icons.some((t=>!t.checked))}}},r=c,a=n(1001),u=(0,a.Z)(r,o,i,!1,null,"346a64f0",null),d=u.exports},4966:function(t,e,n){e["Z"]={components:{DynamicCard:()=>n.e(390).then(n.bind(n,390)),CardButton:()=>n.e(771).then(n.bind(n,771))},methods:{proceedToTheNextStep(){this.$store.dispatch("moveCurrentStep")},showAlertNotification({notificationText:t,greenStyle:e,redStyle:n,timeout:o}){setTimeout((()=>{this.$store.dispatch("alert/updateNotificationAlertState",{notificationText:t,greenStyle:e,redStyle:n,timeout:o})}))}}}},5342:function(t,e,n){t.exports=n.p+"img/anamnesis.2347bf7f.svg"},2163:function(t,e,n){t.exports=n.p+"img/anamnesis_vitae.a5bec71c.svg"},882:function(t,e,n){t.exports=n.p+"img/complaints.f91f5b41.svg"},897:function(t,e,n){t.exports=n.p+"img/objective.2a526b2b.svg"}}]);
//# sourceMappingURL=637.bcf40fa0.js.map