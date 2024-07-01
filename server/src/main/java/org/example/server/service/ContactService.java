package org.example.server.service;

import org.example.server.entity.Company;
import org.example.server.entity.Contact;
import org.example.server.repository.CompanyRepository;
import org.example.server.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private CompanyRepository companyRepository;
    public List<Contact> getAllContacts() {

        return contactRepository.findAll();
    }

    public Contact getContactById(int id) {
        return contactRepository.findById(id).orElse(null);
    }

    public Contact addContact(Contact contact) {
        Company c = companyRepository.findByName(contact.getCompanyName());
        if(c == null) {
            return null;
        }else {
            contact.setCompany(c);
        }
        return contactRepository.save(contact);
    }

}
