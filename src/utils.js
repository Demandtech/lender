const formatDate = (strdate) => {
  const date = new Date(strdate)
const formattedDate = date.toLocaleString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return formattedDate
}

const formatNumber = (strNumber)=> {
 
 const formattedNumber = `(${strNumber
   .replace(/[^\d]/g, '')
   .slice(1, 4)}) ${strNumber.replace(/[^\d]/g, '').slice(4, 7)}-${strNumber
   .replace(/[^\d]/g, '')
   .slice(7, 11)}`

   return formattedNumber

}

const shorttenStr = (str) => {
 let firstWord = str.split('-')[0]
 return firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
}

const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(number)
  return newNumber
}


export {formatDate, formatNumber, formatPrice, shorttenStr}