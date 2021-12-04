package com.example.demo.entities;


/**
 * Classe abstraite permettant l'instanciation de Questions.
 * Cette classe est abstraite et son constructeur doit-être appelé dans les constructeurs des classes filles
 */
public abstract class Question {
    private String intitule;
    private String sujet;
    private Double points;
    private String nomQuestion;

    /**
     * Constructeur d'une question générique
     * @param intitule l'intitulé de la question
     * @param sujet le sujet de la question
     */
    public Question(String nomQuestion, String intitule, String sujet, Double points){
        this.nomQuestion = nomQuestion;
        this.intitule = intitule;
        this.sujet = sujet;
        this.points = points;
    }

    abstract String toTex();

    public String getNomQuestion() {
        return nomQuestion;
    }

    public void setNomQuestion(String nomQuestion) {
        this.nomQuestion = nomQuestion;
    }

    public String getIntitule() {
        return intitule;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public Double getPoints() {
        return points;
    }

    public void setPoints(Double points) {
        this.points = points;
    }
}
