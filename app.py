from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Veri
data = {
    "students": ["Ali Veli - Sınıf: 10", "Ayşe Yılmaz - Sınıf: 11", "Hasan Kaya - Sınıf: 12"],
    "teachers": ["Mehmet Demir - Matematik", "Fatma Ak - Kimya", "Ahmet Yıldız - Fizik"]
}

# Ana sayfa
@app.route("/")
def index():
    return render_template("index.html", data=data)

# Listeyi filtreleme
@app.route("/filter", methods=["POST"])
def filter_list():
    section_id = request.json.get("sectionId")
    query = request.json.get("query", "").lower()
    
    if section_id in data:
        filtered_items = [item for item in data[section_id] if query in item.lower()]
        return jsonify(filtered_items)
    return jsonify([])

if __name__ == "__main__":
    app.run(debug=True)
