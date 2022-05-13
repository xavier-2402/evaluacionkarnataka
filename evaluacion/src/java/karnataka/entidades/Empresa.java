package karnataka.entidades;

public class Empresa {
	
	private int codEmpresa;
	private String nombreEmpresa;
	public int getCodEmpresa() {
		return codEmpresa;
	}
	public void setCodEmpresa(int codEmpresa) {
		this.codEmpresa = codEmpresa;
	}
	public String getNombreEmpresa() {
		return nombreEmpresa;
	}
	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}
	@Override
	public String toString() {
		return "Empresa [codEmpresa=" + codEmpresa + ", nombreEmpresa=" + nombreEmpresa + "]";
	}
	
	
	
	

}
