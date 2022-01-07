import { Question } from "./Question";

export class QuestionMultiple extends Question
{
    public reponses? : Map<string,boolean>;
    public coefficientMauvaiseReponse? : number;

    public QuestionMultiple()
    {
        
    }
}