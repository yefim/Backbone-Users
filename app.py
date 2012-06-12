import os, simplejson

from flask import Flask, request, render_template
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:////tmp/bb.db')
db = SQLAlchemy(app)

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(100))
  password = db.Column(db.String(100))
  def __init__(self, username, password):
    self.username = username
    self.password = password

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/login')
def login():
  u = {
    'username': 'geoff',
    'password': 'password'
  }
  return simplejson.dumps(u)

@app.route('/users', methods=['POST', 'GET'])
def users():
  if request.method == 'POST':
    return ''
  elif request.method == 'GET':
    users = User.query.all()
    for user in users:
      del(user._sa_instance_state)
    return simplejson.dumps([u.__dict__ for u in users])

@app.route('/users/<user_id>', methods=['DELETE', 'POST', 'PUT'])
def user(user_id):
  if request.method == 'DELETE':
    user = User.query.filter_by(id=user_id).first()
    db.session.delete(user)
    db.session.commit()
    return simplejson.dumps(user_id)
  elif request.method =='PUT':
    data = simplejson.loads(request.data)
    user = User(data['username'], data['password'])
    db.session.add(user)
    db.session.commit()
    return simplejson.dumps(user.id)

if __name__ == '__main__':
  db.create_all()
  port = os.environ.get('PORT', 3000)
  app.run(debug=True, port=port)
