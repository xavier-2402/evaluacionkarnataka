package karnataka.tests;

import karnataka.controlador.ReporteController;
import karnataka.servicio.ReporteService;

public class TestReportes {
	
	public static void main(String[] args) {
		System.out.println(ReporteService.obtenerReportes(204, 2, "2021", 2));
	}

}
