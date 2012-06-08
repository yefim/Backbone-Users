import os, json

from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/login')
def login():
  u = {
    'username': 'geoff',
    'password': 'password'
  }
  return json.dumps(u)

@app.route('/users')
def users():
  return ''

if __name__ == '__main__':
  port = os.environ.get('PORT', 3000)
  app.run(debug=True, port=port)
