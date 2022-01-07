import { Question } from "./Question";

export class QCM
{
    titre?: string;
    duree?: number;
    entete?: string;
    isRandomized?: boolean;
    SujetsDeQuestions?: string[];
    // questions = Question[];

    public QCM()
    {
    }
}