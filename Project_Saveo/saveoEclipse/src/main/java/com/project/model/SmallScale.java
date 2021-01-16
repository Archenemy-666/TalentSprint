package com.project.model;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SmallScale {
    private String smallScaleName;
    @Id
    private String smallScaleId;
    private String location;
    private long contact;
    private String emailId;
    private String password;


    public SmallScale(){}

    public SmallScale(String smallScaleName, String smallScaleId, String location, long contact, String emailId, String password) {
        this.smallScaleName = smallScaleName;
        this.smallScaleId = smallScaleId;
        this.location = location;
        this.contact = contact;
        this.emailId = emailId;
        this.password = password;
    }

    public String getSmallScaleName() {
        return smallScaleName;
    }

    public void setSmallScaleName(String smallScaleName) {
        this.smallScaleName = smallScaleName;
    }

    public String getSmallScaleId() {
        return smallScaleId;
    }

    public void setSmallScaleId(String smallScaleId) {
        this.smallScaleId = smallScaleId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public long getContact() {
        return contact;
    }

    public void setContact(long contact) {
        this.contact = contact;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "SmallScale{" +
                "smallScaleName='" + smallScaleName + '\'' +
                ", smallScaleId='" + smallScaleId + '\'' +
                ", location='" + location + '\'' +
                ", contact=" + contact +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
