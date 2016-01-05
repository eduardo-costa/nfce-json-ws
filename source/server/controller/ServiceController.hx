package server.controller;
import server.controller.service.NFCEService;



/**
 * Controller class that will handle the services.
 * @author Eduardo Pons - eduardo@thelaborat.org
 */
class ServiceController extends NFCEController
{

	/**
	 * Init.
	 */
	override public function OnCreate():Void 
	{
		entity.AddComponent(NFCEService);
	}
	
	
}