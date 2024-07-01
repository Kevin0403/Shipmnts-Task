package org.example.server.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Company {
    @Id
    @GeneratedValue
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getWebsite() {
        return Website;
    }

    public void setWebsite(String website) {
        Website = website;
    }

    public int getEmployees() {
        return Employees;
    }

    public void setEmployees(int employees) {
        Employees = employees;
    }

    public Date getFoundedDate() {
        return FoundedDate;
    }

    public void setFoundedDate(Date foundedDate) {
        FoundedDate = foundedDate;
    }

    public String getIndustryType() {
        return IndustryType;
    }

    public void setIndustryType(String industryType) {
        IndustryType = industryType;
    }

    private String Name;
    private String Address;
    private String Phone;
    private String Email;
    private String Website;
    private int Employees;

    @Temporal(TemporalType.DATE)
    private Date FoundedDate;
    private String IndustryType;
}
