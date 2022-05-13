package karnataka.controlador;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import karnataka.entidades.Categoria;
import karnataka.servicio.CategoriaService;

@Path("/categoria")

public class CategoriaController {
	
	@Path("/obtener")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response obtenerCategorias(){
		ArrayList<Categoria> listaCategorias = CategoriaService.obtenerCategorias();
		return Response.status(200).entity(listaCategorias)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET")
				.allow("OPTIONS")
				.build();
		
	}

}
