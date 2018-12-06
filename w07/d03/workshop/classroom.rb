# Creating class to hold students
class Classroom
  attr_accessor :name
  attr_accessor :students

  # Creating attributes for classroom and storing students in an empty hash
  def initialize(name)
    @name = name
    @students = {}
  end
  #Student method used to add student. Checks if there is already a student.  
  def addStudent(student)
    if @students[student.name]
      raise "Sorry, #{student} is already in here."
    else
    @students[student.name] = student
    end
  end

  def roster
    puts @name + " roster:"
    @students.each do |key, value|
      puts "#{value.name}: #{value.age}"
    end
  end

end

