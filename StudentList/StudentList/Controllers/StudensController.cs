using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Students.Models;

namespace Students.Controllers
{
    public class StudentsController : Controller
    {
     
        static List<Student> studentList = new List<Student>() {
        new Student(314839267, "תמי", "קרויזר", TypePerson.נקבה, new DateTime(2000 , 10, 1), new DateTime(2020,1,1),21),
        new Student(028055770, "שרי", "כץ", TypePerson.נקבה, new DateTime(2020 , 8, 2), new DateTime(2020 , 1, 1),21),
        new Student(123456789, "חני", "גרדין", TypePerson.נקבה, new DateTime(2001 , 9, 2), new DateTime(2020 , 3, 1),20),
        new Student(987654321, "משה", "כהן", TypePerson.זכר, new DateTime(1999 , 3, 5), new DateTime(2020 , 2, 2),22),
        new Student(987456123, "שמעון", "לוי", TypePerson.זכר, new DateTime(1999 , 1, 5), new DateTime(2020 , 2, 2),22)
        };
        [HttpGet]
        public List<Student> GetStudentList()
        {
            return studentList;
        }
        [HttpGet]
        public List<Student> GetFilter(string mySearc)
        {

            List<Student> newList = new List<Student>();
            if (mySearc == null)
                return studentList;
            foreach (var stud in studentList)
            {
                if (stud.Search(mySearc) == true)
                    newList.Add(stud);
            }
            return newList;
        }
        public Student GetStudentById(int id)
        {
            Student thisStudent = studentList.Where(x => x.idStudent == id).FirstOrDefault();
            return thisStudent;
        }
    }
}