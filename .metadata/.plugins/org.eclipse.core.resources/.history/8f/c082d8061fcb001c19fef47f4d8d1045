package karnataka.controlador;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import karnataka.entidades.Empresa;
import karnataka.servicio.EmpresaService;

@Path("/empresa")
public class EmpresaController {
	
	@GET
	@Path("/obtener/{codSubCategoria}/{anio}/{mes}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response obtenerEmpresas(
			@PathParam("codSubCategoria") int codSubCategoria,
			@PathParam("anio") String anio, 
			@PathParam("mes") int mes){
		ArrayList<Empresa> empresas = EmpresaService.obtenerEmpresas(codSubCategoria, anio, mes);
		return Response.status(200).entity(empresas)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET")
				.allow("OPTIONS")
				.build();
	}
	
	

}
