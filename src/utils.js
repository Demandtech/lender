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


export {formatDate, formatNumber}