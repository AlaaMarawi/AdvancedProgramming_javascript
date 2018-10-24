class Course{
constructor (name,time,date,rooms){
this.name =name
this.time=time
this.date=date
this.rooms=rooms
 }
 toString (){
return  this.name;
 }
}

class Student{
constructor (id,name,gpa,courses){
this.name=name
this.id=id
this.gpa=gpa
this.courses=courses
 }
 toString(){
return this.id+"";
 }
}

