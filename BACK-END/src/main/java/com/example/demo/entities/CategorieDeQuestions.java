package com.example.demo.entities;

public enum CategorieDeQuestions {
    QUESTIONOUVERTE,QUESTIONUNIQUE,QUESTIONMULTIPLE,QUESTIONNUMERIQUE;
    public String toString(){
        switch (this){
            case QUESTIONOUVERTE: return "Question ouverte";
            case QUESTIONUNIQUE: return "Question unique";
            case QUESTIONMULTIPLE: return "Question multiple";
            case QUESTIONNUMERIQUE: return "Question numérique";
            default: return "Question par défaut";
        }
    }
}
