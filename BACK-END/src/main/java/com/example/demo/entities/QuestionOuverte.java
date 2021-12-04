package com.example.demo.entities;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Classe fille de la classe "Question" qui permet d'instancier des questions ouvertes.
 * Les questions ouvertes contiennent un champ de réponse d'une longueur déterminée par le champ "nbLignes".
 * Le correcteur pourra noter l'élève en fonction d'un barême qu'il aura préalablement créé.
 * Le barême prend la forme d'une HashMap qui contient des chaînes de caractères correspondants à la qualité de la production de lélève.
 * Le barême associe à chacune de ces chaînes de caractères un Double qui correspond au nombre de points générés par la qualité de la réponse relevée.
 */
public class QuestionOuverte extends Question{
    private int nbLignes;
    private Map<String,Double> bareme;

    /**
     * Constructeur d'une question ouverte
     * @param nomQuestion le nom de la question dans l'evaluation (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param intitule l'intitulé de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param sujet le sujet de la question (ce paramètre est passé au constructeur parent via la commande "super()").
     * @param points le nombre de points que représente la question dans le QCM (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param nbLignes le nombre de lignes de la zone de texte pour l'élève.
     * @param bareme la HashMap contenant les différentes qualités de réponse et le nombre de points leur correpondant.
     */
    public QuestionOuverte(String nomQuestion, String intitule, String sujet, Double points, int nbLignes,Map<String,Double> bareme){
        super(nomQuestion,intitule,sujet,points);
        this.nbLignes = nbLignes;
        this.bareme = bareme;
    }



    public String toTex(){
        String texText = "\\element{"+this.getSujet()+"}{\n\t" +
                "\\begin{question}{"+getNomQuestion()+"}\n" +
                this.getIntitule() +"\n\t\t"+
                "\\AMCOpen{"+
                "lines=" + nbLignes +
                ",dots=true}{";
        Set<String> keys = bareme.keySet();
        for(String key : keys){
            texText += "\\wrongchoice{"+ key +"}\\scoring{"+this.getBareme().get(key)+"}";
        }
        texText += "}\n\t" +
                "\\end{question}\n"+
                "}";

        return texText;
    }

    public int getNbLignes() {
        return nbLignes;
    }

    public void setNbLignes(int nbLignes) {
        this.nbLignes = nbLignes;
    }

    public Map<String, Double> getBareme() {
        return bareme;
    }

    public void setBareme(Map<String, Double> bareme) {
        this.bareme = bareme;
    }
}
