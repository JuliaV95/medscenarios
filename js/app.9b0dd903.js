(function(){"use strict";var t={7998:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],c={created(){this.$store.dispatch("setActiveScenario","scenario_1")}},s=c,u=n(1001),a=(0,u.Z)(s,o,i,!1,null,null,null),l=a.exports,p=n(2631),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e(t.activeComponent,{tag:"component"}),t.getAlertState.show?e("AlertNotification"):t._e()],1)},b=[],d=n(3822),m={name:"HomePage",components:{AlertNotification:()=>n.e(454).then(n.bind(n,3454))},computed:{...(0,d.Se)("alert",["getAlertState"]),activeComponent(){return this.activeScenario[this.currentStep]?.component}}},g=m,v=(0,u.Z)(g,f,b,!1,null,null,null),h=v.exports;r.ZP.use(p.Z);const S=[{path:"/",name:"main",component:h}],x=new p.Z({mode:"history",base:"/medscenarios/",routes:S});var T=x;const _=[{title:"Общая информация",component:()=>n.e(982).then(n.bind(n,9982)),informationText:"<strong>Пациент</strong><br><br>Мужчина, 37 лет обратился к неврологу в поликлинику по месту жительства."},{title:"Первичный осмотр",component:()=>n.e(637).then(n.bind(n,2637)),substeps:[{title:"Жалобы",text:`Жалобы на постоянную выраженную «ломящую» боль, иногда по типу «прохождение тока» или «мурашек» в области правого надплечья и плеча (ВАШ 6-8 баллов) с проекцией в область правой лопатки:<br><br><img src="${n(5272)}"><br><br>Боль усиливается в ночное время (трудно уснуть, частое просыпание от боли), а\n                    также за рулем. Кратковременное облегчение отмечается при подъеме и заведении \n                    правой руки за голову:<br><br><img src="${n(6618)}"><br>`},{title:"Анамнез заболевания",text:"Указанные симптомы возникли 5 дней назад без каких-либо внешних причин. Со слов пациента, принимал самостоятельно обезболивающие препараты с незначительным эффектом."},{title:"Анамнез Жизни",text:"Туберкулез, онкологические, венерические заболевания отрицает. Гепатитом не болел. Кровь ранее не переливали. Аллергологический анамнез: без особенностей. Вредные привычки отрицает. Работает менеджером по продажам в автосалоне."},{title:"Объективные данные",text:`<strong>Общее состояние</strong> удовлетворительное. ИМТ = 21 кг/м<sup>2</sup>. Температура тела 36,7<sup>о</sup>С. \n                    Кожные покровы обычной окраски. Периферические лимфоузлы не увеличены. В\n                    легких дыхание везикулярное, хрипов нет. ЧД = 18 в 1 мин. Тоны сердца ясные, ритм\n                    правильный АД 120/70 мм рт. ст. ЧСС = 80 в 1 мин. Язык влажный, обложен\n                    беловатым налетом. Живот мягкий, безболезненный при пальпации. Печень у края\n                    реберной дуги. Симптом поколачивания по поясничной области отрицателен.<br><br>\n                    <strong>Неврологический статус:</strong> сознание ясное. Черепно-мозговая иннервация не\n                    нарушена. Тонус мышц не изменен. Сила мышц в конечностях достаточная.\n                    Сухожильно-периостальные рефлексы с верхних и нижних конечностей без чёткой\n                    разницы сторон, достаточные. Патологических знаков нет. Нарушений поверхностной\n                    чувствительности не предъявляет. В позе Ромберга устойчив, координаторные пробы\n                    выполняет удовлетворительно. Менингеальных знаков нет.<br><br>\n                    <strong>Локальный статус:</strong> движения в правой плечевом суставе безболезненны, в\n                    достаточном объеме. Усиление боли в правом надплечье при наклоне головы назад и\n                    одновременном ее повороте вправо:<br><br><img src="${n(4409)}"><br><br>\n                    В ходе нейроортопедического осмотра выявляется феномен крыловидной лопатки\n                    справа:<br><br><img src="${n(84)}"><br>Положительный тест ULLT (Upper limb tension test) справа:\n                    <br><br><img src="${n(7695)}">`}]},{title:"Результаты обследования",component:()=>n.e(918).then(n.bind(n,918)),substeps:[{title:"Лабораторные исследования",text:"<strong>Общий анализ крови:</strong> Hb = 132 г/л, лейк. = 6,7*10^9; Э = 2%; П = 2%; С = 42%; Лим = 40%; М = 14%, СОЭ = 8 мм/ч."},{title:"Рентгенография",text:`<strong>Рентгенограмма шейного отдела позвоночника в 2х проекциях:</strong> выпрямление\n                    шейного лордоза. Соотношение задних отделов тел позвонков не нарушено.\n                    Субхондральный склероз замыкательных пластин тел не выражен, контуры их четкие,\n                    ровные:<br><br><img src="${n(5153)}"><br><strong>Рентгенограмма грудной клетки:</strong> без патологии.`},{title:"МРТ",text:`<strong>МРТ шейного отдела позвоночника:</strong> МР-картина протрузии межпозвонковых дисков\n                    С2-С3 (2 мм), грыжи дисков С3-С4 (4 мм), С4-С5 (3 мм), С5-С6 (3 мм):<br><br><img src="${n(8256)}"><br>\n                    <strong>МРТ правого плечевого сустава:</strong> МР-картина частичного повреждения сухожилия надостной мышцы:\n                    <br><br><img src="${n(5151)}">`},{title:"Другие исследования",text:"<strong>Дуплексное сканирование сосудов верхних конечностей:</strong> коллатеральный кровоток в левой лучевой артерии при проведении функциональных проб. <br><strong>Электронейромиография:</strong> скорость проведения возбуждения по моторным исенсорным волокнам n. medianus dex., n. ulnaris dex. не изменена. Блоков проведения нет.<br><br><strong>ЭКГ:</strong> синусовый ритм с ЧСС 86 ударов в минуту. Горизонтальное положение электрической оси сердца."}]},{title:"Диагноз",component:()=>n.e(21).then(n.bind(n,3021)),answers:[{text:"Синдром карпального канала",correct:!1},{text:"Острая вертеброгенная шейная радикулопатия с С7 корешковым синдромом справа",correct:!0},{text:"Синдром сдавления ротаторов плеча",correct:!1},{text:"Конверсионное расстройство",correct:!1},{text:"Синдром передней лестничной мышцы",correct:!1},{text:"Плексопатия плечевого сплетения",correct:!1}]},{title:"Лечение",component:()=>n.e(880).then(n.bind(n,880)),instructionText:"Определите лечебную тактику",labels:[{text:"НПВП (теноксикам, диклофенак, кеторолак)"},{text:"Миорелаксанты (тизанидин, толперизон)"},{text:"Антидепрессанты (амитриптилин, дулоксетин)"},{text:"Вазоактивные препараты (винпоцетин, ксантинола никотинат)"},{text:"Противосудорожные (габапентин, прегабалин)"},{text:"Комплекс витаминов группы В"},{text:"Спазмолитики (дротаверин, папаверин, платифиллин)"},{text:"Диуретики (фуросемид, ацетазоламид)"},{text:"Глюкокортикоиды (дексаметазон, преднизолон, бетаметазон)"},{text:"Антихолинэстеразные препараты (ипидакрин)"},{text:"Оперативное лечение"}],correctAnswers:[0,1,4,5,8]},{title:"Резюме",component:()=>n.e(910).then(n.bind(n,910)),informationText:"Мужчина, 37 лет обратился к неврологу в поликлинику по месту жительства.<br><br>Жалобы на постоянную выраженную «ломящую» боль, иногда по типу «прохождение тока» или «мурашек» в области правого надплечья и плеча (ВАШ 6-8 баллов) с проекцией в область правой лопатки. Боль усиливается в ночное время (трудно уснуть, частое просыпание от боли), а также за рулем. Кратковременное облегчение отмечается при подъеме и заведение правой руки за голову.<br><br>Проведено физикальное и лабораторно-инструментальное обследование (ОАК, БАК, ЭКГ, МРТ и рентгенография шейного отдела позвоночника, ЭНМГ нервов верхнейконечности, МРТ плечевого сустава).<br><br><strong>Диагноз:</strong><br><br>Диагноз: Острая вертеброгенная шейная радикулопатия с С7 корешковым синдромом справа.<br><br><strong>Лечение:</strong><ul><li>НПВП (теноксикам, диклофенак, кеторолак)</li><li>Миорелаксанты (тизанидин, толперизон)</li><li>Противосудорожные (габапентин, прегабалин)</li><li>Комплекс витаминов группы В</li><li>Глюкокортикоиды</li></ul>",analysisText:{title:"Анализ клинического случая",text:"В большинстве случаев диагноз шейной радикулопатии (ШР) очевиден после анализа жалоб, анамнестических сведений и результатов неврологического осмотра, однако в некоторых случаях, в особенности при отсутствии явных чувствительных и двигательных расстройств, дифференциальная диагностика пациентов с данной патологией представляет определенные трудности.<br><br>В рассматриваемом клиническом примере, анализируя жалобы пациента, следует обратить внимание на 2 аспекта: характерную локализацию болевых ощущений и особенную анталгетическую позу. Чаще всего зона боли при ШР включает область плеча и ипсилатеральную ей зону медиальнее лопатки, а облегчение боли при отведении плеча было описано Spurling R. еще в 1956 г. и получило название «Shoulder abduction sign». Облегчения боли в этом положении связывают с уменьшением натяжения спинномозговых корешков и декомпрессией эпидуральных вен.<br><br>В примере симптомы заболевания у пациента возникли без каких-либо внешних причин. Действительно, в большинстве исследований, посвященных проблеме диагностики и лечению ШР, отмечалось отсутствие четкой корреляции между частотой возникновения ШР и предшествующей острой травмы шейного отдела позвоночника, при этом около 30% пациентов отмечали дебют жалоб в момент абсолютного физического покоя.<br><br>Объективный осмотр пациента позволил выявить ряд клинических симптомов, подтверждающих вероятность диагностирования ШР:<br><br>1 Усиление боли в правом надплечье при наклоне головы назад и одновременном ее повороте вправо – положительный тест Спурлинга (один из наиболее известных способов верификации ШР, который был предложен Spurling R. и Scoville W. в 1944 г).<br><br>2 Положительный тест ULLT (Upper limb tension test), являющийся по своей сути аналогом теста Ласега для шейных спинномозговых корешков. ULLT относится к провокационным тестам для диагностики острой ШР с наибольшей чувствительностью в отношении корешков С6-С8.<br><br>3 Феномен крыловидной лопатки - очевидный критерий поражения С7 спинномозгового корешка, возникающий за счет пареза передней зубчатой мышцы.<br><br>Следует отметить, что диагностика ШР базируется преимущественно на анализе результатов клинического осмотра, поэтому данные лабораторных и инструментальных исследований, представленные в данном примере, позволяют, главным образом, исключить другую патологию. Необходимо иметь в виду, что надежды на результаты нейровизуализационного обследования, как основу постановки диагноза у пациентов с заболеваниями позвоночного столба, в случае с ШР не оправдываются, в виду высокой частоты выявления протрузий и экструзий межпозвонковых дисков, не имеющих каких-либо клинических коррелятов.<br><br>Основным подходом в ведение данной категории больных должна оставаться консервативная терапия– у около 88% пациентов ожидается, что наступит значительное улучшение состояния в течение 4 недель лечения, даже при наличии очевидных двигательных расстройств. Основными группами лекарственных средств в лечение пациентов с ШР являются НПВП, миорелаксанты и глюкокортикоиды. Наличие нейропатического компонента боли требует также назначения антиконвульсантов. Патогенетически обосновано применение антихолинэстеразных средств и витаминов группы В для ускорения восстановление нервных проводников.<br><br>Среди НПВП в классе оксикамов стоит обратить внимание на теноксикам<sup>1</sup> (Тексаред®). Через 15 минут после внутримышечного введения концентрация теноксикама достигает 90% от максимально возможного значения<sup>2</sup> Теноксикам (Тексаред®) в таблетированной и инъекционной форме применяется 1 раз в сутки<sup>2,3</sup> и имеет широкий спектр показаний<sup>2,3</sup>.<br><br>Среди высокодозных комплексов витаминов группы B важно обратить внимание на препараты, которые содержат терапевтические дозировки всех трех витаминов B1, B6 и B12 как в инъекционной, так и в таблетированной форме, например, оригинальный лекарственный препарат Нейробион®<sup>4</sup>.<br><br>1. Gonzalez JP, Todd PA. Tenoxicam: a preliminary review of its pharmacodynamic and pharmacokinetic properties, and therapeutic efficacy. Drugs. 1987; 34: 289-310.<br>2. Инструкция по медицинскому применению лекарственного препарата Тексаред® лиофилизат для приготовления раствора для инъекции 20 мг №3, РУ ЛС-000295 от 16.07.21<br>3. Инструкция по медицинскому применению лекарственного препарата Тексаред ® таблетки 20 мг №10, РУ ЛС-000294 от 15.10.21<br>4. Инструкция по медицинскому применению лекарственного препарата Нейробион® таблетки покрытые оболочкой ЛС-001540, Инструкция по медицинскому применению лекарственного препарата Нейробион® раствор ЛСР-004589/08<br>"}}],E={},y={scenario_1:_,scenario_2:E};var A={scenarios:y},C={namespaced:!0,state:{alert_state:{show:!1,notificationText:null,greenStyle:!1,redStyle:!1}},getters:{getAlertState(t){return t.alert_state}},mutations:{UPDATE_NOTIFICATION_ALERT_STATE(t,e){t.alert_state={show:!t.alert_state.show,...e},e.timeout&&setTimeout((()=>t.alert_state.show=!1),e.timeout)}},actions:{updateNotificationAlertState({commit:t},e){t("UPDATE_NOTIFICATION_ALERT_STATE",e)}}};r.ZP.use(d.ZP);var w=new d.ZP.Store({modules:{alert:C},state:{currentStep:0,activeScenario:null},getters:{getCurrentStep(t){return t.currentStep},getActiveScenario(t){return t.activeScenario}},mutations:{RESET_CURRENT_STEP(t){t.currentStep=0},MOVE_CURRENT_STEP(t){t.currentStep=++t.currentStep},SET_ACTIVE_SCENARIO(t,e){t.activeScenario=A.scenarios[e]}},actions:{resetCurrentStep({commit:t}){t("RESET_CURRENT_STEP")},moveCurrentStep({commit:t}){t("MOVE_CURRENT_STEP")},setActiveScenario({commit:t},e){t("SET_ACTIVE_SCENARIO",e)}}});const O={bind:function(t,e,n){t.clickOutsideEvent=function(r){t==r.target||t.contains(r.target)||n.context[e.expression](r)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}};r.ZP.config.productionTip=!1,r.ZP.directive("click-outside",O),r.ZP.mixin({computed:{currentStep(){return w.getters.getCurrentStep},activeScenario(){return w.getters.getActiveScenario}}}),new r.ZP({router:T,store:w,render:t=>t(l)}).$mount("#app")},84:function(t,e,n){t.exports=n.p+"img/back.9b4d0019.png"},4409:function(t,e,n){t.exports=n.p+"img/head_turn.ce738703.jpg"},5272:function(t,e,n){t.exports=n.p+"img/pic_1.93cd87fa.jpg"},6618:function(t,e,n){t.exports=n.p+"img/pic_2.3891b6db.jpg"},7695:function(t,e,n){t.exports=n.p+"img/pic_3.3938f627.jpg"},5153:function(t,e,n){t.exports=n.p+"img/pic_4.5edd69c7.jpg"},8256:function(t,e,n){t.exports=n.p+"img/pic_5.5b2bf773.jpg"},5151:function(t,e,n){t.exports=n.p+"img/pic_6.3fd15e8a.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var c=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<c&&(c=i));if(s){t.splice(l--,1);var a=o();void 0!==a&&(e=a)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{21:"943c543e",390:"b3090752",454:"28555057",469:"d3385aa3",616:"2d2c26b5",637:"bcf40fa0",771:"f2bca71f",880:"a0117309",910:"8251873c",918:"f476f23e",982:"4fc8e9c8"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{21:"d7619a47",454:"1676c285",469:"377cea7f",637:"bd3d2306",880:"63a90c6f",910:"317fddfa",918:"156f6541"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="medscenarios:";n.l=function(r,o,i,c){if(t[r])t[r].push(o);else{var s,u;if(void 0!==i)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var p=a[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+i){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(b);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/medscenarios/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){o=c[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var c=n.miniCssF(r),s=n.p+c;if(e(c,s))return o();t(r,s,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={21:1,454:1,469:1,637:1,880:1,910:1,918:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var c=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+c+")",s.name="ChunkLoadError",s.type=i,s.request=c,o[1](s)}};n.l(c,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,c=r[0],s=r[1],u=r[2],a=0;if(c.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);a<c.length;a++)i=c[a],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkmedscenarios"]=self["webpackChunkmedscenarios"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7998)}));r=n.O(r)})();
//# sourceMappingURL=app.9b0dd903.js.map