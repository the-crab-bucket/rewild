prod-b: prod-down prod-pull prod-build prod-up
dev-b: dev-down dev-pull dev-build dev-up

prod-up:
	docker-compose --profile prod -f src/rewild-official/docker-compose.yml up -d

prod-pull:
	docker-compose --profile prod -f src/rewild-official/docker-compose.yml	pull 

prod-build:
	docker-compose --profile prod -f src/rewild-official/docker-compose.yml build 

prod-down:
	docker-compose --profile prod -f src/rewild-official/docker-compose.yml down	


dev-up:
	docker-compose --profile dev -f src/rewild-official/docker-compose.yml up -d

dev-pull:
	docker-compose --profile dev -f src/rewild-official/docker-compose.yml	pull 

dev-build:
	docker-compose --profile dev -f src/rewild-official/docker-compose.yml build 

dev-down:
	docker-compose --profile dev -f src/rewild-official/docker-compose.yml down	
