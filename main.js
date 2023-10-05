const sunday = document.querySelector(".board .inside .daysContainer .sunday")
const monday = document.querySelector(".board .inside .daysContainer .monday")
const tuesday = document.querySelector(".board .inside .daysContainer .tuesday")
const wednesday = document.querySelector(".board .inside .daysContainer .wednesday")
const thursday = document.querySelector(".board .inside .daysContainer .thursday")
const friday = document.querySelector(".board .inside .daysContainer .friday")
const saturday = document.querySelector(".board .inside .daysContainer .saturday")
const hours = document.querySelector(".board .inside .clock .hour .showNumber")
const minutes = document.querySelector(".board .inside .clock .minute .showNumber")
const seconds = document.querySelector(".board .inside .clock .second .showNumber")
const dates = document.querySelector(".board .inside .date")
const body = document.querySelector("body")
const nightModeButton = document.querySelector(".board .nightMode .nightModeChecker")

setInterval(() => {
  const time = new Date()

  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  const day = time.getDay()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

  sunday.classList.remove("selected")
  monday.classList.remove("selected")
  tuesday.classList.remove("selected")
  wednesday.classList.remove("selected")
  thursday.classList.remove("selected")
  friday.classList.remove("selected")
  saturday.classList.remove("selected")

  switch (day) {
    case 0: {
      sunday.classList.add("selected")

      break
    }

    case 1: {
      monday.classList.add("selected")

      break
    }

    case 2: {
      tuesday.classList.add("selected")

      break
    }

    case 3: {
      wednesday.classList.add("selected")

      break
    }

    case 4: {
      thursday.classList.add("selected")

      break
    }

    case 5: {
      friday.classList.add("selected")

      break
    }

    case 6: {
      saturday.classList.add("selected")

      break
    }
  }

  hours.innerHTML = betterNumber(hour)
  minutes.innerHTML = betterNumber(minute)
  seconds.innerHTML = betterNumber(second)

  dates.innerHTML = `${year} / ${month} / ${date}`

  if (nightModeButton.checked) {
    body.classList.add("nightMode")
  } else {
    body.classList.remove("nightMode")
  }
})

const betterNumber = (number) => {
  if (number < 10) number = `0${number}`

  return number
}