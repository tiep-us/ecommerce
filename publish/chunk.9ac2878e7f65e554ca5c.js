/*! For license information please see chunk.9ac2878e7f65e554ca5c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(t,e,a){"use strict";a(187)},186:function(t,e,a){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},i=a(53),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},187:function(t,e,a){var s=a(214);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(166).default)("fd5c67d2",s,!0,{})},188:function(t,e,a){"use strict";a(14),a(5);var s=a(27),i=a(89),r=a(70);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(i.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:a}=this;if(a)return a;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:a}=this;return t||(e?a.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:a}=this.$el,s=((t,e,a,s)=>{let i,r;for(const n in s){const o=s[n];if(void 0!==o&&t[n]){if(void 0!==r)if(null===o){if(r>=e)continue}else if(o<e||o-50<=a||null!==r&&o>r)continue;i=n,r=o}}return i})(this.src,t,a,this.containerBreakpoints),i=this.src[s],{url:r,size:n}=i||this.defaultImgObj;if(e=r,t&&n&&this.canCalcHeight){const[e,a]=n.split("x").map((t=>parseInt(t,10)));a&&(this.height="".concat(t>=e?a:t*a/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(r.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,a="IMG"===t.tagName?t:t.lastChild;a.style.opacity=0,a.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const a=document.createElement("IMG");a.src=e,t.parentNode.insertBefore(a,t.nextSibling)},a.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=a.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},o=(a(167),a(53)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,i=t.type;return a("source",{key:e,attrs:{srcset:s,type:i}})})):a("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=l.exports},189:function(t,e,a){"use strict";var s=a(168),i=a(28),r=a(40),n=a(41),o=a(42),l=a(80);const c=(t,e)=>{const{type:a,value:s}=e;if(s)return"percentage"===a?t*(100-s)/100:t-s};var d={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(r.a)(i.n),i19from:()=>Object(r.a)(i.tb),i19interestFree:()=>Object(r.a)(i.Fb),i19of:()=>Object(r.a)(i.kc),i19to:()=>Object(r.a)(i.xd),i19upTo:()=>Object(r.a)(i.Ed),price(){const t=Object(n.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(o.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(n.a)(this.product):void 0},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:l.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,a=parseInt(this.price/e,10);this.installmentsNumber=Math.min(a,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(a(167),a(53)),_=Object(u.a)(d,s.a,s.b,!1,null,null,null);e.a=_.exports},214:function(t,e,a){(e=a(165)(!1)).push([t.i,"",""]),t.exports=e},255:function(t,e,a){var s=a(272);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(166).default)("47fe50f4",s,!0,{})},271:function(t,e,a){"use strict";a(255)},272:function(t,e,a){(e=a(165)(!1)).push([t.i,".summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;width:70px;height:auto;margin-right:.5rem}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{line-height:1.3;display:inline-block}.summary__amount{margin:1rem 0 1.5rem;padding:.75rem 0;border-top:1px dotted var(--gray)}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}",""]),t.exports=e},276:function(t,e,a){"use strict";a(50);var s=a(28),i=a(40),r=a(80),n=a(43),o=a(4),l=a(54),c=a(9),d=a(248),u=a(277),_={name:"EcOrderInfo",components:{ShippingLine:d.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>c.a},ecomPassport:{type:Object,default:()=>l.a}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19buyAgain:()=>Object(i.a)(s.t),i19cancelOrder:()=>Object(i.a)(s.z),i19codeCopied:()=>Object(i.a)(s.K),i19copyCode:()=>Object(i.a)(s.T),i19copyErrorMsg:()=>Object(i.a)(s.U),i19doPaymentMsg:()=>Object(i.a)(s.cb),i19freight:()=>Object(i.a)(s.sb),i19login:()=>Object(i.a)(s.Ob),i19loginForOrderDetailsMsg:()=>"Entre com a conta do comprador para acessar mais detalhes do pedido.",i19myOrders:()=>Object(i.a)(s.Xb),i19of:()=>Object(i.a)(s.kc),i19orderConfirmationMsg:()=>Object(i.a)(s.rc),i19orderNumber:()=>Object(i.a)(s.tc),i19printBillet:()=>Object(i.a)(s.Ec),i19redirectToPayment:()=>Object(i.a)(s.Kc),i19referenceCode:()=>Object(i.a)(s.Mc),i19reopenOrder:()=>Object(i.a)(s.Sc),i19shippingAddress:()=>Object(i.a)(s.od),i19transactionCode:()=>Object(i.a)(s.zd),i19ticketCode:()=>Object(i.a)(s.wd),i19trackDelivery:()=>"Rastrear entrega",i19zipCode:()=>Object(i.a)(s.Ld),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach((t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)})),e)return e.status}const a=t.financial_status&&t.financial_status.current;return a||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?t.date_time>e.date_time?-1:1:0)),e.forEach(((a,s)=>{s>0&&a.status===e[s-1].status||t.push(a)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()}},methods:{i19FinancialStatus:t=>Object(i.a)(s.a)[t],i19FulfillmentStatus:t=>Object(i.a)(s.b)[t],i19OrderStatus:t=>Object(i.a)(s.e)[t],formatMoney:r.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i18n("CodeCopied"),body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:"".concat(this.i18n("copyErrorMsg"),": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then((({data:a})=>{const s=a.orders||[],i={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(i[e]=t[e])}));const r=s.findIndex((({_id:e,number:a})=>e===t._id||a===t.number));r>-1?Object.assign(s[r],i):s.push(i),e.requestApi("/me.json","patch",{orders:s})}))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;c.a.clear(),e.forEach(((t,a)=>{c.a.addItem(t,!1),a+1===e.length&&(c.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};l.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((({data:t})=>{this.localOrder={...this.localOrder,...t}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.loaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},m=(a(370),a(53)),p=Object(m.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-info py-4"},[t.isNew?a("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),a("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?a("div",{key:"loaded"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 col-lg-3"},[a("h2",{staticClass:"order-info__number"},[a("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),a("span",[t._v(t._s(t.localOrder.number))])]),a("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():a("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),a("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[a("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")])])]),t.statusEntries.length?a("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,s){return a("li",{key:"status-"+s,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?a("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?a("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),a("div",{staticClass:"col-md-7 col-lg-9"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?a("div",{staticClass:"order-info__billet"},[a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[a("p",[t._v(" "+t._s(t.i19ticketCode)+": "),a("br"),a("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),a("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[a("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?a("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[a("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?a("div",{staticClass:"order-info__redirect"},[a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),a("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[a("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),a("div",{staticClass:"order-info__details"},[t._t("payment",[a("div",{staticClass:"order-info__payment card"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[a("i",{staticClass:"fas fa-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return a("div",{key:"t-"+e._id,staticClass:"card-body"},[a("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?a("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):a("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[a("br"),a("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?a("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"}},[t._v(" "+t._s(e.notes)+" ")]):t._e(),e.credit_card?a("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?a("span",[e.credit_card.company?t._e():a("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?a("div",{staticClass:"order-info__transaction-code"},[a("small",[t._v(t._s(t.i19transactionCode))]),a("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?a("div",{staticClass:"order-info__transaction-reference"},[a("small",[t._v(t._s(t.i19referenceCode))]),a("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",[a("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return a("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[a("div",{staticClass:"card-header"},[t.fulfillmentStatus?a("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[a("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[a("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),a("div",{staticClass:"card-body"},[e.app?a("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),a("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?a("div",{staticClass:"order-info__shipping-tracking"},[a("hr"),a("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,s){return a("samp",{key:"track-"+s},[e.link?a("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):a("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()],1)])})),t.shippingAddress&&t.shippingAddress.street?a("div",{staticClass:"order-info__shipping-address card"},[a("div",{staticClass:"card-header"},[a("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),a("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),a("br"),t._l(["borough","city","province_code"],(function(e,s){return t.shippingAddress[e]?a("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===s?".":","))+" ")]):t._e()})),a("br"),a("span",[t._v(" "+t._s(t.i19zipCode)+": "),a("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus})],2),t.isAuthenticated?t._e():a("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),a("br"),a("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"fas fa-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"order-info__summary card"},[a("div",{staticClass:"card-body"},[a("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():a("button",{staticClass:"order-info__toggle btn btn-danger",on:{click:t.toggle}},[a("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")]),t._t("buy",[a("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[a("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])])])]):a("div",{key:"loading"},[a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?a("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[a("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=p.exports},277:function(t,e,a){"use strict";var s=a(28),i=a(40),r=a(91),n=a(22),o=a(41),l=a(80),c=a(89),d=a(186),u=a(188),_=a(189),m={name:"EcSummary",components:{ALink:d.a,APicture:u.a,APrices:_.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean},computed:{i19buyer:()=>Object(i.a)(s.w),i19contactPhone:()=>Object(i.a)(s.P),i19discount:()=>Object(i.a)(s.Z),i19docNumber:()=>Object(i.a)(s.db),i19freebie:()=>Object(i.a)(s.rb),i19freight:()=>Object(i.a)(s.sb),i19myAccount:()=>Object(i.a)(s.Wb),i19subtotal:()=>Object(i.a)(s.ud),i19summary:()=>Object(i.a)(s.vd),i19total:()=>Object(i.a)(s.yd),buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return"".concat(t.given_name," ").concat(t.middle_name||""," ").concat(t.family_name)},buyerPhone(){return Object(r.a)(this.buyer)}},methods:{getName:n.a,getPrice:o.a,formatMoney:l.a,getImg:t=>Object(c.a)(t,null,"small")}},p=(a(271),a(53)),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"summary"},[a("h5",{staticClass:"summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",[t.items?a("div",{staticClass:"summary__list"},t._l(t.items,(function(e){return e.quantity>0?a("div",{key:e._id,staticClass:"summary__item"},[t.getImg(e)?a("a-picture",{attrs:{src:t.getImg(e).url,alt:t.getImg(e).alt||e.name}}):t._e(),a("div",[a("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),Array.isArray(e.flags)&&e.flags.includes("freebie")?[a("s",[t._v(t._s(t.formatMoney(t.getPrice(e))))]),a("small",{staticClass:"text-muted"},[a("i",{staticClass:"fas fa-gift ml-2 mr-1"}),t._v(" "+t._s(t.i19freebie)+" ")])]:[t._v(" "+t._s(t.formatMoney(t.getPrice(e)))+" ")],a("br"),e.slug?a("a-link",{attrs:{href:"/"+e.slug,target:"_blank"}},[a("small",[t._v(t._s(t.getName(e)))])]):a("small",[t._v(" "+t._s(t.getName(e))+" ")])],2)],1):t._e()})),0):t._e()]),t._t("more-offers"),t._t("amount",[a("div",{staticClass:"summary__amount"},[a("div",{staticClass:"summary__amount__row"},[a("span",[t._v(t._s(t.i19subtotal))]),a("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),a("div",{staticClass:"summary__amount__row"},[a("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?a("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t._v(" "+t._s(t.shippingAddress.city)+" "+t._s(t.shippingAddress.province_code)+" ")],2):t._e()]),a("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?a("div",{staticClass:"summary__amount__row"},[a("span",[t._v(t._s(t.i19discount))]),a("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),a("div",{staticClass:"summary__amount__row summary__amount__row--total"},[a("span",[t._v(t._s(t.i19total))]),t.canShowPriceOptions?a("a-prices",{attrs:{product:{price:t.amount.total},"discount-option":{value:t.amount.discount},"is-literal":!0,"is-amount-total":!0}}):a("div",[t._v(" "+t._s(t.formatMoney(t.amount.total))+" ")])],1)])]),t._t("default"),t._t("buyer",[t.buyer?a("div",{staticClass:"summary__buyer"},[a("h5",[t._v(t._s(t.i19buyer))]),a("p",[t._v(" "+t._s(t.buyerName)+" "),a("br"),a("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),a("br"),a("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[a("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()])],2)}),[],!1,null,null,null);e.a=f.exports},303:function(t,e,a){var s=a(371);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(166).default)("0cb08df4",s,!0,{})},370:function(t,e,a){"use strict";a(303)},371:function(t,e,a){(e=a(165)(!1)).push([t.i,".order-info__number{color:var(--secondary);margin-top:var(--spacer-2);font-weight:var(--font-light)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);font-size:var(--font-size-sm);display:block}.order-info__timeline{list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;padding:0;margin:var(--spacer-4) 0;font-size:var(--font-size-sm)}@media (min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{padding:var(--spacer-2);margin-right:var(--spacer-1);min-width:165px;border:solid var(--border-color);border-width:0 0 5px}@media (min-width:768px){.order-info__timeline-status{padding-left:var(--spacer-3);margin-right:0;margin-bottom:var(--spacer-1);min-width:0;border-bottom-width:0;border-left-width:5px}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{font-size:85%;color:var(--text-muted)}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{font-weight:var(--font-bold);color:var(--info)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{text-align:center;font-size:var(--font-size-lg);margin-bottom:var(--spacer-5)}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-top:var(--spacer-3);margin-right:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}",""]),t.exports=e},70:function(t,e,a){"use strict";const s="undefined"!=typeof document&&document.documentMode,i={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),a=!1;null===e&&(e=document.createElement("img"),a=!0),s&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),a&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let a;for(let t=0;t<=e.length-1;t++)a=e[t].getAttribute("data-src"),a&&(e[t].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const a=t.getAttribute("data-background-image-set").split(e);let s=a[0].substr(0,a[0].indexOf(" "))||a[0];s=-1===s.indexOf("url(")?`url(${s})`:s,1===a.length?t.style.backgroundImage=s:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${s}; background-image: -webkit-image-set(${a}); background-image: image-set(${a})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function r(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded"),o=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:a,rootMargin:s,threshold:l,load:c,loaded:d}=Object.assign({},i,e);let u;"undefined"!=typeof window&&window.IntersectionObserver&&(u=new IntersectionObserver(((t,e)=>(a,s)=>{a.forEach((a=>{(a.intersectionRatio>0||a.isIntersecting)&&(s.unobserve(a.target),n(a.target)||(t(a.target),r(a.target),e(a.target)))}))})(c,d),{root:a,rootMargin:s,threshold:l}));const _=o(t,a);for(let t=0;t<_.length;t++)(m=_[t]).getAttribute("data-placeholder-background")&&(m.style.background=m.getAttribute("data-placeholder-background"));var m;return{observe(){const e=o(t,a);for(let t=0;t<e.length;t++)n(e[t])||(u?u.observe(e[t]):(c(e[t]),r(e[t]),d(e[t])))},triggerLoad(t){n(t)||(c(t),r(t),d(t))},observer:u}}}}]);
//# sourceMappingURL=chunk.9ac2878e7f65e554ca5c.js.map