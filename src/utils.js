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
 
   var cleaned = strNumber.replace(/\D/g, '')
   var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
   if (match) {
     var intlCode = match[1] ? '1 ' : ''
     return [intlCode + '(', match[2], ') ', match[3], '-', match[4]].join('')
   }
   return strNumber
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