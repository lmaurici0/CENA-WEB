from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/home')
def index():
    return render_template("index.html")

@app.route('/cadaster')
def cadaster():
    return render_template("cadaster.html")

@app.route('/404')
def error():
    return render_template('error404.html')

if __name__ == '__main__':
    app.run(debug=True)
