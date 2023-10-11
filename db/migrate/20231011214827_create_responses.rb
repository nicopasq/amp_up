class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.string :body
      t.integer :user_id
      t.integer :post_id

      t.timestamps
    end
  end
end
