from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        return render_template("success.html", name=name, email=email)

    return render_template("login.html")


if __name__ == "__main__":
    app.run(debug=True)