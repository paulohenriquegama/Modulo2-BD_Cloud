from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/", methods=('GET','POST'))
def home():
    if request.method == 'POST':
        nome = request.form['nome']
        sobrenome = request.form['sobrenome']
        sexo = request.form['sexo']
        check = request.form.getlist('check')
        print(nome)
        print(sexo)
        for i in check:
            print(i)
        print(type(check))
        return render_template("index2.html")

    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)