require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    let!(:user) { FactoryBot.build(:user) }
    let!(:user3) { FactoryBot.build(:user, email: nil) }

    it "is not valid without an email" do
      expect(user3).to_not be_valid
    end

    it "is valid with valid attributes" do
      expect(user).to be_valid
    end
  end
end

describe "#admin?" do
  it "is not an admin if the role is not admin" do
    user = FactoryBot.create(:user, role: "member")
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the role is admin" do
    user = FactoryBot.create(:user, role: "admin")
    expect(user.admin?).to eq(true)
  end
end
