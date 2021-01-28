class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :image_url
      t.integer :points_to_give
      t.integer :points_to_redeem
      t.string :name
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
