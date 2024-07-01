package org.example.server.service;

import org.example.server.entity.Company;
import org.example.server.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    public List<Company> findAll() {

        return companyRepository.findAll();
    }
}
