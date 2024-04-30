package com.java.college.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.college.model.Admission;
import com.java.college.repository.AdmissionRepository;

import java.util.List;

@Service
public class AdmissionService {
    
    @Autowired
    private AdmissionRepository admissionRepository;

    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAll();
    }

    public Admission getAdmissionById(Long admissionid) {
        return admissionRepository.findById(admissionid).orElse(null);
    }

    public Admission createAdmission(Admission admission) {
        return admissionRepository.save(admission);
    }

    public Admission updateAdmission(Long admissionid, Admission admissionDetails) {
        Admission admission = admissionRepository.findById(admissionid).orElse(null);
        if (admission != null) {
            admission.setStudentName(admissionDetails.getStudentName());
            admission.setCollege(admissionDetails.getCollege());
            admission.setCourse(admissionDetails.getCourse());
            admission.setDuration(admissionDetails.getDuration());
            admission.setFees(admissionDetails.getFees());
            admission.setApplicationStatus(admissionDetails.getApplicationStatus());
            return admissionRepository.save(admission);
        }
        return null;
    }

    public void deleteAdmission(Long admissionid) {
        admissionRepository.deleteById(admissionid);
    }
}
