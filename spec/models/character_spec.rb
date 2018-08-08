require 'rails_helper'

RSpec.describe Character, type: :model do
  describe "validations" do
    let!(:character) { FactoryBot.build(:character) }
    let!(:character2) { FactoryBot.build(:character, name: nil) }
    let!(:character3) { FactoryBot.build(:character, image_url: nil) }
    let!(:character4) { FactoryBot.build(:character, task: "") }

    it "is not valid without a name" do
      expect(character2).to_not be_valid
    end

    it "is not valid without a image" do
      expect(character3).to_not be_valid
    end

    it "is not valid without a task" do
      expect(character4).to_not be_valid
    end

    it "is valid with valid attributes" do
      expect(character).to be_valid
    end
  end
end
