import requests
import time

# Free cricket API (example: cricapi or cricbuzz unofficial API)
API_URL = "https://cricapi.com/api/matches"
API_KEY = "your_api_key_here"  # Get a free key from cricapi.com

def get_cricket_alerts():
    try:
        response = requests.get(API_URL, params={"apikey": API_KEY})
        data = response.json()

        print("\n🏏 Live Cricket Alerts:")
        for match in data["matches"][:5]:  # show first 5 matches
            print(f"{match['team-1']} vs {match['team-2']} - {match['matchStarted']}")
    except Exception as e:
        print("Error fetching cricket data:", e)

# Run alerts every 30 seconds
while True:
    get_cricket_alerts()
    time.sleep(30)
