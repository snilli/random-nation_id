function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const randomNationId = times => {
  let status = false
  const badNationid = []
  let goodNationid = []

  while (goodNationid.length !== times) {
    let currentGood = ''
    while (status === false) {
      const currentNationId = getRandomInt(
        1000000000000,
        1999999999999
      ).toString()

      const sameNationId = badNationid.filter(item => item === currentNationId)
      if (sameNationId.length >= 1) {
        continue
      }

      const reducer = (accumulator, currentValue, currentIndex) =>
        currentIndex < currentNationId.length - 1
          ? accumulator + parseFloat(currentValue) * (13 - currentIndex)
          : accumulator

      const sum = Array.from(currentNationId).reduce(reducer, 0)

      const ok =
        (11 - (sum % 11)) % 10 === parseFloat(currentNationId.charAt(12))
      if (ok) {
        status = true
        currentGood = currentNationId
      } else {
        badNationid.push(currentNationId)
      }
    }

    status = false
    goodNationid.push(currentGood)
  }

  return { id: goodNationid, times: badNationid.length }
}

export default randomNationId
// console.log('counter random ', badNationid.length, ' times')
// console.log('You can use \n', goodNationid)
