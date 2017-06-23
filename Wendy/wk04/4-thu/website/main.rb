require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/about' do
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
  #binding.pry
  "this is some text #{result} test: #{@name}"
end

get '/' do
  erb :index
end

#http://localhost:4567/stock?stock=APPL
get '/stock' do
#output in html
erb(:result, )
end
