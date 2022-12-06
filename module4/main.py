import json
import requests
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/<keyword>')
def search(keyword):
    request = 'https://api.tvmaze.com/search/shows?q=' + keyword
    response = requests.get(request).json()
    print(json.dumps(response, indent=3))
    result_search = []
    for a in response:
        i = a.get('show').get('image')
        if i != None:
            img = i.get('medium')
        else:
            img = ""
        result = {
            'name': a["show"]["name"],
            'genres': a['show']['genres'],
            'url': a['show']['url'],
            'img': img,
            'summary': a['show']['summary']
                  }
        result_search.append(result)
    return result_search


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=8000)



