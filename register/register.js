import { participantTemplate, successTemplate } from "./Templates.mjs"

let participantCount = 1
const addButtonElement = document.querySelector("#add")
const submitButton = document.querySelector("#submitButton")
const summary = document.querySelector("#summary")

const info = {
    adult_name: "",
    participant_count: "",
    fee_total: "",
}

function addParticipant() {
    participantCount++
    const html = participantTemplate(participantCount)
    addButtonElement.insertAdjacentHTML("beforebegin", html)
}

function submitForm(event) {
    event.preventDefault();
    
    info.participant_count = participantCount
    
    const feeTotal = totalFees()
    info.fee_total = feeTotal
    
    const adultName = document.querySelector("#adult_name").value
    info.adult_name = adultName
    
    const form = document.querySelector("form")
    form.classList.add("hide")
    
    summary.innerHTML = successTemplate(info)
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    const values = feeElements.map(input => input.valueAsNumber)
    const total = values.reduce((acc, num) => acc + num, 0)

    return total
}

addButtonElement.addEventListener("click", addParticipant)
submitButton.addEventListener("click", submitForm)