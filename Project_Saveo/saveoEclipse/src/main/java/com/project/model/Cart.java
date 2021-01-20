package com.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Cart {
    @Id @GeneratedValue
    private int serialNo ;
    private String  corporateName;
    private String smallScaleName;
    private double price ;
    private String requirement;
    private String quantity;
    private String smallScaleContact;
    private String status ;
    private String corporateContact;
    private Date expiryDate;

    public Cart(){}

    public int getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(int serialNo) {
        this.serialNo = serialNo;
    }

    public String getCorporateName() {
        return corporateName;
    }

    public void setCorporateName(String corporateName) {
        this.corporateName = corporateName;
    }

    public String getSmallScaleName() {
        return smallScaleName;
    }

    public void setSmallScaleName(String smallScaleName) {
        this.smallScaleName = smallScaleName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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

    public String getSmallScaleContact() {
        return smallScaleContact;
    }

    public void setSmallScaleContact(String smallScaleContact) {
        this.smallScaleContact = smallScaleContact;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCorporateContact() {
        return corporateContact;
    }

    public void setCorporateContact(String corporateContact) {
        this.corporateContact = corporateContact;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "serialNo=" + serialNo +
                ", corporateName='" + corporateName + '\'' +
                ", smallScaleName='" + smallScaleName + '\'' +
                ", price=" + price +
                ", requirement='" + requirement + '\'' +
                ", quantity='" + quantity + '\'' +
                ", smallScaleContact='" + smallScaleContact + '\'' +
                ", status='" + status + '\'' +
                ", corporateContact='" + corporateContact + '\'' +
                ", expiryDate=" + expiryDate +
                '}';
    }
}
