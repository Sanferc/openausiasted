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
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import net.daw.dao.implementation.TemporadaDao;
import net.daw.dao.implementation.TipoCompeticionDao;

public class CompeticionBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private String nombre;
    @Expose(serialize = false)
    private Integer id_tipoCompeticion = 0;
    @Expose(deserialize = false)
    private TipoCompeticionBean obj_tipoCompeticion = null;
    @Expose(serialize = false)
    private Integer id_temporada = 0;
    @Expose(deserialize = false)
    private TemporadaBean obj_temporada = null;

//  Constructores
    public CompeticionBean() {
        this.id = 0;
    }

    public CompeticionBean(Integer id) {
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

    public Integer getId_tipoCompeticion() {
        return id_tipoCompeticion;
    }

    public void setId_tipoCompeticion(Integer id_competicion) {
        this.id_tipoCompeticion = id_tipoCompeticion;
    }

    public TipoCompeticionBean getObj_tipoCompeticion() {
        return obj_tipoCompeticion;
    }

    public void setObj_tipoCompeticion(TipoCompeticionBean obj_tipoCompeticion) {
        this.obj_tipoCompeticion = obj_tipoCompeticion;
    }
    public Integer getId_Temporada() {
        return id_temporada;
    }

    public void setId_Temporada(Integer id_temporada) {
        this.id_temporada = id_temporada;
    }
    
    public TemporadaBean getObj_temporada() {
        return obj_temporada;
    }

    public void setObj_temporada(TemporadaBean obj_temporada) {
        this.obj_temporada = obj_temporada;
    }

    public String toJson(Boolean expand) {
        String strJson = "{";
        strJson += "id:" + id + ",";
        strJson += "nombre:" + nombre + ",";
        strJson += "id_tipoCompeticion:" + id_tipoCompeticion + ",";
        strJson += "id_temporada:" + id_temporada + ",";
        strJson += "}";
        return strJson;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "nombre,";
        strColumns += "id_tipoCompeticion,";
        strColumns += "id_temporada";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += nombre + ",";
        strColumns += id_tipoCompeticion + ",";
        strColumns += id_temporada;
        return strColumns;
    }

    @Override
    public String toPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ","; 
        strPairs += "nombre=" + nombre + ",";
        strPairs += "id_tipoCompeticion=" + id_tipoCompeticion + ",";
        strPairs += "id_temporada=" + id_temporada;
        return strPairs;
    }

    @Override
    public CompeticionBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setNombre(oResultSet.getString("nombre"));
        
        if (expand > 0) {
            TemporadaBean oTemporadaBean = new TemporadaBean();
            TemporadaDao oTemporadaDao = new TemporadaDao(pooledConnection);
            oTemporadaBean.setId(oResultSet.getInt("id_temporada"));
            oTemporadaBean = oTemporadaDao.get(oTemporadaBean, expand - 1);
            this.setObj_temporada(oTemporadaBean);
        } else {
            this.setId_Temporada(oResultSet.getInt("id_temporada"));
        }
        
        if (expand > 0) {
            TipoCompeticionBean oTipoCompeticionBean = new TipoCompeticionBean();
            TipoCompeticionDao oTipoCompeticionDao = new TipoCompeticionDao(pooledConnection);
            oTipoCompeticionBean.setId(oResultSet.getInt("id_tipoCompeticion"));
            oTipoCompeticionBean = oTipoCompeticionDao.get(oTipoCompeticionBean, expand - 1);
            this.setObj_tipoCompeticion(oTipoCompeticionBean);
        } else {
            this.setId_Temporada(oResultSet.getInt("id_tipoCompeticion"));
        }
        
         return this;

    }
}
