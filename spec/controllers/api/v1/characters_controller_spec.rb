require "rails_helper"

RSpec.describe Api::V1::CharactersController, type: :controller do
  let!(:signed_in_user) { FactoryBot.create(:user) }
  let!(:first_character) { FactoryBot.create(:character, user: signed_in_user) }
  let!(:second_character) { FactoryBot.create(:character, name: "bob", user: signed_in_user) }
  let!(:some_skill) { FactoryBot.create(:skill)}


  describe "GET#index" do

    it "should return all of a users characters, in descending order" do
      sign_in signed_in_user

      get :index
      returned_json = JSON.parse(response.body)
      characters = returned_json["characters"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(characters.length).to eq 2
      expect(characters[0]["name"]).to eq second_character.name
      expect(characters[0]["user"]["id"]).to eq signed_in_user.id

      sign_out signed_in_user
    end

    it "should redirect an unsigned in user to the sign in page" do
      get :index

      expect(response.status).to eq 302
    end

  end

  describe "GET#show" do

    it "should return the information for a single character of a signed in user" do
      sign_in signed_in_user

      get :show, params: {id: first_character.id}
      returned_json = JSON.parse(response.body)
      character = returned_json["character"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(character["name"]).to eq first_character.name
      expect(character["user"]["id"]).to eq signed_in_user.id
      expect(character["task"]).to eq first_character.task

      sign_out signed_in_user
    end

    it "should redirect an unsigned in user to the sign in page" do
      get :show, params: {id: first_character.id}

      expect(response.status).to eq 302
    end
  end

  describe "PATCH#update" do
    it "should change the information for a single venue if you are an admin" do
      sign_in signed_in_user

      patch_json = {
        id: first_character
      }
      4.times do
        get(:update, params: patch_json)
      end
      returned_json = JSON.parse(response.body)
      character = returned_json["characters"][-1]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(character["level"]).to eq 4
      expect(character["character_skills"].count).to eq 1
      
      sign_out signed_in_user
    end
  end

  describe "DELETE#destroy" do
    it "should delete a character" do
      sign_in signed_in_user

      expect {delete :destroy, params: { id: first_character }}.to change(Character, :count).by(-1)

      sign_out signed_in_user
    end
  end

end
