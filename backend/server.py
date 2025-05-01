from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='*')  # Enables CORS for all origins

# Member API route
@app.route("/members", methods=['GET'])
def members():
    return jsonify({
        "members": [
            "Mem1",
            "Mem2",
            "Mem33"
        ]
    })

# Admin Dashboard API route
@app.route("/adminDashboard", methods=['GET'])
def admin_dashboard():
    total_reg_users = 250
    active_cases = 38
    closed_cases = 162
    return jsonify({
        'total_registered_users': total_reg_users,
        'active_cases': active_cases,
        'closed_cases': closed_cases
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)
