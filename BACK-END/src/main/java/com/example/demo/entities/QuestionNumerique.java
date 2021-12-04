package com.example.demo.entities;


/**
 * Classe fille de la classe "Question" qui permet d'instancier des questions à réponses multiples.
 * Les questions numériques contiennent une bonne réponse, un nombre d'entier et de décimaux qui composent cette réponse et si on souhaite ou non laisser le choix du signe à l'élève
 */
public class QuestionNumerique extends Question{
    private double bonneReponse;
    private int digits;
    private int decimaux;
    private Boolean sign;
    private double pointsMauvaiseReponse;

    /**
     * Constructeur d'une question numérique
     * @param nomQuestion le nom de la question dans l'evaluation (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param intitule l'intitulé de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param sujet le sujet de la question (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param points le nombre de points que représente la question dans le QCM (ce paramètre est passé au constructeur parent via la méthode "super()").
     * @param bonneReponse la bonne réponse à la question numérique.
     * @param sign bouléen qui indique si on indique ou non le signe de la réponse.
     */
    public QuestionNumerique(String nomQuestion, String intitule, String sujet, Double points,Double pointsMauvaiseReponse, Double bonneReponse, Boolean sign){
        super(nomQuestion,intitule,sujet,points);
        this.bonneReponse = bonneReponse;
        this.pointsMauvaiseReponse = pointsMauvaiseReponse;
        this.digits = Double.toString(bonneReponse).replace(".","").length();
        int nbrInt = Double.toString(bonneReponse).split("[.]")[0].length();
        if(this.digits > 8){
            this.decimaux = 0;
            this.digits = 0;
            this.setIntitule(this.getIntitule()+"\n[LES NOMBRES CHOISIS SONT TROP GRANDS ET NE SONT PAS PRIS EN CHARGE]");
        }
        else{
            String substr = Double.toString(bonneReponse).substring(nbrInt+1);
            int len = substr.length();
            if ( len > 0) {
                if (Integer.parseInt(substr) != 0) {
                    this.decimaux = len;
                }
            }
            else {
                this.decimaux = 0;
            }
        }
        this.sign = sign;
    }

    public String toTex(){
        return"\\element{"+this.getSujet()+"}{\n\t" +
                "\\begin{questionmultx}{"+getNomQuestion()+"}\n\t"+
                this.getIntitule() +"\n\t\t"+
                "\\begin{center}\n\t\t"+
                "\\AMCnumericChoices{"+this.getBonneReponse()+"}\n\t\t\t"+
                "{digits="+this.getDigits()+",decimals="+this.getDecimaux()+",sign="+this.getSign()+",scoreexact="+this.getPoints()+",scorewrong="+this.getPointsMauvaiseReponse()+"}\n\t\t" +
                "\\end{center}\n\t"+
                "\\end{questionmultx}\n" +
                "}";
    }



    public double getPointsMauvaiseReponse() {
        return pointsMauvaiseReponse;
    }

    public void setPointsMauvaiseReponse(double pointsMauvaiseReponse) {
        this.pointsMauvaiseReponse = pointsMauvaiseReponse;
    }

    public double getBonneReponse() {
        return bonneReponse;
    }
    public void setBonneReponse(double bonneReponse) {
        this.bonneReponse = bonneReponse;
    }

    public int getDigits() {
        return digits;
    }

    public void setDigits(int digits) {
        this.digits = digits;
    }

    public int getDecimaux() {
        return decimaux;
    }

    public void setDecimaux(int decimaux) {
        this.decimaux = decimaux;
    }

    public Boolean getSign() {
        return sign;
    }

    public void setSign(Boolean sign) {
        this.sign = sign;
    }
}
