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
import net.daw.dao.implementation.CompeticionDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class JornadaBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private String descripcion = "";
    @Expose(serialize = false)
    private Integer id_competicion = 0;
    @Expose(deserialize = false)
    private CompeticionBean obj_competicion = null;
    
//  Constructores
    public JornadaBean() {
        this.id = 0;
    }

    public JornadaBean(Integer id) {
        this.id = id;
    }
    
//  Metodos
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getId_competicion() {
        return id_competicion;
    }

    public void setId_competicion(Integer id_competicion) {
        this.id_competicion = id_competicion;
    }

    public CompeticionBean getObj_competicion() {
        return obj_competicion;
    }

    public void setObj_competicion(CompeticionBean obj_competicion) {
        this.obj_competicion = obj_competicion;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "descripcion,";
        strColumns += "id_competicion";
        return strColumns;
    }

    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += descripcion + ",";
        strColumns += id_competicion;
        return strColumns;
    }

    @Override
    public String toPairs() {     
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "titulo=" + EncodingUtilHelper.quotate(descripcion) + ",";
        strPairs += "id_competicion=" + id_competicion;
        return strPairs;
    }

    @Override
    public JornadaBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setDescripcion(oResultSet.getString("descripcion"));

        if (expand > 0) {
            CompeticionBean oCompeticionBean = new CompeticionBean();
            CompeticionDao oCompeticionDao = new CompeticionDao(pooledConnection);
            oCompeticionBean.setId(oResultSet.getInt("id_competicion"));
            oCompeticionBean = oCompeticionDao.get(oCompeticionBean, expand - 1);
            this.setObj_competicion(oCompeticionBean);
        } else {
            this.setId_competicion(oResultSet.getInt("id_competicion"));
        }

        return this;
    }

    

}
