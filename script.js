const button = document.querySelector(".hero__left-form-button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputName = document.querySelector("#name");
    const name = inputName.value;

    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const mail = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(!!name && !!gender && !!mail && !!password){
        const card = document.createElement("div");
        card.className = "hero__right-card";

        const cardContent = document.createElement("div");
        cardContent.className = "hero__right-card-content";

        //Левый блок
        const leftColumnCard = document.createElement("div");
        leftColumnCard.className = "hero__right-card-content-column";
        
        const parName = document.createElement("p");
        parName.textContent = (`Name: ${name}`);

        const parMail = document.createElement("p");
        parMail.textContent = (`E-mail: ${mail}`);

        leftColumnCard.appendChild(parName);
        leftColumnCard.appendChild(parMail);
        cardContent.appendChild(leftColumnCard);

        
        //Правый блок
        const rightColumnCard = document.createElement("div");
        rightColumnCard.className = "hero__right-card-content-column";

        const parGender = document.createElement("p");
        parGender.textContent = (`Gender: ${gender}`);

        const parPass = document.createElement("p");
        parPass.textContent = (`Password: ${password}`);

        rightColumnCard.appendChild(parGender);
        rightColumnCard.appendChild(parPass);
        cardContent.appendChild(rightColumnCard);

        card.appendChild(cardContent);


        //Блок кнопок
        const buttonBlock = document.createElement("div");
        buttonBlock.className = "hero__right-card-buttons";

        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.className = "hero__right-card-buttons-button";

        const buttonRemowe = document.createElement("button");
        buttonRemowe.textContent = "Remowe";
        buttonRemowe.className = "hero__right-card-buttons-button";

        buttonBlock.appendChild(buttonEdit);
        buttonBlock.appendChild(buttonRemowe);
        card.appendChild(buttonBlock);


        const finalBlock = document.querySelector(".hero__right");
        finalBlock.appendChild(card);


        //Функционал кнопки удалить
        buttonRemowe.addEventListener("click", () => {
            card.remove();
        });

    };
});