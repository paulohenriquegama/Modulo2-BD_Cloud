from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    return humor("serio")

@app.route("/<humor>")
def humor(humor):
    name = "Godofredo"
    if humor == "serio":
        serio = True
    else:
        serio = False
    idade = 50
    

    return render_template("index.html",
    name = name,
    idade = idade,
    serio = serio,
    humor = humor
    )

if __name__ == "__main__":
    app.run(debug=True)