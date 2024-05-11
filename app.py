from flask import Flask, request, jsonify

app = Flask(__name__)

users = {
    "user1": {"username": "Dmitrii", "password": "1234", "role": "user"},
    "user2": {"username": "Artem", "password": "1234", "role": "user"},
    "admin": {"username": "admin", "password": "admin", "role": "admin"}
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = users.get(username)
    if user and user['password'] == password:
        # Генерируем токен доступа (здесь можно использовать JWT, например)
        access_token = generate_access_token(user)
        return jsonify({'success': True, 'role': user['role'], 'access_token': access_token})
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'})

def generate_access_token(user):
    # В данном примере просто возвращаем имя пользователя в качестве токена доступа
    return user['username']

if __name__ == '__main__':
    app.run(debug=True)
