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
import java.text.SimpleDateFormat;
import net.daw.dao.implementation.EquipoDao;
import net.daw.dao.implementation.JornadaDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class PartidoBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private Date fecha;
    @Expose
    private Integer golesLocal;
    @Expose
    private Integer golesVisitante;
    @Expose(serialize = false)
    private Integer id_jornada = 0;
    @Expose(deserialize = false)
    private JornadaBean obj_jornada = null;
    @Expose(serialize = false)
    private Integer id_equipoLocal = 0;
    @Expose(deserialize = false)
    private EquipoBean obj_equipoLocal = null;
    @Expose(serialize = false)
    private Integer id_equipoVisitante = 0;
    @Expose(deserialize = false)
    private EquipoBean obj_equipoVisitante = null;

    public PartidoBean() {
        this.id = 0;
    }

    public PartidoBean(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    
    public Integer getId_jornada() {
        return id_jornada;
    }

    public void setId_jornada(Integer id_jornada) {
        this.id_jornada = id_jornada;
    }

    public JornadaBean getObj_jornada() {
        return obj_jornada;
    }

    public void setObj_jornada(JornadaBean obj_jornada) {
        this.obj_jornada = obj_jornada;
    }

    public Integer getId_equipoLocal() {
        return id_equipoLocal;
    }

    public void setId_equipoLocal(Integer id_equipoLocal) {
        this.id_equipoLocal = id_equipoLocal;
    }

    public EquipoBean getObj_equipoLocal() {
        return obj_equipoLocal;
    }

    public void setObj_equipoLocal(EquipoBean obj_equipoLocal) {
        this.obj_equipoLocal = obj_equipoLocal;
    }

    public Integer getGolesLocal() {
        return golesLocal;
    }

    public void setGolesLocal(Integer golesLocal) {
        this.golesLocal = golesLocal;
    }

    public Integer getGolesVisitante() {
        return golesVisitante;
    }

    public void setGolesVisitante(Integer golesVisitante) {
        this.golesVisitante = golesVisitante;
    }

    public Integer getId_equipoVisitante() {
        return id_equipoVisitante;
    }

    public void setId_equipoVisitante(Integer id_equipoVisitante) {
        this.id_equipoVisitante = id_equipoVisitante;
    }

    public EquipoBean getObj_equipoVisitante() {
        return obj_equipoVisitante;
    }

    public void setObj_equipoVisitante(EquipoBean obj_equipoVisitante) {
        this.obj_equipoVisitante = obj_equipoVisitante;
    }
    
    public String toJson(Boolean expand) {
        String strJson = "{";
        strJson += "id:" + id + ",";
        strJson += "fecha:" + fecha + ",";
        strJson += "id_jornada:" + id_jornada + ",";
        strJson += "id_equipoLocal:" + id_equipoLocal + ",";
        strJson += "golesLocal:" + golesLocal + ",";
        strJson += "id_equipoVisitante:" + id_equipoVisitante + ",";
        strJson += "golesVisitante:" + golesVisitante + ",";
        strJson += "}";
        return strJson;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "fecha,";
        strColumns += "id_jornada,";
        strColumns += "id_equipoLocal,";
        strColumns += "golesLocal,";
        strColumns += "golesVisitante,";
        strColumns += "id_equipoVisitante";
        return strColumns;
    }

    @Override
    public String getValues() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");  
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(format.format(fecha)) + ",";
        strColumns += id_jornada + ",";
        strColumns += id_equipoLocal + ",";
        strColumns += golesLocal + ",";
        strColumns += golesVisitante + ",";
        strColumns += id_equipoVisitante;
        return strColumns;
    }

    @Override
    public String toPairs() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); 
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += EncodingUtilHelper.quotate(format.format(fecha)) + ",";
        strPairs += "id_jornada=" + id_jornada + ",";
        strPairs += "id_equipoLocal=" + id_equipoLocal + ",";
        strPairs += "golesLocal=" + golesLocal + ",";
        strPairs += "golesVisitante=" + golesVisitante + ",";
        strPairs += "id_equipoVisitante=" + id_equipoVisitante;
        return strPairs;
    }

    @Override
    public PartidoBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setFecha(oResultSet.getDate("fecha"));
        
        if (expand > 0) {
            JornadaBean oJornadaBean = new JornadaBean();
            JornadaDao oJornadaDao = new JornadaDao(pooledConnection);
            oJornadaBean.setId(oResultSet.getInt("id_jornada"));
            oJornadaBean = oJornadaDao.get(oJornadaBean, expand - 1);
            this.setObj_jornada(oJornadaBean);
        } else {
            this.setId_jornada(oResultSet.getInt("id_jornada"));
        }
        
        if (expand > 0) {
            EquipoBean oEquipoBean = new EquipoBean();
            EquipoDao oEquipoDao = new EquipoDao(pooledConnection);
            oEquipoBean.setId(oResultSet.getInt("id_equipoLocal"));
            oEquipoBean = oEquipoDao.get(oEquipoBean, expand - 1);
            this.setObj_equipoLocal(oEquipoBean);
        } else {
            this.setId_equipoLocal(oResultSet.getInt("id_equipoLocal"));
        }
        
        this.setGolesLocal(oResultSet.getInt("golesLocal"));
        this.setGolesVisitante(oResultSet.getInt("golesVisitante"));

        if (expand > 0) {
            EquipoBean oEquipoBean = new EquipoBean();
            EquipoDao oEquipoDao = new EquipoDao(pooledConnection);
            oEquipoBean.setId(oResultSet.getInt("id_equipoVisitante"));
            oEquipoBean = oEquipoDao.get(oEquipoBean, expand - 1);
            this.setObj_equipoVisitante(oEquipoBean);
        } else {
            this.setId_equipoVisitante(oResultSet.getInt("id_equipoVisitante"));

        }

        return this;
    }

}
