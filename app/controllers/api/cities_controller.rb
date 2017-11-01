class Api::CitiesController < ApplicationController
    def index
        @cities = City.all 
        render json: @cities
    end
    def show
        @city = City.find(params[:id])
        render json: @city
    end
    def create
        @acity = City.create!(city_params)
        render json: @city
    end
    def
        
    end
    def
        
    end
    end
    def
        
    end
    def
        
    end

    private

    def
        
    end

    
end
