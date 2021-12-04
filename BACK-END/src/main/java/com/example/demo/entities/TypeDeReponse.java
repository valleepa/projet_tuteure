package com.example.demo.entities;

public enum TypeDeReponse {
    BONNE,MAUVAISE,INCOHERENTE,ABSENTE;

    public String toString() {
        switch (this){
            case BONNE : return "b";
            case MAUVAISE : return "m";
            case INCOHERENTE : return "e";
            case ABSENTE : return "v";
            default: return "Réponse par défaut";
        }
    }
}
