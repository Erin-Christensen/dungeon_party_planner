require 'rails_helper'

RSpec.describe Character, type: :model do
  describe "validations" do
    let!(:character) { FactoryBot.build(:character) }
    let!(:character1) {FactoryBot.build(:character, user: nil)}
    let!(:character2) { FactoryBot.build(:character, name: nil) }
    let!(:character3) { FactoryBot.build(:character, task: "") }

    it "is not valid without a user" do
      expect(character1).to_not be_valid
    end

    it "is not valid without a name" do
      expect(character2).to_not be_valid
    end

    it "is not valid without a task" do
      expect(character3).to_not be_valid
    end

    it "has default values for level, image_tier, stat, message, and health" do
      expect(character.level).to eq(0)
      expect(character.image_tier).to eq(0)
      expect(character.stat).to eq(1)
      expect(character.health).to eq(10)
      expect(character.message).to eq("New Character Created!")
    end

    it "is valid with valid attributes" do
      expect(character).to be_valid
    end
  end
end
