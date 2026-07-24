from fastapi import FastAPI, Request
from .logging_config import setup_logging
from .routers import enrich_epieos, enrich_phoneinfoga, enrich_intelx

app = FastAPI(title="WKT12 OSINT Dashboard API")
logger = setup_logging()

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info({"event": "request", "method": request.method, "url": str(request.url)})
    response = await call_next(request)
    logger.info({"event": "response", "status": response.status_code})
    return response

app.include_router(enrich_epieos.router, prefix="/api/enrich", tags=["epieos"])
app.include_router(enrich_phoneinfoga.router, prefix="/api/enrich", tags=["phoneinfoga"])
app.include_router(enrich_intelx.router, prefix="/api/enrich", tags=["intelx"])
