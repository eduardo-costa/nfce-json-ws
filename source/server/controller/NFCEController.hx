package server.controller;

import nws.controller.Controller;

/**
 * Base class for all NFCE WS controllers.
 * @author Eduardo Pons - eduardo@thelaborat.org
 */
class NFCEController extends Controller
{

	/**
	 * Reference to the main application.
	 */
	public var application(get, never):NFCEApp;
	private function get_application():NFCEApp { return cast app; }
	
}