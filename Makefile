.DEFAULT_GOAL := help
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean:
	rm -rf node_modules dist

setup: clean
	npm install

build:
	npm run build
	
start: build
	open ./dist/index.html

test:
	npm run test

dkr-setup:
	docker build -t capculator:v1 .

dkr-start:
	docker run -d -p 7000:80 capculator:v1 && open 'http://localhost:7000'
