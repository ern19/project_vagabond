class City < ApplicationRecord
    has_many :posts, dependant: :destroy
end
