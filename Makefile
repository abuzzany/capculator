.DEFAULT_GOAL := help
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Remove node_modules and dist directories
	rm -rf node_modules dist

setup: clean ## Install dependencies
	npm install

build: ## Build the project
	npm run build
	
start: build ## Start and lunch the project on the browser
	open ./dist/index.html

test: ## Run suit test
	npm run test

dkr-setup: ## Build dockerfile and install the project
	docker build -t capculator:v1 .

dkr-start: ## Start and lunch the project on the browser based of a docker container
	docker run -d -p 7000:80 capculator:v1 && open 'http://localhost:7000'
