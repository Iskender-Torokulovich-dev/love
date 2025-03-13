document.addEventListener("DOMContentLoaded", function () {
    // Создаём контейнер карточки
    const profileCard = document.createElement("div");
    profileCard.style.cssText = `
        background-color:  rgb(3, 161, 153);
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        font-family: Arial, sans-serif;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

  // Фото профиля
  const profileImage = document.createElement('img');
   let profileimag1 = document.querySelector('image')
   profileimag1.style.img = './img/isko.jpg'
  profileImage.style.cssText = `
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid white;
      
  `;


    

    // Имя пользователя
    const name = document.createElement("h2");
    name.textContent = "Erkebaev Iskender ";
    name.style.color = "#333";
    name.style.margin = "10px 0";
    name.style.fontFamily = "Franklin "

    // Описание профессии
    const jobTitle = document.createElement("p");
    jobTitle.textContent = "Frontend Developer";
    jobTitle.style.color = "#555";
    jobTitle.style.fontSize = "14px";
    jobTitle.style.marginBottom = "15px";

    // Контейнер статистики
    const statsContainer = document.createElement("div");
    statsContainer.style.cssText = `
        display: flex;
        justify-content: space-around;
        margin: 15px 0;
    `;

    // Функция для создания блока статистики
    function createStat(title, value) {
        const stat = document.createElement("div");
        const statTitle = document.createElement("p");
        statTitle.textContent = title;
        statTitle.style.color = "#333";
        statTitle.style.fontSize = "12px";
        statTitle.style.margin = "0";

        const statValue = document.createElement("p");
        statValue.textContent = value;
        statValue.style.color = "#111";
        statValue.style.fontSize = "14px";
        statValue.style.margin = "0";

        stat.appendChild(statTitle);
        stat.appendChild(statValue);
        return stat;
    }

    statsContainer.appendChild(createStat("Following", "1k"));
    statsContainer.appendChild(createStat("Followers", "8k"));
    statsContainer.appendChild(createStat("Posts", "500"));

    // Кнопка "Send Message"
    const sendMessageBtn = document.createElement("button");
    sendMessageBtn.textContent = "Send Message";
    sendMessageBtn.style.cssText = `
        background-color: #004d4d;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
        width: 90%;
        cursor: pointer;
        transition: 0.3s;
    `;
    sendMessageBtn.addEventListener("mouseenter", () => {
        sendMessageBtn.style.backgroundColor = "#006666";
    });
    sendMessageBtn.addEventListener("mouseleave", () => {
        sendMessageBtn.style.backgroundColor = "#004d4d";
    });

    // Кнопка "Follow Request"
    const followRequestBtn = document.createElement("button");
    followRequestBtn.textContent = "Follow Request";
    followRequestBtn.style.cssText = `
        background-color: #004d4d;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
        width: 90%;
        cursor: pointer;
        transition: 0.3s;f
    `;
    followRequestBtn.addEventListener("mouseenter", () => {
        followRequestBtn.style.backgroundColor = "#006666";
    });
    followRequestBtn.addEventListener("mouseleave", () => {
        followRequestBtn.style.backgroundColor = "#004d4d";
    });

    // Добавляем элементы в карточку
    profileCard.appendChild(profileImage);
    profileCard.appendChild(name);
    profileCard.appendChild(jobTitle);
    profileCard.appendChild(statsContainer);
    profileCard.appendChild(sendMessageBtn);
    profileCard.appendChild(followRequestBtn);

    // Добавляем карточку в `body`
    document.body.style.backgroundColor = "#1a3c40";
    document.body.appendChild(profileCard);
});