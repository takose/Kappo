class Grpc::RecipeService < Coot::RecipeService::Service
  def get_by_id(req, _call)
    recipe = Recipe.find(req.id)
    if recipe.present?
      Coot::GetByIdResponse.new(recipe: recipe.to_proto)
    else
      raise GRPC::BadStatus.new_status_exception(
        GRPC::Core::StatusCodes::ABORTED,
        "Wallet(user_id=#{user_id}) isn't found.",
      )
    end
  end

  def create_recipe(req, _call)
    recipe = Recipe.create(title: req.title)
    Coot::CreateRecipeResponse.new(recipe: recipe.to_proto)
  end
end
