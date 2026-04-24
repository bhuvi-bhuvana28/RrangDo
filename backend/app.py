from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import json

app = Flask(__name__)
CORS(app)

# ✅ DATABASE CONNECTION
db = mysql.connector.connect(
    host="localhost",
    user="testuser",
    password="test123",
    database="rrangdo",
    autocommit=True
)

cursor = db.cursor(dictionary=True)


# ===============================
# HOME
# ===============================
@app.route('/')
def home():
    return "Backend Running 🚀"

# ===============================
# CREATE ORDER
# ===============================
@app.route('/create_order', methods=['POST'])
def create_order():
    try:
        data = request.get_json(force=True)

        total = float(data.get('total', 0))
        address = str(data.get('address', {}))
        items = str(data.get('items', []))

        cursor.execute(
            "INSERT INTO orders (total, status, address, items) VALUES (%s, %s, %s, %s)",
            (total, "Pending", address, items)
        )

        db.commit()

        return jsonify({"message": "Order Created ✅"})

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)})
# ===============================
# UPDATE STATUS
# ===============================
@app.route('/update_status', methods=['POST'])
def update_status():
    data = request.json

    cursor.execute(
        "UPDATE orders SET status=%s WHERE id=%s",
        (data['status'], data['order_id'])
    )

    return jsonify({"message": "Updated ✅"})


# ===============================
# GET ORDERS (🔥 MISSING API)
# ===============================
@app.route('/orders', methods=['GET'])
def get_orders():
    cursor.execute("SELECT * FROM orders")
    rows = cursor.fetchall()

    orders_list = []

    for row in rows:
        orders_list.append({
            "id": row["id"],
            "total": row["total"],
            "status": row["status"],
            "address": eval(row["address"]) if row["address"] else {},
            "items": eval(row["items"]) if row["items"] else []
        })

    return jsonify(orders_list)
# ===============================
# SAVE ADDRESS
# ===============================
@app.route('/save_address', methods=['POST'])
def save_address():
    data = request.json

    cursor.execute(
        "INSERT INTO addresses (name, phone, street, city) VALUES (%s, %s, %s, %s)",
        (data['name'], data['phone'], data['street'], data['city'])
    )

    return jsonify({"message": "Address saved"})

# ===============================
# GET ADDRESSES
# ===============================
@app.route('/get_addresses', methods=['GET'])
def get_addresses():
    cursor.execute("SELECT * FROM addresses")
    rows = cursor.fetchall()

    result = []

    for row in rows:
        result.append({
            "id": row["id"],
            "name": row["name"],
            "city": row["city"]
        })

    return jsonify(result)

# ===============================
# RUN (ALWAYS LAST 🔥)
# ===============================
if __name__ == '__main__':
    app.run(debug=True)