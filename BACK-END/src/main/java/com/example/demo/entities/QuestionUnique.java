package com.example.demo.entities;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Classe fille de la classe "Question" qui permet d'instancier des questions à réponse unique.
 * Les questions uniques contiennent une map de réponses, qui compilent les différentes réponses à afficher et leur qualité de bonne ou de mauvaise réponse en associant un bouléen.
 * Les questions uniques contiennent également un barême sous forme de map, qui fera correspondre un type de réponse (voir Enum "TypeDeReponse") avec un Double, correspondant au nombre de points associés à ce type de réponse.
 */
public class QuestionUnique extends Question{
    private Map<String,Boolean> reponses;
    private Map<TypeDeReponse,Double> bareme;

    /**
     * Constructeur d'une question à réponse unique
     * @param nomQuestion le nom de la question dans l'evaluation (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param intitule l'intitulé de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param sujet le sujet de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param points le nombre de points que représente la question dans le QCM (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param reponses la map des reponses, associées à si elles sont bonnes ou fausses.
     * @param bareme la map des type de réponse avec leur type (voir Enum "TypeDeReponse") et leur valeur en points dans la question.
     */
    public QuestionUnique(String nomQuestion, String intitule, String sujet, Double points, Map<String,Boolean> reponses, Map<TypeDeReponse,Double> bareme){
        super(nomQuestion,intitule,sujet,points);
        this.reponses = reponses;
        this.bareme = bareme;
    }

    public String toTex(){
        String texText = "\\element{"+this.getSujet()+"}{\n\t" +
            "\\begin{question}{"+getNomQuestion()+"}\\bareme{";
        Set<TypeDeReponse> baremeKeySet = this.getBareme().keySet();
        for(TypeDeReponse baremeKey : baremeKeySet ){
            texText += baremeKey.toString()+"="+this.getBareme().get(baremeKey)+",";
        }
        texText += "}\n" +
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
                "\\end{question}\n" +
                "}";
        return  texText;
    }

    public Map<String, Boolean> getReponses() {
        return reponses;
    }

    public void setReponses(Map<String, Boolean> reponses) {
        this.reponses = reponses;
    }

    public Map<TypeDeReponse, Double> getBareme() {
        return bareme;
    }

    public void setBareme(Map<TypeDeReponse, Double> bareme) {
        this.bareme = bareme;
    }
}
