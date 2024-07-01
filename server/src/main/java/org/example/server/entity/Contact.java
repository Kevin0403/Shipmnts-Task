package org.example.server.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Contact {
    @Id
    @GeneratedValue
    private int id;

    public String getContactType() {
        return ContactType;
    }

    public void setContactType(String contactType) {
        ContactType = contactType;
    }

    public Date getBirth() {
        return Birth;
    }

    public void setBirth(Date birth) {
        Birth = birth;
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

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String Name;
    private String Email;
    private String Phone;

    @Temporal(TemporalType.DATE)
    private Date Birth;
    private String ContactType;

    private Company company;

}
