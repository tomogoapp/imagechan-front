# Nombre del proyecto, útil si quieres tener varios proyectos en el mismo entorno
PROJECT_NAME=imageboard-chan

# Comandos para manejar los contenedores Docker
up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose up --build

logs:
	docker-compose logs -f

ps:
	docker-compose ps

restart:
	docker-compose down && docker-compose up -d

clean:
	docker-compose down -v --rmi all --remove-orphans

rebuild:
	docker-compose down -v --rmi all --remove-orphans && docker-compose up --build -d