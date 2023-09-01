## link  mongoose.connect("mongodb://mongo-alias:27017/todos") --- alias name 
docker build . -t todo-app
docker pull mongo
docker run ---name mongo-server -p 27017:27017 -d mongo
docker run --link mongo-server:mongo-alias -p 4000:4000 -d todo-app

## network mongoose.connect("mongodb://mongo-server:27017/todos") -- container name
docker network create --drive bridge --submit 182.18.0.1/24 --gateway 182.18.0.1 custom-network
docker run --name mongo-server --net custom-network -d mongo
docker run --net custom-network -p 4000:4000 todo-app

