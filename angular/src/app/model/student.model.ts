export enum TypeMin{
    בת,בן
}

export interface StudentModel{
    id:number,
    idStudent:number,
    studentName:string,
    studentLastName:string, 
    min:TypeMin
    date_brithDate:Date,
    date_enter:Date,
    age:number,
   

}