package com.esiee.virtualisation.RealEstateService;

import com.esiee.virtualisation.RealEstateService.model.RealEstate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class RealEstateController {

    @GetMapping("/realEstate")
    public ArrayList<RealEstate> getRealEstates(){
        ArrayList<RealEstate> list = new ArrayList<RealEstate>();
        list.add(new RealEstate());
        list.add(new RealEstate("Appartement",125000, 4));
        list.add(new RealEstate("Maison",200000, 6));
        return list;
    }

    @GetMapping("/realEstate/{id}")
    public String realEstateofId(@PathVariable int id){
        return "Bien immobilier d'id " + id;
    }
}
