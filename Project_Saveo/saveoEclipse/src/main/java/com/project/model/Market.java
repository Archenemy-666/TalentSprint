package com.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
@Entity
public class Market {
    @Id @GeneratedValue
    private int serialNo;
    private String smallScaleName;
    private String requirement ;
    private String quantity ;
    private Date expiryDate;
    private String status ;

    public Market(){

    }

    public int getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(int serialNo) {
        this.serialNo = serialNo;
    }

    public String getSmallScaleName() {
        return smallScaleName;
    }

    public void setSmallScaleName(String smallScaleName) {
        this.smallScaleName = smallScaleName;
    }

    public String getRequirement() {
        return requirement;
    }

    public void setRequirement(String requirement) {
        this.requirement = requirement;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Market{" +
                "serialNo=" + serialNo +
                ", smallScaleName='" + smallScaleName + '\'' +
                ", requirement='" + requirement + '\'' +
                ", quantity='" + quantity + '\'' +
                ", expiryDate=" + expiryDate +
                ", status='" + status + '\'' +
                '}';
    }
}
