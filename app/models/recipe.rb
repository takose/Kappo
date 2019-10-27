class Recipe < ApplicationRecord
  def to_proto
    Coot::Recipe.new(
      id: id,
      title: title,
    )
  end
end
