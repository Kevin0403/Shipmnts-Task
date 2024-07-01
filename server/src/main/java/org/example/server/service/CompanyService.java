package org.example.server.service;

import org.example.server.entity.Company;
import org.example.server.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    public List<Company> findAll() {

        return companyRepository.findAll();
    }

    public Company findById(int id) {

        return companyRepository.findById(id).orElse(null);
    }

    public Company save(Company company) {
        return companyRepository.save(company);
    }

    public void delete(Company company) {
        companyRepository.delete(company);
    }

    public boolean saveAll(List<Company> companies) {
        for(Company company : companies) {
            save(company);
            System.out.println(company.getName());
        };
        return true;
    }

}
