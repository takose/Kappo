require 'grpc'
require 'active_support/all'

proto_lib_dir = "#{__dir__}/protos/lib/"
$LOAD_PATH.unshift(proto_lib_dir)
Dir.glob("#{proto_lib_dir}**/*.rb").each { |f| require f }

PORT = '127.0.0.1:8080'
INSECURE = :this_channel_is_insecure

svc = Coot::RecipeService::Stub.new(PORT, INSECURE)

# GetByUserID sample
req = Coot::GetByIdRequest.new(id: 1)

res = svc.get_by_id(req)
p res.recipe

# AddPaymentsRequest sample
req = Coot::CreateRecipeRequest.new(title: 'miso soup')

# res = svc.create_recipe(req)
# p res.recipe
