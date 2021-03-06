class Api::V1::CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    characters = Character.where(user: current_user.id)
    if characters != []
      characters = characters.sort.reverse
    end
    render json: characters
  end

  def show
    character = Character.find(params[:id])
    character.update({message: ""})
    render json: character
  end

  def new; end

  def create
    character = Character.new(character_params)
    character.user = current_user
    if character.save
      render json: character
    else
      render json: {errors: character.errors.full_messages}
    end
  end

  def update
    character = Character.find(params[:id])
    if character.update(character.levelUp)
      if character.level%4 == 0
        skills = Skill.where(class_name: character.class_type.name )
        CharacterSkill.create(character: character, skill: skills.sample)
      end
      if params[:source]
        character.update({message: ""})
        package = {
          character: CharacterSerializer.new(character)
        }
        render json: package
      else
        characters = Character.where(user: current_user.id)
        characters = characters.sort.reverse
        package = {
          characters: ActiveModel::Serializer::CollectionSerializer.new(characters, each_serializer: CharacterSerializer)
        }
        render json: package
      end
    else
      render json: { errors: character.errors.full_messages}
    end
  end

  def destroy
    character = Character.find(params[:id])
    character.destroy
    characters = Character.where(user: current_user.id)
    if characters != []
      characters = characters.sort.reverse
    end
    render json: characters
  end

  private

  def character_params
    params.permit(:name, :task, :class_type_id)
  end
end
