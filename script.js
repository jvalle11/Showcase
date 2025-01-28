const snowflakesContainer = document.querySelector('.snowflakes');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 6}s`;
  snowflakesContainer.appendChild(snowflake);
}

for (let i = 0; i < 500; i++) {
  createSnowflake();
}
