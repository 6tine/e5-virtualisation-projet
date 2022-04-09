package com.esiee.virtualisation.cotationservice;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CotationEstimationService {

    @GetMapping("/cotation/estimation")
    public String estimation(){
        int min = 100000;
        int max = 1000000;
        double price =  Math.floor(Math.random()*(max-min+1)+min);
        return String.valueOf(price);
    }

    @GetMapping("/cotation")
    public String hello(){
        return "Hello";
    }
}
