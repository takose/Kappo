module Grpc
end

grpc_libs = "#{Rails.root}/protos/lib/"
$LOAD_PATH.unshift(grpc_libs)

Dir.glob(grpc_libs + '**/*.rb').each { |f| require f }

grpc_services = "#{Rails.root}/app/services/grpc/**/*.rb"
Dir.glob(grpc_services).each { |f| require f }

