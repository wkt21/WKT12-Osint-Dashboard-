from fastapi import APIRouter
from ..models.enrichment import EnrichmentResult

router = APIRouter()

@router.post("/phoneinfoga")
def enrich_phoneinfoga(identifier: str):
    mock = {
        "carrier": "Verizon Wireless",
        "line_type": "mobile",
        "location": "Steubenville, OH",
        "risk_score": 0.12,
        "valid": True
    }

    return EnrichmentResult(
        identifier=identifier,
        source="PhoneInfoga",
        stage="telecom_recon",
        metadata=mock,
        confidence=0.91
    )
