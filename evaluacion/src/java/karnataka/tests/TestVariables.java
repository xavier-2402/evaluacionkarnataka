package karnataka.tests;

import java.util.ArrayList;

import karnataka.entidades.Empresa;
import karnataka.servicio.EmpresaService;

public class TestVariables {

	
	public static void main(String[] args) {
		
		 int codSubCategorias[] = {1,2,3};
		 String anios[] = {"2020","2021"};
		
		ArrayList<Empresa> empresas = EmpresaService.obtenerEmpresasLista(codSubCategorias, anios, 1);
		for( Empresa e: empresas){
			System.out.println(e);
		}
		
	}
	
}
