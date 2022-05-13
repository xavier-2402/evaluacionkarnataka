package karnataka.controlador;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import karnataka.servicio.AnioService;

@Path("/anio")
public class AnioController {
	
	@Path("/obtener")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public Response obtenerAnios(){
		return Response.status(200).entity(AnioService.obtenerAnios())
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET")
				.allow("OPTIONS")
				.build();
	}
	

}
