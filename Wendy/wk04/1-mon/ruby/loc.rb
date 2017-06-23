require 'pry'

# read a file I pass in

#filename = 'loops.rb'
#line_num=0

#text=filename.read

#text.gsub!(/\r\n?/, "\n")
#text.each_line do |line|
#print "#{line_num += 1} #{line}"

# a function to read a file
#what format does it come back as??

# use some programming magic to work to how many lines

# print it out as
#17 lines

#fileName = gets.chomp
#lineCount = File.read(fileName).split("\n").length + 1
lineCount = File.read(ARGV[0]).split("\n").length + 1
puts lineCount
