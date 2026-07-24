from fastapi import APIRouter
from ..models.enrichment import EnrichmentResult

router = APIRouter()

@router.post("/epieos")
def enrich_epieos(identifier: str):
    mock = {
        "google_account": True,
        "avatar_hash": "a94f3c1e",
        "initials": "UF",
        "linked_services": ["Skype", "Dropbox"],
        "breach_hits": ["HaveIBeenPwned"],
    }

    return EnrichmentResult(
        identifier=identifier,
        source="Epieos",
        stage="metadata_extraction",
        metadata=mock,
        confidence=0.82
    )
