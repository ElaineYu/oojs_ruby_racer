get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/create_players' do 
  @player_1 = Player.create(params[:player_1])
  @player_2 = Player.create(params[:player_2])
  session[:time] = Time.now
  
  redirect to('/')
end
