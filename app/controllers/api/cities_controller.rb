class Api::CitiesController < ApplicationController
    def index
        @cities = Cities.all 
        render json: @cities
        
    end
    # def create
    #     @cities = Cities.create!(cities_params)
    #     render json: @cities
end
