document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('predict-form');
  const reviewText = document.getElementById('review-text');
  const resultArea = document.getElementById('result-area');
  const loader = document.getElementById('loader');
  const resultCard = document.getElementById('result-card');
  const sampleBtn = document.getElementById('sample-btn');

  // 🔹 Sample reviews
  const samples = [
    "An absolute masterpiece with stunning visuals!",
    "Terrible. Waste of time. The story was boring.",
    "Not bad, but the pacing was slow in parts.",
    "A fun watch! Loved the soundtrack and acting.",
    "Worst movie ever, I regret watching it."
  ];

  // When clicking 'Try sample'
  sampleBtn.addEventListener('click', () => {
    const randomReview = samples[Math.floor(Math.random() * samples.length)];
    reviewText.value = randomReview;
  });

  // Handle form submit via AJAX
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const review = reviewText.value.trim();
    if (!review) return;

    // Show loader
    resultArea.classList.remove('hidden');
    loader.classList.remove('hidden');
    resultCard.classList.add('hidden');

    try {
      const res = await fetch("/predict-json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ review })
      });
      const data = await res.json();

      // Hide loader, show prediction
      loader.classList.add('hidden');
      resultCard.classList.remove('hidden');
      resultCard.classList.add('animate__fadeInUp');
      resultCard.innerHTML = `
        <span class="badge ${data.prediction.includes("Positive") ? "positive" : "negative"}">
          ${data.prediction}
        </span>
        <p>${data.review}</p>
      `;
    } catch (err) {
      loader.classList.add('hidden');
      resultCard.classList.remove('hidden');
      resultCard.innerHTML = `<span class="badge negative">Error 😞</span><p>Prediction failed.</p>`;
    }
  });
});
