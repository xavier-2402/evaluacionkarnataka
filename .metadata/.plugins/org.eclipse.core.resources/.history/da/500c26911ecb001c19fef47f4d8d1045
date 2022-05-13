package karnataka.servicio;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import karnataka.db.Conexion;
import karnataka.entidades.Empresa;

public class EmpresaService {
	
	
	public static ArrayList<Empresa> obtenerEmpresas( int codSubCategoria,String anio, int mes){
		String sql = "SELECT DISTINCT CON_COD_EMPRESA, CON_NOM_EMPRESA "
				+ "FROM REP_VENTA_DETAL_COL_PRUE_VW  "
				+ "WHERE CON_COD_SUB_CATEGORIA_VEHICULO = ?"
				+ "AND CON_PERIODO  = ?"
				+ "AND CON_MES = ?"
				+ "ORDER BY CON_NOM_EMPRESA";
		Connection con = Conexion.connect();
		ArrayList<Empresa> listaEmpresas = new ArrayList<Empresa>();
		Empresa empresa;
		if(con != null){
			
			try {
				PreparedStatement ps = con.prepareCall(sql);
				ps.setInt(1, codSubCategoria);
				ps.setString(2, anio);
				ps.setInt(3, mes);
				ResultSet rs = ps.executeQuery();
				while(rs.next()){
					empresa = new Empresa();
					empresa.setCodEmpresa(rs.getInt(1));
					empresa.setNombreEmpresa(rs.getString(2));
					listaEmpresas.add(empresa);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		}
		return listaEmpresas;
	}
	
	public static ArrayList<Empresa> obtenerEmpresasLista( int codSubCategorias[],String anios[], int mes){
		String listaCategorias = "(";
		String listaAnios = "(";
		ArrayList<Empresa> listaEmpresas = new ArrayList<Empresa>();
		Empresa empresa;
		for(int i=0; i<codSubCategorias.length;i++){
			if (codSubCategorias.length-1 == i){
				listaCategorias = listaCategorias+codSubCategorias[i]+")";
			}else{
				listaCategorias = listaCategorias+codSubCategorias[i]+",";
			}
		}
		for(int i=0; i<anios.length;i++){
			if (anios.length-1 == i){
				 listaAnios= listaAnios+anios[i]+")";
			}else{
				listaAnios = listaAnios+anios[i]+",";
			}
		}
		
		String sql = "SELECT DISTINCT CON_COD_EMPRESA, CON_NOM_EMPRESA "
				+ "FROM REP_VENTA_DETAL_COL_PRUE_VW  "
				+ "WHERE CON_COD_SUB_CATEGORIA_VEHICULO IN "+listaCategorias
				+ "AND CON_PERIODO  IN "+listaAnios
				+ "AND CON_MES = ?"
				+ "ORDER BY CON_NOM_EMPRESA";
		
		Connection con = Conexion.connect();
		
		if(con != null){
			
			try {
				PreparedStatement ps = con.prepareCall(sql);
				ps.setInt(1, 1);
				ResultSet rs = ps.executeQuery();
				while(rs.next()){
					empresa = new Empresa();
					empresa.setCodEmpresa(rs.getInt(1));
					empresa.setNombreEmpresa(rs.getString(2));
					listaEmpresas.add(empresa);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		}
		return listaEmpresas;
	}

}
