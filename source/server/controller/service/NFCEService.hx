package server.controller.service;
import haxe.Json;
import js.Error;
import nfce.NFCE;
import nws.component.net.HttpSession;
import nws.controller.service.Service;

/**
 * Class that implements the NFCE json generator web service
 * @author eduardo-costa
 */
class NFCEService extends Service
{

	/**
	 * Reference to the main application.
	 */
	public var application(get, never):NFCEApp;
	private function get_application():NFCEApp { return cast app; }
	
	
	/**
	 * Init.
	 */
	override public function OnCreate():Void 
	{		
		route = new EReg("/nfce","");
		persistent = true;		
	}

	@route("get,post", "/json$")
	public function OnJson():Void
	{			
		var d : String = "";// Json.stringify(session.data.json);
		var s : HttpSession = session;
		
		var key : String = session.data.json.key;
		var st  : String = session.data.json.state;
		st = st == null ? "rs" : (st == "" ? "rs" : st);
		
		Log("NFCE Generate key["+key+"] state["+st+"]", 4);
		
		NFCE.load(key,st,
		function(p_res:Dynamic, p_err:Error)
		{			
			if (p_err != null)
			{
				s.Abort(400);
			}
			else
			{
				d = Json.stringify(p_res, " ");
				s.response.writeHead(200,
				{
					"Content-Type": 	"text/plain;charset=utf-8"
				});				
				s.response.write(d);
				s.response.end();
			}
		});
		
	}
	
}