(function (console, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
var Main = function() { };
Main.__name__ = ["Main"];
Main.main = function() {
	new server_NFCEApp();
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
Type.__name__ = ["Type"];
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_rtti_Meta = function() { };
haxe_rtti_Meta.__name__ = ["haxe","rtti","Meta"];
haxe_rtti_Meta.getMeta = function(t) {
	return t.__meta__;
};
haxe_rtti_Meta.getFields = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	if(meta == null || meta.fields == null) return { }; else return meta.fields;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var js_node_Http = require("http");
var js_node_Os = require("os");
var js_node_Querystring = require("querystring");
var js_node_Url = require("url");
var js_node_buffer_Buffer = require("buffer").Buffer;
var nfce_NFCE = require("nfce-json").NFCE;
var nws_Resource = function(p_name) {
	if(p_name == null) p_name = "";
	this.m_type = js_Boot.getClass(this);
	this.m_type_name_full = Type.getClassName(this.m_type);
	this.m_type_name = this.m_type_name_full.split(".").pop();
	if(p_name == "") this.m_name = this.m_type_name + Std["int"](Math.random() * 16777215); else this.m_name = p_name;
	this.m_destroyed = false;
};
nws_Resource.__name__ = ["nws","Resource"];
nws_Resource.prototype = {
	get_name: function() {
		return this.m_name;
	}
	,set_name: function(v) {
		return this.m_name = v;
	}
	,get_destroyed: function() {
		return this.m_destroyed;
	}
	,get_metadata: function() {
		if(this.m_metadata != null) return this.m_metadata;
		var ml = this.m_metadata = [];
		var c = js_Boot.getClass(this);
		var cl = [];
		while(c != null) {
			cl.push(c);
			c = Type.getSuperClass(c);
		}
		cl.pop();
		cl.reverse();
		var _g = 0;
		while(_g < cl.length) {
			var it = cl[_g];
			++_g;
			var d = haxe_rtti_Meta.getFields(it);
			for (var f in d) { var md = { field: f, data: d[f]==null ? {} : d[f] }; ml.push(md); }
		}
		return this.m_metadata;
	}
	,Destroy: function() {
		this.OnDestroy();
		this.m_destroyed = true;
	}
	,OnDestroy: function() {
	}
	,Throw: function(p_error,p_data) {
	}
	,GetType: function() {
		return this.m_type;
	}
	,GetTypeName: function() {
		return this.m_type_name;
	}
	,GetTypeNameFull: function() {
		return this.m_type_name_full;
	}
	,__class__: nws_Resource
};
var nws_Entity = function(p_name) {
	if(p_name == null) p_name = "";
	nws_Resource.call(this,p_name);
	this.m_children = [];
	this.m_components = [];
	this.m_enabled = true;
};
nws_Entity.__name__ = ["nws","Entity"];
nws_Entity.__super__ = nws_Resource;
nws_Entity.prototype = $extend(nws_Resource.prototype,{
	get_app: function() {
		return nws_Application.instance;
	}
	,get_count: function() {
		return this.m_children.length;
	}
	,get_enabled: function() {
		return this.m_enabled;
	}
	,set_enabled: function(v) {
		this.m_enabled = v;
		var _g = 0;
		var _g1 = this.m_components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.set_enabled(v);
		}
		var _g2 = 0;
		var _g11 = this.m_children;
		while(_g2 < _g11.length) {
			var e = _g11[_g2];
			++_g2;
			e.set_enabled(v);
		}
		return v;
	}
	,Contains: function(p_entity) {
		return HxOverrides.indexOf(this.m_children,p_entity,0) >= 0;
	}
	,CreateChild: function(p_name,p_component) {
		var e = new nws_Entity(p_name);
		this.AddChild(e);
		if(p_component != null) return e.AddComponent(p_component);
		return e;
	}
	,AssertChild: function(p_name,p_component) {
		var e = this.GetChildByName(p_name);
		if(e == null) return this.CreateChild(p_name,p_component);
		if(p_component == null) return e;
		var c = e.GetComponent(p_component);
		if(c == null) c = e.AddComponent(p_component);
		return c;
	}
	,AddChild: function(p_entity) {
		if(this.Contains(p_entity)) return;
		this.m_children.push(p_entity);
	}
	,RemoveChild: function(p_entity) {
		if(!this.Contains(p_entity)) return;
		HxOverrides.remove(this.m_children,p_entity);
	}
	,GetChild: function(p_index) {
		if(p_index < 0) return null; else if(p_index >= this.m_children.length) return null; else return this.m_children[p_index];
	}
	,GetChildByName: function(p_name) {
		var _g = 0;
		var _g1 = this.m_children;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(e.get_name() == p_name) return e;
		}
		return null;
	}
	,Find: function(p_path) {
		var pl = p_path.split(".");
		if(pl.length <= 0) return null;
		var e = this;
		while(pl.length > 0) {
			var n = pl.shift();
			e = e.GetChildByName(n);
			if(e == null) return null;
		}
		return e;
	}
	,Traverse: function(p_callback) {
		if(p_callback != null) {
			if(!p_callback(this)) return;
		}
		var _g = 0;
		var _g1 = this.m_children;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			e.Traverse(p_callback);
		}
	}
	,AddComponent: function(p_type) {
		var c = Type.createInstance(p_type,[]);
		c.m_entity = this;
		c.OnCreate();
		global.setTimeout(function() {
			c.OnInitialize();
		},8);
		this.m_components.push(c);
		return c;
	}
	,GetComponent: function(p_type) {
		var _g = 0;
		var _g1 = this.m_components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(c,p_type)) return c;
		}
		return null;
	}
	,GetComponents: function(p_type) {
		var l = [];
		var _g = 0;
		var _g1 = this.m_components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(c,p_type)) l.push(c);
		}
		return l;
	}
	,GetComponentInChildren: function(p_type) {
		var _g = this;
		var res = null;
		this.Traverse(function(e) {
			if(res != null) return false;
			if(e == _g) return true;
			res = e.GetComponent(p_type);
			return res == null;
		});
		return res;
	}
	,GetComponentsInChildren: function(p_type) {
		var _g = this;
		var l = [];
		this.Traverse(function(e) {
			if(e == _g) return true;
			var _g1 = 0;
			var _g2 = e.m_components;
			while(_g1 < _g2.length) {
				var c = _g2[_g1];
				++_g1;
				if(js_Boot.__instanceof(c,p_type)) l.push(c);
			}
			return true;
		});
		return l;
	}
	,Notify: function(p_path,p_event,p_data) {
		var _g = 0;
		var _g1 = this.m_components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.get_enabled()) c.OnNotify(p_path,p_event,p_data);
		}
		var _g2 = 0;
		var _g11 = this.m_children;
		while(_g2 < _g11.length) {
			var e = _g11[_g2];
			++_g2;
			e.Notify(p_path,p_event,p_data);
		}
	}
	,Destroy: function() {
		while(this.m_components.length > 0) this.m_components[0].Destroy();
		var _g = 0;
		var _g1 = this.m_children;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			e.Destroy();
		}
		nws_Resource.prototype.Destroy.call(this);
	}
	,Throw: function(p_error,p_data) {
		if(this.m_components != null) {
			var _g = 0;
			var _g1 = this.m_components;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.OnError(p_error,p_data);
			}
		}
		if(this.m_children != null) {
			var _g2 = 0;
			var _g11 = this.m_children;
			while(_g2 < _g11.length) {
				var e = _g11[_g2];
				++_g2;
				e.Throw(p_error,p_data);
			}
		}
	}
	,__class__: nws_Entity
});
var nws_Application = function() {
	var _g = this;
	nws_Entity.call(this,"application");
	nws_Application.instance = this;
	this.verbose = 4;
	var _g1 = 0;
	var _g11 = process.argv;
	while(_g1 < _g11.length) {
		var a = _g11[_g1];
		++_g1;
		if(a.indexOf("-v") >= 0) this.verbose = a.length - 1;
	}
	process.on("uncaughtException",function(err) {
		_g.OnProcessError(err);
		_g.Throw(err);
	});
	console.log(this.GetTypeName() + "> Initialize verbose[" + this.verbose + "] hostname[" + this.get_host() + "]");
	this.OnInitialize();
};
nws_Application.__name__ = ["nws","Application"];
nws_Application.__super__ = nws_Entity;
nws_Application.prototype = $extend(nws_Entity.prototype,{
	get_host: function() {
		return js_node_Os.hostname();
	}
	,get_unix: function() {
		return !new RegExp("^win").test(process.platform);
	}
	,HasModule: function(p_module) {
		var exists = true;
		try {
			require(p_module);
		} catch( err ) {
			if (err instanceof js__$Boot_HaxeError) err = err.val;
			if( js_Boot.__instanceof(err,Error) ) {
				exists = false;
			} else throw(err);
		}
		return exists;
	}
	,Throw: function(p_error,p_data) {
		var en;
		if(p_error == null) en = ""; else en = "[" + p_error.name + "]";
		var em;
		if(p_error == null) em = ""; else em = "[" + p_error.message + "]";
		this.Log("Error " + en + em);
		if(p_error != null) console.log(p_error.stack);
		nws_Entity.prototype.Throw.call(this,p_error);
	}
	,Log: function(p_msg,p_level) {
		if(p_level == null) p_level = 0;
		if(p_level <= this.verbose) console.log(this.GetTypeName() + ">",p_msg);
	}
	,OnInitialize: function() {
	}
	,OnProcessError: function(p_error) {
	}
	,__class__: nws_Application
});
var nws_ApplicationMVC = function() {
	nws_Application.call(this);
};
nws_ApplicationMVC.__name__ = ["nws","ApplicationMVC"];
nws_ApplicationMVC.__super__ = nws_Application;
nws_ApplicationMVC.prototype = $extend(nws_Application.prototype,{
	__class__: nws_ApplicationMVC
});
var nws_component_Component = function() {
	nws_Resource.call(this,"");
	this.log = true;
	this.m_enabled = true;
};
nws_component_Component.__name__ = ["nws","component","Component"];
nws_component_Component.__super__ = nws_Resource;
nws_component_Component.prototype = $extend(nws_Resource.prototype,{
	get_entity: function() {
		return this.m_entity;
	}
	,get_enabled: function() {
		return this.m_enabled;
	}
	,set_enabled: function(v) {
		return this.m_enabled = v;
	}
	,get_app: function() {
		return this.get_entity().get_app();
	}
	,get_name: function() {
		return this.get_entity().get_name();
	}
	,Destroy: function() {
		HxOverrides.remove(this.m_entity.m_components,this);
		nws_Resource.prototype.Destroy.call(this);
	}
	,Throw: function(p_error,p_data) {
		this.get_entity().Throw(p_error,p_data);
	}
	,Log: function(p_message,p_level) {
		if(p_level == null) p_level = 0;
		if(this.log) {
			if(p_level <= this.get_app().verbose) console.log(this.GetTypeName() + ">",p_message);
		}
	}
	,OnCreate: function() {
	}
	,OnInitialize: function() {
	}
	,OnNotify: function(p_path,p_event,p_data) {
	}
	,OnError: function(p_error,p_data) {
	}
	,__class__: nws_component_Component
});
var nws_component_net_HttpComponent = function() {
	nws_component_Component.call(this);
};
nws_component_net_HttpComponent.__name__ = ["nws","component","net","HttpComponent"];
nws_component_net_HttpComponent.__super__ = nws_component_Component;
nws_component_net_HttpComponent.prototype = $extend(nws_component_Component.prototype,{
	get_port: function() {
		return this.m_port;
	}
	,get_server: function() {
		return this.m_server;
	}
	,get_listening: function() {
		return this.m_server != null;
	}
	,Listen: function(p_port) {
		var _g = this;
		if(this.get_listening()) {
			if(this.log) {
				if(0 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","[warning] port[" + p_port + "] already active!");
			}
			return;
		}
		this.m_port = p_port;
		this.m_server = js_node_Http.createServer($bind(this,this.RequestHandler));
		this.m_server.on("connection",$bind(this,this.ConnectionHandler));
		this.m_server.on("clientError",function(err,s) {
			_g.Throw(err,s);
		});
		try {
			this.m_server.listen(p_port);
			if(this.log) {
				if(1 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","Listening to port[" + p_port + "]");
			}
		} catch( err1 ) {
			if (err1 instanceof js__$Boot_HaxeError) err1 = err1.val;
			if( js_Boot.__instanceof(err1,Error) ) {
				this.Throw(err1);
			} else throw(err1);
		}
	}
	,Abort: function(p_code,p_path) {
		if(p_path == null) p_path = "";
		if(p_code == null) p_code = 500;
		var err = new Error();
		err.name = "http-abort";
		err.message = "Request request[" + p_path + "] aborted code[" + p_code + "]";
		this.Throw(err,p_code);
	}
	,OnError: function(p_error,p_data) {
		if(p_error != null) {
			if(this.log) {
				if(0 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","[error] name[" + p_error.name + "] msg[" + p_error.message + "]");
			}
		}
	}
	,ConnectionHandler: function(p_socket) {
		if(this.log) {
			if(5 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","OnConnection ip[" + p_socket.remoteAddress + "]");
		}
		this.OnConnection(p_socket);
	}
	,RequestHandler: function(p_request,p_response) {
		var _g = this;
		var req = p_request;
		var res = p_response;
		this.OnRequest(req,res);
		var s = new nws_component_net_HttpSession();
		try {
			s.url = js_node_Url.parse(req.url);
		} catch( err ) {
			if (err instanceof js__$Boot_HaxeError) err = err.val;
			if( js_Boot.__instanceof(err,Error) ) {
				if(this.log) {
					if(0 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","[error] [" + err.name + "][" + err.message + "]");
				}
				s.url = { pathname : ""};
			} else throw(err);
		}
		s.http = this;
		s.request = req;
		s.response = res;
		res.__id__ = Math.floor(Math.random() * 16777215) + "";
		req.__id__ = res.__id__;
		var on_finish = null;
		on_finish = function() {
			_g.Log("Response Finish [" + s.get_path() + "]",5);
			_g.OnFinish(res);
			_g.TraverseInterfaces(function(n) {
				n.OnFinish(s);
			});
			res.removeListener("finish",on_finish);
		};
		res.on("finish",on_finish);
		this.ProcessSession(s);
	}
	,ProcessSession: function(p_session) {
		var _g1 = this;
		var s = p_session;
		var req = s.request;
		var res = s.response;
		if(this.log) {
			if(1 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","OnRequest method[" + req.method + "] url[" + req.url + "] id[" + res.__id__ + "]");
		}
		var d = s.data = { };
		var _g = req.method;
		switch(_g) {
		case "GET":
			if(s.url.query == null) d.text = ""; else d.text = s.url.query;
			if(d.text == "") d.json = { }; else d.json = js_node_Querystring.parse(d.text);
			this.RequestParsed(s);
			break;
		case "POST":
			if(s.get_multipart()) this.RequestParsed(s); else {
				req.on("data",function(p_data) {
					try {
						if(typeof(p_data) == "string") {
							d.text = p_data;
							d.json = js_node_Url.parse(p_data,true);
						} else if(js_Boot.__instanceof(p_data,js_node_buffer_Buffer)) {
							var b = p_data;
							if(d.buffer == null) d.buffer = b; else {
								var b0 = d.buffer;
								var b1 = b;
								d.buffer = js_node_buffer_Buffer.concat([b0,b1]);
							}
						}
					} catch( err ) {
						if (err instanceof js__$Boot_HaxeError) err = err.val;
						if( js_Boot.__instanceof(err,Error) ) {
							if(_g1.log) {
								if(0 <= _g1.get_app().verbose) console.log(_g1.GetTypeName() + ">","[error] Fail to parse POST data.");
							}
							if(_g1.log) {
								if(0 <= _g1.get_app().verbose) console.log(_g1.GetTypeName() + ">",p_data);
							}
							_g1.Throw(err);
						} else throw(err);
					}
				});
				req.on("end",function() {
					d.text = d.buffer.toString();
					try {
						d.json = JSON.parse(d.text);
					} catch( err1 ) {
						if (err1 instanceof js__$Boot_HaxeError) err1 = err1.val;
						if( js_Boot.__instanceof(err1,Error) ) {
							d.json = js_node_Url.parse(d.text,true);
						} else throw(err1);
					}
					_g1.RequestParsed(s);
				});
			}
			break;
		default:
			if(s.url.query == null) d.text = ""; else d.text = s.url.query;
			if(d.text == "") d.json = { }; else d.json = js_node_Querystring.parse(d.text);
			this.RequestParsed(s);
		}
	}
	,RequestParsed: function(p_session) {
		var s = p_session;
		if(!s.get_multipart()) {
		} else {
		}
		this.OnRequestParse();
		this.TraverseInterfaces(function(n) {
			n.OnRequest(s);
		});
		if(!s.found) {
			this.Log("No service found path[" + s.get_path() + "].",3);
			s.response.statusCode = 400;
			s.response.end();
		}
	}
	,TraverseInterfaces: function(p_callback) {
		var cb = function(e) {
			if(js_Boot.__instanceof(e,nws_component_net_IHttpHandler)) p_callback(e);
			var _g = 0;
			var _g1 = e.m_components;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				if(js_Boot.__instanceof(c,nws_component_net_IHttpHandler)) p_callback(c);
			}
			return true;
		};
		this.get_entity().Traverse(cb);
	}
	,OnFinish: function(p_response) {
	}
	,OnConnection: function(p_socket) {
	}
	,OnRequestParse: function() {
	}
	,OnRequest: function(p_request,p_response) {
	}
	,__class__: nws_component_net_HttpComponent
});
var nws_component_net_CookieData = function() {
};
nws_component_net_CookieData.__name__ = ["nws","component","net","CookieData"];
nws_component_net_CookieData.prototype = {
	Contains: function(p_key) {
		return this[p_key] != null;
	}
	,__class__: nws_component_net_CookieData
};
var nws_component_net_HeaderData = function() {
};
nws_component_net_HeaderData.__name__ = ["nws","component","net","HeaderData"];
nws_component_net_HeaderData.prototype = {
	Contains: function(p_key) {
		p_key = StringTools.replace(p_key,"-","_").toLowerCase();
		return this[p_key] != null;
	}
	,__class__: nws_component_net_HeaderData
};
var nws_component_net_HttpSession = function() {
	this.data = { };
	this.found = false;
};
nws_component_net_HttpSession.__name__ = ["nws","component","net","HttpSession"];
nws_component_net_HttpSession.prototype = {
	get_method: function() {
		if(this.request == null) return "GET"; else return this.request.method;
	}
	,get_path: function() {
		return this.url.pathname;
	}
	,get_multipart: function() {
		if(this.request == null) return false;
		if(!Object.prototype.hasOwnProperty.call(this.request.headers,"content-type")) return false;
		return this.request.headers["content-type"].toLowerCase().indexOf("multipart") >= 0;
	}
	,get_status: function() {
		if(this.response == null) return 400; else return this.response.statusCode;
	}
	,set_status: function(v) {
		if(this.response != null) this.response.statusCode = v;
		return v;
	}
	,get_content: function() {
		if(this.response == null) return "text/plain"; else return this.response.getHeader("content-type");
	}
	,set_content: function(v) {
		if(this.response != null) this.response.setHeader("content-type",v);
		return v;
	}
	,get_length: function() {
		if(this.response == null) return 0; else return Std.parseInt(this.response.getHeader("content-length"));
	}
	,set_length: function(v) {
		if(this.response != null) this.response.setHeader("content-length",v + "");
		return v;
	}
	,get_finished: function() {
		var r = this.response;
		if(r == null) return false; else return r.finished;
	}
	,get_valid: function() {
		if(this.request == null) return false;
		if(this.response == null) return false;
		if(this.get_finished()) return false;
		return true;
	}
	,get_cookies: function() {
		var c = new nws_component_net_CookieData();
		if(this.request == null) return c;
		var cs = this.request.headers.cookie;
		if(cs == null) return c;
		var attribs = cs.split(";");
		var _g = 0;
		while(_g < attribs.length) {
			var a = attribs[_g];
			++_g;
			var pair = StringTools.trim(a).split("=");
			if(pair.length <= 0) continue;
			var k = pair[0];
			var v;
			if(pair[1] == null) v = { }; else v = pair[1];
			c[k] = v;
		}
		return c;
	}
	,get_headers: function() {
		var c = new nws_component_net_HeaderData();
		if(this.request == null) return c;
		var kl = Reflect.fields(this.request.headers);
		var _g = 0;
		while(_g < kl.length) {
			var k = kl[_g];
			++_g;
			k = StringTools.replace(k,"-","_").toLowerCase();
			var v = this.request.headers[k];
			switch(k) {
			case "content_length":
				if(v == null) v = 0; else v = Std.parseInt(v);
				break;
			}
			c[k] = v;
		}
		return c;
	}
	,Abort: function(p_code) {
		if(p_code == null) p_code = 500;
		this.http.Abort(p_code,this.get_path());
	}
	,__class__: nws_component_net_HttpSession
};
var nws_component_net_IHttpHandler = function() { };
nws_component_net_IHttpHandler.__name__ = ["nws","component","net","IHttpHandler"];
nws_component_net_IHttpHandler.prototype = {
	__class__: nws_component_net_IHttpHandler
};
var nws_controller_Controller = function() {
	nws_component_Component.call(this);
};
nws_controller_Controller.__name__ = ["nws","controller","Controller"];
nws_controller_Controller.__super__ = nws_component_Component;
nws_controller_Controller.prototype = $extend(nws_component_Component.prototype,{
	__class__: nws_controller_Controller
});
var nws_controller_service_Service = function() {
	nws_controller_Controller.call(this);
	this.allowOrigin = "*";
	this.persistent = false;
	this.m_found = false;
};
nws_controller_service_Service.__name__ = ["nws","controller","service","Service"];
nws_controller_service_Service.__interfaces__ = [nws_component_net_IHttpHandler];
nws_controller_service_Service.__super__ = nws_controller_Controller;
nws_controller_service_Service.prototype = $extend(nws_controller_Controller.prototype,{
	get_session: function() {
		return this.m_session;
	}
	,get_valid: function() {
		return this.get_session().http != null && !this.get_session().get_finished();
	}
	,get_found: function() {
		return this.m_found;
	}
	,OnCreate: function() {
	}
	,OnRequest: function(p_session) {
		var _g1 = this;
		if(!this.get_enabled()) return;
		if(this.route == null) {
			if(this.log) {
				if(0 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","Service with null route!");
			}
			return;
		}
		this.m_session = p_session;
		if(!this.route.match(this.m_session.get_path())) return;
		if(!this.get_valid()) {
			if(this.log) {
				if(0 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","Service not valid. Returning");
			}
			return;
		}
		var md = this.get_metadata();
		var has_found = false;
		var ref = this;
		var _g = 0;
		while(_g < md.length) {
			var it = [md[_g]];
			++_g;
			var route_data = [it[0].data.route];
			if(route_data[0] == null) continue;
			if(route_data[0].length <= 1) continue;
			if(!this.get_valid()) continue;
			var route_methods = route_data[0][0];
			var method = this.get_session().request.method.toLowerCase();
			if(route_methods.indexOf(method) < 0) continue;
			var route_rule = new EReg(route_data[0][1],route_data[0].length <= 2?"":route_data[0][2]);
			if(route_rule.match(this.get_session().url.pathname)) {
				has_found = true;
				var validated = this.OnValidateMetadata(it[0],(function(route_data,it) {
					return function() {
						if(!_g1.get_session().get_finished()) _g1.OnBeforeAction(route_data[0][1]);
						if(!_g1.get_session().get_finished()) ref[it[0].field]();
						if(!_g1.get_session().get_finished()) _g1.OnAfterAction(route_data[0][1]);
					};
				})(route_data,it));
				if(validated) {
					if(!this.get_session().get_finished()) this.OnBeforeAction(route_data[0][1]);
					if(!this.get_session().get_finished()) ref[it[0].field]();
					if(!this.get_session().get_finished()) this.OnAfterAction(route_data[0][1]);
				}
			}
		}
		this.m_found = has_found;
		if(!has_found) this.OnRouteFail(); else if(!this.get_session().response.headersSent) {
			if(this.allowOrigin == "") this.get_session().response.removeHeader("Access-Control-Allow-Origin"); else this.get_session().response.setHeader("Access-Control-Allow-Origin",this.allowOrigin);
		}
		this.get_session().found = this.get_session().found || has_found;
	}
	,OnFinish: function(p_session) {
		var s = p_session;
		if(s.found) {
			if(!this.persistent) {
				var e = this.get_entity();
				this.Destroy();
				e.AddComponent(this.GetType());
			}
		}
	}
	,Throw: function(p_error,p_data) {
		this.get_app().Throw(p_error,p_data);
	}
	,OnError: function(p_error,p_data) {
	}
	,OnBeforeAction: function(p_route) {
	}
	,OnAfterAction: function(p_route) {
	}
	,OnRouteFail: function() {
	}
	,OnValidateMetadata: function(p_meta,p_onready) {
		return true;
	}
	,__class__: nws_controller_service_Service
});
var nws_model_Model = function() {
	nws_component_Component.call(this);
};
nws_model_Model.__name__ = ["nws","model","Model"];
nws_model_Model.__super__ = nws_component_Component;
nws_model_Model.prototype = $extend(nws_component_Component.prototype,{
	__class__: nws_model_Model
});
var nws_view_View = function() {
	nws_component_Component.call(this);
};
nws_view_View.__name__ = ["nws","view","View"];
nws_view_View.__super__ = nws_component_Component;
nws_view_View.prototype = $extend(nws_component_Component.prototype,{
	__class__: nws_view_View
});
var server_NFCEApp = function() {
	nws_ApplicationMVC.call(this);
};
server_NFCEApp.__name__ = ["server","NFCEApp"];
server_NFCEApp.__super__ = nws_ApplicationMVC;
server_NFCEApp.prototype = $extend(nws_ApplicationMVC.prototype,{
	OnInitialize: function() {
		this.model = this.AddComponent(nws_model_Model);
		this.view = this.AddComponent(nws_view_View);
		this.controller = this.AddComponent(server_controller_ServiceController);
		this.http = this.AddComponent(nws_component_net_HttpComponent);
		this.http.Listen(9000);
	}
	,__class__: server_NFCEApp
});
var server_controller_NFCEController = function() {
	nws_controller_Controller.call(this);
};
server_controller_NFCEController.__name__ = ["server","controller","NFCEController"];
server_controller_NFCEController.__super__ = nws_controller_Controller;
server_controller_NFCEController.prototype = $extend(nws_controller_Controller.prototype,{
	get_application: function() {
		return this.get_app();
	}
	,__class__: server_controller_NFCEController
});
var server_controller_ServiceController = function() {
	server_controller_NFCEController.call(this);
};
server_controller_ServiceController.__name__ = ["server","controller","ServiceController"];
server_controller_ServiceController.__super__ = server_controller_NFCEController;
server_controller_ServiceController.prototype = $extend(server_controller_NFCEController.prototype,{
	OnCreate: function() {
		this.get_entity().AddComponent(server_controller_service_NFCEService);
	}
	,__class__: server_controller_ServiceController
});
var server_controller_service_NFCEService = function() {
	nws_controller_service_Service.call(this);
};
server_controller_service_NFCEService.__name__ = ["server","controller","service","NFCEService"];
server_controller_service_NFCEService.__super__ = nws_controller_service_Service;
server_controller_service_NFCEService.prototype = $extend(nws_controller_service_Service.prototype,{
	get_application: function() {
		return this.get_app();
	}
	,OnCreate: function() {
		this.route = new EReg("/nfce","");
		this.persistent = true;
	}
	,OnJson: function() {
		var d = "";
		var s = this.get_session();
		var key = this.get_session().data.json.key;
		var st = this.get_session().data.json.state;
		if(st == null) st = "rs"; else if(st == "") st = "rs"; else st = st;
		if(this.log) {
			if(4 <= this.get_app().verbose) console.log(this.GetTypeName() + ">","NFCE Generate key[" + key + "] state[" + st + "]");
		}
		nfce_NFCE.load(key,st,function(p_res,p_err) {
			if(p_err != null) s.Abort(400); else {
				d = JSON.stringify(p_res,null," ");
				s.response.writeHead(200,{ 'Content-Type' : "text/plain;charset=utf-8"});
				s.response.write(d);
				s.response.end();
			}
		});
	}
	,__class__: server_controller_service_NFCEService
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
server_controller_service_NFCEService.__meta__ = { fields : { OnJson : { route : ["get,post","/json$"]}}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
