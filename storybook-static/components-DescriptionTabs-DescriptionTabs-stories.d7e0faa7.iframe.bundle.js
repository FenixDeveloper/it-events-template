(self.webpackChunkit_events_frontend=self.webpackChunkit_events_frontend||[]).push([[70],{"./src/components/DescriptionTabs/DescriptionTabs.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DescriptionTabs_stories}});var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Basic$parameters3,_Basic$parameters3$do,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),styles_module_eventTabs="styles_eventTabs__85ysA",styles_module_activeTab="styles_activeTab__1S2wW",styles_module_tab="styles_tab__XGksv",styles_module_tabContent="styles_tabContent__otoyC",tabs=[{title:"О мероприятии"},{title:"Программа и спикеры"},{title:"Организаторы"},{title:"Партнеры"}],jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DescriptionTabs=function DescriptionTabs(_ref){var selectedEvent=_ref.selectedEvent,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:styles_module_eventTabs,children:tabs.map((function(tab,index){return(0,jsx_runtime.jsx)("div",{className:"".concat(index===activeTab?styles_module_activeTab:styles_module_tab),onClick:function onClick(){return function handleTabClick(index){setActiveTab(index)}(index)},children:tab.title},index)}))}),(0,jsx_runtime.jsx)("div",{className:styles_module_tabContent,children:function getContentByTab(){switch(activeTab){case 0:return(null==selectedEvent?void 0:selectedEvent.description)||"Нет данных";case 1:return(null==selectedEvent?void 0:selectedEvent.program)||"Нет данных";case 2:return(null==selectedEvent?void 0:selectedEvent.organizer)||"Нет данных";case 3:return(null==selectedEvent?void 0:selectedEvent.partners)||"Нет данных";default:return""}}()})]})};DescriptionTabs.__docgenInfo={description:"",methods:[],displayName:"DescriptionTabs",props:{selectedEvent:{description:"",type:{name:"object"},required:!1}}};var DescriptionTabs_stories={title:"Components/DescriptionTabs",component:DescriptionTabs,parameters:{componentSubtitle:"Components > DescriptionTabs",layout:"centered"},args:{selectedEvent:{description:"DevOops — конференция от JUG Ru Group, посвященная практикам DevOps. Она объединяет специалистов по разработке и эксплуатации, чтобы в итоге все могли релизить чаще, а чинить быстрее и надежнее.",program:"Смотреть на сайте организатора",organizer:"Яндекс, Google, Amazon",partners:"VK"}},argTypes:{selectedEvent:{description:"SelectedEvent is Event from API"}}},Basic={};Basic.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Basic.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source),description:(0,objectSpread2.Z)({story:"Применимость: Components > EventDescription"},null===(_Basic$parameters3=Basic.parameters)||void 0===_Basic$parameters3||null===(_Basic$parameters3$do=_Basic$parameters3.docs)||void 0===_Basic$parameters3$do?void 0:_Basic$parameters3$do.description)})});var __namedExportsOrder=["Basic"]}}]);