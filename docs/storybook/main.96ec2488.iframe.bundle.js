(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1556:function(module,exports,__webpack_require__){__webpack_require__(1557),__webpack_require__(1865),__webpack_require__(1866),__webpack_require__(2659),__webpack_require__(2660),__webpack_require__(2665),__webpack_require__(2666),__webpack_require__(2664),__webpack_require__(2662),__webpack_require__(2667),__webpack_require__(2668),module.exports=__webpack_require__(2619)},1662:function(module,exports){},1674:function(module,exports){},1789:function(module,exports){},1866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1005)},1915:function(module,exports){},2137:function(module,exports){},2544:function(module,exports){},2616:function(module,exports,__webpack_require__){},2619:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1005).configure)([__webpack_require__(2620),__webpack_require__(2621)],module,!1)}).call(this,__webpack_require__(367)(module))},2620:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=2620},2621:function(module,exports,__webpack_require__){var map={"./stories/components/Courses/CourseTable.stories.js":2669,"./stories/components/Footer/AppFooter.stories.js":2670,"./stories/components/TutorAssignment/TutorAssignmentSelect.stories.js":2663};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2621},2663:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Uncontrolled",(function(){return Uncontrolled}));var objectSpread2=__webpack_require__(87),regenerator=__webpack_require__(88),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(198),react=__webpack_require__(0),react_default=__webpack_require__.n(react),toConsumableArray=__webpack_require__(1522),slicedToArray=__webpack_require__(1523),objectWithoutProperties=__webpack_require__(1526),cascader=__webpack_require__(2679);function asQuarterObject(q){if("string"==typeof q){if(5===q.length)return{year:Number(q.slice(0,4)),quarter:Number(q.slice(4,5))};throw new Error("Invalid quarter format")}return q}function asHumanQuarter(q){var quarter=asQuarterObject(q);return"".concat(function humanQuarterOfYear(q){switch(q){case 1:return"Winter";case 2:return"Spring";case 3:return"Summer";case 4:return"Fall"}}(quarter.quarter)," ").concat(quarter.year)}var fetch=__webpack_require__(313),selectorSupport_quarterProvider=function quarterProvider(){return Object(fetch.a)("/api/public/quarters")},selectorSupport_courseProvider=function courseProvider(quarter){return Object(fetch.a)("/api/public/courses/forQuarter/".concat(quarter))},selectorSupport_tutorAssignmentProvider=function tutorAssignmentProvider(course){return Object(fetch.a)("/api/public/tutorAssignment/".concat(course))},selectorIndices_QUARTER=0,selectorIndices_COURSE=1,selectorIndices_TUTOR_ASSIGNMENT=2;function TutorAssignmentSelect(props){var _props$quarterProvide=props.quarterProvider,quarterProvider=void 0===_props$quarterProvide?selectorSupport_quarterProvider:_props$quarterProvide,_props$courseProvider=props.courseProvider,courseProvider=void 0===_props$courseProvider?selectorSupport_courseProvider:_props$courseProvider,_props$tutorAssignmen=props.tutorAssignmentProvider,tutorAssignmentProvider=void 0===_props$tutorAssignmen?selectorSupport_tutorAssignmentProvider:_props$tutorAssignmen,onChange=props.onChange,otherProps=Object(objectWithoutProperties.a)(props,["quarterProvider","courseProvider","tutorAssignmentProvider","onChange"]),_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),options=_useState2[0],setOptions=_useState2[1];Object(react.useEffect)((function(){quarterProvider().then((function(quarters){setOptions(quarters.map((function(q){return{value:q,label:asHumanQuarter(q),isLeaf:!1}})))}))}),[quarterProvider]);var loadData=function(){var _ref=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(selectedOptions){var selectedQuarter,courses,selectedCourse,tutorAssignments;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(1!==selectedOptions.length){_context.next=10;break}return(selectedQuarter=selectedOptions[selectorIndices_QUARTER]).loading=!0,_context.next=5,courseProvider(selectedQuarter.value);case 5:courses=_context.sent,selectedQuarter.loading=!1,selectedQuarter.children=courses.map((function(c){return{value:c.id,label:c.name,isLeaf:!1}})),_context.next=17;break;case 10:return(selectedCourse=selectedOptions[selectorIndices_COURSE]).loading=!0,_context.next=14,tutorAssignmentProvider(selectedCourse.value);case 14:tutorAssignments=_context.sent,selectedCourse.loading=!1,selectedCourse.children=tutorAssignments.map((function(ta){return{value:ta.id,label:"".concat(ta.tutor.firstName," ").concat(ta.tutor.lastName)}}));case 17:setOptions(Object(toConsumableArray.a)(options));case 18:case"end":return _context.stop()}}),_callee)})));return function loadData(_x){return _ref.apply(this,arguments)}}();return react_default.a.createElement(cascader.a,Object.assign({},otherProps,{options:options,loadData:loadData,onChange:function onCascaderChange(value){onChange(value[selectorIndices_TUTOR_ASSIGNMENT])},placeholder:options?"Select a tutor":"Loading...",disabled:!options}))}TutorAssignmentSelect.__docgenInfo={description:"",methods:[],displayName:"TutorAssignmentSelect"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/TutorAssignment/TutorAssignmentSelect.js"]={name:"TutorAssignmentSelect",docgenInfo:TutorAssignmentSelect.__docgenInfo,path:"src/main/components/TutorAssignment/TutorAssignmentSelect.js"});__webpack_exports__.default={title:"components/TutorAssignment/TutorAssignmentSelect",component:TutorAssignmentSelect,argTypes:{onChange:{action:"changed"}}};var _tutorAssignmentProvider,_courseProvider,_quarterProvider,Uncontrolled=function Template(args){return react_default.a.createElement(TutorAssignmentSelect,args)}.bind({});Uncontrolled.args={quarterProvider:(_quarterProvider=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",["20204","20211","20212"]);case 1:case"end":return _context.stop()}}),_callee)}))),function quarterProvider(){return _quarterProvider.apply(this,arguments)}),courseProvider:(_courseProvider=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee2(){return regenerator_default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",[{id:1,name:"CMPSC 156"},{id:2,name:"CMPSC 148"}]);case 1:case"end":return _context2.stop()}}),_callee2)}))),function courseProvider(){return _courseProvider.apply(this,arguments)}),tutorAssignmentProvider:(_tutorAssignmentProvider=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee3(){return regenerator_default.a.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",[{id:1,tutor:{firstName:"John",lastName:"Doe"}},{id:2,tutor:{firstName:"Jane",lastName:"Doe"}}]);case 1:case"end":return _context3.stop()}}),_callee3)}))),function tutorAssignmentProvider(){return _tutorAssignmentProvider.apply(this,arguments)})},Uncontrolled.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TutorAssignmentSelect {...args} />"}},Uncontrolled.parameters)},2668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(2682),esm=__webpack_require__(6),parameters=(__webpack_require__(2616),__webpack_require__(2617),__webpack_require__(2618),{actions:{argTypesRegex:"^on[A-Z].*"}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},2669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty})),__webpack_require__.d(__webpack_exports__,"twoClasses",(function(){return twoClasses}));var objectSpread2=__webpack_require__(87),react=__webpack_require__(0),react_default=__webpack_require__.n(react),lib=__webpack_require__(1497),lib_default=__webpack_require__.n(lib),Button=__webpack_require__(2681),react_router=__webpack_require__(2680),esm=__webpack_require__(1521),fetch=__webpack_require__(313),CourseTable=function(_ref){var courses=_ref.courses,admin=_ref.admin,deleteCourse=_ref.deleteCourse,history=Object(react_router.a)(),filter=Object(esm.a)("/api/public/filter",fetch.a).data;filter&&courses&&filter.length>0&&"All"!==filter[0].activeQuarter&&filter.length>0&&"All"!==filter[0].activeQuarter&&(courses=admin?courses:courses.filter((function(course){return course.quarter===filter[0].activeQuarter})));var sortCaret=function sortCaret(order,_column){var ascendingON=String.fromCharCode(9650),descendingON=String.fromCharCode(9660),ascendingOFF=String.fromCharCode(9651),descendingOFF=String.fromCharCode(9661);return order?"asc"===order?react_default.a.createElement("span",{"data-testid":"sort-asc"},descendingOFF,react_default.a.createElement("font",{color:"red"},ascendingON)):react_default.a.createElement("span",{"data-testid":"sort-desc"},react_default.a.createElement("font",{color:"red"},descendingON),ascendingOFF):react_default.a.createElement("span",{"data-testid":"sort"},descendingOFF,ascendingOFF)};function stripesFormatter(cell){return react_default.a.createElement("span",null,react_default.a.createElement("a",{href:"mailto:".concat(cell)}," ",cell," "))}var columns=[{dataField:"id",text:"id",sort:!0,sortCaret:sortCaret},{dataField:"name",text:"Course Number",sort:!0,sortCaret:sortCaret,formatter:function formatter(_cell,row){return function courseLinkFormatter(id,name){var link="/courses/show/".concat(id);return react_default.a.createElement("div",null,react_default.a.createElement("a",{href:link},name))}(row.id,row.name)}},{dataField:"quarter",text:"Quarter",sort:!0,sortCaret:sortCaret},{dataField:"instructorFirstName",text:"First",sort:!0,sortCaret:sortCaret,formatter:stripesFormatter},{dataField:"instructorLastName",text:"Last",sort:!0,sortCaret:sortCaret,formatter:stripesFormatter},{dataField:"instructorEmail",text:"Email",sort:!0,sortCaret:sortCaret,formatter:stripesFormatter}];return admin&&(columns.push({text:"Edit",isDummyField:!0,dataField:"edit",formatter:function formatter(_cell,row){return function renderEditButton(id){return react_default.a.createElement(Button.a,{"data-testid":"edit-button",onClick:function onClick(){history.push("/courses/edit/".concat(id))}},"Edit")}(row.id)}}),columns.push({text:"Delete",isDummyField:!0,dataField:"delete",formatter:function formatter(_cell,row){return function renderDeleteButton(id){return react_default.a.createElement(Button.a,{variant:"danger","data-testid":"delete-button",onClick:function onClick(){return deleteCourse(id)}},"Delete")}(row.id)}})),react_default.a.createElement(lib_default.a,{keyField:"id",data:courses,columns:columns,striped:!0})},CourseTable_stories_Template=(__webpack_exports__.default={title:"components/Courses/CourseTable",component:CourseTable},function Template(args){return react_default.a.createElement(CourseTable,args)}),Empty=CourseTable_stories_Template.bind({});Empty.args={courses:[]};var twoClasses=CourseTable_stories_Template.bind({});twoClasses.args={courses:[{name:"CMPSC 156",id:1,quarter:"F20",instructorFirstName:"Phill",instructorLastName:"Conrad",instructorEmail:"phtcon@ucsb.edu"},{name:"CMPSC 148",id:2,quarter:"F20",instructorFirstName:"Chandra",instructorLastName:"Krintz",instructorEmail:"krintz@example.org"}]},Empty.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CourseTable {...args} />"}},Empty.parameters),twoClasses.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CourseTable {...args} />"}},twoClasses.parameters)},2670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var objectSpread2=__webpack_require__(87),react=__webpack_require__(0),react_default=__webpack_require__.n(react),AppFooter_AppFooter=function AppFooter(){return react_default.a.createElement("footer",{className:"bg-light p-3 text-center"},"This app is a class project of"," ",react_default.a.createElement("a",{href:"https://ucsb-cs156.github.io"},"CMPSC 156")," at ",react_default.a.createElement("a",{href:"https://ucsb.edu"},"UCSB"),". Check out the source code on"," ",react_default.a.createElement("a",{href:"https://github.com/ucsb-cs156-w21/proj-ucsb-cs-las"},"GitHub"),react_default.a.createElement("p",null,"The cartoon Storke Tower images in the brand logo and favicon for this site were developed by Chelsea Lyon-Hayden, Art Director for UCSB Associate Students, and are used here by permission of the Executive Director of UCSB Associated Students. These images are Copyright © 2021 UCSB Associated Students, and may not be reused without express written permission of the Executive Director of UCSB Associated Students. For more info, visit:",react_default.a.createElement("a",{href:"https://www.as.ucsb.edu/sticker-packs/>"},"www.as.ucsb.edu/sticker-packs/")),"!")};AppFooter_AppFooter.__docgenInfo={description:"",methods:[],displayName:"AppFooter"};var Footer_AppFooter=AppFooter_AppFooter;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Footer/AppFooter.js"]={name:"AppFooter",docgenInfo:AppFooter_AppFooter.__docgenInfo,path:"src/main/components/Footer/AppFooter.js"});__webpack_exports__.default={title:"components/Footer/AppFooter",component:Footer_AppFooter};var Empty=function Template(){return react_default.a.createElement(Footer_AppFooter,null)}.bind({});Empty.parameters=Object(objectSpread2.a)({storySource:{source:"() => <AppFooter />"}},Empty.parameters)},313:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return fetchWithoutToken}));var _home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(88),_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87),_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(198),isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(909),isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);function fetchWithoutToken(_x4,_x5){return _fetchWithoutToken.apply(this,arguments)}function _fetchWithoutToken(){return(_fetchWithoutToken=Object(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee2(url,options){var response;return _home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url,Object(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},options),{},{headers:Object(_home_runner_work_proj_ucsb_cs_las_proj_ucsb_cs_las_javascript_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},null==options?void 0:options.headers)}));case 2:if(!((response=_context2.sent).status>=400&&response.status<600)){_context2.next=5;break}throw new Error(response.error_description);case 5:if(!(null==options?void 0:options.noJSON)&&204!==response.status){_context2.next=7;break}return _context2.abrupt("return",response);case 7:return _context2.abrupt("return",response.json());case 8:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}}},[[1556,2,3]]]);