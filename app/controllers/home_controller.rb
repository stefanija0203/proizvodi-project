class HomeController < ApplicationController

	def index
		respond_to do |format|
	      format.json
	      format.html          # /app/views/home/index.html.erb
	      format.html.phone    # /app/views/home/index.html+phone.erb
	      format.html.tablet   # /app/views/home/index.html+tablet.erb
	    end
	end

end