class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :userName
      t.text :expenses
      t.integer :moonDust
      t.text :moonVillage
      t.integer :totalSpent
      t.integer :monthlySpent
      t.string :moonVillageSize
      t.string :password_digest
      t.string :confirm_token
      t.string :email
      t.string :name
      t.string :profilePic_url

      t.timestamps
    end
  end
end
