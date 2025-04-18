document.addEventListener('DOMContentLoaded', () => {
  const questionElement = document.getElementById('question');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit');
  const feedbackElement = document.getElementById('feedback');

  const correctAnswer = 2; // 固定答案為 2

  // 設定固定題目
  function setQuestion() {
    questionElement.textContent = '請計算：1 + 1 = ?';
    answerInput.value = ''; // 清空輸入框
    feedbackElement.textContent = ''; // 清空回饋
  }

  // 檢查答案
  submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value, 10);
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = '答對了！🎉';
      feedbackElement.style.color = 'green';
    } else {
      feedbackElement.textContent = '答錯了，再試一次！';
      feedbackElement.style.color = 'red';
    }
  });

  // 初始化題目
  setQuestion();
});