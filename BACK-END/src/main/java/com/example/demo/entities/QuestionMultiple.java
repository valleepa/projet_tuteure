package com.example.demo.entities;

import java.util.Map;
import java.util.Set;

/**
 * Classe fille de la classe "Question" qui permet d'instancier des questions à réponses multiples.
 * Les questions multiples contiennent une map de réponses, qui compilent les différentes réponses à afficher et leur qualité de bonne ou de mauvaise réponse en associant un bouléen.
 *
 */
public class QuestionMultiple extends Question{
    private Map<String,Boolean> reponses;
    private Double coefficientMauvaiseReponse;

    /**
     * Constructeur d'une question à réponses multiples
     * @param nomQuestion le nom de la question dans l'evaluation (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param intitule l'intitulé de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param sujet le sujet de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param points le nombre de points que représente la question dans le QCM (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param reponses la map des reponses, associées à si elles sont bonnes ou fausses.
     * @param coefficientMauvaiseReponse le coefficient qui multiplie la valeur d'une mauvaise réponse avant qu'elle soit retirée aux points gagnés sur la question.
     */
    public QuestionMultiple(String nomQuestion, String intitule, String sujet, Double points, Map<String,Boolean> reponses, Double coefficientMauvaiseReponse){
        super(nomQuestion,intitule,sujet,points);
        this.reponses = reponses;
        this.coefficientMauvaiseReponse = coefficientMauvaiseReponse;
    }

    public String toTex(){
        String texText = "\\element{"+this.getSujet()+"}{\n\t" +
                "\\begin{questionmult}{"+getNomQuestion()+"}\\bareme{formula=NBC-"+ getCoefficientMauvaiseReponse()+"*NMC}\n\t"+
                this.getIntitule() +"\n\t\t"+
                "\\begin{choices}\n\t\t";
        Set<String> keys = reponses.keySet();
        for(String key : keys){
            texText+="\t";
            if(this.getReponses().get(key)){
                texText+="\\correctchoice{"+key+"}\n\t\t";
            }
            else{
                texText+="\\wrongchoice{"+key+"}\n\t\t";
            }
        }
        texText += "\\end{choices}\n\t"+
                "\\end{questionmult}\n" +
                "}";
        return  texText;
    }

    public Map<String, Boolean> getReponses() {
        return reponses;
    }

    public void setReponses(Map<String, Boolean> reponses) {
        this.reponses = reponses;
    }

    public Double getCoefficientMauvaiseReponse() {
        return coefficientMauvaiseReponse;
    }

    public void setCoefficientMauvaiseReponse(Double coefficientMauvaiseReponse) {
        this.coefficientMauvaiseReponse = coefficientMauvaiseReponse;
    }
}
