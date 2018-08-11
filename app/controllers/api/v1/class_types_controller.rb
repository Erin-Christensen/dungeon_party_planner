class Api::V1::ClassTypesController < ApplicationController
  def index
    render json: ClassType.all
  end
end
