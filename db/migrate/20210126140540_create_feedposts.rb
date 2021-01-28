class CreateFeedposts < ActiveRecord::Migration[6.1]
  def change
    create_table :feedposts do |t|
      t.integer :user_id
      t.integer :recipient_id
      t.string :message
      t.integer :points
      t.string :gif_url

      t.timestamps
    end
  end
end
