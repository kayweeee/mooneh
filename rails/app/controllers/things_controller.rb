class ThingsController < ApplicationController
    def index
        # render json: {'hanabiner': "get high"}
        render :landingpage
    end
end