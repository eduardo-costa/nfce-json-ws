package nfce;
import js.Error;

/**
 * Extern for the nfce-json lib.
 * @author eduardo-costa
 */
@:jsRequire("nfce-json","NFCE")
extern class NFCE
{

	/**
	 * Loads a given nfce json using the given information.
	 * @param	p_code
	 * @param	p_state
	 * @param	p_callback
	 */
	static public function load(p_code:String, p_state:String, p_callback : Dynamic->Error->Void):Void;
	
}