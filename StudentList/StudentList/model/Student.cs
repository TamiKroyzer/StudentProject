using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Students.Models
{
    public enum TypePerson { זכר, נקבה }
    public class Student
    {
    
        static int count = 0;

        public Student(int idStudent, string studentName, string studentLastName, TypePerson min, DateTime date_brithDate, DateTime date_enter,int age)
        {
            count++;
            id = count;
            this.idStudent = idStudent;
            this.studentName = studentName;
            this.studentLastName = studentLastName;
            this.min = min;
            this.date_brithDate = date_brithDate;
            this.date_enter = date_enter;
            this.age = age;
        }

        public int id { get; set; }
        public int idStudent { get; set; }
        public string studentName { get; set; }
        public string studentLastName { get; set; }
        public TypePerson min { get; set; }
        public DateTime date_brithDate { get; set; }
        public DateTime date_enter { get; set; }
        public int age { get; set; }
        public bool Search(string mySearch)
        {
            if ((studentLastName.IndexOf(mySearch) != -1)|| (studentName.IndexOf(mySearch) != -1)|| (idStudent.ToString().IndexOf(mySearch) != -1))
                return true;
          
            else
                return false;
        }

    }
}
