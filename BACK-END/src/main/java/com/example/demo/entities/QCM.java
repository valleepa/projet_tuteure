package com.example.demo.entities;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

/**
 * Classe qui permet d'instancier des QCM
 */
public class QCM {
    private String titre;
    private double duree;
    private String entete;
    private Boolean isRandomized;
    private Set<String> SujetsDeQuestions = new HashSet<String>();
    private Set<Question> questions = new HashSet<Question>();

    public QCM(String titre, Double duree, String entete, Boolean isRandomized){
        this.duree = duree;
        this.entete = entete;
        this.isRandomized = isRandomized;
    }

    public void addQuestion(Question question){
        this.getSujetsDeQuestions().add(question.getSujet());
        this.getQuestions().add(question);
    }

    public String toTex(){
        String texText = "%%DEBUT DU QCM%%\n\n"+
                "\\documentclass[a4paper]{article}\n" +
                "\\usepackage[utf8x]{inputenc}\n" +
                "\\usepackage[T1]{fontenc}\n" +
                "\n" +
                "\\usepackage[box,completemulti]{automultiplechoice}\n" +
                "\n" +
                "\\begin{document}\n\n"+
                "\\setdefaultgroupmode{withoutreplacement}\n\n\n";
        for(Question q : questions){
            texText+= q.toTex() + "\n";

        }

        texText += "\n\n%% HEADER %%\n\n"+
                "\\onecopy{10}{\n"+
                "\\noindent{\\bf QCM  \\hfill TEST}\n" +
                "\n" +
                "\\vspace*{.5cm}\n" +
                "\\begin{minipage}{.4\\linewidth}\n" +
                "  \\centering\\large\\bf "+this.getEntete()+"\n" +
                "\\end{minipage}\n" +
                "\\namefield{\\fbox{\\begin{minipage}{.5\\linewidth}\n" +
                "Prénom et nom:\n" +
                "\n" +
                "\\vspace*{.5cm}\\dotfill\n" +
                "\\vspace*{1mm}\n" +
                "\\end{minipage}}}\n\n"+
                "\n\n%% FIN HEADER %%\n\n";

        for(String sujet : this.getSujetsDeQuestions()){
            texText += "\\begin{center}\n\t" +
                    "\\hrule\\vspace{2mm}\n\t" +
                    "\\bf\\Large "+sujet +"\n\t" +
                    "\\vspace{1mm}\\hrule\n\t" +
                    "\\end{center}\n" +
                    "\n" +
                    "\\insertgroup{"+sujet+"}\n";
        }


        return texText+"\n" +
                "\\end{document}\n"+
                "}\n"+
                "\n\n%%FIN DU QCM%% \n\n";
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public double getDuree() {
        return duree;
    }

    public void setDuree(double duree) {
        this.duree = duree;
    }

    public String getEntete() {
        return entete;
    }

    public void setEntete(String entete) {
        this.entete = entete;
    }

    public Boolean getRandomized() {
        return isRandomized;
    }

    public void setRandomized(Boolean randomized) {
        isRandomized = randomized;
    }

    public Set<String> getSujetsDeQuestions() {
        return SujetsDeQuestions;
    }

    public void setSujetsDeQuestions(Set<String> SujetsDeQuestions) {
        this.SujetsDeQuestions = SujetsDeQuestions;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
