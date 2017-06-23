# Title: Guess The Number

### Activity:
#- You are to generate a basic "guess my number" game.
#The computer will pick a random number between 0 and 10.
#The user will guess the number until they guess correctly.

### Specification:
#- The user should be asked to guess a number
#- If the user's guess is correct, the user should see a congratulatory message
#- If the user's guess is not correct, the user should be asked to guess the number again.

### Extensions:
#- Let the user choose the maximum value (so they can play a long game with a
#random value between 0 and 10000, for example).
#- Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

#request for input
puts "Guess a number between 0 - 10000"

#generate a number
number = rand(0..10000)

# prompt user for a guess
guess = gets.chomp.to_i

  #while the guess is incorrect
  while guess != number
    if guess > number
      puts "#{guess} is incorrect! Guess lower! random number is #{number}"
    elsif guess < number
      puts "#{guess} is incorrect! Guess higher! random number is #{number}"
    end
    # prompt user to guess again
    guess = gets.chomp.to_i
  end

  puts "YAY!! #{guess} is correct! random number is #{number}"
