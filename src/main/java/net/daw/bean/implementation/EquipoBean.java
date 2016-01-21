/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package net.daw.bean.implementation;

import net.daw.bean.publicinterface.GenericBean;
import com.google.gson.annotations.Expose;
import static java.lang.String.format;
import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import static java.text.MessageFormat.format;
import java.text.SimpleDateFormat;
import static jdk.nashorn.api.scripting.ScriptUtils.format;
import net.daw.helper.statics.EncodingUtilHelper;
import static net.daw.helper.statics.MetaEnum.FieldType.Date;

public class EquipoBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private String nombre;
    @Expose
    private String estadio;
    @Expose
    private Date fundacion;
    @Expose
    private String sede;
    
//  Constructores

    public EquipoBean() {
        this.id = 0;
    }

    public EquipoBean(Integer id) {
        this.id = id;
    }
    
//  Metodos
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstadio() {
        return estadio;
    }

    public void setEstadio(String estadio) {
        this.estadio = estadio;
    }

    public Date getFundacion() {
        return fundacion;
    }

    public void setFundacion(Date fundacion) {
        this.fundacion = fundacion;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }

    public String toJson(Boolean expand) {
        String strJson = "{";
        strJson += "id:" + id + ",";
        strJson += "nombre:" + nombre + ",";
        strJson += "estadio:" + estadio + ",";
        strJson += "fundacion:" + fundacion + ",";
        strJson += "sede:" + sede + ",";
        strJson += "}";
        return strJson;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "nombre,";
        strColumns += "estadio,";
        strColumns += "fundacion,";
        strColumns += "sede";
        return strColumns;
    }

    @Override
    public String getValues() {
         SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");    
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(nombre) + ",";
        strColumns += EncodingUtilHelper.quotate(estadio) + ",";
        strColumns += EncodingUtilHelper.quotate(format.format(fundacion)) + ",";
        strColumns += EncodingUtilHelper.quotate(sede);
        return strColumns;
    }

    @Override
    public String toPairs() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); 
        String strPairs = "";
        strPairs += "id=" + id + ","; 
        strPairs += "nombre=" + nombre + ",";
        strPairs += "estadio=" + estadio + ",";
        strPairs += "fundacion=" + EncodingUtilHelper.quotate(format.format(fundacion)) + ",";
        strPairs += "sede=" + sede;
        return strPairs;
    }

    @Override
    public EquipoBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setNombre(oResultSet.getString("nombre"));
        this.setEstadio(oResultSet.getString("estadio"));
        this.setFundacion(oResultSet.getDate("fundacion"));
        this.setSede(oResultSet.getString("sede"));
        return this;

    }

    

}
