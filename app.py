from flask import Flask, render_template, request, jsonify
import joblib

# Load saved model and vectorizer
model = joblib.load("sentiment_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict-json", methods=["POST"])
def predict_json():
    data = request.get_json()
    review = data["review"]
    review_vector = vectorizer.transform([review])
    prediction = model.predict(review_vector)[0]
    sentiment = "Positive 😀" if prediction == 1 else "Negative 😞"
    return jsonify({"review": review, "prediction": sentiment})

if __name__ == "__main__":
    app.run(debug=True)
