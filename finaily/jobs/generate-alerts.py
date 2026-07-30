from dataclasses import dataclass


@dataclass
class Alert:
    symbol: str
    alert_type: str
    message: str


def generate_alerts(previous_score: int, current_score: int, symbol: str):
    alerts = []

    if current_score - previous_score >= 5:
        alerts.append(
            Alert(
                symbol=symbol,
                alert_type="score_change",
                message=f"{symbol} AI Score increased significantly"
            )
        )

    return alerts
