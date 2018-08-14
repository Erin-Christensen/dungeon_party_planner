class ClassTypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :main_stat, :suggested_task
  has_many :characters
end
