### crappy calculator as a command line program (sorry)
#https://gist.github.com/epoch/c860e4c5126482502fc8

#Calculator
#Explanation
#You will be building a calculator. A calculator can perform multiple arithmetic operations.
#Your function should allow the user to choose which operation is expected,
#enter in the values to perform the operation on, and ultimately view the result.

puts "Hello! I'm a calculator."+ "\nPlease choose from the following arithmetic operations to do your calculation\n + - * /"

#Specification:
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#This process should continue until the user selects a quit option from the menu

#Phase 1
#Calculator functionality
#Calculator should be able to do basic arithmetic (+,-, *, /)

require "pry"

values = []
input = gets
values = input.split(" ")

fValue = 0
sValue = 0

fValueArray = 0
sValueArray = 0

subTotal = 0

i = values.length

while i > 1 do
  fValueArray = i - 1
  sValueArray = i + 1

    if values[i] = "+"
        fValue = values[fValueArray].chomp.to_i
      #  sValue = values[sValueArray].chomp.to_i
        subTotal = subTotal + fValue + sValue
        values[fValueArray] = subTotal
        puts "hello!!! #{fValue} + #{sValue} = #{subTotal}"
        puts values
    end

    if values[i] = "-"
      #  fValue = values[fValueArray].chomp.to_i
    #    sValue = values[sValueArray].chomp.to_i
        subTotal =  fValue - sValue

        puts "hello!!! #{fValue} - #{sValue} = #{subTotal}"
    end

    if values[i] = "*"
        fValue = values[fValueArray].chomp.to_i
        sValue = values[sValueArray].chomp.to_i
        subTotal =  fValue * sValue

        puts "hello!!! #{fValue} * #{sValue} = #{subTotal}"
    end

     if values[i] = "/"
        fValue = values[fValueArray].chomp.to_i
        sValue = values[sValueArray].chomp.to_i
        subTotal =  fValue / sValue

        puts "hello!!! #{fValue} / #{sValue} = #{subTotal}"
    end
    i = i - 1
  end


#Phase 2
#Advanced Calculator functionality
#Calculator should be able to do basic arithmetic (exponents, square roots)

#Phase 3
#User should be given a menu of Calculator functionality
#User should be able to choose intended functionality

#Optional Extensions
#Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
