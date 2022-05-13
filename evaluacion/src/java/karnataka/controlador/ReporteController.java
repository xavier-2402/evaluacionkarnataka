package karnataka.controlador;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import karnataka.entidades.Reporte;
import karnataka.servicio.ReporteService;

@Path("/reporte")
public class ReporteController {
	
	@Path("/obtener/{codEmpresa}/{codSubCategoria}/{anio}/{mes}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response obtenerReportes(
			@PathParam("codEmpresa") int codEmpresa,
			@PathParam("codSubCategoria") int codSubCategoria,
			@PathParam("anio") String anio,
			@PathParam("mes") int mes){
		Reporte reporte = ReporteService.obtenerReportes(codEmpresa, codSubCategoria, anio, mes);
		return Response.status(200).entity(reporte)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET")
				.allow("OPTIONS")
				.build();
	}

}
