var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.progettoingegneria;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = '07D0955C7B6888F97EEB0476118DFF50';
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
var $intern_0 = {3:1}, $intern_1 = {3:1, 6:1, 4:1}, $intern_2 = {88:1, 32:1, 3:1, 14:1, 15:1}, $intern_3 = {58:1, 3:1, 6:1, 4:1}, $intern_4 = {39:1, 3:1, 4:1}, $intern_5 = {3:1, 14:1, 29:1}, $intern_6 = -2147483648, $intern_7 = 4194303, $intern_8 = 1048575, $intern_9 = 524288, $intern_10 = 4194304, $intern_11 = 17592186044416, $intern_12 = -17592186044416, $intern_13 = {11:1, 8:1, 10:1, 9:1, 12:1, 7:1, 5:1}, $intern_14 = {27:1, 22:1}, $intern_15 = {60:1, 22:1}, $intern_16 = 65536, $intern_17 = 16777216, $intern_18 = 33554432, $intern_19 = 67108864, $intern_20 = {21:1, 3:1, 14:1, 15:1}, $intern_21 = {11:1, 8:1, 10:1, 9:1, 45:1, 12:1, 7:1, 5:1}, $intern_22 = {11:1, 8:1, 10:1, 9:1, 45:1, 12:1, 72:1, 7:1, 5:1}, $intern_23 = {34:1, 3:1, 14:1, 15:1}, $intern_24 = {3:1, 41:1, 4:1}, $intern_25 = {3:1, 30:1, 6:1, 4:1}, $intern_26 = {52:1, 78:1}, $intern_27 = {40:1};
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

defineClass(89, 1, {}, Class);
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
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 89);
function Duration(){
  this.start_0 = now_1();
}

defineClass(161, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 161);
function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 4, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
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

defineClass(4, 1, {3:1, 4:1});
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
  return collected = castTo($reduce((lastArg0 = $map(stream_0((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 4, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 53, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 42) , collected.toArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, collected.size_1(), 5, 1));
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
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(54, 4, {3:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 54);
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

defineClass(6, 54, $intern_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 6);
defineClass(80, 6, $intern_1);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 80);
defineClass(121, 80, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 121);
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

defineClass(44, 121, {44:1, 3:1, 6:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 44);
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

defineClass(293, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 293);
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
      if (!t[0].execute()) {
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

function execute(cmd){
  return cmd.execute();
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
      t[1]?t[0].execute() && (rescheduled = push_0(rescheduled, t)):$execute(t[0]);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 44)?castTo(e, 44).getThrown():e);
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
    var ret = $entry(execute)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(144, 293, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 144);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(145, 1, {}, SchedulerImpl$Flusher);
_.execute = function execute_0(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 145);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(146, 1, {}, SchedulerImpl$Rescuer);
_.execute = function execute_1(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 146);
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
defineClass(305, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 305);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(122, 305, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 122);
defineClass(306, 305, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 306);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(123, 306, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 123);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
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
  return elem.tabIndex < 65535?elem.tabIndex:-(elem.tabIndex % 65535) - 1;
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

defineClass(15, 1, {3:1, 14:1, 15:1});
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
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 15);
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
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_0, 32, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(32, 15, $intern_2);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 32, Ljava_lang_Enum_2_classLit, values_0);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(147, 32, $intern_2, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 147, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(148, 32, $intern_2, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 148, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(149, 32, $intern_2, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 149, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(150, 32, $intern_2, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 150, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
defineClass(313, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 313);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(314, 313, {});
_.getAssociatedType_0 = function getAssociatedType(){
  return this.getAssociatedType();
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 314);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 42);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_0(), 74);
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

defineClass(318, 314, {});
_.getAssociatedType = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 318);
defineClass(319, 318, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 319);
defineClass(320, 319, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 320);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(170, 320, {}, ClickEvent);
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
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 170);
defineClass(152, 1, {});
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
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 152);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(84, 152, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 84);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 42);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(74, 84, {74:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 74);
function $clinit_DoubleClickEvent(){
  $clinit_DoubleClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('dblclick', new DoubleClickEvent);
}

function DoubleClickEvent(){
}

defineClass(235, 320, {}, DoubleClickEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 60).onDoubleClick(this);
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
var Lcom_google_gwt_event_dom_client_DoubleClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DoubleClickEvent', 235);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(173, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 173);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(171, 314, {}, CloseEvent_0);
_.dispatch = function dispatch_1(handler){
  castTo(handler, 325);
  detachWidgets();
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
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 171);
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
    if (instanceOf($e0, 58)) {
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

defineClass(83, 1, {8:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 83);
defineClass(315, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 315);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_4(this$static.deferredDeltas, command);
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
        event_0.dispatch(castTo(handler, 22));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
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
  sourceMap = castTo($get(this$static.map_0, type_0), 46);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 42);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = castTo($get(this$static.map_0, type_0), 46);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(null), 42);
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
        c = castTo($next_1(c$iterator), 327);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(153, 315, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 153);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(154, 153, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 154);
function LegacyHandlerWrapper(){
}

defineClass(174, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 174);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_0(), 4));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_0(), 4);
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
    t = castTo(t$iterator.next_0(), 4);
    first?(first = false):(b.string += '; ' , b);
    $append_1(b, t.getMessage());
  }
  return b.string;
}

defineClass(58, 6, $intern_3, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 58);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(93, 58, $intern_3, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 93);
function $cancel(this$static){
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
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
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

defineClass(223, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 223);
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

defineClass(225, 1, {});
_.fire = function fire_0(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 225);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(226, 225, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 226);
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
    if (instanceOf($e0, 44)) {
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
    if (instanceOf($e1, 44)) {
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
      header = $next_0(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 44)) {
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

defineClass(107, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 107);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(263, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 263);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(68, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 68);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(39, 54, $intern_4, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 39);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(270, 39, $intern_4, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 270);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(289, 39, $intern_4, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 289);
defineClass(321, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 321);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(224, 321, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 224);
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

defineClass(323, 1, {});
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 323);
defineClass(324, 323, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 324);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_0, 64, 0, [RTL, LTR, DEFAULT]);
}

defineClass(64, 15, {64:1, 3:1, 14:1, 15:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 64, Ljava_lang_Enum_2_classLit, values_1);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_0 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function LocaleInfo(){
}

defineClass(159, 1, {}, LocaleInfo);
var instance_0;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 159);
function DateTimeFormatInfoImpl(){
}

defineClass(287, 324, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 287);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  cache = new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_4(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = buf.string.substr(0, 0)):0 > oldLength && (buf.string += valueOf_4(initUnidimensionalArray(C_classLit, $intern_0, 292, -oldLength, 15, 1)));
  }
}

function $getNextCharCountInPattern(start_0){
  var ch_0, next;
  ch_0 = (checkCriticalStringElementIndex(start_0, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(start_0));
  next = start_0 + 1;
  while (next < 'dd/MM/yyyy'.length && (checkCriticalStringElementIndex(next, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(next) == ch_0)) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(castTo($get_0(this$static.patternParts, i), 59))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_0(this$static.patternParts, i + 1), 59))) {
        abut = true;
        castTo($get_0(this$static.patternParts, i), 59).abutStart = true;
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
  parsePos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_0, 292, 15, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.array.length; ++i) {
    part = castTo($get_0(this$static.patternParts, i), 59);
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

function $parsePattern(this$static){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < 'dd/MM/yyyy'.length; i++) {
    ch_0 = (checkCriticalStringElementIndex(i, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(i));
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < 'dd/MM/yyyy'.length && (checkCriticalStringElementIndex(i + 1, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(i + 1) == 32)) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < 'dd/MM/yyyy'.length && (checkCriticalStringElementIndex(i + 1, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(i + 1) == 39)) {
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
      count = $getNextCharCountInPattern(i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < 'dd/MM/yyyy'.length && (checkCriticalStringElementIndex(i + 1, 'dd/MM/yyyy'.length) , 'dd/MM/yyyy'.charCodeAt(i + 1) == 39)) {
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
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Before Christ', 'Anno Domini']), pos);
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
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['AM', 'PM']), pos);
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
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
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
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
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
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
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

function DateTimeFormat(){
  this.patternParts = new ArrayList;
  $parsePattern(this);
}

function getFormat(dtfi){
  $clinit_DateTimeFormat();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0));
  dtf = null;
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, 'dd/MM/yyyy'), 87));
  if (!dtf) {
    dtf = new DateTimeFormat;
    dtfi == defaultDtfi && $putStringValue(cache, 'dd/MM/yyyy', dtf);
  }
  return dtf;
}

defineClass(87, 1, {87:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 87);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(59, 1, {59:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 59);
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

defineClass(29, 1, $intern_5, Date_0, Date_1);
_.equals_0 = function equals_1(obj){
  return instanceOf(obj, 29) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 29).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_3(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_6(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 29);
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > $intern_6 && $setYear(date, this$static.year - 1900);
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
  this$static.milliseconds >= 0 && $setTime(date, add_1(mul_0(div(fromDouble_0(date.jsdate.getTime()), 1000), 1000), this$static.milliseconds));
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
  if (this$static.tzOffset > $intern_6) {
    offset = date.jsdate.getTimezoneOffset();
    $setTime(date, add_1(fromDouble_0(date.jsdate.getTime()), (this$static.tzOffset - offset) * 60 * 1000));
  }
  return true;
}

function DateRecord(){
  Date_0.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_6;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_6;
}

defineClass(288, 29, $intern_5, DateRecord);
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
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 288);
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
  a0 = value_0 & $intern_7;
  a1 = value_0 >> 22 & $intern_7;
  a2 = value_0 < 0?$intern_8:0;
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
  if (b.h == $intern_9 && b.m == 0 && b.l == 0) {
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
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
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
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
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
  neg0 = ~a.l + 1 & $intern_7;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_7;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
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
  return a.l + a.m * $intern_10 + a.h * $intern_11;
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
  a.l = sum0 & $intern_7;
  a.m = sum1 & $intern_7;
  a.h = sum2 & $intern_8;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_7, sum1 & $intern_7, sum2 & $intern_8);
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
  if (value_0 >= $intern_11) {
    a2 = round_int(value_0 / $intern_11);
    value_0 -= a2 * $intern_11;
  }
  a1 = 0;
  if (value_0 >= $intern_10) {
    a1 = round_int(value_0 / $intern_10);
    value_0 -= a1 * $intern_10;
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
  c00 = p0 & $intern_7;
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
  c0 &= $intern_7;
  c2 += c1 >> 22;
  c1 &= $intern_7;
  c2 &= $intern_8;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_7;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_7;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
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
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_9) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_8:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_8:0;
    res1 = negative?$intern_7:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_8;
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
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_7, sum1 & $intern_7, sum2 & $intern_8);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_10 + a.h * $intern_11;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
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
  MAX_VALUE = create0($intern_7, $intern_7, 524287);
  MIN_VALUE = create0(0, 0, $intern_9);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 4)) {
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

function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_12 < result && result < $intern_11) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
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
    return big_0.l + big_0.m * $intern_10;
  }
  if (a2 == $intern_8) {
    return big_0.l + big_0.m * $intern_10 - $intern_11;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_12 < result && result < $intern_11) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_12 < value_0 && value_0 < $intern_11) {
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
    if ($intern_12 < result && result < $intern_11) {
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
    value_0 += $intern_11;
    a3 = $intern_8;
  }
  a1 = round_int(value_0 / $intern_10);
  a0 = round_int(value_0 - a1 * $intern_10);
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

defineClass(38, 1, {326:1, 38:1}, SafeUriString);
_.equals_0 = function equals_2(obj){
  if (!instanceOf(obj, 38)) {
    return false;
  }
  return $equals_1(this.uri_0, castTo(obj, 326).uri_0);
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
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 38);
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
  clientSerializationStreamWriter.stringTable.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
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
    if (instanceOf($e0, 39)) {
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

defineClass(190, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 190);
function $clinit_ConnService_Proxy(){
  $clinit_ConnService_Proxy = emptyMethod;
  SERIALIZER = new ConnService_TypeSerializer;
}

function $addCourse(this$static, name_0, startDate, endDate, email, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addCourse');
  try {
    streamWriter = $start(helper, 4);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, startDate));
    $append(streamWriter, '' + $addString(streamWriter, endDate));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Errore server');
    }
     else 
      throw toJs($e0);
  }
}

function $getAvailableExams(this$static, courseName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getAvailableExams');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, '[Ljava.lang.String;/2600011424'));
    $writeObject(streamWriter, courseName);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Error.impossibile visualizzare voti esami');
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Errore server.\nLista studenti iscritti al corso non aggiornata');
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
    if (instanceOf($e0, 16)) {
      ex = $e0;
      alert_0('Cannot access: ' + ex.detailMessage);
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Impossibile visualizzare i corsi disponibili');
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveExams(this$static, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveExams');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'prof'));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $retrieveStudents(this$static, selectedExam, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'retrieveStudents');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, selectedExam));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('ERROR: impossibile ottenere corsi');
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Error. inserimento fallito.');
    }
     else 
      throw toJs($e0);
  }
}

function $setCourseData(this$static, name_0, startData, endData, newName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'setCourseData');
  try {
    streamWriter = $start(helper, 4);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $append(streamWriter, '' + $addString(streamWriter, startData));
    $append(streamWriter, '' + $addString(streamWriter, endData));
    $append(streamWriter, '' + $addString(streamWriter, newName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , BOOLEAN));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      ex = $e0;
      $wnd.alert('ERROR: ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function $viewCoursesInfo(this$static, callback){
  var helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewCoursesInfo');
  try {
    $start(helper, 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      $wnd.alert('ERROR: Impossibilie visualizzare i corsi');
    }
     else 
      throw toJs($e0);
  }
}

function $viewCoursesInfo_0(this$static, email, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'viewCoursesInfo');
  try {
    streamWriter = $start(helper, 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      $wnd.alert('Errore comunicazione server: UPDATECOURSE');
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
    if (instanceOf($e0, 16)) {
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
    if (instanceOf($e0, 16)) {
      $wnd.alert('Errore comunicazione server: UPDATECOURSE');
    }
     else 
      throw toJs($e0);
  }
}

function ConnService_Proxy(){
  $clinit_ConnService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(18, 190, {}, ConnService_Proxy);
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

defineClass(203, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 203);
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

defineClass(204, 203, {}, ConnService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_google_gwt_sample_progettoingegneria_client_ConnService_1TypeSerializer_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'ConnService_TypeSerializer', 204);
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

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

defineClass(7, 1, {9:1, 7:1});
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
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 7);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), typeInt | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= typeInt);
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
   else if (instanceOf(this$static.parent_0, 45)) {
    castTo(this$static.parent_0, 45).remove(this$static);
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

defineClass(5, 7, $intern_13);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
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
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(307, 5, $intern_13);
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
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 307);
function FooterComponent(){
  var l1, l2, l3;
  this.hPanel = new HorizontalPanel;
  $initWidget(this, this.hPanel);
  l1 = new Label('mail: unibo@unibo.it');
  l2 = new Label('  telefono: 0123-345  ');
  l3 = new Label('indirizzo: Via Ingegneria del Software, Bologna');
  $add_1(this.hPanel, l1);
  $add_1(this.hPanel, l2);
  $add_1(this.hPanel, l3);
}

defineClass(158, 307, $intern_13, FooterComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_FooterComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'FooterComponent', 158);
function HomePage(){
  var l1, logoImage, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label('UniBo');
  logoImage = new Image_0;
  l1 = new Label('Dipartimenti:\n-Matematica\n-Informatica\n-Scienze');
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://www.unibo.it/it/logo-unibo.png/@@images/44d79f14-1a99-4a5d-997f-90df029bd63e.png')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_2(this.vPanel, titleLabel);
  $add_2(this.vPanel, logoImage);
  $add_2(this.vPanel, l1);
}

defineClass(157, 307, $intern_13, HomePage);
var Lcom_google_gwt_sample_progettoingegneria_client_HomePage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'HomePage', 157);
function LoginPage(main){
  var credentialsLabel, emailLabel, hpanel, passwordLabel, titleLabel, vpanel1, vpanel2;
  this.mainPanel = new VerticalPanel;
  this.image1 = new Image_0;
  this.emailTextBox = new TextBox;
  this.passwordTextBox = new TextBox;
  this.loginButton = new Button('Accedi');
  this.main = main;
  $initWidget(this, this.mainPanel);
  titleLabel = new Label('Accedi');
  credentialsLabel = new Label('Credenziali di accesso:');
  emailLabel = new Label('email: ');
  passwordLabel = new Label('password:');
  vpanel1 = new VerticalPanel;
  vpanel2 = new VerticalPanel;
  hpanel = new HorizontalPanel;
  $setUrl_0(this.image1, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2018/10/02/11/13/girl-3718537_960_720.jpg')));
  $addDomHandler(this.loginButton, new LoginPage$loginButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_2(this.mainPanel, titleLabel);
  $add_2(this.mainPanel, credentialsLabel);
  $add_2(vpanel1, emailLabel);
  $add_2(vpanel1, passwordLabel);
  $add_2(vpanel2, this.emailTextBox);
  $add_2(vpanel2, this.passwordTextBox);
  $add_1(hpanel, vpanel1);
  $add_1(hpanel, vpanel2);
  $add_2(this.mainPanel, hpanel);
  $add_2(this.mainPanel, this.loginButton);
  $add_2(this.mainPanel, this.image1);
}

defineClass(192, 307, $intern_13, LoginPage);
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage', 192);
function LoginPage$loginButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(193, 1, $intern_14, LoginPage$loginButtonHandler);
_.onClick = function onClick(event_0){
  var passw, userEmail;
  userEmail = $getText(this.this$01.emailTextBox);
  passw = $getText(this.this$01.passwordTextBox);
  !connService && (connService = new ConnService_Proxy);
  $loginRequest(connService, userEmail, passw, new LoginPage$loginButtonHandler$1(this, userEmail));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage$loginButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage/loginButtonHandler', 193);
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

defineClass(194, 1, {}, LoginPage$loginButtonHandler$1);
_.onSuccess = function onSuccess(result){
  $onSuccess(this, castTo(result, 33));
}
;
_.onFailure = function onFailure(caught){
  alert_0('Cannot access: ' + caught.getMessage());
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_LoginPage$loginButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'LoginPage/loginButtonHandler/1', 194);
function $openAdminDashboard(this$static){
  var admDash;
  $clear(this$static.contentPanel);
  admDash = new AdminDashboard;
  $add_2(this$static.contentPanel, admDash);
}

function $openHomePage(this$static){
  var homepage;
  $clear(this$static.contentPanel);
  homepage = new HomePage;
  $add_2(this$static.contentPanel, homepage);
}

function $openLoginPage(this$static){
  var loginpage;
  $clear(this$static.contentPanel);
  loginpage = new LoginPage(this$static);
  $add_2(this$static.contentPanel, loginpage);
}

function $openProfessorDashboard(this$static){
  var profDash;
  $clear(this$static.contentPanel);
  profDash = new ProfessorDashboard;
  $add_2(this$static.contentPanel, profDash);
}

function $openSecretaryDashboard(this$static){
  var secDash;
  $clear(this$static.contentPanel);
  secDash = new SecretaryDashboard;
  $add_2(this$static.contentPanel, secDash);
}

function $openStudentDashboard(this$static){
  var studentDash;
  $clear(this$static.contentPanel);
  studentDash = new StudentDashboard;
  $add_2(this$static.contentPanel, studentDash);
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
  $add_2(this.headerPanel, logo);
  $add_2(this.headerPanel, this.menu);
  $add_2(this.vPanel, this.headerPanel);
  $add_2(this.vPanel, this.contentPanel);
  $add_2(this.vPanel, this.footerPanel);
  $openHomePage(this);
  $clear(this.footerPanel);
  footer = new FooterComponent;
  $add_2(this.footerPanel, footer);
}

defineClass(110, 307, $intern_13, MainPage);
var Lcom_google_gwt_sample_progettoingegneria_client_MainPage_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MainPage', 110);
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
  this.buttonLogin = new Button('Area Utente');
  buttonHome = new Button('home');
  buttonClear = new Button('pulisci db');
  $setWidth(this.buttonLogin, '250px');
  ($clinit_DOM() , buttonHome.element).style['width'] = '250px';
  $addDomHandler(this.buttonLogin, new MenuComponent$buttonLoginHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(buttonHome, new MenuComponent$buttonHomeHandler(this), (null , TYPE));
  $addDomHandler(buttonClear, new MenuComponent$buttonClearHandler, (null , TYPE));
  $add_1(this.hPanel, buttonHome);
  $add_1(this.hPanel, this.buttonLogin);
  $add_1(this.hPanel, buttonClear);
}

defineClass(136, 307, $intern_13, MenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent', 136);
function MenuComponent$buttonClearHandler(){
}

defineClass(139, 1, $intern_14, MenuComponent$buttonClearHandler);
_.onClick = function onClick_0(event_0){
  !connService && (connService = new ConnService_Proxy);
  $clearDB(connService, new MenuComponent$buttonClearHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonClearHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonClearHandler', 139);
function MenuComponent$buttonClearHandler$1(){
}

defineClass(140, 1, {}, MenuComponent$buttonClearHandler$1);
_.onSuccess = function onSuccess_0(result){
  alert_0(castToString(result));
}
;
_.onFailure = function onFailure_0(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonClearHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonClearHandler/1', 140);
function MenuComponent$buttonHomeHandler(this$0){
  this.this$01 = this$0;
}

defineClass(138, 1, $intern_14, MenuComponent$buttonHomeHandler);
_.onClick = function onClick_1(event_0){
  $openHomePage(this.this$01.main);
  $setText(this.this$01.buttonLogin, 'Area Utente');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonHomeHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonHomeHandler', 138);
function MenuComponent$buttonLoginHandler(this$0){
  this.this$01 = this$0;
}

defineClass(137, 1, $intern_14, MenuComponent$buttonLoginHandler);
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
var Lcom_google_gwt_sample_progettoingegneria_client_MenuComponent$buttonLoginHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'MenuComponent/buttonLoginHandler', 137);
function $setSession(this$static, tipo, email){
  this$static.tipo = tipo;
  this$static.email = email;
}

function Session(tipo){
  this.tipo = tipo;
  this.email = null;
}

defineClass(24, 1, {}, Session);
var currentSession = null;
var Lcom_google_gwt_sample_progettoingegneria_client_Session_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client', 'Session', 24);
function AdminDashboard(){
  var adminMenu, logoImage, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label('Universit\xE0 di Giacky');
  logoImage = new Image_0;
  adminMenu = new AdminMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_2(this.vPanel, titleLabel);
  $add_2(this.vPanel, logoImage);
  $add_2(this.vPanel, adminMenu);
}

defineClass(189, 307, $intern_13, AdminDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_AdminDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'AdminDashboard', 189);
function ProfessorDashboard(){
  var logoImage, profmenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label('Universit\xE0 di Giacky');
  logoImage = new Image_0;
  profmenu = new ProfessorMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2020/08/04/08/10/woman-5462074_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_2(this.vPanel, titleLabel);
  $add_2(this.vPanel, logoImage);
  $add_2(this.vPanel, profmenu);
}

defineClass(187, 307, $intern_13, ProfessorDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_ProfessorDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'ProfessorDashboard', 187);
function SecretaryDashboard(){
  var logoImage, secretaryMenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label('Universit\uFFFD di Giacky');
  logoImage = new Image_0;
  secretaryMenu = new SecretaryMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2020/02/10/12/49/girl-4836396_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_2(this.vPanel, titleLabel);
  $add_2(this.vPanel, logoImage);
  $add_2(this.vPanel, secretaryMenu);
}

defineClass(188, 307, $intern_13, SecretaryDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_SecretaryDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'SecretaryDashboard', 188);
function StudentDashboard(){
  var logoImage, studentMenu, titleLabel;
  this.vPanel = new VerticalPanel;
  $initWidget(this, this.vPanel);
  titleLabel = new Label('Dashboard Studente');
  logoImage = new Image_0;
  studentMenu = new StudentMenuComponent;
  $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg')));
  ($clinit_DOM() , logoImage.element).style['width'] = '50%';
  $add_2(this.vPanel, titleLabel);
  $add_2(this.vPanel, logoImage);
  $add_2(this.vPanel, studentMenu);
}

defineClass(186, 307, $intern_13, StudentDashboard);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_StudentDashboard_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards', 'StudentDashboard', 186);
function AdminCreateUserComponent(){
  this.vPanel = new VerticalPanel;
  this.signUpPanel = new VerticalPanel;
  this.usernameTB = new TextBox;
  this.mailTB = new TextBox;
  this.passwordTB = new TextBox;
  this.nameTB = new TextBox;
  this.surnameTB = new TextBox;
  this.typeListBox = new ListBox;
  this.confirmSignUpButton = new Button('Registra');
  $initWidget(this, this.vPanel);
  $add_2(this.vPanel, this.signUpPanel);
  $add_2(this.signUpPanel, new Label('username'));
  $add_2(this.signUpPanel, this.usernameTB);
  $add_2(this.signUpPanel, new Label('pssw'));
  $add_2(this.signUpPanel, this.passwordTB);
  $add_2(this.signUpPanel, new Label('mail'));
  $add_2(this.signUpPanel, this.mailTB);
  $add_2(this.signUpPanel, new Label('nome'));
  $add_2(this.signUpPanel, this.nameTB);
  $add_2(this.signUpPanel, new Label('cognome'));
  $add_2(this.signUpPanel, this.surnameTB);
  $insertItem(this.typeListBox, 'Studente');
  $insertItem(this.typeListBox, 'Professore');
  $insertItem(this.typeListBox, 'Segreteria');
  $add_2(this.signUpPanel, this.typeListBox);
  $add_2(this.signUpPanel, this.confirmSignUpButton);
  $addDomHandler(this.confirmSignUpButton, new AdminCreateUserComponent$confirmSignUpButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(252, 307, $intern_13, AdminCreateUserComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent', 252);
function AdminCreateUserComponent$confirmSignUpButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(253, 1, $intern_14, AdminCreateUserComponent$confirmSignUpButtonHandler);
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
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent$confirmSignUpButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent/confirmSignUpButtonHandler', 253);
function AdminCreateUserComponent$confirmSignUpButtonHandler$1(){
}

defineClass(254, 1, {}, AdminCreateUserComponent$confirmSignUpButtonHandler$1);
_.onSuccess = function onSuccess_1(result){
  alert_0('Risultato: ' + castToString(result));
}
;
_.onFailure = function onFailure_1(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminCreateUserComponent$confirmSignUpButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminCreateUserComponent/confirmSignUpButtonHandler/1', 254);
function AdminProfessorsListComponent(){
  new HorizontalPanel;
  this.baseHPanel = new HorizontalPanel;
  this.usersListBox = new ListBox;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewProfessorInfo(connService, new AdminProfessorsListComponent$1(this));
  $addDomHandler(this.usersListBox, new AdminProfessorsListComponent$UsersListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_1(this.baseHPanel, this.usersListBox);
}

defineClass(258, 307, $intern_13, AdminProfessorsListComponent);
_.nListItem = 0;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent', 258);
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

defineClass(260, 1, {}, AdminProfessorsListComponent$1);
_.onSuccess = function onSuccess_2(result){
  $onSuccess_0(this, castToString(result));
}
;
_.onFailure = function onFailure_2(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent/1', 260);
function AdminProfessorsListComponent$UsersListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(259, 1, $intern_15, AdminProfessorsListComponent$UsersListBoxHandler);
_.onDoubleClick = function onDoubleClick(event_0){
  this.this$01.modifierComp = new AdminUserModifierComponent($split($getSelectedItemText(this.this$01.usersListBox), ' '));
  $add_1(this.this$01.baseHPanel, this.this$01.modifierComp);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminProfessorsListComponent$UsersListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminProfessorsListComponent/UsersListBoxHandler', 259);
function AdminStudentsListComponent(){
  new HorizontalPanel;
  this.baseHPanel = new HorizontalPanel;
  this.usersListBox = new ListBox;
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewStudentInfo(connService, new AdminStudentsListComponent$1(this));
  $addDomHandler(this.usersListBox, new AdminStudentsListComponent$UsersListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_1(this.baseHPanel, this.usersListBox);
}

defineClass(255, 307, $intern_13, AdminStudentsListComponent);
_.nListItem = 0;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent', 255);
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

defineClass(257, 1, {}, AdminStudentsListComponent$1);
_.onSuccess = function onSuccess_3(result){
  $onSuccess_1(this, castToString(result));
}
;
_.onFailure = function onFailure_3(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent/1', 257);
function AdminStudentsListComponent$UsersListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(256, 1, $intern_15, AdminStudentsListComponent$UsersListBoxHandler);
_.onDoubleClick = function onDoubleClick_0(event_0){
  this.this$01.modifierComp = new AdminUserModifierComponent($split($getSelectedItemText(this.this$01.usersListBox), ' '));
  $add_1(this.this$01.baseHPanel, this.this$01.modifierComp);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminStudentsListComponent$UsersListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminStudentsListComponent/UsersListBoxHandler', 256);
function AdminUserModifierComponent(user){
  this.vPanel = new VerticalPanel;
  this.emailTb = new TextBox;
  this.nameTb = new TextBox;
  this.surnameTb = new TextBox;
  this.userNameTb = new TextBox;
  this.passwordTb = new TextBox;
  this.confirmBtn = new Button('Conferma Modifiche');
  this.user = user;
  $initWidget(this, this.vPanel);
  $setText_0(this.emailTb, this.user[1]);
  $setText_0(this.nameTb, this.user[3]);
  $setText_0(this.surnameTb, this.user[5]);
  $setText_0(this.userNameTb, this.user[7]);
  $setText_0(this.passwordTb, this.user[9]);
  $add_2(this.vPanel, new Label('MODIFICA USER'));
  $add_2(this.vPanel, new Label('Email:'));
  $add_2(this.vPanel, this.emailTb);
  $add_2(this.vPanel, new Label('Nome:'));
  $add_2(this.vPanel, this.nameTb);
  $add_2(this.vPanel, new Label('Cognome:'));
  $add_2(this.vPanel, this.surnameTb);
  $add_2(this.vPanel, new Label('Username:'));
  $add_2(this.vPanel, this.userNameTb);
  $add_2(this.vPanel, new Label('Password:'));
  $add_2(this.vPanel, this.passwordTb);
  $add_2(this.vPanel, this.confirmBtn);
  $addDomHandler(this.confirmBtn, new AdminUserModifierComponent$confirmBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(108, 307, $intern_13, AdminUserModifierComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent', 108);
function AdminUserModifierComponent$confirmBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(284, 1, $intern_14, AdminUserModifierComponent$confirmBtnHandler);
_.onClick = function onClick_4(event_0){
  !connService && (connService = new ConnService_Proxy);
  $setUserInfo(connService, this.this$01.user[1], $getText(this.this$01.emailTb), $getText(this.this$01.nameTb), $getText(this.this$01.surnameTb), $getText(this.this$01.userNameTb), $getText(this.this$01.passwordTb), new AdminUserModifierComponent$confirmBtnHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent$confirmBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent/confirmBtnHandler', 284);
function AdminUserModifierComponent$confirmBtnHandler$1(){
}

defineClass(285, 1, {}, AdminUserModifierComponent$confirmBtnHandler$1);
_.onSuccess = function onSuccess_4(result){
  castToBoolean(result);
  $wnd.alert('Dati aggiornati.');
}
;
_.onFailure = function onFailure_4(caught){
  $wnd.alert('Errore del server. Dati non aggiornati.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_AdminUserModifierComponent$confirmBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'AdminUserModifierComponent/confirmBtnHandler/1', 285);
function CoursesListComponent(){
  this.hPanel = new HorizontalPanel;
  this.txta = new TextArea_0;
  $initWidget(this, this.hPanel);
  $setCharacterWidth(this.txta);
  $setVisibleLines(this.txta);
  !connService && (connService = new ConnService_Proxy);
  $viewCoursesInfo(connService, new CoursesListComponent$1(this));
  $add_1(this.hPanel, this.txta);
}

defineClass(227, 307, $intern_13, CoursesListComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_CoursesListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'CoursesListComponent', 227);
function $onSuccess_2(this$static, result){
  $setText_0(this$static.this$01.txta, result);
}

function CoursesListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(228, 1, {}, CoursesListComponent$1);
_.onSuccess = function onSuccess_5(result){
  $onSuccess_2(this, castToString(result));
}
;
_.onFailure = function onFailure_5(caught){
  $wnd.alert('ERROR: Impossibilie visualizzare i corsi');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_CoursesListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'CoursesListComponent/1', 228);
function GradesViewComponent(){
  this.vPanel = new VerticalPanel;
  this.gradesTextArea = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_2(this.vPanel, new Label('VOTI ESAMI:'));
  $setHeight(this.gradesTextArea, '250px');
  $setWidth(this.gradesTextArea, '250px');
  !connService && (connService = new ConnService_Proxy);
  $getGrades(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new GradesViewComponent$1(this));
  $add_2(this.vPanel, this.gradesTextArea);
}

defineClass(233, 307, $intern_13, GradesViewComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_GradesViewComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'GradesViewComponent', 233);
function $onSuccess_3(this$static, result){
  $setText_0(this$static.this$01.gradesTextArea, result);
}

function GradesViewComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(234, 1, {}, GradesViewComponent$1);
_.onSuccess = function onSuccess_6(result){
  $onSuccess_3(this, castToString(result));
}
;
_.onFailure = function onFailure_6(caught){
  $wnd.alert('Error.impossibile visualizzare voti esami');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_GradesViewComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'GradesViewComponent/1', 234);
function InfoStudentListComponent(){
  this.vPanel = new VerticalPanel;
  this.l1 = new Label('informazioni personali studenti');
  this.txta = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_2(this.vPanel, this.l1);
  $add_2(this.vPanel, this.txta);
  !connService && (connService = new ConnService_Proxy);
  $retrieveInfoStudentList(connService, new InfoStudentListComponent$1(this));
}

defineClass(250, 307, $intern_13, InfoStudentListComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_InfoStudentListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'InfoStudentListComponent', 250);
function $onSuccess_4(this$static, result){
  $setText_0(this$static.this$01.txta, result);
}

function InfoStudentListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(251, 1, {}, InfoStudentListComponent$1);
_.onSuccess = function onSuccess_7(result){
  $onSuccess_4(this, castToString(result));
}
;
_.onFailure = function onFailure_7(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_InfoStudentListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'InfoStudentListComponent/1', 251);
function PersonalInfoComponent(){
  this.vPanel = new VerticalPanel;
  this.label1 = new Label('le tue info personali');
  this.txta1 = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_2(this.vPanel, this.label1);
  $add_2(this.vPanel, this.txta1);
  $setWidth(this.txta1, '200px');
  $setHeight(this.txta1, '150px');
}

defineClass(104, 307, $intern_13, PersonalInfoComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_PersonalInfoComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'PersonalInfoComponent', 104);
function ProfessorCourseCreationComponent(){
  this.widgetBasePanel = new VerticalPanel;
  this.courseNameBox = new TextBox;
  this.startDateBox = new TextBox;
  this.endDateBox = new TextBox;
  this.confirmCreationButton = new Button('Crea corso');
  $initWidget(this, this.widgetBasePanel);
  $add_2(this.widgetBasePanel, new Label('CREA NUOVO CORSO'));
  $add_2(this.widgetBasePanel, new Label('Nome corso: '));
  $add_2(this.widgetBasePanel, this.courseNameBox);
  $add_2(this.widgetBasePanel, new Label('Data inizio: '));
  $add_2(this.widgetBasePanel, this.startDateBox);
  $add_2(this.widgetBasePanel, new Label('Data fine: '));
  $add_2(this.widgetBasePanel, this.endDateBox);
  $add_2(this.widgetBasePanel, this.confirmCreationButton);
  $addDomHandler(this.confirmCreationButton, new ProfessorCourseCreationComponent$confirmCreationButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(264, 307, $intern_13, ProfessorCourseCreationComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent', 264);
function ProfessorCourseCreationComponent$confirmCreationButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(265, 1, $intern_14, ProfessorCourseCreationComponent$confirmCreationButtonHandler);
_.onClick = function onClick_5(event_0){
  var end, start_0;
  if (!$equals_1($getText(this.this$01.courseNameBox), '') && !$equals_1($getText(this.this$01.startDateBox), '') && !$equals_1($getText(this.this$01.endDateBox), '')) {
    try {
      start_0 = $parse_0(($clinit_DateTimeFormat() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0)))), $getText(this.this$01.startDateBox));
      end = $parse_0(getFormat($getDateTimeFormatInfo((null , instance_0))), $getText(this.this$01.endDateBox));
      if (gt(fromDouble_0(end.jsdate.getTime()), fromDouble_0(start_0.jsdate.getTime())) && $after(start_0, new Date_0)) {
        !connService && (connService = new ConnService_Proxy);
        $addCourse(connService, $getText(this.this$01.courseNameBox), $getText(this.this$01.startDateBox), $getText(this.this$01.endDateBox), (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new ProfessorCourseCreationComponent$confirmCreationButtonHandler$1(this));
      }
       else {
        $setText_0(this.this$01.startDateBox, '');
        $setText_0(this.this$01.endDateBox, '');
        $wnd.alert('Date inserite non corrette');
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 30)) {
        $wnd.alert('Formato data non valido\ninserire: giorno/mese/anno');
        $setText_0(this.this$01.startDateBox, '');
        $setText_0(this.this$01.endDateBox, '');
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
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent$confirmCreationButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent/confirmCreationButtonHandler', 265);
function $onSuccess_5(this$static){
  $wnd.alert('Corso inserito.');
  $setText_0(this$static.this$11.this$01.startDateBox, '');
  $setText_0(this$static.this$11.this$01.endDateBox, '');
  $setText_0(this$static.this$11.this$01.courseNameBox, '');
}

function ProfessorCourseCreationComponent$confirmCreationButtonHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(266, 1, {}, ProfessorCourseCreationComponent$confirmCreationButtonHandler$1);
_.onSuccess = function onSuccess_8(result){
  var lastArg;
  $onSuccess_5((lastArg = this , castToBoolean(result) , lastArg));
}
;
_.onFailure = function onFailure_8(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCourseCreationComponent$confirmCreationButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCourseCreationComponent/confirmCreationButtonHandler/1', 266);
function ProfessorCoursesListComponent(){
  this.baseHPanel = new HorizontalPanel;
  this.buttonvPanel = new VerticalPanel;
  this.hPanel = new HorizontalPanel;
  this.curseManhPanel = new HorizontalPanel;
  this.createCourse = new ProfessorCourseCreationComponent;
  this.coursesListBox = new ListBox;
  this.createCourseBtn = new Button('Crea nuovo corso');
  $initWidget(this, this.baseHPanel);
  !connService && (connService = new ConnService_Proxy);
  $viewCoursesInfo_0(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new ProfessorCoursesListComponent$1(this));
  $addDomHandler(this.coursesListBox, new ProfessorCoursesListComponent$ListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $addDomHandler(this.createCourseBtn, new ProfessorCoursesListComponent$CreateCourseBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_1(this.hPanel, this.coursesListBox);
  $add_2(this.buttonvPanel, this.hPanel);
  $add_2(this.buttonvPanel, this.createCourseBtn);
  $add_1(this.baseHPanel, this.buttonvPanel);
}

defineClass(236, 307, $intern_13, ProfessorCoursesListComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesListComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesListComponent', 236);
function $onSuccess_6(this$static, result){
  var i, list;
  list = $split(result, '@');
  for (i = 0; i < list.length; i++) {
    $insertItem(this$static.this$01.coursesListBox, list[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesListBox, list.length);
}

function ProfessorCoursesListComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(239, 1, {}, ProfessorCoursesListComponent$1);
_.onSuccess = function onSuccess_9(result){
  $onSuccess_6(this, castToString(result));
}
;
_.onFailure = function onFailure_9(caught){
  $wnd.alert('Errore comunicazione server: UPDATECOURSE');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesListComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesListComponent/1', 239);
function ProfessorCoursesListComponent$CreateCourseBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(238, 1, $intern_14, ProfessorCoursesListComponent$CreateCourseBtnHandler);
_.onClick = function onClick_6(event_0){
  $add_1(this.this$01.baseHPanel, this.this$01.createCourse);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesListComponent$CreateCourseBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesListComponent/CreateCourseBtnHandler', 238);
function ProfessorCoursesListComponent$ListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(237, 1, $intern_15, ProfessorCoursesListComponent$ListBoxHandler);
_.onDoubleClick = function onDoubleClick_1(event_0){
  $clear(this.this$01.curseManhPanel);
  this.this$01.courseManComp = new ProfessorCoursesModifierComponent($getSelectedItemText(this.this$01.coursesListBox));
  $add_1(this.this$01.curseManhPanel, this.this$01.courseManComp);
  $add_1(this.this$01.hPanel, this.this$01.curseManhPanel);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesListComponent$ListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesListComponent/ListBoxHandler', 237);
function $initSubscribedStudents(this$static){
  !connService && (connService = new ConnService_Proxy);
  $getStudentsCourseList(connService, this$static.currentCourse[0], new ProfessorCoursesModifierComponent$2(this$static));
}

function ProfessorCoursesModifierComponent(courseName){
  this.vPanel = new VerticalPanel;
  this.courseNameTb = new TextBox;
  this.startDateTb = new TextBox;
  this.endDateTb = new TextBox;
  this.subscribedStudentsTa = new TextArea_0;
  this.hPanelBtn = new HorizontalPanel;
  this.confirmBtn = new Button('Conferma Modifiche');
  this.deleteBtn = new Button('Elimina Corso');
  $initWidget(this, this.vPanel);
  this.initialCourseName = courseName;
  !connService && (connService = new ConnService_Proxy);
  $getCourseData(connService, this.initialCourseName, new ProfessorCoursesModifierComponent$1(this));
  $addDomHandler(this.confirmBtn, new ProfessorCoursesModifierComponent$confirmBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.deleteBtn, new ProfessorCoursesModifierComponent$deleteBtnHandler(this), (null , TYPE));
}

defineClass(277, 307, $intern_13, ProfessorCoursesModifierComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent', 277);
function $onSuccess_7(this$static, result){
  this$static.this$01.currentCourse = $split(result, '@');
  $setText_0(this$static.this$01.courseNameTb, this$static.this$01.currentCourse[0]);
  $setText_0(this$static.this$01.startDateTb, this$static.this$01.currentCourse[1]);
  $setText_0(this$static.this$01.endDateTb, this$static.this$01.currentCourse[2]);
  $add_1(this$static.this$01.hPanelBtn, this$static.this$01.confirmBtn);
  $add_1(this$static.this$01.hPanelBtn, this$static.this$01.deleteBtn);
  $add_2(this$static.this$01.vPanel, new Label('MODIFICA CORSO'));
  $add_2(this$static.this$01.vPanel, new Label('Nome Corso:'));
  $add_2(this$static.this$01.vPanel, this$static.this$01.courseNameTb);
  $add_2(this$static.this$01.vPanel, new Label('Data Inizio:'));
  $add_2(this$static.this$01.vPanel, this$static.this$01.startDateTb);
  $add_2(this$static.this$01.vPanel, new Label('Data fine:'));
  $add_2(this$static.this$01.vPanel, this$static.this$01.endDateTb);
  $add_2(this$static.this$01.vPanel, this$static.this$01.hPanelBtn);
  $initSubscribedStudents(this$static.this$01);
  $setWidth(this$static.this$01.subscribedStudentsTa, '221px');
  $add_2(this$static.this$01.vPanel, this$static.this$01.subscribedStudentsTa);
}

function ProfessorCoursesModifierComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(282, 1, {}, ProfessorCoursesModifierComponent$1);
_.onSuccess = function onSuccess_10(result){
  $onSuccess_7(this, castToString(result));
}
;
_.onFailure = function onFailure_10(caught){
  $wnd.alert('Non riesco a trovare le informazioni sul server.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/1', 282);
function $onSuccess_8(this$static, result){
  $setText_0(this$static.this$01.subscribedStudentsTa, 'LISTA STUDENTI ISCRITTI:\n' + result);
}

function ProfessorCoursesModifierComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(283, 1, {}, ProfessorCoursesModifierComponent$2);
_.onSuccess = function onSuccess_11(result){
  $onSuccess_8(this, castToString(result));
}
;
_.onFailure = function onFailure_11(caught){
  $wnd.alert('Errore server.\nLista studenti iscritti al corso non aggiornata');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/2', 283);
function ProfessorCoursesModifierComponent$confirmBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(278, 1, $intern_14, ProfessorCoursesModifierComponent$confirmBtnHandler);
_.onClick = function onClick_7(event_0){
  var end, start_0;
  if (!$equals_1($getText(this.this$01.courseNameTb), '') && !$equals_1($getText(this.this$01.startDateTb), '') && !$equals_1($getText(this.this$01.endDateTb), '')) {
    try {
      start_0 = $parse_0(($clinit_DateTimeFormat() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0)))), $getText(this.this$01.startDateTb));
      end = $parse_0(getFormat($getDateTimeFormatInfo((null , instance_0))), $getText(this.this$01.endDateTb));
      if (gt(fromDouble_0(end.jsdate.getTime()), fromDouble_0(start_0.jsdate.getTime())) && $after(start_0, new Date_0)) {
        !connService && (connService = new ConnService_Proxy);
        $setCourseData(connService, this.this$01.initialCourseName, $getText(this.this$01.startDateTb), $getText(this.this$01.endDateTb), $getText(this.this$01.courseNameTb), new ProfessorCoursesModifierComponent$confirmBtnHandler$1);
      }
       else {
        $wnd.alert('Date inserite non corrette');
        $setText_0(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
        $setText_0(this.this$01.startDateTb, this.this$01.currentCourse[1]);
        $setText_0(this.this$01.endDateTb, this.this$01.currentCourse[2]);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 30)) {
        $wnd.alert('Formato data non valido\ninserire: giorno/mese/anno');
        $setText_0(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
        $setText_0(this.this$01.startDateTb, this.this$01.currentCourse[1]);
        $setText_0(this.this$01.endDateTb, this.this$01.currentCourse[2]);
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    $wnd.alert('campi vuoti');
    $setText_0(this.this$01.courseNameTb, this.this$01.currentCourse[0]);
    $setText_0(this.this$01.startDateTb, this.this$01.currentCourse[1]);
    $setText_0(this.this$01.endDateTb, this.this$01.currentCourse[2]);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$confirmBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/confirmBtnHandler', 278);
function $onSuccess_9(result){
  (checkCriticalNotNull(result) , result) && ($wnd.alert('Corso aggiornato') , undefined);
}

function ProfessorCoursesModifierComponent$confirmBtnHandler$1(){
}

defineClass(280, 1, {}, ProfessorCoursesModifierComponent$confirmBtnHandler$1);
_.onSuccess = function onSuccess_12(result){
  $onSuccess_9(castToBoolean(result));
}
;
_.onFailure = function onFailure_12(caught){
  $wnd.alert('Errore aggiornamento dati.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$confirmBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/confirmBtnHandler/1', 280);
function ProfessorCoursesModifierComponent$deleteBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(279, 1, $intern_14, ProfessorCoursesModifierComponent$deleteBtnHandler);
_.onClick = function onClick_8(event_0){
  !connService && (connService = new ConnService_Proxy);
  $deleteCourse(connService, this.this$01.initialCourseName, new ProfessorCoursesModifierComponent$deleteBtnHandler$1(this));
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$deleteBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/deleteBtnHandler', 279);
function $onSuccess_10(this$static, result){
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

defineClass(281, 1, {}, ProfessorCoursesModifierComponent$deleteBtnHandler$1);
_.onSuccess = function onSuccess_13(result){
  $onSuccess_10(this, castToBoolean(result));
}
;
_.onFailure = function onFailure_13(caught){
  $wnd.alert('Errore server');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorCoursesModifierComponent$deleteBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorCoursesModifierComponent/deleteBtnHandler/1', 281);
function ProfessorExamCreationComponent(){
  this.widgetBasePanel = new VerticalPanel;
  this.courseNameBox = new TextBox;
  this.examDateBox = new TextBox;
  this.examHourBox = new TextBox;
  this.classroomBox = new TextBox;
  this.durationBox = new TextBox;
  this.confirmCreationButton = new Button('Crea esame');
  $initWidget(this, this.widgetBasePanel);
  $add_2(this.widgetBasePanel, new Label('CREA NUOVO ESAME'));
  $add_2(this.widgetBasePanel, new Label('Nome corso: '));
  $add_2(this.widgetBasePanel, this.courseNameBox);
  $add_2(this.widgetBasePanel, new Label('Data esame: [GG/MM/YYYY]'));
  $add_2(this.widgetBasePanel, this.examDateBox);
  $add_2(this.widgetBasePanel, new Label('Orario esame: [HH:MM]'));
  $add_2(this.widgetBasePanel, this.examHourBox);
  $add_2(this.widgetBasePanel, new Label('Aula: '));
  $add_2(this.widgetBasePanel, this.classroomBox);
  $add_2(this.widgetBasePanel, new Label('Durata esame(minuti): '));
  $add_2(this.widgetBasePanel, this.durationBox);
  $add_2(this.widgetBasePanel, new Label('email prof: ' + (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email));
  $add_2(this.widgetBasePanel, this.confirmCreationButton);
  $addDomHandler(this.confirmCreationButton, new ProfessorExamCreationComponent$confirmCreationButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(247, 307, $intern_13, ProfessorExamCreationComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent', 247);
function ProfessorExamCreationComponent$confirmCreationButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(248, 1, $intern_14, ProfessorExamCreationComponent$confirmCreationButtonHandler);
_.onClick = function onClick_9(event_0){
  var demostudents;
  demostudents = new ArrayList;
  !connService && (connService = new ConnService_Proxy);
  $addExam(connService, $getText(this.this$01.courseNameBox), $getText(this.this$01.examDateBox), $getText(this.this$01.examHourBox), (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getText(this.this$01.classroomBox), $getText(this.this$01.durationBox), demostudents, new ProfessorExamCreationComponent$confirmCreationButtonHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent$confirmCreationButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent/confirmCreationButtonHandler', 248);
function ProfessorExamCreationComponent$confirmCreationButtonHandler$1(){
}

defineClass(249, 1, {}, ProfessorExamCreationComponent$confirmCreationButtonHandler$1);
_.onSuccess = function onSuccess_14(result){
  alert_0(' ' + castToString(result));
}
;
_.onFailure = function onFailure_14(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_ProfessorExamCreationComponent$confirmCreationButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'ProfessorExamCreationComponent/confirmCreationButtonHandler/1', 249);
function $retrieveExams_0(this$static){
  !connService && (connService = new ConnService_Proxy);
  $retrieveExams(connService, new SendGradesComponent$2(this$static));
}

function $retrieveStudents_0(this$static, selectedExam){
  !connService && (connService = new ConnService_Proxy);
  $retrieveStudents(connService, selectedExam, new SendGradesComponent$1(this$static));
}

function $sendGrades_0(this$static){
  var gradesList, selectedExam, studentsList;
  gradesList = $split($getText(this$static.gradesArea), '\n');
  studentsList = $split($getText(this$static.studentsArea), '\n');
  selectedExam = $getSelectedItemText(this$static.examsList);
  !connService && (connService = new ConnService_Proxy);
  $sendGrades(connService, selectedExam, studentsList, gradesList, new SendGradesComponent$3(this$static));
}

function SendGradesComponent(){
  this.vPanel = new VerticalPanel;
  this.subHPanel = new HorizontalPanel;
  this.examsList = new ListBox;
  this.searchExamsButton = new Button('cerca esami disponibili');
  this.sendGradesButton = new Button('invia i voti');
  this.studentsArea = new TextArea_0;
  this.gradesArea = new TextArea_0;
  $initWidget(this, this.vPanel);
  $add_2(this.vPanel, new Label("scegli l'esame"));
  $add_2(this.vPanel, this.examsList);
  $add_2(this.vPanel, this.searchExamsButton);
  $add_2(this.vPanel, this.subHPanel);
  $setHeight(this.gradesArea, '200px');
  $setWidth(this.gradesArea, '200px');
  $setHeight(this.studentsArea, '200px');
  $setWidth(this.studentsArea, '200px');
  $add_1(this.subHPanel, this.studentsArea);
  $add_1(this.subHPanel, this.gradesArea);
  $add_1(this.subHPanel, this.sendGradesButton);
  $addDomHandler(this.searchExamsButton, new SendGradesComponent$SearchButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this.sendGradesButton, new SendGradesComponent$SendGradesButtonHandler(this), (null , TYPE));
  $setWidth(this.examsList, '200px');
  $setVisibleItemCount(this.examsList, 5);
  $addDomHandler(this.examsList, new SendGradesComponent$ExamsListHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
}

defineClass(240, 307, $intern_13, SendGradesComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent', 240);
function $onSuccess_11(this$static, result){
  var student, student$iterator, temp;
  for (student$iterator = new ArrayList$1(result); student$iterator.i < student$iterator.this$01.array.length;) {
    student = castToString($next_1(student$iterator));
    temp = $getText(this$static.this$01.studentsArea);
    $setText_0(this$static.this$01.studentsArea, temp + ('' + student) + '\n');
  }
}

function SendGradesComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(244, 1, {}, SendGradesComponent$1);
_.onSuccess = function onSuccess_15(result){
  $onSuccess_11(this, castTo(result, 28));
}
;
_.onFailure = function onFailure_15(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/1', 244);
function $onSuccess_12(this$static, result){
  var i;
  for (i = 0; i < result.array.length; i++) {
    $insertItem(this$static.this$01.examsList, (checkCriticalElementIndex(i, result.array.length) , castToString(result.array[i])));
  }
  alert_0('esami trovati ' + result.array.length);
}

function SendGradesComponent$2(this$0){
  this.this$01 = this$0;
}

defineClass(245, 1, {}, SendGradesComponent$2);
_.onSuccess = function onSuccess_16(result){
  $onSuccess_12(this, castTo(result, 28));
}
;
_.onFailure = function onFailure_16(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/2', 245);
function $onSuccess_13(this$static){
  $wnd.alert('Inserimento avvenuto.');
  $clear(this$static.this$01.subHPanel);
}

function SendGradesComponent$3(this$0){
  this.this$01 = this$0;
}

defineClass(246, 1, {}, SendGradesComponent$3);
_.onSuccess = function onSuccess_17(result){
  var lastArg;
  $onSuccess_13((lastArg = this , castToBoolean(result) , lastArg));
}
;
_.onFailure = function onFailure_17(caught){
  $wnd.alert('Error. inserimento fallito.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$3_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/3', 246);
function SendGradesComponent$ExamsListHandler(this$0){
  this.this$01 = this$0;
}

defineClass(243, 1, $intern_15, SendGradesComponent$ExamsListHandler);
_.onDoubleClick = function onDoubleClick_2(event_0){
  var selectedExam;
  selectedExam = $getSelectedItemText(this.this$01.examsList);
  $retrieveStudents_0(this.this$01, selectedExam);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$ExamsListHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/ExamsListHandler', 243);
function SendGradesComponent$SearchButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(241, 1, $intern_14, SendGradesComponent$SearchButtonHandler);
_.onClick = function onClick_10(event_0){
  $retrieveExams_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$SearchButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/SearchButtonHandler', 241);
function SendGradesComponent$SendGradesButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(242, 1, $intern_14, SendGradesComponent$SendGradesButtonHandler);
_.onClick = function onClick_11(event_0){
  $sendGrades_0(this.this$01);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_SendGradesComponent$SendGradesButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'SendGradesComponent/SendGradesButtonHandler', 242);
function StudentCoursesSignUpComponent(){
  this.vPanel = new VerticalPanel;
  this.coursesList = new ListBox;
  this.submitBtn = new Button('ISCRIVITI');
  $initWidget(this, this.vPanel);
  !connService && (connService = new ConnService_Proxy);
  $retrieveAviableCourses(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentCoursesSignUpComponent$1(this));
  $add_2(this.vPanel, new Label('Elenco corsi disponibili'));
  $add_2(this.vPanel, this.coursesList);
  $addDomHandler(this.submitBtn, new StudentCoursesSignUpComponent$submitBtnHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_2(this.vPanel, this.submitBtn);
}

defineClass(229, 307, $intern_13, StudentCoursesSignUpComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent', 229);
function $onSuccess_14(this$static, result){
  var i;
  this$static.this$01.courses = $split(result, '@');
  for (i = 0; i < result.length; i++) {
    $insertItem(this$static.this$01.coursesList, this$static.this$01.courses[i]);
  }
  $setVisibleItemCount(this$static.this$01.coursesList, this$static.this$01.courses.length);
}

function StudentCoursesSignUpComponent$1(this$0){
  this.this$01 = this$0;
}

defineClass(232, 1, {}, StudentCoursesSignUpComponent$1);
_.onSuccess = function onSuccess_18(result){
  $onSuccess_14(this, castToString(result));
}
;
_.onFailure = function onFailure_18(caught){
  $wnd.alert('Impossibile visualizzare i corsi disponibili');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/1', 232);
function StudentCoursesSignUpComponent$submitBtnHandler(this$0){
  this.this$01 = this$0;
}

defineClass(230, 1, $intern_14, StudentCoursesSignUpComponent$submitBtnHandler);
_.onClick = function onClick_12(event_0){
  !connService && (connService = new ConnService_Proxy);
  $courseRegistration(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, $getSelectedItemText(this.this$01.coursesList), new StudentCoursesSignUpComponent$submitBtnHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$submitBtnHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/submitBtnHandler', 230);
function StudentCoursesSignUpComponent$submitBtnHandler$1(){
}

defineClass(231, 1, {}, StudentCoursesSignUpComponent$submitBtnHandler$1);
_.onSuccess = function onSuccess_19(result){
  castToBoolean(result);
  $wnd.alert('Iscrizione avvenuta con successo.');
}
;
_.onFailure = function onFailure_19(caught){
  $wnd.alert('Errore server. Iscrizione fallita.');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentCoursesSignUpComponent$submitBtnHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentCoursesSignUpComponent/submitBtnHandler/1', 231);
function StudentExamsSubscriptionAviable(){
  this.vPanel = new VerticalPanel;
  this.examsLb = new ListBox;
  this.confirmButton = new Button('iscriviti');
  $initWidget(this, this.vPanel);
  !connService && (connService = new ConnService_Proxy);
  $retrieveSubscribedCourses(connService, (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentExamsSubscriptionAviable$1(this));
  !connService && (connService = new ConnService_Proxy);
  $getAvailableExams(connService, this.courses, new StudentExamsSubscriptionAviable$2(this));
  $setVisibleItemCount(this.examsLb, $getElement(this.examsLb).options.length);
  $add_2(this.vPanel, new Label('CORSI A CUI SEI ISCRITTO:'));
  $add_2(this.vPanel, this.examsLb);
  $add_2(this.vPanel, this.confirmButton);
  $addDomHandler(this.confirmButton, new StudentExamsSubscriptionAviable$ConfirmButtonHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(272, 307, $intern_13, StudentExamsSubscriptionAviable);
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSubscriptionAviable_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSubscriptionAviable', 272);
function $onSuccess_15(this$static, result){
  this$static.this$01.courses = $split(result, '\n');
}

function StudentExamsSubscriptionAviable$1(this$0){
  this.this$01 = this$0;
}

defineClass(275, 1, {}, StudentExamsSubscriptionAviable$1);
_.onSuccess = function onSuccess_20(result){
  $onSuccess_15(this, castToString(result));
}
;
_.onFailure = function onFailure_20(caught){
  $wnd.alert('ERROR: impossibile ottenere corsi');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSubscriptionAviable$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSubscriptionAviable/1', 275);
function $onSuccess_16(this$static, result){
  var i;
  this$static.this$01.exams = $split(result, '\n');
  for (i = 0; i < this$static.this$01.exams.length; i++) {
    $insertItem(this$static.this$01.examsLb, this$static.this$01.exams[i]);
  }
}

function StudentExamsSubscriptionAviable$2(this$0){
  this.this$01 = this$0;
}

defineClass(276, 1, {}, StudentExamsSubscriptionAviable$2);
_.onSuccess = function onSuccess_21(result){
  $onSuccess_16(this, castToString(result));
}
;
_.onFailure = function onFailure_21(caught){
  $wnd.alert('ERROR: impossibile visualizzare esami');
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSubscriptionAviable$2_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSubscriptionAviable/2', 276);
function StudentExamsSubscriptionAviable$ConfirmButtonHandler(this$0){
  this.this$01 = this$0;
}

defineClass(273, 1, $intern_14, StudentExamsSubscriptionAviable$ConfirmButtonHandler);
_.onClick = function onClick_13(event_0){
  !connService && (connService = new ConnService_Proxy);
  $registerStudentInExam(connService, $getSelectedItemText(this.this$01.examsLb), (!currentSession && (currentSession = new Session(($clinit_UserState() , NOT_SIGNED))) , currentSession).email, new StudentExamsSubscriptionAviable$ConfirmButtonHandler$1);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSubscriptionAviable$ConfirmButtonHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSubscriptionAviable/ConfirmButtonHandler', 273);
function $onSuccess_17(result){
  (checkCriticalNotNull(result) , result) && ($wnd.alert('iscritto') , undefined);
}

function StudentExamsSubscriptionAviable$ConfirmButtonHandler$1(){
}

defineClass(274, 1, {}, StudentExamsSubscriptionAviable$ConfirmButtonHandler$1);
_.onSuccess = function onSuccess_22(result){
  $onSuccess_17(castToBoolean(result));
}
;
_.onFailure = function onFailure_22(caught){
  $wnd.alert('ERROR: ' + caught);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_dashboards_settings_StudentExamsSubscriptionAviable$ConfirmButtonHandler$1_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.dashboards.settings', 'StudentExamsSubscriptionAviable/ConfirmButtonHandler/1', 274);
function $cleanhPanel(this$static){
  $remove_0(this$static.baseVPanel, this$static.adminCreateUserComp);
  $remove_0(this$static.baseVPanel, this$static.studentsListComp);
  $remove_0(this$static.baseVPanel, this$static.professorsListComp);
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

defineClass(201, 307, $intern_13, AdminMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_AdminMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'AdminMenuComponent', 201);
function AdminMenuComponent$actionsListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(202, 1, $intern_15, AdminMenuComponent$actionsListBoxHandler);
_.onDoubleClick = function onDoubleClick_3(event_0){
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
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_AdminMenuComponent$actionsListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'AdminMenuComponent/actionsListBoxHandler', 202);
function $cleanhPanel_0(this$static){
  $remove_0(this$static.hPanel, this$static.courseQuaryList);
  $remove_0(this$static.hPanel, this$static.sendGradesView);
  $remove_0(this$static.hPanel, this$static.infoView);
  $remove_0(this$static.hPanel, this$static.professorExamCreationView);
}

function ProfessorMenuComponent(){
  this.hPanel = new HorizontalPanel;
  this.actionsListBox = new ListBox;
  this.courseQuaryList = new ProfessorCoursesListComponent;
  this.infoView = new PersonalInfoComponent;
  this.sendGradesView = new SendGradesComponent;
  this.professorExamCreationView = new ProfessorExamCreationComponent;
  $initWidget(this, this.hPanel);
  $addDomHandler(this.actionsListBox, new ProfessorMenuComponent$ListBoxHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $insertItem(this.actionsListBox, 'gestisci corsi');
  $insertItem(this.actionsListBox, 'crea esame');
  $insertItem(this.actionsListBox, 'invia voti esami');
  $insertItem(this.actionsListBox, 'visualizza informazioni personali');
  $setVisibleItemCount(this.actionsListBox, 4);
  $add_1(this.hPanel, this.actionsListBox);
}

defineClass(197, 307, $intern_13, ProfessorMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_ProfessorMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'ProfessorMenuComponent', 197);
function ProfessorMenuComponent$ListBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(198, 1, $intern_15, ProfessorMenuComponent$ListBoxHandler);
_.onDoubleClick = function onDoubleClick_4(event_0){
  var userchoice;
  $cleanhPanel_0(this.this$01);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      $add_1(this.this$01.hPanel, this.this$01.courseQuaryList);
      break;
    case 1:
      $add_1(this.this$01.hPanel, this.this$01.professorExamCreationView);
      break;
    case 2:
      $add_1(this.this$01.hPanel, this.this$01.sendGradesView);
      break;
    case 3:
      $add_1(this.this$01.hPanel, this.this$01.infoView);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_ProfessorMenuComponent$ListBoxHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'ProfessorMenuComponent/ListBoxHandler', 198);
function $clearPanel(this$static){
  $remove_1(this$static.vPanel, this$static.infoStudentView);
}

function SecretaryMenuComponent(){
  this.vPanel = new VerticalPanel;
  this.actionsListBox = new ListBox;
  this.confirmButton = new Button('Conferma');
  this.infoStudentView = new InfoStudentListComponent;
  $initWidget(this, this.vPanel);
  $insertItem(this.actionsListBox, 'visualizza i dati degli studenti');
  $insertItem(this.actionsListBox, "inserisci voti d'esame");
  $insertItem(this.actionsListBox, 'pubblica voti esame');
  $setVisibleItemCount(this.actionsListBox, 3);
  $setWidth(this.confirmButton, '200px');
  $addDomHandler(this.confirmButton, new SecretaryMenuComponent$buttonConfirmHandler(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $add_2(this.vPanel, this.actionsListBox);
  $add_2(this.vPanel, this.confirmButton);
}

defineClass(199, 307, $intern_13, SecretaryMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_SecretaryMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'SecretaryMenuComponent', 199);
function SecretaryMenuComponent$buttonConfirmHandler(this$0){
  this.this$01 = this$0;
}

defineClass(200, 1, $intern_14, SecretaryMenuComponent$buttonConfirmHandler);
_.onClick = function onClick_14(event_0){
  var userchoice;
  $clearPanel(this.this$01);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  userchoice == 0 && $add_2(this.this$01.vPanel, this.this$01.infoStudentView);
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_SecretaryMenuComponent$buttonConfirmHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'SecretaryMenuComponent/buttonConfirmHandler', 200);
function $cleanhPanel_1(this$static){
  $remove_1(this$static.hPanel, this$static.infoView);
  $remove_1(this$static.hPanel, this$static.coursesListView);
  $remove_1(this$static.hPanel, this$static.courseSignUpView);
  $remove_1(this$static.hPanel, this$static.gradesView);
}

function StudentMenuComponent(){
  this.hPanel = new VerticalPanel;
  this.actionsListBox = new ListBox;
  this.infoView = new PersonalInfoComponent;
  this.coursesListView = new CoursesListComponent;
  this.courseSignUpView = new StudentCoursesSignUpComponent;
  this.gradesView = new GradesViewComponent;
  $initWidget(this, this.hPanel);
  $insertItem(this.actionsListBox, 'visualizza lista corsi disponibili');
  $insertItem(this.actionsListBox, 'iscriviti ad un corso');
  $insertItem(this.actionsListBox, 'registrati ad un esame');
  $insertItem(this.actionsListBox, 'visualizza le tue informazioni personali');
  $insertItem(this.actionsListBox, 'visualizza i tuoi voti');
  $setVisibleItemCount(this.actionsListBox, 5);
  $addDomHandler(this.actionsListBox, new StudentMenuComponent$ActionsListBoxDCHandler(this), ($clinit_DoubleClickEvent() , $clinit_DoubleClickEvent() , TYPE_0));
  $add_2(this.hPanel, this.actionsListBox);
}

defineClass(195, 307, $intern_13, StudentMenuComponent);
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_StudentMenuComponent_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'StudentMenuComponent', 195);
function StudentMenuComponent$ActionsListBoxDCHandler(this$0){
  this.this$01 = this$0;
}

defineClass(196, 1, $intern_15, StudentMenuComponent$ActionsListBoxDCHandler);
_.onDoubleClick = function onDoubleClick_5(event_0){
  var userchoice;
  $cleanhPanel_1(this.this$01);
  userchoice = $getElement(this.this$01.actionsListBox).selectedIndex;
  switch (userchoice) {
    case 0:
      $add_2(this.this$01.hPanel, this.this$01.coursesListView);
      break;
    case 1:
      $add_2(this.this$01.hPanel, this.this$01.courseSignUpView);
      break;
    case 2:
      this.this$01.examView = new StudentExamsSubscriptionAviable;
      $add_2(this.this$01.hPanel, this.this$01.examView);
      break;
    case 3:
      $add_2(this.this$01.hPanel, this.this$01.infoView);
      break;
    case 4:
      $add_2(this.this$01.hPanel, this.this$01.gradesView);
  }
}
;
var Lcom_google_gwt_sample_progettoingegneria_client_menucomponents_StudentMenuComponent$ActionsListBoxDCHandler_2_classLit = createForClass('com.google.gwt.sample.progettoingegneria.client.menucomponents', 'StudentMenuComponent/ActionsListBoxDCHandler', 196);
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

function values_2(){
  $clinit_UserState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit, 1), $intern_0, 33, 0, [STUDENT, PROFESSOR, SECRETARY, ADMIN, WRONG_PASSWORD, NOT_SIGNED]);
}

defineClass(33, 15, {33:1, 3:1, 14:1, 15:1}, UserState);
var ADMIN, NOT_SIGNED, PROFESSOR, SECRETARY, STUDENT, WRONG_PASSWORD;
var Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit = createForEnum('com.google.gwt.sample.progettoingegneria.shared', 'UserState', 33, Ljava_lang_Enum_2_classLit, values_2);
function deserialize(streamReader, instance){
}

function instantiate(streamReader){
  var ordinal, values;
  ordinal = streamReader.results[--streamReader.index_0];
  values = ($clinit_UserState() , stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_sample_progettoingegneria_shared_UserState_2_classLit, 1), $intern_0, 33, 0, [STUDENT, PROFESSOR, SECRETARY, ADMIN, WRONG_PASSWORD, NOT_SIGNED]));
  return values[ordinal];
}

defineClass(322, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 322);
function PassthroughParser(){
}

defineClass(269, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 269);
function PassthroughRenderer(){
}

defineClass(268, 322, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 268);
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
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['CSS1Compat']);
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
  return addHandler(TYPE_1?TYPE_1:(TYPE_1 = new GwtEvent$Type), handler);
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
  closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
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
  TYPE_2 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(151, 314, {}, Window$ClosingEvent);
_.dispatch = function dispatch_2(handler){
  checkCriticalType(handler == null);
  null.$_nullMethod();
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
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 151);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(97, 83, {8:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 97);
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
      return $intern_16;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_9;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_10;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_17;
    case 'gesturechange':
      return $intern_18;
    case 'gestureend':
      return $intern_19;
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
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 10)?maybeListener:null;
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
  chMask & $intern_16 && (elem.onerror = bits & $intern_16?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_9 && (elem.onpaste = bits & $intern_9?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_10 && (elem.ontouchend = bits & $intern_10?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturestart = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongesturechange = bits & $intern_18?dispatchEvent_1:null);
  chMask & $intern_19 && (elem.ongestureend = bits & $intern_19?dispatchEvent_1:null);
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

defineClass(76, 6, $intern_1, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 76);
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

defineClass(67, 6, $intern_1, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 67);
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

defineClass(267, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 267);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(205, 6, $intern_1, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 205);
function deserialize_1(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_1(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(16, 54, {16:1, 3:1, 4:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 16);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(191, 67, $intern_1, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 191);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(286, 67, $intern_1, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 286);
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
    obj = $next_1(obj$iterator);
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

defineClass(106, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 106);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = this$static.results[--this$static.index_0];
  if (token < 0) {
    return $get_0(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_4(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(290, 106, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 290);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 43);
  if (o) {
    return o.value_0;
  }
  $add_4(this$static.stringTable, string);
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
  objIndex = $containsKey(this$static.objectMap, instance)?castTo($get(this$static.objectMap, instance), 43).value_0:-1;
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

defineClass(261, 106, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 261);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  var versionStr, pos;
  (versionStr = $substring(encoded, encoded.lastIndexOf(',') + 1, encoded.lastIndexOf(']')) , pos = versionStr.lastIndexOf('[') , pos >= 0 && (versionStr = versionStr.substr(pos + 1)) , __parseAndValidateInt($trim(versionStr))) < 8?(this$static.results = eval(encoded)):(this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
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

defineClass(291, 290, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 291);
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
  if (instanceOf(o, 15)) {
    e = castTo(o, 15);
    clazz = (clazz_0 = e.___clazz , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_0(this$static){
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
    s = castToString($next_1(s$iterator));
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

defineClass(262, 261, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_12(){
  return $toString_0(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 262);
function $finish_0(this$static, callback, responseHeader){
  var payload;
  payload = $toString_0(this$static.streamWriter);
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

defineClass(19, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 19);
function $onError(this$static, exception){
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    !!$stats && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals_1(encodedResponse.substr(0, 4), '//OK')?(result = this$static.responseReader.read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals_1(encodedResponse.substr(0, 4), '//EX')?(caught = castTo($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 4)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 4)) {
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

defineClass(211, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 211);
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

function values_3(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_0, 21, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(21, 15, $intern_20);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 21, Ljava_lang_Enum_2_classLit, values_3);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(212, 21, $intern_20, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader){
  return $clinit_Boolean() , streamReader.results[--streamReader.index_0]?true:false;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 212, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(221, 21, $intern_20, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 221, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(222, 21, $intern_20, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader){
  return null;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 222, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(213, 21, $intern_20, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 213, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(214, 21, $intern_20, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader){
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 214, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(215, 21, $intern_20, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader){
  return Number(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 215, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(216, 21, $intern_20, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader){
  return new Float(Number(streamReader.results[--streamReader.index_0]));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 216, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(217, 21, $intern_20, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader){
  return valueOf_1(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 217, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(218, 21, $intern_20, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader){
  var s;
  return valueOf_2((s = streamReader.results[--streamReader.index_0] , longFromBase64(s)));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 218, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(219, 21, $intern_20, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader){
  return $readObject(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 219, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(220, 21, $intern_20, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader){
  return valueOf_3(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 220, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
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

defineClass(105, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 105);
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
    $next(it);
    $remove_4(it);
  }
}

defineClass(308, 5, $intern_21);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 308);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
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
    $remove_3(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(92, 308, $intern_21);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 92);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(124, 92, $intern_21);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 124);
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
      c.execute_0(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
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

defineClass(125, 93, $intern_3, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 125);
function AttachDetachException$1(){
}

defineClass(126, 1, {}, AttachDetachException$1);
_.execute_0 = function execute_2(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 126);
function AttachDetachException$2(){
}

defineClass(127, 1, {}, AttachDetachException$2);
_.execute_0 = function execute_3(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 127);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(86, 5, $intern_13);
_.onAttach = function onAttach_1(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 86);
function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(162, 86, $intern_13);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 162);
function Button(html){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
  $setInnerHTML(this.element, html);
}

defineClass(23, 162, $intern_13, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 23);
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

defineClass(94, 92, $intern_21);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 94);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(172, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 172);
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
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
defineClass(309, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 309);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(73, 309, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 73);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(81, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 81);
function $add_1(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $remove_0(this$static, w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this$static, w);
  removed && $removeChild(this$static.tableRow, td);
  return removed;
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

defineClass(26, 94, $intern_21, HorizontalPanel);
_.remove = function remove_1(w){
  return $remove_0(this, w);
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

defineClass(50, 5, $intern_13, Image_0);
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
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 50);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals_1('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(133, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 133);
function $execute(this$static){
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

defineClass(135, 1, {}, Image$State$1);
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 135);
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

defineClass(134, 133, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 134);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(98, 5, $intern_13);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 98);
function Label(text_0){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
  $setTextOrHtml(this.directionalTextHelper, text_0);
}

defineClass(13, 98, $intern_13, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 13);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= ($clinit_DOM() , this$static.element).options.length) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getOptionText(option){
  var text_0;
  text_0 = option.text;
  option.hasAttribute('bidiwrapped') && text_0.length > 1 && (text_0 = $substring(text_0, 1, text_0.length - 1));
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

defineClass(31, 86, $intern_13, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 31);
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
    $remove_6(widgetsToDetach, widget);
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
  rp = castTo($get(rootPanels, null), 72);
  if (rp) {
    return rp;
  }
  if ($size(rootPanels) == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(72, 124, $intern_22);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 72);
function RootPanel$1(){
}

defineClass(129, 1, {}, RootPanel$1);
_.execute_0 = function execute_4(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 129);
function RootPanel$2(){
}

defineClass(130, 1, {325:1, 22:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 130);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(128, 72, $intern_22, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 128);
function $getText(this$static){
  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');
}

function $setText_0(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(206, 86, $intern_13);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 206);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  var lastArg;
  ValueBoxBase.call(this, (lastArg = elem , !INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , lastArg));
}

defineClass(103, 206, $intern_13);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 103);
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

defineClass(51, 103, $intern_13, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 51);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  TextBoxBase.call(this, element);
  ($clinit_DOM() , this.element).className = 'gwt-TextBox';
}

defineClass(20, 103, $intern_13, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 20);
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

function values_4(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_0, 34, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(34, 15, $intern_23);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 34, Ljava_lang_Enum_2_classLit, values_4);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(207, 34, $intern_23, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 207, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(208, 34, $intern_23, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 208, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(209, 34, $intern_23, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 209, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(210, 34, $intern_23, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 210, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_2(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $remove_1(this$static, w){
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

defineClass(17, 94, $intern_21, VerticalPanel);
_.remove = function remove_2(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 17);
function $add_3(this$static, w){
  $insert(this$static, w, this$static.size_0);
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

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 5, this$static.array.length * 2, 0, 1);
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

function $remove_2(this$static, index_0){
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

function $remove_3(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_2(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 5, 4, 0, 1);
}

defineClass(160, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 160);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_4(this$static){
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

defineClass(85, 1, {}, WidgetCollection$WidgetIterator);
_.next_0 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 85);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1('ie10', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(41, 4, $intern_24);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 41);
defineClass(25, 41, $intern_24);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 25);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_9('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(111, 25, $intern_24, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 111);
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

defineClass(155, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 155);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(156, 1, {327:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 156);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(79, 1, {116:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 79);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(132, 6, $intern_1, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 132);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(48, 6, $intern_1, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 48);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(184, 48, $intern_1, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 184);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(131, 6, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 131);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {3:1, 117:1, 14:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 117);
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
  isTooLow = toReturn < $intern_6;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(47, 1, {3:1, 47:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 47);
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

defineClass(61, 47, {3:1, 61:1, 14:1, 47:1}, Byte);
_.equals_0 = function equals_3(o){
  return instanceOf(o, 61) && castTo(o, 61).value_0 == this.value_0;
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
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 61);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Byte_2_classLit, $intern_0, 61, 256, 0, 1);
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

defineClass(55, 1, {3:1, 55:1, 14:1}, Character);
_.equals_0 = function equals_4(o){
  return instanceOf(o, 55) && castTo(o, 55).value_0 == this.value_0;
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
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 55);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Character_2_classLit, $intern_0, 55, 128, 0, 1);
}

var boxedValues_0;
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(118, 6, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 118);
function $equals_0(this$static, o){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(o);
}

doubleCastMap = {3:1, 14:1, 47:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 303);
function Float(value_0){
  this.value_0 = value_0;
}

defineClass(69, 47, {3:1, 14:1, 69:1, 47:1}, Float);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 69) && $equals_0(this.value_0, castTo(o, 69).value_0);
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
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 69);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(30, 6, $intern_25, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 30);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(35, 6, $intern_1, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 35);
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

defineClass(43, 47, {3:1, 14:1, 43:1, 47:1}, Integer);
_.equals_0 = function equals_6(o){
  return instanceOf(o, 43) && castTo(o, 43).value_0 == this.value_0;
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
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 43);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_0, 43, 256, 0, 1);
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

defineClass(56, 47, {3:1, 14:1, 56:1, 47:1}, Long);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 56) && eq(castTo(o, 56).value_0, this.value_0);
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
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 56);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_0, 56, 256, 0, 1);
}

var boxedValues_2;
defineClass(349, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(49, 80, $intern_1, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 49);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(70, 30, $intern_25, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 70);
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

defineClass(57, 47, {3:1, 14:1, 47:1, 57:1}, Short);
_.equals_0 = function equals_8(o){
  return instanceOf(o, 57) && castTo(o, 57).value_0 == this.value_0;
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
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 57);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_3 = initUnidimensionalArray(Ljava_lang_Short_2_classLit, $intern_0, 57, 256, 0, 1);
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
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 0, 6, 1);
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
      trail = $substring(trail, matchIndex + matchObj[0].length, trail.length);
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

function $substring(this$static, beginIndex, endIndex){
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
  if (codePoint >= $intern_16) {
    hiSurrogate = 55296 + (codePoint - $intern_16 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_16 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & 65535);
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

stringCastMap = {3:1, 116:1, 14:1, 2:1};
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

defineClass(62, 79, {116:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 62);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(91, 48, $intern_1, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 91);
defineClass(353, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(112, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 112);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(71, 6, $intern_1, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 71);
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

defineClass(311, 1, {52:1});
_.add_0 = function add_2(o){
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
    $add_6(joiner, e === this?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 311);
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
    entry = $next_0(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(310, 1, {46:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 46);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
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
    entry = $next_0(entry$iterator);
    $add_6(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 310);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_1(this$static.stringMap, key);
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

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_7(this$static.hashCodeMap, null):$remove_8(this$static.stringMap, key):$remove_7(this$static.hashCodeMap, key);
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

defineClass(95, 310, {46:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get(this, key);
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
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 95);
defineClass(312, 311, $intern_26);
_.equals_0 = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 78)) {
    return false;
  }
  other = castTo(o, 78);
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
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 312);
function $contains(this$static, o){
  if (instanceOf(o, 40)) {
    return $containsEntry(this$static.this$01, castTo(o, 40));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(63, 312, $intern_26, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 63);
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

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 40);
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

defineClass(37, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 37);
defineClass(316, 311, {52:1, 42:1});
_.add_1 = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 42)) {
    return false;
  }
  other = castTo(o, 42);
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
_.iterator = function iterator_3(){
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 316);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(99, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_2(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 99);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(100, 99, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 100);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(143, 312, $intern_26, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 143);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(96, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_3(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 96);
defineClass(141, 1, $intern_27);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 40)) {
    return false;
  }
  entry = castTo(other, 40);
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
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 141);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(142, 141, $intern_27, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 142);
defineClass(317, 1, $intern_27);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 40)) {
    return false;
  }
  entry = castTo(other, 40);
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
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 317);
function $add_4(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_0(this$static, index_0){
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

function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(28, 316, {3:1, 28:1, 52:1, 42:1}, ArrayList);
_.add_1 = function add_5(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_6(o){
  return $add_4(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_0(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_5(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.toArray = function toArray_0(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(66, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_4(){
  return $next_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 66);
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

defineClass(163, 316, {3:1, 52:1, 42:1}, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_6(){
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
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 163);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(164, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_5(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 164);
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

defineClass(183, 6, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 183);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(36, 95, {3:1, 46:1}, HashMap);
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
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 36);
function $add_5(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_6(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(82, 312, {3:1, 52:1, 78:1}, HashSet);
_.add_0 = function add_7(o){
  return $add_5(this, o);
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
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_7(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 82);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(271, 95, {3:1, 46:1}, IdentityHashMap);
_.equals_0 = function equals_15(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 46);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
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
    entry = $next_0(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 271);
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

function $remove_7(this$static, key){
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

defineClass(167, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_8(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 167);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(101, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_5(){
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
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 101);
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

function $get_1(this$static, key){
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

function $remove_8(this$static, key){
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

defineClass(168, 1, {}, InternalStringMap);
_.iterator = function iterator_9(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 168);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(102, 1, {}, InternalStringMap$1);
_.next_0 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 102);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_1(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(169, 317, $intern_27, InternalStringMap$2);
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
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 169);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(304, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 304);
function Locale$1(){
}

defineClass(119, 304, {}, Locale$1);
_.toString_0 = function toString_25(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 119);
function Locale$4(){
}

defineClass(120, 304, {}, Locale$4);
_.toString_0 = function toString_26(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 120);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(65, 6, $intern_1, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 65);
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

defineClass(176, 1, {});
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
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 176);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(177, 176, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 177);
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

defineClass(165, 1, {});
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
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 165);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(166, 165, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 166);
function $add_6(this$static, newElement){
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

defineClass(90, 1, {}, StringJoiner);
_.toString_0 = function toString_27(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 90);
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

function values_5(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 53, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(53, 15, {3:1, 14:1, 15:1, 53:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 53, Ljava_lang_Enum_2_classLit, values_5);
function CollectorImpl(){
  $clinit_Collections();
}

defineClass(185, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 185);
function Collectors$20methodref$add$Type(){
}

defineClass(114, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 114);
function Collectors$21methodref$ctor$Type(){
}

defineClass(113, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 113);
function Collectors$lambda$42$Type(){
}

defineClass(115, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 115);
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

defineClass(175, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 175);
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
  castTo(a_1, 52).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(75, 175, {75:1}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 75);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(178, 177, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 178);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(180, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  this.action_1.accept(castTo(arg0, 4).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 180);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(179, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 179);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(181, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 181);
function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

defineClass(351, 1, {});
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

defineClass(348, 1, {});
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
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=progettoingegneria-0.js

