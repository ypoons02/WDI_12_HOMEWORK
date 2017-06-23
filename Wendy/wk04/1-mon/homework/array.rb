### arrays practise
#https://gist.github.com/epoch/8292180

#1. Create an array of the days of the week
#Create a variable named days_of_the_week as an array of the following:
#Monday
#Tuesday
#Wednesday
#Thursday
#Friday
#Saturday
#Sunday
day = ["Moday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

#2. My calendar says the first day is Sunday...
#Remove Sunday from the last postion and move it to the first position.
#Use array methods.
day.insert(0, day.delete_at(6))
#puts day

#3. Create a new array of the days of the week:
#The first inner array should be the weekdays
#The second inner array should be the weekend days
days_of_the_week = [
    ["Weekdays",["Monday","Tuesday","Wednesday","Thursday","Friday"]],
    ["Weekends",["Saturday","Sunday"]]
]

#puts days_of_the_week[0][1]

#4. Remove either the weekdays or the weekends
#Your choice...
days_of_the_week.delete_at(1)

#5. Sort the remaining days alphabetically

puts days_of_the_week[0][1].sort
