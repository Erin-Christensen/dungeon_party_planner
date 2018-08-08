class Api::V1::CharactersController < ApplicationController
  before_action :authenticate_user!

  def index
    characters = Character.where(user: current_user.id)
    render json: characters
  end
end
