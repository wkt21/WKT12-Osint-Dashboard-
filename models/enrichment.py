from pydantic import BaseModel
from typing import List, Optional

class EnrichmentResult(BaseModel):
    identifier: str
    source: str
    stage: str
    metadata: dict
    confidence: float
