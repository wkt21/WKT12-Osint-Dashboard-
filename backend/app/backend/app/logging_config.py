import logging
from pythonjsonlogger import jsonlogger

def setup_logging():
    logger = logging.getLogger("wkt12")
    logger.setLevel(logging.INFO)
    handler = logging.StreamHandler()
    formatter = jsonlogger.JsonFormatter()
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger
