# WKT12-Osint-Dashboard-
Track, Trace email, Phones and Case Id's

<img width="1536" height="1024" alt="IMG_3802" src="https://github.com/user-attachments/assets/463cc511-282b-49d0-beeb-365e0d1a80e1" />


A dark, gold‑accented, SOC‑style **phone & email intelligence dashboard** for OSINT investigations, built for the WKT12 ecosystem.

## Features

- **Case & Identifier Panel**  
  Track email, phone, and case IDs in one place.

- **Pivot Workflow View**  
  Visual stages: Identifier → Metadata → Telecom → Deep OSINT → Cross‑platform → Identity Graph.

- **OSINT Tool Directory**  
  One‑click access to:
  - Epieos
  - PhoneInfoga
  - IntelX
  - Truecaller
  - And the rest of your 19‑tool set.

- **Identity Graph Panel**  
  Visual link analysis between:
  - Emails
  - Phone numbers
  - Breach hits
  - Social profiles
  - Usernames

- **Elastic Logging Integration**  
  All enrichment calls and pivots are logged to Elasticsearch for audit and case reconstruction.

## Tech Stack

- **Frontend:** React + TypeScript + TailwindCSS  
- **Backend:** FastAPI (Python)  
- **Data:** MongoDB (cases, identifiers, enrichments)  
- **Graph:** Cytoscape.js (identity graph visualization)  
- **Logging:** Elastic Stack (Filebeat → Logstash → Elasticsearch → Kibana)  
- **Reverse Proxy:** Nginx  
- **Containerization:** Docker & docker‑compose (Swarm‑ready)

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (3.11+)
- Docker & docker‑compose

### 1. Clone the repo

```bash
git clone https://github.com/your-user/wkt12-osint-dashboard.git
cd wkt12-osint-dashboard
