
class Reportcard
  attr_accessor :grades
  def initialize
    @grades = {}
  end

  def addGrade(grade)
    if @grades[grade.subject]
      raise "Sorry, you cannot add or change #{subject} because it was already entered."
    else
    @grades[grade.subject] = grade
  end

  def printCard
    @grades.each do |subject, grade|
      puts "Subject: #{subject} - #{grade.score}"
    end
  end

  def grades
    @grades
  end

end
