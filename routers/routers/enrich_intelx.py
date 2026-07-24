from fastapi import APIRouter
from ..models.enrichment import EnrichmentResult

router = APIRouter()

@router.post("/intelx")
def enrich_intelx(identifier: str):
    mock = {
        "breaches": ["Collection #1", "ExploitDB dump"],
        "dark_web_mentions": 2,
        "historical_records": ["2018 breach", "2020 credential leak"],
        "pivot_nodes": ["username:unitedfox", "email:alt@example.com"]
    }

    return EnrichmentResult(
        identifier=identifier,
        source="IntelX",
        stage="deep_osint",
        metadata=mock,
        confidence=0.77
    )
