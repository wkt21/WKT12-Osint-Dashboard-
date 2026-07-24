wkt12-osint-dashboard/
├─ README.md
├─ package.json
├─ yarn.lock            # or package-lock.json if you prefer npm
├─ .gitignore
├─ docker-compose.yml
├─ backend/
│  ├─ app/
│  │  ├─ main.py
│  │  ├─ logging_config.py
│  │  ├─ routers/
│  │  │  ├─ enrich_epieos.py
│  │  │  ├─ enrich_phoneinfoga.py
│  │  │  ├─ enrich_intelx.py
│  │  └─ models/
│  │     ├─ case.py
│  │     ├─ enrichment.py
│  ├─ requirements.txt
│  ├─ Dockerfile
├─ frontend/
│  ├─ public/
│  │  ├─ index.html
│  │  └─ wkt12-banner.png   # the GitHub-style image you requested
│  ├─ src/
│  │  ├─ index.tsx
│  │  ├─ App.tsx
│  │  ├─ components/
│  │  │  ├─ CasePanel.tsx
│  │  │  ├─ PivotWorkflow.tsx
│  │  │  ├─ ToolDirectory.tsx
│  │  │  ├─ IdentityGraph.tsx
│  │  └─ styles/
│  │     ├─ tailwind.css
│  ├─ tsconfig.json
│  ├─ Dockerfile
├─ infra/
│  ├─ elastic/
│  │  ├─ docker-compose.elastic.yml
│  │  ├─ logstash.conf
│  │  └─ filebeat.yml
│  └─ nginx/
│     ├─ nginx.conf
│     └─ Dockerfile
