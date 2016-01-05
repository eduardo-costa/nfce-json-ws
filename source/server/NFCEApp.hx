package server;
import nws.Application.ApplicationMVC;
import nws.component.net.HttpComponent;
import nws.model.Model;
import nws.view.View;
import server.controller.NFCEController;
import server.controller.ServiceController;

/**
 * ...
 * @author eduardo-costa
 */
class NFCEApp extends ApplicationMVC<Model,View,ServiceController>
{
	/**
	 * Reference to the Http server.
	 */
	public var http : HttpComponent;

	/**
	 * Entry point.
	 */
	override public function OnInitialize():Void 
	{		
		
		model      = cast AddComponent(Model);
		view       = cast AddComponent(View);
		controller = cast AddComponent(ServiceController);		
		
		//Must be added in the root for event propagating.
		http = cast AddComponent(HttpComponent);
		http.Listen(80);
		
	}	
	
}