package org.example.server.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.server.entity.Company;
import org.example.server.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/company")
@CrossOrigin("*")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<Company> getCompany() {
        return companyService.findAll();
    }

//    @PostMapping
//    public Company createCompany(@RequestBody Company company) {
//        return companyService.save(company);
//    }

    @PostMapping
    public void createCompany(@RequestBody List<Company> companies) {
        companyService.saveAll(companies);
    }

    @GetMapping("/{id}")
    public Company getCompany(@PathVariable int id) {
        return companyService.findById(id);
    }
}
