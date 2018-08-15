class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    characters = Character.where(user: current_user.id)
    characters = characters.sort
    render json: characters
  end

  def show
    render json: Character.find(params[:id])
  end

  def new; end

  def create
    character = Character.new(character_params)
    character.user = current_user
    if character.save
      render json: character
    else
      render json: character.errors
    end
  end

  def update
    character = Character.find(params[:id])
    if character.update(character.levelUp)
      if params[:source]
        package = {
          character: CharacterSerializer.new(character)
        }
        render json: package
      else
        characters = Character.where(user: current_user.id)
        characters = characters.sort
        package = {
          characters: ActiveModel::Serializer::CollectionSerializer.new(characters, each_serializer: CharacterSerializer)
        }
        render json: package
      end
    else
      render json: { errors: character.errors.full_messages}
    end
  end

  private

  def character_params
    params.permit(:name, :task, :class_type_id)
  end
end
