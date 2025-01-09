from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "supersecretkey"  # Flash mesajları için gerekli

# Öğrenciler listesi (geçici olarak bellekte saklanır)
students = []

@app.route("/")
def index():
    return render_template("index.html", students=students)

@app.route("/add-student", methods=["GET", "POST"])
def add_student():
    if request.method == "POST":
        adi = request.form.get("adi")
        soyadi = request.form.get("soyadi")
        sinif = request.form.get("sinif")
        
        # Yeni öğrenci ekleme
        new_student = {"adi": adi, "soyadi": soyadi, "sinif": sinif}
        students.append(new_student)

        flash(f"Öğrenci Eklendi! Adı: {adi}, Soyadı: {soyadi}, Sınıf: {sinif}")
        return redirect(url_for("index"))
    return render_template("add_student.html")

if __name__ == "__main__":
    app.run(debug=True)
