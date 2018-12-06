class Grade
  attr_accessor :subject, :score
  #Creating a class to determine student's grade for each subject
  def initialize(subject, score)
    @subject = subject,
    @score = score
  end

end
