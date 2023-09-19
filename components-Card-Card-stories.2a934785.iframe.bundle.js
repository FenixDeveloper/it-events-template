"use strict";(self.webpackChunkit_events_frontend=self.webpackChunkit_events_frontend||[]).push([[518],{"./src/components/Card/Card.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Card:function(){return Card},DefaultImage:function(){return DefaultImage},IsLiked:function(){return IsLiked},__namedExportsOrder:function(){return __namedExportsOrder}});var _Card$parameters,_Card$parameters2,_Card$parameters2$doc,_Card$parameters3,_Card$parameters3$doc,_IsLiked$parameters,_IsLiked$parameters2,_IsLiked$parameters2$,_IsLiked$parameters3,_IsLiked$parameters3$,_DefaultImage$paramet,_DefaultImage$paramet2,_DefaultImage$paramet3,_DefaultImage$paramet4,_DefaultImage$paramet5,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Card/styles.module.scss"),_images_default_image_png__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/default-image.png"),_images_EventInfo_place_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/images/EventInfo/place.svg"),_images_EventInfo_calendar_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/images/EventInfo/calendar.svg"),_images_EventInfo_time_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/images/EventInfo/time.svg"),_Card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Card/Card.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/Card",component:_Card__WEBPACK_IMPORTED_MODULE_5__.Z,parameters:{componentSubtitle:"Components > Card"},args:{event:{id:1,title:"Событие про Storybook или длинное название",city:"Москва",date_start:"Ср, 25 сентября",isLiked:!1,price:"15 000 р.",url:"string",image:"https://it.acceleratorpracticum.ru/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png"}},argTypes:{event:{description:"Object from API"},cardDirection:{options:["row","column"],control:"radio",defaultValue:"row",description:"Flex Direction inline style"},style:{description:"Optional inline style"}}};var cardDetails=[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_images_EventInfo_calendar_svg__WEBPACK_IMPORTED_MODULE_3__.r,{}),content:"Ср, 25 сентября"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_images_EventInfo_time_svg__WEBPACK_IMPORTED_MODULE_4__.r,{}),content:"10:00 - 12:00"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_images_EventInfo_place_svg__WEBPACK_IMPORTED_MODULE_2__.r,{}),content:"Москва"},{content:"15 000 р.",styles:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.price}],Card=function Card(_ref){var event=_ref.event,cardDirection=_ref.cardDirection;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.card),style:{padding:"0",margin:"0",flexDirection:cardDirection},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.imageContainer,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{src:event.image,alt:"event_picture",className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.image}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"".concat(event.isLiked?_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.likeButtonActive:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.likeButton),type:"button"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.descriptionContainer),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.titleContainer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.title,children:event.title})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.rowContainer,style:{padding:"0"},children:cardDetails.map((function(item,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{className:_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__.Z.rowItem,style:{display:"flex",alignItems:"center"},children:[item.icon,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{className:item.styles,style:{margin:"0"},children:item.content})]},index)}))})]})]},event.id)},IsLiked=function IsLiked(){var isLikedEvent=(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},{id:1,title:"Событие про Storybook или длинное название",city:"Москва",date_start:"Ср, 25 сентября",isLiked:!1,price:"15 000 р.",url:"string",image:"https://it.acceleratorpracticum.ru/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png"}),{},{isLiked:!0,title:"Card в состоянии isLiked"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Card,{event:isLikedEvent})},DefaultImage=function DefaultImage(){var newEvent=(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},{id:1,title:"Событие про Storybook или длинное название",city:"Москва",date_start:"Ср, 25 сентября",isLiked:!1,price:"15 000 р.",url:"string",image:"https://it.acceleratorpracticum.ru/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png"}),{},{image:_images_default_image_png__WEBPACK_IMPORTED_MODULE_1__,title:"Card в состоянии DefaultImage"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Card,{event:newEvent})};Card.parameters=(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},Card.parameters),{},{docs:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_Card$parameters=Card.parameters)||void 0===_Card$parameters?void 0:_Card$parameters.docs),{},{source:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:'({\n  event,\n  cardDirection\n}) => {\n  return <li key={event.id} className={`${styles.card}`} style={{\n    padding: "0",\n    margin: "0",\n    flexDirection: cardDirection\n  }}>\r\n      <div className={styles.imageContainer}>\r\n        <img src={event.image} alt="event_picture" className={styles.image} />\r\n        <button className={`${event.isLiked ? styles.likeButtonActive : styles.likeButton}`} type="button"></button>\r\n      </div>\r\n      <div className={`${styles.descriptionContainer}`}>\r\n        <div className={styles.titleContainer}>\r\n          <h3 className={styles.title}>{event.title}</h3>\r\n        </div>\r\n        <ul className={styles.rowContainer} style={{\n        padding: "0"\n      }}>\r\n          {cardDetails.map((item, index) => <li key={index} className={styles.rowItem} style={{\n          display: "flex",\n          alignItems: "center"\n        }}>\r\n              {item.icon}\r\n              <p className={item.styles} style={{\n            margin: "0"\n          }}>\r\n                {item.content}\r\n              </p>\r\n            </li>)}\r\n        </ul>\r\n      </div>\r\n    </li>;\n}'},null===(_Card$parameters2=Card.parameters)||void 0===_Card$parameters2||null===(_Card$parameters2$doc=_Card$parameters2.docs)||void 0===_Card$parameters2$doc?void 0:_Card$parameters2$doc.source),description:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({story:"Применимость: CardList"},null===(_Card$parameters3=Card.parameters)||void 0===_Card$parameters3||null===(_Card$parameters3$doc=_Card$parameters3.docs)||void 0===_Card$parameters3$doc?void 0:_Card$parameters3$doc.description)})}),IsLiked.parameters=(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},IsLiked.parameters),{},{docs:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_IsLiked$parameters=IsLiked.parameters)||void 0===_IsLiked$parameters?void 0:_IsLiked$parameters.docs),{},{source:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:'() => {\n  const isLikedEvent = {\n    ...defaultEvent(),\n    isLiked: true,\n    title: "Card в состоянии isLiked"\n  };\n  return <Card event={isLikedEvent} />;\n}'},null===(_IsLiked$parameters2=IsLiked.parameters)||void 0===_IsLiked$parameters2||null===(_IsLiked$parameters2$=_IsLiked$parameters2.docs)||void 0===_IsLiked$parameters2$?void 0:_IsLiked$parameters2$.source),description:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({story:"Применимость: CardList"},null===(_IsLiked$parameters3=IsLiked.parameters)||void 0===_IsLiked$parameters3||null===(_IsLiked$parameters3$=_IsLiked$parameters3.docs)||void 0===_IsLiked$parameters3$?void 0:_IsLiked$parameters3$.description)})}),DefaultImage.parameters=(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},DefaultImage.parameters),{},{docs:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_DefaultImage$paramet=DefaultImage.parameters)||void 0===_DefaultImage$paramet?void 0:_DefaultImage$paramet.docs),{},{source:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:'() => {\n  const newEvent = {\n    ...defaultEvent(),\n    image: defaultImage,\n    title: "Card в состоянии DefaultImage"\n  };\n  return <Card event={newEvent} />;\n}'},null===(_DefaultImage$paramet2=DefaultImage.parameters)||void 0===_DefaultImage$paramet2||null===(_DefaultImage$paramet3=_DefaultImage$paramet2.docs)||void 0===_DefaultImage$paramet3?void 0:_DefaultImage$paramet3.source),description:(0,D_YP_EXPERT_ACCELERATOR_WORKSHOP_workshop_template_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({story:"Применимость: CardList"},null===(_DefaultImage$paramet4=DefaultImage.parameters)||void 0===_DefaultImage$paramet4||null===(_DefaultImage$paramet5=_DefaultImage$paramet4.docs)||void 0===_DefaultImage$paramet5?void 0:_DefaultImage$paramet5.description)})});var __namedExportsOrder=["Card","IsLiked","DefaultImage"];Card.__docgenInfo={description:"Применимость: CardList",methods:[],displayName:"Card"},IsLiked.__docgenInfo={description:"Применимость: CardList",methods:[],displayName:"IsLiked"},DefaultImage.__docgenInfo={description:"Применимость: CardList",methods:[],displayName:"DefaultImage"}}}]);