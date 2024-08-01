default: help

help:
	@echo "Dostępne polecenia:"
	@echo "   make start           - Uruchom wszystkie kontenery"
	@echo "   make stop            - Zatrzymaj wszystkie kontenery"
	@echo "   make restart         - Zrestartuj wszystkie kontenery"
	@echo "   make check           - Sprawdź, czy kontenery są uruchomione"

is-docker-running:
	@docker info > /dev/null 2>&1

start-docker-desktop:
	@if ! make is-docker-running; then \
		echo "Docker nie działa. Uruchamianie Docker Desktop..."; \
		open -a Docker; \
		echo "Proszę czekać na uruchomienie Docker Desktop..."; \
		secs=30; \
		while [ $$secs -gt 0 ]; do \
			echo -ne "$$secs\033[0K\r"; \
			sleep 1; \
			: $$((secs--)); \
		done; \
		echo ""; \
		echo "Docker Desktop uruchomiony."; \
	fi

start: start-docker-desktop
	@docker-compose up -d

stop:
	@docker-compose down

restart:
	@docker-compose restart

check:
	@docker ps | grep -E 'postgres-main'
    
.PHONY: start stop restart check help start-docker-desktop is-docker-running
