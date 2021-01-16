package com.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Corporate {
	@Id
	private String corporateId;
	private String corporateName;
 	private String location;
 	private long contact  ;
	private String emailId;
	private Date established;
	private String password;
	
	
	public Corporate() {}

	public Corporate(String corporateId, String corporateName, String location, long contact, String emailId, Date established, String password) {
		this.corporateId = corporateId;
		this.corporateName = corporateName;
		this.location = location;
		this.contact = contact;
		this.emailId = emailId;
		this.established = established;
		this.password = password;
	}

	public String getCorporateId() {
		return corporateId;
	}
	public void setCorporateId(String corporateId) {
		this.corporateId = corporateId;
	}
	public String getCorporateName() {
		return corporateName;
	}
	public void setCorporateName(String corporateName) {
		this.corporateName = corporateName;
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

	public Date getEstablished() {
		return established;
	}

	public void setEstablished(Date established) {
		this.established = established;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Corporate{" +
				"corporateId='" + corporateId + '\'' +
				", corporateName='" + corporateName + '\'' +
				", location='" + location + '\'' +
				", contact=" + contact +
				", emailId='" + emailId + '\'' +
				", established=" + established +
				", password='" + password + '\'' +
				'}';
	}
}
