# 🎬 IMDB Movie Sentiment Analysis App 🍿

[**Live Demo 🚀**](https://movie-sentiment-app-1.onrender.com/)

A **Python Flask web app** that predicts the **sentiment** of movie reviews as **Positive 👍**, **Negative 👎**, or **Neutral 😐** using a **pre-trained machine learning model** and **TF-IDF vectorizer**.

![Movie Sentiment GIF](https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif)

---

## ✨ Features

- Predict sentiment of **any movie review text** 🎥
- Clean and **user-friendly interface** 🖥️
- Built with **Python Flask** 🐍
- **Fast predictions** using a pre-trained model ⚡
- **Deployment-ready** on Render 🌐
- Ideal for **portfolio, learning NLP, and sentiment analysis** 📊

---

## 🛠️ Installation (Local Setup)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Amanyadav-07/movie-sentiment-app.git
    cd movie-sentiment-app
    ```
2. **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # Mac/Linux
    source venv/bin/activate
    ```
3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4. **Run the Flask app:**
    ```bash
    python app.py
    ```
5. **Open in browser:**
    ```
    http://127.0.0.1:5000/
    ```

---

## 🎯 Usage

- Enter any movie review in the text box.
- Click **Submit**.
- Get the **predicted sentiment** instantly — with animated feedback!

---

## 🌐 Deployment

The app is deployed on Render. Try it here:  
[https://movie-sentiment-app-1.onrender.com/](https://movie-sentiment-app-1.onrender.com/)

Deployment uses:
- `Procfile`
- `runtime.txt`
- GitHub integration

---

## 📂 File Structure

```plaintext
movie-sentiment-app/
│
├── app.py                   # Flask application
├── sentiment_model.pkl      # Pre-trained sentiment model
├── tfidf_vectorizer.pkl     # TF-IDF vectorizer
├── templates/               # HTML files
├── static/                  # CSS/JS files
├── requirements.txt         # Project dependencies
├── Procfile                 # Deployment configuration
├── runtime.txt              # Python version for deployment
└── README.md                # Project documentation
```

---

## ⚙️ Tech Stack

- Python 🐍
- Flask 🌐
- HTML / CSS / JS 🎨
- Machine Learning (scikit-learn) 🤖
- TF-IDF Vectorizer ✍️
- Render Deployment 🚀

---

## 📈 Example Output

| Review                         | Predicted Sentiment |
|---------------------------------|:-------------------:|
| "The movie was fantastic!"      | Positive 👍         |
| "It was okay, nothing special." | Neutral 😐          |

---

## 📜 License

This project is licensed under the MIT License 📝.

---

## 💡 Tips for Making It Outstanding

- Add GIFs for live predictions (use Giphy or record your own).
- Use badges for Python version, Flask, and build status.
- Add an animated demo GIF of the app workflow.
- Make your portfolio pop with interactive visuals!

---

⭐ Made with ❤️ by Aman Yadav
