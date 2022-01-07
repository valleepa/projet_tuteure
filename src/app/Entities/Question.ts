import { TypeDeQuestion } from "./TypeDeQuestion";

export abstract class Question
{
    public typeDeQuestion? : TypeDeQuestion;
    public intitule? : string;
    public sujet? : string;
    public points? : number;
    public nomQuestion? : number;
    public categorie? : string;
    public id? : number;

    public Question()
    {
    }
}