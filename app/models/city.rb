class City < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :photo_url, presence: true
    has_many :posts
end