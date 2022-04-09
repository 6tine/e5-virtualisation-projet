package com.esiee.virtualisation.RealEstateService.model;

public class RealEstate {
    private String name;
    private double price;
    private int nbRooms;

    public RealEstate(String name, double price, int nbRooms) {
        this.name = name;
        this.price = price;
        this.nbRooms = nbRooms;
    }

    public RealEstate() {
        this.name = "name";
        this.price = 150000;
        this.nbRooms = 4;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getNbRooms() {
        return nbRooms;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setNbRooms(int nbRooms) {
        this.nbRooms = nbRooms;
    }
}
