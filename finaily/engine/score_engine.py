"""
Finaily Score Engine

Combines research signals into a simple explainable investment intelligence score.
This is not a price prediction model. It evaluates research quality and opportunity signals.
"""


def calculate_finaily_score(discovery_score: int, policy_score: int, theme_score: int) -> dict:
    """Return an explainable Finaily Score."""
    score = round(
        discovery_score * 0.4
        + policy_score * 0.25
        + theme_score * 0.35
    )

    return {
        "score": score,
        "components": {
            "discovery": discovery_score,
            "policy": policy_score,
            "theme": theme_score,
        },
    }


if __name__ == "__main__":
    print(calculate_finaily_score(92, 80, 90))
