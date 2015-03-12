var falcor = {};
var $TYPE = "$type",
    $SIZE = "$size",
    $EXPIRES = "$expires",
    $TIMESTAMP = "$timestamp";

var SENTINEL = "sentinel",
    ERROR = "error",
    VALUE = "value",
    EXPIRED = "expired",
    LEAF = "leaf";

var __GENERATION_GUID = 0,
    __GENERATION_VERSION = 0,
    __CONTAINER = "__reference_container",
    __CONTEXT = "__context",
    __GENERATION = "__generation",
    __GENERATION_UPDATED = "__generation_updated",
    __INVALIDATED = "__invalidated",
    __KEY = "__key",
    __KEYS = "__keys",
    __IS_KEY_SET = "__is_key_set",
    __NULL = "__null",
    __SELF = "./",
    __PARENT = "../",
    __REF = "__ref",
    __REF_INDEX = "__ref_index",
    __REFS_LENGTH = "__refs_length",
    __ROOT = "/",
    __OFFSET = "__offset",
    __FALKOR_EMPTY_OBJECT = '__FALKOR_EMPTY_OBJECT',
    
    __REFERENCE_KEYS = [__CONTAINER, __CONTEXT, __REF_INDEX],
    __REFERENCE_KEYS_PROPS = __REFERENCE_KEYS.reduce(buildKeysObject, Object.create(null)),
    
    __NODE_KEYS = [
        "__next", "__prev",
        __GENERATION, __GENERATION_UPDATED,
        __INVALIDATED, __REFS_LENGTH,
        __KEY, __SELF, __PARENT, __ROOT,
        $TYPE, $SIZE, $EXPIRES, $TIMESTAMP
    ],
    __NODE_KEYS_PROPS = __NODE_KEYS.reduce(buildKeysObject, Object.create(null)),
    
    __JSON_KEYS = [__GENERATION, __KEY],
    __JSON_KEYS_PROPS = __JSON_KEYS.reduce(buildKeysObject, Object.create(null)),
    __props     = Object.create(null);

function now() {
    return Date.now();
}

function NOOP() {};

function buildKeysObject(props, key) {
    return (props[key] = { writable: true }) && props;
}

falcor.__Internals = {};
falcor.Observable = Rx.Observable;
falcor.EXPIRES_NOW = 0;
falcor.EXPIRES_NEVER = 1;
