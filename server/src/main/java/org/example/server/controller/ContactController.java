package org.example.server.controller;


import org.example.server.entity.Company;
import org.example.server.entity.Contact;
import org.example.server.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/contact")
@CrossOrigin("*")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    public List<Contact> getAllContacts() {
        contactService.getAllContacts();
        return contactService.getAllContacts();
    }

//    @PostMapping
//    public Contact addContact(@RequestBody Contact contact) {
//        return contactService.addContact(contact);
//    }
//
    @PostMapping
    public void updateContact(@RequestBody List<Contact> contact) {
        for(Contact c : contact){
            contactService.addContact(c);
        }
    }
}
