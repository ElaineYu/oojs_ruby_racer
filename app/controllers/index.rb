#HOMEPAGE
get '/' do

  erb :index
end

#GET PLAYER NAMES
post '/' do 
	@player_1 = Player.create(name: params[:player_1])
  	@player_2 = Player.create(name: params[:player_2])

  	if request.xhr?
  		erb :_welcome_play, layout: false
  	else
  		redirect '/'
    end
end
  # session[:time] = Time.now

# GET WINNER
post '/get_winner' do 
	puts params
	if request.xhr?
    	erb :_winner, :layout => false
    else
    	redirect '/'
    end
end