package karnataka.entidades;

public class Vista {


    private int codigo;
    private int dia;
    private int mes;
    private int anio;
    private int cod_empresa;
    private String nombre_empresa;


    public Vista(){
        
    }
    public void setCodigo(int codigo){
        this.codigo=codigo;
    }
    public int getCodigo(){
        return codigo;
    }

    public void setDia(int dia){
        this.dia = dia;
    }

    public int getDia(){
        return dia;
    }

    public void setMes(int mes){
        this.mes = mes;
    }

    public int getMes(){
        return mes;
    }
    public int getAnio() {
        return anio;
    }
    public void setAnio(int anio) {
        this.anio = anio;
    }
    public int getCod_empresa() {
        return cod_empresa;
    }
    public void setCod_empresa(int cod_empresa) {
        this.cod_empresa = cod_empresa;
    }
    public String getNombre_empresa() {
        return nombre_empresa;
    }
    public void setNombre_empresa(String nombre_empresa) {
        this.nombre_empresa = nombre_empresa;
    }
	@Override
	public String toString() {
		return "Vista [codigo=" + codigo + ", dia=" + dia + ", mes=" + mes + ", anio=" + anio + ", cod_empresa="
				+ cod_empresa + ", nombre_empresa=" + nombre_empresa + "]";
	}
    

}
