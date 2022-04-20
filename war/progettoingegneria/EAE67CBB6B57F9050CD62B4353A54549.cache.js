var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.progettoingegneria;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = 'EAE67CBB6B57F9050CD62B4353A54549';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 3.141592653589793, $intern_1 = {3:1}, $intern_2 = {3:1, 14:1, 9:1}, $intern_3 = 65535, $intern_4 = {47:1, 38:1, 3:1, 15:1, 16:1}, $intern_5 = {47:1, 35:1, 3:1, 15:1, 16:1}, $intern_6 = {63:1, 3:1, 14:1, 9:1}, $intern_7 = {45:1, 3:1, 9:1}, $intern_8 = {3:1, 15:1, 30:1}, $intern_9 = -2147483648, $intern_10 = 4194303, $intern_11 = 1048575, $intern_12 = 524288, $intern_13 = 4194304, $intern_14 = 17592186044416, $intern_15 = -17592186044416, $intern_16 = {12:1, 8:1, 11:1, 10:1, 13:1, 6:1, 5:1}, $intern_17 = {27:1, 21:1}, $intern_18 = {41:1, 21:1}, $intern_19 = 65536, $intern_20 = 16777216, $intern_21 = 33554432, $intern_22 = 67108864, $intern_23 = {24:1, 3:1, 15:1, 16:1}, $intern_24 = {12:1, 8:1, 11:1, 10:1, 36:1, 13:1, 6:1, 5:1}, $intern_25 = {12:1, 8:1, 11:1, 10:1, 36:1, 13:1, 77:1, 6:1, 5:1}, $intern_26 = {12:1, 8:1, 11:1, 10:1, 13:1, 96:1, 6:1, 5:1}, $intern_27 = {40:1, 3:1, 15:1, 16:1}, $intern_28 = {3:1, 48:1, 9:1}, $intern_29 = {3:1, 31:1, 14:1, 9:1}, $intern_30 = {57:1, 86:1}, $intern_31 = {46:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_9(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
bootstrap();
function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_1(this$static, other):instanceOfDouble(this$static)?$equals_0(this$static, other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_2(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_1(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_1(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return $equals(this, other);
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(97, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 97);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + $wnd.Math.cos($intern_0 + progress * $intern_0)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.container1.style['overflow'] = 'hidden';
    this$static.container2.style['overflow'] = 'hidden' , undefined;
    $onUpdate(this$static, 0);
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, true);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(106, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 106);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(183, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 183);
defineClass(437, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 437);
defineClass(93, 1, {93:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 93);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(376, 437, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 376);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(377, 93, {93:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 377);
function $cancelAnimationFrame(this$static, requestId){
  $remove_9(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$array, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {445:1, 3:1}, 94, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray(this$static.animationRequests, curAnimations), 445);
  duration = new Duration;
  for (requestId$array = curAnimations , requestId$index = 0 , requestId$max = requestId$array.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = requestId$array[requestId$index];
    $remove_9(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(378, 437, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_5(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 378);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(112, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 112);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(379, 112, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 379);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(94, 93, {93:1, 94:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 94);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(7, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 7);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(201, 7, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 201);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(200, 7, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 200);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(202, 7, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 202);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(203, 7, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 203);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(204, 7, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 204);
function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(205, 7, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 205);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(206, 7, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 206);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(207, 7, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 207);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(208, 7, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 208);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(209, 7, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 209);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(210, 7, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 210);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(211, 7, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 211);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(212, 7, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 212);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(213, 7, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 213);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(214, 7, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 214);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(215, 7, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 215);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(217, 7, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 217);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(216, 7, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 216);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(218, 7, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 218);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(219, 7, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 219);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(220, 7, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 220);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(221, 7, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 221);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(224, 7, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 224);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(222, 7, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 222);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(223, 7, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 223);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(225, 7, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 225);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(226, 7, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 226);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(227, 7, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 227);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(228, 7, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 228);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(233, 7, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 233);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(229, 7, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 229);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(232, 7, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 232);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(230, 7, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 230);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(231, 7, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 231);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(234, 7, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 234);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(235, 7, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 235);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(236, 7, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 236);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(237, 7, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 237);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(238, 7, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 238);
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(240, 7, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 240);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(239, 7, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 239);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(241, 7, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 241);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(244, 7, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 244);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(242, 7, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 242);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(243, 7, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 243);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(245, 7, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 245);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(246, 7, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 246);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(247, 7, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 247);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(248, 7, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 248);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(249, 7, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 249);
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(250, 7, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 250);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(253, 7, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 253);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(251, 7, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 251);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(252, 7, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 252);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(254, 7, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 254);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(255, 7, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 255);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(256, 7, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 256);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(257, 7, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 257);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(260, 7, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 260);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(258, 7, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 258);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(259, 7, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 259);
function Duration(){
  this.start_0 = now_1();
}

defineClass(105, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 105);
function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 9, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause_0);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause_0 = cause;
  return this$static;
}

function $linkBack(this$static, error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(9, 1, {3:1, 9:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getBackingSuppressed = function getBackingSuppressed(){
  var collected, lastArg, lastArg0;
  return collected = castTo($reduce((lastArg0 = $map(stream_0((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 9, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 58, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 49) , collected.toArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, collected.size_1(), 5, 1));
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(59, 9, {3:1, 9:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 59);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(14, 59, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 14);
defineClass(88, 14, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 88);
defineClass(131, 88, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 131);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  $linkBack(this, e);
  this.detailMessage = e == null?'null':toString_9(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(51, 131, {51:1, 3:1, 14:1, 9:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 51);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw toJs(new IllegalArgumentException_0(message + '\n' + data_0));
}

defineClass(407, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 407);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global_0 = $wnd || self;
  return global_0[key] || $moduleBase;
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):$execute_0(t[0]);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 51)?castTo(e, 51).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(154, 407, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 154);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(155, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 155);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(156, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 156);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || ANONYMOUS;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var ANONYMOUS = 'anonymous', collector;
defineClass(419, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 419);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(132, 419, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 132);
defineClass(420, 419, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 420);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(133, 420, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 133);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || (checkCriticalStringElementIndex(idx - 1, nameList.length) , nameList.charCodeAt(idx - 1) == 32)) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && (checkCriticalStringElementIndex(last, nameList.length) , nameList.charCodeAt(last) == 32)) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  elem.textContent = source || '';
  return elem;
}

function $getTabIndex(elem){
  return elem.tabIndex < $intern_3?elem.tabIndex:-(elem.tabIndex % $intern_3) - 1;
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setSize(this$static, size_0){
  this$static.size = size_0;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(16, 1, {3:1, 15:1, 16:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 16);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_1, 38, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(38, 16, $intern_4);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 38, Ljava_lang_Enum_2_classLit, values_0);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(157, 38, $intern_4, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 157, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(158, 38, $intern_4, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 158, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(159, 38, $intern_4, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 159, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(160, 38, $intern_4, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 160, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 35, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(35, 16, $intern_5);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 35, Ljava_lang_Enum_2_classLit, values_1);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(161, 35, $intern_5, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 161, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(162, 35, $intern_5, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 162, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(163, 35, $intern_5, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 163, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(164, 35, $intern_5, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 164, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(165, 35, $intern_5, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 165, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
defineClass(427, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 427);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(428, 427, {});
_.getAssociatedType_0 = function getAssociatedType(){
  return this.getAssociatedType();
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 428);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 49);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_0(), 82);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(432, 428, {});
_.getAssociatedType = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 432);
defineClass(433, 432, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 433);
defineClass(434, 433, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 434);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(192, 434, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 27).onClick(this);
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE;
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE;
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 192);
defineClass(167, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 167);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(69, 167, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 69);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 49);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(82, 69, {82:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 82);
function $clinit_DoubleClickEvent(){
  $clinit_DoubleClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('dblclick', new DoubleClickEvent);
}

function DoubleClickEvent(){
}

defineClass(317, 434, {}, DoubleClickEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 41).onDoubleClick(this);
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_0;
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_0;
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_DoubleClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DoubleClickEvent', 317);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(261, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 261);
function $dispatch(this$static, handler){
  var event_0;
  event_0 = fire_0(handler.listener, valueOf_1((castTo(this$static.source, 96) , this$static.item_0.value_0)));
  !event_0 || !event_0.canceled || (this$static.canceled = true);
}

function BeforeSelectionEvent(){
}

function fire_0(source, item_0){
  var event_0;
  if (TYPE_1) {
    event_0 = new BeforeSelectionEvent;
    event_0.item_0 = item_0;
    source.fireEvent(event_0);
    return event_0;
  }
  return null;
}

defineClass(263, 428, {}, BeforeSelectionEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch(this, castTo(handler, 444));
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_1;
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_1;
}
;
_.canceled = false;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_BeforeSelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'BeforeSelectionEvent', 263);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(193, 428, {}, CloseEvent_0);
_.dispatch = function dispatch_2(handler){
  castTo(handler, 440);
  detachWidgets();
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_2;
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 193);
function $dispatch_0(this$static, handler){
  $onTabSelected(handler.listener, (castTo(this$static.source, 96) , this$static.selectedItem.value_0));
}

function SelectionEvent(selectedItem){
  this.selectedItem = selectedItem;
}

function fire_2(source, selectedItem){
  var event_0;
  if (TYPE_3) {
    event_0 = new SelectionEvent(selectedItem);
    source.fireEvent(event_0);
  }
}

defineClass(264, 428, {}, SelectionEvent);
_.dispatch = function dispatch_3(handler){
  $dispatch_0(this, castTo(handler, 443));
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_3;
}
;
_.getAssociatedType = function getAssociatedType_12(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'SelectionEvent', 264);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 63)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(79, 1, {8:1}, HandlerManager);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 79);
defineClass(429, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 429);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_5(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType_0()) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(castTo(handler, 21));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 54);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 49);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 54);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(null), 49);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_2(c$iterator), 442);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(168, 429, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 168);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(169, 168, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 169);
function LegacyHandlerWrapper(){
}

defineClass(262, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 262);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_0(), 9));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_0(), 9);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_0(), 9);
    first?(first = false):(b.string += '; ' , b);
    $append_1(b, t.getMessage());
  }
  return b.string;
}

defineClass(63, 14, $intern_6, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 63);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(100, 63, $intern_6, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 100);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (!callback) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(313, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 313);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(316, 112, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 316);
defineClass(435, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 435);
defineClass(314, 435, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 314);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(315, 314, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 315);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 51)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 51)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && $size(this$static.headers) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); header$iterator.hasNext;) {
      header = $next_1(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 51)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(115, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 115);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(338, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 338);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(73, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 73);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(45, 59, $intern_7, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 45);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(342, 45, $intern_7, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 342);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(398, 45, $intern_7, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 398);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

defineClass(438, 1, {});
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 438);
defineClass(439, 438, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 439);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_1, 70, 0, [RTL, LTR, DEFAULT]);
}

defineClass(70, 16, {70:1, 3:1, 15:1, 16:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 70, Ljava_lang_Enum_2_classLit, values_2);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_1 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function LocaleInfo(){
}

defineClass(174, 1, {}, LocaleInfo);
var instance_1;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 174);
function DateTimeFormatInfoImpl(){
}

defineClass(404, 439, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 404);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  cache = new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_5(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = buf.string.substr(0, 0)):0 > oldLength && (buf.string += valueOf_4(initUnidimensionalArray(C_classLit, $intern_1, 406, -oldLength, 15, 1)));
  }
}

function $getNextCharCountInPattern(pattern, start_0){
  var ch_0, next;
  ch_0 = (checkCriticalStringElementIndex(start_0, pattern.length) , pattern.charCodeAt(start_0));
  next = start_0 + 1;
  while (next < pattern.length && (checkCriticalStringElementIndex(next, pattern.length) , pattern.charCodeAt(next) == ch_0)) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(castTo($get_1(this$static.patternParts, i), 65))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_1(this$static.patternParts, i + 1), 65))) {
        abut = true;
        castTo($get_1(this$static.patternParts, i), 65).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_0('MLydhHmsSDkK', fromCodePoint($charAt(part.text_0, 0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text_0, start_0, data_0, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data_0.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = $toLowerCase(text_0.substr(start_0), ($clinit_Locale() , ROOT));
  for (i = 0; i < count; ++i) {
    length_0 = data_0[i].length;
    if (length_0 > bestMatchLength && $startsWith(textInLowerCase, $toLowerCase(data_0[i], ROOT))) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start_0 + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text_0, date){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord;
  parsePos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_1, 406, 15, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.array.length; ++i) {
    part = castTo($get_1(this$static.patternParts, i), 65);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = parsePos[0];
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text_0, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text_0, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if ($charAt(part.text_0, 0) == 32) {
        s = parsePos[0];
        $skipSpace(text_0, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith_0(text_0, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date)) {
    return 0;
  }
  return parsePos[0];
}

function $parse_0(this$static, text_0){
  var charsConsumed, curDate, date;
  curDate = new Date_0;
  date = new Date_1(curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse(this$static, text_0, date);
  if (charsConsumed == 0 || charsConsumed < text_0.length) {
    throw toJs(new IllegalArgumentException_0(text_0));
  }
  return date;
}

function $parseInt(text_0, pos){
  var ch_0, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text_0.length) {
    return -1;
  }
  ch_0 = (checkCriticalStringElementIndex(ind, text_0.length) , text_0.charCodeAt(ind));
  while (ch_0 >= 48 && ch_0 <= 57) {
    ret = ret * 10 + (ch_0 - 48);
    ++ind;
    if (ind >= text_0.length) {
      break;
    }
    ch_0 = (checkCriticalStringElementIndex(ind, text_0.length) , text_0.charCodeAt(ind));
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < pattern.length; i++) {
    ch_0 = (checkCriticalStringElementIndex(i, pattern.length) , pattern.charCodeAt(i));
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 32)) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 39)) {
          buf.string += String.fromCharCode(ch_0);
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += String.fromCharCode(ch_0);
      }
      continue;
    }
    if ($indexOf_0('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += String.fromCharCode(ch_0);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 39)) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += String.fromCharCode(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text_0, pos, cal){
  var offset, sign, st, value_0;
  if (pos[0] >= text_0.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch ($charAt(text_0, pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value_0 = $parseInt(text_0, pos);
  if (value_0 == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text_0.length && $charAt(text_0, pos[0]) == 58) {
    offset = value_0 * 60;
    ++pos[0];
    st = pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 == 0 && pos[0] == st) {
      return false;
    }
    offset += value_0;
  }
   else {
    offset = value_0;
    offset < 24 && pos[0] - st <= 2?(offset *= 60):(offset = offset % 100 + (offset / 100 | 0) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text_0, pos){
  while (pos[0] < text_0.length && $indexOf_0(' \t\r\n', fromCodePoint($charAt(text_0, pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subParse(text_0, pos, part, digitCount, cal){
  var ch_0, start_0, value_0;
  $skipSpace(text_0, pos);
  start_0 = pos[0];
  ch_0 = $charAt(part.text_0, 0);
  value_0 = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start_0 + digitCount > text_0.length) {
        return false;
      }
      value_0 = $parseInt(text_0.substr(0, start_0 + digitCount), pos);
    }
     else {
      value_0 = $parseInt(text_0, pos);
    }
  }
  switch (ch_0) {
    case 71:
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value_0;
      return true;
    case 77:
      return $subParseMonth(text_0, pos, cal, value_0, start_0);
    case 76:
      return $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0);
    case 69:
      return $subParseDayOfWeek(text_0, pos, start_0, cal);
    case 99:
      return $subParseStandaloneDay(text_0, pos, start_0, cal);
    case 97:
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['AM', 'PM']), pos);
      cal.ampm = value_0;
      return true;
    case 121:
      return $subParseYear(text_0, pos, start_0, value_0, part, cal);
    case 100:
      if (value_0 <= 0) {
        return false;
      }

      cal.dayOfMonth = value_0;
      return true;
    case 83:
      if (value_0 < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value_0, start_0, pos[0], cal);
    case 104:
      value_0 == 12 && (value_0 = 0);
    case 75:
    case 72:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = false;
      return true;
    case 107:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = true;
      return true;
    case 109:
      if (value_0 < 0) {
        return false;
      }

      cal.minutes = value_0;
      return true;
    case 115:
      if (value_0 < 0) {
        return false;
      }

      cal.seconds = value_0;
      return true;
    case 90:
      if (start_0 < text_0.length && (checkCriticalStringElementIndex(start_0, text_0.length) , text_0.charCodeAt(start_0) == 90)) {
        ++pos[0];
        cal.tzOffset = 0;
        return true;
      }

    case 122:
    case 118:
      return $subParseTimeZoneInGMT(text_0, start_0, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseFractionalSeconds(value_0, start_0, end, cal){
  var a, i;
  i = end - start_0;
  if (i < 3) {
    while (i < 3) {
      value_0 *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value_0 = (value_0 + (a >> 1)) / a | 0;
  }
  cal.milliseconds = value_0;
  return true;
}

function $subParseMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text_0, start_0, pos, cal){
  if (start_0 >= 0 && $equals_1(text_0.substr(start_0, 'GMT'.length), 'GMT')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  if (start_0 >= 0 && $equals_1(text_0.substr(start_0, 'UTC'.length), 'UTC')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  return $parseTimeZoneOffset(text_0, pos, cal);
}

function $subParseYear(text_0, pos, start_0, value_0, part, cal){
  var ambiguousTwoDigitYear, ch_0, date, defaultCenturyStartYear;
  ch_0 = 32;
  if (value_0 < 0) {
    if (pos[0] >= text_0.length) {
      return false;
    }
    ch_0 = $charAt(text_0, pos[0]);
    if (ch_0 != 43 && ch_0 != 45) {
      return false;
    }
    ++pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 < 0) {
      return false;
    }
    ch_0 == 45 && (value_0 = -value_0);
  }
  if (ch_0 == 32 && pos[0] - start_0 == 2 && part.count == 2) {
    date = new Date_0;
    defaultCenturyStartYear = date.jsdate.getFullYear() - 1900 + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value_0 == ambiguousTwoDigitYear;
    value_0 += (defaultCenturyStartYear / 100 | 0) * 100 + (value_0 < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value_0;
  return true;
}

function DateTimeFormat(pattern){
  this.patternParts = new ArrayList;
  $parsePattern(this, pattern);
}

function getFormat(pattern, dtfi){
  $clinit_DateTimeFormat();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, pattern), 95));
  if (!dtf) {
    dtf = new DateTimeFormat(pattern);
    dtfi == defaultDtfi && $putStringValue(cache, pattern, dtf);
  }
  return dtf;
}

defineClass(95, 1, {95:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 95);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(65, 1, {65:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 65);
function $after(this$static, when){
  return gt(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(when.jsdate.getTime()));
}

function $fixDaylightSavings(this$static, requestedHours){
  var badHours, copy, day, newTime, originalTimeInMillis, timeDiff, timeDiffHours, timeDiffMinutes;
  requestedHours %= 24;
  if (this$static.jsdate.getHours() != requestedHours) {
    copy = new $wnd.Date(this$static.jsdate.getTime());
    copy.setDate(copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = timeDiff / 60 | 0;
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = new $wnd.Date(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, requestedHours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      this$static.jsdate.setTime(newTime.getTime());
    }
  }
  originalTimeInMillis = this$static.jsdate.getTime();
  this$static.jsdate.setTime(originalTimeInMillis + 3600000);
  this$static.jsdate.getHours() != requestedHours && this$static.jsdate.setTime(originalTimeInMillis);
}

function $setDate(this$static, date){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setDate(date);
  $fixDaylightSavings(this$static, hours);
}

function $setHours(this$static, hours){
  this$static.jsdate.setHours(hours);
  $fixDaylightSavings(this$static, hours);
}

function $setMinutes(this$static, minutes){
  var hours;
  hours = this$static.jsdate.getHours() + (minutes / 60 | 0);
  this$static.jsdate.setMinutes(minutes);
  $fixDaylightSavings(this$static, hours);
}

function $setMonth(this$static, month){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setMonth(month);
  $fixDaylightSavings(this$static, hours);
}

function $setSeconds(this$static, seconds){
  var hours;
  hours = this$static.jsdate.getHours() + (seconds / 3600 | 0);
  this$static.jsdate.setSeconds(seconds);
  $fixDaylightSavings(this$static, hours);
}

function $setTime(this$static, time){
  this$static.jsdate.setTime(toDouble_0(time));
}

function $setYear(this$static, year){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setFullYear(year + 1900);
  $fixDaylightSavings(this$static, hours);
}

function $toString_0(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(year, month, date){
  this.jsdate = new $wnd.Date;
  this.jsdate.setFullYear(year + 1900, month, date);
  this.jsdate.setHours(0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(30, 1, $intern_8, Date_0, Date_1);
_.equals_0 = function equals_1(obj){
  return instanceOf(obj, 30) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 30).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_3(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_6(){
  return $toString_0(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 30);
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > $intern_9 && $setYear(date, this$static.year - 1900);
  orgDayOfMonth = date.jsdate.getDate();
  $setDate(date, 1);
  this$static.month >= 0 && $setMonth(date, this$static.month);
  if (this$static.dayOfMonth >= 0) {
    $setDate(date, this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_1(date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 35);
    daysInCurrentMonth = 35 - tmp.jsdate.getDate();
    $setDate(date, $wnd.Math.min(daysInCurrentMonth, orgDayOfMonth));
  }
   else {
    $setDate(date, orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = date.jsdate.getHours());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  $setHours(date, this$static.hours == 24 && this$static.midnightIs24?0:this$static.hours);
  this$static.minutes >= 0 && $setMinutes(date, this$static.minutes);
  this$static.seconds >= 0 && $setSeconds(date, this$static.seconds);
  this$static.milliseconds >= 0 && $setTime(date, add_2(mul_0(div(fromDouble_0(date.jsdate.getTime()), 1000), 1000), this$static.milliseconds));
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_0;
    $setYear(defaultCenturyStart, defaultCenturyStart.jsdate.getFullYear() - 1900 - 80);
    lt(fromDouble_0(date.jsdate.getTime()), fromDouble_0(defaultCenturyStart.jsdate.getTime())) && $setYear(date, defaultCenturyStart.jsdate.getFullYear() - 1900 + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.jsdate.getMonth();
      $setDate(date, date.jsdate.getDate() + adjustment);
      date.jsdate.getMonth() != orgMonth && $setDate(date, date.jsdate.getDate() + (adjustment > 0?-7:7));
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > $intern_9) {
    offset = date.jsdate.getTimezoneOffset();
    $setTime(date, add_2(fromDouble_0(date.jsdate.getTime()), (this$static.tzOffset - offset) * 60 * 1000));
  }
  return true;
}

function DateRecord(){
  Date_0.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_9;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_9;
}

defineClass(405, 30, $intern_8, DateRecord);
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.midnightIs24 = false;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 405);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?TYPE_JS_UNKNOWN_NATIVE:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case TYPE_PRIMITIVE_LONG:
    case TYPE_PRIMITIVE_NUMBER:
      initValue = 0;
      break;
    case TYPE_PRIMITIVE_BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

var TYPE_JS_UNKNOWN_NATIVE = 10, TYPE_PRIMITIVE_BOOLEAN = 16, TYPE_PRIMITIVE_LONG = 14, TYPE_PRIMITIVE_NUMBER = 15;
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_10;
  a1 = value_0 >> 22 & $intern_10;
  a2 = value_0 < 0?$intern_11:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_12 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_10;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_10;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_13 + a.h * $intern_14;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_10;
  a.m = sum1 & $intern_10;
  a.h = sum2 & $intern_11;
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_10, sum1 & $intern_10, sum2 & $intern_11);
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_14) {
    a2 = round_int(value_0 / $intern_14);
    value_0 -= a2 * $intern_14;
  }
  a1 = 0;
  if (value_0 >= $intern_13) {
    a1 = round_int(value_0 / $intern_13);
    value_0 -= a1 * $intern_13;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_10;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_10;
  c2 += c1 >> 22;
  c1 &= $intern_10;
  c2 &= $intern_11;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_10;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_10;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_12) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_11:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_11:0;
    res1 = negative?$intern_10:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_11;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_10, sum1 & $intern_10, sum2 & $intern_11);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_13 + a.h * $intern_14;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_10, $intern_10, 524287);
  MIN_VALUE = create0(0, 0, $intern_12);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 9)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_2(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_15 < result && result < $intern_14) {
      return result;
    }
  }
  return createLongEmul(add_1(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_13;
  }
  if (a2 == $intern_11) {
    return big_0.l + big_0.m * $intern_13 - $intern_14;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_15 < result && result < $intern_14) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_15 < value_0 && value_0 < $intern_14) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_15 < result && result < $intern_14) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function or_0(a, b){
  return createLongEmul(or(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_14;
    a3 = $intern_11;
  }
  a1 = round_int(value_0 / $intern_13);
  a0 = round_int(value_0 - a1 * $intern_13);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_8(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_7(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var mainpage;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  mainpage = new MainPage;
  $add_0(($clinit_RootPanel() , get_0()), mainpage);
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(44, 1, {441:1, 44:1}, SafeUriString);
_.equals_0 = function equals_2(obj){
  if (!instanceOf(obj, 44)) {
    return false;
  }
  return $equals_1(this.uri_0, castTo(obj, 441).uri_0);
}
;
_.hashCode_0 = function hashCode_4(){
  return getHashCode_2(this.uri_0);
}
;
_.toString_0 = function toString_10(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 44);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

var connService;
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $createStreamWriter(this$static){
  var clientSerializationStreamWriter;
  clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName);
  clientSerializationStreamWriter.objectCount = 0;
  $reset(clientSerializationStreamWriter.objectMap);
  $reset(clientSerializationStreamWriter.stringMap);
  clientSerializationStreamWriter.stringTable.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  clientSerializationStreamWriter.encodeBuffer = new StringBuilder;
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL);
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName);
  return clientSerializationStreamWriter;
}

function $doInvoke(this$static, responseReader, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 45)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      callback.onFailure(iex);
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw toJs(new ServiceDefTarget$NoServiceEntryPointSpecifiedException);
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback, responseReader);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'stockPrices';
  this.serializer = serializer;
  this.serializationPolicyName = '6C7D59FFA5BF76055C49F859FB98A494';
}

function getEncodedInstance(encodedResponse){
  if ($equals_1(encodedResponse.substr(0, 4), '//OK') || $equals_1(encodedResponse.substr(0, 4), '//EX')) {
    return encodedResponse.substr(4);
  }
  return encodedResponse;
}

defineClass(280, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 280);
function $clinit_ConnService_Proxy(){
  $clinit_ConnService_Proxy = emptyMethod;
  SERIALIZER = new ConnService_TypeSerializer;
}

function $addCourse(this$static, name_0, startDate, endDate, email, coDoc, desc, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addCourse');
  try {
    streamWriter = $start(helper, 6);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, startDate));
    $append(streamWriter, '' + $addString(streamWriter, endDate));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $append(streamWriter, '' + $addString(streamWriter, coDoc));
    $append(streamWriter, '' + $addString(streamWriter, desc));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $addExam(this$static, name_0, date, hour, prof, classroom, duration, students, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addExam');
  try {
    streamWriter = $start(helper, 7);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.util.ArrayList/4159755760'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, date));
    $append(streamWriter, '' + $addString(streamWriter, hour));
    $append(streamWriter, '' + $addString(streamWriter, prof));
    $append(streamWriter, '' + $addString(streamWriter, classroom));
    $append(streamWriter, '' + $addString(streamWriter, duration));
    $writeObject(streamWriter, students);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $changeExamState(this$static, examName, asyncCallback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'changeExamState');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, examName));
    $finish_0(helper, asyncCallback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Cambio stato esame fallito');
    }
     else 
      throw toJs($e0);
  }
}

function $clearDB(this$static, callback){
  var ex, helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'clearDB');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $courseRegistration(this$static, studentEmail, courseName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'courseRegistration');
  try {
    streamWriter = $start(helper, 2);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, studentEmail));
    $append(streamWriter, '' + $addString(streamWriter, courseName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore server. Iscrizione fallita.');
    }
     else 
      throw toJs($e0);
  }
}

function $deleteCourse(this$static, name_0, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'deleteCourse');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore server');
    }
     else 
      throw toJs($e0);
  }
}

function $deleteExam(this$static, courseName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'deleteExam');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, courseName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore server');
    }
     else 
      throw toJs($e0);
  }
}

function $getAvailableExams(this$static, studentEmail, courseName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getAvailableExams');
  try {
    streamWriter = $start(helper, 2);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, studentEmail));
    $append(streamWriter, '' + $addString(streamWriter, courseName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('ERROR: impossibile visualizzare esami');
    }
     else 
      throw toJs($e0);
  }
}

function $getCourseData(this$static, name_0, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getCourseData');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Non riesco a trovare le informazioni sul server.');
    }
     else 
      throw toJs($e0);
  }
}

function $getExamData(this$static, name_0, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getExamData');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Non riesco a trovare le informazioni sul server.');
    }
     else 
      throw toJs($e0);
  }
}

function $getGrades(this$static, email, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getGrades');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Error.impossibile visualizzare voti esami');
    }
     else 
      throw toJs($e0);
  }
}

function $getInfoUser(this$static, userEmail, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getInfoUser');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, userEmail));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('error:' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $getStudentsCourseList(this$static, courseName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getStudentsCourseList');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, courseName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore server.\nLista studenti iscritti al corso non aggiornata');
    }
     else 
      throw toJs($e0);
  }
}

function $getStudentsExamList(this$static, examName, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getStudentsExamList');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, examName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      callback.onFailure(ex);
    }
     else 
      throw toJs($e0);
  }
}

function $loginRequest(this$static, user, passw, asyncCallback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'loginRequest');
  try {
    streamWriter = $start(helper, 2);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, user));
    $append(streamWriter, '' + $addString(streamWriter, passw));
    $finish_0(helper, asyncCallback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      alert_0('Cannot access: ' + ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function $publishGrades(this$static, examName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'publishGrades');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, examName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Pubblicazione voti fallita');
    }
     else 
      throw toJs($e0);
  }
}

function $registerStudentInExam(this$static, selectedExam, selectedStudent, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'registerStudentInExam');
  try {
    streamWriter = $start(helper, 2);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, selectedExam));
    $append(streamWriter, '' + $addString(streamWriter, selectedStudent));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveAviableCourses(this$static, email, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveAviableCourses');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Impossibile visualizzare i corsi disponibili');
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveExams(this$static, profName, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveExams');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, profName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveExamsForSecretary(this$static, callback){
  var ex, helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveExamsForSecretary');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveGradesAndStudents(this$static, selectedExam, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveGradesAndStudents');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, selectedExam));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveInfoStudentList(this$static, callback){
  var ex, helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveInfoStudentList');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveSubscribedCourses(this$static, studentEmail, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveSubscribedCourses');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, studentEmail));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('ERROR: impossibile ottenere corsi a cui sei iscritto');
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveSubscribedExams(this$static, email, asyncCallback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveSubscribedExams');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, asyncCallback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('ERROR: impossibile ottenere lsita esami a cui sei iscritto');
    }
     else 
      throw toJs($e0);
  }
}

function $sendGrades(this$static, selectedExam, studentsList, gradesList, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'sendGrades');
  try {
    streamWriter = $start(helper, 3);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, '[Ljava.lang.String;/2600011424'));
    $append(streamWriter, '' + $addString(streamWriter, '[Ljava.lang.String;/2600011424'));
    $append(streamWriter, '' + $addString(streamWriter, selectedExam));
    $writeObject(streamWriter, studentsList);
    $writeObject(streamWriter, gradesList);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Error. inserimento fallito.');
    }
     else 
      throw toJs($e0);
  }
}

function $setCourseData(this$static, name_0, startData, endData, newName, coDoc, desc, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'setCourseData');
  try {
    streamWriter = $start(helper, 6);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, startData));
    $append(streamWriter, '' + $addString(streamWriter, endData));
    $append(streamWriter, '' + $addString(streamWriter, newName));
    $append(streamWriter, '' + $addString(streamWriter, coDoc));
    $append(streamWriter, '' + $addString(streamWriter, desc));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore aggiornamento dati.');
    }
     else 
      throw toJs($e0);
  }
}

function $setExamData(this$static, courseName, date, hour, classroom, duration, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'setExamData');
  try {
    streamWriter = $start(helper, 5);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, courseName));
    $append(streamWriter, '' + $addString(streamWriter, date));
    $append(streamWriter, '' + $addString(streamWriter, hour));
    $append(streamWriter, '' + $addString(streamWriter, classroom));
    $append(streamWriter, '' + $addString(streamWriter, duration));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore aggiornamento dati.');
    }
     else 
      throw toJs($e0);
  }
}

function $setUserInfo(this$static, email, newEmail, name_0, surname, userName, password, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'setUserInfo');
  try {
    streamWriter = $start(helper, 6);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $append(streamWriter, '' + $addString(streamWriter, newEmail));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, surname));
    $append(streamWriter, '' + $addString(streamWriter, userName));
    $append(streamWriter, '' + $addString(streamWriter, password));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore del server. Dati non aggiornati.');
    }
     else 
      throw toJs($e0);
  }
}

function $signUp(this$static, username, password, email, name_0, surname, type_0, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'signUp');
  try {
    streamWriter = $start(helper, 6);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'I'));
    $append(streamWriter, '' + $addString(streamWriter, username));
    $append(streamWriter, '' + $addString(streamWriter, password));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, surname));
    append(streamWriter.encodeBuffer, '' + type_0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $viewProfessorCoursesInfo(this$static, email, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewProfessorCoursesInfo');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      ex = $e0;
      callback.onFailure(ex);
    }
     else 
      throw toJs($e0);
  }
}

function $viewProfessorInfo(this$static, callback){
  var helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewProfessorInfo');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore comunicazione server: UPDATECOURSE');
    }
     else 
      throw toJs($e0);
  }
}

function $viewStudentInfo(this$static, callback){
  var helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewStudentInfo');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('Errore comunicazione server: UPDATECOURSE');
    }
     else 
      throw toJs($e0);
  }
}

function $viewSudentCoursesInfo(this$static, studentEmail, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewSudentCoursesInfo');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, studentEmail));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      $wnd.alert('ERROR: Impossibilie visualizzare i corsi');
    }
     else 
      throw toJs($e0);
  }
}

function ConnService_Proxy(){
  $clinit_ConnService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(18, 280, {}, ConnService_Proxy);
var SERIALIZER;
var Lcom_google_gwt_sample_progettoingegneria_client_ConnService_1Proxy_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'ConnService_Proxy', 18);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw toJs(new SerializationException(typeSignature));
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode_1(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(293, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 293);
function $clinit_ConnService_TypeSerializer(){
  var result, result_0;
  $clinit_ConnService_TypeSerializer = emptyMethod;
  methodMapNative_0 = (result = {} , result['com.google.gwt.sample.progettoingegneria.shared.UserState/1121839262'] = [instantiate, deserialize] , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_0, deserialize_0, serialize] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_1, deserialize_1] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0] , result['java.lang.String/2004016611'] = [instantiate_2, deserialize_2, serialize_2] , result['[Ljava.lang.String;/2600011424'] = [undefined, undefined, serialize_1] , result['java.util.ArrayList/4159755760'] = [instantiate_3, deserialize_3, serialize_3] , result);
  signatureMapNative_0 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit)] = 'com.google.gwt.sample.progettoingegneria.shared.UserState/1121839262' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424' , result_0[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760' , result_0);
}

function ConnService_TypeSerializer(){
  $clinit_ConnService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

defineClass(294, 293, {}, ConnService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_google_gwt_sample_progettoingegneria_client_ConnService_1TypeSerializer_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'ConnService_TypeSerializer', 294);
function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setStyleName(this$static){
  ($clinit_DOM() , this$static.element).className = 'gwt-TabPanelBottom';
}

function $setVisible(this$static){
  setVisible(($clinit_DOM() , this$static.element), false);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(6, 1, {10:1, 6:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString_0 = function toString_11(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 6);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), typeInt | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 36)) {
    castTo(this$static.parent_0, 36).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(5, 6, $intern_16);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 5);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  if (!widget) {
    throw toJs(new NullPointerException_0('widget cannot be null'));
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(421, 5, $intern_16);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_0(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  this.element.__listener = this;
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 421);
function FooterComponent(){
  var l1, l2, l3;
  this.hPanel = new HorizontalPanel;
  $initWidget(this, this.hPanel);
  l1 = new Label_1('mail: unibo@unibo.it');
  l2 = new Label_1('  telefono: 0123-345  ');
  l3 = new Label_1('indirizzo: Via Ingegneria del Software, Bologna');
  $add_1(this.hPanel, l1);
  $add_1(this.hPanel, l2);
  $add_1(this.hPanel, l3);
}

defineClass(173, 421, $intern_16, FooterComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_FooterComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'FooterComponent', 173);
function HomePage(){
  var l1, logoImage, titleLabel, tp;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label_1('UniBo');
  logoImage = new Image_0;
  l1 = new Label_1('  Dipartimenti:');
  tp = new TabPanel;
  $add_2(tp, new HTML("<h1> Dip info<\/h1> <p>tecnologie all'avanguardia<p>"), 'info');
  $add_2(tp, new HTML('Baz'), 'mate');
  $add_2(tp, new HTML('Baz'), 'lingue');
  $add_2(tp, new HTML('Baz'), 'medicina');
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://www.unibo.it/it/logo-unibo.png/@@images/44d79f14-1a99-4a5d-997f-90df029bd63e.png')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_3(this.vPanel, titleLabel);
  $add_3(this.vPanel, logoImage);
  $add_3(this.vPanel, l1);
  $add_3(this.vPanel, tp);
}

defineClass(172, 421, $intern_16, HomePage);
var Lcom_google_gwt_sample_progettoingegneria_client_HomePage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'HomePage', 172);
function LoginPage(main){
  var credentialsLabel, emailLabel, hpanel, passwordLabel, titleLabel, vpanel1, vpanel2;
  this.mainPanel = new VerticalPanel;
  this.image1 = new Image_0;
  this.emailTextBox = new TextBox;
  this.passwordTextBox = new TextBox;
  this.loginButton = new Button_0('Accedi');
  this.main = main;
  $initWidget(this, this.mainPanel);
  titleLabel = new Label_1('Accedi');
  credentialsLabel = new Label_1('Credenziali di accesso:');
  emailLabel = new Label_1('email: ');
  passwordLabel = new Label_1('password:');
  vpanel1 = new VerticalPanel;
  vpanel2 = new VerticalPanel;
  hpanel = new HorizontalPanel;
  $setUrl_0(this.image1, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2018/10/02/11/13/girl-3718537_960_720.jpg')));
  $addDomHandler(this.loginButton, new LoginPage$loginButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_3(this.mainPanel, titleLabel);
  $add_3(this.mainPanel, credentialsLabel);
  $add_3(vpanel1, emailLabel);
  $add_3(vpanel1, passwordLabel);
  $add_3(vpanel2, this.emailTextBox);
  $add_3(vpanel2, this.passwordTextBox);
  $add_1(hpanel, vpanel1);
  $add_1(hpanel, vpanel2);
  $add_3(this.mainPanel, hpanel);
  $add_3(this.mainPanel, this.loginButton);
  $add_3(this.mainPanel, this.image1);
}

defineClass(282, 421, $intern_16, LoginPage);
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage', 282);
function LoginPage$loginButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(283, 1, $intern_17, LoginPage$loginButtonHandler);
_.onClick = function onClick(event_0){
  var passw, userEmail;
  userEmail = $getText(this.this$01.emailTextBox);
  passw = $getText(this.this$01.passwordTextBox);
  !connService && (connService = new ConnService_Proxy);
  $loginRequest(connService, userEmail, passw, new LoginPage$loginButtonHandler$1(this, userEmail));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage$loginButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage/loginButtonHandler', 283);
function $onSuccess(this$static, result){
  switch (result.ordinal) {
    case 4:
      $wnd.alert('password errata');
      break;
    case 0:
      $setSession((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession), ($clinit_UserState() , STUDENT), this$static.val$userEmail2);
      $setLoginText(this$static.this$11.this$01.main.menu);
      $openStudentDashboard(this$static.this$11.this$01.main);
      break;
    case 1:
      $setSession((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession), ($clinit_UserState() , PROFESSOR), this$static.val$userEmail2);
      $setLoginText(this$static.this$11.this$01.main.menu);
      $openProfessorDashboard(this$static.this$11.this$01.main);
      break;
    case 2:
      $setSession((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession), ($clinit_UserState() , SECRETARY), this$static.val$userEmail2);
      $setLoginText(this$static.this$11.this$01.main.menu);
      $openSecretaryDashboard(this$static.this$11.this$01.main);
      break;
    case 3:
      $setSession((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession), ($clinit_UserState() , ADMIN), this$static.val$userEmail2);
      $setLoginText(this$static.this$11.this$01.main.menu);
      $openAdminDashboard(this$static.this$11.this$01.main);
      break;
    default:$wnd.alert('Account non trovato');
  }
}

function LoginPage$loginButtonHandler$1(this$1, val$userEmail){
  this.this$11 = this$1;
  this.val$userEmail2 = val$userEmail;
}

defineClass(284, 1, {}, LoginPage$loginButtonHandler$1);
_.onSuccess = function onSuccess(result){
  $onSuccess(this, castTo(result, 39));
}
;
_.onFailure = function onFailure(caught){
  alert_0('Cannot access: ' + caught.getMessage());
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage$loginButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage/loginButtonHandler/1', 284);
function $openAdminDashboard(this$static){
  var admDash;
  $clear(this$static.contentPanel);
  admDash = new AdminDashboard;
  $add_3(this$static.contentPanel, admDash);
}

function $openHomePage(this$static){
  var homepage;
  $clear(this$static.contentPanel);
  homepage = new HomePage;
  $add_3(this$static.contentPanel, homepage);
}

function $openLoginPage(this$static){
  var loginpage;
  $clear(this$static.contentPanel);
  loginpage = new LoginPage(this$static);
  $add_3(this$static.contentPanel, loginpage);
}

function $openProfessorDashboard(this$static){
  var profDash;
  $clear(this$static.contentPanel);
  profDash = new ProfessorDashboard;
  $add_3(this$static.contentPanel, profDash);
}

function $openSecretaryDashboard(this$static){
  var secDash;
  $clear(this$static.contentPanel);
  secDash = new SecretaryDashboard;
  $add_3(this$static.contentPanel, secDash);
}

function $openStudentDashboard(this$static){
  var studentDash;
  $clear(this$static.contentPanel);
  studentDash = new StudentDashboard;
  $add_3(this$static.contentPanel, studentDash);
}

function MainPage(){
  var logo, footer;
  this.vPanel = new VerticalPanel;
  this.contentPanel = new VerticalPanel;
  this.headerPanel = new VerticalPanel;
  this.footerPanel = new VerticalPanel;
  this.menu = new MenuComponent(this);
  $initWidget(this, this.vPanel);
  logo = new Image_0;
  $setUrl_0(logo, ($clinit_UriUtils() , new SafeUriString('https://www.unibo.it/it/logo-unibo.png/@@images/44d79f14-1a99-4a5d-997f-90df029bd63e.png')));
  ($clinit_DOM() , logo.element).style['width'] = '100px';
  this.vPanel.table['border'] = '1';
  this.contentPanel.table['border'] = '1';
  $add_3(this.headerPanel, logo);
  $add_3(this.headerPanel, this.menu);
  $add_3(this.vPanel, this.headerPanel);
  $add_3(this.vPanel, this.contentPanel);
  $add_3(this.vPanel, this.footerPanel);
  $openHomePage(this);
  $clear(this.footerPanel);
  footer = new FooterComponent;
  $add_3(this.footerPanel, footer);
}

defineClass(120, 421, $intern_16, MainPage);
var Lcom_google_gwt_sample_progettoingegneria_client_MainPage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MainPage', 120);
function $setLoginText(this$static){
  (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).tipo != ($clinit_UserState() , NOT_SIGNED)?$setText(this$static.buttonLogin, 'logout'):$setText(this$static.buttonLogin, 'login');
}

function $setSessionToLogout(this$static){
  if ((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).tipo != ($clinit_UserState() , NOT_SIGNED) && $getElement(this$static.buttonLogin).textContent == 'logout') {
    $setSession((!currentSession && (currentSession = new Session(NOT_SIGNED)) , currentSession), NOT_SIGNED, null);
    $openHomePage(this$static.main);
  }
}

function MenuComponent(main){
  var buttonClear, buttonHome;
  this.hPanel = new HorizontalPanel;
  $initWidget(this, this.hPanel);
  this.main = main;
  this.buttonLogin = new Button_0('Area Utente');
  buttonHome = new Button_0('home');
  buttonClear = new Button_0('pulisci db');
  $setWidth(this.buttonLogin, '250px');
  ($clinit_DOM() , buttonHome.element).style['width'] = '250px';
  $addDomHandler(this.buttonLogin, new MenuComponent$buttonLoginHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(buttonHome, new MenuComponent$buttonHomeHandler(this), (null , TYPE));
  $addDomHandler(buttonClear, new MenuComponent$buttonClearHandler, (null , TYPE));
  $add_1(this.hPanel, buttonHome);
  $add_1(this.hPanel, this.buttonLogin);
  $add_1(this.hPanel, buttonClear);
}

defineClass(146, 421, $intern_16, MenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent', 146);
function MenuComponent$buttonClearHandler(){
}

defineClass(149, 1, $intern_17, MenuComponent$buttonClearHandler);
_.onClick = function onClick_0(event_0){
  !connService && (connService = new ConnService_Proxy);
  $clearDB(connService, new MenuComponent$buttonClearHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonClearHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonClearHandler', 149);
function MenuComponent$buttonClearHandler$1(){
}

defineClass(150, 1, {}, MenuComponent$buttonClearHandler$1);
_.onSuccess = function onSuccess_0(result){
  alert_0(castToString(result));
}
;
_.onFailure = function onFailure_0(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonClearHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonClearHandler/1', 150);
function MenuComponent$buttonHomeHandler(this$0){
  this.this$01 = this$0;
}

defineClass(148, 1, $intern_17, MenuComponent$buttonHomeHandler);
_.onClick = function onClick_1(event_0){
  $openHomePage(this.this$01.main);
  $setText(this.this$01.buttonLogin, 'Area Utente');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonHomeHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonHomeHandler', 148);
function MenuComponent$buttonLoginHandler(this$0){
  this.this$01 = this$0;
}

defineClass(147, 1, $intern_17, MenuComponent$buttonLoginHandler);
_.onClick = function onClick_2(event_0){
  $setSessionToLogout(this.this$01);
  switch ((!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).tipo.ordinal) {
    case 5:
      $setText(this.this$01.buttonLogin, 'login');
      $openLoginPage(this.this$01.main);
      $setLoginText(this.this$01);
      break;
    case 0:
      $openStudentDashboard(this.this$01.main);
      $setLoginText(this.this$01);
      break;
    case 1:
      $openProfessorDashboard(this.this$01.main);
      $setLoginText(this.this$01);
      break;
    case 2:
      $openSecretaryDashboard(this.this$01.main);
      $setLoginText(this.this$01);
      break;
    case 3:
      $openAdminDashboard(this.this$01.main);
      $setLoginText(this.this$01);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonLoginHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonLoginHandler', 147);
function $setSession(this$static, tipo, email){
  this$static.tipo = tipo;
  this$static.email = email;
}

function Session(tipo){
  this.tipo = tipo;
  this.email = null;
}

defineClass(23, 1, {}, Session);
var currentSession = null;
var Lcom_google_gwt_sample_progettoingegneria_client_Session_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'Session', 23);
function AdminDashboard(){
  var adminMenu, logoImage, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label_1('Dashboard Admin: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email);
  logoImage = new Image_0;
  adminMenu = new AdminMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_3(this.vPanel, titleLabel);
  $add_3(this.vPanel, logoImage);
  $add_3(this.vPanel, adminMenu);
}

defineClass(279, 421, $intern_16, AdminDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_AdminDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'AdminDashboard', 279);
function ProfessorDashboard(){
  var logoImage, profmenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label_1('Dashboard Professore: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email);
  logoImage = new Image_0;
  profmenu = new ProfessorMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2020/08/04/08/10/woman-5462074_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_3(this.vPanel, titleLabel);
  $add_3(this.vPanel, logoImage);
  $add_3(this.vPanel, profmenu);
}

defineClass(277, 421, $intern_16, ProfessorDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_ProfessorDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'ProfessorDashboard', 277);
function SecretaryDashboard(){
  var logoImage, secretaryMenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label_1('Dashboard Segreteria: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email);
  logoImage = new Image_0;
  secretaryMenu = new SecretaryMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2020/02/10/12/49/girl-4836396_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_3(this.vPanel, titleLabel);
  $add_3(this.vPanel, logoImage);
  $add_3(this.vPanel, secretaryMenu);
}

defineClass(278, 421, $intern_16, SecretaryDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_SecretaryDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'SecretaryDashboard', 278);
function StudentDashboard(){
  var logoImage, studentMenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label_1('Dashboard Studente: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email);
  logoImage = new Image_0;
  studentMenu = new StudentMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_3(this.vPanel, titleLabel);
  $add_3(this.vPanel, logoImage);
  $add_3(this.vPanel, studentMenu);
}

defineClass(276, 421, $intern_16, StudentDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_StudentDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'StudentDashboard', 276);
function AdminCreateUserComponent(){
  this.vPanel = new VerticalPanel;
  this.signUpPanel = new VerticalPanel;
  this.usernameTB = new TextBox;
  this.mailTB = new TextBox;
  this.passwordTB = new TextBox;
  this.nameTB = new TextBox;
  this.surnameTB = new TextBox;
  this.typeListBox = new ListBox;
  this.confirmSignUpButton = new Button_0('Registra');
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, this.signUpPanel);
  $add_3(this.signUpPanel, new Label_1('username'));
  $add_3(this.signUpPanel, this.usernameTB);
  $add_3(this.signUpPanel, new Label_1('pssw'));
  $add_3(this.signUpPanel, this.passwordTB);
  $add_3(this.signUpPanel, new Label_1('mail'));
  $add_3(this.signUpPanel, this.mailTB);
  $add_3(this.signUpPanel, new Label_1('nome'));
  $add_3(this.signUpPanel, this.nameTB);
  $add_3(this.signUpPanel, new Label_1('cognome'));
  $add_3(this.signUpPanel, this.surnameTB);
  $insertItem(this.typeListBox, 'Studente');
  $insertItem(this.typeListBox, 'Professore');
  $insertItem(this.typeListBox, 'Segreteria');
  $add_3(this.signUpPanel, this.typeListBox);
  $add_3(this.signUpPanel, this.confirmSignUpButton);
  $addDomHandler(this.confirmSignUpButton, new AdminCreateUserComponent$confirmSignUpButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(327, 421, $intern_16, AdminCreateUserComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent', 327);
function AdminCreateUserComponent$confirmSignUpButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(328, 1, $intern_17, AdminCreateUserComponent$confirmSignUpButtonHandler);
_.onClick = function onClick_3(event_0){
  var mail, name_0, psw, surname, type_0, user;
  user = $getText(this.this$01.usernameTB);
  psw = $getText(this.this$01.passwordTB);
  mail = $getText(this.this$01.mailTB);
  name_0 = $getText(this.this$01.nameTB);
  surname = $getText(this.this$01.surnameTB);
  type_0 = $getElement(this.this$01.typeListBox).selectedIndex;
  !connService && (connService = new ConnService_Proxy);
  $signUp(connService, user, psw, mail, name_0, surname, type_0, new AdminCreateUserComponent$confirmSignUpButtonHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent$confirmSignUpButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent/confirmSignUpButtonHandler', 328);
function AdminCreateUserComponent$confirmSignUpButtonHandler$1(){
}

defineClass(329, 1, {}, AdminCreateUserComponent$confirmSignUpButtonHandler$1);
_.onSuccess = function onSuccess_1(result){
  alert_0('Risultato: ' + castToString(result));
}
;
_.onFailure = function onFailure_1(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent$confirmSignUpButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent/confirmSignUpButtonHandler/1', 329);
function AdminProfessorsListComponent(){
  this.baseHPanel = new HorizontalPanel;
  this.modifPanel = new HorizontalPanel;
  this.usersListBox = new ListBox;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewProfessorInfo(connService, new AdminProfessorsListComponent$1(this));
  $addDomHandler(this.usersListBox, new AdminProfessorsListComponent$UsersListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_1(this.baseHPanel, this.usersListBox);
  $add_1(this.baseHPanel, this.modifPanel);
}

defineClass(333, 421, $intern_16, AdminProfessorsListComponent);
_.nListItem = 0;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent', 333);
function $onSuccess_0(this$static, result){
  var i, list;
  list = $split(result, '_');
  this$static.this$01.nListItem = list.length;
  for (i = 0; i < list.length; i++) {
    $insertItem(this$static.this$01.usersListBox, list[i]);
  }
  $setVisibleItemCount(this$static.this$01.usersListBox, this$static.this$01.nListItem);
}

function AdminProfessorsListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(335, 1, {}, AdminProfessorsListComponent$1);
_.onSuccess = function onSuccess_2(result){
  $onSuccess_0(this, castToString(result));
}
;
_.onFailure = function onFailure_2(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent/1', 335);
function AdminProfessorsListComponent$UsersListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(334, 1, $intern_18, AdminProfessorsListComponent$UsersListBoxHandler);
_.onDoubleClick = function onDoubleClick(event_0){
  $clear(this.this$01.modifPanel);
  this.this$01.modifierComp = new AdminUserModifierComponent($split($getSelectedItemText(this.this$01.usersListBox), ' '));
  $add_1(this.this$01.modifPanel, this.this$01.modifierComp);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent$UsersListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent/UsersListBoxHandler', 334);
function AdminStudentsListComponent(){
  this.baseHPanel = new HorizontalPanel;
  this.modifPanel = new HorizontalPanel;
  this.usersListBox = new ListBox;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewStudentInfo(connService, new AdminStudentsListComponent$1(this));
  $addDomHandler(this.usersListBox, new AdminStudentsListComponent$UsersListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_1(this.baseHPanel, this.usersListBox);
  $add_1(this.baseHPanel, this.modifPanel);
}

defineClass(330, 421, $intern_16, AdminStudentsListComponent);
_.nListItem = 0;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent', 330);
function $onSuccess_1(this$static, result){
  var i, list;
  list = $split(result, '_');
  this$static.this$01.nListItem = list.length;
  for (i = 0; i < list.length; i++) {
    $insertItem(this$static.this$01.usersListBox, list[i]);
  }
  $setVisibleItemCount(this$static.this$01.usersListBox, this$static.this$01.nListItem);
}

function AdminStudentsListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(332, 1, {}, AdminStudentsListComponent$1);
_.onSuccess = function onSuccess_3(result){
  $onSuccess_1(this, castToString(result));
}
;
_.onFailure = function onFailure_3(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent/1', 332);
function AdminStudentsListComponent$UsersListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(331, 1, $intern_18, AdminStudentsListComponent$UsersListBoxHandler);
_.onDoubleClick = function onDoubleClick_0(event_0){
  $clear(this.this$01.modifPanel);
  this.this$01.modifierComp = new AdminUserModifierComponent($split($getSelectedItemText(this.this$01.usersListBox), ' '));
  $add_1(this.this$01.modifPanel, this.this$01.modifierComp);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent$UsersListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent/UsersListBoxHandler', 331);
function AdminUserModifierComponent(user){
  this.vPanel = new VerticalPanel;
  this.emailTb = new TextBox;
  this.nameTb = new TextBox;
  this.surnameTb = new TextBox;
  this.userNameTb = new TextBox;
  this.passwordTb = new TextBox;
  this.confirmBtn = new Button_0('Conferma Modifiche');
  this.user = user;
  $initWidget(this, this.vPanel);
  $setText_1(this.emailTb, this.user[1]);
  $setText_1(this.nameTb, this.user[3]);
  $setText_1(this.surnameTb, this.user[5]);
  $setText_1(this.userNameTb, this.user[7]);
  $setText_1(this.passwordTb, this.user[9]);
  $add_3(this.vPanel, new Label_1('MODIFICA USER'));
  $add_3(this.vPanel, new Label_1('Email:'));
  $add_3(this.vPanel, this.emailTb);
  $add_3(this.vPanel, new Label_1('Nome:'));
  $add_3(this.vPanel, this.nameTb);
  $add_3(this.vPanel, new Label_1('Cognome:'));
  $add_3(this.vPanel, this.surnameTb);
  $add_3(this.vPanel, new Label_1('Username:'));
  $add_3(this.vPanel, this.userNameTb);
  $add_3(this.vPanel, new Label_1('Password:'));
  $add_3(this.vPanel, this.passwordTb);
  $add_3(this.vPanel, this.confirmBtn);
  $addDomHandler(this.confirmBtn, new AdminUserModifierComponent$confirmBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(118, 421, $intern_16, AdminUserModifierComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent', 118);
function AdminUserModifierComponent$confirmBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(373, 1, $intern_17, AdminUserModifierComponent$confirmBtnHandler);
_.onClick = function onClick_4(event_0){
  !connService && (connService = new ConnService_Proxy);
  $setUserInfo(connService, this.this$01.user[1], $getText(this.this$01.emailTb), $getText(this.this$01.nameTb), $getText(this.this$01.surnameTb), $getText(this.this$01.userNameTb), $getText(this.this$01.passwordTb), new AdminUserModifierComponent$confirmBtnHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent$confirmBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent/confirmBtnHandler', 373);
function AdminUserModifierComponent$confirmBtnHandler$1(){
}

defineClass(374, 1, {}, AdminUserModifierComponent$confirmBtnHandler$1);
_.onSuccess = function onSuccess_4(result){
  castToBoolean(result);
  $wnd.alert('Dati aggiornati.');
}
;
_.onFailure = function onFailure_4(caught){
  $wnd.alert('Errore del server. Dati non aggiornati.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent$confirmBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent/confirmBtnHandler/1', 374);
function $changeExamState_0(this$static){
  this$static.publishConfirmed && (!connService && (connService = new ConnService_Proxy) , $changeExamState(connService, $getSelectedItemText(this$static.examList), new ApproveGradesComponent$2(this$static)));
}

function $publishGrades_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $publishGrades(connService, $getSelectedItemText(this$static.examList), new ApproveGradesComponent$3);
}

function ApproveGradesComponent(){
  this.vPanel = new VerticalPanel;
  this.examList = new ListBox;
  this.txta = new TextArea_0;
  this.pubBtn = new Button_0('PUBBLICA');
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, new Label_1('ELENCO ESAMI:'));
  $add_3(this.vPanel, this.examList);
  $addDomHandler(this.pubBtn, new ApproveGradesComponent$pubBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.examList, new ApproveGradesComponent$examListDoubleClickHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  !connService && (connService = new ConnService_Proxy);
  $retrieveExamsForSecretary(connService, new ApproveGradesComponent$1(this));
}

defineClass(320, 421, $intern_16, ApproveGradesComponent);
_.publishConfirmed = false;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent', 320);
function $onSuccess_2(this$static, result){
  var e, e$iterator;
  for (e$iterator = new ArrayList$1(result); e$iterator.i < e$iterator.this$01.array.length;) {
    e = castToString($next_2(e$iterator));
    $insertItem(this$static.this$01.examList, e);
  }
}

function ApproveGradesComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(324, 1, {}, ApproveGradesComponent$1);
_.onSuccess = function onSuccess_5(result){
  $onSuccess_2(this, castTo(result, 29));
}
;
_.onFailure = function onFailure_5(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/1', 324);
function ApproveGradesComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(325, 1, {}, ApproveGradesComponent$2);
_.onSuccess = function onSuccess_6(result){
  var lastArg;
  (lastArg = this , castToBoolean(result) , lastArg).this$01.publishConfirmed = false;
}
;
_.onFailure = function onFailure_6(caught){
  $wnd.alert('Cambio stato esame fallito');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/2', 325);
function ApproveGradesComponent$3(){
}

defineClass(326, 1, {}, ApproveGradesComponent$3);
_.onSuccess = function onSuccess_7(result){
  castToBoolean(result);
  $wnd.alert('Voti Pubblicati');
}
;
_.onFailure = function onFailure_7(caught){
  $wnd.alert('Pubblicazione voti fallita');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$3_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/3', 326);
function ApproveGradesComponent$examListDoubleClickHandler(this$0){
  this.this$01 = this$0;
}

defineClass(321, 1, $intern_18, ApproveGradesComponent$examListDoubleClickHandler);
_.onDoubleClick = function onDoubleClick_1(event_0){
  var selectedExam;
  $add_3(this.this$01.vPanel, new Label_1('STUDENTI E VOTI:\n'));
  $add_3(this.this$01.vPanel, this.this$01.txta);
  selectedExam = $getSelectedItemText(this.this$01.examList);
  !connService && (connService = new ConnService_Proxy);
  $retrieveGradesAndStudents(connService, selectedExam, new ApproveGradesComponent$examListDoubleClickHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$examListDoubleClickHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/examListDoubleClickHandler', 321);
function $onSuccess_3(this$static, result){
  if (result.length == 0) {
    $setText_1(this$static.this$11.this$01.txta, 'Nessun Voto da approvare');
    $remove_4(this$static.this$11.this$01.vPanel, this$static.this$11.this$01.pubBtn);
  }
   else {
    $setText_1(this$static.this$11.this$01.txta, result);
    $add_3(this$static.this$11.this$01.vPanel, this$static.this$11.this$01.pubBtn);
  }
}

function ApproveGradesComponent$examListDoubleClickHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(323, 1, {}, ApproveGradesComponent$examListDoubleClickHandler$1);
_.onSuccess = function onSuccess_8(result){
  $onSuccess_3(this, castToString(result));
}
;
_.onFailure = function onFailure_8(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$examListDoubleClickHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/examListDoubleClickHandler/1', 323);
function ApproveGradesComponent$pubBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(322, 1, $intern_17, ApproveGradesComponent$pubBtnHandler);
_.onClick = function onClick_5(event_0){
  $publishGrades_0(this.this$01);
  this.this$01.publishConfirmed = true;
  $changeExamState_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ApproveGradesComponent$pubBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ApproveGradesComponent/pubBtnHandler', 322);
function GradesViewComponent(){
  this.vPanel = new VerticalPanel;
  this.gradesTextArea = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, new Label_1('VOTI ESAMI:'));
  $setHeight(this.gradesTextArea, '250px');
  $setWidth(this.gradesTextArea, '250px');
  !connService && (connService = new ConnService_Proxy);
  $getGrades(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new GradesViewComponent$1(this));
  $add_3(this.vPanel, this.gradesTextArea);
}

defineClass(357, 421, $intern_16, GradesViewComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_GradesViewComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'GradesViewComponent', 357);
function $onSuccess_4(this$static, result){
  $setText_1(this$static.this$01.gradesTextArea, result);
}

function GradesViewComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(358, 1, {}, GradesViewComponent$1);
_.onSuccess = function onSuccess_9(result){
  $onSuccess_4(this, castToString(result));
}
;
_.onFailure = function onFailure_9(caught){
  $wnd.alert('Error.impossibile visualizzare voti esami');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_GradesViewComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'GradesViewComponent/1', 358);
function InfoStudentListComponent(){
  this.vPanel = new VerticalPanel;
  this.txta = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, new Label_1('informazioni personali studenti'));
  $add_3(this.vPanel, this.txta);
  !connService && (connService = new ConnService_Proxy);
  $retrieveInfoStudentList(connService, new InfoStudentListComponent$1(this));
}

defineClass(318, 421, $intern_16, InfoStudentListComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_InfoStudentListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'InfoStudentListComponent', 318);
function $onSuccess_5(this$static, result){
  $setText_1(this$static.this$01.txta, result);
}

function InfoStudentListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(319, 1, {}, InfoStudentListComponent$1);
_.onSuccess = function onSuccess_10(result){
  $onSuccess_5(this, castToString(result));
}
;
_.onFailure = function onFailure_10(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_InfoStudentListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'InfoStudentListComponent/1', 319);
function PersonalInfoComponent(){
  this.vPanel = new VerticalPanel;
  this.label1 = new Label_1('le tue info personali');
  this.txta1 = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, this.label1);
  $add_3(this.vPanel, this.txta1);
  $setWidth(this.txta1, '200px');
  $setHeight(this.txta1, '150px');
  !connService && (connService = new ConnService_Proxy);
  $getInfoUser(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new PersonalInfoComponent$1(this));
}

defineClass(117, 421, $intern_16, PersonalInfoComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_PersonalInfoComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'PersonalInfoComponent', 117);
function $onSuccess_6(this$static, result){
  $setText_1(this$static.this$01.txta1, result);
}

function PersonalInfoComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(356, 1, {}, PersonalInfoComponent$1);
_.onSuccess = function onSuccess_11(result){
  $onSuccess_6(this, castToString(result));
}
;
_.onFailure = function onFailure_11(caught){
  $wnd.alert('error:' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_PersonalInfoComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'PersonalInfoComponent/1', 356);
function ProfessorCourseCreationComponent(){
  this.widgetBasePanel = new VerticalPanel;
  this.courseNameBox = new TextBox;
  this.startDateBox = new TextBox;
  this.endDateBox = new TextBox;
  this.coDocBox = new TextBox;
  this.descBox = new TextArea_0;
  this.confirmCreationButton = new Button_0('Crea corso');
  $initWidget(this, this.widgetBasePanel);
  $add_3(this.widgetBasePanel, new Label_1(' CREA NUOVO CORSO'));
  $add_3(this.widgetBasePanel, new Label_1('Nome corso: '));
  $add_3(this.widgetBasePanel, this.courseNameBox);
  $add_3(this.widgetBasePanel, new Label_1('Data inizio: '));
  $add_3(this.widgetBasePanel, this.startDateBox);
  $add_3(this.widgetBasePanel, new Label_1('Data fine: '));
  $add_3(this.widgetBasePanel, this.endDateBox);
  $add_3(this.widgetBasePanel, new Label_1('Co-Docente (se presente): '));
  $add_3(this.widgetBasePanel, this.coDocBox);
  $add_3(this.widgetBasePanel, new Label_1('Descrizione: '));
  $add_3(this.widgetBasePanel, this.descBox);
  $add_3(this.widgetBasePanel, this.confirmCreationButton);
  $addDomHandler(this.confirmCreationButton, new ProfessorCourseCreationComponent$confirmCreationButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(387, 421, $intern_16, ProfessorCourseCreationComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent', 387);
function ProfessorCourseCreationComponent$confirmCreationButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(388, 1, $intern_17, ProfessorCourseCreationComponent$confirmCreationButtonHandler);
_.onClick = function onClick_6(event_0){
  var end, start_0;
  if (!$equals_1($getText(this.this$01.courseNameBox), '') && !$equals_1($getText(this.this$01.startDateBox), '') && !$equals_1($getText(this.this$01.endDateBox), '')) {
    try {
      start_0 = $parse_0(($clinit_DateTimeFormat() , getFormat('dd/MM/yyyy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), $getText(this.this$01.startDateBox));
      end = $parse_0(getFormat('dd/MM/yyyy', $getDateTimeFormatInfo((null , instance_1))), $getText(this.this$01.endDateBox));
      if (gt(fromDouble_0(end.jsdate.getTime()), fromDouble_0(start_0.jsdate.getTime())) && $after(start_0, new Date_0)) {
        !connService && (connService = new ConnService_Proxy);
        $addCourse(connService, $getText(this.this$01.courseNameBox), $getText(this.this$01.startDateBox), $getText(this.this$01.endDateBox), (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getText(this.this$01.coDocBox), $getText(this.this$01.descBox), new ProfessorCourseCreationComponent$confirmCreationButtonHandler$1(this));
      }
       else {
        $setText_1(this.this$01.startDateBox, '');
        $setText_1(this.this$01.endDateBox, '');
        $wnd.alert('Date inserite non corrette');
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 31)) {
        $wnd.alert('Formato data non valido\ninserire: giorno/mese/anno');
        $setText_1(this.this$01.startDateBox, '');
        $setText_1(this.this$01.endDateBox, '');
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    $wnd.alert('campi vuoti');
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent$confirmCreationButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent/confirmCreationButtonHandler', 388);
function $onSuccess_7(this$static, result){
  if (checkCriticalNotNull(result) , result) {
    $wnd.alert('Corso inserito.');
    $setText_1(this$static.this$11.this$01.startDateBox, '');
    $setText_1(this$static.this$11.this$01.endDateBox, '');
    $setText_1(this$static.this$11.this$01.courseNameBox, '');
    $setText_1(this$static.this$11.this$01.coDocBox, '');
    $setText_1(this$static.this$11.this$01.descBox, '');
  }
   else {
    $wnd.alert('Corso gi\xE0 creato.');
    $setText_1(this$static.this$11.this$01.courseNameBox, '');
  }
}

function ProfessorCourseCreationComponent$confirmCreationButtonHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(389, 1, {}, ProfessorCourseCreationComponent$confirmCreationButtonHandler$1);
_.onSuccess = function onSuccess_12(result){
  $onSuccess_7(this, castToBoolean(result));
}
;
_.onFailure = function onFailure_12(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent$confirmCreationButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent/confirmCreationButtonHandler/1', 389);
function $initSubscribedStudents(this$static){
  !connService && (connService = new ConnService_Proxy);
  $getStudentsCourseList(connService, this$static.currentCourse[0], new ProfessorCoursesModifierComponent$2(this$static));
}

function ProfessorCoursesModifierComponent(courseName){
  this.vPanel = new VerticalPanel;
  this.courseNameTb = new TextBox;
  this.startDateTb = new TextBox;
  this.endDateTb = new TextBox;
  this.coDocTb = new TextBox;
  this.descTa = new TextArea_0;
  this.subscribedStudentsTa = new TextArea_0;
  this.hPanelBtn = new HorizontalPanel;
  this.confirmBtn = new Button_0('Conferma Modifiche');
  this.deleteBtn = new Button_0('Elimina Corso');
  $initWidget(this, this.vPanel);
  this.initialCourseName = courseName;
  !connService && (connService = new ConnService_Proxy);
  $getCourseData(connService, this.initialCourseName, new ProfessorCoursesModifierComponent$1(this));
  $addDomHandler(this.confirmBtn, new ProfessorCoursesModifierComponent$confirmBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.deleteBtn, new ProfessorCoursesModifierComponent$deleteBtnHandler(this), (null , TYPE));
}

defineClass(380, 421, $intern_16, ProfessorCoursesModifierComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent', 380);
function $onSuccess_8(this$static, result){
  this$static.this$01.currentCourse = $split(result, '\n');
  $setText_1(this$static.this$01.courseNameTb, this$static.this$01.currentCourse[0]);
  $setText_1(this$static.this$01.startDateTb, this$static.this$01.currentCourse[1]);
  $setText_1(this$static.this$01.endDateTb, this$static.this$01.currentCourse[2]);
  $setText_1(this$static.this$01.coDocTb, this$static.this$01.currentCourse[3]);
  $setText_1(this$static.this$01.descTa, this$static.this$01.currentCourse[4]);
  $add_1(this$static.this$01.hPanelBtn, this$static.this$01.confirmBtn);
  $add_1(this$static.this$01.hPanelBtn, this$static.this$01.deleteBtn);
  $add_3(this$static.this$01.vPanel, new Label_1('MODIFICA CORSO'));
  $add_3(this$static.this$01.vPanel, new Label_1('Nome Corso:'));
  $add_3(this$static.this$01.vPanel, this$static.this$01.courseNameTb);
  $add_3(this$static.this$01.vPanel, new Label_1('Data Inizio:'));
  $add_3(this$static.this$01.vPanel, this$static.this$01.startDateTb);
  $add_3(this$static.this$01.vPanel, new Label_1('Data fine:'));
  $add_3(this$static.this$01.vPanel, this$static.this$01.endDateTb);
  $add_3(this$static.this$01.vPanel, new Label_1('Co-Docente (se presente):'));
  $add_3(this$static.this$01.vPanel, this$static.this$01.coDocTb);
  $add_3(this$static.this$01.vPanel, new Label_1('Descrizione:'));
  $add_3(this$static.this$01.vPanel, this$static.this$01.descTa);
  $add_3(this$static.this$01.vPanel, this$static.this$01.hPanelBtn);
  $initSubscribedStudents(this$static.this$01);
  $setWidth(this$static.this$01.subscribedStudentsTa, '221px');
  $setHeight(this$static.this$01.subscribedStudentsTa, '221px');
  $add_3(this$static.this$01.vPanel, this$static.this$01.subscribedStudentsTa);
}

function ProfessorCoursesModifierComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(385, 1, {}, ProfessorCoursesModifierComponent$1);
_.onSuccess = function onSuccess_13(result){
  $onSuccess_8(this, castToString(result));
}
;
_.onFailure = function onFailure_13(caught){
  $wnd.alert('Non riesco a trovare le informazioni sul server.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/1', 385);
function $onSuccess_9(this$static, result){
  $setText_1(this$static.this$01.subscribedStudentsTa, 'LISTA STUDENTI ISCRITTI:\n' + result);
}

function ProfessorCoursesModifierComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(386, 1, {}, ProfessorCoursesModifierComponent$2);
_.onSuccess = function onSuccess_14(result){
  $onSuccess_9(this, castToString(result));
}
;
_.onFailure = function onFailure_14(caught){
  $wnd.alert('Errore server.\nLista studenti iscritti al corso non aggiornata');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/2', 386);
function ProfessorCoursesModifierComponent$confirmBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(381, 1, $intern_17, ProfessorCoursesModifierComponent$confirmBtnHandler);
_.onClick = function onClick_7(event_0){
  var end, start_0;
  if (!$equals_1($getText(this.this$01.courseNameTb), '') && !$equals_1($getText(this.this$01.startDateTb), '') && !$equals_1($getText(this.this$01.endDateTb), '')) {
    try {
      start_0 = $parse_0(($clinit_DateTimeFormat() , getFormat('dd/MM/yyyy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), $getText(this.this$01.startDateTb));
      end = $parse_0(getFormat('dd/MM/yyyy', $getDateTimeFormatInfo((null , instance_1))), $getText(this.this$01.endDateTb));
      if (gt(fromDouble_0(end.jsdate.getTime()), fromDouble_0(start_0.jsdate.getTime())) && $after(start_0, new Date_0)) {
        !connService && (connService = new ConnService_Proxy);
        $setCourseData(connService, this.this$01.initialCourseName, $getText(this.this$01.startDateTb), $getText(this.this$01.endDateTb), $getText(this.this$01.courseNameTb), $getText(this.this$01.coDocTb), $getText(this.this$01.descTa), new ProfessorCoursesModifierComponent$confirmBtnHandler$1);
      }
       else {
        $wnd.alert('Date inserite non corrette');
        $setText_1(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
        $setText_1(this.this$01.startDateTb, this.this$01.currentCourse[1]);
        $setText_1(this.this$01.endDateTb, this.this$01.currentCourse[2]);
        $setText_1(this.this$01.coDocTb, this.this$01.currentCourse[3]);
        $setText_1(this.this$01.descTa, this.this$01.currentCourse[4]);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 31)) {
        $wnd.alert('Formato data non valido\ninserire: giorno/mese/anno');
        $setText_1(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
        $setText_1(this.this$01.startDateTb, this.this$01.currentCourse[1]);
        $setText_1(this.this$01.endDateTb, this.this$01.currentCourse[2]);
        $setText_1(this.this$01.coDocTb, this.this$01.currentCourse[3]);
        $setText_1(this.this$01.descTa, this.this$01.currentCourse[4]);
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    $wnd.alert('campi vuoti');
    $setText_1(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
    $setText_1(this.this$01.startDateTb, this.this$01.currentCourse[1]);
    $setText_1(this.this$01.endDateTb, this.this$01.currentCourse[2]);
    $setText_1(this.this$01.coDocTb, this.this$01.currentCourse[3]);
    $setText_1(this.this$01.descTa, this.this$01.currentCourse[4]);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$confirmBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/confirmBtnHandler', 381);
function $onSuccess_10(result){
  (checkCriticalNotNull(result) , result) && ($wnd.alert('Corso aggiornato') , undefined);
}

function ProfessorCoursesModifierComponent$confirmBtnHandler$1(){
}

defineClass(383, 1, {}, ProfessorCoursesModifierComponent$confirmBtnHandler$1);
_.onSuccess = function onSuccess_15(result){
  $onSuccess_10(castToBoolean(result));
}
;
_.onFailure = function onFailure_15(caught){
  $wnd.alert('Errore aggiornamento dati.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$confirmBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/confirmBtnHandler/1', 383);
function ProfessorCoursesModifierComponent$deleteBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(382, 1, $intern_17, ProfessorCoursesModifierComponent$deleteBtnHandler);
_.onClick = function onClick_8(event_0){
  !connService && (connService = new ConnService_Proxy);
  $deleteCourse(connService, this.this$01.initialCourseName, new ProfessorCoursesModifierComponent$deleteBtnHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$deleteBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/deleteBtnHandler', 382);
function $onSuccess_11(this$static, result){
  if (checkCriticalNotNull(result) , result) {
    $clear(this$static.this$11.this$01.vPanel);
    $wnd.alert('corso eliminato.');
  }
   else {
    $wnd.alert('corso non presente nel database');
  }
}

function ProfessorCoursesModifierComponent$deleteBtnHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(384, 1, {}, ProfessorCoursesModifierComponent$deleteBtnHandler$1);
_.onSuccess = function onSuccess_16(result){
  $onSuccess_11(this, castToBoolean(result));
}
;
_.onFailure = function onFailure_16(caught){
  $wnd.alert('Errore server');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$deleteBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/deleteBtnHandler/1', 384);
function $fildVerifier(exDate, exhour, exDuration){
  var date, duration, e, time;
  try {
    date = $parse_0(($clinit_DateTimeFormat() , getFormat('dd/MM/yyyy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), exDate);
    time = $toString_0($parse_0(getFormat('h:mm a', $getDateTimeFormatInfo((null , instance_1))), exhour));
    $wnd.alert('DEBUG ecco il time preso:' + time);
    duration = __parseAndValidateInt(exDuration);
    if (!$after(date, new Date_0)) {
      $wnd.alert('Data non valida.');
      return false;
    }
    if (duration <= 0) {
      $wnd.alert('Durata non valida.');
      return false;
    }
    return true;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 31)) {
      e = $e0;
      alert_0(e.detailMessage);
    }
     else 
      throw toJs($e0);
  }
  return false;
}

function ProfessorExamCreationComponent(courseName){
  this.widgetBasePanel = new VerticalPanel;
  this.courseNameLb = new Label;
  this.examDateBox = new TextBox;
  this.examHourBox = new TextBox;
  this.classroomBox = new TextBox;
  this.durationBox = new TextBox;
  this.confirmCreationButton = new Button_0('Crea esame');
  $initWidget(this, this.widgetBasePanel);
  $add_3(this.widgetBasePanel, new Label_1('CREA NUOVO ESAME'));
  $add_3(this.widgetBasePanel, new Label_1('Nome corso: '));
  $setText_0(this.courseNameLb, courseName);
  $add_3(this.widgetBasePanel, this.courseNameLb);
  $add_3(this.widgetBasePanel, new Label_1('Data esame: [GG/MM/YYYY]'));
  $add_3(this.widgetBasePanel, this.examDateBox);
  $add_3(this.widgetBasePanel, new Label_1('Orario esame: [HH:MM]'));
  $add_3(this.widgetBasePanel, this.examHourBox);
  $add_3(this.widgetBasePanel, new Label_1('Aula: '));
  $add_3(this.widgetBasePanel, this.classroomBox);
  $add_3(this.widgetBasePanel, new Label_1('Durata esame(minuti): '));
  $add_3(this.widgetBasePanel, this.durationBox);
  $add_3(this.widgetBasePanel, new Label_1('email prof: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email));
  $add_3(this.widgetBasePanel, this.confirmCreationButton);
  $addDomHandler(this.confirmCreationButton, new ProfessorExamCreationComponent$confirmCreationButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(401, 421, $intern_16, ProfessorExamCreationComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent', 401);
function ProfessorExamCreationComponent$confirmCreationButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(402, 1, $intern_17, ProfessorExamCreationComponent$confirmCreationButtonHandler);
_.onClick = function onClick_9(event_0){
  var demostudents;
  if ($fildVerifier($getText(this.this$01.examDateBox), $getText(this.this$01.examHourBox), $getText(this.this$01.durationBox))) {
    demostudents = new ArrayList;
    !connService && (connService = new ConnService_Proxy);
    $addExam(connService, $getTextOrHtml(this.this$01.courseNameLb.directionalTextHelper), $getText(this.this$01.examDateBox), $getText(this.this$01.examHourBox), (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getText(this.this$01.classroomBox), $getText(this.this$01.durationBox), demostudents, new ProfessorExamCreationComponent$confirmCreationButtonHandler$1);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent$confirmCreationButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent/confirmCreationButtonHandler', 402);
function ProfessorExamCreationComponent$confirmCreationButtonHandler$1(){
}

defineClass(403, 1, {}, ProfessorExamCreationComponent$confirmCreationButtonHandler$1);
_.onSuccess = function onSuccess_17(result){
  alert_0(' ' + castToString(result));
}
;
_.onFailure = function onFailure_17(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent$confirmCreationButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent/confirmCreationButtonHandler/1', 403);
function $initSubscribedStudents_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $getStudentsExamList(connService, this$static.currentExam[0], new ProfessorExamModifierComponent$2(this$static));
}

function ProfessorExamModifierComponent(courseName){
  this.vPanel = new VerticalPanel;
  this.courseNameTb = new Label;
  this.dateTb = new TextBox;
  this.hourTb = new TextBox;
  this.classroomTb = new TextBox;
  this.durationTb = new TextBox;
  this.subscribedStudentsTa = new TextArea_0;
  this.hPanelBtn = new HorizontalPanel;
  this.confirmBtn = new Button_0('Conferma Modifiche');
  this.createBtn = new Button_0('Crea esame');
  this.deleteBtn = new Button_0('Elimina esame');
  $initWidget(this, this.vPanel);
  this.courseName = courseName;
  !connService && (connService = new ConnService_Proxy);
  $getExamData(connService, courseName, new ProfessorExamModifierComponent$1(this));
  $addDomHandler(this.confirmBtn, new ProfessorExamModifierComponent$confirmBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.deleteBtn, new ProfessorExamModifierComponent$deleteBtnHandler(this), (null , TYPE));
}

defineClass(390, 421, $intern_16, ProfessorExamModifierComponent);
_.courseName = '';
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent', 390);
function $onSuccess_12(this$static, result){
  if ($equals_1(result, 'NO_EXAM_CREATED')) {
    $setText_0(this$static.this$01.courseNameTb, 'Nessun esame creato per questo corso');
    $add_3(this$static.this$01.vPanel, this$static.this$01.courseNameTb);
    $addDomHandler(this$static.this$01.createBtn, new ProfessorExamModifierComponent$CreateCourseBtnHandlerFromExamManagement(this$static.this$01), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
    $add_3(this$static.this$01.vPanel, this$static.this$01.createBtn);
  }
   else {
    this$static.this$01.currentExam = $split(result, '\n');
    $setText_0(this$static.this$01.courseNameTb, this$static.this$01.currentExam[0]);
    $setText_1(this$static.this$01.dateTb, this$static.this$01.currentExam[1]);
    $setText_1(this$static.this$01.hourTb, this$static.this$01.currentExam[2]);
    $setText_1(this$static.this$01.classroomTb, this$static.this$01.currentExam[3]);
    $setText_1(this$static.this$01.durationTb, this$static.this$01.currentExam[4]);
    $add_1(this$static.this$01.hPanelBtn, this$static.this$01.confirmBtn);
    $add_1(this$static.this$01.hPanelBtn, this$static.this$01.deleteBtn);
    $add_3(this$static.this$01.vPanel, new Label_1('MODIFICA ESAME'));
    $add_3(this$static.this$01.vPanel, new Label_1('Nome Corso:'));
    $add_3(this$static.this$01.vPanel, this$static.this$01.courseNameTb);
    $add_3(this$static.this$01.vPanel, new Label_1('Data:'));
    $add_3(this$static.this$01.vPanel, this$static.this$01.dateTb);
    $add_3(this$static.this$01.vPanel, new Label_1('Ora inizio:'));
    $add_3(this$static.this$01.vPanel, this$static.this$01.hourTb);
    $add_3(this$static.this$01.vPanel, new Label_1('Aula:'));
    $add_3(this$static.this$01.vPanel, this$static.this$01.classroomTb);
    $add_3(this$static.this$01.vPanel, new Label_1('Durata:'));
    $add_3(this$static.this$01.vPanel, this$static.this$01.durationTb);
    $add_3(this$static.this$01.vPanel, this$static.this$01.hPanelBtn);
    $initSubscribedStudents_0(this$static.this$01);
    $setWidth(this$static.this$01.subscribedStudentsTa, '221px');
    $setHeight(this$static.this$01.subscribedStudentsTa, '221px');
    $add_3(this$static.this$01.vPanel, this$static.this$01.subscribedStudentsTa);
  }
}

function ProfessorExamModifierComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(396, 1, {}, ProfessorExamModifierComponent$1);
_.onSuccess = function onSuccess_18(result){
  $onSuccess_12(this, castToString(result));
}
;
_.onFailure = function onFailure_18(caught){
  $wnd.alert('Non riesco a trovare le informazioni sul server.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/1', 396);
function $onSuccess_13(this$static, result){
  $setText_1(this$static.this$01.subscribedStudentsTa, 'LISTA STUDENTI ISCRITTI:\n' + result);
}

function ProfessorExamModifierComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(397, 1, {}, ProfessorExamModifierComponent$2);
_.onSuccess = function onSuccess_19(result){
  $onSuccess_13(this, castToString(result));
}
;
_.onFailure = function onFailure_19(caught){
  $wnd.alert("Errore server.\nLista studenti iscritti all'esame non aggiornata");
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/2', 397);
function ProfessorExamModifierComponent$CreateCourseBtnHandlerFromExamManagement(this$0){
  this.this$01 = this$0;
}

defineClass(392, 1, $intern_17, ProfessorExamModifierComponent$CreateCourseBtnHandlerFromExamManagement);
_.onClick = function onClick_10(event_0){
  var createExam;
  createExam = new ProfessorExamCreationComponent(this.this$01.courseName);
  $clear(this.this$01.vPanel);
  $add_3(this.this$01.vPanel, createExam);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$CreateCourseBtnHandlerFromExamManagement_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/CreateCourseBtnHandlerFromExamManagement', 392);
function ProfessorExamModifierComponent$confirmBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(391, 1, $intern_17, ProfessorExamModifierComponent$confirmBtnHandler);
_.onClick = function onClick_11(event_0){
  var date;
  if (!$equals_1($getTextOrHtml(this.this$01.courseNameTb.directionalTextHelper), '') && !$equals_1($getText(this.this$01.dateTb), '') && !$equals_1($getText(this.this$01.hourTb), '') && !$equals_1($getText(this.this$01.classroomTb), '') && !$equals_1($getText(this.this$01.durationTb), '')) {
    try {
      date = $parse_0(($clinit_DateTimeFormat() , getFormat('dd/MM/yyyy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), $getText(this.this$01.dateTb));
      if ($after(date, new Date_0)) {
        !connService && (connService = new ConnService_Proxy);
        $setExamData(connService, this.this$01.currentExam[0], $getText(this.this$01.dateTb), $getText(this.this$01.hourTb), $getText(this.this$01.classroomTb), $getText(this.this$01.durationTb), new ProfessorExamModifierComponent$confirmBtnHandler$1);
      }
       else {
        $wnd.alert('Data inserita non corretta');
        $setText_0(this.this$01.courseNameTb, this.this$01.currentExam[0]);
        $setText_1(this.this$01.dateTb, this.this$01.currentExam[1]);
        $setText_1(this.this$01.hourTb, this.this$01.currentExam[2]);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 31)) {
        $wnd.alert('Formato data non valido\ninserire: giorno/mese/anno');
        $setText_0(this.this$01.courseNameTb, this.this$01.currentExam[0]);
        $setText_1(this.this$01.dateTb, this.this$01.currentExam[1]);
        $setText_1(this.this$01.hourTb, this.this$01.currentExam[2]);
        $setText_1(this.this$01.classroomTb, this.this$01.currentExam[3]);
        $setText_1(this.this$01.durationTb, this.this$01.currentExam[4]);
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    $wnd.alert('campi vuoti');
    $setText_0(this.this$01.courseNameTb, this.this$01.currentExam[0]);
    $setText_1(this.this$01.dateTb, this.this$01.currentExam[1]);
    $setText_1(this.this$01.hourTb, this.this$01.currentExam[2]);
    $setText_1(this.this$01.classroomTb, this.this$01.currentExam[3]);
    $setText_1(this.this$01.durationTb, this.this$01.currentExam[4]);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$confirmBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/confirmBtnHandler', 391);
function $onSuccess_14(result){
  (checkCriticalNotNull(result) , result) && ($wnd.alert('Esame aggiornato') , undefined);
}

function ProfessorExamModifierComponent$confirmBtnHandler$1(){
}

defineClass(394, 1, {}, ProfessorExamModifierComponent$confirmBtnHandler$1);
_.onSuccess = function onSuccess_20(result){
  $onSuccess_14(castToBoolean(result));
}
;
_.onFailure = function onFailure_20(caught){
  $wnd.alert('Errore aggiornamento dati.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$confirmBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/confirmBtnHandler/1', 394);
function ProfessorExamModifierComponent$deleteBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(393, 1, $intern_17, ProfessorExamModifierComponent$deleteBtnHandler);
_.onClick = function onClick_12(event_0){
  !connService && (connService = new ConnService_Proxy);
  $deleteExam(connService, this.this$01.currentExam[0], new ProfessorExamModifierComponent$deleteBtnHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$deleteBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/deleteBtnHandler', 393);
function $onSuccess_15(this$static, result){
  if (checkCriticalNotNull(result) , result) {
    $clear(this$static.this$11.this$01.vPanel);
    $wnd.alert('esame eliminato.');
  }
   else {
    $wnd.alert('esame non presente nel database');
  }
}

function ProfessorExamModifierComponent$deleteBtnHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(395, 1, {}, ProfessorExamModifierComponent$deleteBtnHandler$1);
_.onSuccess = function onSuccess_21(result){
  $onSuccess_15(this, castToBoolean(result));
}
;
_.onFailure = function onFailure_21(caught){
  $wnd.alert('Errore server');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamModifierComponent$deleteBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamModifierComponent/deleteBtnHandler/1', 395);
function ProfessorListCoursesComponent(){
  this.baseHPanel = new HorizontalPanel;
  this.buttonvPanel = new VerticalPanel;
  this.hPanel = new HorizontalPanel;
  this.coursesListBox = new ListBox;
  this.createBtn = new Button;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewProfessorCoursesInfo(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new ProfessorListCoursesComponent$1(this));
  $add_3(this.buttonvPanel, new Label_1('GESTIONE CORSO'));
  $addDomHandler(this.coursesListBox, new ProfessorListCoursesComponent$ListBoxHandlerFromCourseManagement(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $addDomHandler(this.createBtn, new ProfessorListCoursesComponent$CreateCourseBtnHandlerFromCourseManagement(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $setText(this.createBtn, 'Crea nuovo corso');
  $add_3(this.buttonvPanel, new Label_1('I TUOI CORSI:'));
  $add_1(this.hPanel, this.coursesListBox);
  $add_3(this.buttonvPanel, this.hPanel);
  $add_1(this.baseHPanel, this.buttonvPanel);
  $add_3(this.buttonvPanel, this.createBtn);
}

defineClass(359, 421, $intern_16, ProfessorListCoursesComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListCoursesComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListCoursesComponent', 359);
function $onSuccess_16(this$static, result){
  var i, list;
  list = $split(result, '\n');
  for (i = 0; i < list.length; i++) {
    $insertItem(this$static.this$01.coursesListBox, list[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesListBox, list.length);
}

function ProfessorListCoursesComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(362, 1, {}, ProfessorListCoursesComponent$1);
_.onSuccess = function onSuccess_22(result){
  $onSuccess_16(this, castToString(result));
}
;
_.onFailure = function onFailure_22(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListCoursesComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListCoursesComponent/1', 362);
function ProfessorListCoursesComponent$CreateCourseBtnHandlerFromCourseManagement(this$0){
  this.this$01 = this$0;
}

defineClass(361, 1, $intern_17, ProfessorListCoursesComponent$CreateCourseBtnHandlerFromCourseManagement);
_.onClick = function onClick_13(event_0){
  var createCourse;
  createCourse = new ProfessorCourseCreationComponent;
  $clear(this.this$01.baseHPanel);
  $add_1(this.this$01.baseHPanel, createCourse);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListCoursesComponent$CreateCourseBtnHandlerFromCourseManagement_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListCoursesComponent/CreateCourseBtnHandlerFromCourseManagement', 361);
function ProfessorListCoursesComponent$ListBoxHandlerFromCourseManagement(this$0){
  this.this$01 = this$0;
}

defineClass(360, 1, $intern_18, ProfessorListCoursesComponent$ListBoxHandlerFromCourseManagement);
_.onDoubleClick = function onDoubleClick_2(event_0){
  $clear(this.this$01.baseHPanel);
  $add_1(this.this$01.baseHPanel, new ProfessorCoursesModifierComponent($getSelectedItemText(this.this$01.coursesListBox)));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListCoursesComponent$ListBoxHandlerFromCourseManagement_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListCoursesComponent/ListBoxHandlerFromCourseManagement', 360);
function ProfessorListExamsComponent(){
  this.baseHPanel = new HorizontalPanel;
  this.vPanel = new VerticalPanel;
  this.coursesListBox = new ListBox;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewProfessorCoursesInfo(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new ProfessorListExamsComponent$1(this));
  $add_3(this.vPanel, new Label_1('GESTIONE ESAME'));
  $addDomHandler(this.coursesListBox, new ProfessorListExamsComponent$ListBoxHandlerFromExamManagement(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_3(this.vPanel, new Label_1('I TUOI CORSI:'));
  $add_3(this.vPanel, this.coursesListBox);
  $add_1(this.baseHPanel, this.vPanel);
}

defineClass(363, 421, $intern_16, ProfessorListExamsComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListExamsComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListExamsComponent', 363);
function $onSuccess_17(this$static, result){
  var i, list;
  list = $split(result, '\n');
  for (i = 0; i < list.length; i++) {
    $insertItem(this$static.this$01.coursesListBox, list[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesListBox, list.length);
}

function ProfessorListExamsComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(365, 1, {}, ProfessorListExamsComponent$1);
_.onSuccess = function onSuccess_23(result){
  $onSuccess_17(this, castToString(result));
}
;
_.onFailure = function onFailure_23(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListExamsComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListExamsComponent/1', 365);
function ProfessorListExamsComponent$ListBoxHandlerFromExamManagement(this$0){
  this.this$01 = this$0;
}

defineClass(364, 1, $intern_18, ProfessorListExamsComponent$ListBoxHandlerFromExamManagement);
_.onDoubleClick = function onDoubleClick_3(event_0){
  $clear(this.this$01.baseHPanel);
  $add_1(this.this$01.baseHPanel, new ProfessorExamModifierComponent($getSelectedItemText(this.this$01.coursesListBox)));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorListExamsComponent$ListBoxHandlerFromExamManagement_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorListExamsComponent/ListBoxHandlerFromExamManagement', 364);
function $retrieveExams_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $retrieveExams(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new ProfessorSendGradesComponent$2(this$static));
}

function $retrieveStudents(this$static, selectedExam){
  !connService && (connService = new ConnService_Proxy);
  $getStudentsExamList(connService, selectedExam, new ProfessorSendGradesComponent$1(this$static));
}

function $sendGrades_0(this$static){
  var gradesList, selectedExam, studentsList;
  gradesList = $split($getText(this$static.gradesArea), '\n');
  studentsList = $split($getText(this$static.studentsArea), '\n');
  selectedExam = $getSelectedItemText(this$static.examsList);
  !connService && (connService = new ConnService_Proxy);
  $sendGrades(connService, selectedExam, studentsList, gradesList, new ProfessorSendGradesComponent$3(this$static));
}

function ProfessorSendGradesComponent(){
  this.vPanel = new VerticalPanel;
  this.subHPanel = new HorizontalPanel;
  this.examsList = new ListBox;
  this.searchExamsButton = new Button_0('cerca esami disponibili');
  this.sendGradesButton = new Button_0('invia i voti');
  this.studentsArea = new TextArea_0;
  this.gradesArea = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_3(this.vPanel, this.searchExamsButton);
  $add_3(this.vPanel, new Label_1("scegli l'esame"));
  $add_3(this.vPanel, this.examsList);
  $add_3(this.vPanel, this.subHPanel);
  $setHeight(this.gradesArea, '200px');
  $setWidth(this.gradesArea, '200px');
  $setHeight(this.studentsArea, '200px');
  $setWidth(this.studentsArea, '200px');
  $add_1(this.subHPanel, this.studentsArea);
  $add_1(this.subHPanel, this.gradesArea);
  $add_1(this.subHPanel, this.sendGradesButton);
  $addDomHandler(this.searchExamsButton, new ProfessorSendGradesComponent$SearchButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.sendGradesButton, new ProfessorSendGradesComponent$SendGradesButtonHandler(this), (null , TYPE));
  $setWidth(this.examsList, '200px');
  $setVisibleItemCount(this.examsList, 5);
  $addDomHandler(this.examsList, new ProfessorSendGradesComponent$ExamsListHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
}

defineClass(366, 421, $intern_16, ProfessorSendGradesComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent', 366);
function $onSuccess_18(this$static, result){
  $setText_1(this$static.this$01.studentsArea, result);
}

function ProfessorSendGradesComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(370, 1, {}, ProfessorSendGradesComponent$1);
_.onSuccess = function onSuccess_24(result){
  $onSuccess_18(this, castToString(result));
}
;
_.onFailure = function onFailure_24(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/1', 370);
function $onSuccess_19(this$static, result){
  var i;
  for (i = 0; i < result.array.length; i++) {
    $insertItem(this$static.this$01.examsList, (checkCriticalElementIndex(i, result.array.length) , castToString(result.array[i])));
  }
  alert_0('esami trovati ' + result.array.length);
}

function ProfessorSendGradesComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(371, 1, {}, ProfessorSendGradesComponent$2);
_.onSuccess = function onSuccess_25(result){
  $onSuccess_19(this, castTo(result, 29));
}
;
_.onFailure = function onFailure_25(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/2', 371);
function $onSuccess_20(this$static){
  $wnd.alert('Inserimento avvenuto.');
  $clear(this$static.this$01.subHPanel);
}

function ProfessorSendGradesComponent$3(this$0){
  this.this$01 = this$0;
}

defineClass(372, 1, {}, ProfessorSendGradesComponent$3);
_.onSuccess = function onSuccess_26(result){
  var lastArg;
  $onSuccess_20((lastArg = this , castToBoolean(result) , lastArg));
}
;
_.onFailure = function onFailure_26(caught){
  $wnd.alert('Error. inserimento fallito.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$3_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/3', 372);
function ProfessorSendGradesComponent$ExamsListHandler(this$0){
  this.this$01 = this$0;
}

defineClass(369, 1, $intern_18, ProfessorSendGradesComponent$ExamsListHandler);
_.onDoubleClick = function onDoubleClick_4(event_0){
  var selectedExam;
  selectedExam = $getSelectedItemText(this.this$01.examsList);
  $retrieveStudents(this.this$01, selectedExam);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$ExamsListHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/ExamsListHandler', 369);
function ProfessorSendGradesComponent$SearchButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(367, 1, $intern_17, ProfessorSendGradesComponent$SearchButtonHandler);
_.onClick = function onClick_14(event_0){
  $retrieveExams_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$SearchButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/SearchButtonHandler', 367);
function ProfessorSendGradesComponent$SendGradesButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(368, 1, $intern_17, ProfessorSendGradesComponent$SendGradesButtonHandler);
_.onClick = function onClick_15(event_0){
  $sendGrades_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorSendGradesComponent$SendGradesButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorSendGradesComponent/SendGradesButtonHandler', 368);
function StudentCoursesInfoComponent(){
  this.hPanel = new HorizontalPanel;
  this.txta = new TextArea_0;
  $initWidget(this, this.hPanel);
  $setCharacterWidth(this.txta);
  $setVisibleLines(this.txta);
  !connService && (connService = new ConnService_Proxy);
  $viewSudentCoursesInfo(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentCoursesInfoComponent$1(this));
  $add_1(this.hPanel, this.txta);
}

defineClass(344, 421, $intern_16, StudentCoursesInfoComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesInfoComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesInfoComponent', 344);
function $onSuccess_21(this$static, result){
  $setText_1(this$static.this$01.txta, result);
}

function StudentCoursesInfoComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(345, 1, {}, StudentCoursesInfoComponent$1);
_.onSuccess = function onSuccess_27(result){
  $onSuccess_21(this, castToString(result));
}
;
_.onFailure = function onFailure_27(caught){
  $wnd.alert('ERROR: Impossibilie visualizzare i corsi');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesInfoComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesInfoComponent/1', 345);
function $retrieveAviableCourses_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $retrieveAviableCourses(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentCoursesSignUpComponent$1(this$static));
}

function StudentCoursesSignUpComponent(){
  this.vPanel = new VerticalPanel;
  this.coursesList = new ListBox;
  this.submitBtn = new Button_0('ISCRIVITI');
  $initWidget(this, this.vPanel);
  !connService && (connService = new ConnService_Proxy);
  $retrieveAviableCourses(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentCoursesSignUpComponent$1(this));
  $add_3(this.vPanel, new Label_1('Elenco corsi disponibili'));
  $add_3(this.vPanel, this.coursesList);
  $addDomHandler(this.submitBtn, new StudentCoursesSignUpComponent$submitBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_3(this.vPanel, this.submitBtn);
}

defineClass(346, 421, $intern_16, StudentCoursesSignUpComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent', 346);
function $onSuccess_22(this$static, result){
  var i;
  this$static.this$01.courses = $split(result, '\n');
  for (i = 0; i < this$static.this$01.courses.length; i++) {
    $insertItem(this$static.this$01.coursesList, this$static.this$01.courses[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesList, $getElement(this$static.this$01.coursesList).options.length);
}

function StudentCoursesSignUpComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(116, 1, {}, StudentCoursesSignUpComponent$1);
_.onSuccess = function onSuccess_28(result){
  $onSuccess_22(this, castToString(result));
}
;
_.onFailure = function onFailure_28(caught){
  $wnd.alert('Impossibile visualizzare i corsi disponibili');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/1', 116);
function StudentCoursesSignUpComponent$submitBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(347, 1, $intern_17, StudentCoursesSignUpComponent$submitBtnHandler);
_.onClick = function onClick_16(event_0){
  !connService && (connService = new ConnService_Proxy);
  $courseRegistration(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getSelectedItemText(this.this$01.coursesList), new StudentCoursesSignUpComponent$submitBtnHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$submitBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/submitBtnHandler', 347);
function $onSuccess_23(this$static){
  $wnd.alert('Iscrizione avvenuta con successo.');
  $getElement(this$static.this$11.this$01.coursesList).options.length = 0;
  $retrieveAviableCourses_0(this$static.this$11.this$01);
}

function StudentCoursesSignUpComponent$submitBtnHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(348, 1, {}, StudentCoursesSignUpComponent$submitBtnHandler$1);
_.onSuccess = function onSuccess_29(result){
  var lastArg;
  $onSuccess_23((lastArg = this , castToBoolean(result) , lastArg));
}
;
_.onFailure = function onFailure_29(caught){
  $wnd.alert('Errore server. Iscrizione fallita.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$submitBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/submitBtnHandler/1', 348);
function $getAvailableExams_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $getAvailableExams(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getSelectedItemText(this$static.coursesLb), new StudentExamsSignUpComponent$3(this$static));
}

function StudentExamsSignUpComponent(){
  this.hPanel = new HorizontalPanel;
  this.vPanel = new VerticalPanel;
  this.examsLb = new Label;
  this.coursesLb = new ListBox;
  this.listSubscribedExamsTa = new TextArea_0;
  this.confirmButton = new Button_0('iscriviti');
  !connService && (connService = new ConnService_Proxy);
  $retrieveSubscribedCourses(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentExamsSignUpComponent$2(this));
  !connService && (connService = new ConnService_Proxy);
  $retrieveSubscribedExams(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentExamsSignUpComponent$1(this));
  $setWidth(this.listSubscribedExamsTa, '220px');
  $setHeight(this.listSubscribedExamsTa, '500px');
  $add_1(this.hPanel, new Label_1('CORSI A CUI SEI ISCRITTO:'));
  $add_1(this.hPanel, this.coursesLb);
  $addDomHandler(this.confirmButton, new StudentExamsSignUpComponent$ConfirmButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.coursesLb, new StudentExamsSignUpComponent$coursesLbHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_3(this.vPanel, this.hPanel);
  $add_3(this.vPanel, new Label_1('ESAMI A CUI SEI ISCRITTO:'));
  $add_3(this.vPanel, this.listSubscribedExamsTa);
  $initWidget(this, this.vPanel);
}

defineClass(349, 421, $intern_16, StudentExamsSignUpComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent', 349);
function $onSuccess_24(this$static, result){
  $setText_1(this$static.this$01.listSubscribedExamsTa, result);
}

function StudentExamsSignUpComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(353, 1, {}, StudentExamsSignUpComponent$1);
_.onSuccess = function onSuccess_30(result){
  $onSuccess_24(this, castToString(result));
}
;
_.onFailure = function onFailure_30(caught){
  $wnd.alert('ERROR: impossibile ottenere lsita esami a cui sei iscritto');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/1', 353);
function $onSuccess_25(this$static, result){
  var courses, i;
  courses = $split(result, '\n');
  for (i = 0; i < courses.length; i++) {
    $insertItem(this$static.this$01.coursesLb, courses[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesLb, $getElement(this$static.this$01.coursesLb).options.length);
}

function StudentExamsSignUpComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(354, 1, {}, StudentExamsSignUpComponent$2);
_.onSuccess = function onSuccess_31(result){
  $onSuccess_25(this, castToString(result));
}
;
_.onFailure = function onFailure_31(caught){
  $wnd.alert('ERROR: impossibile ottenere corsi a cui sei iscritto');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/2', 354);
function $onSuccess_26(this$static, result){
  var examInfoTa;
  if (!$equals_1(result, '') && !$equals_1(result, 'signed')) {
    examInfoTa = new TextArea_0;
    this$static.this$01.examInfo = $split(result, '\n');
    $setText_0(this$static.this$01.examsLb, 'Esame disponibile:\n' + this$static.this$01.examInfo[0]);
    $add_1(this$static.this$01.hPanel, this$static.this$01.examsLb);
    $add_1(this$static.this$01.hPanel, this$static.this$01.confirmButton);
    $setText_1(examInfoTa, 'Data: ' + this$static.this$01.examInfo[1] + '\n' + 'Ora: ' + this$static.this$01.examInfo[2]);
    $add_1(this$static.this$01.hPanel, examInfoTa);
  }
   else if ($equals_1(result, 'signed')) {
    $remove_1(this$static.this$01.hPanel, this$static.this$01.confirmButton);
    $add_1(this$static.this$01.hPanel, this$static.this$01.examsLb);
    $setText_0(this$static.this$01.examsLb, "sei gi\xE0 registrato all'esame " + $getSelectedItemText(this$static.this$01.coursesLb));
  }
   else {
    $remove_1(this$static.this$01.hPanel, this$static.this$01.confirmButton);
    $add_1(this$static.this$01.hPanel, this$static.this$01.examsLb);
    $setText_0(this$static.this$01.examsLb, 'Nessun esame in programma');
  }
}

function StudentExamsSignUpComponent$3(this$0){
  this.this$01 = this$0;
}

defineClass(355, 1, {}, StudentExamsSignUpComponent$3);
_.onSuccess = function onSuccess_32(result){
  $onSuccess_26(this, castToString(result));
}
;
_.onFailure = function onFailure_32(caught){
  $wnd.alert('ERROR: impossibile visualizzare esami');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$3_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/3', 355);
function StudentExamsSignUpComponent$ConfirmButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(351, 1, $intern_17, StudentExamsSignUpComponent$ConfirmButtonHandler);
_.onClick = function onClick_17(event_0){
  !connService && (connService = new ConnService_Proxy);
  $registerStudentInExam(connService, this.this$01.examInfo[0], (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentExamsSignUpComponent$ConfirmButtonHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$ConfirmButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/ConfirmButtonHandler', 351);
function $onSuccess_27(this$static){
  $setText_0(this$static.this$11.this$01.examsLb, 'Iscrizione avvenuta con successo!');
  $remove_1(this$static.this$11.this$01.hPanel, this$static.this$11.this$01.confirmButton);
}

function StudentExamsSignUpComponent$ConfirmButtonHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(352, 1, {}, StudentExamsSignUpComponent$ConfirmButtonHandler$1);
_.onSuccess = function onSuccess_33(result){
  var lastArg;
  $onSuccess_27((lastArg = this , castToBoolean(result) , lastArg));
}
;
_.onFailure = function onFailure_33(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$ConfirmButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/ConfirmButtonHandler/1', 352);
function StudentExamsSignUpComponent$coursesLbHandler(this$0){
  this.this$01 = this$0;
}

defineClass(350, 1, $intern_18, StudentExamsSignUpComponent$coursesLbHandler);
_.onDoubleClick = function onDoubleClick_5(event_0){
  $getAvailableExams_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSignUpComponent$coursesLbHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSignUpComponent/coursesLbHandler', 350);
function $cleanhPanel(this$static){
  $remove_1(this$static.baseVPanel, this$static.adminCreateUserComp);
  $remove_1(this$static.baseVPanel, this$static.studentsListComp);
  $remove_1(this$static.baseVPanel, this$static.professorsListComp);
}

function AdminMenuComponent(){
  this.baseVPanel = new HorizontalPanel;
  this.actionsListBox = new ListBox;
  this.adminCreateUserComp = new AdminCreateUserComponent;
  this.studentsListComp = new AdminStudentsListComponent;
  this.professorsListComp = new AdminProfessorsListComponent;
  $initWidget(this, this.baseVPanel);
  $insertItem(this.actionsListBox, 'crea nuovo account');
  $insertItem(this.actionsListBox, 'gestisci info studenti');
  $insertItem(this.actionsListBox, 'gestisci info docenti');
  $setVisibleItemCount(this.actionsListBox, 3);
  $addDomHandler(this.actionsListBox, new AdminMenuComponent$actionsListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_1(this.baseVPanel, this.actionsListBox);
}

defineClass(291, 421, $intern_16, AdminMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_AdminMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'AdminMenuComponent', 291);
function AdminMenuComponent$actionsListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(292, 1, $intern_18, AdminMenuComponent$actionsListBoxHandler);
_.onDoubleClick = function onDoubleClick_6(event_0){
  var userchoice;
  $cleanhPanel(this.this$01);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      $add_1(this.this$01.baseVPanel, this.this$01.adminCreateUserComp);
      break;
    case 1:
      $add_1(this.this$01.baseVPanel, this.this$01.studentsListComp);
      break;
    case 2:
      $add_1(this.this$01.baseVPanel, this.this$01.professorsListComp);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_AdminMenuComponent$actionsListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'AdminMenuComponent/actionsListBoxHandler', 292);
function ProfessorMenuComponent(){
  this.basePanel = new HorizontalPanel;
  this.vPanel = new VerticalPanel;
  this.actionsListBox = new ListBox;
  $initWidget(this, this.basePanel);
  $addDomHandler(this.actionsListBox, new ProfessorMenuComponent$ListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $insertItem(this.actionsListBox, 'gestisci corsi');
  $insertItem(this.actionsListBox, 'gestisci esame');
  $insertItem(this.actionsListBox, 'invia voti esami');
  $insertItem(this.actionsListBox, 'visualizza informazioni personali');
  $setVisibleItemCount(this.actionsListBox, 4);
  $add_1(this.basePanel, this.actionsListBox);
  $add_1(this.basePanel, this.vPanel);
}

defineClass(287, 421, $intern_16, ProfessorMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_ProfessorMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'ProfessorMenuComponent', 287);
function ProfessorMenuComponent$ListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(288, 1, $intern_18, ProfessorMenuComponent$ListBoxHandler);
_.onDoubleClick = function onDoubleClick_7(event_0){
  var courseList, examList, userchoice;
  $clear(this.this$01.vPanel);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      courseList = new ProfessorListCoursesComponent;
      $add_3(this.this$01.vPanel, courseList);
      break;
    case 1:
      examList = new ProfessorListExamsComponent;
      $add_3(this.this$01.vPanel, examList);
      break;
    case 2:
      this.this$01.sendGradesView = new ProfessorSendGradesComponent;
      $add_3(this.this$01.vPanel, this.this$01.sendGradesView);
      break;
    case 3:
      this.this$01.infoView = new PersonalInfoComponent;
      $add_3(this.this$01.vPanel, this.this$01.infoView);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_ProfessorMenuComponent$ListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'ProfessorMenuComponent/ListBoxHandler', 288);
function $clearPanel(this$static){
  $remove_4(this$static.vPanel, this$static.infoStudentView);
  $remove_4(this$static.vPanel, this$static.approveGradesView);
}

function SecretaryMenuComponent(){
  this.vPanel = new VerticalPanel;
  this.actionsListBox = new ListBox;
  this.infoStudentView = new InfoStudentListComponent;
  this.approveGradesView = new ApproveGradesComponent;
  $initWidget(this, this.vPanel);
  $insertItem(this.actionsListBox, 'visualizza i dati degli studenti');
  $insertItem(this.actionsListBox, 'pubblica voti esame');
  $setVisibleItemCount(this.actionsListBox, 3);
  $addDomHandler(this.actionsListBox, new SecretaryMenuComponent$actionsListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_3(this.vPanel, this.actionsListBox);
}

defineClass(289, 421, $intern_16, SecretaryMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_SecretaryMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'SecretaryMenuComponent', 289);
function SecretaryMenuComponent$actionsListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(290, 1, $intern_18, SecretaryMenuComponent$actionsListBoxHandler);
_.onDoubleClick = function onDoubleClick_8(event_0){
  var userchoice;
  $clearPanel(this.this$01);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      $add_3(this.this$01.vPanel, this.this$01.infoStudentView);
      break;
    case 1:
      $add_3(this.this$01.vPanel, this.this$01.approveGradesView);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_SecretaryMenuComponent$actionsListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'SecretaryMenuComponent/actionsListBoxHandler', 290);
function StudentMenuComponent(){
  this.basePanel = new VerticalPanel;
  this.vPanel = new VerticalPanel;
  this.actionsListBox = new ListBox;
  $initWidget(this, this.basePanel);
  $insertItem(this.actionsListBox, 'visualizza lista corsi disponibili');
  $insertItem(this.actionsListBox, 'iscriviti ad un corso');
  $insertItem(this.actionsListBox, 'registrati ad un esame');
  $insertItem(this.actionsListBox, 'visualizza le tue informazioni personali');
  $insertItem(this.actionsListBox, 'visualizza i tuoi voti');
  $setVisibleItemCount(this.actionsListBox, 5);
  $addDomHandler(this.actionsListBox, new StudentMenuComponent$ActionsListBoxDCHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_3(this.basePanel, this.actionsListBox);
  $add_3(this.basePanel, this.vPanel);
}

defineClass(285, 421, $intern_16, StudentMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_StudentMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'StudentMenuComponent', 285);
function StudentMenuComponent$ActionsListBoxDCHandler(this$0){
  this.this$01 = this$0;
}

defineClass(286, 1, $intern_18, StudentMenuComponent$ActionsListBoxDCHandler);
_.onDoubleClick = function onDoubleClick_9(event_0){
  var userchoice;
  $clear(this.this$01.vPanel);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      this.this$01.coursesListView = new StudentCoursesInfoComponent;
      $add_3(this.this$01.vPanel, this.this$01.coursesListView);
      break;
    case 1:
      this.this$01.courseSignUpView = new StudentCoursesSignUpComponent;
      $add_3(this.this$01.vPanel, this.this$01.courseSignUpView);
      break;
    case 2:
      this.this$01.examView = new StudentExamsSignUpComponent;
      $add_3(this.this$01.vPanel, this.this$01.examView);
      break;
    case 3:
      this.this$01.infoView = new PersonalInfoComponent;
      $add_3(this.this$01.vPanel, this.this$01.infoView);
      break;
    case 4:
      this.this$01.gradesView = new GradesViewComponent;
      $add_3(this.this$01.vPanel, this.this$01.gradesView);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_StudentMenuComponent$ActionsListBoxDCHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'StudentMenuComponent/ActionsListBoxDCHandler', 286);
function $clinit_UserState(){
  $clinit_UserState = emptyMethod;
  STUDENT = new UserState('STUDENT', 0);
  PROFESSOR = new UserState('PROFESSOR', 1);
  SECRETARY = new UserState('SECRETARY', 2);
  ADMIN = new UserState('ADMIN', 3);
  WRONG_PASSWORD = new UserState('WRONG_PASSWORD', 4);
  NOT_SIGNED = new UserState('NOT_SIGNED', 5);
}

function UserState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_UserState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit, 1), $intern_1, 39, 0, [STUDENT, PROFESSOR, SECRETARY, ADMIN, WRONG_PASSWORD, NOT_SIGNED]);
}

defineClass(39, 16, {39:1, 3:1, 15:1, 16:1}, UserState);
var ADMIN, NOT_SIGNED, PROFESSOR, SECRETARY, STUDENT, WRONG_PASSWORD;
var Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit = createForEnum('com.google.gwt.sample.progettoingegneria.shared', 'UserState', 39, Ljava_lang_Enum_2_classLit, values_3);
function deserialize(streamReader, instance){
}

function instantiate(streamReader){
  var ordinal, values;
  ordinal = streamReader.results[--streamReader.index_0];
  values = ($clinit_UserState() , stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit, 1), $intern_1, 39, 0, [STUDENT, PROFESSOR, SECRETARY, ADMIN, WRONG_PASSWORD, NOT_SIGNED]));
  return values[ordinal];
}

defineClass(436, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 436);
function PassthroughParser(){
}

defineClass(341, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 341);
function PassthroughRenderer(){
}

defineClass(340, 436, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 340);
defineClass(195, 1, {21:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper', 195);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1('CSS1Compat', allowedModes[0]) && $equals_1('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents_0(elem){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, 32768);
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  var lastArg;
  if (!closeHandlersInitialized) {
    $initHandler((lastArg = 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n' , lastArg));
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_1((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_4 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(166, 428, {}, Window$ClosingEvent);
_.dispatch = function dispatch_4(handler){
  checkCriticalType(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_4;
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 166);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(104, 79, {8:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 104);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_19;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_12;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_13;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_20;
    case 'gesturechange':
      return $intern_21;
    case 'gestureend':
      return $intern_22;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 11)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $getChildIndex(parent_0, toFind){
  var count = 0, child = parent_0.firstChild;
  while (child) {
    if (child === toFind) {
      return count;
    }
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return -1;
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals_1('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_19 && (elem.onerror = bits & $intern_19?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_12 && (elem.onpaste = bits & $intern_12?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_13 && (elem.ontouchend = bits & $intern_13?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_20 && (elem.ongesturestart = bits & $intern_20?dispatchEvent_1:null);
  chMask & $intern_21 && (elem.ongesturechange = bits & $intern_21?dispatchEvent_1:null);
  chMask & $intern_22 && (elem.ongestureend = bits & $intern_22?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initHandler(initFunc){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
  $removeChild($doc.body, scriptElem);
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(84, 14, $intern_2, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 84);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_0(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(72, 14, $intern_2, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 72);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', ($clinit_Impl() , $strongName));
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(339, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 339);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(295, 14, $intern_2, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 295);
function deserialize_1(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_1(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(17, 59, {17:1, 3:1, 9:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 17);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(281, 72, $intern_2, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 281);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(375, 72, $intern_2, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 375);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.$_nullField);
}

function serialize_1(streamWriter, instance){
  var i, n;
  $writeInt(streamWriter, instance.length);
  for (i = 0 , n = instance.length; i < n; ++i) {
    $writeString(streamWriter, instance[i]);
  }
}

function deserialize_2(streamReader, instance){
}

function instantiate_2(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}

function serialize_2(streamWriter, instance){
  $append(streamWriter, '' + $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_3(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function serialize_3(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function instantiate_3(streamReader){
  return new ArrayList;
}

function deserialize_4(streamReader, instance){
  var i, obj, size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    instance.array[instance.array.length] = obj;
  }
}

function serialize_4(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.array.length;
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = new ArrayList$1(instance); obj$iterator.i < obj$iterator.this$01.array.length;) {
    obj = $next_2(obj$iterator);
    $writeObject(streamWriter, obj);
  }
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

function base64Value(digit){
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}

function longFromBase64(value_0){
  var len, longVal, pos;
  pos = 0;
  longVal = base64Value($charAt(value_0, pos++));
  len = value_0.length;
  while (pos < len) {
    longVal = createLongEmul(shl(isSmallLong0(longVal)?toBigLong(longVal):longVal, 6));
    longVal = or_0(longVal, base64Value($charAt(value_0, pos++)));
  }
  return longVal;
}

defineClass(114, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 114);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = this$static.results[--this$static.index_0];
  if (token < 0) {
    return $get_1(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_5(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set_0(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(399, 114, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 399);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 50);
  if (o) {
    return o.value_0;
  }
  $add_5(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf_1(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $append(this$static, '' + $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?castTo($get_0(this$static.objectMap, instance), 50).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf_1(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw toJs(new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance)));
  }
  $append(this$static, '' + $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $append(this$static, '' + $addString(this$static, value_0));
}

defineClass(336, 114, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 336);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  var versionStr, pos;
  (versionStr = $substring_0(encoded, encoded.lastIndexOf(',') + 1, encoded.lastIndexOf(']')) , pos = versionStr.lastIndexOf('[') , pos >= 0 && (versionStr = versionStr.substr(pos + 1)) , __parseAndValidateInt($trim(versionStr))) < 8?(this$static.results = eval(encoded)):(this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  $setVersion(this$static, this$static.results[--this$static.index_0]);
  $setFlags(this$static, this$static.results[--this$static.index_0]);
  if (this$static.version < 5 || this$static.version > 8) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got version ' + this$static.version + ', expected version between ' + 5 + ' and ' + 8));
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags));
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(400, 399, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 400);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 16)) {
    e = castTo(o, 16);
    clazz = (clazz_0 = e.___clazz , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_1(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_1(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new ArrayList$1(stringTable); s$iterator.i < s$iterator.this$01.array.length;) {
    s = castToString($next_2(s$iterator));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += '' + token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(337, 336, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_12(){
  return $toString_1(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 337);
function $finish_0(this$static, callback, responseHeader){
  var payload;
  payload = $toString_1(this$static.streamWriter);
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, responseHeader, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function $start(this$static, paramCount){
  var toReturn;
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'begin'));
  this$static.streamWriter = (toReturn = $createStreamWriter(this$static.this$01) , toReturn);
  $writeString(this$static.streamWriter, 'com.google.gwt.sample.progettoingegneria.client.ConnService');
  $writeString(this$static.streamWriter, this$static.methodName);
  $writeInt(this$static.streamWriter, paramCount);
  return this$static.streamWriter;
}

function RemoteServiceProxy$ServiceHelper(this$0, methodName){
  this.this$01 = this$0;
  this.fullServiceName = 'ConnService_Proxy.' + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext;
}

defineClass(20, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 20);
function $onError(this$static, exception){
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode, statusCode0;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode0 = (statusCode = response.xmlHttpRequest.status , statusCode == 1223?204:statusCode);
    !!$stats && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode0 != 200?(caught = new StatusCodeException(statusCode0, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals_1(encodedResponse.substr(0, 4), '//OK')?(result = this$static.responseReader.read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals_1(encodedResponse.substr(0, 4), '//EX')?(caught = castTo($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 9)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 9)) {
      e = $e0;
      caught = e;
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?this$static.callback.onSuccess(result):this$static.callback.onFailure(caught);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback, responseReader){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
  this.responseReader = responseReader;
}

defineClass(301, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 301);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_1, 24, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(24, 16, $intern_23);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 24, Ljava_lang_Enum_2_classLit, values_4);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(302, 24, $intern_23, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader){
  return $clinit_Boolean() , streamReader.results[--streamReader.index_0]?true:false;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 302, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(311, 24, $intern_23, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 311, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(312, 24, $intern_23, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader){
  return null;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 312, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(303, 24, $intern_23, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 303, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(304, 24, $intern_23, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader){
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 304, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(305, 24, $intern_23, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader){
  return Number(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 305, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(306, 24, $intern_23, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader){
  return new Float(Number(streamReader.results[--streamReader.index_0]));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 306, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(307, 24, $intern_23, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader){
  return valueOf_1(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 307, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(308, 24, $intern_23, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader){
  var s;
  return valueOf_2((s = streamReader.results[--streamReader.index_0] , longFromBase64(s)));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 308, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(309, 24, $intern_23, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader){
  return $readObject(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 309, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(310, 24, $intern_23, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader){
  return valueOf_3(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 310, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:($clinit_Impl() , $moduleName), sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(113, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 113);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children);
  while (it.index_0 < it.this$01.size_0) {
    $next_0(it);
    $remove_7(it);
  }
}

defineClass(422, 5, $intern_24);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 422);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForAccess(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.children.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getWidget(this$static, index_0){
  return $get(this$static.children, index_0);
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_2(this$static.children, child, beforeIndex);
  domInsert?insertChild(container, ($clinit_DOM() , child.element), beforeIndex):($clinit_DOM() , $appendChild(container, resolve(child.element)));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_6(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(89, 422, $intern_24);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 89);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(134, 89, $intern_24);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 134);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_0(), 5);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(135, 100, $intern_6, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 135);
function AttachDetachException$1(){
}

defineClass(136, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_3(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 136);
function AttachDetachException$2(){
}

defineClass(137, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_4(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 137);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(92, 5, $intern_16);
_.onAttach = function onAttach_1(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 92);
function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(176, 92, $intern_16);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 176);
function Button(){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
}

function Button_0(html){
  Button.call(this);
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(25, 176, $intern_16, Button, Button_0);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 25);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $clinit_DOM() , $clinit_DOM() , $getParentElement(w.element);
}

function $setCellHorizontalAlignment(td, align_0){
  ($clinit_DOM() , td)['align'] = align_0.textAlignString;
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  td.style['verticalAlign'] = align_0.verticalAlignString;
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(101, 89, $intern_24);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 101);
function $remove_0(this$static, w){
  var container, removed;
  container = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this$static, w);
  if (removed) {
    w.element.style['width'] = '';
    w.element.style['height'] = '';
    setVisible(w.element, true);
    $removeChild(this$static.element, container);
    this$static.visibleWidget == w && (this$static.visibleWidget = null);
  }
  return removed;
}

function $showWidget(this$static, index_0){
  var oldWidget;
  $checkIndexBoundsForAccess(this$static, index_0);
  oldWidget = this$static.visibleWidget;
  this$static.visibleWidget = $get(this$static.children, index_0);
  if (this$static.visibleWidget != oldWidget) {
    !slideAnimation && (slideAnimation = new DeckPanel$SlideAnimation);
    $showWidget_0(slideAnimation, oldWidget, this$static.visibleWidget);
  }
}

defineClass(178, 89, $intern_24);
_.remove = function remove_1(w){
  return $remove_0(this, w);
}
;
var slideAnimation;
var Lcom_google_gwt_user_client_ui_DeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel', 178);
function $onComplete(this$static){
  if (this$static.growing) {
    this$static.container1.style['height'] = '100%';
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, false);
    this$static.container2.style['height'] = '100%';
  }
   else {
    setVisible(this$static.container1, false);
    this$static.container1.style['height'] = '100%';
    this$static.container2.style['height'] = '100%';
    setVisible(this$static.container2, true);
  }
  this$static.container1.style['overflow'] = 'visible';
  this$static.container2.style['overflow'] = 'visible';
  this$static.container1 = null;
  this$static.container2 = null;
  $setVisible(this$static.oldWidget);
  this$static.oldWidget = null;
}

function $onUpdate(this$static, progress){
  var height1, height2;
  this$static.growing || (progress = 1 - progress);
  if (this$static.fixedHeight == -1) {
    height1 = round_int(progress * $getPropertyInt(this$static.container1, 'scrollHeight'));
    height2 = round_int((1 - progress) * $getPropertyInt(this$static.container2, 'scrollHeight'));
  }
   else {
    height1 = round_int(progress * this$static.fixedHeight);
    height2 = this$static.fixedHeight - height1;
  }
  if (height1 == 0) {
    height1 = 1;
    height2 = $wnd.Math.max(1, height2 - 1);
  }
   else if (height2 == 0) {
    height2 = 1;
    height1 = $wnd.Math.max(1, height1 - 1);
  }
  this$static.container1.style['height'] = height1 + 'px';
  this$static.container2.style['height'] = height2 + 'px';
}

function $showWidget_0(this$static, oldWidget, newWidget){
  var newContainer, newIndex, oldContainer, oldIndex;
  $cancel(this$static);
  newContainer = ($clinit_DOM() , $clinit_DOM() , $getParentElement(newWidget.element));
  newIndex = $getChildIndex($getParentElement(newContainer), newContainer);
  if (!oldWidget) {
    setVisible(newContainer, true);
    setVisible(newWidget.element, true);
    return;
  }
  this$static.oldWidget = oldWidget;
  oldContainer = (null , $getParentElement(oldWidget.element));
  oldIndex = $getChildIndex($getParentElement(oldContainer), oldContainer);
  if (newIndex > oldIndex) {
    this$static.container1 = oldContainer;
    this$static.container2 = newContainer;
    this$static.growing = false;
  }
   else {
    this$static.container1 = newContainer;
    this$static.container2 = oldContainer;
    this$static.growing = true;
  }
  setVisible(this$static.container1, this$static.growing);
  setVisible(this$static.container2, !this$static.growing);
  this$static.container1 = null;
  this$static.container2 = null;
  $setVisible(this$static.oldWidget);
  this$static.oldWidget = null;
  setVisible(newWidget.element, true);
}

function DeckPanel$SlideAnimation(){
  Animation_0.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

defineClass(182, 106, {}, DeckPanel$SlideAnimation);
_.container1 = null;
_.container2 = null;
_.fixedHeight = -1;
_.growing = false;
_.oldWidget = null;
var Lcom_google_gwt_user_client_ui_DeckPanel$SlideAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel/SlideAnimation', 182);
function $getTextOrHtml(this$static){
  var elem;
  elem = this$static.isSpanWrapped?$getFirstChildElement(this$static.element):this$static.element;
  return elem.textContent;
}

function $setTextOrHtml(this$static, content_0, isHtml){
  this$static.isSpanWrapped = false;
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.isSpanWrapped = false;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(194, 1, {}, DirectionalTextHelper);
_.isSpanWrapped = false;
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 194);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(81, 5, $intern_16);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 81);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
}

function Label_0(element){
  var lastArg;
  LabelBase.call(this, (lastArg = element , $equalsIgnoreCase('span', element.tagName) , lastArg));
}

function Label_1(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(4, 81, $intern_16, Label, Label_1);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 4);
function HTML(html){
  Label_0.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-HTML';
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

function HTML_0(){
  HTML.call(this, '&nbsp;');
  ($clinit_DOM() , this.element).style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal');
}

defineClass(53, 4, $intern_16, HTML, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 53);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  ALIGN_BOTTOM = new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_BOTTOM, ALIGN_TOP;
defineClass(423, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 423);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(78, 423, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 78);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(90, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 90);
function $add_1(this$static, w){
  var td;
  td = $createAlignedTd(this$static);
  $clinit_DOM();
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $createAlignedTd(this$static){
  var td;
  td = ($clinit_DOM() , $doc.createElement('td'));
  $setCellHorizontalAlignment(td, this$static.horzAlign);
  $setCellVerticalAlignment(td, this$static.vertAlign);
  return td;
}

function $insert_0(this$static, w, beforeIndex){
  var td;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  td = $createAlignedTd(this$static);
  insertChild(this$static.tableRow, td, beforeIndex);
  $insert(this$static, w, ($clinit_DOM() , td), beforeIndex, false);
}

function $remove_1(this$static, w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this$static, w);
  removed && $removeChild(this$static.tableRow, td);
  return removed;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(26, 101, $intern_24, HorizontalPanel);
_.remove = function remove_2(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 26);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setUrl(this$static, url_0){
  !!this$static.state && (($clinit_DOM() , this$static.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

defineClass(56, 5, $intern_16, Image_0);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && (this.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 56);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals_1('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(143, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 143);
function $execute_0(this$static){
  var evt, evt_0;
  if (this$static.val$image2.state != this$static.this$11 || this$static != this$static.this$11.syntheticEventCommand) {
    return;
  }
  this$static.this$11.syntheticEventCommand = null;
  if (!this$static.val$image2.attached) {
    $getImageElement(this$static.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this$static.val$image2), evt);
}

function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(145, 1, {}, Image$State$1);
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 145);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function $setUrl_0(image, url_0){
  !!image.state && (($clinit_DOM() , image.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}

function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents_0(($clinit_DOM() , image.element));
  image.eventsToSink == -1?sinkEvents(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

defineClass(144, 143, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 144);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= ($clinit_DOM() , this$static.element).options.length) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getOptionText(option){
  var text_0;
  text_0 = option.text;
  option.hasAttribute('bidiwrapped') && text_0.length > 1 && (text_0 = $substring_0(text_0, 1, text_0.length - 1));
  return text_0;
}

function $getSelectedItemText(this$static){
  var index_0;
  index_0 = ($clinit_DOM() , this$static.element).selectedIndex;
  return index_0 == -1?null:($checkIndex(this$static, index_0) , $getOptionText(this$static.element.options[index_0]));
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    select.add(option, null);
  }
   else {
    before = select.options[index_0];
    select.add(option, before);
  }
}

function $setVisibleItemCount(this$static, visibleItems){
  $setSize(($clinit_DOM() , this$static.element), visibleItems);
}

function ListBox(){
  FocusWidget.call(this, $doc.createElement('select'));
  ($clinit_DOM() , this.element).className = 'gwt-ListBox';
}

defineClass(32, 92, $intern_16, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 32);
defineClass(196, 195, {21:1});
var Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper', 196);
function ListenerWrapper$WrappedTabListener(listener){
  this.listener = listener;
}

function add_3(source, listener){
  var t;
  t = new ListenerWrapper$WrappedTabListener(listener);
  $addHandler_0(source, t, (!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1));
  $addHandler_0(source, t, (!TYPE_3 && (TYPE_3 = new GwtEvent$Type) , TYPE_3));
}

defineClass(197, 196, {444:1, 443:1, 21:1}, ListenerWrapper$WrappedTabListener);
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTabListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedTabListener', 197);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_10(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(){
  $clinit_RootPanel();
  var rp;
  rp = castTo($get_0(rootPanels, null), 77);
  if (rp) {
    return rp;
  }
  if ($size(rootPanels) == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_6(widgetsToDetach, rp);
  return rp;
}

defineClass(77, 134, $intern_25);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 77);
function RootPanel$1(){
}

defineClass(139, 1, {}, RootPanel$1);
_.execute_1 = function execute_5(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 139);
function RootPanel$2(){
}

defineClass(140, 1, {440:1, 21:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 140);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(138, 77, $intern_25, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 138);
function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(($clinit_DOM() , this$static.element), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  $removeFromParent(w);
  !!this$static.widget && $remove_2(this$static, this$static.widget);
  this$static.widget = w;
  $clinit_DOM();
  $appendChild(this$static.element, resolve($getElement(this$static.widget)));
  $setParent(w, this$static);
}

function SimplePanel(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(198, 422, $intern_24, SimplePanel);
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_3(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 198);
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(199, 1, {}, SimplePanel$1);
_.next_0 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasElement;
}
;
_.hasElement = false;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 199);
function $checkInsertBeforeTabIndex(this$static, beforeIndex){
  if (beforeIndex < 0 || beforeIndex > this$static.panel.children.size_0 - 2) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $checkTabIndex(this$static, index_0){
  if (index_0 < -1 || index_0 >= this$static.panel.children.size_0 - 2) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $insertTab(this$static, text_0, beforeIndex){
  var item_0, delWidget, focusablePanel;
  $checkInsertBeforeTabIndex(this$static, beforeIndex);
  item_0 = new Label_1(text_0);
  ($clinit_DOM() , item_0.element).style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $checkInsertBeforeTabIndex(this$static, beforeIndex);
  delWidget = new TabBar$ClickDelegatePanel(this$static, item_0);
  delWidget.element.className = 'gwt-TabBarItem';
  focusablePanel = delWidget.focusablePanel;
  $clinit_Roles();
  $set(TAB, focusablePanel.element);
  $insert_0(this$static.panel, delWidget, beforeIndex + 1);
  setStyleName($getParentElement(delWidget.element), 'gwt-TabBarItem-wrapper', true);
}

function $removeTab(this$static, index_0){
  var toRemove;
  $checkTabIndex(this$static, index_0);
  toRemove = $getWidget(this$static.panel, index_0 + 1);
  toRemove == this$static.selectedTab && (this$static.selectedTab = null);
  $remove_1(this$static.panel, toRemove);
}

function $selectTab(this$static, index_0){
  var event_0;
  $checkTabIndex(this$static, index_0);
  event_0 = fire_0(this$static, valueOf_1(index_0));
  if (!!event_0 && event_0.canceled) {
    return false;
  }
  $setSelectionStyle(this$static.selectedTab, false);
  if (index_0 == -1) {
    this$static.selectedTab = null;
    return true;
  }
  this$static.selectedTab = $getWidget(this$static.panel, index_0 + 1);
  $setSelectionStyle(this$static.selectedTab, true);
  fire_2(this$static, valueOf_1(index_0));
  return true;
}

function $selectTabByTabWidget(this$static, tabWidget){
  var i, numTabs;
  numTabs = this$static.panel.children.size_0 - 1;
  for (i = 1; i < numTabs; ++i) {
    if ($getWidget(this$static.panel, i) == tabWidget) {
      return $selectTab(this$static, i - 1);
    }
  }
  return false;
}

function $setSelectionStyle(item_0, selected){
  if (item_0) {
    if (selected) {
      setStyleName(($clinit_DOM() , item_0.element), 'gwt-TabBarItem-selected', true);
      setStyleName((null , $getParentElement(item_0.element)), 'gwt-TabBarItem-wrapper-selected', true);
    }
     else {
      setStyleName(($clinit_DOM() , item_0.element), 'gwt-TabBarItem-selected', false);
      setStyleName((null , $getParentElement(item_0.element)), 'gwt-TabBarItem-wrapper-selected', false);
    }
  }
}

defineClass(180, 421, $intern_26);
var Lcom_google_gwt_user_client_ui_TabBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabBar', 180);
function TabBar$ClickDelegatePanel(this$0, child){
  var e;
  this.this$01 = this$0;
  this.focusablePanel = new SimplePanel((e = $doc.createElement('div') , e.tabIndex = 0 , undefined , e));
  $setWidget(this.focusablePanel, child);
  $initWidget(this, this.focusablePanel);
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this.element, 129 | (this.element.__eventBits || 0))):(this.eventsToSink |= 129);
}

defineClass(184, 421, $intern_16, TabBar$ClickDelegatePanel);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  if (!this.enabled) {
    return;
  }
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      $selectTabByTabWidget(this.this$01, this);
      break;
    case 128:
      ((event_0.keyCode | 0) & $intern_3) == 13 && $selectTabByTabWidget(this.this$01, this);
  }
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.enabled = true;
var Lcom_google_gwt_user_client_ui_TabBar$ClickDelegatePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabBar/ClickDelegatePanel', 184);
function $add_2(this$static, w, tabText){
  $insert_1(this$static, w, tabText, this$static.deck.children.size_0);
}

function $insert_1(this$static, widget, tabText, beforeIndex){
  $insertProtected(this$static.deck, widget, tabText, beforeIndex);
}

function $onTabSelected(this$static, tabIndex){
  $showWidget(this$static.deck, tabIndex);
  fire_2(this$static, valueOf_1(tabIndex));
}

function TabPanel(){
  var panel, td;
  this.tabBar = new TabPanel$UnmodifiableTabBar;
  this.deck = new TabPanel$TabbedDeckPanel(this.tabBar);
  panel = new VerticalPanel;
  $add_3(panel, this.tabBar);
  $add_3(panel, this.deck);
  td = $getWidgetTd(panel, this.deck);
  !!td && (td['height'] = '100%' , undefined);
  $setWidth(this.tabBar, '100%');
  add_3(this.tabBar, this);
  $initWidget(this, panel);
  ($clinit_DOM() , this.element).className = 'gwt-TabPanel';
  $setStyleName(this.deck);
  $clinit_Roles();
  $set(TABPANEL, $getElement(this.deck));
}

defineClass(177, 421, {12:1, 8:1, 11:1, 10:1, 36:1, 13:1, 96:1, 6:1, 5:1}, TabPanel);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this.deck.children);
}
;
_.remove = function remove_4(widget){
  return $remove_3(this.deck, widget);
}
;
var Lcom_google_gwt_user_client_ui_TabPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabPanel', 177);
function $insertProtected(this$static, w, tabText, beforeIndex){
  var idx, container, container_0, element;
  idx = $indexOf(this$static.children, w);
  if (idx != -1) {
    $remove_3(this$static, w);
    idx < beforeIndex && --beforeIndex;
  }
  $insertTab(this$static.tabBar, tabText, beforeIndex);
  container = (container_0 = ($clinit_DOM() , $doc.createElement('div')) , container_0.style['width'] = '100%' , container_0.style['height'] = '0px' , container_0.style['padding'] = '0px' , container_0.style['margin'] = '0px' , container_0);
  insertChild(this$static.element, container, beforeIndex);
  $insert(this$static, w, container, beforeIndex, true);
  setVisible(container, false);
  container.style['height'] = '100%';
  element = w.element;
  $equals_1(element.style['width'], '') && (w.element.style['width'] = '100%' , undefined);
  $equals_1(element.style['height'], '') && (w.element.style['height'] = '100%' , undefined);
  setVisible(w.element, false);
}

function $remove_3(this$static, w){
  var idx;
  idx = $indexOf(this$static.children, w);
  if (idx != -1) {
    $removeTab(this$static.tabBar, idx);
    return $remove_0(this$static, w);
  }
  return false;
}

function TabPanel$TabbedDeckPanel(tabBar){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , $doc.createElement('div')));
  this.tabBar = tabBar;
}

defineClass(179, 178, $intern_24, TabPanel$TabbedDeckPanel);
_.remove = function remove_5(w){
  return $remove_3(this, w);
}
;
var Lcom_google_gwt_user_client_ui_TabPanel$TabbedDeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabPanel/TabbedDeckPanel', 179);
function TabPanel$UnmodifiableTabBar(){
  var first, rest, td0, td;
  this.panel = new HorizontalPanel;
  $initWidget(this, this.panel);
  this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  ($clinit_DOM() , this.element).className = 'gwt-TabBar';
  $clinit_Roles();
  $set(TABLIST, $getElement(this.panel));
  $setVerticalAlignment(this.panel, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
  first = new HTML_0;
  rest = new HTML_0;
  first.element.className = 'gwt-TabBarFirst';
  rest.element.className = 'gwt-TabBarRest';
  first.element.style['height'] = '100%';
  rest.element.style['height'] = '100%';
  $add_1(this.panel, first);
  $add_1(this.panel, rest);
  first.element.style['height'] = '100%';
  td0 = $getWidgetTd(this.panel, first);
  !!td0 && (td0['height'] = '100%' , undefined);
  td = $getWidgetTd(this.panel, rest);
  !!td && (td['width'] = '100%' , undefined);
  $getParentElement(first.element).className = 'gwt-TabBarFirst-wrapper';
  $getParentElement(rest.element).className = 'gwt-TabBarRest-wrapper';
}

defineClass(181, 180, $intern_26, TabPanel$UnmodifiableTabBar);
var Lcom_google_gwt_user_client_ui_TabPanel$UnmodifiableTabBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabPanel/UnmodifiableTabBar', 181);
function $getText(this$static){
  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');
}

function $setText_1(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(296, 92, $intern_16);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 296);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  var lastArg;
  ValueBoxBase.call(this, (lastArg = elem , !INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , lastArg));
}

defineClass(111, 296, $intern_16);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 111);
function $setCharacterWidth(this$static){
  ($clinit_DOM() , this$static.element).cols = 150;
}

function $setVisibleLines(this$static){
  ($clinit_DOM() , this$static.element).rows = 30;
}

function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  ($clinit_DOM() , this.element).className = 'gwt-TextArea';
}

defineClass(33, 111, $intern_16, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 33);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  TextBoxBase.call(this, element);
  ($clinit_DOM() , this.element).className = 'gwt-TextBox';
}

defineClass(22, 111, $intern_16, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 22);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_1, 40, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(40, 16, $intern_27);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 40, Ljava_lang_Enum_2_classLit, values_5);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(297, 40, $intern_27, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 297, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(298, 40, $intern_27, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 298, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(299, 40, $intern_27, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 299, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(300, 40, $intern_27, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 300, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_3(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $remove_4(this$static, w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this$static, w);
  removed && $removeChild(this$static.body_0, $getParentElement(td));
  return removed;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  ($clinit_DOM() , this.table)['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(19, 101, $intern_24, VerticalPanel);
_.remove = function remove_6(w){
  return $remove_4(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 19);
function $add_4(this$static, w){
  $insert_2(this$static, w, this$static.size_0);
}

function $get(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_2(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 5, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_5(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_6(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_5(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 5, 4, 0, 1);
}

defineClass(175, 1, {}, WidgetCollection);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 175);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_7(this$static){
  if (!this$static.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(80, 1, {}, WidgetCollection$WidgetIterator);
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 80);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1('ie9', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(48, 9, $intern_28);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 48);
defineClass(28, 48, $intern_28);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 28);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_9('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9):null);
}

defineClass(121, 28, $intern_28, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 121);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function SimpleEventBus$1(){
}

defineClass(170, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 170);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(171, 1, {442:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 171);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(87, 1, {126:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 87);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(142, 14, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 142);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 14, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 34);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(274, 34, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 274);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(141, 14, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 141);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {3:1, 127:1, 15:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 127);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_9;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(55, 1, {3:1, 55:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 55);
function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues)[rebase];
  !result && (result = boxedValues[rebase] = new Byte(b));
  return result;
}

defineClass(66, 55, {3:1, 66:1, 15:1, 55:1}, Byte);
_.equals_0 = function equals_3(o){
  return instanceOf(o, 66) && castTo(o, 66).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_5(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 66);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Byte_2_classLit, $intern_1, 66, 256, 0, 1);
}

var boxedValues;
function Character(value_0){
  this.value_0 = value_0;
}

function digit_0(c){
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_0)[c];
    !result && (result = boxedValues_0[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(60, 1, {3:1, 60:1, 15:1}, Character);
_.equals_0 = function equals_4(o){
  return instanceOf(o, 60) && castTo(o, 60).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return String.fromCharCode(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 60);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Character_2_classLit, $intern_1, 60, 128, 0, 1);
}

var boxedValues_0;
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(128, 14, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 128);
function $equals_0(this$static, o){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(o);
}

doubleCastMap = {3:1, 15:1, 55:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 417);
function Float(value_0){
  this.value_0 = value_0;
}

defineClass(74, 55, {3:1, 15:1, 74:1, 55:1}, Float);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 74) && $equals_0(this.value_0, castTo(o, 74).value_0);
}
;
_.hashCode_0 = function hashCode_7(){
  return round_int(this.value_0);
}
;
_.toString_0 = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 74);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(31, 14, $intern_29, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 31);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(42, 14, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 42);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(50, 55, {3:1, 15:1, 50:1, 55:1}, Integer);
_.equals_0 = function equals_6(o){
  return instanceOf(o, 50) && castTo(o, 50).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 50);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 50, 256, 0, 1);
}

var boxedValues_1;
function Long(value_0){
  this.value_0 = value_0;
}

function valueOf_2(i){
  var rebase, result;
  if (compare_0(i, -129) > 0 && compare_0(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(61, 55, {3:1, 15:1, 61:1, 55:1}, Long);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 61) && eq(castTo(o, 61).value_0, this.value_0);
}
;
_.hashCode_0 = function hashCode_9(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_19(){
  return '' + toString_8(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 61);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_1, 61, 256, 0, 1);
}

var boxedValues_2;
defineClass(467, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(52, 88, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 52);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(75, 31, $intern_29, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 75);
function Short(value_0){
  this.value_0 = value_0;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(62, 55, {3:1, 15:1, 55:1, 62:1}, Short);
_.equals_0 = function equals_8(o){
  return instanceOf(o, 62) && castTo(o, 62).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_10(){
  return this.value_0;
}
;
_.toString_0 = function toString_20(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 62);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_3 = initUnidimensionalArray(Ljava_lang_Short_2_classLit, $intern_1, 62, 256, 0, 1);
}

var boxedValues_3;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_1(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals_1(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals_1(this$static.toLowerCase(), other.toLowerCase());
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $split(this$static, regex){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_1, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $startsWith(this$static, prefix){
  return $equals_1(this$static.substr(0, prefix.length), prefix);
}

function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && $equals_1(this$static.substr(toffset, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toLowerCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleLowerCase():this$static.toLowerCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_19) {
    hiSurrogate = 55296 + (codePoint - $intern_19 >> 10 & 1023) & $intern_3;
    loSurrogate = 56320 + (codePoint - $intern_19 & 1023) & $intern_3;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_3);
  }
}

function valueOf_4(x_0){
  return valueOf_5(x_0, x_0.length);
}

function valueOf_5(x_0, count){
  var batchEnd, batchStart, end, s;
  end = count;
  checkCriticalStringBounds(end, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 126:1, 15:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(67, 87, {126:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 67);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(99, 34, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 99);
defineClass(471, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(122, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 122);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(76, 14, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 76);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(425, 1, {57:1});
_.add_0 = function add_4(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toArray = function toArray(a){
  var i, it, result, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_0(new Array(size_0), a));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString_0 = function toString_21(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_7(joiner, e === this?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 425);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01); iter.hasNext;) {
    entry = $next_1(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(424, 1, {54:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 54)) {
    return false;
  }
  otherMap = castTo(obj, 54);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_11(){
  return hashCode_16(this.entrySet());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return $size(this.entrySet().this$01);
}
;
_.toString_0 = function toString_22(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(this.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    $add_7(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 424);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_0(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_2(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove_8(this$static, key){
  return instanceOfString(key)?key == null?$remove_11(this$static.hashCodeMap, null):$remove_12(this$static.stringMap, key):$remove_11(this$static.hashCodeMap, key);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(102, 424, {54:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 102);
defineClass(426, 425, $intern_30);
_.equals_0 = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 86)) {
    return false;
  }
  other = castTo(o, 86);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 426);
function $contains(this$static, o){
  if (instanceOf(o, 46)) {
    return $containsEntry(this$static.this$01, castTo(o, 46));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(68, 426, $intern_30, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 68);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 46);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(43, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 43);
defineClass(430, 425, {57:1, 49:1});
_.add_1 = function add_5(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_6(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 49)) {
    return false;
  }
  other = castTo(o, 49);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_5(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 430);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(107, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_3(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 107);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(108, 107, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 108);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(153, 426, $intern_30, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 153);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(103, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_4(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 103);
defineClass(151, 1, $intern_31);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 46)) {
    return false;
  }
  entry = castTo(other, 46);
  return equals_17(this.key, entry.getKey()) && equals_17(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_19(this.key) ^ hashCode_19(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_23(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 151);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(152, 151, $intern_31, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 152);
defineClass(431, 1, $intern_31);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 46)) {
    return false;
  }
  entry = castTo(other, 46);
  return equals_17(this.val$entry2.value[0], entry.getKey()) && equals_17($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_19(this.val$entry2.value[0]) ^ hashCode_19($getValue(this));
}
;
_.toString_0 = function toString_24(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 431);
function $add_5(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_17(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

defineClass(29, 430, {3:1, 29:1, 57:1, 49:1}, ArrayList);
_.add_1 = function add_7(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_8(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_7(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.toArray = function toArray_0(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 29);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(71, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_5(){
  return $next_2(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 71);
function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream_0(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_16(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_17(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(185, 430, {3:1, 57:1, 49:1}, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 185);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(186, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_6(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 186);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(273, 14, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 273);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(37, 102, {3:1, 54:1}, HashMap);
_.equals_1 = function equals_14(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 37);
function $add_6(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_10(this$static, o){
  return $remove_8(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(91, 426, {3:1, 57:1, 86:1}, HashSet);
_.add_0 = function add_9(o){
  return $add_6(this, o);
}
;
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_7(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 91);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(343, 102, {3:1, 54:1}, IdentityHashMap);
_.equals_0 = function equals_15(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 54)) {
    return false;
  }
  otherMap = castTo(obj, 54);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(instanceOfString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(instanceOfString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals_1 = function equals_16(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_0(key){
  return getHashCode_1(key);
}
;
_.hashCode_0 = function hashCode_18(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 343);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_11(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(189, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_10(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 189);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(109, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_7(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 109);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_2(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_12(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(190, 1, {}, InternalStringMap);
_.iterator = function iterator_11(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 190);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(110, 1, {}, InternalStringMap$1);
_.next_0 = function next_8(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 110);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_2(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(191, 431, $intern_31, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 191);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(418, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 418);
function Locale$1(){
}

defineClass(129, 418, {}, Locale$1);
_.toString_0 = function toString_25(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 129);
function Locale$4(){
}

defineClass(130, 418, {}, Locale$4);
_.toString_0 = function toString_26(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 130);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(64, 14, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 64);
function equals_17(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_19(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(266, 1, {});
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 266);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(267, 266, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 267);
function $forEachRemaining_0(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(187, 1, {});
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 187);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(188, 187, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 188);
function $add_7(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(98, 1, {}, StringJoiner);
_.toString_0 = function toString_27(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 98);
function of(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 58, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(58, 16, {3:1, 15:1, 16:1, 58:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 58, Ljava_lang_Enum_2_classLit, values_6);
function CollectorImpl(){
  $clinit_Collections();
}

defineClass(275, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 275);
function Collectors$20methodref$add$Type(){
}

defineClass(124, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 124);
function Collectors$21methodref$ctor$Type(){
}

defineClass(123, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 123);
function Collectors$lambda$42$Type(){
}

defineClass(125, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 125);
function $terminate(this$static){
  if (!this$static.root) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root) {
    $throwIfTerminated(this$static.root);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root = null;
    new ArrayList;
  }
   else {
    this.root = previous;
  }
}

defineClass(265, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 265);
function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2){
  castTo(a_1, 57).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(83, 265, {83:1}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 83);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(268, 267, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 268);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(270, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  this.action_1.accept(castTo(arg0, 9).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 270);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(269, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 269);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(271, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 271);
function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(469, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function getIdentityHashCode(o){
  switch (typeof(o)) {
    case 'string':
      return getHashCode_2(o);
    case 'number':
      return round_int(o);
    case 'boolean':
      return $clinit_Boolean() , o?1231:1237;
    default:return o == null?0:getHashCode_1(o);
  }
}

function getObjectIdentityHashCode(o){
  return getHashCode_1(o);
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

defineClass(466, 1, {});
function getHashCode_1(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_2(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=progettoingegneria-0.js

